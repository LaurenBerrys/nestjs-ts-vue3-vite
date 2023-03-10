import { p as Qt } from "./colorUtils.3868c6ed.js";
import {
  ae as l,
  af as m,
  ag as R,
  dd as Xt,
  dT as Ae,
  r as G,
  t as D,
  d0 as Ht,
  ei as dt,
  bO as W,
  gS as _e,
  dl as At,
  gT as De,
  dm as ft,
  gU as mt,
  s as Ie,
  R as te,
  ar as Ee,
} from "./index.8fd7165c.js";
import {
  m as b,
  i as Oe,
  o as Ge,
  s as Nt,
  q as Fe,
  r as Pe,
  A as ze,
  t as K,
  v as Ve,
  M as Le,
  p as Ne,
  w as Ue,
  y as We,
} from "./dataUtils.e77088c3.js";
import {
  u as qe,
  o as Xe,
  a as bt,
  n as He,
  k as Re,
  _ as ee,
  m as $e,
  b as Je,
  x as Rt,
  c as Ye,
  y as Ke,
  M as Ze,
} from "./RasterSymbolizer.ac2e1b06.js";
let It = class extends Xt {
  constructor() {
    super(...arguments), (this.raster = void 0);
  }
};
l([m({ json: { write: !0 } })], It.prototype, "raster", void 0),
  (It = l(
    [R("esri.layers.support.rasterFunctions.AspectFunctionArguments")],
    It
  ));
const z = It;
var Bt;
let Ct = (Bt = class extends z {
  clone() {
    return new Bt({ raster: this.raster });
  }
});
Ct = Bt = l(
  [R("esri.layers.support.rasterFunctions.AspectFunctionArguments")],
  Ct
);
const Qe = Ct;
let C = class extends Xt {
  constructor() {
    super(...arguments),
      (this.functionArguments = null),
      (this.readingBufferSize = 0),
      (this.id = -1),
      (this.isNoopProcess = !1),
      (this.rawInputBandIds = []),
      (this.isInputBandIdsSwizzled = !1),
      (this.swizzledBandSelection = []),
      (this.isBranch = !1),
      (this._bindingResult = null);
  }
  get supportsGPU() {
    return this._bindingResult.supportsGPU;
  }
  bind(t, e = !1, i = -1) {
    this.id = i + 1;
    const n = this._getRasterValues();
    let o = !0;
    for (let r = 0; r < n.length; r++) {
      const s = n[r];
      if (G(s) && this._isRasterFunctionValue(s)) {
        const a = s.bind(t, e, this.id + r);
        if (!a.success) return (this._bindingResult = a), a;
        o = o && a.supportsGPU;
      }
    }
    return !this.rasterInfo || e
      ? ((this.sourceRasterInfos = this._getSourceRasterInfos(t)),
        (this._bindingResult = this._bindSourceRasters()),
        (this._bindingResult.supportsGPU =
          o && this._bindingResult.supportsGPU),
        this.processInputBandIds(),
        this._bindingResult)
      : ((this._bindingResult = { success: !0, supportsGPU: !0 }),
        this.processInputBandIds(),
        this._bindingResult);
  }
  process(t) {
    const e = this._getRasterValues(),
      i =
        e.length === 0
          ? t.pixelBlocks ?? t.primaryPixelBlocks
          : e.map((n) => this._readRasterValue(n, t));
    return this._processPixels({ ...t, pixelBlocks: i });
  }
  processInputBandIds() {
    const t = this._getRasterValues().filter(this._isRasterFunctionValue);
    let e;
    if (t.length > 1) {
      const o = t.map((s) => s.processInputBandIds()[0]);
      (this.rawInputBandIds = o),
        (this.isInputBandIdsSwizzled = this.rawInputBandIds.some(
          (s, a) => s !== a
        ));
      const r = t.filter((s) => s.functionName === "ExtractBand");
      return (
        r.length &&
          r.forEach((s, a) => {
            (s.isInputBandIdsSwizzled = !0),
              (s.swizzledBandSelection = [a, a, a]);
          }),
        this.rawInputBandIds
      );
    }
    const i = t[0];
    if (i) {
      if (((e = i.processInputBandIds()), i.isInputBandIdsSwizzled))
        return (this.rawInputBandIds = e), e;
    } else {
      e = [];
      const { bandCount: o } = this.sourceRasterInfos[0];
      for (let r = 0; r < o; r++) e.push(r);
    }
    const n = this._getInputBandIds(e);
    return (
      (this.isInputBandIdsSwizzled = n.some((o, r) => o !== r)),
      (this.rawInputBandIds = n),
      this.rawInputBandIds
    );
  }
  getPrimaryRasters() {
    const t = [],
      e = [];
    return this._getPrimaryRasters(this, t, e), { rasters: t, rasterIds: e };
  }
  getWebGLProcessorDefinition() {
    const t = this._getWebGLParameters(),
      { raster: e, rasters: i } = this.functionArguments;
    return (
      i && Array.isArray(i) && i.length
        ? ((t.rasters = i.map((n) =>
            this._isRasterFunctionValue(n)
              ? n.getWebGLProcessorDefinition()
              : typeof n == "number"
              ? {
                  name: "Constant",
                  parameters: { value: n },
                  pixelType: "f32",
                  id: -1,
                  isNoopProcess: !1,
                }
              : {
                  name: "Identity",
                  parameters: { value: n },
                  pixelType: "f32",
                  id: -1,
                  isNoopProcess: !1,
                }
          )),
          t.rasters.some((n) => n != null) || (t.rasters = null))
        : this._isRasterFunctionValue(e) &&
          (t.raster = e.getWebGLProcessorDefinition()),
      {
        name: this.functionName,
        parameters: t,
        pixelType: this.outputPixelType,
        id: this.id,
        isNoopProcess: this.isNoopProcess,
      }
    );
  }
  getFlatWebGLFunctionChain() {
    const t = this.getWebGLProcessorDefinition();
    if (!t) return null;
    const e = [t],
      { parameters: i } = t;
    let n = i.rasters || (i.raster && [i.raster]);
    for (; n != null && n.length; ) {
      e.unshift(...n);
      const r = [];
      for (let s = 0; s < n.length; s++) {
        const { parameters: a } = n[s],
          u = a.rasters || (a.raster && [a.raster]);
        u != null && u.length && r.push(...u);
      }
      n = r;
    }
    for (let r = e.length - 1; r >= 0; r--)
      e[r].isNoopProcess && e.splice(r, 1);
    let o = !1;
    for (let r = 0; r < e.length; r++) {
      const s = e[r];
      s.id = e.length - r - 1;
      const { rasters: a } = s.parameters;
      o = o || (a != null && a.length > 1);
    }
    return { hasBranches: o, functions: e };
  }
  _getOutputPixelType(t) {
    return this.outputPixelType === "unknown" ? t : this.outputPixelType ?? t;
  }
  _getWebGLParameters() {
    return {};
  }
  _getInputBandIds(t) {
    return t;
  }
  _isOutputRoundingNeeded() {
    const { outputPixelType: t } = this;
    return (
      ((t == null ? void 0 : t.startsWith("u")) ||
        (t == null ? void 0 : t.startsWith("s"))) ??
      !1
    );
  }
  _getRasterValues() {
    const { rasterArgumentNames: t } = this;
    return t[0] === "rasters"
      ? this.functionArguments.rasters ?? []
      : t.map((e) => this.functionArguments[e]);
  }
  _getSourceRasterInfos(t) {
    const e = this._getRasterValues(),
      { rasterInfos: i, rasterIds: n } = t;
    if (e.length === 0) return i;
    const o = e.map((s) =>
        s && typeof s == "object" && "bind" in s && s.rasterInfo
          ? s.rasterInfo
          : typeof s == "string" && n.includes(s)
          ? i[n.indexOf(s)]
          : typeof s != "number"
          ? i[0]
          : void 0
      ),
      r = o.find((s) => s) ?? i[0];
    return (
      o.forEach((s, a) => {
        s === void 0 && (o[a] = r);
      }),
      o
    );
  }
  _getPrimaryRasterId(t) {
    return t == null ? void 0 : t.url;
  }
  _getPrimaryRasters(t, e = [], i = []) {
    for (let n = 0; n < t.sourceRasters.length; n++) {
      const o = t.sourceRasters[n];
      if (typeof o != "number")
        if ("bind" in o) this._getPrimaryRasters(o, e, i);
        else {
          const r = o,
            s = this._getPrimaryRasterId(r);
          if (s == null) continue;
          i.includes(s) ||
            (this.mainPrimaryRasterId === s
              ? (e.unshift(r), i.unshift(s))
              : (e.push(r), i.push(s)));
        }
    }
  }
  _isRasterFunctionValue(t) {
    return (
      t != null && typeof t == "object" && "getWebGLProcessorDefinition" in t
    );
  }
  _readRasterValue(t, e) {
    const { primaryPixelBlocks: i } = e;
    if (D(t) || t === "$$") {
      const n = i[0];
      return D(n) ? null : n.clone();
    }
    if (typeof t == "string") {
      const n = e.primaryRasterIds.indexOf(t);
      return n === -1 ? null : i[n];
    }
    if (typeof t == "number") {
      const n = i[0];
      if (D(n)) return null;
      const { width: o, height: r, pixelType: s, mask: a } = n,
        u = a ? new Uint8Array(a) : null,
        h = new Float32Array(o * r);
      h.fill(t);
      const c = this.sourceRasterInfos[0].bandCount,
        p = new Array(c).fill(h);
      return new b({ width: o, height: r, pixelType: s, pixels: p, mask: u });
    }
    return t.process(e);
  }
};
l([m({ json: { write: !0 } })], C.prototype, "functionName", void 0),
  l([m({ json: { write: !0 } })], C.prototype, "functionArguments", void 0),
  l([m()], C.prototype, "rasterArgumentNames", void 0),
  l(
    [
      m({ json: { write: !0 } }),
      Ae((t) => (t == null ? void 0 : t.toLowerCase())),
    ],
    C.prototype,
    "outputPixelType",
    void 0
  ),
  l([m({ json: { write: !0 } })], C.prototype, "mainPrimaryRasterId", void 0),
  l([m()], C.prototype, "sourceRasters", void 0),
  l(
    [m({ type: [qe], json: { write: !0 } })],
    C.prototype,
    "sourceRasterInfos",
    void 0
  ),
  l([m({ json: { write: !0 } })], C.prototype, "rasterInfo", void 0),
  l([m({ json: { write: !0 } })], C.prototype, "readingBufferSize", void 0),
  l([m({ json: { write: !0 } })], C.prototype, "id", void 0),
  l([m()], C.prototype, "isNoopProcess", void 0),
  l([m()], C.prototype, "supportsGPU", null),
  l([m()], C.prototype, "rawInputBandIds", void 0),
  l([m()], C.prototype, "isInputBandIdsSwizzled", void 0),
  l([m()], C.prototype, "swizzledBandSelection", void 0),
  l([m()], C.prototype, "isBranch", void 0),
  l([m()], C.prototype, "_bindingResult", void 0),
  (C = l([R("esri.layers.support.rasterFunctions.BaseRasterFunction")], C));
const V = C;
let Z = class extends V {
  constructor() {
    super(...arguments),
      (this.functionName = "Aspect"),
      (this.functionArguments = null),
      (this.rasterArgumentNames = ["raster"]),
      (this.isGCS = !1);
  }
  _bindSourceRasters() {
    var i;
    const t = this.sourceRasterInfos[0];
    (this.isGCS =
      ((i = t.spatialReference) == null ? void 0 : i.isGeographic) ?? !1),
      (this.outputPixelType = this._getOutputPixelType("f32"));
    const e = t.clone();
    return (
      (e.pixelType = this.outputPixelType),
      (e.statistics = [{ min: 0, max: 360, avg: 180, stddev: 30 }]),
      (e.histograms = null),
      (e.colormap = null),
      (e.attributeTable = null),
      (e.bandCount = 1),
      (this.rasterInfo = e),
      { success: !0, supportsGPU: !0 }
    );
  }
  _processPixels(t) {
    var o;
    const e = (o = t.pixelBlocks) == null ? void 0 : o[0];
    if (D(e)) return null;
    const { extent: i } = t,
      n = i ? { x: i.width / e.width, y: i.height / e.height } : { x: 1, y: 1 };
    return Xe(e, { resolution: n });
  }
};
l(
  [m({ json: { write: !0, name: "rasterFunction" } })],
  Z.prototype,
  "functionName",
  void 0
),
  l(
    [m({ type: Qe, json: { write: !0, name: "rasterFunctionArguments" } })],
    Z.prototype,
    "functionArguments",
    void 0
  ),
  l([m()], Z.prototype, "rasterArgumentNames", void 0),
  l([m({ json: { write: !0 } })], Z.prototype, "isGCS", void 0),
  (Z = l([R("esri.layers.support.rasterFunctions.AspectFunction")], Z));
const tn = Z,
  en = new Set(["+", "-", "*", "/", "(", ")"]);
