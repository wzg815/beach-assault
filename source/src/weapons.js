import * as THREE from 'three';
import { heightAt } from './terrain.js';
import { COLORS } from './fx.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const _a = V(), _b = V(), _c = V(), _d = V();
const rr = (a, b) => a + Math.random() * (b - a);
export const WEAPONS = [
  { name: '重机枪', key: 'mg', fov: 34 },
  { name: '榴弹炮', key: 'cannon', fov: 26 },
  { name: '防空导弹', key: 'missile', fov: 30 },
];

function gunMetal(c = 0x2b2d2a, r = 0.42, m = 0.85) { return new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m }); }
// Procedural M2-style heavy machine gun with a gun shield, seen from the gunner's position.
function buildMG(A) {
  const g = new THREE.Group(); const metal = gunMetal(); const dark = gunMetal(0x1a1b1a, 0.55, 0.7); const olive = new THREE.MeshStandardMaterial({ color: 0x4b5139, roughness: 0.7, metalness: 0.35 });
  const wood = new THREE.MeshStandardMaterial({ color: 0x3a2a1c, roughness: 0.6 });
  const add = (geo, m, x, y, z, rx = 0, ry = 0, rz = 0, parent = g) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); parent.add(o); return o; };
  add(new THREE.BoxGeometry(0.2, 0.19, 0.78), metal, 0, 0, 0.05);
  add(new THREE.BoxGeometry(0.205, 0.04, 0.5), dark, 0, 0.11, 0.0);      // feed cover
  add(new THREE.BoxGeometry(0.06, 0.05, 0.2), dark, 0, 0.15, -0.05);     // cover latch
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
  g.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = true; } });
  return { g, bar, muzzleLocal: V(0, 0, -1.63) };
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
    this.mg = buildMG(G.A); this.mg.g.scale.setScalar(0.85); camera.add(this.mg.g);
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
    this.mg.g.position.set(0.0 + rr(-1, 1) * this.kick * 0.004, -0.34 - mgDown - sw * 0.3 + zoom * 0.2, -0.05 + this.kick * 0.035 - zoom * 0.05);
    this.mg.g.rotation.set(0.075 + this.kick * 0.02 - zoom * 0.06, 0, 0);
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
