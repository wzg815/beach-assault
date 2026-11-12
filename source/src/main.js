import * as THREE from 'three';
import { loadAssets } from './assets.js';
import { makeRenderer, makePost } from './render.js';
import { makeSkyDome, sunDir, horizonColor, SKY } from './sky.js';
import { makeOcean, makeHeightTex } from './ocean.js';
import { buildWorld } from './world.js';
import { FX } from './fx.js';
import { Enemies } from './enemies.js';
import { Weapons, WEAPONS } from './weapons.js';
import { makeAudio } from './audio.js';
import { PLAYER, heightAt } from './terrain.js';

const $ = (id) => document.getElementById(id);
const rr = (a, b) => a + Math.random() * (b - a);
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const touch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
const qs = new URLSearchParams(location.search);
const LS = 'qtdl.v1.';
const store = { get(k, d) { try { const v = localStorage.getItem(LS + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(LS + k, JSON.stringify(v)); } catch (e) {} } };
const settings = Object.assign({ q: touch ? 'mid' : 'high', gore: 1, vol: 80, sens: 100, fps: 0 }, store.get('settings', {}));
if (qs.get('q')) settings.q = qs.get('q');
if (touch) document.body.classList.add('touch');
if (touch) $('rot').classList.add('need');

const canvas = $('c');
const renderer = makeRenderer(canvas, settings.q);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 9000);
scene.add(camera);
// soft fill so the gun and gunner read against the bright sea (sky bounce off the concrete)
{ const fill = new THREE.PointLight(0xc8bca8, 9, 5, 2); fill.position.set(0.25, 0.45, 0.15); camera.add(fill); }
const CAM = new THREE.Vector3(PLAYER.x, PLAYER.h + 1.62, PLAYER.z + 0.3);
camera.position.copy(CAM);
const audio = makeAudio(); audio.setVol(settings.vol / 100);

const G = {
  scene, camera, audio, quality: settings.q, time: 0, running: false, state: 'boot',
  camDist: (p) => camera.position.distanceTo(p),
};
window.__G = G;

let post, sun, fx, enemies, weapons, ocean, world, A;
const MAXW = 10;
const DIFF = [
  { name: '新兵', hp: 1400, acc: 0.65, dmg: 0.7, spd: 0.92, rof: 0.8, mul: 0.8 },
  { name: '老兵', hp: 1000, acc: 1, dmg: 1, spd: 1, rof: 1, mul: 1 },
  { name: '精英', hp: 800, acc: 1.3, dmg: 1.25, spd: 1.12, rof: 1.25, mul: 1.4 },
];
let diff = store.get('diff', 1);

async function boot() {
  const tier = touch ? 'lo' : 'hi';
  const bar = $('bar').firstElementChild, msg = $('bootmsg');
  A = await loadAssets(renderer, tier, (f, got, total) => { bar.style.width = (f * 100).toFixed(1) + '%'; msg.textContent = `正在加载战场 ${Math.round(f * 100)}%  (${(got / 1048576).toFixed(1)} / ${(total / 1048576).toFixed(1)} MB)`; });
  G.A = A; msg.textContent = '正在部署海岸防线…';
  await new Promise((r) => setTimeout(r, 30));
  setupScene();
  bar.style.width = '100%';
  // warm up shaders
  try { renderer.compile(scene, camera); } catch (e) {}
  resize(); render(0.016);
  $('boot').classList.add('done'); setTimeout(() => $('boot').classList.add('hide'), 900);
  showMenu();
  G.state = 'menu';
}

function setupScene() {
  const sky = A.tex.sky_bg; sky.colorSpace = THREE.NoColorSpace;
  scene.add(makeSkyDome(sky));
  const hz = horizonColor(sky); G.horizon = hz;
  scene.fog = new THREE.FogExp2(hz.clone().multiplyScalar(0.62 * 0.9), 0.0011);
  const sd = sunDir(13); G.sunDir = sd; const sunCol = new THREE.Color(1.0, 0.8, 0.6);
  sun = new THREE.DirectionalLight(sunCol, 3.2); sun.position.copy(sd).multiplyScalar(320).add(new THREE.Vector3(0, 0, -60)); sun.target.position.set(0, 0, -60); scene.add(sun, sun.target);
  sun.castShadow = true; const sm = G.quality === 'high' ? 2048 : G.quality === 'mid' ? 1536 : 1024; sun.shadow.mapSize.set(sm, sm);
  const sc = sun.shadow.camera; sc.left = -150; sc.right = 150; sc.top = 130; sc.bottom = -130; sc.near = 10; sc.far = 800; sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.6;
  const amb = new THREE.HemisphereLight(0x9aa6b8, 0x5a4a3a, 0.35); scene.add(amb);
  if (A.env) { const pm = new THREE.PMREMGenerator(renderer); const env = pm.fromEquirectangular(A.env).texture; scene.environment = env; scene.environmentIntensity = 0.55; scene.environmentRotation = new THREE.Euler(0, -SKY.rot, 0); pm.dispose(); }
  world = buildWorld(A, scene, G.quality, hz); G.world = world;
  const ht = makeHeightTex(G.quality === 'low' ? 384 : 640);
  ocean = makeOcean(A, ht, sd, sunCol.clone().multiplyScalar(1.4), hz.clone().multiplyScalar(0.62), G.quality); scene.add(ocean);
  fx = new FX(A, scene, G.quality); G.fx = fx; fx.blood = !!settings.gore;
  fx.setEnv(scene.fog.color, scene.fog.density, hz.clone().multiplyScalar(1.3).add(new THREE.Color(0.2, 0.16, 0.12)));
  enemies = new Enemies(G); G.enemies = enemies;
  weapons = new Weapons(G, camera); G.weapons = weapons;
  post = makePost(renderer, scene, camera, G.quality);
  window.addEventListener('resize', resize); window.addEventListener('orientationchange', () => setTimeout(resize, 200));
}