function nn(t, e, i, n) {
  if (typeof i == "number" && typeof n == "number") return i + n;
  let o;
  if (typeof i == "number") {
    o = n.length;
    const s = i;
    (i = new Float32Array(o)).fill(s);
  } else if (((o = i.length), n.constructor === Number)) {
    const s = n;
    (n = new Float32Array(o)).fill(s);
  }
  const r = new Float32Array(o);
  switch (e) {
    case "+":
      for (let s = 0; s < o; s++) (t == null || t[s]) && (r[s] = i[s] + n[s]);
      break;
    case "-":
      for (let s = 0; s < o; s++) (t == null || t[s]) && (r[s] = i[s] - n[s]);
      break;
    case "*":
      for (let s = 0; s < o; s++) (t == null || t[s]) && (r[s] = i[s] * n[s]);
      break;
    case "/":
      for (let s = 0; s < o; s++)
        (t == null || t[s]) && n[s] && (r[s] = i[s] / n[s]);
      break;
    case "(":
    case ")":
      throw new Error("encountered error with custom band index equation");
  }
  return r;
}
function sn(t, e) {
  t.splice(e, 1);
  let i = 0,
    n = 0;
  do {
    (i = 0), (n = 0);
    for (let o = 0; o < t.length; o++)
      if (t[o] === "(") i = o;
      else if (t[o] === ")") {
        n = o;
        break;
      }
    n === i + 1 && t.splice(i, 2);
  } while (n === i + 1);
  return t;
}
function rn(t) {
  if (t.length === 1) return { opIndex: 0, numIndex: 0 };
  let e = 0,
    i = 0;
  for (let s = 0; s < t.length; s++)
    if (t[s] === "(") e = s;
    else if (t[s] === ")") {
      i = s;
      break;
    }
  const n = i === 0 ? t : t.slice(e + 1, i);
  let o = -1;
  for (let s = 0; s < n.length; s++)
    if (n[s] === "*" || n[s] === "/") {
      o = s;
      break;
    }
  if (o > -1) i > 0 && (o += e + 1);
  else {
    for (let s = 0; s < n.length; s++)
      if (n[s] === "+" || n[s] === "-") {
        o = s;
        break;
      }
    i > 0 && (o += e + 1);
  }
  let r = 0;
  for (let s = 0; s < o; s++) t[s] === "(" && r++;
  return { opIndex: o, numIndex: o - r };
}
function on(t, e, i) {
  let n,
    { ops: o, nums: r } = (function (s, a) {
      (s = s.replace(/ /g, "")).startsWith("-") && (s = "0" + s),
        s.startsWith("+") && (s = s.slice(1, s.length));
      const u = s.split(""),
        h = [],
        c = [];
      let p = "";
      for (let f = 0; f < u.length; f++) {
        const y = u[f];
        if (en.has(y)) p !== "" && c.push(parseFloat(p)), h.push(y), (p = "");
        else {
          if (y.toLowerCase() === "b") {
            f++,
              (p = y.concat(u[f])),
              c.push(a[parseInt(p[1], 10) - 1]),
              (p = "");
            continue;
          }
          (p = p.concat(y)), f === u.length - 1 && c.push(parseFloat(p));
        }
      }
      return { ops: h, nums: c };
    })(i, e);
  if (o.length === 0) {
    const s = r.length === 1 ? r[0] : e[0];
    if (s instanceof Float32Array) return [s];
    const a = new Float32Array(e[0].length);
    return typeof s == "number" ? a.fill(s) : a.set(s), [a];
  }
  for (; o.length > 0; ) {
    const { numIndex: s, opIndex: a } = rn(o);
    if (((n = nn(t, o[a], r[s], r[s + 1])), o.length === 1)) break;
    (o = sn(o, a)), r.splice(s, 2, n);
  }
  return [n];
}
const an = new Ht(
  {
    0: "custom",
    1: "ndvi",
    2: "savi",
    3: "tsavi",
    4: "msavi",
    5: "gemi",
    6: "pvi",
    7: "gvitm",
    8: "sultan",
    9: "vari",
    10: "gndvi",
    11: "sr",
    12: "ndvi-re",
    13: "sr-re",
    14: "mtvi2",
    15: "rtvi-core",
    16: "ci-re",
    17: "ci-g",
    18: "ndwi",
    19: "evi",
    20: "iron-oxide",
    21: "ferrous-minerals",
    22: "clay-minerals",
    23: "wndwi",
    24: "bai",
    25: "nbr",
    26: "ndbi",
    27: "ndmi",
    28: "ndsi",
    29: "mndwi",
  },
  { useNumericKeys: !0 }
);
function un(t, e) {
  if (!Oe(t)) return t;
  const { equation: i, method: n } = e,
    o = e.bandIndexes.map((c) => c - 1),
    { pixels: r, mask: s } = t;
  let a;
  switch (n) {
    case "gndvi":
    case "nbr":
    case "ndbi":
    case "ndvi":
    case "ndvi-re":
    case "ndsi":
    case "ndmi":
    case "mndwi":
      a = ne(s, r[o[0]], r[o[1]]);
      break;
    case "ndwi":
      a = ne(s, r[o[1]], r[o[0]]);
      break;
    case "sr":
    case "sr-re":
    case "iron-oxide":
    case "ferrous-minerals":
    case "clay-minerals":
      a = (function (c, p, f) {
        const y = f.length,
          w = new Float32Array(y);
        for (let d = 0; d < y; d++)
          if (c == null || c[d]) {
            const x = p[d],
              g = f[d];
            g && (w[d] = x / g);
          }
        return [w];
      })(s, r[o[0]], r[o[1]]);
      break;
    case "ci-g":
    case "ci-re":
      a = (function (c, p, f) {
        const y = p.length,
          w = new Float32Array(y);
        for (let d = 0; d < y; d++)
          if (c == null || c[d]) {
            const x = p[d],
              g = f[d];
            g && (w[d] = x / g - 1);
          }
        return [w];
      })(s, r[o[0]], r[o[1]]);
      break;
    case "savi":
      a = (function (c, p, f, y) {
        const w = f.length,
          d = new Float32Array(w);
        for (let x = 0; x < w; x++)
          if (c == null || c[x]) {
            const g = f[x],
              v = p[x],
              I = v + g + y;
            I && (d[x] = ((v - g) / I) * (1 + y));
          }
        return [d];
      })(s, r[o[0]], r[o[1]], o[2] + 1);
      break;
    case "tsavi":
      a = (function (c, p, f, y, w, d) {
        const x = f.length,
          g = new Float32Array(x),
          v = -w * y + d * (1 + y * y);
        for (let I = 0; I < x; I++)
          if (c == null || c[I]) {
            const A = f[I],
              P = p[I],
              O = w * P + A + v;
            O && (g[I] = (y * (P - y * A - w)) / O);
          }
        return [g];
      })(s, r[o[0]], r[o[1]], o[2] + 1, o[3] + 1, o[4] + 1);
      break;
    case "msavi":
      a = (function (c, p, f) {
        const y = f.length,
          w = new Float32Array(y);
        for (let d = 0; d < y; d++)
          if (c == null || c[d]) {
            const x = f[d],
              g = p[d];
            w[d] =
              0.5 * (2 * (g + 1) - Math.sqrt((2 * g + 1) ** 2 - 8 * (g - x)));
          }
        return [w];
      })(s, r[o[0]], r[o[1]]);
      break;
    case "gemi":
      a = (function (c, p, f) {
        const y = f.length,
          w = new Float32Array(y);
        for (let d = 0; d < y; d++)
          if (c == null || c[d]) {
            const x = f[d],
              g = p[d];
            if (x !== 1) {
              const v =
                (2 * (g * g - x * x) + 1.5 * g + 0.5 * x) / (g + x + 0.5);
              w[d] = v * (1 - 0.25 * v) - (x - 0.125) / (1 - x);
            }
          }
        return [w];
      })(s, r[o[0]], r[o[1]]);
      break;
    case "pvi":
      a = (function (c, p, f, y, w) {
        const d = f.length,
          x = new Float32Array(d),
          g = Math.sqrt(1 + y * y);
        for (let v = 0; v < d; v++)
          if (c == null || c[v]) {
            const I = f[v],
              A = p[v];
            x[v] = (A - y * I - w) / g;
          }
        return [x];
      })(s, r[o[0]], r[o[1]], o[2] + 1, o[3] + 1);
      break;
    case "gvitm":
      a = (function (c, p) {
        const [f, y, w, d, x, g] = p,
          v = f.length,
          I = new Float32Array(v);
        for (let A = 0; A < v; A++)
          (c == null || c[A]) &&
            (I[A] =
              -0.2848 * f[A] -
              0.2435 * y[A] -
              0.5436 * w[A] +
              0.7243 * d[A] +
              0.084 * x[A] -
              1.18 * g[A]);
        return [I];
      })(s, [r[o[0]], r[o[1]], r[o[2]], r[o[3]], r[o[4]], r[o[5]]]);
      break;
    case "sultan":
      a = (function (c, p) {
        const [f, , y, w, d, x] = p,
          g = f.length,
          v = new Float32Array(g),
          I = new Float32Array(g),
          A = new Float32Array(g);
        for (let P = 0; P < g; P++)
          (c == null || c[P]) &&
            ((v[P] = x[P] ? (d[P] / x[P]) * 100 : 0),
            (I[P] = f[P] ? (d[P] / f[P]) * 100 : 0),
            (A[P] = w[P] ? (y[P] / w[P]) * (d[P] / w[P]) * 100 : 0));
        return [v, I, A];
      })(s, [r[o[0]], r[o[1]], r[o[2]], r[o[3]], r[o[4]], r[o[5]]]);
      break;
    case "vari":
      a = (function (c, p) {
        const [f, y, w] = p,
          d = f.length,
          x = new Float32Array(d);
        for (let g = 0; g < d; g++)
          if (c == null || c[g])
            for (g = 0; g < d; g++) {
              const v = f[g],
                I = y[g],
                A = I + v - w[g];
              A && (x[g] = (I - v) / A);
            }
        return [x];
      })(s, [r[o[0]], r[o[1]], r[o[2]]]);
      break;
    case "mtvi2":
      a = (function (c, p) {
        const [f, y, w] = p,
          d = f.length,
          x = new Float32Array(d);
        for (let g = 0; g < d; g++)
          if (c == null || c[g])
            for (g = 0; g < d; g++) {
              const v = f[g],
                I = y[g],
                A = w[g],
                P = Math.sqrt(
                  (2 * v + 1) ** 2 - 6 * v - 5 * Math.sqrt(I) - 0.5
                );
              x[g] = 1.5 * (1.2 * (v - A) - 2.5 * (I - A)) * P;
            }
        return [x];
      })(s, [r[o[0]], r[o[1]], r[o[2]]]);
      break;
    case "rtvi-core":
      a = (function (c, p) {
        const [f, y, w] = p,
          d = f.length,
          x = new Float32Array(d);
        for (let g = 0; g < d; g++)
          if (c == null || c[g])
            for (g = 0; g < d; g++) {
              const v = f[g],
                I = y[g],
                A = w[g];
              x[g] = 100 * (v - I) - 10 * (v - A);
            }
        return [x];
      })(s, [r[o[0]], r[o[1]], r[o[2]]]);
      break;
    case "evi":
      a = (function (c, p) {
        const [f, y, w] = p,
          d = f.length,
          x = new Float32Array(d);
        for (let g = 0; g < d; g++)
          if (c == null || c[g])
            for (g = 0; g < d; g++) {
              const v = f[g],
                I = y[g],
                A = v + 6 * I - 7.5 * w[g] + 1;
              A && (x[g] = (2.5 * (v - I)) / A);
            }
        return [x];
      })(s, [r[o[0]], r[o[1]], r[o[2]]]);
      break;
    case "wndwi":
      a = (function (c, p, f = 0.5) {
        const [y, w, d] = p,
          x = w.length,
          g = new Float32Array(x);
        for (let v = 0; v < x; v++)
          if (c == null || c[v])
            for (v = 0; v < x; v++) {
              const I = y[v],
                A = w[v],
                P = d[v],
                O = I + f * A + (1 - f) * P;
              O && (g[v] = (I - f * A - (1 - f) * P) / O);
            }
        return [g];
      })(s, [r[o[0]], r[o[1]], r[o[2]]], o[3] ? o[3] + 1 : 0.5);
      break;
    case "bai":
      a = (function (c, p, f) {
        const y = f.length,
          w = new Float32Array(y);
        for (let d = 0; d < y; d++)
          if (c == null || c[d])
            for (d = 0; d < y; d++) {
              const x = (0.1 - p[d]) ** 2 + (0.06 - f[d]) ** 2;
              x && (w[d] = 1 / x);
            }
        return [w];
      })(s, r[o[0]], r[o[1]]);
      break;
    case "custom":
      a = on(s, r, i);
      break;
    default:
      return t;
  }
  const u = G(s) ? new Uint8Array(s.length) : null;
  G(s) && G(u) && u.set(s);
  const h = new b({
    width: t.width,
    height: t.height,
    pixelType: "f32",
    pixels: a,
    mask: u,
  });
  return h.updateStatistics(), h;
}
function S(t) {
  const e = new Float32Array(9);
  return (e[3 * t[0]] = 1), (e[3 * t[1] + 1] = 1), (e[3 * t[2] + 2] = 1), e;
}
function ne(t, e, i) {
  const n = i.length,
    o = new Float32Array(n);
  for (let r = 0; r < n; r++)
    if (t == null || t[r]) {
      const s = e[r],
        a = i[r],
        u = s + a;
      u && (o[r] = (s - a) / u);
    }
  return [o];
}
var kt;
let gt = (kt = class extends z {
  constructor() {
    super(...arguments), (this.method = "custom");
  }
  clone() {
    return new kt({
      method: this.method,
      bandIndexes: this.bandIndexes,
      raster: W(this.raster),
    });
  }
});
l(
  [m({ json: { type: String, write: !0 } })],
  gt.prototype,
  "bandIndexes",
  void 0
),
  l([dt(an)], gt.prototype, "method", void 0),
  (gt = kt =
    l(
      [
        R(
          "esri.layers.support.rasterFunctions.BandArithmeticFunctionArguments"
        ),
      ],
      gt
    ));
const ln = gt,
  cn = new Set(["vari", "mtvi2", "rtvi-core", "evi"]);
let it = class extends V {
  constructor() {
    super(...arguments),
      (this.functionName = "BandArithmetic"),
      (this.functionArguments = null),
      (this.rasterArgumentNames = ["raster"]);
  }
  _bindSourceRasters() {
    this.outputPixelType = this._getOutputPixelType("f32");
    const t = this.sourceRasterInfos[0],
      e = t.clone();
    return (
      (e.pixelType = this.outputPixelType),
      (e.statistics = null),
      (e.histograms = null),
      (e.bandCount =
        this.functionArguments.method === "sultan" ? t.bandCount : 1),
      (this.rasterInfo = e),
      {
        success: !0,
        supportsGPU: !["custom", "gvitm", "sultan"].includes(
          this.functionArguments.method
        ),
      }
    );
  }
  _processPixels(t) {
    var r;
    const e = (r = t.pixelBlocks) == null ? void 0 : r[0];
    if (D(e)) return e;
    const { method: i, bandIndexes: n } = this.functionArguments,
      o = n.split(" ").map((s) => parseFloat(s));
    return un(e, { method: i, bandIndexes: o, equation: n });
  }
  _getWebGLParameters() {
    const t = this.functionArguments.bandIndexes
      .split(" ")
      .map((s) => parseFloat(s) - 1);
    t.length === 2 && t.push(0);
    const e = this.isInputBandIdsSwizzled ? [0, 1, 2] : t;
    let i, n;
    const o = new Float32Array(3),
      { method: r } = this.functionArguments;
    switch (r) {
      case "gndvi":
      case "nbr":
      case "ndbi":
      case "ndvi":
      case "ndvi-re":
      case "ndsi":
      case "ndmi":
      case "mndwi":
        (i = S([e[0], e[1], 0])), (n = "ndxi");
        break;
      case "ndwi":
        (i = S([e[1], e[0], 0])), (n = "ndxi");
        break;
      case "sr":
      case "sr-re":
      case "iron-oxide":
      case "ferrous-minerals":
      case "clay-minerals":
        (i = S([e[0], e[1], 0])), (n = "sr");
        break;
      case "ci-g":
      case "ci-re":
        (i = S([e[0], e[1], 0])), (n = "ci");
        break;
      case "savi":
        (i = S([e[0], e[1], 0])), (n = "savi"), (o[0] = t[2] + 1);
        break;
      case "tsavi":
        (i = S([e[0], e[1], 0])),
          (n = "tsavi"),
          (o[0] = t[2] + 1),
          (o[1] = t[3] + 1),
          (o[2] = t[4] + 1);
        break;
      case "msavi":
        (i = S([e[0], e[1], 0])), (n = "msavi");
        break;
      case "gemi":
        (i = S([e[0], e[1], 0])), (n = "gemi");
        break;
      case "pvi":
        (i = S([e[0], e[1], 0])),
          (n = "tsavi"),
          (o[0] = t[2] + 1),
          (o[1] = t[3] + 1);
        break;
      case "vari":
        (i = S([e[0], e[1], e[2]])), (n = "vari");
        break;
      case "mtvi2":
        (i = S([e[0], e[1], e[2]])), (n = "mtvi2");
        break;
      case "rtvi-core":
        (i = S([e[0], e[1], e[2]])), (n = "rtvicore");
        break;
      case "evi":
        (i = S([e[0], e[1], e[2]])), (n = "evi");
        break;
      case "wndwi":
        (i = S([e[0], e[1], 0])), (n = "wndwi"), (o[0] = t[3] ? t[3] + 1 : 0.5);
        break;
      case "bai":
        (i = S([e[1], e[0], 0])), (n = "bai");
        break;
      default:
        (i = S([0, 1, 2])), (n = "custom");
    }
    return { bandIndexMat3: i, indexType: n, adjustments: o };
  }
  _getInputBandIds(t) {
    if (this.functionArguments.method === "custom") return t;
    const e = this.functionArguments.bandIndexes
        .split(" ")
        .map((s) => parseFloat(s) - 1),
      i = t.length,
      n = e.map((s) => (s >= i ? i - 1 : s)),
      o = cn.has(this.functionArguments.method) ? 3 : 2,
      r = n.slice(0, o).map((s) => t[s]);
    return r.length === 2 && r.push(0), r;
  }
};
l(
  [m({ json: { write: !0, name: "rasterFunction" } })],
  it.prototype,
  "functionName",
  void 0
),
  l(
    [m({ type: ln, json: { write: !0, name: "rasterFunctionArguments" } })],
    it.prototype,
    "functionArguments",
    void 0
  ),
  l([m()], it.prototype, "rasterArgumentNames", void 0),
  (it = l(
    [R("esri.layers.support.rasterFunctions.BandArithmeticFunction")],
    it
  ));
const pn = it;
var St;
let q = (St = class extends z {
  castColormapName(t) {
    if (!t) return null;
    const e = t.toLowerCase();
    return He.includes(e) ? e : null;
  }
  readColorRamp(t) {
    return De(t);
  }
  readColorRampName(t, e) {
    if (!t) return null;
    const i = bt.jsonValues.find((n) => n.toLowerCase() === t.toLowerCase());
    return i ? bt.fromJSON(i) : null;
  }
  clone() {
    var t;
    return new St({
      colormap: W(this.colormap),
      colormapName: this.colormapName,
      colorRamp: (t = this.colorRamp) == null ? void 0 : t.clone(),
      colorRampName: this.colorRampName,
    });
  }
});
l(
  [m({ type: [[Number]], json: { write: !0 } })],
  q.prototype,
  "colormap",
  void 0
),
  l(
    [m({ type: String, json: { write: !0 } })],
    q.prototype,
    "colormapName",
    void 0
  ),
  l([Ae("colormapName")], q.prototype, "castColormapName", null),
  l([m({ types: _e, json: { write: !0 } })], q.prototype, "colorRamp", void 0),
  l([At("colorRamp")], q.prototype, "readColorRamp", null),
  l(
    [m({ type: bt.apiValues, json: { type: bt.jsonValues, write: bt.write } })],
    q.prototype,
    "colorRampName",
    void 0
  ),
  l([At("colorRampName")], q.prototype, "readColorRampName", null),
  (q = St =
    l([R("esri.layers.support.rasterFunctions.ColormapFunctionArguments")], q));
