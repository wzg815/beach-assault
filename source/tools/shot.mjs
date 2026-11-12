import { chromium, devices } from 'playwright';
const mode = process.argv[2] || 'desk'; const script = process.argv[3] || 'basic';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const ctx = mode === 'mob' ? await browser.newContext({ ...devices['iPhone 13 landscape'], viewport: { width: 844, height: 390 } }) : await browser.newContext({ viewport: { width: 1280, height: 720 } });
const page = await ctx.newPage();
const errs = []; const fails = [];
page.on('pageerror', (e) => errs.push('pageerror ' + e.message)); page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(m.type() + ' ' + m.text()); });
page.on('response', (r) => { if (r.status() >= 400) fails.push(r.status() + ' ' + r.url()); });
const t0 = Date.now();
const url = (process.env.URL || 'http://localhost:8841/test.html') + (process.env.Q ? '?q=' + process.env.Q : '');
await page.goto(url);
await page.waitForFunction(() => document.getElementById('boot').classList.contains('done') || /失败/.test(document.getElementById('bootmsg').textContent), null, { timeout: 240000 });
console.log('boot ms', Date.now() - t0, await page.evaluate(() => document.getElementById('bootmsg').textContent));
const shot = async (n) => { await page.screenshot({ path: `shots/${mode}_${n}.png` }); console.log('shot', n); };
const T = (f, ...a) => page.evaluate(f, ...a);
const scripts = {
  async basic() {
    await sleep(2500); await shot('menu');
    await T(() => { __T.start(1); __T.god(); });
    await sleep(500); await T(() => __T.flush());
    await T(() => __T.ts(3)); await sleep(9000); await T(() => __T.ts(1));
    console.log(JSON.stringify(await T(() => __T.state())));
    await T(() => __T.aim(0.1, -0.16)); await sleep(1200); await shot('play1');
    await T(() => __T.fire(true)); await sleep(1500); await shot('fire'); await T(() => __T.fire(false));
    await T(() => { __T.explode(-10, -60, 1.6); __T.explode(14, -80, 1.6); }); await sleep(450); await shot('boom');
    await T(() => __T.weapon(1)); await sleep(600); await T(() => __T.fire(true)); await sleep(300); await T(() => __T.fire(false)); await sleep(2500); await shot('cannon');
    console.log(JSON.stringify(await T(() => __T.state())));
  },
  async show() {
    await T(() => { __T.start(1); __T.god(); __T.gun(false); });
    await T(() => { __T.endWave(); for (const x of [-30, 0, 30]) __T.spawn('lcvp', x); __T.spawn('rib', 55); __T.spawn('tank', -60); __T.spawn('heli'); });
    await T(() => { for (const e of __T.enemies.list) if (e.z !== undefined) e.z = Math.max(e.z, -190); for (const e of __T.enemies.list) if (e.p) e.p.set(30, 40, -260); });
    await T((n) => __T.step(n), +(process.env.STEP || 22)); await sleep(800);
    console.log(JSON.stringify(await T(() => __T.state())));
    await T(() => __T.aim(0.0, -0.2)); await sleep(1500); await shot('s_bunker');
    console.log(JSON.stringify(await T(() => __T.enemies.list.map(e => [e.type, e.state, Math.round(e.x ?? e.obj?.position.x), Math.round(e.z ?? e.obj?.position.z)]))));
    await T(() => { const b = __T.enemies.list.find(e => e.type === 'lcvp') || {x:0,z:-110}; const p = b.obj ? b.obj.position : {x:b.x,y:0,z:b.z}; __T.cam(p.x + 4, p.y + 5, p.z + 28); __T.aim(0, -0.12); }); await sleep(1500); await shot('s_beach');
    await T(() => { const b = __T.enemies.list.find(e => e.type === 'soldier' && e.alive && e.obj) ; const p = b.obj.position; __T.cam(p.x + 2, p.y + 1.7, p.z + 9); __T.aim(0, -0.08); }); await sleep(1500); await shot('s_water');
    await T(() => { const p = __T.camera.position; __T.explode(p.x - 6, p.z - 30, 1.8); __T.explode(p.x + 9, p.z - 45, 1.4); }); await sleep(350); await shot('s_boom1');
    await sleep(900); await shot('s_boom2');
    await T(() => { __T.cam(); __T.gun(true); __T.aim(0.05, -0.18); }); await sleep(1500); await shot('s_gun');
  },
  async flow() {
    await sleep(1500); await shot('menu');
    await T(() => { __T.start(2); __T.god(); });
    for (let w = 1; w <= 10; w++) {
      await T(() => __T.flush()); await T(() => __T.step(30));
      const st = await T(() => __T.state());
      await T(() => __T.killAll()); await T(() => __T.step(4));
      const st2 = await T(() => __T.state());
      console.log('wave', w, 'spawned', st.enemies, 'state after kill', st2.state, 'score', st2.score);
      if (w === 3 || w === 8) await shot('wave' + w + '_sum');
      if (w < 10) await T(() => __T.next());
    }
    await T(() => __T.next()); await sleep(800); await shot('final');
    console.log('final', await T(() => document.getElementById('sum').innerText.replace(/\s+/g, ' ').slice(0, 300)), 'best', await T(() => localStorage.getItem('qtdl.v1.best')));
    // lose path
    await T(() => __T.next()); await sleep(500); await T(() => { __T.god(false); __T.S.hp = 5; __T.flush(); }); await T(() => __T.step(150)); await sleep(800); await shot("lose");
    console.log('lose state', JSON.stringify(await T(() => __T.state())));
  },
  async menu() { await sleep(2500); await shot("menu"); },
  async gore() {
    await T(() => { __T.start(1); __T.god(); __T.gun(false); __T.endWave(); __T.spawn('lcvp', 0); __T.spawn('lcvp', 12); for (const e of __T.enemies.list) if (e.type === 'lcvp') e.z = -150; });
    await T(() => __T.step(12));
    await T(() => { const ss = __T.enemies.list.filter(e => e.type === 'soldier' && e.alive && e.state !== 'boat'); const p = ss[0].obj.position; __T.cam(p.x + 1.5, p.y + 1.6, p.z + 7); __T.aim(0.12, -0.12); window.__ss = ss; });
    await sleep(1000);
    await T(() => { const V = __T.camera.position.constructor; for (const s of __ss.slice(0, 4)) { const q = s.obj.position.clone().add(new V(0, 1.3, 0)); const d = q.clone().sub(__T.camera.position).normalize(); __T.enemies.damage(s, 20, 'mg', q, d); } });
    await sleep(20); await shot("g_hit");
    await T(() => { const V = __T.camera.position.constructor; for (const s of __ss.slice(0, 4)) { if (!s.alive) continue; const q = s.obj.position.clone().add(new V(0, 1.3, 0)); const d = q.clone().sub(__T.camera.position).normalize(); __T.enemies.damage(s, 100, 'mg', q, d); } const p = __ss[5].obj.position; __T.explode(p.x + 1, p.z - 1.5, 1.2); });
    await sleep(250); await shot('g_kill');
    await T(() => __T.step(3)); await sleep(800); await shot('g_after');
  },
  async blood() {
    await T(() => { __T.start(1); __T.god(); __T.gun(false); __T.endWave(); __T.cam(0, 3, -80); __T.aim(0, -0.1); });
    await sleep(800);
    await T(() => { const V = __T.camera.position.constructor; window.__bi = setInterval(() => { __T.fx.bloodHit(new V(-1, 2.5, -88), new V(0.6, 0.2, 0.3).normalize(), 1); __T.fx.bloodPool(1.5, -86, 1); }, 50); });
    await sleep(1500); await shot('blood'); console.log(await T(() => [__T.fx.blood, __T.fx.bsp.list.length, __T.fx.bloodD ? 'decals' : 'nodecal'].join(' ')));
  },
  async top() {
    await T(() => { __T.start(1); __T.god(); __T.gun(false); __T.endWave(); __T.cam(0, 50, -80); __T.aim(0, -1.0); }); await sleep(2000); await shot('top');
  },
  async dbg() {
    await T(() => { __T.start(1); __T.god(); __T.endWave(); __T.spawn('lcvp', 0); });
    console.log(await T(() => { const THREE_V = (o) => { const v = o.getWorldPosition(__T.camera.position.clone()); return [v.x.toFixed(2), v.y.toFixed(2), v.z.toFixed(2)].join(','); };
      const s = __T.enemies.list.find(e => e.type === 'soldier'); const out = []; s.obj.updateMatrixWorld(true);
      s.obj.traverse(o => { const ws = o.getWorldScale(__T.camera.position.clone()); out.push(o.type + ':' + o.name + ' p=' + THREE_V(o) + ' s=' + ws.x.toFixed(3) + (o.visible ? '' : ' HIDDEN')); });
      return out.join('\n'); }));
  },
  async close() {
    await T(() => { __T.start(1); __T.god(); __T.gun(false); });
    await T(() => { __T.endWave(); __T.spawn('lcvp', 0); __T.spawn('lcvp', 14); for (const e of __T.enemies.list) if (e.type === 'lcvp') e.z = -150; });
    await T((n) => __T.step(n), 11);
    console.log(JSON.stringify(await T(() => __T.enemies.list.map(e => [e.type, e.state, Math.round(e.obj.position.x), Math.round(e.obj.position.z)]))));
    await T(() => { const b = __T.enemies.list.find(e => e.type === 'soldier' && e.alive && e.state !== 'boat'); const p = b.obj.position; __T.cam(p.x + 1.2, p.y + 1.5, p.z + 3.2); __T.aim(0.3, -0.1); }); await sleep(1500); await shot('c_sold');
    await T(() => { const b = __T.enemies.list.find(e => e.type === 'lcvp'); const p = b.obj.position; __T.cam(p.x + 9, p.y + 3, p.z + 14); __T.aim(0.55, -0.12); }); await sleep(1500); await shot('c_lcvp');
  },
};
await scripts[script]();
console.log('errors:', errs.length, errs.slice(0, 12).join('\n'));
console.log('404s:', fails.join('\n'));
await browser.close();
