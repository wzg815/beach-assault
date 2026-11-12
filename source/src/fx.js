import * as THREE from 'three';
import { heightAt, normalAt } from './terrain.js';

const V = () => new THREE.Vector3();
const _a = V(), _b = V(), _n = V(), _up = new THREE.Vector3(0, 1, 0);
const rr = (a, b) => a + Math.random() * (b - a);

// Instanced camera-facing sprites driven from CPU arrays (one draw call per atlas).
class Sprites {
  constructor(tex, o) {
    this.max = o.max; this.cols = o.cols || 1; this.rows = o.rows || 1; this.list = []; this.free = [];
    const base = new THREE.PlaneGeometry(1, 1); const g = new THREE.InstancedBufferGeometry();
    g.index = base.index; g.attributes.position = base.attributes.position; g.attributes.uv = base.attributes.uv;
    this.aP = new THREE.InstancedBufferAttribute(new Float32Array(this.max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.aS = new THREE.InstancedBufferAttribute(new Float32Array(this.max * 4), 4).setUsage(THREE.DynamicDrawUsage);
    this.aC = new THREE.InstancedBufferAttribute(new Float32Array(this.max * 4), 4).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('iP', this.aP); g.setAttribute('iS', this.aS); g.setAttribute('iC', this.aC); g.instanceCount = 0;
    tex.colorSpace = THREE.SRGBColorSpace; tex.needsUpdate = true;
    this.u = { map: { value: tex }, grid: { value: new THREE.Vector2(this.cols, this.rows) }, light: { value: new THREE.Color(1, 1, 1) }, fogColor: { value: new THREE.Color() }, fogDensity: { value: 0 } };
    const add = o.blending === 'add';
    this.mat = new THREE.ShaderMaterial({
      uniforms: this.u, transparent: true, depthWrite: false, blending: add ? THREE.AdditiveBlending : THREE.NormalBlending,
      vertexShader: `attribute vec3 iP; attribute vec4 iS; attribute vec4 iC; uniform vec2 grid; uniform float fogDensity;
        varying vec2 vUv; varying vec4 vC; varying float vA; varying float vFog;
        void main(){ vec4 mv = viewMatrix * vec4(iP, 1.0); float c = cos(iS.y), s = sin(iS.y);
          mv.xy += vec2(position.x * c - position.y * s, position.x * s + position.y * c) * iS.x;
          gl_Position = projectionMatrix * mv;
          float fr = floor(iS.z + 0.5); vec2 cell = vec2(mod(fr, grid.x), floor(fr / grid.x));
          vUv = (vec2(cell.x, grid.y - 1.0 - cell.y) + uv) / grid; vC = iC; vA = iS.w;
          float d = fogDensity * mv.z; vFog = 1.0 - exp(-d * d); }`,
      fragmentShader: `uniform sampler2D map; uniform vec3 light; uniform vec3 fogColor; varying vec2 vUv; varying vec4 vC; varying float vA; varying float vFog;
        void main(){ vec4 t = texture2D(map, vUv); vec3 col = pow(t.rgb, vec3(1.0)) * vC.rgb;
          float lum = dot(t.rgb, vec3(0.3, 0.59, 0.11));
          ${add ? 'col *= 1.0 + vC.a; float a = t.a * vA; gl_FragColor = vec4(col * a * (1.0 - vFog), 1.0);' : `col *= light; col *= 1.0 + vC.a * smoothstep(0.35, 1.0, lum) * 9.0; float a = t.a * vA; col = mix(col, fogColor, vFog * (1.0 - vC.a * 0.5)); gl_FragColor = vec4(col, a);`} }`,
    });
    this.mesh = new THREE.Mesh(g, this.mat); this.mesh.frustumCulled = false; this.mesh.renderOrder = o.order || 5; this.g = g;
  }
  spawn(o) {
    if (this.list.length >= this.max) { const old = this.list.shift(); this.free.push(old); }
    const p = this.free.pop() || { p: V(), v: V(), c: new THREE.Color() };
    p.p.copy(o.p); p.v.copy(o.v || _a.set(0, 0, 0)); p.life = o.life; p.age = 0; p.s0 = o.s0; p.s1 = o.s1 ?? o.s0; p.rot = o.rot ?? Math.random() * 6.28; p.rv = o.rv ?? 0;
    p.f0 = o.f0 ?? 0; p.nf = o.nf ?? 1; p.a = o.a ?? 1; p.c.copy(o.c || _white); p.em = o.em ?? 0; p.drag = o.drag ?? 0; p.grav = o.grav ?? 0; p.fin = o.fin ?? 0.08; p.ease = o.ease ?? 2; p.loop = o.loop || 0; p.ground = o.ground || 0;
    this.list.push(p); return p;
  }
  update(dt) {
    const L = this.list; let n = 0; const P = this.aP.array, S = this.aS.array, C = this.aC.array;
    for (let i = 0; i < L.length; i++) {
      const p = L[i]; p.age += dt; const t = p.age / p.life;
      if (t >= 1) { this.free.push(p); L[i] = L[L.length - 1]; L.pop(); i--; continue; }
      if (p.drag) p.v.multiplyScalar(Math.exp(-p.drag * dt)); p.v.y -= p.grav * dt; p.p.addScaledVector(p.v, dt); p.rot += p.rv * dt;
      if (p.ground) { const h = heightAt(p.p.x, p.p.z); if (p.p.y < h + 0.05) { p.p.y = h + 0.05; p.v.set(0, 0, 0); } }
      const e = 1 - Math.pow(1 - t, p.ease); const sz = p.s0 + (p.s1 - p.s0) * e;
      const fa = t < p.fin ? t / p.fin : 1 - Math.pow((t - p.fin) / (1 - p.fin), 1.6);
      P[n * 3] = p.p.x; P[n * 3 + 1] = p.p.y; P[n * 3 + 2] = p.p.z;
      const fr = p.loop ? p.f0 + Math.floor(p.age * p.loop) % p.nf : p.f0 + Math.min(p.nf - 1, Math.floor(t * p.nf));
      S[n * 4] = sz; S[n * 4 + 1] = p.rot; S[n * 4 + 2] = fr; S[n * 4 + 3] = p.a * Math.max(0, fa);
      C[n * 4] = p.c.r; C[n * 4 + 1] = p.c.g; C[n * 4 + 2] = p.c.b; C[n * 4 + 3] = p.em; n++;
    }
    this.g.instanceCount = n; if (n) { this.aP.needsUpdate = this.aS.needsUpdate = this.aC.needsUpdate = true; this.aP.clearUpdateRanges?.(); }
  }
}
const _white = new THREE.Color(1, 1, 1);

// Velocity-aligned streaks: tracers, sparks, rocket flames.
class Streaks {
  constructor(tex, max) {
    this.max = max; this.list = []; this.free = [];
    const base = new THREE.PlaneGeometry(1, 1); const g = new THREE.InstancedBufferGeometry(); g.index = base.index; g.attributes.position = base.attributes.position; g.attributes.uv = base.attributes.uv;
    this.aA = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.aB = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.aC = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4).setUsage(THREE.DynamicDrawUsage);
    this.aW = new THREE.InstancedBufferAttribute(new Float32Array(max), 1).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('iA', this.aA); g.setAttribute('iB', this.aB); g.setAttribute('iC', this.aC); g.setAttribute('iW', this.aW); g.instanceCount = 0;
    this.mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: tex } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: `attribute vec3 iA; attribute vec3 iB; attribute vec4 iC; attribute float iW; varying vec2 vUv; varying vec4 vC;
        void main(){ vec4 a = viewMatrix * vec4(iA, 1.0); vec4 b = viewMatrix * vec4(iB, 1.0);
          vec3 d = b.xyz - a.xyz; vec3 side = normalize(cross(d, a.xyz + b.xyz) + 1e-6);
          vec4 p = mix(a, b, position.y + 0.5); p.xyz += side * position.x * iW;
          gl_Position = projectionMatrix * p; vUv = uv; vC = iC; }`,
      fragmentShader: `uniform sampler2D map; varying vec2 vUv; varying vec4 vC;
        void main(){ float across = 1.0 - abs(vUv.x - 0.5) * 2.0; float along = smoothstep(0.0, 0.35, vUv.y);
          float a = pow(across, 1.6) * along * vC.a; gl_FragColor = vec4(vC.rgb * a, 1.0); }`,
    });
    this.mesh = new THREE.Mesh(g, this.mat); this.mesh.frustumCulled = false; this.mesh.renderOrder = 6; this.g = g;
  }
  spawn(o) {
    if (this.list.length >= this.max) this.free.push(this.list.shift());
    const s = this.free.pop() || { p: V(), v: V(), c: new THREE.Color() };
    s.p.copy(o.p); s.v.copy(o.v); s.len = o.len; s.w = o.w; s.life = o.life; s.age = 0; s.c.copy(o.c); s.a = o.a ?? 1; s.grav = o.grav ?? 0; s.end = o.end || null; s.drag = o.drag || 0;
    this.list.push(s); return s;
  }
  update(dt) {
    const L = this.list; let n = 0; const A = this.aA.array, B = this.aB.array, C = this.aC.array, W = this.aW.array;
    for (let i = 0; i < L.length; i++) {
      const s = L[i]; s.age += dt; if (s.age >= s.life) { this.free.push(s); L[i] = L[L.length - 1]; L.pop(); i--; continue; }
      s.v.y -= s.grav * dt; if (s.drag) s.v.multiplyScalar(Math.exp(-s.drag * dt)); s.p.addScaledVector(s.v, dt);
      const sp = s.v.length() || 1; const tail = Math.min(s.len, sp * s.age + 0.01);
      A[n * 3] = s.p.x - s.v.x / sp * tail; A[n * 3 + 1] = s.p.y - s.v.y / sp * tail; A[n * 3 + 2] = s.p.z - s.v.z / sp * tail;
      B[n * 3] = s.p.x; B[n * 3 + 1] = s.p.y; B[n * 3 + 2] = s.p.z;
      const f = 1 - s.age / s.life; C[n * 4] = s.c.r; C[n * 4 + 1] = s.c.g; C[n * 4 + 2] = s.c.b; C[n * 4 + 3] = s.a * Math.min(1, f * 3); W[n] = s.w; n++;
    }
    this.g.instanceCount = n; if (n) this.aA.needsUpdate = this.aB.needsUpdate = this.aC.needsUpdate = this.aW.needsUpdate = true;
  }
}

