import { q as G } from "./Table.e9c997d5.js";
import {
  d0 as N,
  eZ as J,
  dp as q,
  cM as A,
  t as g,
  bH as P,
  bq as E,
  bG as z,
  ac as B,
  dV as V,
  e_ as Z,
  e$ as I,
  cf as j,
  eM as x,
  r as v,
  bu as $,
  bv as S,
  f0 as k,
  bx as h,
  f1 as w,
  bw as D,
  f2 as H,
  f3 as K,
} from "./index.8fd7165c.js";
import { f as _, g as b } from "./projectionSupport.4aeb802f.js";
const L = new N({
    esriSRUnit_Meter: "meters",
    esriSRUnit_Kilometer: "kilometers",
    esriSRUnit_Foot: "feet",
    esriSRUnit_StatuteMile: "miles",
    esriSRUnit_NauticalMile: "nautical-miles",
    esriSRUnit_USNauticalMile: "us-nautical-miles",
  }),
  M = Object.freeze({}),
  F = new h(),
  T = new h(),
  d = new h(),
  m = {
    esriGeometryPoint: w,
    esriGeometryPolyline: D,
    esriGeometryPolygon: H,
    esriGeometryMultipoint: K,
  };
function ee(e, a, r, s = e.hasZ, n = e.hasM) {
  if (g(a)) return null;
  const l = e.hasZ && s,
    i = e.hasM && n;
  if (r) {
    const t = S(d, a, e.hasZ, e.hasM, "esriGeometryPoint", r, s, n);
    return w(t, l, i);
  }
  return w(a, l, i);
}
function te(e, a, r, s, n, l, i = a, t = r) {
  var o, y, R;
  const u = a && i,
    c = r && t,
    f = v(s) ? ("coords" in s ? s : s.geometry) : null;
  if (g(f)) return null;
  if (n) {
    let p = $(T, f, a, r, e, n, i, t);
    return (
      l && (p = S(d, p, u, c, e, l)),
      ((o = m[e]) == null ? void 0 : o.call(m, p, u, c)) ?? null
    );
  }
  if (l) {
    const p = S(d, f, a, r, e, l, i, t);
    return ((y = m[e]) == null ? void 0 : y.call(m, p, u, c)) ?? null;
  }
  return (
    k(F, f, a, r, i, t),
    ((R = m[e]) == null ? void 0 : R.call(m, F, u, c)) ?? null
  );
}
async function ie(e, a, r) {
  const {
    outFields: s,
    orderByFields: n,
    groupByFieldsForStatistics: l,
    outStatistics: i,
  } = e;
  if (s) for (let t = 0; t < s.length; t++) s[t] = s[t].trim();
  if (n) for (let t = 0; t < n.length; t++) n[t] = n[t].trim();
  if (l) for (let t = 0; t < l.length; t++) l[t] = l[t].trim();
  if (i)
    for (let t = 0; t < i.length; t++)
      i[t].onStatisticField &&
        (i[t].onStatisticField = i[t].onStatisticField.trim());
  return (
    e.geometry && !e.outSR && (e.outSR = e.geometry.spatialReference),
    C(e, a, r)
  );
}
async function C(e, a, r) {
  var l;
  if (!e) return null;
  let { where: s } = e;
  if (
    ((e.where = s = s && s.trim()),
    (!s || /^1 *= *1$/.test(s) || (a && a === s)) && (e.where = null),
    !e.geometry)
  )
    return e;
  let n = await (async function (i) {
    const { distance: t, units: u } = i,
      c = i.geometry;
    if (t == null || "vertexAttributes" in c) return c;
    const f = c.spatialReference,
      o = u ? L.fromJSON(u) : Z(f),
      y = f && (I(f) || j(f)) ? c : await _(f, x).then(() => b(c, x));
    return (
      await (async function () {
        return (
          await G(
            () => import("./geometryEngineJSON.4e17515e.js"),
            [
              "js/geometryEngineJSON.4e17515e.js",
              "js/geometryEngineBase.6e4344a5.js",
              "js/geometryEngineJSON.8702a072.js",
              "js/json.495fc412.js",
            ]
          )
        ).geodesicBuffer;
      })()
    )(y.spatialReference, y, t, o);
  })(e);
  if (
    ((e.distance = 0),
    (e.units = null),
    e.spatialRel === "esriSpatialRelEnvelopeIntersects")
  ) {
    const { spatialReference: i } = e.geometry;
    (n = J(n)), (n.spatialReference = i);
  }
  if (n) {
    await _(n.spatialReference, r),
      (n = (function (o, y) {
        const R = o.spatialReference;
        return O(o, y) && P(o)
          ? {
              spatialReference: R,
              rings: [
                [
                  [o.xmin, o.ymin],
                  [o.xmin, o.ymax],
                  [o.xmax, o.ymax],
                  [o.xmax, o.ymin],
                  [o.xmin, o.ymin],
                ],
              ],
            }
          : o;
      })(n, r));
    const i = (await q(A(n)))[0];
    if (g(i)) throw M;
    const t =
        ("quantizationParameters" in e &&
          ((l = e.quantizationParameters) == null ? void 0 : l.tolerance)) ||
        ("maxAllowableOffset" in e && e.maxAllowableOffset) ||
        0,
      u = t && O(n, r) ? { densificationStep: 8 * t } : void 0,
      c = i.toJSON(),
      f = await b(c, c.spatialReference, r, u);
    if (!f) throw M;
    (f.spatialReference = r), (e.geometry = f);
  }
  return e;
}
function O(e, a) {
  if (!e) return !1;
  const r = e.spatialReference;
  return (P(e) || E(e) || z(e)) && !B(r, a) && !V(r, a);
}
function ne(e) {
  return e && U in e ? JSON.parse(JSON.stringify(e, Q)) : e;
}
const U = "_geVersion",
  Q = (e, a) => (e !== U ? a : void 0);
export { ne as E, M as F, C as J, ee as b, te as v, ie as z };
