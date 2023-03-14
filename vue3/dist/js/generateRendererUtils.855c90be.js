import {
  d0 as B,
  ae as q,
  ei as N,
  af as w,
  ag as j,
  dd as D,
  Q as T,
} from "./index.8fd7165c.js";
const I = new B({
    esriClassifyEqualInterval: "equal-interval",
    esriClassifyManual: "manual",
    esriClassifyNaturalBreaks: "natural-breaks",
    esriClassifyQuantile: "quantile",
    esriClassifyStandardDeviation: "standard-deviation",
    esriClassifyDefinedInterval: "defined-interval",
  }),
  S = new B({
    esriNormalizeByLog: "log",
    esriNormalizeByPercentOfTotal: "percent-of-total",
    esriNormalizeByField: "field",
  });
let x = class extends D {
  constructor(i) {
    super(i),
      (this.type = "class-breaks-definition"),
      (this.breakCount = null),
      (this.classificationField = null),
      (this.classificationMethod = null),
      (this.normalizationField = null),
      (this.normalizationType = null);
  }
  set standardDeviationInterval(i) {
    this.classificationMethod === "standard-deviation" &&
      this._set("standardDeviationInterval", i);
  }
  set definedInterval(i) {
    this.classificationMethod === "defined-interval" &&
      this._set("definedInterval", i);
  }
};
q(
  [N({ classBreaksDef: "class-breaks-definition" })],
  x.prototype,
  "type",
  void 0
),
  q([w({ json: { write: !0 } })], x.prototype, "breakCount", void 0),
  q([w({ json: { write: !0 } })], x.prototype, "classificationField", void 0),
  q(
    [w({ type: String, json: { read: I.read, write: I.write } })],
    x.prototype,
    "classificationMethod",
    void 0
  ),
  q([w({ json: { write: !0 } })], x.prototype, "normalizationField", void 0),
  q(
    [w({ json: { read: S.read, write: S.write } })],
    x.prototype,
    "normalizationType",
    void 0
  ),
  q(
    [w({ value: null, json: { write: !0 } })],
    x.prototype,
    "standardDeviationInterval",
    null
  ),
  q(
    [w({ value: null, json: { write: !0 } })],
    x.prototype,
    "definedInterval",
    null
  ),
  (x = q([j("esri.rest.support.ClassBreaksDefinition")], x));
const U = x,
  E = T.getLogger("esri.rest.support.generateRendererUtils");
