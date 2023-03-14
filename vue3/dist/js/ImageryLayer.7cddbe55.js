import {
  bO as q,
  jg as Ot,
  t as k,
  ef as lt,
  ae as r,
  af as l,
  dl as z,
  gO as Ie,
  dm as N,
  dT as Ct,
  R as H,
  ag as T,
  dd as U,
  aH as ge,
  jh as pe,
  ji as Ge,
  jj as Le,
  ah as It,
  r as x,
  aK as ae,
  dq as fe,
  dr as Re,
  U as _,
  dp as Ue,
  ar as _e,
  d0 as _t,
  di as Be,
  bo as we,
  cM as ut,
  dj as pt,
  a5 as jt,
  gr as de,
  j1 as Vt,
  ey as Mt,
  cV as At,
  cy as Jt,
  Q as ct,
  s as M,
  dk as W,
  q as je,
  av as ke,
  jk as Et,
  bn as zt,
  G as qt,
  al as Gt,
  jl as Lt,
  iQ as Ht,
  im as Ut,
  iW as Bt,
  io as kt,
  et as Qt,
  eu as Wt,
  ip as $t,
  iT as Kt,
  es as Zt,
  ev as Xt,
  a2 as Yt,
  it as ei,
  jm as ti,
  j0 as ii,
  iv as ri,
  ai as si,
  db as ni,
} from "./index.8fd7165c.js";
import {
  w as I,
  o as ue,
  i as Te,
  c as ai,
  l as oi,
  d as li,
  a as ui,
  m as pi,
  k as ci,
  L as mi,
  j as di,
  $ as hi,
  f as yi,
  n as gi,
} from "./fetchRasterInfo.800395a0.js";
import {
  p as Ft,
  c as Qe,
  v as fi,
  h as Ri,
} from "./multidimensionalUtils.54c50a30.js";
import { s as wi, m as We, g as vi, z as bi } from "./dataUtils.e77088c3.js";
import {
  v as mt,
  _ as dt,
  d as Si,
  C as xi,
  e as Ii,
  f as Fi,
  u as ht,
  T as Di,
  S as yt,
  j as Ti,
} from "./RasterSymbolizer.ac2e1b06.js";
import { e as gt } from "./imageBitmapUtils.d17e4357.js";
import { s as Ni, n as Pi } from "./executeForIds.3a002380.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./generateRendererUtils.855c90be.js";
import "./colorUtils.3868c6ed.js";
const Oi = {
    StretchFunction: {
      arguments: {
        ComputeGamma: {
          isDataset: !1,
          isPublic: !1,
          name: "ComputeGamma",
          type: "RasterFunctionVariable",
          value: !1,
        },
        DRA: {
          isDataset: !1,
          isPublic: !1,
          name: "DRA",
          type: "RasterFunctionVariable",
          value: !1,
        },
        EstimateStatsHistogram: {
          isDataset: !1,
          isPublic: !1,
          name: "EstimateStatsHistogram",
          type: "RasterFunctionVariable",
          value: !1,
        },
        Gamma: {
          displayName: "Gamma",
          isDataset: !1,
          isPublic: !1,
          name: "Gamma",
          type: "RasterFunctionVariable",
        },
        Histograms: {
          isDataset: !1,
          isPublic: !1,
          name: "Histograms",
          type: "RasterFunctionVariable",
        },
        Max: {
          isDataset: !1,
          isPublic: !1,
          name: "Max",
          type: "RasterFunctionVariable",
          value: 255,
        },
        MaxPercent: {
          isDataset: !1,
          isPublic: !1,
          name: "MaxPercent",
          type: "RasterFunctionVariable",
          value: 0.5,
        },
        Min: {
          isDataset: !1,
          isPublic: !1,
          name: "Min",
          type: "RasterFunctionVariable",
          value: 0,
        },
        MinPercent: {
          isDataset: !1,
          isPublic: !1,
          name: "MinPercent",
          type: "RasterFunctionVariable",
          value: 0.25,
        },
        NumberOfStandardDeviations: {
          isDataset: !1,
          isPublic: !1,
          name: "NumberOfStandardDeviation",
          type: "RasterFunctionVariable",
          value: 2,
        },
        Raster: {
          isDataset: !0,
          isPublic: !1,
          name: "Raster",
          type: "RasterFunctionVariable",
        },
        SigmoidStrengthLevel: {
          isDataset: !1,
          isPublic: !1,
          name: "SigmoidStrengthLevel",
          type: "RasterFunctionVariable",
          value: 2,
        },
        Statistics: {
          isDataset: !1,
          isPublic: !1,
          name: "Statistics",
          type: "RasterFunctionVariable",
        },
        StretchType: {
          isDataset: !1,
          isPublic: !1,
          name: "StretchType",
          type: "RasterFunctionVariable",
          value: 0,
        },
        type: "StretchFunctionArguments",
        UseGamma: {
          isDataset: !1,
          isPublic: !1,
          name: "UseGamma",
          type: "RasterFunctionVariable",
          value: !1,
        },
      },
      description:
        "Enhances an image by adjusting the range of values displayed. This does not alter the underlying pixel values. If a pixel has a value outside of the specified range, it will appear as either the minimum or maximum value.",
      function: {
        description:
          "Enhances an image by adjusting the range of values displayed. This does not alter the underlying pixel values. If a pixel has a value outside of the specified range, it will appear as either the minimum or maximum value.",
        name: "Stretch",
        pixelType: "UNKNOWN",
        type: "StretchFunction",
      },
      functionType: 0,
      name: "Stretch",
      thumbnail: "",
    },
    RemapFunction: {
      name: "Remap",
      description:
        "Changes pixel values by assigning new values to ranges of pixel values or using an external table.",
      function: {
        type: "RemapFunction",
        pixelType: "UNKNOWN",
        name: "Remap",
        description:
          "Changes pixel values by assigning new values to ranges of pixel values or using an external table.",
      },
      arguments: {
        Raster: {
          name: "Raster",
          isPublic: !1,
          isDataset: !0,
          type: "RasterFunctionVariable",
        },
        UseTable: {
          name: "UseTable",
          isPublic: !1,
          isDataset: !1,
          value: !1,
          type: "RasterFunctionVariable",
        },
        InputRanges: {
          name: "InputRanges",
          isPublic: !1,
          isDataset: !1,
          type: "RasterFunctionVariable",
          displayName: "Input Ranges",
        },
        OutputValues: {
          name: "OutputValues",
          isPublic: !1,
          isDataset: !1,
          type: "RasterFunctionVariable",
          displayName: "Output Values",
        },
        NoDataRanges: {
          name: "NoDataRanges",
          isPublic: !1,
          isDataset: !1,
          type: "RasterFunctionVariable",
          displayName: "NoData Ranges",
        },
        Table: {
          name: "Table",
          isPublic: !1,
          isDataset: !1,
          type: "RasterFunctionVariable",
        },
        InputField: {
          name: "InputField",
          isPublic: !1,
          isDataset: !1,
          type: "RasterFunctionVariable",
        },
        OutputField: {
          name: "OutputField",
          isPublic: !1,
          isDataset: !1,
          type: "RasterFunctionVariable",
        },
        InputMaxField: {
          name: "InputMaxField",
          isPublic: !1,
          isDataset: !1,
          type: "RasterFunctionVariable",
        },
        RemapTableType: {
          name: "RemapTableType",
          isPublic: !1,
          isDataset: !1,
          value: 1,
          type: "RasterFunctionVariable",
        },
        AllowUnmatched: {
          name: "AllowUnmatched",
          isPublic: !1,
          isDataset: !1,
          value: !0,
          type: "RasterFunctionVariable",
        },
        type: "RemapFunctionArguments",
      },
      functionType: 0,
      thumbnail: "",
    },
    ColormapFunction: {
      name: "Colormap",
      description:
        "Changes pixel values to display the raster data as either a grayscale or a red, green, blue (RGB) image, based on a colormap or a color ramp.",
      function: {
        type: "ColormapFunction",
        pixelType: "UNKNOWN",
        name: "Colormap",
        description:
          "Changes pixel values to display the raster data as either a grayscale or a red, green, blue (RGB) image, based on a colormap or a color ramp.",
      },
      arguments: {
        Raster: {
          name: "Raster",
          isPublic: !1,
          isDataset: !0,
          type: "RasterFunctionVariable",
        },
        ColorSchemeType: {
          name: "ColorSchemeType",
          isPublic: !1,
          isDataset: !1,
          value: 1,
          type: "RasterFunctionVariable",
        },
        Colormap: {
          name: "Colormap",
          isPublic: !1,
          isDataset: !1,
          type: "RasterFunctionVariable",
        },
        ColormapName: {
          name: "ColormapName",
          isPublic: !1,
          isDataset: !1,
          value: "Gray",
          type: "RasterFunctionVariable",
        },
        ColorRamp: {
          name: "ColorRamp",
          isPublic: !1,
          isDataset: !1,
          type: "RasterFunctionVariable",
        },
        type: "ColormapFunctionArguments",
      },
      functionType: 0,
      thumbnail: "",
    },
    ShadedReliefFunction: {
      name: "Shaded Relief",
      description:
        "Creates a multiband, color coded, 3D representation of the surface, with the sun's relative position taken into account for shading the image.",
      function: {
        type: "ShadedReliefFunction",
        pixelType: "UNKNOWN",
        name: "Shaded Relief",
        description:
          "Creates a multiband, color coded, 3D representation of the surface, with the sun's relative position taken into account for shading the image.",
      },
      arguments: {
        Raster: {
          name: "Raster",
          isPublic: !1,
          isDataset: !0,
          type: "RasterFunctionVariable",
        },
        ColorSchemeType: {
          name: "ColorSchemeType",
          isPublic: !1,
          isDataset: !1,
          value: 1,
          type: "RasterFunctionVariable",
        },
        ColorRamp: {
          name: "ColorRamp",
          isPublic: !1,
          isDataset: !1,
          type: "RasterFunctionVariable",
        },
        HillshadeType: {
          name: "HillshadeType",
          isPublic: !1,
          isDataset: !1,
          value: 0,
          type: "RasterFunctionVariable",
        },
        Colormap: {
          name: "Colormap",
          isPublic: !1,
          isDataset: !1,
          type: "RasterFunctionVariable",
        },
        Azimuth: {
          name: "Azimuth",
          isPublic: !1,
          isDataset: !1,
          value: 315,
          type: "RasterFunctionVariable",
        },
        Altitude: {
          name: "Altitude",
          isPublic: !1,
          isDataset: !1,
          value: 45,
          type: "RasterFunctionVariable",
        },
        SlopeType: {
          name: "SlopeType",
          isPublic: !1,
          isDataset: !1,
          value: 1,
          type: "RasterFunctionVariable",
        },
        ZFactor: {
          name: "ZFactor",
          isPublic: !1,
          isDataset: !1,
          value: 1,
          type: "RasterFunctionVariable",
        },
        PSPower: {
          name: "PSPower",
          isPublic: !1,
          isDataset: !1,
          value: 0.664,
          type: "RasterFunctionVariable",
        },
        PSZFactor: {
          name: "PSZFactor",
          isPublic: !1,
          isDataset: !1,
          value: 0.024,
          type: "RasterFunctionVariable",
        },
        RemoveEdgeEffect: {
          name: "RemoveEdgeEffect",
          isPublic: !1,
          isDataset: !1,
          value: !1,
          type: "RasterFunctionVariable",
        },
        type: "ShadedReliefFunctionArguments",
      },
      functionType: 0,
      thumbnail: "",
    },
    HillshadeFunction: {
      name: "Hillshade",
      description:
        "Creates a 3D representation of the surface, with the sun's relative position taken into account for shading the image",
      function: {
        type: "HillshadeFunction",
        pixelType: "UNKNOWN",
        name: "Hillshade",
        description:
          "Creates a 3D representation of the surface, with the sun's relative position taken into account for shading the image",
      },
      arguments: {
        DEM: {
          name: "DEM",
          isPublic: !1,
          isDataset: !0,
          type: "RasterFunctionVariable",
        },
        HillshadeType: {
          name: "HillshadeType",
          isPublic: !1,
          isDataset: !1,
          value: 0,
          type: "RasterFunctionVariable",
        },
        Azimuth: {
          name: "Azimuth",
          isPublic: !1,
          isDataset: !1,
          value: 315,
          type: "RasterFunctionVariable",
        },
        Altitude: {
          name: "Altitude",
          isPublic: !1,
          isDataset: !1,
          value: 45,
          type: "RasterFunctionVariable",
        },
        SlopeType: {
          name: "SlopeType",
          isPublic: !1,
          isDataset: !1,
          value: 1,
          type: "RasterFunctionVariable",
        },
        ZFactor: {
          name: "ZFactor",
          isPublic: !1,
          isDataset: !1,
          value: 1,
          type: "RasterFunctionVariable",
        },
        PSPower: {
          name: "PSPower",
          isPublic: !1,
          isDataset: !1,
          value: 0.664,
          type: "RasterFunctionVariable",
        },
        PSZFactor: {
          name: "PSZFactor",
          isPublic: !1,
          isDataset: !1,
          value: 0.024,
          type: "RasterFunctionVariable",
        },
        RemoveEdgeEffect: {
          name: "RemoveEdgeEffect",
          isPublic: !1,
          isDataset: !1,
          value: !1,
          type: "RasterFunctionVariable",
        },
        type: "HillshadeFunctionArguments",
      },
      functionType: 0,
      thumbnail: "",
    },
    ResampleFunction: {
      name: "Resample",
      description: "Changes the cell size of a raster.",
      function: {
        type: "ResampleFunction",
        pixelType: "UNKNOWN",
        name: "Resample",
        description: "Changes the cell size of a raster.",
      },
      arguments: {
        Raster: {
          name: "Raster",
          isPublic: !1,
          isDataset: !0,
          type: "RasterFunctionVariable",
        },
        ResamplingType: {
          name: "ResamplingType",
          isPublic: !1,
          isDataset: !1,
          value: 0,
          type: "RasterFunctionVariable",
        },
        InputCellSize: {
          name: "InputCellsize",
          isPublic: !1,
          isDataset: !1,
          value: { x: 0, y: 0 },
          type: "RasterFunctionVariable",
        },
        OutputCellSize: {
          name: "OutputCellsize",
          isPublic: !1,
          isDataset: !1,
          value: { x: 0, y: 0 },
          type: "RasterFunctionVariable",
        },
        type: "ResampleFunctionArguments",
      },
      functionType: 0,
      thumbnail: "",
    },
  },
  Ci = new Set(["u1", "u2", "u4", "u8", "s8", "u16", "s16"]),
  _i = {
    simple_scalar: "Simple Scalar",
    wind_barb: "Wind Barb",
    single_arrow: "Single Arrow",
    beaufort_kn: "Beaufort Wind (Knots)",
    beaufort_m: "Beaufort Wind (MetersPerSecond)",
    ocean_current_m: "Ocean Current (MetersPerSecond)",
    ocean_current_kn: "Ocean Current (Knots)",
  },
  ji = new Set([
    "raster-stretch",
    "unique-value",
    "class-breaks",
    "raster-shaded-relief",
    "vector-field",
    "raster-colormap",
  ]);
