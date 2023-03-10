import {
  ae as s,
  af as o,
  ag as P,
  i3 as N,
  ah as H,
  t as Z,
  aH as w,
  r as I,
  dn as J,
  s as b,
  iA as U,
  iT as z,
  iU as V,
  iV as W,
  im as k,
  iS as $,
  iW as K,
  io as X,
  et as Y,
  eu as ee,
  ip as te,
  ev as se,
  iX as F,
  it as re,
  av as O,
  iY as oe,
  iD as ie,
  gr as ae,
  ar as ne,
  ha as T,
  i_ as pe,
  i$ as le,
  iZ as ue,
  j0 as de,
  iv as ce,
  ai as ye,
  j2 as he,
  iu as fe,
  j3 as me,
  j5 as ge,
  ey as ve,
  iw as Se,
  db as we,
} from "./index.8fd7165c.js";
import {
  N as xe,
  F as j,
  v as D,
  x as Ce,
  k as Re,
  T as Ie,
  S as be,
  I as Fe,
  j as Oe,
} from "./ogcFeatureUtils.da37da08.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./geojson.96c8477e.js";
import "./clientSideDefaults.4b2f5b2f.js";
import "./QueryEngineCapabilities.42e44ded.js";
let d = class extends N {
  constructor() {
    super(...arguments),
      (this.featureDefinition = null),
      (this.type = "ogc-feature");
  }
  load(e) {
    return (
      this.addResolvingPromise(this._loadOGCServices(this.layer, e)),
      this.when()
    );
  }
  getSource() {
    const {
      featureDefinition: {
        collection: e,
        layerDefinition: t,
        spatialReference: i,
        supportedCrs: a,
      },
      layer: { apiKey: n, customParameters: l, effectiveMaxRecordCount: p },
    } = this;
    return {
      type: "ogc-source",
      collection: e,
      layerDefinition: t,
      maxRecordCount: p,
      queryParameters: { apiKey: n, customParameters: l },
      spatialReference: i,
      supportedCrs: a,
    };
  }
  queryExtent(e, t = {}) {
    return null;
  }
  queryFeatureCount(e, t = {}) {
    return null;
  }
  queryFeatures(e, t = {}) {
    return this.queryFeaturesJSON(e, t).then((i) => H.fromJSON(i));
  }
  queryFeaturesJSON(e, t = {}) {
    const i = this.getSource();
    return this.load(t).then(() => xe(i, e, t));
  }
  queryObjectIds(e, t = {}) {
    return null;
  }
  serviceSupportsSpatialReference(e) {
    return (
      !(!e.isWGS84 && !e.isWebMercator) ||
      !!this.featureDefinition.supportedCrs[e.wkid]
    );
  }
  _conformsToType(e, t) {
    const i = new RegExp(`^${t}$`, "i");
    return e.conformsTo.some((a) => i.test(a)) ?? !1;
  }
  _getCapabilities(e, t) {
    return {
      analytics: { supportsCacheHint: !1 },
      attachment: null,
      data: {
        isVersioned: !1,
        supportsAttachment: !1,
        supportsM: !1,
        supportsZ: e,
      },
      metadata: { supportsAdvancedFieldProperties: !1 },
      operations: {
        supportsCalculate: !1,
        supportsTruncate: !1,
        supportsValidateSql: !1,
        supportsAdd: !1,
        supportsDelete: !1,
        supportsEditing: !1,
        supportsChangeTracking: !1,
        supportsQuery: !1,
        supportsQueryAnalytics: !1,
        supportsQueryAttachments: !1,
        supportsQueryTopFeatures: !1,
        supportsResizeAttachments: !1,
        supportsSync: !1,
        supportsUpdate: !1,
        supportsExceedsLimitStatistics: !1,
      },
      query: {
        maxRecordCount: t,
        maxRecordCountFactor: void 0,
        standardMaxRecordCount: void 0,
        supportsCacheHint: !1,
        supportsCentroid: !1,
        supportsDisjointSpatialRelationship: !1,
        supportsDistance: !1,
        supportsDistinct: !1,
        supportsExtent: !1,
        supportsFormatPBF: !1,
        supportsGeometryProperties: !1,
        supportsHavingClause: !1,
        supportsHistoricMoment: !1,
        supportsMaxRecordCountFactor: !1,
        supportsOrderBy: !1,
        supportsPagination: !1,
        supportsPercentileStatistics: !1,
        supportsQuantization: !1,
        supportsQuantizationEditMode: !1,
        supportsQueryByOthers: !1,
        supportsQueryGeometry: !1,
        supportsResultType: !1,
        supportsStandardizedQueriesOnly: !1,
        supportsTopFeaturesQuery: !1,
        supportsStatistics: !1,
        supportsSpatialAggregationStatistics: !1,
        supportedSpatialAggregationStatistics: {
          envelope: !1,
          centroid: !1,
          convexHull: !1,
        },
        supportsDefaultSpatialReference: !1,
        supportsFullTextSearch: !1,
        supportsCompactGeometry: !1,
        supportsSqlExpression: !1,
        tileMaxRecordCount: void 0,
      },
      queryRelated: {
        supportsCount: !1,
        supportsOrderBy: !1,
        supportsPagination: !1,
        supportsCacheHint: !1,
      },
      queryTopFeatures: { supportsCacheHint: !1 },
      editing: {
        supportsDeleteByAnonymous: !1,
        supportsDeleteByOthers: !1,
        supportsGeometryUpdate: !1,
        supportsGlobalId: !1,
        supportsReturnServiceEditsInSourceSpatialReference: !1,
        supportsRollbackOnFailure: !1,
        supportsUpdateByAnonymous: !1,
        supportsUpdateByOthers: !1,
        supportsUploadWithItemId: !1,
        supportsUpdateWithoutM: !1,
      },
    };
  }
  _getMaxRecordCount(e) {
    var i, a, n, l, p;
    const t =
      (i = e == null ? void 0 : e.components) == null ? void 0 : i.parameters;
    return (
      ((n = (a = t == null ? void 0 : t.limit) == null ? void 0 : a.schema) ==
      null
        ? void 0
        : n.maximum) ??
      ((p =
        (l = t == null ? void 0 : t.limitFeatures) == null
          ? void 0
          : l.schema) == null
        ? void 0
        : p.maximum)
    );
  }
  _getStorageSpatialReference(e) {
    const t = e.storageCrs ?? j,
      i = D(t);
    return Z(i) ? w.WGS84 : new w({ wkid: i });
  }
  _getSupportedSpatialReferences(e, t) {
    const i = "#/crs",
      a = e.crs ?? [j],
      n = a.includes(i) ? a.filter((p) => p !== i).concat(t.crs ?? []) : a,
      l = /^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;
    return n.filter((p) => !l.test(p));
  }
  async _loadOGCServices(e, t) {
    const i = I(t) ? t.signal : null,
      {
        apiKey: a,
        collectionId: n,
        customParameters: l,
        fields: p,
        geometryType: h,
        hasZ: f,
        objectIdField: _,
        timeInfo: m,
        url: E,
      } = e,
      q = {
        fields: p == null ? void 0 : p.map((u) => u.toJSON()),
        geometryType: J.toJSON(h),
        hasZ: f ?? !1,
        objectIdField: _,
        timeInfo: m == null ? void 0 : m.toJSON(),
      },
      c = { apiKey: a, customParameters: l, signal: i },
      g = await Ce(E, c),
      [x, C] = await Promise.all([Re(g, c), Ie(g, c)]);
    if (
      !this._conformsToType(
        x,
        "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"
      )
    )
      throw new b(
        "ogc-feature-layer:no-geojson-support",
        "Server does not support geojson"
      );
    const y = C.collections.find((u) => u.id === n);
    if (!y)
      throw new b(
        "ogc-feature-layer:collection-not-found",
        "Server does not contain the named collection"
      );
    const G = this._conformsToType(
        x,
        "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30"
      )
        ? await be(g, c)
        : null,
      R = await Fe(y, q, c),
      M = this._getMaxRecordCount(G),
      Q = this._getCapabilities(R.hasZ, M),
      A = this._getStorageSpatialReference(y).toJSON(),
      B = this._getSupportedSpatialReferences(y, C),
      L = new RegExp(`^${Oe}`, "i"),
      v = {};
    for (const u of B) {
      const S = D(u);
      I(S) && (v[S] || (v[S] = u.replace(L, "")));
    }
    this.featureDefinition = {
      capabilities: Q,
      collection: y,
      layerDefinition: R,
      spatialReference: A,
      supportedCrs: v,
    };
  }
};
s([o()], d.prototype, "featureDefinition", void 0),
  s([o({ constructOnly: !0 })], d.prototype, "layer", void 0),
  s([o()], d.prototype, "type", void 0),
  (d = s([P("esri.layers.graphics.sources.OGCFeatureSource")], d));
