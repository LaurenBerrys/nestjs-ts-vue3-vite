import { G as r } from "./geometryEngineBase.6e4344a5.js";
import { t as i } from "./json.495fc412.js";
function s(e) {
  return r.extendedSpatialReferenceInfo(e);
}
function f(e, n, t) {
  return r.clip(i, e, n, t);
}
function l(e, n, t) {
  return r.cut(i, e, n, t);
}
function p(e, n, t) {
  return r.contains(i, e, n, t);
}
function d(e, n, t) {
  return r.crosses(i, e, n, t);
}
function g(e, n, t, u) {
  return r.distance(i, e, n, t, u);
}
function m(e, n, t) {
  return r.equals(i, e, n, t);
}
function h(e, n, t) {
  return r.intersects(i, e, n, t);
}
function x(e, n, t) {
  return r.touches(i, e, n, t);
}
function y(e, n, t) {
  return r.within(i, e, n, t);
}
function R(e, n, t) {
  return r.disjoint(i, e, n, t);
}
function S(e, n, t) {
  return r.overlaps(i, e, n, t);
}
function w(e, n, t, u) {
  return r.relate(i, e, n, t, u);
}
function A(e, n) {
  return r.isSimple(i, e, n);
}
function D(e, n) {
  return r.simplify(i, e, n);
}
function T(e, n, t = !1) {
  return r.convexHull(i, e, n, t);
}
function L(e, n, t) {
  return r.difference(i, e, n, t);
}
function V(e, n, t) {
  return r.symmetricDifference(i, e, n, t);
}
function b(e, n, t) {
  return r.intersect(i, e, n, t);
}
function v(e, n, t = null) {
  return r.union(i, e, n, t);
}
function z(e, n, t, u, o, c, a) {
  return r.offset(i, e, n, t, u, o, c, a);
}
function E(e, n, t, u, o = !1) {
  return r.buffer(i, e, n, t, u, o);
}
function I(e, n, t, u, o, c, a) {
  return r.geodesicBuffer(i, e, n, t, u, o, c, a);
}
function j(e, n, t, u = !0) {
  return r.nearestCoordinate(i, e, n, t, u);
}
function H(e, n, t) {
  return r.nearestVertex(i, e, n, t);
}
function _(e, n, t, u, o) {
  return r.nearestVertices(i, e, n, t, u, o);
}
function P(e, n, t, u) {
  if (n == null || u == null) throw new Error("Illegal Argument Exception");
  const o = r.rotate(n, t, u);
  return (o.spatialReference = e), o;
}
function q(e, n, t) {
  if (n == null || t == null) throw new Error("Illegal Argument Exception");
  const u = r.flipHorizontal(n, t);
  return (u.spatialReference = e), u;
}
function B(e, n, t) {
  if (n == null || t == null) throw new Error("Illegal Argument Exception");
  const u = r.flipVertical(n, t);
  return (u.spatialReference = e), u;
}
function C(e, n, t, u, o) {
  return r.generalize(i, e, n, t, u, o);
}
function O(e, n, t, u) {
  return r.densify(i, e, n, t, u);
}
function G(e, n, t, u, o = 0) {
  return r.geodesicDensify(i, e, n, t, u, o);
}
function M(e, n, t) {
  return r.planarArea(i, e, n, t);
}
function k(e, n, t) {
  return r.planarLength(i, e, n, t);
}
function F(e, n, t, u) {
  return r.geodesicArea(i, e, n, t, u);
}
function J(e, n, t, u) {
  return r.geodesicLength(i, e, n, t, u);
}
function K(e, n, t) {
  return n == null || t == null ? [] : r.intersectLinesToPoints(i, e, n, t);
}
function N(e, n) {
  r.changeDefaultSpatialReferenceTolerance(e, n);
}
function Q(e) {
  r.clearDefaultSpatialReferenceTolerance(e);
}
const X = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      buffer: E,
      changeDefaultSpatialReferenceTolerance: N,
      clearDefaultSpatialReferenceTolerance: Q,
      clip: f,
      contains: p,
      convexHull: T,
      crosses: d,
      cut: l,
      densify: O,
      difference: L,
      disjoint: R,
      distance: g,
      equals: m,
      extendedSpatialReferenceInfo: s,
      flipHorizontal: q,
      flipVertical: B,
      generalize: C,
      geodesicArea: F,
      geodesicBuffer: I,
      geodesicDensify: G,
      geodesicLength: J,
      intersect: b,
      intersectLinesToPoints: K,
      intersects: h,
      isSimple: A,
      nearestCoordinate: j,
      nearestVertex: H,
      nearestVertices: _,
      offset: z,
      overlaps: S,
      planarArea: M,
      planarLength: k,
      relate: w,
      rotate: P,
      simplify: D,
      symmetricDifference: V,
      touches: x,
      union: v,
      within: y,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export {
  v as A,
  M as B,
  J as C,
  z as D,
  j as E,
  N as G,
  G as H,
  C as I,
  H as L,
  Q as M,
  X as O,
  K as P,
  E as R,
  V as S,
  _ as T,
  O as V,
  k as _,
  p as a,
  P as b,
  h as c,
  w as d,
  x as f,
  S as g,
  D as h,
  l as i,
  I as j,
  y as l,
  A as m,
  d as o,
  R as p,
  F as q,
  f as r,
  g as s,
  s as t,
  m as u,
  q as v,
  b as w,
  L as x,
  T as y,
  B as z,
};