function z(i, m) {
  return Number(i.toFixed(m));
}
function A(i) {
  const { normalizationTotal: m } = i;
  return { classBreaks: L(i), normalizationTotal: m };
}
function L(i) {
  const m = i.definition,
    { classificationMethod: p, normalizationType: u, definedInterval: v } = m,
    h = m.breakCount ?? 1,
    f = [];
  let n = i.values;
  if (n.length === 0) return [];
  n = n.sort((a, o) => a - o);
  const l = n[0],
    d = n[n.length - 1];
  if (p === "equal-interval")
    if (n.length >= h) {
      const a = (d - l) / h;
      let o = l;
      for (let r = 1; r < h; r++) {
        const e = z(l + r * a, 6);
        f.push({ minValue: o, maxValue: e, label: V(o, e, u) }), (o = e);
      }
      f.push({ minValue: o, maxValue: d, label: V(o, d, u) });
    } else
      n.forEach((a) => {
        f.push({ minValue: a, maxValue: a, label: V(a, a, u) });
      });
  else if (p === "natural-breaks") {
    const a = (function (t) {
        const c = [],
          b = [];
        let g = Number.MIN_VALUE,
          s = 1,
          y = -1;
        for (let M = 0; M < t.length; M++) {
          const k = t[M];
          k === g
            ? (s++, (b[y] = s))
            : k !== null && (c.push(k), (g = k), (s = 1), b.push(s), y++);
        }
        return { uniqueValues: c, valueFrequency: b };
      })(n),
      o = i.valueFrequency || a.valueFrequency,
      r = _(a.uniqueValues, o, h);
    let e = l;
    for (let t = 1; t < h; t++)
      if (a.uniqueValues.length > t) {
        const c = z(a.uniqueValues[r[t]], 6);
        f.push({ minValue: e, maxValue: c, label: V(e, c, u) }), (e = c);
      }
    f.push({ minValue: e, maxValue: d, label: V(e, d, u) });
  } else if (p === "quantile")
    if (n.length >= h && l !== d) {
      let a = l,
        o = Math.ceil(n.length / h),
        r = 0;
      for (let e = 1; e < h; e++) {
        let t = o + r - 1;
        t > n.length && (t = n.length - 1),
          t < 0 && (t = 0),
          f.push({ minValue: a, maxValue: n[t], label: V(a, n[t], u) }),
          (a = n[t]),
          (r += o),
          (o = Math.ceil((n.length - r) / (h - e)));
      }
      f.push({ minValue: a, maxValue: d, label: V(a, d, u) });
    } else {
      let a = -1;
      for (let o = 0; o < n.length; o++) {
        const r = n[o];
        r !== a &&
          ((a = r),
          f.push({ minValue: a, maxValue: r, label: V(a, r, u) }),
          (a = r));
      }
    }
  else if (p === "standard-deviation") {
    const a = (function (r) {
        let e = 0;
        for (let t = 0; t < r.length; t++) e += r[t];
        return (e /= r.length), e;
      })(n),
      o = (function (r, e) {
        let t = 0;
        for (let c = 0; c < r.length; c++) {
          const b = r[c];
          t += (b - e) * (b - e);
        }
        return (t /= r.length), Math.sqrt(t);
      })(n, a);
    if (o === 0)
      f.push({ minValue: n[0], maxValue: n[0], label: V(n[0], n[0], u) });
    else {
      const r =
        (function (b, g, s, y, M) {
          let k = Math.max(y - b, g - y) / M / s;
          return (k = k >= 1 ? 1 : k >= 0.5 ? 0.5 : 0.25), k;
        })(l, d, h, a, o) * o;
      let e = 0,
        t = l;
      for (let b = h; b >= 1; b--) {
        const g = z(a - (b - 0.5) * r, 6);
        f.push({ minValue: t, maxValue: g, label: V(t, g, u) }), (t = g), e++;
      }
      let c = z(a + 0.5 * r, 6);
      f.push({ minValue: t, maxValue: c, label: V(t, c, u) }), (t = c), e++;
      for (let b = 1; b <= h; b++)
        (c = e === 2 * h ? d : z(a + (b + 0.5) * r, 6)),
          f.push({ minValue: t, maxValue: c, label: V(t, c, u) }),
          (t = c),
          e++;
    }
  } else if (p === "defined-interval") {
    if (!v) return f;
    const a = n[0],
      o = n[n.length - 1],
      r = Math.ceil((o - a) / v);
    let e = a;
    for (let t = 1; t < r; t++) {
      const c = z(a + t * v, 6);
      f.push({ minValue: e, maxValue: c, label: V(e, c, u) }), (e = c);
    }
    f.push({ minValue: e, maxValue: o, label: V(e, o, u) });
  }
  return f;
}
function V(i, m, p) {
  let u = null;
  return (
    (u =
      i === m
        ? p && p === "percent-of-total"
          ? i + "%"
          : i.toString()
        : p && p === "percent-of-total"
        ? i + "% - " + m + "%"
        : i + " - " + m),
    u
  );
}
function _(i, m, p) {
  const u = i.length,
    v = [];
  p > u && (p = u);
  for (let f = 0; f < p; f++) v.push(Math.round((f * u) / p - 1));
  v.push(u - 1);
  let h = F(v, i, m, p);
  return (
    (function (f, n, l, d, a, o) {
      let r = 0,
        e = 0,
        t = 0,
        c = 0,
        b = !0;
      for (let g = 0; g < 2 && b; g++) {
        g === 0 && (b = !1);
        for (let s = 0; s < o - 1; s++)
          for (; l[s + 1] + 1 !== l[s + 2]; ) {
            l[s + 1] = l[s + 1] + 1;
            const y = C(s, l, d, a);
            (t = y.sbMean), (r = y.sbSdcm);
            const M = C(s + 1, l, d, a);
            if (((c = M.sbMean), (e = M.sbSdcm), !(r + e < n[s] + n[s + 1]))) {
              l[s + 1] = l[s + 1] - 1;
              break;
            }
            (n[s] = r), (n[s + 1] = e), (f[s] = t), (f[s + 1] = c), (b = !0);
          }
        for (let s = o - 1; s > 0; s--)
          for (; l[s] !== l[s - 1] + 1; ) {
            l[s] = l[s] - 1;
            const y = C(s - 1, l, d, a);
            (t = y.sbMean), (r = y.sbSdcm);
            const M = C(s, l, d, a);
            if (((c = M.sbMean), (e = M.sbSdcm), !(r + e < n[s - 1] + n[s]))) {
              l[s] = l[s] + 1;
              break;
            }
            (n[s - 1] = r), (n[s] = e), (f[s - 1] = t), (f[s] = c), (b = !0);
          }
      }
      return b;
    })(h.mean, h.sdcm, v, i, m, p) && (h = F(v, i, m, p)),
    v
  );
}
function F(i, m, p, u) {
  let v = [],
    h = [],
    f = [],
    n = 0;
  const l = [],
    d = [];
  for (let e = 0; e < u; e++) {
    const t = C(e, i, m, p);
    l.push(t.sbMean), d.push(t.sbSdcm), (n += d[e]);
  }
  let a,
    o = n,
    r = !0;
  for (; r || n < o; ) {
    (r = !1), (v = []);
    for (let e = 0; e < u; e++) v.push(i[e]);
    for (let e = 0; e < u; e++)
      for (let t = i[e] + 1; t <= i[e + 1]; t++)
        if (
          ((a = m[t]),
          e > 0 &&
            t !== i[e + 1] &&
            Math.abs(a - l[e]) > Math.abs(a - l[e - 1]))
        )
          i[e] = t;
        else if (
          e < u - 1 &&
          i[e] !== t - 1 &&
          Math.abs(a - l[e]) > Math.abs(a - l[e + 1])
        ) {
          i[e + 1] = t - 1;
          break;
        }
    (o = n), (n = 0), (h = []), (f = []);
    for (let e = 0; e < u; e++) {
      h.push(l[e]), f.push(d[e]);
      const t = C(e, i, m, p);
      (l[e] = t.sbMean), (d[e] = t.sbSdcm), (n += d[e]);
    }
  }
  if (n > o) {
    for (let e = 0; e < u; e++) (i[e] = v[e]), (l[e] = h[e]), (d[e] = f[e]);
    n = o;
  }
  return { mean: l, sdcm: d };
}
function C(i, m, p, u) {
  let v = 0,
    h = 0;
  for (let l = m[i] + 1; l <= m[i + 1]; l++) {
    const d = u[l];
    (v += p[l] * d), (h += d);
  }
  h <= 0 && E.warn("Exception in Natural Breaks calculation");
  const f = v / h;
  let n = 0;
  for (let l = m[i] + 1; l <= m[i + 1]; l++) n += u[l] * (p[l] - f) ** 2;
  return { sbMean: f, sbSdcm: n };
}
export { A as a, U as d };