const hn = q,
  mn = [
    [36, 0, 255],
    [36, 0, 255],
    [36, 0, 255],
    [36, 0, 255],
    [112, 75, 3],
    [113, 76, 3],
    [114, 77, 3],
    [115, 77, 3],
    [116, 78, 3],
    [117, 79, 3],
    [118, 79, 3],
    [119, 80, 3],
    [121, 81, 4],
    [122, 82, 4],
    [123, 82, 4],
    [124, 83, 4],
    [125, 84, 4],
    [126, 84, 4],
    [127, 85, 4],
    [128, 86, 4],
    [129, 86, 4],
    [130, 87, 4],
    [131, 88, 4],
    [132, 89, 4],
    [133, 89, 4],
    [134, 90, 4],
    [135, 91, 4],
    [136, 91, 4],
    [137, 92, 4],
    [138, 93, 4],
    [139, 94, 4],
    [140, 94, 4],
    [142, 95, 5],
    [143, 96, 5],
    [144, 96, 5],
    [145, 97, 5],
    [146, 98, 5],
    [147, 99, 5],
    [148, 99, 5],
    [149, 100, 5],
    [150, 101, 5],
    [151, 101, 5],
    [152, 102, 5],
    [153, 103, 5],
    [154, 104, 5],
    [155, 104, 5],
    [156, 105, 5],
    [157, 106, 5],
    [158, 106, 5],
    [159, 107, 5],
    [160, 108, 5],
    [161, 108, 5],
    [162, 109, 5],
    [164, 110, 6],
    [165, 111, 6],
    [166, 111, 6],
    [167, 112, 6],
    [168, 113, 6],
    [169, 113, 6],
    [170, 114, 6],
    [171, 115, 6],
    [172, 116, 6],
    [173, 116, 6],
    [174, 117, 6],
    [245, 0, 0],
    [245, 5, 0],
    [245, 10, 0],
    [246, 15, 0],
    [246, 20, 0],
    [246, 25, 0],
    [246, 30, 0],
    [247, 35, 0],
    [247, 40, 0],
    [247, 45, 0],
    [247, 50, 0],
    [247, 55, 0],
    [248, 60, 0],
    [248, 65, 0],
    [248, 70, 0],
    [248, 75, 0],
    [249, 81, 0],
    [249, 86, 0],
    [249, 91, 0],
    [249, 96, 0],
    [250, 101, 0],
    [250, 106, 0],
    [250, 111, 0],
    [250, 116, 0],
    [250, 121, 0],
    [251, 126, 0],
    [251, 131, 0],
    [251, 136, 0],
    [251, 141, 0],
    [252, 146, 0],
    [252, 151, 0],
    [252, 156, 0],
    [252, 156, 0],
    [251, 159, 0],
    [250, 162, 0],
    [249, 165, 0],
    [248, 168, 0],
    [247, 171, 0],
    [246, 174, 0],
    [245, 177, 0],
    [245, 179, 0],
    [244, 182, 0],
    [243, 185, 0],
    [242, 188, 0],
    [241, 191, 0],
    [240, 194, 0],
    [239, 197, 0],
    [238, 200, 0],
    [237, 203, 0],
    [236, 206, 0],
    [235, 209, 0],
    [234, 212, 0],
    [233, 215, 0],
    [232, 218, 0],
    [231, 221, 0],
    [230, 224, 0],
    [230, 226, 0],
    [229, 229, 0],
    [228, 232, 0],
    [227, 235, 0],
    [226, 238, 0],
    [225, 241, 0],
    [224, 244, 0],
    [223, 247, 0],
    [165, 247, 0],
    [163, 244, 0],
    [161, 240, 0],
    [158, 237, 0],
    [156, 233, 1],
    [154, 230, 1],
    [152, 227, 1],
    [149, 223, 1],
    [147, 220, 1],
    [145, 216, 1],
    [143, 213, 1],
    [140, 210, 2],
    [138, 206, 2],
    [136, 203, 2],
    [134, 200, 2],
    [132, 196, 2],
    [129, 193, 2],
    [127, 189, 2],
    [125, 186, 3],
    [123, 183, 3],
    [120, 179, 3],
    [118, 176, 3],
    [116, 172, 3],
    [114, 169, 3],
    [111, 166, 3],
    [109, 162, 4],
    [107, 159, 4],
    [105, 155, 4],
    [103, 152, 4],
    [100, 149, 4],
    [98, 145, 4],
    [96, 142, 4],
    [94, 138, 5],
    [91, 135, 5],
    [89, 132, 5],
    [87, 128, 5],
    [85, 125, 5],
    [82, 121, 5],
    [80, 118, 5],
    [78, 115, 6],
    [76, 111, 6],
    [73, 108, 6],
    [71, 105, 6],
    [69, 101, 6],
    [67, 98, 6],
    [65, 94, 6],
    [62, 91, 7],
    [60, 88, 7],
    [58, 84, 7],
    [56, 81, 7],
    [53, 77, 7],
    [51, 74, 7],
    [49, 71, 7],
    [47, 67, 8],
    [44, 64, 8],
    [42, 60, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
    [40, 57, 8],
  ],
  fn = [
    [36, 0, 255],
    [36, 0, 255],
    [36, 0, 255],
    [36, 0, 255],
    [245, 20, 0],
    [245, 24, 0],
    [245, 29, 0],
    [245, 31, 0],
    [247, 33, 0],
    [247, 33, 0],
    [247, 37, 0],
    [247, 41, 0],
    [247, 41, 0],
    [247, 41, 0],
    [247, 45, 0],
    [247, 45, 0],
    [247, 47, 0],
    [247, 49, 0],
    [247, 49, 0],
    [247, 54, 0],
    [247, 54, 0],
    [247, 56, 0],
    [247, 58, 0],
    [247, 58, 0],
    [250, 62, 0],
    [250, 62, 0],
    [250, 62, 0],
    [250, 67, 0],
    [250, 67, 0],
    [250, 67, 0],
    [250, 69, 0],
    [250, 71, 0],
    [250, 71, 0],
    [250, 75, 0],
    [250, 75, 0],
    [250, 78, 0],
    [250, 79, 0],
    [250, 79, 0],
    [250, 79, 0],
    [250, 81, 0],
    [250, 83, 0],
    [250, 83, 0],
    [250, 87, 0],
    [250, 87, 0],
    [250, 90, 0],
    [250, 92, 0],
    [252, 93, 0],
    [252, 93, 0],
    [252, 97, 0],
    [252, 97, 0],
    [252, 97, 0],
    [252, 97, 0],
    [252, 101, 0],
    [252, 101, 0],
    [252, 101, 0],
    [252, 101, 0],
    [252, 105, 0],
    [252, 105, 0],
    [252, 107, 0],
    [252, 109, 0],
    [252, 109, 0],
    [252, 113, 13],
    [255, 118, 20],
    [255, 119, 23],
    [255, 121, 25],
    [255, 126, 33],
    [255, 132, 38],
    [255, 133, 40],
    [255, 135, 43],
    [255, 141, 48],
    [255, 144, 54],
    [255, 150, 59],
    [255, 152, 61],
    [255, 153, 64],
    [255, 159, 69],
    [255, 163, 77],
    [255, 165, 79],
    [255, 168, 82],
    [255, 174, 87],
    [255, 176, 92],
    [255, 181, 97],
    [255, 183, 99],
    [255, 186, 102],
    [255, 191, 107],
    [255, 197, 115],
    [255, 201, 120],
    [255, 203, 123],
    [255, 205, 125],
    [255, 209, 130],
    [255, 214, 138],
    [255, 216, 141],
    [255, 218, 143],
    [255, 224, 150],
    [255, 228, 156],
    [255, 234, 163],
    [255, 236, 165],
    [255, 238, 168],
    [255, 243, 173],
    [255, 248, 181],
    [255, 252, 186],
    [253, 252, 186],
    [250, 252, 187],
    [244, 250, 180],
    [238, 247, 176],
    [234, 246, 173],
    [231, 245, 169],
    [223, 240, 163],
    [217, 237, 157],
    [211, 235, 150],
    [205, 233, 146],
    [200, 230, 142],
    [195, 227, 136],
    [189, 224, 132],
    [184, 222, 126],
    [180, 220, 123],
    [174, 217, 119],
    [169, 214, 114],
    [163, 212, 108],
    [160, 210, 105],
    [154, 207, 101],
    [148, 204, 96],
    [143, 201, 93],
    [138, 199, 88],
    [134, 197, 84],
    [130, 194, 81],
    [126, 191, 77],
    [117, 189, 70],
    [115, 186, 68],
    [112, 184, 64],
    [106, 181, 60],
    [100, 179, 55],
    [94, 176, 49],
    [92, 174, 47],
    [90, 173, 45],
    [81, 168, 37],
    [75, 166, 33],
    [71, 163, 28],
    [66, 160, 24],
    [62, 158, 21],
    [56, 156, 14],
    [51, 153, 0],
    [51, 153, 0],
    [51, 153, 0],
    [50, 150, 0],
    [50, 150, 0],
    [50, 150, 0],
    [50, 150, 0],
    [49, 148, 0],
    [49, 148, 0],
    [49, 148, 0],
    [48, 145, 0],
    [48, 145, 0],
    [48, 145, 0],
    [48, 145, 0],
    [48, 143, 0],
    [48, 143, 0],
    [48, 143, 0],
    [48, 143, 0],
    [47, 140, 0],
    [47, 140, 0],
    [47, 140, 0],
    [47, 140, 0],
    [46, 138, 0],
    [46, 138, 0],
    [46, 138, 0],
    [46, 138, 0],
    [45, 135, 0],
    [45, 135, 0],
    [45, 135, 0],
    [45, 135, 0],
    [44, 133, 0],
    [44, 133, 0],
    [44, 133, 0],
    [43, 130, 0],
    [43, 130, 0],
    [43, 130, 0],
    [43, 130, 0],
    [43, 130, 0],
    [43, 130, 0],
    [42, 128, 0],
    [42, 128, 0],
    [42, 128, 0],
    [42, 125, 0],
    [42, 125, 0],
    [42, 125, 0],
    [42, 125, 0],
    [41, 122, 0],
    [41, 122, 0],
    [41, 122, 0],
    [41, 122, 0],
    [40, 120, 0],
    [40, 120, 0],
    [40, 120, 0],
    [40, 120, 0],
    [40, 120, 0],
    [39, 117, 0],
    [39, 117, 0],
    [39, 117, 0],
    [39, 117, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
    [38, 115, 0],
  ];
function Tt(t, e) {
  const i = [],
    n = [];
  for (let r = 0; r < t.length - 1; r++)
    i.push({
      type: "algorithmic",
      algorithm: "esriHSVAlgorithm",
      fromColor: t[r].slice(1),
      toColor: t[r + 1].slice(1),
    }),
      n.push(t[r + 1][0] - t[r][0]);
  const o = t[t.length - 1][0];
  return Re(
    { type: "multipart", colorRamps: i },
    { numColors: o, weights: (e = e ?? n) }
  );
}
function dn(t) {
  let e;
  switch (t) {
    case "elevation":
      e = Tt([
        [0, 0, 191, 191],
        [51, 0, 255, 0],
        [102, 255, 255, 0],
        [153, 255, 127, 0],
        [204, 191, 127, 63],
        [256, 20, 20, 20],
      ]);
      break;
    case "gray":
      e = Re({
        type: "algorithmic",
        algorithm: "esriHSVAlgorithm",
        fromColor: [0, 0, 0],
        toColor: [255, 255, 255],
      });
      break;
    case "hillshade":
      e = Tt(
        [
          [0, 38, 54, 41],
          [69, 79, 90, 82],
          [131, 156, 156, 156],
          [256, 253, 241, 253],
        ],
        [0.268, 0.238, 0.495]
      );
      break;
    case "ndvi":
      e = mn;
      break;
    case "ndvi2":
      e = (function () {
        const i = Tt([
          [0, 255, 255, 255],
          [70, 0, 0, 255],
          [80, 205, 193, 173],
          [100, 150, 150, 150],
          [110, 120, 100, 51],
          [130, 120, 200, 100],
          [140, 28, 144, 3],
          [160, 6, 55, 0],
          [180, 10, 30, 25],
          [201, 6, 27, 7],
        ]);
        for (let n = i.length; n < 256; n++) i.push([6, 27, 7]);
        return i;
      })();
      break;
    case "ndvi3":
      e = fn;
      break;
    case "random":
      e = (function () {
        const i = [];
        for (let n = 0; n < 256; n++) {
          const o = [];
          for (let r = 0; r < 3; r++) o.push(Math.round(255 * Math.random()));
          i.push(o);
        }
        return i;
      })();
  }
  return e ? ((e = e.map((i, n) => [n, ...i])), e) : null;
}
let X = class extends V {
  constructor() {
    super(...arguments),
      (this.functionName = "Colormap"),
      (this.functionArguments = null),
      (this.rasterArgumentNames = ["raster"]),
      (this.isNoopProcess = !0);
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0];
    if (t.bandCount > 1)
      return {
        success: !1,
        supportsGPU: !1,
        error: "colormap-function: source data must be single band",
      };
    let {
      colormap: e,
      colormapName: i,
      colorRamp: n,
      colorRampName: o,
    } = this.functionArguments;
    if (!(e != null && e.length))
      if (n) e = ee(n, { interpolateAlpha: !0 });
      else if (o) {
        const s = $e(o);
        s && (e = ee(s));
      } else i && (e = dn(i));
    if (!(e != null && e.length))
      return {
        success: !1,
        supportsGPU: !1,
        error: "colormap-function: missing colormap argument",
      };
    this.outputPixelType = this._getOutputPixelType("u8");
    const r = t.clone();
    return (
      (r.pixelType = this.outputPixelType),
      (r.colormap = e),
      (r.bandCount = 1),
      (this.rasterInfo = r),
      { success: !0, supportsGPU: !0 }
    );
  }
  _processPixels(t) {
    var e;
    return (e = t.pixelBlocks) == null ? void 0 : e[0];
  }
};
l(
  [m({ json: { write: !0, name: "rasterFunction" } })],
  X.prototype,
  "functionName",
  void 0
),
  l(
    [m({ type: hn, json: { write: !0, name: "rasterFunctionArguments" } })],
    X.prototype,
    "functionArguments",
    void 0
  ),
  l([m()], X.prototype, "rasterArgumentNames", void 0),
  l([m()], X.prototype, "isNoopProcess", void 0),
  l([m({ json: { write: !0 } })], X.prototype, "indexedColormap", void 0),
  (X = l([R("esri.layers.support.rasterFunctions.ColormapFunction")], X));
const gn = X;
var jt;
let yt = (jt = class extends z {
  constructor() {
    super(...arguments), (this.rasters = []);
  }
  writeRasters(t, e) {
    e.rasters = t.map((i) =>
      typeof i == "number" || typeof i == "string" ? i : i.toJSON()
    );
  }
  clone() {
    return new jt({ rasters: W(this.rasters) });
  }
});
l([m({ json: { write: !0 } })], yt.prototype, "rasters", void 0),
  l([ft("rasters")], yt.prototype, "writeRasters", null),
  (yt = jt =
    l(
      [R("esri.layers.support.rasterFunctions.CompositeBandFunctionArguments")],
      yt
    ));
const yn = yt;
let at = class extends V {
  constructor() {
    super(...arguments),
      (this.functionName = "CompositeBand"),
      (this.functionArguments = null),
      (this.rasterArgumentNames = ["rasters"]);
  }
  _bindSourceRasters() {
    const { sourceRasterInfos: t } = this,
      e = t[0];
    this.outputPixelType = this._getOutputPixelType(e.pixelType);
    const i = e.clone();
    if (
      ((i.attributeTable = null),
      (i.colormap = null),
      (i.pixelType = this.outputPixelType),
      (i.bandCount = t.map(({ bandCount: n }) => n).reduce((n, o) => n + o)),
      t.every(({ statistics: n }) => G(n) && n.length))
    ) {
      const n = [];
      t.forEach(({ statistics: o }) => G(o) && n.push(...o)),
        (i.statistics = n);
    }
    if (t.every(({ histograms: n }) => G(n) && n.length)) {
      const n = [];
      t.forEach(({ histograms: o }) => G(o) && n.push(...o)),
        (i.histograms = n);
    }
    return (
      i.bandCount > 1 && ((i.colormap = null), (i.attributeTable = null)),
      (this.rasterInfo = i),
      { success: !0, supportsGPU: i.bandCount <= 3 }
    );
  }
  _processPixels(t) {
    const { pixelBlocks: e } = t;
    if (!e) return null;
    const i = e == null ? void 0 : e[0];
    return D(i) ? null : Ge(e);
  }
  _getWebGLParameters() {
    return { bandCount: this.rasterInfo.bandCount };
  }
};
l(
  [m({ json: { write: !0, name: "rasterFunction" } })],
  at.prototype,
  "functionName",
  void 0
),
  l(
    [m({ type: yn, json: { write: !0, name: "rasterFunctionArguments" } })],
    at.prototype,
    "functionArguments",
    void 0
  ),
  l([m()], at.prototype, "rasterArgumentNames", void 0),
  (at = l(
    [R("esri.layers.support.rasterFunctions.CompositeBandFunction")],
    at
  ));
const xn = at,
  N = {
    userDefined: -1,
    lineDetectionHorizontal: 0,
    lineDetectionVertical: 1,
    lineDetectionLeftDiagonal: 2,
    lineDetectionRightDiagonal: 3,
    gradientNorth: 4,
    gradientWest: 5,
    gradientEast: 6,
    gradientSouth: 7,
    gradientNorthEast: 8,
    gradientNorthWest: 9,
    smoothArithmeticMean: 10,
    smoothing3x3: 11,
    smoothing5x5: 12,
    sharpening3x3: 13,
    sharpening5x5: 14,
    laplacian3x3: 15,
    laplacian5x5: 16,
    sobelHorizontal: 17,
    sobelVertical: 18,
    sharpen: 19,
    sharpen2: 20,
    pointSpread: 21,
    none: 255,
  },
  E = {
    bitwiseAnd: 11,
    bitwiseLeftShift: 12,
    bitwiseNot: 13,
    bitwiseOr: 14,
    bitwiseRightShift: 15,
    bitwiseXOr: 16,
    booleanAnd: 17,
    booleanNot: 18,
    booleanOr: 19,
    booleanXOr: 20,
    equalTo: 24,
    greaterThan: 28,
    greaterThanEqual: 29,
    lessThan: 33,
    lessThanEqual: 34,
    isNull: 31,
    notEqual: 46,
  },
  U = {
    acos: 6,
    asin: 7,
    atan: 8,
    atanh: 9,
    cos: 21,
    cosh: 22,
    sin: 51,
    sinh: 52,
    tan: 56,
    tanh: 57,
    acosh: 59,
    asinh: 60,
    atan2: 61,
  },
  Te = { setNull: 50, conditional: 78 },
  se = {
    plus: 1,
    minus: 2,
    times: 3,
    sqrt: 4,
    power: 5,
    abs: 10,
    divide: 23,
    exp: 25,
    exp10: 26,
    exp2: 27,
    int: 30,
    float: 32,
    ln: 35,
    log10: 36,
    log2: 37,
    mod: 44,
    negate: 45,
    roundDown: 48,
    roundUp: 49,
    square: 53,
    floatDivide: 64,
    floorDivide: 65,
    ...E,
    ...U,
    majority: 38,
    max: 39,
    mean: 40,
    med: 41,
    min: 42,
    minority: 43,
    range: 47,
    stddev: 54,
    sum: 55,
    variety: 58,
    majorityIgnoreNoData: 66,
    maxIgnoreNoData: 67,
    meanIgnoreNoData: 68,
    medIgnoreNoData: 69,
    minIgnoreNoData: 70,
    minorityIgnoreNoData: 71,
    rangeIgnoreNoData: 72,
    stddevIgnoreNoData: 73,
    sumIgnoreNoData: 74,
    varietyIgnoreNoData: 75,
    ...Te,
  },
  T = new Map();
function re(t, e, i, n, o, r, s) {
  const a = new Float32Array(e * i),
    u = r.length,
    h = s ? 0 : n,
    c = s ? n : 0,
    p = s ? 1 : e;
  for (let f = h; f < i - h; f++) {
    const y = f * e;
    for (let w = c; w < e - c; w++) {
      if (o && !o[y + w]) continue;
      let d = 0;
      for (let x = 0; x < u; x++) d += t[y + w + (x - n) * p] * r[x];
      a[y + w] = d;
    }
  }
  return a;
}
function wn(t, e, i, n, o, r, s) {
  const a = new Float32Array(e * i),
    u = Math.floor(n / 2),
    h = Math.floor(o / 2);
  for (let c = u; c < i - u; c++) {
    const p = c * e;
    for (let f = h; f < e - h; f++) {
      if (r && !r[p + f]) continue;
      let y = 0;
      for (let w = 0; w < n; w++)
        for (let d = 0; d < o; d++)
          y += t[p + f + (w - u) * e + d - h] * s[w * o + d];
      a[p + f] = y;
    }
  }
  return a;
}
function oe(t, e, i, n, o) {
  const r = Math.floor(n / 2);
  for (let a = 0; a < r; a++)
    for (let u = 0; u < e; u++)
      (t[a * e + u] = t[(o - 1 - a) * e + u]),
        (t[(i - 1 - a) * e + u] = t[(i - o + a) * e + u]);
  const s = Math.floor(o / 2);
  for (let a = 0; a < i; a++) {
    const u = a * e;
    for (let h = 0; h < s; h++)
      (t[u + h] = t[u + o - 1 - h]), (t[u + e - h - 1] = t[u + e + h - o]);
  }
}
function vn(t, e) {
  const i = (function (s) {
      const a = Math.sqrt(s.length),
        u = s.slice(0, a),
        h = [1];
      for (let c = 1; c < a; c++) {
        let p = null;
        for (let f = 0; f < a; f++) {
          const y = s[f + c * a],
            w = s[f];
          if (p == null)
            if (w === 0) {
              if (y) return { separable: !1, row: null, col: null };
            } else p = y / w;
          else if (y / w !== p) return { separable: !1, row: null, col: null };
        }
        if (p == null) return { separable: !1, row: null, col: null };
        h.push(p);
      }
      return { separable: !0, row: u, col: h };
    })(e.kernel),
    n = e.mirrorEdges !== !1,
    o = i.separable
      ? (function (s, a, u, h = !0) {
          const { pixels: c, width: p, height: f, pixelType: y, mask: w } = s,
            d = c.length,
            x = [],
            g = a.length,
            v = u.length,
            I = Math.floor(g / 2),
            A = Math.floor(v / 2);
          for (let P = 0; P < d; P++) {
            let O = re(c[P], p, f, I, w, a, !0);
            (O = re(O, p, f, A, w, u, !1)), h && oe(O, p, f, g, v), x.push(O);
          }
          return new b({
            width: p,
            height: f,
            pixelType: y,
            pixels: x,
            mask: w,
          });
        })(t, i.row, i.col, n)
      : (function (s, a, u = !0) {
          const { pixels: h, width: c, height: p, pixelType: f, mask: y } = s,
            w = h.length,
            d = [],
            { kernel: x, rows: g, cols: v } = a;
          for (let I = 0; I < w; I++) {
            const A = wn(h[I], c, p, g, v, y, x);
            u && oe(A, c, p, g, v), d.push(A);
          }
          return new b({
            width: c,
            height: p,
            pixelType: f,
            pixels: d,
            mask: y,
          });
        })(t, e, n),
    { outputPixelType: r } = e;
  return r && o.clamp(r), o;
}
var Mt;
T.set(N.none, [0, 0, 0, 0, 1, 0, 0, 0, 0]),
  T.set(N.lineDetectionHorizontal, [-1, -1, -1, 2, 2, 2, -1, -1, -1]),
  T.set(N.lineDetectionVertical, [-1, 2, -1, -1, 2, -1, -1, 2, -1]),
  T.set(N.lineDetectionLeftDiagonal, [2, -1, -1, -1, 2, -1, -1, -1, 2]),
  T.set(N.lineDetectionRightDiagonal, [-1, -1, 2, -1, 2, -1, 2, -1, -1]),
  T.set(N.gradientNorth, [-1, -2, -1, 0, 0, 0, 1, 2, 1]),
  T.set(N.gradientWest, [-1, 0, 1, -2, 0, 2, -1, 0, 1]),
  T.set(N.gradientEast, [1, 0, -1, 2, 0, -2, 1, 0, -1]),
  T.set(N.gradientSouth, [1, 2, 1, 0, 0, 0, -1, -2, -1]),
  T.set(N.gradientNorthEast, [0, -1, -2, 1, 0, -1, 2, 1, 0]),
  T.set(N.gradientNorthWest, [-2, -1, 0, -1, 0, 1, 0, 1, 2]),
  T.set(
    N.smoothArithmeticMean,
    [
      0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111,
      0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111,
      0.111111111111,
    ]
  ),
  T.set(
    N.smoothing3x3,
    [0.0625, 0.125, 0.0625, 0.125, 0.25, 0.125, 0.0625, 0.125, 0.0625]
  ),
  T.set(
    N.smoothing5x5,
    [1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 4, 12, 4, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1]
  ),
  T.set(N.sharpening3x3, [-1, -1, -1, -1, 9, -1, -1, -1, -1]),
  T.set(
    N.sharpening5x5,
    [
      -1, -3, -4, -3, -1, -3, 0, 6, 0, -3, -4, 6, 21, 6, -4, -3, 0, 6, 0, -3,
      -1, -3, -4, -3, -1,
    ]
  ),
  T.set(N.laplacian3x3, [0, -1, 0, -1, 4, -1, 0, -1, 0]),
  T.set(
    N.laplacian5x5,
    [
      0, 0, -1, 0, 0, 0, -1, -2, -1, 0, -1, -2, 17, -2, -1, 0, -1, -2, -1, 0, 0,
      0, -1, 0, 0,
    ]
  ),
  T.set(N.sobelHorizontal, [-1, -2, -1, 0, 0, 0, 1, 2, 1]),
  T.set(N.sobelVertical, [-1, 0, 1, -2, 0, 2, -1, 0, 1]),
  T.set(N.sharpen, [0, -0.25, 0, -0.25, 2, -0.25, 0, -0.25, 0]),
  T.set(
    N.sharpen2,
    [-0.25, -0.25, -0.25, -0.25, 3, -0.25, -0.25, -0.25, -0.25]
  ),
  T.set(
    N.pointSpread,
    [-0.627, 0.352, -0.627, 0.352, 2.923, 0.352, -0.627, 0.352, -0.627]
  );
let Q = (Mt = class extends z {
  constructor() {
    super(...arguments),
      (this.rows = 3),
      (this.cols = 3),
      (this.kernel = [0, 0, 0, 0, 1, 0, 0, 0, 0]);
  }
  set convolutionType(t) {
    this._set("convolutionType", t);
    const e = T.get(t);
    if (!e || t === N.userDefined || t === N.none) return;
    const i = Math.sqrt(e.length);
    this._set("kernel", e), this._set("cols", i), this._set("rows", i);
  }
  clone() {
    return new Mt({
      cols: this.cols,
      rows: this.rows,
      kernel: [...this.kernel],
      convolutionType: this.convolutionType,
      raster: W(this.raster),
    });
  }
});
l([m({ json: { type: Number, write: !0 } })], Q.prototype, "rows", void 0),
  l([m({ json: { type: Number, write: !0 } })], Q.prototype, "cols", void 0),
  l(
    [m({ json: { name: "type", type: Number, write: !0 } })],
    Q.prototype,
    "convolutionType",
    null
  ),
  l(
    [m({ json: { type: [Number], write: !0 } })],
    Q.prototype,
    "kernel",
    void 0
  ),
  (Q = Mt =
    l(
      [R("esri.layers.support.rasterFunctions.ConvolutionFunctionArguments")],
      Q
    ));
const bn = Q;
let ut = class extends V {
  constructor() {
    super(...arguments),
      (this.functionName = "Convolution"),
      (this.rasterArgumentNames = ["raster"]);
  }
  _bindSourceRasters() {
    const {
      convolutionType: t,
      rows: e,
      cols: i,
      kernel: n,
    } = this.functionArguments;
    if (!Object.values(N).includes(t))
      return {
        success: !1,
        supportsGPU: !1,
        error: `convolution-function: the specified kernel type is not supported ${t}`,
      };
    if (t !== N.none && e * i !== n.length)
      return {
        success: !1,
        supportsGPU: !1,
        error:
          "convolution-function: the specified rows and cols do not match the length of the kernel",
      };
    const o = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType(o.pixelType);
    const r = o.clone();
    r.pixelType = this.outputPixelType;
    const s = [N.none, N.sharpen, N.sharpen2, N.sharpening3x3, N.sharpening5x5];
    return (
      this.outputPixelType === "u8" ||
        s.includes(t) ||
        ((r.statistics = null), (r.histograms = null)),
      (r.colormap = null),
      (r.attributeTable = null),
      (this.rasterInfo = r),
      { success: !0, supportsGPU: n.length <= 25 }
    );
  }
  _processPixels(t) {
    var s;
    const e = (s = t.pixelBlocks) == null ? void 0 : s[0];
    if (D(e) || this.functionArguments.convolutionType === N.none) return e;
    let { kernel: i, rows: n, cols: o } = this.functionArguments;
    const r = i.reduce((a, u) => a + u);
    return (
      r !== 0 && r !== 1 && (i = i.map((a) => a / r)),
      vn(e, {
        kernel: i,
        rows: n,
        cols: o,
        outputPixelType: this.outputPixelType,
      })
    );
  }
  _getWebGLParameters() {
    let { kernel: t } = this.functionArguments;
    const e = t.reduce((n, o) => n + o);
    e !== 0 && e !== 1 && (t = t.map((n) => n / e));
    const i = new Float32Array(25);
    return (
      i.set(t),
      {
        kernelRows: this.functionArguments.rows,
        kernelCols: this.functionArguments.cols,
        kernel: i,
        clampRange: Nt(this.outputPixelType),
      }
    );
  }
};
l(
  [m({ json: { write: !0, name: "rasterFunction" } })],
  ut.prototype,
  "functionName",
  void 0
),
  l(
    [m({ type: bn, json: { write: !0, name: "rasterFunctionArguments" } })],
    ut.prototype,
    "functionArguments",
    void 0
  ),
  l([m()], ut.prototype, "rasterArgumentNames", void 0),
  (ut = l([R("esri.layers.support.rasterFunctions.ConvolutionFunction")], ut));
const An = ut;
var _t;
let xt = (_t = class extends z {
  constructor() {
    super(...arguments),
      (this.bandIds = []),
      (this.missingBandAction = Fe.bestMatch);
  }
  clone() {
    return new _t({
      bandIds: [...this.bandIds],
      missingBandAction: this.missingBandAction,
    });
  }
});
l([m({ json: { write: !0 } })], xt.prototype, "bandIds", void 0),
  l([m({ json: { write: !0 } })], xt.prototype, "missingBandAction", void 0),
  (xt = _t =
    l(
      [R("esri.layers.support.rasterFunctions.ExtractBandFunctionArguments")],
      xt
    ));
const In = xt;
let lt = class extends V {
  constructor() {
    super(...arguments),
      (this.functionName = "ExtractBand"),
      (this.functionArguments = null),
      (this.rasterArgumentNames = ["raster"]);
  }
  _bindSourceRasters() {
    const { sourceRasterInfos: t } = this,
      e = t[0],
      { bandCount: i } = e,
      { bandIds: n, missingBandAction: o } = this.functionArguments;
    if (o === Fe.fail && n.some((u) => u < 0 || u >= i))
      return {
        success: !1,
        supportsGPU: !1,
        error: "extract-band-function: invalid bandIds",
      };
    this.outputPixelType = this._getOutputPixelType("f32");
    const r = e.clone();
    (r.pixelType = this.outputPixelType), (r.bandCount = n.length);
    const { statistics: s, histograms: a } = r;
    return (
      G(s) &&
        s.length &&
        (r.statistics = n.map((u) => s[u] || s[s.length - 1])),
      G(a) &&
        a.length &&
        (r.histograms = n.map((u) => a[u] || a[a.length - 1])),
      (this.rasterInfo = r),
      { success: !0, supportsGPU: r.bandCount <= 3 }
    );
  }
  _processPixels(t) {
    var o;
    const e = (o = t.pixelBlocks) == null ? void 0 : o[0];
    if (D(e)) return null;
    const i = e.pixels.length,
      n = this.functionArguments.bandIds.map((r) => (r >= i ? i - 1 : r));
    return e.extractBands(n);
  }
  _getWebGLParameters() {
    let t;
    if (this.isInputBandIdsSwizzled)
      t = this.swizzledBandSelection.length
        ? this.swizzledBandSelection
        : [0, 1, 2];
    else {
      (t = [...this.functionArguments.bandIds]),
        t.length === 0
          ? (t = [0, 1, 2])
          : t.length < 3 && ((t[1] = t[1] ?? t[0]), (t[2] = t[2] ?? t[1]));
      for (let e = 0; e < 3; e++) t[e] = Math.min(t[e], 2);
    }
    return { bandIndexMat3: S(t) };
  }
  _getInputBandIds(t) {
    const e = t.length;
    return this.functionArguments.bandIds
      .map((i) => (i >= e ? e - 1 : i))
      .map((i) => t[i]);
  }
};
l(
  [m({ json: { write: !0, name: "rasterFunction" } })],
  lt.prototype,
  "functionName",
  void 0
),
  l(
    [m({ type: In, json: { write: !0, name: "rasterFunctionArguments" } })],
    lt.prototype,
    "functionArguments",
    void 0
  ),
  l([m()], lt.prototype, "rasterArgumentNames", void 0),
  (lt = l([R("esri.layers.support.rasterFunctions.ExtractBandFunction")], lt));
const Fn = lt;
var Dt;
let tt = (Dt = class extends z {
  constructor() {
    super(...arguments), (this.rasters = []), (this.processAsMultiband = !0);
  }
  writeRasters(t, e) {
    e.rasters = t.map((i) =>
      typeof i == "number" || typeof i == "string" ? i : i.toJSON()
    );
  }
  clone() {
    return new Dt({
      operation: this.operation,
      processAsMultiband: this.processAsMultiband,
      rasters: W(this.rasters),
    });
  }
});
l([m({ json: { write: !0 } })], tt.prototype, "operation", void 0),
  l([m({ json: { write: !0 } })], tt.prototype, "rasters", void 0),
  l([ft("rasters")], tt.prototype, "writeRasters", null),
  l([m({ json: { write: !0 } })], tt.prototype, "processAsMultiband", void 0),
  (tt = Dt =
    l([R("esri.layers.support.rasterFunctions.LocalFunctionArguments")], tt));
const Pn = tt,
  j = new Map();
j.set(U.acos, [0, Math.PI]),
  j.set(U.asin, [-Math.PI / 2, Math.PI / 2]),
  j.set(U.atan, [-Math.PI / 2, Math.PI / 2]),
  j.set(U.cos, [-1, 1]),
  j.set(U.sin, [-1, 1]),
  j.set(E.booleanAnd, [0, 1]),
  j.set(E.booleanNot, [0, 1]),
  j.set(E.booleanOr, [0, 1]),
  j.set(E.booleanXOr, [0, 1]),
  j.set(E.equalTo, [0, 1]),
  j.set(E.notEqual, [0, 1]),
  j.set(E.greaterThan, [0, 1]),
  j.set(E.greaterThanEqual, [0, 1]),
  j.set(E.lessThan, [0, 1]),
  j.set(E.lessThanEqual, [0, 1]),
  j.set(E.isNull, [0, 1]);
const ie = [
  0, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1,
  1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 999, 999, 999, 999, 999, 999, 2, 1, 2,
  999, 1, 1, 2, 1, 1, 1, 999, 999, 1, 1, 999, 1, 1, 2, 999, 999, 2, 2, 999, 999,
  999, 999, 999, 999, 999, 999, 999, 999, 3, 999, 3,
];
function Nn(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] + o[a]);
  return s;
}
function Rn(t, e, i) {
  const [n] = t,
    o = n.length,
    r = b.createEmptyBand("f32", o);
  return r.set(n), r;
}
function Tn(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] - o[a]);
  return s;
}
function Bn(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] * o[a]);
  return s;
}
function Cn(t, e, i) {
  const [n] = t,
    o = n.length,
    r = b.createEmptyBand(i, o);
  for (let s = 0; s < o; s++)
    (e && !e[s]) || (r[s] = Math.sign(n[s]) * Math.floor(Math.abs(n[s])));
  return r;
}
function Be(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] / o[a]);
  return s;
}
function kn(t, e, i) {
  return Be(t, e, "f32");
}
function Sn(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = Math.floor(n[a] / o[a]));
  return s;
}
function jn(t, e, i, n) {
  const o = t[0],
    r = o.length,
    s = b.createEmptyBand(i, r);
  if (n === U.atanh) {
    for (let u = 0; u < r; u++)
      if (e[u]) {
        const h = o[u];
        Math.abs(h) >= 1 ? (e[u] = 0) : (s[u] = Math.atanh(h));
      }
    return s;
  }
  const a = n === U.asin ? Math.asin : Math.acos;
  for (let u = 0; u < r; u++)
    if (e[u]) {
      const h = o[u];
      Math.abs(h) > 1 ? (e[u] = 0) : (s[u] = a(h));
    }
  return s;
}
function Mn(t, e, i, n) {
  const [o] = t,
    r = o.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n(o[a]));
  return s;
}
function _n(t, e, i, n) {
  const [o, r] = t,
    s = o.length,
    a = b.createEmptyBand(i, s);
  for (let u = 0; u < s; u++) (e && !e[u]) || (a[u] = n(o[u], r[u]));
  return a;
}
function Dn(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] & o[a]);
  return s;
}
function ae(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] << o[a]);
  return s;
}
function En(t, e, i) {
  const [n] = t,
    o = n.length,
    r = b.createEmptyBand(i, o);
  for (let s = 0; s < o; s++) (e && !e[s]) || (r[s] = ~n[s]);
  return r;
}
function On(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] | o[a]);
  return s;
}
function Gn(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] >> o[a]);
  return s;
}
function zn(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] ^ o[a]);
  return s;
}
function Vn(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] && o[a] ? 1 : 0);
  return s;
}
function Ln(t, e, i) {
  const [n] = t,
    o = n.length,
    r = b.createEmptyBand(i, o);
  for (let s = 0; s < o; s++) (e && !e[s]) || (r[s] = n[s] ? 0 : 1);
  return r;
}
function Un(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] || o[a] ? 1 : 0);
  return s;
}
function Wn(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++)
    (e && !e[a]) || (s[a] = (n[a] ? 1 : 0) ^ (o[a] ? 1 : 0));
  return s;
}
function qn(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] === o[a] ? 1 : 0);
  return s;
}
function $t(t, e, i, n) {
  const [o] = t,
    r = o.length,
    s = b.createEmptyBand(i, r),
    a = n === Math.E;
  for (let u = 0; u < r; u++)
    (e && !e[u]) || (s[u] = a ? Math.exp(o[u]) : n ** o[u]);
  return s;
}
function Xn(t, e, i) {
  return $t(t, e, i, 10);
}
function Hn(t, e, i) {
  return $t(t, e, i, 2);
}
function $n(t, e, i) {
  return $t(t, e, i, Math.E);
}
function Jt(t, e, i, n) {
  const [o] = t,
    r = o.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++)
    (e && !e[a]) || (o[a] <= 0 ? (e[a] = 0) : (s[a] = n(o[a])));
  return s;
}
function Jn(t, e, i) {
  return Jt(t, e, i, Math.log10);
}
function Yn(t, e, i) {
  return Jt(t, e, i, Math.log2);
}
function Kn(t, e, i) {
  return Jt(t, e, i, Math.log);
}
function Zn(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] > o[a] ? 1 : 0);
  return s;
}
function Qn(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] >= o[a] ? 1 : 0);
  return s;
}
function ts(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] < o[a] ? 1 : 0);
  return s;
}
function es(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] <= o[a] ? 1 : 0);
  return s;
}
function ns(t, e, i) {
  const [n] = t,
    o = n.length,
    r = b.createEmptyBand(i, o);
  if (!e) return r;
  for (let s = 0; s < o; s++) r[s] = e[s] ? 0 : 1;
  return r;
}
function ss(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] % o[a]);
  return s;
}
function rs(t, e, i) {
  const [n] = t,
    o = n.length,
    r = b.createEmptyBand(i, o);
  for (let s = 0; s < o; s++) (e && !e[s]) || (r[s] = -n[s]);
  return r;
}
function os(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++) (e && !e[a]) || (s[a] = n[a] === o[a] ? 0 : 1);
  return s;
}
function is(t, e, i) {
  const [n, o] = t,
    r = n.length,
    s = b.createEmptyBand(i, r),
    a = new Uint8Array(r);
  for (let u = 0; u < r; u++)
    (e != null && !e[u]) || n[u] !== 0 || ((s[u] = o[u]), (a[u] = 255));
  return { band: s, mask: a };
}
function ue(t, e, i) {
  const [n, o, r] = t,
    s = n.length,
    a = b.createEmptyBand(i, s);
  for (let u = 0; u < s; u++) (e && !e[u]) || (a[u] = n[u] ? o[u] : r[u]);
  return a;
}
function le(t, e, i) {
  const n = t.length;
  if (n < 2) return t[0];
  const [o] = t,
    r = o.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++)
    if (!e || e[a]) {
      let u = o[a];
      for (let h = 1; h < n; h++) {
        const c = t[h][a];
        u < c && (u = c);
      }
      s[a] = u;
    }
  return s;
}
function ce(t, e, i) {
  const n = t.length;
  if (n < 2) return t[0];
  const [o] = t,
    r = o.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++)
    if (!e || e[a]) {
      let u = o[a];
      for (let h = 1; h < n; h++) {
        const c = t[h][a];
        u > c && (u = c);
      }
      s[a] = u;
    }
  return s;
}
function pe(t, e, i) {
  const n = t.length;
  if (n < 2) return t[0];
  const [o] = t,
    r = o.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++)
    if (!e || e[a]) {
      let u = o[a],
        h = u;
      for (let c = 1; c < n; c++) {
        const p = t[c][a];
        h < p ? (h = p) : u > p && (u = p);
      }
      s[a] = h - u;
    }
  return s;
}
function he(t, e, i) {
  const n = t.length;
  if (n < 2) return t[0];
  const [o] = t,
    r = o.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++)
    if (!e || e[a]) {
      let u = 0;
      for (let h = 0; h < n; h++) u += t[h][a];
      s[a] = u / n;
    }
  return s;
}
function me(t, e, i) {
  const n = t.length;
  if (n < 2) return t[0];
  const [o] = t,
    r = o.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++)
    if (!e || e[a])
      for (let u = 0; u < n; u++) {
        const h = t[u];
        s[a] += h[a];
      }
  return s;
}
function fe(t, e, i) {
  const n = t.length;
  if (n < 2) return t[0];
  const [o] = t,
    r = o.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++)
    if (!e || e[a]) {
      const u = new Float32Array(n);
      let h = 0;
      for (let p = 0; p < n; p++) {
        const f = t[p];
        (h += f[a]), (u[p] = f[a]);
      }
      h /= n;
      let c = 0;
      for (let p = 0; p < n; p++) c += (u[p] - h) ** 2;
      s[a] = Math.sqrt(c / n);
    }
  return s;
}
function de(t, e, i) {
  const n = t.length;
  if (n < 2) return t[0];
  const o = Math.floor(n / 2),
    [r] = t,
    s = r.length,
    a = b.createEmptyBand(i, s),
    u = new Float32Array(n),
    h = n % 2 == 1;
  for (let c = 0; c < s; c++)
    if (!e || e[c]) {
      for (let p = 0; p < n; p++) u[p] = t[p][c];
      u.sort(), (a[c] = h ? u[o] : (u[o] + u[o - 1]) / 2);
    }
  return a;
}
function Ce(t, e, i) {
  const [n, o] = t;
  if (o == null) return n;
  const r = n.length,
    s = b.createEmptyBand(i, r);
  for (let a = 0; a < r; a++)
    e[a] && (n[a] === o[a] ? (s[a] = n[a]) : (e[a] = 0));
  return s;
}
function ge(t, e, i) {
  const n = t.length;
  if (n <= 2) return Ce(t, e, i);
  const o = t[0].length,
    r = b.createEmptyBand(i, o),
    s = new Map();
  for (let a = 0; a < o; a++)
    if (!e || e[a]) {
      let u;
      s.clear();
      for (let p = 0; p < n; p++)
        (u = t[p][a]), s.set(u, s.has(u) ? s.get(u) + 1 : 1);
      let h = 0,
        c = 0;
      for (const p of s.keys()) (h = s.get(p)), h > c && ((c = h), (u = p));
      r[a] = u;
    }
  return r;
}
function ye(t, e, i) {
  const n = t.length;
  if (n <= 2) return Ce(t, e, i);
  const o = t[0].length,
    r = b.createEmptyBand(i, o),
    s = new Map();
  for (let a = 0; a < o; a++)
    if (!e || e[a]) {
      let u;
      s.clear();
      for (let p = 0; p < n; p++)
        (u = t[p][a]), s.set(u, s.has(u) ? s.get(u) + 1 : 1);
      let h = 0,
        c = t.length;
      for (const p of s.keys()) (h = s.get(p)), h < c && ((c = h), (u = p));
      r[a] = u;
    }
  return r;
}
function xe(t, e, i) {
  const n = t.length;
  if (n < 2) return t[0];
  const [o] = t,
    r = o.length,
    s = b.createEmptyBand(i, r),
    a = new Set();
  for (let u = 0; u < r; u++)
    if (!e || e[u]) {
      let h;
      a.clear();
      for (let c = 0; c < n; c++) (h = t[c][u]), a.add(h);
      s[u] = a.size;
    }
  return s;
}
const k = new Map(),
  Pt = new Map(),
  F = new Map(),
  B = new Map();