function Dt(n) {
  return ji.has(n.type);
}
function $e(n, i) {
  var e;
  if (!n || !i) return q(n || i);
  const o = q(n);
  if (o.rasterFunctionDefinition && i.rasterFunctionDefinition) {
    const t = i.rasterFunctionDefinition;
    (t.thumbnail || t.thumbnailEx) && (t.thumbnail = t.thumbnailEx = void 0),
      Tt(o.rasterFunctionDefinition.arguments, i);
  } else
    ((e = i.functionName) == null ? void 0 : e.toLowerCase()) !== "none" &&
      (Nt(o.functionArguments).Raster = i);
  return o;
}
function Tt(n, i) {
  for (const o in n)
    o.toLowerCase() === "raster" &&
      (n[o].type === "RasterFunctionVariable"
        ? ((n[o] = i.rasterFunctionDefinition),
          (n[o].type = "RasterFunctionTemplate"))
        : n[o].type === "RasterFunctionTemplate" && Tt(n[o].arguments, i));
}
function te(n) {
  const i = q(Oi[n.functionName + "Function"]),
    o = n.functionArguments;
  for (const e in o)
    e.toLowerCase() === "raster"
      ? ((i.arguments[e] = te(o[e])),
        (i.arguments[e].type = "RasterFunctionTemplate"))
      : e.toLowerCase() === "colormap"
      ? ((i.arguments[e].value = Ai(o[e])),
        (i.arguments.ColorSchemeType.value = 0))
      : (i.arguments[e].value = o[e]);
  return i;
}
function Vi(n, i) {
  switch (((i = i || {}), n.type)) {
    case "raster-stretch":
      return (function (o, e) {
        var c;
        const t = e.convertToRFT,
          s = new I();
        s.functionName = "Stretch";
        const a = Fe[Si.toJSON(o.stretchType)],
          u = "u8",
          p = {
            StretchType: a,
            Statistics: Mi(o.statistics ?? []),
            DRA: o.dynamicRangeAdjustment,
            UseGamma: o.useGamma,
            Gamma: o.gamma,
            ComputeGamma: o.computeGamma,
          };
        if (
          (o.outputMin != null && (p.Min = o.outputMin),
          o.outputMax != null && (p.Max = o.outputMax),
          a === Fe.standardDeviation
            ? ((p.NumberOfStandardDeviations = o.numberOfStandardDeviations),
              (s.outputPixelType = u))
            : a === Fe.percentClip
            ? ((p.MinPercent = o.minPercent),
              (p.MaxPercent = o.maxPercent),
              (s.outputPixelType = u))
            : a === Fe.minMax
            ? (s.outputPixelType = u)
            : a === Fe.sigmoid &&
              (p.SigmoidStrengthLevel = o.sigmoidStrengthLevel),
          (s.functionArguments = p),
          (s.variableName = "Raster"),
          o.colorRamp)
        ) {
          const d = o.colorRamp,
            m = new I();
          if (t) m.functionArguments = { ColorRamp: mt(d) };
          else {
            const h = xi(d);
            if (h) m.functionArguments = { colorRamp: h };
            else if (
              !e.convertColorRampToColormap ||
              (d.type !== "algorithmic" && d.type !== "multipart")
            ) {
              const w = o.colorRamp.toJSON();
              w.type === "algorithmic"
                ? (w.algorithm = w.algorithm || "esriCIELabAlgorithm")
                : w.type === "multipart" &&
                  (c = w.colorRamps) != null &&
                  c.length &&
                  w.colorRamps.forEach(
                    (v) => (v.algorithm = v.algorithm || "esriCIELabAlgorithm")
                  ),
                (m.functionArguments = { colorRamp: w });
            } else m.functionArguments = { Colormap: dt(d) };
          }
          return (
            (m.variableName = "Raster"),
            (m.functionName = "Colormap"),
            (m.functionArguments.Raster = s),
            t ? new I({ rasterFunctionDefinition: te(m) }) : m
          );
        }
        return t ? new I({ rasterFunctionDefinition: te(s) }) : s;
      })(n, i);
    case "class-breaks":
      return (function (o, e) {
        const t = [],
          s = [],
          a = [],
          u = [],
          { pixelType: c, rasterAttributeTable: d } = e,
          m = k(d) ? null : d.features,
          h = ft(d);
        if (h && m && Array.isArray(m) && o.classBreakInfos) {
          o.classBreakInfos.forEach((f, b) => {
            var J;
            const S = (J = f.symbol) == null ? void 0 : J.color;
            let F;
            S != null &&
              S.a &&
              f.minValue != null &&
              f.maxValue != null &&
              m.forEach((L) => {
                f.minValue != null &&
                  f.maxValue != null &&
                  ((F = L.attributes[o.field]),
                  ((F >= f.minValue && F < f.maxValue) ||
                    (b === o.classBreakInfos.length - 1 && F >= f.minValue)) &&
                    u.push([L.attributes[h], S.r, S.g, S.b]));
              });
          });
          const y = c ? Ve(u, c) : u,
            g = new I();
          return (
            (g.functionName = "Colormap"),
            (g.functionArguments = {}),
            (g.functionArguments.Colormap = y),
            (g.variableName = "Raster"),
            e.convertToRFT ? new I({ rasterFunctionDefinition: te(g) }) : g
          );
        }
        o.classBreakInfos.forEach((y, g) => {
          if (y.minValue == null || y.maxValue == null) return;
          const f = y.symbol && y.symbol.color;
          f != null && f.a
            ? (g === 0
                ? t.push(y.minValue, y.maxValue + 1e-6)
                : t.push(y.minValue + 1e-6, y.maxValue + 1e-6),
              s.push(g),
              u.push([g, f.r, f.g, f.b]))
            : a.push(y.minValue, y.maxValue);
        });
        const w = c ? Ve(u, c) : u,
          v = new I();
        (v.functionName = "Remap"),
          (v.functionArguments = {
            InputRanges: t,
            OutputValues: s,
            NoDataRanges: a,
          }),
          (v.variableName = "Raster");
        const R = new I();
        return (
          (R.functionName = "Colormap"),
          (R.functionArguments = { Colormap: w, Raster: v }),
          e.convertToRFT ? new I({ rasterFunctionDefinition: te(R) }) : R
        );
      })(n, i);
    case "unique-value":
      return (function (o, e) {
        var w, v, R;
        const t = [],
          { pixelType: s, rasterAttributeTable: a } = e,
          u = k(a) ? null : a.features,
          p = ft(a),
          c =
            (v = (w = o.defaultSymbol) == null ? void 0 : w.color) == null
              ? void 0
              : v.toRgb(),
          d = o.uniqueValueInfos;
        if (d)
          if (u) {
            if (p) {
              const y = new Map();
              d.forEach((f) => {
                var F;
                const b = f.value,
                  S = (F = f.symbol) == null ? void 0 : F.color;
                b != null && S && S.a && y.set(String(b), S.toRgb());
              });
              const g = o.field;
              u.forEach(({ attributes: f }) => {
                const b = String(f[g]),
                  S = f[p],
                  F = y.get(b);
                F ? t.push([S, ...F]) : c && t.push([S, ...c]);
              });
            }
          } else
            for (let y = 0; y < d.length; y++) {
              const g = d[y],
                f = (R = g.symbol) == null ? void 0 : R.color,
                b = +g.value;
              if (f != null && f.a) {
                if (isNaN(b)) return null;
                t.push([b, f.r, f.g, f.b]);
              }
            }
        const m = s && t.length > 0 ? Ve(t, s) : t,
          h = new I();
        return (
          (h.functionName = "Colormap"),
          (h.functionArguments = {}),
          (h.functionArguments.Colormap = m),
          (h.variableName = "Raster"),
          e.convertToRFT ? new I({ rasterFunctionDefinition: te(h) }) : h
        );
      })(n, i);
    case "raster-colormap":
      return (function (o, e) {
        const t = o.extractColormap();
        if (!t || t.length === 0) return null;
        const { pixelType: s } = e,
          a = s ? Ve(t, s) : t,
          u = new I();
        return (
          (u.functionName = "Colormap"),
          (u.functionArguments = {}),
          (u.functionArguments.Colormap = a),
          e.convertToRFT ? new I({ rasterFunctionDefinition: te(u) }) : u
        );
      })(n, i);
    case "vector-field":
      return (function (o, e) {
        const t = new I();
        t.functionName = "VectorFieldRenderer";
        const { dataType: s, bandProperties: a } = e,
          u = s === "vector-uv";
        let p, c;
        a &&
          a.length === 2 &&
          ((p = a.map((v) => v.BandName.toLowerCase()).indexOf("magnitude")),
          (c = a.map((v) => v.BandName.toLowerCase()).indexOf("direction"))),
          (p !== -1 && p !== null) || ((p = 0), (c = 1));
        const d = o.rotationType === "arithmetic" ? 1 : 2,
          m = o.flowRepresentation === "flow-from" ? 0 : 1,
          h = o.visualVariables
            ? o.visualVariables.find((v) => v.field === "Magnitude")
            : new Ot(),
          w = {
            magnitudeBandID: p,
            directionBandID: c,
            isUVComponents: u,
            referenceSystem: d,
            massFlowAngleRepresentation: m,
            symbolTileSize: 50,
            symbolTileSizeUnits: 100,
            calculationMethod: "Vector Average",
            symbologyName: _i[o.style.toLowerCase().replace("-", "_")],
            minimumMagnitude: h.minDataValue,
            maximumMagnitude: h.maxDataValue,
            minimumSymbolSize: h.minSize,
            maximumSymbolSize: h.maxSize,
          };
        return (
          (t.functionArguments = w),
          e.convertToRFT ? new I({ rasterFunctionDefinition: te(t) }) : t
        );
      })(n, i);
    case "raster-shaded-relief":
      return (function (o, e) {
        const t = e.convertToRFT;
        if (
          e.dataType !== "elevation" &&
          (e.dataType !== "generic" ||
            e.bandCount !== 1 ||
            (e.pixelType !== "s16" &&
              e.pixelType !== "s32" &&
              e.pixelType !== "f32" &&
              e.pixelType !== "f64"))
        )
          return new I();
        const s = new I();
        s.functionName = "Hillshade";
        const a = o.hillshadeType === "traditional" ? 0 : 1,
          u = o.scalingType === "none" ? 1 : 3,
          p = { HillshadeType: a, SlopeType: u, ZFactor: o.zFactor };
        return (
          a === 0 && ((p.Azimuth = o.azimuth), (p.Altitude = o.altitude)),
          u === 3 &&
            ((p.PSPower = o.pixelSizePower), (p.PSZFactor = o.pixelSizeFactor)),
          (s.functionArguments = p),
          (s.variableName = "Raster"),
          o.colorRamp &&
            ((s.functionName = "ShadedRelief"),
            t
              ? (p.ColorRamp = mt(o.colorRamp))
              : (p.Colormap = dt(o.colorRamp))),
          t ? new I({ rasterFunctionDefinition: te(s) }) : s
        );
      })(n, i);
    case "flow":
      throw new Error("Unsupported rendering rule.");
  }
}
function Nt(n) {
  const i = n == null ? void 0 : n.Raster;
  return i && i.declaredClass === "esri.layers.support.RasterFunction"
    ? Nt(i.functionArguments)
    : n;
}
const Fe = {
  none: 0,
  standardDeviation: 3,
  histogramEqualization: 4,
  minMax: 5,
  percentClip: 6,
  sigmoid: 9,
};
function Ve(n, i) {
  const o = Ci.has(i) ? wi(i) : null;
  return (
    o &&
      n.push([Math.floor(o[0] - 1), 0, 0, 0], [Math.ceil(o[1] + 1), 0, 0, 0]),
    n
  );
}
function ft(n) {
  if (k(n)) return;
  const { fields: i } = n,
    o = i && i.find((e) => e && e.name && e.name.toLowerCase() === "value");
  return o && o.name;
}
function Mi(n) {
  const i = [];
  return (
    n == null ||
      n.forEach((o) => {
        const e = o;
        if (Array.isArray(e)) i.push(e);
        else {
          if (e.min == null || e.max == null) return;
          const t = [e.min, e.max, e.avg || 0, e.stddev || 0];
          i.push(t);
        }
      }),
    i
  );
}
function Ai(n) {
  const i = [],
    o = [];
  return (
    n.forEach((e) => {
      i.push(e[0]), o.push(Ii([...e.slice(1), 255]));
    }),
    { type: "RasterColormap", values: i, colors: o }
  );
}
var Ze;
const Ne = lt()({
    MT_FIRST: "first",
    MT_LAST: "last",
    MT_MIN: "min",
    MT_MAX: "max",
    MT_MEAN: "mean",
    MT_BLEND: "blend",
    MT_SUM: "sum",
  }),
  Xe = lt()({
    esriMosaicNone: "none",
    esriMosaicCenter: "center",
    esriMosaicNadir: "nadir",
    esriMosaicViewpoint: "viewpoint",
    esriMosaicAttribute: "attribute",
    esriMosaicLockRaster: "lock-raster",
    esriMosaicNorthwest: "northwest",
    esriMosaicSeamline: "seamline",
  });
let A = (Ze = class extends U {
  constructor(n) {
    super(n),
      (this.ascending = !0),
      (this.itemRenderingRule = null),
      (this.lockRasterIds = null),
      (this.method = null),
      (this.multidimensionalDefinition = null),
      (this.objectIds = null),
      (this.operation = null),
      (this.sortField = null),
      (this.sortValue = null),
      (this.viewpoint = null),
      (this.where = null);
  }
  readAscending(n, i) {
    return i.ascending != null
      ? i.ascending
      : i.sortAscending == null || i.sortAscending;
  }
  readMethod(n, i) {
    return (function (o) {
      let e;
      switch (o ? o.toLowerCase().replace("esrimosaic", "") : "") {
        case "byattribute":
        case "attribute":
          e = "esriMosaicAttribute";
          break;
        case "lockraster":
          e = "esriMosaicLockRaster";
          break;
        case "center":
          e = "esriMosaicCenter";
          break;
        case "northwest":
          e = "esriMosaicNorthwest";
          break;
        case "nadir":
          e = "esriMosaicNadir";
          break;
        case "viewpoint":
          e = "esriMosaicViewpoint";
          break;
        case "seamline":
          e = "esriMosaicSeamline";
          break;
        default:
          e = "esriMosaicNone";
      }
      return Xe.fromJSON(e);
    })(i.mosaicMethod || i.defaultMosaicMethod);
  }
  writeMultidimensionalDefinition(n, i, o) {
    n != null &&
      (n = n.filter(
        ({ variableName: e, dimensionName: t }) => (e && e !== "*") || t
      )).length &&
      (i[o] = n.map((e) => e.toJSON()));
  }
  readOperation(n, i) {
    const o = i.mosaicOperation,
      e = i.mosaicOperator && i.mosaicOperator.toLowerCase(),
      t = o || (e ? Ne.toJSON(e) : null);
    return Ne.fromJSON(t) || "first";
  }
  castSortValue(n) {
    return n == null || typeof n == "string" || typeof n == "number"
      ? n
      : `${n}`;
  }
  clone() {
    return new Ze({
      ascending: this.ascending,
      itemRenderingRule: q(this.itemRenderingRule),
      lockRasterIds: q(this.lockRasterIds),
      method: this.method,
      multidimensionalDefinition: q(this.multidimensionalDefinition),
      objectIds: q(this.objectIds),
      operation: this.operation,
      sortField: this.sortField,
      sortValue: this.sortValue,
      viewpoint: q(this.viewpoint),
      where: this.where,
    });
  }
});
r(
  [l({ type: Boolean, json: { write: !0 } })],
  A.prototype,
  "ascending",
  void 0
),
  r(
    [z("ascending", ["ascending", "sortAscending"])],
    A.prototype,
    "readAscending",
    null
  ),
  r(
    [l({ type: I, json: { write: !0 } })],
    A.prototype,
    "itemRenderingRule",
    void 0
  ),
  r(
    [
      l({
        type: [Ie],
        json: {
          write: {
            overridePolicy() {
              return { enabled: this.method === "lock-raster" };
            },
          },
        },
      }),
    ],
    A.prototype,
    "lockRasterIds",
    void 0
  ),
  r(
    [
      l({
        type: String,
        json: {
          type: Xe.jsonValues,
          write: { target: "mosaicMethod", writer: Xe.write },
        },
      }),
    ],
    A.prototype,
    "method",
    void 0
  ),
  r(
    [z("method", ["mosaicMethod", "defaultMosaicMethod"])],
    A.prototype,
    "readMethod",
    null
  ),
  r(
    [l({ type: [Ft], json: { write: !0 } })],
    A.prototype,
    "multidimensionalDefinition",
    void 0
  ),
  r(
    [N("multidimensionalDefinition")],
    A.prototype,
    "writeMultidimensionalDefinition",
    null
  ),
  r(
    [l({ type: [Ie], json: { name: "fids", write: !0 } })],
    A.prototype,
    "objectIds",
    void 0
  ),
  r(
    [
      l({
        json: {
          type: Ne.jsonValues,
          read: { reader: Ne.read },
          write: { target: "mosaicOperation", writer: Ne.write },
        },
      }),
    ],
    A.prototype,
    "operation",
    void 0
  ),
  r(
    [z("operation", ["mosaicOperation", "mosaicOperator"])],
    A.prototype,
    "readOperation",
    null
  ),
  r(
    [
      l({
        type: String,
        json: {
          write: {
            overridePolicy() {
              return { enabled: this.method === "attribute" };
            },
          },
        },
      }),
    ],
    A.prototype,
    "sortField",
    void 0
  ),
  r(
    [
      l({
        type: [String, Number],
        json: {
          write: {
            allowNull: !0,
            overridePolicy() {
              return { enabled: this.method === "attribute", allowNull: !0 };
            },
          },
        },
      }),
    ],
    A.prototype,
    "sortValue",
    void 0
  ),
  r([Ct("sortValue")], A.prototype, "castSortValue", null),
  r([l({ type: H, json: { write: !0 } })], A.prototype, "viewpoint", void 0),
  r([l({ type: String, json: { write: !0 } })], A.prototype, "where", void 0),
  (A = Ze = r([T("esri.layers.support.MosaicRule")], A));
