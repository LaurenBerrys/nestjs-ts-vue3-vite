import {
  cF as tt,
  fM as ct,
  r as f,
  t as m,
  g3 as ht,
  dt,
  f as E,
  bO as j,
  cd as q,
  ae as h,
  af as d,
  ag as P,
  ap as et,
  T as st,
  J as z,
  g4 as B,
  Z as M,
  bA as U,
  as as pt,
  g5 as ft,
  an as it,
  g6 as _t,
  g7 as gt,
  av as x,
  ar as yt,
  a2 as mt,
  Q as Et,
  eq as Ct,
  q as Ft,
  g8 as Tt,
  g9 as vt,
  ga as St,
  gb as bt,
  cO as It,
  S as wt,
  eA as Ot,
  eO as xt,
  gc as At,
  aD as R,
  gd as Rt,
  ge as V,
  gf as rt,
  a3 as Pt,
  b0 as Dt,
  gg as k,
  C as Ht,
  gh as $,
  aH as J,
  gi as zt,
  G as Q,
  dS as Nt,
} from "./index.8fd7165c.js";
import { g as Mt } from "./FeatureStore.d8aec338.js";
import { e as Ut } from "./QueryEngine.191035fe.js";
import { o as jt } from "./BoundsStore.9c066771.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./centroid.e6a939c1.js";
import "./utils.e3aed7db.js";
import "./projectionSupport.4aeb802f.js";
import "./json.495fc412.js";
import "./QueryEngineResult.c4edbbc1.js";
import "./quantizationUtils.1e9e702d.js";
import "./WhereClause.ae196341.js";
import "./executionError.fb3f283a.js";
import "./utils.7e94e38c.js";
import "./generateRendererUtils.855c90be.js";
import "./QueryEngineCapabilities.42e44ded.js";
import "./timeSupport.04391410.js";
import "./PooledRBush.1b7c69fc.js";
function L(t = !1, e) {
  if (t) {
    const {
      elevationInfo: s,
      alignPointsInFeatures: i,
      spatialReference: r,
    } = e;
    return new Bt(s, i, r);
  }
  return new qt();
}
let qt = class {
  async alignCandidates(t, e) {
    return t;
  }
  notifyElevationSourceChange() {}
};
class Bt {
  constructor(e, s, i) {
    (this._elevationInfo = e),
      (this._alignPointsInFeatures = s),
      (this.spatialReference = i),
      (this._alignmentsCache = new tt(1024)),
      (this._cacheVersion = 0),
      (this._metersPerVerticalUnit = ct(i));
  }
  async alignCandidates(e, s) {
    const i = this._elevationInfo;
    return f(i) && i.mode === "absolute-height" && !i.featureExpressionInfo
      ? (this._alignAbsoluteElevationCandidates(e, i), e)
      : this._alignComputedElevationCandidates(e, s);
  }
  notifyElevationSourceChange() {
    this._alignmentsCache.clear(), this._cacheVersion++;
  }
  _alignAbsoluteElevationCandidates(e, s) {
    const { offset: i, unit: r } = s;
    if (m(i)) return;
    const n = i * (ht(r ?? "meters") / this._metersPerVerticalUnit);
    for (const a of e)
      switch (a.type) {
        case "edge":
          (a.start.z += n), (a.end.z += n);
          continue;
        case "vertex":
          a.target.z += n;
          continue;
      }
  }
  async _alignComputedElevationCandidates(e, s) {
    const i = new Map();
    for (const p of e) dt(i, p.objectId, kt).push(p);
    const [r, n, a] = this._prepareQuery(i),
      o = await this._alignPointsInFeatures(r, s);
    if ((E(s), a !== this._cacheVersion))
      return this._alignComputedElevationCandidates(e, s);
    this._applyCacheAndResponse(r, o, n);
    const { drapedObjectIds: l, failedObjectIds: c } = o,
      _ = [];
    for (const p of e) {
      const { objectId: C } = p;
      l.has(C) && p.type === "edge" && (p.draped = !0), c.has(C) || _.push(p);
    }
    return _;
  }
  _prepareQuery(e) {
    const s = [],
      i = [];
    for (const [r, n] of e) {
      const a = [];
      for (const o of n)
        this._addToQueriesOrCachedResult(r, o.target, a, i),
          o.type === "edge" &&
            (this._addToQueriesOrCachedResult(r, o.start, a, i),
            this._addToQueriesOrCachedResult(r, o.end, a, i));
      a.length !== 0 && s.push({ objectId: r, points: a });
    }
    return [s, i, this._cacheVersion];
  }
  _addToQueriesOrCachedResult(e, s, i, r) {
    const n = G(e, s),
      a = this._alignmentsCache.get(n);
    f(a) ? r.push(new Vt(s, a)) : i.push(s);
  }
  _applyCacheAndResponse(
    e,
    { elevations: s, drapedObjectIds: i, failedObjectIds: r },
    n
  ) {
    for (const l of n) l.apply();
    let a = 0;
    const o = this._alignmentsCache;
    for (const { objectId: l, points: c } of e) {
      if (r.has(l)) {
        a += c.length;
        continue;
      }
      const _ = !i.has(l);
      for (const p of c) {
        const C = G(l, p),
          y = s[a++];
        (p.z = y), _ && o.put(C, y, 1);
      }
    }
  }
}
class Vt {
  constructor(e, s) {
    (this.point = e), (this.z = s);
  }
  apply() {
    this.point.z = this.z;
  }
}
function G(t, { x: e, y: s, z: i }) {
  return `${t}-${e}-${s}-${i ?? 0}}`;
}
function kt() {
  return [];
}
let $t = class {
    filter(t, e) {
      return e;
    }
    notifyElevationSourceChange() {}
  },
  Jt = class {
    filter(t, e) {
      const { point: s, distance: i } = t,
        { z: r } = s;
      if (r == null || e.length === 0) return e;
      const n = (function (o) {
          return typeof o == "number" ? { x: o, y: o, z: o } : o;
        })(i),
        a = this._updateCandidatesTo3D(e, s, n).filter(Qt);
      return a.sort(Zt), a;
    }
    _updateCandidatesTo3D(t, e, s) {
      for (const i of t)
        switch (i.type) {
          case "edge":
            Lt(i, e, s);
            continue;
          case "vertex":
            Gt(i, e, s);
            continue;
        }
      return t;
    }
  };
