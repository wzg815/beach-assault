// Analytic beach heightfield shared by the terrain mesh, the ocean depth texture and gameplay.
export const TB = { x0: -380, x1: 380, z0: -470, z1: 150 };
export const PLAYER = { x: 0, z: 4, h: 13.2 };
function hash(x, z) { const s = Math.sin(x * 127.1 + z * 311.7) * 43758.5453; return s - Math.floor(s); }
function vn(x, z) {
  const xi = Math.floor(x), zi = Math.floor(z), xf = x - xi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = zf * zf * (3 - 2 * zf);
  const a = hash(xi, zi), b = hash(xi + 1, zi), c = hash(xi, zi + 1), d = hash(xi + 1, zi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
export function fbm(x, z, o = 4) { let s = 0, a = 0.5, f = 1, t = 0; for (let i = 0; i < o; i++) { s += a * vn(x * f, z * f); t += a; a *= 0.5; f *= 2.03; } return s / t; }
const sm = (e0, e1, x) => { const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };
export const shoreShift = (x) => 9 * Math.sin(x * 0.0125 + 0.4) + 4 * Math.sin(x * 0.033 + 1.3);
export const WATERLINE = -112;
function prof(z) {
  if (z > 12) return 13.2 + (z - 12) * 0.03;
  if (z > -38) { const t = (z + 38) / 50; const s = t * t * (3 - 2 * t); return 2.6 + 10.6 * (0.35 * t + 0.65 * s); }
  if (z > -112) { const t = (z + 112) / 74; return 2.6 * Math.pow(t, 1.25); }
  const d = -112 - z;
  return Math.max(-22, -d * 0.05 - Math.max(0, d - 70) * 0.06);
}
export function heightAt(x, z) {
  const zs = z + shoreShift(x) * sm(10, 60, Math.abs(x));
  let h = prof(zs);
  // beach ripples / dune roughness
  const n = fbm(x * 0.045, z * 0.045, 3) - 0.5;
  h += n * (zs > -112 ? (zs > -38 ? 1.6 : 0.5) : 0.8);
  if (zs > 8) h += (fbm(x * 0.012 + 3, z * 0.012, 3) - 0.5) * 4 * sm(8, 40, zs);
  // headlands rising out of the sea on both flanks
  const ax = Math.abs(x);
  const head = sm(210, 330, ax);
  if (head > 0) h = h + head * (28 + 10 * fbm(x * 0.02, z * 0.02)) * sm(-330, -150, zs);
  // flatten the player emplacement
  const dx = x - PLAYER.x, dz = z - PLAYER.z; const r = Math.sqrt(dx * dx + dz * dz);
  const f = sm(14, 7, r); h = h * (1 - f) + PLAYER.h * f;
  return h;
}
export function normalAt(x, z, out) {
  const e = 0.8; const hx = heightAt(x + e, z) - heightAt(x - e, z), hz = heightAt(x, z + e) - heightAt(x, z - e);
  out.set(-hx, 2 * e, -hz).normalize(); return out;
}
