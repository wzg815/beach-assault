import { build } from 'esbuild';
import fs from 'fs';
import path from 'path';
const test = process.argv.includes('--test');
const noAssets = process.argv.includes('--js');
const OUT = 'dist';
fs.mkdirSync(OUT, { recursive: true });
const r = await build({ entryPoints: ['src/main.js'], bundle: true, minify: !test, format: 'iife', write: false, target: 'es2020', legalComments: 'none', logLevel: 'warning', define: { __TEST__: test ? 'true' : 'false' } });
const v = Date.now().toString(36);
const jsName = test ? 'game.test.js' : 'game.js';
fs.writeFileSync(`${OUT}/${jsName}`, r.outputFiles[0].text);
const html = fs.readFileSync('src/template.html', 'utf8').replace('__JS__', `${jsName}?v=${v}`).replace('__CSSV__', v);
fs.writeFileSync(`${OUT}/${test ? 'test.html' : 'index.html'}`, html);
console.log('built', jsName, (r.outputFiles[0].text.length / 1024).toFixed(1), 'KB');
if (noAssets) process.exit(0);

const S = '/workspace/assets_src/ba';
const files = [];
const add = (tier, key, kind, src, label) => files.push({ tier, key, kind, src, label });
// sky + env
add('hi', 'sky_bg', 'img', `${S}/sky/sky_bg_4k.jpg`, '天空');
add('lo', 'sky_bg', 'img', `${S}/sky/sky_bg_2k.jpg`, '天空');
add('common', 'env', 'hdr', `${S}/sky/belfast_1k.hdr`, '环境光');
add('common', 'waternormals', 'img', `${S}/misc/waternormals.jpg`, '海面');
for (const f of ['explosion', 'smoke', 'blood_spray', 'blood_decal', 'flash', 'splash', 'crater', 'glow', 'foam']) add('common', 'fx_' + f, 'img', `${S}/fx/${f}.webp`, '特效');
// models (tevy, CC0)
const M = {
  soldier: 'dog-walker', tank: 'main-battle-tank', ifv: 'tracked-infantry-fighting-vehicle', rib: 'rigid-inflatable-boat',
  heli: 'light-helicopter', gunship: 'utility-helicopter', chinook: 'tandem-rotor-helicopter', jet: 'delta-fighter', prop: 'vintage-prop-fighter',
  howitzer: 'towed-howitzer', sb_pos: 'sandbag-firing-position', sb_set: 'sandbag-fortification-set', sb_wall: 'sandbag-wall-straight', sb_curve: 'sandbag-wall-curved',
  wire: 'razor-wire-on-pickets', tbunker: 'timber-sandbag-bunker', gtower: 'military-guard-tower', camonet: 'camouflage-net-on-poles', hesco: 'earth-filled-barrier-block',
  ammo: 'ammo-can', rock: 'rock-outcrop', seastack: 'sea-stack', cliff: 'cliff-face', lighthouse: 'lighthouse', wreck: 'shipwreck-bow', truck: 'burnt-truck-cab',
  humvee: 'military-utility-vehicle', reef: 'reef-rocks', rubble: 'rubble-heap-small', rifle: 'assault-rifle', boulder: 'erratic-boulder', boulder2: 'broken-granite-boulder',
};
for (const [k, s] of Object.entries(M)) add('common', k, 'glb', `${S}/tevy/${s}/${k === 'sb_pos' || k === 'soldier' ? 'lod0' : 'lod1'}.glb`, '模型');
// PBR materials (tevy, CC0)
const mats = { 'lake-sand': ['2k', '1k', '1k'], 'wet-sand': ['2k', '1k', '1k'], 'meadow-ground': ['1k', '1k', null], 'worn-concrete': ['1k', '1k', '1k'], 'granite-rock': ['1k', '1k', null], 'rusty-hull-plate': ['1k', '1k', '1k'], 'rusty-metal': ['1k', '1k', '1k'] };
for (const [m, res] of Object.entries(mats)) {
  ['color', 'normal', 'orm'].forEach((map, i) => {
    if (!res[i]) return;
    if (res[i] === '2k') { add('hi', `${m}_${map}`, 'ktx2', `${S}/mat/${m}_${map}-2k.ktx2`, '材质'); add('lo', `${m}_${map}`, 'ktx2', `${S}/mat/${m}_${map}-1k.ktx2`, '材质'); }
    else add('common', `${m}_${map}`, 'ktx2', `${S}/mat/${m}_${map}-1k.ktx2`, '材质');
  });
}
const man = { version: v, files: [] };
fs.rmSync(`${OUT}/assets`, { recursive: true, force: true });
for (const f of files) {
  const rel = `${f.tier}/${f.key}${path.extname(f.src)}`;
  const dst = `${OUT}/assets/${rel}`; fs.mkdirSync(path.dirname(dst), { recursive: true }); fs.copyFileSync(f.src, dst);
  man.files.push({ tier: f.tier, key: f.key, kind: f.kind, path: rel, bytes: fs.statSync(dst).size, label: f.label });
}
fs.mkdirSync(`${OUT}/assets/basis`, { recursive: true });
for (const b of ['basis_transcoder.js', 'basis_transcoder.wasm']) fs.copyFileSync(`node_modules/three/examples/jsm/libs/basis/${b}`, `${OUT}/assets/basis/${b}`);
fs.writeFileSync(`${OUT}/assets/manifest.json`, JSON.stringify(man));
const sum = (t) => man.files.filter((f) => f.tier === 'common' || f.tier === t).reduce((s, f) => s + f.bytes, 0) / 1048576;
console.log('assets: desktop %s MB, mobile %s MB (+0.6 MB transcoder)', sum('hi').toFixed(1), sum('lo').toFixed(1));
for (const c of ['CREDITS.md']) if (fs.existsSync(c)) fs.copyFileSync(c, `${OUT}/${c}`);
fs.writeFileSync(`${OUT}/.nojekyll`, '');