function resize() {
  const w = innerWidth, h = innerHeight; const dpr = window.devicePixelRatio || 1;
  const cap = G.quality === 'high' ? 2.6e6 : G.quality === 'mid' ? 1.5e6 : 0.85e6;
  let pr = Math.min(dpr, G.quality === 'high' ? 2 : 1.5); if (w * h * pr * pr > cap) pr = Math.sqrt(cap / (w * h));
  renderer.setPixelRatio(pr); renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
  if (post) { post.comp.setPixelRatio(pr); post.comp.setSize(w, h); if (post.bloom) post.bloom.resolution.set(w * pr / 2, h * pr / 2); post.grade.uniforms.aspect.value = w / h; }
}

// ------------------------------------------------------------------ game state
const S = { wave: 0, score: 0, hp: 1000, hpMax: 1000, combo: 1, comboT: 0, kills: {}, waveKills: {}, waveScore: 0, shots0: 0, hits0: 0, events: [], wt: 0, spawnedAll: false, god: false, totalKills: 0 };
G.S = S;
let yaw = 0, pitch = -0.1, firing = false, zoomHeld = false, zoomK = 0, shakeA = 0, ts = 1;
G.shake = (a) => { shakeA = Math.min(1.2, shakeA + a); };
G.toast = (t) => feed(t, '#f3c35a');
G.warn = (t) => { const w = $('warn'); w.textContent = t; clearTimeout(G._wt); G._wt = setTimeout(() => (w.textContent = ''), 2500); };
G.explode = (p, s = 1, o = {}) => {
  fx.explosion(p, s, o); const d = camera.position.distanceTo(p);
  if (o.water) audio.splash(d, s); audio.boom(d, Math.min(1.6, s));
  G.shake(clamp(2.2 * s / (1 + d / 25), 0, 1));
};
G.damageBase = (amt, p, kind) => {
  if (!G.running || S.god) return; const D = DIFF[diff];
  S.hp = Math.max(0, S.hp - amt * D.dmg); dmgFlash = Math.min(1, dmgFlash + (kind === 'bullet' ? 0.18 : 0.7));
  if (kind === 'bullet') { if (Math.random() < 0.6) { fx.impact(new THREE.Vector3(CAM.x + rr(-2.2, 2.2), heightAt(CAM.x, CAM.z - 2.2) + rr(0.4, 1.2), CAM.z - rr(1.8, 2.6)), Math.random() < 0.3 ? 'metal' : 'sand'); audio.thud(5); } audio.whiz(); G.shake(0.08); }
  else { G.shake(0.9); audio.impactNear(); }
  if (S.hp <= S.hpMax * 0.3 && !S.warned) { S.warned = true; audio.alarm(); G.warn('防线即将失守！'); }
  if (S.hp <= 0) gameOver(false);
};
G.hitMark = (kill) => { const h = $('hit'); h.className = kill ? 'k' : ''; h.style.opacity = 1; clearTimeout(G._ht); G._ht = setTimeout(() => (h.style.opacity = 0), kill ? 260 : 120); };
const NAMES = { soldier: '步兵', lcvp: '登陆艇', rib: '突击快艇', tank: '两栖坦克', ifv: '步兵战车', heli: '武装直升机', gunship: '通用直升机', chinook: '运输直升机', jet: '战斗机', prop: '攻击机' };
const PTS = { soldier: 60, lcvp: 300, rib: 160, tank: 650, ifv: 480, heli: 420, gunship: 550, chinook: 750, jet: 700, prop: 500 };
G.killed = (e, src) => {
  if (!G.running) return;
  S.comboT = 2.6; S.combo = Math.min(4, S.combo + (e.type === 'soldier' ? 0.15 : 0.5));
  const pts = Math.round(PTS[e.type] * DIFF[diff].mul * (S.combo >= 1.5 ? Math.floor(S.combo * 2) / 2 : 1));
  S.score += pts; S.waveScore += pts; S.kills[e.type] = (S.kills[e.type] || 0) + 1; S.waveKills[e.type] = (S.waveKills[e.type] || 0) + 1; S.totalKills++;
  if (e.type !== 'soldier') feed(`击毁 ${NAMES[e.type]}  +${pts}`, '#f1e8d4');
};
let dmgFlash = 0;
function feed(t, c) { const f = $('feed'); const d = document.createElement('div'); d.textContent = t; d.style.color = c; f.prepend(d); setTimeout(() => d.remove(), 3200); while (f.children.length > 6) f.lastChild.remove(); }

