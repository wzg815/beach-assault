import * as THREE from 'three';
import { heightAt } from './terrain.js';
import { COLORS } from './fx.js';
import { pbr } from './assets.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const _a = V(), _b = V(), _c = V(), _d = V();
const rr = (a, b) => a + Math.random() * (b - a);
export const WEAPONS = [
  { name: '重机枪', key: 'mg', fov: 42 },
  { name: '榴弹炮', key: 'cannon', fov: 26 },
  { name: '防空导弹', key: 'missile', fov: 30 },
];

function gunMetal(c = 0x2b2d2a, r = 0.42, m = 0.85) { return new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m }); }
// Procedural M2-style heavy machine gun with a gun shield, seen from the gunner's position.
function buildMG(A) {
  const g = new THREE.Group();
  const tex = (key, col, o = {}) => { const m = pbr(A, key, o); m.color = new THREE.Color(col); return m; };
  const nrm = A.tex['rusty-metal_normal'] || null; if (nrm) { nrm.wrapS = nrm.wrapT = THREE.RepeatWrapping; }
  const metal = new THREE.MeshStandardMaterial({ color: 0x4a4d4a, roughness: 0.45, metalness: 0.55, normalMap: nrm, normalScale: new THREE.Vector2(0.35, 0.35) });
  const dark = new THREE.MeshStandardMaterial({ color: 0x2e302d, roughness: 0.6, metalness: 0.45, normalMap: nrm, normalScale: new THREE.Vector2(0.5, 0.5) }); const olive = new THREE.MeshStandardMaterial({ color: 0x4b5139, roughness: 0.7, metalness: 0.35 });
  const wood = new THREE.MeshStandardMaterial({ color: 0x3a2a1c, roughness: 0.6 });
  const add = (geo, m, x, y, z, rx = 0, ry = 0, rz = 0, parent = g) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); parent.add(o); return o; };
  add(new THREE.BoxGeometry(0.2, 0.19, 0.78), metal, 0, 0, 0.05);
  add(new THREE.BoxGeometry(0.205, 0.04, 0.5), dark, 0, 0.11, 0.0);      // feed cover
  add(new THREE.BoxGeometry(0.06, 0.05, 0.2), dark, 0, 0.15, -0.05);     // cover latch
  const hinge = new THREE.CylinderGeometry(0.016, 0.016, 0.22, 10); hinge.rotateZ(Math.PI / 2); add(hinge, dark, 0, 0.125, 0.25);
  for (const sx of [-1, 1]) { for (let i = 0; i < 7; i++) add(new THREE.SphereGeometry(0.007, 6, 4), dark, sx * 0.101, 0.05 - (i % 2) * 0.07, -0.25 + Math.floor(i / 2) * 0.16);
    add(new THREE.BoxGeometry(0.008, 0.12, 0.6), metal, sx * 0.103, -0.01, 0.0); }
  add(new THREE.BoxGeometry(0.16, 0.02, 0.36), metal, 0, 0.135, -0.02);  // cover top plate
  for (let i = 0; i < 4; i++) add(new THREE.BoxGeometry(0.17, 0.006, 0.01), dark, 0, 0.146, -0.15 + i * 0.08); // stiffening ribs
  for (let i = 0; i < 5; i++) add(new THREE.BoxGeometry(0.21, 0.012, 0.012), dark, 0, 0.02 - i * 0.03, 0.3);
  const jacket = new THREE.CylinderGeometry(0.048, 0.048, 0.34, 18, 1, true); jacket.rotateX(Math.PI / 2); add(jacket, metal, 0, 0, -0.5);
  for (let i = 0; i < 6; i++) add(new THREE.TorusGeometry(0.049, 0.006, 6, 18), dark, 0, 0, -0.38 - i * 0.05);
  const barrel = new THREE.CylinderGeometry(0.026, 0.03, 1.05, 14); barrel.rotateX(Math.PI / 2); const bar = add(barrel, metal, 0, 0, -1.0);
  const hider = new THREE.CylinderGeometry(0.038, 0.03, 0.12, 14); hider.rotateX(Math.PI / 2); add(hider, dark, 0, 0, -1.56);
  add(new THREE.BoxGeometry(0.012, 0.07, 0.02), dark, 0, 0.055, -1.48); // front sight
  const leaf = new THREE.Group(); leaf.position.set(0, 0.13, 0.22); g.add(leaf);
  add(new THREE.BoxGeometry(0.06, 0.07, 0.008), dark, 0, 0.035, 0, 0, 0, 0, leaf); add(new THREE.BoxGeometry(0.012, 0.016, 0.01), metal, 0, 0.06, 0, 0, 0, 0, leaf);
  // spade grips + butterfly trigger
  const grip = new THREE.CylinderGeometry(0.022, 0.025, 0.16, 10);
  add(grip, wood, -0.12, -0.02, 0.5); add(grip, wood, 0.12, -0.02, 0.5);
  add(new THREE.BoxGeometry(0.28, 0.03, 0.04), dark, 0, 0.07, 0.47); add(new THREE.BoxGeometry(0.28, 0.03, 0.04), dark, 0, -0.1, 0.47);
  add(new THREE.BoxGeometry(0.1, 0.05, 0.015), metal, 0, -0.01, 0.45, 0.4);
  // charging handle, cradle and pintle
  add(new THREE.BoxGeometry(0.02, 0.03, 0.12), dark, 0.115, 0.03, -0.1);
  add(new THREE.BoxGeometry(0.12, 0.12, 0.3), dark, 0, -0.15, -0.05);
  const post = new THREE.CylinderGeometry(0.04, 0.05, 0.9, 12); add(post, dark, 0, -0.65, -0.05);
  // ammo can + belt
  let can;
  if (A.glb.ammo) { can = A.glb.ammo.scene.clone(); can.scale.setScalar(1.15); can.position.set(-0.27, -0.24, 0.0); can.rotation.y = Math.PI / 2; g.add(can); }
  else can = add(new THREE.BoxGeometry(0.15, 0.2, 0.3), olive, -0.27, -0.14, 0.0);
  const brass = new THREE.MeshStandardMaterial({ color: 0xb08a3a, roughness: 0.35, metalness: 0.9 });
  for (let i = 0; i < 9; i++) { const t = i / 8; const o = add(new THREE.CylinderGeometry(0.01, 0.01, 0.1, 6), brass, -0.24 + t * 0.15, -0.05 + Math.sin(t * Math.PI) * 0.05 + t * 0.07, -0.02, Math.PI / 2, 0, 0); o.rotation.z = 0; o.rotation.x = 0; o.rotation.y = 0; o.rotation.set(0, 0, Math.PI / 2); }
  // gun shield: olive-painted armour plate with a barrel notch, wings angled back
  const plate = A.tex['rusty-hull-plate_color'] ? tex('rusty-hull-plate', 0x6d7258, { metalness: 0.5 }) : olive;
  const T = 0.014, sy0 = -0.5, sy1 = 0.075, sz = -0.5;
  for (const sx of [-1, 1]) {
    add(new THREE.BoxGeometry(0.24, sy1 - sy0, T), plate, sx * 0.19, (sy0 + sy1) / 2, sz, 0, sx * -0.12, 0);
    for (const by of [-0.4, -0.1]) add(new THREE.CylinderGeometry(0.009, 0.009, 0.02, 6).rotateX(Math.PI / 2), dark, sx * 0.24, by, sz + 0.02);
  }
  add(new THREE.BoxGeometry(0.14, 0.44, T), plate, 0, -0.28, sz);
  add(new THREE.BoxGeometry(0.64, 0.025, 0.03), dark, 0, sy1 + 0.005, sz);   // rolled top edge
  g.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = true; } });
  return { g, bar, muzzleLocal: V(0, 0, -1.63) };
}
// Browning M2 (CC-BY, britdawgmasterfunk) with gloved first-person arms (CC-BY, bumstrum) gripping the spade grips.
// Group origin = centre of the spade grips; barrel points down -z.
const _q = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _m4 = new THREE.Matrix4();
function ik2(root, mid, end, target) {
  // analytic two-bone IK: bend the elbow for the right reach, then swing the shoulder onto the target
  const S = root.getWorldPosition(V()), E = mid.getWorldPosition(V()), W = end.getWorldPosition(V());
  const a = S.distanceTo(E), b = E.distanceTo(W), d = Math.min(S.distanceTo(target), (a + b) * 0.995);
  const cur = _a.copy(S).sub(E).angleTo(_b.copy(W).sub(E)); const want = Math.acos(THREE.MathUtils.clamp((a * a + b * b - d * d) / (2 * a * b), -1, 1));
  const n = _c.copy(E).sub(S).cross(_d.copy(W).sub(E)); if (n.lengthSq() < 1e-10) n.set(1, 0, 0); n.normalize();
  mid.getWorldQuaternion(_q); n.applyQuaternion(_q.invert()); mid.quaternion.multiply(_q2.setFromAxisAngle(n, cur - want)); mid.updateMatrixWorld(true);
  const W2 = end.getWorldPosition(V()); const from = W2.sub(S).normalize(), to = V().copy(target).sub(S).normalize();
  const dq = new THREE.Quaternion().setFromUnitVectors(from, to); root.getWorldQuaternion(_q); const pw = root.parent.getWorldQuaternion(new THREE.Quaternion());
  root.quaternion.copy(pw.invert().multiply(dq.multiply(_q))); root.updateMatrixWorld(true);
}
function buildM2(A, quality) {
  const g = new THREE.Group(); const k = 0.0205; const lo = quality === 'low';
  const m = A.glb.m2.scene; m.scale.setScalar(k); m.position.set(0, -0.5 * k, -20.7 * k); g.add(m);
  let bar = null;
  m.traverse((o) => { if (!o.isMesh) return; o.material = o.material.clone(); o.material.color.multiplyScalar(0.62); o.material.metalness = Math.min(o.material.metalness ?? 1, 0.6); o.material.roughness = Math.max(o.material.roughness ?? 0.5, 0.42);
    o.castShadow = false; o.receiveShadow = true; if (o.parent && /barrel/.test(o.parent.name)) bar = o; });
  if (!bar) bar = new THREE.Mesh(new THREE.BufferGeometry(), new THREE.MeshStandardMaterial());
  // ammo can + belt on the feed side
  if (A.glb.ammo) { const can = A.glb.ammo.scene.clone(); can.scale.setScalar(1.0); can.position.set(-0.23, -0.3, -0.5); can.rotation.y = Math.PI / 2; g.add(can); }
  const brass = new THREE.MeshStandardMaterial({ color: 0xb08a3a, roughness: 0.35, metalness: 0.9 });
  for (let i = 0; i < 8; i++) { const t = i / 7; const o = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.075, 6), brass); o.position.set(-0.2 + t * 0.12, -0.12 + Math.sin(t * Math.PI) * 0.04 + t * 0.1, -0.42); o.rotation.set(0, 0, Math.PI / 2); g.add(o); }
  // arms
  if (A.glb.arms) {
    const arms = A.glb.arms.scene; const ka = 0.0118; arms.scale.setScalar(ka); arms.rotation.y = Math.PI; arms.position.set(0, -0.15, 0.3); g.add(arms);
    const B = {}; arms.traverse((o) => { if (o.isBone) B[o.name.replace(/_\d+$/, '')] = o; if (o.isMesh) { o.frustumCulled = false; o.castShadow = false; o.material.color?.multiplyScalar(0.9); } });
    g.updateMatrixWorld(true);
    const gx = 3.9 * k * 0.92;
    for (const [side, sx] of [['L', 1], ['R', -1]]) {
      // the rig's L arm sits at +x before the 180° turn, i.e. on screen right after it; grip x = -sx * ...
      const up = B[side + '_arm'], el = B[side + '_elbow'], wr = B[side + '_wrist']; if (!up || !el || !wr) continue;
      const tgt = g.localToWorld(V(side === 'L' ? -gx : gx, -0.035, 0.075));
      ik2(up, el, wr, tgt);
      // palm in, thumb up, fingers wrapped round the grip
      wr.rotateZ(sx * 1.25); wr.rotateX(0.25); wr.updateMatrixWorld(true);
      for (const f of ['point', 'middle', 'ring', 'pink']) for (let j = 1; j <= 3; j++) { const b = B[side + '_' + f + j]; if (b) b.rotateX(j === 1 ? 0.9 : 1.1); }
      for (let j = 2; j <= 3; j++) { const b = B[side + '_thumb' + j]; if (b) b.rotateX(0.4); }
    }
    g.userData.B = B;
  }
  return { g, bar, muzzleLocal: V(0, 0.01, -1.6), m2: true };
}
// keep the triangles of one glove of the pair (split on the bounding-box centre x)
function splitGlove(geo, left) {
  geo.computeBoundingBox(); const cx = (geo.boundingBox.min.x + geo.boundingBox.max.x) / 2;
  const pos = geo.attributes.position; const idx = geo.index ? geo.index.array : [...Array(pos.count).keys()]; const keep = [];
  for (let i = 0; i < idx.length; i += 3) { const x = (pos.getX(idx[i]) + pos.getX(idx[i + 1]) + pos.getX(idx[i + 2])) / 3; if ((x < cx) === left) keep.push(idx[i], idx[i + 1], idx[i + 2]); }
  geo.setIndex(keep); geo.computeBoundingBox();
  const c = geo.boundingBox.getCenter(V()); geo.translate(-c.x, -c.y, -c.z); return geo;
}
function buildLauncher() {
  const g = new THREE.Group(); const olive = new THREE.MeshStandardMaterial({ color: 0x51573f, roughness: 0.65, metalness: 0.3 }); const dark = gunMetal(0x1d1e1c, 0.5, 0.6);
  const tube = new THREE.CylinderGeometry(0.07, 0.07, 1.5, 20); tube.rotateX(Math.PI / 2); const t = new THREE.Mesh(tube, olive); t.position.set(0, 0, -0.35); g.add(t);
  for (const z of [-1.08, 0.38]) { const r = new THREE.Mesh(new THREE.CylinderGeometry(0.082, 0.082, 0.08, 20).rotateX(Math.PI / 2), dark); r.position.set(0, 0, z); g.add(r); }
  const grip = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.14, 0.05), dark); grip.position.set(0, -0.12, -0.15); grip.rotation.x = 0.2; g.add(grip);
  const sight = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.09, 0.16), dark); sight.position.set(-0.11, 0.06, -0.2); g.add(sight);
  const bat = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.18), olive); bat.position.set(0, -0.09, -0.6); g.add(bat);
  return { g, muzzleLocal: V(0, 0, -1.12) };
}

