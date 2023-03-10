import {
  ae as u,
  af as c,
  ag as b,
  al as D,
  ap as de,
  w as S,
  q as U,
  dl as ye,
  ah as K,
  aH as fe,
  r as p,
  aY as ge,
  dz as _e,
  D as me,
  dA as R,
  dB as ve,
  aU as we,
  ad as W,
  dC as Re,
  Q as q,
  dD as be,
  dE as ce,
  au as Fe,
  G as N,
  at as he,
  dg as Y,
  dx as Z,
  dF as X,
  av as Q,
  du as Se,
  L as ee,
  dG as te,
  dH as qe,
  dI as re,
  dJ as Ee,
  dK as xe,
  dL as L,
  dM as z,
  t as J,
  s as x,
  dN as Ie,
  aq as Oe,
  aN as Ce,
  dO as M,
  P as Te,
  ar as Ue,
  H as Ae,
  E as ie,
  bO as ke,
  j as C,
  dP as Ve,
  dQ as Pe,
  z as Ne,
  cJ as Je,
  dR as He,
  cK as Qe,
  aC as Le,
  dS as ze,
} from "./index.8fd7165c.js";
import { a as se } from "./Container.a5892366.js";
import { S as Me } from "./definitions.ce677f69.js";
import { f as je, u as Be } from "./LayerView.d8517e2e.js";
import { I as Ge, h as De } from "./schemaUtils.264ba82d.js";
import { q as ae } from "./Table.e9c997d5.js";
import { e as Ke } from "./util.79a0d0b9.js";
import { o as ne } from "./floorFilterUtils.08225a6d.js";
import { s as j, d as $e } from "./popupUtils.4682c28c.js";
import { i as We } from "./RefreshableLayerView.d05f575e.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./enums.64ab819c.js";
import "./Texture.fb0c670a.js";
import "./color.4c5303e9.js";
import "./enums.13513a14.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./utils.1f803f1b.js";
import "./MaterialKey.97cb3dc8.js";
import "./visualVariablesUtils.de38be9a.js";
import "./ExpandedCIM.e22c8b13.js";
import "./BidiEngine.520adad3.js";
import "./GeometryUtils.874f8cf4.js";
import "./Rect.6884a4ea.js";
import "./quantizationUtils.1e9e702d.js";
import "./floatRGBA.6f2fa7cd.js";
import "./vue-i18n.67a42238.js";
let H = class extends D {
  constructor() {
    super(...arguments), (this.isAggregate = !0);
  }
  getEffectivePopupTemplate(e = !1) {
    if (this.popupTemplate) return this.popupTemplate;
    const t = this.sourceLayer && this.sourceLayer.featureReduction;
    return t && "popupTemplate" in t && t.popupEnabled ? t.popupTemplate : null;
  }
  getObjectId() {
    return this.attributes.aggregateId;
  }
};
u([c({ type: Boolean })], H.prototype, "isAggregate", void 0),
  (H = u([b("esri.AggregateGraphic")], H));
const $ = H;
let m = class extends de {
  constructor(e) {
    super(e),
      (this._filter = null),
      (this.duration = S("mapview-transitions-duration")),
      (this._excludedEffectView = new se(e)),
      (this._includedEffectView = new se(e));
  }
  get excludedEffects() {
    return this._excludedEffectView.effects;
  }
  set featureEffect(e) {
    this._get("featureEffect") !== e && this._transitionTo(e);
  }
  get filter() {
    var e;
    return (
      this._filter ||
      ((e = U(this.featureEffect)) == null ? void 0 : e.filter) ||
      null
    );
  }
  get hasEffects() {
    return (
      this._excludedEffectView.hasEffects || this._includedEffectView.hasEffects
    );
  }
  get includedEffects() {
    return this._includedEffectView.effects;
  }
  set scale(e) {
    this._set("scale", e),
      (this._excludedEffectView.scale = e),
      (this._includedEffectView.scale = e);
  }
  get transitioning() {
    return (
      this._excludedEffectView.transitioning ||
      this._includedEffectView.transitioning
    );
  }
  transitionStep(e, t) {
    this._set("scale", t),
      this.transitioning
        ? (this._includedEffectView.transitionStep(e, t),
          this._excludedEffectView.transitionStep(e, t),
          this.transitioning || (this._filter = null))
        : ((this._excludedEffectView.scale = t),
          (this._includedEffectView.scale = t));
  }
  endTransitions() {
    this._includedEffectView.endTransitions(),
      this._excludedEffectView.endTransitions(),
      (this._filter = null);
  }
  _transitionTo(e) {
    const t = this._get("featureEffect"),
      r = U(e),
      i = U(r == null ? void 0 : r.includedEffect),
      s = U(r == null ? void 0 : r.excludedEffect),
      a =
        this._includedEffectView.canTransitionTo(i) &&
        this._excludedEffectView.canTransitionTo(s);
    (this._includedEffectView.effect = i),
      (this._excludedEffectView.effect = s),
      this._set("featureEffect", r),
      (this._filter =
        (r == null ? void 0 : r.filter) ||
        (t == null ? void 0 : t.filter) ||
        null),
      a || this.endTransitions();
  }
};
u([c()], m.prototype, "_filter", void 0),
  u([c()], m.prototype, "_excludedEffectView", void 0),
  u([c()], m.prototype, "_includedEffectView", void 0),
  u([c()], m.prototype, "duration", void 0),
  u([c()], m.prototype, "excludedEffects", null),
  u([c()], m.prototype, "featureEffect", null),
  u([c()], m.prototype, "filter", null),
  u([c()], m.prototype, "hasEffects", null),
  u([c()], m.prototype, "includedEffects", null),
  u([c({ value: 0 })], m.prototype, "scale", null),
  u([c()], m.prototype, "transitioning", null),
  (m = u([b("esri.layers.effects.FeatureEffectView")], m));
const Ye = m;
let A = class extends K {
  constructor() {
    super(...arguments), (this.features = []);
  }
  readFeatures(e, t) {
    var s;
    const r = fe.fromJSON(t.spatialReference),
      i = [];
    for (let a = 0; a < e.length; a++) {
      const n = e[a],
        l = $.fromJSON(n),
        o = n.geometry && n.geometry.spatialReference;
      p(l.geometry) && !o && (l.geometry.spatialReference = r);
      const d = n.aggregateGeometries,
        h = l.aggregateGeometries;
      if (d && p(h))
        for (const f in h) {
          const y = h[f],
            g = (s = d[f]) == null ? void 0 : s.spatialReference;
          p(y) && !g && (y.spatialReference = r);
        }
      i.push(l);
    }
    return i;
  }
};
u([c({ type: [$], json: { write: !0 } })], A.prototype, "features", void 0),
  u([ye("features")], A.prototype, "readFeatures", null),
  (A = u([b("esri.rest.support.AggregateFeatureSet")], A));
