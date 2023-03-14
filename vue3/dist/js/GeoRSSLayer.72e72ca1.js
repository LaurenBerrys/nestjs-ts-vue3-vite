import {
  im as p,
  ip as y,
  et as u,
  eu as d,
  io as h,
  ev as c,
  ep as m,
  r as S,
  a2 as g,
  U as v,
  j6 as f,
  aZ as b,
  ae as o,
  af as s,
  dl as C,
  ar as j,
  iE as G,
  j0 as x,
  ey as P,
  ag as _,
  j7 as n,
  j8 as w,
  j9 as R,
  ds as k,
  ja as E,
  db as F,
} from "./index.8fd7165c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
const M = ["atom", "xml"],
  L = {
    base: n,
    key: "type",
    typeMap: { "simple-line": w },
    errorContext: "symbol",
  },
  T = {
    base: n,
    key: "type",
    typeMap: { "picture-marker": R, "simple-marker": k },
    errorContext: "symbol",
  },
  D = {
    base: n,
    key: "type",
    typeMap: { "simple-fill": E },
    errorContext: "symbol",
  };
let t = class extends p(y(u(d(h(c(F)))))) {
  constructor(...e) {
    super(...e),
      (this.description = null),
      (this.fullExtent = null),
      (this.legendEnabled = !0),
      (this.lineSymbol = null),
      (this.pointSymbol = null),
      (this.polygonSymbol = null),
      (this.operationalLayerType = "GeoRSS"),
      (this.url = null),
      (this.type = "geo-rss");
  }
  normalizeCtorArgs(e, r) {
    return typeof e == "string" ? { url: e, ...r } : e;
  }
  readFeatureCollections(e, r) {
    return (
      r.featureCollection.layers.forEach((i) => {
        var a;
        const l = i.layerDefinition.drawingInfo.renderer.symbol;
        l &&
          l.type === "esriSFS" &&
          (a = l.outline) != null &&
          a.style.includes("esriSFS") &&
          (l.outline.style = "esriSLSSolid");
      }),
      r.featureCollection.layers
    );
  }
  get hasPoints() {
    return this._hasGeometry("esriGeometryPoint");
  }
  get hasPolylines() {
    return this._hasGeometry("esriGeometryPolyline");
  }
  get hasPolygons() {
    return this._hasGeometry("esriGeometryPolygon");
  }
  get title() {
    const e = this._get("title");
    return e && this.originOf("title") !== "defaults"
      ? e
      : this.url
      ? m(this.url, M) || "GeoRSS"
      : e || "";
  }
  set title(e) {
    this._set("title", e);
  }
  load(e) {
    const r = S(e) ? e.signal : null;
    return (
      this.addResolvingPromise(
        this.loadFromPortal(
          {
            supportedTypes: [
              "Map Service",
              "Feature Service",
              "Feature Collection",
              "Scene Service",
            ],
          },
          e
        )
          .catch(g)
          .then(() => this._fetchService(r))
          .then((i) => {
            this.read(i, { origin: "service" });
          })
      ),
      Promise.resolve(this)
    );
  }
  async hasDataChanged() {
    const e = await this._fetchService();
    return this.read(e, { origin: "service", ignoreDefaults: !0 }), !0;
  }
  async _fetchService(e) {
    const r = this.spatialReference,
      { data: i } = await v(b.geoRSSServiceUrl, {
        query: {
          url: this.url,
          refresh: !!this.loaded || void 0,
          outSR: f(r) ? void 0 : r.wkid ?? JSON.stringify(r),
        },
        signal: e,
      });
    return i;
  }
  _hasGeometry(e) {
    var r;
    return (
      ((r = this.featureCollections) == null
        ? void 0
        : r.some((i) => {
            var l, a;
            return (
              ((l = i.featureSet) == null ? void 0 : l.geometryType) === e &&
              ((a = i.featureSet.features) == null ? void 0 : a.length) > 0
            );
          })) ?? !1
    );
  }
};
o([s()], t.prototype, "description", void 0),
  o([s()], t.prototype, "featureCollections", void 0),
  o(
    [C("service", "featureCollections", ["featureCollection.layers"])],
    t.prototype,
    "readFeatureCollections",
    null
  ),
  o(
    [s({ type: j, json: { name: "lookAtExtent" } })],
    t.prototype,
    "fullExtent",
    void 0
  ),
  o([s(G)], t.prototype, "id", void 0),
  o([s(x)], t.prototype, "legendEnabled", void 0),
  o([s({ types: L, json: { write: !0 } })], t.prototype, "lineSymbol", void 0),
  o([s({ type: ["show", "hide"] })], t.prototype, "listMode", void 0),
  o([s({ types: T, json: { write: !0 } })], t.prototype, "pointSymbol", void 0),
  o(
    [s({ types: D, json: { write: !0 } })],
    t.prototype,
    "polygonSymbol",
    void 0
  ),
  o([s({ type: ["GeoRSS"] })], t.prototype, "operationalLayerType", void 0),
  o([s(P)], t.prototype, "url", void 0),
  o(
    [
      s({
        json: {
          origins: {
            service: { read: { source: "name", reader: (e) => e || void 0 } },
          },
        },
      }),
    ],
    t.prototype,
    "title",
    null
  ),
  o(
    [s({ readOnly: !0, json: { read: !1 }, value: "geo-rss" })],
    t.prototype,
    "type",
    void 0
  ),
  (t = o([_("esri.layers.GeoRSSLayer")], t));
const Z = t;
export { Z as default };
