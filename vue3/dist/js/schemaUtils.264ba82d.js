import {
  Q as fe,
  w as q,
  aC as Q,
  s as T,
  cr as ne,
  r as V,
  W as ve,
  q as $,
  cH as Te,
  u as le,
  cI as de,
  t as Se,
  cJ as Fe,
  cK as we,
} from "./index.8fd7165c.js";
import { L as _, E as O, S as F, V as Ve } from "./color.4c5303e9.js";
import { c as Ee } from "./utils.1f803f1b.js";
import { l as Ie } from "./visualVariablesUtils.de38be9a.js";
import { f as L, _ as ae, A as ze } from "./MaterialKey.97cb3dc8.js";
import "./ExpandedCIM.e22c8b13.js";
import { e as ye } from "./util.79a0d0b9.js";
function me(e) {
  if (!e) return _.NONE;
  let i = 0;
  for (const s of e)
    if (s.type === "size") {
      const t = Ie(s);
      (i |= t), s.target === "outline" && (i |= t << 4);
    } else
      s.type === "color"
        ? (i |= _.COLOR)
        : s.type === "opacity"
        ? (i |= _.OPACITY)
        : s.type === "rotation" && (i |= _.ROTATION);
  return i;
}
function M(e) {
  var i;
  return e.type === "line-marker"
    ? {
        type: "line-marker",
        color: (i = e.color) == null ? void 0 : i.toJSON(),
        placement: e.placement,
        style: e.style,
      }
    : e.constructor.fromJSON(e.toJSON()).toJSON();
}
function N(e) {
  return ze(e);
}
function w(e, i, s = !1) {
  if (!e) return null;
  switch (e.type) {
    case "simple-fill":
    case "picture-fill":
      return (function (t, l, a) {
        const n = L(O.FILL, l),
          u = a ? N(n) : n,
          r = t.clone(),
          o = r.outline,
          p = ae(l.symbologyType);
        p || (r.outline = null);
        const c = { materialKey: u, hash: r.hash(), ...M(r) };
        if (p) return c;
        const d = [];
        if ((d.push(c), o)) {
          const f = L(O.LINE, { ...l, isOutline: !0 }),
            g = { materialKey: a ? N(f) : f, hash: o.hash(), ...M(o) };
          d.push(g);
        }
        return {
          type: "composite-symbol",
          layers: d,
          hash: d.reduce((f, g) => g.hash + f, ""),
        };
      })(e, i, s);
    case "simple-marker":
    case "picture-marker":
      return (function (t, l, a) {
        const n = L(O.MARKER, l),
          u = a ? N(n) : n,
          r = M(t);
        return {
          materialKey: u,
          hash: t.hash(),
          ...r,
          angle: t.angle,
          maxVVSize: l.maxVVSize,
        };
      })(e, i, s);
    case "simple-line":
      return (function (t, l, a) {
        const n = ae(l.symbologyType) ? F.DEFAULT : l.symbologyType,
          u = L(O.LINE, { ...l, symbologyType: n }),
          r = a ? N(u) : u,
          o = t.clone(),
          p = o.marker;
        o.marker = null;
        const c = [];
        if ((c.push({ materialKey: r, hash: o.hash(), ...M(o) }), p)) {
          const d = L(O.MARKER, l),
            f = a ? N(d) : d;
          (p.color = p.color ?? o.color),
            c.push({
              materialKey: f,
              hash: p.hash(),
              lineWidth: o.width,
              ...M(p),
            });
        }
        return {
          type: "composite-symbol",
          layers: c,
          hash: c.reduce((d, f) => f.hash + d, ""),
        };
      })(e, i, s);
    case "text":
      return (function (t, l, a) {
        const n = L(O.TEXT, l),
          u = a ? N(n) : n,
          r = M(t);
        return {
          materialKey: u,
          hash: t.hash(),
          ...r,
          angle: t.angle,
          maxVVSize: l.maxVVSize,
        };
      })(e, i, s);
    case "label":
      return (function (t, l, a) {
        const n = t.toJSON(),
          u = L(O.LABEL, { ...l, placement: n.labelPlacement });
        return {
          materialKey: a ? N(u) : u,
          hash: t.hash(),
          ...n,
          labelPlacement: n.labelPlacement,
        };
      })(e, i, s);
    case "cim":
      return {
        type: "cim",
        rendererKey: i.vvFlags,
        data: e.data,
        maxVVSize: i.maxVVSize,
      };
    case "CIMSymbolReference":
      return {
        type: "cim",
        rendererKey: i.vvFlags,
        data: e,
        maxVVSize: i.maxVVSize,
      };
    case "web-style":
      return {
        ...M(e),
        type: "web-style",
        hash: e.hash(),
        rendererKey: i.vvFlags,
        maxVVSize: i.maxVVSize,
      };
    default:
      throw new Error(`symbol not supported ${e.type}`);
  }
}
const Ke = Object.freeze(
  Object.defineProperty(
    { __proto__: null, createSymbolSchema: w },
    Symbol.toStringTag,
    {
      value: "Module",
    }
  )
);
function G(e, i) {
  return Math.max(e, i);
}
const H = 8,
  oe = H - 2,
  U = fe.getLogger("esri.views.2d.layers.features.support.rendererUtils"),
  _e = (e) => {
    if (
      !("visualVariables" in e) ||
      !e.visualVariables ||
      !e.visualVariables.length
    )
      return e;
    const i = e.clone(),
      s = i.visualVariables.map((t) => (ge(t) ? be(t) : t));
    return (i.visualVariables = s), i;
  };