function as() {
  k.size ||
    (k.set(4, Math.sqrt),
    k.set(6, Math.acos),
    k.set(7, Math.asin),
    k.set(8, Math.atan),
    k.set(9, Math.atanh),
    k.set(10, Math.abs),
    k.set(21, Math.cos),
    k.set(22, Math.cosh),
    k.set(48, Math.floor),
    k.set(49, Math.ceil),
    k.set(51, Math.sin),
    k.set(52, Math.sinh),
    k.set(56, Math.tan),
    k.set(57, Math.tanh),
    k.set(59, Math.acosh),
    k.set(60, Math.asinh),
    k.set(65, Math.floor),
    Pt.set(5, Math.pow),
    Pt.set(61, Math.atan2),
    F.set(1, Nn),
    F.set(2, Tn),
    F.set(3, Bn),
    F.set(11, Dn),
    F.set(12, ae),
    F.set(12, ae),
    F.set(13, En),
    F.set(14, On),
    F.set(15, Gn),
    F.set(16, zn),
    F.set(17, Vn),
    F.set(18, Ln),
    F.set(19, Un),
    F.set(20, Wn),
    F.set(23, Be),
    F.set(24, qn),
    F.set(25, $n),
    F.set(26, Xn),
    F.set(27, Hn),
    F.set(28, Zn),
    F.set(29, Qn),
    F.set(30, Cn),
    F.set(31, ns),
    F.set(32, Rn),
    F.set(33, ts),
    F.set(34, es),
    F.set(35, Kn),
    F.set(36, Jn),
    F.set(37, Yn),
    F.set(44, ss),
    F.set(45, rs),
    F.set(46, os),
    F.set(64, kn),
    F.set(65, Sn),
    F.set(76, ue),
    F.set(78, ue),
    B.set(38, ge),
    B.set(39, le),
    B.set(40, he),
    B.set(41, de),
    B.set(42, ce),
    B.set(43, ye),
    B.set(47, pe),
    B.set(54, fe),
    B.set(55, me),
    B.set(58, xe),
    B.set(66, ge),
    B.set(67, le),
    B.set(68, he),
    B.set(69, de),
    B.set(70, ce),
    B.set(71, ye),
    B.set(72, pe),
    B.set(73, fe),
    B.set(74, me),
    B.set(75, xe));
}
function us(t, e, i, n) {
  let [o, r] = Nt(i);
  const s = i.startsWith("u") || i.startsWith("s");
  s && ((o -= 1e-5), (r += 1e-5));
  for (let a = 0; a < e.length; a++)
    if (e[a]) {
      const u = t[a];
      isNaN(u) || u < o || u > r ? (e[a] = 0) : (n[a] = s ? Math.round(u) : u);
    }
}
function ls(t, e, i = {}) {
  as();
  let n = (function (h, c = !1) {
    const p = h.map((x) => x.mask),
      f = p.filter((x) => G(x)),
      y = h[0].pixels[0].length;
    if (f.length === 0) return new Uint8Array(y).fill(255);
    const w = f[0],
      d = new Uint8Array(w);
    if (f.length === 1) return d;
    if (!c) {
      for (let x = 1; x < f.length; x++) {
        const g = f[x];
        for (let v = 0; v < d.length; v++) d[v] && (d[v] = g[v] ? 255 : 0);
      }
      return d;
    }
    if (f.length !== p.length) return new Uint8Array(y).fill(255);
    for (let x = 1; x < f.length; x++) {
      const g = f[x];
      for (let v = 0; v < d.length; v++) d[v] === 0 && (d[v] = g[v] ? 255 : 0);
    }
    return d;
  })(t, e >= 66 && e <= 75);
  const { outputPixelType: o = "f32" } = i,
    r = !B.has(e) || i.processAsMultiband,
    s = r ? t[0].pixels.length : 1,
    a = [];
  for (let h = 0; h < s; h++) {
    const c =
      B.has(e) && !r ? t.flatMap((y) => y.pixels) : t.map((y) => y.pixels[h]);
    let p,
      f = !0;
    if (e === Te.setNull) {
      const y = is(c, n, o);
      (p = y.band), (n = y.mask), (f = !1);
    } else
      F.has(e)
        ? (p = F.get(e)(c, n, "f64"))
        : k.has(e)
        ? (p =
            e === U.asin || e === U.acos || e === U.atanh
              ? jn(c, n, "f64", e)
              : Mn(c, n, "f64", k.get(e)))
        : Pt.has(e)
        ? (p = _n(c, n, "f64", Pt.get(e)))
        : B.has(e)
        ? (p = B.get(e)(c, n, "f64"))
        : ((p = c[0]), (f = !1));
    if (f && e !== E.isNull && !j.has(e)) {
      const y = b.createEmptyBand(o, p.length);
      n || (n = new Uint8Array(p.length).fill(255)), us(p, n, o, y), (p = y);
    }
    a.push(p);
  }
  const u = t[0];
  return new b({
    width: u.width,
    height: u.height,
    pixelType: o,
    mask: e === E.isNull ? null : n,
    pixels: a,
  });
}
let ct = class extends V {
  constructor() {
    super(...arguments),
      (this.functionName = "Local"),
      (this.functionArguments = null),
      (this.rasterArgumentNames = ["rasters"]);
  }
  _bindSourceRasters() {
    const { sourceRasterInfos: t } = this,
      e = t[0],
      { bandCount: i } = e,
      { processAsMultiband: n } = this.functionArguments;
    if (t.some((h) => h.bandCount !== i))
      return {
        success: !1,
        supportsGPU: !1,
        error: "local-function: input rasters do not have same band count",
      };
    const { operation: o, rasters: r } = this.functionArguments,
      s = ie[o];
    if (!(s === 999 || r.length === s || (r.length <= 1 && s === 1)))
      return {
        success: !1,
        supportsGPU: !1,
        error: `local-function: the length of functionArguments.rasters does not match operation's requirement: ${s}`,
      };
    this.outputPixelType = this._getOutputPixelType("f32");
    const a = e.clone();
    (a.pixelType = this.outputPixelType),
      (a.statistics = null),
      (a.histograms = null),
      (a.colormap = null),
      (a.attributeTable = null),
      (a.bandCount = s !== 999 || n ? i : 1);
    const u = (function (h) {
      return j.get(h);
    })(o);
    if (u) {
      a.statistics = [];
      for (let h = 0; h < a.bandCount; h++)
        a.statistics[h] = {
          min: u[0],
          max: u[1],
          avg: (u[0] + u[1]) / 2,
          stddev: (u[0] + u[1]) / 10,
        };
    }
    return (
      (this.rasterInfo = a),
      {
        success: !0,
        supportsGPU: a.bandCount === 1 && s <= 3 && (o < 11 || o > 16),
      }
    );
  }
  _processPixels(t) {
    const { pixelBlocks: e } = t;
    return D(e) || e.some((i) => D(i))
      ? null
      : ls(e, this.functionArguments.operation, {
          processAsMultiband: this.functionArguments.processAsMultiband,
          outputPixelType: this.outputPixelType ?? void 0,
        });
  }
  _getWebGLParameters() {
    var a;
    const { operation: t } = this.functionArguments,
      e = ie[t],
      i =
        ((a = Object.keys(se).find((u) => se[u] === t)) == null
          ? void 0
          : a.toLowerCase()) ?? "undefined",
      n = this.outputPixelType ?? "f32";
    let [o, r] = Nt(n);
    const s = n.startsWith("u") || n.startsWith("s");
    return (
      s && ((o -= 1e-4), (r += 1e-4)),
      {
        imageCount: e,
        operationName: i,
        domainRange: [o, r],
        isOutputRounded: s,
      }
    );
  }
};
l(
  [m({ json: { write: !0, name: "rasterFunction" } })],
  ct.prototype,
  "functionName",
  void 0
),
  l(
    [m({ type: Pn, json: { write: !0, name: "rasterFunctionArguments" } })],
    ct.prototype,
    "functionArguments",
    void 0
  ),
  l([m()], ct.prototype, "rasterArgumentNames", void 0),
  (ct = l([R("esri.layers.support.rasterFunctions.LocalFunction")], ct));
