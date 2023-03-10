import {
  ae as a,
  af as n,
  dl as S,
  ar as K,
  iE as Z,
  iv as Y,
  aH as ee,
  ag as J,
  U as z,
  cy as re,
  f as te,
  b3 as ie,
  ev as se,
  bD as ae,
  s as g,
  dy as p,
  jR as le,
  cV as oe,
  jS as ne,
  w as ye,
  hO as pe,
  Q as T,
  jT as k,
  hT as ue,
  P as Q,
  aL as de,
  jf as A,
  it as ce,
  av as he,
  bO as _,
  jU as fe,
  cH as be,
  r as $,
  cI as me,
  ha as U,
  gr as ge,
  jV as Se,
  gO as C,
  i_ as Ie,
  dm as O,
  ai as ve,
  j2 as we,
  iu as Ee,
  i6 as W,
  dk as G,
  dT as Le,
  j5 as xe,
  jF as V,
  i3 as Oe,
  ee as Te,
  G as De,
  an as Pe,
  jW as _e,
} from "./index.8fd7165c.js";
import { r as Fe } from "./Version.a4557b9e.js";
import { q as Ae } from "./Table.e9c997d5.js";
import { x as je } from "./QueryTask.6847195b.js";
import { t as Ve } from "./sublayerUtils.aa8d3bb7.js";
const Be = (e) => {
  let t = class extends e {
    constructor() {
      super(...arguments),
        (this.capabilities = void 0),
        (this.copyright = null),
        (this.fullExtent = null),
        (this.legendEnabled = !0),
        (this.spatialReference = null),
        (this.version = void 0),
        (this._allLayersAndTablesPromise = null),
        (this._allLayersAndTablesMap = null);
    }
    readCapabilities(r, i) {
      const s =
        i.capabilities &&
        i.capabilities.split(",").map((L) => L.toLowerCase().trim());
      if (!s)
        return {
          operations: {
            supportsExportMap: !1,
            supportsExportTiles: !1,
            supportsIdentify: !1,
            supportsQuery: !1,
            supportsTileMap: !1,
          },
          exportMap: null,
          exportTiles: null,
        };
      const o = this.type,
        y = o !== "tile" && !!i.supportsDynamicLayers,
        u = s.includes("query"),
        c = s.includes("map"),
        m = !!i.exportTilesAllowed,
        f = s.includes("tilemap"),
        v = s.includes("data"),
        D = o !== "tile" && (!i.tileInfo || y),
        P = o !== "tile" && (!i.tileInfo || y),
        d = o !== "tile",
        h = i.cimVersion && Fe.parse(i.cimVersion),
        I = (h == null ? void 0 : h.since(1, 4)) ?? !1,
        w = (h == null ? void 0 : h.since(2, 0)) ?? !1;
      return {
        operations: {
          supportsExportMap: c,
          supportsExportTiles: m,
          supportsIdentify: u,
          supportsQuery: v,
          supportsTileMap: f,
        },
        exportMap: c
          ? {
              supportsArcadeExpressionForLabeling: I,
              supportsSublayersChanges: d,
              supportsDynamicLayers: y,
              supportsSublayerVisibility: D,
              supportsSublayerDefinitionExpression: P,
              supportsCIMSymbols: w,
            }
          : null,
        exportTiles: m ? { maxExportTilesCount: +i.maxExportTilesCount } : null,
      };
    }
    readVersion(r, i) {
      let s = i.currentVersion;
      return (
        s ||
          (s =
            i.hasOwnProperty("capabilities") || i.hasOwnProperty("tables")
              ? 10
              : i.hasOwnProperty("supportedImageFormatTypes")
              ? 9.31
              : 9.3),
        s
      );
    }
    async fetchSublayerInfo(r, i) {
      var s;
      try {
        return (
          await this.fetchAllLayersAndTables(i),
          (s = this._allLayersAndTablesMap) == null ? void 0 : s.get(r)
        );
      } catch {
        return;
      }
    }
    async fetchAllLayersAndTables(r) {
      await this.load(r),
        this._allLayersAndTablesPromise ||
          (this._allLayersAndTablesPromise = z(re(this.url).path + "/layers", {
            responseType: "json",
            query: { f: "json", ...this.customParameters, token: this.apiKey },
          }).then(
            (s) => {
              this._allLayersAndTablesMap = new Map();
              for (const o of s.data.layers)
                this._allLayersAndTablesMap.set(o.id, o);
              return { result: s.data };
            },
            (s) => ({ error: s })
          ));
      const i = await this._allLayersAndTablesPromise;
      if ((te(r), "result" in i)) return i.result;
      throw i.error;
    }
  };
  return (
    a([n({ readOnly: !0 })], t.prototype, "capabilities", void 0),
    a(
      [
        S("service", "capabilities", [
          "capabilities",
          "exportTilesAllowed",
          "maxExportTilesCount",
          "supportsDynamicLayers",
          "tileInfo",
        ]),
      ],
      t.prototype,
      "readCapabilities",
      null
    ),
    a(
      [n({ json: { read: { source: "copyrightText" } } })],
      t.prototype,
      "copyright",
      void 0
    ),
    a([n({ type: K })], t.prototype, "fullExtent", void 0),
    a([n(Z)], t.prototype, "id", void 0),
    a(
      [
        n({
          type: Boolean,
          json: {
            origins: { service: { read: { enabled: !1 } } },
            read: { source: "showLegend" },
            write: { target: "showLegend" },
          },
        }),
      ],
      t.prototype,
      "legendEnabled",
      void 0
    ),
    a([n(Y)], t.prototype, "popupEnabled", void 0),
    a([n({ type: ee })], t.prototype, "spatialReference", void 0),
    a([n({ readOnly: !0 })], t.prototype, "version", void 0),
    a(
      [
        S("version", [
          "currentVersion",
          "capabilities",
          "tables",
          "supportedImageFormatTypes",
        ]),
      ],
      t.prototype,
      "readVersion",
      null
    ),
    (t = a([J("esri.layers.mixins.ArcGISMapService")], t)),
    t
  );
};
var j;
function N(e) {
  return e != null && e.type === "esriSMS";
}
function q(e, t, r) {
  var s;
  const i = this.originIdOf(t) >= V(r.origin);
  return {
    ignoreOrigin: !0,
    allowNull: i,
    enabled:
      !!r &&
      ((s = r.layer) == null ? void 0 : s.type) === "map-image" &&
      (r.writeSublayerStructure || i),
  };
}
function H(e, t, r) {
  var i;
  return {
    enabled:
      !!r &&
      ((i = r.layer) == null ? void 0 : i.type) === "tile" &&
      this._isOverridden(t),
  };
}
function b(e, t, r) {
  return { ignoreOrigin: !0, enabled: (r && r.writeSublayerStructure) || !1 };
}
function F(e, t, r) {
  return {
    ignoreOrigin: !0,
    enabled:
      !!r && (r.writeSublayerStructure || this.originIdOf(t) >= V(r.origin)),
  };
}
let Me = 0;
const E = new Set();
E.add("layer"),
  E.add("parent"),
  E.add("loaded"),
  E.add("loadStatus"),
  E.add("loadError"),
  E.add("loadWarnings");
