import {
  b0 as O,
  iN as F,
  dg as f,
  an as y,
  G as g,
  dS as m,
  r as p,
  ar as d,
  hT as M,
  P as b,
  ae as s,
  af as l,
  jL as j,
  dl as h,
  ag as S,
  i3 as I,
  im as N,
  ip as P,
  io as T,
  et as C,
  eu as K,
  ev as R,
  ee as A,
  aH as w,
  ep as J,
  a2 as z,
  dm as H,
  ey as W,
  db as G,
} from "./index.8fd7165c.js";
import { j as V, S as x, g as E, d as L } from "./kmlUtils.3587abe1.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
var u;
let a = (u = class extends O.EventedMixin(F(I)) {
  constructor(...e) {
    super(...e),
      (this.description = null),
      (this.id = null),
      (this.networkLink = null),
      (this.sublayers = null),
      (this.title = null),
      (this.sourceJSON = null),
      (this.fullExtent = null),
      this.addHandles([
        f(
          () => this.sublayers,
          "after-add",
          ({ item: t }) => {
            (t.parent = this), (t.layer = this.layer);
          },
          y
        ),
        f(
          () => this.sublayers,
          "after-remove",
          ({ item: t }) => {
            t.layer = t.parent = null;
          },
          y
        ),
        g(
          () => this.sublayers,
          (t, r) => {
            if (r) for (const i of r) i.layer = i.parent = null;
            if (t) for (const i of t) (i.parent = this), (i.layer = this.layer);
          },
          y
        ),
      ]);
  }
  initialize() {
    m(() => this.networkLink)
      .then(() => m(() => this.visible === !0))
      .then(() => this.load());
  }
  load(e) {
    var i;
    if (!this.networkLink || this.networkLink.viewFormat) return;
    const t = p(e) ? e.signal : null,
      r = this._fetchService(
        ((i = this._get("networkLink")) == null ? void 0 : i.href) ?? "",
        t
      ).then((n) => {
        var c;
        const _ = V(n.sublayers);
        (this.fullExtent = d.fromJSON(_)), (this.sourceJSON = n);
        const v = M(b.ofType(u), x(u, n));
        this.sublayers ? this.sublayers.addMany(v) : (this.sublayers = v),
          (c = this.layer) == null || c.emit("sublayer-update"),
          this.layer && this.layer.notifyChange("visibleSublayers");
      });
    return this.addResolvingPromise(r), Promise.resolve(this);
  }
  get visible() {
    return this._get("visible");
  }
  set visible(e) {
    this._get("visible") !== e &&
      (this._set("visible", e),
      this.layer && this.layer.notifyChange("visibleSublayers"));
  }
  readVisible(e, t) {
    return !!t.visibility;
  }
  set layer(e) {
    this._set("layer", e),
      this.sublayers && this.sublayers.forEach((t) => (t.layer = e));
  }
  _fetchService(e, t) {
    return E(
      e,
      this.layer.outSpatialReference,
      this.layer.refreshInterval,
      t
    ).then((r) => L(r.data));
  }
});
s([l()], a.prototype, "description", void 0),
  s([l()], a.prototype, "id", void 0),
  s([l({ readOnly: !0, value: null })], a.prototype, "networkLink", void 0),
  s([l({ json: { write: { allowNull: !0 } } })], a.prototype, "parent", void 0),
  s(
    [l({ type: b.ofType(u), json: { write: { allowNull: !0 } } })],
    a.prototype,
    "sublayers",
    void 0
  ),
  s(
    [
      l({
        value: null,
        json: { read: { source: "name", reader: (e) => j(e) } },
      }),
    ],
    a.prototype,
    "title",
    void 0
  ),
  s([l({ value: !0 })], a.prototype, "visible", null),
  s([h("visible", ["visibility"])], a.prototype, "readVisible", null),
  s([l()], a.prototype, "sourceJSON", void 0),
  s([l({ value: null })], a.prototype, "layer", null),
  s([l({ type: d })], a.prototype, "fullExtent", void 0),
  (a = u = s([S("esri.layers.support.KMLSublayer")], a));
const k = a,
  D = ["kml", "xml"];