function waveEvents(n) {
  const ev = []; const at = (t, f) => ev.push({ t, f }); const lo = G.quality === 'low';
  const lanes = (k) => { const out = []; for (let i = 0; i < k; i++) out.push(clamp(-100 + (200 * (i + 0.5)) / k + rr(-12, 12), -120, 120)); return out.sort(() => Math.random() - 0.5); };
  const lc = Math.min(7, 2 + Math.ceil(n * 0.6)), rib = Math.min(5, Math.floor(n / 2) + 1);
  const tanks = n >= 3 ? Math.min(4, Math.floor((n - 1) / 2)) : 0, ifv = n >= 4 ? Math.min(3, Math.floor((n - 2) / 3)) : 0;
  const helis = n >= 2 ? Math.min(4, Math.floor(n / 2)) : 0, gun = n >= 6 ? Math.floor((n - 4) / 2) : 0, chin = n >= 5 ? (n >= 8 ? 2 : 1) : 0, jets = n >= 4 ? Math.min(5, n - 3) : 0, props = n >= 3 ? Math.min(3, Math.floor(n / 3)) : 0;
  const tr = lo ? 6 : 10, trR = lo ? 3 : 5;
  const span = 26 + n * 5;
  lanes(lc).forEach((x, i) => at(1 + (i * span) / lc + rr(0, 4), () => enemies.spawnLCVP(x, tr)));
  lanes(rib).forEach((x, i) => at(6 + (i * span) / rib + rr(0, 5), () => enemies.spawnRIB(x, trR)));
  lanes(tanks).forEach((x, i) => at(10 + (i * span) / Math.max(1, tanks), () => enemies.spawnTank(x, false)));
  lanes(ifv).forEach((x, i) => at(14 + (i * span) / Math.max(1, ifv), () => enemies.spawnTank(x, true)));
  for (let i = 0; i < helis; i++) at(12 + (i * span) / helis, () => enemies.spawnHeli('heli'));
  for (let i = 0; i < gun; i++) at(20 + (i * span) / Math.max(1, gun), () => enemies.spawnHeli('gunship'));
  for (let i = 0; i < chin; i++) at(18 + i * 22, () => enemies.spawnHeli('chinook'));
  for (let i = 0; i < jets; i++) at(16 + (i * span) / jets + rr(0, 6), () => enemies.spawnJet('jet'));
  for (let i = 0; i < props; i++) at(22 + (i * span) / Math.max(1, props), () => enemies.spawnJet('prop'));
  return ev.sort((a, b) => a.t - b.t);
}
function startWave(n) {
  S.wave = n; S.events = waveEvents(n); S.wt = 0; S.spawnedAll = false; S.waveKills = {}; S.waveScore = 0; S.shots0 = weapons.shots; S.hits0 = weapons.hits; S.warned = S.hp < S.hpMax * 0.3;
  $('wave').textContent = n; message(`第 ${n} 波`, n === MAXW ? '最后一波 · 守住海岸' : ['敌军登陆艇正在接近', '注意空中目标', '两栖坦克出现', '敌机轰炸 · 使用防空导弹', '敌军运输直升机机降', '全线进攻', '装甲集群', '空地协同', '最后的冲击'][Math.min(8, n - 1)]);
  audio.alarm();
}
function message(t, sub) { const m = $('msg'); m.innerHTML = t + (sub ? `<small>${sub}</small>` : ''); m.style.opacity = 1; clearTimeout(G._mt); G._mt = setTimeout(() => (m.style.opacity = 0), 2800); }
function newGame() {
  enemies.clear(); weapons.clear(); fx.clear(); fx.seedBeach();
  const D = DIFF[diff]; Object.assign(S, { score: 0, hp: D.hp, hpMax: D.hp, combo: 1, comboT: 0, kills: {}, totalKills: 0, warned: false });
  weapons.shots = 0; weapons.hits = 0; G.diffAcc = D.acc; G.diffSpeed = D.spd; G.diffRof = D.rof; G.diffDmg = 1;
  yaw = 0; pitch = -0.12; G.running = true; G.state = 'play';
  hide('menu'); show('hud'); hideAll(); audio.unlock(); audio.ambience(true);
  if (!touch) lockPointer();
  startWave(1);
  if (!G.skipIntro) startIntro();
}
// Opening fly-in: low over the fleet and the landing craft, up the beach and into the gun pit.
const INTRO_PTS = [[-360, 34, -1020], [-210, 20, -720], [-40, 11, -430], [14, 6.5, -170], [6, 10, -32], [CAM.x, CAM.y, CAM.z]].map((p) => new THREE.Vector3(...p));
const introCurve = new THREE.CatmullRomCurve3(INTRO_PTS, false, 'centripetal');
function startIntro() {
  // put a few landing craft right under the flight path so the fly-in passes over the assault
  for (const [x, z] of [[-150, -640], [-70, -500], [-10, -420], [-110, -440]]) { const e = enemies.spawnLCVP(x, G.quality === 'low' ? 6 : 10); if (e) { e.z = z; e.x = x; } }
  G.intro = { t: 0, dur: 9, boomT: 0.4 }; document.body.classList.add('cine'); weapons.hideGun = true; }