const Q = A;
let O = class extends U {
  constructor() {
    super(...arguments),
      (this.layer = null),
      (this.compression = void 0),
      (this.pixelType = void 0),
      (this.lercVersion = 2);
  }
  get adjustAspectRatio() {
    return this.layer.adjustAspectRatio;
  }
  writeAdjustAspectRatio(n, i, o) {
    this.layer.version < 10.3 || (i[o] = n);
  }
  get bandIds() {
    return this.layer.bandIds;
  }
  get compressionQuality() {
    return this.layer.compressionQuality;
  }
  writeCompressionQuality(n, i, o) {
    this.format &&
      this.format.toLowerCase().includes("jpg") &&
      n != null &&
      (i[o] = n);
  }
  get compressionTolerance() {
    return this.layer.compressionTolerance;
  }
  writeCompressionTolerance(n, i, o) {
    this.format === "lerc" && n != null && (i[o] = n);
  }
  get format() {
    var n;
    return ((n = this.layer.renderer) == null ? void 0 : n.type) ===
      "vector-field"
      ? "lerc"
      : this.layer.format;
  }
  get interpolation() {
    return this.layer.interpolation;
  }
  get noData() {
    return this.layer.noData;
  }
  get noDataInterpretation() {
    return this.layer.noDataInterpretation;
  }
  writeLercVersion(n, i, o) {
    this.format === "lerc" && this.layer.version >= 10.5 && (i[o] = n);
  }
  get version() {
    const n = this.layer;
    return (
      n.commitProperty("bandIds"),
      n.commitProperty("format"),
      n.commitProperty("compressionQuality"),
      n.commitProperty("compressionTolerance"),
      n.commitProperty("interpolation"),
      n.commitProperty("noData"),
      n.commitProperty("noDataInterpretation"),
      n.commitProperty("mosaicRule"),
      n.commitProperty("renderingRule"),
      n.commitProperty("adjustAspectRatio"),
      n.commitProperty("pixelFilter"),
      n.commitProperty("definitionExpression"),
      n.commitProperty("multidimensionalSubset"),
      (this._get("version") || 0) + 1
    );
  }
  set version(n) {
    this._set("version", n);
  }
  get mosaicRule() {
    const n = this.layer;
    let i = n.mosaicRule;
    const o = n.definitionExpression;
    return (
      i
        ? o && o !== i.where && ((i = i.clone()), (i.where = o))
        : o && (i = new Q({ where: o })),
      i
    );
  }
  get renderingRule() {
    var s, a;
    const n = this.layer;
    let i = n.renderingRule;
    const o = n.pixelFilter,
      e = !n.format || n.format.includes("jpg") || n.format.includes("png");
    i = this._addResampleRasterFunction(i);
    const t =
      (s = n.multidimensionalSubset) == null ? void 0 : s.areaOfInterest;
    return (
      t && (i = this._addClipFunction(i, t)),
      e &&
        !o &&
        ((a = n.renderer) == null ? void 0 : a.type) !== "vector-field" &&
        (i = this.combineRendererWithRenderingRule(i)),
      i
    );
  }
  combineRendererWithRenderingRule(n) {
    var t;
    const i = this.layer,
      { rasterInfo: o, renderer: e } = i;
    return (
      (n = n || i.renderingRule),
      e && Dt(e)
        ? $e(
            Vi(e, {
              rasterAttributeTable: o.attributeTable,
              pixelType: o.pixelType,
              dataType: o.dataType,
              bandProperties:
                (t = o.keyProperties) == null ? void 0 : t.BandProperties,
              convertColorRampToColormap: i.version < 10.6,
              convertToRFT: !!(n != null && n.rasterFunctionDefinition),
              bandCount: o.bandCount,
            }),
            n
          )
        : n
    );
  }
  _addResampleRasterFunction(n) {
    var t;
    if (
      ((t = this.layer.renderer) == null ? void 0 : t.type) !==
        "vector-field" ||
      (n == null ? void 0 : n.functionName) === "Resample"
    )
      return n;
    const i =
        this.layer.serviceDataType === "esriImageServiceDataTypeVector-UV"
          ? 7
          : 10,
      o = this.layer.serviceRasterInfo.pixelSize;
    let e = new I({
      functionName: "Resample",
      functionArguments: { ResamplingType: i, InputCellSize: o },
    });
    return (
      (e =
        n != null && n.rasterFunctionDefinition
          ? new I({ rasterFunctionDefinition: te(e) })
          : e),
      $e(e, n)
    );
  }
  _addClipFunction(n, i) {
    return $e(
      new I({
        functionName: "Clip",
        functionArguments: { ClippingGeometry: i.toJSON(), ClippingType: 1 },
      }),
      n
    );
  }
};
r([l()], O.prototype, "layer", void 0),
  r([l({ json: { write: !0 } })], O.prototype, "adjustAspectRatio", null),
  r([N("adjustAspectRatio")], O.prototype, "writeAdjustAspectRatio", null),
  r([l({ json: { write: !0 } })], O.prototype, "bandIds", null),
  r([l({ json: { write: !0 } })], O.prototype, "compression", void 0),
  r([l({ json: { write: !0 } })], O.prototype, "compressionQuality", null),
  r([N("compressionQuality")], O.prototype, "writeCompressionQuality", null),
  r([l({ json: { write: !0 } })], O.prototype, "compressionTolerance", null),
  r(
    [N("compressionTolerance")],
    O.prototype,
    "writeCompressionTolerance",
    null
  ),
  r([l({ json: { write: !0 } })], O.prototype, "format", null),
  r(
    [
      l({
        type: String,
        json: { read: { reader: ue.read }, write: { writer: ue.write } },
      }),
    ],
    O.prototype,
    "interpolation",
    null
  ),
  r([l({ json: { write: !0 } })], O.prototype, "noData", null),
  r(
    [
      l({
        type: String,
        json: { read: { reader: Te.read }, write: { writer: Te.write } },
      }),
    ],
    O.prototype,
    "noDataInterpretation",
    null
  ),
  r([l({ json: { write: !0 } })], O.prototype, "pixelType", void 0),
  r([l({ json: { write: !0 } })], O.prototype, "lercVersion", void 0),
  r([N("lercVersion")], O.prototype, "writeLercVersion", null),
  r([l({ type: Number })], O.prototype, "version", null),
  r([l({ json: { write: !0 } })], O.prototype, "mosaicRule", null),
  r([l({ json: { write: !0 } })], O.prototype, "renderingRule", null),
  (O = r([T("esri.layers.mixins.ExportImageServiceParameters")], O));
let ve = class extends U {
  constructor(n) {
    super(n),
      (this.north = null),
      (this.up = null),
      (this.spatialReference = null);
  }
};
r([l({ type: Number, json: { write: !0 } })], ve.prototype, "north", void 0),
  r([l({ type: Number, json: { write: !0 } })], ve.prototype, "up", void 0),
  r(
    [l({ type: ge, json: { write: !0 } })],
    ve.prototype,
    "spatialReference",
    void 0
  ),
  (ve = r([T("esri.rest.support.ImageAngleResult")], ve));
const Ji = ve;
let oe = class extends U {
  constructor() {
    super(...arguments),
      (this.value = null),
      (this.displayValue = null),
      (this.uncertainty = null);
  }
};
r(
  [l({ type: Number, json: { read: !0, write: !0 } })],
  oe.prototype,
  "value",
  void 0
),
  r(
    [l({ type: String, json: { read: !0, write: !0 } })],
    oe.prototype,
    "displayValue",
    void 0
  ),
  r(
    [l({ type: Number, json: { read: !0, write: !0 } })],
    oe.prototype,
    "uncertainty",
    void 0
  ),
  (oe = r([T("esri.rest.support.ImageMeasureResultValue")], oe));
let xe = class extends oe {
  constructor() {
    super(...arguments), (this.unit = null);
  }
};
r(
  [l({ type: String, json: { read: pe.read, write: pe.write } })],
  xe.prototype,
  "unit",
  void 0
),
  (xe = r([T("esri.rest.support.ImageMeasureResultLengthValue")], xe));
let Me = class extends oe {
  constructor() {
    super(...arguments), (this.unit = null);
  }
};
r(
  [l({ type: String, json: { read: Ge.read, write: Ge.write } })],
  Me.prototype,
  "unit",
  void 0
),
  (Me = r([T("esri.rest.support.ImageMeasureResultAreaValue")], Me));
let Pe = class extends oe {
  constructor() {
    super(...arguments), (this.unit = null);
  }
};
r(
  [l({ type: String, json: { read: Le.read, write: Le.write } })],
  Pe.prototype,
  "unit",
  void 0
),
  (Pe = r([T("esri.rest.support.ImageMeasureResultAngleValue")], Pe));
let le = class extends U {
  constructor() {
    super(...arguments), (this.name = null), (this.sensorName = null);
  }
};
r(
  [l({ type: String, json: { read: !0, write: !0 } })],
  le.prototype,
  "name",
  void 0
),
  r(
    [l({ type: String, json: { read: !0, write: !0 } })],
    le.prototype,
    "sensorName",
    void 0
  ),
  (le = r([T("esri.rest.support.BaseImageMeasureResult")], le));
let De = class extends le {
  constructor() {
    super(...arguments), (this.area = null), (this.perimeter = null);
  }
};
r(
  [l({ type: Me, json: { read: !0, write: !0 } })],
  De.prototype,
  "area",
  void 0
),
  r(
    [l({ type: xe, json: { read: !0, write: !0 } })],
    De.prototype,
    "perimeter",
    void 0
  ),
  (De = r([T("esri.rest.support.ImageAreaResult")], De));
const Ei = De;
let be = class extends le {
  constructor() {
    super(...arguments),
      (this.distance = null),
      (this.azimuthAngle = null),
      (this.elevationAngle = null);
  }
};
r(
  [l({ type: xe, json: { read: !0, write: !0 } })],
  be.prototype,
  "distance",
  void 0
),
  r(
    [l({ type: Pe, json: { read: !0, write: !0 } })],
    be.prototype,
    "azimuthAngle",
    void 0
  ),
  r(
    [l({ type: Pe, json: { read: !0, write: !0 } })],
    be.prototype,
    "elevationAngle",
    void 0
  ),
  (be = r([T("esri.rest.support.ImageDistanceResult")], be));
const zi = be;
let Ae = class extends le {
  constructor() {
    super(...arguments), (this.height = null);
  }
};
r(
  [l({ type: xe, json: { read: !0, write: !0 } })],
  Ae.prototype,
  "height",
  void 0
),
  (Ae = r([T("esri.rest.support.ImageHeightResult")], Ae));
const qi = Ae;
let X = class extends U {
  constructor() {
    super(...arguments),
      (this.catalogItemVisibilities = null),
      (this.catalogItems = null),
      (this.location = null),
      (this.name = null),
      (this.objectId = null),
      (this.processedValues = null),
      (this.properties = null),
      (this.value = null);
  }
};
r([l({ json: { write: !0 } })], X.prototype, "catalogItemVisibilities", void 0),
  r(
    [l({ type: It, json: { write: !0 } })],
    X.prototype,
    "catalogItems",
    void 0
  ),
  r([l({ type: H, json: { write: !0 } })], X.prototype, "location", void 0),
  r([l({ json: { write: !0 } })], X.prototype, "name", void 0),
  r([l({ json: { write: !0 } })], X.prototype, "objectId", void 0),
  r([l({ json: { write: !0 } })], X.prototype, "processedValues", void 0),
  r([l({ json: { write: !0 } })], X.prototype, "properties", void 0),
  r([l({ json: { write: !0 } })], X.prototype, "value", void 0),
  (X = r([T("esri.rest.support.ImageIdentifyResult")], X));
const Gi = X;
let Je = class extends U {
  constructor() {
    super(...arguments), (this.geometries = null);
  }
};
r([l({ json: { write: !0 } })], Je.prototype, "geometries", void 0),
  (Je = r([T("esri.rest.support.ImagePixelLocationResult")], Je));
const Li = Je;
let Ee = class extends le {
  constructor() {
    super(...arguments), (this.point = null);
  }
};
r(
  [l({ type: H, json: { name: "point.value", read: !0, write: !0 } })],
  Ee.prototype,
  "point",
  void 0
),
  (Ee = r([T("esri.rest.support.ImagePointResult")], Ee));
const Hi = Ee;
let re = class extends U {
  constructor() {
    super(...arguments),
      (this.attributes = null),
      (this.location = null),
      (this.locationId = null),
      (this.rasterId = null),
      (this.resolution = null),
      (this.pixelValue = null);
  }
};
r([l({ json: { write: !0 } })], re.prototype, "attributes", void 0),
  r([l({ type: H, json: { write: !0 } })], re.prototype, "location", void 0),
  r([l({ json: { write: !0 } })], re.prototype, "locationId", void 0),
  r([l({ json: { write: !0 } })], re.prototype, "rasterId", void 0),
  r([l({ json: { write: !0 } })], re.prototype, "resolution", void 0),
  r([l({ json: { write: !0 } })], re.prototype, "pixelValue", void 0),
  (re = r([T("esri.rest.support.ImageSample")], re));
const Ui = re;
let ze = class extends U {
  constructor() {
    super(...arguments), (this.samples = null);
  }
};
r([l({ type: [Ui], json: { write: !0 } })], ze.prototype, "samples", void 0),
  (ze = r([T("esri.rest.support.ImageSampleResult")], ze));
const Bi = ze;
function Pt(n) {
  const i = n == null ? void 0 : n.time;
  if (i && (i.start != null || i.end != null)) {
    const o = [];
    i.start != null && o.push(i.start),
      i.end == null || o.includes(i.end) || o.push(i.end),
      (n.time = o.join(","));
  }
}
async function Rt(n, i, o) {
  const e = ae(n),
    t = i.geometry ? [i.geometry] : [],
    s = await Ue(t),
    a = i.toJSON();
  Pt(a);
  const u = s && s[0];
  x(u) && (a.geometry = u.toJSON());
  const p = fe({ ...e.query, f: "json", ...a });
  return Re(p, o);
}
async function wt(n, i, o) {
  const e = ae(n),
    t = i.geometry ? [i.geometry] : [];
  return Ue(t)
    .then((s) => {
      const a = i.toJSON(),
        u = s && s[0];
      x(u) && (a.geometry = JSON.stringify(u.toJSON()));
      const p = fe({ ...e.query, f: "json", ...a }),
        c = Re(p, o);
      return _(e.path + "/identify", c);
    })
    .then((s) => Gi.fromJSON(s.data));
}
async function ki(n, i, o) {
  const e = await qe(n, i, [i.geometry], o);
  return Hi.fromJSON(e);
}
async function qe(n, i, o, e) {
  const t = ae(n),
    s = await Ue(o),
    a = i.toJSON();
  x(s[0]) && (a.fromGeometry = JSON.stringify(vt(s[0]))),
    x(s[1]) && (a.toGeometry = JSON.stringify(vt(s[1])));
  const u = fe({ ...t.query, f: "json", ...a }),
    p = Re(u, e),
    { data: c } = await _(t.path + "/measure", p);
  return c;
}
function vt(n) {
  var o;
  const i = n.toJSON();
  return (
    (o = n.spatialReference) != null &&
      o.imageCoordinateSystem &&
      (i.spatialReference = He(n.spatialReference)),
    i
  );
}
function He(n) {
  const { imageCoordinateSystem: i } = n;
  if (i) {
    const { id: o, referenceServiceName: e } = i;
    return o != null ? (e ? { icsid: o, icsns: e } : { icsid: o }) : { ics: i };
  }
  return n.toJSON();
}
function bt(n, i) {
  const o = He(n),
    { icsid: e, icsns: t, wkid: s } = o;
  return e != null
    ? t == null ||
      (i != null && i.toLowerCase().includes("/" + t.toLowerCase() + "/"))
      ? `0:${e}`
      : JSON.stringify(o)
    : s
    ? s.toString()
    : JSON.stringify(o);
}
var Ye;
let he = (Ye = class extends U {
  constructor(n) {
    super(n),
      (this.angleNames = null),
      (this.point = null),
      (this.spatialReference = null),
      (this.rasterId = null);
  }
  clone() {
    return new Ye(
      q({
        angleNames: this.angleNames,
        point: this.point,
        spatialReference: this.spatialReference,
        rasterId: this.rasterId,
      })
    );
  }
});
r(
  [l({ type: [String], json: { name: "angleName", write: !0 } })],
  he.prototype,
  "angleNames",
  void 0
),
  r([l({ type: H, json: { write: !0 } })], he.prototype, "point", void 0),
  r(
    [l({ type: ge, json: { write: !0 } })],
    he.prototype,
    "spatialReference",
    void 0
  ),
  r([l({ type: Ie, json: { write: !0 } })], he.prototype, "rasterId", void 0),
  (he = Ye = r([T("esri.rest.support.ImageAngleParameters")], he));
const Qi = he,
  Z = new _t({
    esriMensurationPoint: "point",
    esriMensurationCentroid: "centroid",
    esriMensurationDistanceAndAngle: "distance-and-angle",
    esriMensurationAreaAndPerimeter: "area-and-perimeter",
    esriMensurationHeightFromBaseAndTop: "base-and-top",
    esriMensurationHeightFromBaseAndTopShadow: "base-and-top-shadow",
    esriMensurationHeightFromTopAndTopShadow: "top-and-top-shadow",
    esriMensurationPoint3D: "point-3D",
    esriMensurationCentroid3D: "centroid-3D",
    esriMensurationDistanceAndAngle3D: "distance-and-angle-3D",
    esriMensurationAreaAndPerimeter3D: "area-and-perimeter-3D",
  });
let K = class extends U {
  constructor() {
    super(...arguments),
      (this.type = null),
      (this.measureOperation = null),
      (this.mosaicRule = null),
      (this.renderingRule = null),
      (this.pixelSize = null),
      (this.raster = void 0);
  }
};
var et;
r([l()], K.prototype, "type", void 0),
  r(
    [l({ type: Z.apiValues, json: { read: Z.read, write: Z.write } })],
    K.prototype,
    "measureOperation",
    void 0
  ),
  r([l({ type: Q, json: { write: !0 } })], K.prototype, "mosaicRule", void 0),
  r(
    [l({ type: I, json: { write: !0 } })],
    K.prototype,
    "renderingRule",
    void 0
  ),
  r([l({ type: H, json: { write: !0 } })], K.prototype, "pixelSize", void 0),
  r([l({ json: { write: !0 } })], K.prototype, "raster", void 0),
  (K = r([T("esri.rest.support.BaseImageMeasureParameters")], K));
let se = (et = class extends K {
  constructor() {
    super(...arguments),
      (this.type = "area-perimeter"),
      (this.geometry = null),
      (this.is3D = !1),
      (this.linearUnit = "meters"),
      (this.areaUnit = "square-meters");
  }
  writeGeometry(n, i, o) {
    n != null && ((i.geometryType = we(n)), (i[o] = n.toJSON()));
  }
  get measureOperation() {
    return this.is3D ? "area-and-perimeter-3D" : "area-and-perimeter";
  }
  clone() {
    return new et(
      q({
        geometry: this.geometry,
        is3D: this.is3D,
        linearUnit: this.linearUnit,
        areaUnit: this.areaUnit,
        mosaicRule: this.mosaicRule,
        renderingRule: this.renderingRule,
        pixelSize: this.pixelSize,
        raster: this.raster,
      })
    );
  }
});
r(
  [l({ types: Be, json: { name: "fromGeometry", read: !0, write: !0 } })],
  se.prototype,
  "geometry",
  void 0
),
  r([N("geometry")], se.prototype, "writeGeometry", null),
  r(
    [l({ type: Z.apiValues, json: { write: Z.write } })],
    se.prototype,
    "measureOperation",
    null
  ),
  r([l({ json: { read: !0 } })], se.prototype, "is3D", void 0),
  r(
    [l({ type: String, json: { read: pe.read, write: pe.write } })],
    se.prototype,
    "linearUnit",
    void 0
  ),
  r(
    [l({ type: String, json: { read: Ge.read, write: Ge.write } })],
    se.prototype,
    "areaUnit",
    void 0
  ),
  (se = et = r([T("esri.rest.support.ImageAreaParameters")], se));
const Wi = se;
var tt;
let Y = (tt = class extends K {
  constructor() {
    super(...arguments),
      (this.type = "distance-angle"),
      (this.fromGeometry = null),
      (this.toGeometry = null),
      (this.is3D = !1),
      (this.linearUnit = "meters"),
      (this.angularUnit = "degrees");
  }
  writeFromGeometry(n, i, o) {
    n != null && ((i.geometryType = we(n)), (i[o] = n.toJSON()));
  }
  get measureOperation() {
    return this.is3D ? "distance-and-angle-3D" : "distance-and-angle";
  }
  clone() {
    return new tt(
      q({
        fromGeometry: this.fromGeometry,
        toGeometry: this.toGeometry,
        is3D: this.is3D,
        linearUnit: this.linearUnit,
        angularUnit: this.angularUnit,
        mosaicRule: this.mosaicRule,
        renderingRule: this.renderingRule,
        pixelSize: this.pixelSize,
        raster: this.raster,
      })
    );
  }
});
r(
  [l({ type: H, json: { read: !0, write: !0 } })],
  Y.prototype,
  "fromGeometry",
  void 0
),
  r([N("fromGeometry")], Y.prototype, "writeFromGeometry", null),
  r(
    [l({ type: H, json: { read: !0, write: !0 } })],
    Y.prototype,
    "toGeometry",
    void 0
  ),
  r(
    [l({ type: Z.apiValues, json: { write: Z.write } })],
    Y.prototype,
    "measureOperation",
    null
  ),
  r([l({ json: { read: !0 } })], Y.prototype, "is3D", void 0),
  r(
    [l({ type: String, json: { read: pe.read, write: pe.write } })],
    Y.prototype,
    "linearUnit",
    void 0
  ),
  r(
    [l({ type: String, json: { read: Le.read, write: Le.write } })],
    Y.prototype,
    "angularUnit",
    void 0
  ),
  (Y = tt = r([T("esri.rest.support.ImageDistanceParameters")], Y));
