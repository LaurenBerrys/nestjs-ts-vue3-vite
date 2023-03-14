import {
  d0 as De,
  jn as Oe,
  cc as D,
  ae as s,
  af as M,
  cr as ce,
  ei as W,
  jo as _e,
  gP as lt,
  ag as H,
  dd as Z,
  gO as ct,
  gS as Fe,
  dl as P,
  gT as Ke,
  bO as B,
  dm as Qe,
  jg as Xe,
  jp as qe,
  t as ne,
  r as w,
  R as Ye,
  dp as Mt,
  al as dt,
  ds as ut,
  j8 as gt,
  jq as It,
  jr as pt,
  js as mt,
  jt as yt,
  ju as oe,
  j9 as Me,
  jv as Ue,
  jw as be,
  ix as wt,
  ef as $e,
  cM as ht,
  de as At,
  ar as ue,
  bn as ft,
  dB as Dt,
  s as x,
  jx as et,
  q as X,
  jy as He,
  gr as bt,
  aK as Ct,
  dq as Tt,
  dr as jt,
  U as G,
  aH as Lt,
  ah as St,
} from "./index.8fd7165c.js";
import { p as vt } from "./multidimensionalUtils.54c50a30.js";
import {
  B as U,
  C as Nt,
  d as xt,
  E as Bt,
  m as R,
} from "./dataUtils.e77088c3.js";
import {
  _ as ge,
  d as re,
  g as zt,
  h as Ut,
  u as tt,
} from "./RasterSymbolizer.ac2e1b06.js";
import "./generateRendererUtils.855c90be.js";
var Ie;
const $ = new De({ flow_from: "flow-from", flow_to: "flow-to" });
let T = (Ie = class extends Oe(Z) {
  constructor(e) {
    super(e),
      (this.density = 0.8),
      (this.color = new D([255, 255, 255, 1])),
      (this.maxPathLength = 200),
      (this.trailWidth = 1.5),
      (this.flowSpeed = 10),
      (this.trailLength = 100),
      (this.smoothing = 0),
      (this.flowRepresentation = "flow-from"),
      (this.type = "flow"),
      (this.authoringInfo = null),
      (this.legendOptions = null),
      (this.trailCap = "butt"),
      (this.background = "none");
  }
  clone() {
    var y, I;
    const {
        density: e,
        maxPathLength: t,
        trailWidth: a,
        flowSpeed: i,
        trailLength: r,
        smoothing: o,
        flowRepresentation: n,
        trailCap: c,
        background: u,
      } = this,
      l = this.color.clone(),
      m = (this.visualVariables || []).map((d) => d.clone()),
      g = (y = this.authoringInfo) == null ? void 0 : y.clone(),
      p = (I = this.legendOptions) == null ? void 0 : I.clone();
    return new Ie({
      density: e,
      color: l,
      maxPathLength: t,
      trailWidth: a,
      flowSpeed: i,
      trailLength: r,
      trailCap: c,
      background: u,
      smoothing: o,
      flowRepresentation: n,
      visualVariables: m,
      authoringInfo: g,
      legendOptions: p,
    });
  }
  getSymbol(e, t) {}
  async getSymbolAsync(e, t) {}
  getSymbols() {
    return [];
  }
});
s([M({ type: Number, json: { write: !0 } })], T.prototype, "density", void 0),
  s(
    [M({ type: D, json: { write: { allowNull: !0 } } })],
    T.prototype,
    "color",
    void 0
  ),
  s(
    [M({ type: Number, cast: ce, json: { write: !0 } })],
    T.prototype,
    "maxPathLength",
    void 0
  ),
  s(
    [M({ type: Number, cast: ce, json: { write: !0 } })],
    T.prototype,
    "trailWidth",
    void 0
  ),
  s(
    [M({ type: Number, json: { write: !0 } })],
    T.prototype,
    "flowSpeed",
    void 0
  ),
  s(
    [M({ type: Number, json: { write: !0 } })],
    T.prototype,
    "trailLength",
    void 0
  ),
  s(
    [M({ type: Number, cast: ce, json: { write: !1 } })],
    T.prototype,
    "smoothing",
    void 0
  ),
  s(
    [
      M({
        type: $.apiValues,
        json: {
          type: $.jsonValues,
          read: { reader: $.read },
          write: { writer: $.write },
        },
      }),
    ],
    T.prototype,
    "flowRepresentation",
    void 0
  ),
  s([W({ flowRenderer: "flow" })], T.prototype, "type", void 0),
  s(
    [M({ type: _e, json: { write: !0 } })],
    T.prototype,
    "authoringInfo",
    void 0
  ),
  s(
    [M({ type: lt, json: { write: !0 } })],
    T.prototype,
    "legendOptions",
    void 0
  ),
  s(
    [M({ type: String, json: { write: !0 } })],
    T.prototype,
    "trailCap",
    void 0
  ),
  s(
    [M({ type: String, json: { write: !0 } })],
    T.prototype,
    "background",
    void 0
  ),
  (T = Ie = s([H("esri.renderers.FlowRenderer")], T));
const at = T;
let V = class extends Z {
  constructor() {
    super(...arguments),
      (this.value = null),
      (this.label = null),
      (this.color = null);
  }
};
s([M({ type: Number, json: { write: !0 } })], V.prototype, "value", void 0),
  s([M({ type: String, json: { write: !0 } })], V.prototype, "label", void 0),
  s(
    [M({ type: D, json: { type: [ct], write: !0 } })],
    V.prototype,
    "color",
    void 0
  ),
  (V = s([H("esri.renderers.support.ColormapInfo")], V));
const it = V;
var F;
let K = (F = class extends Z {
  constructor(e) {
    super(e), (this.colormapInfos = null), (this.type = "raster-colormap");
  }
  static createFromColormap(e, t) {
    if (!e) return null;
    const a = e[0].length === 5,
      i = [...e]
        .sort((r) => r[0][0] - r[1][0])
        .map((r) =>
          it.fromJSON({
            value: r[0],
            color: a ? r.slice(1, 5) : r.slice(1, 4).concat([255]),
            label: t ? t[r[0]] ?? "" : r[0],
          })
        );
    return new F({ colormapInfos: i });
  }
  static createFromColorramp(e) {
    const t = ge(e);
    return F.createFromColormap(t);
  }
  clone() {
    return new F({ colormapInfos: this.colormapInfos.map((e) => e.toJSON()) });
  }
  extractColormap() {
    return this.colormapInfos
      .map(({ value: e, color: t }) => [
        e,
        t.r,
        t.g,
        t.b,
        t.a > 1 ? t.a : (255 * t.a) & 255,
      ])
      .sort((e, t) => e[0] - t[0]);
  }
});
s(
  [M({ type: [it], json: { write: !0 } })],
  K.prototype,
  "colormapInfos",
  void 0
),
  s([W({ rasterColormap: "raster-colormap" })], K.prototype, "type", void 0),
  (K = F = s([H("esri.renderers.RasterColormapRenderer")], K));
const Ce = K;
var pe;
let N = (pe = class extends Z {
  constructor(e) {
    super(e),
      (this.altitude = 45),
      (this.azimuth = 315),
      (this.colorRamp = null),
      (this.hillshadeType = "traditional"),
      (this.pixelSizePower = 0.664),
      (this.pixelSizeFactor = 0.024),
      (this.scalingType = "none"),
      (this.type = "raster-shaded-relief"),
      (this.zFactor = 1);
  }
  readColorRamp(e) {
    return Ke(e);
  }
  clone() {
    return new pe({
      hillshadeType: this.hillshadeType,
      altitude: this.altitude,
      azimuth: this.azimuth,
      zFactor: this.zFactor,
      scalingType: this.scalingType,
      pixelSizeFactor: this.pixelSizeFactor,
      pixelSizePower: this.pixelSizePower,
      colorRamp: B(this.colorRamp),
    });
  }
});
s([M({ type: Number, json: { write: !0 } })], N.prototype, "altitude", void 0),
  s([M({ type: Number, json: { write: !0 } })], N.prototype, "azimuth", void 0),
  s([M({ types: Fe, json: { write: !0 } })], N.prototype, "colorRamp", void 0),
  s([P("colorRamp")], N.prototype, "readColorRamp", null),
  s(
    [M({ type: ["traditional", "multi-directional"], json: { write: !0 } })],
    N.prototype,
    "hillshadeType",
    void 0
  ),
  s(
    [M({ type: Number, json: { write: !0 } })],
    N.prototype,
    "pixelSizePower",
    void 0
  ),
  s(
    [M({ type: Number, json: { write: !0 } })],
    N.prototype,
    "pixelSizeFactor",
    void 0
  ),
  s(
    [M({ type: ["none", "adjusted"], json: { write: !0 } })],
    N.prototype,
    "scalingType",
    void 0
  ),
  s(
    [W({ rasterShadedRelief: "raster-shaded-relief" })],
    N.prototype,
    "type",
    void 0
  ),
  s([M({ type: Number, json: { write: !0 } })], N.prototype, "zFactor", void 0),
  (N = pe = s([H("esri.renderers.RasterShadedReliefRenderer")], N));
