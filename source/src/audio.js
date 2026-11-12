// Procedural WebAudio: every sound is synthesized (no files to download).
export function makeAudio() {
  const S = { vol: 0.8 };
  let ctx = null, master = null, comp = null, noiseBuf = null, brown = null, amb = null;
  const ok = () => ctx && ctx.state === 'running';
  S.unlock = () => {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return; ctx = new AC();
      comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 5; comp.attack.value = 0.003; comp.release.value = 0.25;
      master = ctx.createGain(); master.gain.value = S.vol; master.connect(comp); comp.connect(ctx.destination);
      const n = ctx.sampleRate * 2; noiseBuf = ctx.createBuffer(1, n, ctx.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
      brown = ctx.createBuffer(1, n, ctx.sampleRate); const b = brown.getChannelData(0); let l = 0; for (let i = 0; i < n; i++) { l = (l + 0.02 * (Math.random() * 2 - 1)) / 1.02; b[i] = l * 3.5; }
    }
    if (ctx.state !== 'running') ctx.resume();
  };
  S.setVol = (v) => { S.vol = v; if (master) master.gain.value = v; };
  const env = (g, t, a, peak, dur) => { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + dur); };
  const noise = (t, dur, f0, f1, peak, type = 'lowpass', Q = 0.7, buf = noiseBuf, dst = master, a = 0.004) => {
    const s = ctx.createBufferSource(); s.buffer = buf; s.loop = true; const f = ctx.createBiquadFilter(); f.type = type; f.Q.value = Q; f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = ctx.createGain(); env(g, t, a, peak, dur); s.connect(f); f.connect(g); g.connect(dst); s.start(t, Math.random() * 1.5); s.stop(t + dur + 0.05);
  };
  const tone = (t, dur, f0, f1, peak, type = 'sine', dst = master, a = 0.003) => {
    const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(10, f1), t + dur);
    const g = ctx.createGain(); env(g, t, a, peak, dur); o.connect(g); g.connect(dst); o.start(t); o.stop(t + dur + 0.05);
  };
  const distGain = (d) => Math.max(0.05, 1 / (1 + d / 60));
  const delay = (d) => Math.min(1.2, d / 343);
  S.mg = () => { if (!ok()) return; const t = ctx.currentTime; noise(t, 0.09, 4500, 900, 0.55, 'lowpass', 0.8); tone(t, 0.08, 150, 55, 0.7, 'triangle'); noise(t, 0.16, 900, 120, 0.35, 'lowpass', 1, brown); noise(t + 0.004, 0.03, 7000, 4000, 0.12, 'highpass', 0.6); };
  S.cannon = () => { if (!ok()) return; const t = ctx.currentTime; tone(t, 0.7, 70, 28, 1.0, 'sine'); noise(t, 0.6, 2500, 80, 1.0, 'lowpass', 0.6); noise(t, 2.2, 600, 40, 0.45, 'lowpass', 0.5, brown); noise(t + 0.02, 0.1, 6000, 2000, 0.25, 'highpass'); };
  S.missile = () => { if (!ok()) return; const t = ctx.currentTime; noise(t, 1.6, 1800, 500, 0.5, 'bandpass', 1.2, noiseBuf, master, 0.05); tone(t, 0.25, 90, 50, 0.4, 'triangle'); noise(t, 0.2, 3000, 600, 0.6); };
  S.boom = (d = 30, s = 1) => { if (!ok()) return; const t = ctx.currentTime + delay(d); const g = distGain(d) * s; const lp = 3500 / (1 + d / 120);
    noise(t, 0.35, lp, 100, 1.2 * g, 'lowpass', 0.7); tone(t, 1.0 * s, 65, 22, 1.1 * g, 'sine'); noise(t, 2.8 * Math.sqrt(s), 500, 30, 0.8 * g, 'lowpass', 0.5, brown, master, 0.02);
    if (d < 140) noise(t + 0.25, 1.2, 4000, 800, 0.08 * g, 'highpass', 0.5, noiseBuf, master, 0.2); };
  S.splash = (d = 30, s = 1) => { if (!ok()) return; const t = ctx.currentTime + delay(d); const g = distGain(d) * s; noise(t, 1.4, 2500, 300, 0.5 * g, 'lowpass', 0.6, noiseBuf, master, 0.03); tone(t, 0.6, 60, 25, 0.7 * g, 'sine'); };
  S.whiz = () => { if (!ok()) return; const t = ctx.currentTime; noise(t, 0.12, 5000, 2000, 0.12, 'bandpass', 4); };
  S.hitMetal = (d) => { if (!ok()) return; const t = ctx.currentTime + delay(d); const g = distGain(d); tone(t, 0.12, 2400 + Math.random() * 1500, 1600, 0.12 * g, 'square'); noise(t, 0.05, 6000, 3000, 0.1 * g, 'highpass'); };
  S.thud = (d) => { if (!ok()) return; const t = ctx.currentTime + delay(d); noise(t, 0.08, 800, 200, 0.18 * distGain(d)); };
  S.rifle = (d) => { if (!ok()) return; const t = ctx.currentTime + delay(d); const g = distGain(d) * 0.55; noise(t, 0.05, 3500 / (1 + d / 100), 400, g, 'lowpass', 0.8); noise(t, 0.5, 600, 80, g * 0.4, 'lowpass', 0.5, brown); };
  S.incoming = () => { if (!ok()) return; const t = ctx.currentTime; tone(t, 1.1, 1900, 500, 0.08, 'sine', master, 0.3); };
  S.impactNear = () => { if (!ok()) return; const t = ctx.currentTime; noise(t, 0.6, 1800, 60, 1.0, 'lowpass', 0.7); tone(t, 0.7, 55, 20, 1.0, 'sine'); noise(t + 0.05, 1.5, 3000, 300, 0.25, 'lowpass', 0.5, noiseBuf, master, 0.1); };
  S.overheat = () => { if (!ok()) return; const t = ctx.currentTime; noise(t, 1.2, 6000, 2500, 0.15, 'highpass', 0.5, noiseBuf, master, 0.05); };
  S.reload = () => { if (!ok()) return; const t = ctx.currentTime; tone(t, 0.06, 900, 600, 0.2, 'square'); tone(t + 0.18, 0.08, 500, 300, 0.25, 'square'); noise(t + 0.18, 0.08, 3000, 800, 0.2); };
  S.lock = () => { if (!ok()) return; const t = ctx.currentTime; tone(t, 0.07, 1500, 1500, 0.12, 'square'); };
  S.beep = (f = 880) => { if (!ok()) return; const t = ctx.currentTime; tone(t, 0.1, f, f, 0.1, 'square'); };
  S.alarm = () => { if (!ok()) return; const t = ctx.currentTime; for (let i = 0; i < 3; i++) tone(t + i * 0.32, 0.25, 700, 500, 0.12, 'sawtooth'); };
  S.jet = (d) => { if (!ok()) return; const t = ctx.currentTime; noise(t, 3.2, 600, 3000, 0.7 * distGain(d * 0.3), 'bandpass', 0.7, noiseBuf, master, 1.2); noise(t, 3.5, 200, 150, 0.6, 'lowpass', 0.5, brown, master, 1.0); };
  S.scream = () => {};
  // looping sources: helicopter rotor per instance, ambience
  S.loop = (kind) => {
    if (!ctx) return null; const s = ctx.createBufferSource(); s.buffer = kind === 'heli' ? brown : noiseBuf; s.loop = true;
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = kind === 'heli' ? 500 : 300; const g = ctx.createGain(); g.gain.value = 0;
    let am = null; if (kind === 'heli') { am = ctx.createOscillator(); am.frequency.value = 17 + Math.random() * 4; const ag = ctx.createGain(); ag.gain.value = 0.6; am.connect(ag); const mg = ctx.createGain(); mg.gain.value = 0.5; ag.connect(mg.gain); s.connect(f); f.connect(mg); mg.connect(g); am.start(); } else { s.connect(f); f.connect(g); }
    g.connect(master); s.start();
    return { set: (v) => { g.gain.setTargetAtTime(v, ctx.currentTime, 0.1); }, stop: () => { try { s.stop(); am && am.stop(); } catch (e) {} g.disconnect(); } };
  };
  S.ambience = (on) => {
    if (!ctx) return;
    if (on && !amb) {
      const surf = ctx.createBufferSource(); surf.buffer = brown; surf.loop = true; const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 700; const g = ctx.createGain(); g.gain.value = 0.25;
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.09; const lg = ctx.createGain(); lg.gain.value = 0.18; lfo.connect(lg); lg.connect(g.gain); lfo.start();
      const wind = ctx.createBufferSource(); wind.buffer = noiseBuf; wind.loop = true; const wf = ctx.createBiquadFilter(); wf.type = 'bandpass'; wf.frequency.value = 500; wf.Q.value = 0.4; const wg = ctx.createGain(); wg.gain.value = 0.03;
      surf.connect(f); f.connect(g); g.connect(master); wind.connect(wf); wf.connect(wg); wg.connect(master); surf.start(); wind.start(); amb = { surf, wind, lfo, g, wg };
    } else if (!on && amb) { try { amb.surf.stop(); amb.wind.stop(); amb.lfo.stop(); } catch (e) {} amb = null; }
  };
  S.distant = () => { if (!ok()) return; const d = 600 + Math.random() * 1500; const t = ctx.currentTime; noise(t, 2.5, 300, 30, 0.25, 'lowpass', 0.5, brown, master, 0.05); };
  return S;
}
