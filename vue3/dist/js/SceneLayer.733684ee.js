import { q as $ } from "./Table.e9c997d5.js";
import {
  ae as r,
  af as o,
  ag as v,
  dd as R,
  iN as z,
  P as O,
  bn as L,
  dV as W,
  ix as _,
  jA as Z,
  dl as c,
  C as H,
  dg as B,
  an as X,
  cz as Y,
  t as f,
  U as N,
  eE as ee,
  bO as te,
  kb as se,
  es as re,
  et as ie,
  eu as oe,
  io as ae,
  ev as ne,
  iA as le,
  r as p,
  cV as pe,
  iX as E,
  kc as de,
  Q as u,
  a2 as ye,
  N as ue,
  av as ce,
  dF as he,
  s as d,
  al as fe,
  it as me,
  eD as ge,
  jf as ve,
  dy as x,
  j as we,
  dS as be,
  kd as Ie,
  ke as Le,
  jV as Se,
  iD as Fe,
  iZ as je,
  i_ as Oe,
  i$ as T,
  j0 as _e,
  kf as Ee,
  iu as xe,
  iv as Te,
  ai as Ae,
  j3 as De,
  iw as Pe,
  db as Re,
} from "./index.8fd7165c.js";
import { E as Ne, L as A } from "./SceneService.7e40727d.js";
import {
  t as qe,
  u as Ue,
  l as Ce,
} from "./FetchAssociatedFeatureLayer.dc61c009.js";
import {
  s as q,
  l as Qe,
  u as ke,
  m as Ge,
} from "./I3SLayerDefinitions.a4a2a8df.js";
import { g as Ve } from "./persistable.2e5db5e6.js";
import { d as Je, s as Ke } from "./popupUtils.4682c28c.js";
import "./vue.a7ce1fbe.js";
import "./NvapForm.feb8550d.js";
import "./vue-i18n.67a42238.js";
import "./vue-router.805f6e2a.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./originUtils.cdead60a.js";
import "./multiOriginJSONSupportUtils.c978f4c3.js";
import "./resourceUtils.b249f31c.js";
import "./mat3f64.eb921732.js";
import "./mat4f64.b473928c.js";
import "./quat.17ee06b3.js";
import "./quatf64.75f9f553.js";
import "./I3SBinaryReader.a6d3df26.js";
import "./VertexAttribute.15d1866a.js";
import "./spatialReferenceEllipsoidUtils.0049fd16.js";
import "./symbolColorUtils.2420e89c.js";
import "./vec3f32.5805ce90.js";
import "./plane.6e2f7ea9.js";
import "./sphere.a87dd95a.js";
import "./resourceExtension.9b0d7459.js";
let y = class extends R {
  constructor() {
    super(...arguments),
      (this.name = null),
      (this.field = null),
      (this.currentRangeExtent = null),
      (this.fullRangeExtent = null),
      (this.type = "rangeInfo");
  }
};
var g;
r(
  [o({ type: String, json: { read: !0, write: !0 } })],
  y.prototype,
  "name",
  void 0
),
  r(
    [o({ type: String, json: { read: !0, write: !0 } })],
    y.prototype,
    "field",
    void 0
  ),
  r(
    [o({ type: [Number], json: { read: !0, write: !0 } })],
    y.prototype,
    "currentRangeExtent",
    void 0
  ),
  r(
    [o({ type: [Number], json: { read: !0, write: !0 } })],
    y.prototype,
    "fullRangeExtent",
    void 0
  ),
  r(
    [o({ type: ["rangeInfo"], readOnly: !0, json: { read: !1, write: !0 } })],
    y.prototype,
    "type",
    void 0
  ),
  (y = r([v("esri.layers.support.RangeInfo")], y));