function endIntro() { if (!G.intro) return; G.intro = null; document.body.classList.remove('cine'); weapons.hideGun = false; }
const _iq = new THREE.Quaternion(), _iq2 = new THREE.Quaternion(), _im = new THREE.Matrix4(), _ie = new THREE.Euler();
function updateIntro(dt) {
  const I = G.intro; I.t += dt; I.boomT -= dt;
  if (I.boomT <= 0) { I.boomT = rr(0.35, 0.8); const ah = introCurve.getPoint(Math.min(1, I.t / I.dur + rr(0.08, 0.2))); const x = ah.x + rr(-70, 70), z = ah.z + rr(-40, 40); if (Math.hypot(x - CAM.x, z - CAM.z) < 55) {} else if (heightAt(x, z) < -1) G.explode(_w.set(x, 0, z), rr(1.3, 2.2), { water: true }); else G.explode(_w.set(x, heightAt(x, z), z), rr(1.2, 1.8), { big: true }); } const u = Math.min(1, I.t / I.dur); const e = u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
  introCurve.getPoint(e, camera.position);
  const ahead = introCurve.getPoint(Math.min(1, e + 0.06), _w.clone()); const tgt = ahead.lerp(_v.set(0, 3, -70), 0.55);
  _im.lookAt(camera.position, tgt, THREE.Object3D.DEFAULT_UP); _iq.setFromRotationMatrix(_im);
  _iq2.setFromEuler(_ie.set(pitch, yaw, 0, 'YXZ')); _iq.slerp(_iq2, THREE.MathUtils.smoothstep(u, 0.78, 1));
  camera.quaternion.copy(_iq); camera.updateMatrixWorld();
  if (u >= 1) endIntro();
}
function waveDone() {
  G.running = false; G.state = 'summary'; firing = false; releasePointer();
  const acc = weapons.shots - S.shots0 > 0 ? Math.round((weapons.hits - S.hits0) / (weapons.shots - S.shots0) * 100) : 0;
  const rep = Math.round(S.hpMax * 0.15); const before = S.hp; S.hp = Math.min(S.hpMax, S.hp + rep);
  const rows = [['本波得分', S.waveScore], ['歼灭步兵', S.waveKills.soldier || 0], ['击毁舰艇', (S.waveKills.lcvp || 0) + (S.waveKills.rib || 0)], ['击毁装甲', (S.waveKills.tank || 0) + (S.waveKills.ifv || 0)], ['击落飞机', (S.waveKills.heli || 0) + (S.waveKills.gunship || 0) + (S.waveKills.chinook || 0) + (S.waveKills.jet || 0) + (S.waveKills.prop || 0)], ['命中率', acc + '%'], ['抢修防线', `+${Math.round((S.hp - before) / S.hpMax * 100)}%`], ['总分', S.score]];
  $('sumt').textContent = `第 ${S.wave} 波 · 击退`; $('sumr').textContent = S.waveScore;
  $('sumg').innerHTML = rows.map(([a, b]) => `<span>${a}</span><span>${b}</span>`).join('');
  $('bnext').textContent = S.wave >= MAXW ? '查看战报' : '下一波'; $('bnext').classList.remove('hide');
  show('sum');
}
function rating() {
  const hpF = S.hp / S.hpMax; const acc = weapons.shots ? weapons.hits / weapons.shots : 0;
  const v = (S.wave >= MAXW && S.hp > 0 ? 50 : S.wave * 4) + hpF * 30 + acc * 40 + Math.min(20, S.score / 5000);
  return v >= 105 ? 'S' : v >= 90 ? 'A' : v >= 70 ? 'B' : v >= 50 ? 'C' : 'D';
}
function gameOver(win) {
  G.running = false; G.state = 'over'; firing = false; releasePointer();
  const r = rating(); const best = store.get('best', null);
  const nb = !best || S.score > best.score; if (nb) store.set('best', { score: S.score, wave: S.wave, rating: r, diff });
  const acc = weapons.shots ? Math.round(weapons.hits / weapons.shots * 100) : 0;
  $('sumt').textContent = win ? '海岸守住了！' : `防线失守 · 第 ${S.wave} 波`;
  $('sumr').innerHTML = `${r}<div style="font-size:14px;color:#a59b88;letter-spacing:.3em;margin-top:4px">战斗评级</div>`;
  const k = S.kills; const rows = [['总分', S.score + (nb ? '  新纪录!' : '')], ['坚守波数', `${win ? MAXW : S.wave - 1} / ${MAXW}`], ['歼灭步兵', k.soldier || 0], ['击毁舰艇', (k.lcvp || 0) + (k.rib || 0)], ['击毁装甲', (k.tank || 0) + (k.ifv || 0)], ['击落飞机', (k.heli || 0) + (k.gunship || 0) + (k.chinook || 0) + (k.jet || 0) + (k.prop || 0)], ['命中率', acc + '%'], ['难度', DIFF[diff].name]];
  $('sumg').innerHTML = rows.map(([a, b]) => `<span>${a}</span><span>${b}</span>`).join('');
  $('bnext').textContent = '再来一局'; show('sum'); audio.ambience(false);
}
$('bnext').onclick = () => { audio.unlock(); hide('sum'); if (G.state === 'over') { newGame(); return; } if (S.wave >= MAXW) { gameOver(true); return; } G.running = true; G.state = 'play'; if (!touch) lockPointer(); startWave(S.wave + 1); };
$('bmenu').onclick = () => { hide('sum'); toMenu(); };

