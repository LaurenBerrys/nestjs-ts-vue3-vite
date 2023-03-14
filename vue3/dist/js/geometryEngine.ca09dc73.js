import { G as t } from "./geometryEngineBase.6e4344a5.js";
import { hydratedAdapter as r } from "./hydrated.fc3c5340.js";
import "./index.8fd7165c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
function i(e) {
  return Array.isArray(e) ? e[0].spatialReference : e && e.spatialReference;
}
function S(e) {
  return t.extendedSpatialReferenceInfo(e);
}
function A(e, n) {
  return t.clip(r, i(e), e, n);
}
function D(e, n) {
  return t.cut(r, i(e), e, n);
}
function L(e, n) {
  return t.contains(r, i(e), e, n);
}
function T(e, n) {
  return t.crosses(r, i(e), e, n);
}
function V(e, n, a) {
  return t.distance(r, i(e), e, n, a);
}
function v(e, n) {
  return t.equals(r, i(e), e, n);
}
function z(e, n) {
  return t.intersects(r, i(e), e, n);
}
function H(e, n) {
  return t.touches(r, i(e), e, n);
}
function I(e, n) {
  return t.within(r, i(e), e, n);
}
function J(e, n) {
  return t.disjoint(r, i(e), e, n);
}
function N(e, n) {
  return t.overlaps(r, i(e), e, n);
}
function O(e, n, a) {
  return t.relate(r, i(e), e, n, a);
}
function b(e) {
  return t.isSimple(r, i(e), e);
}
function j(e) {
  return t.simplify(r, i(e), e);
}
function q(e, n = !1) {
  return t.convexHull(r, i(e), e, n);
}
function B(e, n) {
  return t.difference(r, i(e), e, n);
}
function C(e, n) {
  return t.symmetricDifference(r, i(e), e, n);
}
function E(e, n) {
  return t.intersect(r, i(e), e, n);
}
function P(e, n = null) {
  return t.union(r, i(e), e, n);
}
function G(e, n, a, o, s, u) {
  return t.offset(r, i(e), e, n, a, o, s, u);
}
function F(e, n, a, o = !1) {
  return t.buffer(r, i(e), e, n, a, o);
}
function _(e, n, a, o, s, u) {
  return t.geodesicBuffer(r, i(e), e, n, a, o, s, u);
}
function k(e, n, a = !0) {
  return t.nearestCoordinate(r, i(e), e, n, a);
}
function K(e, n) {
  return t.nearestVertex(r, i(e), e, n);
}
function M(e, n, a, o) {
  return t.nearestVertices(r, i(e), e, n, a, o);
}
function f(e) {
  var n;
  return "xmin" in e
    ? "center" in e
      ? e.center
      : null
    : "x" in e
    ? e
    : "extent" in e
    ? ((n = e.extent) == null ? void 0 : n.center) ?? null
    : null;
}
function Q(e, n, a) {
  if (e == null) throw new c();
  const o = e.spatialReference;
  if ((a = a ?? f(e)) == null) throw new c();
  const s = e.constructor.fromJSON(t.rotate(e, n, a));
  return (s.spatialReference = o), s;
}
function U(e, n) {
  if (e == null) throw new c();
  const a = e.spatialReference;
  if ((n = n ?? f(e)) == null) throw new c();
  const o = e.constructor.fromJSON(t.flipHorizontal(e, n));
  return (o.spatialReference = a), o;
}
function W(e, n) {
  if (e == null) throw new c();
  const a = e.spatialReference;
  if ((n = n ?? f(e)) == null) throw new c();
  const o = e.constructor.fromJSON(t.flipVertical(e, n));
  return (o.spatialReference = a), o;
}
function X(e, n, a, o) {
  return t.generalize(r, i(e), e, n, a, o);
}
function Y(e, n, a) {
  return t.densify(r, i(e), e, n, a);
}
function Z(e, n, a, o = 0) {
  return t.geodesicDensify(r, i(e), e, n, a, o);
}
function $(e, n) {
  return t.planarArea(r, i(e), e, n);
}
function ee(e, n) {
  return t.planarLength(r, i(e), e, n);
}
function ne(e, n, a) {
  return t.geodesicArea(r, i(e), e, n, a);
}
function te(e, n, a) {
  return t.geodesicLength(r, i(e), e, n, a);
}
function re(e, n) {
  return t.intersectLinesToPoints(r, i(e), e, n);
}
function ie(e, n) {
  t.changeDefaultSpatialReferenceTolerance(e, n);
}
function ae(e) {
  t.clearDefaultSpatialReferenceTolerance(e);
}
class c extends Error {
  constructor() {
    super("Illegal Argument Exception");
  }
}
export {
  F as buffer,
  ie as changeDefaultSpatialReferenceTolerance,
  ae as clearDefaultSpatialReferenceTolerance,
  A as clip,
  L as contains,
  q as convexHull,
  T as crosses,
  D as cut,
  Y as densify,
  B as difference,
  J as disjoint,
  V as distance,
  v as equals,
  S as extendedSpatialReferenceInfo,
  U as flipHorizontal,
  W as flipVertical,
  X as generalize,
  ne as geodesicArea,
  _ as geodesicBuffer,
  Z as geodesicDensify,
  te as geodesicLength,
  E as intersect,
  re as intersectLinesToPoints,
  z as intersects,
  b as isSimple,
  k as nearestCoordinate,
  K as nearestVertex,
  M as nearestVertices,
  G as offset,
  N as overlaps,
  $ as planarArea,
  ee as planarLength,
  O as relate,
  Q as rotate,
  j as simplify,
  C as symmetricDifference,
  H as touches,
  P as union,
  I as within,
};
