import { cM as y, dB as w } from "./index.8fd7165c.js";
function e(t) {
  var r;
  return Array.isArray(t)
    ? (r = t[0]) == null
      ? void 0
      : r.spatialReference
    : t == null
    ? void 0
    : t.spatialReference;
}
function p(t) {
  return t && (Array.isArray(t) ? t.map(p) : t.toJSON ? t.toJSON() : t);
}
function u(t) {
  return Array.isArray(t) ? t.map((r) => y(r)) : y(t);
}
let f;
async function n(t, r) {
  return (
    await (async function () {
      return (
        f || (f = w("geometryEngineWorker", { strategy: "distributed" })), f
      );
    })()
  ).invoke("executeGEOperation", { operation: t, parameters: p(r) });
}
async function d(t, r) {
  return u(await n("clip", [e(t), t, r]));
}
async function g(t, r) {
  return u(await n("cut", [e(t), t, r]));
}
function A(t, r) {
  return n("contains", [e(t), t, r]);
}
function h(t, r) {
  return n("crosses", [e(t), t, r]);
}
function x(t, r, a) {
  return n("distance", [e(t), t, r, a]);
}
function E(t, r) {
  return n("equals", [e(t), t, r]);
}
function O(t, r) {
  return n("intersects", [e(t), t, r]);
}
function R(t, r) {
  return n("touches", [e(t), t, r]);
}
function S(t, r) {
  return n("within", [e(t), t, r]);
}
function v(t, r) {
  return n("disjoint", [e(t), t, r]);
}
function J(t, r) {
  return n("overlaps", [e(t), t, r]);
}
function N(t, r, a) {
  return n("relate", [e(t), t, r, a]);
}
function b(t) {
  return n("isSimple", [e(t), t]);
}
async function k(t) {
  return u(await n("simplify", [e(t), t]));
}
async function B(t, r = !1) {
  return u(await n("convexHull", [e(t), t, r]));
}
async function D(t, r) {
  return u(await n("difference", [e(t), t, r]));
}
async function L(t, r) {
  return u(await n("symmetricDifference", [e(t), t, r]));
}
async function j(t, r) {
  return u(await n("intersect", [e(t), t, r]));
}
async function H(t, r = null) {
  const a = (function (i, c) {
    let s;
    return (
      Array.isArray(i)
        ? (s = i)
        : ((s = []), s.push(i), c != null && s.push(c)),
      s
    );
  })(t, r);
  return u(await n("union", [e(a), a]));
}
async function q(t, r, a, i, c, s) {
  return u(await n("offset", [e(t), t, r, a, i, c, s]));
}
async function z(t, r, a, i = !1) {
  const c = [e(t), t, r, a, i];
  return u(await n("buffer", c));
}
async function G(t, r, a, i, c, s) {
  const o = [e(t), t, r, a, i, c, s];
  return u(await n("geodesicBuffer", o));
}
async function M(t, r, a) {
  if (t == null) throw new l();
  const i = t.spatialReference;
  if (
    (a =
      a ??
      (function (s) {
        var o;
        return "xmin" in s
          ? s.center
          : "x" in s
          ? s
          : (o = s.extent) == null
          ? void 0
          : o.center;
      })(t)) == null
  )
    throw new l();
  const c = t.constructor.fromJSON(await n("rotate", [i, t, r, a]));
  return (c.spatialReference = i), c;
}
async function W(t, r, a, i) {
  return u(await n("generalize", [e(t), t, r, a, i]));
}
async function C(t, r, a) {
  return u(await n("densify", [e(t), t, r, a]));
}
async function F(t, r, a, i = 0) {
  return u(await n("geodesicDensify", [e(t), t, r, a, i]));
}
function I(t, r) {
  return n("planarArea", [e(t), t, r]);
}
function K(t, r) {
  return n("planarLength", [e(t), t, r]);
}
function P(t, r, a) {
  return n("geodesicArea", [e(t), t, r, a]);
}
function U(t, r, a) {
  return n("geodesicLength", [e(t), t, r, a]);
}
class l extends Error {
  constructor() {
    super("Illegal Argument Exception");
  }
}
export {
  v as A,
  W as B,
  C,
  j as D,
  D as E,
  K as F,
  M as H,
  b as J,
  P as K,
  z as L,
  U as M,
  k as N,
  J as O,
  G as P,
  N as R,
  R as S,
  F as U,
  I as W,
  H as b,
  x as d,
  E as g,
  O as h,
  B as j,
  L as k,
  h as m,
  A as p,
  q as v,
  g as w,
  S as x,
  d as y,
};