// ------------------------------------------------------------------ menus
function show(id) { $(id).classList.remove('hide'); } function hide(id) { $(id).classList.add('hide'); }
function hideAll() { for (const id of ['mset', 'mhelp', 'mcred', 'mpause', 'sum']) hide(id); }
function showMenu() {
  show('menu'); hide('hud'); const b = store.get('best', null);
  $('best').textContent = b ? `最高分 ${b.score} · 评级 ${b.rating} · 坚守至第 ${b.wave} 波（${DIFF[b.diff ?? 1].name}）` : '还没有战绩，去守住第一波吧。';
  for (const c of $('diff').children) c.classList.toggle('on', +c.dataset.d === diff);
  G.state = 'menu'; attract();
}
function toMenu() { G.running = false; enemies.clear(); weapons.clear(); fx.clear(); audio.ambience(false); hideAll(); showMenu(); }
function attract() { enemies.clear(); for (let i = 0; i < 3; i++) enemies.spawnLCVP(-90 + i * 80 + rr(-10, 10), G.quality === 'low' ? 3 : 5).z = -380 + i * 60; enemies.spawnHeli('heli'); }
$('bstart').onclick = () => { audio.unlock(); newGame(); };
for (const c of $('diff').children) c.onclick = () => { diff = +c.dataset.d; store.set('diff', diff); for (const x of $('diff').children) x.classList.toggle('on', x === c); };
$('bset').onclick = () => { syncSettings(); show('mset'); };
$('bpset').onclick = () => { syncSettings(); show('mset'); };
$('bhelp').onclick = () => show('mhelp');
$('bcred').onclick = () => show('mcred');
for (const b of document.querySelectorAll('[data-close]')) b.onclick = () => b.closest('.modal').classList.add('hide');
$('bresume').onclick = () => { hide('mpause'); G.running = true; G.state = 'play'; if (!touch) lockPointer(); };
$('bquit').onclick = () => { hide('mpause'); toMenu(); };
function pause() { if (G.state !== 'play') return; G.running = false; G.state = 'pause'; firing = false; show('mpause'); }
function syncSettings() {
  for (const c of $('sq').children) c.classList.toggle('on', c.dataset.q === settings.q);
  for (const c of $('sg').children) c.classList.toggle('on', +c.dataset.g === settings.gore);
  for (const c of $('sf').children) c.classList.toggle('on', +c.dataset.f === settings.fps);
  $('svol').value = settings.vol; $('ssens').value = settings.sens;
}
const saveSet = () => store.set('settings', settings);
for (const c of $('sq').children) c.onclick = () => { if (settings.q !== c.dataset.q) { settings.q = c.dataset.q; saveSet(); location.reload(); } };
for (const c of $('sg').children) c.onclick = () => { settings.gore = +c.dataset.g; fx && (fx.blood = !!settings.gore); saveSet(); syncSettings(); };
for (const c of $('sf').children) c.onclick = () => { settings.fps = +c.dataset.f; saveSet(); syncSettings(); };
$('svol').oninput = (e) => { settings.vol = +e.target.value; audio.setVol(settings.vol / 100); saveSet(); };
$('ssens').oninput = (e) => { settings.sens = +e.target.value; saveSet(); };

