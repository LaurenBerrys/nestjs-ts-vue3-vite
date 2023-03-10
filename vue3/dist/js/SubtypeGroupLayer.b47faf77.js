import { q as Y } from "./Table.e9c997d5.js";
import {
  ae as i,
  af as s,
  dl as S,
  dm as V,
  ag as P,
  dd as ee,
  kk as te,
  ki as re,
  b3 as N,
  ev as U,
  bD as ie,
  bO as O,
  i5 as se,
  Q as ne,
  iX as ae,
  ak as x,
  r as k,
  s as m,
  it as oe,
  kl as M,
  cH as A,
  dy as Q,
  av as H,
  km as le,
  iZ as pe,
  i_ as ue,
  i$ as de,
  j0 as ye,
  kh as he,
  kg as ce,
  iv as be,
  ai as me,
  j4 as B,
  W as J,
  kn as fe,
  jw as ge,
  ju as ve,
  iw as z,
  ko as we,
  kp as Fe,
  kq as Oe,
  i3 as Se,
  kr as Ie,
  kb as je,
  im as Ee,
  iW as Te,
  io as Ce,
  ip as ke,
  es as _e,
  et as xe,
  eu as Le,
  iT as Pe,
  iA as Ae,
  C as De,
  P as L,
  G as qe,
  an as Ge,
  E as Re,
  a2 as $e,
  ks as Ve,
  kt as Ne,
  cy as Ue,
  eD as Me,
  iF as Qe,
  ku as He,
  kv as Be,
  kw as Je,
  a1 as ze,
  kx as We,
  ky as Ze,
  iB as Ke,
  kz as Xe,
  kA as Ye,
  kB as et,
  kC as tt,
  kD as rt,
  kE as it,
  jm as st,
  iY as nt,
  kF as at,
  iE as ot,
  jF as D,
  kG as lt,
  db as pt,
} from "./index.8fd7165c.js";
import "./vue.a7ce1fbe.js";
import "./NvapForm.feb8550d.js";
import "./vue-i18n.67a42238.js";
import "./vue-router.805f6e2a.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
let g = class extends ee {
  constructor() {
    super(...arguments),
      (this.code = null),
      (this.defaultValues = {}),
      (this.domains = null),
      (this.name = null);
  }
  readDomains(e) {
    if (!e) return null;
    const t = {};
    for (const r of Object.keys(e)) t[r] = te(e[r]);
    return t;
  }
  writeDomains(e, t) {
    var n;
    if (!e) return;
    const r = {};
    for (const a of Object.keys(e))
      e[a] && (r[a] = (n = e[a]) == null ? void 0 : n.toJSON());
    t.domains = r;
  }
};
i([s({ type: Number, json: { write: !0 } })], g.prototype, "code", void 0),
  i(
    [s({ type: Object, json: { write: !0 } })],
    g.prototype,
    "defaultValues",
    void 0
  ),
  i([s({ json: { write: !0 } })], g.prototype, "domains", void 0),
  i([S("domains")], g.prototype, "readDomains", null),
  i([V("domains")], g.prototype, "writeDomains", null),
  i([s({ type: String, json: { write: !0 } })], g.prototype, "name", void 0),
  (g = i([P("esri.layers.support.Subtype")], g));
const ut = g,
  dt = [
    "charts",
    "editingEnabled",
    "formTemplate",
    "labelsVisible",
    "labelingInfo",
    "legendEnabled",
    "minScale",
    "maxScale",
    "opacity",
    "popupEnabled",
    "popupTemplate",
    "renderer",
    "subtypeCode",
    "templates",
    "title",
    "visible",
  ],
  W = {
    key: "type",
    base: fe,
    errorContext: "renderer",
    typeMap: { simple: x, "unique-value": ge, "class-breaks": ve },
  },
  q = z(),
  G = re({ types: W });
