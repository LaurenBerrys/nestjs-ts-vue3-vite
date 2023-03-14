import { q as ce } from "./Table.e9c997d5.js";
import {
  f4 as Y,
  s as S,
  t as ae,
  cm as de,
  ac as H,
  r as U,
  f5 as X,
  f6 as he,
  eZ as k,
  br as fe,
  f7 as me,
  du as ge,
} from "./index.8fd7165c.js";
import { s as J } from "./quantizationUtils.1e9e702d.js";
import { f as pe } from "./WhereClause.ae196341.js";
import {
  c as P,
  D as ye,
  m as xe,
  f as K,
  d as W,
  T as Fe,
  y as Ie,
  x as _e,
  z as Ve,
  S as Te,
  M as De,
  v as ve,
  p as Ae,
} from "./utils.7e94e38c.js";
import { g as ee } from "./projectionSupport.4aeb802f.js";
import { E as O, v as Z, b as te } from "./utils.e3aed7db.js";
const j = new (class {
    constructor(l, t) {
      (this._cache = new Y(l)), (this._invalidCache = new Y(t));
    }
    get(l, t) {
      const e = `${t.uid}:${l}`,
        s = this._cache.get(e);
      if (s) return s;
      if (this._invalidCache.get(e) !== void 0) return null;
      try {
        const i = pe.create(l, t);
        return this._cache.put(e, i), i;
      } catch {
        return this._invalidCache.put(e, null), null;
      }
    }
  })(50, 500),
  w = "feature-store:unsupported-query",
  ne = " as ",
  be = new Set([
    "esriFieldTypeOID",
    "esriFieldTypeSmallInteger",
    "esriFieldTypeInteger",
    "esriFieldTypeSingle",
    "esriFieldTypeDouble",
    "esriFieldTypeLong",
    "esriFieldTypeDate",
  ]);