const cs = ct;
var Et;
let et = (Et = class extends z {
  constructor() {
    super(...arguments),
      (this.includedRanges = null),
      (this.noDataValues = null),
      (this.noDataInterpretation = Pe.matchAny);
  }
  get normalizedNoDataValues() {
    const { noDataValues: t } = this;
    if (!(t != null && t.length)) return null;
    let e = !1;
    const i = t.map((n) => {
      if (typeof n == "number") return (e = !0), [n];
      if (typeof n == "string") {
        const o = n
          .trim()
          .split(" ")
          .filter((r) => r.trim() !== "")
          .map((r) => Number(r));
        return (e = e || o.length > 0), o.length === 0 ? null : o;
      }
      return null;
    });
    return e ? i : null;
  }
  clone() {
    var t, e;
    return new Et({
      includedRanges:
        ((t = this.includedRanges) == null ? void 0 : t.slice()) ?? [],
      noDataValues:
        ((e = this.noDataValues) == null ? void 0 : e.slice()) ?? [],
      noDataInterpretation: this.noDataInterpretation,
    });
  }
});
l([m({ json: { write: !0 } })], et.prototype, "includedRanges", void 0),
  l([m({ json: { write: !0 } })], et.prototype, "noDataValues", void 0),
  l([m()], et.prototype, "normalizedNoDataValues", null),
  l([m({ json: { write: !0 } })], et.prototype, "noDataInterpretation", void 0),
  (et = Et =
    l([R("esri.layers.support.rasterFunctions.MaskFunctionArguments")], et));