// ------------------------------------------------------------------ input
function lockPointer() { if (canvas.requestPointerLock) { try { const p = canvas.requestPointerLock(); p && p.catch && p.catch(() => {}); } catch (e) {} } }
function releasePointer() { if (document.pointerLockElement) document.exitPointerLock(); }
let dragging = false, lx = 0, ly = 0;
const look = (dx, dy, k = 1) => { const f = camera.fov / 58; const s = 0.0023 * settings.sens / 100 * f * k; yaw = clamp(yaw - dx * s, -1.35, 1.35); pitch = clamp(pitch - dy * s, -0.5, 0.62); };
document.addEventListener('pointerlockchange', () => { if (!document.pointerLockElement && G.state === 'play' && !touch && !G.noAutoPause) pause(); });
for (const ev of ['pointerdown', 'keydown']) window.addEventListener(ev, () => { if (G.intro && G.intro.t > 0.6) endIntro(); }, true);
canvas.addEventListener('mousedown', (e) => {
  if (touch || G.state !== 'play') return; audio.unlock();
  if (!document.pointerLockElement) { lockPointer(); dragging = true; lx = e.clientX; ly = e.clientY; }
  if (e.button === 0) firing = true; if (e.button === 2) zoomHeld = true;
});
window.addEventListener('mouseup', (e) => { if (e.button === 0) firing = false; if (e.button === 2) zoomHeld = false; dragging = false; });
window.addEventListener('mousemove', (e) => { if (G.state !== 'play') return; if (document.pointerLockElement) look(e.movementX, e.movementY); else if (dragging) { look(e.clientX - lx, e.clientY - ly); lx = e.clientX; ly = e.clientY; } });
canvas.addEventListener('contextmenu', (e) => e.preventDefault());
window.addEventListener('wheel', (e) => { if (G.state === 'play') weapons.select((weapons.cur + (e.deltaY > 0 ? 1 : 2)) % 3); });
window.addEventListener('keydown', (e) => {
  if (G.state === 'play') { if (e.key >= '1' && e.key <= '3') weapons.select(+e.key - 1); if (e.code === 'Space') firing = true; if (e.key === 'q' || e.key === 'Q') weapons.select((weapons.cur + 2) % 3); if (e.key === 'e' || e.key === 'E') weapons.select((weapons.cur + 1) % 3); if (e.key === 'p' || e.key === 'P') pause(); }
  else if (G.state === 'pause' && (e.key === 'Escape' || e.key === 'p')) $('bresume').onclick();
});
window.addEventListener('keyup', (e) => { if (e.code === 'Space') firing = false; });
for (const s of document.querySelectorAll('#wlist span')) s.onclick = () => weapons.select(+s.dataset.w);
// touch: right half drag aims; fire buttons also aim when dragged
const tp = new Map(); let fireTouches = 0;
function setFire() { firing = fireTouches > 0; $('tfire').classList.toggle('on', firing); $('tfire2').classList.toggle('on', firing); }
canvas.addEventListener('touchstart', (e) => { audio.unlock(); for (const t of e.changedTouches) if (t.clientX > innerWidth * 0.35) tp.set(t.identifier, { x: t.clientX, y: t.clientY }); e.preventDefault(); }, { passive: false });
function tmove(e) { for (const t of e.changedTouches) { const p = tp.get(t.identifier); if (!p) continue; if (G.state === 'play') look(t.clientX - p.x, t.clientY - p.y, 1.35); p.x = t.clientX; p.y = t.clientY; } e.preventDefault(); }
function tend(e) { for (const t of e.changedTouches) { const p = tp.get(t.identifier); if (p && p.fire) { fireTouches = Math.max(0, fireTouches - 1); setFire(); } tp.delete(t.identifier); } }
window.addEventListener('touchmove', tmove, { passive: false }); window.addEventListener('touchend', tend); window.addEventListener('touchcancel', tend);
for (const id of ['tfire', 'tfire2']) $(id).addEventListener('touchstart', (e) => { audio.unlock(); for (const t of e.changedTouches) { tp.set(t.identifier, { x: t.clientX, y: t.clientY, fire: true }); fireTouches++; } setFire(); e.preventDefault(); e.stopPropagation(); }, { passive: false });
$('tzoom').addEventListener('touchstart', (e) => { zoomHeld = !zoomHeld; $('tzoom').classList.toggle('on', zoomHeld); e.preventDefault(); e.stopPropagation(); }, { passive: false });
for (const id of ['tw0', 'tw1', 'tw2']) $(id).addEventListener('touchstart', (e) => { weapons.select(+$(id).dataset.w); e.preventDefault(); e.stopPropagation(); }, { passive: false });
$('tpause').addEventListener('touchstart', (e) => { pause(); e.preventDefault(); e.stopPropagation(); }, { passive: false });
document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
document.addEventListener('gesturestart', (e) => e.preventDefault());

