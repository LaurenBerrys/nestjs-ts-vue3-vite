import { aK as r, gc as e, av as c, i8 as f } from "./index.8fd7165c.js";
async function i(a, n, t) {
  const s = r(a);
  return e(s, c.from(n), { ...t }).then((o) => o.data.count);
}
async function m(a, n, t) {
  const s = r(a);
  return f(s, c.from(n), { ...t }).then((o) => o.data.objectIds);
}
export { i as n, m as s };
