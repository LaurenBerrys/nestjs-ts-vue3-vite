import {
  ae as r,
  af as i,
  ag as y,
  dd as B,
  gO as C,
  ei as m,
  bO as u,
  es as E,
  et as _,
  eu as L,
  io as N,
  ev as O,
  iA as V,
  gr as w,
  i5 as A,
  r as D,
  a2 as k,
  it as K,
  k7 as T,
  s as l,
  eD as $,
  U as G,
  Q as F,
  iv as M,
  ai as U,
  dl as z,
  iD as Q,
  j0 as H,
  dm as J,
  iw as W,
  db as X,
} from "./index.8fd7165c.js";
import { E as Y, L as P } from "./SceneService.7e40727d.js";
import {
  c as q,
  d as Z,
  b as ee,
  a as te,
} from "./PointCloudUniqueValueRenderer.310d7c71.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./originUtils.cdead60a.js";
import "./multiOriginJSONSupportUtils.c978f4c3.js";
import "./resourceUtils.b249f31c.js";
let f = class extends B {
  constructor(e) {
    super(e), (this.field = null), (this.type = null);
  }
  clone() {
    return null;
  }
};
r(
  [i({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })],
  f.prototype,
  "field",
  void 0
),
  r(
    [i({ readOnly: !0, nonNullable: !0, json: { read: !1 } })],
    f.prototype,
    "type",
    void 0
  ),
  (f = r([y("esri.layers.pointCloudFilters.PointCloudFilter")], f));
const g = f;
var b;
let d = (b = class extends g {
  constructor(e) {
    super(e),
      (this.requiredClearBits = null),
      (this.requiredSetBits = null),
      (this.type = "bitfield");
  }
  clone() {
    return new b({
      field: this.field,
      requiredClearBits: u(this.requiredClearBits),
      requiredSetBits: u(this.requiredSetBits),
    });
  }
});
r(
  [
    i({
      type: [C],
      json: {
        write: {
          enabled: !0,
          overridePolicy() {
            return { enabled: !0, isRequired: !this.requiredSetBits };
          },
        },
      },
    }),
  ],
  d.prototype,
  "requiredClearBits",
  void 0
),
  r(
    [
      i({
        type: [C],
        json: {
          write: {
            enabled: !0,
            overridePolicy() {
              return { enabled: !0, isRequired: !this.requiredClearBits };
            },
          },
        },
      }),
    ],
    d.prototype,
    "requiredSetBits",
    void 0
  ),
  r([m({ pointCloudBitfieldFilter: "bitfield" })], d.prototype, "type", void 0),
  (d = b = r([y("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")], d));
const re = d;
var I;
let h = (I = class extends g {
  constructor(e) {
    super(e), (this.includedReturns = []), (this.type = "return");
  }
  clone() {
    return new I({
      field: this.field,
      includedReturns: u(this.includedReturns),
    });
  }
});
r(
  [
    i({
      type: [["firstOfMany", "last", "lastOfMany", "single"]],
      json: { write: { enabled: !0, isRequired: !0 } },
    }),
  ],
  h.prototype,
  "includedReturns",
  void 0
),
  r([m({ pointCloudReturnFilter: "return" })], h.prototype, "type", void 0),
  (h = I = r([y("esri.layers.pointCloudFilters.PointCloudReturnFilter")], h));
const ie = h;
var x;
let p = (x = class extends g {
  constructor(e) {
    super(e),
      (this.mode = "exclude"),
      (this.type = "value"),
      (this.values = []);
  }
  clone() {
    return new x({
      field: this.field,
      mode: this.mode,
      values: u(this.values),
    });
  }
});
r(
  [
    i({
      type: ["exclude", "include"],
      json: { write: { enabled: !0, isRequired: !0 } },
    }),
  ],
  p.prototype,
  "mode",
  void 0
),
  r([m({ pointCloudValueFilter: "value" })], p.prototype, "type", void 0),
  r(
    [i({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })],
    p.prototype,
    "values",
    void 0
  ),
  (p = x = r([y("esri.layers.pointCloudFilters.PointCloudValueFilter")], p));
const oe = {
  key: "type",
  base: g,
  typeMap: { value: p, bitfield: re, return: ie },
};
var S;
let v = (S = class extends q {
  constructor(e) {
    super(e), (this.type = "point-cloud-rgb"), (this.field = null);
  }
  clone() {
    return new S({ ...this.cloneProperties(), field: u(this.field) });
  }
});
r(
  [m({ pointCloudRGBRenderer: "point-cloud-rgb" })],
  v.prototype,
  "type",
  void 0
),
  r([i({ type: String, json: { write: !0 } })], v.prototype, "field", void 0),
  (v = S = r([y("esri.renderers.PointCloudRGBRenderer")], v));
