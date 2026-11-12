import * as THREE from 'three';
// Equirect sampling shared by the sky dome, the ocean reflections and the horizon fog.
export const SKY = { rot: 3.1, cut: 0.5596, gain: 0.62 };
export const skyGLSL = /* glsl */`
uniform sampler2D skyTex; uniform float skyRot; uniform float skyCut; uniform float skyGain;
vec3 skyLookup(vec3 d){
  d = normalize(d);
  float th = atan(d.z, d.x) + skyRot;
  float u = th * 0.15915494 + 0.5;
  float el = asin(clamp(max(d.y, 0.002), -1.0, 1.0));
  float vtop = 0.5 - el * 0.31830989;
  float t = min(vtop / skyCut, 0.995);
  vec3 c = texture2D(skyTex, vec2(fract(u), 1.0 - t)).rgb;
  c = pow(c, vec3(2.2));
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c *= 1.0 + 3.0 * smoothstep(0.7, 0.98, l);
  return c * skyGain;
}`;
export function skyUniforms(tex) { return { skyTex: { value: tex }, skyRot: { value: SKY.rot }, skyCut: { value: SKY.cut }, skyGain: { value: SKY.gain } }; }
export function makeSkyDome(tex) {
  tex.wrapS = THREE.RepeatWrapping; tex.minFilter = THREE.LinearMipmapLinearFilter; tex.generateMipmaps = true; tex.anisotropy = 4; tex.needsUpdate = true;
  const mat = new THREE.ShaderMaterial({
    uniforms: skyUniforms(tex), depthWrite: false, side: THREE.BackSide, fog: false,
    vertexShader: `varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }`,
    fragmentShader: skyGLSL + `varying vec3 vD; void main(){ vec3 d = normalize(vD); vec3 c = skyLookup(vec3(d.x, max(d.y, 0.0), d.z)); gl_FragColor = vec4(c, 1.0); }`,
  });
  const m = new THREE.Mesh(new THREE.SphereGeometry(4000, 48, 24), mat); m.renderOrder = -10; m.frustumCulled = false;
  return m;
}
// Sun direction in world space for the given sky rotation (from the HDRI's brightest pixel at u=0.605, elev 2.4 deg).
export function sunDir(elevDeg) {
  const thImg = (0.607 - 0.5) * Math.PI * 2; const th = thImg - SKY.rot; const el = elevDeg * Math.PI / 180;
  return new THREE.Vector3(Math.cos(th) * Math.cos(el), Math.sin(el), Math.sin(th) * Math.cos(el));
}
// Average horizon colour (linear) for fog: read the texture's horizon rows on a canvas.
export function horizonColor(tex) {
  try {
    const img = tex.image; const w = 256, h = 64; const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
    const g = cv.getContext('2d'); g.drawImage(img, 0, 0, w, h);
    // rows: image is flipped vertically when decoded with flipY bitmap; horizon (t ~ 0.86..0.9 from top)
    const flipped = !tex.flipY;
    const y0 = Math.floor((flipped ? 1 - 0.9 : 0.86) * h), y1 = Math.ceil((flipped ? 1 - 0.86 : 0.9) * h);
    const d = g.getImageData(0, y0, w, Math.max(1, y1 - y0)).data; let r = 0, gg = 0, b = 0, n = 0;
    for (let i = 0; i < d.length; i += 4) { r += Math.pow(d[i] / 255, 2.2); gg += Math.pow(d[i + 1] / 255, 2.2); b += Math.pow(d[i + 2] / 255, 2.2); n++; }
    return new THREE.Color(r / n, gg / n, b / n);
  } catch (e) { return new THREE.Color(0.35, 0.33, 0.36); }
}
