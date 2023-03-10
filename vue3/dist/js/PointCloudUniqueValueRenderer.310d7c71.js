import {
  ae as e,
  af as t,
  ag as i,
  dd as f,
  d0 as R,
  ei as m,
  ef as D,
  bO as o,
  cc as I,
  gO as N,
  gP as O,
  gQ as K,
} from "./index.8fd7165c.js";
var w;
let c = (w = class extends f {
  constructor() {
    super(...arguments),
      (this.field = null),
      (this.minValue = 0),
      (this.maxValue = 255);
  }
  clone() {
    return new w({
      field: this.field,
      minValue: this.minValue,
      maxValue: this.maxValue,
    });
  }
});
e([t({ type: String, json: { write: !0 } })], c.prototype, "field", void 0),
  e(
    [t({ type: Number, nonNullable: !0, json: { write: !0 } })],
    c.prototype,
    "minValue",
    void 0
  ),
  e(
    [t({ type: Number, nonNullable: !0, json: { write: !0 } })],
    c.prototype,
    "maxValue",
    void 0
  ),
  (c = w = e([i("esri.renderers.support.pointCloud.ColorModulation")], c));
const k = c,
  v = new R({
    pointCloudFixedSizeAlgorithm: "fixed-size",
    pointCloudSplatAlgorithm: "splat",
  });
let b = class extends f {};
e(
  [
    t({
      type: v.apiValues,
      readOnly: !0,
      nonNullable: !0,
      json: { type: v.jsonValues, read: !1, write: v.write },
    }),
  ],
  b.prototype,
  "type",
  void 0
),
  (b = e([i("esri.renderers.support.pointCloud.PointSizeAlgorithm")], b));
const P = b;
var g;
let y = (g = class extends P {
  constructor() {
    super(...arguments),
      (this.type = "fixed-size"),
      (this.size = 0),
      (this.useRealWorldSymbolSizes = null);
  }
  clone() {
    return new g({
      size: this.size,
      useRealWorldSymbolSizes: this.useRealWorldSymbolSizes,
    });
  }
});
e(
  [m({ pointCloudFixedSizeAlgorithm: "fixed-size" })],
  y.prototype,
  "type",
  void 0
),
  e(
    [t({ type: Number, nonNullable: !0, json: { write: !0 } })],
    y.prototype,
    "size",
    void 0
  ),
  e(
    [t({ type: Boolean, json: { write: !0 } })],
    y.prototype,
    "useRealWorldSymbolSizes",
    void 0
  ),
  (y = g =
    e([i("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")], y));
const B = y;
var V;
let h = (V = class extends P {
  constructor() {
    super(...arguments), (this.type = "splat"), (this.scaleFactor = 1);
  }
  clone() {
    return new V({ scaleFactor: this.scaleFactor });
  }
});
e([m({ pointCloudSplatAlgorithm: "splat" })], h.prototype, "type", void 0),
  e(
    [t({ type: Number, value: 1, nonNullable: !0, json: { write: !0 } })],
    h.prototype,
    "scaleFactor",
    void 0
  ),
  (h = V =
    e([i("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")], h));
const q = { key: "type", base: P, typeMap: { "fixed-size": B, splat: h } },
  T = D()({
    pointCloudClassBreaksRenderer: "point-cloud-class-breaks",
    pointCloudRGBRenderer: "point-cloud-rgb",
    pointCloudStretchRenderer: "point-cloud-stretch",
    pointCloudUniqueValueRenderer: "point-cloud-unique-value",
  });