const Ze = A;
function B(e) {
  return e.some((t) => t.globalId);
}
function T(e) {
  return e
    .filter((t) => !t.error)
    .map((t) => t.objectId ?? t.globalId)
    .filter((t) => t != null);
}
function oe(e, t) {
  const r = new Set(e);
  for (const i of t.values()) r.add(i);
  return r;
}
function le(e, t) {
  const r = new Set(e);
  for (const i of t.values()) r.delete(i);
  return r;
}
let k = class extends de {
  constructor(e) {
    super(e),
      (this._hasGlobalIds = !1),
      (this._notifyUpdating = () => {
        this.notifyChange("updating");
      });
  }
  normalizeCtorArgs(e) {
    return (
      (this._queueProcessor = new ge({ concurrency: 1, process: e.process })),
      {}
    );
  }
  destroy() {
    this.clear();
  }
  get updating() {
    return this._queueProcessor.length > 0;
  }
  clear() {
    this._queueProcessor.clear();
  }
  push(e) {
    const t = this._queueProcessor,
      r = t.last();
    switch (e.type) {
      case "update":
      case "refresh":
        if ((r == null ? void 0 : r.type) === e.type) return;
        t.push(e).then(this._notifyUpdating, this._notifyUpdating);
        break;
      case "edit": {
        const i = (r == null ? void 0 : r.type) === "processed-edit" ? r : null;
        i && t.popLast();
        const s = this._mergeEdits(i, e);
        for (const a of s)
          a && t.push(a).then(this._notifyUpdating, this._notifyUpdating);
        break;
      }
    }
    this.notifyChange("updating");
  }
  _mergeEdits(e, t) {
    const {
      addedFeatures: r,
      deletedFeatures: i,
      updatedFeatures: s,
    } = t.edits;
    if (
      ((this._hasGlobalIds = this._hasGlobalIds || B(r) || B(s) || B(i)),
      this._hasGlobalIds)
    )
      return [
        e,
        {
          type: "processed-edit",
          edits: { addOrModified: [...r, ...s], removed: i },
        },
      ];
    const a = new Set(T((e == null ? void 0 : e.edits.addOrModified) ?? [])),
      n = new Set(T((e == null ? void 0 : e.edits.removed) ?? [])),
      l = new Set([...T(r), ...T(s)]),
      o = new Set(T(i));
    return [
      {
        type: "processed-edit",
        edits: {
          addOrModified: Array.from(oe(le(a, o), l)).map((d) => ({
            objectId: d,
          })),
          removed: Array.from(oe(le(n, l), o)).map((d) => ({ objectId: d })),
        },
      },
    ];
  }
};
u([c({ readOnly: !0 })], k.prototype, "updating", null),
  u([c()], k.prototype, "process", void 0),
  (k = u([b("esri.views.2d.layers.support.FeatureCommandQueue")], k));
const Xe = k;
let E = class extends _e {
  constructor(e) {
    super(e), (this._startupResolver = me()), (this.isReady = !1);
  }
  initialize() {
    (this._controller = new AbortController()),
      this.addResolvingPromise(this._startWorker(this._controller.signal));
  }
  destroy() {
    this._controller.abort(), this._connection && this._connection.close();
  }
  set tileRenderer(e) {
    this.client.tileRenderer = e;
  }
  get closed() {
    return this._connection.closed;
  }
  async startup(e, t, r, i) {
    await this.when();
    const s = this._controller.signal,
      a = (function (l) {
        return Array.isArray(l);
      })(r.source)
        ? { transferList: r.source, signal: s }
        : void 0,
      n = { service: r, config: t, tileInfo: e.tileInfo.toJSON(), tiles: i };
    await this._connection.invoke("startup", n, a),
      this._startupResolver.resolve(),
      this._set("isReady", !0);
  }
  async updateTiles(e) {
    return (
      await this._startupResolver.promise,
      R(this._connection.invoke("updateTiles", e))
    );
  }
  async update(e) {
    const t = { config: e };
    return (
      await this._startupResolver.promise, this._connection.invoke("update", t)
    );
  }
  async applyUpdate(e) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke("applyUpdate", e)
    );
  }
  async setHighlight(e) {
    return (
      await this._startupResolver.promise,
      R(this._connection.invoke("controller.setHighlight", e))
    );
  }
  async stop() {
    if ((await this._startupResolver.promise, !this.closed))
      return R(this._connection.invoke("stop"));
  }
  async refresh(e) {
    return (
      await this._startupResolver.promise,
      R(this._connection.invoke("controller.refresh", e))
    );
  }
  async querySummaryStatistics(e, t, r) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke(
        "controller.querySummaryStatistics",
        { query: e.toJSON(), params: t },
        r
      )
    );
  }
  async queryAggregateSummaryStatistics(e, t, r) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke(
        "controller.queryAggregateSummaryStatistics",
        { query: e.toJSON(), params: t },
        r
      )
    );
  }
  async queryUniqueValues(e, t, r) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke(
        "controller.queryUniqueValues",
        { query: e.toJSON(), params: t },
        r
      )
    );
  }
  async queryAggregateUniqueValues(e, t, r) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke(
        "controller.queryAggregateUniqueValues",
        { query: e.toJSON(), params: t },
        r
      )
    );
  }
  async queryClassBreaks(e, t, r) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke(
        "controller.queryClassBreaks",
        { query: e.toJSON(), params: t },
        r
      )
    );
  }
  async queryAggregateClassBreaks(e, t, r) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke(
        "controller.queryAggregateClassBreaks",
        { query: e.toJSON(), params: t },
        r
      )
    );
  }
  async queryHistogram(e, t, r) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke(
        "controller.queryHistogram",
        { query: e.toJSON(), params: t },
        r
      )
    );
  }
  async queryAggregateHistogram(e, t, r) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke(
        "controller.queryAggregateHistogram",
        { query: e.toJSON(), params: t },
        r
      )
    );
  }
  async queryFeatures(e, t) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke(
        "controller.queryFeatures",
        e == null ? void 0 : e.toJSON(),
        t
      )
    );
  }
  async queryVisibleFeatures(e, t) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke(
        "controller.queryVisibleFeatures",
        e == null ? void 0 : e.toJSON(),
        t
      )
    );
  }
  async queryObjectIds(e, t) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke(
        "controller.queryObjectIds",
        e == null ? void 0 : e.toJSON(),
        t
      )
    );
  }
  async queryFeatureCount(e, t) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke(
        "controller.queryFeatureCount",
        e == null ? void 0 : e.toJSON(),
        t
      )
    );
  }
  async queryExtent(e, t) {
    return this._connection.invoke("controller.queryExtent", e.toJSON(), t);
  }
  async queryLatestObservations(e, t) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke(
        "controller.queryLatestObservations",
        e.toJSON(),
        t
      )
    );
  }
  async queryStatistics(e) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke("controller.queryStatistics", e)
    );
  }
  async queryAggregates(e, t) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke(
        "controller.queryAggregates",
        e == null ? void 0 : e.toJSON(),
        t
      )
    );
  }
  async queryAggregateCount(e, t) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke(
        "controller.queryAggregateCount",
        e == null ? void 0 : e.toJSON(),
        t
      )
    );
  }
  async queryAggregateIds(e, t) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke(
        "controller.queryAggregateIds",
        e == null ? void 0 : e.toJSON(),
        t
      )
    );
  }
  async getObjectId(e) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke("controller.getObjectId", e)
    );
  }
  async getDisplayId(e) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke("controller.getDisplayId", e)
    );
  }
  async getFeatures(e) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke("controller.getFeatures", e)
    );
  }
  async getAggregates() {
    return (
      await this._startupResolver.promise,
      this._connection.invoke("controller.getAggregates")
    );
  }
  async getAggregateValueRanges() {
    return (
      await this._startupResolver.promise,
      this._connection.invoke("controller.getAggregateValueRanges")
    );
  }
  async mapValidDisplayIds(e) {
    return (
      await this._startupResolver.promise,
      this._connection.invoke("controller.mapValidDisplayIds", e)
    );
  }
  async onEdits(e) {
    return (
      await this._startupResolver.promise,
      R(this._connection.invoke("controller.onEdits", e))
    );
  }
  async enableEvent(e, t) {
    return (
      await this._startupResolver.promise,
      R(
        this._connection.invoke("controller.enableEvent", { name: e, value: t })
      )
    );
  }
  async pauseStream() {
    return (
      await this._startupResolver.promise,
      R(this._connection.invoke("controller.pauseStream"))
    );
  }
  async resumeStream() {
    return (
      await this._startupResolver.promise,
      R(this._connection.invoke("controller.resumeStream"))
    );
  }
  async sendMessageToSocket(e) {
    return (
      await this._startupResolver.promise,
      R(this._connection.invoke("controller.sendMessageToSocket", e))
    );
  }
  async sendMessageToClient(e) {
    return (
      await this._startupResolver.promise,
      R(this._connection.invoke("controller.sendMessageToClient", e))
    );
  }
  async updateCustomParameters(e) {
    return (
      await this._startupResolver.promise,
      R(this._connection.invoke("controller.updateCustomParameters", e))
    );
  }
  async _startWorker(e) {
    try {
      this._connection = await ve("Pipeline", {
        client: this.client,
        strategy: "dedicated",
        signal: e,
      });
    } catch (t) {
      we(t);
    }
  }
};
u([c()], E.prototype, "isReady", void 0),
  u([c({ constructOnly: !0 })], E.prototype, "client", void 0),
  u([c()], E.prototype, "tileRenderer", null),
  (E = u([b("esri.views.2d.layers.support.FeatureLayerProxy")], E));