let o = class extends N(P(T(C(K(R(G)))))) {
  constructor(...e) {
    super(...e),
      (this._visibleFolders = []),
      (this.allSublayers = new A({
        getCollections: () => [this.sublayers],
        getChildrenFunction: (t) => t.sublayers,
      })),
      (this.outSpatialReference = w.WGS84),
      (this.path = null),
      (this.legendEnabled = !1),
      (this.operationalLayerType = "KML"),
      (this.sublayers = null),
      (this.type = "kml"),
      (this.url = null);
  }
  initialize() {
    this.addHandles([
      g(
        () => this.sublayers,
        (e, t) => {
          t &&
            t.forEach((r) => {
              (r.parent = null), (r.layer = null);
            }),
            e &&
              e.forEach((r) => {
                (r.parent = this), (r.layer = this);
              });
        },
        y
      ),
      this.on("sublayer-update", () => this.notifyChange("fullExtent")),
    ]);
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  readSublayersFromItemOrWebMap(e, t) {
    this._visibleFolders = t.visibleFolders;
  }
  readSublayers(e, t, r) {
    return x(k, t, r, this._visibleFolders);
  }
  writeSublayers(e, t) {
    const r = [],
      i = e.toArray();
    for (; i.length; ) {
      const n = i[0];
      n.networkLink ||
        (n.visible && r.push(n.id),
        n.sublayers && i.push(...n.sublayers.toArray())),
        i.shift();
    }
    t.visibleFolders = r;
  }
  get title() {
    const e = this._get("title");
    return e && this.originOf("title") !== "defaults"
      ? e
      : this.url
      ? J(this.url, D) || "KML"
      : e || "";
  }
  set title(e) {
    this._set("title", e);
  }
  get visibleSublayers() {
    const e = this.sublayers,
      t = [],
      r = (i) => {
        i.visible && (t.push(i), i.sublayers && i.sublayers.forEach(r));
      };
    return e && e.forEach(r), t;
  }
  get fullExtent() {
    return this._recomputeFullExtent();
  }
  load(e) {
    const t = p(e) ? e.signal : null;
    return (
      this.addResolvingPromise(
        this.loadFromPortal({ supportedTypes: ["KML"], supportsData: !1 }, e)
          .catch(z)
          .then(() => this._fetchService(t))
      ),
      Promise.resolve(this)
    );
  }
  destroy() {
    super.destroy(), this.allSublayers.destroy();
  }
  async _fetchService(e) {
    const t = await Promise.resolve().then(() =>
        this.resourceInfo
          ? { ssl: !1, data: this.resourceInfo }
          : E(this.url ?? "", this.outSpatialReference, this.refreshInterval, e)
      ),
      r = L(t.data);
    r && this.read(r, { origin: "service" });
  }
  _recomputeFullExtent() {
    let e = null;
    p(this.extent) && (e = this.extent.clone());
    const t = (r) => {
      if (r.sublayers)
        for (const i of r.sublayers.items)
          t(i),
            i.visible &&
              i.fullExtent &&
              (p(e) ? e.union(i.fullExtent) : (e = i.fullExtent.clone()));
    };
    return t(this), e;
  }
};
s([l({ readOnly: !0 })], o.prototype, "allSublayers", void 0),
  s([l({ type: w })], o.prototype, "outSpatialReference", void 0),
  s(
    [
      l({
        type: String,
        json: { origins: { "web-scene": { read: !0, write: !0 } }, read: !1 },
      }),
    ],
    o.prototype,
    "path",
    void 0
  ),
  s(
    [l({ readOnly: !0, json: { read: !1, write: !1 } })],
    o.prototype,
    "legendEnabled",
    void 0
  ),
  s(
    [l({ type: ["show", "hide", "hide-children"] })],
    o.prototype,
    "listMode",
    void 0
  ),
  s([l({ type: ["KML"] })], o.prototype, "operationalLayerType", void 0),
  s([l({})], o.prototype, "resourceInfo", void 0),
  s(
    [l({ type: b.ofType(k), json: { write: { ignoreOrigin: !0 } } })],
    o.prototype,
    "sublayers",
    void 0
  ),
  s(
    [h(["web-map", "portal-item"], "sublayers", ["visibleFolders"])],
    o.prototype,
    "readSublayersFromItemOrWebMap",
    null
  ),
  s(
    [h("service", "sublayers", ["sublayers"])],
    o.prototype,
    "readSublayers",
    null
  ),
  s([H("sublayers")], o.prototype, "writeSublayers", null),
  s([l({ readOnly: !0, json: { read: !1 } })], o.prototype, "type", void 0),
  s(
    [
      l({
        json: {
          origins: { "web-map": { read: { source: "title" } } },
          write: { ignoreOrigin: !0 },
        },
      }),
    ],
    o.prototype,
    "title",
    null
  ),
  s([l(W)], o.prototype, "url", void 0),
  s([l({ readOnly: !0 })], o.prototype, "visibleSublayers", null),
  s([l({ type: d })], o.prototype, "extent", void 0),
  s([l()], o.prototype, "fullExtent", null),
  (o = s([S("esri.layers.KMLLayer")], o));
const te = o;
export { te as default };
