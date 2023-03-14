import { q as T } from "./Table.e9c997d5.js";
import {
  f8 as q,
  f9 as C,
  bq as b,
  cX as P,
  bH as d,
  fa as M,
  fb as _,
  bx as A,
  s as h,
  cm as N,
  bo as x,
} from "./index.8fd7165c.js";
import { f as F } from "./projectionSupport.4aeb802f.js";
import { v as R } from "./utils.e3aed7db.js";
function E(r, e) {
  return r ? (e ? 4 : 3) : e ? 3 : 2;
}
function w(r, e, o, a, u) {
  if (!r) return !1;
  const t = E(e, o),
    { coords: i, lengths: l } = r;
  let s = !1,
    n = 0;
  for (const c of l) (s = O(s, i, t, n, c, a, u)), (n += c * t);
  return s;
}
function O(r, e, o, a, u, t, i) {
  let l = r,
    s = a;
  for (let n = a, c = a + u * o; n < c; n += o) {
    (s = n + o), s === c && (s = a);
    const f = e[n],
      p = e[n + 1],
      m = e[s],
      y = e[s + 1];
    ((p < i && y >= i) || (y < i && p >= i)) &&
      f + ((i - p) / (y - p)) * (m - f) < t &&
      (l = !l);
  }
  return l;
}
const g = "feature-store:unsupported-query",
  j = {
    esriSpatialRelIntersects: "intersects",
    esriSpatialRelContains: "contains",
    esriSpatialRelCrosses: "crosses",
    esriSpatialRelDisjoint: "disjoint",
    esriSpatialRelEnvelopeIntersects: "intersects",
    esriSpatialRelIndexIntersects: null,
    esriSpatialRelOverlaps: "overlaps",
    esriSpatialRelTouches: "touches",
    esriSpatialRelWithin: "within",
    esriSpatialRelRelation: null,
  },
  I = {
    spatialRelationship: {
      esriSpatialRelIntersects: !0,
      esriSpatialRelContains: !0,
      esriSpatialRelWithin: !0,
      esriSpatialRelCrosses: !0,
      esriSpatialRelDisjoint: !0,
      esriSpatialRelTouches: !0,
      esriSpatialRelOverlaps: !0,
      esriSpatialRelEnvelopeIntersects: !0,
      esriSpatialRelIndexIntersects: !1,
      esriSpatialRelRelation: !1,
    },
    queryGeometry: {
      esriGeometryPoint: !0,
      esriGeometryMultipoint: !0,
      esriGeometryPolyline: !0,
      esriGeometryPolygon: !0,
      esriGeometryEnvelope: !0,
    },
    layerGeometry: {
      esriGeometryPoint: !0,
      esriGeometryMultipoint: !0,
      esriGeometryPolyline: !0,
      esriGeometryPolygon: !0,
      esriGeometryEnvelope: !1,
    },
  };