const rt = N;
var me;
let f = (me = class extends Z {
  constructor(e) {
    super(e),
      (this.colorRamp = null),
      (this.computeGamma = !1),
      (this.dynamicRangeAdjustment = !1),
      (this.gamma = []),
      (this.maxPercent = null),
      (this.minPercent = null),
      (this.numberOfStandardDeviations = null),
      (this.outputMax = null),
      (this.outputMin = null),
      (this.sigmoidStrengthLevel = null),
      (this.statistics = []),
      (this.histograms = null),
      (this.useGamma = !1),
      (this.stretchType = "none"),
      (this.type = "raster-stretch");
  }
  readColorRamp(e) {
    if (e) return Ke(e);
  }
  writeStatistics(e, t, a) {
    e != null &&
      e.length &&
      (Array.isArray(e[0]) ||
        (e = e.map((i) => [i.min, i.max, i.avg, i.stddev])),
      (t[a] = e));
  }
  readStretchType(e, t) {
    let a = t.stretchType;
    return typeof a == "number" && (a = zt[a]), re.read(a);
  }
  clone() {
    return new me({
      stretchType: this.stretchType,
      outputMin: this.outputMin,
      outputMax: this.outputMax,
      useGamma: this.useGamma,
      computeGamma: this.computeGamma,
      statistics: B(this.statistics),
      gamma: B(this.gamma),
      sigmoidStrengthLevel: this.sigmoidStrengthLevel,
      numberOfStandardDeviations: this.numberOfStandardDeviations,
      minPercent: this.minPercent,
      maxPercent: this.maxPercent,
      colorRamp: B(this.colorRamp),
      histograms: B(this.histograms),
      dynamicRangeAdjustment: this.dynamicRangeAdjustment,
    });
  }
});
s([M({ types: Fe, json: { write: !0 } })], f.prototype, "colorRamp", void 0),
  s([P("colorRamp")], f.prototype, "readColorRamp", null),
  s(
    [M({ type: Boolean, json: { write: !0 } })],
    f.prototype,
    "computeGamma",
    void 0
  ),
  s(
    [
      M({
        type: Boolean,
        json: { write: { target: "dra" }, read: { source: "dra" } },
      }),
    ],
    f.prototype,
    "dynamicRangeAdjustment",
    void 0
  ),
  s([M({ type: [Number], json: { write: !0 } })], f.prototype, "gamma", void 0),
  s(
    [M({ type: Number, json: { write: !0 } })],
    f.prototype,
    "maxPercent",
    void 0
  ),
  s(
    [M({ type: Number, json: { write: !0 } })],
    f.prototype,
    "minPercent",
    void 0
  ),
  s(
    [M({ type: Number, json: { write: !0 } })],
    f.prototype,
    "numberOfStandardDeviations",
    void 0
  ),
  s(
    [
      M({
        type: Number,
        json: { read: { source: "max" }, write: { target: "max" } },
      }),
    ],
    f.prototype,
    "outputMax",
    void 0
  ),
  s(
    [
      M({
        type: Number,
        json: { read: { source: "min" }, write: { target: "min" } },
      }),
    ],
    f.prototype,
    "outputMin",
    void 0
  ),
  s(
    [M({ type: Number, json: { write: !0 } })],
    f.prototype,
    "sigmoidStrengthLevel",
    void 0
  ),
  s(
    [M({ json: { type: [[Number]], write: !0 } })],
    f.prototype,
    "statistics",
    void 0
  ),
  s([M()], f.prototype, "histograms", void 0),
  s([Qe("statistics")], f.prototype, "writeStatistics", null),
  s(
    [M({ type: Boolean, json: { write: !0 } })],
    f.prototype,
    "useGamma",
    void 0
  ),
  s(
    [M({ type: re.apiValues, json: { type: re.jsonValues, write: re.write } })],
    f.prototype,
    "stretchType",
    void 0
  ),
  s([P("stretchType", ["stretchType"])], f.prototype, "readStretchType", null),
  s([W({ rasterStretch: "raster-stretch" })], f.prototype, "type", void 0),
  (f = me = s([H("esri.renderers.RasterStretchRenderer")], f));
const Te = f;
var ye;
const Ze = new Set([
    "esriMetersPerSecond",
    "esriKilometersPerHour",
    "esriKnots",
    "esriFeetPerSecond",
    "esriMilesPerHour",
  ]),
  ee = new De({
    beaufort_ft: "beaufort-ft",
    beaufort_km: "beaufort-km",
    beaufort_kn: "beaufort-kn",
    beaufort_m: "beaufort-m",
    beaufort_mi: "beaufort-mi",
    classified_arrow: "classified-arrow",
    ocean_current_kn: "ocean-current-kn",
    ocean_current_m: "ocean-current-m",
    simple_scalar: "simple-scalar",
    single_arrow: "single-arrow",
    wind_speed: "wind-barb",
  }),
  te = new De({ flow_from: "flow-from", flow_to: "flow-to" });