let s = class extends f {
  constructor(d) {
    super(d),
      (this.type = void 0),
      (this.pointSizeAlgorithm = null),
      (this.colorModulation = null),
      (this.pointsPerInch = 10);
  }
  clone() {
    return null;
  }
  cloneProperties() {
    return {
      pointSizeAlgorithm: o(this.pointSizeAlgorithm),
      colorModulation: o(this.colorModulation),
      pointsPerInch: o(this.pointsPerInch),
    };
  }
};
e(
  [
    t({
      type: T.apiValues,
      readOnly: !0,
      nonNullable: !0,
      json: { type: T.jsonValues, read: !1, write: T.write },
    }),
  ],
  s.prototype,
  "type",
  void 0
),
  e(
    [t({ types: q, json: { write: !0 } })],
    s.prototype,
    "pointSizeAlgorithm",
    void 0
  ),
  e(
    [t({ type: k, json: { write: !0 } })],
    s.prototype,
    "colorModulation",
    void 0
  ),
  e(
    [t({ json: { write: !0 }, nonNullable: !0, type: Number })],
    s.prototype,
    "pointsPerInch",
    void 0
  ),
  (s = e([i("esri.renderers.PointCloudRenderer")], s)),
  ((s || (s = {})).fieldTransformTypeKebabDict = new R({
    none: "none",
    lowFourBit: "low-four-bit",
    highFourBit: "high-four-bit",
    absoluteValue: "absolute-value",
    moduloTen: "modulo-ten",
  }));
const r = s;
var j;
let l = (j = class extends f {
  constructor() {
    super(...arguments),
      (this.description = null),
      (this.label = null),
      (this.minValue = 0),
      (this.maxValue = 0),
      (this.color = null);
  }
  clone() {
    return new j({
      description: this.description,
      label: this.label,
      minValue: this.minValue,
      maxValue: this.maxValue,
      color: o(this.color),
    });
  }
});
e(
  [t({ type: String, json: { write: !0 } })],
  l.prototype,
  "description",
  void 0
),
  e([t({ type: String, json: { write: !0 } })], l.prototype, "label", void 0),
  e(
    [
      t({
        type: Number,
        json: {
          read: { source: "classMinValue" },
          write: { target: "classMinValue" },
        },
      }),
    ],
    l.prototype,
    "minValue",
    void 0
  ),
  e(
    [
      t({
        type: Number,
        json: {
          read: { source: "classMaxValue" },
          write: { target: "classMaxValue" },
        },
      }),
    ],
    l.prototype,
    "maxValue",
    void 0
  ),
  e(
    [t({ type: I, json: { type: [N], write: !0 } })],
    l.prototype,
    "color",
    void 0
  ),
  (l = j = e([i("esri.renderers.support.pointCloud.ColorClassBreakInfo")], l));
const A = l;
var S;
let n = (S = class extends r {
  constructor(d) {
    super(d),
      (this.type = "point-cloud-class-breaks"),
      (this.field = null),
      (this.legendOptions = null),
      (this.fieldTransformType = null),
      (this.colorClassBreakInfos = null);
  }
  clone() {
    return new S({
      ...this.cloneProperties(),
      field: this.field,
      fieldTransformType: this.fieldTransformType,
      colorClassBreakInfos: o(this.colorClassBreakInfos),
      legendOptions: o(this.legendOptions),
    });
  }
});
e(
  [m({ pointCloudClassBreaksRenderer: "point-cloud-class-breaks" })],
  n.prototype,
  "type",
  void 0
),
  e([t({ json: { write: !0 }, type: String })], n.prototype, "field", void 0),
  e(
    [t({ type: O, json: { write: !0 } })],
    n.prototype,
    "legendOptions",
    void 0
  ),
  e(
    [
      t({
        type: r.fieldTransformTypeKebabDict.apiValues,
        json: {
          type: r.fieldTransformTypeKebabDict.jsonValues,
          read: r.fieldTransformTypeKebabDict.read,
          write: r.fieldTransformTypeKebabDict.write,
        },
      }),
    ],
    n.prototype,
    "fieldTransformType",
    void 0
  ),
  e(
    [t({ type: [A], json: { write: !0 } })],
    n.prototype,
    "colorClassBreakInfos",
    void 0
  ),
  (n = S = e([i("esri.renderers.PointCloudClassBreaksRenderer")], n));