export class Weapons {
  constructor(G, camera) {
    this.G = G; this.cam = camera; this.cur = 0; this.heat = 0; this.over = false; this.cd = 0; this.reload = [0, 0, 0]; this.reloadT = [0.09, 2.1, 3.4];
    this.mg = G.A.glb.m2 ? buildM2(G.A, G.quality) : buildMG(G.A); if (!this.mg.m2) this.mg.g.scale.setScalar(0.72); camera.add(this.mg.g); this.mgBase = [0.0, -0.285, -0.82];
    this.ml = buildLauncher(); this.ml.g.position.set(0.24, -0.2, -0.28); camera.add(this.ml.g); this.ml.g.visible = false;
    this.kick = 0; this.shells = []; this.missiles = []; this.lock = null; this.lockT = 0; this.shots = 0; this.hits = 0;
    this.switchT = 0;
  }
  select(i) { if (i === this.cur) return; this.cur = i; this.switchT = 0.35; this.G.audio.reload(); this.lock = null; this.lockT = 0; }
  aimRay(spread = 0) {
    const d = _a.set(rr(-spread, spread), rr(-spread, spread), -1).normalize().applyQuaternion(this.cam.quaternion);
    return { o: this.cam.getWorldPosition(_b).clone(), d: d.clone() };
  }
  // nearest of: enemy hit volume, terrain, sea surface
  trace(o, d, maxD = 1400) {
    const e = this.G.enemies.rayHit(o, d, maxD); let best = e ? { t: e.t, kind: 'enemy', e: e.e, head: e.head, p: e.point } : null;
    let t0 = 0, step = 2, hit = null; let prevAbove = true;
    for (let t = 2; t < (best ? best.t : maxD); t += step) {
      const x = o.x + d.x * t, y = o.y + d.y * t, z = o.z + d.z * t; const h = heightAt(x, z);
      if (y < Math.max(h, 0)) { let lo = t0, hi = t; for (let k = 0; k < 8; k++) { const m = (lo + hi) / 2; const yy = o.y + d.y * m, hh = heightAt(o.x + d.x * m, o.z + d.z * m); if (yy < Math.max(hh, 0)) hi = m; else lo = m; } const p = o.clone().addScaledVector(d, hi); hit = { t: hi, kind: heightAt(p.x, p.z) < 0 ? 'water' : 'sand', p }; break; }
      t0 = t; step = Math.min(8, 1 + t * 0.02);
    }
    if (hit && (!best || hit.t < best.t)) best = hit;
    if (!best) best = { t: maxD, kind: 'sky', p: o.clone().addScaledVector(d, maxD) };
    return best;
  }
  update(dt, firing) {
    const G = this.G; this.cd -= dt; this.switchT = Math.max(0, this.switchT - dt);
    for (let i = 0; i < 3; i++) this.reload[i] = Math.max(0, this.reload[i] - dt);
    const cool = firing && this.cur === 0 && !this.over ? 0.12 : 0.42;
    this.heat = Math.max(0, this.heat - cool * dt); if (this.over && this.heat < 0.3) this.over = false;
    this.kick = Math.max(0, this.kick - dt * 9);
    const w = this.cur;
    // view models
    const zoom = G.zoomK || 0; const sw = this.switchT / 0.35;
    this.mg.g.visible = !this.hideGun && (w === 0 || w === 1); this.ml.g.visible = !this.hideGun && w === 2;
    const mgDown = w === 1 ? 0.55 : 0;
    const BP = this.mg.m2 ? this.mgBase : [0, -0.25, -0.3]; this.mg.g.position.set(BP[0] + rr(-1, 1) * this.kick * 0.004, BP[1] - mgDown - sw * 0.3 + zoom * 0.08, BP[2] + this.kick * 0.035 - zoom * 0.05);
    this.mg.g.rotation.set(0.03 + this.kick * 0.02 - zoom * 0.03, 0, 0);
    this.ml.g.position.set(0.24 - zoom * 0.1, -0.2 - sw * 0.3 + zoom * 0.05, -0.28 + this.kick * 0.05);
    const glow = Math.max(0, this.heat - 0.45) / 0.55; this.mg.bar.material.emissive = this.mg.bar.material.emissive || new THREE.Color(); this.mg.bar.material.emissive.setRGB(glow * 0.9, glow * 0.18, 0);
    if (w === 2) this.updateLock(dt); else { this.lock = null; }
    if (firing && this.switchT <= 0) this.fire();
    this.updateShells(dt); this.updateMissiles(dt);
  }
  fire() {
    const G = this.G; const w = this.cur;
    if (w === 0) {
      if (this.over || this.cd > 0) return; this.cd = this.reloadT[0];
      this.heat += 0.034; if (this.heat >= 1) { this.heat = 1; this.over = true; G.audio.overheat(); G.toast('枪管过热！'); }
      const { o, d } = this.aimRay(0.0028 + this.heat * 0.007); const hit = this.trace(o, d);
      this.mg.g.updateMatrixWorld(true); const mz = this.mg.g.localToWorld(_c.copy(this.mg.muzzleLocal)).clone();
      G.fx.muzzle(mz, d, 1.1, true); G.audio.mg(); this.kick = 1; G.shake(0.06);
      this.shots++;
      if (this.shots % 2 === 0) G.fx.tracer(mz, hit.p, 850, COLORS.tracer, 0.07);
      if (Math.random() < 0.25) G.fx.trailPuff(mz, 0.25, COLORS.smoke, 0.18);
      const delay = hit.t / 850 * 1000;
      setTimeout(() => {
        if (!G.running) return;
        if (hit.kind === 'enemy') {
          if (!hit.e.alive) return; this.hits++;
          const isS = hit.e.type === 'soldier'; const dmg = isS ? (hit.head ? 60 : 16) : 14;
          if (!isS) G.fx.impact(hit.p, 'metal'); if (!isS) G.audio.hitMetal(hit.t);
          const k = G.enemies.damage(hit.e, dmg, 'mg', hit.p, d);
          G.hitMark(k);
        } else if (hit.kind === 'water') G.fx.impact(hit.p, 'water');
        else if (hit.kind === 'sand') G.fx.impact(hit.p, 'sand');
      }, delay);
    } else if (w === 1) {
      if (this.reload[1] > 0) return; this.reload[1] = this.reloadT[1];
      const { o, d } = this.aimRay(0); const hit = this.trace(o, d, 1600);
      const H = G.world.howitzer; let from;
      if (H) { H.updateMatrixWorld(true); from = (G.world.howBarrel || H).localToWorld(V(0, 0, 4.6)); } else from = this.cam.getWorldPosition(V()).add(V(6, 0, 0));
      const tgt = hit.p.clone(); const dist = from.distanceTo(tgt); const T = 0.8 + dist / 240;
      const v0 = tgt.clone().sub(from).multiplyScalar(1 / T); v0.y += 0.5 * 9.8 * T;
      this.shells.push({ p: from.clone(), v: v0, t: 0, T, tgt });
      G.fx.muzzle(from, d, 4.5, true); for (let i = 0; i < 6; i++) G.fx.trailPuff(from.clone().add(V(rr(-1, 1), rr(0, 1), rr(-2, 0))), 2.2, COLORS.smoke, 0.55);
      G.audio.cannon(); G.shake(0.35); this.kick = 0.6; this.recoilH = 1; this.shots++;
    } else {
      if (this.reload[2] > 0) return; this.reload[2] = this.reloadT[2];
      this.ml.g.updateMatrixWorld(true); const from = this.ml.g.localToWorld(_c.copy(this.ml.muzzleLocal)).clone();
      const { o, d } = this.aimRay(0); const tgtP = this.lock && this.lockT >= 0.6 ? null : this.trace(o, d, 1600).p;
      this.missiles.push({ p: from, v: d.clone().multiplyScalar(45), t: 0, target: this.lock && this.lockT >= 0.6 ? this.lock : null, aim: tgtP });
      G.audio.missile(); G.shake(0.12); this.kick = 1; this.shots++;
      for (let i = 0; i < 5; i++) G.fx.trailPuff(this.cam.getWorldPosition(V()).add(V(rr(-1, 1), rr(-0.5, 0.5), rr(1, 3)).applyQuaternion(this.cam.quaternion)), 1.2, COLORS.smoke, 0.4);
    }
  }
  updateLock(dt) {
    const G = this.G; let best = null, ba = 0.13 + (G.zoomK || 0) * -0.05;
    const f = _a.set(0, 0, -1).applyQuaternion(this.cam.quaternion); const cp = this.cam.getWorldPosition(_d);
    for (const e of G.enemies.list) { if (!e.alive || !e.air || e.leaving && e.type === 'chinook' && false) continue; const p = _b.copy(e.obj.position).sub(cp); const dist = p.length(); if (dist > 1800) continue; const ang = p.normalize().angleTo(f); if (ang < ba) { ba = ang; best = e; } }
    if (best !== this.lock) { this.lock = best; this.lockT = 0; }
    if (this.lock) { const was = this.lockT; this.lockT += dt; if (was < 0.6 && this.lockT >= 0.6) G.audio.lock(); else if (Math.floor(this.lockT * 6) !== Math.floor(was * 6) && this.lockT < 0.6) G.audio.beep(1200); }
  }
  updateShells(dt) {
    const G = this.G;
    if (this.recoilH && G.world.howBarrel) { this.recoilH = Math.max(0, this.recoilH - dt * 2.5); G.world.howBarrel.position.z = -0.6 * Math.sin(this.recoilH * Math.PI) * this.recoilH; }
    for (let i = 0; i < this.shells.length; i++) {
      const s = this.shells[i]; s.t += dt; s.v.y -= 9.8 * dt; s.p.addScaledVector(s.v, dt);
      G.fx.glowAt(s.p, 0.7, 0.03, COLORS.hot, 1.5);
      const h = heightAt(s.p.x, s.p.z);
      let boom = s.t >= s.T || s.p.y <= Math.max(h, 0);
      if (!boom) { const e = G.enemies.rayHit(s.p, _a.copy(s.v).normalize(), s.v.length() * dt * 1.5); if (e && e.e.type !== 'soldier') boom = true; }
      if (boom) {
        const p = s.t >= s.T ? s.tgt : s.p; const water = heightAt(p.x, p.z) < -0.3 && p.y < 1;
        G.explode(p, 1.5, { water, big: true });
        const n = G.enemies.blast(p, 12, 270, 'he'); this.hits += n ? 1 : 0;
        this.shells.splice(i, 1); i--;
      }
    }
  }
  updateMissiles(dt) {
    const G = this.G;
    for (let i = 0; i < this.missiles.length; i++) {
      const m = this.missiles[i]; m.t += dt; const sp = Math.min(240, 45 + m.t * 260);
      let dir = _a.copy(m.v).normalize();
      if (m.target && m.target.alive) { const want = _b.copy(m.target.obj.position).add(_c.copy(m.target.v || _c.set(0, 0, 0)).multiplyScalar(0.25)).sub(m.p).normalize(); const turn = Math.min(1, dt * (m.t < 0.25 ? 1 : 4.5)); dir.lerp(want, turn).normalize(); }
      else if (m.aim) { const want = _b.copy(m.aim).sub(m.p).normalize(); dir.lerp(want, Math.min(1, dt * 3)).normalize(); }
      m.v.copy(dir).multiplyScalar(sp); m.p.addScaledVector(m.v, dt);
      G.fx.glowAt(m.p, 1.4, 0.05, COLORS.hot, 2.5); if (Math.random() < dt * 70) G.fx.trailPuff(m.p, 0.55, COLORS.smoke, 0.5);
      let boom = false, direct = null;
      if (m.target && m.target.alive && m.p.distanceTo(m.target.obj.position) < 7) { boom = true; direct = m.target; }
      const hh = heightAt(m.p.x, m.p.z); if (m.p.y < Math.max(hh, 0)) boom = true;
      if (m.aim && m.p.distanceTo(m.aim) < 3) boom = true; if (m.t > 9) boom = true;
      if (!boom) { const e = G.enemies.rayHit(m.p, dir, sp * dt * 1.2); if (e) { boom = true; direct = e.e; } }
      if (boom) {
        const water = hh < -0.3 && m.p.y < 1.2;
        G.explode(m.p.clone(), direct && direct.air ? 1.2 : 1.1, { water, crater: !direct || !direct.air });
        if (direct) { G.enemies.damage(direct, 420, 'missile', m.p, dir); this.hits++; }
        G.enemies.blast(m.p, 7, 180, 'missile');
        this.missiles.splice(i, 1); i--;
      }
    }
  }
  clear() { this.shells.length = 0; this.missiles.length = 0; this.heat = 0; this.over = false; this.reload = [0, 0, 0]; this.lock = null; }
}
