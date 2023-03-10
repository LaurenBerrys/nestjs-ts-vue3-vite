import {
  ae as b,
  af as p,
  e0 as y,
  ag as k,
  dd as A,
  bO as F,
  r as v,
  t as f,
} from "./index.8fd7165c.js";
var N;
let h = (N = class extends A {
  constructor(e) {
    super(e),
      (this.variableName = null),
      (this.dimensionName = null),
      (this.values = []),
      (this.isSlice = !1);
  }
  clone() {
    return new N({
      variableName: this.variableName,
      dimensionName: this.dimensionName,
      values: F(this.values),
      isSlice: this.isSlice,
    });
  }
});
b(
  [p({ type: String, json: { write: !0 } })],
  h.prototype,
  "variableName",
  void 0
),
  b(
    [p({ type: String, json: { write: !0 } })],
    h.prototype,
    "dimensionName",
    void 0
  ),
  b(
    [
      p({
        type: y.array(y.oneOf([y.native(Number), y.array(y.native(Number))])),
        json: { write: !0 },
      }),
    ],
    h.prototype,
    "values",
    void 0
  ),
  b(
    [p({ type: Boolean, json: { write: !0 } })],
    h.prototype,
    "isSlice",
    void 0
  ),
  (h = N = b([k("esri.layers.support.DimensionalDefinition")], h));
