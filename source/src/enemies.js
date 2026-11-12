import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { heightAt, PLAYER, WATERLINE, shoreShift } from './terrain.js';
import { waveAt } from './ocean.js';
import { makeLCVP, militarize, shadowAll } from './world.js';
import { pbr } from './assets.js';
import { COLORS } from './fx.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const _a = V(), _b = V(), _c = V(), _up = new THREE.Vector3(0, 1, 0), _q = new THREE.Quaternion(), _m = new THREE.Matrix4();
const rr = (a, b) => a + Math.random() * (b - a);
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const lerpAng = (a, b, t) => { let d = b - a; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return a + d * t; };
export const AIM = () => new THREE.Vector3(PLAYER.x, PLAYER.h + 1.4, PLAYER.z);
// sea depth 1.0 m contour near x (where boats beach)
function beachZ(x, depth) { let z = -62; for (let i = 0; i < 80; i++) { if (heightAt(x, z) < -depth) return z; z -= 1.5; } return z; }

export class Enemies {
  constructor(G) {
    this.G = G; this.list = []; this.proj = []; this.corpses = [];
    const A = G.A;
    this.hullMat = pbr(A, 'rusty-hull-plate'); this.hullMat.color = new THREE.Color(0.62, 0.68, 0.7); this.hullMat.metalness = 0.25;
    this.darkMat = new THREE.MeshStandardMaterial({ color: 0x2c302b, roughness: 0.8, metalness: 0.4 });
    this.helmetMat = new THREE.MeshStandardMaterial({ color: 0x3c4130, roughness: 0.75, metalness: 0.05 });
    this.packMat = new THREE.MeshStandardMaterial({ color: 0x4a4935, roughness: 0.95 });
    this.helmetGeo = new THREE.SphereGeometry(1, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.55); this.helmetGeo.scale(1, 0.82, 1.08);
    this.brimGeo = new THREE.CylinderGeometry(1.18, 1.22, 0.06, 16);
    this.packGeo = new THREE.BoxGeometry(0.34, 0.42, 0.18);
    // soldier template: tint the civilian jacket/trousers towards field uniform
    const st = A.glb.soldier; this.sClips = st ? st.animations : [];
    if (st) st.scene.traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); o.material.color = new THREE.Color(0.78, 0.82, 0.66); o.castShadow = true; o.receiveShadow = false; o.frustumCulled = false; } });
    this.mil = {};
    for (const k of ['tank', 'ifv', 'heli', 'gunship', 'chinook', 'jet', 'prop', 'rib']) if (A.glb[k]) this.mil[k] = shadowAll(militarize(A.glb[k].scene.clone(), k === 'jet' ? 0x8a9196 : k === 'rib' ? 0x4b5040 : 0x6b6f4e), true, false);
    this.maxSoldiers = G.quality === 'low' ? 34 : G.quality === 'mid' ? 56 : 80;
  }
  count(t) { let n = 0; for (const e of this.list) if (e.alive && (!t || e.type === t)) n++; return n; }
  get hostiles() { let n = 0; for (const e of this.list) if (e.alive && !e.leaving) n++; return n; }
  soldiersAlive() { let n = 0; for (const e of this.list) if (e.alive && e.type === 'soldier') n++; return n; }
  clear() {
    for (const e of this.list) e.dispose?.(); for (const c of this.corpses) c.dispose?.(); for (const p of this.proj) p.dispose?.();
    this.list.length = 0; this.corpses.length = 0; this.proj.length = 0;
  }
  // ---------------------------------------------------------------- soldiers
  makeSoldier(parent, local) {
    const G = this.G; const st = G.A.glb.soldier;
    const obj = st ? SkeletonUtils.clone(st.scene) : new THREE.Mesh(new THREE.CapsuleGeometry(0.25, 1.2), this.helmetMat);
    const L = {}; let head = null, chest = null, armL = null, armR = null, foreL = null, foreR = null, spine = null;
    obj.traverse((o) => { if (o.name === 'head') head = o; if (o.name === 'chest') chest = o; if (o.name === 'upperarm_L') armL = o; if (o.name === 'upperarm_R') armR = o; if (o.name === 'forearm_L') foreL = o; if (o.name === 'forearm_R') foreR = o; if (o.name === 'spine1') spine = o; if (o.name === 'thigh_L') L.thL = o; if (o.name === 'thigh_R') L.thR = o; if (o.name === 'calf_L') L.caL = o; if (o.name === 'calf_R') L.caR = o; if (o.name === 'hips') L.hips = o; });
    obj.scale.setScalar(rr(0.96, 1.05));
    const s = { type: 'soldier', obj, alive: true, hp: 30, head, chest, armL, armR, foreL, foreR, spine, mixer: null, acts: {}, state: 'boat', t: 0, fireT: rr(1, 4), speed: rr(2.9, 3.6), goal: V(), vel: V(), yaw: Math.PI, bob: Math.random() * 10, ...L };
    if (parent) { parent.add(obj); obj.position.copy(local); obj.rotation.y = 0; } else this.G.scene.add(obj);
    obj.updateMatrixWorld(true);
    if (head) {
      const hw = head.getWorldPosition(V()); const sc = obj.getWorldScale(V()).x;
      const hel = new THREE.Mesh(this.helmetGeo, this.helmetMat); hel.castShadow = true;
      const brim = new THREE.Mesh(this.brimGeo, this.helmetMat); brim.position.y = 0.02; hel.add(brim);
      hel.scale.setScalar(0.152); obj.add(hel); hel.position.copy(obj.worldToLocal(hw.add(_a.set(0, 0.105 * sc, 0.0)))); hel.updateMatrixWorld(true); head.attach(hel);
      // hide the civilian cap under the helmet; add a field pack on the back
      if (chest) { const pk = new THREE.Mesh(this.packGeo, this.packMat); pk.castShadow = true; const cw = chest.getWorldPosition(V()); obj.add(pk); pk.position.copy(obj.worldToLocal(cw.add(_a.set(0, -0.02, -0.2 * sc)))); pk.updateMatrixWorld(true); chest.attach(pk); }
    }
    if (chest && G.A.glb.rifle) {
      const rf = G.A.glb.rifle.scene.clone(); rf.traverse((o) => { if (o.isMesh) o.castShadow = true; });
      const cw = chest.getWorldPosition(V()); const sc = obj.getWorldScale(V()).x;
      rf.rotation.set(-0.12, 0.35, 0.0, 'YXZ');
      obj.add(rf); rf.position.copy(obj.worldToLocal(cw.add(_a.set(0.05 * sc, -0.12 * sc, 0.3 * sc)))); rf.updateMatrixWorld(true); chest.attach(rf); s.rifle = rf;
      rf.traverse((o) => { if (o.name === 'muzzle') s.muzzle = o; });
    }
    if (st && this.sClips.length) {
      s.mixer = new THREE.AnimationMixer(obj);
      for (const c of this.sClips) s.acts[c.name] = s.mixer.clipAction(c);
      s.acts.idle && s.acts.idle.play(); s.cur = 'idle'; s.mixer.update(Math.random() * 3);
    }
    s.spheres = [{ o: V().set(0, 1.08, 0), r: 0.34 }, { o: V().set(0, 1.58, 0.02), r: 0.15, head: true }];
    this.list.push(s); return s;
  }
  playAct(s, name, ts = 1) {
    if (!s.mixer || !s.acts[name]) return; const a = s.acts[name]; a.timeScale = ts;
    if (s.cur === name) return; const prev = s.acts[s.cur]; a.reset().play(); if (prev) a.crossFadeFrom(prev, 0.25, false); s.cur = name;
  }
  poseArms(s, aiming) {
    // procedural "port arms" / aiming pose layered over the walk/idle clip
    const k = aiming ? 1 : 0.85;
    if (s.armR) { s.armR.rotation.x += -0.55 * k; s.armR.rotation.z += 0.25 * k; }
    if (s.armL) { s.armL.rotation.x += -0.75 * k; s.armL.rotation.z += -0.35 * k; }
    if (s.foreR) s.foreR.rotation.x += -0.9 * k;
    if (s.foreL) s.foreL.rotation.x += -1.1 * k;
    if (s.spine && s.state === 'advance') s.spine.rotation.x += 0.22;
  }
  poseLegs(s, dt) {
    // kneeling / crouched firing stance layered over the idle clip
    const want = s.pose === 'crouch' ? 1 : 0; s.crK = (s.crK || 0) + (want - (s.crK || 0)) * Math.min(1, dt * 5); const k = s.crK;
    if (k < 0.01 || !s.thL) return;
    if (s.hipScale === undefined) s.hipScale = s.hips ? 1 / s.hips.parent.getWorldScale(_b).y : 1;
    s.thR.rotation.x += -1.45 * k; s.caR.rotation.x += 1.55 * k;   // front knee up
    s.thL.rotation.x += 0.15 * k; s.caL.rotation.x += 2.0 * k;     // rear knee on the sand
    if (s.hips) s.hips.position.y -= 0.4 * k * (s.hipScale || 1);
    if (s.spine) s.spine.rotation.x += 0.2 * k;
  }
  disembark(s, worldPos, yaw) {
    const G = this.G; s.obj.removeFromParent(); G.scene.add(s.obj); s.obj.position.copy(worldPos); s.yaw = yaw; s.obj.rotation.set(0, yaw, 0);
    s.state = 'advance'; s.t = 0; this.pickGoal(s);
  }
  pickGoal(s) {
    const p = s.obj.position; const G = this.G;
    // advance by bounds toward the dunes, using hedgehogs as cover
    let best = null, bd = 1e9;
    if (p.z < -48 && Math.random() < 0.7) for (const h of G.world.hedgehogs) { const dz = h.z - p.z; if (dz > 6 && dz < 40 && Math.abs(h.x - p.x) < 14) { const d = dz + Math.abs(h.x - p.x) * 0.6 + Math.random() * 10; if (d < bd) { bd = d; best = h; } } }
    if (best) s.goal.set(best.x + rr(-0.5, 0.5), 0, best.z + 1.2); else {
      const zNext = Math.min(-10, p.z + rr(12, 24)); let x = p.x + rr(-8, 8); if (zNext > -30) x = x * 0.92 + Math.sign(x || 1) * rr(-2, 6);
      s.goal.set(clamp(x, -150, 150), 0, zNext);
    }
    s.final = s.goal.z >= -16;
  }
  updateSoldier(s, dt) {
    const G = this.G; s.t += dt; const p = s.obj.position;
    if (s.state === 'boat') { if (s.mixer) { s.mixer.update(dt); this.poseArms(s, false); } return; }
    if (s.state === 'dying') return this.updateDying(s, dt);
    const h = heightAt(p.x, p.z); const inWater = h < -0.2;
    if (s.state === 'advance') {
      _a.set(s.goal.x - p.x, 0, s.goal.z - p.z); const d = _a.length();
      if (d < 1.2) { s.state = s.final ? 'assault' : 'cover'; s.t = 0; s.hold = s.final ? 999 : rr(2.5, 6); }
      else {
        _a.multiplyScalar(1 / d); const sp = s.speed * (inWater ? clamp(1 + h * 0.35, 0.35, 0.8) : 1) * (G.diffSpeed || 1);
        p.x += _a.x * sp * dt; p.z += _a.z * sp * dt; s.yaw = lerpAng(s.yaw, Math.atan2(_a.x, _a.z), Math.min(1, dt * 6));
        // crawl the last stretch under the wire / near the dunes
        if (s.crawl === undefined && p.z > -46 && !s.final) s.crawl = Math.random() < 0.3;
        const crawl = s.crawl && p.z > -46 && p.z < -18;
        s.pose = crawl ? 'crawl' : null;
        if (crawl) { p.x -= _a.x * sp * dt * 0.7; p.z -= _a.z * sp * dt * 0.7; }
        this.playAct(s, 'walk', crawl ? 0.5 : sp * 0.55);
        if (inWater && Math.random() < dt * 4) G.fx.wake(_b.set(p.x, 0, p.z), 0.5);
        else if (!crawl && h > -0.15 && G.camDist(p) < 140) { s.stepD = (s.stepD || 0) + sp * dt; if (s.stepD > 1.5) { s.stepD = 0; G.fx.prints.add(p.x, p.z, 0.55, s.yaw + Math.PI, 0.85, undefined, 0.55, 0); } }
      }
    } else {
      // cover / assault: face the bunker and shoot
      const ty = Math.atan2(PLAYER.x - p.x, PLAYER.z - p.z); s.yaw = lerpAng(s.yaw, ty, Math.min(1, dt * 4)); this.playAct(s, 'idle', 1);
      s.pose = s.state === 'cover' ? (s.crawl && p.z > -46 ? 'prone' : 'crouch') : null;
      s.hold -= dt; if (s.hold <= 0) { s.state = 'advance'; this.pickGoal(s); }
      s.fireT -= dt;
      if (s.fireT <= 0) {
        s.fireT = s.state === 'assault' ? rr(1.0, 2.0) : rr(1.6, 3.4); const n = s.state === 'assault' ? 3 : 1 + (Math.random() < 0.4 ? 2 : 0);
        for (let i = 0; i < n; i++) setTimeout(() => s.alive && this.soldierShot(s), i * 110);
      }
    }
    // keep on the sand (wading soldiers sink to the water surface)
    const surf = inWater ? Math.max(h, h * 0.25 - 0.9) : h;
    p.y = surf; const lie = s.pose === 'crawl' || s.pose === 'prone';
    s.lieK = (s.lieK || 0) + ((lie ? 1 : 0) - (s.lieK || 0)) * Math.min(1, dt * 4);
    s.obj.rotation.set(s.lieK * 1.42, s.yaw, 0, 'YXZ'); p.y += s.lieK * 0.16;
    if (s.mixer && G.camDist(p) < 260) { s.mixer.update(dt); this.poseArms(s, s.state !== 'advance'); this.poseLegs(s, dt); }
    // hit volumes follow the stance
    const ck = s.crK || 0; s.spheres[0].o.y = 1.08 - ck * 0.38 - s.lieK * 0.8; s.spheres[1].o.y = 1.58 - ck * 0.5 - s.lieK * 1.3;
  }
  soldierShot(s) {
    const G = this.G; if (!s.muzzle) return; const from = s.muzzle.getWorldPosition(V());
    const tgt = AIM().add(_b.set(rr(-4, 4), rr(-1.8, 1.2), rr(-2.5, 1)));
    G.fx.muzzle(from, null, 0.5, false);
    if (Math.random() < 0.55) G.fx.tracer(from, _c.copy(tgt).sub(from).multiplyScalar(1.25).add(from), 420, Math.random() < 0.5 ? COLORS.tracerE ?? COLORS.tracer : COLORS.tracer, 0.07);
    const d = from.distanceTo(tgt); G.audio.rifle(d);
    const assault = s.state === 'assault';
    const hit = Math.random() < (assault ? 0.55 : 0.25) * (G.diffAcc || 1);
    setTimeout(() => {
      if (!G.running) return;
      if (hit) G.damageBase(assault ? 3.5 : 1.6, tgt, 'bullet');
      else if (d < 260) {
        const r = Math.random();
        if (r < 0.45) { // round smacks into the parapet lip in front of the gun
          const top = G.world.parapetTop ?? (PLAYER.h + 0.6);
          G.fx.impact(_c.set(PLAYER.x + rr(-3.4, 3.4), top - rr(0, 0.25), PLAYER.z - rr(2.0, 2.4)), 'concrete');
          if (Math.random() < 0.6) G.audio.whiz();
          G.shake?.(0.05);
        } else if (r < 0.75) { G.audio.whiz(); } // near miss overhead
        else G.fx.impact(_c.set(tgt.x + rr(-3, 3), 0, tgt.z - rr(4, 12)).setY(heightAt(_c.x, _c.z) + 0.1), 'sand');
      }
    }, d / 420 * 1000);
  }
  killSoldier(s, src, dir, blast) {
    const G = this.G; s.alive = false; s.state = 'dying'; s.t = 0; s.mixer && s.mixer.stopAllAction?.();
    const p = s.obj.position; if (s.obj.parent !== G.scene) { const wp = s.obj.getWorldPosition(V()); const wq = s.obj.getWorldQuaternion(new THREE.Quaternion()); s.obj.removeFromParent(); G.scene.add(s.obj); s.obj.position.copy(wp); s.obj.quaternion.copy(wq); s.yaw = new THREE.Euler().setFromQuaternion(wq, 'YXZ').y; }
    s.fall = { dir: Math.random() < 0.7 ? -1 : 1, twist: rr(-0.6, 0.6), dur: rr(0.55, 0.85) };
    if (blast) {
      const away = _a.copy(p).sub(blast).setY(0); const d = Math.max(1, away.length()); away.normalize();
      const pow = clamp(14 / d, 2, 9);
      s.fly = { v: V().set(away.x * pow, rr(4, 8) * Math.min(1.5, pow / 5), away.z * pow), w: V().set(rr(-6, 6), rr(-4, 4), rr(-6, 6)) };
      if (G.fx.blood) G.fx.bloodHit(_b.set(p.x, p.y + 1, p.z), away, 1.4);
    } else if (dir) {
      G.fx.bloodHit(_b.set(p.x, p.y + rr(1.0, 1.5), p.z), dir, 1);
      // fall away from the shot
      const local = Math.atan2(dir.x, dir.z) - s.yaw; s.fall.dir = Math.cos(local) > 0 ? 1 : -1;
    }
    G.killed(s, src);
    this.corpses.push(s);
    if (this.corpses.length > (G.quality === 'low' ? 18 : 40)) { const c = this.corpses.shift(); c.dispose(); }
    s.dispose = () => { s.obj.removeFromParent(); };
  }
  updateDying(s, dt) {
    const G = this.G; s.t += dt; const p = s.obj.position;
    if (s.fly) {
      s.fly.v.y -= 9.8 * dt; p.addScaledVector(s.fly.v, dt); s.obj.rotation.x += s.fly.w.x * dt; s.obj.rotation.z += s.fly.w.z * dt; s.obj.rotation.y += s.fly.w.y * dt;
      const h = Math.max(heightAt(p.x, p.z), -1.2);
      if (p.y <= h && s.fly.v.y < 0) { p.y = h; G.fx.dust(_a.set(p.x, h + 0.3, p.z), 0.6); s.fly = null; s.obj.rotation.set((Math.random() < 0.5 ? -1 : 1) * Math.PI / 2, s.obj.rotation.y, rr(-0.3, 0.3)); s.lieY = h + 0.12; p.y = s.lieY; if (h > -0.2) G.fx.bloodPool(p.x, p.z, 1.2); }
      return;
    }
    if (s.lieY !== undefined) { if (s.t > 45) { p.y -= dt * 0.25; if (s.t > 50) { s.dispose(); const i = this.corpses.indexOf(s); if (i >= 0) this.corpses.splice(i, 1); } } return; }
    const f = s.fall; const k = clamp(s.t / f.dur, 0, 1); const e = k * k;
    s.obj.rotation.set(f.dir * e * Math.PI / 2 * 0.98, s.yaw + f.twist * e, 0, 'YXZ');
    const h = Math.max(heightAt(p.x, p.z), -1.2); p.y = h + 0.12 * e;
    if (k >= 1) { s.lieY = p.y; if (h > -0.2) G.fx.bloodPool(p.x + Math.sin(s.yaw) * f.dir * 0.9, p.z + Math.cos(s.yaw) * f.dir * 0.9, 1); }
  }
  // ---------------------------------------------------------------- landing craft
  spawnLCVP(x, troops, z0) {
    const G = this.G; const { group, ramp } = makeLCVP({ hull: this.hullMat, dark: this.darkMat, n: (this.lcvpN = (this.lcvpN || 0) + 1) });
    const zl = beachZ(x, 0.9); const e = { type: 'lcvp', obj: group, ramp, alive: true, hp: 240, x, z: z0 !== undefined ? Math.min(z0, zl - 0.5) : -430 - rr(0, 120), zl, speed: rr(6.5, 8.5), state: 'run', t: 0, troops: [], yaw: Math.PI * 0 + 0, spheres: [{ o: V(0, 0.4, -3.4), r: 2.0 }, { o: V(0, 0.4, 0), r: 2.0 }, { o: V(0, 0.4, 3.4), r: 2.0 }], metal: true, score: 300 };
    e.obj.position.set(x, 0, e.z); G.scene.add(e.obj);
    const n = Math.min(troops, Math.max(0, this.maxSoldiers - this.soldiersAlive()));
    for (let i = 0; i < n; i++) { const row = Math.floor(i / 3), col = i % 3; e.troops.push(this.makeSoldier(e.obj, V((col - 1) * 0.85 + rr(-0.08, 0.08), -0.62, 3.0 - row * 0.95))); }
    e.dispose = () => e.obj.removeFromParent();
    this.list.push(e); return e;
  }
  // troops already ashore and running (used to open wave 1 mid-assault)
  spawnBeachSquad(n, x0, z0) {
    for (let i = 0; i < n; i++) { if (this.soldiersAlive() >= this.maxSoldiers) break; const s = this.makeSoldier(null, V()); this.disembark(s, V(x0 + rr(-7, 7), 0, z0 + rr(-6, 6)), 0); s.yaw = 0; }
  }
  spawnRIB(x, troops) {
    const G = this.G; const m = this.mil.rib; if (!m) return this.spawnLCVP(x, troops);
    const obj = new THREE.Group(); const b = m.clone(); obj.add(b);
    const zl = beachZ(x, 0.5); const e = { type: 'rib', obj, alive: true, hp: 90, x, z: -600 - rr(0, 200), zl, speed: rr(13, 16), state: 'run', t: 0, troops: [], spheres: [{ o: V(0, 0.8, -2.4), r: 1.7 }, { o: V(0, 0.8, 1.6), r: 1.7 }], metal: true, score: 150 };
    obj.position.set(x, 0, e.z); G.scene.add(obj);
    const n = Math.min(troops, Math.max(0, this.maxSoldiers - this.soldiersAlive()));
    for (let i = 0; i < n; i++) { const s = this.makeSoldier(obj, V(i % 2 ? 0.55 : -0.55, 0.15, 1.5 - Math.floor(i / 2) * 1.3)); e.troops.push(s); }
    e.dispose = () => obj.removeFromParent();
    this.list.push(e); return e;
  }
  updateBoat(e, dt) {
    const G = this.G; e.t += dt; const o = e.obj;
    if (!e.alive) { // sinking wreck
      o.position.y -= dt * 0.35; o.rotation.x += dt * 0.04; o.rotation.z += dt * 0.05 * e.sinkDir;
      if (e.t < 12 && Math.random() < dt * 8) G.fx.burn(_a.set(o.position.x, Math.max(0.3, o.position.y + 1), o.position.z), 0.9);
      if (o.position.y < -6) { e.dead = true; e.dispose(); }
      return;
    }
    if (e.state === 'run') {
      const wob = Math.sin(e.t * 0.3 + e.x) * 0.15;
      e.z += e.speed * dt; e.x += wob * dt * 2;
      if (e.z >= e.zl) { e.z = e.zl; e.state = 'land'; e.t = 0; }
      if (Math.random() < dt * (e.type === 'rib' ? 30 : 18)) G.fx.wake(_a.set(e.x + rr(-1.5, 1.5), 0, e.z + rr(3.5, 5.5)), e.type === 'rib' ? 0.8 : 1.1);
      if (Math.random() < dt * 10) G.fx.wake(_a.set(e.x + rr(-1.5, 1.5), 0, e.z - 5), 0.7);
    } else if (e.state === 'land') {
      if (e.ramp) e.ramp.rotation.x = clamp(e.t / 1.3, 0, 1) * 1.45;
      const gap = e.type === 'rib' ? 0.3 : 0.45; const startT = e.ramp ? 1.4 : 0.3;
      while (e.troops.length && e.t > startT + (e.out || 0) * gap) {
        const s = e.troops.shift(); e.out = (e.out || 0) + 1; if (!s.alive) continue;
        const wp = s.obj.getWorldPosition(V()); wp.z += e.type === 'rib' ? 0 : 2.5; wp.x += e.type === 'rib' ? (wp.x > e.x ? 1.2 : -1.2) : 0;
        this.disembark(s, wp, 0);
      }
      if (!e.troops.length && e.t > startT + 5) { e.state = 'leave'; e.t = 0; e.leaving = true; }
    } else if (e.state === 'leave') {
      if (e.ramp) e.ramp.rotation.x = clamp(1.45 - e.t / 1.5, 0, 1.45);
      if (e.t > 1.5) { e.z -= e.speed * 0.6 * dt * Math.min(1, (e.t - 1.5) / 3); }
      if (e.z < -520) { e.alive = false; e.dead = true; e.dispose(); return; }
    }
    // ride the swell
    const L = 4.5; const yb = waveAt(e.x, e.z + L, G.time), ys = waveAt(e.x, e.z - L, G.time), yl = waveAt(e.x - 1.4, e.z, G.time), yr = waveAt(e.x + 1.4, e.z, G.time);
    const ground = heightAt(e.x, e.z) + 1.0; let y = Math.max((yb + ys) * 0.5, ground - 1.0);
    o.position.set(e.x, y + (e.type === 'rib' ? -0.25 : 0), e.z); o.rotation.set(-Math.atan2(yb - ys, 2 * L) * 0.8, 0, Math.atan2(yl - yr, 2.8) * 0.6, 'YXZ');
    if (e.state === 'leave') o.rotation.y = 0;
  }
  // ---------------------------------------------------------------- armour
  spawnTank(x, ifv) {
    const G = this.G; const m = this.mil[ifv ? 'ifv' : 'tank']; if (!m) return null;
    const obj = new THREE.Group(); const b = SkeletonUtils.clone(m); obj.add(b);
    let turret = null, gun = null, ramp = null; b.traverse((o) => { if (o.name === 'turret') turret = o; if (o.name === 'gun') gun = o; if (o.name === 'ramp') ramp = o; });
    const e = { type: ifv ? 'ifv' : 'tank', obj, turret, gun, ramp, alive: true, hp: ifv ? 420 : 720, x, z: -330 - rr(0, 80), speed: ifv ? 4.2 : 3.4, state: 'swim', t: 0, stopZ: rr(-46, -28), fireT: rr(4, 7), yaw: 0, armor: true, troops: ifv ? 4 : 0, spheres: [{ o: V(0, 1.3, -2.6), r: 2.0 }, { o: V(0, 1.3, 0), r: 2.1 }, { o: V(0, 1.3, 2.6), r: 2.0 }, { o: V(0, 2.8, 0), r: 1.5 }], metal: true, score: ifv ? 450 : 600 };
    obj.position.set(x, -2, e.z); G.scene.add(obj);
    e.dispose = () => obj.removeFromParent(); this.list.push(e); return e;
  }
  updateTank(e, dt) {
    const G = this.G; e.t += dt; const o = e.obj;
    if (!e.alive) { if (e.t < 25 && Math.random() < dt * 9) G.fx.burn(_a.set(o.position.x, o.position.y + 2.2, o.position.z), 1.2); if (e.turretFly) { const f = e.turretFly; f.v.y -= 9.8 * dt; f.o.position.addScaledVector(f.v, dt); f.o.rotation.x += f.w * dt; const h = heightAt(f.o.position.x, f.o.position.z); if (f.o.position.y < h + 0.8) { f.o.position.y = h + 0.8; f.v.set(0, 0, 0); f.w = 0; } } if (e.t > 40) { e.dead = true; e.dispose(); } return; }
    const h = heightAt(e.x, e.z);
    if (e.state === 'swim' || e.state === 'drive') {
      e.z += e.speed * dt * (h < -1 ? 0.8 : 1);
      if (e.z >= e.stopZ) { e.state = 'fight'; e.t = 0; }
      if (h < -0.5 && Math.random() < dt * 14) G.fx.wake(_a.set(e.x + rr(-2, 2), 0, e.z + rr(2.5, 4.5)), 1.1);
      if (h > -0.3) { e.trD = (e.trD || 0) + e.speed * dt; if (e.trD > 1.3) { e.trD = 0; const w = e.type === 'tank' ? 1.45 : 1.25; for (const sx of [-1, 1]) G.fx.prints.add(e.x + sx * w, e.z - 2.5, 0.75, 0, 0.9, undefined, 1.35, 1); } }
      if (h > 0 && Math.random() < dt * 6) G.fx.dust(_a.set(e.x + rr(-1.8, 1.8), h + 0.4, e.z - 4), 1.0);
      if (e.type === 'ifv' && e.troops && e.z > -58 && h > 0.2) { // drop squad from the rear ramp
        if (e.ramp) e.ramp.rotation.x = -1.2;
        while (e.troops > 0) { e.troops--; const s = this.makeSoldier(null, V()); this.disembark(s, V(e.x + rr(-1, 1), 0, e.z - 4.5), rr(-0.3, 0.3)); s.yaw = 0; }
      }
    } else {
      e.fireT -= dt;
      if (e.fireT <= 0) { e.fireT = e.type === 'tank' ? rr(6, 9) / (G.diffRof || 1) : rr(3.5, 5.5); this.tankFire(e); }
    }
    // pose on terrain / seabed
    const fwd = 3.2; const hf = heightAt(e.x, e.z + fwd), hb = heightAt(e.x, e.z - fwd);
    let y = (hf + hb) * 0.5; const pitch = Math.atan2(hf - hb, fwd * 2);
    o.position.set(e.x, y, e.z); o.rotation.set(-pitch, e.yaw, 0, 'YXZ');
    if (e.turret) { const want = Math.atan2(PLAYER.x - e.x, PLAYER.z - e.z); e.turret.rotation.y = lerpAng(e.turret.rotation.y, want, Math.min(1, dt * 1.2)); }
    if (e.gun) e.gun.rotation.x = lerpAng(e.gun.rotation.x, -0.12, dt);
  }
  tankFire(e) {
    const G = this.G; const o = e.obj; o.updateMatrixWorld(true);
    const from = (e.gun || o).localToWorld(V(0, 0, e.type === 'tank' ? 5.2 : 3)); if (e.gun === undefined || !e.gun) from.copy(o.position).add(_a.set(0, 2.6, 4));
    const dir = _a.copy(AIM()).sub(from).normalize();
    G.fx.muzzle(from, dir, e.type === 'tank' ? 4 : 1.5, true); G.fx.trailPuff(from, 2.2, COLORS.smoke, 0.6);
    G.audio.cannon && G.audio.boom(from.distanceTo(AIM()) * 0.6, 0.5);
    if (e.type === 'ifv') { for (let i = 0; i < 5; i++) setTimeout(() => { if (!e.alive || !G.running) return; const t = AIM().add(_b.set(rr(-5, 5), rr(-2.5, 1), rr(-4, 1))); G.fx.tracer(from, t, 600, COLORS.tracer, 0.14); setTimeout(() => { if (!G.running) return; if (Math.random() < 0.3 * (G.diffAcc || 1)) G.damageBase(3, t, 'shell'); else { G.fx.impact(_c.set(t.x, heightAt(t.x, t.z) + 0.2, t.z - 3), 'sand'); } }, 180); }, i * 160); return; }
    const hit = Math.random() < 0.38 * (G.diffAcc || 1);
    const tgt = hit ? AIM().add(_b.set(rr(-1.5, 1.5), -0.8, -1.5)) : AIM().add(_b.set(rr(-14, 14), 0, rr(-30, -6)));
    if (!hit) tgt.y = heightAt(tgt.x, tgt.z);
    this.proj.push({ kind: 'shell', p: from.clone(), v: tgt.clone().sub(from).normalize().multiplyScalar(260), tgt, hit, dmg: 42, life: 3 });
  }
  // ---------------------------------------------------------------- aircraft
  spawnHeli(kind) {
    const G = this.G; const m = this.mil[kind] || this.mil.heli; if (!m) return null;
    const obj = new THREE.Group(); const b = m.clone(); obj.add(b);
    const rotors = []; b.traverse((o) => { if (/^(main_rotor|tail_rotor|front_rotor|rear_rotor)$/.test(o.name)) rotors.push(o); });
    const side = Math.random() < 0.5 ? -1 : 1;
    const e = { type: kind, obj, rotors, alive: true, hp: kind === 'chinook' ? 520 : kind === 'gunship' ? 280 : 170, air: true, state: 'in', t: 0, p: V(side * rr(60, 240), rr(70, 110), -900 - rr(0, 300)), v: V(), fireT: rr(3, 5), yaw: 0, metal: true, score: kind === 'chinook' ? 700 : kind === 'gunship' ? 550 : 400,
      spheres: kind === 'chinook' ? [{ o: V(0, 2.4, -6.5), r: 3 }, { o: V(0, 2.4, 0), r: 3 }, { o: V(0, 2.4, 6.5), r: 3 }] : [{ o: V(0, 1.6, 0.6), r: 2.2 }, { o: V(0, 1.8, -4.2), r: 1.2 }] };
    if (kind === 'chinook') { e.hover = V(rr(-60, 60), 0, rr(-52, -34)); e.hover.y = heightAt(e.hover.x, e.hover.z) + 2.2; e.troops = Math.min(8, Math.max(0, this.maxSoldiers - this.soldiersAlive())); }
    else e.hover = V(rr(-110, 110), rr(28, 48), rr(-190, -105));
    obj.position.copy(e.p); G.scene.add(obj);
    e.snd = G.audio.loop && G.audio.loop('heli');
    e.dispose = () => { obj.removeFromParent(); e.snd && e.snd.stop(); };
    this.list.push(e); return e;
  }
  updateHeli(e, dt) {
    const G = this.G; e.t += dt; const o = e.obj;
    for (const r of e.rotors) r.rotation.y += dt * (/tail/.test(r.name) ? 70 : r.name === 'rear_rotor' ? -26 : 26);
    if (e.snd) e.snd.set(clamp(0.7 - G.camDist(e.p) / 900, 0, 0.6));
    if (!e.alive) {
      e.v.y -= 9.8 * dt * 0.8; e.p.addScaledVector(e.v, dt); e.spin += dt * 4; o.rotation.y += e.spin * dt; o.rotation.z += dt * 0.4;
      if (Math.random() < dt * 40) G.fx.burn(_a.copy(e.p).setY(e.p.y + 1), 0.7);
      const h = heightAt(e.p.x, e.p.z); const floor = Math.max(h, 0);
      if (e.p.y <= floor + 0.5) { G.explode(_a.copy(e.p).setY(floor + 0.3), 2.0, { big: true, metal: true, water: h < -0.5 }); e.dead = true; e.dispose(); }
      o.position.copy(e.p); return;
    }
    const target = e.state === 'out' ? _b.set(e.p.x + Math.sign(e.p.x || 1) * 200, 90, -1100) : e.hover;
    _a.copy(target).sub(e.p); const d = _a.length();
    const maxSp = e.state === 'in' ? 42 : e.state === 'out' ? 38 : 9;
    const want = _a.multiplyScalar(d > 1 ? Math.min(maxSp, d * 0.6) / d : 0);
    e.v.lerp(want, Math.min(1, dt * 0.9)); e.p.addScaledVector(e.v, dt);
    if (e.state === 'in' && d < 25) { e.state = 'hold'; e.t = 0; }
    if (e.state === 'hold') {
      if (e.type === 'chinook') {
        if (e.t > 2.5 && e.troops > 0 && e.t > 2.5 + (8 - e.troops) * 0.45) { e.troops--; const s = this.makeSoldier(null, V()); o.updateMatrixWorld(true); const wp = o.localToWorld(V(rr(-0.6, 0.6), 0, -12.5)); wp.y = heightAt(wp.x, wp.z); this.disembark(s, wp, 0); }
        if (e.t > 9) { e.state = 'out'; e.leaving = true; }
        if (Math.random() < dt * 25) G.fx.dust(_c.set(e.p.x + rr(-14, 14), heightAt(e.p.x, e.p.z) + 0.5, e.p.z + rr(-14, 14)), 2.2);
      } else {
        e.hover.x += Math.sin(e.t * 0.4) * dt * 6; e.fireT -= dt;
        if (e.fireT <= 0) { e.fireT = rr(4.5, 7) / (G.diffRof || 1); this.heliFire(e); }
        if (e.t > 26) { e.hover.set(rr(-110, 110), rr(28, 48), rr(-190, -105)); e.t = 0; }
      }
    }
    if (e.state === 'out' && e.p.z < -1000) { e.alive = false; e.dead = true; e.dispose(); return; }
    // attitude: nose down when accelerating, face the bunker while holding
    const vy = e.state === 'hold' ? Math.atan2(PLAYER.x - e.p.x, PLAYER.z - e.p.z) : Math.atan2(e.v.x, e.v.z);
    e.yaw = lerpAng(e.yaw, vy, Math.min(1, dt * 1.5));
    const fwdSpeed = e.v.x * Math.sin(e.yaw) + e.v.z * Math.cos(e.yaw);
    o.position.copy(e.p).add(_c.set(0, Math.sin(e.t * 1.3) * 0.3, 0)); o.rotation.set(clamp(fwdSpeed * 0.012, -0.3, 0.35), e.yaw, clamp(-(e.v.x * Math.cos(e.yaw) - e.v.z * Math.sin(e.yaw)) * 0.015, -0.4, 0.4), 'YXZ');
  }
  heliFire(e) {
    const G = this.G; const o = e.obj; o.updateMatrixWorld(true);
    if (e.type === 'gunship') { // door gun burst
      const from = o.localToWorld(V(1.4, 1.2, 1));
      for (let i = 0; i < 10; i++) setTimeout(() => { if (!e.alive || !G.running) return; const t = AIM().add(_b.set(rr(-5, 5), rr(-2, 1), rr(-4, 1))); G.fx.tracer(from, t, 500); G.fx.muzzle(from, null, 0.6, false); if (i % 3 === 0) G.audio.rifle(from.distanceTo(t) * 0.5); setTimeout(() => { if (!G.running) return; if (Math.random() < 0.18 * (G.diffAcc || 1)) G.damageBase(2.2, t, 'bullet'); else G.fx.impact(_c.set(t.x, heightAt(t.x, t.z) + 0.2, t.z - 3), 'sand'); }, 150); }, i * 90);
      return;
    }
    for (const sx of [-1.1, 1.1]) {
      const from = o.localToWorld(V(sx, 0.6, 1.5)); const hit = Math.random() < 0.4 * (G.diffAcc || 1);
      const tgt = hit ? AIM().add(_b.set(rr(-1, 1), -0.6, -1)) : AIM().add(_b.set(rr(-16, 16), 0, rr(-28, -4))); if (!hit) tgt.y = heightAt(tgt.x, tgt.z);
      setTimeout(() => { if (!e.alive || !G.running) return; this.proj.push({ kind: 'rocket', p: from.clone(), v: tgt.clone().sub(from).normalize().multiplyScalar(110), tgt, hit, dmg: 24, life: 4 }); G.fx.muzzle(from, null, 1.2, true); G.audio.missile(); }, sx > 0 ? 250 : 0);
    }
  }
  spawnJet(kind = 'jet') {
    const G = this.G; const m = this.mil[kind] || this.mil.jet; if (!m) return null;
    const obj = new THREE.Group(); obj.add(m.clone());
    const x0 = rr(-260, 260), alt = rr(55, 85);
    const e = { type: kind, obj, alive: true, hp: kind === 'prop' ? 110 : 140, air: true, p: V(x0, alt + 40, -2600), v: V(), t: 0, dropped: false, metal: true, score: 650, spheres: [{ o: V(0, 1.4, 0.5), r: 3.4 }, { o: V(0, 1.4, -5), r: 2.4 }] };
    const tgt = V(PLAYER.x + rr(-25, 25), alt, PLAYER.z + 600); e.v.copy(tgt).sub(e.p).normalize().multiplyScalar(kind === 'prop' ? 95 : 165);
    obj.position.copy(e.p); G.scene.add(obj); e.dispose = () => obj.removeFromParent(); e.warned = false;
    this.list.push(e); return e;
  }
  updateJet(e, dt) {
    const G = this.G; e.t += dt; const o = e.obj;
    if (!e.alive) { e.v.y -= 9.8 * dt; e.p.addScaledVector(e.v, dt); o.rotation.z += dt * 2; if (Math.random() < dt * 40) G.fx.burn(_a.copy(e.p), 0.8); const h = Math.max(0, heightAt(e.p.x, e.p.z)); if (e.p.y < h + 1) { G.explode(_a.copy(e.p).setY(h + 0.5), 2.4, { big: true, metal: true, water: heightAt(e.p.x, e.p.z) < -0.5 }); e.dead = true; e.dispose(); } o.position.copy(e.p); return; }
    e.p.addScaledVector(e.v, dt); o.position.copy(e.p); o.rotation.set(0, Math.atan2(e.v.x, e.v.z), Math.sin(e.t * 0.7) * 0.15, 'YXZ');
    const dz = PLAYER.z - e.p.z;
    if (!e.warned && dz < 1500) { e.warned = true; G.audio.jet(dz); G.warn('敌机来袭！'); }
    if (G.quality !== 'low' && Math.random() < dt * 20) G.fx.glowAt(o.localToWorld(_a.set(0, 1.3, -7.6)), 2.4, 0.08, COLORS.hot, 1.5);
    if (!e.dropped && dz < (e.type === 'prop' ? 380 : 520)) {
      e.dropped = true; const n = e.type === 'prop' ? 0 : 2;
      for (let i = 0; i < n; i++) { const hit = Math.random() < 0.45 * (G.diffAcc || 1); const tgt = hit ? AIM().add(_b.set(rr(-2, 2), -1.2, rr(-3, 0))) : AIM().add(_b.set(rr(-30, 30), 0, rr(-45, 10))); if (!hit) tgt.y = heightAt(tgt.x, tgt.z); const T = Math.max(1.2, (tgt.z - e.p.z) / e.v.z); const v0 = V((tgt.x - e.p.x) / T, (tgt.y - e.p.y + 4.9 * T * T) / T, (tgt.z - e.p.z) / T); this.proj.push({ kind: 'bomb', p: e.p.clone().add(_a.set(i ? 1.5 : -1.5, -1, 0)), v: v0, g: 9.8, tgt, hit, dmg: 55, life: T + 1 }); }
      if (e.type === 'prop') { const from = e.p.clone(); for (let i = 0; i < 14; i++) setTimeout(() => { if (!G.running) return; const f = e.p.clone(); const t = AIM().add(_b.set(rr(-6, 6), -1, rr(-14, 4))); t.y = Math.min(t.y, heightAt(t.x, t.z) + 0.3); G.fx.tracer(f, t, 700, COLORS.tracer, 0.16); setTimeout(() => { G.fx.impact(t, 'sand'); if (Math.random() < 0.2) G.damageBase(3, t, 'bullet'); }, 120); }, i * 60); }
    }
    if (e.p.z > PLAYER.z + 2000) { e.alive = false; e.dead = true; e.dispose(); }
  }
  // ---------------------------------------------------------------- projectiles aimed at the bunker
  updateProj(dt) {
    const G = this.G;
    for (let i = 0; i < this.proj.length; i++) {
      const p = this.proj[i]; p.life -= dt; const prev = _a.copy(p.p);
      if (p.g) p.v.y -= p.g * dt; p.p.addScaledVector(p.v, dt);
      if (p.kind === 'rocket') { if (Math.random() < dt * 60) G.fx.trailPuff(p.p, 0.7, COLORS.smoke, 0.45); G.fx.glowAt(p.p, 1.6, 0.05, COLORS.hot, 2); }
      if (p.kind === 'shell') { G.fx.glowAt(p.p, 0.9, 0.04, COLORS.hot, 2); }
      if (p.kind === 'bomb' && !p.whist && p.p.distanceTo(AIM()) < 140) { p.whist = true; G.audio.incoming(); }
      const reached = p.p.distanceTo(p.tgt) < Math.max(3, p.v.length() * dt * 1.2) || p.p.y < heightAt(p.p.x, p.p.z) || p.life <= 0;
      if (reached) {
        if (p.hit) { G.damageBase(p.dmg * (G.diffDmg || 1), p.tgt, p.kind); G.explode(p.tgt.clone().add(_b.set(0, 0, -2.5)), p.kind === 'bomb' ? 1.6 : 1.0, { crater: false, near: true }); }
        else G.explode(_c.set(p.p.x, heightAt(p.p.x, p.p.z), p.p.z), p.kind === 'bomb' ? 1.8 : 1.1, {});
        this.proj.splice(i, 1); i--;
      }
    }
  }
  update(dt) {
    for (let i = 0; i < this.list.length; i++) {
      const e = this.list[i];
      if (e.type === 'soldier') this.updateSoldier(e, dt);
      else if (e.type === 'lcvp' || e.type === 'rib') this.updateBoat(e, dt);
      else if (e.type === 'tank' || e.type === 'ifv') this.updateTank(e, dt);
      else if (e.type === 'heli' || e.type === 'gunship' || e.type === 'chinook') this.updateHeli(e, dt);
      else if (e.type === 'jet' || e.type === 'prop') this.updateJet(e, dt);
      if (e.dead || (e.type === 'soldier' && !e.alive)) { this.list.splice(i, 1); i--; }
    }
    for (const c of this.corpses) if (c.state === 'dying') this.updateDying(c, dt);
    this.updateProj(dt);
  }
  // ---------------------------------------------------------------- damage
  rayHit(origin, dir, maxD) {
    let best = null, bd = maxD;
    for (const e of this.list) {
      if (!e.alive || !e.spheres) continue; const o = e.obj; if (!o.parent) continue;
      if (e.type === 'soldier' && e.state === 'boat') { /* still hittable above the gunwale */ }
      o.updateMatrixWorld(); const sc = e.type === 'soldier' ? 1 : 1;
      for (const s of e.spheres) {
        const c = _c.copy(s.o).applyMatrix4(e.type === 'soldier' ? _m.makeTranslation(o.getWorldPosition(_a)) : o.matrixWorld);
        if (e.type === 'soldier' && e.state === 'boat') { /* world pos already via translation */ }
        const L = _b.copy(c).sub(origin); const tca = L.dot(dir); if (tca < 0) continue; const d2 = L.lengthSq() - tca * tca; const r = s.r * sc; if (d2 > r * r) continue;
        const t = tca - Math.sqrt(r * r - d2); if (t < bd) { bd = t; best = { e, t, head: !!s.head, point: origin.clone().addScaledVector(dir, t) }; }
      }
    }
    return best;
  }
  damage(e, dmg, kind, point, dir, blast) {
    const G = this.G; if (!e.alive) return false;
    const mult = { soldier: { mg: 1, he: 1, missile: 1 }, lcvp: { mg: 0.32, he: 1, missile: 1 }, rib: { mg: 1, he: 1.2, missile: 1 }, tank: { mg: 0.03, he: 1, missile: 1.1 }, ifv: { mg: 0.12, he: 1, missile: 1.1 }, heli: { mg: 0.7, he: 1, missile: 1.6 }, gunship: { mg: 0.6, he: 1, missile: 1.6 }, chinook: { mg: 0.5, he: 1, missile: 1.4 }, jet: { mg: 0.55, he: 1, missile: 2.5 }, prop: { mg: 0.8, he: 1, missile: 2.5 } }[e.type] || { mg: 1, he: 1, missile: 1 };
    e.hp -= dmg * (mult[kind] ?? 1);
    if (e.hp > 0) { if (e.type === 'soldier' && point) G.fx.bloodHit(point, dir || _up, 0.8); return false; }
    e.alive = false;
    if (e.type === 'soldier') { this.killSoldier(e, kind, dir, blast); return true; }
    this.destroy(e, kind);
    return true;
  }
  destroy(e, kind) {
    const G = this.G; const o = e.obj; e.t = 0; G.killed(e, kind);
    const wp = o.getWorldPosition(V());
    if (e.type === 'lcvp' || e.type === 'rib') {
      G.explode(wp.clone().setY(1), e.type === 'lcvp' ? 1.8 : 1.3, { water: true, big: true });
      G.fx.explosion(wp.clone().setY(1.6), 1.2, { water: false, crater: false, metal: true });
      for (const s of e.troops) if (s.alive) { s.alive = false; this.killSoldier(s, 'he', null, wp.clone().setY(-1)); }
      e.troops.length = 0; e.sinkDir = Math.random() < 0.5 ? -1 : 1;
    } else if (e.type === 'tank' || e.type === 'ifv') {
      G.explode(wp.clone().setY(wp.y + 1.5), 2.2, { big: true, metal: true, crater: true });
      o.traverse((c) => { if (c.isMesh && c.material) { c.material = c.material.clone(); c.material.color && c.material.color.multiplyScalar(0.25); } });
      if (e.turret && e.type === 'tank') { const t = e.turret; const tw = t.getWorldPosition(V()); G.scene.attach(t); e.turretFly = { o: t, v: V(rr(-3, 3), rr(9, 13), rr(-3, 3)), w: rr(-3, 3) }; }
      e.dead = false; // keep burning wreck
    } else if (e.air) {
      G.fx.explosion(wp, 1.3, { crater: false, metal: true }); G.audio.boom(G.camDist(wp), 1.3);
      e.v.multiplyScalar(0.7); e.spin = rr(1, 3) * (Math.random() < 0.5 ? -1 : 1);
      if (e.type === 'jet' || e.type === 'prop') { G.fx.explosion(wp, 2.2, { crater: false, big: true }); }
    }
  }
  blast(p, r, dmg, kind = 'he') {
    let n = 0;
    for (const e of this.list) {
      if (!e.alive) continue; const c = e.obj.getWorldPosition(_a); if (e.type !== 'soldier') c.y += 1.2;
      const d = c.distanceTo(p); const rr2 = r + (e.type === 'soldier' ? 0 : e.type === 'chinook' ? 7 : 3);
      if (d > rr2) continue; const f = 1 - d / rr2;
      if (e.type === 'soldier' && e.state === 'boat') continue; // protected by the hull until it is hit
      if (this.damage(e, dmg * (0.35 + 0.65 * f), kind, null, null, p.clone())) n++;
    }
    return n;
  }
}