function ge(e) {
  return (
    (e.type === "size" || e.type === "color" || e.type === "opacity") &&
    e.stops != null
  );
}
function be(e) {
  return (
    (e.stops = (function (i, s) {
      return s.length <= H
        ? s
        : (U.warn(
            `Found ${s.length} Visual Variable stops, but MapView only supports ${H}. Displayed stops will be simplified.`
          ),
          s.length > 2 * H
            ? (function (t, l) {
                const [a, ...n] = l,
                  u = n.pop(),
                  r = n[0].value,
                  o = n[n.length - 1].value,
                  p = (o - r) / oe,
                  c = [];
                for (let d = r; d < o; d += p) {
                  let f = 0;
                  for (; d >= n[f].value; ) f++;
                  const g = n[f],
                    h = l[f - 1],
                    v = d - h.value,
                    x = g.value === h.value ? 1 : v / (g.value - h.value);
                  if (t === "color") {
                    const y = n[f],
                      m = l[f - 1],
                      b = y.color.clone();
                    (b.r = A(m.color.r, b.r, x)),
                      (b.g = A(m.color.g, b.g, x)),
                      (b.b = A(m.color.b, b.b, x)),
                      (b.a = A(m.color.a, b.a, x)),
                      c.push({ value: d, color: b, label: y.label });
                  } else if (t === "size") {
                    const y = n[f],
                      m = l[f - 1],
                      b = ne(y.size),
                      z = A(ne(m.size), b, x);
                    c.push({ value: d, size: z, label: y.label });
                  } else {
                    const y = n[f],
                      m = A(l[f - 1].opacity, y.opacity, x);
                    c.push({ value: d, opacity: m, label: y.label });
                  }
                }
                return [a, ...c, u];
              })(i, s)
            : (function (t) {
                const [l, ...a] = t,
                  n = a.pop();
                for (; a.length > oe; ) {
                  let u = 0,
                    r = 0;
                  for (let o = 1; o < a.length; o++) {
                    const p = a[o - 1],
                      c = a[o],
                      d = Math.abs(c.value - p.value);
                    d > r && ((r = d), (u = o));
                  }
                  a.splice(u, 1);
                }
                return [l, ...a, n];
              })(s));
    })(e.type, e.stops ?? [])),
    e
  );
}
function A(e, i, s) {
  return (1 - s) * e + s * i;
}
function te() {
  if (q("heatmap-force-raster")) return "raster";
  const {
    supportsTextureFloat: e,
    supportsTextureHalfFloat: i,
    supportsColorBufferFloat: s,
    supportsColorBufferFloatBlend: t,
    supportsColorBufferHalfFloat: l,
  } = Q("2d");
  return (e && s && t) || (i && l)
    ? "symbol"
    : q("heatmap-allow-raster-fallback")
    ? "raster"
    : "none";
}
function $e(e) {
  if (!e) return !0;
  switch (e.type) {
    case "dot-density":
      if (!Q("2d").supportsTextureFloat)
        return (
          U.error(
            new T(
              "webgl-missing-extension",
              "Missing WebGL extension OES_Texture_Float which is required for DotDensity"
            )
          ),
          !1
        );
      break;
    case "heatmap": {
      const i = te();
      if (i === "none" || (i === "raster" && !q("heatmap-force-raster"))) {
        const s = Q("2d"),
          t = [
            "supportsTextureFloat",
            "supportsTextureHalfFloat",
            "supportsColorBufferFloat",
            "supportsColorBufferFloatBlend",
            "supportsColorBufferHalfFloat",
          ]
            .filter((l) => !s[l])
            .join(", ");
        if (i === "none")
          return (
            U.errorOnce(
              new T(
                "webgl-missing-extension",
                `Missing WebGL${s.type} requirements for Heatmap: ${t}`
              )
            ),
            !1
          );
        i === "raster" &&
          U.warnOnce(
            `Missing WebGL${s.type} requirements for accelerated Heatmap: ${t}. Feature support may be limited.`
          );
      }
      break;
    }
  }
  return !0;
}
const R = fe.getLogger("esri.views.2d.layers.features.schemaUtils"),
  S = "ValidationError";
