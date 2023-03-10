import { L as T, N as g, O as G, P as f } from "./index.8fd7165c.js";
import { a as o } from "./lazyLayerLoader.fb83604a.js";
import { selectLayerClassPath as M } from "./portalLayers.9b442922.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./layersLoader.184b2163.js";
import "./fetchService.302fd535.js";
import "./jsonContext.8bcdc898.js";
function S(e, r) {
  return (
    !(!e.layerType || e.layerType !== "ArcGISFeatureLayer") &&
    e.featureCollectionType === r
  );
}
async function A(e, r, y) {
  if (!r) return;
  const i = [];
  for (const a of r) {
    const L = C(a, y);
    a.layerType === "GroupLayer" ? i.push(h(L, a, y)) : i.push(L);
  }
  const t = await T(i);
  for (const a of t) a.value && e.add(a.value);
}
const v = {
    ArcGISDimensionLayer: "DimensionLayer",
    ArcGISFeatureLayer: "FeatureLayer",
    ArcGISImageServiceLayer: "ImageryLayer",
    ArcGISMapServiceLayer: "MapImageLayer",
    PointCloudLayer: "PointCloudLayer",
    ArcGISSceneServiceLayer: "SceneLayer",
    IntegratedMeshLayer: "IntegratedMeshLayer",
    OGCFeatureLayer: "OGCFeatureLayer",
    BuildingSceneLayer: "BuildingSceneLayer",
    ArcGISTiledElevationServiceLayer: "ElevationLayer",
    ArcGISTiledImageServiceLayer: "ImageryTileLayer",
    ArcGISTiledMapServiceLayer: "TileLayer",
    GroupLayer: "GroupLayer",
    GeoJSON: "GeoJSONLayer",
    WebTiledLayer: "WebTileLayer",
    CSV: "CSVLayer",
    VectorTileLayer: "VectorTileLayer",
    WFS: "WFSLayer",
    WMS: "WMSLayer",
    DefaultTileLayer: "TileLayer",
    KML: "KMLLayer",
    RasterDataLayer: "UnsupportedLayer",
    Voxel: "VoxelLayer",
    LineOfSightLayer: "LineOfSightLayer",
  },
  w = {
    ArcGISTiledElevationServiceLayer: "ElevationLayer",
    DefaultTileLayer: "ElevationLayer",
    RasterDataElevationLayer: "UnsupportedLayer",
  },
  b = {
    ArcGISTiledMapServiceLayer: "TileLayer",
    ArcGISTiledImageServiceLayer: "ImageryTileLayer",
    OpenStreetMap: "OpenStreetMapLayer",
    WebTiledLayer: "WebTileLayer",
    VectorTileLayer: "VectorTileLayer",
    ArcGISImageServiceLayer: "UnsupportedLayer",
    WMS: "UnsupportedLayer",
    ArcGISMapServiceLayer: "UnsupportedLayer",
    ArcGISSceneServiceLayer: "SceneLayer",
    DefaultTileLayer: "TileLayer",
  },
  W = {
    ArcGISAnnotationLayer: "UnsupportedLayer",
    ArcGISDimensionLayer: "UnsupportedLayer",
    ArcGISFeatureLayer: "FeatureLayer",
    ArcGISImageServiceLayer: "ImageryLayer",
    ArcGISImageServiceVectorLayer: "ImageryLayer",
    ArcGISMapServiceLayer: "MapImageLayer",
    ArcGISStreamLayer: "StreamLayer",
    ArcGISTiledImageServiceLayer: "ImageryTileLayer",
    ArcGISTiledMapServiceLayer: "TileLayer",
    BingMapsAerial: "BingMapsLayer",
    BingMapsRoad: "BingMapsLayer",
    BingMapsHybrid: "BingMapsLayer",
    CSV: "CSVLayer",
    DefaultTileLayer: "TileLayer",
    GeoRSS: "GeoRSSLayer",
    GeoJSON: "GeoJSONLayer",
    GroupLayer: "GroupLayer",
    KML: "KMLLayer",
    MediaLayer: "MediaLayer",
    OGCFeatureLayer: "OGCFeatureLayer",
    OrientedImageryLayer: "OrientedImageryLayer",
    SubtypeGroupLayer: "SubtypeGroupLayer",
    VectorTileLayer: "VectorTileLayer",
    WFS: "WFSLayer",
    WMS: "WMSLayer",
    WebTiledLayer: "WebTileLayer",
  },
  F = { ArcGISFeatureLayer: "FeatureLayer" },
  O = {
    ArcGISImageServiceLayer: "ImageryLayer",
    ArcGISImageServiceVectorLayer: "ImageryLayer",
    ArcGISMapServiceLayer: "MapImageLayer",
    ArcGISTiledImageServiceLayer: "ImageryTileLayer",
    ArcGISTiledMapServiceLayer: "TileLayer",
    OpenStreetMap: "OpenStreetMapLayer",
    VectorTileLayer: "VectorTileLayer",
    WebTiledLayer: "WebTileLayer",
    BingMapsAerial: "BingMapsLayer",
    BingMapsRoad: "BingMapsLayer",
    BingMapsHybrid: "BingMapsLayer",
    WMS: "WMSLayer",
    DefaultTileLayer: "TileLayer",
  };