function Qt(t) {
  return t.distance <= 1;
}
function Z(t = !1) {
  return t ? new Jt() : new $t();
}
function Lt(t, e, { x: s, y: i, z: r }) {
  const { start: n, end: a, target: o } = t;
  t.draped ||
    (function (p, C, y, F) {
      const I = F.x - y.x,
        w = F.y - y.y,
        O = F.z - y.z,
        nt = I * I + w * w + O * O,
        at = (C.x - y.x) * I + (C.y - y.y) * w + O * (C.z - y.z),
        D = Math.min(1, Math.max(0, at / nt)),
        ot = y.x + I * D,
        lt = y.y + w * D,
        ut = y.z + O * D;
      (p.x = ot), (p.y = lt), (p.z = ut);
    })(o, e, n, a);
  const l = (e.x - o.x) / s,
    c = (e.y - o.y) / i,
    _ = (e.z - o.z) / r;
  t.distance = Math.sqrt(l * l + c * c + _ * _);
}
function Gt(t, e, { x: s, y: i, z: r }) {
  const { target: n } = t,
    a = (e.x - n.x) / s,
    o = (e.y - n.y) / i,
    l = (e.z - n.z) / r,
    c = Math.sqrt(a * a + o * o + l * l);
  t.distance = c;
}
function Zt(t, e) {
  return t.distance - e.distance;
}
function W(t = !1, e) {
  return t ? new Xt(e) : new Wt();
}
class Wt {
  async fetch() {
    return [];
  }
  notifySymbologyChange() {}
}
class Xt {
  constructor(e) {
    (this._getSymbologyCandidates = e),
      (this._candidatesCache = new tt(1024)),
      (this._cacheVersion = 0);
  }
  async fetch(e, s) {
    if (e.length === 0) return [];
    const i = [],
      r = [],
      n = this._candidatesCache;
    for (const p of e) {
      const C = X(p),
        y = n.get(C);
      if (y) for (const F of y) r.push(j(F));
      else i.push(p), n.put(C, [], 1);
    }
    if (i.length === 0) return r;
    const a = this._cacheVersion,
      { candidates: o, sourceCandidateIndices: l } =
        await this._getSymbologyCandidates(i, s);
    if ((E(s), a !== this._cacheVersion)) return this.fetch(e, s);
    const c = [],
      { length: _ } = o;
    for (let p = 0; p < _; ++p) {
      const C = o[p],
        y = X(i[l[p]]),
        F = n.get(y);
      F.push(C), n.put(y, F, F.length), c.push(j(C));
    }
    return r.concat(c);
  }
  notifySymbologyChange() {
    this._candidatesCache.clear(), this._cacheVersion++;
  }
}
function X(t) {
  switch (t.type) {
    case "vertex": {
      const { objectId: e, target: s } = t,
        i = `${e}-vertex-${s.x}-${s.y}-${s.z ?? 0}`;
      return q(i).toString();
    }
    case "edge": {
      const { objectId: e, start: s, end: i } = t,
        r = `${e}-edge-${s.x}-${s.y}-${s.z ?? 0}-to-${i.x}-${i.y}-${i.z ?? 0}`;
      return q(r).toString();
    }
    default:
      return "";
  }
}
let A = class extends et {
  constructor() {
    super(...arguments), (this.updating = !1), (this._pending = []);
  }
  push(t, e) {
    this._pending.push({ promise: t, callback: e }),
      this._pending.length === 1 && this._process();
  }
  _process() {
    if (!this._pending.length) return void (this.updating = !1);
    this.updating = !0;
    const t = this._pending[0];
    t.promise
      .then((e) => t.callback(e))
      .catch(() => {})
      .then(() => {
        this._pending.shift(), this._process();
      });
  }
};
h([d()], A.prototype, "updating", void 0),
  (A = h([P("esri.core.AsyncSequence")], A));
