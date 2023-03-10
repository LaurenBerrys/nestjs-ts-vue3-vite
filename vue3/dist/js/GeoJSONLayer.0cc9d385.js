import { q as w } from "./Table.e9c997d5.js";
import {
  Q as J,
  ae as i,
  af as r,
  ag as b,
  i3 as N,
  aq as R,
  r as I,
  ah as q,
  ar as O,
  s as m,
  t as P,
  bn as T,
  dB as D,
  w as k,
  ha as E,
  iS as G,
  iT as L,
  iU as Q,
  iV as Z,
  im as z,
  iW as C,
  io as V,
  ip as U,
  et as W,
  eu as A,
  ev as B,
  aH as F,
  a2 as M,
  iX as f,
  iY as $,
  cy as g,
  it as H,
  av as c,
  iD as X,
  gr as Y,
  iE as K,
  iZ as ee,
  i_ as te,
  i$ as ie,
  j0 as se,
  j1 as re,
  iv as oe,
  ai as ne,
  j2 as ae,
  iu as le,
  j3 as ue,
  j4 as de,
  j5 as pe,
  ey as he,
  iw as ce,
  db as ye,
} from "./index.8fd7165c.js";
import { l as me } from "./clientSideDefaults.4b2f5b2f.js";
import "./vue.a7ce1fbe.js";
import "./NvapForm.feb8550d.js";
import "./vue-i18n.67a42238.js";
import "./vue-router.805f6e2a.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./QueryEngineCapabilities.42e44ded.js";
const S = "esri.layers.graphics.sources.GeoJSONSource",
  v = J.getLogger(S);