const ps = et;
let nt = class extends V {
  constructor() {
    super(...arguments),
      (this.functionName = "Mask"),
      (this.functionArguments = null),
      (this.rasterArgumentNames = ["raster"]);
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0].clone(),
      { pixelType: e } = t;
    (this.outputPixelType = this._getOutputPixelType(e)),
      (t.pixelType = this.outputPixelType),
      (this.rasterInfo = t);
    const { includedRanges: i, normalizedNoDataValues: n } =
      this.functionArguments;
    if (!(i != null && i.length) && !(n != null && n.length))
      return {
        success: !1,
        supportsGPU: !1,
        error: "missing includedRanges or noDataValues argument",
      };
    let o = [];
    for (let s = 0; s < t.bandCount; s++) {
      const a = ze(
        e,
        i == null ? void 0 : i.slice(2 * s, 2 * s + 2),
        n == null ? void 0 : n[s]
      );
      if (a == null) {
        o = null;
        break;
      }
      o.push(a);
    }
    this.lookups = o;
    const r =
      n != null &&
      n.every((s) => {
        var a;
        return (
          (s == null ? void 0 : s.length) ===
          ((a = n[0]) == null ? void 0 : a.length)
        );
      });
    return {
      success: !0,
      supportsGPU: (!i || i.length <= 2 * K) && (!n || (r && n[0].length <= K)),
    };
  }
  _processPixels(t) {
    var u;
    const e = (u = t.pixelBlocks) == null ? void 0 : u[0];
    if (D(e)) return null;
    const { outputPixelType: i, lookups: n } = this,
      {
        includedRanges: o,
        noDataInterpretation: r,
        normalizedNoDataValues: s,
      } = this.functionArguments,
      a = r === Pe.matchAll;
    return Ve(e, {
      includedRanges: o,
      noDataValues: s,
      outputPixelType: i,
      matchAll: a,
      lookups: n,
    });
  }
  _getWebGLParameters() {
    var o;
    const { includedRanges: t, normalizedNoDataValues: e } =
        this.functionArguments,
      i = new Float32Array(K);
    i.fill(mt),
      (o = e == null ? void 0 : e[0]) != null && o.length && i.set(e[0]);
    const n = new Float32Array(K);
    for (let r = 0; r < n.length; r += 2)
      (n[r] = (t == null ? void 0 : t[r]) ?? -mt),
        (n[r + 1] = (t == null ? void 0 : t[r + 1]) ?? mt);
    return (
      t && t.length && n.set(t),
      {
        bandCount: this.sourceRasterInfos[0].bandCount,
        noDataValues: i,
        includedRanges: n,
      }
    );
  }
};
l(
  [m({ json: { write: !0, name: "rasterFunction" } })],
  nt.prototype,
  "functionName",
  void 0
),
  l(
    [m({ type: ps, json: { write: !0, name: "rasterFunctionArguments" } })],
    nt.prototype,
    "functionArguments",
    void 0
  ),
  l([m()], nt.prototype, "rasterArgumentNames", void 0),
  l([m({ json: { write: !0 } })], nt.prototype, "lookups", void 0),
  (nt = l([R("esri.layers.support.rasterFunctions.MaskFunction")], nt));
const hs = nt;
var Ot;
let pt = (Ot = class extends z {
  constructor() {
    super(...arguments),
      (this.visibleBandID = 0),
      (this.infraredBandID = 1),
      (this.scientificOutput = !1);
  }
  clone() {
    const { visibleBandID: t, infraredBandID: e, scientificOutput: i } = this;
    return new Ot({ visibleBandID: t, infraredBandID: e, scientificOutput: i });
  }
});
l([m({ json: { write: !0 } })], pt.prototype, "visibleBandID", void 0),
  l([m({ json: { write: !0 } })], pt.prototype, "infraredBandID", void 0),
  l([m({ json: { write: !0 } })], pt.prototype, "scientificOutput", void 0),
  (pt = Ot =
    l([R("esri.layers.support.rasterFunctions.NDVIFunctionArguments")], pt));
const ms = pt;
let ht = class extends V {
  constructor() {
    super(...arguments),
      (this.functionName = "NDVI"),
      (this.functionArguments = null),
      (this.rasterArgumentNames = ["raster"]);
  }
  _bindSourceRasters() {
    const { scientificOutput: t } = this.functionArguments;
    this.outputPixelType = this._getOutputPixelType(t ? "f32" : "u8");
    const e = this.sourceRasterInfos[0].clone();
    (e.pixelType = this.outputPixelType),
      (e.colormap = null),
      (e.histograms = null),
      (e.bandCount = 1);
    const [i, n, o, r] = t ? [-1, 1, 0, 0.1] : [0, 200, 100, 10];
    return (
      (e.statistics = [{ min: i, max: n, avg: o, stddev: r }]),
      (this.rasterInfo = e),
      { success: !0, supportsGPU: !0 }
    );
  }
  _processPixels(t) {
    var r;
    const e = (r = t.pixelBlocks) == null ? void 0 : r[0];
    if (D(e)) return null;
    const {
      visibleBandID: i,
      infraredBandID: n,
      scientificOutput: o,
    } = this.functionArguments;
    return (function (s, a, u, h) {
      const { mask: c, pixels: p, width: f, height: y } = s,
        w = p[u],
        d = p[a],
        x = d.length,
        g = h ? new Uint8Array(x) : new Float32Array(x),
        v = h ? 100 : 1,
        I = h ? 100.5 : 0;
      for (let P = 0; P < x; P++)
        if (c == null || c[P]) {
          const O = w[P],
            Kt = d[P],
            Zt = O + Kt;
          Zt && (g[P] = ((O - Kt) / Zt) * v + I);
        }
      const A = new b({
        width: f,
        height: y,
        mask: c,
        pixelType: h ? "u8" : "f32",
        pixels: [g],
      });
      return A.updateStatistics(), A;
    })(e, i, n, !o);
  }
  _getWebGLParameters() {
    const {
      visibleBandID: t,
      infraredBandID: e,
      scientificOutput: i,
    } = this.functionArguments;
    return {
      bandIndexMat3: S(this.isInputBandIdsSwizzled ? [0, 1, 2] : [e, t, 0]),
      scaled: !i,
    };
  }
  _getInputBandIds(t) {
    const { visibleBandID: e, infraredBandID: i } = this.functionArguments;
    return [i, e, 0].map((n) => t[n]);
  }
};
l(
  [m({ json: { write: !0, name: "rasterFunction" } })],
  ht.prototype,
  "functionName",
  void 0
),
  l(
    [m({ type: ms, json: { write: !0, name: "rasterFunctionArguments" } })],
    ht.prototype,
    "functionArguments",
    void 0
  ),
  l([m()], ht.prototype, "rasterArgumentNames", void 0),
  (ht = l([R("esri.layers.support.rasterFunctions.NDVIFunction")], ht));
const fs = ht;
var Gt;
let H = (Gt = class extends z {
  constructor() {
    super(...arguments),
      (this.inputRanges = null),
      (this.outputValues = null),
      (this.noDataRanges = null),
      (this.allowUnmatched = !1),
      (this.isLastInputRangeInclusive = !1);
  }
  clone() {
    return new Gt({
      inputRanges: [...this.inputRanges],
      outputValues: [...this.outputValues],
      noDataRanges: [...this.noDataRanges],
      allowUnmatched: this.allowUnmatched,
      isLastInputRangeInclusive: this.isLastInputRangeInclusive,
    });
  }
});
l([m({ json: { write: !0 } })], H.prototype, "inputRanges", void 0),
  l([m({ json: { write: !0 } })], H.prototype, "outputValues", void 0),
  l([m({ json: { write: !0 } })], H.prototype, "noDataRanges", void 0),
  l([m({ json: { write: !0 } })], H.prototype, "allowUnmatched", void 0),
  l(
    [m({ json: { write: !0 } })],
    H.prototype,
    "isLastInputRangeInclusive",
    void 0
  ),
  (H = Gt =
    l([R("esri.layers.support.rasterFunctions.RemapFunctionArguments")], H));
const ds = H;
let st = class extends V {
  constructor() {
    super(...arguments),
      (this.functionName = "Remap"),
      (this.functionArguments = null),
      (this.rasterArgumentNames = ["raster"]),
      (this.lookup = null);
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0].clone(),
      { pixelType: e } = t;
    (this.outputPixelType = this._getOutputPixelType(e)),
      (t.pixelType = this.outputPixelType),
      (t.colormap = null),
      (t.histograms = null),
      (t.bandCount = 1),
      (t.attributeTable = null);
    const { statistics: i } = t,
      {
        allowUnmatched: n,
        outputValues: o,
        inputRanges: r,
        noDataRanges: s,
        isLastInputRangeInclusive: a,
      } = this.functionArguments;
    if (G(i) && i.length && o != null && o.length)
      if (n) {
        const u = Math.min.apply(null, [...o, i[0].min]),
          h = Math.max.apply(null, [...o, i[0].max]);
        t.statistics = [{ ...i[0], min: u, max: h }];
      } else {
        let u = o[0],
          h = u;
        for (let c = 0; c < o.length; c++)
          (u = u > o[c] ? o[c] : u), (h = h > o[c] ? h : o[c]);
        t.statistics = [{ ...i[0], min: u, max: h }];
      }
    return (
      (this.rasterInfo = t),
      (this.lookup = n
        ? null
        : Le({
            srcPixelType: e,
            inputRanges: r,
            outputValues: o,
            noDataRanges: s,
            allowUnmatched: n,
            isLastInputRangeInclusive: a,
            outputPixelType: this.outputPixelType,
          })),
      {
        success: !0,
        supportsGPU: (!o || o.length <= K) && (!s || s.length <= K),
      }
    );
  }
  _processPixels(t) {
    var h;
    const e = (h = t.pixelBlocks) == null ? void 0 : h[0];
    if (D(e)) return null;
    const { lookup: i, outputPixelType: n } = this;
    if (i) {
      const c = Ne(e, { lut: [i.lut], offset: i.offset, outputPixelType: n });
      return (
        G(c) &&
          i.mask &&
          (c.mask = Ue(e.pixels[0], e.mask, i.mask, i.offset, "u8")),
        c
      );
    }
    const {
      inputRanges: o,
      outputValues: r,
      noDataRanges: s,
      allowUnmatched: a,
      isLastInputRangeInclusive: u,
    } = this.functionArguments;
    return We(e, {
      inputRanges: o,
      outputValues: r,
      noDataRanges: s,
      outputPixelType: n,
      allowUnmatched: a,
      isLastInputRangeInclusive: u,
    });
  }
  _getWebGLParameters() {
    const {
        allowUnmatched: t,
        inputRanges: e,
        outputValues: i,
        noDataRanges: n,
        isLastInputRangeInclusive: o,
      } = this.functionArguments,
      r = new Float32Array(3 * K),
      s = 1e-5,
      a = i.length;
    if (e != null && e.length) {
      let h = 0,
        c = 0;
      for (let p = 0; p < r.length; p += 3)
        (r[p] = e[h++] ?? mt - 1),
          (r[p + 1] = e[h++] ?? mt),
          (r[p + 2] = i[c++] ?? 0),
          c <= a && (p > 0 && (r[p] -= s), (c < a || !o) && (r[p + 1] -= s));
    }
    const u = new Float32Array(2 * K);
    return (
      u.fill(mt),
      n != null && n.length && u.set(n),
      {
        allowUnmatched: t,
        rangeMaps: r,
        noDataRanges: u,
        clampRange: Nt(this.outputPixelType),
      }
    );
  }
};
l(
  [m({ json: { write: !0, name: "rasterFunction" } })],
  st.prototype,
  "functionName",
  void 0
),
  l(
    [m({ type: ds, json: { write: !0, name: "rasterFunctionArguments" } })],
    st.prototype,
    "functionArguments",
    void 0
  ),
  l([m()], st.prototype, "rasterArgumentNames", void 0),
  l([m({ json: { write: !0 } })], st.prototype, "lookup", void 0),
  (st = l([R("esri.layers.support.rasterFunctions.RemapFunction")], st));
