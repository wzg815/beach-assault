import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { TB, PLAYER, heightAt, normalAt, fbm } from './terrain.js';
import { pbr } from './assets.js';

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _p = new THREE.Vector3(), _n = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0);

export function shadowAll(o, cast = true, recv = true) { o.traverse((c) => { if (c.isMesh) { c.castShadow = cast; c.receiveShadow = recv; } }); return o; }
export function militarize(o, tint = 0x6b704f) {
  const t = new THREE.Color(tint);
  o.traverse((c) => {
    if (!c.isMesh) return; const ms = Array.isArray(c.material) ? c.material : [c.material];
    c.material = ms.map((m) => {
      const n = (m.name || '').toLowerCase();
      if (/glass|lens|lamp|nav_|strobe|beacon|screen|canopy/.test(n)) return m;
      const k = m.clone();
      if (/paint|skin|body|fuselage|panel|cowling|trim/.test(n) || !k.map) { k.color = k.color.clone().multiply(t).multiplyScalar(k.map ? 1.9 : 1.0); if (!k.map) k.color.copy(t).multiplyScalar(0.9); }
      k.roughness = Math.max(k.roughness, 0.6);
      return k;
    });
    if (c.material.length === 1) c.material = c.material[0];
  });
  return o;
}
// Turn every mesh of a glTF into an InstancedMesh placed at the given matrices (one draw call per sub-mesh).
export function instanceModel(gltf, mats, cast = true) {
  const g = new THREE.Group(); gltf.scene.updateMatrixWorld(true);
  gltf.scene.traverse((o) => {
    if (!o.isMesh || o.isSkinnedMesh) return;
    const im = new THREE.InstancedMesh(o.geometry, o.material, mats.length);
    mats.forEach((m, i) => im.setMatrixAt(i, _m.multiplyMatrices(m, o.matrixWorld)));
    im.castShadow = cast; im.receiveShadow = true; im.computeBoundingSphere(); g.add(im);
  });
  return g;
}
export function place(x, z, rot = 0, sc = 1, yOff = 0, tilt = 0) {
  const y = heightAt(x, z) + yOff;
  _q.setFromAxisAngle(_up, rot);
  if (tilt) { normalAt(x, z, _n); const qt = new THREE.Quaternion().setFromUnitVectors(_up, _n.lerp(_up, 1 - tilt).normalize()); _q.premultiply(qt); }
  return new THREE.Matrix4().compose(_p.set(x, y, z), _q, _s.set(sc, sc, sc));
}
export function placeObj(o, x, z, rot = 0, sc = 1, yOff = 0) { o.position.set(x, heightAt(x, z) + yOff, z); o.rotation.y = rot; o.scale.setScalar(sc); return o; }