const R = {
    key: "type",
    base: q,
    typeMap: {
      "point-cloud-class-breaks": Z,
      "point-cloud-rgb": v,
      "point-cloud-stretch": ee,
      "point-cloud-unique-value": te,
    },
    errorContext: "renderer",
  },
  j = W();
let o = class extends Y(E(_(L(N(O(V(X))))))) {
  constructor(...e) {
    super(...e),
      (this.operationalLayerType = "PointCloudLayer"),
      (this.popupEnabled = !0),
      (this.popupTemplate = null),
      (this.opacity = 1),
      (this.filters = []),
      (this.fields = null),
      (this.fieldsIndex = null),
      (this.outFields = null),
      (this.path = null),
      (this.legendEnabled = !0),
      (this.renderer = null),
      (this.type = "point-cloud");
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  get defaultPopupTemplate() {
    return this.attributeStorageInfo ? this.createPopupTemplate() : null;
  }
  getFieldDomain(e) {
    const t = this.fieldsIndex.get(e);
    return t && t.domain ? t.domain : null;
  }
  readServiceFields(e, t, n) {
    return Array.isArray(e)
      ? e.map((s) => {
          const a = new w();
          return (
            s.type === "FieldTypeInteger" &&
              ((s = u(s)).type = "esriFieldTypeInteger"),
            a.read(s, n),
            a
          );
        })
      : Array.isArray(t.attributeStorageInfo)
      ? t.attributeStorageInfo.map(
          (s) =>
            new w({
              name: s.name,
              type: s.name === "ELEVATION" ? "double" : "integer",
            })
        )
      : null;
  }
  set elevationInfo(e) {
    this._set("elevationInfo", e), this._validateElevationInfo();
  }
  writeRenderer(e, t, n, s) {
    A("layerDefinition.drawingInfo.renderer", e.write({}, s), t);
  }
  load(e) {
    const t = D(e) ? e.signal : null,
      n = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e)
        .catch(k)
        .then(() => this._fetchService(t));
    return this.addResolvingPromise(n), Promise.resolve(this);
  }
  createPopupTemplate(e) {
    const t = K(this, e);
    return (
      t &&
        (this._formatPopupTemplateReturnsField(t),
        this._formatPopupTemplateRGBField(t)),
      t
    );
  }
  _formatPopupTemplateReturnsField(e) {
    var a;
    const t = this.fieldsIndex.get("RETURNS");
    if (!t) return;
    const n =
      (a = e.fieldInfos) == null
        ? void 0
        : a.find((c) => c.fieldName === t.name);
    if (!n) return;
    const s = new T({
      name: "pcl-returns-decoded",
      title: t.alias || t.name,
      expression: `
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `,
    });
    (e.expressionInfos = [...(e.expressionInfos || []), s]),
      (n.fieldName = "expression/pcl-returns-decoded");
  }
  _formatPopupTemplateRGBField(e) {
    var a;
    const t = this.fieldsIndex.get("RGB");
    if (!t) return;
    const n =
      (a = e.fieldInfos) == null
        ? void 0
        : a.find((c) => c.fieldName === t.name);
    if (!n) return;
    const s = new T({
      name: "pcl-rgb-decoded",
      title: t.alias || t.name,
      expression: `
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `,
    });
    (e.expressionInfos = [...(e.expressionInfos || []), s]),
      (n.fieldName = "expression/pcl-rgb-decoded");
  }
  async queryCachedStatistics(e, t) {
    if ((await this.load(t), !this.attributeStorageInfo))
      throw new l(
        "scenelayer:no-cached-statistics",
        "Cached statistics are not available for this layer"
      );
    const n = this.fieldsIndex.get(e);
    if (!n)
      throw new l(
        "pointcloudlayer:field-unexisting",
        `Field '${e}' does not exist on the layer`
      );
    for (const s of this.attributeStorageInfo)
      if (s.name === n.name) {
        const a = $(this.parsedUrl.path, `./statistics/${s.key}`);
        return G(a, {
          query: { f: "json", token: this.apiKey },
          responseType: "json",
          signal: t ? t.signal : null,
        }).then((c) => c.data);
      }
    throw new l(
      "pointcloudlayer:no-cached-statistics",
      "Cached statistics for this attribute are not available"
    );
  }
  async saveAs(e, t) {
    return this._debouncedSaveOperations(
      P.SAVE_AS,
      {
        ...t,
        getTypeKeywords: () => this._getTypeKeywords(),
        portalItemLayerType: "point-cloud",
      },
      e
    );
  }
  async save() {
    const e = {
      getTypeKeywords: () => this._getTypeKeywords(),
      portalItemLayerType: "point-cloud",
    };
    return this._debouncedSaveOperations(P.SAVE, e);
  }
  validateLayer(e) {
    if (e.layerType && e.layerType !== "PointCloud")
      throw new l(
        "pointcloudlayer:layer-type-not-supported",
        "PointCloudLayer does not support this layer type",
        { layerType: e.layerType }
      );
    if (isNaN(this.version.major) || isNaN(this.version.minor))
      throw new l(
        "layer:service-version-not-supported",
        "Service version is not supported.",
        {
          serviceVersion: this.version.versionString,
          supportedVersions: "1.x-2.x",
        }
      );
    if (this.version.major > 2)
      throw new l(
        "layer:service-version-too-new",
        "Service version is too new.",
        {
          serviceVersion: this.version.versionString,
          supportedVersions: "1.x-2.x",
        }
      );
  }
  hasCachedStatistics(e) {
    return (
      this.attributeStorageInfo != null &&
      this.attributeStorageInfo.some((t) => t.name === e)
    );
  }
  _getTypeKeywords() {
    return ["PointCloud"];
  }
  _validateElevationInfo() {
    const e = this.elevationInfo;
    e &&
      (e.mode !== "absolute-height" &&
        F.getLogger(this.declaredClass).warn(
          ".elevationInfo=",
          "Point cloud layers only support absolute-height elevation mode"
        ),
      e.featureExpressionInfo &&
        e.featureExpressionInfo.expression !== "0" &&
        F.getLogger(this.declaredClass).warn(
          ".elevationInfo=",
          "Point cloud layers do not support featureExpressionInfo"
        ));
  }
};
r(
  [i({ type: ["PointCloudLayer"] })],
  o.prototype,
  "operationalLayerType",
  void 0
),
  r([i(M)], o.prototype, "popupEnabled", void 0),
  r(
    [i({ type: U, json: { name: "popupInfo", write: !0 } })],
    o.prototype,
    "popupTemplate",
    void 0
  ),
  r(
    [i({ readOnly: !0, json: { read: !1 } })],
    o.prototype,
    "defaultPopupTemplate",
    null
  ),
  r(
    [
      i({
        readOnly: !0,
        json: {
          write: !1,
          read: !1,
          origins: { "web-document": { write: !1, read: !1 } },
        },
      }),
    ],
    o.prototype,
    "opacity",
    void 0
  ),
  r([i({ type: ["show", "hide"] })], o.prototype, "listMode", void 0),
  r(
    [
      i({
        types: [oe],
        json: {
          origins: { service: { read: { source: "filters" } } },
          name: "layerDefinition.filters",
          write: !0,
        },
      }),
    ],
    o.prototype,
    "filters",
    void 0
  ),
  r([i({ type: [w] })], o.prototype, "fields", void 0),
  r([i(j.fieldsIndex)], o.prototype, "fieldsIndex", void 0),
  r(
    [z("service", "fields", ["fields", "attributeStorageInfo"])],
    o.prototype,
    "readServiceFields",
    null
  ),
  r([i(j.outFields)], o.prototype, "outFields", void 0),
  r([i({ readOnly: !0 })], o.prototype, "attributeStorageInfo", void 0),
  r([i(Q)], o.prototype, "elevationInfo", null),
  r(
    [
      i({
        type: String,
        json: {
          origins: {
            "web-scene": { read: !0, write: !0 },
            "portal-item": { read: !0, write: !0 },
          },
          read: !1,
        },
      }),
    ],
    o.prototype,
    "path",
    void 0
  ),
  r([i(H)], o.prototype, "legendEnabled", void 0),
  r(
    [
      i({
        types: R,
        json: {
          origins: { service: { read: { source: "drawingInfo.renderer" } } },
          name: "layerDefinition.drawingInfo.renderer",
          write: {
            target: {
              "layerDefinition.drawingInfo.renderer": { types: R },
              "layerDefinition.drawingInfo.transparency": { type: Number },
            },
          },
        },
      }),
    ],
    o.prototype,
    "renderer",
    void 0
  ),
  r([J("renderer")], o.prototype, "writeRenderer", null),
  r([i({ json: { read: !1 }, readOnly: !0 })], o.prototype, "type", void 0),
  (o = r([y("esri.layers.PointCloudLayer")], o));
const ge = o;
export { ge as default };
