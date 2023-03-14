import { q as F } from "./Table.e9c997d5.js";
import {
  ae as t,
  af as s,
  ag as I,
  dd as P,
  iU as D,
  iV as O,
  im as E,
  iW as _,
  io as U,
  ip as N,
  es as C,
  et as A,
  eu as L,
  ev as J,
  iT as V,
  aH as S,
  s as p,
  r as G,
  a2 as M,
  iX as f,
  ka as $,
  Q as q,
  jw as W,
  ak as z,
  ha as u,
  ej as Q,
  it as H,
  av as X,
  U as Y,
  gr as Z,
  iY as B,
  N as K,
  gi as ee,
  ar as te,
  iZ as ie,
  i_ as se,
  i$ as re,
  j0 as oe,
  gO as g,
  kg as ne,
  kh as ae,
  iv as le,
  ai as pe,
  j2 as de,
  iu as ce,
  dl as v,
  j3 as ye,
  ey as me,
  ki as ue,
  kj as he,
  iw as fe,
  db as ge,
} from "./index.8fd7165c.js";
import "./vue.a7ce1fbe.js";
import "./NvapForm.feb8550d.js";
import "./vue-i18n.67a42238.js";
import "./vue-router.805f6e2a.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
var h;
let l = (h = class extends P {
  constructor() {
    super(...arguments),
      (this.age = null),
      (this.ageReceived = null),
      (this.displayCount = null),
      (this.maxObservations = 1);
  }
  clone() {
    return new h({
      age: this.age,
      ageReceived: this.ageReceived,
      displayCount: this.displayCount,
      maxObservations: this.maxObservations,
    });
  }
});
t([s({ type: Number, json: { write: !0 } })], l.prototype, "age", void 0),
  t(
    [s({ type: Number, json: { write: !0 } })],
    l.prototype,
    "ageReceived",
    void 0
  ),
  t(
    [s({ type: Number, json: { write: !0 } })],
    l.prototype,
    "displayCount",
    void 0
  ),
  t(
    [s({ type: Number, json: { write: !0 } })],
    l.prototype,
    "maxObservations",
    void 0
  ),
  (l = h = t([I("esri.layers.support.PurgeOptions")], l));
const x = l,
  b = fe();
