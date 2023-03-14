import {
  bD as de,
  ae as t,
  af as s,
  dl as j,
  gO as ue,
  ir as N,
  ag as p,
  is as ce,
  Q as F,
  i3 as Y,
  dh as ee,
  cV as he,
  r as d,
  ic as te,
  it as ge,
  U as re,
  av as fe,
  dF as me,
  s as L,
  al as ve,
  t as be,
  ar as we,
  aH as se,
  gi as Se,
  iu as Oe,
  iv as xe,
  ai as Ie,
  ei as ie,
  d0 as Fe,
  iw as Le,
  P as w,
  ix as je,
  iy as Te,
  dd as m,
  bO as h,
  iz as Be,
  il as Ae,
  es as Ee,
  et as _e,
  eu as qe,
  io as Ne,
  ev as Pe,
  iA as Re,
  ee as Me,
  eD as ke,
  a2 as Ue,
  iB as Ce,
  iC as De,
  iD as Qe,
  db as Ke,
} from "./index.8fd7165c.js";
import {
  t as Ve,
  u as He,
  l as Je,
} from "./FetchAssociatedFeatureLayer.dc61c009.js";
import { n as Ze, E as ze, L as Z } from "./SceneService.7e40727d.js";
import {
  s as Ge,
  l as $e,
  u as We,
  m as Xe,
} from "./I3SLayerDefinitions.a4a2a8df.js";
import { d as Ye, s as et } from "./popupUtils.4682c28c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
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
import "./originUtils.cdead60a.js";
import "./multiOriginJSONSupportUtils.c978f4c3.js";
import "./resourceUtils.b249f31c.js";
let y = class extends de(ce) {
  constructor(e) {
    super(e),
      (this.title = ""),
      (this.id = -1),
      (this.modelName = null),
      (this.isEmpty = null),
      (this.visible = !0),
      (this.opacity = 1);
  }
  readTitle(e, r) {
    return typeof r.alias == "string"
      ? r.alias
      : typeof r.name == "string"
      ? r.name
      : "";
  }
  readIdOnlyOnce(e) {
    return this.id !== -1 ? this.id : typeof e == "number" ? e : -1;
  }
};
t(
  [
    s({
      type: String,
      json: {
        origins: { "web-scene": { write: !0 }, "portal-item": { write: !0 } },
      },
    }),
  ],
  y.prototype,
  "title",
  void 0
),
  t([j("service", "title", ["alias", "name"])], y.prototype, "readTitle", null),
  t([s()], y.prototype, "layer", void 0),
  t(
    [
      s({
        type: ue,
        readOnly: !0,
        json: { read: !1, write: { ignoreOrigin: !0 } },
      }),
    ],
    y.prototype,
    "id",
    void 0
  ),
  t([j("service", "id")], y.prototype, "readIdOnlyOnce", null),
  t([s(N(String))], y.prototype, "modelName", void 0),
  t([s(N(Boolean))], y.prototype, "isEmpty", void 0),
  t(
    [s({ type: Boolean, json: { name: "visibility", write: !0 } })],
    y.prototype,
    "visible",
    void 0
  ),
  t([s({ type: Number, json: { write: !0 } })], y.prototype, "opacity", void 0),
  (y = t([p("esri.layers.buildingSublayers.BuildingSublayer")], y));
const oe = y,
  ae = "esri.layers.buildingSublayers.BuildingComponentSublayer",
  tt = F.getLogger(ae),
  z = Le();