class Yt {
  constructor(e, s) {
    (this.data = e),
      (this.resolution = s),
      (this.state = { type: u.CREATED }),
      (this.alive = !0);
  }
  process(e) {
    switch (this.state.type) {
      case u.CREATED:
        return (
          (this.state = this._gotoFetchCount(this.state, e)),
          this.state.task.promise.then(e.resume, e.resume)
        );
      case u.FETCH_COUNT:
        break;
      case u.FETCHED_COUNT:
        return (
          (this.state = this._gotoFetchFeatures(this.state, e)),
          this.state.task.promise.then(e.resume, e.resume)
        );
      case u.FETCH_FEATURES:
        break;
      case u.FETCHED_FEATURES:
        this.state = this._goToDone(this.state, e);
      case u.DONE:
    }
    return null;
  }
  get debugInfo() {
    return {
      data: this.data,
      featureCount: this._featureCount,
      state: this._stateToString,
    };
  }
  get _featureCount() {
    switch (this.state.type) {
      case u.CREATED:
      case u.FETCH_COUNT:
        return 0;
      case u.FETCHED_COUNT:
        return this.state.featureCount;
      case u.FETCH_FEATURES:
        return this.state.previous.featureCount;
      case u.FETCHED_FEATURES:
        return this.state.features.length;
      case u.DONE:
        return this.state.previous.features.length;
    }
  }
  get _stateToString() {
    switch (this.state.type) {
      case u.CREATED:
        return "created";
      case u.FETCH_COUNT:
        return "fetch-count";
      case u.FETCHED_COUNT:
        return "fetched-count";
      case u.FETCH_FEATURES:
        return "fetch-features";
      case u.FETCHED_FEATURES:
        return "fetched-features";
      case u.DONE:
        return "done";
    }
  }
  _gotoFetchCount(e, s) {
    return {
      type: u.FETCH_COUNT,
      previous: e,
      task: z(async (i) => {
        const r = await B(s.fetchCount(this, i));
        this.state.type === u.FETCH_COUNT &&
          (this.state = this._gotoFetchedCount(
            this.state,
            r.ok ? r.value : 1 / 0
          ));
      }),
    };
  }
  _gotoFetchedCount(e, s) {
    return { type: u.FETCHED_COUNT, featureCount: s, previous: e };
  }
  _gotoFetchFeatures(e, s) {
    return {
      type: u.FETCH_FEATURES,
      previous: e,
      task: z(async (i) => {
        const r = await B(s.fetchFeatures(this, e.featureCount, i));
        this.state.type === u.FETCH_FEATURES &&
          (this.state = this._gotoFetchedFeatures(
            this.state,
            r.ok ? r.value : []
          ));
      }),
    };
  }
  _gotoFetchedFeatures(e, s) {
    return { type: u.FETCHED_FEATURES, previous: e, features: s };
  }
  _goToDone(e, s) {
    return s.finish(this, e.features), { type: u.DONE, previous: e };
  }
  reset() {
    const e = this.state;
    switch (((this.state = { type: u.CREATED }), e.type)) {
      case u.CREATED:
      case u.FETCHED_COUNT:
      case u.FETCHED_FEATURES:
      case u.DONE:
        break;
      case u.FETCH_COUNT:
      case u.FETCH_FEATURES:
        e.task.abort();
    }
  }
  intersects(e) {
    return !(!m(e) && this.data.extent) || (M(e, Y), U(this.data.extent, Y));
  }
}
var u;
(function (t) {
  (t[(t.CREATED = 0)] = "CREATED"),
    (t[(t.FETCH_COUNT = 1)] = "FETCH_COUNT"),
    (t[(t.FETCHED_COUNT = 2)] = "FETCHED_COUNT"),
    (t[(t.FETCH_FEATURES = 3)] = "FETCH_FEATURES"),
    (t[(t.FETCHED_FEATURES = 4)] = "FETCHED_FEATURES"),
    (t[(t.DONE = 5)] = "DONE");
})(u || (u = {}));
const Y = st();
let g = class extends pt {
  get _minimumVerticesPerFeature() {
    var t;
    switch ((t = this.store) == null ? void 0 : t.featureStore.geometryType) {
      case "esriGeometryPoint":
      case "esriGeometryMultipoint":
        return 1;
      case "esriGeometryPolygon":
        return 4;
      case "esriGeometryPolyline":
        return 2;
    }
  }
  set filter(t) {
    const e = this._get("filter"),
      s = this._filterProperties(t);
    JSON.stringify(e) !== JSON.stringify(s) && this._set("filter", s);
  }
  set customParameters(t) {
    const e = this._get("customParameters");
    JSON.stringify(e) !== JSON.stringify(t) && this._set("customParameters", t);
  }
  get _configuration() {
    return {
      filter: this.filter,
      customParameters: this.customParameters,
      tileInfo: this.tileInfo,
      tileSize: this.tileSize,
    };
  }
  set tileInfo(t) {
    const e = this._get("tileInfo");
    e !== t &&
      ((f(t) && f(e) && JSON.stringify(t) === JSON.stringify(e)) ||
        (this._set("tileInfo", t), (this.store.tileInfo = t)));
  }
  set tileSize(t) {
    this._get("tileSize") !== t && this._set("tileSize", t);
  }
  get updating() {
    return this.updatingExcludingEdits || this._pendingEdits.updating;
  }
  get updatingExcludingEdits() {
    return this.updatingHandles.updating;
  }
  get hasZ() {
    return this.store.featureStore.hasZ;
  }
  constructor(t) {
    super(t),
      (this.tilesOfInterest = []),
      (this.availability = 0),
      (this._pendingTiles = new Map()),
      (this._pendingEdits = new A()),
      (this._pendingEditsAbortController = new AbortController());
  }
  initialize() {
    this._initializeFetchExtent(),
      this.updatingHandles.add(
        () => this._configuration,
        () => this.refresh()
      ),
      this.updatingHandles.add(
        () => this.tilesOfInterest,
        (t, e) => {
          ft(t, e, ({ id: s }, { id: i }) => s === i) || this._process();
        },
        it
      );
  }
  destroy() {
    this._pendingTiles.forEach((t) => this._deletePendingTile(t)),
      this._pendingTiles.clear(),
      this.store.destroy(),
      (this.tilesOfInterest.length = 0),
      this._pendingEditsAbortController.abort(),
      (this._pendingEditsAbortController = null);
  }
  refresh() {
    this.store.refresh(),
      this._pendingTiles.forEach((t) => this._deletePendingTile(t)),
      this._process();
  }
  applyEdits(t) {
    this._pendingEdits.push(t, async (e) => {
      if (
        e.addedFeatures.length === 0 &&
        e.updatedFeatures.length === 0 &&
        e.deletedFeatures.length === 0
      )
        return;
      for (const [, i] of this._pendingTiles) i.reset();
      const s = {
        ...e,
        deletedFeatures: e.deletedFeatures.map(({ objectId: i, globalId: r }) =>
          i && i !== -1 ? i : this._lookupObjectIdByGlobalId(r)
        ),
      };
      await this.updatingHandles.addPromise(
        this.store.processEdits(
          s,
          (i, r) => this._queryFeaturesById(i, r),
          this._pendingEditsAbortController.signal
        )
      ),
        this._processPendingTiles();
    });
  }
  _initializeFetchExtent() {
    if (!this.capabilities.query.supportsExtent || !_t(this.url)) return;
    const t = z(async (e) => {
      var s;
      try {
        const i = await gt(
          this.url,
          new x({
            where: "1=1",
            outSpatialReference: this.spatialReference,
            cacheHint: !!this.capabilities.query.supportsCacheHint || void 0,
          }),
          { query: this._configuration.customParameters, signal: e }
        );
        this.store.extent = yt.fromJSON(
          (s = i.data) == null ? void 0 : s.extent
        );
      } catch (i) {
        mt(i),
          Et.getLogger(this.declaredClass).warn(
            "Failed to fetch data extent",
            i
          );
      }
    });
    this.updatingHandles.addPromise(t.promise.then(() => this._process())),
      this.handles.add(Ct(() => t.abort()));
  }
  get debugInfo() {
    return {
      numberOfFeatures: this.store.featureStore.numFeatures,
      tilesOfInterest: this.tilesOfInterest,
      pendingTiles: Array.from(this._pendingTiles.values()).map(
        (t) => t.debugInfo
      ),
      storedTiles: this.store.debugInfo,
    };
  }
  _process() {
    this._markTilesNotAlive(),
      this._createPendingTiles(),
      this._deletePendingTiles(),
      this._processPendingTiles();
  }
  _markTilesNotAlive() {
    for (const [, t] of this._pendingTiles) t.alive = !1;
  }
  _createPendingTiles() {
    const t = this._collectMissingTilesInfo();
    if ((this._setAvailability(m(t) ? 1 : t.coveredArea / t.fullArea), !m(t)))
      for (const { data: e, resolution: s } of t.missingTiles) {
        const i = this._pendingTiles.get(e.id);
        i
          ? ((i.resolution = s), (i.alive = !0))
          : this._createPendingTile(e, s);
      }
  }
  _collectMissingTilesInfo() {
    let t = null;
    for (let e = this.tilesOfInterest.length - 1; e >= 0; e--) {
      const s = this.tilesOfInterest[e],
        i = this.store.process(s, (r, n) => this._verifyTileComplexity(r, n));
      m(t) ? (t = i) : t.prepend(i);
    }
    return t;
  }
  _deletePendingTiles() {
    for (const [, t] of this._pendingTiles)
      t.alive || this._deletePendingTile(t);
  }
  _processPendingTiles() {
    const t = {
      fetchCount: (e, s) => this._fetchCount(e, s),
      fetchFeatures: (e, s, i) => this._fetchFeatures(e, s, i),
      finish: (e, s) => this._finishPendingTile(e, s),
      resume: () => this._processPendingTiles(),
    };
    if (this._ensureFetchAllCounts(t))
      for (const [, e] of this._pendingTiles)
        this._verifyTileComplexity(
          this.store.getFeatureCount(e.data),
          e.resolution
        ) && this.updatingHandles.addPromise(e.process(t));
  }
  _verifyTileComplexity(t, e) {
    return this._verifyVertexComplexity(t) && this._verifyFeatureDensity(t, e);
  }
  _verifyVertexComplexity(t) {
    return t * this._minimumVerticesPerFeature < te;
  }
  _verifyFeatureDensity(t, e) {
    if (m(this.tileInfo)) return !1;
    const s = this.tileSize * e;
    return t * (ee / (s * s)) < se;
  }
  _ensureFetchAllCounts(t) {
    let e = !0;
    for (const [, s] of this._pendingTiles)
      s.state.type < u.FETCHED_COUNT &&
        this.updatingHandles.addPromise(s.process(t)),
        s.state.type <= u.FETCH_COUNT && (e = !1);
    return e;
  }
  _finishPendingTile(t, e) {
    this.store.add(t.data, e),
      this._deletePendingTile(t),
      this._updateAvailability();
  }
  _updateAvailability() {
    const t = this._collectMissingTilesInfo();
    this._setAvailability(m(t) ? 1 : t.coveredArea / t.fullArea);
  }
  _setAvailability(t) {
    this._set("availability", t);
  }
  _createPendingTile(t, e) {
    const s = new Yt(t, e);
    return this._pendingTiles.set(t.id, s), s;
  }
  _deletePendingTile(t) {
    t.reset(), this._pendingTiles.delete(t.data.id);
  }
  async _fetchCount(t, e) {
    return this.store.fetchCount(t.data, this.url, this._createCountQuery(t), {
      query: this.customParameters,
      timeout: H,
      signal: e,
    });
  }
  async _fetchFeatures(t, e, s) {
    let i = 0;
    const r = [];
    let n = 0,
      a = e;
    for (;;) {
      const o = this._createFeaturesQuery(t),
        l = this._setPagingParameters(o, i, a),
        { features: c, exceededTransferLimit: _ } = await this._queryFeatures(
          o,
          s
        );
      l && (i += Ft(o.num)), (n += c.length);
      for (const p of c) r.push(p);
      if (((a = e - n), !l || !_ || a <= 0)) return r;
    }
  }
  _filterProperties(t) {
    return m(t)
      ? { where: "1=1", gdbVersion: void 0, timeExtent: void 0 }
      : {
          where: t.where || "1=1",
          timeExtent: t.timeExtent,
          gdbVersion: t.gdbVersion,
        };
  }
  _lookupObjectIdByGlobalId(t) {
    const e = this.globalIdField,
      s = this.objectIdField;
    if (m(e)) throw new Error("Expected globalIdField to be defined");
    let i = null;
    if (
      (this.store.featureStore.forEach((r) => {
        t === r.attributes[e] && (i = r.objectId ?? r.attributes[s]);
      }),
      m(i))
    )
      throw new Error(`Expected to find a feature with globalId ${t}`);
    return i;
  }
  _queryFeaturesById(t, e) {
    const s = this._createFeaturesQuery();
    return (s.objectIds = t), this._queryFeatures(s, e);
  }
  _queryFeatures(t, e) {
    return this.capabilities.query.supportsFormatPBF
      ? this._queryFeaturesPBF(t, e)
      : this._queryFeaturesJSON(t, e);
  }
  async _queryFeaturesPBF(t, e) {
    const { sourceSpatialReference: s } = this,
      { data: i } = await Tt(
        this.url,
        t,
        new vt({ sourceSpatialReference: s }),
        {
          query: this._configuration.customParameters,
          timeout: H,
          signal: e,
        }
      );
    return St(i);
  }
  async _queryFeaturesJSON(t, e) {
    const { sourceSpatialReference: s } = this,
      { data: i } = await bt(this.url, t, s, {
        query: this._configuration.customParameters,
        timeout: H,
        signal: e,
      });
    return It(i, this.objectIdField);
  }
  _createCountQuery(t) {
    const e = this._createBaseQuery(t);
    return this.capabilities.query.supportsCacheHint && (e.cacheHint = !0), e;
  }
  _createFeaturesQuery(t = null) {
    const e = this._createBaseQuery(t);
    return (
      (e.outFields = this.globalIdField
        ? [this.globalIdField, this.objectIdField]
        : [this.objectIdField]),
      (e.returnGeometry = !0),
      f(t) &&
        (this.capabilities.query.supportsResultType
          ? (e.resultType = "tile")
          : this.capabilities.query.supportsCacheHint && (e.cacheHint = !0)),
      e
    );
  }
  _createBaseQuery(t) {
    const e = new x({
        returnZ: this.hasZ,
        returnM: !1,
        geometry:
          f(this.tileInfo) && f(t)
            ? wt(t.data.extent, this.tileInfo.spatialReference)
            : void 0,
      }),
      s = this._configuration.filter;
    return (
      f(s) &&
        ((e.where = s.where),
        (e.gdbVersion = s.gdbVersion),
        (e.timeExtent = s.timeExtent)),
      (e.outSpatialReference = this.spatialReference),
      e
    );
  }
  _setPagingParameters(t, e, s) {
    if (!this.capabilities.query.supportsPagination) return !1;
    const {
        supportsMaxRecordCountFactor: i,
        supportsCacheHint: r,
        tileMaxRecordCount: n,
        maxRecordCount: a,
        supportsResultType: o,
      } = this.capabilities.query,
      l = i ? x.MAX_MAX_RECORD_COUNT_FACTOR : 1,
      c = l * ((o || r) && n ? n : a || Kt);
    return (
      (t.start = e),
      i
        ? ((t.maxRecordCountFactor = Math.min(l, Math.ceil(s / c))),
          (t.num = Math.min(s, t.maxRecordCountFactor * c)))
        : (t.num = Math.min(s, c)),
      !0
    );
  }
};
h([d({ constructOnly: !0 })], g.prototype, "url", void 0),
  h([d({ constructOnly: !0 })], g.prototype, "objectIdField", void 0),
  h([d({ constructOnly: !0 })], g.prototype, "globalIdField", void 0),
  h([d({ constructOnly: !0 })], g.prototype, "capabilities", void 0),
  h([d({ constructOnly: !0 })], g.prototype, "sourceSpatialReference", void 0),
  h([d({ constructOnly: !0 })], g.prototype, "spatialReference", void 0),
  h([d({ constructOnly: !0 })], g.prototype, "store", void 0),
  h([d({ readOnly: !0 })], g.prototype, "_minimumVerticesPerFeature", null),
  h([d()], g.prototype, "filter", null),
  h([d()], g.prototype, "customParameters", null),
  h([d({ readOnly: !0 })], g.prototype, "_configuration", null),
  h([d()], g.prototype, "tileInfo", null),
  h([d()], g.prototype, "tileSize", null),
  h([d()], g.prototype, "tilesOfInterest", void 0),
  h([d({ readOnly: !0 })], g.prototype, "updating", null),
  h([d({ readOnly: !0 })], g.prototype, "updatingExcludingEdits", null),
  h([d({ readOnly: !0 })], g.prototype, "availability", void 0),
  h([d()], g.prototype, "hasZ", null),
  (g = h(
    [
      P(
        "esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher"
      ),
    ],
    g
  ));