function Y(r, e, o, a, u) {
  if (
    b(e) &&
    o === "esriGeometryPoint" &&
    (r === "esriSpatialRelIntersects" || r === "esriSpatialRelContains")
  ) {
    const t = P(new A(), e, !1, !1);
    return Promise.resolve((i) =>
      (function (l, s, n, c) {
        return w(l, s, n, c.coords[0], c.coords[1]);
      })(t, !1, !1, i)
    );
  }
  if (b(e) && o === "esriGeometryMultipoint") {
    const t = P(new A(), e, !1, !1);
    if (r === "esriSpatialRelContains")
      return Promise.resolve((i) =>
        (function (l, s, n, c, f, p) {
          const m = E(f, p),
            { coords: y, lengths: v } = c;
          if (!v) return !1;
          for (let G = 0, S = 0; G < v.length; G++, S += m)
            if (!w(l, s, n, y[S], y[S + 1])) return !1;
          return !0;
        })(t, !1, !1, i, a, u)
      );
  }
  if (
    d(e) &&
    o === "esriGeometryPoint" &&
    (r === "esriSpatialRelIntersects" || r === "esriSpatialRelContains")
  )
    return Promise.resolve((t) => M(e, R(o, a, u, t)));
  if (d(e) && o === "esriGeometryMultipoint" && r === "esriSpatialRelContains")
    return Promise.resolve((t) => _(e, R(o, a, u, t)));
  if (d(e) && r === "esriSpatialRelIntersects") {
    const t = (function (i) {
      return i === "mesh" ? q : C(i);
    })(o);
    return Promise.resolve((i) => t(e, R(o, a, u, i)));
  }
  return T(
    () => import("./geometryEngineJSON.4e17515e.js"),
    [
      "js/geometryEngineJSON.4e17515e.js",
      "js/geometryEngineBase.6e4344a5.js",
      "js/geometryEngineJSON.8702a072.js",
      "js/json.495fc412.js",
    ]
  ).then((t) => {
    const i = t[j[r]].bind(null, e.spatialReference, e);
    return (l) => i(R(o, a, u, l));
  });
}
async function H(r, e, o) {
  const { spatialRel: a, geometry: u } = r;
  if (u) {
    if (
      !(function (t) {
        return t != null && I.spatialRelationship[t] === !0;
      })(a)
    )
      throw new h(g, "Unsupported query spatial relationship", { query: r });
    if (N(u.spatialReference) && N(o)) {
      if (
        !(function (t) {
          return t != null && I.queryGeometry[x(t)] === !0;
        })(u)
      )
        throw new h(g, "Unsupported query geometry type", { query: r });
      if (
        !(function (t) {
          return t != null && I.layerGeometry[t] === !0;
        })(e)
      )
        throw new h(g, "Unsupported layer geometry type", { query: r });
      if (r.outSR) return F(r.geometry && r.geometry.spatialReference, r.outSR);
    }
  }
}
function L(r) {
  if (d(r)) return !0;
  if (b(r)) {
    for (const e of r.rings)
      if (
        e.length !== 5 ||
        e[0][0] !== e[1][0] ||
        e[0][0] !== e[4][0] ||
        e[2][0] !== e[3][0] ||
        e[0][1] !== e[3][1] ||
        e[0][1] !== e[4][1] ||
        e[1][1] !== e[2][1]
      )
        return !1;
    return !0;
  }
  return !1;
}
async function X(r, e) {
  if (!r) return null;
  const o = e.featureAdapter,
    { startTimeField: a, endTimeField: u } = r;
  let t = Number.POSITIVE_INFINITY,
    i = Number.NEGATIVE_INFINITY;
  if (a && u)
    await e.forEach((l) => {
      const s = o.getAttribute(l, a),
        n = o.getAttribute(l, u);
      s == null || isNaN(s) || (t = Math.min(t, s)),
        n == null || isNaN(n) || (i = Math.max(i, n));
    });
  else {
    const l = a || u;
    await e.forEach((s) => {
      const n = o.getAttribute(s, l);
      n == null || isNaN(n) || ((t = Math.min(t, n)), (i = Math.max(i, n)));
    });
  }
  return { start: t, end: i };
}
function k(r, e, o) {
  if (!e || !r) return null;
  const { startTimeField: a, endTimeField: u } = r;
  if (!a && !u) return null;
  const { start: t, end: i } = e;
  return t === null && i === null
    ? null
    : t === void 0 && i === void 0
    ? () => !1
    : a && u
    ? (function (l, s, n, c, f) {
        return c != null && f != null
          ? (p) => {
              const m = l.getAttribute(p, s),
                y = l.getAttribute(p, n);
              return (m == null || m <= f) && (y == null || y >= c);
            }
          : c != null
          ? (p) => {
              const m = l.getAttribute(p, n);
              return m == null || m >= c;
            }
          : f != null
          ? (p) => {
              const m = l.getAttribute(p, s);
              return m == null || m <= f;
            }
          : void 0;
      })(o, a, u, t, i)
    : (function (l, s, n, c) {
        return n != null && c != null && n === c
          ? (f) => l.getAttribute(f, s) === n
          : n != null && c != null
          ? (f) => {
              const p = l.getAttribute(f, s);
              return p >= n && p <= c;
            }
          : n != null
          ? (f) => l.getAttribute(f, s) >= n
          : c != null
          ? (f) => l.getAttribute(f, s) <= c
          : void 0;
      })(o, a || u, t, i);
}
export { L as I, H as P, k as n, X as t, Y as v };
