import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

// Streams every file in assets/manifest.json for the chosen tier with byte-accurate progress.
export async function loadAssets(renderer, tier, onProgress) {
  const base = 'assets/';
  const man = await (await fetch(base + 'manifest.json', { cache: 'no-cache' })).json();
  const files = man.files.filter((f) => f.tier === 'common' || f.tier === tier);
  const total = files.reduce((s, f) => s + f.bytes, 0);
  const got = new Map();
  const report = () => { let s = 0; for (const v of got.values()) s += v; onProgress && onProgress(Math.min(1, s / total), s, total); };
  const ktx = new KTX2Loader().setTranscoderPath(base + 'basis/').detectSupport(renderer);
  const gltf = new GLTFLoader().setKTX2Loader(ktx).setMeshoptDecoder(MeshoptDecoder);
  const rgbe = new RGBELoader().setDataType(THREE.HalfFloatType);
  const q = '?v=' + man.version;
  const fetchBytes = async (f) => {
    const res = await fetch(base + f.path + q); if (!res.ok) throw new Error('HTTP ' + res.status + ' ' + f.path);
    if (!res.body || !res.body.getReader) { const b = await res.arrayBuffer(); got.set(f.path, f.bytes); report(); return b; }
    const rd = res.body.getReader(); const chunks = []; let n = 0;
    for (;;) { const { done, value } = await rd.read(); if (done) break; chunks.push(value); n += value.length; got.set(f.path, Math.min(n, f.bytes)); report(); }
    const buf = new Uint8Array(n); let o = 0; for (const c of chunks) { buf.set(c, o); o += c.length; } got.set(f.path, f.bytes); report(); return buf.buffer;
  };
  const A = { tier, glb: {}, tex: {}, env: null };
  const parse = async (f, buf) => {
    if (f.kind === 'glb') A.glb[f.key] = await gltf.parseAsync(buf, base);
    else if (f.kind === 'ktx2') A.tex[f.key] = await new Promise((res, rej) => ktx.parse(buf, res, rej));
    else if (f.kind === 'hdr') { const d = rgbe.parse(buf); const t = new THREE.DataTexture(d.data, d.width, d.height, THREE.RGBAFormat, d.type); t.colorSpace = THREE.LinearSRGBColorSpace; t.minFilter = t.magFilter = THREE.LinearFilter; t.generateMipmaps = false; t.flipY = true; t.mapping = THREE.EquirectangularReflectionMapping; t.needsUpdate = true; A.env = t; }
    else if (f.kind === 'img') {
      const blob = new Blob([buf], { type: f.path.endsWith('.webp') ? 'image/webp' : 'image/jpeg' });
      let img;
      try { img = await createImageBitmap(blob, { imageOrientation: 'flipY', premultiplyAlpha: 'none' }); }
      catch (e) { img = await new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = URL.createObjectURL(blob); }); img.__noflip = true; }
      const t = new THREE.Texture(img); if (img.__noflip) t.flipY = true; else t.flipY = false; t.needsUpdate = true; A.tex[f.key] = t;
    }
  };
  const queue = files.slice().sort((a, b) => b.bytes - a.bytes);
  const worker = async () => { while (queue.length) { const f = queue.shift(); try { await parse(f, await fetchBytes(f)); } catch (e) { console.warn('asset failed', f.path, e); A.missing = (A.missing || 0) + 1; got.set(f.path, f.bytes); report(); } } };
  await Promise.all([worker(), worker(), worker(), worker(), worker()]);
  A.total = total;
  return A;
}

export function pbr(A, key, o = {}) {
  const c = A.tex[key + '_color'], n = A.tex[key + '_normal'], r = A.tex[key + '_orm'];
  if (!c) return new THREE.MeshStandardMaterial({ color: 0x777777, roughness: 0.9, ...o });
  for (const t of [c, n, r]) if (t) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; }
  c.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshStandardMaterial({ map: c, normalMap: n || null, roughnessMap: r || null, metalnessMap: r || null, aoMap: r || null, roughness: 1, metalness: r ? 1 : 0, ...o });
}