const Kt = 2e3,
  H = 6e5,
  te = 1e6,
  ee = 25,
  se = 1;
class ie {
  constructor() {
    (this._store = new Map()), (this._byteSize = 0);
  }
  set(e, s) {
    this.delete(e), this._store.set(e, s), (this._byteSize += s.byteSize);
  }
  delete(e) {
    const s = this._store.get(e);
    return (
      !!this._store.delete(e) &&
      (s != null && (this._byteSize -= s.byteSize), !0)
    );
  }
  get(e) {
    return this._used(e), this._store.get(e);
  }
  has(e) {
    return this._used(e), this._store.has(e);
  }
  clear() {
    this._store.clear();
  }
  applyByteSizeLimit(e, s) {
    for (const [i, r] of this._store) {
      if (this._byteSize <= e) break;
      this.delete(i), s(r);
    }
  }
  values() {
    return this._store.values();
  }
  [Symbol.iterator]() {
    return this._store[Symbol.iterator]();
  }
  _used(e) {
    const s = this._store.get(e);
    s && (this._store.delete(e), this._store.set(e, s));
  }
}
let S = class extends et {
  constructor(t) {
    super(t),
      (this.tileInfo = null),
      (this.extent = null),
      (this.maximumByteSize = 10 * Ot.MEGABYTES),
      (this._tileBounds = new jt()),
      (this._tiles = new ie()),
      (this._refCounts = new Map()),
      (this._tileFeatureCounts = new Map()),
      (this._tmpBoundingRect = st());
  }
  add(t, e) {
    const s = [];
    for (const i of e)
      this._referenceFeature(i.objectId) === v.ADDED && s.push(i);
    this._addTileStorage(
      t,
      new Set(e.map((i) => i.objectId)),
      (function (i) {
        return i.reduce(
          (r, n) =>
            r +
            (function (a) {
              return (
                32 +
                (function (o) {
                  if (m(o)) return 0;
                  const l = V(o.lengths, 4);
                  return 32 + V(o.coords, 8) + l;
                })(a.geometry) +
                Rt(a.attributes)
              );
            })(n),
          0
        );
      })(e)
    ),
      this.featureStore.addMany(s),
      this._tiles.applyByteSizeLimit(this.maximumByteSize, (i) =>
        this._removeTileStorage(i)
      );
  }
  destroy() {
    this.clear(), this._tileFeatureCounts.clear();
  }
  clear() {
    this.featureStore.clear(),
      this._tileBounds.clear(),
      this._tiles.clear(),
      this._refCounts.clear();
  }
  refresh() {
    this.clear(), this._tileFeatureCounts.clear();
  }
  processEdits(t, e, s) {
    return (
      this._processEditsDelete(t.deletedFeatures.concat(t.updatedFeatures)),
      this._processEditsRefetch(t.addedFeatures.concat(t.updatedFeatures), e, s)
    );
  }
  _addTileStorage(t, e, s) {
    const i = t.id;
    this._tiles.set(i, new re(t, e, s)),
      this._tileBounds.set(i, t.extent),
      this._tileFeatureCounts.set(i, e.size);
  }
  _remove({ id: t }) {
    const e = this._tiles.get(t);
    e && this._removeTileStorage(e);
  }
  _removeTileStorage(t) {
    const e = [];
    for (const i of t.objectIds)
      this._unreferenceFeature(i) === v.REMOVED && e.push(i);
    this.featureStore.removeManyById(e);
    const s = t.data.id;
    this._tiles.delete(s), this._tileBounds.delete(s);
  }
  _processEditsDelete(t) {
    this.featureStore.removeManyById(t);
    for (const [, e] of this._tiles) {
      for (const s of t) e.objectIds.delete(s);
      this._tileFeatureCounts.set(e.data.id, e.objectIds.size);
    }
    for (const e of t) this._refCounts.delete(e);
  }
  async _processEditsRefetch(t, e, s) {
    const i = (await e(t, s)).features,
      { hasZ: r, hasM: n } = this.featureStore;
    for (const a of i) {
      const o = xt(this._tmpBoundingRect, a.geometry, r, n);
      m(o) ||
        this._tileBounds.forEachInBounds(o, (l) => {
          const c = this._tiles.get(l);
          this.featureStore.add(a);
          const _ = a.objectId;
          c.objectIds.has(_) ||
            (c.objectIds.add(_),
            this._referenceFeature(_),
            this._tileFeatureCounts.set(c.data.id, c.objectIds.size));
        });
    }
  }
  process(t, e = () => !0) {
    if (
      m(this.tileInfo) ||
      !t.extent ||
      (f(this.extent) && !U(M(this.extent, this._tmpBoundingRect), t.extent))
    )
      return new N(t);
    if (this._tiles.has(t.id)) return new N(t);
    const s = this._createTileTree(t, this.tileInfo);
    return (
      this._simplify(s, e, null, 0, 1),
      this._collectMissingTiles(t, s, this.tileInfo)
    );
  }
  get debugInfo() {
    return Array.from(this._tiles.values()).map(({ data: t }) => ({
      data: t,
      featureCount: this._tileFeatureCounts.get(t.id) || 0,
    }));
  }
  getFeatureCount(t) {
    return this._tileFeatureCounts.get(t.id) ?? 0;
  }
  async fetchCount(t, e, s, i) {
    const r = this._tileFeatureCounts.get(t.id);
    if (r != null) return r;
    const n = await At(e, s, i);
    return this._tileFeatureCounts.set(t.id, n.data.count), n.data.count;
  }
  _createTileTree(t, e) {
    const s = new K(t.level, t.row, t.col);
    return (
      e.updateTileInfo(s, R.ExtrapolateOptions.POWER_OF_TWO),
      this._tileBounds.forEachInBounds(t.extent, (i) => {
        var n;
        const r = (n = this._tiles.get(i)) == null ? void 0 : n.data;
        r &&
          this._tilesAreRelated(t, r) &&
          this._populateChildren(
            s,
            r,
            e,
            this._tileFeatureCounts.get(r.id) || 0
          );
      }),
      s
    );
  }
  _tilesAreRelated(t, e) {
    if (!t || !e) return !1;
    if (t.level === e.level) return t.row === e.row && t.col === e.col;
    const s = t.level < e.level,
      i = s ? t : e,
      r = s ? e : t,
      n = 1 << (r.level - i.level);
    return Math.floor(r.row / n) === i.row && Math.floor(r.col / n) === i.col;
  }
  _populateChildren(t, e, s, i) {
    const r = e.level - t.level - 1;
    if (r < 0) return void (t.isLeaf = !0);
    const n = e.row >> r,
      a = e.col >> r,
      o = t.row << 1,
      l = a - (t.col << 1) + ((n - o) << 1),
      c = t.children[l];
    if (f(c)) this._populateChildren(c, e, s, i);
    else {
      const _ = new K(t.level + 1, n, a);
      s.updateTileInfo(_, R.ExtrapolateOptions.POWER_OF_TWO),
        (t.children[l] = _),
        this._populateChildren(_, e, s, i);
    }
  }
  _simplify(t, e, s, i, r) {
    const n = r * r;
    if (t.isLeaf)
      return e(this.getFeatureCount(t), r)
        ? 0
        : (this._remove(t), f(s) && (s.children[i] = null), n);
    const a = r / 2,
      o = a * a;
    let l = 0;
    for (let c = 0; c < t.children.length; c++) {
      const _ = t.children[c];
      l += f(_) ? this._simplify(_, e, t, c, a) : o;
    }
    return (
      l === 0
        ? this._mergeChildren(t)
        : 1 - l / n < ae &&
          (this._purge(t), f(s) && (s.children[i] = null), (l = n)),
      l
    );
  }
  _mergeChildren(t) {
    const e = new Set();
    let s = 0;
    this._forEachLeaf(t, (i) => {
      const r = this._tiles.get(i.id);
      if (r) {
        s += r.byteSize;
        for (const n of r.objectIds)
          e.has(n) || (e.add(n), this._referenceFeature(n));
        this._remove(i);
      }
    }),
      this._addTileStorage(t, e, s),
      (t.isLeaf = !0),
      (t.children[0] = t.children[1] = t.children[2] = t.children[3] = null),
      this._tileFeatureCounts.set(t.id, e.size);
  }
  _forEachLeaf(t, e) {
    for (const s of t.children)
      m(s) || (s.isLeaf ? e(s) : this._forEachLeaf(s, e));
  }
  _purge(t) {
    if (!m(t))
      if (t.isLeaf) this._remove(t);
      else
        for (let e = 0; e < t.children.length; e++) {
          const s = t.children[e];
          this._purge(s), (t.children[e] = null);
        }
  }
  _collectMissingTiles(t, e, s) {
    const i = new ne(s, t, this.extent);
    return this._collectMissingTilesRecurse(e, i, 1), i.info;
  }
  _collectMissingTilesRecurse(t, e, s) {
    if (t.isLeaf) return;
    if (!t.hasChildren) return void e.addMissing(t.level, t.row, t.col, s);
    const i = s / 2;
    for (let r = 0; r < t.children.length; r++) {
      const n = t.children[r];
      m(n)
        ? e.addMissing(
            t.level + 1,
            (t.row << 1) + ((2 & r) >> 1),
            (t.col << 1) + (1 & r),
            i
          )
        : this._collectMissingTilesRecurse(n, e, i);
    }
  }
  _referenceFeature(t) {
    const e = (this._refCounts.get(t) || 0) + 1;
    return this._refCounts.set(t, e), e === 1 ? v.ADDED : v.UNCHANGED;
  }
  _unreferenceFeature(t) {
    const e = (this._refCounts.get(t) || 0) - 1;
    return e === 0
      ? (this._refCounts.delete(t), v.REMOVED)
      : (e > 0 && this._refCounts.set(t, e), v.UNCHANGED);
  }
  get test() {
    return {
      tiles: Array.from(this._tiles.values()).map(
        (t) => `${t.data.id}:[${Array.from(t.objectIds)}]`
      ),
      featureReferences: Array.from(this._refCounts.keys()).map(
        (t) => `${t}:${this._refCounts.get(t)}`
      ),
    };
  }
};
h([d({ constructOnly: !0 })], S.prototype, "featureStore", void 0),
  h([d()], S.prototype, "tileInfo", void 0),
  h([d()], S.prototype, "extent", void 0),
  h([d()], S.prototype, "maximumByteSize", void 0),
  (S = h(
    [
      P(
        "esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore"
      ),
    ],
    S
  ));
