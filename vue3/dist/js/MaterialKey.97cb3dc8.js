import { s as A } from "./index.8fd7165c.js";
import { S as l, E as i, L as v, A as S } from "./color.4c5303e9.js";
var r, n;
function B(t) {
  switch (t) {
    case "left":
      return r.Left;
    case "right":
      return r.Right;
    case "center":
      return r.Center;
  }
}
function _(t) {
  switch (t) {
    case "top":
      return n.Top;
    case "middle":
      return n.Center;
    case "baseline":
      return n.Baseline;
    case "bottom":
      return n.Bottom;
  }
}
function O(t) {
  switch (t) {
    case "above-left":
    case "esriServerPointLabelPlacementAboveLeft":
      return [r.Right, n.Bottom];
    case "above-center":
    case "above-along":
    case "esriServerPointLabelPlacementAboveCenter":
    case "esriServerLinePlacementAboveAlong":
      return [r.Center, n.Bottom];
    case "above-right":
    case "esriServerPointLabelPlacementAboveRight":
      return [r.Left, n.Bottom];
    case "center-left":
    case "esriServerPointLabelPlacementCenterLeft":
      return [r.Right, n.Center];
    case "center-center":
    case "center-along":
    case "esriServerPointLabelPlacementCenterCenter":
    case "esriServerLinePlacementCenterAlong":
    case "always-horizontal":
    case "esriServerPolygonPlacementAlwaysHorizontal":
    default:
      return [r.Center, n.Center];
    case "center-right":
    case "esriServerPointLabelPlacementCenterRight":
      return [r.Left, n.Center];
    case "below-left":
    case "esriServerPointLabelPlacementBelowLeft":
      return [r.Right, n.Top];
    case "below-center":
    case "below-along":
    case "esriServerPointLabelPlacementBelowCenter":
    case "esriServerLinePlacementBelowAlong":
      return [r.Center, n.Top];
    case "below-right":
    case "esriServerPointLabelPlacementBelowRight":
      return [r.Left, n.Top];
  }
}
function P(t) {
  switch (t) {
    case r.Right:
      return -1;
    case r.Center:
      return 0;
    case r.Left:
      return 1;
    default:
      return 0;
  }
}
function R(t) {
  switch (t) {
    case n.Top:
      return 1;
    case n.Center:
      return 0;
    case n.Bottom:
    case n.Baseline:
      return -1;
    default:
      return 0;
  }
}
function U(t) {
  switch (t) {
    case "left":
      return r.Left;
    case "right":
      return r.Right;
    case "center":
      return r.Center;
  }
}
function M(t) {
  switch (t) {
    case "above-along":
    case "below-along":
    case "center-along":
    case "esriServerLinePlacementAboveAlong":
    case "esriServerLinePlacementBelowAlong":
    case "esriServerLinePlacementCenterAlong":
      return !0;
    default:
      return !1;
  }
}
(function (t) {
  (t[(t.Left = -1)] = "Left"),
    (t[(t.Center = 0)] = "Center"),
    (t[(t.Right = 1)] = "Right");
})(r || (r = {})),
  (function (t) {
    (t[(t.Top = 1)] = "Top"),
      (t[(t.Center = 0)] = "Center"),
      (t[(t.Bottom = -1)] = "Bottom"),
      (t[(t.Baseline = 2)] = "Baseline");
  })(n || (n = {}));
const I = Object.keys(l)
  .filter((t) => typeof l[t] == "number")
  .reduce((t, e) => ({ ...t, [e]: l[e] }), {});