function terrainMaterial(A) {
  const L = (k) => { const t = A.tex[k]; if (t) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; } return t; };
  const dc = L('lake-sand_color'), wc = L('wet-sand_color'), gc = L('meadow-ground_color'), rc = L('granite-rock_color');
  for (const t of [dc, wc, gc, rc]) if (t) t.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.MeshStandardMaterial({ roughness: 1, metalness: 0 });
  const U = { tD: dc, tDN: L('lake-sand_normal'), tDO: L('lake-sand_orm'), tW: wc, tWN: L('wet-sand_normal'), tWO: L('wet-sand_orm'), tG: gc, tGN: L('meadow-ground_normal'), tR: rc, tRN: L('granite-rock_normal') };
  m.onBeforeCompile = (s) => {
    for (const k in U) s.uniforms[k] = { value: U[k] };
    s.vertexShader = s.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP; varying vec3 vWN;')
      .replace('#include <fog_vertex>', '#include <fog_vertex>\n vWP = (modelMatrix * vec4(transformed, 1.0)).xyz; vWN = normalize(mat3(modelMatrix) * objectNormal);');
    s.fragmentShader = s.fragmentShader.replace('#include <common>', `#include <common>
      uniform sampler2D tD, tDN, tDO, tW, tWN, tWO, tG, tGN, tR, tRN; varying vec3 vWP; varying vec3 vWN;
      vec3 gTN; float gRough; float gAO;`)
      .replace('#include <map_fragment>', `
      vec2 uvD = vWP.xz / 4.0, uvW = vWP.xz / 4.0, uvG = vWP.xz / 3.0, uvR = vWP.xz / 6.0;
      float mac = texture2D(tD, vWP.xz / 61.0).g * 0.6 + texture2D(tG, vWP.xz / 149.0).g * 0.6;
      float hgt = vWP.y; float slope = 1.0 - normalize(vWN).y;
      float nz = mac - 0.35;
      vec4 cD = texture2D(tD, uvD), cW = texture2D(tW, uvW), cG = texture2D(tG, uvG), cR = texture2D(tR, uvR);
      vec3 nD = texture2D(tDN, uvD).xyz, nW = texture2D(tWN, uvW).xyz, nG = texture2D(tGN, uvG).xyz, nR = texture2D(tRN, uvR).xyz;
      vec3 oD = texture2D(tDO, uvD).xyz, oW = texture2D(tWO, uvW).xyz;
      float wWet = 1.0 - smoothstep(0.7, 2.4, hgt + nz * 1.4);
      float wGrass = smoothstep(10.5, 13.4, hgt + nz * 3.0) * (1.0 - smoothstep(0.22, 0.42, slope));
      float wRock = smoothstep(0.42, 0.62, slope + nz * 0.15) + smoothstep(18.0, 24.0, hgt) * smoothstep(190.0, 240.0, abs(vWP.x));
      wRock = clamp(wRock, 0.0, 1.0);
      vec3 col = cD.rgb * vec3(0.86, 0.8, 0.7); vec3 tn = nD; float rgh = oD.g; float ao = oD.r;
      col = mix(col, cW.rgb * 0.82, wWet); tn = mix(tn, nW, wWet); rgh = mix(rgh, oW.g * 0.55, wWet); ao = mix(ao, oW.r, wWet);
      col = mix(col, cG.rgb * vec3(0.92, 0.95, 0.8), wGrass); tn = mix(tn, nG, wGrass); rgh = mix(rgh, 0.92, wGrass);
      col = mix(col, cR.rgb, wRock); tn = mix(tn, nR, wRock); rgh = mix(rgh, 0.85, wRock);
      col *= 0.8 + 0.4 * mac;
      float uw = smoothstep(0.0, -5.0, hgt);
      col = mix(col, col * vec3(0.35, 0.55, 0.55), uw);
      diffuseColor.rgb *= col; gTN = tn * 2.0 - 1.0; gRough = rgh; gAO = ao;
      diffuseColor.rgb *= mix(1.0, gAO, 0.7);`)
      .replace('#include <roughnessmap_fragment>', 'float roughnessFactor = clamp(gRough, 0.5, 1.0);')
      .replace('#include <metalnessmap_fragment>', 'float metalnessFactor = 0.0;')
      .replace('#include <normal_fragment_maps>', `{
        vec3 Nw = normalize(vWN); vec3 T = normalize(vec3(1.0, 0.0, 0.0) - Nw * Nw.x); vec3 B = cross(Nw, T);
        vec3 nw = normalize(T * gTN.x - B * gTN.y + Nw * max(gTN.z, 0.2));
        normal = normalize((viewMatrix * vec4(nw, 0.0)).xyz);
      }`);
  };
  return m;
}

export function buildTerrain(A, quality) {
  const sx = TB.x1 - TB.x0, sz = TB.z1 - TB.z0;
  const r = quality === 'high' ? 1.9 : quality === 'mid' ? 2.6 : 3.4;
  const g = new THREE.PlaneGeometry(sx, sz, Math.round(sx / r), Math.round(sz / r)); g.rotateX(-Math.PI / 2);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { const x = p.getX(i) + (TB.x0 + TB.x1) / 2, z = p.getZ(i) + (TB.z0 + TB.z1) / 2; p.setXYZ(i, x, heightAt(x, z), z); }
  g.computeVertexNormals(); g.computeBoundingSphere();
  const mesh = new THREE.Mesh(g, terrainMaterial(A)); mesh.receiveShadow = true; mesh.name = 'terrain';
  return mesh;
}

// Czech hedgehog: three crossed steel I-beams.
function hedgehogGeo() {
  const parts = [];
  const beam = () => { const web = new THREE.BoxGeometry(0.03, 0.16, 2.2); const f1 = new THREE.BoxGeometry(0.16, 0.025, 2.2); f1.translate(0, 0.08, 0); const f2 = f1.clone(); f2.translate(0, -0.16, 0); return mergeGeometries([web, f1, f2]); };
  const q0 = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(1, 1, 1).normalize(), _up);
  const axes = [new THREE.Euler(0, 0, 0), new THREE.Euler(0, Math.PI / 2, 0), new THREE.Euler(Math.PI / 2, 0, 0)];
  for (const e of axes) { const b = beam(); const q = new THREE.Quaternion().setFromEuler(e); q.premultiply(q0); b.applyMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(q)); parts.push(b); }
  const g = mergeGeometries(parts); g.translate(0, 0.62, 0);
  // world-ish uvs
  const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 0.3, uv.getY(i) * 2);
  return g;
}

