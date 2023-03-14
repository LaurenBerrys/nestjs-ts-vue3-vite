import {
  b3 as P,
  aq as C,
  r as I,
  ah as U,
  ar as x,
  s as E,
  q as N,
  ha as c,
  L as _,
  dB as J,
  w as W,
  ae as i,
  af as r,
  ag as j,
  i3 as k,
  iS as X,
  iT as D,
  iU as Y,
  iV as L,
  im as Q,
  iW as V,
  ip as G,
  io as z,
  et as B,
  eu as H,
  ev as M,
  aH as q,
  iX as b,
  iY as Z,
  gr as R,
  i5 as $,
  cy as A,
  it as K,
  av as y,
  iD as ee,
  dm as te,
  iZ as ie,
  i_ as re,
  i$ as se,
  j0 as oe,
  gO as O,
  kS as ae,
  iv as ne,
  ai as le,
  j2 as pe,
  iu as de,
  j3 as ue,
  ey as ye,
  iw as ce,
  db as me,
} from "./index.8fd7165c.js";
import { l as he, o as fe } from "./clientSideDefaults.4b2f5b2f.js";
import {
  D as ge,
  X as we,
  z as ve,
  W as Fe,
  C as be,
} from "./wfsUtils.e7c6e7db.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./QueryEngineCapabilities.42e44ded.js";
import "./geojson.96c8477e.js";
import "./xmlUtils.444cb4c0.js";
let d = class extends P(k) {
  constructor() {
    super(...arguments),
      (this._connection = null),
      (this.capabilities = he(!1, !1)),
      (this.type = "wfs"),
      (this.refresh = C(async (e) => {
        await this.load();
        const { extent: t } = await this._connection.invoke("refresh", e);
        return (
          t && (this.sourceJSON.extent = t),
          { dataChanged: !0, updates: { extent: this.sourceJSON.extent } }
        );
      }));
  }
  load(e) {
    const t = I(e) ? e.signal : null;
    return (
      this.addResolvingPromise(this._startWorker({ signal: t })),
      Promise.resolve(this)
    );
  }
  destroy() {
    var e;
    (e = this._connection) == null || e.close(), (this._connection = null);
  }
  async openPorts() {
    return await this.load(), this._connection.openPorts();
  }
  async queryFeatures(e, t = {}) {
    await this.load(t);
    const o = await this._connection.invoke(
      "queryFeatures",
      e ? e.toJSON() : null,
      t
    );
    return U.fromJSON(o);
  }
  async queryFeaturesJSON(e, t = {}) {
    return (
      await this.load(t),
      this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t)
    );
  }
  async queryFeatureCount(e, t = {}) {
    return (
      await this.load(t),
      this._connection.invoke("queryFeatureCount", e ? e.toJSON() : null, t)
    );
  }
  async queryObjectIds(e, t = {}) {
    return (
      await this.load(t),
      this._connection.invoke("queryObjectIds", e ? e.toJSON() : null, t)
    );
  }
  async queryExtent(e, t = {}) {
    await this.load(t);
    const o = await this._connection.invoke(
      "queryExtent",
      e ? e.toJSON() : null,
      t
    );
    return { count: o.count, extent: x.fromJSON(o.extent) };
  }
  async querySnapping(e, t = {}) {
    return await this.load(t), this._connection.invoke("querySnapping", e, t);
  }
  async _createLoadOptions(e) {
    var F;
    const {
      url: t,
      customParameters: o,
      name: n,
      namespaceUri: l,
      spatialReference: a,
      fields: u,
      geometryType: m,
      swapXY: h,
    } = this.layer;
    if (!t)
      throw new E(
        "wfs-layer:missing-url",
        "WFSLayer must be created with a url"
      );
    this.wfsCapabilities ||
      (this.wfsCapabilities = await ge(t, { customParameters: o, ...e }));
    const f = [
        "fields",
        "geometryType",
        "name",
        "namespaceUri",
        "spatialReference",
        "swapXY",
      ].some((w) => this.layer[w] == null),
      p = f
        ? await we(this.wfsCapabilities, n, l, {
            spatialReference: a,
            customParameters: o,
            signal: e == null ? void 0 : e.signal,
          })
        : {
            ...ve(u ?? []),
            geometryType: m,
            name: n,
            namespaceUri: l,
            spatialReference: a,
            swapXY: h,
          },
      g = N(
        Fe(this.wfsCapabilities.readFeatureTypes(), p.name, p.namespaceUri)
      ),
      T = c.toJSON(p.geometryType);
    return {
      customParameters: o,
      featureType: g,
      fields:
        ((F = p.fields) == null ? void 0 : F.map((w) => w.toJSON())) ?? [],
      geometryField: p.geometryField,
      geometryType: T,
      getFeatureUrl: this.wfsCapabilities.operations.GetFeature.url,
      getFeatureOutputFormat:
        this.wfsCapabilities.operations.GetFeature.outputFormat,
      objectIdField: p.objectIdField,
      spatialReference: p.spatialReference.toJSON(),
      swapXY: !!p.swapXY,
    };
  }
  async _startWorker(e) {
    const [t, o] = await _([
        this._createLoadOptions(e),
        J("WFSSourceWorker", {
          ...e,
          strategy: W("feature-layers-workers") ? "dedicated" : "local",
        }),
      ]),
      n = t.error || o.error || null,
      l = o.value || null;
    if (n) throw (l && l.close(), n);
    const a = t.value;
    this._connection = o.value;
    const u = (await this._connection.invoke("load", a, e)).extent;
    this.sourceJSON = {
      extent: u,
      fields: a.fields,
      geometryType: a.geometryType,
      objectIdField: a.objectIdField,
      geometryField: a.geometryField,
      drawingInfo: fe(a.geometryType),
      name: a.featureType.title,
      wfsInfo: {
        name: a.featureType.name,
        featureUrl: a.getFeatureUrl,
        maxFeatures: 3e3,
        swapXY: a.swapXY,
        supportedSpatialReferences: a.featureType.supportedSpatialReferences,
        version: "2.0.0",
        wfsNamespace: a.featureType.namespaceUri,
      },
    };
  }
};
var v;
i([r()], d.prototype, "capabilities", void 0),
  i([r({ constructOnly: !0 })], d.prototype, "layer", void 0),
  i([r()], d.prototype, "sourceJSON", void 0),
  i([r()], d.prototype, "type", void 0),
  i([r()], d.prototype, "wfsCapabilities", void 0),
  (d = i([j("esri.layers.graphics.sources.WFSSource")], d));