let l = (j = class extends ie(se(ae(Oe))) {
  constructor(e) {
    super(e),
      (this.capabilities = void 0),
      (this.fields = null),
      (this.fullExtent = null),
      (this.geometryType = null),
      (this.globalIdField = null),
      (this.legendEnabled = !0),
      (this.objectIdField = null),
      (this.popupEnabled = !0),
      (this.popupTemplate = null),
      (this.sourceJSON = null),
      (this.title = null),
      (this.typeIdField = null),
      (this.types = null),
      (this._lastParsedUrl = null);
  }
  async load(e) {
    return (
      this.addResolvingPromise(
        (async () => {
          const { layer: t, source: r, url: i } = this;
          if (!t && !i)
            throw new g(
              "sublayer:missing-layer",
              "Sublayer can't be loaded without being part of a layer",
              { sublayer: this }
            );
          let s = null;
          if (
            !t ||
            this.originIdOf("url") > p.SERVICE ||
            (r == null ? void 0 : r.type) === "data-layer"
          )
            s = (
              await z(i, { responseType: "json", query: { f: "json" }, ...e })
            ).data;
          else {
            let o = this.id;
            (r == null ? void 0 : r.type) === "map-layer" && (o = r.mapLayerId),
              (s = await t.fetchSublayerInfo(o, e));
          }
          s &&
            ((this.sourceJSON = s),
            this.read({ layerDefinition: s }, { origin: "service" }));
        })()
      ),
      this
    );
  }
  readCapabilities(e, t) {
    t = t.layerDefinition || t;
    const {
      operations: { supportsQuery: r, supportsQueryAttachments: i },
      query: { supportsFormatPBF: s },
      data: { supportsAttachment: o },
    } = le(t, this.url);
    return {
      exportMap: { supportsModification: !!t.canModifyLayer },
      operations: { supportsQuery: r, supportsQueryAttachments: i },
      data: { supportsAttachment: o },
      query: { supportsFormatPBF: s },
    };
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set definitionExpression(e) {
    this._setAndNotifyLayer("definitionExpression", e);
  }
  get fieldsIndex() {
    return new oe(this.fields || []);
  }
  set floorInfo(e) {
    this._setAndNotifyLayer("floorInfo", e);
  }
  readGlobalIdFieldFromService(e, t) {
    if ((t = t.layerDefinition || t).globalIdField) return t.globalIdField;
    if (t.fields) {
      for (const r of t.fields)
        if (r.type === "esriFieldTypeGlobalID") return r.name;
    }
  }
  get id() {
    return this._get("id") ?? Me++;
  }
  set id(e) {
    var t, r, i;
    this._get("id") !== e &&
      (((i =
        (r = (t = this.layer) == null ? void 0 : t.capabilities) == null
          ? void 0
          : r.exportMap) == null
        ? void 0
        : i.supportsDynamicLayers) !== !1
        ? this._set("id", e)
        : this._logLockedError(
            "id",
            "capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"
          ));
  }
  set labelingInfo(e) {
    this._setAndNotifyLayer("labelingInfo", e);
  }
  writeLabelingInfo(e, t, r, i) {
    e &&
      e.length &&
      (t.layerDefinition = {
        drawingInfo: { labelingInfo: e.map((s) => s.write({}, i)) },
      });
  }
  set labelsVisible(e) {
    this._setAndNotifyLayer("labelsVisible", e);
  }
  set layer(e) {
    this._set("layer", e),
      this.sublayers && this.sublayers.forEach((t) => (t.layer = e));
  }
  set listMode(e) {
    this._set("listMode", e);
  }
  set minScale(e) {
    this._setAndNotifyLayer("minScale", e);
  }
  readMinScale(e, t) {
    return t.minScale || (t.layerDefinition && t.layerDefinition.minScale) || 0;
  }
  set maxScale(e) {
    this._setAndNotifyLayer("maxScale", e);
  }
  readMaxScale(e, t) {
    return t.maxScale || (t.layerDefinition && t.layerDefinition.maxScale) || 0;
  }
  get effectiveScaleRange() {
    const { minScale: e, maxScale: t } = this;
    return { minScale: e, maxScale: t };
  }
  readObjectIdFieldFromService(e, t) {
    if ((t = t.layerDefinition || t).objectIdField) return t.objectIdField;
    if (t.fields) {
      for (const r of t.fields)
        if (r.type === "esriFieldTypeOID") return r.name;
    }
  }
  set opacity(e) {
    this._setAndNotifyLayer("opacity", e);
  }
  readOpacity(e, t) {
    var i;
    const r = t.layerDefinition;
    return (
      1 -
      0.01 *
        (((r == null ? void 0 : r.transparency) != null
          ? r.transparency
          : (i = r == null ? void 0 : r.drawingInfo) == null
          ? void 0
          : i.transparency) ?? 0)
    );
  }
  writeOpacity(e, t, r, i) {
    t.layerDefinition = { drawingInfo: { transparency: 100 - 100 * e } };
  }
  writeParent(e, t) {
    this.parent && this.parent !== this.layer
      ? (t.parentLayerId = ne(this.parent.id))
      : (t.parentLayerId = -1);
  }
  get queryTask() {
    var y;
    if (!this.layer) return null;
    const { spatialReference: e } = this.layer,
      t = "gdbVersion" in this.layer ? this.layer.gdbVersion : void 0,
      { capabilities: r, fieldsIndex: i } = this,
      s =
        ye("featurelayer-pbf") &&
        (r == null ? void 0 : r.query.supportsFormatPBF),
      o =
        ((y = r == null ? void 0 : r.operations) == null
          ? void 0
          : y.supportsQueryAttachments) ?? !1;
    return new je({
      url: this.url,
      pbfSupported: s,
      fieldsIndex: i,
      gdbVersion: t,
      sourceSpatialReference: e,
      queryAttachmentsSupported: o,
    });
  }
  set renderer(e) {
    if (e) {
      for (const t of e.getSymbols())
        if (pe(t)) {
          T.getLogger(this.declaredClass).warn(
            "Sublayer renderer should use 2D symbols"
          );
          break;
        }
    }
    this._setAndNotifyLayer("renderer", e);
  }
  get source() {
    return this._get("source") || new k({ mapLayerId: this.id });
  }
  set source(e) {
    this._setAndNotifyLayer("source", e);
  }
  set sublayers(e) {
    this._handleSublayersChange(e, this._get("sublayers")),
      this._set("sublayers", e);
  }
  castSublayers(e) {
    return ue(Q.ofType(j), e);
  }
  writeSublayers(e, t, r) {
    var i;
    (i = this.sublayers) != null &&
      i.length &&
      (t[r] = this.sublayers
        .map((s) => s.id)
        .toArray()
        .reverse());
  }
  readTypeIdField(e, t) {
    let r = (t = t.layerDefinition || t).typeIdField;
    if (r && t.fields) {
      r = r.toLowerCase();
      const i = t.fields.find((s) => s.name.toLowerCase() === r);
      i && (r = i.name);
    }
    return r;
  }
  get url() {
    var i;
    const e =
        ((i = this.layer) == null ? void 0 : i.parsedUrl) ??
        this._lastParsedUrl,
      t = this.source;
    if (!e) return null;
    if (
      ((this._lastParsedUrl = e), (t == null ? void 0 : t.type) === "map-layer")
    )
      return `${e.path}/${t.mapLayerId}`;
    const r = { layer: JSON.stringify({ source: this.source }) };
    return `${e.path}/dynamicLayer?${de(r)}`;
  }
  set url(e) {
    this._overrideIfSome("url", e);
  }
  set visible(e) {
    this._setAndNotifyLayer("visible", e);
  }
  writeVisible(e, t, r, i) {
    t[r] = this.getAtOrigin("defaultVisibility", "service") || e;
  }
  clone() {
    const { store: e } = A(this),
      t = new j();
    return (
      (A(t).store = e.clone(E)),
      this.commitProperty("url"),
      (t._lastParsedUrl = this._lastParsedUrl),
      t
    );
  }
  createPopupTemplate(e) {
    return ce(this, e);
  }
  createQuery() {
    return new he({
      returnGeometry: !0,
      where: this.definitionExpression || "1=1",
    });
  }
  async createFeatureLayer() {
    var i;
    if (this.hasOwnProperty("sublayers")) return null;
    const { layer: e } = this,
      t = e == null ? void 0 : e.parsedUrl,
      r = new (
        await Ae(
          () => import("./index.8fd7165c.js").then((s) => s.lG),
          [
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
          ]
        )
      ).default({ url: t == null ? void 0 : t.path });
    return (
      t &&
        this.source &&
        (this.source.type === "map-layer"
          ? (r.layerId = this.source.mapLayerId)
          : (r.dynamicDataSource = this.source)),
      (e == null ? void 0 : e.refreshInterval) != null &&
        (r.refreshInterval = e.refreshInterval),
      this.definitionExpression &&
        (r.definitionExpression = this.definitionExpression),
      this.floorInfo && (r.floorInfo = _(this.floorInfo)),
      this.originIdOf("labelingInfo") > p.SERVICE &&
        (r.labelingInfo = _(this.labelingInfo)),
      this.originIdOf("labelsVisible") > p.DEFAULTS &&
        (r.labelsVisible = this.labelsVisible),
      this.originIdOf("legendEnabled") > p.DEFAULTS &&
        (r.legendEnabled = this.legendEnabled),
      this.originIdOf("visible") > p.DEFAULTS && (r.visible = this.visible),
      this.originIdOf("minScale") > p.DEFAULTS && (r.minScale = this.minScale),
      this.originIdOf("maxScale") > p.DEFAULTS && (r.maxScale = this.maxScale),
      this.originIdOf("opacity") > p.DEFAULTS && (r.opacity = this.opacity),
      this.originIdOf("popupTemplate") > p.DEFAULTS &&
        (r.popupTemplate = _(this.popupTemplate)),
      this.originIdOf("renderer") > p.SERVICE &&
        (r.renderer = _(this.renderer)),
      ((i = this.source) == null ? void 0 : i.type) === "data-layer" &&
        (r.dynamicDataSource = this.source.clone()),
      this.originIdOf("title") > p.DEFAULTS && (r.title = this.title),
      (e == null ? void 0 : e.type) === "map-image" &&
        e.originIdOf("customParameters") > p.DEFAULTS &&
        (r.customParameters = e.customParameters),
      (e == null ? void 0 : e.type) === "tile" &&
        e.originIdOf("customParameters") > p.DEFAULTS &&
        (r.customParameters = e.customParameters),
      r
    );
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFeatureType(e) {
    const { typeIdField: t, types: r } = this;
    if (!t || !e) return null;
    const i = e.attributes ? e.attributes[t] : void 0;
    if (i == null) return null;
    let s = null;
    return (
      r == null ||
        r.some((o) => {
          const { id: y } = o;
          return y != null && (y.toString() === i.toString() && (s = o), !!s);
        }),
      s
    );
  }
  getFieldDomain(e, t) {
    const r = t && t.feature,
      i = this.getFeatureType(r);
    if (i) {
      const s = i.domains && i.domains[e];
      if (s && s.type !== "inherited") return s;
    }
    return this._getLayerDomain(e);
  }
  async queryAttachments(e, t) {
    var f, v;
    await this.load(), (e = fe.from(e));
    const r = this.capabilities;
    if (!((f = r == null ? void 0 : r.data) != null && f.supportsAttachment))
      throw new g(
        "queryAttachments:not-supported",
        "this layer doesn't support attachments"
      );
    const {
      attachmentTypes: i,
      objectIds: s,
      globalIds: o,
      num: y,
      size: u,
      start: c,
      where: m,
    } = e;
    if (
      !(
        (v = r == null ? void 0 : r.operations) != null &&
        v.supportsQueryAttachments
      ) &&
      ((i == null ? void 0 : i.length) > 0 ||
        (o == null ? void 0 : o.length) > 0 ||
        (u == null ? void 0 : u.length) > 0 ||
        y ||
        c ||
        m)
    )
      throw new g(
        "queryAttachments:option-not-supported",
        "when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",
        e
      );
    if (!((s != null && s.length) || (o != null && o.length) || m))
      throw new g(
        "queryAttachments:invalid-query",
        "'objectIds', 'globalIds', or 'where' are required to perform attachment query",
        e
      );
    return this.queryTask.executeAttachmentQuery(e, t);
  }
  async queryFeatures(e = this.createQuery(), t) {
    var i, s;
    if ((await this.load(), !this.capabilities.operations.supportsQuery))
      throw new g(
        "queryFeatures:not-supported",
        "this layer doesn't support queries."
      );
    if (!this.url)
      throw new g("queryFeatures:not-supported", "this layer has no url.");
    const r = await this.queryTask.execute(e, {
      ...t,
      query: {
        ...((i = this.layer) == null ? void 0 : i.customParameters),
        token: (s = this.layer) == null ? void 0 : s.apiKey,
      },
    });
    if (r != null && r.features)
      for (const o of r.features) o.sourceLayer = this;
    return r;
  }
  toExportImageJSON(e) {
    var o;
    const t = {
        id: this.id,
        source: ((o = this.source) == null ? void 0 : o.toJSON()) || {
          mapLayerId: this.id,
          type: "mapLayer",
        },
      },
      r = be(e, this.definitionExpression);
    $(r) && (t.definitionExpression = r);
    const i = ["renderer", "labelingInfo", "opacity", "labelsVisible"].reduce(
      (y, u) => ((y[u] = this.originIdOf(u)), y),
      {}
    );
    if (Object.keys(i).some((y) => i[y] > p.SERVICE)) {
      const y = (t.drawingInfo = {});
      if (
        (i.renderer > p.SERVICE &&
          (y.renderer = this.renderer ? this.renderer.toJSON() : null),
        i.labelsVisible > p.SERVICE && (y.showLabels = this.labelsVisible),
        this.labelsVisible && i.labelingInfo > p.SERVICE)
      ) {
        !this.loaded &&
          this.labelingInfo.some((c) => !c.labelPlacement) &&
          T.getLogger(this.declaredClass).warnOnce(
            `A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,
            { sublayer: this }
          );
        let u = this.labelingInfo;
        $(this.geometryType) &&
          (u = me(this.labelingInfo, U.toJSON(this.geometryType))),
          (y.labelingInfo = u
            .filter((c) => c.labelPlacement)
            .map((c) => c.toJSON({ origin: "service", layer: this.layer }))),
          (y.showLabels = !0);
      }
      i.opacity > p.SERVICE && (y.transparency = 100 - 100 * this.opacity),
        this._assignDefaultSymbolColors(y.renderer);
    }
    return t;
  }
  _assignDefaultSymbolColors(e) {
    this._forEachSimpleMarkerSymbols(e, (t) => {
      t.color ||
        (t.style !== "esriSMSX" && t.style !== "esriSMSCross") ||
        (t.outline && t.outline.color
          ? (t.color = t.outline.color)
          : (t.color = [0, 0, 0, 0]));
    });
  }
  _forEachSimpleMarkerSymbols(e, t) {
    if (e) {
      const r =
        ("uniqueValueInfos" in e
          ? e.uniqueValueInfos
          : "classBreakInfos" in e
          ? e.classBreakInfos
          : null) ?? [];
      for (const i of r) N(i.symbol) && t(i.symbol);
      "symbol" in e && N(e.symbol) && t(e.symbol),
        "defaultSymbol" in e && N(e.defaultSymbol) && t(e.defaultSymbol);
    }
  }
  _setAndNotifyLayer(e, t) {
    var u, c, m, f;
    const r = this.layer,
      i = this._get(e);
    let s, o;
    switch (e) {
      case "definitionExpression":
      case "floorInfo":
        s = "supportsSublayerDefinitionExpression";
        break;
      case "minScale":
      case "maxScale":
      case "visible":
        s = "supportsSublayerVisibility";
        break;
      case "labelingInfo":
      case "labelsVisible":
      case "opacity":
      case "renderer":
      case "source":
        (s = "supportsDynamicLayers"), (o = "supportsModification");
    }
    const y = A(this).getDefaultOrigin();
    if (y !== "service") {
      if (
        s &&
        ((m =
          (c = (u = this.layer) == null ? void 0 : u.capabilities) == null
            ? void 0
            : c.exportMap) == null
          ? void 0
          : m[s]) === !1
      )
        return void this._logLockedError(
          e,
          `capability not available 'layer.capabilities.exportMap.${s}'`
        );
      if (
        o &&
        ((f = this.capabilities) == null ? void 0 : f.exportMap[o]) === !1
      )
        return void this._logLockedError(
          e,
          `capability not available 'capabilities.exportMap.${o}'`
        );
    }
    e !== "source" || this.loadStatus === "not-loaded"
      ? (this._set(e, t),
        y !== "service" &&
          i !== t &&
          r &&
          r.emit &&
          r.emit("sublayer-update", { propertyName: e, target: this }))
      : this._logLockedError(
          e,
          "'source' can't be changed after calling sublayer.load()"
        );
  }
  _handleSublayersChange(e, t) {
    t &&
      (t.forEach((r) => {
        (r.parent = null), (r.layer = null);
      }),
      this.handles.removeAll()),
      e &&
        (e.forEach((r) => {
          (r.parent = this), (r.layer = this.layer);
        }),
        this.handles.add([
          e.on("after-add", ({ item: r }) => {
            (r.parent = this), (r.layer = this.layer);
          }),
          e.on("after-remove", ({ item: r }) => {
            (r.parent = null), (r.layer = null);
          }),
          e.on("before-changes", (r) => {
            var s, o, y;
            const i =
              (y =
                (o = (s = this.layer) == null ? void 0 : s.capabilities) == null
                  ? void 0
                  : o.exportMap) == null
                ? void 0
                : y.supportsSublayersChanges;
            i == null ||
              i ||
              (T.getLogger(this.declaredClass).error(
                new g(
                  "sublayer:sublayers-non-modifiable",
                  "Sublayer can't be added, moved, or removed from the layer's sublayers",
                  { sublayer: this, layer: this.layer }
                )
              ),
              r.preventDefault());
          }),
        ]));
  }
  _logLockedError(e, t) {
    const { layer: r, declaredClass: i } = this;
    T.getLogger(i).error(
      new g(
        "sublayer:locked",
        `Property '${String(e)}' can't be changed on Sublayer from the layer '${
          r == null ? void 0 : r.id
        }'`,
        { reason: t, sublayer: this, layer: r }
      )
    );
  }
  _getLayerDomain(e) {
    const t = this.fieldsIndex.get(e);
    return t ? t.domain : null;
  }
});
(l.test = {
  isMapImageLayerOverridePolicy: (e) => e === b || e === q,
  isTileImageLayerOverridePolicy: (e) => e === H,
}),
  a([n({ readOnly: !0 })], l.prototype, "capabilities", void 0),
  a(
    [
      S("service", "capabilities", [
        "layerDefinition.canModifyLayer",
        "layerDefinition.capabilities",
      ]),
    ],
    l.prototype,
    "readCapabilities",
    null
  ),
  a([n()], l.prototype, "defaultPopupTemplate", null),
  a(
    [
      n({
        type: String,
        value: null,
        json: {
          name: "layerDefinition.definitionExpression",
          write: { allowNull: !0, overridePolicy: q },
        },
      }),
    ],
    l.prototype,
    "definitionExpression",
    null
  ),
  a(
    [
      n({
        type: [ge],
        json: {
          origins: { service: { read: { source: "layerDefinition.fields" } } },
        },
      }),
    ],
    l.prototype,
    "fields",
    void 0
  ),
  a([n({ readOnly: !0 })], l.prototype, "fieldsIndex", null),
  a(
    [
      n({
        type: Se,
        value: null,
        json: {
          name: "layerDefinition.floorInfo",
          read: { source: "layerDefinition.floorInfo" },
          write: { target: "layerDefinition.floorInfo", overridePolicy: q },
          origins: { "web-scene": { read: !1, write: !1 } },
        },
      }),
    ],
    l.prototype,
    "floorInfo",
    null
  ),
  a(
    [n({ type: K, json: { read: { source: "layerDefinition.extent" } } })],
    l.prototype,
    "fullExtent",
    void 0
  ),
  a(
    [
      n({
        type: U.apiValues,
        json: {
          origins: {
            service: {
              name: "layerDefinition.geometryType",
              read: { reader: U.read },
            },
          },
        },
      }),
    ],
    l.prototype,
    "geometryType",
    void 0
  ),
  a([n({ type: String })], l.prototype, "globalIdField", void 0),
  a(
    [
      S("service", "globalIdField", [
        "layerDefinition.globalIdField",
        "layerDefinition.fields",
      ]),
    ],
    l.prototype,
    "readGlobalIdFieldFromService",
    null
  ),
  a(
    [n({ type: C, json: { write: { ignoreOrigin: !0 } } })],
    l.prototype,
    "id",
    null
  ),
  a(
    [
      n({
        value: null,
        type: [Ie],
        json: {
          read: { source: "layerDefinition.drawingInfo.labelingInfo" },
          write: {
            target: "layerDefinition.drawingInfo.labelingInfo",
            overridePolicy: b,
          },
        },
      }),
    ],
    l.prototype,
    "labelingInfo",
    null
  ),
  a([O("labelingInfo")], l.prototype, "writeLabelingInfo", null),
  a(
    [
      n({
        type: Boolean,
        value: !0,
        json: {
          read: { source: "layerDefinition.drawingInfo.showLabels" },
          write: {
            target: "layerDefinition.drawingInfo.showLabels",
            overridePolicy: b,
          },
        },
      }),
    ],
    l.prototype,
    "labelsVisible",
    null
  ),
  a([n({ value: null })], l.prototype, "layer", null),
  a(
    [
      n({
        type: Boolean,
        value: !0,
        json: {
          origins: { service: { read: { enabled: !1 } } },
          read: { source: "showLegend" },
          write: { target: "showLegend", overridePolicy: F },
        },
      }),
    ],
    l.prototype,
    "legendEnabled",
    void 0
  ),
  a(
    [
      n({
        type: ["show", "hide", "hide-children"],
        value: "show",
        json: {
          read: !1,
          write: !1,
          origins: { "web-scene": { read: !0, write: !0 } },
        },
      }),
    ],
    l.prototype,
    "listMode",
    null
  ),
  a(
    [n({ type: Number, value: 0, json: { write: { overridePolicy: b } } })],
    l.prototype,
    "minScale",
    null
  ),
  a(
    [S("minScale", ["minScale", "layerDefinition.minScale"])],
    l.prototype,
    "readMinScale",
    null
  ),
  a(
    [n({ type: Number, value: 0, json: { write: { overridePolicy: b } } })],
    l.prototype,
    "maxScale",
    null
  ),
  a(
    [S("maxScale", ["maxScale", "layerDefinition.maxScale"])],
    l.prototype,
    "readMaxScale",
    null
  ),
  a([n({ readOnly: !0 })], l.prototype, "effectiveScaleRange", null),
  a([n({ type: String })], l.prototype, "objectIdField", void 0),
  a(
    [
      S("service", "objectIdField", [
        "layerDefinition.objectIdField",
        "layerDefinition.fields",
      ]),
    ],
    l.prototype,
    "readObjectIdFieldFromService",
    null
  ),
  a(
    [
      n({
        type: Number,
        value: 1,
        json: {
          write: {
            target: "layerDefinition.drawingInfo.transparency",
            overridePolicy: b,
          },
        },
      }),
    ],
    l.prototype,
    "opacity",
    null
  ),
  a(
    [
      S("opacity", [
        "layerDefinition.drawingInfo.transparency",
        "layerDefinition.transparency",
      ]),
    ],
    l.prototype,
    "readOpacity",
    null
  ),
  a([O("opacity")], l.prototype, "writeOpacity", null),
  a(
    [
      n({
        json: {
          type: C,
          write: {
            target: "parentLayerId",
            writerEnsuresNonNull: !0,
            overridePolicy: b,
          },
        },
      }),
    ],
    l.prototype,
    "parent",
    void 0
  ),
  a([O("parent")], l.prototype, "writeParent", null),
  a(
    [
      n({
        type: Boolean,
        value: !0,
        json: {
          read: { source: "disablePopup", reader: (e, t) => !t.disablePopup },
          write: {
            target: "disablePopup",
            overridePolicy: F,
            writer(e, t, r) {
              t[r] = !e;
            },
          },
        },
      }),
    ],
    l.prototype,
    "popupEnabled",
    void 0
  ),
  a(
    [
      n({
        type: ve,
        json: {
          read: { source: "popupInfo" },
          write: { target: "popupInfo", overridePolicy: F },
        },
      }),
    ],
    l.prototype,
    "popupTemplate",
    void 0
  ),
  a([n({ readOnly: !0 })], l.prototype, "queryTask", null),
  a(
    [
      n({
        types: we,
        value: null,
        json: {
          name: "layerDefinition.drawingInfo.renderer",
          write: { overridePolicy: b },
          origins: {
            "web-scene": {
              types: Ee,
              name: "layerDefinition.drawingInfo.renderer",
              write: { overridePolicy: b },
            },
          },
        },
      }),
    ],
    l.prototype,
    "renderer",
    null
  ),
  a(
    [
      n({
        types: {
          key: "type",
          base: null,
          typeMap: { "data-layer": W, "map-layer": k },
        },
        cast(e) {
          if (e) {
            if ("mapLayerId" in e) return G(k, e);
            if ("dataSource" in e) return G(W, e);
          }
          return e;
        },
        json: { name: "layerDefinition.source", write: { overridePolicy: b } },
      }),
    ],
    l.prototype,
    "source",
    null
  ),
  a([n()], l.prototype, "sourceJSON", void 0),
  a(
    [
      n({
        value: null,
        json: {
          type: [C],
          write: { target: "subLayerIds", allowNull: !0, overridePolicy: b },
        },
      }),
    ],
    l.prototype,
    "sublayers",
    null
  ),
  a([Le("sublayers")], l.prototype, "castSublayers", null),
  a([O("sublayers")], l.prototype, "writeSublayers", null),
  a(
    [n({ type: String, json: { name: "name", write: { overridePolicy: F } } })],
    l.prototype,
    "title",
    void 0
  ),
  a([n({ type: String })], l.prototype, "typeIdField", void 0),
  a(
    [S("typeIdField", ["layerDefinition.typeIdField"])],
    l.prototype,
    "readTypeIdField",
    null
  ),
  a(
    [
      n({
        type: [xe],
        json: {
          origins: { service: { read: { source: "layerDefinition.types" } } },
        },
      }),
    ],
    l.prototype,
    "types",
    void 0
  ),
  a(
    [
      n({
        type: String,
        json: {
          read: { source: "layerUrl" },
          write: { target: "layerUrl", overridePolicy: H },
        },
      }),
    ],
    l.prototype,
    "url",
    null
  ),
  a(
    [
      n({
        type: Boolean,
        value: !0,
        json: {
          read: { source: "defaultVisibility" },
          write: { target: "defaultVisibility", overridePolicy: b },
        },
      }),
    ],
    l.prototype,
    "visible",
    null
  ),
  a([O("visible")], l.prototype, "writeVisible", null),
  (l = j = a([J("esri.layers.support.Sublayer")], l));
const B = l,
  Ce = T.getLogger("esri.layers.TileLayer"),
  R = Q.ofType(B);
function X(e, t) {
  e &&
    e.forEach((r) => {
      t(r), r.sublayers && r.sublayers.length && X(r.sublayers, t);
    });
}
const Je = (e) => {
  let t = class extends e {
    constructor(...r) {
      super(...r),
        (this.allSublayers = new Te({
          getCollections: () => [this.sublayers],
          getChildrenFunction: (i) => i.sublayers,
        })),
        (this.sublayersSourceJSON = {
          [p.SERVICE]: {},
          [p.PORTAL_ITEM]: {},
          [p.WEB_SCENE]: {},
          [p.WEB_MAP]: {},
        }),
        this.addHandles(
          De(
            () => this.sublayers,
            (i, s) => this._handleSublayersChange(i, s),
            Pe
          )
        );
    }
    readSublayers(r, i) {
      if (!i || !r) return;
      const { sublayersSourceJSON: s } = this,
        o = V(i.origin);
      if (
        o < p.SERVICE ||
        ((s[o] = {
          context: i,
          visibleLayers: r.visibleLayers || s[o].visibleLayers,
          layers: r.layers || s[o].layers,
        }),
        o > p.SERVICE)
      )
        return;
      this._set(
        "serviceSublayers",
        this.createSublayersForOrigin("service").sublayers
      );
      const { sublayers: y, origin: u } =
          this.createSublayersForOrigin("web-document"),
        c = A(this);
      c.setDefaultOrigin(u),
        this._set("sublayers", new R(y)),
        c.setDefaultOrigin("user");
    }
    findSublayerById(r) {
      return this.allSublayers.find((i) => i.id === r);
    }
    createServiceSublayers() {
      return this.createSublayersForOrigin("service").sublayers;
    }
    createSublayersForOrigin(r) {
      const i = V(r === "web-document" ? "web-map" : r);
      let s = p.SERVICE,
        o = this.sublayersSourceJSON[p.SERVICE].layers,
        y = this.sublayersSourceJSON[p.SERVICE].context,
        u = null;
      const c = [p.PORTAL_ITEM, p.WEB_SCENE, p.WEB_MAP].filter((d) => d <= i);
      for (const d of c) {
        const h = this.sublayersSourceJSON[d];
        Ve(h.layers) &&
          ((s = d),
          (o = h.layers),
          (y = h.context),
          h.visibleLayers &&
            (u = { visibleLayers: h.visibleLayers, context: h.context }));
      }
      const m = [p.PORTAL_ITEM, p.WEB_SCENE, p.WEB_MAP].filter(
        (d) => d > s && d <= i
      );
      let f = null;
      for (const d of m) {
        const {
          layers: h,
          visibleLayers: I,
          context: w,
        } = this.sublayersSourceJSON[d];
        h && (f = { layers: h, context: w }),
          I && (u = { visibleLayers: I, context: w });
      }
      const v = (function (d, h) {
          const I = [],
            w = {};
          return (
            d &&
              d.forEach((L) => {
                const x = new B();
                if (
                  (x.read(L, h),
                  (w[x.id] = x),
                  L.parentLayerId != null && L.parentLayerId !== -1)
                ) {
                  const M = w[L.parentLayerId];
                  M.sublayers || (M.sublayers = []), M.sublayers.unshift(x);
                } else I.unshift(x);
              }),
            I
          );
        })(o, y),
        D = new Map(),
        P = new Set();
      if (f) for (const d of f.layers) D.set(d.id, d);
      if (u != null && u.visibleLayers)
        for (const d of u.visibleLayers) P.add(d);
      return (
        X(v, (d) => {
          f && d.read(D.get(d.id), f.context),
            u && d.read({ defaultVisibility: P.has(d.id) }, u.context);
        }),
        { origin: _e(s), sublayers: new R({ items: v }) }
      );
    }
    read(r, i) {
      super.read(r, i), this.readSublayers(r, i);
    }
    _handleSublayersChange(r, i) {
      i &&
        (i.forEach((s) => {
          (s.parent = null), (s.layer = null);
        }),
        this.handles.remove("sublayers-owner")),
        r &&
          (r.forEach((s) => {
            (s.parent = this), (s.layer = this);
          }),
          this.handles.add(
            [
              r.on("after-add", ({ item: s }) => {
                (s.parent = this), (s.layer = this);
              }),
              r.on("after-remove", ({ item: s }) => {
                (s.parent = null), (s.layer = null);
              }),
            ],
            "sublayers-owner"
          ),
          this.type === "tile" &&
            this.handles.add(
              r.on("before-changes", (s) => {
                Ce.error(
                  new g(
                    "tilelayer:sublayers-non-modifiable",
                    "ISublayer can't be added, moved, or removed from the layer's sublayers",
                    { layer: this }
                  )
                ),
                  s.preventDefault();
              }),
              "sublayers-owner"
            ));
    }
  };
  return (
    a([n({ readOnly: !0 })], t.prototype, "allSublayers", void 0),
    a(
      [n({ readOnly: !0, type: Q.ofType(B) })],
      t.prototype,
      "serviceSublayers",
      void 0
    ),
    a(
      [
        n({
          value: null,
          type: R,
          json: { read: !1, write: { allowNull: !0, ignoreOrigin: !0 } },
        }),
      ],
      t.prototype,
      "sublayers",
      void 0
    ),
    a([n({ readOnly: !0 })], t.prototype, "sublayersSourceJSON", void 0),
    (t = a([J("esri.layers.mixins.SublayersOwner")], t)),
    t
  );
};
export { Je as E, B as Z, Be as y };