let S = (g = class extends z(O.ofType(L)) {
  constructor(e) {
    super(e);
  }
  clone() {
    return new g(this.items.map((e) => e.clone()));
  }
  write(e, t) {
    return this.toJSON(t);
  }
  toJSON(e) {
    var s;
    const t =
      (s = e == null ? void 0 : e.layer) == null ? void 0 : s.spatialReference;
    return t
      ? this.toArray()
          .map((a) => {
            if (!t.equals(a.spatialReference)) {
              if (!W(a.spatialReference, t))
                return (
                  e &&
                    e.messages &&
                    e.messages.push(
                      new _(
                        "scenefilter:unsupported",
                        "Scene filters with incompatible spatial references are not supported",
                        {
                          modification: this,
                          spatialReference: e.layer.spatialReference,
                          context: e,
                        }
                      )
                    ),
                  null
                );
              const l = new L();
              Z(a, l, t), (a = l);
            }
            const n = a.toJSON(e);
            return delete n.spatialReference, n;
          })
          .filter((a) => a != null)
      : (e != null &&
          e.messages &&
          e.messages.push(
            new _(
              "scenefilter:unsupported",
              "Writing Scene filters without context layer is not supported",
              {
                modification: this,
                spatialReference: e.layer.spatialReference,
                context: e,
              }
            )
          ),
        this.toArray().map((a) => a.toJSON(e)));
  }
  static fromJSON(e, t) {
    const s = new g();
    return e.forEach((a) => s.add(L.fromJSON(a, t))), s;
  }
});
S = g = r([v("esri.layers.support.PolygonCollection")], S);
const F = S;
var j;
let h = (j = class extends R {
  constructor(e) {
    super(e),
      (this.spatialRelationship = "disjoint"),
      (this.geometries = new F()),
      (this._geometriesSource = null),
      (this._handles = new H());
  }
  initialize() {
    this._handles.add(
      B(
        () => this.geometries,
        "after-changes",
        () => (this.geometries = this.geometries),
        X
      )
    );
  }
  destroy() {
    this._handles.destroy();
  }
  readGeometries(e, t, s) {
    this._geometriesSource = { url: Y(e, s), context: s };
  }
  async loadGeometries(e, t) {
    if (f(this._geometriesSource)) return;
    const { url: s, context: a } = this._geometriesSource,
      n = await N(s, { responseType: "json", signal: ee(t, "signal") }),
      l = e.toJSON(),
      w = n.data.map((b) => ({ ...b, spatialReference: l }));
    (this.geometries = F.fromJSON(w, a)), (this._geometriesSource = null);
  }
  clone() {
    return new j({
      geometries: te(this.geometries),
      spatialRelationship: this.spatialRelationship,
    });
  }
});
r(
  [o({ type: ["disjoint", "contains"], nonNullable: !0, json: { write: !0 } })],
  h.prototype,
  "spatialRelationship",
  void 0
),
  r(
    [
      o({ type: F, nonNullable: !0, json: { write: !0 } }),
      Ve({
        origins: ["web-scene", "portal-item"],
        type: "resource",
        prefix: "geometries",
      }),
    ],
    h.prototype,
    "geometries",
    void 0
  ),
  r(
    [c(["web-scene", "portal-item"], "geometries")],
    h.prototype,
    "readGeometries",
    null
  ),
  (h = j = r([v("esri.layers.support.SceneFilter")], h));
const Me = h,
  $e = ["3DObject", "Point"],
  D = Pe();