function Oe(l, t) {
  if (!t) return !0;
  const e = j.get(t, l);
  if (!e) throw new S(w, "invalid SQL expression", { where: t });
  if (!e.isStandardized)
    throw new S(w, "where clause is not standard", { where: t });
  return Q(l, e.fieldNames, "where clause contains missing fields"), !0;
}
function Ze(l, t, e) {
  if (!t) return !0;
  const s = j.get(t, l);
  if (!s) throw new S(w, "invalid SQL expression", { having: t });
  if (!s.isAggregate)
    throw new S(w, "having does not contain a valid aggregate function", {
      having: t,
    });
  const i = s.fieldNames;
  if (
    (Q(l, i, "having contains missing fields"),
    !s.getExpressions().every((a) => {
      var u;
      const { aggregateType: n, field: r } = a,
        o = (u = l.get(r)) == null ? void 0 : u.name;
      return e.some((c) => {
        var f;
        const { onStatisticField: h, statisticType: m } = c;
        return (
          ((f = l.get(h)) == null ? void 0 : f.name) === o &&
          m.toLowerCase().trim() === n
        );
      });
    }))
  )
    throw new S(w, "expressions in having should also exist in outStatistics", {
      having: t,
    });
  return !0;
}
function N(l, t) {
  return l ? j.get(l, t) : null;
}
function Q(l, t, e, s = !0) {
  const i = [];
  for (const a of t)
    if (a !== "*" && !l.has(a))
      if (s) {
        const n = re(a);
        try {
          const r = N(n, l);
          if (!r) throw new S(w, "invalid SQL expression", { where: n });
          if (!r.isStandardized)
            throw new S(w, "expression is not standard", { clause: r });
          Q(l, r.fieldNames, "expression contains missing fields");
        } catch (r) {
          const o = r && r.details;
          if (o && (o.clause || o.where)) throw r;
          o && o.missingFields ? i.push(...o.missingFields) : i.push(a);
        }
      } else i.push(a);
  if (i.length) throw new S(w, e, { missingFields: i });
}
function re(l) {
  return l.split(ne)[0];
}
function Se(l) {
  return l.split(ne)[1];
}
function je(l, t) {
  const e = t.get(l);
  return !!e && !be.has(e.type);
}
class q {
  constructor(t, e, s) {
    (this._fieldDataCache = new Map()),
      (this._returnDistinctMap = new Map()),
      (this.returnDistinctValues = t.returnDistinctValues ?? !1),
      (this.fieldsIndex = s),
      (this.featureAdapter = e);
    const i = t.outFields;
    if (i && !i.includes("*")) {
      this.outFields = i;
      let a = 0;
      for (const n of i) {
        const r = re(n),
          o = this.fieldsIndex.get(r),
          u = o ? null : N(r, s),
          c = o ? o.name : Se(n) || "FIELD_EXP_" + a++;
        this._fieldDataCache.set(n, { alias: c, clause: u });
      }
    }
  }
  countDistinctValues(t) {
    return this.returnDistinctValues
      ? (t.forEach((e) => this.getAttributes(e)), this._returnDistinctMap.size)
      : t.length;
  }
  getAttributes(t) {
    const e = this._processAttributesForOutFields(t);
    return this._processAttributesForDistinctValues(e);
  }
  getFieldValue(t, e, s) {
    var n;
    const i = s ? s.name : e;
    let a = null;
    return (
      this._fieldDataCache.has(i)
        ? (a = (n = this._fieldDataCache.get(i)) == null ? void 0 : n.clause)
        : s ||
          ((a = N(e, this.fieldsIndex)),
          this._fieldDataCache.set(i, { alias: i, clause: a })),
      s
        ? this.featureAdapter.getAttribute(t, i)
        : a == null
        ? void 0
        : a.calculateValue(t, this.featureAdapter)
    );
  }
  getDataValue(t, e) {
    const s = e.normalizationType,
      i = e.normalizationTotal;
    let a =
      e.field && this.getFieldValue(t, e.field, this.fieldsIndex.get(e.field));
    if (
      (e.field2 &&
        ((a = `${P(a)}${e.fieldDelimiter}${P(
          this.getFieldValue(t, e.field2, this.fieldsIndex.get(e.field2))
        )}`),
        e.field3 &&
          (a = `${a}${e.fieldDelimiter}${P(
            this.getFieldValue(t, e.field3, this.fieldsIndex.get(e.field3))
          )}`)),
      s && Number.isFinite(a))
    ) {
      const n =
        s === "field" && e.normalizationField
          ? this.getFieldValue(
              t,
              e.normalizationField,
              this.fieldsIndex.get(e.normalizationField)
            )
          : null;
      a = ye(a, s, n, i);
    }
    return a;
  }
  getExpressionValue(t, e, s, i) {
    const a = {
        attributes: this.featureAdapter.getAttributes(t),
        layer: { fields: this.fieldsIndex.fields },
      },
      n = i.createExecContext(a, s);
    return i.executeFunction(e, n);
  }
  getExpressionValues(t, e, s, i) {
    const a = { fields: this.fieldsIndex.fields };
    return t.map((n) => {
      const r = { attributes: this.featureAdapter.getAttributes(n), layer: a },
        o = i.createExecContext(r, s);
      return i.executeFunction(e, o);
    });
  }
  validateItem(t, e) {
    var s, i;
    return (
      this._fieldDataCache.has(e) ||
        this._fieldDataCache.set(e, {
          alias: e,
          clause: N(e, this.fieldsIndex),
        }),
      ((i = (s = this._fieldDataCache.get(e)) == null ? void 0 : s.clause) ==
      null
        ? void 0
        : i.testFeature(t, this.featureAdapter)) ?? !1
    );
  }
  validateItems(t, e) {
    var s, i;
    return (
      this._fieldDataCache.has(e) ||
        this._fieldDataCache.set(e, {
          alias: e,
          clause: N(e, this.fieldsIndex),
        }),
      ((i = (s = this._fieldDataCache.get(e)) == null ? void 0 : s.clause) ==
      null
        ? void 0
        : i.testSet(t, this.featureAdapter)) ?? !1
    );
  }
  _processAttributesForOutFields(t) {
    const e = this.outFields;
    if (!e || !e.length) return this.featureAdapter.getAttributes(t);
    const s = {};
    for (const i of e) {
      const { alias: a, clause: n } = this._fieldDataCache.get(i);
      s[a] = n
        ? n.calculateValue(t, this.featureAdapter)
        : this.featureAdapter.getAttribute(t, a);
    }
    return s;
  }
  _processAttributesForDistinctValues(t) {
    if (ae(t) || !this.returnDistinctValues) return t;
    const e = this.outFields,
      s = [];
    if (e)
      for (const n of e) {
        const { alias: r } = this._fieldDataCache.get(n);
        s.push(t[r]);
      }
    else for (const n in t) s.push(t[n]);
    const i = `${(e || ["*"]).join(",")}=${s.join(",")}`;
    let a = this._returnDistinctMap.get(i) || 0;
    return this._returnDistinctMap.set(i, ++a), a > 1 ? null : t;
  }
}
function we(l, t, e) {
  return { objectId: l, target: t, distance: e, type: "vertex" };
}
function ze(l, t, e, s, i, a = !1) {
  return {
    objectId: l,
    target: t,
    distance: e,
    type: "edge",
    start: s,
    end: i,
    draped: a,
  };
}
class Qe {
  constructor(t, e, s) {
    (this.items = t),
      (this.query = e),
      (this.geometryType = s.geometryType),
      (this.hasM = s.hasM),
      (this.hasZ = s.hasZ),
      (this.fieldsIndex = s.fieldsIndex),
      (this.objectIdField = s.objectIdField),
      (this.spatialReference = s.spatialReference),
      (this.featureAdapter = s.featureAdapter);
  }
  get size() {
    return this.items.length;
  }
  createQueryResponseForCount() {
    const t = new q(this.query, this.featureAdapter, this.fieldsIndex);
    if (!this.query.outStatistics) return t.countDistinctValues(this.items);
    const {
      groupByFieldsForStatistics: e,
      having: s,
      outStatistics: i,
    } = this.query;
    if (!(e == null ? void 0 : e.length)) return 1;
    const n = new Map(),
      r = new Map(),
      o = new Set();
    for (const u of i) {
      const { statisticType: c } = u,
        h = c !== "exceedslimit" ? u.onStatisticField : void 0;
      if (!r.has(h)) {
        const d = [];
        for (const f of e) {
          const y = this._getAttributeValues(t, f, n);
          d.push(y);
        }
        r.set(h, this._calculateUniqueValues(d, t.returnDistinctValues));
      }
      const m = r.get(h);
      for (const d in m) {
        const { data: f, items: y } = m[d],
          _ = f.join(",");
        (s && !t.validateItems(y, s)) || o.add(_);
      }
    }
    return o.size;
  }
  async createQueryResponse() {
    let t;
    if (
      ((t = this.query.outStatistics
        ? this.query.outStatistics.some(
            (e) => e.statisticType === "exceedslimit"
          )
          ? this._createExceedsLimitQueryResponse(this.query)
          : await this._createStatisticsQueryResponse(this.query)
        : this._createFeatureQueryResponse(this.query)),
      this.query.returnQueryGeometry)
    ) {
      const e = this.query.geometry;
      de(this.query.outSR) && !H(e.spatialReference, this.query.outSR)
        ? (t.queryGeometry = O({
            spatialReference: this.query.outSR,
            ...ee(e, e.spatialReference, this.query.outSR),
          }))
        : (t.queryGeometry = O({ spatialReference: this.query.outSR, ...e }));
    }
    return t;
  }
  createSnappingResponse(t, e) {
    const s = this.featureAdapter,
      i = se(this.hasZ, this.hasM),
      { point: a, mode: n } = t,
      r = typeof t.distance == "number" ? t.distance : t.distance.x,
      o = typeof t.distance == "number" ? t.distance : t.distance.y,
      u = { candidates: [] },
      c = this.geometryType === "esriGeometryPolygon",
      h = this._getPointCreator(n, this.spatialReference, e),
      m = new ie(null, 0),
      d = new ie(null, 0),
      f = { x: 0, y: 0, z: 0 };
    for (const y of this.items) {
      const _ = s.getGeometry(y);
      if (ae(_)) continue;
      const { coords: x, lengths: V } = _;
      if (((m.coords = x), (d.coords = x), t.types & G.EDGE)) {
        let F = 0;
        for (let I = 0; I < V.length; I++) {
          const p = V[I];
          for (let g = 0; g < p; g++, F += i) {
            const T = m;
            if (((T.coordsIndex = F), g !== p - 1)) {
              const D = d;
              D.coordsIndex = F + i;
              const C = f;
              Ee(f, a, T, D);
              const v = (a.x - C.x) / r,
                A = (a.y - C.y) / o,
                z = v * v + A * A;
              z <= 1 &&
                u.candidates.push(
                  ze(s.getObjectId(y), h(C), Math.sqrt(z), h(T), h(D))
                );
            }
          }
        }
      }
      if (t.types & G.VERTEX) {
        const F = c ? x.length - i : x.length;
        for (let I = 0; I < F; I += i) {
          const p = m;
          p.coordsIndex = I;
          const g = (a.x - p.x) / r,
            T = (a.y - p.y) / o,
            D = g * g + T * T;
          D <= 1 && u.candidates.push(we(s.getObjectId(y), h(p), Math.sqrt(D)));
        }
      }
    }
    return u.candidates.sort((y, _) => y.distance - _.distance), u;
  }
  _getPointCreator(t, e, s) {
    const i = U(s) && !H(e, s) ? (n) => ee(n, e, s) : (n) => n,
      { hasZ: a } = this;
    return t === "3d"
      ? a
        ? ({ x: n, y: r, z: o }) => i({ x: n, y: r, z: o })
        : ({ x: n, y: r }) => i({ x: n, y: r, z: 0 })
      : ({ x: n, y: r }) => i({ x: n, y: r });
  }
  async createSummaryStatisticsResponse(t) {
    const {
        field: e,
        valueExpression: s,
        normalizationField: i,
        normalizationType: a,
        normalizationTotal: n,
        minValue: r,
        maxValue: o,
        scale: u,
      } = t,
      c = this.fieldsIndex.isDateField(e),
      h = await this._getDataValues({
        field: e,
        valueExpression: s,
        normalizationField: i,
        normalizationType: a,
        normalizationTotal: n,
        scale: u,
      }),
      m = xe({
        normalizationType: a,
        normalizationField: i,
        minValue: r,
        maxValue: o,
      }),
      d = this.fieldsIndex.get(e),
      f = { value: 0.5, fieldType: d == null ? void 0 : d.type },
      y = X(d)
        ? K({ values: h, supportsNullCount: m, percentileParams: f })
        : W({
            values: h,
            minValue: r,
            maxValue: o,
            useSampleStdDev: !a,
            supportsNullCount: m,
            percentileParams: f,
          });
    return Fe(y, c);
  }
  async createUniqueValuesResponse(t) {
    const {
        field: e,
        valueExpression: s,
        domains: i,
        returnAllCodedValues: a,
        scale: n,
      } = t,
      r = await this._getDataValues({
        field: e,
        field2: t.field2,
        field3: t.field3,
        fieldDelimiter: t.fieldDelimiter,
        valueExpression: s,
        scale: n,
      }),
      o = Ie(r);
    return _e(o, i, a, t.fieldDelimiter);
  }
  async createClassBreaksResponse(t) {
    const {
        field: e,
        valueExpression: s,
        normalizationField: i,
        normalizationType: a,
        normalizationTotal: n,
        classificationMethod: r,
        standardDeviationInterval: o,
        minValue: u,
        maxValue: c,
        numClasses: h,
        scale: m,
      } = t,
      d = await this._getDataValues({
        field: e,
        valueExpression: s,
        normalizationField: i,
        normalizationType: a,
        normalizationTotal: n,
        scale: m,
      }),
      f = Ve(d, {
        field: e,
        normalizationField: i,
        normalizationType: a,
        normalizationTotal: n,
        classificationMethod: r,
        standardDeviationInterval: o,
        minValue: u,
        maxValue: c,
        numClasses: h,
      });
    return Te(f, r);
  }
  async createHistogramResponse(t) {
    const {
        field: e,
        valueExpression: s,
        normalizationField: i,
        normalizationType: a,
        normalizationTotal: n,
        classificationMethod: r,
        standardDeviationInterval: o,
        minValue: u,
        maxValue: c,
        numBins: h,
        scale: m,
      } = t,
      d = await this._getDataValues({
        field: e,
        valueExpression: s,
        normalizationField: i,
        normalizationType: a,
        normalizationTotal: n,
        scale: m,
      });
    return De(d, {
      field: e,
      normalizationField: i,
      normalizationType: a,
      normalizationTotal: n,
      classificationMethod: r,
      standardDeviationInterval: o,
      minValue: u,
      maxValue: c,
      numBins: h,
    });
  }
  _sortFeatures(t, e, s) {
    if (t.length > 1 && e && e.length)
      for (const i of e.reverse()) {
        const a = i.split(" "),
          n = a[0],
          r = this.fieldsIndex.get(n),
          o = !!a[1] && a[1].toLowerCase() === "desc",
          u = ve(r == null ? void 0 : r.type, o);
        t.sort((c, h) => {
          const m = s(c, n, r),
            d = s(h, n, r);
          return u(m, d);
        });
      }
  }
  _createFeatureQueryResponse(t) {
    const e = this.items,
      {
        geometryType: s,
        hasM: i,
        hasZ: a,
        objectIdField: n,
        spatialReference: r,
      } = this,
      {
        outFields: o,
        outSR: u,
        quantizationParameters: c,
        resultRecordCount: h,
        resultOffset: m,
        returnZ: d,
        returnM: f,
      } = t,
      y = h != null && e.length > (m || 0) + h,
      _ =
        o &&
        (o.includes("*")
          ? [...this.fieldsIndex.fields]
          : o.map((x) => this.fieldsIndex.get(x)));
    return {
      exceededTransferLimit: y,
      features: this._createFeatures(t, e),
      fields: _,
      geometryType: s,
      hasM: i && f,
      hasZ: a && d,
      objectIdFieldName: n,
      spatialReference: O(u || r),
      transform: (c && J(c)) || null,
    };
  }
  _createFeatures(t, e) {
    const s = new q(t, this.featureAdapter, this.fieldsIndex),
      { hasM: i, hasZ: a } = this,
      {
        orderByFields: n,
        quantizationParameters: r,
        returnGeometry: o,
        returnCentroid: u,
        maxAllowableOffset: c,
        resultOffset: h,
        resultRecordCount: m,
        returnZ: d = !1,
        returnM: f = !1,
      } = t,
      y = a && d,
      _ = i && f;
    let x = [],
      V = 0;
    const F = [...e];
    if (
      (this._sortFeatures(F, n, (p, g, T) => s.getFieldValue(p, g, T)), o || u)
    ) {
      const p = J(r) ?? void 0;
      if (o && !u)
        for (const g of F)
          x[V++] = {
            attributes: s.getAttributes(g),
            geometry: Z(
              this.geometryType,
              this.hasZ,
              this.hasM,
              this.featureAdapter.getGeometry(g),
              c,
              p,
              y,
              _
            ),
          };
      else if (!o && u)
        for (const g of F)
          x[V++] = {
            attributes: s.getAttributes(g),
            centroid: te(this, this.featureAdapter.getCentroid(g, this), p),
          };
      else
        for (const g of F)
          x[V++] = {
            attributes: s.getAttributes(g),
            centroid: te(this, this.featureAdapter.getCentroid(g, this), p),
            geometry: Z(
              this.geometryType,
              this.hasZ,
              this.hasM,
              this.featureAdapter.getGeometry(g),
              c,
              p,
              y,
              _
            ),
          };
    } else
      for (const p of F) {
        const g = s.getAttributes(p);
        g && (x[V++] = { attributes: g });
      }
    const I = h || 0;
    if (m != null) {
      const p = I + m;
      x = x.slice(I, Math.min(x.length, p));
    }
    return x;
  }
  _createExceedsLimitQueryResponse(t) {
    let e = !1,
      s = Number.POSITIVE_INFINITY,
      i = Number.POSITIVE_INFINITY,
      a = Number.POSITIVE_INFINITY;
    for (const n of t.outStatistics ?? [])
      if (n.statisticType === "exceedslimit") {
        (s =
          n.maxPointCount != null ? n.maxPointCount : Number.POSITIVE_INFINITY),
          (i =
            n.maxRecordCount != null
              ? n.maxRecordCount
              : Number.POSITIVE_INFINITY),
          (a =
            n.maxVertexCount != null
              ? n.maxVertexCount
              : Number.POSITIVE_INFINITY);
        break;
      }
    if (this.geometryType === "esriGeometryPoint") e = this.items.length > s;
    else if (this.items.length > i) e = !0;
    else {
      const n = se(this.hasZ, this.hasM),
        r = this.featureAdapter;
      e =
        this.items.reduce((o, u) => {
          const c = r.getGeometry(u);
          return o + ((U(c) && c.coords.length) || 0);
        }, 0) /
          n >
        a;
    }
    return {
      fields: [
        {
          name: "exceedslimit",
          type: "esriFieldTypeInteger",
          alias: "exceedslimit",
          sqlType: "sqlTypeInteger",
          domain: null,
          defaultValue: null,
        },
      ],
      features: [{ attributes: { exceedslimit: Number(e) } }],
    };
  }
  async _createStatisticsQueryResponse(t) {
    const e = { attributes: {} },
      s = [],
      i = new Map(),
      a = new Map(),
      n = new Map(),
      r = new Map(),
      o = new q(t, this.featureAdapter, this.fieldsIndex),
      u = t.outStatistics,
      { groupByFieldsForStatistics: c, having: h, orderByFields: m } = t,
      d = c && c.length,
      f = !!d,
      y = f ? c[0] : null,
      _ = f && !this.fieldsIndex.get(y);
    for (const V of u ?? []) {
      const { outStatisticFieldName: F, statisticType: I } = V,
        p = V,
        g = I !== "exceedslimit" ? V.onStatisticField : void 0,
        T = I === "percentile_disc" || I === "percentile_cont",
        D =
          I === "EnvelopeAggregate" ||
          I === "CentroidAggregate" ||
          I === "ConvexHullAggregate",
        C = f && d === 1 && (g === y || _) && I === "count";
      if (f) {
        if (!n.has(g)) {
          const A = [];
          for (const z of c) {
            const M = this._getAttributeValues(o, z, i);
            A.push(M);
          }
          n.set(
            g,
            this._calculateUniqueValues(A, !D && o.returnDistinctValues)
          );
        }
        const v = n.get(g);
        for (const A in v) {
          const { count: z, data: M, items: L, itemPositions: oe } = v[A],
            $ = M.join(",");
          if (!h || o.validateItems(L, h)) {
            const E = r.get($) || { attributes: {} };
            if (D) {
              E.aggregateGeometries || (E.aggregateGeometries = {});
              const { aggregateGeometries: b, outStatisticFieldName: R } =
                await this._getAggregateGeometry(p, L);
              E.aggregateGeometries[R] = b;
            } else {
              let b = null;
              if (C) b = z;
              else {
                const R = this._getAttributeValues(o, g, i),
                  B = oe.map((ue) => R[ue]);
                b =
                  T && "statisticParameters" in p
                    ? this._getPercentileValue(p, B)
                    : this._getStatisticValue(
                        p,
                        B,
                        null,
                        o.returnDistinctValues
                      );
              }
              E.attributes[F] = b;
            }
            let le = 0;
            c.forEach(
              (b, R) =>
                (E.attributes[this.fieldsIndex.get(b) ? b : "EXPR_" + ++le] =
                  M[R])
            ),
              r.set($, E);
          }
        }
      } else if (D) {
        e.aggregateGeometries || (e.aggregateGeometries = {});
        const { aggregateGeometries: v, outStatisticFieldName: A } =
          await this._getAggregateGeometry(p, this.items);
        e.aggregateGeometries[A] = v;
      } else {
        const v = this._getAttributeValues(o, g, i);
        e.attributes[F] =
          T && "statisticParameters" in p
            ? this._getPercentileValue(p, v)
            : this._getStatisticValue(p, v, a, o.returnDistinctValues);
      }
      s.push({ name: F, alias: F, type: "esriFieldTypeDouble" });
    }
    const x = f ? Array.from(r.values()) : [e];
    return (
      this._sortFeatures(x, m, (V, F) => V.attributes[F]),
      { fields: s, features: x }
    );
  }
  async _getAggregateGeometry(t, e) {
    const s = await ce(
        () => import("./geometryEngineJSON.4e17515e.js"),
        [
          "js/geometryEngineJSON.4e17515e.js",
          "js/geometryEngineBase.6e4344a5.js",
          "js/geometryEngineJSON.8702a072.js",
          "js/json.495fc412.js",
        ]
      ),
      { statisticType: i, outStatisticFieldName: a } = t,
      {
        featureAdapter: n,
        spatialReference: r,
        geometryType: o,
        hasZ: u,
        hasM: c,
      } = this,
      h = e.map((f) => Z(o, u, c, n.getGeometry(f))),
      m = s.convexHull(r, h, !0)[0],
      d = { aggregateGeometries: null, outStatisticFieldName: null };
    if (i === "EnvelopeAggregate") {
      const f = m ? he(m) : k(s.union(r, h));
      (d.aggregateGeometries = { ...f, spatialReference: r }),
        (d.outStatisticFieldName = a || "extent");
    } else if (i === "CentroidAggregate") {
      const f = m ? fe(m) : me(k(s.union(r, h)));
      (d.aggregateGeometries = { x: f[0], y: f[1], spatialReference: r }),
        (d.outStatisticFieldName = a || "centroid");
    } else
      i === "ConvexHullAggregate" &&
        ((d.aggregateGeometries = m),
        (d.outStatisticFieldName = a || "convexHull"));
    return d;
  }
  _getStatisticValue(t, e, s, i) {
    const { onStatisticField: a, statisticType: n } = t;
    let r = null;
    return (
      (r =
        s != null && s.has(a)
          ? s.get(a)
          : X(this.fieldsIndex.get(a))
          ? K({ values: e, returnDistinct: i })
          : W({
              values: i ? [...new Set(e)] : e,
              minValue: null,
              maxValue: null,
              useSampleStdDev: !0,
            })),
      s && s.set(a, r),
      r[n === "var" ? "variance" : n]
    );
  }
  _getPercentileValue(t, e) {
    const { onStatisticField: s, statisticParameters: i, statisticType: a } = t,
      { value: n, orderBy: r } = i,
      o = this.fieldsIndex.get(s);
    return Ae(e, {
      value: n,
      orderBy: r,
      fieldType: o == null ? void 0 : o.type,
      isDiscrete: a === "percentile_disc",
    });
  }
  _getAttributeValues(t, e, s) {
    if (s.has(e)) return s.get(e);
    const i = this.fieldsIndex.get(e),
      a = this.items.map((n) => t.getFieldValue(n, e, i));
    return s.set(e, a), a;
  }
  _getAttributeDataValues(t, e) {
    return this.items.map((s) =>
      t.getDataValue(s, {
        field: e.field,
        field2: e.field2,
        field3: e.field3,
        fieldDelimiter: e.fieldDelimiter,
        normalizationField: e.normalizationField,
        normalizationType: e.normalizationType,
        normalizationTotal: e.normalizationTotal,
      })
    );
  }
  async _getAttributeExpressionValues(t, e, s) {
    const { arcadeUtils: i } = await ge(),
      a = i.createFunction(e),
      n = s && i.getViewInfo(s);
    return t.getExpressionValues(this.items, a, n, i);
  }
  _calculateUniqueValues(t, e) {
    const s = {},
      i = this.items,
      a = i.length;
    for (let n = 0; n < a; n++) {
      const r = i[n],
        o = [];
      for (const c of t) o.push(c[n]);
      const u = o.join(",");
      s[u] == null
        ? (s[u] = { count: 1, data: o, items: [r], itemPositions: [n] })
        : (e || s[u].count++, s[u].items.push(r), s[u].itemPositions.push(n));
    }
    return s;
  }
  async _getDataValues(t) {
    const e = new q(this.query, this.featureAdapter, this.fieldsIndex),
      {
        valueExpression: s,
        field: i,
        normalizationField: a,
        normalizationType: n,
        normalizationTotal: r,
        scale: o,
      } = t,
      u = s
        ? {
            viewingMode: "map",
            scale: o,
            spatialReference: this.query.outSR || this.spatialReference,
          }
        : null;
    return s
      ? this._getAttributeExpressionValues(e, s, u)
      : this._getAttributeDataValues(e, {
          field: i,
          field2: t.field2,
          field3: t.field3,
          fieldDelimiter: t.fieldDelimiter,
          normalizationField: a,
          normalizationType: n,
          normalizationTotal: r,
        });
  }
}
function Ee(l, t, e, s) {
  const i = s.x - e.x,
    a = s.y - e.y,
    n = i * i + a * a,
    r = (t.x - e.x) * i + (t.y - e.y) * a,
    o = Math.min(1, Math.max(0, r / n));
  (l.x = e.x + i * o), (l.y = e.y + a * o);
}
function se(l, t) {
  return l ? (t ? 4 : 3) : t ? 3 : 2;
}
var G;
(function (l) {
  (l[(l.NONE = 0)] = "NONE"),
    (l[(l.EDGE = 1)] = "EDGE"),
    (l[(l.VERTEX = 2)] = "VERTEX");
})(G || (G = {}));
class ie {
  constructor(t, e) {
    (this.coords = t), (this.coordsIndex = e);
  }
  get x() {
    return this.coords[this.coordsIndex];
  }
  get y() {
    return this.coords[this.coordsIndex + 1];
  }
  get z() {
    return this.coords[this.coordsIndex + 2];
  }
}
export { Qe as A, G as D, Ze as a, Q as c, je as f, N as l, Oe as o };