const gs = st;
var zt;
const ys = new Ht(
  { 1: "degree", 2: "percent-rise", 3: "adjusted" },
  { useNumericKeys: !0 }
);
let $ = (zt = class extends z {
  constructor() {
    super(...arguments),
      (this.slopeType = "degree"),
      (this.zFactor = 1),
      (this.pixelSizePower = 0.664),
      (this.pixelSizeFactor = 0.024),
      (this.removeEdgeEffect = !1);
  }
  clone() {
    return new zt({
      slopeType: this.slopeType,
      zFactor: this.zFactor,
      pixelSizePower: this.pixelSizePower,
      pixelSizeFactor: this.pixelSizeFactor,
      removeEdgeEffect: this.removeEdgeEffect,
      raster: this.raster,
    });
  }
});
l([dt(ys)], $.prototype, "slopeType", void 0),
  l([m({ type: Number, json: { write: !0 } })], $.prototype, "zFactor", void 0),
  l(
    [m({ type: Number, json: { name: "psPower", write: !0 } })],
    $.prototype,
    "pixelSizePower",
    void 0
  ),
  l(
    [m({ type: Number, json: { name: "psZFactor", write: !0 } })],
    $.prototype,
    "pixelSizeFactor",
    void 0
  ),
  l(
    [m({ type: Boolean, json: { write: !0 } })],
    $.prototype,
    "removeEdgeEffect",
    void 0
  ),
  ($ = zt =
    l([R("esri.layers.support.rasterFunctions.SlopeFunctionArguments")], $));
const xs = $;
let rt = class extends V {
  constructor() {
    super(...arguments),
      (this.functionName = "Slope"),
      (this.functionArguments = null),
      (this.rasterArgumentNames = ["raster"]),
      (this.isGCS = !1);
  }
  _bindSourceRasters() {
    var e;
    this.outputPixelType = this._getOutputPixelType("f32");
    const t = this.sourceRasterInfos[0].clone();
    return (
      (t.pixelType = this.outputPixelType),
      (t.statistics =
        this.functionArguments.slopeType !== "percent-rise"
          ? [{ min: 0, max: 90, avg: 1, stddev: 1 }]
          : null),
      (t.histograms = null),
      (t.colormap = null),
      (t.attributeTable = null),
      (t.bandCount = 1),
      (this.rasterInfo = t),
      (this.isGCS =
        ((e = t.spatialReference) == null ? void 0 : e.isGeographic) ?? !1),
      { success: !0, supportsGPU: !0 }
    );
  }
  _processPixels(t) {
    var h;
    const e = (h = t.pixelBlocks) == null ? void 0 : h[0];
    if (D(e)) return null;
    const {
        zFactor: i,
        slopeType: n,
        pixelSizePower: o,
        pixelSizeFactor: r,
      } = this.functionArguments,
      { isGCS: s } = this,
      { extent: a } = t,
      u = a ? { x: a.width / e.width, y: a.height / e.height } : { x: 1, y: 1 };
    return Je(e, {
      zFactor: i,
      slopeType: n,
      pixelSizePower: o,
      pixelSizeFactor: r,
      isGCS: s,
      resolution: u,
    });
  }
  _getWebGLParameters() {
    const {
      zFactor: t,
      slopeType: e,
      pixelSizeFactor: i,
      pixelSizePower: n,
    } = this.functionArguments;
    return {
      zFactor: this.isGCS && t >= 1 ? 900900900900901e-20 * t : t,
      slopeType: e,
      pixelSizeFactor: i ?? 0,
      pixelSizePower: n ?? 0,
    };
  }
};
l(
  [m({ json: { write: !0, name: "rasterFunction" } })],
  rt.prototype,
  "functionName",
  void 0
),
  l(
    [m({ type: xs, json: { write: !0, name: "rasterFunctionArguments" } })],
    rt.prototype,
    "functionArguments",
    void 0
  ),
  l([m()], rt.prototype, "rasterArgumentNames", void 0),
  l([m({ json: { write: !0 } })], rt.prototype, "isGCS", void 0),
  (rt = l([R("esri.layers.support.rasterFunctions.SlopeFunction")], rt));
const ws = rt;
var Vt;
let ot = (Vt = class extends z {
  constructor() {
    super(...arguments), (this.statistics = null), (this.histograms = null);
  }
  readStatistics(t, e) {
    if (!(t != null && t.length)) return null;
    const i = [];
    return (
      t.forEach((n) => {
        const o = {
          min: n.min,
          max: n.max,
          avg: n.avg ?? n.mean,
          stddev: n.stddev ?? n.standardDeviation,
        };
        i.push(o);
      }),
      i
    );
  }
  writeStatistics(t, e, i) {
    if (!(t != null && t.length)) return;
    const n = [];
    t.forEach((o) => {
      const r = { ...o, mean: o.avg, standardDeviation: o.stddev };
      delete r.avg, delete r.stddev, n.push(r);
    }),
      (e[i] = n);
  }
  clone() {
    return new Vt({
      statistics: W(this.statistics),
      histograms: W(this.histograms),
    });
  }
});
l([m({ json: { write: !0 } })], ot.prototype, "statistics", void 0),
  l([At("statistics")], ot.prototype, "readStatistics", null),
  l([ft("statistics")], ot.prototype, "writeStatistics", null),
  l([m({ json: { write: !0 } })], ot.prototype, "histograms", void 0),
  (ot = Vt =
    l(
      [
        R(
          "esri.layers.support.rasterFunctions.StatisticsHistogramFunctionArguments"
        ),
      ],
      ot
    ));
const vs = ot;
let J = class extends V {
  constructor() {
    super(...arguments),
      (this.functionName = "StatisticsHistogram"),
      (this.functionArguments = null),
      (this.rasterArgumentNames = ["raster"]),
      (this.isNoopProcess = !0);
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType("u8");
    const e = t.clone(),
      { statistics: i, histograms: n } = this.functionArguments;
    return (
      n && (e.histograms = n),
      i && (e.statistics = i),
      (this.rasterInfo = e),
      { success: !0, supportsGPU: !0 }
    );
  }
  _processPixels(t) {
    var e;
    return (e = t.pixelBlocks) == null ? void 0 : e[0];
  }
};
l(
  [m({ json: { write: !0, name: "rasterFunction" } })],
  J.prototype,
  "functionName",
  void 0
),
  l(
    [m({ type: vs, json: { write: !0, name: "rasterFunctionArguments" } })],
    J.prototype,
    "functionArguments",
    void 0
  ),
  l([m()], J.prototype, "rasterArgumentNames", void 0),
  l([m({ json: { write: !0 } })], J.prototype, "indexedColormap", void 0),
  l([m()], J.prototype, "isNoopProcess", void 0),
  (J = l(
    [R("esri.layers.support.rasterFunctions.StatisticsHistogramFunction")],
    J
  ));
const bs = J;
var Lt;
const As = new Ht(
  {
    0: "none",
    3: "standard-deviation",
    4: "histogram-equalization",
    5: "min-max",
    6: "percent-clip",
    9: "sigmoid",
  },
  { useNumericKeys: !0 }
);
let M = (Lt = class extends z {
  constructor() {
    super(...arguments),
      (this.computeGamma = !1),
      (this.dynamicRangeAdjustment = !1),
      (this.gamma = []),
      (this.histograms = null),
      (this.statistics = null),
      (this.stretchType = "none"),
      (this.useGamma = !1);
  }
  writeStatistics(t, e, i) {
    t != null &&
      t.length &&
      (Array.isArray(t[0]) ||
        (t = t.map((n) => [n.min, n.max, n.avg, n.stddev])),
      (e[i] = t));
  }
  clone() {
    return new Lt({
      stretchType: this.stretchType,
      outputMin: this.outputMin,
      outputMax: this.outputMax,
      useGamma: this.useGamma,
      computeGamma: this.computeGamma,
      statistics: W(this.statistics),
      gamma: W(this.gamma),
      sigmoidStrengthLevel: this.sigmoidStrengthLevel,
      numberOfStandardDeviations: this.numberOfStandardDeviations,
      minPercent: this.minPercent,
      maxPercent: this.maxPercent,
      histograms: W(this.histograms),
      dynamicRangeAdjustment: this.dynamicRangeAdjustment,
      raster: this.raster,
    });
  }
});
l(
  [m({ type: Boolean, json: { write: !0 } })],
  M.prototype,
  "computeGamma",
  void 0
),
  l(
    [m({ type: Boolean, json: { name: "dra", write: !0 } })],
    M.prototype,
    "dynamicRangeAdjustment",
    void 0
  ),
  l([m({ type: [Number], json: { write: !0 } })], M.prototype, "gamma", void 0),
  l([m()], M.prototype, "histograms", void 0),
  l(
    [m({ type: Number, json: { write: !0 } })],
    M.prototype,
    "maxPercent",
    void 0
  ),
  l(
    [m({ type: Number, json: { write: !0 } })],
    M.prototype,
    "minPercent",
    void 0
  ),
  l(
    [m({ type: Number, json: { write: !0 } })],
    M.prototype,
    "numberOfStandardDeviations",
    void 0
  ),
  l(
    [m({ type: Number, json: { name: "max", write: !0 } })],
    M.prototype,
    "outputMax",
    void 0
  ),
  l(
    [m({ type: Number, json: { name: "min", write: !0 } })],
    M.prototype,
    "outputMin",
    void 0
  ),
  l(
    [m({ type: Number, json: { write: !0 } })],
    M.prototype,
    "sigmoidStrengthLevel",
    void 0
  ),
  l(
    [m({ json: { type: [[Number]], write: !0 } })],
    M.prototype,
    "statistics",
    void 0
  ),
  l([ft("statistics")], M.prototype, "writeStatistics", null),
  l([dt(As)], M.prototype, "stretchType", void 0),
  l(
    [m({ type: Boolean, json: { write: !0 } })],
    M.prototype,
    "useGamma",
    void 0
  ),
  (M = Lt =
    l([R("esri.layers.support.rasterFunctions.StretchFunctionArguments")], M));
const Is = M;
let Y = class extends V {
  constructor() {
    super(...arguments),
      (this.functionName = "Stretch"),
      (this.functionArguments = null),
      (this.rasterArgumentNames = ["raster"]),
      (this.lookup = null),
      (this.cutOffs = null);
  }
  _bindSourceRasters() {
    (this.lookup = null), (this.cutOffs = null);
    const t = this.sourceRasterInfos[0],
      { pixelType: e } = t,
      { functionArguments: i } = this,
      { dynamicRangeAdjustment: n, gamma: o, useGamma: r } = i;
    if (!n && ["u8", "u16", "s8", "s16"].includes(e)) {
      const a = Rt(i.toJSON(), { rasterInfo: t }),
        u = this._isOutputRoundingNeeded() ? "round" : "float";
      (this.lookup = Ye({
        pixelType: e,
        ...a,
        gamma: r ? o : null,
        rounding: u,
      })),
        (this.cutOffs = a);
    } else n || (this.cutOffs = Rt(i.toJSON(), { rasterInfo: t }));
    this.outputPixelType = this._getOutputPixelType(e);
    const s = t.clone();
    return (
      (s.pixelType = this.outputPixelType),
      (s.statistics = null),
      (s.histograms = null),
      (s.colormap = null),
      (s.attributeTable = null),
      this.outputPixelType === "u8" && (s.keyProperties.DataType = "processed"),
      (this.rasterInfo = s),
      { success: !0, supportsGPU: !n }
    );
  }
  _processPixels(t) {
    var s;
    const e = (s = t.pixelBlocks) == null ? void 0 : s[0];
    if (D(e)) return e;
    const { lookup: i } = this;
    if (i) return Ne(e, { ...i, outputPixelType: this.rasterInfo.pixelType });
    const { functionArguments: n } = this,
      o =
        this.cutOffs ||
        Rt(n.toJSON(), {
          rasterInfo: this.sourceRasterInfos[0],
          pixelBlock: e,
        }),
      r = n.useGamma ? n.gamma : null;
    return Ke(e, { ...o, gamma: r, outputPixelType: this.outputPixelType });
  }
  _getWebGLParameters() {
    const {
        outputMin: t = 0,
        outputMax: e = 255,
        gamma: i,
        useGamma: n,
      } = this.functionArguments,
      o = this.rasterInfo.bandCount >= 2 ? 3 : 1,
      r = n && i && i.length ? Ze(o, i) : [1, 1, 1],
      { minCutOff: s, maxCutOff: a } = this.cutOffs ?? {
        minCutOff: [0, 0, 0],
        maxCutOff: [255, 255, 255],
      };
    s.length === 1 && ((s[1] = s[2] = s[0]), (a[1] = a[2] = a[0]));
    const u = new Float32Array(o);
    let h;
    for (h = 0; h < o; h++) u[h] = (e - t) / (a[h] - s[h]);
    const c = this._isOutputRoundingNeeded();
    return {
      bandCount: o,
      outMin: t,
      outMax: e,
      minCutOff: s,
      maxCutOff: a,
      factor: u,
      useGamma: n,
      gamma: n && i ? i : [1, 1, 1],
      gammaCorrection: n && r ? r : [1, 1, 1],
      stretchType: this.functionArguments.stretchType,
      isOutputRounded: c,
      type: "stretch",
    };
  }
};
l(
  [m({ json: { write: !0, name: "rasterFunction" } })],
  Y.prototype,
  "functionName",
  void 0
),
  l(
    [m({ type: Is, json: { write: !0, name: "rasterFunctionArguments" } })],
    Y.prototype,
    "functionArguments",
    void 0
  ),
  l([m()], Y.prototype, "rasterArgumentNames", void 0),
  l([m({ json: { write: !0 } })], Y.prototype, "lookup", void 0),
  l([m({ json: { write: !0 } })], Y.prototype, "cutOffs", void 0),
  (Y = l([R("esri.layers.support.rasterFunctions.StretchFunction")], Y));
const Fs = Y,
  _ = new Map();