// Procedural LCVP landing craft (bow ramp toward +Z). Returns { group, ramp }.
export function makeLCVP(mats) {
  const g = new THREE.Group(); const hull = mats.hull, dark = mats.dark;
  const add = (geo, m, x, y, z) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = true; o.receiveShadow = true; g.add(o); return o; };
  const L = 10.8, B = 3.25, H = 2.05;
  add(new THREE.BoxGeometry(B, 0.25, L - 0.6), dark, 0, -0.7, -0.3);
  const side = new THREE.BoxGeometry(0.12, H, L - 1.6);
  add(side, hull, -B / 2, 0.25, -0.6); add(side, hull, B / 2, 0.25, -0.6);
  // bow cheeks
  const cheek = new THREE.BoxGeometry(0.12, H, 1.4); const cl = add(cheek, hull, -B / 2 + 0.2, 0.25, L / 2 - 0.9); cl.rotation.y = 0.28; const cr = add(cheek, hull, B / 2 - 0.2, 0.25, L / 2 - 0.9); cr.rotation.y = -0.28;
  add(new THREE.BoxGeometry(B, H + 0.15, 0.14), hull, 0, 0.3, -L / 2 + 0.2);
  // hull bottom wedge (below waterline)
  const keel = new THREE.CylinderGeometry(B * 0.5, B * 0.36, L - 0.8, 4, 1); keel.rotateX(Math.PI / 2); keel.rotateZ(Math.PI / 4); keel.scale(1, 0.45, 1);
  add(keel, dark, 0, -1.0, -0.3);
  // gunwale caps, coxswain station, engine box, machine-gun rings
  const cap = new THREE.BoxGeometry(0.3, 0.08, L - 1.6); add(cap, dark, -B / 2, 1.3, -0.6); add(cap, dark, B / 2, 1.3, -0.6);
  add(new THREE.BoxGeometry(1.2, 0.9, 1.1), hull, 0.6, 1.5, -L / 2 + 1.0);
  add(new THREE.BoxGeometry(B - 0.3, 0.9, 1.6), dark, 0, -0.2, -L / 2 + 1.3);
  const ring = new THREE.TorusGeometry(0.32, 0.04, 6, 16); ring.rotateX(Math.PI / 2); add(ring, dark, -1.1, 1.55, -L / 2 + 1.4); add(ring, dark, 1.1, 1.55, -L / 2 + 1.4);
  const ramp = new THREE.Group(); ramp.position.set(0, -0.62, L / 2 - 0.15); g.add(ramp);
  const rp = new THREE.Mesh(new THREE.BoxGeometry(B - 0.45, 2.15, 0.14), hull); rp.position.set(0, 1.05, 0); rp.castShadow = rp.receiveShadow = true; ramp.add(rp);
  for (let i = 0; i < 4; i++) { const rib = new THREE.Mesh(new THREE.BoxGeometry(B - 0.5, 0.08, 0.1), dark); rib.position.set(0, 0.3 + i * 0.5, 0.1); ramp.add(rib); }
  return { group: g, ramp };
}

// Distant warships on the horizon (pure silhouettes in the haze) with occasional gun flashes.
function fleet(horizon) {
  const g = new THREE.Group(); const flashes = [];
  const mat = new THREE.MeshBasicMaterial({ color: horizon.clone().multiplyScalar(0.42), fog: false });
  const mk = (len) => {
    const s = new THREE.Group();
    const hull = new THREE.BoxGeometry(len * 0.11, len * 0.06, len); const hp = hull.attributes.position;
    for (let i = 0; i < hp.count; i++) { const z = hp.getZ(i) / len; if (z > 0.3) hp.setX(i, hp.getX(i) * (1 - (z - 0.3) * 1.6)); }
    s.add(new THREE.Mesh(hull, mat));
    const sup = new THREE.Mesh(new THREE.BoxGeometry(len * 0.07, len * 0.07, len * 0.18), mat); sup.position.set(0, len * 0.06, len * 0.08); s.add(sup);
    const br = new THREE.Mesh(new THREE.BoxGeometry(len * 0.05, len * 0.06, len * 0.08), mat); br.position.set(0, len * 0.11, len * 0.1); s.add(br);
    const fun = new THREE.Mesh(new THREE.CylinderGeometry(len * 0.018, len * 0.022, len * 0.09, 8), mat); fun.position.set(0, len * 0.09, -len * 0.06); s.add(fun);
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(len * 0.004, len * 0.004, len * 0.16, 4), mat); mast.position.set(0, len * 0.18, len * 0.12); s.add(mast);
    for (const tz of [0.3, -0.3]) { const t = new THREE.Mesh(new THREE.BoxGeometry(len * 0.05, len * 0.025, len * 0.05), mat); t.position.set(0, len * 0.045, tz * len); s.add(t); }
    return s;
  };
  const ships = [[-900, -2600, 130, 0.3], [-300, -3100, 180, -0.2], [500, -2800, 150, 0.4], [1300, -3300, 200, 0.1], [-1700, -3400, 160, -0.3], [2100, -3900, 210, 0.2], [80, -4200, 240, 0]];
  for (const [x, z, l, r] of ships) { const s = mk(l); s.position.set(x, 0, z); s.rotation.y = Math.PI / 2 + r; g.add(s); flashes.push(new THREE.Vector3(x, l * 0.06, z)); }
  return { group: g, flashes };
}