function X(e, i) {
  let s = 0,
    t = 0,
    l = F.DEFAULT;
  if (V(e)) {
    if (
      ((t = (function (a, n) {
        if (!("visualVariables" in a) || !a.hasVisualVariables("size"))
          return 0;
        const u = a.getVisualVariablesForType("size");
        if (!u[0]) return 0;
        const r = u[0];
        if (n && r.field === "cluster_count" && n.type === "cluster")
          return n.clusterMaxSize;
        if (r.target === "outline") return 0;
        if (r.transformationType === "stops")
          return r.stops.map((o) => o.size).reduce(G, 0);
        if (r.transformationType === "clamped-linear") {
          let o = -1 / 0,
            p = -1 / 0;
          return (
            (o =
              typeof r.maxSize == "number"
                ? r.maxSize
                : r.maxSize.stops.map((c) => c.size).reduce(G, 0)),
            (p =
              typeof r.minSize == "number"
                ? r.minSize
                : r.minSize.stops.map((c) => c.size).reduce(G, 0)),
            Math.max(o, p)
          );
        }
        return r.transformationType === "real-world-size" ? 30 : void 0;
      })(e, i)),
      "visualVariables" in e &&
        ((s = me(e.visualVariables || [])),
        e.type === "dot-density" && (l = F.DOT_DENSITY)),
      e.type === "heatmap" && (l = F.HEATMAP),
      e.type === "dictionary")
    )
      return { maxVVSize: t, vvFlags: s, symbologyType: F.DEFAULT };
    if (e.type === "pie-chart")
      return { maxVVSize: t, vvFlags: s, symbologyType: F.PIE_CHART };
    if (l !== F.DOT_DENSITY && l !== F.HEATMAP) {
      const a = e.getSymbols();
      "backgroundFillSymbol" in e &&
        e.backgroundFillSymbol &&
        a.push(e.backgroundFillSymbol);
      let n = !0,
        u = !0;
      for (const r of a)
        if (
          (r.type === "cim" && (u = !1),
          r.type === "simple-fill" || r.type === "picture-fill")
        ) {
          const o = r.outline,
            p = o && o.style !== "none" && o.style !== "solid",
            c =
              r.type === "simple-fill" &&
              r.style !== "none" &&
              r.style !== "solid";
          p && (n = !1), (r.type === "picture-fill" || c || p) && (u = !1);
        }
      n
        ? (l = u ? F.OUTLINE_FILL_SIMPLE : F.OUTLINE_FILL)
        : u && (l = F.SIMPLE);
    }
  }
  return { vvFlags: s, maxVVSize: t, symbologyType: l };
}
let Oe = null;
function He(e) {
  return q("esri-2d-update-debug") && (Oe = ue(e, !0)), ue(e);
}
function ue(e, i = !1) {
  var s, t;
  try {
    const l = (function (r, o = !1) {
        const p = [];
        let c = 0;
        return p.push(Me(r, c++, o)), p;
      })(e, i),
      a = (function (r) {
        var o;
        return ((o = r.renderer) == null ? void 0 : o.type) === "heatmap" &&
          te() === "raster"
          ? { type: "heatmap" }
          : { type: "symbol" };
      })(e),
      n = {};
    l.map((r) =>
      (function (o, p, c) {
        switch (c.target) {
          case "feature":
            return void j(o, W(p), c);
          case "aggregate": {
            if (!("featureReduction" in p)) return;
            const d = p.featureReduction;
            switch (d == null ? void 0 : d.type) {
              case "selection":
                throw new T(
                  S,
                  "Mapview does not support `selection` reduction type",
                  d
                );
              case "binning":
                return (
                  j(o, W(p), c),
                  void (function (f, g, h, v) {
                    f.aggregate ||
                      (f.aggregate = {
                        name: "aggregate",
                        type: "bin",
                        filters: null,
                        input: "feature",
                        params: {
                          fixedBinLevel: g.fixedBinLevel,
                          fields: (g.fields ?? []).map((x) => ({
                            ...x.toJSON(),
                            type: pe(x, h),
                          })),
                        },
                        attributes: {},
                      }),
                      Z(f.aggregate, v.attributes.fields);
                  })(
                    o,
                    d,
                    p.fields.map((f) => f.toJSON()),
                    c
                  )
                );
              case "cluster":
                return (
                  j(o, W(p), c),
                  void (function (f, g, h, v) {
                    var x;
                    f.aggregate ||
                      (f.aggregate = {
                        name: "aggregate",
                        type: "cluster",
                        input: "feature",
                        filters: null,
                        attributes: {},
                        params: {
                          clusterRadius: le(g.clusterRadius / 2),
                          clusterPixelBuffer:
                            64 * Math.ceil(le(g.clusterMaxSize) / 64),
                          fields:
                            (x = g.fields ?? []) == null
                              ? void 0
                              : x.map((y) => ({
                                  ...y.toJSON(),
                                  type: pe(y, h),
                                })),
                        },
                      }),
                      Z(f.aggregate, v.attributes.fields);
                  })(
                    o,
                    d,
                    p.fields.map((f) => f.toJSON()),
                    c
                  )
                );
            }
          }
        }
      })(n, e, r)
    );
    const u = V(e.subtypeCode) ? `${e.subtypeField} = ${e.subtypeCode}` : null;
    return {
      source: {
        definitionExpression: $(Te(e.definitionExpression, u)),
        fields: e.fields.map((r) => r.toJSON()),
        gdbVersion: e.gdbVersion,
        historicMoment: (s = e.historicMoment) == null ? void 0 : s.getTime(),
        outFields: e.availableFields,
        pixelBuffer: e.pixelBuffer,
        spatialReference: e.spatialReference.toJSON(),
        timeExtent: (t = e.timeExtent) == null ? void 0 : t.toJSON(),
        customParameters: e.customParameters,
      },
      attributes: { fields: {}, indexCount: 0 },
      processors: l,
      tileRenderer: a,
      targets: n,
    };
  } catch (l) {
    if (l.fieldName === S) return R.error(l), null;
    throw l;
  }
}
function Z(e, i) {
  var s, t;
  for (const l in i) {
    const a = i[l];
    if (a.target !== e.name) continue;
    const n = e.attributes[l];
    if (n != null && n.context) {
      const u = n.context;
      (u.mesh = u.mesh || ((s = a.context) == null ? void 0 : s.mesh)),
        (u.storage =
          u.storage || ((t = a.context) == null ? void 0 : t.storage));
    } else e.attributes[l] = a;
  }
  return e;
}
function W(e) {
  var i, s, t;
  return [
    ((i = $(e.filter)) == null ? void 0 : i.toJSON()) ?? null,
    ((t = $((s = $(e.featureEffect)) == null ? void 0 : s.filter)) == null
      ? void 0
      : t.toJSON()) ?? null,
  ];
}
function j(e, i, s) {
  return (
    e.feature ||
      (e.feature = {
        name: "feature",
        input: "source",
        filters: i,
        attributes: {},
      }),
    Z(e.feature, s.attributes.fields),
    e
  );
}
function pe(e, i) {
  const { onStatisticExpression: s, onStatisticField: t, statisticType: l } = e;
  switch (l) {
    case "min":
    case "max":
    case "avg":
    case "avg_angle":
    case "sum":
    case "count":
      return "esriFieldTypeDouble";
    case "mode": {
      if (s) {
        const { returnType: n } = s;
        return n
          ? n === "string"
            ? "esriFieldTypeString"
            : "esriFieldTypeDouble"
          : (R.error(
              new T(
                S,
                "Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",
                e
              )
            ),
            "esriFieldTypeString");
      }
      const a = i.find((n) => n.name === t);
      return a
        ? a.type
        : (R.error(
            new T(
              S,
              "Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",
              e
            )
          ),
          "esriFieldTypeString");
    }
  }
}
function E(e, i) {
  return i.field
    ? B(e, { ...i, type: "field", field: i.field })
    : i.valueExpression
    ? B(e, { ...i, type: "expression", valueExpression: i.valueExpression })
    : { field: void 0, fieldIndex: void 0 };
}
function B(e, i) {
  switch (i.type) {
    case "expression": {
      const s = i.valueExpression;
      if (!e.fields[s]) {
        const t = e.indexCount++;
        e.fields[s] = { ...i, name: s, fieldIndex: t };
      }
      return { fieldIndex: e.fields[s].fieldIndex };
    }
    case "label-expression": {
      const s = JSON.stringify(i.label);
      if (!e.fields[s]) {
        const t = e.indexCount++;
        e.fields[s] = { ...i, name: s, fieldIndex: t };
      }
      return { fieldIndex: e.fields[s].fieldIndex };
    }
    case "field": {
      const s = i.field;
      return (
        (i.target === "aggregate" && e.fields[s]) ||
          (e.fields[s] = { ...i, name: s }),
        { field: s }
      );
    }
    case "statistic":
      return (e.fields[i.name] = { ...i }), { field: i.name };
  }
}
function Y(e, i, s, t, l, a = !1) {
  const n = B(e, {
      type: "label-expression",
      target: s,
      context: { mesh: !0 },
      resultType: "string",
      label: {
        labelExpression: i.labelExpression,
        labelExpressionInfo: i.labelExpressionInfo
          ? { expression: i.labelExpressionInfo.expression }
          : null,
        symbol: !!i.symbol,
        where: i.where,
      },
    }),
    { fieldIndex: u } = n;
  return { ...w(i, l, a), fieldIndex: u, target: s, index: t };
}
function Le(e, i, s) {
  var o;
  const t = "featureReduction" in i && i.featureReduction;
  if (!t)
    return {
      fields: [],
      labels: [],
      matcher: void 0,
      rendererOverride: void 0,
    };
  const l = [];
  let a = null,
    n = ye(i.geometryType),
    u = [],
    r = null;
  if (t)
    switch (t.type) {
      case "selection":
        return (
          R.error(
            new T(S, "Mapview does not support `selection` reduction type", t)
          ),
          { fields: [], labels: [], matcher: void 0, rendererOverride: void 0 }
        );
      case "cluster":
      case "binning":
        if (
          (l.push(...(t.fields ?? [])),
          t.type === "cluster"
            ? (n = "esriGeometryPoint")
            : t.type === "binning" && (n = "esriGeometryPolygon"),
          t.renderer &&
            !((o = t.renderer.authoringInfo) != null && o.isAutoGenerated))
        ) {
          if (t.type === "cluster") {
            const { renderer: c } = Fe(t.renderer, t, null);
            r = c;
          } else r = t.renderer;
          const p = X(t.renderer, t);
          (a = ee(e, "aggregate", t.renderer, p, s)),
            (u = (t && t.labelsVisible && t.labelingInfo) || []);
        } else if (t.type === "cluster") {
          if (((r = we(l, i.renderer, t, null, !0)), t.symbol)) {
            const p = X(r, t);
            a = {
              type: "simple",
              symbol: w(t.symbol, p, s),
              symbologyType: p.symbologyType,
            };
          }
          u = (t && t.labelsVisible && t.labelingInfo) || [];
        }
    }
  return (
    (function (p, c) {
      const d = { mesh: !0, storage: !0 };
      for (const f of c) {
        const {
          name: g,
          onStatisticField: h,
          onStatisticExpression: v,
          statisticType: x,
        } = f;
        let y, m;
        const b = "numeric",
          z = "feature";
        v
          ? (m = B(p, {
              type: "expression",
              target: z,
              valueExpression: v.expression,
              resultType: b,
            }).fieldIndex)
          : (y = B(p, {
              type: "field",
              target: z,
              field: h,
              resultType: b,
            }).field),
          B(p, {
            type: "statistic",
            target: "aggregate",
            name: g,
            context: d,
            inField: y,
            inFieldIndex: m,
            statisticType: x,
          });
      }
    })(e, l),
    {
      labels: de(u, t.type === "binning" ? "esriGeometryPolygon" : n),
      matcher: a,
      fields: l,
      rendererOverride: r,
    }
  );
}
function Me(e, i, s = !1) {
  var x;
  const t = { indexCount: 0, fields: {} },
    l = "featureReduction" in e ? e.featureReduction ?? void 0 : void 0,
    a = l ? "aggregate" : "feature";
  if ("sublayers" in e) {
    const y = {
        type: "subtype",
        subtypeField: e.subtypeField,
        renderers: {},
        symbologyType: F.DEFAULT,
      },
      m = {
        type: "subtype",
        mapping: {},
        target: "feature",
        subtypeField: e.subtypeField,
      },
      b = { type: "subtype", classes: {} },
      z = {
        type: "symbol",
        target: "feature",
        aggregateFields: [],
        attributes: t,
        storage: m,
        mesh: { matcher: y, aggregateMatcher: null, labels: b, sortKey: null },
      },
      I = new Set();
    let K = 0;
    for (const {
      renderer: k,
      subtypeCode: C,
      labelingInfo: he,
      labelsVisible: xe,
    } of e.sublayers) {
      let re = 0;
      "visualVariables" in k &&
        k.visualVariables &&
        (k.visualVariables.some((J) => J.type !== "rotation") &&
          R.warnOnce(
            "SubtypeGroupLayer currently only supports rotation visualVariables. All other visualVariable types will be ignored."
          ),
        (re = me(k.visualVariables.filter((J) => J.type !== "size"))));
      const ie = { symbologyType: F.DEFAULT, vvFlags: re, maxVVSize: 0 },
        P = ee(t, a, k, ie, s),
        D = ce(t, a, k),
        se = xe && he;
      if (P.type === "dictionary")
        throw new T(
          S,
          "Dictionary renderer is not supported in subtype layers"
        );
      if (P.type === "subtype")
        throw new T(S, "Nested subtype renderers is not supported");
      if (V(D) && D.type === "subtype")
        throw new T(S, "Nested subtype storage is not supported");
      if (V(D) && V(D.attributeMapping))
        throw new T(
          S,
          "Non-visual-variable attributes are not supported in subtype layers"
        );
      if (P.type === "heatmap")
        throw new T(S, "Heatmaps are not supported in subtype layers");
      if (P.type === "pie-chart")
        throw new T(S, "Pie-charts are not supported in subtype layers");
      if (I.has(C))
        throw new T(S, "Subtype codes for sublayers must be unique");
      I.add(C),
        (y.renderers[C] = P),
        (m.mapping[C] = D),
        se && (b.classes[C] = se.map((J) => Y(t, J, "feature", K++, ie, s)));
    }
    return z;
  }
  if (
    ((x = e.renderer) == null ? void 0 : x.type) === "heatmap" &&
    te() === "raster"
  ) {
    const { radius: y, fieldOffset: m, field: b } = e.renderer;
    return {
      type: "heatmap",
      aggregateFields: [],
      attributes: t,
      target: a,
      storage: null,
      mesh: {
        radius: y,
        fieldOffset: m,
        field: E(t, { target: a, field: b, resultType: "numeric" }).field,
      },
    };
  }
  const n = Le(t, e, s),
    u = ye(e.geometryType),
    r = n.rendererOverride ?? e.renderer,
    o = X(r, l),
    p = ee(t, a, r, o, s),
    c = ce(t, a, r),
    d = (function (y, m, b, z) {
      if (V(z)) return null;
      if (V(m) && m.length) {
        m.length > 1 &&
          R.warn(
            `Layer rendering currently only supports ordering by 1 orderByInfo, but found ${m.length}. All but the first will be discarded`
          );
        const I = m[0],
          K = I.order === "ascending" ? "asc" : "desc";
        return I.field
          ? { field: I.field, order: K }
          : I.valueExpression
          ? {
              fieldIndex: B(y, {
                type: "expression",
                target: "feature",
                valueExpression: I.valueExpression,
                resultType: "numeric",
              }).fieldIndex,
              order: K,
            }
          : (R.error(
              new T(
                S,
                "Expected to find a field or valueExpression for OrderByInfo",
                I
              )
            ),
            null);
      }
      return V(b) && b.type === "unique-value" && b.orderByClassesEnabled
        ? { byRenderer: !0, order: "asc" }
        : null;
    })(t, e.orderBy, e.renderer, l),
    f = (e.labelsVisible && e.labelingInfo) || [],
    g = de(f, u);
  let h = 0;
  const v = [
    ...g.map((y) => Y(t, y, "feature", h++, o, s)),
    ...n.labels.map((y) => Y(t, y, "aggregate", h++, o, s)),
  ];
  return {
    type: "symbol",
    target: a,
    attributes: t,
    aggregateFields: n.fields,
    storage: c,
    mesh: {
      matcher: p,
      labels: { type: "simple", classes: v },
      aggregateMatcher: n.matcher,
      sortKey: d,
    },
  };
}
function ce(e, i, s) {
  let t;
  switch (s.type) {
    case "simple":
    case "class-breaks":
    case "unique-value":
    case "dictionary":
      t = { visualVariables: !0, attributes: null };
      break;
    default:
      t = Ee(s).getStorageSpec(s);
  }
  return (function (l, a, n, u) {
    if (Se(n)) return null;
    const { visualVariables: r, attributes: o } = n;
    let p = null;
    r && "visualVariables" in u && (p = Ne(l, a, u.visualVariables));
    const c = V(p) ? 4 : 0;
    let d = null;
    return (
      V(o) &&
        (d = o.map((f, g) => {
          const { field: h, fieldIndex: v } = E(l, {
            valueExpression: f.valueExpression,
            field: f.field,
            resultType: "numeric",
            target: a,
          });
          return { binding: g + c, field: h, fieldIndex: v };
        })),
      { type: "simple", target: a, attributeMapping: d, vvMapping: p }
    );
  })(e, i, t, s);
}
function Ne(e, i, s) {
  if (!s || !s.length) return [];
  const t = { storage: !0 },
    l = "numeric";
  return (function (a) {
    return a.map((n) => (ge(n) ? be(n.clone()) : n));
  })(s)
    .map((a) => {
      const n = Ve(a.type),
        { field: u, fieldIndex: r } = E(e, {
          target: i,
          valueExpression: a.valueExpression,
          field: a.field,
          context: t,
          resultType: l,
        });
      switch (a.type) {
        case "size":
          return a.valueExpression === "$view.scale"
            ? null
            : {
                type: "size",
                binding: n,
                field: u,
                fieldIndex: r,
                normalizationField: E(e, {
                  target: i,
                  field: a.normalizationField,
                  context: t,
                  resultType: l,
                }).field,
                valueRepresentation: a.valueRepresentation ?? null,
              };
        case "color":
          return {
            type: "color",
            binding: n,
            field: u,
            fieldIndex: r,
            normalizationField: E(e, {
              target: i,
              field: a.normalizationField,
              context: t,
              resultType: l,
            }).field,
          };
        case "opacity":
          return {
            type: "opacity",
            binding: n,
            field: u,
            fieldIndex: r,
            normalizationField: E(e, {
              target: i,
              field: a.normalizationField,
              context: t,
              resultType: l,
            }).field,
          };
        case "rotation":
          return { type: "rotation", binding: n, field: u, fieldIndex: r };
      }
    })
    .filter(V);
}
function ee(e, i, s, t, l = !1) {
  const a = ve(e, { indexCount: 0, fields: {} });
  switch (s.type) {
    case "simple":
    case "dot-density":
      return (function (n, u, r, o = !1) {
        const p = u.getSymbols(),
          c = p.length ? p[0] : null;
        return {
          type: "simple",
          symbol: w(c, r, o),
          symbologyType: r.symbologyType,
        };
      })(0, s, t, l);
    case "class-breaks":
      return (function (n, u, r, o, p = !1) {
        const c = { mesh: !0, use: "renderer.field" },
          d = r.backgroundFillSymbol,
          { field: f, fieldIndex: g } = E(n, {
            target: u,
            field: r.field,
            valueExpression: r.valueExpression,
            resultType: "numeric",
            context: c,
          }),
          h = r.normalizationType,
          v =
            h === "log"
              ? "esriNormalizeByLog"
              : h === "percent-of-total"
              ? "esriNormalizeByPercentOfTotal"
              : h === "field"
              ? "esriNormalizeByField"
              : null,
          x = r.classBreakInfos
            .map((y) => ({
              symbol: w(y.symbol, o, p),
              min: y.minValue,
              max: y.maxValue,
            }))
            .sort((y, m) => y.min - m.min);
        return {
          type: "interval",
          attributes: n.fields,
          field: f,
          fieldIndex: g,
          backgroundFillSymbol: w(d, o, p),
          defaultSymbol: w(r.defaultSymbol, o, p),
          intervals: x,
          normalizationField: r.normalizationField,
          normalizationTotal: r.normalizationTotal,
          normalizationType: v,
          isMaxInclusive: r.isMaxInclusive,
          symbologyType: o.symbologyType,
        };
      })(a, i, s, t, l);
    case "unique-value":
      return (function (n, u, r, o, p = !1) {
        const c = [],
          d = r.backgroundFillSymbol,
          f = { target: u, context: { mesh: !0 }, resultType: "string" };
        if (r.field && typeof r.field != "string")
          throw new T(S, "Expected renderer.field to be a string", r);
        const { field: g, fieldIndex: h } = E(n, {
          ...f,
          field: r.field,
          valueExpression: r.valueExpression,
        });
        for (const v of r.uniqueValueInfos ?? [])
          c.push({ value: "" + v.value, symbol: w(v.symbol, o, p) });
        return {
          type: "map",
          attributes: n.fields,
          field: g,
          fieldIndex: h,
          field2: E(n, { ...f, field: r.field2 }).field,
          field3: E(n, { ...f, field: r.field3 }).field,
          fieldDelimiter: r.fieldDelimiter ?? void 0,
          backgroundFillSymbol: w(d, o),
          defaultSymbol: w(r.defaultSymbol, o),
          map: c,
          symbologyType: o.symbologyType,
        };
      })(a, i, s, t, l);
    case "dictionary":
      return (function (n, u, r, o = !1) {
        return {
          type: "dictionary",
          config: u.config,
          fieldMap: u.fieldMap,
          scaleExpression: u.scaleExpression,
          url: u.url,
          symbolOptions: r,
          symbologyType: r.symbologyType,
        };
      })(0, s, t, l);
    case "heatmap":
      return (function (n, u, r, o = !1) {
        const p = u.getSymbols(),
          c = p.length ? p[0] : null;
        return {
          type: "heatmap",
          symbol: w(c, r, o),
          symbologyType: r.symbologyType,
        };
      })(0, s, t, l);
    case "pie-chart":
      return (function (n, u, r, o = !1) {
        const p = u.getSymbols(),
          c = p[0],
          d = p.length > 1 ? p[1] : null;
        return {
          type: "pie-chart",
          markerSymbol: w(c, r, o),
          fillSymbol: w(d, r, o),
          symbologyType: r.symbologyType,
        };
      })(0, s, t, l);
  }
}
export { ee as $, He as I, Ke as c, $e as h, _e as n, w as o, X as w };