let a = class extends Y.LoadableMixin(ee(oe)) {
  constructor(e) {
    super(e),
      (this.type = "building-component"),
      (this.nodePages = null),
      (this.materialDefinitions = []),
      (this.textureSetDefinitions = []),
      (this.geometryDefinitions = []),
      (this.indexInfo = null),
      (this.serviceUpdateTimeStamp = null),
      (this.store = null),
      (this.attributeStorageInfo = []),
      (this.fields = []),
      (this.associatedLayer = null),
      (this.outFields = null),
      (this.listMode = "show"),
      (this.renderer = null),
      (this.definitionExpression = null),
      (this.popupEnabled = !0),
      (this.popupTemplate = null),
      (this.layerType = "3d-object");
  }
  get parsedUrl() {
    var e, r;
    return this.layer
      ? {
          path: `${
            (e = this.layer.parsedUrl) == null ? void 0 : e.path
          }/sublayers/${this.id}`,
          query: (r = this.layer.parsedUrl) == null ? void 0 : r.query,
        }
      : { path: "" };
  }
  get fieldsIndex() {
    return new he(this.fields);
  }
  readAssociatedLayer(e, r) {
    const i = this.layer.associatedFeatureServiceItem,
      o = r.associatedLayerID;
    return d(i) && typeof o == "number"
      ? new te({ portalItem: i, layerId: o })
      : null;
  }
  get objectIdField() {
    if (this.fields != null) {
      for (const e of this.fields) if (e.type === "oid") return e.name;
    }
    return null;
  }
  get displayField() {
    return d(this.associatedLayer) ? this.associatedLayer.displayField : void 0;
  }
  get apiKey() {
    return this.layer.apiKey;
  }
  get fullExtent() {
    return this.layer.fullExtent;
  }
  get spatialReference() {
    return this.layer.spatialReference;
  }
  get version() {
    return this.layer.version;
  }
  get elevationInfo() {
    return this.layer.elevationInfo;
  }
  get minScale() {
    return this.layer.minScale;
  }
  get maxScale() {
    return this.layer.maxScale;
  }
  get effectiveScaleRange() {
    return this.layer.effectiveScaleRange;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  load(e) {
    const r = d(e) ? e.signal : null,
      i = this._fetchService(r).then(() => {
        this.indexInfo = Ze(
          this.parsedUrl.path,
          this.rootNode,
          this.nodePages,
          this.apiKey,
          tt,
          r
        );
      });
    return this.addResolvingPromise(i), Promise.resolve(this);
  }
  createPopupTemplate(e) {
    return ge(this, e);
  }
  async _fetchService(e) {
    const r = (
      await re(this.parsedUrl.path, {
        query: { f: "json", token: this.apiKey },
        responseType: "json",
        signal: e,
      })
    ).data;
    this.read(r, { origin: "service", url: this.parsedUrl });
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFieldDomain(e, r) {
    var o, n, u;
    const i =
      (n =
        (o = this.getFeatureType(r == null ? void 0 : r.feature)) == null
          ? void 0
          : o.domains) == null
        ? void 0
        : n[e];
    return i && i.type !== "inherited"
      ? i
      : ((u = this.getField(e)) == null ? void 0 : u.domain) ?? null;
  }
  getFeatureType(e) {
    return e && d(this.associatedLayer)
      ? this.associatedLayer.getFeatureType(e)
      : null;
  }
  get types() {
    return d(this.associatedLayer) ? this.associatedLayer.types ?? [] : [];
  }
  get typeIdField() {
    return d(this.associatedLayer) ? this.associatedLayer.typeIdField : null;
  }
  get geometryType() {
    return this.layerType === "3d-object" ? "mesh" : "point";
  }
  get profile() {
    return this.layerType === "3d-object" ? "mesh-pyramids" : "points";
  }
  get capabilities() {
    const e =
        d(this.associatedLayer) && this.associatedLayer.capabilities
          ? this.associatedLayer.capabilities
          : Ve,
      {
        query: r,
        data: { supportsZ: i, supportsM: o, isVersioned: n },
      } = e;
    return { query: r, data: { supportsZ: i, supportsM: o, isVersioned: n } };
  }
  createQuery() {
    const e = new fe();
    return (
      this.geometryType !== "mesh" &&
        ((e.returnGeometry = !0), (e.returnZ = !0)),
      (e.where = this.definitionExpression || "1=1"),
      (e.sqlFormat = "standard"),
      e
    );
  }
  queryExtent(e, r) {
    return this._getAssociatedLayerForQuery().then((i) =>
      i.queryExtent(e || this.createQuery(), r)
    );
  }
  queryFeatureCount(e, r) {
    return this._getAssociatedLayerForQuery().then((i) =>
      i.queryFeatureCount(e || this.createQuery(), r)
    );
  }
  queryFeatures(e, r) {
    return this._getAssociatedLayerForQuery()
      .then((i) => i.queryFeatures(e || this.createQuery(), r))
      .then((i) => {
        if (i != null && i.features)
          for (const o of i.features)
            (o.layer = this.layer), (o.sourceLayer = this);
        return i;
      });
  }
  queryObjectIds(e, r) {
    return this._getAssociatedLayerForQuery().then((i) =>
      i.queryObjectIds(e || this.createQuery(), r)
    );
  }
  async queryCachedAttributes(e, r) {
    const i = me(this.fieldsIndex, await Ye(this, et(this)));
    return He(this.parsedUrl.path, this.attributeStorageInfo, e, r, i);
  }
  async queryCachedFeature(e, r) {
    const i = await this.queryCachedAttributes(e, [r]);
    if (!i || i.length === 0)
      throw new L(
        "scenelayer:feature-not-in-cached-data",
        "Feature not found in cached data"
      );
    const o = new ve();
    return (o.attributes = i[0]), (o.layer = this), (o.sourceLayer = this), o;
  }
  getFieldUsageInfo(e) {
    return this.fieldsIndex.has(e)
      ? {
          supportsLabelingInfo: !1,
          supportsRenderer: !1,
          supportsPopupTemplate: !1,
          supportsLayerQuery: !1,
        }
      : {
          supportsLabelingInfo: !1,
          supportsRenderer: !0,
          supportsPopupTemplate: !0,
          supportsLayerQuery: d(this.associatedLayer),
        };
  }
  _getAssociatedLayerForQuery() {
    const e = this.associatedLayer;
    return d(e) && e.loaded
      ? Promise.resolve(e)
      : this._loadAssociatedLayerForQuery();
  }
  async _loadAssociatedLayerForQuery() {
    if ((await this.load(), be(this.associatedLayer)))
      throw new L(
        "buildingscenelayer:query-not-available",
        "BuildingSceneLayer component layer queries are not available without an associated feature layer",
        { layer: this }
      );
    try {
      await this.associatedLayer.load();
    } catch (e) {
      throw new L(
        "buildingscenelayer:query-not-available",
        "BuildingSceneLayer associated feature layer could not be loaded",
        { layer: this, error: e }
      );
    }
    return this.associatedLayer;
  }
};
t([s({ readOnly: !0 })], a.prototype, "parsedUrl", null),
  t([s({ type: Ge, readOnly: !0 })], a.prototype, "nodePages", void 0),
  t(
    [s({ type: [$e], readOnly: !0 })],
    a.prototype,
    "materialDefinitions",
    void 0
  ),
  t(
    [s({ type: [We], readOnly: !0 })],
    a.prototype,
    "textureSetDefinitions",
    void 0
  ),
  t(
    [s({ type: [Xe], readOnly: !0 })],
    a.prototype,
    "geometryDefinitions",
    void 0
  ),
  t([s({ readOnly: !0 })], a.prototype, "serviceUpdateTimeStamp", void 0),
  t([s({ readOnly: !0 })], a.prototype, "store", void 0),
  t(
    [
      s({
        type: String,
        readOnly: !0,
        json: { read: { source: "store.rootNode" } },
      }),
    ],
    a.prototype,
    "rootNode",
    void 0
  ),
  t([s({ readOnly: !0 })], a.prototype, "attributeStorageInfo", void 0),
  t([s(z.fields)], a.prototype, "fields", void 0),
  t([s({ readOnly: !0 })], a.prototype, "fieldsIndex", null),
  t([s({ readOnly: !0, type: te })], a.prototype, "associatedLayer", void 0),
  t(
    [j("service", "associatedLayer", ["associatedLayerID"])],
    a.prototype,
    "readAssociatedLayer",
    null
  ),
  t([s(z.outFields)], a.prototype, "outFields", void 0),
  t([s({ type: String, readOnly: !0 })], a.prototype, "objectIdField", null),
  t(
    [s({ readOnly: !0, type: String, json: { read: !1 } })],
    a.prototype,
    "displayField",
    null
  ),
  t([s({ readOnly: !0, type: String })], a.prototype, "apiKey", null),
  t([s({ readOnly: !0, type: we })], a.prototype, "fullExtent", null),
  t([s({ readOnly: !0, type: se })], a.prototype, "spatialReference", null),
  t([s({ readOnly: !0 })], a.prototype, "version", null),
  t([s({ readOnly: !0, type: Se })], a.prototype, "elevationInfo", null),
  t([s({ readOnly: !0, type: Number })], a.prototype, "minScale", null),
  t([s({ readOnly: !0, type: Number })], a.prototype, "maxScale", null),
  t(
    [s({ readOnly: !0, type: Number })],
    a.prototype,
    "effectiveScaleRange",
    null
  ),
  t(
    [s({ type: ["hide", "show"], json: { write: !0 } })],
    a.prototype,
    "listMode",
    void 0
  ),
  t(
    [
      s({
        types: Oe,
        json: {
          origins: { service: { read: { source: "drawingInfo.renderer" } } },
          name: "layerDefinition.drawingInfo.renderer",
          write: !0,
        },
        value: null,
      }),
    ],
    a.prototype,
    "renderer",
    void 0
  ),
  t(
    [
      s({
        type: String,
        json: {
          origins: { service: { read: !1, write: !1 } },
          name: "layerDefinition.definitionExpression",
          write: { enabled: !0, allowNull: !0 },
        },
      }),
    ],
    a.prototype,
    "definitionExpression",
    void 0
  ),
  t([s(xe)], a.prototype, "popupEnabled", void 0),
  t(
    [
      s({
        type: Ie,
        json: { read: { source: "popupInfo" }, write: { target: "popupInfo" } },
      }),
    ],
    a.prototype,
    "popupTemplate",
    void 0
  ),
  t(
    [
      s({
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
    a.prototype,
    "normalReferenceFrame",
    void 0
  ),
  t(
    [s({ readOnly: !0, json: { read: !1 } })],
    a.prototype,
    "defaultPopupTemplate",
    null
  ),
  t([s()], a.prototype, "types", null),
  t([s()], a.prototype, "typeIdField", null),
  t(
    [
      s({ json: { write: !1 } }),
      ie(new Fe({ "3DObject": "3d-object", Point: "point" })),
    ],
    a.prototype,
    "layerType",
    void 0
  ),
  t([s()], a.prototype, "geometryType", null),
  t([s()], a.prototype, "profile", null),
  t(
    [s({ readOnly: !0, json: { read: !1 } })],
    a.prototype,
    "capabilities",
    null
  ),
  (a = t([p(ae)], a));
const P = a;
var R;
const G = {
  type: w,
  readOnly: !0,
  json: {
    origins: { service: { read: { source: "sublayers", reader: ne } } },
    read: !1,
  },
};
function ne(e, r, i) {
  if (e && Array.isArray(e))
    return new w(
      e.map((o) => {
        const n = (function (u) {
          return u.layerType === "group" ? f : P;
        })(o);
        if (n) {
          const u = new n();
          return u.read(o, i), u;
        }
        return (
          i &&
            i.messages &&
            o &&
            i.messages.push(
              new je(
                "building-scene-layer:unsupported-sublayer-type",
                "Building scene sublayer of type '" +
                  (o.type || "unknown") +
                  "' are not supported",
                { definition: o, context: i }
              )
            ),
          null
        );
      })
    );
}
let f = (R = class extends oe {
  constructor(e) {
    super(e),
      (this.type = "building-group"),
      (this.listMode = "show"),
      (this.sublayers = null);
  }
  loadAll() {
    return Te(this, (e) =>
      R.forEachSublayer(this.sublayers, (r) => {
        r.type !== "building-group" && e(r);
      })
    );
  }
});
t(
  [s({ type: ["hide", "show", "hide-children"], json: { write: !0 } })],
  f.prototype,
  "listMode",
  void 0
),
  t([s(G)], f.prototype, "sublayers", void 0),
  (f = R = t([p("esri.layers.buildingSublayers.BuildingGroupSublayer")], f)),
  (function (e) {
    (e.sublayersProperty = G),
      (e.readSublayers = ne),
      (e.forEachSublayer = function r(i, o) {
        i.forEach((n) => {
          o(n), n.type === "building-group" && r(n.sublayers, o);
        });
      });
  })(f || (f = {}));
const v = f;
let T = class extends m {
  constructor() {
    super(...arguments), (this.type = null);
  }
};
t(
  [s({ type: String, readOnly: !0, json: { write: !0 } })],
  T.prototype,
  "type",
  void 0
),
  (T = t([p("esri.layers.support.BuildingFilterAuthoringInfo")], T));
const le = T;
var M;
let S = (M = class extends m {
  constructor() {
    super(...arguments), (this.filterType = null), (this.filterValues = null);
  }
  clone() {
    return new M({
      filterType: this.filterType,
      filterValues: h(this.filterValues),
    });
  }
});
t(
  [s({ type: String, json: { write: !0 } })],
  S.prototype,
  "filterType",
  void 0
),
  t(
    [s({ type: [String], json: { write: !0 } })],
    S.prototype,
    "filterValues",
    void 0
  ),
  (S = M = t([p("esri.layers.support.BuildingFilterAuthoringInfoType")], S));
const rt = S;
var k;
const st = w.ofType(rt);
let B = (k = class extends m {
  clone() {
    return new k({ filterTypes: h(this.filterTypes) });
  }
});
t([s({ type: st, json: { write: !0 } })], B.prototype, "filterTypes", void 0),
  (B = k = t([p("esri.layers.support.BuildingFilterAuthoringInfoBlock")], B));
const it = B;
var U;
const ot = w.ofType(it);
let O = (U = class extends le {
  constructor() {
    super(...arguments), (this.type = "checkbox");
  }
  clone() {
    return new U({ filterBlocks: h(this.filterBlocks) });
  }
});
t([s({ type: ["checkbox"] })], O.prototype, "type", void 0),
  t(
    [s({ type: ot, json: { write: !0 } })],
    O.prototype,
    "filterBlocks",
    void 0
  ),
  (O = U =
    t([p("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")], O));
const $ = O;
let A = class extends m {};
t([s({ readOnly: !0, json: { read: !1 } })], A.prototype, "type", void 0),
  (A = t([p("esri.layers.support.BuildingFilterMode")], A));
const q = A;
var C;
let E = (C = class extends q {
  constructor() {
    super(...arguments), (this.type = "solid");
  }
  clone() {
    return new C();
  }
});
t(
  [s({ type: ["solid"], readOnly: !0, json: { write: !0 } })],
  E.prototype,
  "type",
  void 0
),
  (E = C = t([p("esri.layers.support.BuildingFilterModeSolid")], E));
const D = E;
var Q;
let x = (Q = class extends q {
  constructor() {
    super(...arguments), (this.type = "wire-frame"), (this.edges = null);
  }
  clone() {
    return new Q({ edges: h(this.edges) });
  }
});
t([ie({ wireFrame: "wire-frame" })], x.prototype, "type", void 0),
  t([s(Be)], x.prototype, "edges", void 0),
  (x = Q = t([p("esri.layers.support.BuildingFilterModeWireFrame")], x));
const W = x;
var K;
let _ = (K = class extends q {
  constructor() {
    super(...arguments), (this.type = "x-ray");
  }
  clone() {
    return new K();
  }
});
t(
  [s({ type: ["x-ray"], readOnly: !0, json: { write: !0 } })],
  _.prototype,
  "type",
  void 0
),
  (_ = K = t([p("esri.layers.support.BuildingFilterModeXRay")], _));
const X = _;
var V;
const at = {
  nonNullable: !0,
  types: {
    key: "type",
    base: q,
    typeMap: { solid: D, "wire-frame": W, "x-ray": X },
  },
  json: {
    read: (e) => {
      switch (e && e.type) {
        case "solid":
          return D.fromJSON(e);
        case "wireFrame":
          return W.fromJSON(e);
        case "x-ray":
          return X.fromJSON(e);
        default:
          return;
      }
    },
    write: { enabled: !0, isRequired: !0 },
  },
};
let b = (V = class extends m {
  constructor() {
    super(...arguments),
      (this.filterExpression = null),
      (this.filterMode = new D()),
      (this.title = "");
  }
  clone() {
    return new V({
      filterExpression: this.filterExpression,
      filterMode: h(this.filterMode),
      title: this.title,
    });
  }
});
t(
  [s({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })],
  b.prototype,
  "filterExpression",
  void 0
),
  t([s(at)], b.prototype, "filterMode", void 0),
  t(
    [s({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })],
    b.prototype,
    "title",
    void 0
  ),
  (b = V = t([p("esri.layers.support.BuildingFilterBlock")], b));
const nt = b;
var H;
const lt = w.ofType(nt);
let g = (H = class extends m {
  constructor() {
    super(...arguments),
      (this.description = null),
      (this.filterBlocks = null),
      (this.id = Ae()),
      (this.name = null);
  }
  clone() {
    return new H({
      description: this.description,
      filterBlocks: h(this.filterBlocks),
      id: this.id,
      name: this.name,
      filterAuthoringInfo: h(this.filterAuthoringInfo),
    });
  }
});
t(
  [s({ type: String, json: { write: !0 } })],
  g.prototype,
  "description",
  void 0
),
  t(
    [s({ type: lt, json: { write: { enabled: !0, isRequired: !0 } } })],
    g.prototype,
    "filterBlocks",
    void 0
  ),
  t(
    [
      s({
        types: { key: "type", base: le, typeMap: { checkbox: $ } },
        json: {
          read: (e) => ((e && e.type) === "checkbox" ? $.fromJSON(e) : null),
          write: !0,
        },
      }),
    ],
    g.prototype,
    "filterAuthoringInfo",
    void 0
  ),
  t(
    [
      s({
        type: String,
        constructOnly: !0,
        json: { write: { enabled: !0, isRequired: !0 } },
      }),
    ],
    g.prototype,
    "id",
    void 0
  ),
  t(
    [s({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })],
    g.prototype,
    "name",
    void 0
  ),
  (g = H = t([p("esri.layers.support.BuildingFilter")], g));
const pt = g;
let c = class extends m {
  constructor() {
    super(...arguments),
      (this.fieldName = null),
      (this.modelName = null),
      (this.label = null),
      (this.min = null),
      (this.max = null),
      (this.mostFrequentValues = null),
      (this.subLayerIds = null);
  }
};
t([s({ type: String })], c.prototype, "fieldName", void 0),
  t([s({ type: String })], c.prototype, "modelName", void 0),
  t([s({ type: String })], c.prototype, "label", void 0),
  t([s({ type: Number })], c.prototype, "min", void 0),
  t([s({ type: Number })], c.prototype, "max", void 0),
  t(
    [
      s({
        json: {
          read: (e) =>
            Array.isArray(e) &&
            (e.every((r) => typeof r == "string") ||
              e.every((r) => typeof r == "number"))
              ? e.slice()
              : null,
        },
      }),
    ],
    c.prototype,
    "mostFrequentValues",
    void 0
  ),
  t([s({ type: [Number] })], c.prototype, "subLayerIds", void 0),
  (c = t([p("esri.layers.support.BuildingFieldStatistics")], c));
let I = class extends Y.LoadableMixin(ee(m)) {
  constructor() {
    super(...arguments), (this.url = null);
  }
  get fields() {
    return this.loaded || this.loadStatus === "loading"
      ? this._get("fields")
      : (F.getLogger(this.declaredClass).error(
          "building summary statistics are not loaded"
        ),
        null);
  }
  load(e) {
    const r = d(e) ? e.signal : null;
    return (
      this.addResolvingPromise(this._fetchService(r)), Promise.resolve(this)
    );
  }
  async _fetchService(e) {
    const r = (
      await re(this.url, {
        query: { f: "json" },
        responseType: "json",
        signal: e,
      })
    ).data;
    this.read(r, { origin: "service" });
  }
};
t([s({ constructOnly: !0, type: String })], I.prototype, "url", void 0),
  t(
    [s({ readOnly: !0, type: [c], json: { read: { source: "summary" } } })],
    I.prototype,
    "fields",
    null
  ),
  (I = t([p("esri.layers.support.BuildingSummaryStatistics")], I));
const pe = I,
  ye = w.ofType(pt),
  J = h(v.sublayersProperty);
(J.json.origins["web-scene"] = {
  type: [P],
  write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) },
}),
  (J.json.origins["portal-item"] = {
    type: [P],
    write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) },
  });
let l = class extends ze(Ee(_e(qe(Ne(Pe(Re(Ke))))))) {
  constructor(e) {
    super(e),
      (this.operationalLayerType = "BuildingSceneLayer"),
      (this.allSublayers = new Me({
        getCollections: () => [this.sublayers],
        getChildrenFunction: (r) =>
          r.type === "building-group" ? r.sublayers : null,
      })),
      (this.sublayers = null),
      (this._sublayerOverrides = null),
      (this.filters = new ye()),
      (this.activeFilterId = null),
      (this.summaryStatistics = null),
      (this.outFields = null),
      (this.type = "building-scene");
  }
  normalizeCtorArgs(e) {
    return typeof e == "string" ? { url: e } : e ?? {};
  }
  destroy() {
    this.allSublayers.destroy();
  }
  readSublayers(e, r, i) {
    const o = v.readSublayers(e, r, i);
    return (
      v.forEachSublayer(o, (n) => (n.layer = this)),
      this._sublayerOverrides &&
        (this.applySublayerOverrides(o, this._sublayerOverrides),
        (this._sublayerOverrides = null)),
      o
    );
  }
  applySublayerOverrides(e, { overrides: r, context: i }) {
    v.forEachSublayer(e, (o) => o.read(r.get(o.id), i));
  }
  readSublayerOverrides(e, r) {
    var o;
    const i = new Map();
    for (const n of e)
      n != null && typeof n == "object" && typeof n.id == "number"
        ? i.set(n.id, n)
        : (o = r.messages) == null ||
          o.push(
            new L(
              "building-scene-layer:invalid-sublayer-override",
              "Invalid value for sublayer override. Not an object or no id specified.",
              { value: n }
            )
          );
    return { overrides: i, context: r };
  }
  writeSublayerOverrides(e, r, i) {
    const o = [];
    v.forEachSublayer(this.sublayers, (n) => {
      const u = n.write({}, i);
      Object.keys(u).length > 1 && o.push(u);
    }),
      o.length > 0 && (r.sublayers = o);
  }
  writeUnappliedOverrides(e, r) {
    (r.sublayers = []),
      e.overrides.forEach((i) => {
        r.sublayers.push(h(i));
      });
  }
  write(e, r) {
    return (
      (e = super.write(e, r)),
      !r ||
        (r.origin !== "web-scene" && r.origin !== "portal-item") ||
        (this.sublayers
          ? this.writeSublayerOverrides(this.sublayers, e, r)
          : this._sublayerOverrides &&
            this.writeUnappliedOverrides(this._sublayerOverrides, e)),
      e
    );
  }
  read(e, r) {
    if (
      (super.read(e, r),
      r &&
        (r.origin === "web-scene" || r.origin === "portal-item") &&
        e != null &&
        Array.isArray(e.sublayers))
    ) {
      const i = this.readSublayerOverrides(e.sublayers, r);
      this.sublayers
        ? this.applySublayerOverrides(this.sublayers, i)
        : (this._sublayerOverrides = i);
    }
  }
  readSummaryStatistics(e, r) {
    var i;
    if (typeof r.statisticsHRef == "string") {
      const o = ke(
        (i = this.parsedUrl) == null ? void 0 : i.path,
        r.statisticsHRef
      );
      return new pe({ url: o });
    }
    return null;
  }
  set elevationInfo(e) {
    this._set("elevationInfo", e), this._validateElevationInfo();
  }
  load(e) {
    const r = d(e) ? e.signal : null,
      i = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e)
        .catch(Ue)
        .then(() => this._fetchService(r))
        .then(() => this._fetchAssociatedFeatureService(r));
    return this.addResolvingPromise(i), Promise.resolve(this);
  }
  loadAll() {
    return Ce(this, (e) => {
      v.forEachSublayer(this.sublayers, (r) => {
        r.type !== "building-group" && e(r);
      }),
        this.summaryStatistics && e(this.summaryStatistics);
    });
  }
  async saveAs(e, r) {
    return this._debouncedSaveOperations(
      Z.SAVE_AS,
      {
        ...r,
        getTypeKeywords: () => this._getTypeKeywords(),
        portalItemLayerType: "building-scene",
      },
      e
    );
  }
  async save() {
    const e = {
      getTypeKeywords: () => this._getTypeKeywords(),
      portalItemLayerType: "building-scene",
    };
    return this._debouncedSaveOperations(Z.SAVE, e);
  }
  validateLayer(e) {
    if (!e.layerType || e.layerType !== "Building")
      throw new L(
        "buildingscenelayer:layer-type-not-supported",
        "BuildingSceneLayer does not support this layer type",
        { layerType: e.layerType }
      );
  }
  _getTypeKeywords() {
    return ["Building"];
  }
  _validateElevationInfo() {
    const e = this.elevationInfo;
    e &&
      (e.mode !== "absolute-height" &&
        F.getLogger(this.declaredClass).warn(
          ".elevationInfo=",
          "Building scene layers only support absolute-height elevation mode"
        ),
      e.featureExpressionInfo &&
        e.featureExpressionInfo.expression !== "0" &&
        F.getLogger(this.declaredClass).warn(
          ".elevationInfo=",
          "Building scene layers do not support featureExpressionInfo"
        ));
  }
  async _fetchAssociatedFeatureService(e) {
    const r = new Je(this.parsedUrl, this.portalItem, this.apiKey, e);
    try {
      this.associatedFeatureServiceItem = await r.fetchPortalItem();
    } catch (i) {
      F.getLogger(this.declaredClass).warn(
        "Associated feature service item could not be loaded",
        i
      );
    }
  }
};
t(
  [s({ type: ["BuildingSceneLayer"] })],
  l.prototype,
  "operationalLayerType",
  void 0
),
  t([s({ readOnly: !0 })], l.prototype, "allSublayers", void 0),
  t([s(J)], l.prototype, "sublayers", void 0),
  t([j("service", "sublayers")], l.prototype, "readSublayers", null),
  t(
    [s({ type: ye, nonNullable: !0, json: { write: !0 } })],
    l.prototype,
    "filters",
    void 0
  ),
  t(
    [s({ type: String, json: { write: !0 } })],
    l.prototype,
    "activeFilterId",
    void 0
  ),
  t([s({ readOnly: !0, type: pe })], l.prototype, "summaryStatistics", void 0),
  t(
    [j("summaryStatistics", ["statisticsHRef"])],
    l.prototype,
    "readSummaryStatistics",
    null
  ),
  t(
    [s({ type: [String], json: { read: !1 } })],
    l.prototype,
    "outFields",
    void 0
  ),
  t([s(De)], l.prototype, "fullExtent", void 0),
  t(
    [s({ type: ["show", "hide", "hide-children"] })],
    l.prototype,
    "listMode",
    void 0
  ),
  t([s(N(se))], l.prototype, "spatialReference", void 0),
  t([s(Qe)], l.prototype, "elevationInfo", null),
  t([s({ json: { read: !1 }, readOnly: !0 })], l.prototype, "type", void 0),
  t([s()], l.prototype, "associatedFeatureServiceItem", void 0),
  (l = t([p("esri.layers.BuildingSceneLayer")], l));
const Rt = l;
export { Rt as default };