let j = (ye = class extends Oe(Z) {
  constructor(e) {
    super(e),
      (this.attributeField = "Magnitude"),
      (this.flowRepresentation = "flow-from"),
      (this.rotationType = "arithmetic"),
      (this.style = "single-arrow"),
      (this.symbolTileSize = 50),
      (this.type = "vector-field");
  }
  readInputUnit(e, t) {
    return Ze.has(e) ? U.fromJSON(e) : null;
  }
  readOutputUnit(e, t) {
    return Ze.has(e) ? U.fromJSON(e) : null;
  }
  get styleRenderer() {
    const e = this.style,
      t = this.attributeField,
      a = this._createStyleRenderer(e);
    return (a.field = t), a;
  }
  get sizeVariables() {
    const e = [];
    if (this.visualVariables)
      for (const t of this.visualVariables) t.type === "size" && e.push(t);
    if (e.length === 0) {
      const t = new Xe({
        field: "Magnitude",
        minSize: 0.2 * this.symbolTileSize,
        maxSize: 0.8 * this.symbolTileSize,
      });
      this.visualVariables
        ? this.visualVariables.push(t)
        : this._set("visualVariables", [t]),
        e.push(t);
    }
    return e;
  }
  get rotationVariables() {
    const e = [];
    if (this.visualVariables)
      for (const t of this.visualVariables) t.type === "rotation" && e.push(t);
    if (e.length === 0) {
      const t = new qe({ field: "Direction", rotationType: this.rotationType });
      this.visualVariables
        ? this.visualVariables.push(t)
        : this._set("visualVariables", [t]),
        e.push(t);
    }
    return e;
  }
  clone() {
    return new ye({
      attributeField: this.attributeField,
      flowRepresentation: this.flowRepresentation,
      rotationType: this.rotationType,
      symbolTileSize: this.symbolTileSize,
      style: this.style,
      visualVariables: B(this.visualVariables),
      inputUnit: this.inputUnit,
      outputUnit: this.outputUnit,
    });
  }
  async getGraphicsFromPixelData(e, t = !1, a = []) {
    var p;
    const i = [],
      r = Nt(this.inputUnit, this.outputUnit),
      o =
        ((p = this.rotationVariables[0]) == null ? void 0 : p.rotationType) ||
        this.rotationType,
      n = t
        ? xt(e.pixelBlock, "vector-uv", o, r)
        : Bt(e.pixelBlock, "vector-magdir", r);
    if (ne(n)) return i;
    const c = e.extent,
      u = w(n.mask) && n.mask.length > 0;
    let l = 0;
    const m = (c.xmax - c.xmin) / n.width,
      g = (c.ymax - c.ymin) / n.height;
    for (let y = 0; y < n.height; y++)
      for (let I = 0; I < n.width; I++, l++) {
        let d = new Ye({
          x: c.xmin + I * m + m / 2,
          y: c.ymax - y * g - g / 2,
          spatialReference: c.spatialReference,
        });
        d = (await Mt(d))[0];
        const A = a.some((L) => L.intersects(d));
        if ((!u || n.mask[l]) && !A) {
          const L = { Magnitude: n.pixels[0][l], Direction: n.pixels[1][l] },
            b = new dt({
              geometry: {
                type: "point",
                x: d.x,
                y: d.y,
                spatialReference: c.spatialReference,
              },
              attributes: L,
            });
          (b.symbol = this._getVisualVariablesAppliedSymbol(b)), i.push(b);
        }
      }
    return i;
  }
  getSymbol(e, t) {}
  async getSymbolAsync(e, t) {}
  getSymbols() {
    return [];
  }
  getClassBreakInfos() {
    var e;
    return (e = this.styleRenderer) == null ? void 0 : e.classBreakInfos;
  }
  getDefaultSymbol() {
    var e;
    return (e = this.styleRenderer) == null ? void 0 : e.defaultSymbol;
  }
  _getDefaultSymbol(e) {
    return new ut({
      path: "M14,32 14,18 9,23 16,3 22,23 17,18 17,32 z",
      outline: new gt({ width: 0 }),
      size: 20,
      color: e || new D([0, 92, 230]),
    });
  }
  _getVisualVariablesAppliedSymbol(e) {
    var r, o;
    if (!e) return;
    const t =
        (o = (r = this.styleRenderer) == null ? void 0 : r.getSymbol(e)) == null
          ? void 0
          : o.clone(),
      a = this.sizeVariables,
      i = this.rotationVariables;
    if (
      (a && a.length && this.sizeVariables.forEach((n) => It(t, pt([n], e))),
      i && i.length)
    ) {
      const n =
        (this.flowRepresentation === "flow-to") ==
        (this.style === "ocean-current-kn" || this.style === "ocean-current-m")
          ? 0
          : 180;
      (e.attributes.Direction = e.attributes.Direction + n),
        this.rotationVariables.forEach((c) => mt(t, yt(c, e), c.axis));
    }
    return t;
  }
  _createStyleRenderer(e) {
    let t = { defaultSymbol: this._getDefaultSymbol(), classBreakInfos: [] };
    switch (e) {
      case "single-arrow":
        t = this._createSingleArrowRenderer();
        break;
      case "beaufort-kn":
        t = this._createBeaufortKnotsRenderer();
        break;
      case "beaufort-m":
        t = this._createBeaufortMeterRenderer();
        break;
      case "beaufort-ft":
        t = this._createBeaufortFeetRenderer();
        break;
      case "beaufort-mi":
        t = this._createBeaufortMilesRenderer();
        break;
      case "beaufort-km":
        t = this._createBeaufortKilometersRenderer();
        break;
      case "ocean-current-m":
        t = this._createCurrentMeterRenderer();
        break;
      case "ocean-current-kn":
        t = this._createCurrentKnotsRenderer();
        break;
      case "simple-scalar":
        t = this._createSimpleScalarRenderer();
        break;
      case "wind-barb":
        t = this._createWindBarbsRenderer();
        break;
      case "classified-arrow":
        t = this._createClassifiedArrowRenderer();
    }
    return new oe(t);
  }
  _createSingleArrowRenderer() {
    return { defaultSymbol: this._getDefaultSymbol() };
  }
  _createBeaufortKnotsRenderer() {
    return {
      defaultSymbol: this._getDefaultSymbol(new D([214, 47, 39])),
      classBreakInfos: this._getClassBreaks(
        [0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63],
        [
          [40, 146, 199],
          [89, 162, 186],
          [129, 179, 171],
          [160, 194, 155],
          [191, 212, 138],
          [218, 230, 119],
          [250, 250, 100],
          [252, 213, 83],
          [252, 179, 102],
          [250, 141, 52],
          [247, 110, 42],
          [240, 71, 29],
        ]
      ),
    };
  }
  _createBeaufortMeterRenderer() {
    return {
      defaultSymbol: this._getDefaultSymbol(new D([214, 47, 39])),
      classBreakInfos: this._getClassBreaks(
        [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7],
        [
          [69, 117, 181],
          [101, 137, 184],
          [132, 158, 186],
          [162, 180, 189],
          [192, 204, 190],
          [222, 227, 191],
          [255, 255, 191],
          [255, 220, 161],
          [250, 185, 132],
          [245, 152, 105],
          [237, 117, 81],
          [232, 21, 21],
        ]
      ),
    };
  }
  _createBeaufortFeetRenderer() {
    const e = this._getDefaultSymbol(new D([214, 47, 39]));
    let t = [
      0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7,
    ];
    return (
      (t = t.map((a) => 3.28084 * a)),
      {
        defaultSymbol: e,
        classBreakInfos: this._getClassBreaks(t, [
          [69, 117, 181],
          [101, 137, 184],
          [132, 158, 186],
          [162, 180, 189],
          [192, 204, 190],
          [222, 227, 191],
          [255, 255, 191],
          [255, 220, 161],
          [250, 185, 132],
          [245, 152, 105],
          [237, 117, 81],
          [232, 21, 21],
        ]),
      }
    );
  }
  _createBeaufortMilesRenderer() {
    const e = this._getDefaultSymbol(new D([214, 47, 39]));
    let t = [
      0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7,
    ];
    return (
      (t = t.map((a) => 2.23694 * a)),
      {
        defaultSymbol: e,
        classBreakInfos: this._getClassBreaks(t, [
          [69, 117, 181],
          [101, 137, 184],
          [132, 158, 186],
          [162, 180, 189],
          [192, 204, 190],
          [222, 227, 191],
          [255, 255, 191],
          [255, 220, 161],
          [250, 185, 132],
          [245, 152, 105],
          [237, 117, 81],
          [232, 21, 21],
        ]),
      }
    );
  }
  _createBeaufortKilometersRenderer() {
    const e = this._getDefaultSymbol(new D([214, 47, 39]));
    let t = [
      0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7,
    ];
    return (
      (t = t.map((a) => 3.6 * a)),
      {
        defaultSymbol: e,
        classBreakInfos: this._getClassBreaks(t, [
          [69, 117, 181],
          [101, 137, 184],
          [132, 158, 186],
          [162, 180, 189],
          [192, 204, 190],
          [222, 227, 191],
          [255, 255, 191],
          [255, 220, 161],
          [250, 185, 132],
          [245, 152, 105],
          [237, 117, 81],
          [232, 21, 21],
        ]),
      }
    );
  }
  _createCurrentMeterRenderer() {
    return {
      defaultSymbol: this._getDefaultSymbol(new D([177, 177, 177])),
      classBreakInfos: this._getClassBreaks(
        [0, 0.5, 1, 1.5, 2],
        [
          [78, 26, 153],
          [179, 27, 26],
          [202, 128, 26],
          [177, 177, 177],
        ]
      ),
    };
  }
  _createCurrentKnotsRenderer() {
    return {
      defaultSymbol: this._getDefaultSymbol(new D([177, 177, 177])),
      classBreakInfos: this._getClassBreaks(
        [0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
        [
          [0, 0, 0],
          [0, 37, 100],
          [78, 26, 153],
          [151, 0, 100],
          [179, 27, 26],
          [177, 78, 26],
          [202, 128, 26],
          [177, 179, 52],
          [177, 177, 177],
        ]
      ),
    };
  }
  _createClassifiedArrowRenderer() {
    var a;
    const e = this._getDefaultSymbol(new D([56, 168, 0]));
    let t = [0, 1e-6, 3.5, 7, 10.5, 14];
    if ((a = this.sizeVariables) != null && a.length) {
      const i = this.sizeVariables[0].minDataValue,
        r = this.sizeVariables[0].maxDataValue;
      if (i && r) {
        const o = (r - i) / 5;
        t = Array.from(Array(6).keys()).map((n) => i + o * n);
      }
    }
    return {
      defaultSymbol: e,
      classBreakInfos: this._getClassBreaks(t, [
        [56, 168, 0],
        [139, 309, 0],
        [255, 255, 0],
        [255, 128, 0],
        [255, 0, 0],
      ]),
    };
  }
  _createSimpleScalarRenderer() {
    return {
      defaultSymbol: Me.fromJSON({
        imageData:
          "iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAQAAABLVLlLAAAABGdBTUEAAYagMeiWXwAAAAJiS0dEAACqjSMyAAAACXBIWXMAAABIAAAASABGyWs+AAAC3ElEQVRIx9XXvW4cVRQH8N982btpsIREJECyiCXsxX4DKh6AliqGKCBBE2SlwlHgAbBD/AKmyEYUeQ1KahPZSZQvBCkQLTHZ7KGY8Xodz4w3a1NwbzVzz/znfJ//zbStVC5q3icKak9GAs2QIdDx3PtW/S011NW3p+M5Eomh11ipTIKe6+4LQzHaQ+G+63pIZNJJQXMpljwTwj1brpgx5w1zZlyx5Z4QnllEIm2xeeSUHBf0hV0bejo1Uh09G3aFvgXk7cCJFBc9EdaRVuHJJaOdKyTV2TVhYLMduNR0Q9gxL5GaaTDw8GzejrDRBpxWoGsySRW0dttKuattwNkIlFw2YXgzOdYq4Ox49PlM+JrKd5OusjTWhBuVxUfMX/KXXZ3WEmkuqa67wspR4BTbwtKr/5u4fFgStse/T7EifFPnnYl9zPq4vmUOPrRndgoHjDti1gOPqlyXoifcRNGQzUd31lDyfHmob1Gp35vSr+P6vilcQ5Egtyd8YF/ySg9NhPM+9M/IOaHwp5+PSZayXTvCogEUwlatC3J8LLwYtcWB8EuDXQVuCkV5/B4eNHb7wGBs87LBDS+xjdVSn09wq1G8dFM+9tSUhIGneLvUdniKxKpTYljCpu3j7rVWlHj/P23v4NPGUEyeCQnexe9lJjzEQqMjJs+EzNAX6B98dBZVRmroJx95x/A/6gln18EyfCUsl+qdXb/tjvfbw+mwforpUOBz4XLVoBwAn3aWnfeH246NyBXhrq7TTN5lNSP9RkU+puUJm3W2Tsdq0nZWM07srk7MwQrZSRysjjGWBLRJNsNbfj2JMR4AbxpU1XLAb9Mxfpsq5EjMuuiR8L0JiHOOBX3hiUvOmavN0nMueSzcceFk0BK4pMqLo7vDD1Z0qrtDx7Itt4Xwm9UqbMmk8S0Dtuzb2pvOU99Z1nLTOfleNmvfZfP2pYZmPfajwosKdDBNpacNpVGGsWX9CyDI8Xq/Sj6QAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE0LTExLTEwVDAzOjE3OjU4LTA1OjAwF+tHyQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0xMS0xMFQwMzoxNzo1OC0wNTowMGa2/3UAAAAASUVORK5CYII=",
        height: 20,
        width: 20,
        type: "esriPMS",
        angle: 0,
      }),
    };
  }
  _createWindBarbsRenderer() {
    const e = Array.from(Array(31).keys()).map((r) => 5 * r),
      t = [
        {
          range: "0-5",
          path: "M20 20 M5 20 A15 15 0 1 0 35 20 A15 15 0 1 0 5 20 M20 20 M10 20 A10 10 0 1 0 30 20 A10 10 0 1 0 10 20",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTIwIDIwIE01IDIwIEExNSAxNSAwIDEgMCAzNSAyMCBBMTUgMTUgMCAxIDAgNSAyMCBNMjAgMjAgTTEwIDIwIEExMCAxMCAwIDEgMCAzMCAyMCBBMTAgMTAgMCAxIDAgMTAgMjAiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=",
        },
        {
          range: "5-10",
          path: "M25 0 L25 40 M25 35 L17.5 37.5",
          imageData:
            "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=",
        },
        {
          range: "10-15",
          path: "M25 0 L25 40 L10 45 L25 40",
          imageData:
            "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==",
        },
        {
          range: "15-20",
          path: "M25 0 L25 40 L10 45 L25 40 M25 35 L17.5 37.5",
          imageData:
            "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjEyIDAgMTUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=",
        },
        {
          range: "20-25",
          path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40",
          imageData:
            "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+",
        },
        {
          range: "25-30",
          path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L17.5 32.5",
          imageData:
            "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIEwyNSAzNSBNMjUgMzAgTDE3LjUgMzIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==",
        },
        {
          range: "30-35",
          path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==",
        },
        {
          range: "35-40",
          path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=",
        },
        {
          range: "40-45",
          path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==",
        },
        {
          range: "45-50",
          path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=",
        },
        {
          range: "50-55",
          path: "M25 0 L25 40 L10 40 L25 35",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=",
        },
        {
          range: "55-60",
          path: "M25 0 L25 40 L10 40 L25 35 M25 30 L17.5 32.5",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxNy41IDMyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=",
        },
        {
          range: "60-65",
          path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==",
        },
        {
          range: "65-70",
          path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=",
        },
        {
          range: "70-75",
          path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==",
        },
        {
          range: "75-80",
          path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=",
        },
        {
          range: "80-85",
          path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==",
        },
        {
          range: "85-90",
          path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L17.5 17.5",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxNy41IDE3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=",
        },
        {
          range: "90-95",
          path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==",
        },
        {
          range: "95-100",
          path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20 L25 15 M25 10 L17.5 12.5",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCBMMjUgMTUgTTI1IDEwIEwxNy41IDEyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=",
        },
        {
          range: "100-105",
          path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==",
        },
        {
          range: "105-110",
          path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L17.5 27.5",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDE3LjUgMjcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==",
        },
        {
          range: "110-115",
          path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+",
        },
        {
          range: "115-120",
          path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L17.5 22.5",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDE3LjUgMjIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==",
        },
        {
          range: "120-125",
          path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+",
        },
        {
          range: "125-130",
          path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L17.5 17.5",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDE3LjUgMTcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==",
        },
        {
          range: "130-135",
          path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+",
        },
        {
          range: "135-140",
          path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDE3LjUgMTIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==",
        },
        {
          range: "140-145",
          path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+",
        },
        {
          range: "145-150",
          path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",
          imageData:
            "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IE0yNSAxMCBNMjUgNSBMMTcuNSA3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=",
        },
      ],
      a = Me.fromJSON({
        imageData:
          "iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAQAAADtq6NDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEY0lEQVRIx5XXWWxWRRQH8N+d+31tUdGAVjGglYJABFEBY91jfDAg7piYaFTccA++uMQEFRcSXlATtxiXqMQt4G4iisYl0ai4sIQYtVFZ1KIFKdTS0l4f7vRCS5fPebozc+bM/2z/Mzcx0AgSiUxXnKfIdMn875FIhX53U2n/B/s+kKM4UINTjTBZImixxnrv+9a2iL6zEoUBXcoudrWj/OtHm3wt02lfU9Qao9OnHvIhgmww84MEl1qnxfNmGrqHxAizLdPpC6chGcAxKGGcL+30gOERf1BSpUqVslQSV8d5ReZFe8VQ9avufJn31cWwlJV7iafKStGOE/1qvfH9qUxxu8ydUdmuSKbGO8YUdT2inKLG69pM70tliktl5qIkCAJGmusDG7Vqsc0WjZa4UBlBiA5YZIcjYzB7qDtH5kaUJFLs7RGZTZ42W4PRRmtwvbdt1+wGiaS4drEtDttdZYIDNVuAclR3vA3+dI3qHqmVSy7U6Tv1MScCPvPR7nIpFlsdCy3FdTLPGhK92e2CUITjMJ9ocwKxnsZqc3O3JwMma3d6UVLnyVxB4aXemZqvPqLdpJhW3KVVbY4yYImPo6M5Urv50fj+0z/FG9YaEiENs8UtMfXUaTeTePNHlhXfA1UU+2lyD1Il3Gtt9+adfpNG7dNlpg2U/T3KYLZ2dUWFdTgp3/rQ4sK973qnInV5TIf40x3dhvrJPBiqyWUo4wAtLqhQYS71qK+QKOFRywmGK/kpikzV6WMKhh58vGWs4TIJNjiEYLIuP8Tt4/zmLyqk+AyrJSbF+Qq1DgqRUPMxyl+9q3IQhX/rMCJ6tEunriDs1oSyQZKlr9AkhT2ZIARbJfaJS1vtVbHB+Rgi0RK/y1q1BWsEEyLoz40xtGKcARPVWB1BTPO7f4LNtpkUl1aoMbViLyZo0GRjPD3BxnxjqXeLYlvhqYrzMMG3HoyJXa3JjfnGlbYYFlP7Jh3qKsKY4hQ7TY0nG+xwRL61n63mxHtqNHosigyMLmClNwvuecFnOZB88nNBDzNkzhxEZaKMBVoKapggMzvHHXBEpNSSFAvtcFRsVn0bW8LlMmcXs+c0Kne3gRR32+zg4uXwjC6zit6Wt4a8LXVfcp/MtQXHn2ynGbuCmb8GvvFeJLEE82ReU9/n6+dkq2x3buG9Wn94smcgAw631RPR7BTH+kbmHReZoEpOdEe7zWqZl40s0JWs9Hmv7hjBHqPDwsjGKVJnWWqjbdZp1KhJi0aPmxYZsIRhlttgeF+Jlke41QcOQKoqilSb6HJzSvNG3G/UoWnxwsmt+sVaYwd63dRbqdnMyCPVeyRPvpYgdavM22oGKoMUVRbJfOWMwidJ8Zzb1UvmWK/VVUXzHaTjjrVYh1897HT7xxYEVUaa5SWb/WO+YUWa9SrwvigzM8YlzlYv2GSdVCYxxlBtVnnFq5olwp5/BEk/OLsf5LUmG2+inRJdVvjZ97ZH9/zP34ug1O91pf4p+D+JYBpvrKxfbwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNC0xMS0xMFQwMzoxMjowOS0wNTowMB9ViV0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTQtMTEtMTBUMDM6MTI6MDktMDU6MDBuCDHhAAAAAElFTkSuQmCC",
        height: 20,
        width: 20,
        type: "esriPMS",
        angle: 0,
      }),
      i = e.map((r, o) => {
        let n;
        if (o !== e.length - 1)
          if (o === 0) n = { minValue: r, maxValue: e[o + 1], symbol: a };
          else {
            const c = Me.fromJSON({
              type: "esriPMS",
              imageData: t[o].imageData,
              contentType: "image/svg+xml",
              height: 32,
              width: 32,
              angle: 0,
            });
            n = { minValue: r, maxValue: e[o + 1], symbol: c };
          }
        return new Ue(n);
      });
    return { defaultSymbol: a, classBreakInfos: i };
  }
  _getClassBreaks(e, t) {
    return t.map(
      (a, i) =>
        new Ue({
          minValue: e[i],
          maxValue: e[i + 1],
          symbol: this._getDefaultSymbol(new D(a)),
        })
    );
  }
});
s(
  [M({ type: String, json: { write: !0 } })],
  j.prototype,
  "attributeField",
  void 0
),
  s(
    [
      M({
        type: te.apiValues,
        json: {
          type: te.jsonValues,
          read: { reader: te.read },
          write: { writer: te.write },
        },
      }),
    ],
    j.prototype,
    "flowRepresentation",
    void 0
  ),
  s(
    [M({ type: ["geographic", "arithmetic"], json: { write: !0 } })],
    j.prototype,
    "rotationType",
    void 0
  ),
  s(
    [
      M({
        type: ee.apiValues,
        json: {
          type: ee.jsonValues,
          read: { reader: ee.read },
          write: { writer: ee.write },
        },
      }),
    ],
    j.prototype,
    "style",
    void 0
  ),
  s([M({ json: { write: !0 } })], j.prototype, "symbolTileSize", void 0),
  s(
    [
      M({
        type: U.apiValues,
        json: { type: U.jsonValues, write: { writer: U.write } },
      }),
    ],
    j.prototype,
    "inputUnit",
    void 0
  ),
  s([P("inputUnit")], j.prototype, "readInputUnit", null),
  s(
    [
      M({
        type: U.apiValues,
        json: {
          type: U.jsonValues,
          read: { reader: U.read },
          write: { writer: U.write },
        },
      }),
    ],
    j.prototype,
    "outputUnit",
    void 0
  ),
  s([P("outputUnit")], j.prototype, "readOutputUnit", null),
  s([W({ vectorField: "vector-field" })], j.prototype, "type", void 0),
  s([M({ type: oe })], j.prototype, "styleRenderer", null),
  s([M({ type: Xe })], j.prototype, "sizeVariables", null),
  s([M({ type: qe })], j.prototype, "rotationVariables", null),
  (j = ye = s([H("esri.renderers.VectorFieldRenderer")], j));
const je = j,
  ke = {
    key: "type",
    base: null,
    typeMap: {
      "unique-value": be,
      "class-breaks": oe,
      "raster-colormap": Ce,
      "raster-stretch": Te,
      "vector-field": je,
      "raster-shaded-relief": rt,
      flow: at,
    },
  },
  Re = { ...ke, typeMap: { ...ke.typeMap } };
delete Re.typeMap["vector-field"], delete Re.typeMap.flow;
const Ht = {
  uniqueValue: be,
  classBreaks: oe,
  rasterStretch: Te,
  rasterColormap: Ce,
  vectorField: je,
  rasterShadedRelief: rt,
  flowRenderer: at,
};
function Ft(e, t) {
  if (!e) return null;
  if (e.type === "classBreaks" && e.classificationMethod) {
    const i = e.authoringInfo || { classificationMethod: "" };
    (i.classificationMethod = e.classificationMethod), (e.authoringInfo = i);
  }
  e.type === "vectorField" &&
    e.visualVariables &&
    !Array.isArray(e.visualVariables) &&
    (e.visualVariables = [e.visualVariables]);
  const a = (function (i) {
    return (i && Ht[i.type]) || null;
  })(e);
  if (a) {
    const i = new a();
    return i.read(e, t), i;
  }
  return (
    t &&
      t.messages &&
      e &&
      t.messages.push(
        new wt(
          "renderer:unsupported",
          "Renderers of type '" + (e.type || "unknown") + "' are not supported",
          { definition: e, context: t }
        )
      ),
    null
  );
}
var we;
const ae = new Set(["raster", "raster2", "dem", "fillraster"]),
  ie = new Set(["rasters"]),
  Ee = (e) => (e && e.rasterFunction ? S.fromJSON(e) : e),
  de = (e) => (e && e instanceof S ? e.toJSON() : e),
  he = (e) => (e == null ? void 0 : e.functionName) && !e.declaredClass,
  Pe = (e) => (he(e) ? new S(e) : e);
let S = (we = class extends Z {
  constructor(e) {
    super(e),
      (this.functionName = null),
      (this.outputPixelType = "unknown"),
      (this.variableName = null),
      (this.rasterFunctionDefinition = null);
  }
  set functionArguments(e) {
    if (e) {
      const t = Object.keys(e);
      if (
        t.some((a) => ae.has(a.toLowerCase()) && he(e[a])) ||
        t.some(
          (a) =>
            ie.has(a.toLowerCase()) &&
            Array.isArray(e[a]) &&
            e[a].some((i) => he(i))
        )
      ) {
        e = B(e);
        for (const a of t)
          ae.has(a.toLowerCase())
            ? (e[a] = Pe(e[a]))
            : ie.has(a.toLowerCase()) &&
              Array.isArray(e[a]) &&
              (e[a] = e[a].map((i) => Pe(i)));
      }
    }
    this._set("functionArguments", e);
  }
  readFunctionArguments(e) {
    return ((t) => {
      if (t == null) return null;
      t = B(t);
      const a = {};
      for (const i of Object.keys(t))
        ae.has(i.toLowerCase())
          ? (a[i] = Ee(t[i]))
          : ie.has(i.toLowerCase()) && Array.isArray(t[i])
          ? (a[i] = t[i].map(Ee))
          : (a[i] = t[i]);
      return a;
    })(e);
  }
  writeFunctionArguments(e, t, a) {
    const i = {};
    for (const r of Object.keys(e))
      ae.has(r.toLowerCase())
        ? (i[r] = de(e[r]))
        : ie.has(r.toLowerCase()) && Array.isArray(e[r])
        ? (i[r] = e[r].map(de))
        : (i[r] = de(e[r]));
    t[a] = i;
  }
  readFunctionName(e, t) {
    const a = t.rasterFunctionInfos;
    return (
      t.name ||
      (a && a.length && a[0].name !== "None"
        ? a[0].name
        : t.rasterFunctionDefinition
        ? t.rasterFunctionDefinition.name
        : t.rasterFunction)
    );
  }
  clone() {
    return new we({
      functionName: this.functionName,
      functionArguments: B(this.functionArguments),
      outputPixelType: this.outputPixelType,
      variableName: this.variableName,
      rasterFunctionDefinition: B(this.rasterFunctionDefinition),
    });
  }
});
s(
  [M({ json: { type: Object, name: "rasterFunctionArguments" } })],
  S.prototype,
  "functionArguments",
  null
),
  s([P("functionArguments")], S.prototype, "readFunctionArguments", null),
  s([Qe("functionArguments")], S.prototype, "writeFunctionArguments", null),
  s(
    [M({ json: { type: String, write: { target: "rasterFunction" } } })],
    S.prototype,
    "functionName",
    void 0
  ),
  s(
    [
      P("functionName", [
        "rasterFunction",
        "rasterFunctionInfos",
        "rasterFunctionDefinition",
      ]),
    ],
    S.prototype,
    "readFunctionName",
    null
  ),
  s(
    [
      W(
        {
          C128: "c128",
          C64: "c64",
          F32: "f32",
          F64: "f64",
          S16: "s16",
          S32: "s32",
          S8: "s8",
          U1: "u1",
          U16: "u16",
          U2: "u2",
          U32: "u32",
          U4: "u4",
          U8: "u8",
          UNKNOWN: "unknown",
        },
        { ignoreUnknown: !1 }
      ),
      M({ json: { default: "unknown" } }),
    ],
    S.prototype,
    "outputPixelType",
    void 0
  ),
  s(
    [M({ type: String, json: { read: !0, write: !0 } })],
    S.prototype,
    "variableName",
    void 0
  ),
  s(
    [M({ type: Object, json: { name: "rasterFunctionDefinition" } })],
    S.prototype,
    "rasterFunctionDefinition",
    void 0
  ),
  (S = we = s([H("esri.layers.support.RasterFunction")], S));
const Kt = S,
  Qt = $e()({
    RSP_NearestNeighbor: "nearest",
    RSP_BilinearInterpolation: "bilinear",
    RSP_CubicConvolution: "cubic",
    RSP_Majority: "majority",
  }),
  Xt = $e()({ esriNoDataMatchAny: "any", esriNoDataMatchAll: "all" });
var Ae;
const Zt = { base: At, key: "type", typeMap: { extent: ue, polygon: ft } };
let E = (Ae = class extends Z {
  constructor(e) {
    super(e), (this.areaOfInterest = null), (this.subsetDefinitions = null);
  }
  get dimensions() {
    const { subsetDefinitions: e } = this;
    if (e == null || e.length === 0) return [];
    const t = new Map();
    e.forEach((i) => {
      if (!i.dimensionName) return;
      let r, o;
      if (Array.isArray(i.values[0])) {
        const n = i.values;
        (r = n[0][0]), (o = n[i.values.length - 1][1]);
      } else {
        const n = i.values;
        (r = n[0]), (o = n[i.values.length - 1]);
      }
      if (t.has(i.dimensionName)) {
        const n = t.get(i.dimensionName);
        (n[0] = Math.min(r, n[0])), (n[1] = Math.max(o, n[1]));
      } else t.set(i.dimensionName, [r, o]);
    });
    const a = [];
    for (const i of t) a.push({ name: i[0], extent: i[1] });
    return a;
  }
  get variables() {
    const { subsetDefinitions: e } = this;
    if (e == null || e.length === 0) return [];
    const t = new Set();
    return (
      e.forEach((a) => {
        a.variableName && t.add(a.variableName);
      }),
      [...t]
    );
  }
  clone() {
    var a;
    const e =
        (a = this.subsetDefinitions) == null ? void 0 : a.map((i) => i.clone()),
      t = this.areaOfInterest
        ? this.areaOfInterest.clone()
        : this.areaOfInterest;
    return new Ae({ areaOfInterest: t, subsetDefinitions: e });
  }
});
s(
  [M({ types: Zt, json: { read: ht, write: !0 } })],
  E.prototype,
  "areaOfInterest",
  void 0
),
  s([M({ readOnly: !0 })], E.prototype, "dimensions", null),
  s([M({ readOnly: !0 })], E.prototype, "variables", null),
  s(
    [M({ type: [vt], json: { write: !0 } })],
    E.prototype,
    "subsetDefinitions",
    void 0
  ),
  (E = Ae = s([H("esri.layers.support.MultidimensionalSubset")], E));
const qt = E;
class Yt {
  constructor() {
    (this._workerThread = null), (this._destroyed = !1);
  }
  async initialize() {
    const t = await Dt("RasterWorker");
    this._destroyed ? t.close() : (this._workerThread = t);
  }
  destroy() {
    (this._destroyed = !0),
      this._workerThread &&
        (this._workerThread.close(), (this._workerThread = null));
  }
  async convertVectorFieldData(t, a) {
    if (!this._workerThread)
      throw new x(
        "raster-jobhandler:no-connection",
        "no available worker connection"
      );
    const i = await this._workerThread.invoke(
      "convertVectorFieldData",
      { pixelBlock: t.pixelBlock.toJSON(), type: t.dataType },
      a
    );
    return i ? new R(i) : null;
  }
  async decode(t, a) {
    if (!this._workerThread)
      throw new x(
        "raster-jobhandler:no-connection",
        "no available worker connection"
      );
    const i = await this._workerThread.invoke("decode", t, a);
    return i ? new R(i) : null;
  }
  async symbolize(t, a) {
    if (!this._workerThread)
      throw new x(
        "raster-jobhandler:no-connection",
        "no available worker connection"
      );
    const i = {
        extent: t.extent && t.extent.toJSON(),
        pixelBlock: w(t.pixelBlock) && t.pixelBlock.toJSON(),
        simpleStretchParams: t.simpleStretchParams,
        bandIds: t.bandIds,
      },
      r = await this._workerThread.invoke("symbolize", i, a);
    return r ? new R(r) : null;
  }
  async updateSymbolizer(t, a) {
    var r;
    if (!this._workerThread)
      throw new x(
        "raster-jobhandler:no-connection",
        "no available worker connection"
      );
    const i =
      (r = t == null ? void 0 : t.rendererJSON) == null ? void 0 : r.histograms;
    await Promise.all(
      this._workerThread.broadcast(
        "updateSymbolizer",
        { symbolizerJSON: t.toJSON(), histograms: i },
        a
      )
    );
  }
  async updateRasterFunction(t, a) {
    if (!this._workerThread)
      throw new x(
        "raster-jobhandler:no-connection",
        "no available worker connection"
      );
    await Promise.all(
      this._workerThread.broadcast(
        "updateRasterFunction",
        { rasterFunctionJSON: t.toJSON() },
        a
      )
    );
  }
  async process(t, a) {
    var r;
    if (!this._workerThread)
      throw new x(
        "raster-jobhandler:no-connection",
        "no available worker connection"
      );
    const i = await this._workerThread.invoke(
      "process",
      {
        extent: (r = t.extent) == null ? void 0 : r.toJSON(),
        primaryPixelBlocks: t.primaryPixelBlocks.map((o) =>
          w(o) ? o.toJSON() : null
        ),
        primaryRasterIds: t.primaryRasterIds,
      },
      a
    );
    return i ? new R(i) : null;
  }
  async stretch(t, a) {
    if (!this._workerThread)
      throw new x(
        "raster-jobhandler:no-connection",
        "no available worker connection"
      );
    if (!(t != null && t.pixelBlock)) return null;
    const i = {
        srcPixelBlock: t.pixelBlock.toJSON(),
        stretchParams: t.stretchParams,
      },
      r = await this._workerThread.invoke("stretch", i, a);
    return r ? new R(r) : null;
  }
  async split(t, a) {
    if (!this._workerThread)
      throw new x(
        "raster-jobhandler:no-connection",
        "no available worker connection"
      );
    if (!(t != null && t.pixelBlock)) return null;
    const i = {
        srcPixelBlock: t.pixelBlock.toJSON(),
        tileSize: t.tileSize,
        maximumPyramidLevel: t.maximumPyramidLevel,
      },
      r = await this._workerThread.invoke("split", i, a);
    return (
      r &&
        r.forEach((o, n) => {
          r.set(n, o ? R.fromJSON(o) : null);
        }),
      r
    );
  }
  async estimateStatisticsHistograms(t, a) {
    if (!this._workerThread)
      throw new x(
        "raster-jobhandler:no-connection",
        "no available worker connection"
      );
    if (!(t != null && t.pixelBlock)) return null;
    const i = { srcPixelBlock: t.pixelBlock.toJSON() };
    return await this._workerThread.invoke(
      "estimateStatisticsHistograms",
      i,
      a
    );
  }
  async mosaicAndTransform(t, a) {
    var o;
    if (!this._workerThread)
      throw new x(
        "raster-jobhandler:no-connection",
        "no available worker connection"
      );
    if (!((o = t == null ? void 0 : t.srcPixelBlocks) != null && o.length))
      return { pixelBlock: null };
    const i = {
        ...t,
        srcPixelBlocks: t.srcPixelBlocks.map((n) => (w(n) ? n.toJSON() : null)),
      },
      r = await this._workerThread.invoke("mosaicAndTransform", i, a);
    return {
      pixelBlock: r.pixelBlock ? new R(r.pixelBlock) : null,
      localNorthDirections: r.localNorthDirections,
    };
  }
  async createFlowMesh(t, a) {
    if (!this._workerThread)
      throw new x(
        "raster-jobhandler:no-connection",
        "no available worker connection"
      );
    const i = {
        buffer: t.flowData.data.buffer,
        maskBuffer: t.flowData.mask.buffer,
        width: t.flowData.width,
        height: t.flowData.height,
      },
      { meshType: r, simulationSettings: o } = t,
      n = await this._workerThread.invoke(
        "createFlowMesh",
        { meshType: r, flowData: i, simulationSettings: o },
        { ...a, transferList: [i.buffer, i.maskBuffer] }
      );
    return {
      vertexData: new Float32Array(n.vertexBuffer),
      indexData: new Uint32Array(n.indexBuffer),
    };
  }
  getProjectionOffsetGrid(t, a) {
    if (!this._workerThread)
      throw new x(
        "raster-jobhandler:no-connection",
        "no available worker connection"
      );
    const i = w(t.datumTransformation)
        ? t.datumTransformation.steps.map((n) => ({
            wkid: n.wkid,
            wkt: n.wkt,
            isInverse: n.isInverse,
          }))
        : null,
      r = w(t.rasterTransform) ? t.rasterTransform.toJSON() : null,
      o = {
        projectedExtent: t.projectedExtent.toJSON(),
        srcBufferExtent: t.srcBufferExtent.toJSON(),
        pixelSize: t.pixelSize,
        hasWrapAround: t.hasWrapAround,
        spacing: t.spacing,
        datumTransformationSteps: i,
        rasterTransform: r,
        isAdaptive: t.isAdaptive,
        includeGCSGrid: t.includeGCSGrid,
      };
    return this._workerThread.invoke("getProjectionOffsetGrid", o, a);
  }
}
const kt = 0.25,
  Rt = et.fromJSON({
    type: "multipart",
    colorRamps: [
      { fromColor: [0, 0, 255], toColor: [0, 255, 255] },
      { fromColor: [0, 255, 255], toColor: [255, 255, 0] },
      { fromColor: [255, 255, 0], toColor: [255, 0, 0] },
    ],
  }),
  Ge = et.fromJSON(Ut[0]),
  Ve = new Set([
    "scientific",
    "standard-time",
    "vector-uv",
    "vector-magdir",
    "vector-u",
    "vector-v",
    "vector-magnitude",
    "vector-direction",
  ]);
function $t(e, t) {
  const { attributeTable: a, colormap: i } = e;
  if (fe(e)) {
    const r = (function (o) {
      if (!fe(o)) return null;
      let n;
      if (
        w(o.statistics) &&
        o.statistics.length &&
        (o.dataType === "vector-magdir" || o.dataType === "vector-uv")
      ) {
        const { minMagnitude: l, maxMagnitude: m } = (function (g, p) {
          let y, I;
          if (g === "vector-magdir") (y = p[0].min), (I = p[0].max);
          else {
            const d = p[0].min,
              A = p[0].max,
              L = p[1].min,
              b = p[1].max;
            (y = 0),
              (I = Math.max(
                Math.abs(d),
                Math.abs(L),
                Math.abs(A),
                Math.abs(b)
              ));
          }
          return { minMagnitude: y, maxMagnitude: I };
        })(o.dataType, o.statistics);
        n = [
          {
            type: "size",
            field: "Magnitude",
            minSize: 10,
            maxSize: 40,
            minDataValue: l,
            maxDataValue: m,
          },
        ];
      }
      const c = w(o.multidimensionalInfo)
          ? Gt.get(o.multidimensionalInfo.variables[0].unit)
          : null,
        u = new je({
          visualVariables: n,
          inputUnit: c,
          rotationType: "geographic",
        });
      return (
        (u.visualVariables = [...u.sizeVariables, ...u.rotationVariables]), u
      );
    })(e);
    if (w(r)) return r;
  }
  if (w(i)) {
    const r = (function (o) {
      if (!ot(o)) return null;
      let n;
      const { attributeTable: c, colormap: u } = o;
      if (w(c)) {
        const l = Q(c, "value"),
          m = We(c, null, !0);
        m.type === "string" &&
          ((n = {}),
          c.features.forEach((g) => {
            const p = g.attributes;
            n[p[l.name]] = m ? p[m.name] : p[l.name];
          }));
      }
      return Ce.createFromColormap(X(u), n);
    })(e);
    if (w(r)) return r;
  }
  if (w(a)) {
    const r = (function (o, n, c, u) {
      if (!nt(o, n)) return null;
      const { attributeTable: l, statistics: m } = o,
        g = We(l, n),
        p = Q(l, "red"),
        y = Q(l, "green"),
        I = Q(l, "blue"),
        d = new _e(),
        A = [],
        L = new Set(),
        b = !!(p && y && I);
      if (w(l))
        l.features.forEach((h) => {
          const C = h.attributes[g.name];
          if (!L.has(h.attributes[g.name]) && C != null) {
            L.add(C);
            const z =
                b &&
                (p.type === "single" || p.type === "double") &&
                (y.type === "single" || y.type === "double") &&
                (I.type === "single" || I.type === "double") &&
                !l.features.some(
                  (J) =>
                    J.attributes[p.name] > 1 ||
                    J.attributes[y.name] > 1 ||
                    J.attributes[I.name] > 1
                ),
              k = z ? 255 : 1;
            A.push(
              new He({
                value: h.attributes[g.name],
                label: h.attributes[g.name] + "",
                symbol: {
                  type: "simple-fill",
                  style: "solid",
                  outline: null,
                  color: new D(
                    b
                      ? [
                          h.attributes[p.name] * k,
                          h.attributes[y.name] * k,
                          h.attributes[I.name] * k,
                          1,
                        ]
                      : [0, 0, 0, 0]
                  ),
                },
              })
            );
          }
        });
      else if (m != null && m[0])
        for (let h = m[0].min; h <= m[0].max; h++)
          A.push(
            new He({
              value: h,
              label: h.toString(),
              symbol: {
                type: "simple-fill",
                style: "solid",
                outline: null,
                color: new D([0, 0, 0, 0]),
              },
            })
          );
      if (
        (A.sort((h, C) =>
          h.value && typeof h.value.valueOf() == "string"
            ? 0
            : h.value > C.value
            ? 1
            : -1
        ),
        !b)
      ) {
        const h = ge(Ge, { numColors: A.length });
        A.forEach((C, z) => (C.symbol.color = new D(h[z].slice(1, 4)))),
          (d.colorRamp = Ge);
      }
      if (c || u) {
        const h = c || ge(u, { numColors: A.length }).map((C) => C.slice(1));
        A.forEach((C, z) => (C.symbol.color = new D(h[z]))), (d.colorRamp = u);
      }
      return new be({ field: g.name, uniqueValueInfos: A, authoringInfo: d });
    })(e);
    if (w(r)) return r;
  }
  return (function (r, o) {
    r = Et(r, o == null ? void 0 : o.variableName);
    const { bandCount: n } = r;
    let { bandIds: c, stretchType: u } = o || {};
    c != null && c.some((d) => d >= n) && (c = null);
    let l = X(r.statistics),
      m = X(r.histograms);
    n > 1
      ? ((c = c != null && c.length ? c : Pt(r)),
        (l = l == null ? null : c == null ? void 0 : c.map((d) => l[d])),
        (m = m == null ? null : c == null ? void 0 : c.map((d) => m[d])))
      : (c = [0]),
      u == null &&
        (u = (function (d) {
          let A = "percent-clip";
          const {
              pixelType: L,
              dataType: b,
              histograms: h,
              statistics: C,
              multidimensionalInfo: z,
            } = d,
            k = Ve.has(b) || (b === "generic" && w(z));
          return (
            L !== "u8" || (b !== "processed" && w(h) && w(C))
              ? L === "u8" || b === "elevation" || k
                ? (A = "min-max")
                : w(h)
                ? (A = "percent-clip")
                : w(C) && (A = "min-max")
              : (A = "none"),
            A
          );
        })(r));
    let g = !1;
    switch (u) {
      case "none":
        g = !1;
        break;
      case "percent-clip":
        g = !(m != null && m.length);
        break;
      default:
        g = !(l != null && l.length);
    }
    const { dataType: p } = r,
      y = (c == null ? void 0 : c.length) === 1 && Ve.has(p) ? Rt : null,
      I = new Te({
        stretchType: u,
        dynamicRangeAdjustment: g,
        colorRamp: y,
        outputMin: 0,
        outputMax: 255,
        gamma: (c == null ? void 0 : c.length) === 1 ? [1] : [1, 1, 1],
        useGamma: !1,
      });
    return (
      u === "percent-clip"
        ? (I.maxPercent = I.minPercent = kt)
        : u === "standard-deviation" && (I.numberOfStandardDeviations = 2),
      g ||
        (!w(r.multidimensionalInfo) &&
          !(o != null && o.includeStatisticsInStretch)) ||
        (u === "percent-clip"
          ? (I.histograms = m)
          : (u !== "min-max" && u !== "standard-deviation") ||
            (I.statistics = l)),
      I
    );
  })(e, t);
}
function ea(e, t = !1) {
  const a = ["raster-stretch"];
  return (
    ot(e) && a.push("raster-colormap"),
    nt(e) && a.push("unique-value"),
    (function (i, r = !1) {
      const { attributeTable: o, bandCount: n } = i;
      return n === 1 && (!r || w(o) || w(i.histograms));
    })(e, t) && a.push("class-breaks"),
    (function (i) {
      const { bandCount: r, dataType: o, pixelType: n } = i;
      return (
        o === "elevation" ||
        (o === "generic" &&
          r === 1 &&
          (n === "s16" || n === "s32" || n === "f32" || n === "f64"))
      );
    })(e) && a.push("raster-shaded-relief"),
    fe(e) && a.push("vector-field"),
    (function (i) {
      const { dataType: r } = i;
      return r === "vector-uv" || r === "vector-magdir";
    })(e) && a.push("flow"),
    a
  );
}
function ta(e, t, a) {
  const i = ["nearest", "bilinear", "cubic", "majority"].find(
    (r) => r === (a == null ? void 0 : a.toLowerCase())
  );
  return t === "Map"
    ? i ?? "bilinear"
    : e.dataType === "standard-time"
    ? i ?? "nearest"
    : e.dataType === "thematic" || e.attributeTable || e.colormap
    ? i === "nearest" || i === "majority"
      ? i
      : "nearest"
    : i ?? "bilinear";
}
function Et(e, t) {
  if (!t) return e;
  let a = X(e.statistics),
    i = X(e.histograms);
  const { multidimensionalInfo: r } = e;
  if (t && w(r)) {
    const o = r.variables.find((n) => n.name === t);
    if (o) {
      const { statistics: n, histograms: c } = o;
      n != null && n.length && (a = n), c != null && c.length && (i = c);
    }
  }
  return tt.fromJSON({ ...e.toJSON(), statistics: a, histograms: i });
}
function Pt(e) {
  const t = e.bandCount;
  if (t === 1) return null;
  if (t === 2) return [0];
  const a = e.keyProperties && e.keyProperties.BandProperties;
  let i;
  if (a && a.length === t) {
    const {
      red: r,
      green: o,
      blue: n,
      nir: c,
    } = (function (u) {
      var m;
      const l = {};
      for (let g = 0; g < u.length; g++) {
        const p = u[g],
          y = (m = p.BandName) == null ? void 0 : m.toLowerCase();
        if (y === "red") l.red = g;
        else if (y === "green") l.green = g;
        else if (y === "blue") l.blue = g;
        else if (y === "nearinfrared" || y === "nearinfrared_1" || y === "nir")
          l.nir = g;
        else if (p.WavelengthMax && p.WavelengthMin) {
          const I = p.WavelengthMin,
            d = p.WavelengthMax;
          l.blue == null && I >= 410 && I <= 480 && d >= 480 && d <= 540
            ? (l.blue = g)
            : l.green == null && I >= 490 && I <= 560 && d >= 560 && d <= 610
            ? (l.green = g)
            : l.red == null && I >= 595 && I <= 670 && d >= 660 && d <= 730
            ? (l.red = g)
            : l.nir == null &&
              I >= 700 &&
              I <= 860 &&
              d >= 800 &&
              d <= 950 &&
              (l.nir = g);
        }
      }
      return l;
    })(a);
    r != null && o != null && n != null
      ? (i = [r, o, n])
      : c != null && r != null && o != null && (i = [c, r, o]);
  }
  return !i && t >= 3 && (i = [0, 1, 2]), i;
}
function We(e, t, a) {
  let i;
  return (
    w(e)
      ? ((i = t
          ? e.fields.find((r) => t.toLowerCase() === r.name.toLowerCase())
          : (function (r) {
              let o;
              for (let n = 0; n < r.length; n++) {
                const c = r[n].name.toLowerCase();
                if (r[n].type === "string") {
                  if (c.startsWith("class")) {
                    o = r[n];
                    break;
                  }
                  o == null &&
                    (c.endsWith("name") || c.endsWith("type")) &&
                    (o = r[n]);
                }
              }
              return o;
            })(e.fields)),
        i ||
          (a || (i = e.fields.find((r) => r.type === "string")),
          i || (i = Q(e, "value"))))
      : (i = new bt({ name: "value" })),
    i
  );
}
function Q(e, t) {
  return ne(e) ? null : e.fields.find((a) => a.name.toLowerCase() === t);
}
function nt(e, t) {
  const { attributeTable: a, bandCount: i } = e;
  return (
    !(
      !ne(a) ||
      !(function (r) {
        var o, n, c;
        return (
          ["u8", "s8"].includes(r.pixelType) &&
          ((n = (o = r.statistics) == null ? void 0 : o[0]) == null
            ? void 0
            : n.min) != null &&
          ((c = r.statistics[0]) == null ? void 0 : c.max) != null &&
          r.bandCount === 1
        );
      })(e)
    ) ||
    (!(ne(a) || i > 1) &&
      (!t ||
        a.fields.find((r) => r.name.toLowerCase() === t.toLowerCase()) != null))
  );
}
function ot(e) {
  const { bandCount: t, colormap: a } = e;
  return w(a) && a.length > 0 && t === 1;
}
function fe(e) {
  const { dataType: t } = e;
  return t === "vector-uv" || t === "vector-magdir";
}
const Gt = new Map([
  ["m/s", "meter-per-second"],
  ["km/h", "kilometer-per-hour"],
  ["knots", "knots"],
  ["ft/s", "feet-per-second"],
  ["mph", "mile-per-hour"],
]);
function Je(e) {
  var t;
  return {
    color: (t = e.symbolLayers[0].material) == null ? void 0 : t.color,
    type: "esriSFS",
    style: "esriSFSSolid",
  };
}
function aa(e) {
  var t, a, i;
  if (e.type === "uniqueValue") {
    const r = e.uniqueValueInfos,
      o = r == null ? void 0 : r[0].symbol;
    return (
      (t = o == null ? void 0 : o.symbolLayers) != null &&
        t.length &&
        (e.uniqueValueInfos =
          r == null
            ? void 0
            : r.map((n) => ({
                value: n.value,
                label: n.label,
                symbol: n.symbol ? Je(n.symbol) : null,
              }))),
      e
    );
  }
  if (e.type === "classBreaks") {
    const r = e.classBreakInfos;
    return (
      (i = (a = r[0].symbol) == null ? void 0 : a.symbolLayers) != null &&
        i.length &&
        (e.classBreakInfos = r.map((o) => ({
          classMinValue: o.classMinValue,
          classMaxValue: o.classMaxValue,
          label: o.label,
          symbol: o.symbol ? Je(o.symbol) : null,
        }))),
      e
    );
  }
  return e;
}
async function st(e, t, a) {
  var Le, Se, ve, Ne, xe, Be;
  const i = Ct(e),
    { renderingRule: r, sourceJSON: o } = t || {},
    n = r ? JSON.stringify(r.rasterFunctionDefinition || r) : null,
    c = Tt({ ...i.query, renderingRule: n, f: "json" }),
    u = jt(c, a);
  e = i.path;
  const l = o || (await G(e, u).then((v) => v.data)),
    m = l.hasRasterAttributeTable ? G(`${e}/rasterAttributeTable`, u) : null,
    g = l.hasColormap ? G(`${e}/colormap`, u) : null,
    p = l.hasHistograms ? G(`${e}/histograms`, u) : null,
    y = l.currentVersion >= 10.3 ? G(`${e}/keyProperties`, u) : null,
    I = l.hasMultidimensions ? G(`${e}/multidimensionalInfo`, u) : null,
    d = await Promise.allSettled([m, g, p, y, I]);
  let A = null;
  if (l.minValues && l.minValues.length === l.bandCount) {
    A = [];
    for (let v = 0; v < l.minValues.length; v++)
      A.push({
        min: l.minValues[v],
        max: l.maxValues[v],
        avg: l.meanValues[v],
        stddev: l.stdvValues[v],
      });
  }
  const L = ue.fromJSON(l.extent),
    b = Math.ceil(L.width / l.pixelSizeX - 0.1),
    h = Math.ceil(L.height / l.pixelSizeY - 0.1),
    C = Lt.fromJSON(l.spatialReference || l.extent.spatialReference),
    z =
      d[0].status === "fulfilled" && d[0].value
        ? St.fromJSON(d[0].value.data)
        : null,
    k =
      d[1].status === "fulfilled"
        ? (Le = d[1].value) == null
          ? void 0
          : Le.data.colormap
        : null,
    J =
      d[2].status === "fulfilled"
        ? (Se = d[2].value) == null
          ? void 0
          : Se.data.histograms
        : null,
    O =
      d[3].status === "fulfilled"
        ? ((ve = d[3].value) == null ? void 0 : ve.data) ?? {}
        : {},
    _ =
      d[4].status === "fulfilled"
        ? (Ne = d[4].value) == null
          ? void 0
          : Ne.data.multidimensionalInfo
        : null;
  (xe = _ == null ? void 0 : _.variables) != null &&
    xe.length &&
    _.variables.forEach((v) => {
      var ze;
      (ze = v.statistics) != null &&
        ze.length &&
        v.statistics.forEach((Y) => {
          (Y.avg = Y.mean), (Y.stddev = Y.standardDeviation);
        });
    });
  const { defaultVariable: se, serviceDataType: q } = l;
  se && se !== O.DefaultVariable && (O.DefaultVariable = se),
    q &&
      q.includes("esriImageServiceDataTypeVector") &&
      !q.includes(O.DataType) &&
      (O.DataType = q.replace("esriImageServiceDataType", ""));
  let le = l.noDataValue;
  return (
    (Be = l.noDataValues) != null &&
      Be.length &&
      l.noDataValues.some((v) => v !== le) &&
      (le = l.noDataValues),
    new tt({
      width: b,
      height: h,
      bandCount: l.bandCount,
      extent: ue.fromJSON(l.extent),
      spatialReference: C,
      pixelSize: new Ye({
        x: l.pixelSizeX,
        y: l.pixelSizeY,
        spatialReference: C,
      }),
      pixelType: l.pixelType.toLowerCase(),
      statistics: A,
      attributeTable: z,
      colormap: k,
      histograms: J,
      keyProperties: O,
      noDataValue: le,
      multidimensionalInfo: _,
    })
  );
}
function ia(e, t, a) {
  return st(e, { sourceJSON: t }, a);
}
function ra(e, t, a) {
  return st(e, { renderingRule: t }, a);
}
export {
  aa as $,
  Pt as L,
  Et as S,
  ta as V,
  Ft as a,
  qt as c,
  Re as d,
  ra as f,
  Xt as i,
  $t as j,
  ea as k,
  ke as l,
  ia as m,
  Yt as n,
  Qt as o,
  Kt as w,
};
