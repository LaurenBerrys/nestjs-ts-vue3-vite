import { q as F } from "./Table.e9c997d5.js";
import {
  en as N,
  t as L,
  s as J,
  eo as U,
  r as T,
  ep as V,
  cy as x,
  da as P,
} from "./index.8fd7165c.js";
import { t as h, r as E } from "./fetchService.302fd535.js";
import { a as _ } from "./lazyLayerLoader.fb83604a.js";
import "./vue.a7ce1fbe.js";
import "./NvapForm.feb8550d.js";
import "./vue-i18n.67a42238.js";
import "./vue-router.805f6e2a.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
const M = { FeatureLayer: !0, SceneLayer: !0 };
async function K(a) {
  var o;
  const c = (o = a.properties) == null ? void 0 : o.customParameters,
    t = await k(a.url, c),
    y = { ...a.properties, url: a.url };
  if (!t.sublayerIds)
    return (
      t.layerOrTableId != null &&
        ((y.layerId = t.layerOrTableId), (y.sourceJSON = t.sourceJSON)),
      new t.Constructor(y)
    );
  const S = new (
    await F(
      () => import("./GroupLayer.65ceb082.js"),
      [
        "js/GroupLayer.65ceb082.js",
        "js/index.8fd7165c.js",
        "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
        "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
        "js/NvapForm.feb8550d.js",
        "js/vue.a7ce1fbe.js",
        "assets/NvapForm.356f5dc3.css",
        "js/vue-router.805f6e2a.js",
        "js/Table.e9c997d5.js",
        "js/vue-i18n.67a42238.js",
        "assets/Table.3b7647ef.css",
        "assets/index.a699c0e4.css",
        "js/lazyLayerLoader.fb83604a.js",
      ]
    )
  ).default({ title: t.parsedUrl.title });
  return (
    (function (O, m, u) {
      function w(i, d) {
        const v = { ...u, layerId: i, sublayerTitleMode: "service-name" };
        return T(d) && (v.sourceJSON = d), new m.Constructor(v);
      }
      m.sublayerIds.forEach((i) => {
        const d = w(i, g(m.sublayerInfos, i));
        O.add(d);
      }),
        m.tableIds.forEach((i) => {
          const d = w(i, g(m.tableInfos, i));
          O.tables.add(d);
        });
    })(S, t, y),
    S
  );
}
function g(a, c) {
  return a ? a.find((t) => t.id === c) : null;
}
async function k(a, c) {
  var w, i, d, v;
  let t = N(a);
  if (
    (L(t) &&
      (t = await (async function (e, s) {
        var I;
        const r = await h(e, { customParameters: s });
        let l = null,
          n = null;
        const f = r.type;
        if (
          (f === "Feature Layer" || f === "Table"
            ? ((l = "FeatureServer"), (n = r.id ?? null))
            : f === "indexedVector"
            ? (l = "VectorTileServer")
            : r.hasOwnProperty("mapName")
            ? (l = "MapServer")
            : r.hasOwnProperty("bandCount") && r.hasOwnProperty("pixelSizeX")
            ? (l = "ImageServer")
            : r.hasOwnProperty("maxRecordCount") &&
              r.hasOwnProperty("allowGeometryUpdates")
            ? (l = "FeatureServer")
            : r.hasOwnProperty("streamUrls")
            ? (l = "StreamServer")
            : C(r)
            ? ((l = "SceneServer"), (n = r.id))
            : r.hasOwnProperty("layers") &&
              C((I = r.layers) == null ? void 0 : I[0]) &&
              (l = "SceneServer"),
          !l)
        )
          return null;
        const p = n != null ? U(e) : null;
        return {
          title: (T(p) && r.name) || V(e),
          serverType: l,
          sublayer: n,
          url: { path: T(p) ? p.serviceUrl : x(e).path },
        };
      })(a, c)),
    L(t))
  )
    throw new J(
      "arcgis-layers:url-mismatch",
      "The url '${url}' is not a valid arcgis resource",
      {
        url: a,
      }
    );
  const { serverType: y, sublayer: S } = t;
  let o;
  const O = {
    FeatureServer: "FeatureLayer",
    StreamServer: "StreamLayer",
    VectorTileServer: "VectorTileLayer",
  };
  switch (y) {
    case "MapServer":
      o =
        S != null
          ? "FeatureLayer"
          : (await (async function (e, s) {
              return (await h(e, { customParameters: s })).tileInfo;
            })(a, c))
          ? "TileLayer"
          : "MapImageLayer";
      break;
    case "ImageServer": {
      const e = await h(a, { customParameters: c }),
        { tileInfo: s, cacheType: r } = e;
      o = s
        ? ((w = s == null ? void 0 : s.format) == null
            ? void 0
            : w.toUpperCase()) !== "LERC" ||
          (r && r.toLowerCase() !== "elevation")
          ? "ImageryTileLayer"
          : "ElevationLayer"
        : "ImageryLayer";
      break;
    }
    case "SceneServer": {
      const e = await h(t.url.path, { customParameters: c });
      if (((o = "SceneLayer"), e)) {
        const s = e == null ? void 0 : e.layers;
        if ((e == null ? void 0 : e.layerType) === "Voxel") o = "VoxelLayer";
        else if (s != null && s.length) {
          const r = (i = s[0]) == null ? void 0 : i.layerType;
          r != null && P[r] != null && (o = P[r]);
        }
      }
      break;
    }
    default:
      o = O[y];
  }
  const m = y === "FeatureServer",
    u = {
      parsedUrl: t,
      Constructor: null,
      layerOrTableId: m ? S : void 0,
      sublayerIds: null,
      tableIds: null,
    };
  if (M[o] && S == null) {
    const e = await (async function (s, r, l) {
      let n,
        f = !1;
      if (r === "FeatureServer") {
        const b = await E(s, { customParameters: l });
        (f = !!b.layersJSON), (n = b.layersJSON || b.serviceJSON);
      } else n = await h(s, { customParameters: l });
      const p = n == null ? void 0 : n.layers,
        I = n == null ? void 0 : n.tables;
      return {
        layerIds: (p == null ? void 0 : p.map((b) => b.id).reverse()) || [],
        tableIds: (I == null ? void 0 : I.map((b) => b.id).reverse()) || [],
        layerInfos: f ? p : [],
        tableInfos: f ? I : [],
      };
    })(a, y, c);
    m && ((u.sublayerInfos = e.layerInfos), (u.tableInfos = e.tableInfos)),
      e.layerIds.length + e.tableIds.length !== 1
        ? ((u.sublayerIds = e.layerIds), (u.tableIds = e.tableIds))
        : m &&
          ((u.layerOrTableId = e.layerIds[0] ?? e.tableIds[0]),
          (u.sourceJSON =
            ((d = e.layerInfos) == null ? void 0 : d[0]) ??
            ((v = e.tableInfos) == null ? void 0 : v[0])));
  }
  return (u.Constructor = await R(o)), u;
}
function C(a) {
  return (
    a != null &&
    a.hasOwnProperty("store") &&
    a.hasOwnProperty("id") &&
    typeof a.id == "number"
  );
}
async function R(a) {
  return (0, _[a])();
}
export { K as fromUrl };