const $i = Y;
var it;
let ne = (it = class extends K {
  constructor() {
    super(...arguments),
      (this.type = "height"),
      (this.fromGeometry = null),
      (this.toGeometry = null),
      (this.operationType = "base-and-top"),
      (this.linearUnit = "meters");
  }
  writeFromGeometry(n, i, o) {
    n != null && ((i.geometryType = we(n)), (i[o] = n.toJSON()));
  }
  get measureOperation() {
    return this.operationType;
  }
  clone() {
    return new it(
      q({
        fromGeometry: this.fromGeometry,
        toGeometry: this.toGeometry,
        operationType: this.operationType,
        linearUnit: this.linearUnit,
        mosaicRule: this.mosaicRule,
        renderingRule: this.renderingRule,
        pixelSize: this.pixelSize,
        raster: this.raster,
      })
    );
  }
});
r([l({ type: H, json: { read: !0 } })], ne.prototype, "fromGeometry", void 0),
  r([N("fromGeometry")], ne.prototype, "writeFromGeometry", null),
  r(
    [l({ type: H, json: { read: !0, write: !0 } })],
    ne.prototype,
    "toGeometry",
    void 0
  ),
  r(
    [l({ type: Z.apiValues, json: { write: Z.write } })],
    ne.prototype,
    "measureOperation",
    null
  ),
  r([l({ json: { read: !0 } })], ne.prototype, "operationType", void 0),
  r(
    [l({ type: String, json: { read: pe.read, write: pe.write } })],
    ne.prototype,
    "linearUnit",
    void 0
  ),
  (ne = it = r([T("esri.rest.support.ImageHeightParameters")], ne));
const Ki = ne;
var rt;
let ee = (rt = class extends U {
  constructor() {
    super(...arguments),
      (this.geometry = null),
      (this.mosaicRule = null),
      (this.renderingRule = null),
      (this.pixelSize = null),
      (this.raster = void 0),
      (this.timeExtent = null);
  }
  writeGeometry(n, i, o) {
    n != null && ((i.geometryType = we(n)), (i[o] = n.toJSON()));
  }
  clone() {
    return new rt(
      q({
        geometry: this.geometry,
        mosaicRule: this.mosaicRule,
        renderingRule: this.renderingRule,
        pixelSize: this.pixelSize,
        raster: this.raster,
        timeExtent: this.timeExtent,
      })
    );
  }
});
r([l({ types: Be, json: { read: ut } })], ee.prototype, "geometry", void 0),
  r([N("geometry")], ee.prototype, "writeGeometry", null),
  r([l({ type: Q, json: { write: !0 } })], ee.prototype, "mosaicRule", void 0),
  r(
    [l({ type: I, json: { write: !0 } })],
    ee.prototype,
    "renderingRule",
    void 0
  ),
  r([l({ type: H, json: { write: !0 } })], ee.prototype, "pixelSize", void 0),
  r([l({ json: { write: !0 } })], ee.prototype, "raster", void 0),
  r(
    [
      l({
        type: pt,
        json: { read: { source: "time" }, write: { target: "time" } },
      }),
    ],
    ee.prototype,
    "timeExtent",
    void 0
  ),
  (ee = rt = r([T("esri.rest.support.ImageHistogramParameters")], ee));
const St = ee;
var st;
let C = (st = class extends U {
  constructor() {
    super(...arguments),
      (this.geometry = null),
      (this.renderingRules = null),
      (this.pixelSize = null),
      (this.returnGeometry = !0),
      (this.returnCatalogItems = !0),
      (this.returnPixelValues = !0),
      (this.maxItemCount = null),
      (this.timeExtent = null),
      (this.raster = void 0),
      (this.viewId = void 0),
      (this.processAsMultidimensional = !1);
  }
  writeGeometry(n, i, o) {
    n != null &&
      ((i.geometryType = we(n)), (i[o] = JSON.stringify(n.toJSON())));
  }
  set mosaicRule(n) {
    let i = n;
    i &&
      i.mosaicMethod &&
      (i = Q.fromJSON({
        ...i.toJSON(),
        mosaicMethod: i.mosaicMethod,
        mosaicOperation: i.mosaicOperation,
      })),
      this._set("mosaicRule", i);
  }
  writeMosaicRule(n, i, o) {
    n != null && (i[o] = JSON.stringify(n.toJSON()));
  }
  set renderingRule(n) {
    let i = n;
    i &&
      i.rasterFunction &&
      (i = I.fromJSON({
        ...i.toJSON(),
        rasterFunction: i.rasterFunction,
        rasterFunctionArguments: i.rasterFunctionArguments,
      })),
      this._set("renderingRule", i);
  }
  writeRenderingRule(n, i, o) {
    n != null && (i[o] = JSON.stringify(n.toJSON())),
      n.rasterFunctionDefinition &&
        (i[o] = JSON.stringify(n.rasterFunctionDefinition));
  }
  writeRenderingRules(n, i, o) {
    n != null &&
      (i[o] = JSON.stringify(
        n.map((e) => e.rasterFunctionDefinition || e.toJSON())
      ));
  }
  writePixelSize(n, i, o) {
    n != null && (i[o] = JSON.stringify(n));
  }
  writeTimeExtent(n, i, o) {
    if (n != null) {
      const e = x(n.start) ? n.start.getTime() : null,
        t = x(n.end) ? n.end.getTime() : null;
      i[o] = e != null ? (t != null ? `${e},${t}` : `${e}`) : null;
    }
  }
  clone() {
    return new st(
      q({
        geometry: this.geometry,
        mosaicRule: this.mosaicRule,
        renderingRule: this.renderingRule,
        pixelSize: this.pixelSize,
        returnGeometry: this.returnGeometry,
        returnCatalogItems: this.returnCatalogItems,
        returnPixelValues: this.returnPixelValues,
        maxItemCount: this.maxItemCount,
        processAsMultidimensional: this.processAsMultidimensional,
        raster: this.raster,
        viewId: this.viewId,
        timeExtent: this.timeExtent,
      })
    );
  }
});
r([l({ json: { write: !0 } })], C.prototype, "geometry", void 0),
  r([N("geometry")], C.prototype, "writeGeometry", null),
  r([l({ type: Q, json: { write: !0 } })], C.prototype, "mosaicRule", null),
  r([N("mosaicRule")], C.prototype, "writeMosaicRule", null),
  r([l({ type: I, json: { write: !0 } })], C.prototype, "renderingRule", null),
  r([N("renderingRule")], C.prototype, "writeRenderingRule", null),
  r(
    [l({ type: [I], json: { write: !0 } })],
    C.prototype,
    "renderingRules",
    void 0
  ),
  r([N("renderingRules")], C.prototype, "writeRenderingRules", null),
  r([l({ type: H, json: { write: !0 } })], C.prototype, "pixelSize", void 0),
  r([N("pixelSize")], C.prototype, "writePixelSize", null),
  r(
    [l({ type: Boolean, json: { write: !0 } })],
    C.prototype,
    "returnGeometry",
    void 0
  ),
  r(
    [l({ type: Boolean, json: { write: !0 } })],
    C.prototype,
    "returnCatalogItems",
    void 0
  ),
  r(
    [l({ type: Boolean, json: { write: !0 } })],
    C.prototype,
    "returnPixelValues",
    void 0
  ),
  r(
    [l({ type: Number, json: { write: !0 } })],
    C.prototype,
    "maxItemCount",
    void 0
  ),
  r(
    [l({ type: pt, json: { write: { target: "time" } } })],
    C.prototype,
    "timeExtent",
    void 0
  ),
  r([N("timeExtent")], C.prototype, "writeTimeExtent", null),
  r([l({ json: { write: !0 } })], C.prototype, "raster", void 0),
  r([l({ json: { write: !0 } })], C.prototype, "viewId", void 0),
  r(
    [l({ type: Boolean, json: { write: !0 } })],
    C.prototype,
    "processAsMultidimensional",
    void 0
  ),
  (C = st = r([T("esri.rest.support.ImageIdentifyParameters")], C));
const xt = C;
var nt;
let Se = (nt = class extends U {
  constructor() {
    super(...arguments), (this.geometries = null), (this.rasterId = null);
  }
  writeGeometry(n, i, o) {
    i.geometries = {
      geometryType: "esriGeometryPoint",
      geometries: n.map((e) => e.toJSON()),
    };
  }
  clone() {
    var n;
    return new nt({
      geometries:
        ((n = this.geometries) == null ? void 0 : n.map((i) => i.clone())) ??
        [],
      rasterId: this.rasterId,
    });
  }
});
r([l({ type: [H], json: { write: !0 } })], Se.prototype, "geometries", void 0),
  r([N("geometries")], Se.prototype, "writeGeometry", null),
  r([l({ type: Ie, json: { write: !0 } })], Se.prototype, "rasterId", void 0),
  (Se = nt = r([T("esri.rest.support.ImagePixelLocationParameters")], Se));
const Zi = Se;
var at;
let ye = (at = class extends K {
  constructor() {
    super(...arguments),
      (this.type = "point"),
      (this.geometry = null),
      (this.is3D = !1);
  }
  writeGeometry(n, i, o) {
    n != null && ((i.geometryType = we(n)), (i[o] = n.toJSON()));
  }
  get measureOperation() {
    const { is3D: n, geometry: i } = this;
    return i.type === "point"
      ? n
        ? "point-3D"
        : "point"
      : n
      ? "centroid-3D"
      : "centroid";
  }
  clone() {
    return new at(
      q({
        geometry: this.geometry,
        is3D: this.is3D,
        mosaicRule: this.mosaicRule,
        renderingRule: this.renderingRule,
        pixelSize: this.pixelSize,
        raster: this.raster,
      })
    );
  }
});
r(
  [l({ types: Be, json: { name: "fromGeometry", read: ut } })],
  ye.prototype,
  "geometry",
  void 0
),
  r([N("geometry")], ye.prototype, "writeGeometry", null),
  r(
    [l({ type: Z.apiValues, json: { read: Z.read, write: Z.write } })],
    ye.prototype,
    "measureOperation",
    null
  ),
  r([l({ json: { read: !0 } })], ye.prototype, "is3D", void 0),
  (ye = at = r([T("esri.rest.support.ImagePointParameters")], ye));
const Xi = ye;
var ot;
let G = (ot = class extends U {
  constructor() {
    super(...arguments),
      (this.geometry = null),
      (this.interpolation = "nearest"),
      (this.mosaicRule = null),
      (this.outFields = null),
      (this.pixelSize = null),
      (this.returnFirstValueOnly = !0),
      (this.sampleDistance = null),
      (this.sampleCount = null),
      (this.sliceId = null),
      (this.timeExtent = null);
  }
  writeGeometry(n, i, o) {
    n != null && ((i.geometryType = we(n)), (i[o] = n.toJSON()));
  }
  set locations(n) {
    if (n != null && n.length) {
      const i = new jt({ spatialReference: n[0].spatialReference });
      (i.points = n.map((o) => [o.x, o.y])),
        this._set("locations", n),
        (this.geometry = i);
    }
  }
  clone() {
    return new ot(
      q({
        geometry: this.geometry,
        locations: this.locations,
        interpolation: this.interpolation,
        mosaicRule: this.mosaicRule,
        outFields: this.outFields,
        raster: this.raster,
        returnFirstValueOnly: this.returnFirstValueOnly,
        sampleDistance: this.sampleDistance,
        sampleCount: this.sampleCount,
        sliceId: this.sliceId,
        pixelSize: this.pixelSize,
        timeExtent: this.timeExtent,
      })
    );
  }
});
r([l({ types: Be, json: { read: ut } })], G.prototype, "geometry", void 0),
  r([N("geometry")], G.prototype, "writeGeometry", null),
  r([l()], G.prototype, "locations", null),
  r(
    [
      l({
        type: String,
        json: { type: ue.jsonValues, read: ue.read, write: ue.write },
      }),
    ],
    G.prototype,
    "interpolation",
    void 0
  ),
  r([l({ type: Q, json: { write: !0 } })], G.prototype, "mosaicRule", void 0),
  r(
    [l({ type: [String], json: { write: !0 } })],
    G.prototype,
    "outFields",
    void 0
  ),
  r([l({ type: H, json: { write: !0 } })], G.prototype, "pixelSize", void 0),
  r([l({ type: String, json: { write: !0 } })], G.prototype, "raster", void 0),
  r(
    [l({ type: Boolean, json: { write: !0 } })],
    G.prototype,
    "returnFirstValueOnly",
    void 0
  ),
  r(
    [l({ type: Number, json: { write: !0 } })],
    G.prototype,
    "sampleDistance",
    void 0
  ),
  r(
    [l({ type: Number, json: { write: !0 } })],
    G.prototype,
    "sampleCount",
    void 0
  ),
  r([l({ type: Number, json: { write: !0 } })], G.prototype, "sliceId", void 0),
  r(
    [
      l({
        type: pt,
        json: { read: { source: "time" }, write: { target: "time" } },
      }),
    ],
    G.prototype,
    "timeExtent",
    void 0
  ),
  (G = ot = r([T("esri.rest.support.ImageSampleParameters")], G));