let p = class extends N {
  constructor() {
    super(...arguments),
      (this.type = "geojson"),
      (this.refresh = R(async (e) => {
        await this.load();
        const { extent: t, timeExtent: s } = await this._connection.invoke(
          "refresh",
          e
        );
        return (
          (this.sourceJSON.extent = t),
          s && (this.sourceJSON.timeInfo.timeExtent = [s.start, s.end]),
          {
            dataChanged: !0,
            updates: {
              extent: this.sourceJSON.extent,
              timeInfo: this.sourceJSON.timeInfo,
            },
          }
        );
      }));
  }
  load(e) {
    const t = I(e) ? e.signal : null;
    return (
      this.addResolvingPromise(this._startWorker(t)), Promise.resolve(this)
    );
  }
  destroy() {
    var e;
    (e = this._connection) == null || e.close(), (this._connection = null);
  }
  applyEdits(e) {
    return this.load().then(() => this._applyEdits(e));
  }
  openPorts() {
    return this.load().then(() => this._connection.openPorts());
  }
  queryFeatures(e, t = {}) {
    return this.load(t)
      .then(() =>
        this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t)
      )
      .then((s) => q.fromJSON(s));
  }
  queryFeaturesJSON(e, t = {}) {
    return this.load(t).then(() =>
      this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t)
    );
  }
  queryFeatureCount(e, t = {}) {
    return this.load(t).then(() =>
      this._connection.invoke("queryFeatureCount", e ? e.toJSON() : null, t)
    );
  }
  queryObjectIds(e, t = {}) {
    return this.load(t).then(() =>
      this._connection.invoke("queryObjectIds", e ? e.toJSON() : null, t)
    );
  }
  queryExtent(e, t = {}) {
    return this.load(t)
      .then(() =>
        this._connection.invoke("queryExtent", e ? e.toJSON() : null, t)
      )
      .then((s) => ({ count: s.count, extent: O.fromJSON(s.extent) }));
  }
  querySnapping(e, t = {}) {
    return this.load(t).then(() =>
      this._connection.invoke("querySnapping", e, t)
    );
  }
  _applyEdits(e) {
    if (!this._connection)
      throw new m(
        "geojson-layer-source:edit-failure",
        "Memory source not loaded"
      );
    const t = this.layer.objectIdField,
      s = [],
      n = [],
      d = [];
    if (e.addFeatures)
      for (const a of e.addFeatures) s.push(this._serializeFeature(a));
    if (e.deleteFeatures)
      for (const a of e.deleteFeatures)
        "objectId" in a && a.objectId != null
          ? n.push(a.objectId)
          : "attributes" in a &&
            a.attributes[t] != null &&
            n.push(a.attributes[t]);
    if (e.updateFeatures)
      for (const a of e.updateFeatures) d.push(this._serializeFeature(a));
    return this._connection
      .invoke("applyEdits", { adds: s, updates: d, deletes: n })
      .then(
        ({ extent: a, timeExtent: l, featureEditResults: u }) => (
          (this.sourceJSON.extent = a),
          l && (this.sourceJSON.timeInfo.timeExtent = [l.start, l.end]),
          this._createEditsResult(u)
        )
      );
  }
  _createEditsResult(e) {
    return {
      addFeatureResults: e.addResults
        ? e.addResults.map(this._createFeatureEditResult, this)
        : [],
      updateFeatureResults: e.updateResults
        ? e.updateResults.map(this._createFeatureEditResult, this)
        : [],
      deleteFeatureResults: e.deleteResults
        ? e.deleteResults.map(this._createFeatureEditResult, this)
        : [],
      addAttachmentResults: [],
      updateAttachmentResults: [],
      deleteAttachmentResults: [],
    };
  }
  _createFeatureEditResult(e) {
    const t =
      e.success === !0
        ? null
        : e.error || { code: void 0, description: void 0 };
    return {
      objectId: e.objectId,
      globalId: e.globalId,
      error: t
        ? new m("geojson-layer-source:edit-failure", t.description, {
            code: t.code,
          })
        : null,
    };
  }
  _serializeFeature(e) {
    const { attributes: t } = e,
      s = this._geometryForSerialization(e);
    return s ? { geometry: s.toJSON(), attributes: t } : { attributes: t };
  }
  _geometryForSerialization(e) {
    const { geometry: t } = e;
    return P(t)
      ? null
      : t.type === "mesh" || t.type === "extent"
      ? T.fromExtent(t.extent)
      : t;
  }
  async _startWorker(e) {
    this._connection = await D("GeoJSONSourceWorker", {
      strategy: k("feature-layers-workers") ? "dedicated" : "local",
      signal: e,
    });
    const {
        fields: t,
        spatialReference: s,
        hasZ: n,
        geometryType: d,
        objectIdField: a,
        url: l,
        timeInfo: u,
        customParameters: x,
      } = this.layer,
      _ = this.layer.originOf("spatialReference") === "defaults",
      j = {
        url: l,
        customParameters: x,
        fields: t && t.map((y) => y.toJSON()),
        geometryType: E.toJSON(d),
        hasZ: n,
        objectIdField: a,
        timeInfo: u ? u.toJSON() : null,
        spatialReference: _ ? null : s && s.toJSON(),
      },
      h = await this._connection.invoke("load", j, { signal: e });
    for (const y of h.warnings)
      v.warn(y.message, { layer: this.layer, warning: y });
    h.featureErrors.length &&
      v.warn(
        `Encountered ${h.featureErrors.length} validation errors while loading features`,
        h.featureErrors
      ),
      (this.sourceJSON = h.layerDefinition),
      (this.capabilities = me(this.sourceJSON.hasZ, !0));
  }
};
i([r()], p.prototype, "capabilities", void 0),
  i([r()], p.prototype, "type", void 0),
  i([r({ constructOnly: !0 })], p.prototype, "layer", void 0),
  i([r()], p.prototype, "sourceJSON", void 0),
  (p = i([b(S)], p));
