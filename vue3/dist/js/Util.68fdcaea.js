import {
  fD as g,
  b as m,
  fi as l,
  fn as v,
  fj as w,
  gY as b,
  b8 as j,
  I as $,
  fp as x,
} from "./index.8fd7165c.js";
import { s as A, c as E } from "./sphere.a87dd95a.js";
function p(r) {
  return r
    ? { origin: g(r.origin), vector: g(r.vector) }
    : { origin: m(), vector: m() };
}
function S(r, s, t = p()) {
  return l(t.origin, r), v(t.vector, s, r), t;
}
function Y(r, s, t) {
  return (function (f, a, e, n, i) {
    const { vector: o, origin: u } = f,
      c = v(E.get(), a, u),
      h = w(o, c) / b(o);
    return j(i, o, $(h, e, n)), x(i, i, f.origin);
  })(r, s, 0, 1, t);
}
new A(() => p());
class k {
  constructor(s) {
    this.message = s;
  }
  toString() {
    return `AssertException: ${this.message}`;
  }
}
function d(r, s) {
  if (!r) {
    s = s || "Assertion";
    const t = new Error(s).stack;
    throw new k(`${s} at ${t}`);
  }
}
function q(r, s, t, f) {
  let a,
    e = (t[0] - r[0]) / s[0],
    n = (f[0] - r[0]) / s[0];
  e > n && ((a = e), (e = n), (n = a));
  let i = (t[1] - r[1]) / s[1],
    o = (f[1] - r[1]) / s[1];
  if ((i > o && ((a = i), (i = o), (o = a)), e > o || i > n)) return !1;
  i > e && (e = i), o < n && (n = o);
  let u = (t[2] - r[2]) / s[2],
    c = (f[2] - r[2]) / s[2];
  return (
    u > c && ((a = u), (u = c), (c = a)),
    !(e > c || u > n) && (c < n && (n = c), !(n < 0))
  );
}
export { S as b, q as i, Y as j, d as s, p as v };