const Yi = G,
  Ke = lt()({
    U1: "u1",
    U2: "u2",
    U4: "u4",
    U8: "u8",
    S8: "s8",
    U16: "u16",
    S16: "s16",
    U32: "u32",
    S32: "s32",
    F32: "f32",
    F64: "f64",
    C64: "c64",
    C128: "c128",
    UNKNOWN: "unknown",
  }),
  er = new Set([
    "png",
    "png8",
    "png24",
    "png32",
    "jpg",
    "bmp",
    "gif",
    "jpgpng",
    "lerc",
    "tiff",
  ]),
  tr = Lt(Ht, { min: 0, max: 255 }),
  ir = (n) => {
    let i = class extends n {
      constructor() {
        super(...arguments),
          (this._functionRasterInfos = {}),
          (this._rasterJobHandler = {
            instance: null,
            refCount: 0,
            connectionPromise: null,
          }),
          (this._cachedRendererJson = null),
          (this._serviceSupportsMosaicRule = null),
          (this._rasterAttributeTableFieldPrefix = "Raster."),
          (this.adjustAspectRatio = null),
          (this.bandIds = void 0),
          (this.capabilities = null),
          (this.compressionQuality = void 0),
          (this.compressionTolerance = 0.01),
          (this.copyright = null),
          (this.defaultMosaicRule = null),
          (this.definitionExpression = null),
          (this.exportImageServiceParameters = null),
          (this.rasterInfo = null),
          (this.fields = null),
          (this.fullExtent = null),
          (this.hasMultidimensions = !1),
          (this.imageMaxHeight = 4100),
          (this.imageMaxWidth = 4100),
          (this.interpolation = void 0),
          (this.minScale = 0),
          (this.maxScale = 0),
          (this.multidimensionalInfo = null),
          (this.multidimensionalSubset = null),
          (this.noData = null),
          (this.noDataInterpretation = void 0),
          (this.objectIdField = null),
          (this.geometryType = "polygon"),
          (this.typeIdField = null),
          (this.types = []),
          (this.pixelFilter = null),
          (this.raster = void 0),
          (this.sourceType = null),
          (this.viewId = void 0),
          (this.symbolizer = null),
          (this.rasterFunctionInfos = null),
          (this.serviceDataType = null),
          (this.spatialReference = null),
          (this.pixelType = null),
          (this.serviceRasterInfo = null),
          (this.sourceJSON = null),
          (this.url = null),
          (this.version = void 0);
      }
      initialize() {
        this._set("exportImageServiceParameters", new O({ layer: this }));
      }
      readServiceSupportsMosaicRule(e, t) {
        return this._isMosaicRuleSupported(t);
      }
      get _rasterFunctionNamesIndex() {
        const e = new Map();
        return (
          !this.rasterFunctionInfos ||
            (x(this.rasterFunctionInfos) &&
              this.rasterFunctionInfos.length < 1) ||
            (x(this.rasterFunctionInfos) &&
              this.rasterFunctionInfos.forEach((t) => {
                e.set(t.name.toLowerCase().replace(/ /gi, "_"), t.name);
              })),
          e
        );
      }
      readBandIds(e, t) {
        if (
          Array.isArray(e) &&
          e.length > 0 &&
          e.every((s) => typeof s == "number")
        )
          return e;
      }
      readCapabilities(e, t) {
        return this._readCapabilities(t);
      }
      writeCompressionQuality(e, t, s) {
        e != null && this.format !== "lerc" && (t[s] = e);
      }
      writeCompressionTolerance(e, t, s) {
        this.format === "lerc" && e != null && (t[s] = e);
      }
      readDefaultMosaicRule(e, t) {
        return this._serviceSupportsMosaicRule ? Q.fromJSON(t) : null;
      }
      get fieldsIndex() {
        return this.fields ? new At(this.fields) : null;
      }
      set format(e) {
        e && er.has(e.toLowerCase()) && this._set("format", e.toLowerCase());
      }
      readFormat(e, t) {
        return t.serviceDataType === "esriImageServiceDataTypeVector-UV" ||
          t.serviceDataType === "esriImageServiceDataTypeVector-MagDir" ||
          this.pixelFilter != null
          ? "lerc"
          : "jpgpng";
      }
      readMinScale(e, t) {
        return t.minLOD != null && t.maxLOD != null ? e : 0;
      }
      readMaxScale(e, t) {
        return t.minLOD != null && t.maxLOD != null ? e : 0;
      }
      set mosaicRule(e) {
        let t = e;
        t &&
          t.mosaicMethod &&
          (t = Q.fromJSON({
            ...t.toJSON(),
            mosaicMethod: t.mosaicMethod,
            mosaicOperation: t.mosaicOperation,
          })),
          this._set("mosaicRule", t);
      }
      readMosaicRule(e, t) {
        const s = e || t.mosaicRule;
        return s
          ? Q.fromJSON(s)
          : this._isMosaicRuleSupported(t)
          ? Q.fromJSON(t)
          : null;
      }
      writeMosaicRule(e, t, s) {
        let a = this.mosaicRule;
        const u = this.definitionExpression;
        a
          ? u && u !== a.where && ((a = a.clone()), (a.where = u))
          : u && (a = new Q({ where: u })),
          this._isValidCustomizedMosaicRule(a) && (t[s] = a.toJSON());
      }
      writeNoData(e, t, s) {
        e != null && typeof e == "number" && (t[s] = tr(e));
      }
      readObjectIdField(e, t) {
        if (!e) {
          const s = t.fields.filter(
            (a) => a.type === "esriFieldTypeOID" || a.type === "oid"
          );
          e = s && s[0] && s[0].name;
        }
        return e;
      }
      get parsedUrl() {
        return Jt(this.url);
      }
      readSourceType(e, t) {
        return this._isMosaicDataset(t) ? "mosaic-dataset" : "raster-dataset";
      }
      set renderer(e) {
        this.loaded && (e = this._configRenderer(e)), this._set("renderer", e);
      }
      readRenderer(e, t, s) {
        var p, c;
        const a =
            (c =
              (p = t == null ? void 0 : t.layerDefinition) == null
                ? void 0
                : p.drawingInfo) == null
              ? void 0
              : c.renderer,
          u = ui(a, s);
        return u == null
          ? null
          : (u.type === "vector-field" &&
              t.symbolTileSize &&
              !a.symbolTileSize &&
              (u.symbolTileSize = t.symbolTileSize),
            Dt(u) ||
              ct
                .getLogger(this.declaredClass)
                .warn(
                  "ArcGISImageService",
                  "Imagery layer doesn't support given renderer type."
                ),
            u);
      }
      writeRenderer(e, t, s) {
        (t.layerDefinition = t.layerDefinition || {}),
          (t.layerDefinition.drawingInfo = t.layerDefinition.drawingInfo || {}),
          (t.layerDefinition.drawingInfo.renderer = e.toJSON()),
          e.type === "vector-field" && (t.symbolTileSize = e.symbolTileSize);
      }
      get rasterFields() {
        var c;
        const e = this._rasterAttributeTableFieldPrefix || "Raster.",
          t = new de({
            name: "Raster.ItemPixelValue",
            alias: "Item Pixel Value",
            domain: null,
            editable: !1,
            length: 50,
            type: "string",
          }),
          s = new de({
            name: "Raster.ServicePixelValue",
            alias: "Service Pixel Value",
            domain: null,
            editable: !1,
            length: 50,
            type: "string",
          }),
          a = new de({
            name: "Raster.ServicePixelValue.Raw",
            alias: "Raw Service Pixel Value",
            domain: null,
            editable: !1,
            length: 50,
            type: "string",
          });
        let u = this.fields ? q(this.fields) : [];
        u.push(s),
          (c = this.capabilities) != null &&
            c.operations.supportsQuery &&
            this.fields &&
            this.fields.length > 0 &&
            u.push(t),
          this.version >= 10.4 &&
            x(this.rasterFunctionInfos) &&
            this.rasterFunctionInfos.some(
              (d) => d.name.toLowerCase() === "none"
            ) &&
            u.push(a),
          x(this.rasterFunctionInfos) &&
            this.rasterFunctionInfos
              .filter((d) => d.name.toLowerCase() !== "none")
              .forEach((d) => {
                u.push(
                  new de({
                    name: "Raster.ServicePixelValue." + d.name,
                    alias: d.name,
                    domain: null,
                    editable: !1,
                    length: 50,
                    type: "string",
                  })
                );
              }),
          this._isVectorDataSet() &&
            (u.push(
              new de({
                name: "Raster.Magnitude",
                alias: "Magnitude",
                domain: null,
                editable: !1,
                type: "double",
              })
            ),
            u.push(
              new de({
                name: "Raster.Direction",
                alias: "Direction",
                domain: null,
                editable: !1,
                type: "double",
              })
            ));
        const { attributeTable: p } = this.rasterInfo ?? {};
        if (x(p)) {
          const d = p.fields
            .filter(
              (m) =>
                m.type !== "esriFieldTypeOID" &&
                m.name.toLowerCase() !== "value"
            )
            .map((m) => {
              const h = q(m);
              return (h.name = e + m.name), h;
            });
          u = u.concat(d);
        }
        return u;
      }
      set renderingRule(e) {
        let t = e;
        t &&
          t.rasterFunction &&
          (t = I.fromJSON({
            ...t.toJSON(),
            rasterFunction: t.rasterFunction,
            rasterFunctionArguments: t.rasterFunctionArguments,
          })),
          this._set("renderingRule", t);
      }
      readRenderingRule(e, t) {
        const s = t.rasterFunctionInfos;
        return t.renderingRule || (s && s.length && s[0].name !== "None")
          ? this._isRFTJson(t.renderingRule)
            ? I.fromJSON({ rasterFunctionDefinition: t.renderingRule })
            : I.fromJSON(
                t.renderingRule || {
                  rasterFunctionInfos: t.rasterFunctionInfos,
                }
              )
          : null;
      }
      writeRenderingRule(e, t, s) {
        const a = e.toJSON();
        a.rasterFunctionDefinition
          ? (t[s] = a.rasterFunctionDefinition)
          : (t[s] = a);
      }
      readSpatialReference(e, t) {
        const s = e || t.extent.spatialReference;
        return s ? ge.fromJSON(s) : null;
      }
      readPixelType(e) {
        return Ke.fromJSON(e) || e;
      }
      writePixelType(e, t, s) {
        (k(this.serviceRasterInfo) ||
          this.pixelType !== this.serviceRasterInfo.pixelType) &&
          (t[s] = Ke.toJSON(e));
      }
      readVersion(e, t) {
        let s = t.currentVersion;
        return (
          s ||
            (s =
              t.hasOwnProperty("fields") || t.hasOwnProperty("timeInfo")
                ? 10
                : 9.3),
          s
        );
      }
      applyFilter(e) {
        let t = e;
        return (
          this.pixelFilter &&
            ((t = this._clonePixelData(e)), this.pixelFilter(t)),
          t
        );
      }
      async applyRenderer(e, t) {
        let s = e;
        const { renderer: a, symbolizer: u, pixelFilter: p, bandIds: c } = this;
        if (!this._isPicture() && a && u && !p) {
          const d =
              JSON.stringify(this._cachedRendererJson) !==
              JSON.stringify(a.toJSON()),
            m = this._rasterJobHandler.instance;
          if (m) {
            d &&
              (u.bind(),
              await m.updateSymbolizer(u, t),
              (this._cachedRendererJson = a.toJSON()));
            const h = await m.symbolize({ bandIds: c, ...e }, t);
            s = { extent: e.extent, pixelBlock: h };
          } else
            s = {
              extent: e.extent,
              pixelBlock: u.symbolize({ bandIds: c, ...e }),
            };
        }
        return s;
      }
      destroy() {
        this._shutdownJobHandler();
      }
      increaseRasterJobHandlerUsage() {
        this._rasterJobHandler.refCount++;
      }
      decreaseRasterJobHandlerUsage() {
        this._rasterJobHandler.refCount--,
          this._rasterJobHandler.refCount <= 0 && this._shutdownJobHandler();
      }
      async computeAngles(e, t) {
        if (
          !(await this._fetchCapabilities(t == null ? void 0 : t.signal))
            .operations.supportsComputeAngles
        )
          throw new M(
            "imagery-layer:compute-angles",
            "this operation is not supported on the input image service"
          );
        return (
          (e = W(Qi, e).clone()),
          (async function (s, a, u) {
            var w;
            const p = a.toJSON();
            x(p.angleName) && (p.angleName = p.angleName.join(",")),
              x(a.point) &&
                (w = a.point.spatialReference) != null &&
                w.imageCoordinateSystem &&
                (p.point.spatialReference = He(a.point.spatialReference)),
              x(a.spatialReference) &&
                a.spatialReference.imageCoordinateSystem &&
                (p.spatialReference = bt(a.spatialReference));
            const c = ae(s),
              d = fe({ ...c.query, f: "json", ...p }),
              m = Re(d, u),
              { data: h } = await _(`${c.path}/computeAngles`, m);
            return (
              (h.spatialReference = h.spatialReference
                ? h.spatialReference.geodataXform != null
                  ? new ge({
                      wkid: 0,
                      imageCoordinateSystem: h.spatialReference,
                    })
                  : ge.fromJSON(h.spatialReference)
                : null),
              h.north === "NaN" && (h.north = null),
              h.up === "NaN" && (h.up = null),
              new Ji(h)
            );
          })(this.url, e, this._getRequestOptions(t))
        );
      }
      async computePixelSpaceLocations(e, t) {
        if (
          !(await this._fetchCapabilities(t == null ? void 0 : t.signal))
            .operations.supportsComputePixelLocation
        )
          throw new M(
            "imagery-layer:compute-pixel-space-locations",
            "this operation is not supported on the input image service"
          );
        return (
          (e = W(Zi, e).clone()),
          (async function (s, a, u) {
            var v;
            const p = a.toJSON(),
              { geometries: c } = a;
            if (c)
              for (let R = 0; R < c.length; R++)
                (v = c[R].spatialReference) != null &&
                  v.imageCoordinateSystem &&
                  (p.geometries.geometries[R].spatialReference = He(
                    c[R].spatialReference
                  ));
            const d = ae(s),
              m = fe({ ...d.query, f: "json", ...p }),
              h = Re(m, u),
              { data: w } = await _(`${d.path}/computePixelLocation`, h);
            return Li.fromJSON(w);
          })(this.url, e, this._getRequestOptions(t))
        );
      }
      async computeHistograms(e, t) {
        if (
          !(await this._fetchCapabilities(t == null ? void 0 : t.signal))
            .operations.supportsComputeHistograms
        )
          throw new M(
            "imagery-layer:compute-histograms",
            "this operation is not supported on the input image service"
          );
        return (
          (e = W(St, e).clone()),
          this._applyMosaicAndRenderingRules(e),
          (async function (s, a, u) {
            const p = await Rt(s, a, u),
              c = ae(s),
              { data: d } = await _(`${c.path}/computeHistograms`, p);
            return { histograms: d.histograms };
          })(this.url, e, this._getRequestOptions(t))
        );
      }
      async computeStatisticsHistograms(e, t) {
        if (
          !(await this._fetchCapabilities(t == null ? void 0 : t.signal))
            .operations.supportsComputeStatisticsHistograms
        )
          throw new M(
            "imagery-layer:compute-statistics-histograms",
            "this operation is not supported on the input image service"
          );
        return (
          (e = W(St, e).clone()),
          this._applyMosaicAndRenderingRules(e),
          (async function (s, a, u) {
            const p = await Rt(s, a, u),
              c = ae(s),
              { data: d } = await _(`${c.path}/computeStatisticsHistograms`, p),
              { statistics: m } = d;
            return (
              m != null &&
                m.length &&
                m.forEach((h) => {
                  (h.avg = h.mean), (h.stddev = h.standardDeviation);
                }),
              { statistics: m, histograms: d.histograms }
            );
          })(this.url, e, this._getRequestOptions(t))
        );
      }
      async measureHeight(e, t) {
        const s = await this._fetchCapabilities(t == null ? void 0 : t.signal);
        if (
          !(e.operationType === "base-and-top"
            ? s.mensuration.supportsHeightFromBaseAndTop
            : e.operationType === "base-and-top-shadow"
            ? s.mensuration.supportsHeightFromBaseAndTopShadow
            : s.mensuration.supportsHeightFromTopAndTopShadow)
        )
          throw new M(
            "imagery-layer:measure-height",
            "this operation is not supported on the input image service"
          );
        return (
          (e = W(Ki, e).clone()),
          this._applyMosaicAndRenderingRules(e),
          (async function (a, u, p) {
            const c = await qe(a, u, [u.fromGeometry, u.toGeometry], p);
            return qi.fromJSON(c);
          })(this.url, e, this._getRequestOptions(t))
        );
      }
      async measureAreaAndPerimeter(e, t) {
        const s = await this._fetchCapabilities(t == null ? void 0 : t.signal);
        if (
          !s.mensuration.supportsAreaAndPerimeter ||
          (e.is3D && !s.mensuration.supports3D)
        )
          throw new M(
            "imagery-layer:measure-area-and-perimeter",
            "this operation is not supported on the input image service"
          );
        return (
          (e = W(Wi, e).clone()),
          this._applyMosaicAndRenderingRules(e),
          (async function (a, u, p) {
            const c = await qe(a, u, [u.geometry], p);
            return Ei.fromJSON(c);
          })(this.url, e, this._getRequestOptions(t))
        );
      }
      async measureDistanceAndAngle(e, t) {
        const s = await this._fetchCapabilities(t == null ? void 0 : t.signal);
        if (
          !s.mensuration.supportsDistanceAndAngle ||
          (e.is3D && !s.mensuration.supports3D)
        )
          throw new M(
            "imagery-layer:measure-distance-and-angle",
            "this operation is not supported on the input image service"
          );
        return (
          (e = W($i, e).clone()),
          this._applyMosaicAndRenderingRules(e),
          (async function (a, u, p) {
            const c = await qe(a, u, [u.fromGeometry, u.toGeometry], p);
            return zi.fromJSON(c);
          })(this.url, e, this._getRequestOptions(t))
        );
      }
      async measurePointOrCentroid(e, t) {
        const s = await this._fetchCapabilities(t == null ? void 0 : t.signal);
        if (
          !s.mensuration.supportsPointOrCentroid ||
          (e.is3D && !s.mensuration.supports3D)
        )
          throw new M(
            "imagery-layer:measure-point-or-centroid",
            "this operation is not supported on the input image service"
          );
        return (
          (e = W(Xi, e).clone()),
          this._applyMosaicAndRenderingRules(e),
          ki(this.url, e, this._getRequestOptions(t))
        );
      }
      getField(e) {
        const { fieldsIndex: t } = this;
        return x(t) ? t.get(e) : void 0;
      }
      getFieldDomain(e, t) {
        const s = this.getField(e);
        return s ? s.domain : null;
      }
      async fetchImage(e, t, s, a = {}) {
        if (e == null || t == null || s == null)
          throw new M(
            "imagery-layer:fetch-image",
            "Insufficient parameters for requesting an image. A valid extent, width and height values are required."
          );
        if (this.renderer || this.symbolizer) {
          const m = await this.generateRasterInfo(this.renderingRule, {
            signal: a.signal,
          });
          m && (this.rasterInfo = m);
        }
        const u = this.getExportImageServiceParameters(e, t, s, a.timeExtent);
        if (u == null) {
          if (
            a.requestAsImageElement &&
            this._canRequestImageElement(this.format)
          ) {
            const g = document.createElement("canvas");
            return (
              (g.width = t),
              (g.height = s),
              a.returnImageBitmap
                ? {
                    imageBitmap: await gt(
                      g,
                      `${o(this.parsedUrl)}/exportImage`
                    ),
                  }
                : { imageOrCanvasElement: g }
            );
          }
          const { bandIds: m, rasterInfo: h } = this,
            w = ((m == null ? void 0 : m.length) || h.bandCount) ?? 0,
            v = t * s,
            R = h.pixelType,
            y = [];
          for (let g = 0; g < w; g++) y.push(We.createEmptyBand(R, v));
          return {
            pixelData: {
              pixelBlock: new We({
                width: t,
                height: s,
                pixels: y,
                mask: new Uint8Array(v),
                pixelType: R,
              }),
              extent: e,
            },
          };
        }
        const p = !!a.requestAsImageElement && !this.pixelFilter,
          c = p && !!a.returnImageBitmap,
          d = {
            imageServiceParameters: u,
            imageProps: { extent: e, width: t, height: s, format: this.format },
            requestAsImageElement: p,
            returnImageBitmap: c,
            signal: a.signal,
          };
        return this._requestArrayBuffer(d);
      }
      fetchKeyProperties(e) {
        return _(o(this.parsedUrl) + "/keyProperties", {
          query: this._getQueryParams({
            renderingRule:
              this.version >= 10.3
                ? e == null
                  ? void 0
                  : e.renderingRule
                : null,
          }),
        }).then((t) => t.data);
      }
      fetchRasterAttributeTable(e) {
        return this.version < 10.1
          ? Promise.reject(
              new M(
                "#fetchRasterAttributeTable()",
                "Failed to get rasterAttributeTable"
              )
            )
          : _(o(this.parsedUrl) + "/rasterAttributeTable", {
              query: this._getQueryParams({
                renderingRule:
                  this.version >= 10.3
                    ? e == null
                      ? void 0
                      : e.renderingRule
                    : null,
              }),
            }).then((t) => It.fromJSON(t.data));
      }
      getCatalogItemRasterInfo(e, t) {
        const s = { ...t, query: this._getQueryParams() };
        return (async function (a, u, p) {
          var E, V;
          const c = ae(a),
            d = fe({ ...(c == null ? void 0 : c.query), f: "json" }),
            m = Re(d, p),
            h = `${c == null ? void 0 : c.path}/${u}/info`,
            w = _(`${h}`, m),
            v = _(`${h}/keyProperties`, m),
            R = await Promise.allSettled([w, v]),
            y = R[0].status === "fulfilled" ? R[0].value.data : null,
            g = R[1].status === "fulfilled" ? R[1].value.data : null;
          let f = null;
          (E = y.statistics) != null &&
            E.length &&
            (f = y.statistics.map((B) => ({
              min: B[0],
              max: B[1],
              avg: B[2],
              stddev: B[3],
            })));
          const b = _e.fromJSON(y.extent),
            S = Math.ceil(b.width / y.pixelSizeX - 0.1),
            F = Math.ceil(b.height / y.pixelSizeY - 0.1),
            J = b.spatialReference,
            L = new H({
              x: y.pixelSizeX,
              y: y.pixelSizeY,
              spatialReference: J,
            }),
            j = (V = y.histograms) != null && V.length ? y.histograms : null,
            P = new Fi({
              origin: y.origin,
              blockWidth: y.blockWidth,
              blockHeight: y.blockHeight,
              firstPyramidLevel: y.firstPyramidLevel,
              maximumPyramidLevel: y.maxPyramidLevel,
            });
          return new ht({
            width: S,
            height: F,
            bandCount: y.bandCount,
            extent: b,
            spatialReference: J,
            pixelSize: L,
            pixelType: y.pixelType.toLowerCase(),
            statistics: f,
            histograms: j,
            keyProperties: g,
            storageInfo: P,
          });
        })(o(this.parsedUrl), e, s);
      }
      async getCatalogItemICSInfo(e, t) {
        var ce, me, ie;
        const { data: s } = await _(o(this.parsedUrl) + "/" + e + "/info/ics", {
            query: this._getQueryParams(),
            ...t,
          }),
          a = s && s.ics;
        if (!a) return;
        let u = null;
        try {
          u = (
            await _(o(this.parsedUrl) + "/" + e + "/info", {
              query: this._getQueryParams(),
              ...t,
            })
          ).data.extent;
        } catch {}
        if (!u || !u.spatialReference)
          return {
            ics: a,
            icsToPixelTransform: null,
            icsExtent: null,
            northDirection: null,
          };
        const p =
            this.version >= 10.7
              ? _(o(this.parsedUrl) + "/" + e + "/info/icstopixel", {
                  query: this._getQueryParams(),
                  ...t,
                })
                  .then((D) => D.data)
                  .catch(() => ({}))
              : {},
          c = u.spatialReference,
          d = {
            geometries: JSON.stringify({
              geometryType: "esriGeometryEnvelope",
              geometries: [u],
            }),
            inSR: c.wkid || JSON.stringify(c),
            outSR: "0:" + e,
          },
          m = _(o(this.parsedUrl) + "/project", {
            query: this._getQueryParams(d),
            ...t,
          })
            .then((D) => D.data)
            .catch(() => ({})),
          h = (u.xmin + u.xmax) / 2,
          w = (u.ymax - u.ymin) / 6,
          v = u.ymin + w,
          R = [];
        for (let D = 0; D < 5; D++) R.push({ x: h, y: v + w * D });
        const y = {
            geometries: JSON.stringify({
              geometryType: "esriGeometryPoint",
              geometries: R,
            }),
            inSR: c.wkid || JSON.stringify(c),
            outSR: "0:" + e,
          },
          g = _(o(this.parsedUrl) + "/project", {
            query: this._getQueryParams(y),
            ...t,
          })
            .then((D) => D.data)
            .catch(() => ({})),
          f = await Promise.all([p, m, g]);
        let b = f[0].ipxf;
        if (b == null) {
          const D = (ce = a.geodataXform) == null ? void 0 : ce.xf_0;
          ((me = D == null ? void 0 : D.name) == null
            ? void 0
            : me.toLowerCase()) === "topup" &&
            ((ie = D == null ? void 0 : D.coefficients) == null
              ? void 0
              : ie.length) === 6 &&
            (b = {
              affine: {
                name: "ics [sensor: Frame] to pixel (column, row) transformation",
                coefficients: D.coefficients,
                cellsizeRatio: 0,
                type: "GeometricXform",
              },
            });
        }
        const S = _e.fromJSON(f[1] && f[1].geometries && f[1].geometries[0]);
        S &&
          (S.spatialReference = new ge({ wkid: 0, imageCoordinateSystem: a }));
        const F = f[2].geometries
            ? f[2].geometries.filter(
                (D) =>
                  D != null &&
                  D.x != null &&
                  D.y != null &&
                  D.x !== "NaN" &&
                  D.y !== "NaN"
              )
            : [],
          J = F.length;
        if (J < 3)
          return {
            ics: a,
            icsToPixelTransform: b,
            icsExtent: S,
            northDirection: null,
          };
        let L = 0,
          j = 0,
          P = 0,
          E = 0;
        for (let D = 0; D < J; D++)
          (L += F[D].x),
            (j += F[D].y),
            (P += F[D].x * F[D].x),
            (E += F[D].x * F[D].y);
        const V = (J * E - L * j) / (J * P - L * L);
        let B = 0;
        const Oe = F[4].x > F[0].x,
          Ce = F[4].y > F[0].y;
        return (
          V === 1 / 0
            ? (B = Ce ? 90 : 270)
            : V === 0
            ? (B = Oe ? 0 : 180)
            : V > 0
            ? (B = Oe
                ? (180 * Math.atan(V)) / Math.PI
                : (180 * Math.atan(V)) / Math.PI + 180)
            : V < 0 &&
              (B = Ce
                ? 180 + (180 * Math.atan(V)) / Math.PI
                : 360 + (180 * Math.atan(V)) / Math.PI),
          { ics: a, icsToPixelTransform: b, icsExtent: S, northDirection: B }
        );
      }
      async generateRasterInfo(e, t) {
        var u;
        if (
          ((e = W(I, e)),
          this.serviceRasterInfo &&
            (!e ||
              ((u = e.functionName) == null ? void 0 : u.toLowerCase()) ===
                "none" ||
              this._isVectorFieldResampleFunction(e)))
        )
          return this.serviceRasterInfo;
        const s = (function (p) {
          var d;
          if (!p) return null;
          const c =
            (d = JSON.stringify(p).match(/"rasterFunction":"(.*?")/gi)) == null
              ? void 0
              : d.map((m) =>
                  m.replace('"rasterFunction":"', "").replace('"', "")
                );
          return c ? c.join("/") : null;
        })(e);
        if (!s) return null;
        if (this._functionRasterInfos[s]) return this._functionRasterInfos[s];
        const a = this._generateRasterInfo(e, t);
        this._functionRasterInfos[s] = a;
        try {
          return await a;
        } catch {
          return (this._functionRasterInfos[s] = null), null;
        }
      }
      getExportImageServiceParameters(e, t, s, a) {
        var y;
        const u = bt(
          (e = e.clone().shiftCentralMeridian()).spatialReference,
          o(this.parsedUrl)
        );
        this.pixelType !== this.serviceRasterInfo.pixelType &&
          (this.exportImageServiceParameters.pixelType = this.pixelType);
        const p = this.exportImageServiceParameters.toJSON(),
          { bandIds: c, noData: d } = p;
        let { renderingRule: m } = p;
        const h =
            (y = this.renderingRule) == null
              ? void 0
              : y.rasterFunctionDefinition,
          w = !this.renderer || this.renderer.type === "raster-stretch";
        if (
          c != null &&
          c.length &&
          this._hasRenderingRule(this.renderingRule) &&
          !h &&
          w
        ) {
          const g = {
            rasterFunction: "ExtractBand",
            rasterFunctionArguments: { BandIds: c },
          };
          if (m.rasterFunction === "Stretch")
            (g.rasterFunctionArguments.Raster =
              m.rasterFunctionArguments.Raster),
              (m.rasterFunctionArguments.Raster = g);
          else if (m.rasterFunction === "Colormap") {
            const f = m.rasterFunctionArguments.Raster;
            (f == null ? void 0 : f.rasterFunction) === "Stretch"
              ? ((g.rasterFunctionArguments.Raster =
                  f.rasterFunctionArguments.Raster),
                (f.rasterFunctionArguments.Raster = g))
              : ((g.rasterFunctionArguments.Raster = f),
                (m.rasterFunctionArguments.Raster = g));
          } else (g.rasterFunctionArguments.Raster = m), (m = g);
          p.bandIds = void 0;
        } else p.bandIds = c == null ? void 0 : c.join(",");
        d instanceof Array && d.length > 0 && (p.noData = d.join(","));
        const v = this._processMultidimensionalIntersection(
          null,
          a,
          this.exportImageServiceParameters.mosaicRule
        );
        if (v.isOutSide) return null;
        (p.mosaicRule = x(v.mosaicRule) ? JSON.stringify(v.mosaicRule) : null),
          (a = v.timeExtent),
          (p.renderingRule = this._getRenderingRuleString(I.fromJSON(m)));
        const R = {};
        if (x(a)) {
          const { start: g, end: f } = a.toJSON();
          g && f && g === f
            ? (R.time = "" + g)
            : (g == null && f == null) ||
              (R.time = `${g ?? "null"},${f ?? "null"}`);
        }
        return {
          bbox: e.xmin + "," + e.ymin + "," + e.xmax + "," + e.ymax,
          bboxSR: u,
          imageSR: u,
          size: t + "," + s,
          ...p,
          ...R,
        };
      }
      async getSamples(e, t) {
        var a;
        if (
          !(
            (a = await this._fetchCapabilities(
              t == null ? void 0 : t.signal
            )) != null && a.operations.supportsGetSamples
          )
        )
          throw new M(
            "imagery-layer:get-samples",
            "getSamples operation is not supported on the input image service"
          );
        e = W(Yi, e).clone();
        const { raster: s } = this;
        return (
          s && e.raster == null && (e.raster = s),
          (async function (u, p, c) {
            var g, f, b;
            const d = p.toJSON();
            Pt(d),
              (g = d.outFields) != null &&
                g.length &&
                (d.outFields = d.outFields.join(","));
            const m = (f = await Ue(p.geometry)) == null ? void 0 : f[0];
            x(m) && (d.geometry = m.toJSON());
            const h = ae(u),
              w = fe({ ...h.query, f: "json", ...d }),
              v = Re(w, c),
              { data: R } = await _(`${h.path}/getSamples`, v),
              y =
                (b = R == null ? void 0 : R.samples) == null
                  ? void 0
                  : b.map((S) => {
                      const F =
                        S.value === "NaN" || S.value === ""
                          ? null
                          : S.value.split(" ").map((J) => Number(J));
                      return { ...S, pixelValue: F };
                    });
            return Bi.fromJSON({ samples: y });
          })(this.url, e, this._getRequestOptions(t))
        );
      }
      async identify(e, t) {
        if (
          !(await this._fetchCapabilities(t == null ? void 0 : t.signal))
            .operations.supportsIdentify
        )
          throw new M(
            "imagery-layer:identify",
            "identify operation is not supported on the input image service"
          );
        e = W(xt, e).clone();
        const s = this._processMultidimensionalIntersection(
          e.geometry,
          e.timeExtent,
          e.mosaicRule || this.mosaicRule
        );
        if (s.isOutSide)
          throw new M(
            "imagery-layer:identify",
            "the request cannot be fulfilled when falling outside of the multidimensional subset"
          );
        (e.timeExtent = je(s.timeExtent)), (e.mosaicRule = je(s.mosaicRule));
        const { raster: a, renderingRule: u } = this;
        return (
          u && e.renderingRule == null && (e.renderingRule = u),
          a && e.raster == null && (e.raster = a),
          wt(this.url, e, this._getRequestOptions(t))
        );
      }
      createQuery() {
        const e = new ke();
        return (
          (e.outFields = ["*"]),
          (e.returnGeometry = !0),
          (e.where = this.definitionExpression || "1=1"),
          e
        );
      }
      async queryRasters(e, t) {
        return (
          ({ query: e, requestOptions: t } = await this._prepareForQuery(e, t)),
          Et(this.url, e, t)
        );
      }
      async queryObjectIds(e, t) {
        return (
          ({ query: e, requestOptions: t } = await this._prepareForQuery(e, t)),
          Ni(this.url, e, t)
        );
      }
      async queryRasterCount(e, t) {
        return (
          ({ query: e, requestOptions: t } = await this._prepareForQuery(e, t)),
          Pi(this.url, e, t)
        );
      }
      async queryVisibleRasters(e, t) {
        var S, F, J, L;
        if (!e)
          throw new M(
            "imagery-layer: query-visible-rasters",
            "missing query parameter"
          );
        await this.load();
        const {
          pixelSize: s,
          returnDomainValues: a,
          returnTopmostRaster: u,
          showNoDataRecords: p,
        } = t || {
          pixelSize: null,
          returnDomainValues: !1,
          returnTopmostRaster: !1,
          showNoDataRecords: !1,
        };
        let c = !1,
          d = null,
          m = null;
        const h = "raster.servicepixelvalue",
          w = this._rasterFunctionNamesIndex;
        if (
          x(e.outFields) &&
          ((c = e.outFields.some((j) => !j.toLowerCase().includes(h))),
          this.version >= 10.4)
        ) {
          const j = e.outFields
            .filter((E) => E.toLowerCase().includes(h) && E.length > h.length)
            .map((E) => {
              const V = E.slice(h.length + 1);
              return [this._updateRenderingRulesFunctionName(V, w), V];
            });
          (d = j.map((E) => new I({ functionName: E[0] }))),
            (m = j.map((E) => E[1]));
          const { renderingRule: P } = this;
          d.length === 0
            ? P != null && P.functionName
              ? (d.push(P), m.push(P.functionName))
              : (d = null)
            : P != null &&
              P.functionName &&
              !d.some((E) => E.functionName === P.functionName) &&
              (d.push(P), m.push(P.functionName));
        }
        const v =
            k(e.outSpatialReference) ||
            e.outSpatialReference.equals(this.spatialReference),
          { multidimensionalSubset: R } = this;
        let y = e.timeExtent || this.timeExtent;
        if (R) {
          const { isOutside: j, intersection: P } = Qe(R, {
            geometry: je(e.geometry),
            timeExtent: je(e.timeExtent),
            multidimensionalDefinition:
              (S = this.exportImageServiceParameters.mosaicRule) == null
                ? void 0
                : S.multidimensionalDefinition,
          });
          if (j)
            throw new M(
              "imagery-layer:query-visible-rasters",
              "the request cannot be fulfilled when falling outside of the multidimensional subset"
            );
          P && x(P.timeExtent) && (y = P.timeExtent);
        }
        const g = this._combineMosaicRuleWithTimeExtent(
            this.exportImageServiceParameters.mosaicRule,
            y
          ),
          f = this._getQueryParams({
            geometry: e.geometry,
            timeExtent: y,
            mosaicRule: g,
            renderingRule: this.version < 10.4 ? this.renderingRule : null,
            renderingRules: d,
            pixelSize: s,
            returnCatalogItems: c,
            returnGeometry: v,
            raster: this.raster,
            maxItemCount: u ? 1 : null,
          });
        delete f.f;
        const b = new xt(f);
        try {
          await this.generateRasterInfo(this.renderingRule);
          const j = await wt(this.url, b, {
              signal: t == null ? void 0 : t.signal,
              query: { ...this.customParameters },
            }),
            P = e.outFields,
            E = j.value != null && j.value.toLowerCase().includes("nodata");
          if (
            !c ||
            v ||
            !(
              (F = j == null ? void 0 : j.catalogItems) != null &&
              F.features.length
            ) ||
            (!p && E)
          )
            return this._processVisibleRastersResponse(j, {
              returnDomainValues: a,
              templateRRFunctionNames: m,
              showNoDataRecords: p,
              templateFields: P,
            });
          const V = this.objectIdField || "ObjectId",
            B = ((J = j.catalogItems) == null ? void 0 : J.features) ?? [],
            Oe = B.map((me) => {
              var ie;
              return (ie = me.attributes) == null ? void 0 : ie[V];
            }),
            Ce = new ke({
              objectIds: Oe,
              returnGeometry: !0,
              outSpatialReference: e.outSpatialReference,
              outFields: [V],
            }),
            ce = await this.queryRasters(Ce);
          return (
            (L = ce == null ? void 0 : ce.features) != null &&
              L.length &&
              ce.features.forEach((me) => {
                B.forEach((ie) => {
                  ie.attributes[V] === me.attributes[V] &&
                    ((ie.geometry = new zt(me.geometry)),
                    x(e.outSpatialReference) &&
                      (ie.geometry.spatialReference = e.outSpatialReference));
                });
              }),
            this._processVisibleRastersResponse(j, {
              returnDomainValues: a,
              templateRRFunctionNames: m,
              showNoDataRecords: p,
              templateFields: P,
            })
          );
        } catch {
          throw new M(
            "imagery-layer:query-visible-rasters",
            "encountered error when querying visible rasters"
          );
        }
      }
      async fetchVariableStatisticsHistograms(e, t) {
        const s = _(o(this.parsedUrl) + "/statistics", {
            query: this._getQueryParams({ variable: e }),
            signal: t,
          }).then((p) => {
            var c;
            return (c = p.data) == null ? void 0 : c.statistics;
          }),
          a = _(o(this.parsedUrl) + "/histograms", {
            query: this._getQueryParams({ variable: e }),
            signal: t,
          }).then((p) => {
            var c;
            return (c = p.data) == null ? void 0 : c.histograms;
          }),
          u = await Promise.all([s, a]);
        return (
          u[0] &&
            u[0].forEach((p) => {
              (p.avg = p.mean), (p.stddev = p.standardDeviation);
            }),
          { statistics: u[0] || null, histograms: u[1] || null }
        );
      }
      async createFlowMesh(e, t) {
        const s = this._rasterJobHandler.instance;
        return s
          ? s.createFlowMesh(e, t)
          : vi(
              e.meshType,
              e.simulationSettings,
              e.flowData,
              x(t.signal) ? t.signal : new AbortController().signal
            );
      }
      getMultidimensionalSubsetVariables(e) {
        const t = e ?? this.serviceRasterInfo.multidimensionalInfo;
        return fi(this.multidimensionalSubset, t);
      }
      async _fetchService(e) {
        await this._fetchServiceInfo(e),
          this.rasterInfo || (this.rasterInfo = this.serviceRasterInfo);
        const t = this.sourceJSON,
          s = x(this.serviceRasterInfo)
            ? Promise.resolve(this.serviceRasterInfo)
            : pi(o(this.parsedUrl), t, {
                signal: e,
                query: this._getQueryParams(),
              }).then(
                (p) => (
                  this._set("serviceRasterInfo", p),
                  this._set("multidimensionalInfo", p.multidimensionalInfo),
                  p
                )
              ),
          a = this._hasRenderingRule(this.renderingRule)
            ? this.generateRasterInfo(this.renderingRule, { signal: e })
            : null,
          u = this._getRasterFunctionInfos();
        return Promise.all([s, a, u]).then((p) => {
          p[1] ? this._set("rasterInfo", p[1]) : this._set("rasterInfo", p[0]),
            p[2] && this._set("rasterFunctionInfos", p[2]),
            this.renderer &&
              !this._isSupportedRenderer(this.renderer) &&
              (this._set("renderer", null),
              ct
                .getLogger(this.declaredClass)
                .warn(
                  "ArcGISImageService",
                  "Switching to the default renderer. Renderer applied is not valid for this Imagery Layer"
                )),
            this._set("renderer", this._configRenderer(this.renderer)),
            this.addHandles([
              qt(
                () => this.renderingRule,
                (d) => {
                  (this.renderer ||
                    this.symbolizer ||
                    (this.popupEnabled && this.popupTemplate)) &&
                    this.generateRasterInfo(d).then((m) => {
                      m && (this.rasterInfo = m);
                    });
                }
              ),
            ]);
          const { serviceRasterInfo: c } = this;
          x(c.multidimensionalInfo) &&
            this._updateMultidimensionalDefinition(c);
        });
      }
      _combineMosaicRuleWithTimeExtent(e, t) {
        var R;
        const s = this.timeInfo,
          { multidimensionalInfo: a } = this.serviceRasterInfo;
        if (k(e) || k(a) || k(t) || k(s == null ? void 0 : s.startField))
          return e;
        const { startField: u } = s,
          p = a.variables.some((y) => y.dimensions.some((g) => g.name === u))
            ? u
            : "StdTime";
        if (((e = e.clone()), this.sourceType === "mosaic-dataset"))
          return (
            (e.multidimensionalDefinition =
              (R = e.multidimensionalDefinition) == null
                ? void 0
                : R.filter((y) => y.dimensionName !== p)),
            this._cleanupMultidimensionalDefinition(e)
          );
        e.multidimensionalDefinition = e.multidimensionalDefinition || [];
        const c = e.multidimensionalDefinition.filter(
            (y) => y.dimensionName === p
          ),
          d = x(t.start) ? t.start.getTime() : null,
          m = x(t.end) ? t.end.getTime() : null,
          h = d == null || m == null || d === m,
          w = h ? [d || m] : [[d, m]],
          v = this.version >= 10.8;
        if (c.length)
          c.forEach((y) => {
            y.dimensionName === p &&
              (v
                ? ((y.dimensionName = null), (y.isSlice = !1), (y.values = []))
                : ((y.isSlice = h), (y.values = w)));
          });
        else if (!v) {
          const y = e.multidimensionalDefinition.filter(
            (g) => g.variableName != null && g.dimensionName == null
          );
          y.length
            ? y.forEach((g) => {
                (g.dimensionName = p), (g.isSlice = h), (g.values = w);
              })
            : e.multidimensionalDefinition.push(
                new Ft({
                  variableName: "",
                  dimensionName: p,
                  isSlice: h,
                  values: w,
                })
              );
        }
        return this._cleanupMultidimensionalDefinition(e);
      }
      _cleanupMultidimensionalDefinition(e) {
        return k(e)
          ? null
          : (e.multidimensionalDefinition &&
              ((e.multidimensionalDefinition =
                e.multidimensionalDefinition.filter(
                  (t) => !(!t.variableName && !t.dimensionName)
                )),
              e.multidimensionalDefinition.length === 0 &&
                (e.multidimensionalDefinition = null)),
            this.sourceType !== "mosaic-dataset" &&
            e.multidimensionalDefinition == null
              ? null
              : e);
      }
      async _prepareForQuery(e, t) {
        if (
          !(await this._fetchCapabilities(t == null ? void 0 : t.signal))
            .operations.supportsQuery
        )
          throw new M(
            "imagery-layer:query-rasters",
            "query operation is not supported on the input image service"
          );
        return (
          (e = x(e) ? W(ke, e) : this.createQuery()),
          (t = this._getRequestOptions(t)),
          this.raster && (t.query = { ...t.query, raster: this.raster }),
          { query: e, requestOptions: t }
        );
      }
      async _initJobHandler() {
        if (this._rasterJobHandler.connectionPromise != null)
          return this._rasterJobHandler.connectionPromise;
        const e = new gi();
        (this._rasterJobHandler.connectionPromise = e.initialize().then(
          () => {
            this._rasterJobHandler.instance = e;
          },
          () => {}
        )),
          await this._rasterJobHandler.connectionPromise;
      }
      _shutdownJobHandler() {
        this._rasterJobHandler.instance &&
          this._rasterJobHandler.instance.destroy(),
          (this._rasterJobHandler.instance = null),
          (this._rasterJobHandler.connectionPromise = null),
          (this._rasterJobHandler.refCount = 0),
          (this._cachedRendererJson = null);
      }
      _isSupportedRenderer(e) {
        const { rasterInfo: t, renderingRule: s } = this;
        return (
          (e.type === "unique-value" &&
            this._hasRenderingRule(s) &&
            (t == null ? void 0 : t.bandCount) === 1 &&
            ["u8", "s8"].includes(t.pixelType)) ||
          (t != null && e != null && ci(t).includes(e.type))
        );
      }
      async _fetchCapabilities(e) {
        return (
          this.capabilities || (await this._fetchServiceInfo(e)),
          this.capabilities
        );
      }
      async _fetchServiceInfo(e) {
        var s;
        let t = this.sourceJSON;
        if (!t) {
          const { data: a, ssl: u } = await _(o(this.parsedUrl), {
            query: this._getQueryParams(),
            signal: e,
          });
          (t = a),
            (this.sourceJSON = t),
            u && (this.url = this.url.replace(/^http:/i, "https:"));
        }
        if (
          ((s = t.capabilities) == null
            ? void 0
            : s
                .toLowerCase()
                .split(",")
                .map((a) => a.trim())
                .indexOf("tilesonly")) > -1
        )
          throw new M(
            "imagery-layer:fetch-service-info",
            "use ImageryTileLayer to open tiles-only image services"
          );
        this.read(t, { origin: "service", url: this.parsedUrl });
      }
      _isMosaicDataset(e) {
        var t;
        return e.serviceSourceType
          ? e.serviceSourceType === "esriImageServiceSourceTypeMosaicDataset"
          : ((t = e.fields) == null ? void 0 : t.length) > 0;
      }
      _isMosaicRuleSupported(e) {
        var a;
        if (!e) return !1;
        const t = this._isMosaicDataset(e),
          s =
            e.currentVersion >= 10.71 &&
            e.hasMultidimensions &&
            !(((a = e.fields) == null ? void 0 : a.length) > 1);
        return t || s;
      }
      _isVectorFieldResampleFunction(e) {
        if (k(e)) return !1;
        const { functionName: t, functionArguments: s } = e,
          a = (t == null ? void 0 : t.toLowerCase()) === "resample",
          u =
            (s == null ? void 0 : s.ResampleType) ||
            (s == null ? void 0 : s.resampleType);
        return a && (u === 7 || u === 10);
      }
      _isPicture() {
        return (
          !this.format ||
          this.format.includes("jpg") ||
          this.format.includes("png")
        );
      }
      _configRenderer(e) {
        var a, u;
        const t = this._isPicture(),
          { rasterInfo: s } = this;
        if ((!t && !this.pixelFilter) || this._isVectorDataSet()) {
          if (!this.bandIds && s.bandCount >= 3) {
            const c = mi(s);
            !c ||
              (s.bandCount === 3 && c[0] === 0 && c[1] === 1 && c[2] === 2) ||
              (this.bandIds = c);
          }
          e ||
            (e = di(s, {
              bandIds: this.bandIds,
              variableName: this.renderingRule
                ? null
                : (u =
                    (a = this.mosaicRule) == null
                      ? void 0
                      : a.multidimensionalDefinition) == null
                ? void 0
                : u[0].variableName,
            }));
          const p = hi(e.toJSON());
          this.symbolizer
            ? ((this.symbolizer.rendererJSON = p),
              (this.symbolizer.rasterInfo = s))
            : (this.symbolizer = new Di({ rendererJSON: p, rasterInfo: s })),
            this.symbolizer.bind().success || (this.symbolizer = null);
        }
        return e;
      }
      _clonePixelData(e) {
        return e == null
          ? e
          : {
              extent: e.extent && e.extent.clone(),
              pixelBlock: x(e.pixelBlock) ? e.pixelBlock.clone() : null,
            };
      }
      _getQueryParams(e) {
        e &&
          x(e.renderingRule) &&
          typeof e.renderingRule != "string" &&
          (e.renderingRule = this._getRenderingRuleString(e.renderingRule));
        const { raster: t, viewId: s } = this;
        return {
          raster: t,
          viewId: s,
          f: "json",
          ...e,
          ...this.customParameters,
        };
      }
      _getRequestOptions(e) {
        return {
          ...e,
          query: {
            ...(e == null ? void 0 : e.query),
            ...this.customParameters,
          },
        };
      }
      _decodePixelBlock(e, t, s) {
        return this._rasterJobHandler.instance
          ? this._rasterJobHandler.instance.decode({ data: e, options: t })
          : yt(e, t, s);
      }
      async _getRasterFunctionInfos(e) {
        var s;
        const t = this.sourceJSON.rasterFunctionInfos;
        return this.loaded
          ? t
          : t && this.version >= 10.3
          ? t.length === 1 && t[0].name.toLowerCase() === "none"
            ? t
            : (s = (
                await _(o(this.parsedUrl) + "/rasterFunctionInfos", {
                  query: this._getQueryParams(),
                  signal: e,
                })
              ).data) == null
            ? void 0
            : s.rasterFunctionInfos
          : null;
      }
      _canRequestImageElement(e) {
        return !this.pixelFilter && (!e || e.includes("png"));
      }
      async _requestArrayBuffer(e) {
        const {
          imageProps: t,
          requestAsImageElement: s,
          returnImageBitmap: a,
          signal: u,
        } = e;
        if (s && this._canRequestImageElement(t.format)) {
          const R = `${o(this.parsedUrl)}/exportImage`,
            { data: y } = await _(R, {
              responseType: a ? "blob" : "image",
              query: this._getQueryParams({
                f: "image",
                ...this.refreshParameters,
                ...e.imageServiceParameters,
              }),
              signal: u,
            });
          return y instanceof Blob
            ? { imageBitmap: await gt(y, R), params: t }
            : { imageOrCanvasElement: y, params: t };
        }
        const p = this._initJobHandler(),
          c = _(o(this.parsedUrl) + "/exportImage", {
            responseType: "array-buffer",
            query: this._getQueryParams({
              f: "image",
              ...e.imageServiceParameters,
            }),
            signal: u,
          }),
          d = (await Promise.all([c, p]))[0].data,
          m = t.format || "jpgpng";
        let h = m;
        if ((h !== "bsq" && h !== "bip" && (h = Ti(d)), !h))
          throw new M(
            "imagery-layer:fetch-image",
            "unsupported format signature " +
              String.fromCharCode.apply(null, new Uint8Array(d))
          );
        const w = { signal: u };
        return {
          pixelData: {
            pixelBlock: await (m === "gif" ||
            m === "bmp" ||
            (m.includes("png") && (h === "png" || h === "jpg"))
              ? yt(d, { useCanvas: !0, ...t }, w)
              : this._decodePixelBlock(
                  d,
                  {
                    width: t.width,
                    height: t.height,
                    planes: null,
                    pixelType: null,
                    noDataValue: null,
                    format: m,
                  },
                  w
                )),
            extent: t.extent,
          },
          params: t,
        };
      }
      _generateRasterInfo(e, t) {
        const s = { ...t, query: this._getQueryParams() };
        return yi(o(this.parsedUrl), e, s);
      }
      _isValidCustomizedMosaicRule(e) {
        var t;
        return (
          e &&
          JSON.stringify(e.toJSON()) !==
            JSON.stringify(
              (t = this.defaultMosaicRule) == null ? void 0 : t.toJSON()
            )
        );
      }
      _updateMultidimensionalDefinition(e) {
        var s;
        if (this._isValidCustomizedMosaicRule(this.mosaicRule)) return;
        let t = Ri(e, { multidimensionalSubset: this.multidimensionalSubset });
        if (x(t) && t.length > 0) {
          this.mosaicRule = this.mosaicRule || new Q();
          const a = this.mosaicRule.multidimensionalDefinition;
          !this.sourceJSON.defaultVariableName &&
            this.renderingRule &&
            ((s = this.renderingRule.functionName) == null
              ? void 0
              : s.toLowerCase()) !== "none" &&
            t.forEach((u) => (u.variableName = "")),
            (t = t.filter(
              ({ variableName: u, dimensionName: p }) => (u && u !== "*") || p
            )),
            !(a != null && a.length) &&
              t.length &&
              (this.mosaicRule.multidimensionalDefinition = t);
        }
      }
      _processVisibleRastersResponse(e, t) {
        t = t || {};
        const s = e.value,
          {
            templateRRFunctionNames: a,
            showNoDataRecords: u,
            returnDomainValues: p,
            templateFields: c,
          } = t,
          d = e.processedValues;
        let m = e.catalogItems && e.catalogItems.features,
          h =
            (e.properties &&
              e.properties.Values &&
              e.properties.Values.map((b) => b.replace(/ /gi, ", "))) ||
            [];
        const w = this.objectIdField || "ObjectId",
          v = typeof s == "string" && s.toLowerCase().includes("nodata"),
          R = [];
        if (s && !m && !v) {
          const b = {};
          (b[w] = 0), (h = [s]), (m = [new Gt(this.fullExtent, null, b)]);
        }
        if (!m) return [];
        let y, g, f;
        this._updateResponseFieldNames(m, c), v && !u && (m = []);
        for (let b = 0; b < m.length; b++) {
          if (((y = m[b]), s != null)) {
            if (
              ((g = h[b]),
              (f =
                this.renderingRule &&
                d &&
                d.length > 0 &&
                a &&
                a.length > 0 &&
                a.includes(this.renderingRule.functionName)
                  ? d[a.indexOf(this.renderingRule.functionName)]
                  : s),
              g.toLowerCase() === "nodata" && !u)
            )
              continue;
            const S = "Raster.ItemPixelValue",
              F = "Raster.ServicePixelValue";
            (y.attributes[S] = g),
              (y.attributes[F] = f),
              this._updateFeatureWithMagDirValues(y, g);
            const J = this.fields && this.fields.length > 0;
            let L =
              this.renderingRule && x(this.serviceRasterInfo.attributeTable)
                ? J
                  ? g
                  : s
                : f;
            this.renderingRule || (L = J ? g : s),
              this._updateFeatureWithRasterAttributeTableValues(y, L);
          }
          if (
            ((y.sourceLayer = y.layer = this),
            p && this._updateFeatureWithDomainValues(y),
            a && d && a.length === d.length)
          )
            for (let S = 0; S < a.length; S++) {
              const F = "Raster.ServicePixelValue." + a[S];
              y.attributes[F] = d[S];
            }
          R.push(m[b]);
        }
        return R;
      }
      _processMultidimensionalIntersection(e, t, s) {
        const { multidimensionalSubset: a } = this;
        if (!a)
          return {
            isOutSide: !1,
            timeExtent: t,
            mosaicRule: (s = this._combineMosaicRuleWithTimeExtent(s, t)),
          };
        if (a) {
          const { isOutside: u, intersection: p } = Qe(a, {
            geometry: e,
            timeExtent: t,
          });
          if (u) return { isOutSide: !0, timeExtent: null, mosaicRule: null };
          p && x(p.timeExtent) && (t = p.timeExtent);
        }
        if (
          ((s = this._combineMosaicRuleWithTimeExtent(s, t)),
          x(s) && s.multidimensionalDefinition)
        ) {
          const { isOutside: u } = Qe(a, {
            multidimensionalDefinition: s.multidimensionalDefinition,
          });
          if (u) return { isOutSide: !0, timeExtent: null, mosaicRule: null };
        }
        return { isOutSide: !1, timeExtent: t, mosaicRule: s };
      }
      _updateFeatureWithRasterAttributeTableValues(e, t) {
        const s =
          this.rasterInfo.attributeTable ||
          this.serviceRasterInfo.attributeTable;
        if (k(s)) return;
        const { features: a, fields: u } = s,
          p = u.map((m) => m.name).filter((m) => m.toLowerCase() === "value"),
          c = p && p[0];
        if (!c) return;
        const d = a.filter(
          (m) => m.attributes[c] === (t != null ? parseInt(t, 10) : null)
        );
        d &&
          d[0] &&
          u.forEach((m) => {
            const h = this._rasterAttributeTableFieldPrefix + m.name;
            e.attributes[h] = d[0].attributes[m.name];
          });
      }
      _updateFeatureWithMagDirValues(e, t) {
        if (!this._isVectorDataSet()) return;
        const s = t.split(/,\s*/).map((d) => parseFloat(d)),
          a = s.map((d) => [d]),
          u = s.map((d) => ({ minValue: d, maxValue: d, noDataValue: null })),
          p = new We({
            height: 1,
            width: 1,
            pixelType: "f32",
            pixels: a,
            statistics: u,
          });
        this.pixelFilter != null &&
          this.pixelFilter({
            pixelBlock: p,
            extent: new _e(0, 0, 0, 0, this.spatialReference),
          });
        const c =
          this.serviceDataType === "esriImageServiceDataTypeVector-MagDir"
            ? [p.pixels[0][0], p.pixels[1][0]]
            : bi([p.pixels[0][0], p.pixels[1][0]]);
        (e.attributes["Raster.Magnitude"] = c[0]),
          (e.attributes["Raster.Direction"] = c[1]);
      }
      _updateFeatureWithDomainValues(e) {
        const t =
          this.fields &&
          this.fields.filter(
            (s) => s.domain && s.domain.type === "coded-value"
          );
        t != null &&
          t.forEach((s) => {
            const a = e.attributes[s.name];
            if (a != null) {
              const u = s.domain.codedValues.find((p) => p.code === a);
              u && (e.attributes[s.name] = u.name);
            }
          });
      }
      _updateResponseFieldNames(e, t) {
        if (!t || t.length < 1) return;
        const s = this.fieldsIndex;
        k(s) ||
          e.forEach((a) => {
            var u;
            if (a && a.attributes)
              for (const p of t) {
                const c = (u = s.get(p)) == null ? void 0 : u.name;
                c &&
                  c !== p &&
                  ((a.attributes[p] = a.attributes[c]), delete a.attributes[c]);
              }
          });
      }
      _getRenderingRuleString(e) {
        if (e) {
          let t = e.toJSON();
          return (
            (t = t.rasterFunctionDefinition ?? t),
            (t.thumbnail || t.thumbnailEx) &&
              (t.thumbnail = t.thumbnailEx = null),
            JSON.stringify(t)
          );
        }
        return null;
      }
      _hasRenderingRule(e) {
        return (
          e != null &&
          e.functionName != null &&
          e.functionName.toLowerCase() !== "none"
        );
      }
      _updateRenderingRulesFunctionName(e, t) {
        if (!e || e.length < 1) return;
        if (e === "Raw") return e.replace("Raw", "None");
        const s = e.toLowerCase().replace(/ /gi, "_");
        return t.has(s) ? t.get(s) : e;
      }
      _isRFTJson(e) {
        return (
          e &&
          e.name &&
          e.arguments &&
          e.function &&
          e.hasOwnProperty("functionType")
        );
      }
      _isVectorDataSet() {
        return (
          this.serviceDataType === "esriImageServiceDataTypeVector-UV" ||
          this.serviceDataType === "esriImageServiceDataTypeVector-MagDir"
        );
      }
      _applyMosaicAndRenderingRules(e) {
        const { raster: t, mosaicRule: s, renderingRule: a } = this;
        a && e.renderingRule == null && (e.renderingRule = a),
          s && e.mosaicRule == null && (e.mosaicRule = s),
          t && e.raster == null && (e.raster = t);
      }
      _readCapabilities(e) {
        const t = e.capabilities
            ? e.capabilities
                .toLowerCase()
                .split(",")
                .map((R) => R.trim())
            : ["image", "catalog"],
          {
            currentVersion: s,
            advancedQueryCapabilities: a,
            maxRecordCount: u,
          } = e,
          p = t.includes("image"),
          c = e.serviceDataType === "esriImageServiceDataTypeElevation",
          d = !!(e.spatialReference || (e.extent && e.extent.spatialReference)),
          m = t.includes("edit"),
          h = t.includes("mensuration") && d,
          w =
            e.mensurationCapabilities == null
              ? []
              : e.mensurationCapabilities
                  .toLowerCase()
                  .split(",")
                  .map((R) => R.trim()),
          v = h && w.includes("basic");
        return {
          data: { supportsAttachment: !1 },
          operations: {
            supportsComputeHistograms: p,
            supportsExportImage: p,
            supportsIdentify: p,
            supportsMeasure: h,
            supportsDownload: t.includes("download"),
            supportsQuery:
              t.includes("catalog") && e.fields && e.fields.length > 0,
            supportsGetSamples: s >= 10.2 && p,
            supportsProject: s >= 10.3 && p,
            supportsComputeStatisticsHistograms: s >= 10.4 && p,
            supportsQueryBoundary: s >= 10.6 && p,
            supportsCalculateVolume: s >= 10.7 && c,
            supportsComputePixelLocation: s >= 10.7 && t.includes("catalog"),
            supportsComputeAngles: s >= 10.91,
            supportsAdd: m,
            supportsDelete: m,
            supportsEditing: m,
            supportsUpdate: m,
            supportsCalculate: !1,
            supportsTruncate: !1,
            supportsValidateSql: !1,
            supportsChangeTracking: !1,
            supportsQueryAttachments: !1,
            supportsResizeAttachments: !1,
            supportsSync: !1,
            supportsExceedsLimitStatistics: !1,
            supportsQueryAnalytics: !1,
            supportsQueryTopFeatures: !1,
          },
          query: {
            maxRecordCount: u,
            maxRecordCountFactor: void 0,
            supportsStatistics: !!(a != null && a.supportsStatistics),
            supportsOrderBy: !!(a != null && a.supportsOrderBy),
            supportsDistinct: !!(a != null && a.supportsDistinct),
            supportsPagination: !!(a != null && a.supportsPagination),
            supportsStandardizedQueriesOnly: !!(
              a != null && a.useStandardizedQueries
            ),
            supportsPercentileStatistics: !!(
              a != null && a.supportsPercentileStatistics
            ),
            supportsCentroid: !!(
              a != null && a.supportsReturningGeometryCentroid
            ),
            supportsDistance: !!(a != null && a.supportsQueryWithDistance),
            supportsExtent: !!(a != null && a.supportsReturningQueryExtent),
            supportsGeometryProperties: !!(
              a != null && a.supportsReturningGeometryProperties
            ),
            supportsHavingClause: !!(a != null && a.supportsHavingClause),
            supportsQuantization: !1,
            supportsQuantizationEditMode: !1,
            supportsQueryGeometry: !1,
            supportsResultType: !1,
            supportsMaxRecordCountFactor: !1,
            supportsSqlExpression: !1,
            supportsTopFeaturesQuery: !1,
            supportsQueryByOthers: !1,
            supportsHistoricMoment: !1,
            supportsFormatPBF: !1,
            supportsDisjointSpatialRelationship: !1,
            supportsCacheHint: !1,
            supportsSpatialAggregationStatistics: !1,
            supportedSpatialAggregationStatistics: {
              envelope: !1,
              centroid: !1,
              convexHull: !1,
            },
            supportsDefaultSpatialReference: !!(
              a != null && a.supportsDefaultSR
            ),
            supportsFullTextSearch: !1,
            supportsCompactGeometry: !1,
            standardMaxRecordCount: void 0,
            tileMaxRecordCount: void 0,
          },
          mensuration: {
            supportsDistanceAndAngle: v,
            supportsAreaAndPerimeter: v,
            supportsPointOrCentroid: v,
            supportsHeightFromBaseAndTop: h && w.includes("base-top height"),
            supportsHeightFromBaseAndTopShadow:
              h && w.includes("base-top shadow height"),
            supportsHeightFromTopAndTopShadow:
              h && w.includes("top-top shadow height"),
            supports3D: h && w.includes("3d"),
          },
        };
      }
    };
    function o(e) {
      return (e == null ? void 0 : e.path) ?? "";
    }
    return (
      r([l()], i.prototype, "_functionRasterInfos", void 0),
      r([l()], i.prototype, "_rasterJobHandler", void 0),
      r([l()], i.prototype, "_cachedRendererJson", void 0),
      r(
        [l({ readOnly: !0 })],
        i.prototype,
        "_serviceSupportsMosaicRule",
        void 0
      ),
      r(
        [z("_serviceSupportsMosaicRule", ["currentVersion", "fields"])],
        i.prototype,
        "readServiceSupportsMosaicRule",
        null
      ),
      r([l()], i.prototype, "_rasterAttributeTableFieldPrefix", void 0),
      r([l({ readOnly: !0 })], i.prototype, "_rasterFunctionNamesIndex", null),
      r([l()], i.prototype, "adjustAspectRatio", void 0),
      r(
        [l({ type: [Ie], json: { write: !0 } })],
        i.prototype,
        "bandIds",
        void 0
      ),
      r([z("bandIds")], i.prototype, "readBandIds", null),
      r(
        [l({ readOnly: !0, json: { read: !1 } })],
        i.prototype,
        "capabilities",
        void 0
      ),
      r(
        [
          z("service", "capabilities", [
            "capabilities",
            "currentVersion",
            "serviceDataType",
          ]),
        ],
        i.prototype,
        "readCapabilities",
        null
      ),
      r([l({ type: Number })], i.prototype, "compressionQuality", void 0),
      r(
        [N("compressionQuality")],
        i.prototype,
        "writeCompressionQuality",
        null
      ),
      r([l({ type: Number })], i.prototype, "compressionTolerance", void 0),
      r(
        [N("compressionTolerance")],
        i.prototype,
        "writeCompressionTolerance",
        null
      ),
      r(
        [l({ json: { read: { source: "copyrightText" } } })],
        i.prototype,
        "copyright",
        void 0
      ),
      r(
        [l({ readOnly: !0, dependsOn: ["_serviceSupportsMosaicRule"] })],
        i.prototype,
        "defaultMosaicRule",
        void 0
      ),
      r(
        [z("defaultMosaicRule", ["defaultMosaicMethod"])],
        i.prototype,
        "readDefaultMosaicRule",
        null
      ),
      r(
        [
          l({
            type: String,
            json: {
              name: "layerDefinition.definitionExpression",
              write: { enabled: !0, allowNull: !0 },
            },
          }),
        ],
        i.prototype,
        "definitionExpression",
        void 0
      ),
      r(
        [l({ readOnly: !0, constructOnly: !0 })],
        i.prototype,
        "exportImageServiceParameters",
        void 0
      ),
      r([l()], i.prototype, "rasterInfo", void 0),
      r([l({ readOnly: !0, type: [de] })], i.prototype, "fields", void 0),
      r([l({ readOnly: !0 })], i.prototype, "fieldsIndex", null),
      r(
        [
          l({
            type: [
              "png",
              "png8",
              "png24",
              "png32",
              "jpg",
              "bmp",
              "gif",
              "jpgpng",
              "lerc",
              "tiff",
            ],
            json: { write: !0 },
          }),
        ],
        i.prototype,
        "format",
        null
      ),
      r(
        [z("service", "format", ["serviceDataType"])],
        i.prototype,
        "readFormat",
        null
      ),
      r([l({ type: _e })], i.prototype, "fullExtent", void 0),
      r([l({ readOnly: !0 })], i.prototype, "hasMultidimensions", void 0),
      r(
        [l({ json: { read: { source: "maxImageHeight" } } })],
        i.prototype,
        "imageMaxHeight",
        void 0
      ),
      r(
        [l({ json: { read: { source: "maxImageWidth" } } })],
        i.prototype,
        "imageMaxWidth",
        void 0
      ),
      r(
        [
          l({
            type: String,
            json: { type: ue.jsonValues, read: ue.read, write: ue.write },
          }),
        ],
        i.prototype,
        "interpolation",
        void 0
      ),
      r([l()], i.prototype, "minScale", void 0),
      r([z("service", "minScale")], i.prototype, "readMinScale", null),
      r([l()], i.prototype, "maxScale", void 0),
      r([z("service", "maxScale")], i.prototype, "readMaxScale", null),
      r([l({ type: Q })], i.prototype, "mosaicRule", null),
      r(
        [z("mosaicRule", ["mosaicRule", "defaultMosaicMethod"])],
        i.prototype,
        "readMosaicRule",
        null
      ),
      r([N("mosaicRule")], i.prototype, "writeMosaicRule", null),
      r([l()], i.prototype, "multidimensionalInfo", void 0),
      r(
        [l({ type: ai, json: { write: !0 } })],
        i.prototype,
        "multidimensionalSubset",
        void 0
      ),
      r([l({ json: { type: Ie } })], i.prototype, "noData", void 0),
      r([N("noData")], i.prototype, "writeNoData", null),
      r(
        [
          l({
            type: String,
            json: { type: Te.jsonValues, read: Te.read, write: Te.write },
          }),
        ],
        i.prototype,
        "noDataInterpretation",
        void 0
      ),
      r(
        [
          l({
            type: String,
            readOnly: !0,
            json: { read: { source: ["fields"] } },
          }),
        ],
        i.prototype,
        "objectIdField",
        void 0
      ),
      r([z("objectIdField")], i.prototype, "readObjectIdField", null),
      r([l({})], i.prototype, "geometryType", void 0),
      r([l({})], i.prototype, "typeIdField", void 0),
      r([l({})], i.prototype, "types", void 0),
      r([l({ readOnly: !0 })], i.prototype, "parsedUrl", null),
      r([l({ type: Function })], i.prototype, "pixelFilter", void 0),
      r([l()], i.prototype, "raster", void 0),
      r([l({ readOnly: !0 })], i.prototype, "sourceType", void 0),
      r(
        [z("sourceType", ["serviceSourceType", "fields"])],
        i.prototype,
        "readSourceType",
        null
      ),
      r([l()], i.prototype, "viewId", void 0),
      r(
        [
          l({
            types: oi,
            json: {
              name: "layerDefinition.drawingInfo.renderer",
              origins: {
                "web-scene": {
                  types: li,
                  name: "layerDefinition.drawingInfo.renderer",
                  write: {
                    overridePolicy: (e) => ({
                      enabled:
                        e && e.type !== "vector-field" && e.type !== "flow",
                    }),
                  },
                },
              },
            },
          }),
        ],
        i.prototype,
        "renderer",
        null
      ),
      r([z("renderer")], i.prototype, "readRenderer", null),
      r([N("renderer")], i.prototype, "writeRenderer", null),
      r([l()], i.prototype, "symbolizer", void 0),
      r([l(Vt)], i.prototype, "opacity", void 0),
      r([l({ readOnly: !0 })], i.prototype, "rasterFields", null),
      r([l({ constructOnly: !0 })], i.prototype, "rasterFunctionInfos", void 0),
      r([l({ type: I })], i.prototype, "renderingRule", null),
      r(
        [z("renderingRule", ["renderingRule", "rasterFunctionInfos"])],
        i.prototype,
        "readRenderingRule",
        null
      ),
      r([N("renderingRule")], i.prototype, "writeRenderingRule", null),
      r([l()], i.prototype, "serviceDataType", void 0),
      r(
        [l({ readOnly: !0, type: ge })],
        i.prototype,
        "spatialReference",
        void 0
      ),
      r(
        [z("spatialReference", ["spatialReference", "extent"])],
        i.prototype,
        "readSpatialReference",
        null
      ),
      r(
        [l({ json: { type: Ke.jsonValues } })],
        i.prototype,
        "pixelType",
        void 0
      ),
      r([z("pixelType")], i.prototype, "readPixelType", null),
      r([N("pixelType")], i.prototype, "writePixelType", null),
      r(
        [l({ constructOnly: !0, type: ht })],
        i.prototype,
        "serviceRasterInfo",
        void 0
      ),
      r([l()], i.prototype, "sourceJSON", void 0),
      r([l(Mt)], i.prototype, "url", void 0),
      r([l({ readOnly: !0 })], i.prototype, "version", void 0),
      r(
        [z("version", ["currentVersion", "fields", "timeInfo"])],
        i.prototype,
        "readVersion",
        null
      ),
      (i = r([T("esri.layers.mixins.ArcGISImageService")], i)),
      i
    );
  };