const et = E;
class tt {
  constructor(t) {
    (this._tiles = new Map()),
      (this.buffer = 0),
      (this.acquireTile = t.acquireTile),
      (this.releaseTile = t.releaseTile),
      (this.tileInfoView = t.tileInfoView),
      (this.buffer = t.buffer);
  }
  destroy() {}
  clear() {
    this._tiles.forEach((t) => this._releaseTile(t));
  }
  tileKeys() {
    const t = [];
    return this._tiles.forEach((r, i) => t.push(i)), t;
  }
  update(t) {
    const r = this.tileInfoView.getTileCoverage(
        t.state,
        this.buffer,
        "closest"
      ),
      { spans: i, lodInfo: s } = r,
      { level: a } = s,
      n = [],
      l = [],
      o = new Set(),
      d = new Set();
    for (const { row: h, colFrom: f, colTo: y } of i)
      for (let g = f; g <= y; g++) {
        const v = W.getId(a, h, s.normalizeCol(g), s.getWorldForColumn(g)),
          w = this._getOrAcquireTile(n, v);
        o.add(v), w.isReady ? (w.visible = !0) : d.add(w.key);
      }
    return (
      d.forEach((h) => this._addPlaceholders(o, h)),
      this._tiles.forEach((h) => {
        o.has(h.key.id) || (l.push(h.key.id), this._releaseTile(h));
      }),
      Re.pool.release(r),
      { hasMissingTiles: d.size > 0, added: n, removed: l }
    );
  }
  _getOrAcquireTile(t, r) {
    if (!this._tiles.has(r)) {
      const i = this.acquireTile(new W(r));
      t.push(r), this._tiles.set(r, i), (i.visible = !1);
    }
    return this._tiles.get(r);
  }
  _getTile(t) {
    return this._tiles.get(t);
  }
  _releaseTile(t) {
    this._tiles.delete(t.key.id), this.releaseTile(t);
  }
  _addPlaceholders(t, r) {
    const i = this._addPlaceholderChildren(t, r);
    Math.abs(1 - i) < 1e-6 ||
      this._addPlaceholderParent(t, r) ||
      (this._getTile(r.id).visible = !0);
  }
  _addPlaceholderChildren(t, r) {
    let i = 0;
    return (
      this._tiles.forEach((s) => {
        i += this._addPlaceholderChild(t, s, r);
      }),
      i
    );
  }
  _addPlaceholderChild(t, r, i) {
    return r.key.level <= i.level || !r.hasData || !i.contains(r.key)
      ? 0
      : ((r.visible = !0),
        t.add(r.key.id),
        1 / (1 << (2 * (r.key.level - i.level))));
  }
  _addPlaceholderParent(t, r) {
    let i = r.getParentKey(),
      s = 0,
      a = null;
    for (; p(i); ) {
      if (t.has(i.id)) return !0;
      const n = this._getTile(i.id);
      if (n != null && n.isReady) {
        for (const l of t) {
          const o = this._getTile(l);
          o && i.contains(o.key) && (o.visible = !1);
        }
        return (n.visible = !0), t.add(n.key.id), !0;
      }
      n != null &&
        n.hasData &&
        n.patchCount > s &&
        ((s = n.patchCount), (a = n)),
        (i = i.getParentKey());
    }
    return !!a && ((a.visible = !0), t.add(a.key.id), !0);
  }
}
const pe = "esri.views.layers.FeatureLayerView",
  G = q.getLogger(pe),
  rt = (e) => {
    let t = class extends e {
      constructor(...r) {
        super(...r),
          (this._updatingRequiredFieldsPromise = null),
          (this.filter = null),
          (this.timeExtent = null),
          (this.layer = null),
          (this.requiredFields = []),
          (this.view = null);
      }
      initialize() {
        this.handles.add([
          N(
            () => {
              var i;
              const r = this.layer;
              return [
                (i = r == null ? void 0 : r.elevationInfo) == null
                  ? void 0
                  : i.featureExpressionInfo,
                r && "displayField" in r ? r.displayField : null,
                r && "timeInfo" in r && r.timeInfo,
                r && "renderer" in r && r.renderer,
                r && "labelingInfo" in r && r.labelingInfo,
                r && "floorInfo" in r && r.floorInfo,
                this.filter,
                this.featureEffect,
                this.timeExtent,
              ];
            },
            () => this._handleRequiredFieldsChange(),
            he
          ),
          Y(
            () => {
              var r;
              return (r = this.view) == null ? void 0 : r.floors;
            },
            "change",
            () => this._handleRequiredFieldsChange()
          ),
          Y(
            () => {
              const r = this.layer;
              return r && "sublayers" in r ? r.sublayers : null;
            },
            "change",
            () => this._handleRequiredFieldsChange()
          ),
        ]);
      }
      get availableFields() {
        const {
          layer: r,
          layer: { fieldsIndex: i },
          requiredFields: s,
        } = this;
        return "outFields" in r && r.outFields
          ? Z(i, [...X(i, r.outFields), ...s])
          : Z(i, s);
      }
      get featureEffect() {
        return this.layer && "featureEffect" in this.layer
          ? this.layer.featureEffect
          : null;
      }
      set featureEffect(r) {
        this._override("featureEffect", r);
      }
      get maximumNumberOfFeatures() {
        return 0;
      }
      set maximumNumberOfFeatures(r) {
        G.error(
          "#maximumNumberOfFeatures=",
          "Setting maximum number of features is not supported"
        );
      }
      get maximumNumberOfFeaturesExceeded() {
        return !1;
      }
      highlight(r) {
        throw new Error("missing implementation");
      }
      createQuery() {
        const r = {
            outFields: ["*"],
            returnGeometry: !0,
            outSpatialReference: this.view.spatialReference,
          },
          i = p(this.filter) ? this.filter.createQuery(r) : new Q(r);
        if (this.layer.type === "feature") {
          const s = ne(this);
          p(s) && (i.where = i.where ? `(${i.where}) AND (${s})` : s);
        }
        return (
          p(this.timeExtent) &&
            (i.timeExtent = p(i.timeExtent)
              ? i.timeExtent.intersection(this.timeExtent)
              : this.timeExtent.clone()),
          i
        );
      }
      createAggregateQuery() {
        const r = {
          outFields: ["*"],
          returnGeometry: !0,
          outSpatialReference: this.view.spatialReference,
        };
        return new Q(r);
      }
      queryFeatures(r, i) {
        throw new Error("missing implementation");
      }
      queryObjectIds(r, i) {
        throw new Error("missing implementation");
      }
      queryFeatureCount(r, i) {
        throw new Error("missing implementation");
      }
      queryExtent(r, i) {
        throw new Error("missing implementation");
      }
      async fetchPopupFeatures(r, i) {
        const s = this.validateFetchPopupFeatures(i);
        if (s) throw s;
        return this.fetchClientPopupFeatures(i);
      }
      _loadArcadeModules(r) {
        return r.get("expressionInfos.length") ||
          (Array.isArray(r.content) &&
            r.content.some((i) => i.type === "expression"))
          ? Se()
          : Promise.resolve();
      }
      _handleRequiredFieldsChange() {
        const r = this._updateRequiredFields();
        this._set("_updatingRequiredFieldsPromise", r),
          r.then(() => {
            this._updatingRequiredFieldsPromise === r &&
              this._set("_updatingRequiredFieldsPromise", null);
          });
      }
      async _updateRequiredFields() {
        if (!this.layer || !this.view) return;
        const r = this.view.type === "3d",
          {
            layer: i,
            layer: { fieldsIndex: s, objectIdField: a },
          } = this,
          n = "renderer" in i && i.renderer,
          l = "orderBy" in i && i.orderBy,
          o = "featureReduction" in i ? i.featureReduction : null,
          d = new Set(),
          h = await ee([
            n ? n.collectRequiredFields(d, s) : null,
            te(d, i),
            r ? qe(d, i) : null,
            p(this.filter) ? re(d, i, this.filter) : null,
            p(this.featureEffect) ? re(d, i, this.featureEffect.filter) : null,
            o ? Ee(d, i, o) : null,
            l ? xe(d, i, l) : null,
          ]);
        if (
          ("timeInfo" in i &&
            i.timeInfo &&
            this.timeExtent &&
            L(d, i.fieldsIndex, [i.timeInfo.startField, i.timeInfo.endField]),
          i.type === "feature" &&
            (i.floorInfo && L(d, i.fieldsIndex, [i.floorInfo.floorField]),
            r &&
              p(i.infoFor3D) &&
              (i.globalIdField == null &&
                G.error("globalIdField missing on 3DObjectFeatureLayer"),
              L(d, i.fieldsIndex, [i.globalIdField]))),
          i.type === "subtype-group")
        ) {
          z(d, s, i.subtypeField);
          const y = i.sublayers.map((g) => {
            var v;
            return Promise.all([
              (v = g.renderer) == null ? void 0 : v.collectRequiredFields(d, s),
              te(d, g),
            ]);
          });
          await ee(y);
        }
        for (const y of h) y.error && G.error(y.error);
        z(d, s, a),
          r && "displayField" in i && i.displayField && z(d, s, i.displayField);
        const f = Array.from(d).sort();
        this._set("requiredFields", f);
      }
      validateFetchPopupFeatures(r) {
        if (J(r)) return null;
        for (const i of r.clientGraphics ?? []) {
          const s = i.layer;
          if ("popupEnabled" in s && !s.popupEnabled)
            return new x(
              "featurelayerview:fetchPopupFeatures",
              "Popups are disabled",
              {
                layer: s,
              }
            );
          if (i.isAggregate) {
            const a = "featureReduction" in s ? s.featureReduction : null;
            if (
              !(a && "popupTemplate" in a && a.popupEnabled && a.popupTemplate)
            )
              return new x(
                "featurelayerview:fetchPopupFeatures",
                "Popups are disabled",
                {
                  layer: s,
                }
              );
          } else if ("popupTemplate" in s && !j(s, r))
            return new x(
              "featurelayerview:fetchPopupFeatures",
              "Layer does not define a popup template",
              { layer: s }
            );
        }
      }
      async fetchClientPopupFeatures(r) {
        const i = p(r) ? r.clientGraphics : null;
        if (!i || i.length === 0) return [];
        const s = new Array(i.length),
          a = new Map(),
          n = await this.createPopupQuery(r);
        for (let l = 0; l < i.length; l++) {
          const o = i[l];
          if (o.isAggregate) {
            s[l] = o;
            continue;
          }
          const d = o.layer;
          if (!("popupEnabled" in d)) continue;
          const h = X(this.layer.fieldsIndex, n.outFields),
            f = j(d, r);
          if (J(f)) continue;
          const y = await this._loadArcadeModules(f);
          (y && y.arcadeUtils.hasGeometryOperations(f)) || !Ie(h, o)
            ? a.set(o.getObjectId(), { graphic: o, index: l })
            : (s[l] = o);
        }
        if (this.layer.type === "stream" || a.size === 0)
          return s.filter(Boolean);
        n.objectIds = Array.from(a.keys());
        try {
          const l = await this.layer.queryFeatures(n);
          for (const o of l.features) {
            const {
              graphic: { geometry: d },
              index: h,
            } = a.get(o.getObjectId());
            o.geometry || (o.geometry = d), (s[h] = o);
          }
        } catch {}
        return s.filter(Boolean);
      }
      async createPopupQuery(r) {
        const i = this.layer.createQuery(),
          s = new Set();
        let a = !1;
        const n =
          p(r) && r.clientGraphics
            ? r.clientGraphics.map((l) => l.layer)
            : [this.layer];
        for (const l of n) {
          if (!("popupEnabled" in l)) continue;
          const o = j(l, r);
          if (J(o)) continue;
          const d = await this._loadArcadeModules(o),
            h = d && d.arcadeUtils.hasGeometryOperations(o);
          a = !(this.layer.geometryType !== "point" && !h);
          const f = await $e(this.layer, o);
          for (const y of f) s.add(y);
        }
        if (
          ((i.returnGeometry = a),
          (i.returnZ = a),
          (i.returnM = a),
          (i.outFields = Array.from(s)),
          (i.outSpatialReference = this.view.spatialReference),
          this.layer.type === "feature")
        ) {
          const l = ne(this);
          p(l) && (i.where = i.where ? `(${i.where}) AND (${l})` : l);
        }
        return i;
      }
      canResume() {
        return (
          !!super.canResume() &&
          (!p(this.timeExtent) || !this.timeExtent.isEmpty)
        );
      }
    };
    return (
      u([c()], t.prototype, "_updatingRequiredFieldsPromise", void 0),
      u([c({ readOnly: !0 })], t.prototype, "availableFields", null),
      u([c({ type: be })], t.prototype, "featureEffect", null),
      u([c({ type: ce })], t.prototype, "filter", void 0),
      u([c(Fe)], t.prototype, "timeExtent", void 0),
      u([c()], t.prototype, "layer", void 0),
      u([c({ type: Number })], t.prototype, "maximumNumberOfFeatures", null),
      u(
        [c({ readOnly: !0, type: Boolean })],
        t.prototype,
        "maximumNumberOfFeaturesExceeded",
        null
      ),
      u([c({ readOnly: !0 })], t.prototype, "requiredFields", void 0),
      u([c()], t.prototype, "suspended", void 0),
      u([c()], t.prototype, "view", void 0),
      (t = u([b(pe)], t)),
      t
    );
  };
