import { a as M, d as C } from "./generateRendererUtils.855c90be.js";
const k = "<Null>",
  $ = "equal-interval",
  w = 1,
  E = 5,
  q = 10,
  G = /\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,
  D = new Set([
    "esriFieldTypeInteger",
    "esriFieldTypeSmallInteger",
    "esriFieldTypeSingle",
    "esriFieldTypeDouble",
  ]),
  P = [
    "min",
    "max",
    "avg",
    "stddev",
    "count",
    "sum",
    "variance",
    "nullcount",
    "median",
  ];
function h(t) {
  return t == null || (typeof t == "string" && !t) ? k : t;
}
function U(t) {
  const e = t.normalizationField != null || t.normalizationType != null,
    l = t.minValue != null || t.maxValue != null,
    n = !!t.sqlExpression && t.supportsSQLExpression;
  return !e && !l && !n;
}
function j(t) {
  const e = t.returnDistinct ? [...new Set(t.values)] : t.values,
    l = e.filter((o) => o != null).length,
    n = { count: l };
  return (
    t.supportsNullCount && (n.nullcount = e.length - l),
    t.percentileParams && (n.median = N(e, t.percentileParams)),
    n
  );
}
function B(t) {
  const { values: e, useSampleStdDev: l, supportsNullCount: n } = t;
  let o = Number.POSITIVE_INFINITY,
    r = Number.NEGATIVE_INFINITY,
    i = null,
    u = null,
    a = null,
    f = null,
    s = 0;
  const d = t.minValue == null ? -1 / 0 : t.minValue,
    m = t.maxValue == null ? 1 / 0 : t.maxValue;
  for (const c of e)
    Number.isFinite(c)
      ? c >= d &&
        c <= m &&
        ((i = i === null ? c : i + c),
        (o = Math.min(o, c)),
        (r = Math.max(r, c)),
        s++)
      : typeof c == "string" && s++;
  if (s && i != null) {
    u = i / s;
    let c = 0;
    for (const v of e)
      Number.isFinite(v) && v >= d && v <= m && (c += (v - u) ** 2);
    (f = l ? (s > 1 ? c / (s - 1) : 0) : s > 0 ? c / s : 0), (a = Math.sqrt(f));
  } else (o = null), (r = null);
  const p = {
    avg: u,
    count: s,
    max: r,
    min: o,
    stddev: a,
    sum: i,
    variance: f,
  };
  return (
    n && (p.nullcount = e.length - s),
    t.percentileParams && (p.median = N(e, t.percentileParams)),
    p
  );
}
function N(t, e) {
  const { fieldType: l, value: n, orderBy: o, isDiscrete: r } = e,
    i = O(l, o === "desc");
  if (
    (t = [...t].filter((p) => p != null).sort((p, c) => i(p, c))).length === 0
  )
    return null;
  if (n <= 0) return t[0];
  if (n >= 1) return t[t.length - 1];
  const u = (t.length - 1) * n,
    a = Math.floor(u),
    f = a + 1,
    s = u % 1,
    d = t[a],
    m = t[f];
  return f >= t.length || r || typeof d == "string" || typeof m == "string"
    ? d
    : d * (1 - s) + m * s;
}
function O(t, e) {
  const l = e ? 1 : -1,
    n = (function (r) {
      return r
        ? (i, u) => {
            const a = T(i, u, !0);
            return a ?? u - i;
          }
        : (i, u) => {
            const a = T(i, u, !1);
            return a ?? i - u;
          };
    })(e),
    o = z(e);
  if (
    !t ||
    ![
      "esriFieldTypeDate",
      "esriFieldTypeString",
      "esriFieldTypeGUID",
      "esriFieldTypeGlobalID",
      ...D,
    ].includes(t)
  )
    return (r, i) =>
      typeof r == "number" && typeof i == "number"
        ? n(r, i)
        : typeof r == "string" && typeof i == "string"
        ? o(r, i)
        : l;
  if (t === "esriFieldTypeDate")
    return (r, i) => {
      const u = new Date(r).getTime(),
        a = new Date(i).getTime();
      return isNaN(u) || isNaN(a) ? l : n(u, a);
    };
  if (D.has(t)) return (r, i) => n(r, i);
  if (t === "esriFieldTypeString") return (r, i) => o(r, i);
  if (t === "esriFieldTypeGUID" || t === "esriFieldTypeGlobalID") {
    const r = z(e);
    return (i, u) => r(I(i), I(u));
  }
  return e ? (r, i) => 1 : (r, i) => -1;
}
function T(t, e, l) {
  if (l) {
    if (t == null) return e == null ? 0 : 1;
    if (e == null) return -1;
  } else {
    if (t == null) return e == null ? 0 : -1;
    if (e == null) return 1;
  }
  return null;
}
function z(t) {
  return t
    ? (e, l) => {
        const n = T(e, l, !0);
        return (
          n ??
          ((e = e.toUpperCase()) > (l = l.toUpperCase()) ? -1 : e < l ? 1 : 0)
        );
      }
    : (e, l) => {
        const n = T(e, l, !1);
        return (
          n ??
          ((e = e.toUpperCase()) < (l = l.toUpperCase()) ? -1 : e > l ? 1 : 0)
        );
      };
}
function I(t) {
  return (
    t.substr(24, 12) +
    t.substr(19, 4) +
    t.substr(16, 2) +
    t.substr(14, 2) +
    t.substr(11, 2) +
    t.substr(9, 2) +
    t.substr(6, 2) +
    t.substr(4, 2) +
    t.substr(2, 2) +
    t.substr(0, 2)
  );
}
function H(t, e) {
  let l;
  for (l in t) P.includes(l) && (Number.isFinite(t[l]) || (t[l] = null));
  return (
    e &&
      ["avg", "stddev", "variance"].forEach((n) => {
        t[n] != null && (t[n] = Math.ceil(t[n]));
      }),
    t
  );
}
function J(t) {
  const e = {};
  for (let l of t)
    (l == null || (typeof l == "string" && l.trim() === "")) && (l = null),
      e[l] == null ? (e[l] = { count: 1, data: l }) : e[l].count++;
  return { count: e };
}
function x(t) {
  return (t == null ? void 0 : t.type) !== "coded-value"
    ? []
    : t.codedValues.map((e) => e.code);
}
function K(t, e, l, n) {
  const o = t.count,
    r = [];
  if (l && e) {
    const i = [],
      u = x(e[0]);
    for (const a of u)
      if (e[1]) {
        const f = x(e[1]);
        for (const s of f)
          if (e[2]) {
            const d = x(e[2]);
            for (const m of d) i.push(`${h(a)}${n}${h(s)}${n}${h(m)}`);
          } else i.push(`${h(a)}${n}${h(s)}`);
      } else i.push(a);
    for (const a of i) o.hasOwnProperty(a) || (o[a] = { data: a, count: 0 });
  }
  for (const i in o) {
    const u = o[i];
    r.push({ value: u.data, count: u.count, label: u.label });
  }
  return { uniqueValueInfos: r };
}
function R(t, e, l, n) {
  let o = null;
  switch (e) {
    case "log":
      t !== 0 && (o = Math.log(t) * Math.LOG10E);
      break;
    case "percent-of-total":
      Number.isFinite(n) && n !== 0 && (o = (t / n) * 100);
      break;
    case "field":
      Number.isFinite(l) && l !== 0 && (o = t / l);
      break;
    case "natural-log":
      t > 0 && (o = Math.log(t));
      break;
    case "square-root":
      t > 0 && (o = t ** 0.5);
  }
  return o;
}
function A(t, e) {
  const l = L({
    field: e.field,
    normalizationType: e.normalizationType,
    normalizationField: e.normalizationField,
    classificationMethod: e.classificationMethod,
    standardDeviationInterval: e.standardDeviationInterval,
    breakCount: e.numClasses || E,
  });
  return (
    (t = (function (n, o, r) {
      const i = o ?? -1 / 0,
        u = r ?? 1 / 0;
      return n.filter((a) => Number.isFinite(a) && a >= i && a <= u);
    })(t, e.minValue, e.maxValue)),
    M({ definition: l, values: t, normalizationTotal: e.normalizationTotal })
  );
}
function L(t) {
  const {
      breakCount: e,
      field: l,
      normalizationField: n,
      normalizationType: o,
    } = t,
    r = t.classificationMethod || $,
    i = r === "standard-deviation" ? t.standardDeviationInterval || w : void 0;
  return new C({
    breakCount: e,
    classificationField: l,
    classificationMethod: r,
    normalizationField: o === "field" ? n : void 0,
    normalizationType: o,
    standardDeviationInterval: i,
  });
}
function W(t, e) {
  let l = t.classBreaks;
  const n = l.length,
    o = l[0].minValue,
    r = l[n - 1].maxValue,
    i = e === "standard-deviation",
    u = G;
  return (
    (l = l.map((a) => {
      var d;
      const f = a.label,
        s = { minValue: a.minValue, maxValue: a.maxValue, label: f };
      if (i && f) {
        const m =
          ((d = f.match(u)) == null ? void 0 : d.map((p) => +p.trim())) ?? [];
        m.length === 2
          ? ((s.minStdDev = m[0]),
            (s.maxStdDev = m[1]),
            m[0] < 0 && m[1] > 0 && (s.hasAvg = !0))
          : m.length === 1 &&
            (f.includes("<")
              ? ((s.minStdDev = null), (s.maxStdDev = m[0]))
              : f.includes(">") &&
                ((s.minStdDev = m[0]), (s.maxStdDev = null)));
      }
      return s;
    })),
    {
      minValue: o,
      maxValue: r,
      classBreakInfos: l,
      normalizationTotal: t.normalizationTotal,
    }
  );
}
function X(t, e) {
  const l = Y(t, e),
    n = l.intervals,
    o = l.min ?? 0,
    r = l.max ?? 0,
    i = n.map((u, a) => ({ minValue: n[a][0], maxValue: n[a][1], count: 0 }));
  for (const u of t)
    if (u != null && u >= o && u <= r) {
      const a = _(n, u);
      a > -1 && i[a].count++;
    }
  return {
    bins: i,
    minValue: o,
    maxValue: r,
    normalizationTotal: e.normalizationTotal,
  };
}
function Y(t, e) {
  const {
      field: l,
      classificationMethod: n,
      standardDeviationInterval: o,
      normalizationType: r,
      normalizationField: i,
      normalizationTotal: u,
      minValue: a,
      maxValue: f,
    } = e,
    s = e.numBins || q;
  let d = null,
    m = null,
    p = null;
  if ((n && n !== "equal-interval") || r) {
    const { classBreaks: c } = A(t, {
      field: l,
      normalizationType: r,
      normalizationField: i,
      normalizationTotal: u,
      classificationMethod: n,
      standardDeviationInterval: o,
      minValue: a,
      maxValue: f,
      numClasses: s,
    });
    (d = c[0].minValue),
      (m = c[c.length - 1].maxValue),
      (p = c.map((v) => [v.minValue, v.maxValue]));
  } else {
    if (a != null && f != null) (d = a), (m = f);
    else {
      const c = B({
        values: t,
        minValue: a,
        maxValue: f,
        useSampleStdDev: !r,
        supportsNullCount: U({
          normalizationType: r,
          normalizationField: i,
          minValue: a,
          maxValue: f,
        }),
      });
      (d = c.min ?? null), (m = c.max ?? null);
    }
    p = (function (c, v, V) {
      const S = (v - c) / V,
        F = [];
      let b,
        g = c;
      for (let y = 1; y <= V; y++)
        (b = g + S),
          (b = Number(b.toFixed(16))),
          F.push([g, y === V ? v : b]),
          (g = b);
      return F;
    })(d ?? 0, m ?? 0, s);
  }
  return { min: d, max: m, intervals: p };
}
function _(t, e) {
  let l = -1;
  for (let n = t.length - 1; n >= 0; n--)
    if (e >= t[n][0]) {
      l = n;
      break;
    }
  return l;
}
export {
  R as D,
  X as M,
  W as S,
  H as T,
  h as c,
  B as d,
  j as f,
  U as m,
  N as p,
  O as v,
  K as x,
  J as y,
  A as z,
};
