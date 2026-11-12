import * as THREE from 'three';
import { skyGLSL, skyUniforms } from './sky.js';
import { TB, heightAt } from './terrain.js';

// Gerstner wave set (direction xz toward the shore is +z). Shared by GPU and CPU so boats ride the same swell.
export const WAVES = [
  { d: [0.12, 1], A: 0.55, L: 42, Q: 0.55 },
  { d: [-0.38, 1], A: 0.36, L: 23, Q: 0.5 },
  { d: [0.55, 0.85], A: 0.22, L: 13.5, Q: 0.45 },
  { d: [-0.7, 0.6], A: 0.12, L: 7.7, Q: 0.4 },
  { d: [0.25, 1], A: 0.07, L: 4.2, Q: 0.3 },
];
for (const w of WAVES) { const l = Math.hypot(w.d[0], w.d[1]); w.d = [w.d[0] / l, w.d[1] / l]; w.k = 2 * Math.PI / w.L; w.c = Math.sqrt(9.8 / w.k); }
const att = (depth) => 0.18 + 0.82 * Math.min(1, Math.max(0, (depth - 0.3) / 9));
// CPU height of the sea surface (y) at x,z.
export function waveAt(x, z, t) {
  const depth = -heightAt(x, z); const s = depth < -0.5 ? 0 : att(depth);
  let y = 0; for (const w of WAVES) { const f = w.k * (w.d[0] * x + w.d[1] * z - w.c * t); y += w.A * Math.sin(f); }
  return y * s;
}

export function makeHeightTex(res) {
  const W = res, H = Math.round(res * (TB.z1 - TB.z0) / (TB.x1 - TB.x0));
  const data = new Uint8Array(W * H * 4);
  for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
    const x = TB.x0 + (i + 0.5) / W * (TB.x1 - TB.x0), z = TB.z0 + (j + 0.5) / H * (TB.z1 - TB.z0);
    const h = Math.max(-24, Math.min(8, heightAt(x, z))); data[(j * W + i) * 4] = Math.round((h + 24) / 32 * 255); data[(j * W + i) * 4 + 3] = 255;
  }
  const t = new THREE.DataTexture(data, W, H, THREE.RGBAFormat, THREE.UnsignedByteType);
  t.minFilter = t.magFilter = THREE.LinearFilter; t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; t.needsUpdate = true;
  return t;
}

function grid(nx, nz) {
  // non-uniform grid: dense near the beach, very coarse to the horizon
  const xs = []; for (let i = -nx; i <= nx; i++) { const s = i / nx; xs.push(Math.sign(s) * (Math.pow(Math.abs(s), 2.6) * 5200 + Math.abs(s) * 380)); }
  const zs = []; for (let j = 0; j <= nz; j++) { const s = j / nz; zs.push(80 - (Math.pow(s, 2.8) * 6500 + s * 420)); }
  const g = new THREE.BufferGeometry(); const pos = new Float32Array(xs.length * zs.length * 3); let p = 0;
  for (const z of zs) for (const x of xs) { pos[p++] = x; pos[p++] = 0; pos[p++] = z; }
  const idx = []; const W = xs.length;
  for (let j = 0; j < zs.length - 1; j++) for (let i = 0; i < W - 1; i++) { const a = j * W + i, b = a + 1, c = a + W, d = c + 1; idx.push(a, b, c, b, d, c); }
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setIndex(idx);
  g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e5);
  return g;
}