const D = h;
function C(e, n, t) {
  var i;
  const m = n.shift();
  if (t.length === 0) {
    const r = [];
    t.push({ sliceId: -1, multidimensionalDefinition: r });
  }
  const a = t.length;
  for (let r = 0; r < a; r++) {
    const u = t.shift().multidimensionalDefinition;
    (i = m.values) == null ||
      i.forEach((l) => {
        t.push({
          sliceId: -1,
          multidimensionalDefinition: [
            ...u,
            { variableName: e, dimensionName: m.name, values: [l] },
          ],
        });
      });
  }
  n.length && C(e, n, t);
}
function L(e, n) {
  const t = [];
  let m = 0;
  return (
    (n
      ? e.variables.filter((a) => a.name.toLowerCase() === n.toLowerCase())
      : [...e.variables].sort((a, i) => (a.name > i.name ? 1 : -1))
    ).forEach((a) => {
      const i = [],
        r = [...a.dimensions].sort((u, l) => (u.name > l.name ? -1 : 1));
      C(a.name, r, i),
        i.forEach((u) => {
          t.push({ ...u, sliceId: m++ });
        });
    }),
    t
  );
}
function j(e, n, t) {
  let m = e;
  if (
    (n &&
      (n = [...n].sort((a, i) =>
        a.dimensionName < i.dimensionName ? -1 : 1
      )).forEach(({ dimensionName: a, values: i, isSlice: r }) => {
        i.length &&
          (m = m.filter((u) => {
            const l = u.multidimensionalDefinition.find(
              (s) => s.dimensionName === a
            );
            if (l == null) return !1;
            const o = l.values[0];
            return typeof o == "number"
              ? typeof i[0] == "number"
                ? i.includes(o)
                : i.some((s) => s[0] <= o && s[1] >= o)
              : typeof i[0] == "number"
              ? i.some((s) => o[0] <= s && o[1] >= s)
              : r
              ? i.some((s) => s[0] === o[0] && s[0] === o[1])
              : i.some(
                  (s) =>
                    (s[0] >= o[0] && s[0] <= o[1]) ||
                    (s[1] >= o[0] && s[1] <= o[1]) ||
                    (s[0] < o[0] && s[1] > o[1])
                );
          }));
      }),
    m.length && t && v(t.start) && v(t.end))
  ) {
    const a = t.start.getTime(),
      i = t.end.getTime(),
      r = m[0].multidimensionalDefinition.findIndex(
        (u) => u.dimensionName === "StdTime"
      );
    r > -1 &&
      (m = m.filter((u) => {
        const l = u.multidimensionalDefinition[r].values[0];
        return a <= l && i >= l;
      }));
  }
  return m.map((a) => a.sliceId);
}
function T(e, n) {
  return Array.isArray(e)
    ? n[0] === n[1]
      ? e[0] === n[0] || e[1] === n[0]
      : e[0] >= n[0] && e[0] <= n[1] && e[1] >= n[0] && e[1] <= n[1]
    : e >= n[0] && e <= n[1];
}
function O(e, n) {
  return (
    (e[0] <= n[0] && e[1] >= n[0]) ||
    (e[0] <= n[1] && e[1] >= n[1]) ||
    (e[0] >= n[0] && e[1] <= n[1])
  );
}
function S(e) {
  return e.length === 1 ? [e[0], e[0]] : [e[0], e[e.length - 1]];
}
function x(e, n, t) {
  var r, u, l;
  if (!((r = n == null ? void 0 : n.subsetDefinitions) != null && r.length))
    return e;
  let m;
  if (t) {
    const { variables: o } = n;
    if (o.length && !o.includes(t)) return null;
    const s = n.subsetDefinitions.find(
      (d) => d.dimensionName === e.name && d.variableName === t
    );
    if (!((u = s == null ? void 0 : s.values) != null && u.length)) return e;
    m = S(s.values);
  } else
    m =
      (l = n.dimensions.find(({ name: o }) => o === e.name)) == null
        ? void 0
        : l.extent;
  const a = m;
  if (!a || !(a != null && a.length)) return e;
  const i = e.values.filter((o) => T(o, a));
  return { ...e, extent: [...a], values: i };
}
function w(e, n, t) {
  var a;
  if (!((a = n == null ? void 0 : n.subsetDefinitions) != null && a.length))
    return !1;
  const { variables: m } = n;
  if (m.length && e.some(({ variableName: i }) => i && !m.includes(i)))
    return !0;
  for (let i = 0; i < e.length; i++) {
    const r = e[i],
      u = n.subsetDefinitions.find(
        (l) =>
          (r.variableName === "" || l.variableName === r.variableName) &&
          l.dimensionName === r.dimensionName
      );
    if (u != null && u.values.length) {
      const l = S(u.values);
      if (
        r.isSlice ||
        r.values.length !== 2 ||
        Array.isArray(r.values[0]) ||
        r.values[0] === r.values[1] ||
        !t
      ) {
        if (r.values.some((o) => !T(o, l))) return !0;
      } else if (!O(r.values, l)) return !0;
    }
  }
  return !1;
}
function R(e, n) {
  if (f(e)) return { isOutside: !1 };
  const { geometry: t, timeExtent: m, multidimensionalDefinition: a } = n;
  let i = null;
  if (
    v(m) &&
    ((i = (function (u, l) {
      const o = u.dimensions.find(({ name: g }) => g === "StdTime");
      if (o == null || (f(l.start) && f(l.end))) return l;
      l = l.clone();
      const { start: s, end: d } = l.toJSON(),
        c = s === d ? [s] : s != null && d != null ? [s, d] : [s ?? d];
      return (c.length === 2 &&
        o != null &&
        o.extent.length &&
        ((c[0] = Math.max(c[0], o.extent[0])),
        (c[1] = Math.min(c[1], o.extent[1] ?? o.extent[0])),
        c[1] < c[0])) ||
        w(
          [
            new D({
              variableName: "",
              dimensionName: "StdTime",
              isSlice: c.length === 1,
              values: c,
            }),
          ],
          u,
          !0
        )
        ? null
        : ((l.start = new Date(c[0])), (l.end = new Date(c[1] ?? c[0])), l);
    })(e, m)),
    f(i))
  )
    return { isOutside: !0 };
  const { areaOfInterest: r } = e;
  if (r && t) {
    const u =
      t.type === "point"
        ? t
        : t.type === "extent"
        ? t.center
        : t.type === "polygon"
        ? t.centroid
        : null;
    if (u && !r.contains(u)) return { isOutside: !0 };
  }
  return v(a) && a.length && w(a, e, !0)
    ? { isOutside: !0 }
    : {
        isOutside: !1,
        intersection: {
          geometry: t,
          timeExtent: i,
          multidimensionalDefinition: a,
        },
      };
}
function Y(e, n = {}) {
  var s, d;
  const { multidimensionalInfo: t, keyProperties: m } = e;
  if (f(t)) return null;
  const {
      variableName: a,
      multidimensionalSubset: i,
      multidimensionalDefinition: r,
    } = n,
    u = v(r) ? ((s = r[0]) == null ? void 0 : s.variableName) : null,
    l = a || u || (m == null ? void 0 : m.DefaultVariable);
  let { variables: o } = t;
  return (
    (d = i == null ? void 0 : i.variables) != null &&
      d.length &&
      (o = o.filter(({ name: c }) => i.variables.includes(c))),
    l ? o.find(({ name: c }) => c === l) ?? o[0] : o[0]
  );
}
function z(e, n = {}) {
  const t = Y(e, n);
  if (!t) return null;
  const m = [],
    { dimensions: a, name: i } = t;
  if (a.length === 0)
    return [
      new D({ variableName: i, dimensionName: "", values: [], isSlice: !0 }),
    ];
  for (let r = 0; r < a.length; r++) {
    const u = x(a[r], n.multidimensionalSubset, i);
    if (!u) return null;
    const { values: l, extent: o } = u;
    let s = (l == null ? void 0 : l[0]) ?? o[0];
    u.name.toLowerCase() === "stdz" &&
      !u.hasRanges &&
      Math.abs(o[1]) <= Math.abs(o[0]) &&
      (s = l != null && l.length ? l[l.length - 1] : o[1]),
      m.push(
        new D({
          variableName: i,
          dimensionName: u.name,
          values: [s],
          isSlice: !n.useRangeForRangedDimensionInfo || !!u.hasRanges,
        })
      );
  }
  return m;
}
function B(e) {
  return (
    !(f(e) || !e.length) &&
    e.some((n) => {
      if (n.values == null) return !0;
      const t = n.values.length;
      return t === 0 || t > 1 || (!n.isSlice && Array.isArray(n.values[0]));
    })
  );
}
function J(e, n) {
  var m;
  if (f(n) || f(e)) return null;
  let t = n.variables.map((a) => ({ ...a }));
  return (
    (m = e == null ? void 0 : e.variables) != null &&
      m.length &&
      ((t = t.filter(({ name: a }) => e.variables.includes(a))),
      t.forEach((a) => {
        a.dimensions = a.dimensions.map((i) => x(i, e, a.name)).filter(v);
      })),
    t
  );
}
function I(e, n) {
  var u;
  const { values: t } = n;
  if (t != null && t.length)
    return Array.isArray(t[0]) !== Array.isArray(e)
      ? -1
      : Array.isArray(t[0])
      ? t.findIndex((l) => l[0] === e[0] && l[1] === e[1])
      : t.indexOf(e);
  const { extent: m } = n;
  if (Array.isArray(e) || e < m[0] || e > m[1]) return -1;
  const a = n.interval || 1;
  if (n.unit !== "ISO8601") return Math.round((e - m[0]) / a);
  const i = m[0];
  let r = -1;
  switch (
    ((u = n.intervalUnit) == null ? void 0 : u.toLowerCase()) ||
    "seconds"
  ) {
    case "seconds":
      r = Math.round((e - i) / 1e3 / a);
      break;
    case "minutes":
      r = Math.round((e - i) / 6e4 / a);
      break;
    case "hours":
      r = Math.round((e - i) / 36e5 / a);
      break;
    case "days":
      r = Math.round((e - i) / 864e5 / a);
      break;
    case "months":
      {
        const l = new Date(e).getUTCFullYear() - new Date(i).getUTCFullYear(),
          o = new Date(i).getUTCMonth(),
          s = new Date(e).getUTCMonth();
        r = l === 0 ? s - o : s + 11 - o + 12 * (l - 1);
      }
      break;
    case "years":
      r = Math.round(
        (new Date(e).getUTCFullYear() - new Date(i).getUTCFullYear()) / a
      );
      break;
    case "decades":
      r = Math.round(
        (new Date(e).getUTCFullYear() - new Date(i).getUTCFullYear()) / 10 / a
      );
  }
  return r;
}
function M(e) {
  var r, u;
  let n = (r = e.values) == null ? void 0 : r.length;
  if (n) return n;
  const { extent: t, unit: m } = e,
    a = e.interval || 1,
    i = t ? t[1] - t[0] : 0;
  if (m !== "ISO8601") return Math.round(i / a);
  switch (
    ((u = e.intervalUnit) == null ? void 0 : u.toLowerCase()) ??
    "seconds"
  ) {
    case "seconds":
      n = Math.round(i / 1e3 / a);
      break;
    case "minutes":
      n = Math.round(i / 6e4 / a);
      break;
    case "hours":
      n = Math.round(i / 36e5 / a);
      break;
    case "days":
      n = Math.round(i / 864e5 / a);
      break;
    case "months":
      {
        const l =
            new Date(t[1]).getUTCFullYear() - new Date(t[0]).getUTCFullYear(),
          o = new Date(t[1][0]).getUTCMonth(),
          s = new Date(t[1][1]).getUTCMonth();
        n = l === 0 ? s - o + 1 : s + 11 - o + 12 * (l - 1) + 1;
      }
      break;
    case "years":
      n = Math.round(
        (new Date(t[1]).getUTCFullYear() - new Date(t[0]).getUTCFullYear()) / a
      );
      break;
    case "decades":
      n = Math.round(
        (new Date(t[1]).getUTCFullYear() - new Date(t[0]).getUTCFullYear()) /
          10 /
          a
      );
      break;
    default:
      n = 0;
  }
  return n;
}
function P(e, n) {
  let t = 0;
  const m = e[0].variableName,
    a = [...n.variables].sort((i, r) => (i.name > r.name ? 1 : -1));
  for (let i = 0; i < a.length; i++) {
    const r = a[i],
      u = [...r.dimensions].sort((s, d) => (s.name > d.name ? -1 : 1));
    if (r.name !== m) {
      t += u.map((s) => M(s)).reduce((s, d) => s * d);
      continue;
    }
    const l = u.map((s) => M(s)),
      o = u.length;
    for (let s = 0; s < o; s++) {
      const d = e.find((g) => g.dimensionName === u[s].name);
      if (d == null) return null;
      const c = I(d.values[0], u[s]);
      if (c === -1) return null;
      l.shift(), (t += s === o - 1 ? c : c * l.reduce((g, U) => g * U));
    }
    break;
  }
  return t;
}
export {
  L as a,
  R as c,
  Y as d,
  B as g,
  z as h,
  w as m,
  D as p,
  j as s,
  J as v,
  P as y,
};