function Ps(t, e) {
  const { rasterFunctionArguments: i } = t;
  i &&
    (i.rasters || [i.raster]).forEach((n) => {
      n &&
        typeof n != "number" &&
        (typeof n == "string"
          ? n.startsWith("http") && (e.includes(n) || e.push(n))
          : "rasterFunctionArguments" in n && Ps(n, e));
    });
}
function Ms(t, e) {
  if (
    ((e = e ?? {}),
    "function" in (t = W(t)) &&
      "arguments" in t &&
      t.arguments &&
      (t = (function (i, n) {
        n && Se(i, n);
        const o = {};
        return je(i, o), o;
      })(t, e)),
    "rasterFunction" in t)
  )
    return ke((t = Ut(t)), e);
  throw new Ie("raster-function-helper", "unsupported raster function json.");
}
function we(t) {
  return !!(
    t &&
    typeof t == "object" &&
    t.rasterFunction &&
    t.rasterFunctionArguments
  );
}
function Ut(t) {
  var o;
  const { rasterFunction: e, rasterFunctionArguments: i } = t,
    n = {};
  for (const r in i) {
    let s = i[r];
    const a = r.toLowerCase();
    if (a === "rasters" && Array.isArray(s))
      n.rasters = s.map((u) => (we(u) ? Ut(u) : u));
    else
      switch ((we(s) && (s = Ut(s)), a)) {
        case "dra":
          n.dra = s;
          break;
        case "pspower":
          n.psPower = s;
          break;
        case "pszfactor":
          n.psZFactor = s;
          break;
        case "bandids":
          n.bandIds = s;
          break;
        default:
          n[r[0].toLowerCase() + r.slice(1)] = s;
      }
  }
  return (
    e !== "Local" ||
      ((o = n.rasters) != null && o.length) ||
      (n.rasters = ["$$"]),
    { ...t, rasterFunctionArguments: n }
  );
}
function ke(t, e) {
  var f, y;
  const { rasterFunction: i, rasterFunctionArguments: n } = t,
    o = (f = t.outputPixelType) == null ? void 0 : f.toLowerCase();
  if (i == null || !_.has(i))
    throw new Ie("raster-function-helper", `unsupported raster function: ${i}`);
  const r = _.get(i),
    s = (typeof r.ctor == "function" ? r.ctor : r.ctor.default).fromJSON({
      ...t,
      outputPixelType: o,
    }),
    { rasterArgumentNames: a } = s,
    u = [],
    h = (function (w, d) {
      return d[0] === "rasters" && Array.isArray(w.rasters)
        ? w.rasters
        : d.map((x) => w[x]);
    })(n, a),
    c = a[0] === "rasters",
    p = [];
  for (let w = 0; w < h.length; w++) {
    const d = h[w];
    let x;
    d == null || (typeof d == "string" && d.startsWith("$"))
      ? u.push(e == null ? void 0 : e.raster)
      : typeof d == "string"
      ? e[d] && u.push(e[d])
      : typeof d != "number" &&
        "rasterFunction" in d &&
        ((x = ke(d, e)), c || (s.functionArguments[a[w]] = x), u.push(x)),
      c && p.push(x ?? d);
  }
  if ((c && (s.functionArguments.rasters = p), e)) {
    s.sourceRasters = u;
    const w = (y = e.raster) == null ? void 0 : y.url;
    w && (s.mainPrimaryRasterId = w);
  }
  return s;
}
function Se(t, e) {
  if (t && e)
    for (const i in t) {
      const n = t[i];
      n &&
        typeof n == "object" &&
        (n.function && n.arguments
          ? Se(n.arguments, e)
          : n.type === "RasterFunctionVariable" &&
            e[n.name] != null &&
            (n.value = e[n.name]));
    }
}
function Wt(t) {
  var e;
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t) && t.length === 0)
    return t.length === 0
      ? null
      : ["number", "string"].includes(typeof t[0])
      ? t
      : t.map((i) => Wt(i));
  if ("value" in t && ["number", "string", "boolean"].includes(typeof t.value))
    return t.value;
  if (!("type" in t)) return t;
  switch (t.type) {
    case "Scalar":
      return t.value;
    case "AlgorithmicColorRamp":
      return ve(t);
    case "MultiPartColorRamp":
      return { type: "multipart", colorRamps: t.ArrayOfColorRamp.map(ve) };
    case "ArgumentArray":
      return (e = t.elements) != null && e.length
        ? t.elements[0].type === "RasterStatistics"
          ? t.elements
          : t.elements[0].type === "RasterFunctionVariable"
          ? t.elements.map((i) =>
              i.value != null
                ? Wt(i.value)
                : i.name.toLowerCase().includes("raster")
                ? "$$"
                : null
            )
          : t
        : t.elements;
    default:
      return t;
  }
}
function ve(t) {
  const e = t.algorithm ?? "esriHSVAlgorithm";
  let { FromColor: i, ToColor: n } = t;
  if (!Array.isArray(i)) {
    const { r: o, g: r, b: s } = Qt({ h: i.Hue, s: i.Saturation, v: i.Value });
    i = [o, r, s, i.AlphaValue];
  }
  if (!Array.isArray(n)) {
    const { r: o, g: r, b: s } = Qt({ h: n.Hue, s: n.Saturation, v: n.Value });
    n = [o, r, s, n.AlphaValue];
  }
  return { type: "algorithmic", algorithm: e, fromColor: i, toColor: n };
}
function je(t, e) {
  if (!t || !e) return;
  const { function: i, arguments: n } = t;
  if (!i || !n) return;
  (e.rasterFunction = i.type.replace("Function", "")),
    (e.outputPixelType = i.pixelType);
  const o = {};
  e.rasterFunctionArguments = o;
  for (const r in n) {
    const s = n[r];
    typeof s == "object" &&
      ("function" in s && s.function && s.arguments
        ? ((e.rasterFunctionArguments[r] = {}),
          je(s, e.rasterFunctionArguments[r]))
        : "value" in s && (o[r] = Wt(s.value)));
  }
  switch (
    (o.DEM && !o.Raster && ((o.Raster = o.DEM), delete o.DEM), e.rasterFunction)
  ) {
    case "Stretch":
      (function (r) {
        var s;
        (s = r.Statistics) != null &&
          s.length &&
          typeof r.Statistics == "object" &&
          (r.Statistics = r.Statistics.map((a) => [
            a.min,
            a.max,
            a.mean,
            a.standardDeviation,
          ])),
          r.NumberOfStandardDeviation != null &&
            ((r.NumberOfStandardDeviations = r.NumberOfStandardDeviation),
            delete r.NumberOfStandardDeviation);
      })(o);
      break;
    case "Colormap":
      (function (r) {
        var s, a;
        ((a = (s = r.ColorRamp) == null ? void 0 : s.type) == null
          ? void 0
          : a.toLowerCase()) === "randomcolorramp" &&
          (delete r.ColorRamp, (r.ColormapName = "Random")),
          r.ColorSchemeType === 0 && delete r.ColorRamp;
      })(o);
      break;
    case "Convolution":
      (function (r) {
        r.ConvolutionType != null &&
          ((r.Type = r.ConvolutionType), delete r.ConvolutionType);
      })(o);
      break;
    case "Mask":
      (function (r) {
        var s;
        (s = r.NoDataValues) != null &&
          s.length &&
          typeof r.NoDataValues[0] == "string" &&
          (r.NoDataValues = r.NoDataValues.filter((a) => a !== "").map((a) =>
            Number(a)
          ));
      })(o);
  }
}
_.set("Aspect", {
  desc: "Aspect Function",
  ctor: tn,
  rasterArgumentNames: ["raster"],
}),
  _.set("BandArithmetic", {
    desc: "Band Arithmetic Function",
    ctor: pn,
    rasterArgumentNames: ["raster"],
  }),
  _.set("Colormap", {
    desc: "Colormap Function",
    ctor: gn,
    rasterArgumentNames: ["raster"],
  }),
  _.set("CompositeBand", {
    desc: "CompositeBand Function",
    ctor: xn,
    rasterArgumentNames: ["rasters"],
  }),
  _.set("Convolution", {
    desc: "Convolution Function",
    ctor: An,
    rasterArgumentNames: ["raster"],
  }),
  _.set("ExtractBand", {
    desc: "ExtractBand Function",
    ctor: Fn,
    rasterArgumentNames: ["raster"],
  }),
  _.set("Local", {
    desc: "Local Function",
    ctor: cs,
    rasterArgumentNames: ["rasters"],
  }),
  _.set("Mask", {
    desc: "Mask Function",
    ctor: hs,
    rasterArgumentNames: ["raster"],
  }),
  _.set("NDVI", {
    desc: "NDVI Function",
    ctor: fs,
    rasterArgumentNames: ["raster"],
  }),
  _.set("Remap", {
    desc: "Remap Function",
    ctor: gs,
    rasterArgumentNames: ["raster"],
  }),
  _.set("Slope", {
    desc: "Slope Function",
    ctor: ws,
    rasterArgumentNames: ["raster"],
  }),
  _.set("StatisticsHistogram", {
    desc: "Statistics Histogram Function",
    ctor: bs,
    rasterArgumentNames: ["raster"],
  }),
  _.set("Stretch", {
    desc: "Stretch Function",
    ctor: Fs,
    rasterArgumentNames: ["raster"],
  });
let wt = class extends Xt {
  get affectsPixelSize() {
    return !1;
  }
  forwardTransform(t) {
    return t;
  }
  inverseTransform(t) {
    return t;
  }
};
l([m()], wt.prototype, "affectsPixelSize", null),
  l([m({ json: { write: !0 } })], wt.prototype, "spatialReference", void 0),
  (wt = l([R("esri.layers.support.rasterTransforms.BaseRasterTransform")], wt));
const Yt = wt;
let vt = class extends Yt {
  constructor() {
    super(...arguments), (this.type = "gcs-shift"), (this.tolerance = 1e-8);
  }
  forwardTransform(t) {
    return (t = t.clone()).type === "point"
      ? (t.x > 180 + this.tolerance && (t.x -= 360), t)
      : (t.xmin >= 180 - this.tolerance
          ? ((t.xmax -= 360), (t.xmin -= 360))
          : t.xmax > 180 + this.tolerance && ((t.xmin = -180), (t.xmax = 180)),
        t);
  }
  inverseTransform(t) {
    return (t = t.clone()).type === "point"
      ? (t.x < -this.tolerance && (t.x += 360), t)
      : (t.xmin < -this.tolerance && ((t.xmin += 360), (t.xmax += 360)), t);
  }
};
l([dt({ GCSShiftXform: "gcs-shift" })], vt.prototype, "type", void 0),
  l([m()], vt.prototype, "tolerance", void 0),
  (vt = l([R("esri.layers.support.rasterTransforms.GCSShiftTransform")], vt));
const Ns = vt;
let Ft = class extends Yt {
  constructor() {
    super(...arguments), (this.type = "identity");
  }
};
l([dt({ IdentityXform: "identity" })], Ft.prototype, "type", void 0),
  (Ft = l([R("esri.layers.support.rasterTransforms.IdentityTransform")], Ft));
const Rs = Ft;
function qt(t, e, i) {
  const { x: n, y: o } = e;
  if (i < 2)
    return { x: t[0] + n * t[2] + o * t[4], y: t[1] + n * t[3] + o * t[5] };
  if (i === 2) {
    const f = n * n,
      y = o * o,
      w = n * o;
    return {
      x: t[0] + n * t[2] + o * t[4] + f * t[6] + w * t[8] + y * t[10],
      y: t[1] + n * t[3] + o * t[5] + f * t[7] + w * t[9] + y * t[11],
    };
  }
  const r = n * n,
    s = o * o,
    a = n * o,
    u = r * n,
    h = r * o,
    c = n * s,
    p = o * s;
  return {
    x:
      t[0] +
      n * t[2] +
      o * t[4] +
      r * t[6] +
      a * t[8] +
      s * t[10] +
      u * t[12] +
      h * t[14] +
      c * t[16] +
      p * t[18],
    y:
      t[1] +
      n * t[3] +
      o * t[5] +
      r * t[7] +
      a * t[9] +
      s * t[11] +
      u * t[13] +
      h * t[15] +
      c * t[17] +
      p * t[19],
  };
}
function be(t, e, i) {
  const { xmin: n, ymin: o, xmax: r, ymax: s, spatialReference: a } = e;
  let u = [];
  if (i < 2)
    u.push({ x: n, y: s }),
      u.push({ x: r, y: s }),
      u.push({ x: n, y: o }),
      u.push({ x: r, y: o });
  else {
    let p = 10;
    for (let f = 0; f < p; f++)
      u.push({ x: n, y: o + ((s - o) * f) / (p - 1) }),
        u.push({ x: r, y: o + ((s - o) * f) / (p - 1) });
    p = 8;
    for (let f = 1; f <= p; f++)
      u.push({ x: n + ((r - n) * f) / p, y: o }),
        u.push({ x: n + ((r - n) * f) / p, y: s });
  }
  u = u.map((p) => qt(t, p, i));
  const h = u.map((p) => p.x),
    c = u.map((p) => p.y);
  return new Ee({
    xmin: Math.min.apply(null, h),
    xmax: Math.max.apply(null, h),
    ymin: Math.min.apply(null, c),
    ymax: Math.max.apply(null, c),
    spatialReference: a,
  });
}
let L = class extends Yt {
  constructor() {
    super(...arguments), (this.polynomialOrder = 1), (this.type = "polynomial");
  }
  readForwardCoefficients(t, e) {
    const { coeffX: i, coeffY: n } = e;
    if (
      !(i != null && i.length) ||
      !(n != null && n.length) ||
      i.length !== n.length
    )
      return null;
    const o = [];
    for (let r = 0; r < i.length; r++) o.push(i[r]), o.push(n[r]);
    return o;
  }
  writeForwardCoefficients(t, e, i) {
    const n = [],
      o = [];
    for (let r = 0; r < (t == null ? void 0 : t.length); r++)
      r % 2 == 0 ? n.push(t[r]) : o.push(t[r]);
    (e.coeffX = n), (e.coeffY = o);
  }
  get inverseCoefficients() {
    let t = this._get("inverseCoefficients");
    const e = this._get("forwardCoefficients");
    return (
      !t &&
        e &&
        this.polynomialOrder < 2 &&
        (t = (function (i) {
          const [n, o, r, s, a, u] = i,
            h = r * u - a * s,
            c = a * s - r * u;
          return [
            (a * o - n * u) / h,
            (r * o - n * s) / c,
            u / h,
            s / c,
            -a / h,
            -r / c,
          ];
        })(e)),
      t
    );
  }
  set inverseCoefficients(t) {
    this._set("inverseCoefficients", t);
  }
  readInverseCoefficients(t, e) {
    const { inverseCoeffX: i, inverseCoeffY: n } = e;
    if (
      !(i != null && i.length) ||
      !(n != null && n.length) ||
      i.length !== n.length
    )
      return null;
    const o = [];
    for (let r = 0; r < i.length; r++) o.push(i[r]), o.push(n[r]);
    return o;
  }
  writeInverseCoefficients(t, e, i) {
    const n = [],
      o = [];
    for (let r = 0; r < (t == null ? void 0 : t.length); r++)
      r % 2 == 0 ? n.push(t[r]) : o.push(t[r]);
    (e.inverseCoeffX = n), (e.inverseCoeffY = o);
  }
  get affectsPixelSize() {
    return this.polynomialOrder > 0;
  }
  forwardTransform(t) {
    if (t.type === "point") {
      const e = qt(this.forwardCoefficients, t, this.polynomialOrder);
      return new te({ x: e.x, y: e.y, spatialReference: t.spatialReference });
    }
    return be(this.forwardCoefficients, t, this.polynomialOrder);
  }
  inverseTransform(t) {
    if (t.type === "point") {
      const e = qt(this.inverseCoefficients, t, this.polynomialOrder);
      return new te({ x: e.x, y: e.y, spatialReference: t.spatialReference });
    }
    return be(this.inverseCoefficients, t, this.polynomialOrder);
  }
};
l([m({ json: { write: !0 } })], L.prototype, "polynomialOrder", void 0),
  l([m()], L.prototype, "forwardCoefficients", void 0),
  l(
    [At("forwardCoefficients", ["coeffX", "coeffY"])],
    L.prototype,
    "readForwardCoefficients",
    null
  ),
  l([ft("forwardCoefficients")], L.prototype, "writeForwardCoefficients", null),
  l([m({ json: { write: !0 } })], L.prototype, "inverseCoefficients", null),
  l(
    [At("inverseCoefficients", ["inverseCoeffX", "inverseCoeffY"])],
    L.prototype,
    "readInverseCoefficients",
    null
  ),
  l([ft("inverseCoefficients")], L.prototype, "writeInverseCoefficients", null),
  l([m()], L.prototype, "affectsPixelSize", null),
  l([dt({ PolynomialXform: "polynomial" })], L.prototype, "type", void 0),
  (L = l([R("esri.layers.support.rasterTransforms.PolynomialTransform")], L));
const Ts = L,
  Me = { GCSShiftXform: Ns, IdentityXform: Rs, PolynomialXform: Ts },
  Bs = Object.keys(Me);
function _s(t) {
  const e = t == null ? void 0 : t.type;
  return !t || Bs.includes(e);
}
function Ds(t) {
  if (!(t == null ? void 0 : t.type)) return null;
  const i = Me[t == null ? void 0 : t.type];
  if (i) {
    const n = new i();
    return n.read(t), n;
  }
  return null;
}
export { Ms as C, Ns as c, _s as f, Ps as h, Ds as i, Ts as m };
