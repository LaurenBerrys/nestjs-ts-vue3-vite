import {
  eP as W,
  eQ as $,
  cV as K,
  z as B,
  E as j,
  ac as R,
  dp as z,
  cM as O,
  t as g,
  s as S,
  r as _,
  f as X,
  eR as Y,
  e3 as ee,
  e6 as te,
  $ as q,
  eS as G,
  bO as M,
  cm as Z,
  eT as ie,
  cq as se,
  bH as re,
  c7 as N,
  bq as ae,
  bC as ne,
  T as ue,
  du as ce,
  e4 as oe,
  eU as he,
} from "./index.8fd7165c.js";
import {
  A as f,
  D as le,
  l as de,
  c as E,
  o as fe,
  a as ye,
  f as me,
} from "./QueryEngineResult.c4edbbc1.js";
import { f as C, g as A, M as pe } from "./projectionSupport.4aeb802f.js";
import { t as ge } from "./QueryEngineCapabilities.42e44ded.js";
import {
  t as _e,
  v as b,
  n as xe,
  I as H,
  P as U,
} from "./timeSupport.04391410.js";
import { F as Q, E as D, z as L, v as we } from "./utils.e3aed7db.js";
const F = "feature-store:unsupported-query",
  Se = new W(2e6);
let Fe = 0;
class Te {
  constructor(e) {
    (this._geometryQueryCache = null),
      (this._changeHandle = null),
      (this.capabilities = { query: ge }),
      (this.geometryType = e.geometryType),
      (this.hasM = !!e.hasM),
      (this.hasZ = !!e.hasZ),
      (this.objectIdField = e.objectIdField),
      (this.spatialReference = e.spatialReference),
      (this.definitionExpression = e.definitionExpression),
      (this.featureStore = e.featureStore),
      (this.aggregateAdapter = e.aggregateAdapter),
      (this._changeHandle = this.featureStore.events.on("changed", () =>
        this.clearCache()
      )),
      (this.timeInfo = e.timeInfo),
      e.cacheSpatialQueries &&
        (this._geometryQueryCache = new $(Fe++ + "$$", Se)),
      (this.fieldsIndex = new K(e.fields)),
      e.scheduler &&
        e.priority &&
        (this._frameTask = e.scheduler.registerTask(e.priority));
  }
  destroy() {
    (this._frameTask = B(this._frameTask)),
      this.clearCache(),
      j(this._geometryQueryCache),
      (this._changeHandle = B(this._changeHandle)),
      j(this.fieldsIndex);
  }
  get featureAdapter() {
    return this.featureStore.featureAdapter;
  }
  clearCache() {
    var e;
    (e = this._geometryQueryCache) == null || e.clear(),
      (this._allFeaturesPromise = null),
      (this._timeExtentPromise = null);
  }
  async executeQuery(e, t) {
    try {
      return (await this._executeQuery(e, {}, t)).createQueryResponse();
    } catch (i) {
      if (i !== Q) throw i;
      return new f([], e, this).createQueryResponse();
    }
  }
  async executeQueryForCount(e = {}, t) {
    try {
      return (
        await this._executeQuery(
          e,
          { returnGeometry: !1, returnCentroid: !1, outSR: null },
          t
        )
      ).createQueryResponseForCount();
    } catch (i) {
      if (i !== Q) throw i;
      return 0;
    }
  }
  async executeQueryForExtent(e, t) {
    const i = e.outSR;
    try {
      const s = await this._executeQuery(
          e,
          { returnGeometry: !0, returnCentroid: !1, outSR: null },
          t
        ),
        r = s.size;
      return r
        ? {
            count: r,
            extent: await this._getBounds(
              s.items,
              s.spatialReference,
              i || this.spatialReference
            ),
          }
        : { count: 0, extent: null };
    } catch (s) {
      if (s === Q) return { count: 0, extent: null };
      throw s;
    }
  }
  async executeQueryForIds(e, t) {
    return this.executeQueryForIdSet(e, t).then((i) => Array.from(i));
  }
  async executeQueryForIdSet(e, t) {
    try {
      const i = await this._executeQuery(
          e,
          { returnGeometry: !0, returnCentroid: !1, outSR: null },
          t
        ),
        s = i.items,
        r = new Set();
      return (
        await this._reschedule(() => {
          for (const a of s) r.add(i.featureAdapter.getObjectId(a));
        }, t),
        r
      );
    } catch (i) {
      if (i === Q) return new Set();
      throw i;
    }
  }
  async executeQueryForSnapping(e, t) {
    const { point: i, distance: s, types: r } = e;
    if (r === le.NONE) return { candidates: [] };
    const a = await this._reschedule(() => this._checkQuerySupport(e.query), t),
      n = !R(i.spatialReference, this.spatialReference);
    n && (await C(i.spatialReference, this.spatialReference));
    const u = typeof s == "number" ? s : s.x,
      h = typeof s == "number" ? s : s.y,
      o = {
        xmin: i.x - u,
        xmax: i.x + u,
        ymin: i.y - h,
        ymax: i.y + h,
        spatialReference: i.spatialReference,
      },
      c = n ? A(o, this.spatialReference) : o;
    if (!c) return { candidates: [] };
    const y = (await z(O(i), null, { signal: t }))[0],
      m = (await z(O(c), null, { signal: t }))[0];
    if (g(y) || g(m)) return { candidates: [] };
    const x = new f(
      await this._reschedule(
        () => this._searchFeatures(this._getQueryBBoxes(m.toJSON())),
        t
      ),
      a,
      this
    );
    await this._reschedule(() => this._executeObjectIdsQuery(x), t),
      await this._reschedule(() => this._executeTimeQuery(x), t),
      await this._reschedule(() => this._executeAttributesQuery(x), t);
    const l = y.toJSON(),
      w = n ? A(l, this.spatialReference) : l,
      p = n ? Math.max(c.xmax - c.xmin, c.ymax - c.ymin) / 2 : s;
    return x.createSnappingResponse(
      { ...e, point: w, distance: p },
      i.spatialReference
    );
  }
  async executeQueryForLatestObservations(e, t) {
    if (!this.timeInfo || !this.timeInfo.trackIdField)
      throw new S(F, "Missing timeInfo or timeInfo.trackIdField", {
        query: e,
        timeInfo: this.timeInfo,
      });
    try {
      const i = await this._executeQuery(e, {}, t);
      return (
        await this._reschedule(() => this._filterLatest(i), t),
        i.createQueryResponse()
      );
    } catch (i) {
      if (i !== Q) throw i;
      return new f([], e, this).createQueryResponse();
    }
  }
  async executeQueryForSummaryStatistics(e = {}, t, i) {
    const { field: s, normalizationField: r, valueExpression: a } = t;
    return (
      await this._getQueryEngineResultForStats(
        e,
        { field: s, normalizationField: r, valueExpression: a },
        i
      )
    ).createSummaryStatisticsResponse(t);
  }
  async executeQueryForUniqueValues(e = {}, t, i) {
    const { field: s, field2: r, field3: a, valueExpression: n } = t;
    return (
      await this._getQueryEngineResultForStats(
        e,
        { field: s, field2: r, field3: a, valueExpression: n },
        i
      )
    ).createUniqueValuesResponse(t);
  }
  async executeQueryForClassBreaks(e = {}, t, i) {
    const { field: s, normalizationField: r, valueExpression: a } = t;
    return (
      await this._getQueryEngineResultForStats(
        e,
        { field: s, normalizationField: r, valueExpression: a },
        i
      )
    ).createClassBreaksResponse(t);
  }
  async executeQueryForHistogram(e = {}, t, i) {
    const { field: s, normalizationField: r, valueExpression: a } = t;
    return (
      await this._getQueryEngineResultForStats(
        e,
        { field: s, normalizationField: r, valueExpression: a },
        i
      )
    ).createHistogramResponse(t);
  }
  async fetchRecomputedExtents(e) {
    const [t, i] = await Promise.all([
      "getFullExtent" in this.featureStore && this.featureStore.getFullExtent
        ? Promise.resolve(
            this.featureStore.getFullExtent(this.spatialReference)
          )
        : this._getBounds(
            await this._getAllFeatures(),
            this.spatialReference,
            this.spatialReference
          ),
      _(this._timeExtentPromise)
        ? this._timeExtentPromise
        : (this._timeExtentPromise = _e(this.timeInfo, this.featureStore)),
    ]);
    return X(e), { fullExtent: t, timeExtent: i };
  }
  async _getBounds(e, t, i) {
    const s = Y(ee(), oe);
    await this.featureStore.forEachBounds(e, (n) => te(s, n));
    const r = {
      xmin: s[0],
      ymin: s[1],
      xmax: s[3],
      ymax: s[4],
      spatialReference: D(this.spatialReference),
    };
    this.hasZ &&
      isFinite(s[2]) &&
      isFinite(s[5]) &&
      ((r.zmin = s[2]), (r.zmax = s[5]));
    const a = A(r, t, i);
    if (((a.spatialReference = D(i)), a.xmax - a.xmin == 0)) {
      const n = q(a.spatialReference);
      (a.xmin -= n), (a.xmax += n);
    }
    if (a.ymax - a.ymin == 0) {
      const n = q(a.spatialReference);
      (a.ymin -= n), (a.ymax += n);
    }
    if (this.hasZ && a.zmin != null && a.zmax != null && a.zmax - a.zmin == 0) {
      const n = q(a.spatialReference);
      (a.zmin -= n), (a.zmax += n);
    }
    return a;
  }
  async _schedule(e, t) {
    return _(this._frameTask) ? this._frameTask.schedule(e, t) : e(G);
  }
  async _reschedule(e, t) {
    return _(this._frameTask) ? this._frameTask.reschedule(e, t) : e(G);
  }
  async _getAllFeaturesQueryEngineResult(e) {
    return new f(await this._getAllFeatures(), e, this);
  }
  async _getAllFeatures() {
    if (g(this._allFeaturesPromise)) {
      const i = [];
      this._allFeaturesPromise = (async () => {
        await this.featureStore.forEach((s) => i.push(s));
      })().then(() => i);
    }
    const e = this._allFeaturesPromise,
      t = await e;
    return e === this._allFeaturesPromise ? t.slice() : this._getAllFeatures();
  }
  async _executeQuery(e, t, i) {
    (e = M(e)),
      (e = await this._schedule(
        () => L(e, this.definitionExpression, this.spatialReference),
        i
      )),
      (e = await this._reschedule(() => this._checkQuerySupport(e), i)),
      (e = { ...e, ...t });
    const s = await this._reschedule(
        () => this._executeSceneFilterQuery(e, i),
        i
      ),
      r = await this._reschedule(() => this._executeGeometryQuery(e, s, i), i);
    return (
      await this._reschedule(() => this._executeAggregateIdsQuery(r), i),
      await this._reschedule(() => this._executeObjectIdsQuery(r), i),
      await this._reschedule(() => this._executeTimeQuery(r), i),
      await this._reschedule(() => this._executeAttributesQuery(r), i),
      r
    );
  }
  async _executeSceneFilterQuery(e, t) {
    if (g(e.sceneFilter)) return null;
    const { outSR: i, returnGeometry: s, returnCentroid: r } = e,
      a = this.featureStore.featureSpatialReference,
      n = e.sceneFilter.geometry,
      u = g(a) || R(a, n.spatialReference) ? n : A(n, a);
    if (!u) return null;
    const h = s || r,
      o =
        Z(i) && !R(this.spatialReference, i) && h
          ? async (l) => this._project(l, i)
          : (l) => l,
      c = this.featureAdapter,
      y = await this._reschedule(
        () => this._searchFeatures(this._getQueryBBoxes(u)),
        t
      );
    if (e.sceneFilter.spatialRelationship === "disjoint") {
      if (!y.length) return null;
      const l = new Set();
      for (const I of y) l.add(c.getObjectId(I));
      const w = await this._reschedule(() => this._getAllFeatures(), t),
        p = await this._reschedule(async () => {
          const I = await b(
              "esriSpatialRelDisjoint",
              u,
              this.geometryType,
              this.hasZ,
              this.hasM
            ),
            P = await this._runSpatialFilter(
              w,
              (d) => !l.has(c.getObjectId(d)) || I(c.getGeometry(d)),
              t
            );
          return new f(P, e, this);
        }, t);
      return o(p);
    }
    if (!y.length) return new f([], e, this);
    if (this._canExecuteSinglePass(u, e)) return o(new f(y, e, this));
    const m = await b(
        "esriSpatialRelContains",
        u,
        this.geometryType,
        this.hasZ,
        this.hasM
      ),
      x = await this._runSpatialFilter(y, (l) => m(c.getGeometry(l)), t);
    return o(new f(x, e, this));
  }
  async _executeGeometryQuery(e, t, i) {
    if (_(t) && t.items.length === 0) return t;
    e = _(t) ? t.query : e;
    const {
        geometry: s,
        outSR: r,
        spatialRel: a,
        returnGeometry: n,
        returnCentroid: u,
      } = e,
      h = this.featureStore.featureSpatialReference,
      o = !s || g(h) || R(h, s.spatialReference) ? s : A(s, h),
      c = n || u,
      y = Z(r) && !R(this.spatialReference, r),
      m =
        this._geometryQueryCache && g(t)
          ? JSON.stringify(
              y && c
                ? {
                    originalFilterGeometry: s,
                    spatialRelationship: a,
                    outSpatialReference: r,
                  }
                : { originalFilterGeometry: s, spatialRelationship: a }
            )
          : null,
      x = m ? this._geometryQueryCache.get(m) : null;
    if (_(x)) return new f(x, e, this);
    const l = async (d) => (
      y && c && (await this._project(d, r)),
      m && this._geometryQueryCache.put(m, d.items, d.items.length + 1),
      d
    );
    if (!o) return l(_(t) ? t : await this._getAllFeaturesQueryEngineResult(e));
    const w = this.featureAdapter;
    let p = await this._reschedule(
      () => this._searchFeatures(this._getQueryBBoxes(s)),
      i
    );
    if (a === "esriSpatialRelDisjoint") {
      if (!p.length)
        return l(_(t) ? t : await this._getAllFeaturesQueryEngineResult(e));
      const d = new Set();
      for (const k of p) d.add(w.getObjectId(k));
      const T = _(t)
          ? t.items
          : await this._reschedule(() => this._getAllFeatures(), i),
        V = await this._reschedule(async () => {
          const k = await b(a, o, this.geometryType, this.hasZ, this.hasM),
            J = await this._runSpatialFilter(
              T,
              (v) => !d.has(w.getObjectId(v)) || k(w.getGeometry(v)),
              i
            );
          return new f(J, e, this);
        }, i);
      return l(V);
    }
    if (_(t)) {
      const d = new he();
      p = p.filter((T) => ie(t.items, T, t.items.length, d) >= 0);
    }
    if (!p.length) {
      const d = new f([], e, this);
      return m && this._geometryQueryCache.put(m, d.items, 1), d;
    }
    if (this._canExecuteSinglePass(o, e)) return l(new f(p, e, this));
    const I = await b(a, o, this.geometryType, this.hasZ, this.hasM),
      P = await this._runSpatialFilter(p, (d) => I(w.getGeometry(d)), i);
    return l(new f(P, e, this));
  }
  _executeAggregateIdsQuery(e) {
    if (
      e.items.length === 0 ||
      !e.query.aggregateIds ||
      !e.query.aggregateIds.length ||
      g(this.aggregateAdapter)
    )
      return;
    const t = new Set();
    for (const s of e.query.aggregateIds)
      this.aggregateAdapter.getFeatureObjectIds(s).forEach((r) => t.add(r));
    const i = this.featureAdapter.getObjectId;
    e.items = e.items.filter((s) => t.has(i(s)));
  }
  _executeObjectIdsQuery(e) {
    if (e.items.length === 0 || !e.query.objectIds || !e.query.objectIds.length)
      return;
    const t = new Set(e.query.objectIds),
      i = this.featureAdapter.getObjectId;
    e.items = e.items.filter((s) => t.has(i(s)));
  }
  _executeTimeQuery(e) {
    if (e.items.length === 0) return;
    const t = xe(this.timeInfo, e.query.timeExtent, this.featureAdapter);
    g(t) || (e.items = e.items.filter(t));
  }
  _executeAttributesQuery(e) {
    if (e.items.length === 0) return;
    const t = de(e.query.where, this.fieldsIndex);
    if (t) {
      if (!t.isStandardized)
        throw new TypeError("Where clause is not standardized");
      e.items = e.items.filter((i) => t.testFeature(i, this.featureAdapter));
    }
  }
  async _runSpatialFilter(e, t, i) {
    if (!t) return e;
    if (g(this._frameTask)) return e.filter((n) => t(n));
    let s = 0;
    const r = [],
      a = async (n) => {
        for (; s < e.length; ) {
          const u = e[s++];
          t(u) && (r.push(u), n.madeProgress()),
            n.done && (await this._reschedule((h) => a(h), i));
        }
      };
    return this._reschedule((n) => a(n), i).then(() => r);
  }
  _filterLatest(e) {
    const {
        trackIdField: t,
        startTimeField: i,
        endTimeField: s,
      } = this.timeInfo,
      r = s || i,
      a = new Map(),
      n = this.featureAdapter.getAttribute;
    for (const u of e.items) {
      const h = n(u, t),
        o = n(u, r),
        c = a.get(h);
      (!c || o > n(c, r)) && a.set(h, u);
    }
    e.items = Array.from(a.values());
  }
  _canExecuteSinglePass(e, t) {
    const { spatialRel: i } = t;
    return (
      H(e) &&
      (i === "esriSpatialRelEnvelopeIntersects" ||
        (this.geometryType === "esriGeometryPoint" &&
          (i === "esriSpatialRelIntersects" ||
            i === "esriSpatialRelContains" ||
            i === "esriSpatialRelWithin")))
    );
  }
  async _project(e, t) {
    if (!t || R(this.spatialReference, t)) return e;
    const i = this.featureAdapter,
      s = await pe(
        e.items.map((r) =>
          we(this.geometryType, this.hasZ, this.hasM, i.getGeometry(r))
        ),
        this.spatialReference,
        t
      );
    return (
      (e.items = s.map((r, a) =>
        i.cloneWithGeometry(e.items[a], se(r, this.hasZ, this.hasM))
      )),
      e
    );
  }
  _getQueryBBoxes(e) {
    if (H(e)) {
      if (re(e)) return [N(e.xmin, e.ymin, e.xmax, e.ymax)];
      if (ae(e))
        return e.rings.map((t) =>
          N(
            Math.min(t[0][0], t[2][0]),
            Math.min(t[0][1], t[2][1]),
            Math.max(t[0][0], t[2][0]),
            Math.max(t[0][1], t[2][1])
          )
        );
    }
    return [ne(ue(), e)];
  }
  async _searchFeatures(e) {
    const t = new Set();
    await Promise.all(
      e.map((s) => this.featureStore.forEachInBounds(s, (r) => t.add(r)))
    );
    const i = Array.from(t.values());
    return t.clear(), i;
  }
  async _checkStatisticsSupport(e, t) {
    if (
      (e.distance ?? 0) < 0 ||
      e.geometryPrecision != null ||
      e.multipatchOption ||
      e.pixelSize ||
      e.relationParam ||
      e.text ||
      e.outStatistics ||
      e.groupByFieldsForStatistics ||
      e.having ||
      e.orderByFields
    )
      throw new S(F, "Unsupported query options", { query: e });
    return (
      this._checkAttributesQuerySupport(e),
      Promise.all([
        this._checkStatisticsParamsSupport(t),
        U(e, this.geometryType, this.spatialReference),
        C(this.spatialReference, e.outSR),
      ]).then(() => e)
    );
  }
  async _checkStatisticsParamsSupport(e) {
    let t = [];
    if (e.valueExpression) {
      const { arcadeUtils: i } = await ce();
      t = i.extractFieldNames(e.valueExpression);
    }
    if (
      (e.field && t.push(e.field),
      e.field2 && t.push(e.field2),
      e.field3 && t.push(e.field3),
      e.normalizationField && t.push(e.normalizationField),
      !t.length)
    )
      throw new S(F, "params should have at least a field or valueExpression", {
        params: e,
      });
    E(this.fieldsIndex, t, "params contains missing fields");
  }
  async _checkQuerySupport(e) {
    if (
      (e.distance ?? 0) < 0 ||
      e.geometryPrecision != null ||
      e.multipatchOption ||
      e.pixelSize ||
      e.relationParam ||
      e.text
    )
      throw new S(F, "Unsupported query options", { query: e });
    return (
      this._checkAttributesQuerySupport(e),
      this._checkStatisticsQuerySupport(e),
      Promise.all([
        U(e, this.geometryType, this.spatialReference),
        C(this.spatialReference, e.outSR),
      ]).then(() => e)
    );
  }
  _checkAttributesQuerySupport(e) {
    const {
        outFields: t,
        orderByFields: i,
        returnDistinctValues: s,
        outStatistics: r,
      } = e,
      a = r
        ? r
            .map(
              (n) =>
                n.outStatisticFieldName && n.outStatisticFieldName.toLowerCase()
            )
            .filter(Boolean)
        : [];
    if (i && i.length > 0) {
      const n = " asc",
        u = " desc",
        h = i
          .map((o) => {
            const c = o.toLowerCase();
            return c.includes(n)
              ? c.split(n)[0]
              : c.includes(u)
              ? c.split(u)[0]
              : o;
          })
          .filter((o) => !a.includes(o));
      E(this.fieldsIndex, h, "orderByFields contains missing fields");
    }
    if (t && t.length > 0)
      E(this.fieldsIndex, t, "outFields contains missing fields");
    else if (s)
      throw new S(F, "outFields should be specified for returnDistinctValues", {
        query: e,
      });
    fe(this.fieldsIndex, e.where);
  }
  _checkStatisticsQuerySupport(e) {
    const { outStatistics: t, groupByFieldsForStatistics: i, having: s } = e,
      r = i && i.length,
      a = t && t.length;
    if (s) {
      if (!r || !a)
        throw new S(
          F,
          "outStatistics and groupByFieldsForStatistics should be specified with having",
          { query: e }
        );
      ye(this.fieldsIndex, s, t);
    }
    if (a) {
      if (
        !(function (u) {
          return (
            u != null && u.every((h) => h.statisticType !== "exceedslimit")
          );
        })(t)
      )
        return;
      const n = t.map((u) => u.onStatisticField).filter(Boolean);
      E(this.fieldsIndex, n, "onStatisticFields contains missing fields"),
        r &&
          E(
            this.fieldsIndex,
            i,
            "groupByFieldsForStatistics contains missing fields"
          );
      for (const u of t) {
        const { onStatisticField: h, statisticType: o } = u;
        if (
          (o !== "percentile_disc" && o !== "percentile_cont") ||
          !("statisticParameters" in u)
        ) {
          if (o !== "count" && h && me(h, this.fieldsIndex))
            throw new S(F, "outStatistics contains non-numeric fields", {
              definition: u,
              query: e,
            });
        } else {
          const { statisticParameters: c } = u;
          if (!c)
            throw new S(
              F,
              "statisticParamters should be set for percentile type",
              {
                definition: u,
                query: e,
              }
            );
        }
      }
    }
  }
  async _getQueryEngineResultForStats(e, t, i) {
    e = M(e);
    try {
      (e = await this._schedule(
        () => L(e, this.definitionExpression, this.spatialReference),
        i
      )),
        (e = await this._reschedule(
          () => this._checkStatisticsSupport(e, t),
          i
        ));
      const s = await this._reschedule(
          () => this._executeSceneFilterQuery(e, i),
          i
        ),
        r = await this._reschedule(
          () => this._executeGeometryQuery(e, s, i),
          i
        );
      return (
        await this._reschedule(() => this._executeAggregateIdsQuery(r), i),
        await this._reschedule(() => this._executeObjectIdsQuery(r), i),
        await this._reschedule(() => this._executeTimeQuery(r), i),
        await this._reschedule(() => this._executeAttributesQuery(r), i),
        r
      );
    } catch (s) {
      if (s !== Q) throw s;
      return new f([], e, this);
    }
  }
}
export { Te as e };