const S = ce();
let s = (v = class extends X(D(Y(L(Q(V(G(z(B(H(M(me))))))))))) {
  static fromWFSLayerInfo(e) {
    const {
      customParameters: t,
      fields: o,
      geometryField: n,
      geometryType: l,
      name: a,
      namespaceUri: u,
      objectIdField: m,
      spatialReference: h,
      swapXY: f,
      url: p,
      wfsCapabilities: g,
    } = e;
    return new v({
      customParameters: t,
      fields: o,
      geometryField: n,
      geometryType: l,
      name: a,
      namespaceUri: u,
      objectIdField: m,
      spatialReference: h,
      swapXY: f,
      url: p,
      wfsCapabilities: g,
    });
  }
  constructor(e) {
    super(e),
      (this.copyright = null),
      (this.customParameters = null),
      (this.definitionExpression = null),
      (this.displayField = null),
      (this.elevationInfo = null),
      (this.featureUrl = void 0),
      (this.fields = null),
      (this.fieldsIndex = null),
      (this.fullExtent = null),
      (this.geometryType = null),
      (this.labelsVisible = !0),
      (this.labelingInfo = null),
      (this.legendEnabled = !0),
      (this.objectIdField = null),
      (this.operationalLayerType = "WFS"),
      (this.maxFeatures = 3e3),
      (this.mode = 0),
      (this.name = null),
      (this.namespaceUri = null),
      (this.outFields = null),
      (this.popupEnabled = !0),
      (this.popupTemplate = null),
      (this.screenSizePerspectiveEnabled = !0),
      (this.source = new d({ layer: this })),
      (this.spatialReference = q.WGS84),
      (this.spatialReferences = [4326]),
      (this.swapXY = void 0),
      (this.title = "WFS"),
      (this.type = "wfs"),
      (this.url = null),
      (this.version = void 0);
  }
  destroy() {
    var e;
    (e = this.source) == null || e.destroy();
  }
  load(e) {
    return (
      this.addResolvingPromise(
        this.loadFromPortal({ supportedTypes: ["WFS"] }, e)
          .then(() => this.source.load(e))
          .then(() => {
            this.read(this.source.sourceJSON, {
              origin: "service",
              url: this.parsedUrl,
            }),
              this.revert(
                [
                  "objectIdField",
                  "fields",
                  "timeInfo",
                  "spatialReference",
                  "name",
                  "namespaceUri",
                ],
                "service"
              ),
              b(this.renderer, this.fieldsIndex),
              Z(this.timeInfo, this.fieldsIndex);
          })
      ),
      Promise.resolve(this)
    );
  }
  get capabilities() {
    var e;
    return (e = this.source) == null ? void 0 : e.capabilities;
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
  writeFields(e, t, o) {
    const n = e.filter((l) => l.name !== be);
    this.geometryField &&
      n.unshift(
        new R({
          name: this.geometryField,
          alias: this.geometryField,
          type: "geometry",
        })
      ),
      $(
        o,
        n.map((l) => l.toJSON()),
        t
      );
  }
  get parsedUrl() {
    return A(this.url);
  }
  set renderer(e) {
    b(e, this.fieldsIndex), this._set("renderer", e);
  }
  get wfsCapabilities() {
    var e;
    return (e = this.source) == null ? void 0 : e.wfsCapabilities;
  }
  set wfsCapabilities(e) {
    this.source && (this.source.wfsCapabilities = e);
  }
  createPopupTemplate(e) {
    return K(this, e);
  }
  createQuery() {
    const e = new y();
    (e.returnGeometry = !0),
      (e.outFields = ["*"]),
      (e.where = this.definitionExpression || "1=1");
    const { timeOffset: t, timeExtent: o } = this;
    return (
      (e.timeExtent =
        t != null && o != null ? o.offset(-t.value, t.unit) : o || null),
      e
    );
  }
  getFieldDomain(e, t) {
    var o;
    return (o = this.getField(e)) == null ? void 0 : o.domain;
  }
  getField(e) {
    var t;
    return (t = this.fieldsIndex) == null ? void 0 : t.get(e);
  }
  queryFeatures(e, t) {
    return this.load()
      .then(() => this.source.queryFeatures(y.from(e) || this.createQuery(), t))
      .then((o) => {
        if (o != null && o.features)
          for (const n of o.features) n.layer = n.sourceLayer = this;
        return o;
      });
  }
  queryObjectIds(e, t) {
    return this.load().then(() =>
      this.source.queryObjectIds(y.from(e) || this.createQuery(), t)
    );
  }
  queryFeatureCount(e, t) {
    return this.load().then(() =>
      this.source.queryFeatureCount(y.from(e) || this.createQuery(), t)
    );
  }
  queryExtent(e, t) {
    return this.load().then(() =>
      this.source.queryExtent(y.from(e) || this.createQuery(), t)
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
});
i([r({ readOnly: !0 })], s.prototype, "capabilities", null),
  i([r({ type: String })], s.prototype, "copyright", void 0),
  i([r({ readOnly: !0 })], s.prototype, "createQueryVersion", null),
  i(
    [
      r({
        json: {
          name: "wfsInfo.customParameters",
          write: {
            overridePolicy: (e) => ({
              enabled: !!(e && Object.keys(e).length > 0),
              ignoreOrigin: !0,
            }),
          },
        },
      }),
    ],
    s.prototype,
    "customParameters",
    void 0
  ),
  i([r({ readOnly: !0 })], s.prototype, "defaultPopupTemplate", null),
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
    s.prototype,
    "definitionExpression",
    void 0
  ),
  i([r({ type: String })], s.prototype, "displayField", void 0),
  i([r(ee)], s.prototype, "elevationInfo", void 0),
  i(
    [
      r({
        type: String,
        readOnly: !0,
        json: {
          name: "wfsInfo.featureUrl",
          write: { ignoreOrigin: !0, isRequired: !0 },
        },
      }),
    ],
    s.prototype,
    "featureUrl",
    void 0
  ),
  i(
    [
      r({
        type: [R],
        json: {
          name: "layerDefinition.fields",
          write: { ignoreOrigin: !0, isRequired: !0 },
          origins: { service: { name: "fields" } },
        },
      }),
    ],
    s.prototype,
    "fields",
    void 0
  ),
  i([te("fields")], s.prototype, "writeFields", null),
  i([r(S.fieldsIndex)], s.prototype, "fieldsIndex", void 0),
  i(
    [r({ type: x, json: { name: "extent" } })],
    s.prototype,
    "fullExtent",
    void 0
  ),
  i([r()], s.prototype, "geometryField", void 0),
  i(
    [
      r({
        type: String,
        json: {
          read: { source: "layerDefinition.geometryType", reader: c.read },
          write: {
            target: "layerDefinition.geometryType",
            writer: c.write,
            ignoreOrigin: !0,
          },
          origins: { service: { read: c.read } },
        },
      }),
    ],
    s.prototype,
    "geometryType",
    void 0
  ),
  i([r({ type: String })], s.prototype, "id", void 0),
  i([r(ie)], s.prototype, "labelsVisible", void 0),
  i(
    [
      r({
        type: [re],
        json: {
          name: "layerDefinition.drawingInfo.labelingInfo",
          read: { reader: se },
          write: !0,
        },
      }),
    ],
    s.prototype,
    "labelingInfo",
    void 0
  ),
  i([r(oe)], s.prototype, "legendEnabled", void 0),
  i([r({ type: ["show", "hide"] })], s.prototype, "listMode", void 0),
  i([r({ type: String })], s.prototype, "objectIdField", void 0),
  i([r({ type: ["WFS"] })], s.prototype, "operationalLayerType", void 0),
  i(
    [
      r({
        type: O,
        json: {
          name: "wfsInfo.maxFeatures",
          write: { ignoreOrigin: !0, isRequired: !0 },
        },
      }),
    ],
    s.prototype,
    "maxFeatures",
    void 0
  ),
  i(
    [
      r({
        type: [0],
        readOnly: !0,
        json: {
          origins: {
            "web-map": { write: { ignoreOrigin: !0, isRequired: !0 } },
          },
        },
      }),
    ],
    s.prototype,
    "mode",
    void 0
  ),
  i(
    [
      r({
        type: String,
        json: {
          name: "wfsInfo.name",
          write: { ignoreOrigin: !0, isRequired: !0 },
        },
      }),
    ],
    s.prototype,
    "name",
    void 0
  ),
  i(
    [
      r({
        type: String,
        json: {
          name: "wfsInfo.wfsNamespace",
          write: { ignoreOrigin: !0, isRequired: !0 },
        },
      }),
    ],
    s.prototype,
    "namespaceUri",
    void 0
  ),
  i([r(ae)], s.prototype, "opacity", void 0),
  i([r(S.outFields)], s.prototype, "outFields", void 0),
  i([r({ readOnly: !0 })], s.prototype, "parsedUrl", null),
  i([r(ne)], s.prototype, "popupEnabled", void 0),
  i(
    [r({ type: le, json: { name: "popupInfo", write: !0 } })],
    s.prototype,
    "popupTemplate",
    void 0
  ),
  i(
    [
      r({
        types: pe,
        json: {
          origins: {
            service: { name: "drawingInfo.renderer" },
            "web-scene": {
              types: de,
              name: "layerDefinition.drawingInfo.renderer",
              write: !0,
            },
          },
          name: "layerDefinition.drawingInfo.renderer",
          write: { ignoreOrigin: !0 },
        },
      }),
    ],
    s.prototype,
    "renderer",
    null
  ),
  i([r(ue)], s.prototype, "screenSizePerspectiveEnabled", void 0),
  i([r({ readOnly: !0 })], s.prototype, "source", void 0),
  i(
    [
      r({
        type: q,
        json: {
          name: "layerDefinition.spatialReference",
          write: { ignoreOrigin: !0, isRequired: !0 },
          origins: { service: { name: "extent.spatialReference" } },
        },
      }),
    ],
    s.prototype,
    "spatialReference",
    void 0
  ),
  i(
    [
      r({
        readOnly: !0,
        type: [O],
        json: {
          name: "wfsInfo.supportedSpatialReferences",
          write: { ignoreOrigin: !0, isRequired: !0 },
        },
      }),
    ],
    s.prototype,
    "spatialReferences",
    void 0
  ),
  i(
    [
      r({
        type: Boolean,
        value: !1,
        json: {
          name: "wfsInfo.swapXY",
          write: { ignoreOrigin: !0, isRequired: !0 },
        },
      }),
    ],
    s.prototype,
    "swapXY",
    void 0
  ),
  i(
    [
      r({
        json: {
          write: { ignoreOrigin: !0, isRequired: !0 },
          origins: { service: { name: "name" } },
        },
      }),
    ],
    s.prototype,
    "title",
    void 0
  ),
  i([r({ json: { read: !1 }, readOnly: !0 })], s.prototype, "type", void 0),
  i([r(ye)], s.prototype, "url", void 0),
  i(
    [
      r({
        type: String,
        readOnly: !0,
        json: {
          name: "wfsInfo.version",
          write: { ignoreOrigin: !0, isRequired: !0 },
        },
      }),
    ],
    s.prototype,
    "version",
    void 0
  ),
  i([r()], s.prototype, "wfsCapabilities", null),
  (s = v = i([j("esri.layers.WFSLayer")], s));
const _e = s;
export { _e as default };