async function C(e, r) {
  return (async function (y, i, t) {
    const a = new y();
    return (
      a.read(i, t.context),
      a.type === "group" && d(i) && (await D(a, i, t.context)),
      await g(a, t.context),
      a
    );
  })(await V(e, r), e, r);
}
async function V(e, r) {
  var c;
  const y = r.context,
    i = B(y);
  let t = e.layerType || e.type;
  !t && r && r.defaultLayerType && (t = r.defaultLayerType);
  const a = i[t];
  let L = a ? o[a] : o.UnknownLayer;
  if (m(e)) {
    const n = y == null ? void 0 : y.portal;
    if (e.itemId) {
      const l = new G({ id: e.itemId, portal: n });
      await l.load();
      const p = (await M(l)).className || "UnknownLayer";
      L = o[p];
    }
  } else
    t === "ArcGISFeatureLayer"
      ? (function (n) {
          return S(n, "notes");
        })(e) ||
        (function (n) {
          return S(n, "markup");
        })(e)
        ? (L = o.MapNotesLayer)
        : (function (n) {
            return S(n, "route");
          })(e)
        ? (L = o.RouteLayer)
        : d(e) && (L = o.GroupLayer)
      : e.wmtsInfo && e.wmtsInfo.url && e.wmtsInfo.layerIdentifier
      ? (L = o.WMTSLayer)
      : t === "WFS" &&
        ((c = e.wfsInfo) == null ? void 0 : c.version) !== "2.0.0" &&
        (L = o.UnsupportedLayer);
  return L();
}
function d(e) {
  var r, y;
  return (
    e.layerType === "ArcGISFeatureLayer" &&
    !m(e) &&
    (((y = (r = e.featureCollection) == null ? void 0 : r.layers) == null
      ? void 0
      : y.length) ?? 0) > 1
  );
}
function m(e) {
  return e.type === "Feature Collection";
}
function B(e) {
  let r;
  if (e.origin === "web-scene")
    switch (e.layerContainerType) {
      case "basemap":
        r = b;
        break;
      case "ground":
        r = w;
        break;
      default:
        r = v;
    }
  else
    switch (e.layerContainerType) {
      case "basemap":
        r = O;
        break;
      case "tables":
        r = F;
        break;
      default:
        r = W;
    }
  return r;
}
async function h(e, r, y) {
  const i = new f(),
    t = A(i, Array.isArray(r.layers) ? r.layers : [], y),
    a = await e;
  if ((await t, a.type === "group")) return a.layers.addMany(i), a;
}
async function D(e, r, y) {
  var n;
  const i = o.FeatureLayer,
    t = await i(),
    a = r.featureCollection,
    L = a == null ? void 0 : a.showLegend,
    c =
      (n = a == null ? void 0 : a.layers) == null
        ? void 0
        : n.map((l, p) => {
            var I;
            const s = new t();
            s.read(l, y);
            const u = { ...y, ignoreDefaults: !0 };
            return (
              s.read(
                {
                  id: `${e.id}-sublayer-${p}`,
                  visibility:
                    ((I = r.visibleLayers) == null ? void 0 : I.includes(p)) ??
                    !0,
                },
                u
              ),
              L != null && s.read({ showLegend: L }, u),
              s
            );
          });
  e.layers.addMany(c ?? []);
}
export { A as populateOperationalLayers };
