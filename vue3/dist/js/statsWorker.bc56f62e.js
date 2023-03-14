import {
  eG as S,
  bm as $,
  R,
  q,
  du as A,
  aH as B,
  u as G,
  eH as O,
  eI as _,
} from "./index.8fd7165c.js";
import { O as H } from "./quantizationUtils.1e9e702d.js";
import {
  c as b,
  D as Y,
  m as k,
  f as U,
  d as Z,
  T as j,
  y as J,
  x as K,
  z as L,
  S as Q,
  M as W,
} from "./utils.7e94e38c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./generateRendererUtils.855c90be.js";
let h = null;
function X(i, a = 18, u, n, e, r) {
  const o = new Float64Array(e * r);
  a = Math.round(G(a));
  let t = Number.POSITIVE_INFINITY,
    l = Number.NEGATIVE_INFINITY,
    m = 0,
    d = 0,
    c = 0,
    p = 0;
  const T = O(n, u);
  for (const { geometry: F, attributes: v } of i) {
    const { x: f, y: s } = F,
      I = Math.max(0, f - a),
      E = Math.max(0, s - a),
      M = Math.min(r, s + a),
      x = Math.min(e, f + a),
      z = +T(v);
    for (let y = E; y < M; y++)
      for (let V = I; V < x; V++) {
        const g = y * e + V,
          N = _(V - f, y - s, a),
          C = o[g];
        m = o[g] += N * z;
        const P = m - C;
        (d += P), (c += P * P), m < t && (t = m), m > l && (l = m), p++;
      }
  }
  if (!p) return { mean: 0, stddev: 0, min: 0, max: 0, mid: 0, count: 0 };
  const w = (l - t) / 2;
  return {
    mean: d / p,
    stdDev: Math.sqrt((c - (d * d) / p) / p),
    min: t,
    max: l,
    mid: w,
    count: p,
  };
}
async function D(i, a) {
  if (!a) return [];
  const { field: u, field2: n, field3: e, fieldDelimiter: r } = i,
    o = i.valueExpression,
    t = i.normalizationType,
    l = i.normalizationField,
    m = i.normalizationTotal,
    d = [],
    c = i.viewInfoParams;
  let p = null,
    T = null;
  if (o) {
    if (!h) {
      const { arcadeUtils: v } = await A();
      h = v;
    }
    (p = h.createFunction(o)),
      (T =
        c &&
        h.getViewInfo({
          viewingMode: c.viewingMode,
          scale: c.scale,
          spatialReference: new B(c.spatialReference),
        }));
  }
  const w = i.fieldInfos,
    F =
      (a[0] &&
        "declaredClass" in a[0] &&
        a[0].declaredClass === "esri.Graphic") ||
      !w
        ? null
        : { fields: w };
  return (
    a.forEach((v) => {
      const f = v.attributes;
      let s;
      if (o) {
        const I = F ? { ...v, layer: F } : v,
          E = h.createExecContext(I, T);
        s = h.executeFunction(p, E);
      } else
        f &&
          ((s = f[u]),
          n &&
            ((s = `${b(s)}${r}${b(f[n])}`), e && (s = `${s}${r}${b(f[e])}`)));
      if (t && typeof s == "number" && isFinite(s)) {
        const I = f && parseFloat(f[l]);
        s = Y(s, t, I, m);
      }
      d.push(s);
    }),
    d
  );
}
async function fa(i) {
  const { attribute: a, features: u } = i,
    {
      normalizationType: n,
      normalizationField: e,
      minValue: r,
      maxValue: o,
      fieldType: t,
    } = a,
    l = await D(
      {
        field: a.field,
        valueExpression: a.valueExpression,
        normalizationType: n,
        normalizationField: e,
        normalizationTotal: a.normalizationTotal,
        viewInfoParams: a.viewInfoParams,
        fieldInfos: a.fieldInfos,
      },
      u
    ),
    m = k({
      normalizationType: n,
      normalizationField: e,
      minValue: r,
      maxValue: o,
    }),
    d = { value: 0.5, fieldType: t },
    c =
      t === "esriFieldTypeString"
        ? U({ values: l, supportsNullCount: m, percentileParams: d })
        : Z({
            values: l,
            minValue: r,
            maxValue: o,
            useSampleStdDev: !n,
            supportsNullCount: m,
            percentileParams: d,
          });
  return j(c, t === "esriFieldTypeDate");
}
async function da(i) {
  const { attribute: a, features: u } = i,
    n = await D(
      {
        field: a.field,
        field2: a.field2,
        field3: a.field3,
        fieldDelimiter: a.fieldDelimiter,
        valueExpression: a.valueExpression,
        viewInfoParams: a.viewInfoParams,
        fieldInfos: a.fieldInfos,
      },
      u
    ),
    e = J(n);
  return K(e, a.domains, a.returnAllCodedValues, a.fieldDelimiter);
}
async function ca(i) {
  const { attribute: a, features: u } = i,
    {
      field: n,
      normalizationType: e,
      normalizationField: r,
      normalizationTotal: o,
      classificationMethod: t,
    } = a,
    l = await D(
      {
        field: n,
        valueExpression: a.valueExpression,
        normalizationType: e,
        normalizationField: r,
        normalizationTotal: o,
        viewInfoParams: a.viewInfoParams,
        fieldInfos: a.fieldInfos,
      },
      u
    ),
    m = L(l, {
      field: n,
      normalizationType: e,
      normalizationField: r,
      normalizationTotal: o,
      classificationMethod: t,
      standardDeviationInterval: a.standardDeviationInterval,
      numClasses: a.numClasses,
      minValue: a.minValue,
      maxValue: a.maxValue,
    });
  return Q(m, t);
}
async function pa(i) {
  const { attribute: a, features: u } = i,
    {
      field: n,
      normalizationType: e,
      normalizationField: r,
      normalizationTotal: o,
      classificationMethod: t,
    } = a,
    l = await D(
      {
        field: n,
        valueExpression: a.valueExpression,
        normalizationType: e,
        normalizationField: r,
        normalizationTotal: o,
        viewInfoParams: a.viewInfoParams,
        fieldInfos: a.fieldInfos,
      },
      u
    );
  return W(l, {
    field: n,
    normalizationType: e,
    normalizationField: r,
    normalizationTotal: o,
    classificationMethod: t,
    standardDeviationInterval: a.standardDeviationInterval,
    numBins: a.numBins,
    minValue: a.minValue,
    maxValue: a.maxValue,
  });
}
async function va(i) {
  const { attribute: a, features: u } = i,
    {
      field: n,
      radius: e,
      fieldOffset: r,
      transform: o,
      spatialReference: t,
      size: l,
    } = a,
    m = (function (F, v, f, s) {
      const I = S(f) ? $(f) : null,
        E = I ? Math.round((I.valid[1] - I.valid[0]) / v.scale[0]) : null;
      return F.map((M) => {
        const x = new R(q(M.geometry));
        return (
          H(v, x, x, x.hasZ, x.hasM),
          (M.geometry = I
            ? (function (z, y, V) {
                return z.x < 0 ? (z.x += y) : z.x > V && (z.x -= y), z;
              })(x, E, s[0])
            : x),
          M
        );
      });
    })(u, o, t, l),
    {
      count: d,
      min: c,
      max: p,
      mean: T,
      stdDev: w,
    } = X(m, e, r, n, l[0], l[1]);
  return { count: d, min: c, max: p, avg: T, stddev: w };
}
export {
  ca as classBreaks,
  va as heatmapStatistics,
  pa as histogram,
  fa as summaryStatistics,
  da as uniqueValues,
};