const Te = Se();
let r = class extends U(z(V(W(k($(K(X(Y(ee(te(se(we)))))))))))) {
  constructor(e) {
    super(e),
      (this.capabilities = null),
      (this.collectionId = null),
      (this.copyright = null),
      (this.definitionExpression = null),
      (this.description = null),
      (this.displayField = null),
      (this.elevationInfo = null),
      (this.fields = null),
      (this.fieldsIndex = null),
      (this.fullExtent = null),
      (this.geometryType = null),
      (this.hasZ = void 0),
      (this.labelingInfo = null),
      (this.labelsVisible = !0),
      (this.legendEnabled = !0),
      (this.maxRecordCount = null),
      (this.objectIdField = null),
      (this.operationalLayerType = "OGCFeatureLayer"),
      (this.popupEnabled = !0),
      (this.popupTemplate = null),
      (this.screenSizePerspectiveEnabled = !0),
      (this.source = new d({ layer: this })),
      (this.spatialReference = null),
      (this.title = null),
      (this.type = "ogc-feature"),
      (this.typeIdField = null),
      (this.types = null),
      (this.url = null);
  }
  destroy() {
    var e;
    (e = this.source) == null || e.destroy();
  }
  load(e) {
    return (
      this.addResolvingPromise(
        this.loadFromPortal({ supportedTypes: ["OGCFeatureServer"] }, e).then(
          () => this._fetchService(e)
        )
      ),
      this.when()
    );
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get effectiveMaxRecordCount() {
    var e;
    return (
      this.maxRecordCount ??
      ((e = this.capabilities) == null ? void 0 : e.query.maxRecordCount) ??
      5e3
    );
  }
  get isTable() {
    return this.loaded && this.geometryType == null;
  }
  set renderer(e) {
    F(e, this.fieldsIndex), this._set("renderer", e);
  }
  on(e, t) {
    return super.on(e, t);
  }
  createPopupTemplate(e) {
    return re(this, e);
  }
  createQuery() {
    return new O();
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFieldDomain(e, t) {
    var p;
    let i,
      a = !1;
    const n =
        (p = t == null ? void 0 : t.feature) == null ? void 0 : p.attributes,
      l = this.typeIdField && (n == null ? void 0 : n[this.typeIdField]);
    return (
      l != null &&
        this.types &&
        (a = this.types.some((h) => {
          var f;
          return (
            h.id == l &&
            ((i = (f = h.domains) == null ? void 0 : f[e]),
            (i == null ? void 0 : i.type) === "inherited" &&
              (i = this._getLayerDomain(e)),
            !0)
          );
        })),
      a || i || (i = this._getLayerDomain(e)),
      i
    );
  }
  queryFeatures(e, t) {
    return this.load()
      .then(() => this.source.queryFeatures(O.from(e) || this.createQuery(), t))
      .then((i) => {
        var a;
        return (
          (a = i == null ? void 0 : i.features) == null ||
            a.forEach((n) => {
              n.layer = n.sourceLayer = this;
            }),
          i
        );
      });
  }
  serviceSupportsSpatialReference(e) {
    var t;
    return (
      ((t = this.source) == null
        ? void 0
        : t.serviceSupportsSpatialReference(e)) ?? !1
    );
  }
  async _fetchService(e) {
    await this.source.load(e),
      this.read(this.source.featureDefinition, { origin: "service" }),
      F(this.renderer, this.fieldsIndex),
      oe(this.timeInfo, this.fieldsIndex);
  }
  _getLayerDomain(e) {
    if (!this.fields) return null;
    for (const t of this.fields) if (t.name === e && t.domain) return t.domain;
    return null;
  }
};
s(
  [o({ readOnly: !0, json: { origins: { service: { read: !0 } } } })],
  r.prototype,
  "capabilities",
  void 0
),
  s(
    [o({ type: String, json: { write: !0 } })],
    r.prototype,
    "collectionId",
    void 0
  ),
  s([o({ type: String })], r.prototype, "copyright", void 0),
  s([o({ readOnly: !0 })], r.prototype, "defaultPopupTemplate", null),
  s([o({ type: String })], r.prototype, "definitionExpression", void 0),
  s(
    [
      o({
        readOnly: !0,
        type: String,
        json: { origins: { service: { name: "collection.description" } } },
      }),
    ],
    r.prototype,
    "description",
    void 0
  ),
  s([o({ type: String })], r.prototype, "displayField", void 0),
  s([o({ type: Number })], r.prototype, "effectiveMaxRecordCount", null),
  s([o(ie)], r.prototype, "elevationInfo", void 0),
  s(
    [
      o({
        type: [ae],
        json: { origins: { service: { name: "layerDefinition.fields" } } },
      }),
    ],
    r.prototype,
    "fields",
    void 0
  ),
  s([o(Te.fieldsIndex)], r.prototype, "fieldsIndex", void 0),
  s(
    [
      o({
        readOnly: !0,
        type: ne,
        json: { origins: { service: { name: "layerDefinition.extent" } } },
      }),
    ],
    r.prototype,
    "fullExtent",
    void 0
  ),
  s(
    [
      o({
        type: T.apiValues,
        json: {
          origins: {
            service: {
              name: "layerDefinition.geometryType",
              read: { reader: T.read },
            },
          },
        },
      }),
    ],
    r.prototype,
    "geometryType",
    void 0
  ),
  s(
    [
      o({
        type: Boolean,
        json: { origins: { service: { name: "layerDefinition.hasZ" } } },
      }),
    ],
    r.prototype,
    "hasZ",
    void 0
  ),
  s([o({ type: Boolean, readOnly: !0 })], r.prototype, "isTable", null),
  s(
    [
      o({
        type: [pe],
        json: {
          origins: {
            "web-document": {
              name: "layerDefinition.drawingInfo.labelingInfo",
              read: { reader: le },
              write: !0,
            },
          },
        },
      }),
    ],
    r.prototype,
    "labelingInfo",
    void 0
  ),
  s([o(ue)], r.prototype, "labelsVisible", void 0),
  s([o(de)], r.prototype, "legendEnabled", void 0),
  s([o({ type: Number })], r.prototype, "maxRecordCount", void 0),
  s(
    [
      o({
        type: String,
        json: {
          origins: { service: { name: "layerDefinition.objectIdField" } },
        },
      }),
    ],
    r.prototype,
    "objectIdField",
    void 0
  ),
  s(
    [o({ type: ["OGCFeatureLayer"] })],
    r.prototype,
    "operationalLayerType",
    void 0
  ),
  s([o(ce)], r.prototype, "popupEnabled", void 0),
  s(
    [o({ type: ye, json: { name: "popupInfo", write: !0 } })],
    r.prototype,
    "popupTemplate",
    void 0
  ),
  s(
    [
      o({
        types: he,
        json: {
          origins: {
            service: {
              name: "layerDefinition.drawingInfo.renderer",
              write: !1,
            },
            "web-scene": {
              types: fe,
              name: "layerDefinition.drawingInfo.renderer",
              write: !0,
            },
          },
          name: "layerDefinition.drawingInfo.renderer",
          write: !0,
        },
      }),
    ],
    r.prototype,
    "renderer",
    null
  ),
  s([o(me)], r.prototype, "screenSizePerspectiveEnabled", void 0),
  s([o({ readOnly: !0 })], r.prototype, "source", void 0),
  s(
    [
      o({
        readOnly: !0,
        type: w,
        json: { origins: { service: { read: !0 } } },
      }),
    ],
    r.prototype,
    "spatialReference",
    void 0
  ),
  s(
    [
      o({
        type: String,
        json: {
          write: { enabled: !0, ignoreOrigin: !0, isRequired: !0 },
          origins: { service: { name: "collection.title" } },
        },
      }),
    ],
    r.prototype,
    "title",
    void 0
  ),
  s([o({ readOnly: !0, json: { read: !1 } })], r.prototype, "type", void 0),
  s([o({ type: String, readOnly: !0 })], r.prototype, "typeIdField", void 0),
  s([o({ type: [ge] })], r.prototype, "types", void 0),
  s([o(ve)], r.prototype, "url", void 0),
  (r = s([P("esri.layers.OGCFeatureLayer")], r));
const Ne = r;
export { Ne as default };