const fe = ce();
let o = class extends G(L(Q(Z(z(C(V(U(W(A(B(ye))))))))))) {
  constructor(e) {
    super(e),
      (this.copyright = null),
      (this.definitionExpression = null),
      (this.displayField = null),
      (this.editingEnabled = !1),
      (this.elevationInfo = null),
      (this.fields = null),
      (this.fieldsIndex = null),
      (this.fullExtent = null),
      (this.geometryType = null),
      (this.hasZ = void 0),
      (this.labelsVisible = !0),
      (this.labelingInfo = null),
      (this.legendEnabled = !0),
      (this.objectIdField = null),
      (this.operationalLayerType = "GeoJSON"),
      (this.popupEnabled = !0),
      (this.popupTemplate = null),
      (this.screenSizePerspectiveEnabled = !0),
      (this.source = new p({ layer: this })),
      (this.spatialReference = F.WGS84),
      (this.templates = null),
      (this.title = "GeoJSON"),
      (this.type = "geojson"),
      (this.typeIdField = null),
      (this.types = null);
  }
  destroy() {
    var e;
    (e = this.source) == null || e.destroy();
  }
  load(e) {
    const t = this.loadFromPortal(
      { supportedTypes: ["GeoJson"], supportsData: !1 },
      e
    )
      .catch(M)
      .then(() => this.source.load(e))
      .then(() => {
        this.read(this.source.sourceJSON, {
          origin: "service",
          url: this.parsedUrl,
        }),
          this.revert(["objectIdField", "fields", "timeInfo"], "service"),
          f(this.renderer, this.fieldsIndex),
          $(this.timeInfo, this.fieldsIndex);
      });
    return this.addResolvingPromise(t), Promise.resolve(this);
  }
  get capabilities() {
    return this.source ? this.source.capabilities : null;
  }
  get createQueryVersion() {
    return (
      this.commitProperty("definitionExpression"),
      this.commitProperty("timeExtent"),
      this.commitProperty("timeOffset"),
      this.commitProperty("geometryType"),
      this.commitProperty("capabilities"),
      (this._get("createQueryVersion") || 0) + 1
    );
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get isTable() {
    return this.loaded && this.geometryType == null;
  }
  get parsedUrl() {
    return this.url ? g(this.url) : null;
  }
  set renderer(e) {
    f(e, this.fieldsIndex), this._set("renderer", e);
  }
  set url(e) {
    if (!e) return void this._set("url", e);
    const t = g(e);
    this._set("url", t.path),
      t.query &&
        (this.customParameters = { ...this.customParameters, ...t.query });
  }
  async applyEdits(e, t) {
    const s = await w(
      () => import("./editingSupport.09b796d0.js"),
      [
        "js/editingSupport.09b796d0.js",
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
        "js/assetEditingSupport.2cebf928.js",
      ]
    );
    await this.load();
    const n = await s.applyEdits(this, this.source, e, t);
    return (
      this.read(
        {
          extent: this.source.sourceJSON.extent,
          timeInfo: this.source.sourceJSON.timeInfo,
        },
        { origin: "service", ignoreDefaults: !0 }
      ),
      n
    );
  }
  on(e, t) {
    return super.on(e, t);
  }
  createPopupTemplate(e) {
    return H(this, e);
  }
  createQuery() {
    const e = new c(),
      t = this.get("capabilities.data");
    (e.returnGeometry = !0),
      t && t.supportsZ && (e.returnZ = !0),
      (e.outFields = ["*"]),
      (e.where = this.definitionExpression || "1=1");
    const { timeOffset: s, timeExtent: n } = this;
    return (
      (e.timeExtent =
        s != null && n != null ? n.offset(-s.value, s.unit) : n || null),
      e
    );
  }
  getFieldDomain(e, t) {
    let s,
      n = !1;
    const d = t && t.feature,
      a = d && d.attributes,
      l = this.typeIdField && a && a[this.typeIdField];
    return (
      l != null &&
        this.types &&
        (n = this.types.some(
          (u) =>
            u.id == l &&
            ((s = u.domains && u.domains[e]),
            s && s.type === "inherited" && (s = this._getLayerDomain(e)),
            !0)
        )),
      n || s || (s = this._getLayerDomain(e)),
      s
    );
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  queryFeatures(e, t) {
    return this.load()
      .then(() => this.source.queryFeatures(c.from(e) || this.createQuery(), t))
      .then((s) => {
        if (s != null && s.features)
          for (const n of s.features) n.layer = n.sourceLayer = this;
        return s;
      });
  }
  queryObjectIds(e, t) {
    return this.load().then(() =>
      this.source.queryObjectIds(c.from(e) || this.createQuery(), t)
    );
  }
  queryFeatureCount(e, t) {
    return this.load().then(() =>
      this.source.queryFeatureCount(c.from(e) || this.createQuery(), t)
    );
  }
  queryExtent(e, t) {
    return this.load().then(() =>
      this.source.queryExtent(c.from(e) || this.createQuery(), t)
    );
  }
  async hasDataChanged() {
    try {
      const { dataChanged: e, updates: t } = await this.source.refresh(
        this.customParameters
      );
      return (
        I(t) &&
          this.read(t, {
            origin: "service",
            url: this.parsedUrl,
            ignoreDefaults: !0,
          }),
        e
      );
    } catch {}
    return !1;
  }
  _getLayerDomain(e) {
    if (!this.fields) return null;
    let t = null;
    return this.fields.some((s) => (s.name === e && (t = s.domain), !!t)), t;
  }
};
i(
  [r({ readOnly: !0, json: { read: !1, write: !1 } })],
  o.prototype,
  "capabilities",
  null
),
  i([r({ type: String })], o.prototype, "copyright", void 0),
  i([r({ readOnly: !0 })], o.prototype, "createQueryVersion", null),
  i([r({ readOnly: !0 })], o.prototype, "defaultPopupTemplate", null),
  i(
    [
      r({
        type: String,
        json: {
          name: "layerDefinition.definitionExpression",
          write: { enabled: !0, allowNull: !0 },
        },
      }),
    ],
    o.prototype,
    "definitionExpression",
    void 0
  ),
  i([r({ type: String })], o.prototype, "displayField", void 0),
  i([r({ type: Boolean })], o.prototype, "editingEnabled", void 0),
  i([r(X)], o.prototype, "elevationInfo", void 0),
  i(
    [
      r({
        type: [Y],
        json: {
          name: "layerDefinition.fields",
          write: { ignoreOrigin: !0, isRequired: !0 },
          origins: { service: { name: "fields" } },
        },
      }),
    ],
    o.prototype,
    "fields",
    void 0
  ),
  i([r(fe.fieldsIndex)], o.prototype, "fieldsIndex", void 0),
  i(
    [r({ type: O, json: { name: "extent" } })],
    o.prototype,
    "fullExtent",
    void 0
  ),
  i(
    [
      r({
        type: ["point", "polygon", "polyline", "multipoint"],
        json: { read: { reader: E.read } },
      }),
    ],
    o.prototype,
    "geometryType",
    void 0
  ),
  i([r({ type: Boolean })], o.prototype, "hasZ", void 0),
  i([r(K)], o.prototype, "id", void 0),
  i([r({ type: Boolean, readOnly: !0 })], o.prototype, "isTable", null),
  i([r(ee)], o.prototype, "labelsVisible", void 0),
  i(
    [
      r({
        type: [te],
        json: {
          name: "layerDefinition.drawingInfo.labelingInfo",
          read: { reader: ie },
          write: !0,
        },
      }),
    ],
    o.prototype,
    "labelingInfo",
    void 0
  ),
  i([r(se)], o.prototype, "legendEnabled", void 0),
  i([r({ type: ["show", "hide"] })], o.prototype, "listMode", void 0),
  i(
    [
      r({
        type: String,
        json: {
          name: "layerDefinition.objectIdField",
          write: { ignoreOrigin: !0, isRequired: !0 },
          origins: { service: { name: "objectIdField" } },
        },
      }),
    ],
    o.prototype,
    "objectIdField",
    void 0
  ),
  i([r(re)], o.prototype, "opacity", void 0),
  i([r({ type: ["GeoJSON"] })], o.prototype, "operationalLayerType", void 0),
  i([r({ readOnly: !0 })], o.prototype, "parsedUrl", null),
  i([r(oe)], o.prototype, "popupEnabled", void 0),
  i(
    [r({ type: ne, json: { name: "popupInfo", write: !0 } })],
    o.prototype,
    "popupTemplate",
    void 0
  ),
  i(
    [
      r({
        types: ae,
        json: {
          name: "layerDefinition.drawingInfo.renderer",
          write: !0,
          origins: {
            service: { name: "drawingInfo.renderer" },
            "web-scene": { types: le },
          },
        },
      }),
    ],
    o.prototype,
    "renderer",
    null
  ),
  i([r(ue)], o.prototype, "screenSizePerspectiveEnabled", void 0),
  i([r({ readOnly: !0 })], o.prototype, "source", void 0),
  i([r({ type: F })], o.prototype, "spatialReference", void 0),
  i([r({ type: [de] })], o.prototype, "templates", void 0),
  i([r()], o.prototype, "title", void 0),
  i([r({ json: { read: !1 }, readOnly: !0 })], o.prototype, "type", void 0),
  i([r({ type: String, readOnly: !0 })], o.prototype, "typeIdField", void 0),
  i([r({ type: [pe] })], o.prototype, "types", void 0),
  i([r(he)], o.prototype, "url", null),
  (o = i([b("esri.layers.GeoJSONLayer")], o));
const je = o;
export { je as default };