let yt = 0;
function j(e) {
  const t = e.json.write;
  return (
    typeof t == "object"
      ? (t.ignoreOrigin = !0)
      : (e.json.write = { ignoreOrigin: !0 }),
    e
  );
}
function ht(e) {
  switch (e) {
    case "point":
    case "multipoint":
      return Oe.clone();
    case "polyline":
      return Fe.clone();
    case "polygon":
    case "multipatch":
      return we.clone();
    default:
      return null;
  }
}
function Z(e, t) {
  var r;
  return e == null
    ? null
    : (r = t.subtypes) == null
    ? void 0
    : r.find((n) => n.code === e);
}
function ct(e, t) {
  let r = null;
  switch (t.geometryType) {
    case "esriGeometryPoint":
    case "esriGeometryMultipoint":
      r = "point";
      break;
    case "esriGeometryPolyline":
      r = "line";
      break;
    case "esriGeometryPolygon":
    case "esriGeometryMultiPatch":
      r = "polygon";
      break;
    default:
      t.type, (r = null);
  }
  const n = {},
    a = Z(e, t);
  if (k(a)) {
    const { defaultValues: o } = a;
    for (const p in o) n[p] = o[p];
  }
  return (
    (n[t.subtypeField] = e),
    new B({ name: "New Feature", drawingTool: r, prototype: { attributes: n } })
  );
}
const K = "esri.layers.support.SubtypeSublayer";
let l = class extends N(U(ie(Se))) {
  constructor(e) {
    super(e),
      (this.charts = null),
      (this.editingEnabled = !0),
      (this.fieldOverrides = null),
      (this.fieldsIndex = null),
      (this.formTemplate = null),
      (this.id = `${Date.now().toString(16)}-subtype-sublayer-${yt++}`),
      (this.type = "subtype-sublayer"),
      (this.labelsVisible = !0),
      (this.labelingInfo = null),
      (this.layerType = "ArcGISFeatureLayer"),
      (this.legendEnabled = !0),
      (this.listMode = "show"),
      (this.minScale = 0),
      (this.maxScale = 0),
      (this.opacity = 1),
      (this.popupEnabled = !0),
      (this.popupTemplate = null),
      (this.subtypeCode = null),
      (this.templates = null),
      (this.title = null),
      (this.visible = !0);
  }
  get capabilities() {
    var e;
    return (e = this.parent) == null ? void 0 : e.capabilities;
  }
  get effectiveCapabilities() {
    var e;
    return (e = this.parent) == null ? void 0 : e.effectiveCapabilities;
  }
  get effectiveEditingEnabled() {
    const { parent: e } = this;
    return e
      ? e.effectiveEditingEnabled && this.editingEnabled
      : this.editingEnabled;
  }
  get elevationInfo() {
    var e;
    return (e = this.parent) == null ? void 0 : e.elevationInfo;
  }
  writeFieldOverrides(e, t, r) {
    const { fields: n, parent: a } = this;
    let o;
    if (n) {
      o = [];
      let p = 0;
      n.forEach(({ name: h, alias: c, editable: v, visible: y }) => {
        var E;
        if (!y) return;
        const u =
          (E = a == null ? void 0 : a.fields) == null
            ? void 0
            : E.find((I) => I.name === h);
        if (!u) return;
        const f = { name: h };
        let F = !1;
        c !== u.alias && ((f.alias = c), (F = !0)),
          v !== u.editable && ((f.editable = v), (F = !0)),
          o.push(f),
          F && p++;
      }),
        p === 0 && o.length === n.length && (o = null);
    } else o = O(e);
    o != null && o.length && se(r, o, t);
  }
  get fields() {
    const { parent: e, fieldOverrides: t, subtypeCode: r } = this,
      n = e == null ? void 0 : e.fields;
    if (!e || !(n != null && n.length)) return null;
    const { subtypes: a, subtypeField: o } = e,
      p = a == null ? void 0 : a.find((y) => y.code === r),
      h = p == null ? void 0 : p.defaultValues,
      c = p == null ? void 0 : p.domains,
      v = [];
    for (const y of n) {
      const u = y.clone(),
        { name: f } = u,
        F = t == null ? void 0 : t.find((T) => T.name === f);
      if (((u.visible = !t || !!F), F)) {
        const { alias: T, editable: X } = F;
        T && (u.alias = T), X === !1 && (u.editable = !1);
      }
      const E = (h == null ? void 0 : h[f]) ?? null;
      u.defaultValue = f === o ? r : E;
      const I = (c == null ? void 0 : c[f]) ?? null;
      (u.domain =
        f === o
          ? null
          : I
          ? I.type === "inherited"
            ? u.domain
            : I.clone()
          : null),
        v.push(u);
    }
    return v;
  }
  get geometryType() {
    var e;
    return (e = this.parent) == null ? void 0 : e.geometryType;
  }
  get effectiveScaleRange() {
    const { minScale: e, maxScale: t } = this;
    return { minScale: e, maxScale: t };
  }
  get objectIdField() {
    var e;
    return (
      this.parent || ne.getLogger(K).error(w("objectIdField")),
      (e = this.parent) == null ? void 0 : e.objectIdField
    );
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set renderer(e) {
    ae(e, this.fieldsIndex), this._override("renderer", e);
  }
  get renderer() {
    if (this._isOverridden("renderer")) return this._get("renderer");
    const { parent: e } = this;
    return e && !e.isTable && e.geometryType !== "mesh"
      ? (function (t) {
          return new x({ symbol: ht(t) });
        })(e.geometryType)
      : null;
  }
  readRendererFromService(e, t, r) {
    var h, c, v;
    if (t.type === "Table") return null;
    const n = (h = t.drawingInfo) == null ? void 0 : h.renderer,
      a = G(n, t, r);
    let o;
    const { subtypeCode: p } = this;
    if (
      p != null &&
      (function (y, u) {
        return (
          !!u &&
          (y == null ? void 0 : y.type) === "unique-value" &&
          typeof y.field == "string" &&
          y.field.toLowerCase() === u.toLowerCase() &&
          !y.field2 &&
          !y.field3 &&
          !y.valueExpression
        );
      })(a, t.subtypeField)
    ) {
      const y =
        (c = a.uniqueValueInfos) == null
          ? void 0
          : c.find(
              ({ value: u }) =>
                (u = typeof u == "number" ? String(u) : u) === String(p)
            );
      y && (o = new x({ symbol: y.symbol }));
    } else
      (a == null ? void 0 : a.type) !== "simple" ||
        ((v = a.visualVariables) != null && v.length) ||
        (o = a);
    return o;
  }
  readRenderer(e, t, r) {
    var o, p, h;
    const n =
      (p =
        (o = t == null ? void 0 : t.layerDefinition) == null
          ? void 0
          : o.drawingInfo) == null
        ? void 0
        : p.renderer;
    return n
      ? (
          (h = n.visualVariables) == null
            ? void 0
            : h.some((c) => c.type !== "rotationInfo")
        )
        ? void 0
        : G(n, t, r) || void 0
      : void 0;
  }
  get spatialReference() {
    var e;
    return (e = this.parent) == null ? void 0 : e.spatialReference;
  }
  readTemplatesFromService(e, t) {
    return [ct(this.subtypeCode, t)];
  }
  readTitleFromService(e, t) {
    const r = Z(this.subtypeCode, t);
    return k(r) ? r.name : null;
  }
  get url() {
    var e;
    return (e = this.parent) == null ? void 0 : e.url;
  }
  get userHasUpdateItemPrivileges() {
    var e;
    return !!((e = this.parent) != null && e.userHasUpdateItemPrivileges);
  }
  async addAttachment(e, t) {
    const { parent: r } = this;
    if (!r) throw w("addAttachment");
    if (e.getAttribute(r.subtypeField) !== this.subtypeCode)
      throw new m(
        "subtype-sublayer:addAttachment",
        "The feature provided does not belong to this SubtypeSublayer"
      );
    return r.addAttachment(e, t);
  }
  async updateAttachment(e, t, r) {
    const { parent: n } = this;
    if (!n) throw w("updateAttachment");
    if (e.getAttribute(n.subtypeField) !== this.subtypeCode)
      throw new m(
        "subtype-sublayer:updateAttachment",
        "The feature provided does not belong to this SubtypeSublayer"
      );
    return n.updateAttachment(e, t, r);
  }
  async deleteAttachments(e, t) {
    const { parent: r } = this;
    if (!r) throw w("deleteAttachments");
    if (e.getAttribute(r.subtypeField) !== this.subtypeCode)
      throw new m(
        "subtype-sublayer:deleteAttachments",
        "The feature provided does not belong to this SubtypeSublayer"
      );
    return r.deleteAttachments(e, t);
  }
  async applyEdits(e, t) {
    if (!this.parent) throw w("applyEdits");
    return this.parent.applyEdits(e, t);
  }
  createPopupTemplate(e) {
    let t = this;
    const { parent: r, fields: n, title: a } = this;
    if (r) {
      const { displayField: o, editFieldsInfo: p, objectIdField: h } = r;
      t = {
        displayField: o,
        editFieldsInfo: p,
        fields: n,
        objectIdField: h,
        title: a,
      };
    }
    return oe(t, e);
  }
  createQuery() {
    if (!this.parent) throw w("createQuery");
    const e = M(this.parent),
      t = `${this.parent.subtypeField}=${this.subtypeCode}`;
    return (e.where = A(t, this.parent.definitionExpression)), e;
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFieldDomain(e) {
    return this._getLayerDomain(e);
  }
  hasUserOverrides() {
    return dt.some((e) => this.originIdOf(e) === Q.USER);
  }
  async queryAttachments(e, t) {
    const r = await this.load();
    if (!r.parent) throw w("queryAttachments");
    const n = e.clone();
    return (
      (n.where = R(n.where, r.parent.subtypeField, r.subtypeCode)),
      r.parent.queryAttachments(e, t)
    );
  }
  async queryFeatures(e, t) {
    const r = await this.load();
    if (!r.parent) throw w("queryFeatures");
    const n = H.from(e) ?? r.createQuery();
    return (
      k(e) && (n.where = R(n.where, r.parent.subtypeField, r.subtypeCode)),
      r.parent.queryFeatures(n, t)
    );
  }
  _getLayerDomain(e) {
    const t = this.fieldsIndex.get(e);
    return t ? t.domain : null;
  }
};
i([s({ readOnly: !0, json: { read: !1 } })], l.prototype, "capabilities", null),
  i(
    [s({ readOnly: !0, json: { read: !1 } })],
    l.prototype,
    "effectiveCapabilities",
    null
  ),
  i(
    [s({ json: { write: { ignoreOrigin: !0 } } })],
    l.prototype,
    "charts",
    void 0
  ),
  i(
    [
      s({
        type: Boolean,
        nonNullable: !0,
        json: { name: "enableEditing", write: { ignoreOrigin: !0 } },
      }),
    ],
    l.prototype,
    "editingEnabled",
    void 0
  ),
  i(
    [s({ type: Boolean, readOnly: !0 })],
    l.prototype,
    "effectiveEditingEnabled",
    null
  ),
  i(
    [s({ readOnly: !0, json: { read: !1 } })],
    l.prototype,
    "elevationInfo",
    null
  ),
  i(
    [
      s({
        readOnly: !0,
        json: {
          name: "layerDefinition.fieldOverrides",
          origins: { service: { read: !1 } },
          write: { ignoreOrigin: !0, allowNull: !0 },
        },
      }),
    ],
    l.prototype,
    "fieldOverrides",
    void 0
  ),
  i([V("fieldOverrides")], l.prototype, "writeFieldOverrides", null),
  i(
    [s({ ...q.fields, readOnly: !0, json: { read: !1 } })],
    l.prototype,
    "fields",
    null
  ),
  i([s(q.fieldsIndex)], l.prototype, "fieldsIndex", void 0),
  i(
    [s({ type: le, json: { name: "formInfo", write: { ignoreOrigin: !0 } } })],
    l.prototype,
    "formTemplate",
    void 0
  ),
  i(
    [
      s({
        type: String,
        readOnly: !0,
        json: {
          origins: { service: { read: !1 } },
          write: { ignoreOrigin: !0 },
        },
      }),
    ],
    l.prototype,
    "id",
    void 0
  ),
  i(
    [s({ readOnly: !0, json: { read: !1 } })],
    l.prototype,
    "geometryType",
    null
  ),
  i([s({ readOnly: !0, json: { read: !1 } })], l.prototype, "type", void 0),
  i([s(j(O(pe)))], l.prototype, "labelsVisible", void 0),
  i(
    [
      s({
        type: [ue],
        json: {
          name: "layerDefinition.drawingInfo.labelingInfo",
          origins: { service: { read: !1 } },
          read: { reader: de },
          write: { ignoreOrigin: !0 },
        },
      }),
    ],
    l.prototype,
    "labelingInfo",
    void 0
  ),
  i(
    [
      s({
        type: ["ArcGISFeatureLayer"],
        readOnly: !0,
        json: { read: !1, write: { ignoreOrigin: !0 } },
      }),
    ],
    l.prototype,
    "layerType",
    void 0
  ),
  i([s(j(O(ye)))], l.prototype, "legendEnabled", void 0),
  i([s({ type: ["show", "hide"] })], l.prototype, "listMode", void 0),
  i(
    [
      s(
        (() => {
          const e = O(he);
          return (e.json.origins.service.read = !1), j(e);
        })()
      ),
    ],
    l.prototype,
    "minScale",
    void 0
  ),
  i(
    [
      s(
        (() => {
          const e = O(ce);
          return (e.json.origins.service.read = !1), j(e);
        })()
      ),
    ],
    l.prototype,
    "maxScale",
    void 0
  ),
  i([s({ readOnly: !0 })], l.prototype, "effectiveScaleRange", null),
  i(
    [s({ readOnly: !0, json: { read: !1 } })],
    l.prototype,
    "objectIdField",
    null
  ),
  i(
    [
      s({
        type: Number,
        range: { min: 0, max: 1 },
        nonNullable: !0,
        json: { write: { ignoreOrigin: !0 } },
      }),
    ],
    l.prototype,
    "opacity",
    void 0
  ),
  i([s()], l.prototype, "parent", void 0),
  i([s(j(O(be)))], l.prototype, "popupEnabled", void 0),
  i(
    [s({ type: me, json: { name: "popupInfo", write: { ignoreOrigin: !0 } } })],
    l.prototype,
    "popupTemplate",
    void 0
  ),
  i([s({ readOnly: !0 })], l.prototype, "defaultPopupTemplate", null),
  i(
    [
      s({
        types: W,
        json: {
          write: {
            target: "layerDefinition.drawingInfo.renderer",
            ignoreOrigin: !0,
          },
        },
      }),
    ],
    l.prototype,
    "renderer",
    null
  ),
  i(
    [
      S("service", "renderer", [
        "drawingInfo.renderer",
        "subtypeField",
        "type",
      ]),
    ],
    l.prototype,
    "readRendererFromService",
    null
  ),
  i(
    [S("renderer", ["layerDefinition.drawingInfo.renderer"])],
    l.prototype,
    "readRenderer",
    null
  ),
  i(
    [s({ readOnly: !0, json: { read: !1 } })],
    l.prototype,
    "spatialReference",
    null
  ),
  i(
    [
      s({
        type: Number,
        json: {
          origins: { service: { read: !1 } },
          write: { ignoreOrigin: !0 },
        },
      }),
    ],
    l.prototype,
    "subtypeCode",
    void 0
  ),
  i(
    [
      s({
        type: [B],
        json: {
          name: "layerDefinition.templates",
          write: { ignoreOrigin: !0 },
        },
      }),
    ],
    l.prototype,
    "templates",
    void 0
  ),
  i(
    [
      S("service", "templates", [
        "geometryType",
        "subtypeField",
        "subtypes",
        "type",
      ]),
    ],
    l.prototype,
    "readTemplatesFromService",
    null
  ),
  i(
    [s({ type: String, json: { write: { ignoreOrigin: !0 } } })],
    l.prototype,
    "title",
    void 0
  ),
  i(
    [S("service", "title", ["subtypes"])],
    l.prototype,
    "readTitleFromService",
    null
  ),
  i([s({ readOnly: !0, json: { read: !1 } })], l.prototype, "url", null),
  i([s({ readOnly: !0 })], l.prototype, "userHasUpdateItemPrivileges", null),
  i(
    [
      s({
        type: Boolean,
        nonNullable: !0,
        json: { name: "visibility", write: { ignoreOrigin: !0 } },
      }),
    ],
    l.prototype,
    "visible",
    void 0
  ),
  (l = i([P(K)], l));
const R = (e, t, r) => {
    const n = new RegExp(`${t}=[0-9]`),
      a = `${t}=${r}`,
      o = J(e, "");
    return n.test(o) ? o.replace(n, a) : A(a, o);
  },
  w = (e) =>
    new m(
      `This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`
    ),
  C = l,
  b = "SubtypeGroupLayer";
function $(e, t) {
  return new m(
    "layer:unsupported",
    `Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,
    { layer: e }
  );
}
const _ = z();
let d = class extends Ie(je(Ee(Te(Ce(ke(_e(xe(Le(U(Pe(Ae(N(pt))))))))))))) {
  constructor(...e) {
    super(...e),
      (this._handles = new De()),
      (this._sublayersCollectionChanged = !1),
      (this._sublayerLookup = new Map()),
      (this.fields = null),
      (this.fieldsIndex = null),
      (this.outFields = null),
      (this.subtypes = null),
      (this.sublayers = new (L.ofType(C))()),
      (this.timeInfo = null),
      (this.title = "Layer"),
      (this.type = "subtype-group"),
      this.addHandles(
        qe(
          () => this.sublayers,
          (t, r) => this._handleSublayersChange(t, r),
          Ge
        )
      );
  }
  destroy() {
    var e;
    (e = this.source) == null || e.destroy(),
      (this._handles = Re(this._handles));
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  load(e) {
    const t = k(e) ? e.signal : null,
      r = this.loadFromPortal({ supportedTypes: ["Feature Service"] }, e)
        .catch($e)
        .then(async () => {
          if (!this.url)
            throw new m(
              "subtype-grouplayer:missing-url-or-source",
              "SubtypeGroupLayer must be created with either a url or a portal item"
            );
          if (this.layerId == null)
            throw new m(
              "subtype-grouplayer:missing-layerid",
              "layerId is required for a SubtypeGroupLayer created with url"
            );
          return this._initLayerProperties(await this.createGraphicsSource(t));
        })
        .then(() => this._setUserPrivileges(this.serviceItemId, e))
        .then(() => Ve(this, e));
    return this.addResolvingPromise(r), Promise.resolve(this);
  }
  get createQueryVersion() {
    return (
      this.commitProperty("definitionExpression"),
      this.commitProperty("timeExtent"),
      this.commitProperty("timeOffset"),
      this.commitProperty("geometryType"),
      this.commitProperty("gdbVersion"),
      this.commitProperty("historicMoment"),
      this.commitProperty("returnZ"),
      this.commitProperty("capabilities"),
      this.commitProperty("returnM"),
      (this._get("createQueryVersion") ?? 0) + 1
    );
  }
  get editingEnabled() {
    return (
      this.loaded &&
      this.capabilities != null &&
      this.capabilities.operations.supportsEditing &&
      this.userHasEditingPrivileges
    );
  }
  get effectiveEditingEnabled() {
    return Ne(this);
  }
  get parsedUrl() {
    const e = Ue(this.url);
    return (
      e != null &&
        this.layerId != null &&
        (e.path = Me(e.path, this.layerId.toString())),
      e
    );
  }
  set source(e) {
    this._get("source") !== e && this._set("source", e);
  }
  readTitleFromService(e, { name: t }) {
    return this.url ? Qe(this.url, t) : t;
  }
  async addAttachment(e, t) {
    return He(this, e, t, b);
  }
  async updateAttachment(e, t, r) {
    return Be(this, e, t, r, b);
  }
  async applyEdits(e, t) {
    return Je(this, e, t);
  }
  on(e, t) {
    return super.on(e, t);
  }
  async createGraphicsSource(e) {
    const { default: t } = await ze(
      Y(
        () => import("./FeatureLayerSource.c8abee35.js"),
        [
          "js/FeatureLayerSource.c8abee35.js",
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
          "js/clientSideDefaults.4b2f5b2f.js",
          "js/QueryEngineCapabilities.42e44ded.js",
          "js/QueryTask.6847195b.js",
          "js/executeForIds.3a002380.js",
        ]
      ),
      e
    );
    return new t({ layer: this }).load({ signal: e });
  }
  createQuery() {
    const e = M(this),
      t = this.sublayers.map((r) => r.subtypeCode);
    return (
      (e.where = A(
        `${this.subtypeField} IN (${t.join(",")})`,
        this.definitionExpression
      )),
      e
    );
  }
  async deleteAttachments(e, t) {
    return We(this, e, t, b);
  }
  async fetchRecomputedExtents(e) {
    return Ze(this, e, b);
  }
  getFieldDomain(e, t) {
    return this._getLayerDomain(e);
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  findSublayerForFeature(e) {
    const t = this.fieldsIndex.get(this.subtypeField),
      r = e.attributes[t.name];
    return this._sublayerLookup.get(r);
  }
  loadAll() {
    return Ke(this, (e) => {
      e(this.sublayers);
    });
  }
  async queryAttachments(e, t) {
    return Xe(this, e, t, b);
  }
  async queryFeatures(e, t) {
    const r = await this.load(),
      n = H.from(e) ?? r.createQuery(),
      a = J(n.outFields, []);
    a.includes(this.subtypeField) ||
      (a.push(this.subtypeField), (n.outFields = a));
    const o = await r.source.queryFeatures(n, t);
    if (o != null && o.features)
      for (const p of o.features)
        p.layer = p.sourceLayer = this.findSublayerForFeature(p);
    return o;
  }
  async queryObjectIds(e, t) {
    return Ye(this, e, t, b);
  }
  async queryFeatureCount(e, t) {
    return et(this, e, t, b);
  }
  async queryExtent(e, t) {
    return tt(this, e, t, b);
  }
  async queryRelatedFeatures(e, t) {
    return rt(this, e, t, b);
  }
  async queryRelatedFeaturesCount(e, t) {
    return it(this, e, t, b);
  }
  write(e, t) {
    var o;
    const { origin: r, layerContainerType: n, messages: a } = t;
    if (this.isTable) {
      if (r === "web-scene" || (r === "web-map" && n !== "tables"))
        return (
          a == null ||
            a.push(
              $(
                this,
                "using a table source cannot be written to web scenes and web maps"
              )
            ),
          null
        );
    } else if (this.loaded && r === "web-map" && n === "tables")
      return (
        a == null ||
          a.push(
            $(
              this,
              "using a non-table source cannot be written to tables in web maps"
            )
          ),
        null
      );
    return (o = this.sublayers) != null && o.length
      ? super.write(e, t)
      : (a == null ||
          a.push(
            new m(
              "web-document-write:invalid-property",
              `Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,
              { layer: this }
            )
          ),
        null);
  }
  serviceSupportsSpatialReference(e) {
    return !!this.loaded && st(this, e);
  }
  _getLayerDomain(e) {
    const t = this.fieldsIndex.get(e);
    return t ? t.domain : null;
  }
  async _initLayerProperties(e) {
    var r;
    this._set("source", e);
    const { sourceJSON: t } = e;
    if (
      (t &&
        ((this.sourceJSON = t),
        this.read(t, { origin: "service", url: this.parsedUrl })),
      this.isTable)
    )
      throw new m(
        "subtype-grouplayer:unsupported-source",
        "SubtypeGroupLayer cannot be created using a layer with table source"
      );
    if (!((r = this.subtypes) != null && r.length))
      throw new m(
        "subtype-grouplayer:missing-subtypes",
        "SubtypeGroupLayer must be created using a layer with subtypes"
      );
    this._verifyFields(), nt(this.timeInfo, this.fieldsIndex);
  }
  async hasDataChanged() {
    return at(this);
  }
  _verifyFields() {
    var t, r;
    const e = ((t = this.parsedUrl) == null ? void 0 : t.path) ?? "undefined";
    this.objectIdField,
      this.isTable ||
        e.search(/\/FeatureServer\//i) !== -1 ||
        (r = this.fields) == null ||
        r.some((n) => n.type === "geometry");
  }
  _handleSublayersChange(e, t) {
    t &&
      (t.forEach((r) => {
        r.parent = null;
      }),
      this.handles.remove("sublayers-owner"),
      this._sublayerLookup.clear()),
      e &&
        (e.forEach((r) => {
          (r.parent = this), this._sublayerLookup.set(r.subtypeCode, r);
        }),
        (this._sublayersCollectionChanged = !1),
        this.handles.add(
          [
            e.on("after-add", ({ item: r }) => {
              (r.parent = this), this._sublayerLookup.set(r.subtypeCode, r);
            }),
            e.on("after-remove", ({ item: r }) => {
              (r.parent = null), this._sublayerLookup.delete(r.subtypeCode);
            }),
            e.on("after-changes", () => {
              this._sublayersCollectionChanged = !0;
            }),
          ],
          "sublayers-owner"
        ));
  }
};
i([s({ readOnly: !0 })], d.prototype, "createQueryVersion", null),
  i([s({ readOnly: !0 })], d.prototype, "editingEnabled", null),
  i([s({ readOnly: !0 })], d.prototype, "effectiveEditingEnabled", null),
  i(
    [
      s({
        ..._.fields,
        readOnly: !0,
        json: { origins: { service: { read: !0 } }, read: !1 },
      }),
    ],
    d.prototype,
    "fields",
    void 0
  ),
  i([s(_.fieldsIndex)], d.prototype, "fieldsIndex", void 0),
  i([s(ot)], d.prototype, "id", void 0),
  i(
    [s({ type: ["show", "hide", "hide-children"] })],
    d.prototype,
    "listMode",
    void 0
  ),
  i(
    [s({ value: "SubtypeGroupLayer", type: ["SubtypeGroupLayer"] })],
    d.prototype,
    "operationalLayerType",
    void 0
  ),
  i([s(_.outFields)], d.prototype, "outFields", void 0),
  i([s({ readOnly: !0 })], d.prototype, "parsedUrl", null),
  i([s()], d.prototype, "source", null),
  i(
    [
      s({
        type: [ut],
        readOnly: !0,
        json: { read: !1, origins: { service: { read: !0 } } },
      }),
    ],
    d.prototype,
    "subtypes",
    void 0
  ),
  i(
    [
      s({
        type: L.ofType(C),
        json: {
          origins: {
            service: {
              read: {
                source: "subtypes",
                reader: (e, t, r) => {
                  const n = e.map(({ code: a }) => {
                    const o = new C({ subtypeCode: a });
                    return o.read(t, r), o;
                  });
                  return new (L.ofType(C))(n);
                },
              },
            },
          },
          name: "layers",
          write: {
            overridePolicy(e, t, r) {
              const n = this.originOf("sublayers"),
                a = Q.PORTAL_ITEM;
              let o = !0;
              if (D(n) === a && D(r.origin) > a) {
                const p = e.some((h) => h.hasUserOverrides());
                o = this._sublayersCollectionChanged || p;
              }
              return { enabled: o, ignoreOrigin: !0 };
            },
          },
        },
      }),
    ],
    d.prototype,
    "sublayers",
    void 0
  ),
  i([s({ type: lt })], d.prototype, "timeInfo", void 0),
  i(
    [
      s({
        json: {
          origins: {
            "portal-item": {
              write: { ignoreOrigin: !0, writerEnsuresNonNull: !0 },
            },
          },
        },
      }),
    ],
    d.prototype,
    "title",
    void 0
  ),
  i(
    [S("service", "title", ["name"])],
    d.prototype,
    "readTitleFromService",
    null
  ),
  i([s({ json: { read: !1 } })], d.prototype, "type", void 0),
  (d = i([P("esri.layers.SubtypeGroupLayer")], d));
const St = d;
export { St as default };