function z(t) {
  return t === l.OUTLINE_FILL || t === l.OUTLINE_FILL_SIMPLE;
}
function F(t) {
  return (function (e) {
    return e === l.SIMPLE || e === l.OUTLINE_FILL_SIMPLE;
  })(t.symbologyType);
}
function x(t) {
  return z(t.symbologyType);
}
function N(t, e) {
  switch (t) {
    case i.FILL:
      return p.from(e);
    case i.LINE:
      return y.from(e);
    case i.MARKER:
      return g.from(e);
    case i.TEXT:
      return d.from(e);
    case i.LABEL:
      return V.from(e);
    default:
      throw new Error(
        `Unable to createMaterialKey for unknown geometryType ${t}`
      );
  }
}
function Z(t) {
  switch (c.load(t).geometryType) {
    case i.MARKER:
      return new g(t);
    case i.FILL:
      return new p(t);
    case i.LINE:
      return new y(t);
    case i.TEXT:
      return new d(t);
    case i.LABEL:
      return new V(t);
  }
}
class c {
  static load(e) {
    const s = this.shared;
    return (s.data = e), s;
  }
  constructor(e) {
    (this._data = 0), (this._data = e);
  }
  set data(e) {
    this._data = e ?? 0;
  }
  get data() {
    return this._data;
  }
  get geometryType() {
    return this.bits(8, 11);
  }
  set geometryType(e) {
    this.setBits(e, 8, 11);
  }
  get mapAligned() {
    return !!this.bit(20);
  }
  set mapAligned(e) {
    this.setBit(20, e);
  }
  get sdf() {
    return !!this.bit(11);
  }
  set sdf(e) {
    this.setBit(11, e ?? !1);
  }
  get pattern() {
    return !!this.bit(12);
  }
  set pattern(e) {
    this.setBit(12, e);
  }
  get textureBinding() {
    return this.bits(0, 8);
  }
  set textureBinding(e) {
    this.setBits(e, 0, 8);
  }
  get symbologyType() {
    return this.bits(21, 26);
  }
  set symbologyType(e) {
    this.setBits(e, 21, 26);
  }
  get geometryTypeString() {
    switch (this.geometryType) {
      case i.FILL:
        return "fill";
      case i.MARKER:
        return "marker";
      case i.LINE:
        return "line";
      case i.TEXT:
        return "text";
      case i.LABEL:
        return "label";
      default:
        throw new A(
          `Unable to handle unknown geometryType: ${this.geometryType}`
        );
    }
  }
  setBit(e, s) {
    const a = 1 << e;
    s ? (this._data |= a) : (this._data &= ~a);
  }
  bit(e) {
    return (this._data & (1 << e)) >> e;
  }
  setBits(e, s, a) {
    for (let o = s, u = 0; o < a; o++, u++) this.setBit(o, (e & (1 << u)) != 0);
  }
  bits(e, s) {
    let a = 0;
    for (let o = e, u = 0; o < s; o++, u++) a |= this.bit(o) << u;
    return a;
  }
  hasVV() {
    return !1;
  }
  setVV(e, s) {}
  getVariation() {
    return {
      mapAligned: this.mapAligned,
      pattern: this.pattern,
      sdf: this.sdf,
      symbologyType: {
        value: l[this.symbologyType],
        options: I,
        namespace: "SYMBOLOGY_TYPE",
      },
    };
  }
  getVariationHash() {
    return this._data & ~(7 & this.textureBinding);
  }
}
c.shared = new c(0);
const h = (t) =>
    class extends t {
      get vvSizeMinMaxValue() {
        return this.bit(16) !== 0;
      }
      set vvSizeMinMaxValue(e) {
        this.setBit(16, e);
      }
      get vvSizeScaleStops() {
        return this.bit(17) !== 0;
      }
      set vvSizeScaleStops(e) {
        this.setBit(17, e);
      }
      get vvSizeFieldStops() {
        return this.bit(18) !== 0;
      }
      set vvSizeFieldStops(e) {
        this.setBit(18, e);
      }
      get vvSizeUnitValue() {
        return this.bit(19) !== 0;
      }
      set vvSizeUnitValue(e) {
        this.setBit(19, e);
      }
      hasVV() {
        return (
          super.hasVV() ||
          this.vvSizeMinMaxValue ||
          this.vvSizeScaleStops ||
          this.vvSizeFieldStops ||
          this.vvSizeUnitValue
        );
      }
      setVV(e, s) {
        super.setVV(e, s);
        const a =
          (function (o, u, T) {
            const b =
                v.SIZE_FIELD_STOPS |
                v.SIZE_MINMAX_VALUE |
                v.SIZE_SCALE_STOPS |
                v.SIZE_UNIT_VALUE,
              f =
                (u &
                  (S.FIELD_TARGETS_OUTLINE |
                    S.MINMAX_TARGETS_OUTLINE |
                    S.SCALE_TARGETS_OUTLINE |
                    S.UNIT_TARGETS_OUTLINE)) >>>
                4;
            return (o === i.LINE && T.isOutline) ||
              (o === i.FILL && z(T.symbologyType))
              ? b & f
              : b & ~f;
          })(this.geometryType, e, s) & e;
        (this.vvSizeMinMaxValue = !!(a & v.SIZE_MINMAX_VALUE)),
          (this.vvSizeFieldStops = !!(a & v.SIZE_FIELD_STOPS)),
          (this.vvSizeUnitValue = !!(a & v.SIZE_UNIT_VALUE)),
          (this.vvSizeScaleStops = !!(a & v.SIZE_SCALE_STOPS));
      }
    },
  E = (t) =>
    class extends t {
      get vvRotation() {
        return this.bit(15) !== 0;
      }
      set vvRotation(e) {
        this.setBit(15, e);
      }
      hasVV() {
        return super.hasVV() || this.vvRotation;
      }
      setVV(e, s) {
        super.setVV(e, s),
          (this.vvRotation = !s.isOutline && !!(e & v.ROTATION));
      }
    },
  m = (t) =>
    class extends t {
      get vvColor() {
        return this.bit(13) !== 0;
      }
      set vvColor(e) {
        this.setBit(13, e);
      }
      hasVV() {
        return super.hasVV() || this.vvColor;
      }
      setVV(e, s) {
        super.setVV(e, s), (this.vvColor = !s.isOutline && !!(e & v.COLOR));
      }
    },
  L = (t) =>
    class extends t {
      get vvOpacity() {
        return this.bit(14) !== 0;
      }
      set vvOpacity(e) {
        this.setBit(14, e);
      }
      hasVV() {
        return super.hasVV() || this.vvOpacity;
      }
      setVV(e, s) {
        super.setVV(e, s), (this.vvOpacity = !s.isOutline && !!(e & v.OPACITY));
      }
    };