// Ground decals (craters, blood) as instanced quads hugging the terrain normal.
class Decals {
  constructor(tex, variants, max, o = {}) {
    this.max = max; this.i = 0; this.v = variants; tex.colorSpace = THREE.SRGBColorSpace; tex.needsUpdate = true;
    const g = new THREE.PlaneGeometry(1, 1); g.rotateX(-Math.PI / 2);
    this.aF = new THREE.InstancedBufferAttribute(new Float32Array(max * 2), 2); g.setAttribute('iF', this.aF);
    const m = new THREE.MeshStandardMaterial({ map: tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4, roughness: o.rough ?? 0.95, metalness: 0 });
    const nv = variants;
    m.onBeforeCompile = (s) => {
      s.vertexShader = s.vertexShader.replace('#include <common>', '#include <common>\nattribute vec2 iF; varying float vAl;').replace('#include <uv_vertex>', `#include <uv_vertex>\n vMapUv = vec2((uv.x + iF.x) / ${nv.toFixed(1)}, uv.y); vAl = iF.y;`);
      s.fragmentShader = s.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vAl;').replace('#include <map_fragment>', '#include <map_fragment>\n diffuseColor.a *= vAl;');
    };
    this.mesh = new THREE.InstancedMesh(g, m, max); this.mesh.count = 0; this.mesh.receiveShadow = true; this.mesh.frustumCulled = false; this.mesh.renderOrder = 1;
    this.fades = new Float32Array(max); this.born = new Float32Array(max); this.t = 0; this.life = o.life || 0;
  }
  add(x, z, size, rot = Math.random() * 6.28, alpha = 1, y) {
    const i = this.i % this.max; this.i++;
    const h = (y ?? heightAt(x, z)) + 0.03; normalAt(x, z, _n);
    const q = new THREE.Quaternion().setFromUnitVectors(_up, _n).multiply(new THREE.Quaternion().setFromAxisAngle(_up, rot));
    this.mesh.setMatrixAt(i, new THREE.Matrix4().compose(_a.set(x, h, z), q, _b.set(size, 1, size)));
    this.aF.setXY(i, Math.floor(Math.random() * this.v), alpha); this.aF.needsUpdate = true; this.mesh.instanceMatrix.needsUpdate = true;
    this.mesh.count = Math.min(this.max, this.i); this.born[i] = this.t; this.fades[i] = alpha;
  }
  update(dt) {
    this.t += dt; if (!this.life) return; let ch = false;
    for (let i = 0; i < this.mesh.count; i++) { const age = this.t - this.born[i]; if (age > this.life * 0.7 && this.fades[i] > 0) { const a = this.fades[i] * Math.max(0, 1 - (age - this.life * 0.7) / (this.life * 0.3)); this.aF.setY(i, a); ch = true; } }
    if (ch) this.aF.needsUpdate = true;
  }
  clear() { this.i = 0; this.mesh.count = 0; }
}