const U = n;
var C;
let p = (C = class extends r {
  constructor(d) {
    super(d),
      (this.type = "point-cloud-stretch"),
      (this.field = null),
      (this.legendOptions = null),
      (this.fieldTransformType = null),
      (this.stops = null);
  }
  clone() {
    return new C({
      ...this.cloneProperties(),
      field: o(this.field),
      fieldTransformType: o(this.fieldTransformType),
      stops: o(this.stops),
      legendOptions: o(this.legendOptions),
    });
  }
});
e(
  [m({ pointCloudStretchRenderer: "point-cloud-stretch" })],
  p.prototype,
  "type",
  void 0
),
  e([t({ json: { write: !0 }, type: String })], p.prototype, "field", void 0),
  e(
    [t({ type: O, json: { write: !0 } })],
    p.prototype,
    "legendOptions",
    void 0
  ),
  e(
    [
      t({
        type: r.fieldTransformTypeKebabDict.apiValues,
        json: {
          type: r.fieldTransformTypeKebabDict.jsonValues,
          read: r.fieldTransformTypeKebabDict.read,
          write: r.fieldTransformTypeKebabDict.write,
        },
      }),
    ],
    p.prototype,
    "fieldTransformType",
    void 0
  ),
  e([t({ type: [K], json: { write: !0 } })], p.prototype, "stops", void 0),
  (p = C = e([i("esri.renderers.PointCloudStretchRenderer")], p));
const W = p;
var x;
let u = (x = class extends f {
  constructor() {
    super(...arguments),
      (this.description = null),
      (this.label = null),
      (this.values = null),
      (this.color = null);
  }
  clone() {
    return new x({
      description: this.description,
      label: this.label,
      values: o(this.values),
      color: o(this.color),
    });
  }
});
e(
  [t({ type: String, json: { write: !0 } })],
  u.prototype,
  "description",
  void 0
),
  e([t({ type: String, json: { write: !0 } })], u.prototype, "label", void 0),
  e(
    [t({ type: [String], json: { write: !0 } })],
    u.prototype,
    "values",
    void 0
  ),
  e(
    [t({ type: I, json: { type: [N], write: !0 } })],
    u.prototype,
    "color",
    void 0
  ),
  (u = x = e([i("esri.renderers.support.pointCloud.ColorUniqueValueInfo")], u));
const M = u;
var z;
let a = (z = class extends r {
  constructor(d) {
    super(d),
      (this.type = "point-cloud-unique-value"),
      (this.field = null),
      (this.fieldTransformType = null),
      (this.colorUniqueValueInfos = null),
      (this.legendOptions = null);
  }
  clone() {
    return new z({
      ...this.cloneProperties(),
      field: o(this.field),
      fieldTransformType: o(this.fieldTransformType),
      colorUniqueValueInfos: o(this.colorUniqueValueInfos),
      legendOptions: o(this.legendOptions),
    });
  }
});
e(
  [m({ pointCloudUniqueValueRenderer: "point-cloud-unique-value" })],
  a.prototype,
  "type",
  void 0
),
  e([t({ json: { write: !0 }, type: String })], a.prototype, "field", void 0),
  e(
    [
      t({
        type: r.fieldTransformTypeKebabDict.apiValues,
        json: {
          type: r.fieldTransformTypeKebabDict.jsonValues,
          read: r.fieldTransformTypeKebabDict.read,
          write: r.fieldTransformTypeKebabDict.write,
        },
      }),
    ],
    a.prototype,
    "fieldTransformType",
    void 0
  ),
  e(
    [t({ type: [M], json: { write: !0 } })],
    a.prototype,
    "colorUniqueValueInfos",
    void 0
  ),
  e(
    [t({ type: O, json: { write: !0 } })],
    a.prototype,
    "legendOptions",
    void 0
  ),
  (a = z = e([i("esri.renderers.PointCloudUniqueValueRenderer")], a));
const G = a;
export { G as a, W as b, r as c, U as d };