let p = class extends m(L(h(c))) {
  static load(t) {
    const e = this.shared;
    return (e.data = t), e;
  }
  static from(t) {
    const { symbologyType: e, vvFlags: s } = t,
      a = this.load(0);
    return (
      (a.geometryType = i.FILL),
      (a.symbologyType = e),
      e !== l.DOT_DENSITY && a.setVV(s, t),
      a.data
    );
  }
  getVariation() {
    return {
      ...super.getVariation(),
      vvColor: this.vvColor,
      vvOpacity: this.vvOpacity,
      vvSizeFieldStops: this.vvSizeFieldStops,
      vvSizeMinMaxValue: this.vvSizeMinMaxValue,
      vvSizeScaleStops: this.vvSizeScaleStops,
      vvSizeUnitValue: this.vvSizeUnitValue,
    };
  }
};
p.shared = new p(0);
class g extends m(L(E(h(c)))) {
  static load(e) {
    const s = this.shared;
    return (s.data = e), s;
  }
  static from(e) {
    const { symbologyType: s, vvFlags: a } = e,
      o = this.load(0);
    return (
      (o.geometryType = i.MARKER),
      (o.symbologyType = s),
      s !== l.HEATMAP && o.setVV(a, e),
      o.data
    );
  }
  getVariation() {
    return {
      ...super.getVariation(),
      vvColor: this.vvColor,
      vvRotation: this.vvRotation,
      vvOpacity: this.vvOpacity,
      vvSizeFieldStops: this.vvSizeFieldStops,
      vvSizeMinMaxValue: this.vvSizeMinMaxValue,
      vvSizeScaleStops: this.vvSizeScaleStops,
      vvSizeUnitValue: this.vvSizeUnitValue,
    };
  }
}
g.shared = new g(0);
class y extends m(L(h(c))) {
  static load(e) {
    const s = this.shared;
    return (s.data = e), s;
  }
  static from(e) {
    const s = this.load(0);
    return (
      (s.geometryType = i.LINE),
      (s.symbologyType = e.symbologyType),
      s.setVV(e.vvFlags, e),
      s.data
    );
  }
  getVariation() {
    return {
      ...super.getVariation(),
      vvColor: this.vvColor,
      vvOpacity: this.vvOpacity,
      vvSizeFieldStops: this.vvSizeFieldStops,
      vvSizeMinMaxValue: this.vvSizeMinMaxValue,
      vvSizeScaleStops: this.vvSizeScaleStops,
      vvSizeUnitValue: this.vvSizeUnitValue,
    };
  }
}
y.shared = new y(0);
class d extends m(L(E(h(c)))) {
  static load(e) {
    const s = this.shared;
    return (s.data = e), s;
  }
  static from(e) {
    const s = this.load(0);
    return (
      (s.geometryType = i.TEXT),
      (s.symbologyType = e.symbologyType),
      s.setVV(e.vvFlags, e),
      s.data
    );
  }
  getVariation() {
    return {
      ...super.getVariation(),
      vvColor: this.vvColor,
      vvOpacity: this.vvOpacity,
      vvRotation: this.vvRotation,
      vvSizeFieldStops: this.vvSizeFieldStops,
      vvSizeMinMaxValue: this.vvSizeMinMaxValue,
      vvSizeScaleStops: this.vvSizeScaleStops,
      vvSizeUnitValue: this.vvSizeUnitValue,
    };
  }
}
d.shared = new d(0);
class V extends h(c) {
  static load(e) {
    const s = this.shared;
    return (s.data = e), s;
  }
  static from(e) {
    const s = this.load(0);
    return (
      (s.geometryType = i.LABEL),
      (s.symbologyType = e.symbologyType),
      s.setVV(e.vvFlags, e),
      (s.mapAligned = M(e.placement)),
      s.data
    );
  }
  getVariation() {
    return {
      ...super.getVariation(),
      vvSizeFieldStops: this.vvSizeFieldStops,
      vvSizeMinMaxValue: this.vvSizeMinMaxValue,
      vvSizeScaleStops: this.vvSizeScaleStops,
      vvSizeUnitValue: this.vvSizeUnitValue,
    };
  }
}
V.shared = new V(0);
export {
  Z as A,
  y as C,
  g as N,
  x as O,
  d as P,
  c as U,
  V as Z,
  z as _,
  O as a,
  F as b,
  P as c,
  r as e,
  N as f,
  M as i,
  _ as n,
  R as o,
  B as r,
  U as s,
  n as t,
  p as w,
};