export class FX {
  constructor(A, scene, quality) {
    this.q = quality; this.scene = scene; const lo = quality === 'low';
    this.mul = lo ? 0.5 : quality === 'mid' ? 0.75 : 1;
    const T = A.tex;
    this.exp = new Sprites(T.fx_explosion, { cols: 8, rows: 8, max: lo ? 60 : 120, order: 7 });
    this.smoke = new Sprites(T.fx_smoke, { cols: 4, rows: 4, max: lo ? 260 : 600, order: 6 });
    this.spl = new Sprites(T.fx_splash, { cols: 4, rows: 1, max: lo ? 60 : 140, order: 6 });
    this.bsp = new Sprites(T.fx_blood_spray, { cols: 4, rows: 1, max: 90, order: 6 });
    this.flash = new Sprites(T.fx_flash, { cols: 4, rows: 1, max: 80, blending: 'add', order: 8 });
    this.glow = new Sprites(T.fx_glow, { cols: 1, rows: 1, max: lo ? 200 : 400, blending: 'add', order: 8 });
    this.streak = new Streaks(T.fx_glow, lo ? 160 : 320);
    this.craters = new Decals(T.fx_crater, 2, lo ? 40 : 90, { life: 0 });
    this.bloodD = new Decals(T.fx_blood_decal, 4, lo ? 40 : 90, { rough: 0.35, life: 0 });
    for (const s of [this.exp, this.smoke, this.spl, this.bsp, this.flash, this.glow]) scene.add(s.mesh);
    scene.add(this.streak.mesh, this.craters.mesh, this.bloodD.mesh);
    // debris chunks
    const dg = new THREE.DodecahedronGeometry(0.22, 0); this.debMax = lo ? 80 : 180;
    this.deb = new THREE.InstancedMesh(dg, new THREE.MeshStandardMaterial({ color: 0x4b4136, roughness: 0.95 }), this.debMax); this.deb.count = 0; this.deb.castShadow = !lo; this.deb.frustumCulled = false; scene.add(this.deb);
    this.debris = [];
    // light pool
    this.lights = []; for (let i = 0; i < (lo ? 2 : 4); i++) { const l = new THREE.PointLight(0xffa860, 0, 90, 1.7); scene.add(l); this.lights.push({ l, t: 0, d: 1, i0: 0 }); }
    this.blood = true; this.time = 0; this.shake = 0;
  }
  setEnv(fogColor, fogDensity, lightCol) {
    for (const s of [this.exp, this.smoke, this.spl, this.bsp]) { s.u.fogColor.value.copy(fogColor); s.u.fogDensity.value = fogDensity; s.u.light.value.copy(lightCol); }
    this.flash.u.fogDensity.value = this.glow.u.fogDensity.value = fogDensity * 0.6;
  }
  light(p, intensity, dur, color = 0xffa860) {
    let best = this.lights[0]; for (const L of this.lights) if (L.l.intensity < best.l.intensity) best = L;
    best.l.position.copy(p); best.l.color.set(color); best.i0 = intensity; best.l.intensity = intensity; best.t = 0; best.d = dur;
  }
  update(dt, camPos) {
    this.time += dt;
    for (const s of [this.exp, this.smoke, this.spl, this.bsp, this.flash, this.glow]) s.update(dt);
    this.streak.update(dt); this.craters.update(dt); this.bloodD.update(dt);
    for (const L of this.lights) { if (L.l.intensity <= 0) continue; L.t += dt; const k = 1 - L.t / L.d; L.l.intensity = k > 0 ? L.i0 * k * k : 0; }
    // debris
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = V(); let n = 0;
    for (let i = 0; i < this.debris.length; i++) {
      const d = this.debris[i]; d.age += dt; if (d.age > d.life) { this.debris.splice(i, 1); i--; continue; }
      if (!d.rest) { d.v.y -= 9.8 * dt; d.p.addScaledVector(d.v, dt); d.r.x += d.w.x * dt; d.r.y += d.w.y * dt; const h = heightAt(d.p.x, d.p.z); if (d.p.y < Math.max(h, d.water ? -0.6 : -99)) { if (h < 0) { d.age = d.life; } d.p.y = h + 0.05; if (d.v.y < -3) { d.v.y *= -0.3; d.v.x *= 0.5; d.v.z *= 0.5; } else { d.rest = true; } } if (d.trail && Math.random() < dt * 30) this.smoke.spawn({ p: d.p, s0: 0.6 * d.s, s1: 2.5 * d.s, life: 1.4, a: 0.5, c: _dark, f0: Math.random() * 16 | 0, v: _a.set(0, 0.8, 0) }); }
      if (n < this.debMax) { q.setFromEuler(new THREE.Euler(d.r.x, d.r.y, 0)); const f = d.age > d.life - 1 ? d.life - d.age : 1; m.compose(d.p, q, sc.setScalar(d.s * Math.max(0.01, f))); this.deb.setMatrixAt(n++, m); }
    }
    this.deb.count = n; this.deb.instanceMatrix.needsUpdate = true;
  }
  // ------------------------------------------------------------------ emitters
  explosion(p, s = 1, o = {}) {
    const k = this.mul; const water = o.water ?? (heightAt(p.x, p.z) < -0.3 && p.y < 1.5);
    this.light(_a.copy(p).setY(p.y + 2 * s), 1800 * s * s, 0.35 + 0.15 * s);
    this.flash.spawn({ p: _a.copy(p).setY(p.y + 1.2 * s), s0: 9 * s, s1: 14 * s, life: 0.16, f0: Math.random() * 4 | 0, em: 2.5, c: _hot, fin: 0.05 });
    if (water) {
      for (let i = 0; i < 3 + 3 * k; i++) this.spl.spawn({ p: _a.copy(p).setY(-0.5).add(_b.set(rr(-1.5, 1.5) * s, 0, rr(-1.5, 1.5) * s)), s0: 5 * s, s1: rr(14, 22) * s, life: rr(1.6, 2.6), f0: Math.random() * 4 | 0, v: _b.set(0, rr(5, 9) * s, 0), grav: 4.5, rot: rr(-0.15, 0.15), fin: 0.05, ease: 3, c: _water });
      for (let i = 0; i < 8 * k; i++) this.smoke.spawn({ p: _a.copy(p).setY(0.6), v: _b.set(rr(-5, 5), rr(0.5, 3), rr(-5, 5)).multiplyScalar(s), s0: 3 * s, s1: 11 * s, life: rr(2.5, 4), a: 0.5, drag: 1.2, c: _mist, f0: Math.random() * 16 | 0 });
      this.exp.spawn({ p: _a.copy(p).setY(1.5 * s), s0: 6 * s, s1: 11 * s, life: 0.6, f0: 0, nf: 24, em: 1.4, rv: rr(-0.3, 0.3) });
      return;
    }
    const n = Math.round((o.big ? 4 : 2) * (0.6 + 0.4 * k));
    for (let i = 0; i < n; i++) this.exp.spawn({ p: _a.copy(p).add(_b.set(rr(-1, 1) * s, rr(0.6, 1.8) * s, rr(-1, 1) * s)), s0: rr(5, 7) * s, s1: rr(10, 15) * s, life: rr(0.9, 1.4), f0: 0, nf: 56, em: 1.6, rv: rr(-0.4, 0.4), ease: 2.5, fin: 0.03 });
    // dark smoke column + dust skirt
    for (let i = 0; i < 10 * k * s + 3; i++) this.smoke.spawn({ p: _a.copy(p).add(_b.set(rr(-2, 2) * s, rr(0.5, 3) * s, rr(-2, 2) * s)), v: _b.set(rr(-1.5, 1.5), rr(2.5, 7), rr(-1.5, 1.5)).multiplyScalar(s), s0: rr(3, 5) * s, s1: rr(11, 18) * s, life: rr(4, 8), a: rr(0.55, 0.85), drag: 0.6, c: o.oil ? _dark : _smokeC, f0: Math.random() * 16 | 0, rv: rr(-0.2, 0.2), fin: 0.05 });
    for (let i = 0; i < 9 * k * s + 2; i++) { const a = Math.random() * 6.28; this.smoke.spawn({ p: _a.copy(p).add(_b.set(0, 0.6, 0)), v: _b.set(Math.cos(a) * rr(6, 14), rr(0.2, 1.5), Math.sin(a) * rr(6, 14)).multiplyScalar(s), s0: 2.5 * s, s1: rr(7, 11) * s, life: rr(2.5, 4.5), a: 0.6, drag: 2.2, c: _dust, f0: Math.random() * 16 | 0, fin: 0.04 }); }
    // sand fountain
    for (let i = 0; i < 6 * k + 2; i++) this.spl.spawn({ p: _a.copy(p), v: _b.set(rr(-3, 3), rr(9, 16), rr(-3, 3)).multiplyScalar(Math.sqrt(s)), s0: 3 * s, s1: rr(8, 12) * s, life: rr(1.1, 1.8), grav: 9, f0: Math.random() * 4 | 0, c: _sandSpray, rot: rr(-0.4, 0.4), ease: 2 });
    // sparks
    for (let i = 0; i < 18 * k; i++) this.streak.spawn({ p: _a.copy(p).setY(p.y + 1), v: _b.set(rr(-1, 1), rr(0.4, 1.4), rr(-1, 1)).normalize().multiplyScalar(rr(15, 40) * Math.sqrt(s)), len: rr(1, 3), w: 0.12, life: rr(0.4, 1.1), c: _spark, grav: 9.8, drag: 0.8 });
    // debris
    for (let i = 0; i < 10 * k * s; i++) this.debris.push({ p: _a.copy(p).setY(p.y + 0.5).clone(), v: _b.set(rr(-1, 1), rr(0.6, 1.6), rr(-1, 1)).normalize().multiplyScalar(rr(8, 22) * Math.sqrt(s)).clone(), r: V().set(Math.random() * 6, Math.random() * 6, 0), w: V().set(rr(-9, 9), rr(-9, 9), 0), s: rr(0.4, 1.4) * (o.metal ? 1.4 : 1), age: 0, life: rr(5, 9), trail: o.metal && Math.random() < 0.3, water: true });
    if (o.crater !== false && p.y - heightAt(p.x, p.z) < 2.5) this.craters.add(p.x, p.z, rr(5, 7.5) * s);
  }
  burn(p, s = 1) { // persistent burning wreck smoke+fire, call each frame with dt-weighted probability
    this.exp.spawn({ p: _a.copy(p).add(_b.set(rr(-0.6, 0.6) * s, rr(0, 0.8) * s, rr(-0.6, 0.6) * s)), v: _b.set(0, 2, 0), s0: 2.2 * s, s1: 3.6 * s, life: 0.7, f0: 10, nf: 22, em: 1.2, rv: rr(-1, 1), fin: 0.15 });
    this.smoke.spawn({ p: _a.copy(p).setY(p.y + 1.5 * s), v: _b.set(rr(0.5, 1.2), rr(2.5, 4.5), rr(-0.3, 0.3)), s0: 2 * s, s1: rr(9, 14) * s, life: rr(5, 8), a: 0.7, drag: 0.15, c: _dark, f0: Math.random() * 16 | 0, rv: rr(-0.15, 0.15), fin: 0.06 });
  }
  splash(p, s = 1) {
    this.spl.spawn({ p: _a.copy(p).setY(-0.3), s0: 1.5 * s, s1: rr(3.5, 5) * s, life: rr(0.7, 1.1), v: _b.set(0, 2.6 * s, 0), grav: 5, f0: Math.random() * 4 | 0, fin: 0.05, c: _water });
    if (s > 0.6) this.smoke.spawn({ p: _a.copy(p).setY(0.3), s0: 1.2 * s, s1: 3.5 * s, life: 1.2, a: 0.35, c: _mist, f0: Math.random() * 16 | 0, v: _b.set(0, 0.6, 0) });
  }
  impact(p, kind, dir) {
    if (kind === 'water') return this.splash(p, rr(0.45, 0.7));
    if (kind === 'metal') { for (let i = 0; i < 5; i++) this.streak.spawn({ p, v: _b.set(rr(-1, 1), rr(0, 1.2), rr(-1, 1)).normalize().multiplyScalar(rr(8, 20)), len: 0.5, w: 0.06, life: rr(0.2, 0.45), c: _spark, grav: 9.8 }); this.flash.spawn({ p, s0: 0.9, s1: 1.4, life: 0.06, f0: Math.random() * 4 | 0, em: 1, c: _spark }); this.smoke.spawn({ p, s0: 0.5, s1: 1.6, life: 0.8, a: 0.35, c: _smokeC, f0: Math.random() * 16 | 0 }); return; }
    if (kind === 'sand') {
      this.spl.spawn({ p: _a.copy(p), s0: 0.5, s1: rr(1.4, 2.2), life: rr(0.5, 0.8), v: _b.set(0, rr(1.5, 3), 0), grav: 6, f0: Math.random() * 4 | 0, c: _sandSpray, rot: rr(-0.4, 0.4) });
      this.smoke.spawn({ p: _a.copy(p).setY(p.y + 0.2), s0: 0.5, s1: rr(1.6, 2.6), life: rr(1, 1.6), a: 0.45, c: _dust, f0: Math.random() * 16 | 0, v: _b.set(rr(-0.3, 0.3), 0.4, rr(-0.3, 0.3)), drag: 1 });
    }
  }
  bloodHit(p, dir, s = 1) {
    if (!this.blood) { this.smoke.spawn({ p, s0: 0.3, s1: 1.0, life: 0.5, a: 0.4, c: _dust, f0: Math.random() * 16 | 0 }); return; }
    for (let i = 0; i < 2; i++) this.bsp.spawn({ p: _a.copy(p).addScaledVector(dir, 0.15 + i * 0.25), v: _b.copy(dir).multiplyScalar(rr(1, 2.5)).add(_n.set(0, rr(0.3, 1), 0)), s0: 0.35 * s, s1: rr(0.9, 1.5) * s, life: rr(0.22, 0.38), f0: Math.random() * 4 | 0, grav: 4, fin: 0.05, ease: 3, c: _bloodC });
    this.bsp.spawn({ p, s0: 0.25 * s, s1: 0.8 * s, life: 0.5, a: 0.5, f0: Math.random() * 4 | 0, v: _b.set(0, -0.3, 0), c: _bloodC });
  }
  bloodPool(x, z, s = 1) { if (this.blood) this.bloodD.add(x, z, rr(1.0, 1.8) * s, undefined, rr(0.75, 0.95)); }
  muzzle(p, dir, s = 1, light = true) {
    this.flash.spawn({ p, s0: 0.9 * s, s1: 1.3 * s, life: 0.05, f0: Math.random() * 4 | 0, em: 2, c: _hot, fin: 0.01 });
    if (light) this.light(p, 160 * s, 0.06, 0xffb070);
  }
  tracer(from, to, speed = 700, color = _tracer, w = 0.09) {
    const d = _b.copy(to).sub(from); const L = d.length(); d.normalize();
    this.streak.spawn({ p: from, v: d.multiplyScalar(speed), len: Math.min(14, L), w, life: L / speed, c: color });
  }
  trailPuff(p, s = 1, c = _smokeC, a = 0.5) { this.smoke.spawn({ p, s0: 0.6 * s, s1: rr(2.5, 4) * s, life: rr(1.6, 2.6), a, c, f0: Math.random() * 16 | 0, v: _b.set(rr(-0.3, 0.3), 0.4, rr(-0.3, 0.3)), drag: 0.8, rv: rr(-0.5, 0.5) }); }
  wake(p, s = 1) { this.smoke.spawn({ p: _a.copy(p).setY(p.y + 0.1), s0: 0.8 * s, s1: rr(2.5, 4) * s, life: rr(1.2, 2), a: 0.55, c: _foam, f0: Math.random() * 16 | 0, v: _b.set(rr(-0.6, 0.6), 0.3, rr(-0.6, 0.6)), drag: 1 }); }
  dust(p, s = 1) { this.smoke.spawn({ p, s0: 0.8 * s, s1: rr(3, 5) * s, life: rr(1.5, 2.5), a: 0.4, c: _dust, f0: Math.random() * 16 | 0, v: _b.set(rr(-0.5, 0.5), 0.5, rr(-0.5, 0.5)), drag: 1 }); }
  glowAt(p, s, life, c = _hot, em = 1) { this.glow.spawn({ p, s0: s, s1: s, life, c, em, fin: 0.02 }); }
  clear() { for (const s of [this.exp, this.smoke, this.spl, this.bsp, this.flash, this.glow, this.streak]) { s.free.push(...s.list); s.list.length = 0; s.update?.(0); } this.debris.length = 0; this.craters.clear(); this.bloodD.clear(); }
}
const _hot = new THREE.Color(1, 0.75, 0.45), _water = new THREE.Color(0.86, 0.9, 0.92), _mist = new THREE.Color(0.85, 0.88, 0.9), _smokeC = new THREE.Color(0.42, 0.4, 0.38), _dark = new THREE.Color(0.16, 0.15, 0.14), _dust = new THREE.Color(0.78, 0.68, 0.55), _sandSpray = new THREE.Color(0.72, 0.6, 0.45), _spark = new THREE.Color(1, 0.62, 0.25), _tracer = new THREE.Color(1, 0.45, 0.15), _bloodC = new THREE.Color(0.55, 0.05, 0.04), _foam = new THREE.Color(0.95, 0.97, 1);
export const COLORS = { hot: _hot, spark: _spark, tracer: _tracer, smoke: _smokeC, dark: _dark, foam: _foam };