// ------------------------------------------------------------------ loop
let last = performance.now(), fpsT = 0, fpsN = 0, ambT = 0, menuT = 0;
const hud = { last: {} };
function setText(id, v) { if (hud.last[id] !== v) { hud.last[id] = v; $(id).textContent = v; } }
const _v = new THREE.Vector3(), _w = new THREE.Vector3();
function update(dt) {
  G.time += dt; ocean.material.uniforms.time.value = G.time;
  const playing = G.state === 'play';
  if (playing) {
    S.wt += dt;
    while (S.events.length && S.events[0].t <= S.wt) S.events.shift().f();
    if (!S.events.length && S.wt > 5 && enemies.hostiles === 0 && enemies.proj.length === 0) waveDone();
    S.comboT -= dt; if (S.comboT <= 0) S.combo = Math.max(1, S.combo - dt * 2);
  }
  if (G.state === 'menu') { menuT += dt; if (enemies.hostiles < 2 && menuT > 8) { menuT = 0; attract(); } }
  if (G.state === 'play' || G.state === 'menu' || G.state === 'boot') enemies.update(dt);
  // aim / camera
  zoomK += ((zoomHeld && playing ? 1 : 0) - zoomK) * Math.min(1, dt * 10); G.zoomK = zoomK;
  if (G.state === 'menu') { yaw = Math.sin(G.time * 0.05) * 0.35 - 0.05; pitch = -0.1 + Math.sin(G.time * 0.07) * 0.03; }
  const fov = 58 + (WEAPONS[weapons.cur].fov - 58) * zoomK; if (Math.abs(camera.fov - fov) > 0.01) { camera.fov = fov; camera.updateProjectionMatrix(); }
  shakeA = Math.max(0, shakeA - dt * 2.4);
  const sk = shakeA * shakeA * 0.05;
  camera.position.copy(G.freeCam || CAM); camera.rotation.set(pitch + (Math.random() - 0.5) * sk, yaw + (Math.random() - 0.5) * sk, (Math.random() - 0.5) * sk * 0.6, 'YXZ');
  camera.updateMatrixWorld();
  if (G.intro) updateIntro(dt);
  if (playing) weapons.update(dt, firing && !G.intro); else weapons.update(dt, false);
  // howitzer follows the gunner's aim
  if (world.howitzer) { const H = world.howitzer; const want = Math.PI + yaw * 0.9; H.rotation.y += (want - H.rotation.y) * Math.min(1, dt * 2); if (world.howBarrel) world.howBarrel.rotation.x = -clamp(0.08 + pitch * 0.6, -0.05, 0.6); }
  fx.update(dt, camera.position);
  // ambience: naval guns flashing on the horizon, distant thunder of the barrage
  // burning wrecks set the mood: thick dark smoke columns drifting along the beach
  if (!G.fires) G.fires = [[-48, -30, 1.0], [95, -150, 1.6], [-150, -200, 1.8], [40, -320, 2.2]].map(([x, z, s]) => ({ p: new THREE.Vector3(x, Math.max(0, heightAt(x, z)) + 0.5, z), s }))
  if (!G.fires.burnAdded && world.fleet.burning) { G.fires.burnAdded = true; for (const p of world.fleet.burning) G.fires.push({ p, s: 5 }); }
  for (const f of G.fires) if (Math.random() < dt * (G.quality === 'low' ? 2.5 : 5)) fx.burn(f.p, f.s);
  ambT -= dt; if (ambT <= 0) { ambT = rr(1.5, 4.5); const f = world.fleet.flashes[Math.floor(Math.random() * world.fleet.flashes.length)]; fx.glowAt(f.clone().add(_v.set(rr(-40, 40), rr(5, 15), 0)), rr(25, 45), 0.18, fx.glow ? undefined : undefined, 3); setTimeout(() => audio.distant(), 2000 + Math.random() * 3000);
    if (G.state !== 'menu' && Math.random() < 0.25) { const x = rr(-200, 200), z = rr(-260, -150); G.explode(_w.set(x, 0, z), rr(1.2, 1.8), { water: true }); } }
  // hud
  dmgFlash = Math.max(0, dmgFlash - dt * 1.4); $('dmg').style.opacity = dmgFlash.toFixed(2);
  if (playing) {
    setText('score', S.score); setText('combo', S.combo >= 1.5 ? `连杀 ×${(Math.floor(S.combo * 2) / 2).toFixed(1)}` : '');
    const hp = Math.round(S.hp / S.hpMax * 100); setText('basev', hp + '%'); $('basebar').firstElementChild.style.width = hp + '%';
    setText('left', S.events.length ? `敌军正在登陆…` : `剩余敌军 ${enemies.hostiles}`);
    const w = weapons.cur; setText('wname', WEAPONS[w].name);
    const wst = w === 0 ? (weapons.over ? '过热 · 冷却中' : '温度 ' + Math.round(weapons.heat * 100) + '%') : weapons.reload[w] > 0 ? `装填中 ${weapons.reload[w].toFixed(1)}s` : w === 2 ? (weapons.lock ? (weapons.lockT >= 0.6 ? '已锁定 · 开火！' : '锁定中…') : '就绪 · 对准飞机锁定') : '就绪';
    setText('wstat', wst);
    const hb = $('heat'); hb.firstElementChild.style.width = (w === 0 ? weapons.heat * 100 : (1 - weapons.reload[w] / weapons.reloadT[w]) * 100) + '%'; hb.classList.toggle('hot', w === 0 && (weapons.over || weapons.heat > 0.8));
    if (hud.last.w !== w) { hud.last.w = w; for (const s of document.querySelectorAll('#wlist span')) s.classList.toggle('on', +s.dataset.w === w); for (const id of ['tw0', 'tw1', 'tw2']) $(id).classList.toggle('on', +$(id).dataset.w === w); }
    // artillery range read-out / missile lock box
    if (w === 1) { const h = weapons.trace(camera.position, _v.set(0, 0, -1).applyQuaternion(camera.quaternion), 1600); setText('range', `落点距离 ${Math.round(h.t)} m · 飞行 ${(0.8 + h.t / 240).toFixed(1)} s`); } else setText('range', '');
    const lk = $('lock');
    if (w === 2 && weapons.lock && weapons.lock.alive) { _v.copy(weapons.lock.obj.position).project(camera); if (_v.z < 1) { lk.style.display = 'block'; lk.style.left = ((_v.x + 1) / 2 * innerWidth) + 'px'; lk.style.top = ((1 - _v.y) / 2 * innerHeight) + 'px'; lk.classList.toggle('ok', weapons.lockT >= 0.6); } else lk.style.display = 'none'; } else lk.style.display = 'none';
    $('scope').classList.toggle('on', zoomK > 0.6 && w !== 0);
  }
}
function render(dt) {
  const g = post.grade.uniforms; g.time.value = G.time; g.dmg.value = dmgFlash * 0.8; g.exposure.value = 1.0;
  _v.copy(camera.position).add(G.sunDir.clone().multiplyScalar(1000)).project(camera);
  g.sunUV.value.set((_v.x + 1) / 2, (_v.y + 1) / 2, _v.z < 1 && Math.abs(_v.x) < 1.6 && Math.abs(_v.y) < 1.6 ? 1 : 0);
  post.comp.render(dt);
}
function frame(now) {
  requestAnimationFrame(frame);
  let dt = Math.min(0.05, (now - last) / 1000); last = now; if (G.state === 'boot' && !post) return;
  dt *= ts;
  if (post) { update(dt); render(dt); }
  fpsN++; fpsT += (performance.now() - now) / 1000 + 0; if (now - (frame.t0 || 0) > 1000) { if (settings.fps) $('fps').textContent = fpsN + ' fps'; else $('fps').textContent = ''; frame.t0 = now; fpsN = 0; }
}
requestAnimationFrame(frame);

