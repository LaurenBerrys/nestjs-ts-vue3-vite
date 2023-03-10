import {
  s as P,
  eJ as M,
  gl as N,
  eL as x,
  bx as C,
} from "./index.8fd7165c.js";
const v = {
  LineString: "esriGeometryPolyline",
  MultiLineString: "esriGeometryPolyline",
  MultiPoint: "esriGeometryMultipoint",
  Point: "esriGeometryPoint",
  Polygon: "esriGeometryPolygon",
  MultiPolygon: "esriGeometryPolygon",
};
function b(t) {
  return v[t];
}
function* T(t) {
  switch (t.type) {
    case "Feature":
      yield t;
      break;
    case "FeatureCollection":
      for (const e of t.features) e && (yield e);
  }
}
function* A(t) {
  if (t)
    switch (t.type) {
      case "Point":
        yield t.coordinates;
        break;
      case "LineString":
      case "MultiPoint":
        yield* t.coordinates;
        break;
      case "MultiLineString":
      case "Polygon":
        for (const e of t.coordinates) yield* e;
        break;
      case "MultiPolygon":
        for (const e of t.coordinates) for (const o of e) yield* o;
    }
}
function* D(t, e = {}) {
  const { geometryType: o, objectIdField: n } = e;
  for (const r of t) {
    const { geometry: s, properties: c, id: i } = r;
    if (s && b(s.type) !== o) continue;
    const f = c || {};
    let u;
    n && ((u = f[n]), i == null || u || (f[n] = u = i)),
      yield new x(s ? R(new C(), s, e) : null, f, null, u ?? void 0);
  }
}
function E(t) {
  for (const e of t) if (e.length > 2) return !0;
  return !1;
}
function I(t) {
  let e = 0;
  for (let o = 0; o < t.length; o++) {
    const n = t[o],
      r = t[(o + 1) % t.length];
    e += n[0] * r[1] - r[0] * n[1];
  }
  return e <= 0;
}
function O(t) {
  const e = t[0],
    o = t[t.length - 1];
  return (e[0] === o[0] && e[1] === o[1] && e[2] === o[2]) || t.push(e), t;
}
function R(t, e, o) {
  switch (e.type) {
    case "LineString":
    case "MultiPoint":
      return (function (n, r, s) {
        return h(n, r.coordinates, s), n;
      })(t, e, o);
    case "MultiLineString":
      return (function (n, r, s) {
        for (const c of r.coordinates) h(n, c, s);
        return n;
      })(t, e, o);
    case "MultiPolygon":
      return (function (n, r, s) {
        for (const c of r.coordinates) {
          k(n, c[0], s);
          for (let i = 1; i < c.length; i++) L(n, c[i], s);
        }
        return n;
      })(t, e, o);
    case "Point":
      return (function (n, r, s) {
        return S(n, r.coordinates, s), n;
      })(t, e, o);
    case "Polygon":
      return (function (n, r, s) {
        const c = r.coordinates;
        k(n, c[0], s);
        for (let i = 1; i < c.length; i++) L(n, c[i], s);
        return n;
      })(t, e, o);
  }
}
function k(t, e, o) {
  const n = O(e);
  (function (r) {
    return !I(r);
  })(n)
    ? J(t, n, o)
    : h(t, n, o);
}
function L(t, e, o) {
  const n = O(e);
  (function (r) {
    return I(r);
  })(n)
    ? J(t, n, o)
    : h(t, n, o);
}
function h(t, e, o) {
  for (const n of e) S(t, n, o);
  t.lengths.push(e.length);
}
function J(t, e, o) {
  for (let n = e.length - 1; n >= 0; n--) S(t, e[n], o);
  t.lengths.push(e.length);
}
function S(t, e, o) {
  const [n, r, s] = e;
  t.coords.push(n, r), o.hasZ && t.coords.push(s || 0);
}
function Z(t) {
  switch (typeof t) {
    case "string":
      return "esriFieldTypeString";
    case "number":
      return "esriFieldTypeDouble";
    default:
      return "unknown";
  }
}
function $(t) {
  if (!t) throw new P("geojson-layer:empty", "GeoJSON data is empty");
  if (t.type !== "Feature" && t.type !== "FeatureCollection")
    throw new P(
      "geojson-layer:unsupported-geojson-object",
      "missing or not supported GeoJSON object type",
      { data: t }
    );
  const { crs: e } = t;
  if (!e) return;
  const o =
      typeof e == "string"
        ? e
        : e.type === "name"
        ? e.properties.name
        : e.type === "EPSG"
        ? e.properties.code
        : null,
    n = new RegExp(".*(CRS84H?|4326)$", "i");
  if (!o || !n.test(o))
    throw new P(
      "geojson-layer:unsupported-crs",
      "unsupported GeoJSON 'crs' member",
      { crs: e }
    );
}
function q(t, e = {}) {
  const o = [],
    n = new Set(),
    r = new Set();
  let s,
    c = !1,
    i = null,
    f = !1,
    { geometryType: u = null } = e,
    m = !1;
  for (const d of T(t)) {
    const { geometry: g, properties: l, id: y } = d;
    if (
      (!g || (u || (u = b(g.type)), b(g.type) === u)) &&
      (c || (c = E(A(g))),
      f ||
        ((f = y != null),
        f &&
          ((s = typeof y),
          l && (i = Object.keys(l).filter((p) => l[p] === y)))),
      l &&
        i &&
        f &&
        y != null &&
        (i.length > 1
          ? (i = i.filter((p) => l[p] === y))
          : i.length === 1 && (i = l[i[0]] === y ? i : [])),
      !m && l)
    ) {
      let p = !0;
      for (const a in l) {
        if (n.has(a)) continue;
        const j = l[a];
        if (j == null) {
          (p = !1), r.add(a);
          continue;
        }
        const F = Z(j);
        if (F === "unknown") {
          r.add(a);
          continue;
        }
        r.delete(a), n.add(a);
        const G = M(a);
        G && o.push({ name: G, alias: a, type: F });
      }
      m = p;
    }
  }
  const w =
    M(((i == null ? void 0 : i.length) === 1 && i[0]) || null) ?? void 0;
  if (w) {
    for (const d of o)
      if (d.name === w && N(d)) {
        d.type = "esriFieldTypeOID";
        break;
      }
  }
  return {
    fields: o,
    geometryType: u,
    hasZ: c,
    objectIdFieldName: w,
    objectIdFieldType: s,
    unknownFields: Array.from(r),
  };
}
function z(t, e) {
  return Array.from(D(T(t), e));
}
export { z as I, q as L, $ as T, b as s };