let $ = class extends Ut(Bt(kt(Qt(Wt(ir($t(Kt(Zt(Xt(ni)))))))))) {
  constructor(...n) {
    super(...n),
      (this.legendEnabled = !0),
      (this.isReference = null),
      (this.operationalLayerType = "ArcGISImageServiceLayer"),
      (this.popupEnabled = !0),
      (this.popupTemplate = null),
      (this.type = "imagery");
  }
  normalizeCtorArgs(n, i) {
    return typeof n == "string" ? { url: n, ...i } : n;
  }
  load(n) {
    const i = x(n) ? n.signal : null;
    return (
      this.addResolvingPromise(
        this.loadFromPortal({ supportedTypes: ["Image Service"] }, n)
          .catch(Yt)
          .then(() => this._fetchService(i))
      ),
      Promise.resolve(this)
    );
  }
  writeOperationalLayerType(n, i, o) {
    var t;
    const e =
      ((t = this.renderer) == null ? void 0 : t.type) === "vector-field";
    i[o] = e ? "ArcGISImageServiceVectorLayer" : "ArcGISImageServiceLayer";
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  createPopupTemplate(n) {
    const i = this.rasterFields,
      o = this.title,
      e = new Set();
    let t = !1,
      s = !1;
    this.capabilities &&
      ((t =
        this.capabilities.operations.supportsQuery &&
        this.fields &&
        this.fields.length > 0),
      (s =
        this.serviceDataType === "esriImageServiceDataTypeVector-UV" ||
        this.serviceDataType === "esriImageServiceDataTypeVector-MagDir"));
    const a = new Set();
    t && a.add("raster.itempixelvalue");
    for (const u of i) {
      const p = u.name.toLowerCase();
      a.has(p) || p.includes("raster.servicepixelvalue.") || e.add(u.name);
    }
    return (
      s && e.add("raster.magnitude").add("raster.direction"),
      ei({ fields: i, title: o }, { ...n, visibleFieldNames: e })
    );
  }
  queryFeatures(n, i) {
    return this.queryRasters(n, i).then((o) => {
      if (o != null && o.features)
        for (const e of o.features) e.layer = e.sourceLayer = this;
      return o;
    });
  }
  queryFeatureCount(n, i) {
    return this.queryRasterCount(n, i);
  }
  redraw() {
    this.emit("redraw");
  }
  serviceSupportsSpatialReference(n) {
    return ti(this, n);
  }
};
r([l(ii)], $.prototype, "legendEnabled", void 0),
  r([l({ type: ["show", "hide"] })], $.prototype, "listMode", void 0),
  r(
    [
      l({
        type: Boolean,
        json: {
          read: !1,
          write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) },
        },
      }),
    ],
    $.prototype,
    "isReference",
    void 0
  ),
  r(
    [
      l({
        type: ["ArcGISImageServiceLayer"],
        json: {
          origins: {
            "web-map": {
              type: [
                "ArcGISImageServiceLayer",
                "ArcGISImageServiceVectorLayer",
              ],
              read: !1,
              write: { target: "layerType", ignoreOrigin: !0 },
            },
          },
        },
      }),
    ],
    $.prototype,
    "operationalLayerType",
    void 0
  ),
  r(
    [N("web-map", "operationalLayerType")],
    $.prototype,
    "writeOperationalLayerType",
    null
  ),
  r([l(ri)], $.prototype, "popupEnabled", void 0),
  r(
    [
      l({
        type: si,
        json: { read: { source: "popupInfo" }, write: { target: "popupInfo" } },
      }),
    ],
    $.prototype,
    "popupTemplate",
    void 0
  ),
  r([l({ readOnly: !0 })], $.prototype, "defaultPopupTemplate", null),
  r([l({ readOnly: !0, json: { read: !1 } })], $.prototype, "type", void 0),
  ($ = r([T("esri.layers.ImageryLayer")], $));
const wr = $;
export { wr as default };
