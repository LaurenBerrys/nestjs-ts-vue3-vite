import {
  ae as i,
  af as r,
  ag as y,
  i3 as w,
  aq as S,
  r as p,
  ah as O,
  ar as F,
  dB as b,
  w as I,
  dl as q,
  iL as N,
  iM as _,
  ic as J,
  aH as C,
  a2 as P,
  cy as j,
  av as l,
  s as m,
} from "./index.8fd7165c.js";
import { l as x } from "./clientSideDefaults.4b2f5b2f.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./QueryEngineCapabilities.42e44ded.js";
let n = class extends w {
  constructor(e) {
    super(e),
      (this.type = "csv"),
      (this.refresh = S(async (t) => {
        await this.load();
        const { extent: s, timeExtent: a } = await this._connection.invoke(
          "refresh",
          t
        );
        return (
          s && (this.sourceJSON.extent = s),
          a && (this.sourceJSON.timeInfo.timeExtent = [a.start, a.end]),
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
    const t = p(e) ? e.signal : null;
    return (
      this.addResolvingPromise(this._startWorker(t)), Promise.resolve(this)
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
    const s = await this._connection.invoke(
      "queryFeatures",
      e ? e.toJSON() : null,
      t
    );
    return O.fromJSON(s);
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
    const s = await this._connection.invoke(
      "queryExtent",
      e ? e.toJSON() : null,
      t
    );
    return { count: s.count, extent: F.fromJSON(s.extent) };
  }
  async querySnapping(e, t = {}) {
    return await this.load(t), this._connection.invoke("querySnapping", e, t);
  }
  async _startWorker(e) {
    this._connection = await b("CSVSourceWorker", {
      strategy: I("feature-layers-workers") ? "dedicated" : "local",
      signal: e,
    });
    const {
        url: t,
        delimiter: s,
        fields: a,
        latitudeField: f,
        longitudeField: g,
        spatialReference: u,
        timeInfo: d,
      } = this.loadOptions,
      c = await this._connection.invoke(
        "load",
        {
          url: t,
          customParameters: this.customParameters,
          parsingOptions: {
            delimiter: s,
            fields: a == null ? void 0 : a.map((v) => v.toJSON()),
            latitudeField: f,
            longitudeField: g,
            spatialReference: u == null ? void 0 : u.toJSON(),
            timeInfo: d == null ? void 0 : d.toJSON(),
          },
        },
        { signal: e }
      );
    (this.locationInfo = c.locationInfo),
      (this.sourceJSON = c.layerDefinition),
      (this.delimiter = c.delimiter);
  }
};
function h(e, t) {
  throw new m(
    t,
    `CSVLayer (title: ${e.title}, id: ${e.id}) cannot be saved to a portal item`
  );
}
i([r()], n.prototype, "type", void 0),
  i([r()], n.prototype, "loadOptions", void 0),
  i([r()], n.prototype, "customParameters", void 0),
  i([r()], n.prototype, "locationInfo", void 0),
  i([r()], n.prototype, "sourceJSON", void 0),
  i([r()], n.prototype, "delimiter", void 0),
  (n = i([y("esri.layers.graphics.sources.CSVSource")], n));
let o = class extends J {
  constructor(...e) {
    super(...e),
      (this.geometryType = "point"),
      (this.capabilities = x(!1, !1)),
      (this.delimiter = null),
      (this.editingEnabled = !1),
      (this.fields = null),
      (this.latitudeField = null),
      (this.locationType = "coordinates"),
      (this.longitudeField = null),
      (this.operationalLayerType = "CSV"),
      (this.outFields = ["*"]),
      (this.path = null),
      (this.spatialReference = C.WGS84),
      (this.source = null),
      (this.type = "csv");
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  load(e) {
    const t = p(e) ? e.signal : null,
      s = this.loadFromPortal({ supportedTypes: ["CSV"], supportsData: !1 }, e)
        .catch(P)
        .then(async () =>
          this.initLayerProperties(await this.createGraphicsSource(t))
        );
    return this.addResolvingPromise(s), Promise.resolve(this);
  }
  get isTable() {
    return this.loaded && this.geometryType == null;
  }
  readWebMapLabelsVisible(e, t) {
    return t.showLabels != null
      ? t.showLabels
      : !!(
          t.layerDefinition &&
          t.layerDefinition.drawingInfo &&
          t.layerDefinition.drawingInfo.labelingInfo
        );
  }
  set url(e) {
    if (!e) return void this._set("url", e);
    const t = j(e);
    this._set("url", t.path),
      t.query &&
        (this.customParameters = { ...this.customParameters, ...t.query });
  }
  async createGraphicsSource(e) {
    const t = new n({
      loadOptions: {
        delimiter: this.delimiter,
        fields: this.fields,
        latitudeField: this.latitudeField ?? void 0,
        longitudeField: this.longitudeField ?? void 0,
        spatialReference: this.spatialReference ?? void 0,
        timeInfo: this.timeInfo ?? void 0,
        url: this.url,
      },
      customParameters: this.customParameters ?? void 0,
    });
    return (
      this._set("source", t),
      await t.load({ signal: e }),
      this.read(
        { locationInfo: t.locationInfo, columnDelimiter: t.delimiter },
        { origin: "service", url: this.parsedUrl }
      ),
      t
    );
  }
  queryFeatures(e, t) {
    return this.load()
      .then(() => this.source.queryFeatures(l.from(e) || this.createQuery()))
      .then((s) => {
        if (s != null && s.features)
          for (const a of s.features) a.layer = a.sourceLayer = this;
        return s;
      });
  }
  queryObjectIds(e, t) {
    return this.load().then(() =>
      this.source.queryObjectIds(l.from(e) || this.createQuery())
    );
  }
  queryFeatureCount(e, t) {
    return this.load().then(() =>
      this.source.queryFeatureCount(l.from(e) || this.createQuery())
    );
  }
  queryExtent(e, t) {
    return this.load().then(() =>
      this.source.queryExtent(l.from(e) || this.createQuery())
    );
  }
  read(e, t) {
    super.read(e, t),
      t &&
        t.origin === "service" &&
        this.revert(["latitudeField", "longitudeField"], "service");
  }
  write(e, t) {
    return super.write(e, { ...t, writeLayerSchema: !0 });
  }
  clone() {
    throw new m(
      "csv-layer:clone",
      `CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`
    );
  }
  async save(e) {
    return h(this, "csv-layer:save");
  }
  async saveAs(e, t) {
    return h(this, "csv-layer:save-as");
  }
  async hasDataChanged() {
    try {
      const { dataChanged: e, updates: t } = await this.source.refresh(
        this.customParameters
      );
      return (
        p(t) &&
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
  _verifyFields() {}
  _verifySource() {}
  _hasMemorySource() {
    return !1;
  }
};
i(
  [r({ readOnly: !0, json: { read: !1, write: !1 } })],
  o.prototype,
  "capabilities",
  void 0
),
  i(
    [
      r({
        type: [",", " ", ";", "|", "	"],
        json: {
          read: { source: "columnDelimiter" },
          write: { target: "columnDelimiter", ignoreOrigin: !0 },
        },
      }),
    ],
    o.prototype,
    "delimiter",
    void 0
  ),
  i(
    [
      r({
        readOnly: !0,
        type: Boolean,
        json: { origins: { "web-scene": { read: !1, write: !1 } } },
      }),
    ],
    o.prototype,
    "editingEnabled",
    void 0
  ),
  i(
    [
      r({
        json: {
          read: { source: "layerDefinition.fields" },
          write: { target: "layerDefinition.fields" },
        },
      }),
    ],
    o.prototype,
    "fields",
    void 0
  ),
  i([r({ type: Boolean, readOnly: !0 })], o.prototype, "isTable", null),
  i(
    [
      q("web-map", "labelsVisible", [
        "layerDefinition.drawingInfo.labelingInfo",
        "showLabels",
      ]),
    ],
    o.prototype,
    "readWebMapLabelsVisible",
    null
  ),
  i(
    [
      r({
        type: String,
        json: {
          read: { source: "locationInfo.latitudeFieldName" },
          write: { target: "locationInfo.latitudeFieldName", ignoreOrigin: !0 },
        },
      }),
    ],
    o.prototype,
    "latitudeField",
    void 0
  ),
  i([r({ type: ["show", "hide"] })], o.prototype, "listMode", void 0),
  i(
    [
      r({
        type: ["coordinates"],
        json: {
          read: { source: "locationInfo.locationType" },
          write: {
            target: "locationInfo.locationType",
            ignoreOrigin: !0,
            isRequired: !0,
          },
        },
      }),
    ],
    o.prototype,
    "locationType",
    void 0
  ),
  i(
    [
      r({
        type: String,
        json: {
          read: { source: "locationInfo.longitudeFieldName" },
          write: {
            target: "locationInfo.longitudeFieldName",
            ignoreOrigin: !0,
          },
        },
      }),
    ],
    o.prototype,
    "longitudeField",
    void 0
  ),
  i([r({ type: ["CSV"] })], o.prototype, "operationalLayerType", void 0),
  i([r()], o.prototype, "outFields", void 0),
  i(
    [
      r({
        type: String,
        json: {
          origins: { "web-scene": { read: !1, write: !1 } },
          read: !1,
          write: !1,
        },
      }),
    ],
    o.prototype,
    "path",
    void 0
  ),
  i(
    [r({ json: { read: !1 }, cast: null, type: n, readOnly: !0 })],
    o.prototype,
    "source",
    void 0
  ),
  i(
    [r({ json: { read: !1 }, value: "csv", readOnly: !0 })],
    o.prototype,
    "type",
    void 0
  ),
  i(
    [
      r({
        json: {
          read: N,
          write: { isRequired: !0, ignoreOrigin: !0, writer: _ },
        },
      }),
    ],
    o.prototype,
    "url",
    null
  ),
  (o = i([y("esri.layers.CSVLayer")], o));
const $ = o;
export { $ as default };