let i = class extends se(Ne(re(ie(oe(ae(ne(le(Re)))))))) {
  constructor(...e) {
    super(...e),
      (this.featureReduction = null),
      (this.rangeInfos = null),
      (this.operationalLayerType = "ArcGISSceneServiceLayer"),
      (this.type = "scene"),
      (this.fields = null),
      (this.floorInfo = null),
      (this.outFields = null),
      (this.nodePages = null),
      (this.materialDefinitions = null),
      (this.textureSetDefinitions = null),
      (this.geometryDefinitions = null),
      (this.serviceUpdateTimeStamp = null),
      (this.excludeObjectIds = new O()),
      (this.definitionExpression = null),
      (this.filter = null),
      (this.path = null),
      (this.labelsVisible = !0),
      (this.labelingInfo = null),
      (this.legendEnabled = !0),
      (this.priority = null),
      (this.semantic = null),
      (this.cachedDrawingInfo = { color: !1 }),
      (this.popupEnabled = !0),
      (this.popupTemplate = null),
      (this.objectIdField = null),
      (this.globalIdField = null),
      (this._fieldUsageInfo = {}),
      (this.screenSizePerspectiveEnabled = !0);
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFieldDomain(e, t) {
    var a, n, l;
    const s =
      (n =
        (a = this.getFeatureType(t == null ? void 0 : t.feature)) == null
          ? void 0
          : a.domains) == null
        ? void 0
        : n[e];
    return s && s.type !== "inherited"
      ? s
      : ((l = this.getField(e)) == null ? void 0 : l.domain) ?? null;
  }
  getFeatureType(e) {
    return e != null && p(this.associatedLayer)
      ? this.associatedLayer.getFeatureType(e)
      : null;
  }
  get types() {
    return p(this.associatedLayer) ? this.associatedLayer.types ?? [] : [];
  }
  get typeIdField() {
    return p(this.associatedLayer) ? this.associatedLayer.typeIdField : null;
  }
  get formTemplate() {
    return p(this.associatedLayer) ? this.associatedLayer.formTemplate : null;
  }
  get fieldsIndex() {
    return new pe(this.fields);
  }
  readNodePages(e, t, s) {
    return (
      t.layerType === "Point" && (e = t.pointNodePages),
      e == null || typeof e != "object" ? null : q.fromJSON(e, s)
    );
  }
  set elevationInfo(e) {
    this._set("elevationInfo", e), this.loaded && this._validateElevationInfo();
  }
  get geometryType() {
    return ze[this.profile] || "mesh";
  }
  set renderer(e) {
    E(e, this.fieldsIndex), this._set("renderer", e);
  }
  readCachedDrawingInfo(e) {
    return (
      (e != null && typeof e == "object") || (e = {}),
      e.color == null && (e.color = !1),
      e
    );
  }
  get capabilities() {
    const e =
        p(this.associatedLayer) && this.associatedLayer.capabilities
          ? this.associatedLayer.capabilities
          : qe,
      {
        query: t,
        editing: {
          supportsGlobalId: s,
          supportsRollbackOnFailure: a,
          supportsUploadWithItemId: n,
          supportsGeometryUpdate: l,
          supportsReturnServiceEditsInSourceSpatialReference: w,
        },
        data: {
          supportsZ: b,
          supportsM: U,
          isVersioned: C,
          supportsAttachment: Q,
        },
        operations: {
          supportsEditing: k,
          supportsAdd: G,
          supportsUpdate: V,
          supportsDelete: J,
          supportsQuery: K,
          supportsQueryAttachments: M,
        },
      } = e,
      m = e.operations.supportsChangeTracking,
      I = p(this.associatedLayer) && p(this.associatedLayer.infoFor3D) && de();
    return {
      query: t,
      editing: {
        supportsGlobalId: s,
        supportsReturnServiceEditsInSourceSpatialReference: w,
        supportsRollbackOnFailure: a,
        supportsGeometryUpdate: I && l,
        supportsUploadWithItemId: n,
      },
      data: {
        supportsAttachment: Q,
        supportsZ: b,
        supportsM: U,
        isVersioned: C,
      },
      operations: {
        supportsQuery: K,
        supportsQueryAttachments: M,
        supportsEditing: k && m,
        supportsAdd: I && G && m,
        supportsDelete: I && J && m,
        supportsUpdate: V && m,
      },
    };
  }
  get editingEnabled() {
    return this._isOverridden("editingEnabled")
      ? this._get("editingEnabled")
      : this.userHasEditingPrivileges;
  }
  set editingEnabled(e) {
    this._overrideIfSome("editingEnabled", e);
  }
  get infoFor3D() {
    return p(this.associatedLayer) ? this.associatedLayer.infoFor3D : null;
  }
  get defaultPopupTemplate() {
    return p(this.associatedLayer) || this.attributeStorageInfo
      ? this.createPopupTemplate()
      : null;
  }
  readObjectIdField(e, t) {
    return (
      !e &&
        t.fields &&
        t.fields.some(
          (s) => (s.type === "esriFieldTypeOID" && (e = s.name), !!e)
        ),
      e || void 0
    );
  }
  readGlobalIdField(e, t) {
    return (
      !e &&
        t.fields &&
        t.fields.some(
          (s) => (s.type === "esriFieldTypeGlobalID" && (e = s.name), !!e)
        ),
      e || void 0
    );
  }
  get displayField() {
    return p(this.associatedLayer) ? this.associatedLayer.displayField : null;
  }
  readProfile(e, t) {
    const s = t.store.profile;
    return s != null && P[s]
      ? P[s]
      : (u
          .getLogger(this.declaredClass)
          .error("Unknown or missing profile", { profile: s, layer: this }),
        "mesh-pyramids");
  }
  load(e) {
    const t = p(e) ? e.signal : null,
      s = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e)
        .catch(ye)
        .then(() => this._fetchService(t))
        .then(() =>
          Promise.all([
            this._fetchIndexAndUpdateExtent(this.nodePages, t),
            this._setAssociatedFeatureLayer(t),
            p(this.filter)
              ? this.filter.loadGeometries(this.spatialReference)
              : null,
          ])
        )
        .then(() => this._validateElevationInfo())
        .then(() => this._applyAssociatedLayerOverrides())
        .then(() => this._populateFieldUsageInfo())
        .then(() => ue(this, { origin: "service" }, t))
        .then(() => E(this.renderer, this.fieldsIndex))
        .then(() => this.finishLoadEditablePortalLayer(e));
    return this.addResolvingPromise(s), Promise.resolve(this);
  }
  async beforeSave() {
    p(this.filter) && (await this.load());
  }
  createQuery() {
    const e = new ce();
    return (
      this.geometryType !== "mesh" &&
        ((e.returnGeometry = !0), (e.returnZ = !0)),
      (e.where = this.definitionExpression || "1=1"),
      (e.sqlFormat = "standard"),
      (e.outFields = ["*"]),
      e
    );
  }
  queryExtent(e, t) {
    return this._getAssociatedLayerForQuery().then((s) =>
      s.queryExtent(e || this.createQuery(), t)
    );
  }
  queryFeatureCount(e, t) {
    return this._getAssociatedLayerForQuery().then((s) =>
      s.queryFeatureCount(e || this.createQuery(), t)
    );
  }
  queryFeatures(e, t) {
    return this._getAssociatedLayerForQuery()
      .then((s) => s.queryFeatures(e || this.createQuery(), t))
      .then((s) => {
        if (s != null && s.features)
          for (const a of s.features) (a.layer = this), (a.sourceLayer = this);
        return s;
      });
  }
  async queryCachedAttributes(e, t) {
    const s = he(this.fieldsIndex, await Je(this, Ke(this)));
    return Ue(this.parsedUrl.path, this.attributeStorageInfo ?? [], e, t, s);
  }
  async queryCachedFeature(e, t) {
    const s = await this.queryCachedAttributes(e, [t]);
    if (!s || s.length === 0)
      throw new d(
        "scenelayer:feature-not-in-cached-data",
        "Feature not found in cached data"
      );
    const a = new fe();
    return (a.attributes = s[0]), (a.layer = this), (a.sourceLayer = this), a;
  }
  queryObjectIds(e, t) {
    return this._getAssociatedLayerForQuery().then((s) =>
      s.queryObjectIds(e || this.createQuery(), t)
    );
  }
  queryAttachments(e, t) {
    return this._getAssociatedLayerForQuery().then((s) =>
      s.queryAttachments(e, t)
    );
  }
  getFieldUsageInfo(e) {
    const t = {
      supportsLabelingInfo: !1,
      supportsRenderer: !1,
      supportsPopupTemplate: !1,
      supportsLayerQuery: !1,
    };
    return this.loaded
      ? this._fieldUsageInfo[e] || t
      : (u
          .getLogger(this.declaredClass)
          .error("#getFieldUsageInfo()", "Unavailable until layer is loaded"),
        t);
  }
  createPopupTemplate(e) {
    return me(this, e);
  }
  _getAssociatedLayerForQuery() {
    const e = this.associatedLayer;
    return p(e) && e.loaded
      ? Promise.resolve(e)
      : this._loadAssociatedLayerForQuery();
  }
  async _loadAssociatedLayerForQuery() {
    if ((await this.load(), f(this.associatedLayer)))
      throw new d(
        "scenelayer:query-not-available",
        "SceneLayer queries are not available without an associated feature layer",
        { layer: this }
      );
    try {
      await this.associatedLayer.load();
    } catch (e) {
      throw new d(
        "scenelayer:query-not-available",
        "SceneLayer associated feature layer could not be loaded",
        { layer: this, error: e }
      );
    }
    return this.associatedLayer;
  }
  hasCachedStatistics(e) {
    return (
      this.statisticsInfo != null &&
      this.statisticsInfo.some((t) => t.name === e)
    );
  }
  async queryCachedStatistics(e, t) {
    if ((await this.load(t), !this.statisticsInfo))
      throw new d(
        "scenelayer:no-cached-statistics",
        "Cached statistics are not available for this layer"
      );
    const s = this.fieldsIndex.get(e);
    if (!s)
      throw new d(
        "scenelayer:field-unexisting",
        `Field '${e}' does not exist on the layer`
      );
    for (const a of this.statisticsInfo)
      if (a.name === s.name) {
        const n = ge(this.parsedUrl.path, a.href);
        return N(n, {
          query: { f: "json", token: this.apiKey },
          responseType: "json",
          signal: t ? t.signal : null,
        }).then((l) => l.data);
      }
    throw new d(
      "scenelayer:no-cached-statistics",
      "Cached statistics for this attribute are not available"
    );
  }
  async saveAs(e, t) {
    return this._debouncedSaveOperations(
      A.SAVE_AS,
      {
        ...t,
        getTypeKeywords: () => this._getTypeKeywords(),
        portalItemLayerType: "scene",
      },
      e
    );
  }
  async save() {
    const e = {
      getTypeKeywords: () => this._getTypeKeywords(),
      portalItemLayerType: "scene",
    };
    return this._debouncedSaveOperations(A.SAVE, e);
  }
  async applyEdits(e, t) {
    const s = await $(
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
    if ((await this.load(), f(this.associatedLayer)))
      throw new d(`${this.type}-layer:not-editable`, "Service is not editable");
    return (
      await this.associatedLayer.load(),
      s.applyEdits(this, this.associatedLayer.source, e, t)
    );
  }
  on(e, t) {
    return super.on(e, t);
  }
  validateLayer(e) {
    if (e.layerType && !$e.includes(e.layerType))
      throw new d(
        "scenelayer:layer-type-not-supported",
        "SceneLayer does not support this layer type",
        { layerType: e.layerType }
      );
    if (isNaN(this.version.major) || isNaN(this.version.minor))
      throw new d(
        "layer:service-version-not-supported",
        "Service version is not supported.",
        {
          serviceVersion: this.version.versionString,
          supportedVersions: "1.x, 2.x",
        }
      );
    if (this.version.major > 2)
      throw new d(
        "layer:service-version-too-new",
        "Service version is too new.",
        {
          serviceVersion: this.version.versionString,
          supportedVersions: "1.x, 2.x",
        }
      );
    (function (t, s) {
      let a = !1,
        n = !1;
      if (t == null) (a = !0), (n = !0);
      else {
        const l = s && s.isGeographic;
        switch (t) {
          case "east-north-up":
          case "earth-centered":
            (a = !0), (n = l);
            break;
          case "vertex-reference-frame":
            (a = !0), (n = !l);
            break;
          default:
            a = !1;
        }
      }
      if (!a)
        throw new d(
          "scenelayer:unsupported-normal-reference-frame",
          "Normal reference frame is invalid."
        );
      if (!n)
        throw new d(
          "scenelayer:incompatible-normal-reference-frame",
          "Normal reference frame is incompatible with layer spatial reference."
        );
    })(this.normalReferenceFrame, this.spatialReference);
  }
  _getTypeKeywords() {
    const e = [];
    if (this.profile === "points") e.push("Point");
    else {
      if (this.profile !== "mesh-pyramids")
        throw new d(
          "scenelayer:unknown-profile",
          "SceneLayer:save() encountered an unknown SceneLayer profile: " +
            this.profile
        );
      e.push("3DObject");
    }
    return e;
  }
  _populateFieldUsageInfo() {
    if (((this._fieldUsageInfo = {}), this.fields))
      for (const e of this.fields) {
        const t = !(
            !this.attributeStorageInfo ||
            !this.attributeStorageInfo.some((n) => n.name === e.name)
          ),
          s = !!(
            p(this.associatedLayer) &&
            this.associatedLayer.fields &&
            this.associatedLayer.fields.some((n) => n && e.name === n.name)
          ),
          a = {
            supportsLabelingInfo: t,
            supportsRenderer: t,
            supportsPopupTemplate: t || s,
            supportsLayerQuery: s,
          };
        this._fieldUsageInfo[e.name] = a;
      }
  }
  _applyAssociatedLayerOverrides() {
    this._applyAssociatedLayerFieldsOverrides(),
      this._applyAssociatedLayerPopupOverrides();
  }
  _applyAssociatedLayerFieldsOverrides() {
    if (f(this.associatedLayer) || !this.associatedLayer.fields) return;
    let e = null;
    for (const t of this.associatedLayer.fields) {
      const s = this.getField(t.name);
      s
        ? (!s.domain && t.domain && (s.domain = t.domain.clone()),
          (s.editable = t.editable),
          (s.nullable = t.nullable),
          (s.length = t.length))
        : (e || (e = this.fields ? this.fields.slice() : []),
          e.push(t.clone()));
    }
    e && this._set("fields", e);
  }
  _applyAssociatedLayerPopupOverrides() {
    if (f(this.associatedLayer)) return;
    const e = ["popupTemplate", "popupEnabled"],
      t = ve(this);
    for (let s = 0; s < e.length; s++) {
      const a = e[s],
        n = this.originIdOf(a),
        l = this.associatedLayer.originIdOf(a);
      n < l &&
        (l === x.SERVICE || l === x.PORTAL_ITEM) &&
        t.setAtOrigin(a, this.associatedLayer[a], l);
    }
  }
  async _setAssociatedFeatureLayer(e) {
    if (!["mesh-pyramids", "points"].includes(this.profile)) return;
    const t = new Ce(this.parsedUrl, this.portalItem, this.apiKey, e);
    try {
      this.associatedLayer = await t.fetch();
    } catch (s) {
      we(s) || this._logWarningOnPopupEnabled();
    }
  }
  async _logWarningOnPopupEnabled() {
    await be(() => this.popupEnabled && this.popupTemplate != null);
    const e = `this SceneLayer: ${this.title}`;
    this.attributeStorageInfo == null
      ? u
          .getLogger(this.declaredClass)
          .warn(
            `Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`
          )
      : u
          .getLogger(this.declaredClass)
          .info(
            `Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`
          );
  }
  _validateElevationInfo() {
    const e = this.elevationInfo;
    e &&
      (this.profile === "mesh-pyramids" &&
        e.mode === "relative-to-scene" &&
        u
          .getLogger(this.declaredClass)
          .warn(
            ".elevationInfo=",
            "Mesh scene layers don't support relative-to-scene elevation mode"
          ),
      e.featureExpressionInfo &&
        e.featureExpressionInfo.expression !== "0" &&
        u
          .getLogger(this.declaredClass)
          .warn(
            ".elevationInfo=",
            "Scene layers do not support featureExpressionInfo"
          ));
  }
};
r(
  [
    o({
      types: { key: "type", base: Ie, typeMap: { selection: Le } },
      json: {
        origins: {
          "web-scene": { name: "layerDefinition.featureReduction", write: !0 },
          "portal-item": {
            name: "layerDefinition.featureReduction",
            write: !0,
          },
        },
      },
    }),
  ],
  i.prototype,
  "featureReduction",
  void 0
),
  r(
    [
      o({
        type: [y],
        json: {
          read: !1,
          origins: {
            "web-scene": { name: "layerDefinition.rangeInfos", write: !0 },
            "portal-item": { name: "layerDefinition.rangeInfos", write: !0 },
          },
        },
      }),
    ],
    i.prototype,
    "rangeInfos",
    void 0
  ),
  r([o({ json: { read: !1 } })], i.prototype, "associatedLayer", void 0),
  r([o({ type: ["show", "hide"] })], i.prototype, "listMode", void 0),
  r(
    [o({ type: ["ArcGISSceneServiceLayer"] })],
    i.prototype,
    "operationalLayerType",
    void 0
  ),
  r([o({ json: { read: !1 }, readOnly: !0 })], i.prototype, "type", void 0),
  r(
    [
      o({
        ...D.fields,
        readOnly: !0,
        json: { read: !1, origins: { service: { read: !0 } } },
      }),
    ],
    i.prototype,
    "fields",
    void 0
  ),
  r([o()], i.prototype, "types", null),
  r([o()], i.prototype, "typeIdField", null),
  r([o()], i.prototype, "formTemplate", null),
  r([o({ readOnly: !0 })], i.prototype, "fieldsIndex", null),
  r(
    [
      o({
        type: Se,
        json: {
          read: { source: "layerDefinition.floorInfo" },
          write: { target: "layerDefinition.floorInfo" },
        },
      }),
    ],
    i.prototype,
    "floorInfo",
    void 0
  ),
  r([o(D.outFields)], i.prototype, "outFields", void 0),
  r(
    [o({ type: q, readOnly: !0, json: { read: !1 } })],
    i.prototype,
    "nodePages",
    void 0
  ),
  r(
    [c("service", "nodePages", ["nodePages", "pointNodePages"])],
    i.prototype,
    "readNodePages",
    null
  ),
  r(
    [o({ type: [Qe], readOnly: !0 })],
    i.prototype,
    "materialDefinitions",
    void 0
  ),
  r(
    [o({ type: [ke], readOnly: !0 })],
    i.prototype,
    "textureSetDefinitions",
    void 0
  ),
  r(
    [o({ type: [Ge], readOnly: !0 })],
    i.prototype,
    "geometryDefinitions",
    void 0
  ),
  r([o({ readOnly: !0 })], i.prototype, "serviceUpdateTimeStamp", void 0),
  r([o({ readOnly: !0 })], i.prototype, "attributeStorageInfo", void 0),
  r([o({ readOnly: !0 })], i.prototype, "statisticsInfo", void 0),
  r(
    [
      o({
        type: O.ofType(Number),
        nonNullable: !0,
        json: {
          origins: { service: { read: !1, write: !1 } },
          name: "layerDefinition.excludeObjectIds",
          write: { enabled: !0 },
        },
      }),
    ],
    i.prototype,
    "excludeObjectIds",
    void 0
  ),
  r(
    [
      o({
        type: String,
        json: {
          origins: { service: { read: !1, write: !1 } },
          name: "layerDefinition.definitionExpression",
          write: { enabled: !0, allowNull: !0 },
        },
      }),
    ],
    i.prototype,
    "definitionExpression",
    void 0
  ),
  r(
    [
      o({
        type: Me,
        json: {
          name: "layerDefinition.polygonFilter",
          write: { enabled: !0, allowNull: !0 },
          origins: { service: { read: !1, write: !1 } },
        },
      }),
    ],
    i.prototype,
    "filter",
    void 0
  ),
  r(
    [
      o({
        type: String,
        json: { origins: { "web-scene": { read: !0, write: !0 } }, read: !1 },
      }),
    ],
    i.prototype,
    "path",
    void 0
  ),
  r([o(Fe)], i.prototype, "elevationInfo", null),
  r([o({ type: String })], i.prototype, "geometryType", null),
  r([o(je)], i.prototype, "labelsVisible", void 0),
  r(
    [
      o({
        type: [Oe],
        json: {
          origins: {
            service: {
              name: "drawingInfo.labelingInfo",
              read: { reader: T },
              write: !1,
            },
          },
          name: "layerDefinition.drawingInfo.labelingInfo",
          read: { reader: T },
          write: !0,
        },
      }),
    ],
    i.prototype,
    "labelingInfo",
    void 0
  ),
  r([o(_e)], i.prototype, "legendEnabled", void 0),
  r(
    [
      o({
        type: Number,
        json: {
          origins: {
            "web-document": {
              default: 1,
              write: {
                enabled: !0,
                target: {
                  opacity: { type: Number },
                  "layerDefinition.drawingInfo.transparency": { type: Number },
                },
              },
              read: {
                source: ["opacity", "layerDefinition.drawingInfo.transparency"],
                reader(e, t) {
                  var a, n;
                  if (typeof e == "number" && e >= 0 && e <= 1) return e;
                  const s =
                    (n =
                      (a = t.layerDefinition) == null
                        ? void 0
                        : a.drawingInfo) == null
                      ? void 0
                      : n.transparency;
                  return s !== void 0 ? Ee(s) : void 0;
                },
              },
            },
            "portal-item": { write: !0 },
            service: { read: !1 },
          },
        },
      }),
    ],
    i.prototype,
    "opacity",
    void 0
  ),
  r(
    [
      o({
        type: ["Low", "High"],
        readOnly: !0,
        json: { read: !1, origins: { service: { read: !0 } } },
      }),
    ],
    i.prototype,
    "priority",
    void 0
  ),
  r(
    [
      o({
        type: ["Labels"],
        readOnly: !0,
        json: { read: !1, origins: { service: { read: !0 } } },
      }),
    ],
    i.prototype,
    "semantic",
    void 0
  ),
  r(
    [
      o({
        types: xe,
        json: {
          origins: { service: { read: { source: "drawingInfo.renderer" } } },
          name: "layerDefinition.drawingInfo.renderer",
          write: !0,
        },
        value: null,
      }),
    ],
    i.prototype,
    "renderer",
    null
  ),
  r([o({ json: { read: !1 } })], i.prototype, "cachedDrawingInfo", void 0),
  r(
    [c("service", "cachedDrawingInfo")],
    i.prototype,
    "readCachedDrawingInfo",
    null
  ),
  r(
    [o({ readOnly: !0, json: { read: !1 } })],
    i.prototype,
    "capabilities",
    null
  ),
  r(
    [o({ type: Boolean, json: { read: !1 } })],
    i.prototype,
    "editingEnabled",
    null
  ),
  r(
    [o({ readOnly: !0, json: { write: !1, read: !1 } })],
    i.prototype,
    "infoFor3D",
    null
  ),
  r([o(Te)], i.prototype, "popupEnabled", void 0),
  r(
    [o({ type: Ae, json: { name: "popupInfo", write: !0 } })],
    i.prototype,
    "popupTemplate",
    void 0
  ),
  r(
    [o({ readOnly: !0, json: { read: !1 } })],
    i.prototype,
    "defaultPopupTemplate",
    null
  ),
  r(
    [o({ type: String, json: { read: !1 } })],
    i.prototype,
    "objectIdField",
    void 0
  ),
  r(
    [c("service", "objectIdField", ["objectIdField", "fields"])],
    i.prototype,
    "readObjectIdField",
    null
  ),
  r(
    [o({ type: String, json: { read: !1 } })],
    i.prototype,
    "globalIdField",
    void 0
  ),
  r(
    [c("service", "globalIdField", ["globalIdField", "fields"])],
    i.prototype,
    "readGlobalIdField",
    null
  ),
  r(
    [o({ readOnly: !0, type: String, json: { read: !1 } })],
    i.prototype,
    "displayField",
    null
  ),
  r([o({ type: String, json: { read: !1 } })], i.prototype, "profile", void 0),
  r(
    [c("service", "profile", ["store.profile"])],
    i.prototype,
    "readProfile",
    null
  ),
  r(
    [
      o({
        readOnly: !0,
        type: String,
        json: {
          origins: {
            service: { read: { source: "store.normalReferenceFrame" } },
          },
          read: !1,
        },
      }),
    ],
    i.prototype,
    "normalReferenceFrame",
    void 0
  ),
  r([o(De)], i.prototype, "screenSizePerspectiveEnabled", void 0),
  (i = r([v("esri.layers.SceneLayer")], i));
const P = {
    "mesh-pyramids": "mesh-pyramids",
    meshpyramids: "mesh-pyramids",
    "features-meshes": "mesh-pyramids",
    points: "points",
    "features-points": "points",
    lines: "lines",
    "features-lines": "lines",
    polygons: "polygons",
    "features-polygons": "polygons",
  },
  ze = {
    "mesh-pyramids": "mesh",
    points: "point",
    lines: "polyline",
    polygons: "polygon",
  },
  Lt = i;
export { Lt as default };