function ue(e) {
  return e && "openPorts" in e;
}
let _ = class extends rt(We(je(Be))) {
  constructor() {
    super(...arguments),
      (this._pipelineIsUpdating = !0),
      (this._commandsQueue = new Xe({
        process: (e) => {
          switch (e.type) {
            case "processed-edit":
              return this._doEdit(e);
            case "refresh":
              return this._doRefresh(e.dataChanged);
            case "update":
              return this._doUpdate();
          }
        },
      })),
      (this._visibilityOverrides = new Set()),
      (this._highlightIds = new Map()),
      (this._updateHighlight = Oe(async () =>
        this._proxy.setHighlight(Array.from(this._highlightIds.keys()))
      )),
      (this._uploadsLocked = !1),
      (this._needsClusterSizeUpdate = !1),
      (this.featureEffectView = new Ye()),
      (this._lastDefinitionExpression = null);
  }
  destroy() {
    var e;
    Ce(this._updateClusterSizeTask, (t) => t.remove()),
      (e = this._proxy) == null || e.destroy(),
      this._commandsQueue.destroy();
  }
  initialize() {
    this.addResolvingPromise(
      Promise.all([this._initProxy(), this._initServiceOptions()])
    ),
      this.addHandles(
        [
          this.on("valueRangesChanged", (e) => {
            this._set("_aggregateValueRanges", e.valueRanges);
          }),
          N(
            () => this.featureEffect,
            (e) => {
              this.featureEffectView.featureEffect = e;
            },
            he
          ),
        ],
        "constructor"
      ),
      this.featureEffectView.endTransitions();
  }
  async _initProxy() {
    var r;
    const e = this.layer;
    if ("isTable" in e && e.isTable)
      throw new x(
        "featurelayerview:table-not-supported",
        "table feature layer can't be displayed",
        { layer: this.layer }
      );
    if (
      (e.type === "feature" || e.type === "subtype-group") &&
      !((r = M(e)) != null && r.operations.supportsQuery)
    )
      throw new x(
        "featurelayerview:query-not-supported",
        "layer view requires a layer with query capability",
        { layer: e }
      );
    this._proxy && this._proxy.destroy();
    const t = this._createClientOptions();
    return this._set("_proxy", new et({ client: t })), this._proxy.when();
  }
  async _initServiceOptions() {
    return (
      this._set("_serviceOptions", await this._createServiceOptions()),
      this._serviceOptions
    );
  }
  get _effectiveFeatureReduction() {
    if (!("featureReduction" in this.layer)) return null;
    const e = this.layer.featureReduction;
    return e &&
      (!("maxScale" in e) || !e.maxScale || e.maxScale < this.view.scale)
      ? e
      : null;
  }
  get orderByFields() {
    var e, t;
    return ((e = this._serviceOptions) == null ? void 0 : e.type) !== "stream"
      ? (t = this._serviceOptions) == null
        ? void 0
        : t.orderByFields
      : void 0;
  }
  get labelsVisible() {
    const e =
      this.layer.type === "subtype-group"
        ? this.layer.sublayers.items
        : [this.layer];
    return !this.suspended && e.some((t) => t.labelingInfo && t.labelsVisible);
  }
  get queryMode() {
    var e;
    return (e = this._serviceOptions) == null ? void 0 : e.type;
  }
  get renderingConfigHash() {
    var I, O;
    if (!this.layer) return null;
    const e = this.availableFields,
      t = this.layer,
      r = this.view.floors,
      { definitionExpression: i } = t,
      s =
        this.layer.type !== "subtype-group" &&
        this.layer.labelsVisible &&
        this.layer.labelingInfo,
      a = "renderer" in t && t.renderer,
      n = "gdbVersion" in t ? t.gdbVersion : void 0,
      l =
        "historicMoment" in t
          ? (I = t.historicMoment) == null
            ? void 0
            : I.getTime()
          : void 0,
      { timeExtent: o } = this,
      d = "customParameters" in t ? JSON.stringify(t.customParameters) : void 0,
      h = "apiKey" in t ? t.apiKey : void 0,
      f =
        t.type === "stream"
          ? `${JSON.stringify(t.geometryDefinition)}${t.definitionExpression}`
          : null,
      y = JSON.stringify(this.clips),
      g = (O = this._effectiveFeatureReduction) == null ? void 0 : O.toJSON(),
      v = "orderBy" in this.layer && JSON.stringify(this.layer.orderBy),
      w =
        "sublayers" in this.layer &&
        this.layer.sublayers.items.reduce(
          (F, P) =>
            F +
            `${P.visible ? 1 : 0}.${JSON.stringify(P.renderer)}.${
              P.labelsVisible
            }
.${JSON.stringify(P.labelingInfo)}`,
          ""
        ),
      V = "subtypeCode" in this.layer && this.layer.subtypeCode;
    return JSON.stringify({
      orderBy: v,
      sublayerHash: w,
      subtypeCode: V,
      filterHash: p(this.filter) && this.filter.toJSON(),
      effectHash: p(this.featureEffect) && this.featureEffect.toJSON(),
      streamFilter: f,
      gdbVersion: n,
      definitionExpression: i,
      historicMoment: l,
      availableFields: e,
      renderer: a,
      labelingInfo: s,
      timeExtent: o,
      floors: r,
      clipsHash: y,
      featureReduction: g,
      customParameters: d,
      apiKey: h,
    });
  }
  highlight(e) {
    let t;
    e instanceof D
      ? (t = [e.getObjectId()])
      : typeof e == "number" || typeof e == "string"
      ? (t = [e])
      : Te.isCollection(e) && e.length > 0
      ? (t = e.map((i) => (i == null ? void 0 : i.getObjectId())).toArray())
      : Array.isArray(e) &&
        e.length > 0 &&
        (t =
          typeof e[0] == "number" || typeof e[0] == "string"
            ? e
            : e.map((i) => (i == null ? void 0 : i.getObjectId())));
    const r = t == null ? void 0 : t.filter(p);
    return r && r.length
      ? (this._addHighlight(r), { remove: () => this._removeHighlight(r) })
      : { remove: () => {} };
  }
  hasHighlight() {
    return !!this._highlightIds.size;
  }
  async hitTest(e, t) {
    if (!this.tileRenderer) return null;
    const r = await this.tileRenderer.hitTest(t);
    if (r.length === 0) return null;
    const { features: i, aggregates: s } = await this._proxy.getFeatures(r);
    return [
      ...s.map((a) => this._createGraphicHit(e, $.fromJSON(a))),
      ...i.map((a) => this._createGraphicHit(e, D.fromJSON(a))),
    ];
  }
  queryStatistics() {
    return this._proxy.queryStatistics();
  }
  async querySummaryStatistics(e, t, r) {
    const i = { ...t, scale: this.view.scale };
    return this._proxy.querySummaryStatistics(this._cleanUpQuery(e), i, r);
  }
  async queryAggregateSummaryStatistics(e, t, r) {
    const i = { ...t, scale: this.view.scale };
    return this._proxy.queryAggregateSummaryStatistics(
      this._cleanUpAggregateQuery(e),
      i,
      r
    );
  }
  async queryUniqueValues(e, t, r) {
    const i = { ...t, scale: this.view.scale };
    return this._proxy.queryUniqueValues(this._cleanUpQuery(e), i, r);
  }
  async queryAggregateUniqueValues(e, t, r) {
    const i = { ...t, scale: this.view.scale };
    return this._proxy.queryAggregateUniqueValues(
      this._cleanUpAggregateQuery(e),
      i,
      r
    );
  }
  async queryClassBreaks(e, t, r) {
    const i = { ...t, scale: this.view.scale };
    return this._proxy.queryClassBreaks(this._cleanUpQuery(e), i, r);
  }
  async queryAggregateClassBreaks(e, t, r) {
    const i = { ...t, scale: this.view.scale };
    return this._proxy.queryAggregateClassBreaks(
      this._cleanUpAggregateQuery(e),
      i,
      r
    );
  }
  async queryHistogram(e, t, r) {
    const i = { ...t, scale: this.view.scale };
    return this._proxy.queryHistogram(this._cleanUpQuery(e), i, r);
  }
  async queryAggregateHistogram(e, t, r) {
    const i = { ...t, scale: this.view.scale };
    return this._proxy.queryAggregateHistogram(
      this._cleanUpAggregateQuery(e),
      i,
      r
    );
  }
  queryFeatures(e, t) {
    return this.queryFeaturesJSON(e, t).then((r) => {
      const i = K.fromJSON(r);
      return i.features.forEach((s) => this._setLayersForFeature(s)), i;
    });
  }
  queryVisibleFeatures(e, t) {
    return this._proxy
      .queryVisibleFeatures(this._cleanUpQuery(e), t)
      .then((r) => {
        const i = K.fromJSON(r);
        return i.features.forEach((s) => this._setLayersForFeature(s)), i;
      });
  }
  async queryAggregates(e, t) {
    const r = await this._proxy.queryAggregates(
        this._cleanUpAggregateQuery(e),
        t
      ),
      i = Ze.fromJSON(r);
    return i.features.forEach((s) => this._setLayersForFeature(s)), i;
  }
  queryAggregateIds(e, t) {
    return this._proxy.queryAggregateIds(this._cleanUpAggregateQuery(e), t);
  }
  queryAggregateCount(e, t) {
    return this._proxy.queryAggregateCount(this._cleanUpAggregateQuery(e), t);
  }
  queryAggregateJSON(e, t) {
    return this._proxy.queryAggregates(this._cleanUpAggregateQuery(e), t);
  }
  queryFeaturesJSON(e, t) {
    return this._proxy.queryFeatures(this._cleanUpQuery(e), t);
  }
  queryObjectIds(e, t) {
    return this._proxy.queryObjectIds(this._cleanUpQuery(e), t);
  }
  queryFeatureCount(e, t) {
    return this._proxy.queryFeatureCount(this._cleanUpQuery(e), t);
  }
  queryExtent(e, t) {
    return this._proxy
      .queryExtent(this._cleanUpQuery(e), t)
      .then((r) => ({ count: r.count, extent: Ue.fromJSON(r.extent) }));
  }
  setVisibility(e, t) {
    t ? this._visibilityOverrides.delete(e) : this._visibilityOverrides.add(e),
      this._update();
  }
  update(e) {
    if (!this._tileStrategy || !this.tileRenderer) return;
    const {
      hasMissingTiles: t,
      added: r,
      removed: i,
    } = this._tileStrategy.update(e);
    (r.length || i.length) && this._proxy.updateTiles({ added: r, removed: i }),
      t && this.requestUpdate(),
      this.notifyChange("updating");
  }
  attach() {
    this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`),
      (this._tileStrategy = new tt({
        acquireTile: (e) => this._acquireTile(e),
        releaseTile: (e) => this._releaseTile(e),
        tileInfoView: this.view.featuresTilingScheme,
        buffer: 0,
      })),
      this.addAttachHandles(
        N(
          () => this.renderingConfigHash,
          () => this._update(),
          Ae
        )
      ),
      this.layer.type !== "stream" &&
        this.addAttachHandles(this.layer.on("edits", (e) => this._edit(e)));
  }
  detach() {
    var e, t;
    this._commandsQueue.clear(),
      (e = this._proxy) == null || e.stop(),
      this.container.removeAllChildren(),
      (t = this.tileRenderer) == null || t.uninstall(this.container),
      (this.tileRenderer = null),
      (this._tileStrategy = ie(this._tileStrategy)),
      (this._tileRendererHash = null);
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  isUpdating() {
    var l;
    const e = "renderer" in this.layer && this.layer.renderer != null,
      t = this._commandsQueue.updating,
      r = this._updatingRequiredFieldsPromise != null,
      i = !this._proxy || !this._proxy.isReady,
      s = this._pipelineIsUpdating,
      a =
        this.tileRenderer == null ||
        ((l = this.tileRenderer) == null ? void 0 : l.updating),
      n = e && (t || r || i || s || a);
    return S("esri-2d-log-updating"), n;
  }
  _createClientOptions() {
    return {
      setUpdating: (e) => {
        this._set("_pipelineIsUpdating", e);
      },
      emitEvent: (e) => {
        this.emit(e.name, e.event);
      },
    };
  }
  async _detectQueryMode(e) {
    var l;
    const t = "path" in e,
      { layer: r } = this,
      i =
        "editingInfo" in r &&
        ((l = r.editingInfo) == null ? void 0 : l.lastEditDate),
      s = "refreshInterval" in r && !!r.refreshInterval,
      a = !i && s,
      n = M(r);
    if (
      t &&
      (r.type === "feature" || r.type === "subtype-group") &&
      r.geometryType === "point" &&
      n != null &&
      n.query.supportsPagination &&
      !(n != null && n.operations.supportsEditing) &&
      !a &&
      S("featurelayer-snapshot-enabled")
    )
      try {
        const o = await r.queryFeatureCount();
        if (o <= S("featurelayer-snapshot-point-min-threshold"))
          return { mode: "snapshot", featureCount: o };
        const d = S("featurelayer-snapshot-point-max-threshold"),
          h = S("featurelayer-snapshot-point-coverage"),
          f = this.view.extent,
          y = U(r.fullExtent),
          g = y == null ? void 0 : y.clone().intersection(f),
          v = p(g) ? g.width * g.height : 0,
          w = (y == null ? void 0 : y.width) * (y == null ? void 0 : y.height);
        if (o <= d && (w === 0 ? 0 : v / w) >= h)
          return { mode: "snapshot", featureCount: o };
      } catch (o) {
        q.getLogger(this.declaredClass).warn(
          "mapview-feature-layer",
          "Encountered an error when querying for featureCount",
          { error: o }
        );
      }
    return { mode: "on-demand" };
  }
  async _createServiceOptions() {
    var V, I, O;
    const e = this.layer;
    if (e.type === "stream") return null;
    const t = M(e),
      { capabilities: r, objectIdField: i } = e,
      s = e.fields.map((F) => F.toJSON()),
      a = p(e.fullExtent) ? e.fullExtent.toJSON() : null,
      n = Ke(e.geometryType),
      l = ("timeInfo" in e && e.timeInfo && e.timeInfo.toJSON()) || null,
      o = e.spatialReference ? e.spatialReference.toJSON() : null,
      d = e.type === "feature" ? e.globalIdField : null;
    let h;
    e.type === "ogc-feature"
      ? (h = e.source.getSource())
      : ue(e.source)
      ? (h = await e.source.openPorts())
      : e.parsedUrl &&
        ((h = ke(e.parsedUrl)),
        "dynamicDataSource" in e &&
          e.dynamicDataSource &&
          (h.query = {
            layer: JSON.stringify({ source: e.dynamicDataSource }),
          }));
    const f =
        "datesInUnknownTimezone" in this.layer &&
        this.layer.datesInUnknownTimezone,
      y =
        ("subtypeField" in this.layer ? this.layer.subtypeField : null) ?? null,
      { mode: g, featureCount: v } = await this._detectQueryMode(h);
    let w = this.layer.objectIdField;
    if (
      this.layer.type === "feature" &&
      p(this.layer.orderBy) &&
      this.layer.orderBy.length
    ) {
      const F =
        !this.layer.orderBy[0].valueExpression && this.layer.orderBy[0].field;
      F && (w = F);
    }
    return {
      type: g,
      timeReferenceUnknownClient: f,
      subtypeField: y,
      featureCount: v,
      globalIdField: d,
      maxRecordCount: r.query.maxRecordCount,
      tileMaxRecordCount: r.query.tileMaxRecordCount,
      capabilities: r,
      effectiveCapabilities: t,
      fields: s,
      fullExtent: a,
      geometryType: n,
      objectIdField: i,
      source: h,
      timeInfo: l,
      spatialReference: o,
      orderByFields: w,
      datesInUnknownTimezone: f,
      dateFieldsTimeReference:
        ("dateFieldsTimeReference" in this.layer
          ? (V = this.layer.dateFieldsTimeReference) == null
            ? void 0
            : V.toJSON()
          : null) || null,
      preferredTimeReference:
        ("preferredTimeReference" in this.layer
          ? (I = this.layer.preferredTimeReference) == null
            ? void 0
            : I.toJSON()
          : null) || null,
      editFieldsInfo:
        "editFieldsInfo" in this.layer
          ? (O = this.layer.editFieldsInfo) == null
            ? void 0
            : O.toJSON()
          : null,
    };
  }
  async _createMemoryServiceOptions(e) {
    const t = await e.openPorts();
    return { ...this._createServiceOptions(), type: "memory", source: t };
  }
  _cleanUpQuery(e) {
    const t = Q.from(e) || this.createQuery();
    return (
      t.outSpatialReference ||
        (t.outSpatialReference = this.view.spatialReference),
      t
    );
  }
  _cleanUpAggregateQuery(e) {
    const t = Q.from(e) || this.createAggregateQuery();
    return (
      t.outSpatialReference ||
        (t.outSpatialReference = this.view.spatialReference),
      t
    );
  }
  async _update() {
    return this._commandsQueue.push({ type: "update" });
  }
  async _edit(e) {
    if (!this.suspended)
      return this._validateEdit(e)
        ? this._commandsQueue.push({ type: "edit", edits: e })
        : void 0;
    this._clearTiles();
  }
  async doRefresh(e) {
    if (this.attached && this._tileStrategy.tileKeys().length)
      return this.suspended && e
        ? void this._clearTiles()
        : this._commandsQueue.push({ type: "refresh", dataChanged: e });
  }
  _clearTiles() {
    this._tileStrategy.tileKeys().length &&
      (this._proxy.updateTiles({
        added: [],
        removed: this._tileStrategy.tileKeys(),
      }),
      this._tileStrategy.clear(),
      this.requestUpdate(),
      this._commandsQueue.clear(),
      this._update());
  }
  _validateEdit(e) {
    const t = "globalIdField" in this.layer && this.layer.globalIdField,
      r = e.deletedFeatures.some((s) => s.objectId === -1 || !s.objectId),
      i = t && this.availableFields.includes(t);
    return r && !i
      ? (q
          .getLogger(this.declaredClass)
          .error(
            new x(
              "mapview-apply-edits",
              `Editing the specified service requires the layer's globalIdField, ${t} to be included the layer's outFields for updates to be reflected on the map`
            )
          ),
        null)
      : e;
  }
  async _doUpdate() {
    var e, t;
    try {
      if (
        this.destroyed ||
        !this._hasRequiredSupport(this.layer) ||
        !this._tileStrategy
      )
        return;
      const { featureEffectView: r, filter: i } = this;
      if ((await this._updateRequiredFields(), this.destroyed)) return;
      const { renderer: s } = this._getEffectiveRenderer();
      this._set("_effectiveRenderer", s);
      const a = this._createSchemaConfig(),
        n = this._createConfiguration(a, i, r.filter),
        l =
          this._lastDefinitionExpression !==
          n.schema.source.definitionExpression;
      this._lastDefinitionExpression = n.schema.source.definitionExpression;
      const o = n.schema.tileRenderer,
        d = this._createTileRendererHash(o);
      if (
        (this._serviceOptions.type === "snapshot" &&
          (n.schema.source.initialFeatureCount =
            this._serviceOptions.featureCount),
        d !== this._tileRendererHash)
      ) {
        await this._initTileRenderer(o, s);
        const h = this.layer,
          f =
            h.type === "stream"
              ? await this._initServiceOptions()
              : this._serviceOptions;
        this.tileRenderer.onConfigUpdate(s),
          h.type !== "stream" &&
            ue(h.source) &&
            (f.source = await h.source.openPorts());
        const y = { added: this._tileStrategy.tileKeys(), removed: [] };
        await this._proxy.startup(this.view.featuresTilingScheme, n, f, y),
          this.hasHighlight() &&
            (await this._proxy.setHighlight(
              Array.from(this._highlightIds.keys())
            )),
          await this._onceTilesUpdated(),
          this.tileRenderer.onConfigUpdate(s);
      } else {
        this._serviceOptions.type === "snapshot" &&
          l &&
          (n.schema.source.changedFeatureCount =
            await this.layer.queryFeatureCount());
        const h = await this._proxy.update(n);
        (h.mesh || ((e = h.targets) != null && e.aggregate)) &&
          this._lockGPUUploads();
        try {
          await this._proxy.applyUpdate(h);
        } catch (f) {
          C(f) || q.getLogger(this.declaredClass).error(f);
        }
        (h.mesh || ((t = h.targets) != null && t.aggregate)) &&
          this._unlockGPUUploads(),
          this.tileRenderer.onConfigUpdate(s),
          this._updateClusterSizeVariable(),
          this._forceAttributeTextureUpload();
      }
      (this._tileRendererHash = d),
        this.tileRenderer.invalidateLabels(),
        this.requestUpdate();
    } catch {}
  }
  async _doEdit(e) {
    try {
      await this._proxy.onEdits(e);
    } catch (t) {
      C(t);
    }
  }
  async _doRefresh(e) {
    this._lockGPUUploads();
    try {
      let t;
      e &&
        this.queryMode === "snapshot" &&
        "queryFeatureCount" in this.layer &&
        (t = await this.layer.queryFeatureCount()),
        await this._proxy.refresh({ dataChanged: e, featureCount: t });
    } catch (t) {
      C(t);
    }
    this._unlockGPUUploads(),
      this._effectiveFeatureReduction && this._updateClusterSizeVariable();
  }
  _updateClusterSizeVariable() {
    this._needsClusterSizeUpdate &&
      (this.tileRenderer.onConfigUpdate(this._effectiveRenderer),
      (this._needsClusterSizeUpdate = !1));
  }
  _createUpdateClusterSizeTask(e, t) {
    return N(
      () => this._aggregateValueRanges,
      (r) => {
        this._updateClusterEffectiveRendererSizeVariable(e, t, r),
          (this._needsClusterSizeUpdate = !0),
          this._uploadsLocked || this._updateClusterSizeVariable();
      }
    );
  }
  async _updateClusterEffectiveRendererSizeVariable(e, t, r) {
    if (e.dynamicClusterSize && "visualVariables" in e && e.visualVariables) {
      const i = Ve(e.visualVariables);
      if (p(i) && i.field === "cluster_count") {
        const s = e.visualVariables.indexOf(i);
        e.visualVariables[s] = Pe(t, r);
        const a = e.clone();
        (a.dynamicClusterSize = !0), this._set("_effectiveRenderer", a);
      }
    }
  }
  _getEffectiveRenderer() {
    var i;
    const e = this.layer,
      t = "renderer" in e ? e.renderer : null,
      r = this._effectiveFeatureReduction;
    if (
      ((this._updateClusterSizeTask = Ne(this._updateClusterSizeTask)),
      r &&
        "renderer" in r &&
        r.renderer &&
        !((i = r.renderer.authoringInfo) != null && i.isAutoGenerated))
    ) {
      const s = r.fields;
      if (r.type === "cluster") {
        const { renderer: a, didInject: n } = Je(
          r.renderer,
          r,
          this._aggregateValueRanges
        );
        return (
          n &&
            (this._updateClusterSizeTask = this._createUpdateClusterSizeTask(
              a,
              r
            )),
          { renderer: a, aggregateFields: s, featureReduction: r }
        );
      }
      return { renderer: r.renderer, aggregateFields: s, featureReduction: r };
    }
    if (r && r.type === "cluster" && t && He(t)) {
      const s = r,
        a = [],
        n = Qe(a, t, s, this._aggregateValueRanges, !0);
      return (
        (this._updateClusterSizeTask = this._createUpdateClusterSizeTask(n, s)),
        { renderer: n, aggregateFields: a, featureReduction: r }
      );
    }
    return { renderer: t, aggregateFields: [], featureReduction: null };
  }
  _acquireTile(e) {
    const t = this.tileRenderer.acquireTile(e);
    return (
      t.once("attach", () => {
        this.requestUpdate();
      }),
      t
    );
  }
  _releaseTile(e) {
    this.tileRenderer.releaseTile(e);
  }
  async _initTileRenderer(e, t) {
    const r = await (async function (i, s) {
      if (!i) return null;
      switch (i.type) {
        case "symbol":
          return new (
            await ae(
              () => import("./SymbolTileRenderer.012aad5a.js"),
              [
                "js/SymbolTileRenderer.012aad5a.js",
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
                "js/CircularArray.6cd6ba2b.js",
                "js/color.4c5303e9.js",
                "js/enums.13513a14.js",
                "js/enums.64ab819c.js",
                "js/VertexElementDescriptor.2925c6af.js",
                "js/AttributeStoreView.413dc93f.js",
                "js/definitions.ce677f69.js",
                "js/TiledDisplayObject.3b82e169.js",
                "js/Container.a5892366.js",
                "js/Texture.fb0c670a.js",
                "js/visualVariablesUtils.1183f3fb.js",
                "js/visualVariablesUtils.de38be9a.js",
                "js/VertexArrayObject.1b8f3583.js",
                "js/BufferPool.8dc92598.js",
                "js/schemaUtils.264ba82d.js",
                "js/utils.1f803f1b.js",
                "js/MaterialKey.97cb3dc8.js",
                "js/ExpandedCIM.e22c8b13.js",
                "js/BidiEngine.520adad3.js",
                "js/GeometryUtils.874f8cf4.js",
                "js/Rect.6884a4ea.js",
                "js/quantizationUtils.1e9e702d.js",
                "js/floatRGBA.6f2fa7cd.js",
                "js/util.79a0d0b9.js",
                "js/BaseTileRenderer.a3fd4cf9.js",
                "js/WGLContainer.e7ddd41d.js",
                "js/ProgramTemplate.4bbf0f5e.js",
                "js/StyleDefinition.4f77c81e.js",
                "js/config.1337d16e.js",
                "js/GeometryUtils.82ab0a13.js",
                "js/earcut.9f54f087.js",
                "js/FeatureContainer.3aa1973d.js",
                "js/TileContainer.4bfeb0d8.js",
              ]
            )
          ).default(s);
        case "heatmap":
          return new (
            await ae(
              () => import("./HeatmapTileRenderer.69894750.js"),
              [
                "js/HeatmapTileRenderer.69894750.js",
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
                "js/BitmapTileContainer.9704c56c.js",
                "js/Bitmap.cb464f5e.js",
                "js/Container.a5892366.js",
                "js/definitions.ce677f69.js",
                "js/enums.64ab819c.js",
                "js/Texture.fb0c670a.js",
                "js/TiledDisplayObject.3b82e169.js",
                "js/WGLContainer.e7ddd41d.js",
                "js/VertexArrayObject.1b8f3583.js",
                "js/VertexElementDescriptor.2925c6af.js",
                "js/color.4c5303e9.js",
                "js/enums.13513a14.js",
                "js/ProgramTemplate.4bbf0f5e.js",
                "js/MaterialKey.97cb3dc8.js",
                "js/utils.1f803f1b.js",
                "js/StyleDefinition.4f77c81e.js",
                "js/config.1337d16e.js",
                "js/GeometryUtils.82ab0a13.js",
                "js/earcut.9f54f087.js",
                "js/TileContainer.4bfeb0d8.js",
                "js/BaseTileRenderer.a3fd4cf9.js",
              ]
            )
          ).default(s);
      }
    })(e, {
      layerView: this,
      tileInfoView: this.view.featuresTilingScheme,
      layer: this.layer,
    });
    return (
      this.tileRenderer &&
        (this._tileStrategy.clear(),
        this.tileRenderer.uninstall(this.container),
        (this.tileRenderer = ie(this.tileRenderer))),
      this.destroyed
        ? null
        : ((this._proxy.tileRenderer = r),
          this._set("tileRenderer", r),
          this.tileRenderer.install(this.container),
          this.tileRenderer.onConfigUpdate(t),
          this.requestUpdate(),
          this.tileRenderer)
    );
  }
  _createTileRendererHash(e) {
    return `${e.type}`;
  }
  get hasFilter() {
    const e = !!(
      "floorInfo" in this.layer &&
      this.layer.floorInfo &&
      this.view.floors &&
      this.view.floors.length
    );
    return (
      !!this.filter ||
      e ||
      !!this._visibilityOverrides.size ||
      !!this.timeExtent
    );
  }
  _injectOverrides(e) {
    const t = p(e) ? e.timeExtent : null,
      r =
        p(this.timeExtent) && p(t)
          ? this.timeExtent.intersection(t)
          : this.timeExtent || t;
    let i = null;
    const s = "floorInfo" in this.layer && this.layer.floorInfo;
    if (s) {
      const n = p(e) ? e.where : null;
      i = this._addFloorFilterClause(n);
    }
    if (!this._visibilityOverrides.size && !r && !s)
      return p(e) ? e.toJSON() : null;
    ((e = (p(e) && e.clone()) || new ce()).timeExtent = r), i && (e.where = i);
    const a = e.toJSON();
    return (a.hiddenIds = Array.from(this._visibilityOverrides)), a;
  }
  _addFloorFilterClause(e) {
    var i;
    const t = this.layer;
    let r = e || "";
    if ("floorInfo" in t && t.floorInfo) {
      let s = this.view.floors;
      if (!s || !s.length) return r;
      (i = t.floorInfo.viewAllLevelIds) != null &&
        i.length &&
        (s = t.floorInfo.viewAllLevelIds);
      const a = s.filter((o) => o !== "").map((o) => "'" + o + "'");
      a.push("''");
      const n = t.floorInfo.floorField;
      let l = "(" + n + " IN ({ids}) OR " + n + " IS NULL)";
      if (((l = l.replace("{ids}", a.join(", "))), p(r) && r.includes(n))) {
        let o = new RegExp("AND \\(" + n + ".*NULL\\)", "g");
        (r = r.replace(o, "")),
          (o = new RegExp("\\(" + n + ".*NULL\\)", "g")),
          (r = r.replace(o, "")),
          (r = r.replace(/\s+/g, " ").trim());
      }
      r = r !== "" ? "(" + r + ") AND " + l : l;
    }
    return r !== "" ? r : null;
  }
  _createConfiguration(e, t, r) {
    const i =
        this.layer.type === "feature" && this.layer.historicMoment
          ? this.layer.historicMoment.getTime()
          : void 0,
      s =
        this.layer.type === "feature"
          ? this.layer.gdbVersion ?? void 0
          : void 0,
      a = new Array(Me),
      n = this._injectOverrides(t);
    (a[0] = n), (a[1] = p(r) ? r.toJSON() : null);
    const l = Ge(e);
    if (J(l)) return null;
    const o = Le("2d");
    return {
      availableFields: this.availableFields,
      gdbVersion: s,
      historicMoment: i,
      devicePixelRatio: window.devicePixelRatio || 1,
      filters: a,
      schema: l,
      supportsTextureFloat: o.supportsTextureFloat,
      maxTextureSize: o.maxTextureSize,
    };
  }
  _hasRequiredSupport(e) {
    return !("renderer" in e) || De(e.renderer);
  }
  _onceTilesUpdated() {
    return this.requestUpdate(), ze(() => !this._pipelineIsUpdating);
  }
  _lockGPUUploads() {
    this.tileRenderer &&
      ((this._uploadsLocked = !0), this.tileRenderer.lockGPUUploads());
  }
  _unlockGPUUploads() {
    this.tileRenderer &&
      ((this._uploadsLocked = !1), this.tileRenderer.unlockGPUUploads());
  }
  _forceAttributeTextureUpload() {
    this.tileRenderer && this.tileRenderer.forceAttributeTextureUpload();
  }
  _createSchemaConfig() {
    const e = this.layer;
    return {
      renderer: "renderer" in e ? e.renderer : null,
      spatialReference: e.spatialReference,
      timeExtent: "timeExtent" in e ? e.timeExtent : null,
      definitionExpression: e.definitionExpression,
      featureReduction: this._effectiveFeatureReduction,
      fields: e.fields,
      geometryType: e.geometryType,
      historicMoment: "historicMoment" in e ? e.historicMoment : null,
      labelsVisible: "labelsVisible" in e && e.labelsVisible,
      labelingInfo: "labelingInfo" in e ? e.labelingInfo : null,
      availableFields: this.availableFields,
      featureEffect: this.featureEffect,
      filter: this.filter,
      gdbVersion: "gdbVersion" in e ? e.gdbVersion : null,
      pixelBuffer: 0,
      orderBy: "orderBy" in e && e.orderBy ? e.orderBy : null,
      customParameters: {
        ...("customParameters" in e ? e.customParameters : void 0),
        token: "apiKey" in e ? e.apiKey ?? void 0 : void 0,
      },
      subtypeCode: "subtypeCode" in e ? e.subtypeCode : void 0,
      subtypeField: "subtypeField" in e ? e.subtypeField : void 0,
    };
  }
  _addHighlight(e) {
    for (const t of e)
      if (this._highlightIds.has(t)) {
        const r = this._highlightIds.get(t);
        this._highlightIds.set(t, r + 1);
      } else this._highlightIds.set(t, 1);
    this._updateHighlight().catch((t) => {
      C(t) || q.getLogger(this.declaredClass).error(t);
    });
  }
  _removeHighlight(e) {
    for (const t of e)
      if (this._highlightIds.has(t)) {
        const r = this._highlightIds.get(t) - 1;
        r === 0 ? this._highlightIds.delete(t) : this._highlightIds.set(t, r);
      }
    this._updateHighlight().catch((t) => {
      C(t) || q.getLogger(this.declaredClass).error(t);
    });
  }
  _setLayersForFeature(e) {
    const t = this.layer;
    (e.layer = t), (e.sourceLayer = t);
  }
  _createGraphicHit(e, t) {
    return (
      this._setLayersForFeature(t),
      p(t.geometry) &&
        (t.geometry.spatialReference = this.view.spatialReference),
      { type: "graphic", graphic: t, layer: this.layer, mapPoint: e }
    );
  }
};
u([c()], _.prototype, "_serviceOptions", void 0),
  u([c()], _.prototype, "_proxy", void 0),
  u([c()], _.prototype, "_pipelineIsUpdating", void 0),
  u([c()], _.prototype, "_effectiveRenderer", void 0),
  u([c()], _.prototype, "_effectiveFeatureReduction", null),
  u([c()], _.prototype, "_aggregateValueRanges", void 0),
  u([c()], _.prototype, "_commandsQueue", void 0),
  u([c()], _.prototype, "featureEffectView", void 0),
  u([c()], _.prototype, "labelsVisible", null),
  u([c({ readOnly: !0 })], _.prototype, "queryMode", null),
  u([c()], _.prototype, "renderingConfigHash", null),
  u([c()], _.prototype, "tileRenderer", void 0),
  u([c()], _.prototype, "updating", void 0),
  (_ = u([b("esri.views.2d.layers.FeatureLayerView2D")], _));
const At = _;
export { At as default };