function w(e, r) {
  return new p(
    "layer:unsupported",
    `Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`,
    { layer: e }
  );
}
let i = class extends D(O(E(_(U(N(C(A(L(J(V(ge))))))))))) {
  constructor(...e) {
    super(...e),
      (this.copyright = null),
      (this.definitionExpression = null),
      (this.displayField = null),
      (this.elevationInfo = null),
      (this.fields = null),
      (this.fieldsIndex = null),
      (this.geometryDefinition = null),
      (this.geometryType = null),
      (this.labelsVisible = !0),
      (this.labelingInfo = null),
      (this.legendEnabled = !0),
      (this.maxReconnectionAttempts = 0),
      (this.maxReconnectionInterval = 20),
      (this.maxScale = 0),
      (this.minScale = 0),
      (this.objectIdField = null),
      (this.operationalLayerType = "ArcGISStreamLayer"),
      (this.popupEnabled = !0),
      (this.popupTemplate = null),
      (this.purgeOptions = new x()),
      (this.screenSizePerspectiveEnabled = !0),
      (this.sourceJSON = null),
      (this.spatialReference = S.WGS84),
      (this.type = "stream"),
      (this.url = null),
      (this.updateInterval = 300),
      (this.webSocketUrl = null);
  }
  normalizeCtorArgs(e, r) {
    return typeof e == "string" ? { url: e, ...r } : e;
  }
  load(e) {
    if (!("WebSocket" in globalThis))
      return (
        this.addResolvingPromise(
          Promise.reject(
            new p(
              "stream-layer:websocket-unsupported",
              "WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."
            )
          )
        ),
        Promise.resolve(this)
      );
    const r = G(e) ? e.signal : null;
    return (
      this.addResolvingPromise(
        this.loadFromPortal({ supportedTypes: ["Stream Service", "Feed"] }, e)
          .catch(M)
          .then(() => this._fetchService(r))
      ),
      Promise.resolve(this)
    );
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set renderer(e) {
    f(e, this.fieldsIndex), this._set("renderer", e);
  }
  readRenderer(e, r, o) {
    const a =
      ((r = r.layerDefinition || r).drawingInfo && r.drawingInfo.renderer) ||
      void 0;
    if (a) {
      const n = $(a, r, o) || void 0;
      return (
        n ||
          q.getLogger(this.declaredClass).error("Failed to create renderer", {
            rendererDefinition: r.drawingInfo.renderer,
            layer: this,
            context: o,
          }),
        n
      );
    }
    if (r.defaultSymbol)
      return r.types && r.types.length
        ? new W({
            defaultSymbol: m(r.defaultSymbol, r, o),
            field: r.typeIdField,
            uniqueValueInfos: r.types.map((n) => ({
              id: n.id,
              symbol: m(n.symbol, n, o),
            })),
          })
        : new z({ symbol: m(r.defaultSymbol, r, o) });
  }
  async connect(e) {
    const [{ createConnection: r }] = await Promise.all([
        F(
          () => import("./createConnection.5ac152ac.js"),
          [
            "js/createConnection.5ac152ac.js",
            "js/Table.e9c997d5.js",
            "js/vue.a7ce1fbe.js",
            "js/NvapForm.feb8550d.js",
            "assets/NvapForm.356f5dc3.css",
            "js/vue-i18n.67a42238.js",
            "js/vue-router.805f6e2a.js",
            "assets/Table.3b7647ef.css",
            "js/index.8fd7165c.js",
            "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
            "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
            "assets/index.a699c0e4.css",
          ]
        ),
        this.load(),
      ]),
      o = this.geometryType ? u.toJSON(this.geometryType) : null,
      {
        customParameters: a = null,
        definitionExpression: n = null,
        geometryDefinition: c = null,
        maxReconnectionAttempts: j = 0,
        maxReconnectionInterval: R = 20,
        spatialReference: T = this.spatialReference,
      } = e || this.createConnectionParameters(),
      d = r(
        this.parsedUrl,
        this.spatialReference,
        T,
        o,
        { geometry: c, where: n },
        j,
        R,
        a ?? void 0
      ),
      k = Q([
        this.on("send-message-to-socket", (y) => d.sendMessageToSocket(y)),
        this.on("send-message-to-client", (y) => d.sendMessageToClient(y)),
      ]);
    return d.once("destroy", k.remove), d;
  }
  createConnectionParameters() {
    return {
      spatialReference: this.spatialReference,
      customParameters: this.customParameters,
      definitionExpression: this.definitionExpression,
      geometryDefinition: this.geometryDefinition,
      maxReconnectionAttempts: this.maxReconnectionAttempts,
      maxReconnectionInterval: this.maxReconnectionInterval,
    };
  }
  createPopupTemplate(e) {
    return H(this, e);
  }
  createQuery() {
    const e = new X();
    return (
      (e.returnGeometry = !0),
      (e.outFields = ["*"]),
      (e.where = this.definitionExpression || "1=1"),
      e
    );
  }
  getFieldDomain(e, r) {
    if (!this.fields) return null;
    let o = null;
    return this.fields.some((a) => (a.name === e && (o = a.domain), !!o)), o;
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  serviceSupportsSpatialReference(e) {
    return !0;
  }
  sendMessageToSocket(e) {
    this.emit("send-message-to-socket", e);
  }
  sendMessageToClient(e) {
    this.emit("send-message-to-client", e);
  }
  write(e, r) {
    const o = r == null ? void 0 : r.messages;
    return this.webSocketUrl
      ? (o == null ||
          o.push(
            w(
              this,
              "using a custom websocket connection cannot be written to web scenes and web maps"
            )
          ),
        null)
      : this.parsedUrl
      ? super.write(e, r)
      : (o == null ||
          o.push(
            w(
              this,
              "using a client-side only connection without a url cannot be written to web scenes and web maps"
            )
          ),
        null);
  }
  async _fetchService(e) {
    var r, o, a;
    if (!this.webSocketUrl && this.parsedUrl) {
      if (!this.sourceJSON) {
        const { data: n } = await Y(this.parsedUrl.path, {
          query: {
            f: "json",
            ...this.customParameters,
            ...this.parsedUrl.query,
          },
          responseType: "json",
          signal: e,
        });
        this.sourceJSON = n;
      }
    } else {
      if (!((r = this.timeInfo) != null && r.trackIdField))
        throw new p(
          "stream-layer:missing-metadata",
          "The stream layer trackIdField must be specified."
        );
      if (!this.objectIdField) {
        const n =
          (o = this.fields.find((c) => c.type === "oid")) == null
            ? void 0
            : o.name;
        if (!n)
          throw new p(
            "stream-layer:missing-metadata",
            "The stream layer objectIdField must be specified."
          );
        this.objectIdField = n;
      }
      if (!this.fields)
        throw new p(
          "stream-layer:missing-metadata",
          "The stream layer fields must be specified."
        );
      if (
        (this.fields.some((n) => n.name === this.objectIdField) ||
          this.fields.push(
            new Z({
              name: this.objectIdField,
              alias: this.objectIdField,
              type: "oid",
            })
          ),
        !this.geometryType)
      )
        throw new p(
          "stream-layer:missing-metadata",
          "The stream layer geometryType must be specified."
        );
      this.webSocketUrl && (this.url = this.webSocketUrl);
    }
    return (
      this.read(this.sourceJSON, {
        origin: "service",
        portalItem: this.portalItem,
        portal: (a = this.portalItem) == null ? void 0 : a.portal,
        url: this.parsedUrl,
      }),
      f(this.renderer, this.fieldsIndex),
      B(this.timeInfo, this.fieldsIndex),
      this.objectIdField || (this.objectIdField = "__esri_stream_id__"),
      K(this, { origin: "service" })
    );
  }
};
t([s({ type: String })], i.prototype, "copyright", void 0),
  t([s({ readOnly: !0 })], i.prototype, "defaultPopupTemplate", null),
  t(
    [
      s({
        type: String,
        json: {
          name: "layerDefinition.definitionExpression",
          write: { enabled: !0, allowNull: !0 },
        },
      }),
    ],
    i.prototype,
    "definitionExpression",
    void 0
  ),
  t([s({ type: String })], i.prototype, "displayField", void 0),
  t([s({ type: ee })], i.prototype, "elevationInfo", void 0),
  t([s(b.fields)], i.prototype, "fields", void 0),
  t([s(b.fieldsIndex)], i.prototype, "fieldsIndex", void 0),
  t([s({ type: te })], i.prototype, "geometryDefinition", void 0),
  t(
    [s({ type: u.apiValues, json: { read: { reader: u.read } } })],
    i.prototype,
    "geometryType",
    void 0
  ),
  t([s(ie)], i.prototype, "labelsVisible", void 0),
  t(
    [
      s({
        type: [se],
        json: {
          read: {
            source: "layerDefinition.drawingInfo.labelingInfo",
            reader: re,
          },
          write: { target: "layerDefinition.drawingInfo.labelingInfo" },
        },
      }),
    ],
    i.prototype,
    "labelingInfo",
    void 0
  ),
  t([s(oe)], i.prototype, "legendEnabled", void 0),
  t([s({ type: ["show", "hide"] })], i.prototype, "listMode", void 0),
  t([s({ type: g })], i.prototype, "maxReconnectionAttempts", void 0),
  t([s({ type: g })], i.prototype, "maxReconnectionInterval", void 0),
  t([s(ne)], i.prototype, "maxScale", void 0),
  t([s(ae)], i.prototype, "minScale", void 0),
  t([s({ type: String })], i.prototype, "objectIdField", void 0),
  t(
    [s({ value: "ArcGISStreamLayer", type: ["ArcGISStreamLayer"] })],
    i.prototype,
    "operationalLayerType",
    void 0
  ),
  t([s(le)], i.prototype, "popupEnabled", void 0),
  t(
    [
      s({
        type: pe,
        json: { read: { source: "popupInfo" }, write: { target: "popupInfo" } },
      }),
    ],
    i.prototype,
    "popupTemplate",
    void 0
  ),
  t([s({ type: x })], i.prototype, "purgeOptions", void 0),
  t(
    [
      s({
        types: de,
        json: {
          origins: {
            service: { write: { target: "drawingInfo.renderer", enabled: !1 } },
            "web-scene": {
              name: "layerDefinition.drawingInfo.renderer",
              types: ce,
              write: !0,
            },
          },
          write: { target: "layerDefinition.drawingInfo.renderer" },
        },
      }),
    ],
    i.prototype,
    "renderer",
    null
  ),
  t(
    [
      v("service", "renderer", ["drawingInfo.renderer", "defaultSymbol"]),
      v("renderer", [
        "layerDefinition.drawingInfo.renderer",
        "layerDefinition.defaultSymbol",
      ]),
    ],
    i.prototype,
    "readRenderer",
    null
  ),
  t([s(ye)], i.prototype, "screenSizePerspectiveEnabled", void 0),
  t([s()], i.prototype, "sourceJSON", void 0),
  t(
    [
      s({
        type: S,
        json: {
          origins: { service: { read: { source: "spatialReference" } } },
        },
      }),
    ],
    i.prototype,
    "spatialReference",
    void 0
  ),
  t([s({ json: { read: !1 } })], i.prototype, "type", void 0),
  t([s(me)], i.prototype, "url", void 0),
  t([s({ type: Number })], i.prototype, "updateInterval", void 0),
  t([s({ type: String })], i.prototype, "webSocketUrl", void 0),
  (i = t([I("esri.layers.StreamLayer")], i));
const m = ue({ types: he }),
  Te = i;
export { Te as default };
