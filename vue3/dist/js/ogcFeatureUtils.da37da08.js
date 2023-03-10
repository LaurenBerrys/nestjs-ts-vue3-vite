import {
  Q as V,
  t as w,
  s as y,
  U as j,
  gj as _,
  cV as B,
  aH as I,
  gK as H,
  W as U,
  r as x,
  cL as X,
  cq as Y,
  X as R,
  eM as ee,
  gL as ne,
} from "./index.8fd7165c.js";
import { T as te, L as ie, I as ae } from "./geojson.96c8477e.js";
import { o as se } from "./clientSideDefaults.4b2f5b2f.js";
const O = V.getLogger("esri.layers.graphics.sources.ogcfeature"),
  P = "http://www.opengis.net/def/crs/",
  fe = `${P}OGC/1.3/CRS84`;
async function me(i, n, e = {}, t = 5) {
  const { links: s } = i,
    l =
      m(s, "items", "application/geo+json") ||
      m(
        s,
        "http://www.opengis.net/def/rel/ogc/1.0/items",
        "application/geo+json"
      );
  if (w(l))
    throw new y("ogc-feature-layer:missing-items-page", "Missing items url");
  const { data: u } = await j(l.href, {
    signal: e.signal,
    query: { limit: t, ...e.customParameters, token: e.apiKey },
    headers: { accept: "application/geo+json" },
  });
  await te(u);
  const r = ie(u, { geometryType: n.geometryType }),
    f = n.fields || r.fields || [],
    S = n.hasZ != null ? n.hasZ : r.hasZ,
    h = r.geometryType,
    p = n.objectIdField || r.objectIdFieldName || "OBJECTID";
  let o = n.timeInfo;
  const T = f.find(({ name: a }) => a === p);
  if (T) (T.editable = !1), (T.nullable = !1);
  else {
    if (!r.objectIdFieldType)
      throw new y(
        "ogc-feature-layer:missing-feature-id",
        "Collection geojson require a feature id as a unique identifier"
      );
    f.unshift({
      name: p,
      alias: p,
      type:
        r.objectIdFieldType === "number"
          ? "esriFieldTypeOID"
          : "esriFieldTypeString",
      editable: !1,
      nullable: !1,
    });
  }
  if (p !== r.objectIdFieldName) {
    const a = f.find(({ name: d }) => d === r.objectIdFieldName);
    a && (a.type = "esriFieldTypeInteger");
  }
  f === r.fields &&
    r.unknownFields.length > 0 &&
    O.warn({
      name: "ogc-feature-layer:unknown-field-types",
      message:
        "Some fields types couldn't be inferred from the features and were dropped",
      details: { unknownFields: r.unknownFields },
    });
  for (const a of f) {
    if (
      (a.name == null && (a.name = a.alias),
      a.alias == null && (a.alias = a.name),
      a.type !== "esriFieldTypeOID" &&
        a.type !== "esriFieldTypeGlobalID" &&
        ((a.editable = a.editable == null || !!a.editable),
        (a.nullable = a.nullable == null || !!a.nullable)),
      !a.name)
    )
      throw new y(
        "ogc-feature-layer:invalid-field-name",
        "field name is missing",
        { field: a }
      );
    if (!_.jsonValues.includes(a.type))
      throw new y(
        "ogc-feature-layer:invalid-field-type",
        `invalid type for field "${a.name}"`,
        {
          field: a,
        }
      );
  }
  if (o) {
    const a = new B(f);
    if (o.startTimeField) {
      const d = a.get(o.startTimeField);
      d
        ? ((o.startTimeField = d.name), (d.type = "esriFieldTypeDate"))
        : (o.startTimeField = null);
    }
    if (o.endTimeField) {
      const d = a.get(o.endTimeField);
      d
        ? ((o.endTimeField = d.name), (d.type = "esriFieldTypeDate"))
        : (o.endTimeField = null);
    }
    if (o.trackIdField) {
      const d = a.get(o.trackIdField);
      d
        ? (o.trackIdField = d.name)
        : ((o.trackIdField = null),
          O.warn({
            name: "ogc-feature-layer:invalid-timeInfo-trackIdField",
            message: "trackIdField is missing",
            details: { timeInfo: o },
          }));
    }
    o.startTimeField ||
      o.endTimeField ||
      (O.warn({
        name: "ogc-feature-layer:invalid-timeInfo",
        message: "startTimeField and endTimeField are missing",
        details: { timeInfo: o },
      }),
      (o = null));
  }
  return {
    drawingInfo: h ? se(h) : null,
    extent: le(i),
    geometryType: h,
    fields: f,
    hasZ: !!S,
    objectIdField: p,
    timeInfo: o,
  };
}
async function pe(i, n = {}) {
  const { links: e } = i,
    t =
      m(e, "data", "application/json") ||
      m(e, "http://www.opengis.net/def/rel/ogc/1.0/data", "application/json");
  if (w(t))
    throw new y(
      "ogc-feature-layer:missing-collections-page",
      "Missing collections url"
    );
  const { apiKey: s, customParameters: l, signal: u } = n,
    { data: r } = await j(t.href, {
      signal: u,
      headers: { accept: "application/json" },
      query: { ...l, token: s },
    });
  return r;
}
async function ge(i, n = {}) {
  const { links: e } = i,
    t =
      m(e, "conformance", "application/json") ||
      m(
        e,
        "http://www.opengis.net/def/rel/ogc/1.0/conformance",
        "application/json"
      );
  if (w(t))
    throw new y(
      "ogc-feature-layer:missing-conformance-page",
      "Missing conformance url"
    );
  const { apiKey: s, customParameters: l, signal: u } = n,
    { data: r } = await j(t.href, {
      signal: u,
      headers: { accept: "application/json" },
      query: { ...l, token: s },
    });
  return r;
}
async function ye(i, n = {}) {
  const { apiKey: e, customParameters: t, signal: s } = n,
    { data: l } = await j(i, {
      signal: s,
      headers: { accept: "application/json" },
      query: { ...t, token: e },
    });
  return l;
}
async function we(i, n = {}) {
  const e = "application/vnd.oai.openapi+json;version=3.0",
    t = m(i.links, "service-desc", e);
  if (w(t))
    return (
      O.warn(
        "ogc-feature-layer:missing-openapi-page",
        "The OGC API-Features server does not have an OpenAPI page."
      ),
      null
    );
  const { apiKey: s, customParameters: l, signal: u } = n,
    { data: r } = await j(t.href, {
      signal: u,
      headers: { accept: e },
      query: { ...l, token: s },
    });
  return r;
}
function be(i) {
  var s;
  const n =
    (s =
      /^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(
        i
      )) == null
      ? void 0
      : s.groups;
  if (!n) return null;
  const { authority: e, code: t } = n;
  switch (e.toLowerCase()) {
    case "ogc":
      switch (t.toLowerCase()) {
        case "crs27":
          return I.GCS_NAD_1927.wkid;
        case "crs83":
          return 4269;
        case "crs84":
        case "crs84h":
          return I.WGS84.wkid;
        default:
          return null;
      }
    case "esri":
    case "epsg": {
      const l = Number.parseInt(t, 10);
      return Number.isNaN(l) ? null : l;
    }
    default:
      return null;
  }
}
async function he(i, n, e) {
  const t = await re(i, n, e);
  return H(t);
}
async function re(i, n, e) {
  const {
      collection: t,
      layerDefinition: s,
      maxRecordCount: l,
      queryParameters: { apiKey: u, customParameters: r },
      spatialReference: f,
      supportedCrs: S,
    } = i,
    { links: h } = t,
    p =
      m(h, "items", "application/geo+json") ||
      m(
        h,
        "http://www.opengis.net/def/rel/ogc/1.0/items",
        "application/geo+json"
      );
  if (w(p))
    throw new y("ogc-feature-layer:missing-items-page", "Missing items url");
  const { geometry: o, num: T, start: a, timeExtent: d, where: K } = n;
  if (n.objectIds)
    throw new y(
      "ogc-feature-layer:query-by-objectids-not-supported",
      "Queries with objectids are not supported"
    );
  const L = I.fromJSON(f),
    F = U(n.outSpatialReference, L),
    v = F.isWGS84 ? null : D(F, S),
    Z = oe(o, S),
    J = (function (c) {
      if (w(c)) return null;
      const { start: k, end: G } = c;
      return `${x(k) ? k.toISOString() : ".."}/${
        x(G) ? G.toISOString() : ".."
      }`;
    })(d),
    A = (function (c) {
      return w(c) || !c || c === "1=1" ? null : c;
    })(K),
    z = T ?? (a != null && a !== void 0 ? 10 : l),
    { data: b } = await j(p.href, {
      ...e,
      query: {
        ...r,
        ...Z,
        crs: v,
        datetime: J,
        query: A,
        limit: z,
        startindex: a,
        token: u,
      },
      headers: { accept: "application/geo+json" },
    });
  let N = !1;
  b.links && (N = !!b.links.find((c) => c.rel === "next")),
    !N &&
      Number.isInteger(b.numberMatched) &&
      Number.isInteger(b.numberReturned) &&
      (N = b.numberReturned < b.numberMatched);
  const { fields: E, geometryType: q, hasZ: $, objectIdField: M } = s,
    W = ae(b, { geometryType: q, hasZ: $, objectIdField: M });
  if (!v && F.isWebMercator) {
    for (const c of W)
      if (x(c.geometry) && q != null) {
        const k = X(c.geometry, q, $, !1);
        (k.spatialReference = I.WGS84), (c.geometry = Y(R(k, F)));
      }
  }
  for (const c of W) c.objectId = c.attributes[M];
  const Q = v || (!v && F.isWebMercator) ? F.toJSON() : ee,
    g = new ne();
  return (
    (g.exceededTransferLimit = N),
    (g.features = W),
    (g.fields = E),
    (g.geometryType = q),
    (g.hasZ = $),
    (g.objectIdFieldName = M),
    (g.spatialReference = Q),
    g
  );
}
function D(i, n) {
  const { isWebMercator: e, wkid: t } = i;
  if (!t) return null;
  const s = e ? n[3857] ?? n[102100] ?? n[102113] ?? n[900913] : n[i.wkid];
  return s ? `${P}${s}` : null;
}
function C(i) {
  if (w(i)) return "";
  const { xmin: n, ymin: e, xmax: t, ymax: s } = i;
  return `${n},${e},${t},${s}`;
}
function oe(i, n) {
  if (
    !(function (s) {
      return x(s) && s.type === "extent";
    })(i)
  )
    return null;
  const { spatialReference: e } = i;
  if (!e || e.isWGS84) return { bbox: C(i) };
  const t = D(e, n);
  return x(t)
    ? { bbox: C(i), "bbox-crs": t }
    : e.isWebMercator
    ? { bbox: C(R(i, I.WGS84)) }
    : null;
}
function le(i) {
  var r;
  const n = (r = i.extent) == null ? void 0 : r.spatial;
  if (!n) return null;
  const e = n.bbox[0],
    t = e.length === 4,
    s = e[0],
    l = e[1],
    u = t ? void 0 : e[2];
  return {
    xmin: s,
    ymin: l,
    xmax: t ? e[2] : e[3],
    ymax: t ? e[3] : e[4],
    zmin: u,
    zmax: t ? void 0 : e[5],
    spatialReference: I.WGS84.toJSON(),
  };
}
function m(i, n, e) {
  return (
    i.find((t) => t.rel === n && t.type === e) ||
    i.find((t) => t.rel === n && !t.type)
  );
}
export {
  fe as F,
  me as I,
  he as N,
  we as S,
  pe as T,
  P as j,
  ge as k,
  re as q,
  be as v,
  ye as x,
};
