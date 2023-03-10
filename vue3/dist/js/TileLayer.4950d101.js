import {
  im as v,
  io as g,
  et as _,
  eu as S,
  es as T,
  ev as b,
  b3 as w,
  ip as O,
  iA as R,
  iT as U,
  r as d,
  a2 as W,
  aH as m,
  cy as L,
  U as u,
  aL as P,
  iB as A,
  s as h,
  en as j,
  g6 as B,
  dc as D,
  hK as C,
  ae as i,
  af as o,
  dl as I,
  dm as M,
  dT as k,
  ey as N,
  ag as J,
  db as q,
} from "./index.8fd7165c.js";
import { s as G } from "./ArcGISCachedService.aac5cdc8.js";
import { E as $, y as E, Z as V } from "./SublayersOwner.8028a8dc.js";
import { e as K } from "./imageBitmapUtils.d17e4357.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./TilemapCache.cc0e5767.js";
import "./Version.a4557b9e.js";
import "./QueryTask.6847195b.js";
import "./executeForIds.3a002380.js";
import "./sublayerUtils.aa8d3bb7.js";
const y = [
  "Canvas/World_Dark_Gray_Base",
  "Canvas/World_Dark_Gray_Reference",
  "Canvas/World_Light_Gray_Base",
  "Canvas/World_Light_Gray_Reference",
  "Elevation/World_Hillshade",
  "Elevation/World_Hillshade_Dark",
  "Ocean/World_Ocean_Base",
  "Ocean/World_Ocean_Reference",
  "Ocean_Basemap",
  "Reference/World_Boundaries_and_Places",
  "Reference/World_Boundaries_and_Places_Alternate",
  "Reference/World_Transportation",
  "World_Imagery",
  "World_Street_Map",
  "World_Topo_Map",
];
let s = class extends v($(g(_(S(G(E(T(b(w(O(R(U(q))))))))))))) {
  constructor(...e) {
    super(...e),
      (this.listMode = "show"),
      (this.isReference = null),
      (this.operationalLayerType = "ArcGISTiledMapServiceLayer"),
      (this.resampling = !0),
      (this.sourceJSON = null),
      (this.spatialReference = null),
      (this.path = null),
      (this.sublayers = null),
      (this.type = "tile"),
      (this.url = null);
  }
  normalizeCtorArgs(e, r) {
    return typeof e == "string" ? { url: e, ...r } : e;
  }
  load(e) {
    const r = d(e) ? e.signal : null;
    return (
      this.addResolvingPromise(
        this.loadFromPortal({ supportedTypes: ["Map Service"] }, e)
          .catch(W)
          .then(() => this._fetchService(r))
      ),
      Promise.resolve(this)
    );
  }
  get attributionDataUrl() {
    var r;
    const e = (r = this.parsedUrl) == null ? void 0 : r.path.toLowerCase();
    return e ? this._getDefaultAttribution(this._getMapName(e)) : null;
  }
  readSpatialReference(e, r) {
    return (
      (e = e || (r.tileInfo && r.tileInfo.spatialReference)) && m.fromJSON(e)
    );
  }
  writeSublayers(e, r, t, a) {
    if (!this.loaded || !e) return;
    const p = e
        .slice()
        .reverse()
        .flatten(({ sublayers: n }) => n && n.toArray().reverse())
        .toArray(),
      l = [],
      c = { writeSublayerStructure: !1, ...a };
    p.forEach((n) => {
      const f = n.write({}, c);
      l.push(f);
    }),
      l.some((n) => Object.keys(n).length > 1) && (r.layers = l);
  }
  get tileServers() {
    var e;
    return this._getDefaultTileServers(
      (e = this.parsedUrl) == null ? void 0 : e.path
    );
  }
  castTileServers(e) {
    return Array.isArray(e) ? e.map((r) => L(r).path) : null;
  }
  fetchTile(e, r, t, a = {}) {
    const { signal: p } = a,
      l = this.getTileUrl(e, r, t),
      c = {
        responseType: "image",
        signal: p,
        query: { ...this.refreshParameters },
      };
    return u(l, c).then((n) => n.data);
  }
  async fetchImageBitmapTile(e, r, t, a = {}) {
    const { signal: p } = a,
      l = this.getTileUrl(e, r, t),
      c = {
        responseType: "blob",
        signal: p,
        query: { ...this.refreshParameters },
      },
      { data: n } = await u(l, c);
    return K(n, l);
  }
  getTileUrl(e, r, t) {
    var c, n;
    const a = !this.tilemapCache && this.supportsBlankTile,
      p = P({
        ...((c = this.parsedUrl) == null ? void 0 : c.query),
        blankTile: !a && null,
        ...this.customParameters,
        token: this.apiKey,
      }),
      l = this.tileServers;
    return `${
      l && l.length
        ? l[r % l.length]
        : (n = this.parsedUrl) == null
        ? void 0
        : n.path
    }/tile/${e}/${r}/${t}${p ? "?" + p : ""}`;
  }
  loadAll() {
    return A(this, (e) => {
      e(this.allSublayers);
    });
  }
  _fetchService(e) {
    return new Promise((r, t) => {
      if (this.sourceJSON) {
        if (
          this.sourceJSON.bandCount != null &&
          this.sourceJSON.pixelSizeX != null
        )
          throw new h(
            "tile-layer:unsupported-url",
            "use ImageryTileLayer to open a tiled image service"
          );
        return void r({ data: this.sourceJSON });
      }
      if (!this.parsedUrl)
        throw new h("tile-layer:undefined-url", "layer's url is not defined");
      const a = j(this.parsedUrl.path);
      if (d(a) && a.serverType === "ImageServer")
        throw new h(
          "tile-layer:unsupported-url",
          "use ImageryTileLayer to open a tiled image service"
        );
      u(this.parsedUrl.path, {
        query: {
          f: "json",
          ...this.parsedUrl.query,
          ...this.customParameters,
          token: this.apiKey,
        },
        responseType: "json",
        signal: e,
      }).then(r, t);
    }).then((r) => {
      let t = this.url;
      if (
        (r.ssl && (t = this.url = t.replace(/^http:/i, "https:")),
        (this.sourceJSON = r.data),
        this.read(r.data, { origin: "service", url: this.parsedUrl }),
        this.version === 10.1 && !B(t))
      )
        return this._fetchServerVersion(t, e)
          .then((a) => {
            this.read({ currentVersion: a });
          })
          .catch(() => {});
    });
  }
  _fetchServerVersion(e, r) {
    if (!D(e)) return Promise.reject();
    const t = e.replace(/(.*\/rest)\/.*/i, "$1") + "/info";
    return u(t, {
      query: { f: "json", ...this.customParameters, token: this.apiKey },
      responseType: "json",
      signal: r,
    }).then((a) => {
      if (a.data && a.data.currentVersion) return a.data.currentVersion;
      throw new h("tile-layer:version-not-available");
    });
  }
  _getMapName(e) {
    const r = e.match(
      /^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i
    );
    return r ? r[2] : void 0;
  }
  _getDefaultAttribution(e) {
    if (e == null) return null;
    let r;
    e = e.toLowerCase();
    for (let t = 0, a = y.length; t < a; t++)
      if (((r = y[t]), r.toLowerCase().includes(e)))
        return C("//static.arcgis.com/attribution/" + r);
    return null;
  }
  _getDefaultTileServers(e) {
    if (e == null) return [];
    const r = e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i) !== -1,
      t = e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i) !== -1;
    return r || t
      ? [
          e,
          e.replace(
            r ? /server\.arcgisonline/i : /services\.arcgisonline/i,
            r ? "services.arcgisonline" : "server.arcgisonline"
          ),
        ]
      : [];
  }
  get hasOverriddenFetchTile() {
    return !this.fetchTile.__isDefault__;
  }
};
i([o({ readOnly: !0 })], s.prototype, "attributionDataUrl", null),
  i(
    [o({ type: ["show", "hide", "hide-children"] })],
    s.prototype,
    "listMode",
    void 0
  ),
  i([o({ json: { read: !0, write: !0 } })], s.prototype, "blendMode", void 0),
  i(
    [
      o({
        type: Boolean,
        json: {
          read: !1,
          write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) },
        },
      }),
    ],
    s.prototype,
    "isReference",
    void 0
  ),
  i(
    [o({ readOnly: !0, type: ["ArcGISTiledMapServiceLayer"] })],
    s.prototype,
    "operationalLayerType",
    void 0
  ),
  i([o({ type: Boolean })], s.prototype, "resampling", void 0),
  i([o()], s.prototype, "sourceJSON", void 0),
  i([o({ type: m })], s.prototype, "spatialReference", void 0),
  i(
    [I("spatialReference", ["spatialReference", "tileInfo"])],
    s.prototype,
    "readSpatialReference",
    null
  ),
  i(
    [
      o({
        type: String,
        json: { origins: { "web-scene": { read: !0, write: !0 } }, read: !1 },
      }),
    ],
    s.prototype,
    "path",
    void 0
  ),
  i([o({ readOnly: !0 })], s.prototype, "sublayers", void 0),
  i(
    [M("sublayers", { layers: { type: [V] } })],
    s.prototype,
    "writeSublayers",
    null
  ),
  i(
    [o({ json: { read: !1, write: !1 } })],
    s.prototype,
    "popupEnabled",
    void 0
  ),
  i([o()], s.prototype, "tileServers", null),
  i([k("tileServers")], s.prototype, "castTileServers", null),
  i([o({ readOnly: !0, json: { read: !1 } })], s.prototype, "type", void 0),
  i([o(N)], s.prototype, "url", void 0),
  (s = i([J("esri.layers.TileLayer")], s)),
  (s.prototype.fetchTile.__isDefault__ = !0);
const ne = s;
export { ne as default };