export function makeOcean(A, heightTex, sun, sunCol, fogCol, quality) {
  const nt = A.tex.waternormals; nt.wrapS = nt.wrapT = THREE.RepeatWrapping; nt.anisotropy = 4; nt.needsUpdate = true;
  const ft = A.tex.fx_foam; ft.wrapS = ft.wrapT = THREE.RepeatWrapping; ft.needsUpdate = true;
  const wv = WAVES.map((w) => new THREE.Vector4(w.d[0], w.d[1], w.A, w.Q));
  const wk = WAVES.map((w) => new THREE.Vector2(w.k, w.c));
  const u = {
    ...skyUniforms(A.tex.sky_bg), time: { value: 0 }, nTex: { value: nt }, foamTex: { value: ft }, hTex: { value: heightTex },
    hB: { value: new THREE.Vector4(TB.x0, TB.z0, TB.x1 - TB.x0, TB.z1 - TB.z0) }, sunDir: { value: sun.clone() }, sunCol: { value: sunCol.clone() },
    fogCol: { value: fogCol.clone() }, fogDen: { value: 0.00028 }, wv: { value: wv }, wk: { value: wk },
  };
  const NW = WAVES.length;
  const mat = new THREE.ShaderMaterial({
    uniforms: u, transparent: true, depthWrite: true,
    vertexShader: /* glsl */`
      uniform float time; uniform vec4 wv[${NW}]; uniform vec2 wk[${NW}]; uniform sampler2D hTex; uniform vec4 hB;
      varying vec3 vWP; varying vec3 vN; varying float vCrest;
      float depthAt(vec2 p){ vec2 uv = (p - hB.xy) / hB.zw; if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return 40.0; return 24.0 - texture2D(hTex, uv).r * 32.0; }
      void main(){
        vec3 p = position; float dep = depthAt(p.xz);
        float s = 0.18 + 0.82 * clamp((dep - 0.3) / 9.0, 0.0, 1.0);
        vec3 d = vec3(0.0); vec3 n = vec3(0.0, 1.0, 0.0); float crest = 0.0;
        for (int i = 0; i < ${NW}; i++) {
          vec4 w = wv[i]; float k = wk[i].x; float c = wk[i].y; float A = w.z * s;
          float f = k * (dot(w.xy, p.xz) - c * time); float cf = cos(f), sf = sin(f);
          float Q = w.w / (k * max(w.z, 0.001) * ${NW}.0);
          d.x += Q * A * w.x * cf; d.z += Q * A * w.y * cf; d.y += A * sf;
          n.x -= w.x * k * A * cf; n.z -= w.y * k * A * cf; n.y -= Q * k * A * sf;
          crest += sf * w.z;
        }
        p += d; vWP = p; vN = normalize(n); vCrest = crest;
        gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: skyGLSL + /* glsl */`
      uniform float time; uniform sampler2D nTex; uniform sampler2D foamTex; uniform sampler2D hTex; uniform vec4 hB;
      uniform vec3 sunDir; uniform vec3 sunCol; uniform vec3 fogCol; uniform float fogDen;
      varying vec3 vWP; varying vec3 vN; varying float vCrest;
      float depthAt(vec2 p){ vec2 uv = (p - hB.xy) / hB.zw; if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return 40.0; return 24.0 - texture2D(hTex, uv).r * 32.0; }
      void main(){
        vec3 V = cameraPosition - vWP; float dist = length(V); V /= dist;
        float dep = depthAt(vWP.xz) + vWP.y;
        vec3 n1 = texture2D(nTex, vWP.xz * 0.031 + vec2(time * 0.011, time * 0.017)).xyz * 2.0 - 1.0;
        vec3 n2 = texture2D(nTex, vWP.xz * 0.093 + vec2(-time * 0.019, time * 0.029)).xyz * 2.0 - 1.0;
        vec3 n3 = texture2D(nTex, vWP.xz * 0.0061 + vec2(time * 0.003, -time * 0.004)).xyz * 2.0 - 1.0;
        float detail = 1.0 / (1.0 + dist * 0.0035);
        vec3 N = normalize(vN + vec3(n1.x + n2.x * 0.7, 0.0, n1.y + n2.y * 0.7) * 0.32 * detail + vec3(n3.x, 0.0, n3.y) * 0.18);
        float ndv = max(dot(N, V), 0.0);
        float fres = 0.02 + 0.98 * pow(1.0 - ndv, 5.0);
        vec3 R = reflect(-V, N); R.y = abs(R.y) + 0.01;
        vec3 refl = skyLookup(R);
        float sd = max(dot(R, sunDir), 0.0);
        vec3 spec = sunCol * (pow(sd, 1400.0) * 60.0 + pow(sd, 160.0) * 3.0 + pow(sd, 18.0) * 0.12);
        vec3 deep = vec3(0.010, 0.030, 0.040), shallow = vec3(0.06, 0.11, 0.09);
        vec3 body = mix(shallow, deep, smoothstep(0.0, 12.0, dep));
        float sss = pow(max(dot(V, -sunDir) * 0.5 + 0.5, 0.0), 3.0) * clamp(vCrest * 1.4, 0.0, 1.0);
        body += vec3(0.03, 0.11, 0.09) * sss;
        body *= fogCol * 3.2 + 0.15;
        vec3 col = mix(body, refl, fres) + spec;
        // foam: shoreline wash, surf lines and whitecaps
        float f1 = texture2D(foamTex, vWP.xz * 0.075 + vec2(time * 0.013, time * 0.02)).r;
        float f2 = texture2D(foamTex, vWP.xz * 0.21 - vec2(time * 0.03, time * 0.01)).r;
        float fp = f1 * 0.6 + f2 * 0.5;
        float shore = 1.0 - smoothstep(0.0, 0.22, dep);
        float surf = pow(0.5 + 0.5 * sin(dep * 3.4 - time * 1.25 + f1 * 1.2), 9.0) * smoothstep(0.1, 0.4, dep) * (1.0 - smoothstep(0.6, 2.6, dep));
        float caps = smoothstep(0.62, 0.95, vCrest) * smoothstep(3.0, 10.0, dep) * 0.7;
        float foam = clamp((shore * 0.9 + surf * 0.75 + caps) * smoothstep(0.45, 1.05, fp + shore * 0.25), 0.0, 1.0);
        vec3 foamCol = fogCol * 3.6 + sunCol * 0.18;
        col = mix(col, foamCol, foam * 0.8);
        float alpha = mix(0.35, 1.0, smoothstep(0.0, 1.4, dep));
        alpha = max(alpha, max(foam, fres));
        vec3 hz = skyLookup(vec3(-V.x, 0.015, -V.z));
        float fg = 1.0 - exp(-dist * fogDen);
        col = mix(col, hz, fg);
        alpha = mix(alpha, 1.0, fg) * smoothstep(-0.25, 0.08, dep);
        gl_FragColor = vec4(col, alpha);
      }`,
  });
  const g = quality === 'low' ? grid(70, 110) : quality === 'mid' ? grid(110, 160) : grid(150, 220);
  const mesh = new THREE.Mesh(g, mat); mesh.renderOrder = 2; mesh.frustumCulled = false;
  return mesh;
}
