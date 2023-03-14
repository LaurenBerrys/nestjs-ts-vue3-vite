import { O as d, s as I, d9 as y, da as u } from "./index.8fd7165c.js";
import { a as S } from "./lazyLayerLoader.fb83604a.js";
import {
  getNumLayersAndTables as p,
  preprocessFSItemData as g,
  getSubtypeGroupLayerIds as T,
  getFirstLayerOrTableId as v,
} from "./layersLoader.184b2163.js";
import { t as i } from "./fetchService.302fd535.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./jsonContext.8bcdc898.js";
async function $(r) {
  !r.portalItem ||
    r.portalItem instanceof d ||
    (r = { ...r, portalItem: new d(r.portalItem) });
  const e = await (async function (a) {
    return (
      await a.load(),
      (async function (t) {
        const s = S[t.className];
        return { constructor: await s(), properties: t.properties };
      })(await F(a))
    );
  })(r.portalItem);
  return new e.constructor({ portalItem: r.portalItem, ...e.properties });
}
async function F(r) {
  switch (r.type) {
    case "Map Service":
      return (async function (e) {
        return (await (async function (a) {
          return (await i(a.url)).tileInfo;
        })(e))
          ? { className: "TileLayer" }
          : { className: "MapImageLayer" };
      })(r);
    case "Feature Service":
      return (async function (e) {
        if (y(e, "Oriented Imagery Layer"))
          return (async function (t) {
            await t.load();
            const s = await t.fetchData();
            return s.coverage
              ? { className: "GroupLayer" }
              : { className: "OrientedImageryLayer", properties: s };
          })(e);
        const a = await N(e);
        if (typeof a == "object") {
          const t = {};
          return (
            a.id != null && (t.layerId = a.id),
            { className: a.className || "FeatureLayer", properties: t }
          );
        }
        return { className: "GroupLayer" };
      })(r);
    case "Feature Collection":
      return (async function (e) {
        await e.load();
        const a = y(e, "Map Notes"),
          t = y(e, "Markup");
        if (a || t) return { className: "MapNotesLayer" };
        if (y(e, "Route Layer")) return { className: "RouteLayer" };
        const s = await e.fetchData();
        return p(s) === 1
          ? { className: "FeatureLayer" }
          : { className: "GroupLayer" };
      })(r);
    case "Scene Service":
      return (async function (e) {
        var t, s;
        const a = await N(e);
        if (typeof a == "object") {
          const l = {};
          let n;
          if (
            (a.id != null
              ? ((l.layerId = a.id), (n = `${e.url}/layers/${a.id}`))
              : (n = e.url),
            (t = e.typeKeywords) == null ? void 0 : t.length)
          ) {
            for (const o of Object.keys(u))
              if (e.typeKeywords.includes(o)) return { className: u[o] };
          }
          const c = await i(n);
          return {
            className: u[c == null ? void 0 : c.layerType] || "SceneLayer",
            properties: l,
          };
        }
        return a === !1
          ? ((s = await i(e.url)) == null ? void 0 : s.layerType) === "Voxel"
            ? { className: "VoxelLayer" }
            : { className: "GroupLayer" }
          : { className: "GroupLayer" };
      })(r);
    case "Image Service":
      return (async function (e) {
        var c, o, f, L;
        await e.load();
        const a =
          ((c = e.typeKeywords) == null
            ? void 0
            : c.map((w) => w.toLowerCase())) ?? [];
        if (a.includes("elevation 3d layer"))
          return { className: "ElevationLayer" };
        if (a.includes("tiled imagery"))
          return { className: "ImageryTileLayer" };
        const t = (o = await e.fetchData()) == null ? void 0 : o.layerType;
        if (t === "ArcGISTiledImageServiceLayer")
          return { className: "ImageryTileLayer" };
        if (t === "ArcGISImageServiceLayer")
          return { className: "ImageryLayer" };
        const s = await i(e.url),
          l = (f = s.cacheType) == null ? void 0 : f.toLowerCase(),
          n =
            (L = s.capabilities) == null
              ? void 0
              : L.toLowerCase().includes("tilesonly");
        return l === "map" || n
          ? { className: "ImageryTileLayer" }
          : { className: "ImageryLayer" };
      })(r);
    case "Stream Service":
    case "Feed":
      return { className: "StreamLayer" };
    case "Vector Tile Service":
      return { className: "VectorTileLayer" };
    case "GeoJson":
      return { className: "GeoJSONLayer" };
    case "CSV":
      return { className: "CSVLayer" };
    case "KML":
      return { className: "KMLLayer" };
    case "WFS":
      return { className: "WFSLayer" };
    case "WMTS":
      return { className: "WMTSLayer" };
    case "WMS":
      return { className: "WMSLayer" };
    default:
      throw new I("portal:unknown-item-type", "Unknown item type '${type}'", {
        type: r.type,
      });
  }
}
async function N(r) {
  const e = r.url;
  if (!e || e.match(/\/\d+$/)) return {};
  await r.load();
  const a = await r.fetchData();
  if (r.type === "Feature Service") {
    const t = m(await g(a, e));
    if (typeof t == "object") {
      const s = T(a);
      t.className =
        t.id != null && s.includes(t.id) ? "SubtypeGroupLayer" : "FeatureLayer";
    }
    return t;
  }
  return p(a) > 0 ? m(a) : m(await i(e));
}
function m(r) {
  return p(r) === 1 && { id: v(r) };
}
export { $ as fromItem, F as selectLayerClassPath };