export function buildWorld(A, scene, quality, horizon) {
  const W = { solids: [], hedgehogs: [], covers: [] };
  scene.add(buildTerrain(A, quality));
  const G = A.glb;
  const add = (o) => { scene.add(o); return o; };
  // --- player emplacement ---
  const P = PLAYER;
  if (G.sb_pos) { const o = shadowAll(G.sb_pos.scene.clone()); placeObj(o, P.x, P.z - 1.3, Math.PI, 1.6, -1.25); add(o); }
  if (G.sb_curve) { for (const [dx, dz, r] of [[-3.4, 0.6, 0.5], [3.4, 0.6, -0.5 + Math.PI]]) { const o = shadowAll(G.sb_curve.scene.clone()); placeObj(o, P.x + dx, P.z + dz, r, 1, -0.05); add(o); } }
  if (G.camonet) { const o = shadowAll(G.camonet.scene.clone(), true, true); placeObj(o, P.x + 0.5, P.z + 4.2, 0.1, 1.15, -0.1); add(o); }
  if (G.ammo) { const ms = []; for (const [dx, dz, r] of [[1.6, 1.6, 0.3], [1.95, 1.4, 0.1], [1.75, 1.9, 1.7], [-1.7, 1.8, -0.4], [-1.5, 2.2, 2.0]]) ms.push(place(P.x + dx, P.z + dz, r, 1.2)); add(instanceModel(G.ammo, ms)); }
  if (G.howitzer) { const o = militarize(shadowAll(G.howitzer.scene.clone()), 0x6e7354); placeObj(o, P.x + 10.5, P.z + 3.5, Math.PI + 0.06, 1, 0); add(o); W.howitzer = o; o.traverse((c) => { if (c.name === 'barrel') W.howBarrel = c; }); }
  if (G.hesco) { const ms = []; for (let i = 0; i < 6; i++) ms.push(place(P.x + 6.8 + i * 1.02, P.z - 1.2 + Math.sin(i) * 0.1, 0, 1)); for (let i = 0; i < 4; i++) ms.push(place(P.x - 6.5 - i * 1.02, P.z - 1.0, 0, 1)); add(instanceModel(G.hesco, ms)); }
  // flanking bunkers and trench lines
  if (G.tbunker) { const ms = [place(-24, 0, Math.PI + 0.25, 1.35), place(26, -1, Math.PI - 0.2, 1.35), place(-62, 6, Math.PI + 0.1, 1.25), place(66, 4, Math.PI - 0.15, 1.25)]; add(instanceModel(G.tbunker, ms)); }
  if (G.sb_set) { for (const [x, z, r] of [[-44, -3, Math.PI + 0.06], [46, -5, Math.PI - 0.08]]) { const o = shadowAll(G.sb_set.scene.clone()); placeObj(o, x, z, r, 1, -0.1); add(o); } }
  if (G.sb_wall) { const ms = []; for (let i = -9; i <= 9; i++) { if (Math.abs(i) < 3) continue; const x = i * 2.2; ms.push(place(x, -3.2 + Math.abs(i) * 0.15, 0.04 * i, 1, -0.05)); } add(instanceModel(G.sb_wall, ms)); }
  if (G.gtower) { const o = shadowAll(G.gtower.scene.clone()); placeObj(o, -86, 18, Math.PI + 0.3, 1, -0.2); add(o); }
  // beach obstacles
  if (G.wire) {
    const ms = [];
    for (const [z0, gap] of [[-27, 7], [-58, 11]]) for (let x = -170; x < 170; x += 3.85) { if (Math.abs((x % 40)) < gap * 0.5 && Math.random() < 0.6) continue; ms.push(place(x, z0 + Math.sin(x * 0.07) * 2.5, Math.sin(x) * 0.08, 1, -0.05, 0.6)); }
    add(instanceModel(G.wire, ms, quality !== 'low'));
  }
  const hg = hedgehogGeo(); const hm = pbr(A, 'rusty-metal'); hm.color = new THREE.Color(0.75, 0.68, 0.62);
  const hmats = []; const rnd = mulberry(42);
  for (let i = 0; i < 70; i++) {
    const x = -180 + rnd() * 360, z = -128 + rnd() * 58; if (Math.abs(x) < 6 && z > -80) continue;
    const s = 0.9 + rnd() * 0.3; hmats.push(place(x, z, rnd() * 6.28, s, -0.15)); W.hedgehogs.push(new THREE.Vector3(x, heightAt(x, z), z));
  }
  const him = new THREE.InstancedMesh(hg, hm, hmats.length); hmats.forEach((m, i) => him.setMatrixAt(i, m)); him.castShadow = true; him.receiveShadow = true; add(him);
  // wrecks and debris
  if (G.truck) { const o = shadowAll(G.truck.scene.clone()); placeObj(o, -48, -44, 2.2, 1, -0.3); o.rotation.z = 0.12; add(o); W.covers.push(new THREE.Vector3(-48, 0, -44)); }
  if (G.humvee) { const o = militarize(shadowAll(G.humvee.scene.clone()), 0x7a7458); placeObj(o, 58, -20, -0.7, 1, -0.2); o.rotation.z = -0.09; add(o); }
  if (G.rubble) { const ms = [place(-30, -12, 1, 1.2, -0.3), place(36, -36, 2, 1.1, -0.3), place(-95, -30, 0.5, 1.4, -0.3)]; add(instanceModel(G.rubble, ms)); }
  if (G.wreck) { const o = shadowAll(G.wreck.scene.clone()); o.position.set(150, -3.2, -185); o.rotation.set(0.12, -0.9, 0.22); o.scale.setScalar(1.3); add(o); }
  if (G.reef) { const ms = []; for (let i = 0; i < 26; i++) { const x = -220 + rnd() * 440, z = -150 + rnd() * 50; ms.push(place(x, z, rnd() * 6, 0.9 + rnd() * 1.6, -0.25, 0.5)); } add(instanceModel(G.reef, ms)); }
  if (G.rock) { const ms = []; for (const [x, z, r, s] of [[-150, -40, 0.4, 2.2], [-128, -80, 2.4, 1.6], [170, -52, 1.2, 2.4], [140, -98, 3.0, 1.5], [-200, -110, 0.8, 2.8], [205, -118, 2.0, 3.2], [-110, 22, 1.2, 2.2], [120, 26, 2.2, 2.0]]) ms.push(place(x, z, r, s, -0.6, 0.6)); add(instanceModel(G.rock, ms)); }
  if (G.boulder) { const ms = []; for (let i = 0; i < 30; i++) { const x = (rnd() < 0.5 ? -1 : 1) * (60 + rnd() * 160), z = -100 + rnd() * 150; ms.push(place(x, z, rnd() * 6, 0.8 + rnd() * 1.4, -0.3, 0.5)); } add(instanceModel(G.boulder, ms)); }
  if (G.cliff) { const ms = [place(-268, -175, Math.PI * 0.62, 2.1, -6), place(-300, -110, Math.PI * 0.55, 1.9, -6), place(272, -170, -Math.PI * 0.62, 2.1, -6), place(305, -100, -Math.PI * 0.55, 2.0, -6)]; add(instanceModel(G.cliff, ms, false)); }
  if (G.seastack) { const ms = [new THREE.Matrix4().compose(new THREE.Vector3(-310, -8, -380), new THREE.Quaternion(), new THREE.Vector3(1.8, 2.0, 1.8)), new THREE.Matrix4().compose(new THREE.Vector3(-345, -8, -330), new THREE.Quaternion().setFromAxisAngle(_up, 1.2), new THREE.Vector3(1.2, 1.3, 1.2)), new THREE.Matrix4().compose(new THREE.Vector3(330, -8, -400), new THREE.Quaternion().setFromAxisAngle(_up, 2.2), new THREE.Vector3(1.6, 1.7, 1.6))]; add(instanceModel(G.seastack, ms, false)); }
  if (G.lighthouse) { const o = shadowAll(G.lighthouse.scene.clone(), false, true); placeObj(o, 318, -150, -2.2, 1.1, -1.5); add(o); }
  // horizon fleet
  const F = fleet(horizon); add(F.group); W.fleet = F;
  W.rnd = rnd;
  return W;
}
export function mulberry(a) { return function () { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
