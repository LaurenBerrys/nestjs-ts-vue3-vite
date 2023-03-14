import { t as d, cr as f, u as h } from "./index.8fd7165c.js";
import { L as r, g as z } from "./color.4c5303e9.js";
import { u as g } from "./definitions.ce677f69.js";
import { l as S } from "./visualVariablesUtils.de38be9a.js";
const E = 8388607,
  v = 8388608,
  w = 0,
  m = 1,
  y = (s) => (s & v) >>> 23,
  A = (s) => s & E,
  D = (s) => (y(s) === m ? 254 : 255);
function F(s) {
  return y(s) === m;
}
function L(s, t) {
  return ((t ? v : 0) | s) >>> 0;
}
const U = (s, t) => (s && ((...e) => t.warn("DEBUG:", ...e))) || (() => null),
  R = !1;
function T(s, t) {
  if (!s || !t) return s;
  switch (t) {
    case "radius":
    case "distance":
      return 2 * s;
    case "diameter":
    case "width":
      return s;
    case "area":
      return Math.sqrt(s);
  }
  return s;
}
function a(s) {
  return (s ?? []).map((t) =>
    (function (e) {
      return { value: e.value, size: f(e.size) };
    })(t)
  );
}
function u(s) {
  if (typeof s == "string" || typeof s == "number") return f(s);
  const t = s;
  return { type: "size", expression: t.expression, stops: a(t.stops) };
}
const c = (s) => {
  const t = [],
    e = [],
    n = a(s),
    o = n.length;
  for (let i = 0; i < 6; i++) {
    const l = n[Math.min(i, o - 1)];
    t.push(l.value), e.push(l.size == null ? g : h(l.size));
  }
  return { values: new Float32Array(t), sizes: new Float32Array(e) };
};
function Z(s) {
  const t = s && s.length > 0 ? {} : null,
    e = t ? {} : null;
  if (!t || !e) return { vvFields: t, vvRanges: e };
  for (const n of s)
    if ((n.field && (t[n.type] = n.field), n.type === "size")) {
      e.size || (e.size = {});
      const o = n;
      switch (S(o)) {
        case r.SIZE_MINMAX_VALUE:
          e.size.minMaxValue = {
            minDataValue: o.minDataValue,
            maxDataValue: o.maxDataValue,
            minSize: u(o.minSize),
            maxSize: u(o.maxSize),
          };
          break;
        case r.SIZE_SCALE_STOPS:
          e.size.scaleStops = { stops: a(o.stops) };
          break;
        case r.SIZE_FIELD_STOPS:
          if (o.levels) {
            const i = {};
            for (const l in o.levels) i[l] = c(o.levels[l]);
            e.size.fieldStops = { type: "level-dependent", levels: i };
          } else e.size.fieldStops = { type: "static", ...c(o.stops) };
          break;
        case r.SIZE_UNIT_VALUE:
          e.size.unitValue = {
            unit: o.valueUnit,
            valueRepresentation: o.valueRepresentation ?? void 0,
          };
      }
    } else if (n.type === "color") e.color = V(n);
    else if (n.type === "opacity") e.opacity = x(n);
    else if (n.type === "rotation") {
      const o = n;
      e.rotation = { type: o.rotationType };
    }
  return { vvFields: t, vvRanges: e };
}
function x(s) {
  const t = {
    values: [0, 0, 0, 0, 0, 0, 0, 0],
    opacities: [0, 0, 0, 0, 0, 0, 0, 0],
  };
  if (typeof s.field == "string") {
    if (!s.stops) return null;
    {
      if (s.stops.length > 8) return null;
      const e = s.stops;
      for (let n = 0; n < 8; ++n) {
        const o = e[Math.min(n, e.length - 1)];
        (t.values[n] = o.value), (t.opacities[n] = o.opacity);
      }
    }
  } else {
    if (!(s.stops && s.stops.length >= 0)) return null;
    {
      const e = s.stops && s.stops.length >= 0 ? s.stops[0].opacity : 0;
      for (let n = 0; n < 8; n++) (t.values[n] = 1 / 0), (t.opacities[n] = e);
    }
  }
  return t;
}
function p(s, t, e) {
  (s[4 * t + 0] = e.r / 255),
    (s[4 * t + 1] = e.g / 255),
    (s[4 * t + 2] = e.b / 255),
    (s[4 * t + 3] = e.a);
}
function V(s) {
  if (d(s) || s.normalizationField) return null;
  const t = {
    field: null,
    values: [0, 0, 0, 0, 0, 0, 0, 0],
    colors: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
    ],
  };
  if (typeof s.field == "string") {
    if (!s.stops) return null;
    {
      if (s.stops.length > 8) return null;
      t.field = s.field;
      const e = s.stops;
      for (let n = 0; n < 8; ++n) {
        const o = e[Math.min(n, e.length - 1)];
        (t.values[n] = o.value), p(t.colors, n, o.color);
      }
    }
  } else {
    if (!(s.stops && s.stops.length >= 0)) return null;
    {
      const e = s.stops && s.stops.length >= 0 && s.stops[0].color;
      for (let n = 0; n < 8; n++) (t.values[n] = 1 / 0), p(t.colors, n, e);
    }
  }
  for (let e = 0; e < 32; e += 4) z(t.colors, e, !0);
  return t;
}
export {
  E as a,
  Z as b,
  m as c,
  y as e,
  A as f,
  D as i,
  R as l,
  U as n,
  F as p,
  T as r,
  L as s,
  w as u,
};