class re {
  constructor(e, s, i) {
    (this.data = e), (this.objectIds = s), (this.byteSize = i);
  }
}
class K {
  constructor(e, s, i) {
    (this.level = e),
      (this.row = s),
      (this.col = i),
      (this.isLeaf = !1),
      (this.extent = null),
      (this.children = [null, null, null, null]);
  }
  get hasChildren() {
    return (
      !this.isLeaf &&
      (f(this.children[0]) ||
        f(this.children[1]) ||
        f(this.children[2]) ||
        f(this.children[3]))
    );
  }
}
class N {
  constructor(e, s = []) {
    (this.missingTiles = s),
      (this.fullArea = 0),
      (this.coveredArea = 0),
      (this.fullArea = rt(e.extent)),
      (this.coveredArea = this.fullArea);
  }
  prepend(e) {
    (this.missingTiles = e.missingTiles.concat(this.missingTiles)),
      (this.coveredArea += e.coveredArea),
      (this.fullArea += e.fullArea);
  }
}
let ne = class {
  constructor(t, e, s) {
    (this._tileInfo = t),
      (this._extent = null),
      (this.info = new N(e)),
      f(s) && (this._extent = M(s));
  }
  addMissing(t, e, s, i) {
    const r = new Pt(null, t, e, s);
    this._tileInfo.updateTileInfo(r, R.ExtrapolateOptions.POWER_OF_TWO),
      m(r.extent) ||
        (f(this._extent) && !U(this._extent, r.extent)) ||
        (this.info.missingTiles.push({ data: r, resolution: i }),
        (this.info.coveredArea -= rt(r.extent)));
  }
};
const ae = 0.18751;
var v;
(function (t) {
  (t[(t.ADDED = 0)] = "ADDED"),
    (t[(t.REMOVED = 1)] = "REMOVED"),
    (t[(t.UNCHANGED = 2)] = "UNCHANGED");
})(v || (v = {}));
let b = class extends Dt.EventedAccessor {
  constructor() {
    super(...arguments),
      (this._isInitializing = !0),
      (this.remoteClient = null),
      (this._whenSetup = k()),
      (this._elevationAligner = L()),
      (this._elevationFilter = Z()),
      (this._symbologyCandidatesFetcher = W()),
      (this._handles = new Ht()),
      (this._updatingHandles = new $()),
      (this._editsUpdatingHandles = new $()),
      (this._pendingApplyEdits = new Map()),
      (this._alignPointsInFeatures = async (t, e) => {
        const s = { points: t },
          i = await this.remoteClient.invoke("alignElevation", s, {
            signal: e,
          });
        return E(e), i;
      }),
      (this._getSymbologyCandidates = async (t, e) => {
        const s = {
            candidates: t,
            spatialReference: this._spatialReference.toJSON(),
          },
          i = await this.remoteClient.invoke("getSymbologyCandidates", s, {
            signal: e,
          });
        return E(e), i;
      });
  }
  get updating() {
    return (
      this.updatingExcludingEdits ||
      this._editsUpdatingHandles.updating ||
      this._featureFetcher.updating
    );
  }
  get updatingExcludingEdits() {
    return (
      this._featureFetcher.updatingExcludingEdits ||
      this._isInitializing ||
      this._updatingHandles.updating
    );
  }
  destroy() {
    var t, e, s, i;
    (t = this._featureFetcher) == null || t.destroy(),
      (e = this._queryEngine) == null || e.destroy(),
      (s = this._featureStore) == null || s.clear(),
      (i = this._handles) == null || i.destroy();
  }
  async setup(t) {
    if (this.destroyed) return { result: {} };
    const {
        geometryType: e,
        objectIdField: s,
        timeInfo: i,
        fields: r,
      } = t.serviceInfo,
      { hasZ: n } = t,
      a = J.fromJSON(t.spatialReference);
    (this._spatialReference = a),
      (this._featureStore = new Mt({ ...t.serviceInfo, hasZ: n, hasM: !1 })),
      (this._queryEngine = new Ut({
        spatialReference: t.spatialReference,
        featureStore: this._featureStore,
        geometryType: e,
        fields: r,
        hasZ: n,
        hasM: !1,
        objectIdField: s,
        timeInfo: i,
      })),
      (this._featureFetcher = new g({
        store: new S({ featureStore: this._featureStore }),
        url: t.serviceInfo.url,
        objectIdField: t.serviceInfo.objectIdField,
        globalIdField: t.serviceInfo.globalIdField,
        capabilities: t.serviceInfo.capabilities,
        spatialReference: a,
        sourceSpatialReference: J.fromJSON(t.serviceInfo.spatialReference),
      }));
    const o = t.configuration.viewType === "3d";
    return (
      (this._elevationAligner = L(o, {
        elevationInfo: f(t.elevationInfo) ? zt.fromJSON(t.elevationInfo) : null,
        alignPointsInFeatures: this._alignPointsInFeatures,
        spatialReference: a,
      })),
      (this._elevationFilter = Z(o)),
      this._handles.add([
        Q(
          () => this._featureFetcher.availability,
          (l) => this.emit("notify-availability", { availability: l }),
          it
        ),
        Q(
          () => this.updating,
          () => this._notifyUpdating()
        ),
      ]),
      this._whenSetup.resolve(),
      (this._isInitializing = !1),
      this.configure(t.configuration)
    );
  }
  async configure(t) {
    return (
      await this._updatingHandles.addPromise(this._whenSetup.promise),
      this._updateFeatureFetcherConfiguration(t),
      { result: {} }
    );
  }
  async fetchCandidates(t, e) {
    await this._whenSetup.promise, E(e);
    const s = (function (l) {
        return {
          point: l.point,
          mode: l.mode,
          distance: l.distance,
          types: l.types,
          query: f(l.filter) ? l.filter : { where: "1=1" },
        };
      })(t),
      i = f(e) ? e.signal : null,
      r = await this._queryEngine.executeQueryForSnapping(s, i);
    E(i);
    const n = await this._elevationAligner.alignCandidates(r.candidates, i);
    E(i);
    const a = await this._symbologyCandidatesFetcher.fetch(n, i);
    E(i);
    const o = a.length === 0 ? n : n.concat(a);
    return { result: { candidates: this._elevationFilter.filter(s, o) } };
  }
  async updateTiles(t, e) {
    return (
      await this._updatingHandles.addPromise(this._whenSetup.promise),
      E(e),
      (this._featureFetcher.tileSize = t.tileSize),
      (this._featureFetcher.tilesOfInterest = t.tiles),
      (this._featureFetcher.tileInfo = f(t.tileInfo)
        ? R.fromJSON(t.tileInfo)
        : null),
      T
    );
  }
  async refresh(t, e) {
    return (
      await this._updatingHandles.addPromise(this._whenSetup.promise),
      E(e),
      this._featureFetcher.refresh(),
      T
    );
  }
  async whenNotUpdating(t, e) {
    return (
      await this._updatingHandles.addPromise(this._whenSetup.promise),
      E(e),
      await Nt(() => !this.updatingExcludingEdits, e),
      E(e),
      T
    );
  }
  async getDebugInfo(t, e) {
    return E(e), { result: this._featureFetcher.debugInfo };
  }
  async beginApplyEdits(t, e) {
    this._updatingHandles.addPromise(this._whenSetup.promise), E(e);
    const s = k();
    return (
      this._pendingApplyEdits.set(t.id, s),
      this._featureFetcher.applyEdits(s.promise),
      this._editsUpdatingHandles.addPromise(s.promise),
      T
    );
  }
  async endApplyEdits(t, e) {
    const s = this._pendingApplyEdits.get(t.id);
    return s && s.resolve(t.edits), E(e), T;
  }
  async notifyElevationSourceChange(t, e) {
    return this._elevationAligner.notifyElevationSourceChange(), T;
  }
  async notifySymbologyChange(t, e) {
    return this._symbologyCandidatesFetcher.notifySymbologyChange(), T;
  }
  async setSymbologySnappingSupported(t) {
    return (
      (this._symbologyCandidatesFetcher = W(t, this._getSymbologyCandidates)), T
    );
  }
  _updateFeatureFetcherConfiguration(t) {
    (this._featureFetcher.filter = f(t.filter) ? x.fromJSON(t.filter) : null),
      (this._featureFetcher.customParameters = t.customParameters);
  }
  _notifyUpdating() {
    this.emit("notify-updating", { updating: this.updating });
  }
};
h([d({ readOnly: !0 })], b.prototype, "updating", null),
  h([d({ readOnly: !0 })], b.prototype, "updatingExcludingEdits", null),
  h([d()], b.prototype, "_isInitializing", void 0),
  (b = h(
    [
      P(
        "esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker"
      ),
    ],
    b
  ));
const Re = b,
  T = { result: {} };
export { Re as default };