if (typeof __TEST__ !== 'undefined' && __TEST__) {
  window.__T = {
    state: () => ({ state: G.state, wave: S.wave, score: S.score, hp: S.hp, hostiles: enemies.hostiles, events: S.events.length, enemies: enemies.list.length, soldiers: enemies.soldiersAlive(), corpses: enemies.corpses.length, shots: weapons.shots, hits: weapons.hits, kills: { ...S.kills } }),
    start: (d = 1, intro = false) => { diff = d; G.noAutoPause = true; G.skipIntro = !intro; newGame(); },
    god: (v = true) => { S.god = v; },
    aim: (y, p) => { yaw = y; pitch = p; },
    fire: (v) => { firing = v; }, zoom: (v) => { zoomHeld = v; },
    weapon: (i) => weapons.select(i),
    killAll: () => { for (const e of enemies.list.slice()) if (e.alive) enemies.damage(e, 1e6, 'he', null, null, e.obj.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(1, -1, -1))); },
    flush: () => { while (S.events.length) S.events.shift().f(); },
    skip: (n) => { enemies.clear(); S.events = []; startWave(n); },
    endWave: () => { S.events = []; enemies.clear(); },
    spawn: (t, x = 0) => t === 'lcvp' ? enemies.spawnLCVP(x, 6) : t === 'rib' ? enemies.spawnRIB(x, 4) : t === 'tank' ? enemies.spawnTank(x, false) : t === 'ifv' ? enemies.spawnTank(x, true) : t === 'jet' || t === 'prop' ? enemies.spawnJet(t) : enemies.spawnHeli(t),
    ts: (v) => { ts = v; },
    step: (sec) => { for (let t = 0; t < sec; t += 1 / 20) update(1 / 20); },
    explode: (x, z, s = 1.5) => G.explode(new THREE.Vector3(x, heightAt(x, z), z), s, { big: true }),
    next: () => $('bnext').onclick(),
    cam: (x, y, z) => { G.freeCam = x === undefined ? null : new THREE.Vector3(x, y, z); }, gun: (v) => { weapons.mg.g.visible = v; weapons.hideGun = !v; },
    G, S, get enemies() { return enemies; }, get weapons() { return weapons; }, get fx() { return fx; }, camera,
  };
}
boot().catch((e) => { console.error(e); $('bootmsg').textContent = '加载失败：' + (e && e.message) + '，请刷新重试'; });
