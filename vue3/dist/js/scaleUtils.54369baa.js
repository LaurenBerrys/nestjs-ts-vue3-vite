import { $ as i, dv as o } from "./index.8fd7165c.js";
const s = 96;
function d(t, e) {
  const n = e || t.extent,
    r = t.width,
    a = i(n && n.spatialReference);
  return n && r ? (n.width / r) * a * o * s : 0;
}
function f(t, e) {
  return t / (i(e) * o * s);
}
export { d as i, f as r };
