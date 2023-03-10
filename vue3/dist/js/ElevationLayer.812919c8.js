import { q as _ } from "./Table.e9c997d5.js";
import {
  t as f,
  q as p,
  r as u,
  dB as g,
  Q as w,
  eq as V,
  er as D,
  f as m,
  es as T,
  et as S,
  eu as b,
  ev as L,
  ew as x,
  s as k,
  a2 as I,
  U as y,
  aL as E,
  ae as o,
  af as l,
  dl as N,
  ex as O,
  ey as j,
  ag as P,
  db as A,
} from "./index.8fd7165c.js";
import { s as M } from "./ArcGISCachedService.aac5cdc8.js";
import "./vue.a7ce1fbe.js";
import "./NvapForm.feb8550d.js";
import "./vue-i18n.67a42238.js";
import "./vue-router.805f6e2a.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./TilemapCache.cc0e5767.js";
class $ {
  constructor(e, t, r, s) {
    (this._hasNoDataValues = null),
      (this._minValue = null),
      (this._maxValue = null),
      "pixelData" in e
        ? ((this.values = e.pixelData),
          (this.width = e.width),
          (this.height = e.height),
          (this.noDataValue = e.noDataValue))
        : ((this.values = e),
          (this.width = t),
          (this.height = r),
          (this.noDataValue = s));
  }
  get hasNoDataValues() {
    if (f(this._hasNoDataValues)) {
      const e = this.noDataValue;
      this._hasNoDataValues = this.values.includes(e);
    }
    return this._hasNoDataValues;
  }
  get minValue() {
    return this._ensureBounds(), p(this._minValue);
  }
  get maxValue() {
    return this._ensureBounds(), p(this._maxValue);
  }
  _ensureBounds() {
    if (u(this._minValue)) return;
    const { noDataValue: e, values: t } = this;
    let r = 1 / 0,
      s = -1 / 0,
      h = !0;
    for (const n of t)
      n === e
        ? (this._hasNoDataValues = !0)
        : ((r = n < r ? n : r), (s = n > s ? n : s), (h = !1));
    h
      ? ((this._minValue = 0), (this._maxValue = 0))
      : ((this._minValue = r), (this._maxValue = s > -3e38 ? s : 0));
  }
}
class q {
  constructor(e, t, r, s, h = {}) {
    (this._mainMethod = t),
      (this._transferLists = r),
      (this._listeners = []),
      (this._promise = g(e, { ...h, schedule: s }).then((n) => {
        if (this._thread === void 0) {
          (this._thread = n),
            (this._promise = null),
            h.hasInitialize && this.broadcast({}, "initialize");
          for (const d of this._listeners) this._connectListener(d);
        } else n.close();
      })),
      this._promise.catch((n) =>
        w
          .getLogger("esri.core.workers.WorkerHandle")
          .error(`Failed to initialize ${e} worker: ${n}`)
      );
  }
  on(e, t) {
    const r = { removed: !1, eventName: e, callback: t, threadHandle: null };
    return (
      this._listeners.push(r),
      this._connectListener(r),
      V(() => {
        (r.removed = !0),
          D(this._listeners, r),
          this._thread && u(r.threadHandle) && r.threadHandle.remove();
      })
    );
  }
  destroy() {
    this._thread && (this._thread.close(), (this._thread = null)),
      (this._promise = null);
  }
  invoke(e, t) {
    return this.invokeMethod(this._mainMethod, e, t);
  }
  invokeMethod(e, t, r) {
    if (this._thread) {
      const s = this._transferLists[e],
        h = s ? s(t) : [];
      return this._thread.invoke(e, t, { transferList: h, signal: r });
    }
    return this._promise
      ? this._promise.then(() => (m(r), this.invokeMethod(e, t, r)))
      : Promise.reject(null);
  }
  broadcast(e, t) {
    return this._thread
      ? Promise.all(this._thread.broadcast(t, e)).then(() => {})
      : this._promise
      ? this._promise.then(() => this.broadcast(e, t))
      : Promise.reject();
  }
  get promise() {
    return this._promise;
  }
  _connectListener(e) {
    this._thread &&
      this._thread.on(e.eventName, e.callback).then((t) => {
        e.removed || (e.threadHandle = t);
      });
  }
}
class v extends q {
  constructor(e = null) {
    super("LercWorker", "_decode", { _decode: (t) => [t.buffer] }, e, {
      strategy: "dedicated",
    }),
      (this.schedule = e),
      (this.ref = 0);
  }
  decode(e, t, r) {
    return e && e.byteLength !== 0
      ? this.invoke({ buffer: e, options: t }, r)
      : Promise.resolve(null);
  }
  release() {
    --this.ref <= 0 &&
      (c.forEach((e, t) => {
        e === this && c.delete(t);
      }),
      this.destroy());
  }
}
const c = new Map();
let a = class extends M(T(S(b(L(A))))) {
  constructor(...i) {
    super(...i),
      (this.copyright = null),
      (this.heightModelInfo = null),
      (this.path = null),
      (this.minScale = void 0),
      (this.maxScale = void 0),
      (this.opacity = 1),
      (this.operationalLayerType = "ArcGISTiledElevationServiceLayer"),
      (this.sourceJSON = null),
      (this.type = "elevation"),
      (this.url = null),
      (this.version = null),
      (this._lercDecoder = (function (e = null) {
        let t = c.get(p(e));
        return (
          t ||
            (u(e)
              ? ((t = new v((r) => e.immediate.schedule(r))), c.set(e, t))
              : ((t = new v()), c.set(null, t))),
          ++t.ref,
          t
        );
      })());
  }
  normalizeCtorArgs(i, e) {
    return typeof i == "string" ? { url: i, ...e } : i;
  }
  destroy() {
    this._lercDecoder = x(this._lercDecoder);
  }
  readVersion(i, e) {
    let t = e.currentVersion;
    return t || (t = 9.3), t;
  }
  load(i) {
    const e = u(i) ? i.signal : null;
    return (
      this.addResolvingPromise(
        this.loadFromPortal(
          {
            supportedTypes: ["Image Service"],
            supportsData: !1,
            validateItem: (t) => {
              for (let r = 0; r < t.typeKeywords.length; r++)
                if (t.typeKeywords[r].toLowerCase() === "elevation 3d layer")
                  return !0;
              throw new k(
                "portal:invalid-layer-item-type",
                "Invalid layer item type '${type}', expected '${expectedType}' ",
                {
                  type: "Image Service",
                  expectedType: "Image Service Elevation 3D Layer",
                }
              );
            },
          },
          i
        )
          .catch(I)
          .then(() => this._fetchImageService(e))
      ),
      Promise.resolve(this)
    );
  }
  fetchTile(i, e, t, r) {
    const s = u((r = r || { signal: null }).signal)
        ? r.signal
        : (r.signal = new AbortController().signal),
      h = { responseType: "array-buffer", signal: s },
      n = { noDataValue: r.noDataValue, returnFileInfo: !0 };
    return this.load()
      .then(() => this._fetchTileAvailability(i, e, t, r))
      .then(() => y(this.getTileUrl(i, e, t), h))
      .then((d) => this._lercDecoder.decode(d.data, n, s))
      .then((d) => new $(d));
  }
  getTileUrl(i, e, t) {
    const r = !this.tilemapCache && this.supportsBlankTile,
      s = E({ ...this.parsedUrl.query, blankTile: !r && null });
    return `${this.parsedUrl.path}/tile/${i}/${e}/${t}${s ? "?" + s : ""}`;
  }
  async queryElevation(i, e) {
    const { ElevationQuery: t } = await _(
      () => import("./ElevationQuery.0f9c4f1c.js"),
      [
        "js/ElevationQuery.0f9c4f1c.js",
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
      ]
    );
    return m(e), new t().query(this, i, e);
  }
  async createElevationSampler(i, e) {
    const { ElevationQuery: t } = await _(
      () => import("./ElevationQuery.0f9c4f1c.js"),
      [
        "js/ElevationQuery.0f9c4f1c.js",
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
      ]
    );
    return m(e), new t().createSampler(this, i, e);
  }
  _fetchTileAvailability(i, e, t, r) {
    return this.tilemapCache
      ? this.tilemapCache.fetchAvailability(i, e, t, r)
      : Promise.resolve("unknown");
  }
  async _fetchImageService(i) {
    var r;
    if (this.sourceJSON) return this.sourceJSON;
    const e = {
        query: { f: "json", ...this.parsedUrl.query },
        responseType: "json",
        signal: i,
      },
      t = await y(this.parsedUrl.path, e);
    t.ssl &&
      (this.url =
        (r = this.url) == null ? void 0 : r.replace(/^http:/i, "https:")),
      (this.sourceJSON = t.data),
      this.read(t.data, { origin: "service", url: this.parsedUrl });
  }
  get hasOverriddenFetchTile() {
    return !this.fetchTile.__isDefault__;
  }
};
o(
  [l({ json: { read: { source: "copyrightText" } } })],
  a.prototype,
  "copyright",
  void 0
),
  o([l({ readOnly: !0, type: O })], a.prototype, "heightModelInfo", void 0),
  o(
    [
      l({
        type: String,
        json: { origins: { "web-scene": { read: !0, write: !0 } }, read: !1 },
      }),
    ],
    a.prototype,
    "path",
    void 0
  ),
  o([l({ type: ["show", "hide"] })], a.prototype, "listMode", void 0),
  o(
    [
      l({
        json: {
          read: !1,
          write: !1,
          origins: {
            service: { read: !1, write: !1 },
            "portal-item": { read: !1, write: !1 },
            "web-document": { read: !1, write: !1 },
          },
        },
        readOnly: !0,
      }),
    ],
    a.prototype,
    "minScale",
    void 0
  ),
  o(
    [
      l({
        json: {
          read: !1,
          write: !1,
          origins: {
            service: { read: !1, write: !1 },
            "portal-item": { read: !1, write: !1 },
            "web-document": { read: !1, write: !1 },
          },
        },
        readOnly: !0,
      }),
    ],
    a.prototype,
    "maxScale",
    void 0
  ),
  o(
    [
      l({
        json: {
          read: !1,
          write: !1,
          origins: { "web-document": { read: !1, write: !1 } },
        },
      }),
    ],
    a.prototype,
    "opacity",
    void 0
  ),
  o(
    [l({ type: ["ArcGISTiledElevationServiceLayer"] })],
    a.prototype,
    "operationalLayerType",
    void 0
  ),
  o([l()], a.prototype, "sourceJSON", void 0),
  o(
    [l({ json: { read: !1 }, value: "elevation", readOnly: !0 })],
    a.prototype,
    "type",
    void 0
  ),
  o([l(j)], a.prototype, "url", void 0),
  o([l()], a.prototype, "version", void 0),
  o([N("version", ["currentVersion"])], a.prototype, "readVersion", null),
  (a = o([P("esri.layers.ElevationLayer")], a)),
  (a.prototype.fetchTile.__isDefault__ = !0);
const K = a;
export { K as default };
