import { I as f } from "./index.8fd7165c.js";
function m(r, e, o = 0) {
  const t = f(r, 0, c);
  for (let n = 0; n < 4; n++) e[o + n] = Math.floor(256 * u(t * a[n]));
}
function l(r, e = 0) {
  let o = 0;
  for (let t = 0; t < 4; t++) o += r[e + t] * i[t];
  return o;
}
const a = [1, 256, 65536, 16777216],
  i = [1 / 256, 1 / 65536, 1 / 16777216, 1 / 4294967296],
  c = l(new Uint8ClampedArray([255, 255, 255, 255]));
function u(r) {
  return r - Math.floor(r);
}
export { m as o, l as r };
