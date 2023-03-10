import {
  bO as d,
  e1 as I,
  e2 as F,
  aZ as M,
  U as j,
  e3 as w,
  e4 as h,
  e5 as g,
  e6 as S,
  e7 as C,
  aH as J,
  ah as L,
  aj as N,
  ai as T,
} from "./index.8fd7165c.js";
const z = {
  esriGeometryPoint: "points",
  esriGeometryPolyline: "polylines",
  esriGeometryPolygon: "polygons",
};
function R(s) {
  const t = s.folders || [],
    r = t.slice(),
    e = new Map(),
    n = new Map(),
    f = new Map(),
    l = new Map(),
    c = new Map(),
    u = {
      esriGeometryPoint: n,
      esriGeometryPolyline: f,
      esriGeometryPolygon: l,
    };
  ((s.featureCollection && s.featureCollection.layers) || []).forEach((o) => {
    const a = d(o);
    a.featureSet.features = [];
    const i = o.featureSet.geometryType;
    e.set(i, a);
    const p = o.layerDefinition.objectIdField;
    i === "esriGeometryPoint"
      ? G(n, p, o.featureSet.features)
      : i === "esriGeometryPolyline"
      ? G(f, p, o.featureSet.features)
      : i === "esriGeometryPolygon" && G(l, p, o.featureSet.features);
  }),
    s.groundOverlays &&
      s.groundOverlays.forEach((o) => {
        c.set(o.id, o);
      }),
    t.forEach((o) => {
      o.networkLinkIds.forEach((a) => {
        const i = (function (p, x, v) {
          const m = (function (E, O) {
            let P;
            return O.some((b) => b.id === E && ((P = b), !0)), P;
          })(p, v);
          return m && ((m.parentFolderId = x), (m.networkLink = m)), m;
        })(a, o.id, s.networkLinks);
        i && r.push(i);
      });
    }),
    r.forEach((o) => {
      if (o.featureInfos) {
        (o.points = d(e.get("esriGeometryPoint"))),
          (o.polylines = d(e.get("esriGeometryPolyline"))),
          (o.polygons = d(e.get("esriGeometryPolygon"))),
          (o.mapImages = []);
        for (const a of o.featureInfos)
          switch (a.type) {
            case "esriGeometryPoint":
            case "esriGeometryPolyline":
            case "esriGeometryPolygon": {
              const i = u[a.type].get(a.id);
              i && o[z[a.type]].featureSet.features.push(i);
              break;
            }
            case "GroundOverlay": {
              const i = c.get(a.id);
              i && o.mapImages.push(i);
              break;
            }
          }
        o.fullExtent = k([o]);
      }
    });
  const y = k(r);
  return { folders: t, sublayers: r, extent: y };
}
function U(s, t, r, e) {
  const n = I && I.findCredential(s);
  s = F(s, { token: n && n.token });
  const f = M.kmlServiceUrl;
  return j(f, {
    query: {
      url: s,
      model: "simple",
      folders: "",
      refresh: r !== 0 || void 0,
      outSR: JSON.stringify(t),
    },
    responseType: "json",
    signal: e,
  });
}
function q(s, t, r = null, e = []) {
  const n = [],
    f = {},
    l = t.sublayers,
    c = t.folders.map((u) => u.id);
  return (
    l.forEach((u) => {
      var o;
      const y = new s();
      if (
        (r ? y.read(u, r) : y.read(u),
        e.length && c.includes(y.id) && (y.visible = e.includes(y.id)),
        (f[u.id] = y),
        u.parentFolderId != null && u.parentFolderId !== -1)
      ) {
        const a = f[u.parentFolderId];
        a.sublayers || (a.sublayers = []),
          (o = a.sublayers) == null || o.unshift(y);
      } else n.unshift(y);
    }),
    n
  );
}
function G(s, t, r) {
  r.forEach((e) => {
    s.set(e.attributes[t], e);
  });
}
async function A(s) {
  const t = L.fromJSON(s.featureSet).features,
    r = s.layerDefinition,
    e = N(r.drawingInfo.renderer),
    n = T.fromJSON(s.popupInfo),
    f = [];
  for (const l of t) {
    const c = await e.getSymbolAsync(l);
    (l.symbol = c), (l.popupTemplate = n), (l.visible = !0), f.push(l);
  }
  return f;
}
function k(s) {
  const t = w(h),
    r = w(h);
  for (const e of s) {
    if (e.polygons && e.polygons.featureSet && e.polygons.featureSet.features)
      for (const n of e.polygons.featureSet.features) g(t, n.geometry), S(r, t);
    if (
      e.polylines &&
      e.polylines.featureSet &&
      e.polylines.featureSet.features
    )
      for (const n of e.polylines.featureSet.features)
        g(t, n.geometry), S(r, t);
    if (e.points && e.points.featureSet && e.points.featureSet.features)
      for (const n of e.points.featureSet.features) g(t, n.geometry), S(r, t);
    if (e.mapImages) for (const n of e.mapImages) g(t, n.extent), S(r, t);
  }
  return C(r, h)
    ? void 0
    : {
        xmin: r[0],
        ymin: r[1],
        zmin: r[2],
        xmax: r[3],
        ymax: r[4],
        zmax: r[5],
        spatialReference: J.WGS84,
      };
}
export { q as S, A as b, R as d, U as g, k as j };
