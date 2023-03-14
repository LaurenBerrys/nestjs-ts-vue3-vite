import {
  bO as D,
  bq as O,
  bG as X,
  bK as mt,
  bJ as Lt,
  bH as V,
  t as it,
  aH as ds,
  r as $,
  T as Q,
  bC as Xt,
  bT as si,
  bU as fr,
  bV as Ue,
  bW as mr,
  bX as pr,
  bY as _r,
  bZ as dr,
  q as gr,
  b_ as yr,
  w as Mr,
  b$ as br,
  u as Tt,
  ax as Pr,
  a$ as as,
  c0 as _e,
  c1 as ii,
  c2 as ls,
  c3 as Ts,
  a_ as Se,
  c4 as ri,
  c5 as qe,
  c6 as As,
  Q as ge,
  c7 as xr,
  c8 as Rt,
  c9 as Sr,
  br as Cr,
  s as wr,
  ca as Ce,
  cb as ni,
  cc as oi,
  cd as H,
  ce as be,
} from "./index.8fd7165c.js";
import { C as kr } from "./BidiEngine.520adad3.js";
import { t as ai, e as li, n as we } from "./GeometryUtils.874f8cf4.js";
import {
  O as vt,
  P as Oe,
  R as z,
  k as et,
  B as Yt,
  A as ke,
  X as pt,
  o as xt,
  Y as Je,
  Z as zt,
  K as ve,
  U as gt,
  w as yt,
  C as vr,
  l as Ir,
  a as Lr,
  u as Tr,
  y as Ar,
  b as Ns,
  c as Nr,
  m as zr,
  i as zs,
  f as Ge,
  e as $e,
  n as je,
} from "./enums.13513a14.js";
import { q as Er } from "./Table.e9c997d5.js";
import { t as Ut, e as Ie, f as Or } from "./MaterialKey.97cb3dc8.js";
import { a as hi, f as ci, d as ui } from "./definitions.ce677f69.js";
import { w as st, E as Le, S as Rr } from "./color.4c5303e9.js";
import { t as Fr } from "./Rect.6884a4ea.js";
import {
  q as Gr,
  C as Xr,
  B as Hr,
  v as Dr,
} from "./quantizationUtils.1e9e702d.js";
import { o as Yr } from "./floatRGBA.6f2fa7cd.js";
function fi(t, e, s, i) {
  return (function (r) {
    return typeof r == "function";
  })(t)
    ? t(e, s, i)
    : t;
}
const Vr = ` /-,
`;
function Es(t) {
  let e = t.length;
  for (; e--; ) if (!Vr.includes(t.charAt(e))) return !1;
  return !0;
}
function mi(t, e) {
  const s = [];
  let i = 0,
    r = -1;
  do
    if (((r = t.indexOf("[", i)), r >= i)) {
      if (r > i) {
        const n = t.substr(i, r - i);
        s.push([n, null, Es(n)]);
      }
      if (((i = r + 1), (r = t.indexOf("]", i)), r >= i)) {
        if (r > i) {
          const n = e[t.substr(i, r - i)];
          n && s.push([null, n, !1]);
        }
        i = r + 1;
      }
    }
  while (r !== -1);
  if (i < t.length - 1) {
    const n = t.substr(i);
    s.push([n, null, Es(n)]);
  }
  return s;
}
function pi(t, e, s) {
  let i = "",
    r = null;
  for (const n of e) {
    const [o, a, l] = n;
    if (o) l ? (r = o) : (r && ((i += r), (r = null)), (i += o));
    else {
      const c = t.attributes[a];
      c && (r && ((i += r), (r = null)), (i += c));
    }
  }
  return _i(i, s);
}
function _i(t, e) {
  switch ((typeof t != "string" && (t = String(t)), e)) {
    case "LowerCase":
      return t.toLowerCase();
    case "Allcaps":
      return t.toUpperCase();
    default:
      return t;
  }
}
function Ao(t, e, s, i, r, n, o = !0) {
  const a = e / r,
    l = s / n,
    c = Math.ceil(a / 2),
    h = Math.ceil(l / 2);
  for (let f = 0; f < n; f++)
    for (let u = 0; u < r; u++) {
      const p = 4 * (u + (o ? n - f - 1 : f) * r);
      let m = 0,
        _ = 0,
        d = 0,
        y = 0,
        g = 0,
        M = 0,
        b = 0;
      const S = (f + 0.5) * l;
      for (let P = Math.floor(f * l); P < (f + 1) * l; P++) {
        const x = Math.abs(S - (P + 0.5)) / h,
          k = (u + 0.5) * a,
          v = x * x;
        for (let C = Math.floor(u * a); C < (u + 1) * a; C++) {
          let w = Math.abs(k - (C + 0.5)) / c;
          const A = Math.sqrt(v + w * w);
          A >= -1 &&
            A <= 1 &&
            ((m = 2 * A * A * A - 3 * A * A + 1),
            m > 0 &&
              ((w = 4 * (C + P * e)),
              (b += m * t[w + 3]),
              (d += m),
              t[w + 3] < 255 && (m = (m * t[w + 3]) / 250),
              (y += m * t[w]),
              (g += m * t[w + 1]),
              (M += m * t[w + 2]),
              (_ += m)));
        }
      }
      (i[p] = y / _),
        (i[p + 1] = g / _),
        (i[p + 2] = M / _),
        (i[p + 3] = b / d);
    }
}
function tt(t) {
  return t
    ? { r: t[0], g: t[1], b: t[2], a: t[3] / 255 }
    : { r: 0, g: 0, b: 0, a: 0 };
}
function Br(t) {
  return (
    t != null &&
    (t.type === "CIMMarkerPlacementAlongLineRandomSize" ||
      t.type === "CIMMarkerPlacementAlongLineSameSize" ||
      t.type === "CIMMarkerPlacementAlongLineVariableSize" ||
      t.type === "CIMMarkerPlacementAtExtremities" ||
      t.type === "CIMMarkerPlacementAtMeasuredUnits" ||
      t.type === "CIMMarkerPlacementAtRatioPositions" ||
      t.type === "CIMMarkerPlacementOnLine" ||
      t.type === "CIMMarkerPlacementOnVertices")
  );
}
const L = (t, e = 0) => (t == null || isNaN(t) ? e : t),
  Xe = (t) =>
    t.tintColor ? tt(t.tintColor) : { r: 255, g: 255, b: 255, a: 1 },
  Wr = (t) => {
    if (!t) return !1;
    for (const e of t)
      switch (e.type) {
        case "CIMGeometricEffectBuffer":
        case "CIMGeometricEffectOffset":
        case "CIMGeometricEffectDonut":
          return !0;
      }
    return !1;
  };
function Ur(t) {
  if (!t) return "normal";
  switch (t.toLowerCase()) {
    case "italic":
      return "italic";
    case "oblique":
      return "oblique";
    default:
      return "normal";
  }
}
function qr(t) {
  if (!t) return "normal";
  switch (t.toLowerCase()) {
    case "bold":
      return "bold";
    case "bolder":
      return "bolder";
    case "lighter":
      return "lighter";
    default:
      return "normal";
  }
}
function di(t) {
  let e = "",
    s = "";
  if (t) {
    const i = t.toLowerCase();
    i.includes("italic")
      ? (e = "italic")
      : i.includes("oblique") && (e = "oblique"),
      i.includes("bold")
        ? (s = "bold")
        : i.includes("light") && (s = "lighter");
  }
  return { style: e, weight: s };
}
function gi(t) {
  return t.underline ? "underline" : t.strikethrough ? "line-through" : "none";
}
function At(t) {
  if (!t) return null;
  switch (t.type) {
    case "CIMPolygonSymbol":
      if (t.symbolLayers)
        for (const e of t.symbolLayers) {
          const s = At(e);
          if (s != null) return s;
        }
      break;
    case "CIMTextSymbol":
      return At(t.symbol);
    case "CIMSolidFill":
      return t.color;
  }
}
function It(t) {
  if (t)
    switch (t.type) {
      case "CIMPolygonSymbol":
      case "CIMLineSymbol": {
        const e = t.symbolLayers;
        if (e)
          for (const s of e) {
            const i = It(s);
            if (i != null) return i;
          }
        break;
      }
      case "CIMTextSymbol":
        return It(t.symbol);
      case "CIMSolidStroke":
      case "CIMSolidFill":
        return t.color;
    }
}
function ye(t) {
  if (t)
    switch (t.type) {
      case "CIMPolygonSymbol":
      case "CIMLineSymbol":
        if (t.symbolLayers)
          for (const e of t.symbolLayers) {
            const s = ye(e);
            if (s !== void 0) return s;
          }
        break;
      case "CIMTextSymbol":
        return ye(t.symbol);
      case "CIMSolidStroke":
      case "CIMGradientStroke":
      case "CIMPictureStroke":
        return t.width;
    }
}
function yi(t) {
  switch (t) {
    case "Left":
    default:
      return "left";
    case "Right":
      return "right";
    case "Center":
    case "Justify":
      return "center";
  }
}
function Mi(t) {
  switch (t) {
    case "Top":
    default:
      return "top";
    case "Center":
      return "middle";
    case "Baseline":
      return "baseline";
    case "Bottom":
      return "bottom";
  }
}
const Et = (t) => t.includes("data:image/svg+xml");
function gs(t) {
  if (!t) return "arial-unicode-ms";
  const e = t.toLowerCase().split(" ").join("-");
  switch (e) {
    case "serif":
      return "noto-serif";
    case "sans-serif":
      return "arial-unicode-ms";
    case "monospace":
      return "ubuntu-mono";
    case "fantasy":
      return "cabin-sketch";
    case "cursive":
      return "redressed";
    default:
      return e;
  }
}
function No(t) {
  const e =
    (function (s) {
      if (!s.weight) return "";
      switch (s.weight.toLowerCase()) {
        case "bold":
        case "bolder":
          return "-bold";
      }
      return "";
    })(t) +
    (function (s) {
      if (!s.style) return "";
      switch (s.style.toLowerCase()) {
        case "italic":
        case "oblique":
          return "-italic";
      }
      return "";
    })(t);
  return gs(t.family) + (e.length > 0 ? e : "-regular");
}
const Ke = new kr();
function ys(t) {
  if (t == null) return ["", !1];
  if (!Ke.hasBidiChar(t)) return [t, !1];
  let e;
  return (
    (e = Ke.checkContextual(t) === "rtl" ? "IDNNN" : "ICNNN"),
    [Ke.bidiTransform(t, e, "VLYSN"), !0]
  );
}
let Ht = class {
  constructor() {
    this.setIdentity();
  }
  getAngle() {
    return (
      (this.rz == null ||
        (this.rz === 0 && this.rzCos !== 1 && this.rzSin !== 0)) &&
        (this.rz = Math.atan2(this.rzSin, this.rzCos)),
      this.rz
    );
  }
  setIdentity() {
    (this.tx = 0),
      (this.ty = 0),
      (this.tz = 0),
      (this.s = 1),
      (this.rx = 0),
      (this.ry = 0),
      (this.rz = 0),
      (this.rzCos = 1),
      (this.rzSin = 0);
  }
  setTranslate(t, e) {
    (this.tx = t), (this.ty = e);
  }
  setTranslateZ(t) {
    this.tz = t;
  }
  setRotateCS(t, e) {
    (this.rz = void 0), (this.rzCos = t), (this.rzSin = e);
  }
  setRotate(t) {
    (this.rz = t), (this.rzCos = void 0), (this.rzSin = void 0);
  }
  setRotateY(t) {
    this.ry = t;
  }
  setScale(t) {
    this.s = t;
  }
  setMeasure(t) {
    this.m = t;
  }
};
const bi = 512;
let B,
  hs = class {
    constructor(t) {
      this._geometry = t;
    }
    next() {
      const t = this._geometry;
      return (this._geometry = null), t;
    }
  };
function Ms(t, e) {
  let s, i;
  B || (B = new li(0, 0, 0, 1)),
    B.reset(ai.Polygon),
    B.setPixelMargin(e + 1),
    B.setExtent(bi);
  for (const n of t.rings)
    if (n && !(n.length < 3)) {
      (s = n[0][0]), (i = -n[0][1]), B.moveTo(s, i);
      for (let o = 1; o < n.length; o++)
        (s = n[o][0]), (i = -n[o][1]), B.lineTo(s, i);
      B.close();
    }
  const r = B.result(!1);
  if (r) {
    const n = [];
    for (const o of r) {
      const a = [];
      n.push(a);
      for (const l of o) a.push([l.x, -l.y]);
    }
    return { rings: n };
  }
  return { rings: [] };
}
function Pi(t, e) {
  let s, i;
  B || (B = new li(0, 0, 0, 1)),
    B.reset(ai.LineString),
    B.setPixelMargin(e + 1),
    B.setExtent(bi);
  for (const n of t.paths)
    if (n && !(n.length < 2)) {
      (s = n[0][0]), (i = -n[0][1]), B.moveTo(s, i);
      for (let o = 1; o < n.length; o++)
        (s = n[o][0]), (i = -n[o][1]), B.lineTo(s, i);
    }
  const r = B.result(!1);
  if (r) {
    const n = [];
    for (const o of r) {
      const a = [];
      n.push(a);
      for (const l of o) a.push([l.x, -l.y]);
    }
    return { paths: n };
  }
  return { paths: [] };
}
function Jr(t) {
  const e = D(t);
  return (
    (function (s) {
      s &&
        (O(s) ? Fs(s.rings) : X(s) ? Fs(s.paths) : mt(s) && wi(s.points),
        xi(s));
    })(e),
    e
  );
}
function xi(t) {
  t &&
    (Lt(t)
      ? (t.y = -t.y)
      : O(t)
      ? Os(t.rings)
      : X(t)
      ? Os(t.paths)
      : mt(t) && Si(t.points));
}
function Si(t) {
  if (t) {
    const e = t.length;
    for (let s = 0; s < e; s++) t[s][1] = -t[s][1];
  }
}
function Os(t) {
  if (t) for (const e of t) Si(e);
}
function Ci(t) {
  if (t)
    for (let e = t.length - 1; e > 0; --e)
      (t[e][0] -= t[e - 1][0]), (t[e][1] -= t[e - 1][1]);
}
function Rs(t) {
  if (t) for (const e of t) Ci(e);
}
function wi(t) {
  if (t) {
    const e = t.length;
    for (let s = 1; s < e; ++s)
      (t[s][0] += t[s - 1][0]), (t[s][1] += t[s - 1][1]);
  }
}
function Fs(t) {
  if (t) for (const e of t) wi(e);
}
function $r(t) {
  if (t) for (const e of t) cs(e);
}
function cs(t) {
  t && t.reverse();
}
function us(t, e, s) {
  return [t[0] + (e[0] - t[0]) * s, t[1] + (e[1] - t[1]) * s];
}
function de(t) {
  return t[4];
}
function Ft(t, e) {
  t[4] = e;
}
let Pe = class {
    constructor(t, e, s, i = 0) {
      (this.isClosed = !1),
        (this.multiPath = null),
        (this.acceptPolygon = e),
        (this.acceptPolyline = s),
        (this.geomUnitsPerPoint = i),
        (this.pathCount = -1),
        (this.pathIndex = -1),
        (this.iteratePath = !1),
        t &&
          (O(t)
            ? e && ((this.multiPath = t.rings), (this.isClosed = !0))
            : X(t)
            ? s && ((this.multiPath = t.paths), (this.isClosed = !1))
            : V(t) &&
              e &&
              ((this.multiPath = ki(t).rings), (this.isClosed = !0)),
          this.multiPath && (this.pathCount = this.multiPath.length)),
        (this.internalPlacement = new Ht());
    }
    next() {
      if (!this.multiPath) return null;
      for (; this.iteratePath || this.pathIndex < this.pathCount - 1; ) {
        this.iteratePath || this.pathIndex++;
        const t = this.processPath(this.multiPath[this.pathIndex]);
        if (t) return t;
      }
      return (
        (this.pathCount = -1),
        (this.pathIndex = -1),
        (this.multiPath = null),
        null
      );
    }
  },
  He = class {
    constructor(t, e, s, i = 0) {
      (this.isClosed = !1),
        (this.multiPath = null),
        (this.inputGeometries = t),
        (this.acceptPolygon = e),
        (this.acceptPolyline = s),
        (this.geomUnitsPerPoint = i),
        (this.pathCount = -1),
        (this.pathIndex = -1),
        (this.iteratePath = !1);
    }
    next() {
      for (;;) {
        if (!this.multiPath) {
          let t = this.inputGeometries.next();
          for (; t; ) {
            if (
              (O(t)
                ? this.acceptPolygon &&
                  ((this.multiPath = t.rings), (this.isClosed = !0))
                : X(t)
                ? this.acceptPolyline &&
                  ((this.multiPath = t.paths), (this.isClosed = !1))
                : V(t) &&
                  this.acceptPolygon &&
                  ((this.multiPath = ki(t).rings), (this.isClosed = !0)),
              this.multiPath)
            ) {
              (this.pathCount = this.multiPath.length), (this.pathIndex = -1);
              break;
            }
            t = this.inputGeometries.next();
          }
          if (!this.multiPath) return null;
        }
        for (; this.iteratePath || this.pathIndex < this.pathCount - 1; ) {
          this.iteratePath || this.pathIndex++;
          const t = this.processPath(this.multiPath[this.pathIndex]);
          if (t) return t;
        }
        (this.pathCount = -1), (this.pathIndex = -1), (this.multiPath = null);
      }
    }
  };
function ki(t) {
  return {
    rings: [
      [
        [t.xmin, t.ymin],
        [t.xmin, t.ymax],
        [t.xmax, t.ymax],
        [t.xmax, t.ymin],
        [t.xmin, t.ymin],
      ],
    ],
  };
}
let vi = class qt {
  static local() {
    return qt.instance === null && (qt.instance = new qt()), qt.instance;
  }
  execute(e, s, i, r, n) {
    return new jr(e, s, i);
  }
};
vi.instance = null;
let jr = class {
  constructor(t, e, s) {
    (this._inputGeometries = t),
      (this._angleTolerance =
        e.angleTolerance !== void 0 ? e.angleTolerance : 120),
      (this._maxCosAngle = Math.cos(
        (1 - Math.abs(this._angleTolerance) / 180) * Math.PI
      ));
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (O(t)) {
        this._isClosed = !0;
        const e = D(t);
        return this._processMultipath(e.rings), e;
      }
      if (X(t)) {
        this._isClosed = !1;
        const e = D(t);
        return this._processMultipath(e.paths), e;
      }
      if (V(t)) {
        if (this._maxCosAngle) return t;
        this._isClosed = !0;
        const e = [
          [t.xmin, t.ymin],
          [t.xmin, t.ymax],
          [t.xmax, t.ymax],
          [t.xmax, t.ymin],
          [t.xmin, t.ymin],
        ];
        return this._processPath(e), { rings: [e] };
      }
      t = this._inputGeometries.next();
    }
    return null;
  }
  _processMultipath(t) {
    if (t) for (const e of t) this._processPath(e);
  }
  _processPath(t) {
    if (t) {
      let e,
        s,
        i,
        r,
        n,
        o,
        a = t.length,
        l = t[0];
      this._isClosed && ++a;
      for (let c = 1; c < a; ++c) {
        let h;
        h = this._isClosed && c === a - 1 ? t[0] : t[c];
        const f = h[0] - l[0],
          u = h[1] - l[1],
          p = Math.sqrt(f * f + u * u);
        c > 1 &&
          p > 0 &&
          i > 0 &&
          (e * f + s * u) / p / i <= this._maxCosAngle &&
          Ft(l, 1),
          c === 1 && ((r = f), (n = u), (o = p)),
          p > 0 && ((l = h), (e = f), (s = u), (i = p));
      }
      this._isClosed &&
        i > 0 &&
        o > 0 &&
        (e * r + s * n) / o / i <= this._maxCosAngle &&
        Ft(t[0], 1);
    }
  }
};
const Me = 0.03;
let Gt = class {
    constructor() {
      this._path = [];
    }
    path() {
      return this._path;
    }
    addPath(t, e) {
      e || t.reverse(),
        Array.prototype.push.apply(this._path, t),
        e || t.reverse();
    }
    static mergePath(t, e) {
      e && Array.prototype.push.apply(t, e);
    }
    startPath(t) {
      this._path.push(t);
    }
    lineTo(t) {
      this._path.push(t);
    }
    close() {
      const t = this._path;
      t.length > 1 &&
        ((t[0][0] === t[t.length - 1][0] && t[0][1] === t[t.length - 1][1]) ||
          t.push([t[0][0], t[0][1]]));
    }
  },
  Mt = class {
    constructor(t = 0, e = !1) {}
    normalize(t) {
      const e = Math.sqrt(t[0] * t[0] + t[1] * t[1]);
      e !== 0 && ((t[0] /= e), (t[1] /= e));
    }
    calculateLength(t, e) {
      const s = e[0] - t[0],
        i = e[1] - t[1];
      return Math.sqrt(s * s + i * i);
    }
    calculateSegLength(t, e) {
      return this.calculateLength(t[e], t[e + 1]);
    }
    calculatePathLength(t) {
      let e = 0;
      const s = t ? t.length : 0;
      for (let i = 0; i < s - 1; ++i) e += this.calculateSegLength(t, i);
      return e;
    }
    calculatePathArea(t) {
      let e = 0;
      const s = t ? t.length : 0;
      for (let i = 0; i < s - 1; ++i)
        e += (t[i + 1][0] - t[i][0]) * (t[i + 1][1] + t[i][1]);
      return e / 2;
    }
    getCoord2D(t, e, s) {
      return [t[0] + (e[0] - t[0]) * s, t[1] + (e[1] - t[1]) * s];
    }
    getSegCoord2D(t, e, s) {
      return this.getCoord2D(t[e], t[e + 1], s);
    }
    getAngle(t, e, s) {
      const i = e[0] - t[0],
        r = e[1] - t[1];
      return Math.atan2(r, i);
    }
    getSegAngle(t, e, s) {
      return this.getAngle(t[e], t[e + 1], s);
    }
    getAngleCS(t, e, s) {
      const i = e[0] - t[0],
        r = e[1] - t[1],
        n = Math.sqrt(i * i + r * r);
      return n > 0 ? [i / n, r / n] : [1, 0];
    }
    getSegAngleCS(t, e, s) {
      return this.getAngleCS(t[e], t[e + 1], s);
    }
    cut(t, e, s, i) {
      return [
        s <= 0 ? t[e] : this.getSegCoord2D(t, e, s),
        i >= 1 ? t[e + 1] : this.getSegCoord2D(t, e, i),
      ];
    }
    addSegment(t, e, s) {
      s && t.push(e[0]), t.push(e[1]);
    }
    getSubCurve(t, e, s) {
      const i = [];
      return this.appendSubCurve(i, t, e, s) ? i : null;
    }
    appendSubCurve(t, e, s, i) {
      const r = e ? e.length - 1 : 0;
      let n = 0,
        o = !0,
        a = 0;
      for (; a < r; ) {
        const l = this.calculateSegLength(e, a);
        if (l !== 0) {
          if (o) {
            if (n + l > s) {
              const c = (s - n) / l;
              let h = 1,
                f = !1;
              n + l >= i && ((h = (i - n) / l), (f = !0));
              const u = this.cut(e, a, c, h);
              if ((u && this.addSegment(t, u, o), f)) break;
              o = !1;
            }
          } else {
            if (n + l > i) {
              const c = this.cut(e, a, 0, (i - n) / l);
              c && this.addSegment(t, c, o);
              break;
            }
            this.addSegment(t, [e[a], e[a + 1]], o);
          }
          (n += l), ++a;
        } else ++a;
      }
      return !0;
    }
    getCIMPointAlong(t, e) {
      const s = t ? t.length - 1 : 0;
      let i = 0,
        r = -1;
      for (; r < s; ) {
        ++r;
        const n = this.calculateSegLength(t, r);
        if (n !== 0) {
          if (i + n > e) {
            const o = (e - i) / n;
            return this.getCoord2D(t[r], t[r + 1], o);
          }
          i += n;
        }
      }
      return null;
    }
    isEmpty(t, e) {
      if (!t || t.length <= 1) return !0;
      const s = t ? t.length - 1 : 0;
      let i = -1;
      for (; i < s; )
        if (
          (++i,
          t[i + 1][0] !== t[i][0] ||
            t[i + 1][1] !== t[i][1] ||
            (e && t[i + 1][2] !== t[i][2]))
        )
          return !1;
      return !0;
    }
    offset(t, e, s, i, r) {
      if (!t || t.length < 2) return null;
      let n = 0,
        o = t[n++],
        a = n;
      for (; n < t.length; ) {
        const f = t[n];
        (f[0] === o[0] && f[1] === o[1]) ||
          (n !== a && (t[a] = t[n]), (o = t[a++])),
          n++;
      }
      const l = t[0][0] === t[a - 1][0] && t[0][1] === t[a - 1][1];
      if ((l && --a, a < (l ? 3 : 2))) return null;
      const c = [];
      o = l ? t[a - 1] : null;
      let h = t[0];
      for (let f = 0; f < a; f++) {
        const u = f === a - 1 ? (l ? t[0] : null) : t[f + 1];
        if (o)
          if (u) {
            const p = [u[0] - h[0], u[1] - h[1]];
            this.normalize(p);
            const m = [h[0] - o[0], h[1] - o[1]];
            this.normalize(m);
            const _ = m[0] * p[1] - m[1] * p[0],
              d = m[0] * p[0] + m[1] * p[1];
            if (_ === 0 && d === 1) {
              h = u;
              continue;
            }
            if (_ >= 0 == e <= 0) {
              if (d < 1) {
                const y = [p[0] - m[0], p[1] - m[1]];
                this.normalize(y);
                const g = Math.sqrt((1 + d) / 2);
                if (g > 1 / i) {
                  const M = -Math.abs(e) / g;
                  c.push([h[0] - y[0] * M, h[1] - y[1] * M]);
                }
              }
            } else
              switch (s) {
                case vt.Mitered: {
                  const y = Math.sqrt((1 + d) / 2);
                  if (y > 0 && 1 / y < i) {
                    const g = [p[0] - m[0], p[1] - m[1]];
                    this.normalize(g);
                    const M = Math.abs(e) / y;
                    c.push([h[0] - g[0] * M, h[1] - g[1] * M]);
                    break;
                  }
                }
                case vt.Bevelled:
                  c.push([h[0] + m[1] * e, h[1] - m[0] * e]),
                    c.push([h[0] + p[1] * e, h[1] - p[0] * e]);
                  break;
                case vt.Rounded:
                  if (d < 1) {
                    c.push([h[0] + m[1] * e, h[1] - m[0] * e]);
                    const y = Math.floor(2.5 * (1 - d));
                    if (y > 0) {
                      const g = 1 / y;
                      let M = g;
                      for (let b = 1; b < y; b++, M += g) {
                        const S = [
                          m[1] * (1 - M) + p[1] * M,
                          -m[0] * (1 - M) - p[0] * M,
                        ];
                        this.normalize(S),
                          c.push([h[0] + S[0] * e, h[1] + S[1] * e]);
                      }
                    }
                    c.push([h[0] + p[1] * e, h[1] - p[0] * e]);
                  }
                  break;
                case vt.Square:
                default:
                  if (_ < 0)
                    c.push([
                      h[0] + (m[1] + m[0]) * e,
                      h[1] + (m[1] - m[0]) * e,
                    ]),
                      c.push([
                        h[0] + (p[1] - p[0]) * e,
                        h[1] - (p[0] + p[1]) * e,
                      ]);
                  else {
                    const y = Math.sqrt((1 + Math.abs(d)) / 2),
                      g = [p[0] - m[0], p[1] - m[1]];
                    this.normalize(g);
                    const M = e / y;
                    c.push([h[0] - g[0] * M, h[1] - g[1] * M]);
                  }
              }
          } else {
            const p = [h[0] - o[0], h[1] - o[1]];
            this.normalize(p), c.push([h[0] + p[1] * e, h[1] - p[0] * e]);
          }
        else {
          const p = [u[0] - h[0], u[1] - h[1]];
          this.normalize(p), c.push([h[0] + p[1] * e, h[1] - p[0] * e]);
        }
        (o = h), (h = u);
      }
      return c.length < (l ? 3 : 2)
        ? null
        : (l && c.push([c[0][0], c[0][1]]), c);
    }
  };
const Ze = 1.7320508075688772,
  Kr = Oe.OpenEnded;
let Ii = class Jt {
  static local() {
    return Jt.instance === null && (Jt.instance = new Jt()), Jt.instance;
  }
  execute(e, s, i, r, n) {
    return new Zr(e, s, i);
  }
};
Ii.instance = null;
let Zr = class extends He {
    constructor(t, e, s) {
      super(t, !1, !0),
        (this._curveHelper = new Mt()),
        (this._width = (e.width !== void 0 ? e.width : 5) * s),
        (this._arrowType =
          e.geometricEffectArrowType !== void 0
            ? e.geometricEffectArrowType
            : e.arrowType !== void 0
            ? e.arrowType
            : Kr),
        (this._offsetFlattenError = Me * s);
    }
    processPath(t) {
      switch (this._arrowType) {
        case Oe.OpenEnded:
        default:
          return this._constructSimpleArrow(t, !0);
        case Oe.Block:
          return this._constructSimpleArrow(t, !1);
        case Oe.Crossed:
          return this._constructCrossedArrow(t);
      }
    }
    _constructSimpleArrow(t, e) {
      const s = this._curveHelper.calculatePathLength(t);
      let i = this._width;
      s < 2 * i && (i = s / 2);
      const r = this._curveHelper.getSubCurve(t, 0, s - i);
      if (!r) return null;
      const n = i / 2;
      if (this._curveHelper.isEmpty(r, !1)) return null;
      const o = this._constructOffset(r, -n);
      if (!o) return null;
      const a = this._constructOffset(r, n);
      if (!a) return null;
      const l = this._constructArrowBasePoint(o, -n / 2);
      if (!l) return null;
      const c = this._constructArrowBasePoint(a, n / 2);
      if (!c) return null;
      const h = t[t.length - 1];
      e || (this._makeControlPoint(a, !0), this._makeControlPoint(o, !0));
      const f = new Gt();
      return (
        f.addPath(a, !0),
        f.lineTo(c),
        this._makeControlPoint(f.path()),
        f.lineTo(h),
        this._makeControlPoint(f.path()),
        f.lineTo(l),
        this._makeControlPoint(f.path()),
        f.addPath(o, !1),
        e ? { paths: [f.path()] } : (f.close(), { rings: [f.path()] })
      );
    }
    _constructCrossedArrow(t) {
      const e = this._curveHelper.calculatePathLength(t);
      let s = this._width;
      e < s * (1 + Ze + 1) && (s = e / (1 + Ze + 1));
      const i = this._curveHelper.getSubCurve(t, 0, e - s * (1 + Ze));
      if (!i) return null;
      const r = s / 2;
      if (this._curveHelper.isEmpty(i, !1)) return null;
      const n = this._constructOffset(i, r);
      if (!n) return null;
      const o = this._constructOffset(i, -r);
      if (!o) return null;
      const a = this._curveHelper.getSubCurve(t, 0, e - s);
      if (!a || this._curveHelper.isEmpty(a, !1)) return null;
      const l = this._constructOffset(a, r);
      if (!l) return null;
      const c = this._constructOffset(a, -r);
      if (!c) return null;
      const h = l[l.length - 1],
        f = this._constructArrowBasePoint(l, r / 2);
      if (!f) return null;
      const u = c[c.length - 1],
        p = this._constructArrowBasePoint(c, -r / 2);
      if (!p) return null;
      const m = t[t.length - 1];
      this._makeControlPoint(n, !1), this._makeControlPoint(o, !1);
      const _ = new Gt();
      return (
        _.addPath(n, !0),
        this._makeControlPoint(_.path()),
        _.lineTo(u),
        _.lineTo(p),
        this._makeControlPoint(_.path()),
        _.lineTo(m),
        this._makeControlPoint(_.path()),
        _.lineTo(f),
        this._makeControlPoint(_.path()),
        _.lineTo(h),
        this._makeControlPoint(_.path()),
        _.addPath(o, !1),
        { paths: [_.path()] }
      );
    }
    _constructOffset(t, e) {
      return this._curveHelper.offset(
        t,
        e,
        vt.Rounded,
        4,
        this._offsetFlattenError
      );
    }
    _constructArrowBasePoint(t, e) {
      if (!t || t.length < 2) return null;
      const s = t[t.length - 2],
        i = t[t.length - 1],
        r = [i[0] - s[0], i[1] - s[1]];
      return this._curveHelper.normalize(r), [i[0] + r[1] * e, i[1] - r[0] * e];
    }
    _makeControlPoint(t, e = !1) {
      Ft(e ? t[0] : t[t.length - 1], 1);
    }
  },
  Li = class $t {
    static local() {
      return $t.instance === null && ($t.instance = new $t()), $t.instance;
    }
    execute(e, s, i, r, n) {
      return new Qr(e, s, i, r, n);
    }
  };
Li.instance = null;
let Qr = class {
    constructor(t, e, s, i, r) {
      (this._inputGeometries = t),
        (this._tileKey = i),
        (this._geometryEngine = r),
        (this._curveHelper = new Mt()),
        (this._size = (e.size !== void 0 ? e.size : 1) * s),
        (this._offsetFlattenError = Me * s);
    }
    next() {
      let t;
      for (; (t = this._inputGeometries.next()); ) {
        if (this._size === 0) return t;
        if (V(t)) {
          if (this._size > 0) {
            const i = [
                [t.xmin, t.ymin],
                [t.xmin, t.ymax],
                [t.xmax, t.ymax],
                [t.xmax, t.ymin],
                [t.xmin, t.ymin],
              ],
              r = this._curveHelper.offset(
                i,
                this._size,
                vt.Rounded,
                4,
                this._offsetFlattenError
              );
            if (r) return { rings: [r] };
          } else if (
            this._size < 0 &&
            Math.min(t.xmax - t.xmin, t.ymax - t.ymin) + 2 * this._size > 0
          )
            return {
              xmin: t.xmin - this._size,
              xmax: t.xmax + this._size,
              ymin: t.ymin - this._size,
              ymax: t.ymax + this._size,
            };
        }
        const e = this._geometryEngine;
        if (it(e)) return null;
        let s = t;
        if (
          (!O(t) ||
            !this._tileKey ||
            ((s = Ms(t, Math.abs(this._size) + 1)),
            s && s.rings && s.rings.length !== 0)) &&
          (!X(t) ||
            !this._tileKey ||
            ((s = Pi(t, Math.abs(this._size) + 1)),
            s && s.paths && s.paths.length !== 0))
        )
          return e.buffer(ds.WebMercator, s, this._size, 1);
      }
      return null;
    }
  },
  Ti = class jt {
    static local() {
      return jt.instance === null && (jt.instance = new jt()), jt.instance;
    }
    execute(e, s, i, r, n) {
      return new tn(e, s, i);
    }
  };
Ti.instance = null;
let tn = class {
    constructor(t, e, s) {
      (this._defaultPointSize = 20),
        (this._inputGeometries = t),
        (this._geomUnitsPerPoint = s),
        (this._rule = e.rule ?? z.FullGeometry),
        (this._defaultSize = this._defaultPointSize * s);
    }
    next() {
      let t;
      for (; (t = this._inputGeometries.next()); ) {
        let e;
        if (
          (Lt(t)
            ? (e = this._processGeom([[[t.x, t.y]]]))
            : mt(t)
            ? (e = this._processGeom([t.points]))
            : X(t)
            ? (e = this._processGeom(t.paths))
            : O(t) && (e = this._processGeom(t.rings)),
          e && e.length)
        )
          return { paths: e };
      }
      return null;
    }
    _clone(t) {
      return [t[0], t[1]];
    }
    _mid(t, e) {
      return [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2];
    }
    _mix(t, e, s, i) {
      return [t[0] * e + s[0] * i, t[1] * e + s[1] * i];
    }
    _add(t, e) {
      return [t[0] + e[0], t[1] + e[1]];
    }
    _add2(t, e, s) {
      return [t[0] + e, t[1] + s];
    }
    _sub(t, e) {
      return [t[0] - e[0], t[1] - e[1]];
    }
    _dist(t, e) {
      return Math.sqrt(
        (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
      );
    }
    _norm(t) {
      return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
    }
    _normalize(t, e = 1) {
      const s = e / this._norm(t);
      (t[0] *= s), (t[1] *= s);
    }
    _leftPerpendicular(t) {
      const e = -t[1],
        s = t[0];
      (t[0] = e), (t[1] = s);
    }
    _leftPerp(t) {
      return [-t[1], t[0]];
    }
    _rightPerpendicular(t) {
      const e = t[1],
        s = -t[0];
      (t[0] = e), (t[1] = s);
    }
    _rightPerp(t) {
      return [t[1], -t[0]];
    }
    _dotProduct(t, e) {
      return t[0] * e[0] + t[1] * e[1];
    }
    _crossProduct(t, e) {
      return t[0] * e[1] - t[1] * e[0];
    }
    _rotateDirect(t, e, s) {
      const i = t[0] * e - t[1] * s,
        r = t[0] * s + t[1] * e;
      (t[0] = i), (t[1] = r);
    }
    _makeCtrlPt(t) {
      const e = [t[0], t[1]];
      return Ft(e, 1), e;
    }
    _addAngledTicks(t, e, s, i) {
      const r = this._sub(s, e);
      this._normalize(r);
      const n = this._crossProduct(r, this._sub(i, e));
      let o;
      o = n > 0 ? this._rightPerp(r) : this._leftPerp(r);
      const a = Math.abs(n) / 2,
        l = [];
      l.push([e[0] + (o[0] - r[0]) * a, e[1] + (o[1] - r[1]) * a]),
        l.push(e),
        l.push(s),
        l.push([s[0] + (o[0] + r[0]) * a, s[1] + (o[1] + r[1]) * a]),
        t.push(l);
    }
    _addBezier2(t, e, s, i, r) {
      if (r-- == 0) return void t.push(i);
      const n = this._mid(e, s),
        o = this._mid(s, i),
        a = this._mid(n, o);
      this._addBezier2(t, e, n, a, r), this._addBezier2(t, a, o, i, r);
    }
    _addBezier3(t, e, s, i, r, n) {
      if (n-- == 0) return void t.push(r);
      const o = this._mid(e, s),
        a = this._mid(s, i),
        l = this._mid(i, r),
        c = this._mid(o, a),
        h = this._mid(a, l),
        f = this._mid(c, h);
      this._addBezier3(t, e, o, c, f, n), this._addBezier3(t, f, h, l, r, n);
    }
    _add90DegArc(t, e, s, i, r) {
      const n = r ?? this._crossProduct(this._sub(s, e), this._sub(i, e)) > 0,
        o = this._mid(e, s),
        a = this._sub(o, e);
      n ? this._leftPerpendicular(a) : this._rightPerpendicular(a),
        (o[0] += a[0]),
        (o[1] += a[1]),
        this._addBezier3(
          t,
          e,
          this._mix(e, 0.33333, o, 0.66667),
          this._mix(s, 0.33333, o, 0.66667),
          s,
          4
        );
    }
    _addArrow(t, e, s) {
      const i = e[0],
        r = e[1],
        n = e[e.length - 1],
        o = this._sub(i, r);
      this._normalize(o);
      const a = this._crossProduct(o, this._sub(n, r)),
        l = 0.5 * a,
        c = this._leftPerp(o),
        h = [n[0] - c[0] * a, n[1] - c[1] * a],
        f = e.length - 1,
        u = [];
      u.push(s ? [-c[0], -c[1]] : c);
      let p = [-o[0], -o[1]];
      for (let m = 1; m < f - 1; m++) {
        const _ = this._sub(e[m + 1], e[m]);
        this._normalize(_);
        const d = this._dotProduct(_, p),
          y = this._crossProduct(_, p),
          g = Math.sqrt((1 + d) / 2),
          M = this._sub(_, p);
        this._normalize(M),
          (M[0] /= g),
          (M[1] /= g),
          u.push(y < 0 ? [-M[0], -M[1]] : M),
          (p = _);
      }
      u.push(this._rightPerp(p));
      for (let m = u.length - 1; m > 0; m--)
        t.push([e[m][0] + u[m][0] * l, e[m][1] + u[m][1] * l]);
      t.push([h[0] + u[0][0] * l, h[1] + u[0][1] * l]),
        t.push([h[0] + u[0][0] * a, h[1] + u[0][1] * a]),
        t.push(i),
        t.push([h[0] - u[0][0] * a, h[1] - u[0][1] * a]),
        t.push([h[0] - u[0][0] * l, h[1] - u[0][1] * l]);
      for (let m = 1; m < u.length; m++)
        t.push([e[m][0] - u[m][0] * l, e[m][1] - u[m][1] * l]);
    }
    _cp2(t, e, s) {
      return t.length >= 2
        ? t[1]
        : this._add2(t[0], e * this._defaultSize, s * this._defaultSize);
    }
    _cp3(t, e, s, i) {
      if (t.length >= 3) return t[2];
      const r = this._mix(t[0], 1 - s, e, s),
        n = this._sub(e, t[0]);
      return (
        this._normalize(n),
        this._rightPerpendicular(n),
        [
          r[0] + n[0] * i * this._defaultSize,
          r[1] + n[1] * i * this._defaultSize,
        ]
      );
    }
    _arrowPath(t) {
      if (t.length > 2) return t;
      const e = t[0],
        s = this._cp2(t, -4, 0),
        i = this._sub(e, s);
      this._normalize(i);
      const r = this._rightPerp(i);
      return [
        e,
        s,
        [
          e[0] + (r[0] - i[0]) * this._defaultSize,
          e[1] + (r[1] - i[1]) * this._defaultSize,
        ],
      ];
    }
    _arrowLastSeg(t) {
      const e = t[0],
        s = this._cp2(t, -4, 0);
      let i;
      if (t.length >= 3) i = t[t.length - 1];
      else {
        const r = this._sub(e, s);
        this._normalize(r);
        const n = this._rightPerp(r);
        i = [
          e[0] + (n[0] - r[0]) * this._defaultSize,
          e[1] + (n[1] - r[1]) * this._defaultSize,
        ];
      }
      return [s, i];
    }
    _processGeom(t) {
      if (!t) return null;
      const e = [];
      for (const s of t) {
        if (!s || s.length === 0) continue;
        const i = s.length;
        let r = s[0];
        switch (this._rule) {
          case z.PerpendicularFromFirstSegment: {
            const n = this._cp2(s, 0, -1),
              o = this._cp3(s, n, 0.5, 4),
              a = [];
            a.push(o), a.push(this._mid(r, n)), e.push(a);
            break;
          }
          case z.ReversedFirstSegment: {
            const n = this._cp2(s, 0, -1);
            e.push([n, r]);
            break;
          }
          case z.PerpendicularToSecondSegment: {
            const n = this._cp2(s, -4, 1),
              o = this._cp3(s, n, 0.882353, -1.94),
              a = [];
            a.push(this._mid(n, o)), a.push(r), e.push(a);
            break;
          }
          case z.SecondSegmentWithTicks: {
            const n = this._cp2(s, -4, 1),
              o = this._cp3(s, n, 0.882353, -1.94),
              a = this._sub(o, n);
            let l;
            l =
              this._crossProduct(a, this._sub(r, n)) > 0
                ? this._rightPerp(l)
                : this._leftPerp(a);
            const c = [];
            c.push([n[0] + (l[0] - a[0]) / 3, n[1] + (l[1] - a[1]) / 3]),
              c.push(n),
              c.push(o),
              c.push([o[0] + (l[0] + a[0]) / 3, o[1] + (l[1] + a[1]) / 3]),
              e.push(c);
            break;
          }
          case z.DoublePerpendicular: {
            const n = this._cp2(s, 0, -1),
              o = this._cp3(s, n, 0.5, 3),
              a = this._mid(r, n),
              l = this._sub(a, o);
            this._normalize(l);
            const c = this._crossProduct(l, this._sub(r, o));
            this._leftPerpendicular(l);
            const h = [];
            h.push(r), h.push([o[0] + l[0] * c, o[1] + l[1] * c]), e.push(h);
            const f = [];
            f.push([o[0] - l[0] * c, o[1] - l[1] * c]), f.push(n), e.push(f);
            break;
          }
          case z.OppositeToFirstSegment: {
            const n = this._cp2(s, 0, -1),
              o = this._cp3(s, n, 0.5, 3),
              a = this._mid(r, n),
              l = this._sub(a, o);
            this._normalize(l);
            const c = this._crossProduct(l, this._sub(r, o));
            this._leftPerpendicular(l);
            const h = [];
            h.push([o[0] + l[0] * c, o[1] + l[1] * c]),
              h.push([o[0] - l[0] * c, o[1] - l[1] * c]),
              e.push(h);
            break;
          }
          case z.TriplePerpendicular: {
            const n = this._cp2(s, 0, -1),
              o = this._cp3(s, n, 0.5, 4),
              a = this._mid(r, n),
              l = this._sub(a, o);
            this._normalize(l);
            const c = this._crossProduct(l, this._sub(r, o));
            this._leftPerpendicular(l);
            const h = [];
            h.push([o[0] + l[0] * c * 0.8, o[1] + l[1] * c * 0.8]),
              h.push([a[0] + 0.8 * (r[0] - a[0]), a[1] + 0.8 * (r[1] - a[1])]),
              e.push(h),
              e.push([o, a]);
            const f = [];
            f.push([o[0] - l[0] * c * 0.8, o[1] - l[1] * c * 0.8]),
              f.push([a[0] + 0.8 * (n[0] - a[0]), a[1] + 0.8 * (n[1] - a[1])]),
              e.push(f);
            break;
          }
          case z.HalfCircleFirstSegment: {
            const n = this._cp2(s, 0, -1),
              o = this._cp3(s, n, 0.5, 4),
              a = this._mid(r, n);
            let l = this._sub(n, r);
            const c = Math.cos(Math.PI / 18),
              h = Math.sin(Math.PI / 18),
              f = Math.sqrt((1 + c) / 2),
              u = Math.sqrt((1 - c) / 2),
              p = [];
            let m;
            this._crossProduct(l, this._sub(o, r)) > 0
              ? (p.push(r), (l = this._sub(r, a)), (m = n))
              : (p.push(n), (l = this._sub(n, a)), (m = r)),
              this._rotateDirect(l, f, u),
              (l[0] /= f),
              (l[1] /= f);
            for (let _ = 1; _ <= 18; _++)
              p.push(this._add(a, l)), this._rotateDirect(l, c, h);
            p.push(m), e.push(p);
            break;
          }
          case z.HalfCircleSecondSegment: {
            const n = this._cp2(s, 0, -1),
              o = this._cp3(s, n, 1, -1);
            let a = this._sub(r, n);
            this._normalize(a);
            const l = this._crossProduct(a, this._sub(o, n)) / 2;
            this._leftPerpendicular(a);
            const c = [n[0] + a[0] * l, n[1] + a[1] * l];
            a = this._sub(n, c);
            const h = Math.cos(Math.PI / 18);
            let f = Math.sin(Math.PI / 18);
            l > 0 && (f = -f);
            const u = [n];
            for (let p = 1; p <= 18; p++)
              this._rotateDirect(a, h, f), u.push(this._add(c, a));
            e.push(u);
            break;
          }
          case z.HalfCircleExtended: {
            const n = this._cp2(s, 0, -2),
              o = this._cp3(s, n, 1, -1);
            let a;
            if (i >= 4) a = s[3];
            else {
              const p = this._sub(r, n);
              a = this._add(o, p);
            }
            const l = this._dist(n, o) / 2 / 0.75,
              c = this._sub(n, r);
            this._normalize(c, l);
            const h = this._sub(o, a);
            this._normalize(h, l);
            const f = [a, o];
            e.push(f);
            const u = [this._clone(o)];
            this._addBezier3(u, o, this._add(o, h), this._add(n, c), n, 4),
              u.push(r),
              e.push(u);
            break;
          }
          case z.OpenCircle: {
            const n = this._cp2(s, -2, 0),
              o = this._sub(n, r),
              a = Math.cos(Math.PI / 18),
              l = -Math.sin(Math.PI / 18),
              c = [n];
            for (let h = 1; h <= 33; h++)
              this._rotateDirect(o, a, l), c.push(this._add(r, o));
            e.push(c);
            break;
          }
          case z.CoverageEdgesWithTicks: {
            const n = this._cp2(s, 0, -1);
            let o, a;
            if (i >= 3) o = s[2];
            else {
              const f = this._sub(n, r),
                u = this._leftPerp(f);
              o = [r[0] + u[0] - 0.25 * f[0], r[1] + u[1] - 0.25 * f[1]];
            }
            if (i >= 4) a = s[3];
            else {
              const f = this._mid(r, n),
                u = this._sub(r, n);
              this._normalize(u), this._leftPerpendicular(u);
              const p = this._crossProduct(u, this._sub(o, f));
              this._rightPerpendicular(u),
                (a = [o[0] + u[0] * p * 2, o[1] + u[1] * p * 2]);
            }
            const l = this._sub(n, r);
            let c, h;
            (c =
              this._crossProduct(l, this._sub(o, r)) > 0
                ? this._rightPerp(l)
                : this._leftPerp(l)),
              (h = []),
              h.push(o),
              h.push(r),
              h.push([r[0] + (c[0] - l[0]) / 3, r[1] + (c[1] - l[1]) / 3]),
              e.push(h),
              (c =
                this._crossProduct(l, this._sub(a, n)) > 0
                  ? this._rightPerp(c)
                  : this._leftPerp(l)),
              (h = []),
              h.push([n[0] + (c[0] + l[0]) / 3, n[1] + (c[1] + l[1]) / 3]),
              h.push(n),
              h.push(a),
              e.push(h);
            break;
          }
          case z.GapExtentWithDoubleTicks: {
            const n = this._cp2(s, 0, 2),
              o = this._cp3(s, n, 0, 1);
            let a;
            if (i >= 4) a = s[3];
            else {
              const l = this._sub(n, r);
              a = this._add(o, l);
            }
            this._addAngledTicks(e, r, n, this._mid(o, a)),
              this._addAngledTicks(e, o, a, this._mid(r, n));
            break;
          }
          case z.GapExtentMidline: {
            const n = this._cp2(s, 2, 0),
              o = this._cp3(s, n, 0, 1);
            let a;
            if (i >= 4) a = s[3];
            else {
              const c = this._sub(n, r);
              a = this._add(o, c);
            }
            const l = [];
            l.push(this._mid(r, o)), l.push(this._mid(n, a)), e.push(l);
            break;
          }
          case z.Chevron: {
            const n = this._cp2(s, -1, -1);
            let o;
            if (i >= 3) o = s[2];
            else {
              const a = this._sub(n, r);
              this._leftPerpendicular(a), (o = this._add(r, a));
            }
            e.push([n, this._makeCtrlPt(r), o]);
            break;
          }
          case z.PerpendicularWithArc: {
            const n = this._cp2(s, 0, -2),
              o = this._cp3(s, n, 0.5, -1);
            let a = this._sub(n, r);
            const l = this._norm(a);
            (a[0] /= l), (a[1] /= l);
            const c = this._crossProduct(a, this._sub(o, r));
            let h = this._dotProduct(a, this._sub(o, r));
            h < 0.05 * l ? (h = 0.05 * l) : h > 0.95 * l && (h = 0.95 * l);
            const f = [r[0] + a[0] * h, r[1] + a[1] * h];
            this._leftPerpendicular(a);
            let u = [];
            u.push([f[0] - a[0] * c, f[1] - a[1] * c]),
              u.push([f[0] + a[0] * c, f[1] + a[1] * c]),
              e.push(u);
            const p = [n[0] + a[0] * c, n[1] + a[1] * c];
            a = this._sub(n, p);
            const m = Math.cos(Math.PI / 18);
            let _ = Math.sin(Math.PI / 18);
            c < 0 && (_ = -_), (u = [r, n]);
            for (let d = 1; d <= 9; d++)
              this._rotateDirect(a, m, _), u.push(this._add(p, a));
            e.push(u);
            break;
          }
          case z.ClosedHalfCircle: {
            const n = this._cp2(s, 2, 0),
              o = this._mid(r, n),
              a = this._sub(n, o),
              l = Math.cos(Math.PI / 18),
              c = Math.sin(Math.PI / 18),
              h = [r, n];
            for (let f = 1; f <= 18; f++)
              this._rotateDirect(a, l, c), h.push(this._add(o, a));
            e.push(h);
            break;
          }
          case z.TripleParallelExtended: {
            const n = this._cp2(s, 0, -2),
              o = this._cp3(s, n, 1, -2),
              a = this._mid(r, n),
              l = this._sub(o, n);
            this._normalize(l);
            const c = Math.abs(this._crossProduct(l, this._sub(a, n))) / 2,
              h = this._dist(n, o),
              f = [n, r];
            f.push([r[0] + l[0] * h * 0.5, r[1] + l[1] * h * 0.5]), e.push(f);
            const u = [];
            u.push([a[0] - l[0] * c, a[1] - l[1] * c]),
              u.push([a[0] + l[0] * h * 0.375, a[1] + l[1] * h * 0.375]),
              Ft(u[u.length - 1], 1),
              u.push([a[0] + l[0] * h * 0.75, a[1] + l[1] * h * 0.75]),
              e.push(u);
            const p = [n, o];
            e.push(p);
            break;
          }
          case z.ParallelWithTicks: {
            const n = this._cp2(s, 3, 0),
              o = this._cp3(s, n, 0.5, -1),
              a = this._sub(o, n);
            this._normalize(a);
            const l = this._crossProduct(a, this._sub(o, r));
            this._leftPerpendicular(a),
              this._addAngledTicks(e, r, n, o),
              this._addAngledTicks(
                e,
                this._mix(r, 1, a, l),
                this._mix(n, 1, a, l),
                this._mid(r, n)
              );
            break;
          }
          case z.Parallel: {
            const n = this._cp2(s, 3, 0),
              o = this._cp3(s, n, 0.5, -1),
              a = this._sub(n, r);
            this._normalize(a);
            const l = this._leftPerp(a),
              c = this._crossProduct(a, this._sub(o, r));
            let h = [r, n];
            e.push(h),
              (h = []),
              h.push([r[0] + l[0] * c, r[1] + l[1] * c]),
              h.push([n[0] + l[0] * c, n[1] + l[1] * c]),
              e.push(h);
            break;
          }
          case z.PerpendicularToFirstSegment: {
            const n = this._cp2(s, 3, 0),
              o = this._cp3(s, n, 0.5, -1),
              a = this._mid(r, n),
              l = this._sub(n, r);
            this._normalize(l);
            const c = this._crossProduct(l, this._sub(o, r));
            this._leftPerpendicular(l);
            const h = [];
            h.push([a[0] - l[0] * c * 0.25, a[1] - l[1] * c * 0.25]),
              h.push([a[0] + l[0] * c * 1.25, a[1] + l[1] * c * 1.25]),
              e.push(h);
            break;
          }
          case z.ParallelOffset: {
            const n = this._cp2(s, 3, 0),
              o = this._cp3(s, n, 0.5, -1),
              a = this._sub(n, r);
            this._normalize(a);
            const l = this._crossProduct(a, this._sub(o, r));
            this._leftPerpendicular(a);
            const c = [];
            c.push([r[0] - a[0] * l, r[1] - a[1] * l]),
              c.push([n[0] - a[0] * l, n[1] - a[1] * l]),
              e.push(c);
            const h = [];
            h.push([r[0] + a[0] * l, r[1] + a[1] * l]),
              h.push([n[0] + a[0] * l, n[1] + a[1] * l]),
              e.push(h);
            break;
          }
          case z.OffsetOpposite: {
            const n = this._cp2(s, 3, 0),
              o = this._cp3(s, n, 0.5, -1),
              a = this._sub(n, r);
            this._normalize(a);
            const l = this._crossProduct(a, this._sub(o, r));
            this._leftPerpendicular(a);
            const c = [];
            c.push([r[0] - a[0] * l, r[1] - a[1] * l]),
              c.push([n[0] - a[0] * l, n[1] - a[1] * l]),
              e.push(c);
            break;
          }
          case z.OffsetSame: {
            const n = this._cp2(s, 3, 0),
              o = this._cp3(s, n, 0.5, -1),
              a = this._sub(n, r);
            this._normalize(a);
            const l = this._crossProduct(a, this._sub(o, r));
            this._leftPerpendicular(a);
            const c = [];
            c.push([r[0] + a[0] * l, r[1] + a[1] * l]),
              c.push([n[0] + a[0] * l, n[1] + a[1] * l]),
              e.push(c);
            break;
          }
          case z.CircleWithArc: {
            let n = this._cp2(s, 3, 0);
            const o = this._cp3(s, n, 0.5, -1);
            let a, l;
            if (i >= 4)
              (a = s[3]),
                (l = this._crossProduct(this._sub(a, n), this._sub(o, n)) > 0);
            else {
              (a = n),
                (l = this._crossProduct(this._sub(a, r), this._sub(o, r)) > 0);
              const p = 24 * this._geomUnitsPerPoint,
                m = this._sub(a, r);
              this._normalize(m, p);
              const _ = Math.sqrt(2) / 2;
              this._rotateDirect(m, _, l ? _ : -_), (n = this._add(r, m));
            }
            const c = this._sub(n, r),
              h = Math.cos(Math.PI / 18),
              f = Math.sin(Math.PI / 18),
              u = [n];
            for (let p = 1; p <= 36; p++)
              this._rotateDirect(c, h, f), u.push(this._add(r, c));
            this._add90DegArc(u, n, a, o, l), Ft(u[u.length - 8], 1), e.push(u);
            break;
          }
          case z.DoubleJog: {
            let n,
              o,
              a = this._cp2(s, -3, 1);
            if (((n = i >= 3 ? s[2] : this._add(r, this._sub(r, a))), i >= 4))
              o = s[3];
            else {
              const d = r;
              (r = a), (o = n);
              const y = this._dist(r, d),
                g = this._dist(o, d);
              let M = 30 * this._geomUnitsPerPoint;
              0.5 * y < M && (M = 0.5 * y),
                0.5 * g < M && (M = 0.5 * g),
                (a = this._mix(r, M / y, d, (y - M) / y)),
                (n = this._mix(o, M / g, d, (g - M) / g));
            }
            const l = this._mid(r, a),
              c = this._mid(o, n),
              h = this._dist(r, a),
              f = this._dist(n, o);
            let u = Math.min(h, f) / 8;
            u = Math.min(u, 24 * this._geomUnitsPerPoint);
            const p = Math.cos(Math.PI / 4);
            let m = this._sub(r, a);
            this._normalize(m, u),
              this._crossProduct(m, this._sub(o, a)) > 0
                ? this._rotateDirect(m, p, -p)
                : this._rotateDirect(m, p, p);
            let _ = [];
            _.push(a),
              _.push(this._add(l, m)),
              _.push(this._sub(l, m)),
              _.push(r),
              e.push(_),
              (m = this._sub(o, n)),
              this._normalize(m, u),
              this._crossProduct(m, this._sub(r, n)) < 0
                ? this._rotateDirect(m, p, p)
                : this._rotateDirect(m, p, -p),
              (_ = []),
              _.push(n),
              _.push(this._add(c, m)),
              _.push(this._sub(c, m)),
              _.push(o),
              e.push(_);
            break;
          }
          case z.PerpendicularOffset: {
            const n = this._cp2(s, -4, 1),
              o = this._cp3(s, n, 0.882353, -1.94),
              a = this._sub(o, n);
            this._crossProduct(a, this._sub(r, n)) > 0
              ? this._rightPerpendicular(a)
              : this._leftPerpendicular(a);
            const l = [a[0] / 8, a[1] / 8],
              c = this._sub(this._mid(n, o), l);
            e.push([c, r]);
            break;
          }
          case z.LineExcludingLastSegment: {
            const n = this._arrowPath(s),
              o = [];
            let a = n.length - 2;
            for (; a--; ) o.push(n[a]);
            e.push(o);
            break;
          }
          case z.MultivertexArrow: {
            const n = this._arrowPath(s),
              o = [];
            this._addArrow(o, n, !1), e.push(o);
            break;
          }
          case z.CrossedArrow: {
            const n = this._arrowPath(s),
              o = [];
            this._addArrow(o, n, !0), e.push(o);
            break;
          }
          case z.ChevronArrow: {
            const [n, o] = this._arrowLastSeg(s),
              a = 10 * this._geomUnitsPerPoint,
              l = this._sub(r, n);
            this._normalize(l);
            const c = this._crossProduct(l, this._sub(o, n)),
              h = this._leftPerp(l),
              f = [o[0] - h[0] * c * 2, o[1] - h[1] * c * 2],
              u = [];
            u.push([o[0] + l[0] * a, o[1] + l[1] * a]),
              u.push(r),
              u.push([f[0] + l[0] * a, f[1] + l[1] * a]),
              e.push(u);
            break;
          }
          case z.ChevronArrowOffset: {
            const [n, o] = this._arrowLastSeg(s),
              a = this._sub(r, n);
            this._normalize(a);
            const l = this._crossProduct(a, this._sub(o, n));
            this._leftPerpendicular(a);
            const c = [o[0] - a[0] * l, o[1] - a[1] * l],
              h = [];
            h.push([c[0] + a[0] * l * 0.5, c[1] + a[1] * l * 0.5]),
              h.push(this._mid(c, r)),
              h.push([c[0] - a[0] * l * 0.5, c[1] - a[1] * l * 0.5]),
              e.push(h);
            break;
          }
          case z.PartialFirstSegment: {
            const [n, o] = this._arrowLastSeg(s),
              a = this._sub(r, n);
            this._normalize(a);
            const l = this._crossProduct(a, this._sub(o, n));
            this._leftPerpendicular(a);
            const c = [o[0] - a[0] * l, o[1] - a[1] * l];
            e.push([n, c]);
            break;
          }
          case z.Arch: {
            const n = this._cp2(s, 0, -1),
              o = this._cp3(s, n, 0.5, 1),
              a = this._sub(r, n),
              l = this._mix(o, 1, a, 0.55),
              c = this._mix(o, 1, a, -0.55),
              h = [r];
            this._addBezier2(h, r, l, o, 4),
              this._addBezier2(h, o, c, n, 4),
              e.push(h);
            break;
          }
          case z.CurvedParallelTicks: {
            const n = this._cp2(s, -4, 1),
              o = this._cp3(s, n, 0.882353, -1.94),
              a = this._sub(o, n);
            this._crossProduct(a, this._sub(r, n)) > 0
              ? this._rightPerpendicular(a)
              : this._leftPerpendicular(a);
            const l = [a[0] / 8, a[1] / 8],
              c = this._sub(this._mid(n, o), l),
              h = this._sub(this._mix(n, 0.75, o, 0.25), l),
              f = this._sub(this._mix(n, 0.25, o, 0.75), l),
              u = [n];
            this._addBezier2(u, n, h, c, 3),
              this._addBezier2(u, c, f, o, 3),
              e.push(u);
            for (let p = 0; p < 8; p++) {
              const m = u[2 * p + 1],
                _ = [this._clone(m)];
              _.push(this._add(m, [a[0] / 4, a[1] / 4])), e.push(_);
            }
            break;
          }
          case z.Arc90Degrees: {
            const n = this._cp2(s, 0, -1),
              o = this._cp3(s, n, 0.5, 1),
              a = [n];
            this._add90DegArc(a, n, r, o), e.push(a);
            break;
          }
          case z.FullGeometry:
          default:
            e.push(s);
        }
      }
      return e;
    }
  },
  Ai = class Kt {
    static local() {
      return Kt.instance === null && (Kt.instance = new Kt()), Kt.instance;
    }
    execute(e, s, i, r, n) {
      return new en(e, s, i);
    }
  };
Ai.instance = null;
let en = class extends He {
    constructor(t, e, s) {
      super(t, !0, !0),
        (this._curveHelper = new Mt()),
        (this._beginCut = (e.beginCut !== void 0 ? e.beginCut : 1) * s),
        (this._endCut = (e.endCut !== void 0 ? e.endCut : 1) * s),
        (this._middleCut = (e.middleCut !== void 0 ? e.middleCut : 0) * s),
        (this._invert = e.invert !== void 0 && e.invert),
        this._beginCut < 0 && (this._beginCut = 0),
        this._endCut < 0 && (this._endCut = 0),
        this._middleCut < 0 && (this._middleCut = 0);
    }
    processPath(t) {
      const e = this._beginCut,
        s = this._endCut,
        i = this._middleCut,
        r = this._curveHelper.calculatePathLength(t),
        n = [];
      if (this._invert) {
        if (!(e === 0 && s === 0 && i === 0))
          if (e + s + i >= r) n.push(t);
          else {
            let o = this._curveHelper.getSubCurve(t, 0, e);
            o && n.push(o),
              (o = this._curveHelper.getSubCurve(
                t,
                0.5 * (r - i),
                0.5 * (r + i)
              )),
              o && n.push(o),
              (o = this._curveHelper.getSubCurve(t, r - s, s)),
              o && n.push(o);
          }
      } else if (e === 0 && s === 0 && i === 0) n.push(t);
      else if (!(e + s + i >= r))
        if (i === 0) {
          const o = this._curveHelper.getSubCurve(t, e, r - s);
          o && n.push(o);
        } else {
          let o = this._curveHelper.getSubCurve(t, e, 0.5 * (r - i));
          o && n.push(o),
            (o = this._curveHelper.getSubCurve(t, 0.5 * (r + i), r - s)),
            o && n.push(o);
        }
      return n.length === 0 ? null : { paths: n };
    }
  },
  De = class {
    constructor() {
      (this._values = []),
        (this.extPtGap = 0),
        (this.ctrlPtGap = 0),
        (this._length = 0),
        (this._currentValue = 0);
    }
    isEmpty() {
      return this._values.length === 0;
    }
    size() {
      return this._values.length;
    }
    init(t, e, s = !0) {
      if ((this._setEmpty(), !t || t.length === 0)) return !1;
      for (let i = 0; i < t.length; i++) {
        let r = Math.abs(t[i]);
        s && r < 1e-7 && (r = 1e-7), this._values.push(r), (this._length += r);
      }
      return (
        e && 1 & t.length && (this._length *= 2),
        this._length !== 0 &&
          ((this.ctrlPtGap = this.extPtGap = 0), (this._currentValue = -1), !0)
      );
    }
    scale(t) {
      const e = this._values ? this._values.length : 0;
      for (let s = 0; s < e; ++s) this._values[s] *= t;
      (this._length *= t), (this.extPtGap *= t), (this.ctrlPtGap *= t);
    }
    addValue(t) {
      (this._length += t), this._values.push(t);
    }
    firstValue() {
      return this._values[0];
    }
    lastValue() {
      return this._values[this._values.length - 1];
    }
    nextValue() {
      return (
        this._currentValue++,
        this._currentValue === this._values.length && (this._currentValue = 0),
        this._values[this._currentValue]
      );
    }
    reset() {
      this._currentValue = -1;
    }
    length() {
      return this._length;
    }
    _setEmpty() {
      (this.extPtGap = this.ctrlPtGap = this._length = 0),
        (this._currentValue = -1),
        (this._values.length = 0);
    }
  },
  _t = class {
    constructor() {
      (this.pt = null), (this.ca = 0), (this.sa = 0);
    }
  };
var Pt;
(function (t) {
  (t[(t.FAIL = 0)] = "FAIL"),
    (t[(t.END = 1)] = "END"),
    (t[(t.CONTINUE = 2)] = "CONTINUE");
})(Pt || (Pt = {}));
let Te = class {
    constructor() {
      this.reset();
    }
    reset() {
      (this.segment = -1),
        (this.segmentLength = 0),
        (this.abscissa = 0),
        (this.isPathEnd = !1),
        (this.isPartEnd = !1);
    }
    isValid() {
      return this.segment !== -1;
    }
    copyTo(t) {
      (t.segment = this.segment),
        (t.segmentLength = this.segmentLength),
        (t.abscissa = this.abscissa),
        (t.isPathEnd = this.isPathEnd),
        (t.isPartEnd = this.isPartEnd);
    }
  },
  Ye = class extends Mt {
    constructor(t = 0, e = !1) {
      super(t, e), (this._tolerance = Me), (this._currentPosition = new Te());
    }
    updateTolerance(t) {
      this._tolerance = Me * t;
    }
    init(t, e, s = !0) {
      return (
        s
          ? ((this._patternLength = e.length()),
            (this._partExtPtGap = e.extPtGap),
            (this._partCtrlPtGap = e.ctrlPtGap))
          : ((this._patternLength = 0),
            (this._partExtPtGap = 0),
            (this._partCtrlPtGap = 0)),
        this._currentPosition.reset(),
        (this._partSegCount = 0),
        (this._path = t),
        (this._seg = -1),
        this._setPosAtNextPart()
      );
    }
    curPositionIsValid() {
      return this._currentPosition.isValid();
    }
    nextPosition(t, e = Pt.FAIL) {
      const s = new Te();
      return (
        !!this._nextPosition(t, s, null, e) &&
        (s.copyTo(this._currentPosition), !0)
      );
    }
    curPointAndAngle(t) {
      t.pt = this._getPoint(this._currentPosition);
      const [e, s] = this._getAngle(this._currentPosition);
      (t.ca = e), (t.sa = s);
    }
    nextPointAndAngle(t, e, s = Pt.FAIL) {
      const i = new Te();
      if (!this._nextPosition(t, i, null, s)) return !1;
      i.copyTo(this._currentPosition), (e.pt = this._getPoint(i));
      const [r, n] = this._getAngle(i);
      return (e.ca = r), (e.sa = n), !0;
    }
    nextCurve(t) {
      if (t === 0) return null;
      const e = [],
        s = new Te();
      return this._nextPosition(t, s, e, Pt.END)
        ? (s.copyTo(this._currentPosition), e)
        : null;
    }
    isPathEnd() {
      return this._currentPosition.isPathEnd;
    }
    getPathEnd() {
      if (this._currentPosition.segment === -1)
        throw new Error("missing segment");
      return this._path[this._currentPosition.segment + 1];
    }
    _nextPosition(t, e, s, i) {
      if (this._currentPosition.isPathEnd) return !1;
      let r = this._currentPosition.abscissa;
      for (
        this._currentPosition.segmentLength > 0 &&
          (r /= this._currentPosition.segmentLength),
          this._currentPosition.copyTo(e);
        e.abscissa + t * this._partLengthRatio >
        e.segmentLength + this._tolerance;

      ) {
        if (s) {
          if (s.length === 0)
            if (r === 0) {
              const o = this._path[e.segment];
              s.push([o[0], o[1]]);
            } else s.push(this.getSegCoord2D(this._path, e.segment, r));
          const n = this._path[e.segment + 1];
          s.push([n[0], n[1]]);
        }
        if (
          ((r = 0),
          (t -= (e.segmentLength - e.abscissa) / this._partLengthRatio),
          this._partSegCount)
        )
          (e.segment = this._nextSegment()),
            (e.segmentLength = this.calculateSegLength(this._path, e.segment)),
            (e.abscissa = 0),
            this._partSegCount--;
        else {
          if (!this._setPosAtNextPart())
            return (
              i !== Pt.FAIL &&
              ((e.segmentLength = this.calculateSegLength(
                this._path,
                e.segment
              )),
              (e.isPartEnd = !0),
              i === Pt.END
                ? ((e.abscissa = e.segmentLength), (e.isPathEnd = !0))
                : (e.abscissa = e.segmentLength + t),
              !0)
            );
          this._currentPosition.copyTo(e);
        }
      }
      if (((e.abscissa += t * this._partLengthRatio), s)) {
        if (s.length === 0)
          if (r === 0) {
            const o = this._path[e.segment];
            s.push([o[0], o[1]]);
          } else s.push(this.getSegCoord2D(this._path, e.segment, r));
        const n = e.abscissa / e.segmentLength;
        if (n === 1) {
          const o = this._path[e.segment + 1];
          s.push([o[0], o[1]]);
        } else s.push(this.getSegCoord2D(this._path, e.segment, n));
      }
      return (
        this._partSegCount ||
          (Math.abs(e.abscissa - e.segmentLength) < this._tolerance &&
            ((e.isPathEnd = this._partIsLast), (e.isPartEnd = !0))),
        !0
      );
    }
    _getPoint(t) {
      if (t.segment === -1) throw new Error("missing segment");
      const e = t.segmentLength <= 0 ? 0 : t.abscissa / t.segmentLength;
      return this.getSegCoord2D(this._path, t.segment, e);
    }
    _getAngle(t) {
      if (t.segment === -1) throw new Error("missing segment");
      const e = t.segmentLength <= 0 ? 0 : t.abscissa / t.segmentLength;
      return this.getSegAngleCS(this._path, t.segment, e);
    }
    _setPosAtNextPart() {
      for (; this._partSegCount; )
        this._hasNextSegment() && this._nextSegment(), this._partSegCount--;
      if (!this._hasNextSegment()) return !1;
      for (
        this._partLength = 0, this._partIsLast = !0, this._partSegCount = 0;
        this._hasNextSegment();

      )
        if (
          ((this._partLength += this.calculateSegLength(
            this._path,
            this._nextSegment()
          )),
          this._partSegCount++,
          de(this._path[this._getEndPointIndex()]) === 1)
        ) {
          this._partIsLast = !this._hasNextSegment();
          break;
        }
      let t = this._partSegCount;
      for (; t; ) this._previousSegment(), --t;
      (this._currentPosition.segment = this._nextSegment()),
        (this._currentPosition.segmentLength = this.calculateSegLength(
          this._path,
          this._currentPosition.segment
        )),
        (this._currentPosition.abscissa = 0),
        (this._currentPosition.isPathEnd = this._currentPosition.isPartEnd =
          !1),
        --this._partSegCount;
      const e = this._getStartPointIndex();
      this._ctrlPtBegin = de(this._path[e]) === 1;
      let s = e + this._partSegCount + 1;
      if (
        (s >= this._path.length && (s = 0),
        (this._ctrlPtEnd = de(this._path[s]) === 1),
        this._patternLength > 0)
      ) {
        const i = this._ctrlPtBegin ? this._partCtrlPtGap : this._partExtPtGap,
          r = this._ctrlPtEnd ? this._partCtrlPtGap : this._partExtPtGap;
        let n = Math.round((this._partLength - (i + r)) / this._patternLength);
        n <= 0 && (n = i + r > 0 ? 0 : 1),
          (this._partLengthRatio =
            this._partLength / (i + r + n * this._patternLength)),
          this._partLengthRatio < 0.01 && (this._partLengthRatio = 1);
      } else this._partLengthRatio = 1;
      return !0;
    }
    _hasNextSegment() {
      return this._seg < this._path.length - 2;
    }
    _previousSegment() {
      return --this._seg;
    }
    _nextSegment() {
      return ++this._seg;
    }
    _getStartPointIndex() {
      return this._seg;
    }
    _getEndPointIndex() {
      return this._seg + 1;
    }
  },
  Ni = class Zt {
    static local() {
      return Zt.instance === null && (Zt.instance = new Zt()), Zt.instance;
    }
    execute(e, s, i, r, n) {
      return new sn(e, s, i);
    }
  };
Ni.instance = null;
let sn = class extends He {
    constructor(t, e, s) {
      super(t, !0, !0),
        (this._firstCurve = null),
        (this._walker = new Ye()),
        this._walker.updateTolerance(s),
        (this._endings = e.lineDashEnding),
        (this._customDashPos = -(e.offsetAlongLine ?? 0) * s),
        (this._offsetAtEnd = (e.customEndingOffset ?? 0) * s),
        (this._pattern = new De()),
        this._pattern.init(e.dashTemplate, !0),
        this._pattern.scale(s);
    }
    processPath(t) {
      if (this._pattern.length() === 0)
        return (this.iteratePath = !1), { paths: [t] };
      if (!this.iteratePath) {
        let i = !0;
        switch (this._endings) {
          case et.HalfPattern:
          case et.HalfGap:
          default:
            this._pattern.extPtGap = 0;
            break;
          case et.FullPattern:
            this.isClosed ||
              (this._pattern.extPtGap = 0.5 * this._pattern.firstValue());
            break;
          case et.FullGap:
            this.isClosed ||
              (this._pattern.extPtGap = 0.5 * this._pattern.lastValue());
            break;
          case et.NoConstraint:
            this.isClosed || (i = !1);
            break;
          case et.Custom:
            this.isClosed || (this._pattern.extPtGap = 0.5 * this._offsetAtEnd);
        }
        const r = this._walker.calculatePathLength(t);
        if (this._pattern.isEmpty() || r < 0.1 * this._pattern.length())
          return { paths: [t] };
        if (!this._walker.init(t, this._pattern, i)) return { paths: [t] };
      }
      let e;
      if (this.iteratePath) e = this._pattern.nextValue();
      else {
        let i;
        switch (this._endings) {
          case et.HalfPattern:
          default:
            i = 0.5 * this._pattern.firstValue();
            break;
          case et.HalfGap:
            i = 0.5 * -this._pattern.lastValue();
            break;
          case et.FullGap:
            i = -this._pattern.lastValue();
            break;
          case et.FullPattern:
            i = 0;
            break;
          case et.NoConstraint:
          case et.Custom:
            i = -this._customDashPos;
        }
        let r = i / this._pattern.length();
        (r -= Math.floor(r)),
          (i = r * this._pattern.length()),
          this._pattern.reset(),
          (e = this._pattern.nextValue());
        let n = !1;
        for (; i >= e; ) (i -= e), (e = this._pattern.nextValue()), (n = !n);
        (e -= i),
          n
            ? (this._walker.nextPosition(e), (e = this._pattern.nextValue()))
            : this.isClosed &&
              ((this._firstCurve = this._walker.nextCurve(e)),
              (e = this._pattern.nextValue()),
              this._walker.nextPosition(e),
              (e = this._pattern.nextValue()));
      }
      let s = this._walker.nextCurve(e);
      return (
        s
          ? this._walker.isPathEnd()
            ? ((this.iteratePath = !1),
              this._firstCurve &&
                (this._firstCurve.splice(0, 1),
                Gt.mergePath(s, this._firstCurve),
                (this._firstCurve = null)))
            : ((e = this._pattern.nextValue()),
              !this._walker.nextPosition(e) || this._walker.isPathEnd()
                ? ((this.iteratePath = !1),
                  this._firstCurve &&
                    ((s = this._firstCurve), (this._firstCurve = null)))
                : (this.iteratePath = !0))
          : ((this.iteratePath = !1),
            (s = this._firstCurve),
            (this._firstCurve = null)),
        { paths: [s] }
      );
    }
  },
  zi = class Qt {
    static local() {
      return Qt.instance === null && (Qt.instance = new Qt()), Qt.instance;
    }
    execute(e, s, i, r, n) {
      return new rn(e, s, i, r, n);
    }
  };
zi.instance = null;
let rn = class {
    constructor(t, e, s, i, r) {
      switch (
        ((this._inputGeometries = t),
        (this._tileKey = i),
        (this._geometryEngine = r),
        (this._width = (e.width !== void 0 ? e.width : 2) * s),
        e.method)
      ) {
        case Yt.Mitered:
        case Yt.Bevelled:
        case Yt.Rounded:
        case Yt.TrueBuffer:
        case Yt.Square:
      }
      this._option = e.option;
    }
    next() {
      let t;
      for (; (t = this._inputGeometries.next()); ) {
        if (V(t) && this._width > 0) {
          if (Math.min(t.xmax - t.xmin, t.ymax - t.ymin) - 2 * this._width < 0)
            return t;
          const e = [];
          return (
            e.push([
              [t.xmin, t.ymin],
              [t.xmin, t.ymax],
              [t.xmax, t.ymax],
              [t.xmax, t.ymin],
              [t.xmin, t.ymin],
            ]),
            e.push([
              [t.xmin + this._width, t.ymin + this._width],
              [t.xmax - this._width, t.ymin + this._width],
              [t.xmax - this._width, t.ymax - this._width],
              [t.xmin + this._width, t.ymax - this._width],
              [t.xmin + this._width, t.ymin + this._width],
            ]),
            { rings: e }
          );
        }
        if (O(t)) {
          let e = null;
          const s = this._geometryEngine;
          let i = t;
          if (
            this._tileKey &&
            ((i = Ms(t, Math.abs(this._width) + 1)),
            !i || !i.rings || i.rings.length === 0)
          )
            continue;
          if (
            ($(s) && (e = s.buffer(ds.WebMercator, i, -this._width, 1)),
            this._width > 0)
          ) {
            const r = [];
            for (const n of t.rings) n && r.push(n);
            if (e) for (const n of e.rings) n && r.push(n.reverse());
            if (r.length) return { rings: r };
          }
        }
      }
      return null;
    }
  },
  Ei = class te {
    static local() {
      return te.instance === null && (te.instance = new te()), te.instance;
    }
    execute(e, s, i, r, n) {
      return new nn(e, s, i);
    }
  };
Ei.instance = null;
let nn = class extends He {
    constructor(t, e, s) {
      super(t, !1, !0),
        (this._curveHelper = new Mt()),
        (this._length = (e.length !== void 0 ? e.length : 20) * s),
        (this._angle = e.angle !== void 0 ? e.angle : 225),
        (this._position = e.position !== void 0 ? e.position : 50),
        this._length < 0 && (this._length = -this._length),
        this._position < 20 && (this._position = 20),
        this._position > 80 && (this._position = 80),
        (this._mirror = !1);
    }
    processPath(t) {
      if (this._curveHelper.isEmpty(t, !1)) return null;
      const e = t[0],
        s = t[t.length - 1],
        i = [s[0] - e[0], s[1] - e[1]];
      this._curveHelper.normalize(i);
      const r = [
          e[0] + ((s[0] - e[0]) * this._position) / 100,
          e[1] + ((s[1] - e[1]) * this._position) / 100,
        ],
        n = Math.cos(((90 - this._angle) / 180) * Math.PI);
      let o = Math.sin(((90 - this._angle) / 180) * Math.PI);
      return (
        this._mirror && (o = -o),
        (this._mirror = !this._mirror),
        {
          paths: [
            [
              e,
              [r[0] - (this._length / 2) * n, r[1] - (this._length / 2) * o],
              [r[0] + (this._length / 2) * n, r[1] + (this._length / 2) * o],
              s,
            ],
          ],
        }
      );
    }
  },
  Oi = class ee {
    static local() {
      return ee.instance === null && (ee.instance = new ee()), ee.instance;
    }
    execute(e, s, i, r, n) {
      return new on(e, s, i);
    }
  };
Oi.instance = null;
let on = class {
    constructor(t, e, s) {
      (this._inputGeometries = t),
        (this._offsetX = e.offsetX !== void 0 ? e.offsetX * s : 0),
        (this._offsetY = e.offsetY !== void 0 ? -e.offsetY * s : 0);
    }
    next() {
      let t = this._inputGeometries.next();
      for (; t; ) {
        if (V(t))
          return {
            xmin: t.xmin + this._offsetX,
            xmax: t.xmax + this._offsetX,
            ymin: t.ymin + this._offsetY,
            ymax: t.ymax + this._offsetY,
          };
        if (O(t)) {
          const e = D(t);
          return this._moveMultipath(e.rings, this._offsetX, this._offsetY), e;
        }
        if (X(t)) {
          const e = D(t);
          return this._moveMultipath(e.paths, this._offsetX, this._offsetY), e;
        }
        if (mt(t)) {
          const e = D(t);
          return this._movePath(e.points, this._offsetX, this._offsetY), e;
        }
        if (Lt(t)) return { x: t.x + this._offsetX, y: t.y + this._offsetY };
        t = this._inputGeometries.next();
      }
      return null;
    }
    _moveMultipath(t, e, s) {
      if (t) for (const i of t) this._movePath(i, e, s);
    }
    _movePath(t, e, s) {
      if (t) for (const i of t) (i[0] += e), (i[1] += s);
    }
  },
  Ri = class se {
    static local() {
      return se.instance === null && (se.instance = new se()), se.instance;
    }
    execute(e, s, i, r, n) {
      return new an(e, s, i, r, n);
    }
  };
Ri.instance = null;
let an = class {
    constructor(t, e, s, i, r) {
      (this._inputGeometries = t),
        (this._tileKey = i),
        (this._geometryEngine = r),
        (this._curveHelper = new Mt()),
        (this._offset = (e.offset ?? 1) * s),
        (this._method = e.method),
        (this._option = e.option),
        (this._offsetFlattenError = Me * s);
    }
    next() {
      let t;
      for (; (t = this._inputGeometries.next()); ) {
        if (this._offset === 0) return t;
        if (V(t)) {
          if (this._method === vt.Rounded && this._offset > 0) {
            const i = [
                [t.xmin, t.ymin],
                [t.xmin, t.ymax],
                [t.xmax, t.ymax],
                [t.xmax, t.ymin],
                [t.xmin, t.ymin],
              ],
              r = this._curveHelper.offset(
                i,
                -this._offset,
                this._method,
                4,
                this._offsetFlattenError
              );
            return r ? { rings: [r] } : null;
          }
          if (Math.min(t.xmax - t.xmin, t.ymax - t.ymin) + 2 * this._offset > 0)
            return {
              xmin: t.xmin - this._offset,
              xmax: t.xmax + this._offset,
              ymin: t.ymin - this._offset,
              ymax: t.ymax + this._offset,
            };
        }
        const e = this._geometryEngine;
        if (it(e)) return null;
        let s = t;
        if (O(t)) {
          if (
            this._tileKey &&
            ((s = Ms(t, Math.abs(this._offset) + 1)),
            !s || !s.rings || s.rings.length === 0)
          )
            continue;
        } else if (
          X(t) &&
          this._tileKey &&
          ((s = Pi(t, Math.abs(this._offset) + 1)),
          !s || !s.paths || s.paths.length === 0)
        )
          continue;
        return e.offset(
          ds.WebMercator,
          s,
          -this._offset,
          1,
          this._method,
          4,
          this._offsetFlattenError
        );
      }
      return null;
    }
  },
  Fi = class ie {
    static local() {
      return ie.instance === null && (ie.instance = new ie()), ie.instance;
    }
    execute(e, s, i, r, n) {
      return new ln(e, s, i);
    }
  };
Fi.instance = null;
let ln = class {
    constructor(t, e, s) {
      (this._inputGeometries = t),
        (this._reverse = e.reverse === void 0 || e.reverse);
    }
    next() {
      let t = this._inputGeometries.next();
      for (; t; ) {
        if (!this._reverse) return t;
        if (X(t)) {
          const e = D(t);
          return $r(e.paths), e;
        }
        t = this._inputGeometries.next();
      }
      return null;
    }
  },
  Gi = class re {
    static local() {
      return re.instance === null && (re.instance = new re()), re.instance;
    }
    execute(e, s, i, r, n) {
      return new hn(e, s, i);
    }
  };
Gi.instance = null;
let hn = class {
    constructor(t, e, s) {
      (this._inputGeometries = t),
        (this._rotateAngle =
          e.angle !== void 0 ? (e.angle * Math.PI) / 180 : 0);
    }
    next() {
      let t = this._inputGeometries.next();
      for (; t; ) {
        if (this._rotateAngle === 0) return t;
        const e = Q();
        Xt(e, t);
        const s = (e[2] + e[0]) / 2,
          i = (e[3] + e[1]) / 2;
        if (V(t)) {
          const r = {
            rings: [
              [
                [t.xmin, t.ymin],
                [t.xmin, t.ymax],
                [t.xmax, t.ymax],
                [t.xmax, t.ymin],
                [t.xmin, t.ymin],
              ],
            ],
          };
          return this._rotateMultipath(r.rings, s, i), r;
        }
        if (O(t)) {
          const r = D(t);
          return this._rotateMultipath(r.rings, s, i), r;
        }
        if (X(t)) {
          const r = D(t);
          return this._rotateMultipath(r.paths, s, i), r;
        }
        if (mt(t)) {
          const r = D(t);
          return this._rotatePath(r.points, s, i), r;
        }
        if (Lt(t)) return t;
        t = this._inputGeometries.next();
      }
      return null;
    }
    _rotateMultipath(t, e, s) {
      if (t) for (const i of t) this._rotatePath(i, e, s);
    }
    _rotatePath(t, e, s) {
      if (t) {
        const i = Math.cos(this._rotateAngle),
          r = Math.sin(this._rotateAngle);
        for (const n of t) {
          const o = n[0] - e,
            a = n[1] - s;
          (n[0] = e + o * i - a * r), (n[1] = s + o * r + a * i);
        }
      }
    }
  },
  Xi = class ne {
    static local() {
      return ne.instance === null && (ne.instance = new ne()), ne.instance;
    }
    execute(e, s, i, r, n) {
      return new cn(e, s, i);
    }
  };
Xi.instance = null;
let cn = class {
    constructor(t, e, s) {
      (this._inputGeometries = t),
        (this._xFactor = e.xScaleFactor !== void 0 ? e.xScaleFactor : 1.15),
        (this._yFactor = e.yScaleFactor !== void 0 ? e.yScaleFactor : 1.15);
    }
    next() {
      let t = this._inputGeometries.next();
      for (; t; ) {
        if (this._xFactor === 1 && this._yFactor === 1) return t;
        const e = Q();
        Xt(e, t);
        const s = (e[2] + e[0]) / 2,
          i = (e[3] + e[1]) / 2;
        if (V(t)) {
          const r = {
            rings: [
              [
                [t.xmin, t.ymin],
                [t.xmin, t.ymax],
                [t.xmax, t.ymax],
                [t.xmax, t.ymin],
                [t.xmin, t.ymin],
              ],
            ],
          };
          return this._scaleMultipath(r.rings, s, i), r;
        }
        if (O(t)) {
          const r = D(t);
          return this._scaleMultipath(r.rings, s, i), r;
        }
        if (X(t)) {
          const r = D(t);
          return this._scaleMultipath(r.paths, s, i), r;
        }
        if (mt(t)) {
          const r = D(t);
          return this._scalePath(r.points, s, i), r;
        }
        if (Lt(t)) return t;
        t = this._inputGeometries.next();
      }
      return null;
    }
    _scaleMultipath(t, e, s) {
      if (t) for (const i of t) this._scalePath(i, e, s);
    }
    _scalePath(t, e, s) {
      if (t)
        for (const i of t) {
          const r = (i[0] - e) * this._xFactor,
            n = (i[1] - s) * this._yFactor;
          (i[0] = e + r), (i[1] = s + n);
        }
    }
  },
  Hi = class oe {
    static local() {
      return oe.instance === null && (oe.instance = new oe()), oe.instance;
    }
    execute(e, s, i, r, n) {
      return new un(e, s, i);
    }
  };
Hi.instance = null;
let un = class {
    constructor(t, e, s) {
      (this._inputGeometries = t),
        (this._height = (e.amplitude !== void 0 ? e.amplitude : 2) * s),
        (this._period = (e.period !== void 0 ? e.period : 3) * s),
        (this._style = e.waveform),
        this._height <= 0 && (this._height = Math.abs(this._height)),
        this._period <= 0 && (this._period = Math.abs(this._period)),
        (this._pattern = new De()),
        this._pattern.addValue(this._period),
        this._pattern.addValue(this._period),
        (this._walker = new Ye()),
        this._walker.updateTolerance(s);
    }
    next() {
      let t = this._inputGeometries.next();
      for (; t; ) {
        if (this._height === 0 || this._period === 0) return t;
        if (X(t)) {
          const e = this._processGeom(t.paths);
          if (e.length) return { paths: e };
        }
        if (O(t)) {
          const e = this._processGeom(t.rings);
          if (e.length) return { rings: e };
        }
        t = this._inputGeometries.next();
      }
      return null;
    }
    _processGeom(t) {
      const e = [];
      for (const s of t)
        if (this._walker.init(s, this._pattern))
          switch (this._style) {
            case ke.Sinus:
            default:
              e.push(this._constructCurve(s, !1));
              break;
            case ke.Square:
              e.push(this._constructSquare(s));
              break;
            case ke.Triangle:
              e.push(this._constructTriangle(s));
              break;
            case ke.Random:
              e.push(this._constructCurve(s, !0));
          }
        else e.push(s);
      return e;
    }
    _constructCurve(t, e) {
      const s = new Gt(),
        i = this._walker.calculatePathLength(t);
      let r = Math.round(i / this._period);
      r === 0 && (r = 1);
      const n = 16 * r + 1,
        o = i / r,
        a = this._period / 16,
        l = 1 / n,
        c = (2 * Math.PI * i) / o,
        h = 2 * Math.PI * Math.random(),
        f = 2 * Math.PI * Math.random(),
        u = 2 * Math.PI * Math.random(),
        p = 0.75 - Math.random() / 2,
        m = 0.75 - Math.random() / 2,
        _ = new _t();
      this._walker.curPointAndAngle(_), s.startPath(_.pt);
      let d = 0;
      for (;;) {
        if (!this._walker.nextPointAndAngle(a, _)) {
          s.lineTo(t[t.length - 1]);
          break;
        }
        {
          const y = d;
          let g;
          if (((d += l), e)) {
            const M = (this._height / 2) * (1 + 0.3 * Math.sin(p * c * y + h));
            (g = M * Math.sin(c * y + f)),
              (g += M * Math.sin(m * c * y + u)),
              (g /= 2);
          } else g = 0.5 * this._height * Math.sin(0.5 * c * y);
          s.lineTo([_.pt[0] - g * _.sa, _.pt[1] + g * _.ca]);
        }
      }
      return s.path();
    }
    _constructSquare(t) {
      const e = new Gt(),
        s = this._walker.calculatePathLength(t);
      Math.round(s / this._period);
      let i = !0;
      for (;;) {
        let r = !1;
        if (this._walker.curPositionIsValid()) {
          const n = new _t();
          this._walker.curPointAndAngle(n);
          const o = new _t();
          if (this._walker.nextPointAndAngle(this._period, o)) {
            const a = new _t();
            this._walker.nextPointAndAngle(this._period, a) &&
              (i ? (e.startPath(n.pt), (i = !1)) : e.lineTo(n.pt),
              e.lineTo([
                n.pt[0] - (this._height / 2) * n.sa,
                n.pt[1] + (this._height / 2) * n.ca,
              ]),
              e.lineTo([
                o.pt[0] - (this._height / 2) * o.sa,
                o.pt[1] + (this._height / 2) * o.ca,
              ]),
              e.lineTo([
                o.pt[0] + (this._height / 2) * o.sa,
                o.pt[1] - (this._height / 2) * o.ca,
              ]),
              e.lineTo([
                a.pt[0] + (this._height / 2) * a.sa,
                a.pt[1] - (this._height / 2) * a.ca,
              ]),
              (r = !0));
          }
        }
        if (!r) {
          e.lineTo(this._walker.getPathEnd());
          break;
        }
      }
      return e.path();
    }
    _constructTriangle(t) {
      const e = new Gt(),
        s = this._walker.calculatePathLength(t);
      Math.round(s / this._period);
      let i = !0;
      for (;;) {
        let r = !1;
        if (this._walker.curPositionIsValid()) {
          const n = new _t();
          this._walker.curPointAndAngle(n);
          const o = new _t();
          if (this._walker.nextPointAndAngle(this._period / 2, o)) {
            const a = new _t();
            this._walker.nextPointAndAngle(this._period, a) &&
              (this._walker.nextPosition(this._period / 2) &&
                (i ? (e.startPath(n.pt), (i = !1)) : e.lineTo(n.pt),
                e.lineTo([
                  o.pt[0] - (this._height / 2) * o.sa,
                  o.pt[1] + (this._height / 2) * o.ca,
                ]),
                e.lineTo([
                  a.pt[0] + (this._height / 2) * a.sa,
                  a.pt[1] - (this._height / 2) * a.ca,
                ])),
              (r = !0));
          }
        }
        if (!r) {
          e.lineTo(this._walker.getPathEnd());
          break;
        }
      }
      return e.path();
    }
  },
  Di = class ae {
    static local() {
      return ae.instance === null && (ae.instance = new ae()), ae.instance;
    }
    execute(e, s, i, r, n) {
      return new fn(e, s, i);
    }
  };
Di.instance = null;
let fn = class extends Pe {
    constructor(t, e, s) {
      super(t, !0, !0),
        (this._geometryWalker = new Ye()),
        this._geometryWalker.updateTolerance(s),
        (this._angleToLine = e.angleToLine ?? !0),
        (this._offset = (e.offset ? e.offset : 0) * s),
        (this._originalEndings = e.endings),
        (this._offsetAtEnd =
          (e.customEndingOffset ? e.customEndingOffset : 0) * s),
        (this._position = -(e.offsetAlongLine ? e.offsetAlongLine : 0) * s),
        (this._pattern = new De()),
        this._pattern.init(e.placementTemplate, !1),
        this._pattern.scale(s),
        (this._endings = this._originalEndings);
    }
    processPath(t) {
      if (this._pattern.isEmpty()) return null;
      let e;
      if (this.iteratePath) e = this._pattern.nextValue();
      else {
        this._originalEndings === pt.WithFullGap && this.isClosed
          ? (this._endings = pt.WithMarkers)
          : (this._endings = this._originalEndings),
          (this._pattern.extPtGap = 0);
        let i,
          r = !0;
        switch (this._endings) {
          case pt.NoConstraint:
            (i = -this._position), (i = this._adjustPosition(i)), (r = !1);
            break;
          case pt.WithHalfGap:
          default:
            i = -this._pattern.lastValue() / 2;
            break;
          case pt.WithFullGap:
            (i = -this._pattern.lastValue()),
              (this._pattern.extPtGap = this._pattern.lastValue());
            break;
          case pt.WithMarkers:
            i = 0;
            break;
          case pt.Custom:
            (i = -this._position),
              (i = this._adjustPosition(i)),
              (this._pattern.extPtGap = 0.5 * this._offsetAtEnd);
        }
        if (!this._geometryWalker.init(t, this._pattern, r)) return null;
        this._pattern.reset();
        let n = 0;
        for (; i > n; ) (i -= n), (n = this._pattern.nextValue());
        (n -= i), (e = n), (this.iteratePath = !0);
      }
      const s = new _t();
      return this._geometryWalker.nextPointAndAngle(e, s)
        ? this._endings === pt.WithFullGap && this._geometryWalker.isPathEnd()
          ? ((this.iteratePath = !1), null)
          : this._endings === pt.WithMarkers &&
            this._geometryWalker.isPathEnd() &&
            ((this.iteratePath = !1), this.isClosed)
          ? null
          : (this.internalPlacement.setTranslate(
              s.pt[0] - this._offset * s.sa,
              s.pt[1] + this._offset * s.ca
            ),
            this._angleToLine && this.internalPlacement.setRotateCS(s.ca, s.sa),
            this.internalPlacement)
        : ((this.iteratePath = !1), null);
    }
    _adjustPosition(t) {
      let e = t / this._pattern.length();
      return (e -= Math.floor(e)), e * this._pattern.length();
    }
  },
  Yi = class le {
    static local() {
      return le.instance === null && (le.instance = new le()), le.instance;
    }
    execute(e, s, i, r, n) {
      return new mn(e, s, i);
    }
  };
Yi.instance = null;
let mn = class extends Pe {
    constructor(t, e, s) {
      super(t, !1, !0),
        (this._curveHelper = new Mt()),
        (this._angleToLine = e.angleToLine === void 0 || e.angleToLine),
        (this._offset = e.offset !== void 0 ? e.offset * s : 0),
        (this._type = e.extremityPlacement),
        (this._position =
          e.offsetAlongLine !== void 0 ? e.offsetAlongLine * s : 0),
        (this._beginProcessed = !1);
    }
    processPath(t) {
      let e;
      switch (this._type) {
        case xt.Both:
        default:
          this._beginProcessed
            ? ((e = this._atExtremities(t, this._position, !1)),
              (this._beginProcessed = !1),
              (this.iteratePath = !1))
            : ((e = this._atExtremities(t, this._position, !0)),
              (this._beginProcessed = !0),
              (this.iteratePath = !0));
          break;
        case xt.JustBegin:
          e = this._atExtremities(t, this._position, !0);
          break;
        case xt.JustEnd:
          e = this._atExtremities(t, this._position, !1);
        case xt.None:
      }
      return e;
    }
    _atExtremities(t, e, s) {
      const i = t.length;
      if (i < 2) return null;
      const r = s ? 1 : i - 2,
        n = s ? i : -1,
        o = s ? 1 : -1;
      let a,
        l = 0,
        c = s ? t[0] : t[i - 1];
      for (let h = r; h !== n; h += o) {
        (a = c), (c = t[h]);
        const f = this._curveHelper.calculateLength(a, c);
        if (l + f > e) {
          const u = (e - l) / f,
            [p, m] = this._curveHelper.getAngleCS(a, c, u),
            _ = us(a, c, u);
          return (
            this.internalPlacement.setTranslate(
              _[0] - this._offset * m,
              _[1] + this._offset * p
            ),
            this._angleToLine && this.internalPlacement.setRotateCS(-p, -m),
            this.internalPlacement
          );
        }
        l += f;
      }
      return null;
    }
  },
  Vi = class he {
    static local() {
      return he.instance === null && (he.instance = new he()), he.instance;
    }
    execute(e, s, i, r, n) {
      return new pn(e, s, i);
    }
  };
Vi.instance = null;
let pn = class extends Pe {
  constructor(t, e, s) {
    super(t, !0, !0),
      (this._walker = new Ye()),
      this._walker.updateTolerance(s),
      (this._angleToLine = e.angleToLine === void 0 || e.angleToLine),
      (this._offset = e.offset !== void 0 ? e.offset * s : 0),
      (this._beginGap = e.beginPosition !== void 0 ? e.beginPosition * s : 0),
      (this._endGap = e.endPosition !== void 0 ? e.endPosition * s : 0),
      (this._flipFirst = e.flipFirst === void 0 || e.flipFirst),
      (this._pattern = new De()),
      this._pattern.init(e.positionArray, !1, !1),
      (this._subPathLen = 0),
      (this._posCount = this._pattern.size()),
      (this._isFirst = !0),
      (this._prevPos = 0);
  }
  processPath(t) {
    if (this._pattern.isEmpty()) return null;
    let e;
    if (this.iteratePath) {
      const o = this._pattern.nextValue() * this._subPathLen,
        a = this._beginGap + o;
      (e = a - this._prevPos), (this._prevPos = a);
    } else {
      if (
        ((this._posCount = this._pattern.size()),
        (this._isFirst = !0),
        (this._prevPos = 0),
        (this._subPathLen =
          this._walker.calculatePathLength(t) - this._beginGap - this._endGap),
        this._subPathLen < 0)
      )
        return (this.iteratePath = !1), null;
      if (!this._walker.init(t, this._pattern, !1)) return null;
      this._pattern.reset();
      const o = this._pattern.nextValue() * this._subPathLen,
        a = this._beginGap + o;
      (e = a - this._prevPos), (this._prevPos = a), (this.iteratePath = !0);
    }
    const s = new _t();
    if (!this._walker.nextPointAndAngle(e, s, Pt.END))
      return (this.iteratePath = !1), null;
    this.internalPlacement.setTranslate(
      s.pt[0] - this._offset * s.sa,
      s.pt[1] + this._offset * s.ca
    );
    const i = this._isFirst && this._flipFirst;
    let r, n;
    return (
      this._angleToLine ? ((r = s.ca), (n = s.sa)) : ((r = 1), (n = 0)),
      i && ((r = -r), (n = -n)),
      this.internalPlacement.setRotateCS(r, n),
      (this._isFirst = !1),
      this._posCount--,
      this._posCount === 0 && (this.iteratePath = !1),
      this.internalPlacement
    );
  }
};
const Vt = 512,
  ct = 24;
let Bi = class ce {
  static local() {
    return ce.instance === null && (ce.instance = new ce()), ce.instance;
  }
  execute(e, s, i, r, n) {
    return new _n(e, s, i, r, n);
  }
};
Bi.instance = null;
let _n = class Ct {
  constructor(e, s, i, r, n) {
    if (
      ((this._xMin = 0),
      (this._xMax = 0),
      (this._yMin = 0),
      (this._yMax = 0),
      (this._currentX = 0),
      (this._currentY = 0),
      (this._accelerationMap = null),
      (this._testInsidePolygon = !1),
      (this._verticalSubdivision = !0),
      (this._stepX = Math.abs(s.stepX ?? 16) * i),
      (this._stepY = Math.abs(s.stepY ?? 16) * i),
      this._stepX !== 0 &&
        this._stepY !== 0 &&
        e &&
        (function (o) {
          return o.rings !== void 0;
        })(e) &&
        e.rings)
    ) {
      if (
        ((this._gridType = s.gridType ?? Je.Fixed),
        this._gridType === Je.Random)
      ) {
        const o = s.seed ?? 13,
          a = 1;
        (this._randomLCG = new si(o * a)),
          (this._randomness = (s.randomness ?? 100) / 100),
          (this._gridAngle = 0),
          (this._shiftOddRows = !1),
          (this._cosAngle = 1),
          (this._sinAngle = 0),
          (this._offsetX = 0),
          (this._offsetY = 0),
          this._buildRandomValues();
      } else {
        if (
          ((this._randomness = 0),
          (this._gridAngle = s.gridAngle ?? 0),
          (this._shiftOddRows = s.shiftOddRows ?? !1),
          (this._offsetX = (s.offsetX ?? 0) * i),
          (this._offsetY = (s.offsetY ?? 0) * i),
          (this._cosAngle = Math.cos((this._gridAngle / 180) * Math.PI)),
          (this._sinAngle = -Math.sin((this._gridAngle / 180) * Math.PI)),
          this._stepX)
        )
          if (this._offsetX < 0)
            for (; this._offsetX < -0.5 * this._stepX; )
              this._offsetX += this._stepX;
          else
            for (; this._offsetX >= 0.5 * this._stepX; )
              this._offsetX -= this._stepX;
        if (this._stepY)
          if (this._offsetY < 0)
            for (; this._offsetY < -0.5 * this._stepY; )
              this._offsetY += this._stepY;
          else
            for (; this._offsetY >= 0.5 * this._stepY; )
              this._offsetY -= this._stepY;
      }
      if (((this._graphicOriginX = 0), (this._graphicOriginY = 0), r != null)) {
        const [o, a, l] = r.split("/"),
          c = parseFloat(a),
          h = parseFloat(l);
        (this._graphicOriginX = -h * Vt),
          (this._graphicOriginY = c * Vt),
          (this._testInsidePolygon = !0);
      }
      (this._internalPlacement = new Ht()),
        this._calculateMinMax(e),
        (this._geometry = e);
    }
  }
  next() {
    return this._geometry ? this._nextInside() : null;
  }
  _buildRandomValues() {
    if (!Ct._randValues) {
      Ct._randValues = [];
      for (let e = 0; e < ct; e++)
        for (let s = 0; s < ct; s++)
          Ct._randValues.push(this._randomLCG.getFloat()),
            Ct._randValues.push(this._randomLCG.getFloat());
    }
  }
  _calculateMinMax(e) {
    let s, i, r, n, o, a, l, c, h, f, u, p, m, _;
    (this._xMin = 0),
      (this._xMax = 0),
      (this._yMin = 0),
      (this._yMax = 0),
      (l = c = m = u = Number.MAX_VALUE),
      (h = f = _ = p = -Number.MAX_VALUE);
    const d = this._cosAngle !== 1;
    let y = 0;
    for (const b of e.rings) {
      const S = b ? b.length : 0;
      for (let P = 0; P < S; P++)
        (a = b[P][0]),
          (o = b[P][1]),
          (s = a - this._graphicOriginX - this._offsetX),
          (i = o - this._graphicOriginY - this._offsetY),
          d
            ? ((r = this._cosAngle * s - this._sinAngle * i),
              (n = this._sinAngle * s + this._cosAngle * i))
            : ((r = s), (n = i)),
          (l = Math.min(l, r)),
          (h = Math.max(h, r)),
          (c = Math.min(c, n)),
          (f = Math.max(f, n)),
          (u = Math.min(u, o)),
          (p = Math.max(p, o)),
          (m = Math.min(m, a)),
          (_ = Math.max(_, a)),
          y++;
    }
    (u = u !== Number.MAX_VALUE ? u : -512 - this._stepY),
      (p = p !== -Number.MAX_VALUE ? p : this._stepY),
      (m = m !== Number.MAX_VALUE ? m : -this._stepX),
      (_ = _ !== -Number.MAX_VALUE ? _ : Vt + this._stepX);
    const g = p - u,
      M = _ - m;
    if (
      ((this._verticalSubdivision = g >= M),
      (this._polygonMin = this._verticalSubdivision ? u : m),
      this._testInsidePolygon)
    ) {
      let b = 0 - this._graphicOriginX - this._offsetX - this._stepX,
        S = Vt - this._graphicOriginX - this._offsetX + this._stepX,
        P = -512 - this._graphicOriginY - this._offsetY - this._stepY,
        x = 0 - this._graphicOriginY - this._offsetY + this._stepY;
      if (d) {
        const k = [
          [b, P],
          [b, x],
          [S, P],
          [S, x],
        ];
        (b = P = Number.MAX_VALUE), (S = x = -Number.MAX_VALUE);
        for (const v of k) {
          const C = this._cosAngle * v[0] - this._sinAngle * v[1],
            w = this._sinAngle * v[0] + this._cosAngle * v[1];
          (b = Math.min(b, C)),
            (S = Math.max(S, C)),
            (P = Math.min(P, w)),
            (x = Math.max(x, w));
        }
      }
      (l = l !== Number.MAX_VALUE ? Math.max(l, b) : b),
        (c = c !== Number.MAX_VALUE ? Math.max(c, P) : P),
        (h = h !== -Number.MAX_VALUE ? Math.min(h, S) : S),
        (f = f !== -Number.MAX_VALUE ? Math.min(f, x) : x);
    }
    (this._xMin = Math.round(l / this._stepX)),
      (this._xMax = Math.round(h / this._stepX)),
      (this._yMin = Math.round(c / this._stepY)),
      (this._yMax = Math.round(f / this._stepY)),
      (this._currentX = this._xMax + 1),
      (this._currentY = this._yMin - 1),
      this._testInsidePolygon &&
        y > 12 &&
        (g > 25 || M > 25) &&
        this._buildAccelerationMap(e, m, _, u, p);
  }
  _buildAccelerationMap(e, s, i, r, n) {
    const { rings: o } = e,
      a = new Map(),
      l = this._verticalSubdivision,
      c = l ? n - r : i - s;
    let h = Math.ceil(c / 10);
    if (h <= 1) return;
    const f = Math.floor(c / h);
    let u, p, m, _, d, y, g, M, b, S;
    h++,
      (this._delta = f),
      l
        ? ((M = -512 - this._stepY), (b = this._stepY), (S = r))
        : ((M = -this._stepX), (b = Vt + this._stepX), (S = s));
    for (let P = 0; P < o.length; P++)
      if (((u = o[P]), !(u.length < 2)))
        for (let x = 1; x < u.length; x++) {
          if (((p = u[x - 1]), (m = u[x]), l)) {
            if (
              p[1] === m[1] ||
              (p[1] < M && m[1] < M) ||
              (p[1] > b && m[1] > b)
            )
              continue;
            (_ = Math.min(p[1], m[1])), (d = Math.max(p[1], m[1]));
          } else {
            if (
              p[0] === m[0] ||
              (p[0] < M && m[0] < M) ||
              (p[0] > b && m[0] > b)
            )
              continue;
            (_ = Math.min(p[0], m[0])), (d = Math.max(p[0], m[0]));
          }
          for (; _ < d; )
            (y = Math.floor((_ - S) / f)), Gs(y, P, x, a), (_ += f);
          (g = Math.floor((d - S) / f)), g > y && Gs(g, P, x, a);
        }
    this._accelerationMap = a;
  }
  _nextInside() {
    for (;;) {
      if (this._currentX > this._xMax) {
        if ((this._currentY++, this._currentY > this._yMax)) return null;
        (this._currentX = this._xMin),
          this._shiftOddRows && this._currentY % 2 && this._currentX--;
      }
      let e = this._currentX * this._stepX + this._offsetX;
      this._shiftOddRows && this._currentY % 2 && (e += 0.5 * this._stepX);
      const s = this._currentY * this._stepY + this._offsetY;
      let i, r;
      if ((this._currentX++, this._gridType === Je.Random)) {
        const n = ((this._currentX % ct) + ct) % ct,
          o = ((this._currentY % ct) + ct) % ct;
        (i =
          this._graphicOriginX +
          e +
          (this._stepX *
            this._randomness *
            (0.5 - Ct._randValues[o * ct + n]) *
            2) /
            3),
          (r =
            this._graphicOriginY +
            s +
            (this._stepY *
              this._randomness *
              (0.5 - Ct._randValues[o * ct + n + 1]) *
              2) /
              3);
      } else
        (i = this._graphicOriginX + this._cosAngle * e + this._sinAngle * s),
          (r = this._graphicOriginY - this._sinAngle * e + this._cosAngle * s);
      if (
        !this._testInsidePolygon ||
        this._isInsidePolygon(i, r, this._geometry)
      )
        return (
          this._internalPlacement.setTranslate(i, r), this._internalPlacement
        );
    }
  }
  _isInsidePolygon(e, s, i) {
    const { rings: r } = i;
    if (it(this._accelerationMap))
      return (function (_, d, y) {
        const { rings: g } = y;
        let M,
          b,
          S,
          P = 0;
        for (const x of g) {
          M = x.length;
          for (let k = 1; k < M; ++k)
            (b = x[k - 1]),
              (S = x[k]),
              b[1] > d != S[1] > d &&
                ((S[0] - b[0]) * (d - b[1]) - (S[1] - b[1]) * (_ - b[0]) > 0
                  ? P++
                  : P--);
        }
        return P !== 0;
      })(e, s, i);
    const n = this._verticalSubdivision,
      o = n ? s : e,
      a = Math.floor((o - this._polygonMin) / this._delta),
      l = this._accelerationMap.get(a);
    if (!l) return !1;
    let c,
      h,
      f,
      u,
      p,
      m = 0;
    for (const _ of l) {
      p = _[0];
      const d = r[p];
      if (((u = _[1]), (c = d[u - 1]), (h = d[u]), n)) {
        if (c[1] > s == h[1] > s) continue;
        f = (h[0] - c[0]) * (s - c[1]) - (h[1] - c[1]) * (e - c[0]);
      } else {
        if (c[0] > e == h[0] > e) continue;
        f = (h[1] - c[1]) * (e - c[0]) - (h[0] - c[0]) * (s - c[1]);
      }
      f > 0 ? m++ : m--;
    }
    return m !== 0;
  }
};
function Gs(t, e, s, i) {
  let r = i.get(t);
  r || ((r = []), i.set(t, r)), r.push([e, s]);
}
let Wi = class ue {
  static local() {
    return ue.instance === null && (ue.instance = new ue()), ue.instance;
  }
  execute(e, s, i, r, n) {
    return new dn(e, s, i);
  }
};
Wi.instance = null;
let dn = class extends Pe {
    constructor(t, e, s) {
      super(t, !0, !0),
        (this._curveHelper = new Mt()),
        (this._angleToLine = e.angleToLine === void 0 || e.angleToLine),
        (this._offset = e.offset !== void 0 ? e.offset * s : 0),
        (this._relativeTo = e.relativeTo),
        (this._position =
          e.startPointOffset !== void 0 ? e.startPointOffset * s : 0),
        (this._epsilon = 0.001 * s);
    }
    processPath(t) {
      const e = this._position;
      if (this._relativeTo === zt.SegmentMidpoint) {
        for (
          this.iteratePath ||
          ((this._segmentCount = t.length),
          (this._curSegment = 1),
          (this.iteratePath = !0));
          this._curSegment < this._segmentCount;

        ) {
          const i = this._curSegment;
          this._curSegment++;
          const r = t[i - 1],
            n = t[i],
            o = this._curveHelper.calculateLength(r, n);
          if (o < this._epsilon) continue;
          const a = 0.5 + this._position / o,
            [l, c] = this._curveHelper.getAngleCS(r, n, a),
            h = us(r, n, a);
          return (
            this.internalPlacement.setTranslate(
              h[0] - this._offset * c,
              h[1] + this._offset * l
            ),
            this._angleToLine && this.internalPlacement.setRotateCS(l, c),
            this.internalPlacement
          );
        }
        return (this.iteratePath = !1), null;
      }
      this._relativeTo === zt.LineEnd && cs(t);
      const s = this.onLine(t, e);
      return this._relativeTo === zt.LineEnd && cs(t), s;
    }
    onLine(t, e) {
      let s,
        i = !1;
      switch (this._relativeTo) {
        case zt.LineMiddle:
        default:
          s = this._curveHelper.calculatePathLength(t) / 2 + e;
          break;
        case zt.LineBeginning:
          s = e;
          break;
        case zt.LineEnd:
          (s = e), (i = !0);
      }
      const r = t.length;
      let n,
        o = 0,
        a = t[0];
      for (let l = 1; l < r; ++l) {
        (n = a), (a = t[l]);
        const c = this._curveHelper.calculateLength(n, a);
        if (o + c > s) {
          const h = (s - o) / c,
            [f, u] = this._curveHelper.getAngleCS(n, a, h),
            p = us(n, a, h),
            m = i ? -this._offset : this._offset;
          return (
            this.internalPlacement.setTranslate(p[0] - m * u, p[1] + m * f),
            this._angleToLine &&
              (i
                ? this.internalPlacement.setRotateCS(-f, -u)
                : this.internalPlacement.setRotateCS(f, u)),
            this.internalPlacement
          );
        }
        o += c;
      }
      return null;
    }
  },
  Ui = class fe {
    static local() {
      return fe.instance === null && (fe.instance = new fe()), fe.instance;
    }
    execute(e, s, i, r, n) {
      return new yn(e, s, i);
    }
  };
Ui.instance = null;
const gn = 1e-15;
let yn = class extends Pe {
  constructor(t, e, s) {
    super(t, !0, !0),
      (this._curveHelper = new Mt()),
      (this._angleToLine = e.angleToLine === void 0 || e.angleToLine),
      (this._offset = e.offset !== void 0 ? e.offset * s : 0),
      (this._endPoints = e.placeOnEndPoints === void 0 || e.placeOnEndPoints),
      (this._controlPoints =
        e.placeOnControlPoints === void 0 || e.placeOnControlPoints),
      (this._regularVertices =
        e.placeOnRegularVertices === void 0 || e.placeOnRegularVertices),
      (this._tags = []),
      (this._tagIterator = 0);
  }
  processPath(t) {
    if (
      (this.iteratePath || (this._preparePath(t), (this.iteratePath = !0)),
      this._tagIterator >= this._tags.length)
    )
      return (
        (this._tags.length = 0),
        (this._tagIterator = 0),
        (this.iteratePath = !1),
        null
      );
    const e = this._tags[this._tagIterator];
    this._angleToLine && this.internalPlacement.setRotate(e[2]);
    let s = e[0],
      i = e[1];
    if (this._offset !== 0) {
      const r = Math.cos(e[2]),
        n = Math.sin(e[2]);
      (s -= this._offset * n), (i += this._offset * r);
    }
    return (
      this.internalPlacement.setTranslate(s, i),
      this._tagIterator++,
      this.internalPlacement
    );
  }
  _preparePath(t) {
    (this._tags.length = 0), (this._tagIterator = 0);
    const e = (function (h) {
        return (
          !(!h || h.length === 0) &&
          h[0][0] === h[h.length - 1][0] &&
          h[0][1] === h[h.length - 1][1]
        );
      })(t),
      s = t.length - 1;
    let i,
      r,
      n = 0,
      o = 0,
      a = 0,
      l = 0,
      c = 0;
    for (; n < s; ) {
      n++, (i = t[n - 1]), (r = t[n]);
      const h = de(i),
        f = de(r);
      (this._angleToLine || this._offset !== 0) &&
        (l = this._curveHelper.getAngle(i, r, 0)),
        n === 1
          ? e
            ? ((o = l), (a = h))
            : (this._endPoints || (this._controlPoints && h === 1)) &&
              this._tags.push([i[0], i[1], l])
          : h === 1
          ? this._controlPoints && this._tags.push([i[0], i[1], Ae(c, l)])
          : this._regularVertices && this._tags.push([i[0], i[1], Ae(c, l)]),
        (this._angleToLine || this._offset !== 0) &&
          (c = this._curveHelper.getAngle(i, r, 1)),
        n === s &&
          (e
            ? f === 1 || a === 1
              ? this._controlPoints && this._tags.push([r[0], r[1], Ae(c, o)])
              : this._regularVertices && this._tags.push([r[0], r[1], Ae(c, o)])
            : (this._endPoints || (this._controlPoints && f === 1)) &&
              this._tags.push([r[0], r[1], c]));
    }
    this._tagIterator = 0;
  }
};
function Ae(t, e) {
  const s = Math.PI;
  for (; Math.abs(e - t) > s + 2 * gn; )
    e - t > s ? (e -= 2 * s) : (e += 2 * s);
  return (t + e) / 2;
}
let Mn = class {
  constructor(t = bn) {
    (this._data = []), (this._compare = t);
  }
  get size() {
    return this._data.length;
  }
  enqueue(t) {
    if (t == null) return;
    const { _data: e, _compare: s } = this;
    e.push(t);
    let i = (e.length - 1) >>> 0;
    const r = e[i];
    for (; i > 0; ) {
      const n = (i - 1) >> 1,
        o = e[n];
      if (!(s(o, r) <= 0)) break;
      (e[n] = r), (e[i] = o), (i = n);
    }
  }
  dequeue() {
    const { _data: t, _compare: e } = this,
      s = t[0],
      i = t.pop();
    if (t.length === 0) return s;
    t[0] = i;
    let r = 0;
    const n = t.length,
      o = t[0];
    let a,
      l,
      c = null;
    for (;;) {
      const h = 2 * r + 1,
        f = 2 * r + 2;
      if (
        ((c = null),
        h < n && ((a = t[h]), e(a, o) > 0 && (c = h)),
        f < n &&
          ((l = t[f]),
          ((c === null && e(l, o) <= 0) || (c !== null && e(l, a) <= 0)) &&
            (c = f)),
        c === null)
      )
        break;
      (t[r] = t[c]), (t[c] = o), (r = c);
    }
    return s;
  }
};
const bn = (t, e) => (t < e ? -1 : t > e ? 1 : 0),
  Pn = 222045e-19;
function Re(t, e) {
  const { rings: s } = e;
  let i = 0;
  for (const r of s) {
    const n = r.length;
    for (let o = 1; o < n; ++o) {
      const a = r[o - 1],
        l = r[o];
      a[1] > t[1] != l[1] > t[1] &&
        ((l[0] - a[0]) * (t[1] - a[1]) - (l[1] - a[1]) * (t[0] - a[0]) > 0
          ? i++
          : i--);
    }
  }
  return i !== 0;
}
function Bt(t, e, s) {
  if (s && Re(t, e)) return { coord: t, distance: 0 };
  let i = 1 / 0,
    r = 0,
    n = 0;
  const o = [0, 0],
    { rings: a } = e;
  for (const l of a)
    if (!(l.length < 2))
      for (let c = 0; c < l.length - 1; c++) {
        pr(o, t, l, c);
        const h = wt(t, o);
        h < i && ((i = h), (r = o[0]), (n = o[1]));
      }
  return { coord: [r, n], distance: Math.sqrt(i) };
}
function Qe(t, e, s, i) {
  const r = [e, 0];
  let n = 1 / 0,
    o = 1 / 0,
    a = !1,
    l = !1;
  const c = [
      [e, i[1] - 1],
      [e, i[3] + 1],
    ],
    h = [0, 0],
    f = [0, 0],
    u = [0, 0],
    p = [
      [0, 0],
      [0, 0],
    ],
    m = Q(),
    { rings: _ } = t;
  for (const d of _)
    if (!(d.length < 2))
      for (let y = 1; y < d.length; y++) {
        if (
          ((p[0][0] = d[y - 1][0]),
          (p[0][1] = d[y - 1][1]),
          (p[1][0] = d[y][0]),
          (p[1][1] = d[y][1]),
          xn(m, p) === null ||
            ((f[0] = c[0][0]),
            (f[1] = c[0][1]),
            (u[0] = c[1][0]),
            (u[1] = c[1][1]),
            Sn(m, f, u) === 0) ||
            !_r(c[0], c[1], p[0], p[1], h))
        )
          continue;
        const g = h[1];
        n > o ? g < n && ((n = g), (a = !0)) : g < o && ((o = g), (l = !0));
      }
  return a && l ? (r[1] = (n + o) / 2) : (r[0] = r[1] = NaN), r;
}
function xn(t, e) {
  if (e.length < 2) return null;
  t || (t = Q());
  const [s, i] = e[0],
    [r, n] = e[1];
  return (
    (t[0] = Math.min(s, r)),
    (t[1] = Math.min(i, n)),
    (t[2] = Math.max(s, r)),
    (t[3] = Math.max(i, n)),
    t
  );
}
const Ne = 1,
  ze = 4,
  Xs = 3,
  Hs = 12;
function Sn(t, e, s) {
  let i = ut(e, t),
    r = ut(s, t);
  const n = t[0],
    o = t[1],
    a = t[2],
    l = t[3];
  if (i & r) return 0;
  if (!(i | r)) return 4;
  const c = (i ? 1 : 0) | (r ? 2 : 0);
  do {
    const h = s[0] - e[0],
      f = s[1] - e[1];
    if (h > f)
      i & Xs
        ? (i & Ne
            ? ((e[1] += (f * (n - e[0])) / h), (e[0] = n))
            : ((e[1] += (f * (a - e[0])) / h), (e[0] = a)),
          (i = ut(e, t)))
        : r & Xs
        ? (r & Ne
            ? ((s[1] += (f * (n - s[0])) / h), (s[0] = n))
            : ((s[1] += (f * (a - s[0])) / h), (s[0] = a)),
          (r = ut(s, t)))
        : i
        ? (i & ze
            ? ((e[0] += (h * (o - e[1])) / f), (e[1] = o))
            : ((e[0] += (h * (l - e[1])) / f), (e[1] = l)),
          (i = ut(e, t)))
        : (r & ze
            ? ((s[0] += (h * (o - s[1])) / f), (s[1] = o))
            : ((s[0] += (h * (l - s[1])) / f), (s[1] = l)),
          (r = ut(s, t)));
    else if (
      (i & Hs
        ? (i & ze
            ? ((e[0] += (h * (o - e[1])) / f), (e[1] = o))
            : ((e[0] += (h * (l - e[1])) / f), (e[1] = l)),
          (i = ut(e, t)))
        : r & Hs
        ? (r & ze
            ? ((s[0] += (h * (o - s[1])) / f), (s[1] = o))
            : ((s[0] += (h * (l - s[1])) / f), (s[1] = l)),
          (r = ut(s, t)))
        : i
        ? (i & Ne
            ? ((e[1] += (f * (n - e[0])) / h), (e[0] = n))
            : ((e[1] += (f * (a - e[0])) / h), (e[0] = a)),
          (i = ut(e, t)))
        : (r & Ne
            ? ((s[1] += (f * (n - s[0])) / h), (s[0] = n))
            : ((s[1] += (f * (a - s[0])) / h), (s[0] = a)),
          (r = ut(s, t))),
      i & r)
    )
      return 0;
  } while (i | r);
  return c;
}
function ut(t, e) {
  return (
    (t[0] < e[0] ? 1 : 0) |
    ((t[0] > e[2] ? 1 : 0) << 1) |
    ((t[1] < e[1] ? 1 : 0) << 2) |
    ((t[1] > e[3] ? 1 : 0) << 3)
  );
}
function ts(t, e, s) {
  return t + (e - t) * s;
}
function wt(t, e) {
  return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
}
function Cn(t, e) {
  if (t < e) return -1;
  if (t > e) return 1;
  if (t === e) return 0;
  const s = isNaN(t),
    i = isNaN(e);
  return s < i ? -1 : s > i ? 1 : 0;
}
let Ot = class {
  constructor(t, e, s, i) {
    (this.x = t),
      (this.y = e),
      (this.cellSize = s),
      (this.distancefromCellCenter = yr(t, e, i)),
      (this.maxDistanceToPolygon =
        this.distancefromCellCenter + this.cellSize * Math.SQRT2);
  }
};
const wn = 1,
  kn = 100;
let qi = class me {
  static local() {
    return me.instance === null && (me.instance = new me()), me.instance;
  }
  execute(e, s, i, r, n) {
    return new vn(e, s, i);
  }
};
qi.instance = null;
let vn = class {
  constructor(t, e, s) {
    (this._geometry = t),
      (this._offsetX = e.offsetX !== void 0 ? e.offsetX * s : 0),
      (this._offsetY = e.offsetY !== void 0 ? e.offsetY * s : 0),
      (this._method = e.method !== void 0 ? e.method : ve.OnPolygon),
      (this._internalPlacement = new Ht());
  }
  next() {
    const t = this._geometry;
    return (
      (this._geometry = null),
      t &&
      (function (e) {
        return e.rings !== void 0;
      })(t)
        ? this._polygonCenter(t)
        : null
    );
  }
  _polygonCenter(t) {
    let e = !1;
    switch (this._method) {
      case ve.CenterOfMass:
        {
          const s = br(t);
          s &&
            (this._internalPlacement.setTranslate(
              s[0] + this._offsetX,
              s[1] + this._offsetY
            ),
            (e = !0));
        }
        break;
      case ve.BoundingBoxCenter:
        {
          const s = Q();
          Xt(s, t),
            s &&
              (this._internalPlacement.setTranslate(
                (s[2] + s[0]) / 2 + this._offsetX,
                (s[3] + s[1]) / 2 + this._offsetY
              ),
              (e = !0));
        }
        break;
      case ve.OnPolygon:
      default: {
        let s;
        (s = Mr("polylabel-placement-enabled")
          ? (function (i) {
              if (!i || !i.rings || i.rings.length === 0) return null;
              const r = Ue(Q(), i.rings[0]);
              if (!r) return null;
              const n = r[2] - r[0],
                o = r[3] - r[1];
              if (n === 0 || o === 0) return [r[0] + n / 2, r[1] + o / 2];
              const a = Math.max(Math.min(n, o) / kn, wn),
                l = new Mn(
                  (d, y) => y.maxDistanceToPolygon - d.maxDistanceToPolygon
                ),
                c = Math.min(n, o);
              let h = c / 2,
                f = 0,
                u = 0;
              for (f = r[0]; f < r[2]; f += c)
                for (u = r[1]; u < r[3]; u += c)
                  l.enqueue(new Ot(f + h, u + h, h, i));
              const p = dr(i.rings, !1);
              if (p === null) return null;
              let m,
                _ = new Ot(p[0], p[1], 0, i);
              for (; l.size > 0; )
                (m = gr(l.dequeue())),
                  m.distancefromCellCenter > _.distancefromCellCenter &&
                    (_ = m),
                  m.maxDistanceToPolygon - _.distancefromCellCenter <= a ||
                    ((h = m.cellSize / 2),
                    l.enqueue(new Ot(m.x - h, m.y - h, h, i)),
                    l.enqueue(new Ot(m.x + h, m.y - h, h, i)),
                    l.enqueue(new Ot(m.x - h, m.y + h, h, i)),
                    l.enqueue(new Ot(m.x + h, m.y + h, h, i)));
              return [_.x, _.y];
            })(t)
          : (function (i) {
              const { rings: r } = i;
              if (!r || r.length === 0) return null;
              const n = Xt(Q(), i);
              if (!n) return null;
              const o =
                4 *
                (Math.abs(n[0]) +
                  Math.abs(n[2]) +
                  Math.abs(n[1]) +
                  Math.abs(n[3]) +
                  1) *
                Pn;
              let a = 0,
                l = 0;
              for (let T = 0; T < r.length; T++) {
                const N = fr(r[T]);
                N > l && ((l = N), (a = T));
              }
              if (Math.abs(l) <= 2 * o * o) {
                const T = Ue(Q(), r[a]);
                return [(T[0] + T[2]) / 2, (T[1] + T[3]) / 2];
              }
              const c = mr(r[a], !1, Q());
              if (c === null) return null;
              if (r.length === 1 && r[0].length < 4) return c;
              const h = [
                  [NaN, NaN],
                  [NaN, NaN],
                  [NaN, NaN],
                  [NaN, NaN],
                ],
                f = [NaN, NaN, NaN, NaN],
                u = [NaN, NaN, NaN, NaN];
              let p = !1,
                m = Bt(c, i, !0);
              m.distance === 0 &&
                ((p = !0),
                (h[0][0] = c[0]),
                (h[0][1] = c[1]),
                (m = Bt(c, i, !1))),
                (f[0] = m.distance),
                (u[0] = 0);
              const _ = [NaN, NaN];
              let d = !1,
                y = 0.25,
                g = -1;
              const M = Ue(Q(), r[a]);
              let b = NaN;
              do
                if (
                  ((b = NaN),
                  (h[1] = Qe(i, ts(M[0], M[2], y), 0, n)),
                  isNaN(h[1][0]) ||
                    isNaN(h[1][1]) ||
                    ((m = Bt(h[1], i, !1)), (b = m.distance)),
                  !isNaN(b) && b > o && Re(h[1], i))
                )
                  (d = !0), (f[1] = b), (u[1] = wt(h[1], c));
                else if (
                  (!isNaN(b) &&
                    b > g &&
                    ((g = b), (_[0] = h[1][0]), (_[1] = h[1][1])),
                  (y -= 0.01),
                  y < 0.1)
                ) {
                  if (!(g >= 0)) break;
                  (d = !0),
                    (f[1] = g),
                    (h[1][0] = _[0]),
                    (h[1][1] = _[1]),
                    (u[1] = wt(h[1], c));
                }
              while (!d);
              (d = !1), (y = 0.5), (g = -1);
              let S = 0.01,
                P = 1;
              do
                if (
                  ((b = NaN),
                  (h[2] = Qe(i, ts(M[0], M[2], y), 0, n)),
                  isNaN(h[2][0]) ||
                    isNaN(h[2][1]) ||
                    ((m = Bt(h[2], i, !1)), (b = m.distance)),
                  !isNaN(b) && b > o && Re(h[2], i))
                )
                  (d = !0), (f[2] = b), (u[2] = wt(h[2], c));
                else if (!isNaN(b) && b > g)
                  (g = b), (_[0] = h[2][0]), (_[1] = h[2][1]);
                else if (
                  (b > g && ((g = b), (_[0] = h[2][0]), (_[1] = h[2][1])),
                  (y = 0.5 + S * P),
                  (S += 0.01),
                  (P *= -1),
                  y < 0.3 || y > 0.7)
                ) {
                  if (!(g >= 0)) break;
                  (d = !0),
                    (f[2] = g),
                    (h[2][0] = _[0]),
                    (h[2][1] = _[1]),
                    (u[2] = wt(h[2], c));
                }
              while (!d);
              (d = !1), (y = 0.75), (g = -1);
              do
                if (
                  ((b = NaN),
                  (h[3] = Qe(i, ts(M[0], M[2], y), 0, n)),
                  isNaN(h[3][0]) ||
                    isNaN(h[3][1]) ||
                    ((m = Bt(h[3], i, !1)), (b = m.distance)),
                  !isNaN(b) && b > o && Re(h[3], i))
                )
                  (d = !0), (f[3] = b), (u[3] = wt(h[3], c));
                else if (
                  (b > g && ((g = b), (_[0] = h[3][0]), (_[1] = h[3][1])),
                  (y += 0.01),
                  y > 0.9)
                ) {
                  if (!(g >= 0)) break;
                  (d = !0),
                    (f[3] = g),
                    (h[3][0] = _[0]),
                    (h[3][1] = _[1]),
                    (u[3] = wt(h[3], c));
                }
              while (!d);
              const x = [0, 1, 2, 3],
                k = p ? 0 : 1;
              let v;
              for (let T = k; T < 4; T++)
                for (let N = k; N < 3; N++) {
                  const R = u[N],
                    F = u[N + 1];
                  Cn(R, F) > 0 &&
                    ((v = x[N]),
                    (x[N] = x[N + 1]),
                    (x[N + 1] = v),
                    (u[N] = F),
                    (u[N + 1] = R));
                }
              let C = k,
                w = 0,
                A = 0;
              for (let T = k; T < 4; T++) {
                switch (T) {
                  case 0:
                    A = 2 * f[x[T]];
                    break;
                  case 1:
                    A = 1.66666666 * f[x[T]];
                    break;
                  case 2:
                    A = 1.33333333 * f[x[T]];
                    break;
                  case 3:
                    A = f[x[T]];
                }
                A > w && ((w = A), (C = x[T]));
              }
              return h[C];
            })(t)),
          s !== null &&
            (this._internalPlacement.setTranslate(
              s[0] + this._offsetX,
              s[1] + this._offsetY
            ),
            (e = !0));
      }
    }
    return e ? this._internalPlacement : null;
  }
};
function fs(t) {
  if (!t) return null;
  switch (t.type) {
    case "CIMGeometricEffectAddControlPoints":
      return vi.local();
    case "CIMGeometricEffectArrow":
      return Ii.local();
    case "CIMGeometricEffectBuffer":
      return Li.local();
    case "CIMGeometricEffectControlMeasureLine":
      return Ti.local();
    case "CIMGeometricEffectCut":
      return Ai.local();
    case "CIMGeometricEffectDashes":
      return Ni.local();
    case "CIMGeometricEffectDonut":
      return zi.local();
    case "CIMGeometricEffectJog":
      return Ei.local();
    case "CIMGeometricEffectMove":
      return Oi.local();
    case "CIMGeometricEffectOffset":
      return Ri.local();
    case "CIMGeometricEffectReverse":
      return Fi.local();
    case "CIMGeometricEffectRotate":
      return Gi.local();
    case "CIMGeometricEffectScale":
      return Xi.local();
    case "CIMGeometricEffectWave":
      return Hi.local();
  }
  return null;
}
function In(t) {
  if (!t) return null;
  switch (t.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
      return Di.local();
    case "CIMMarkerPlacementAtExtremities":
      return Yi.local();
    case "CIMMarkerPlacementAtRatioPositions":
      return Vi.local();
    case "CIMMarkerPlacementInsidePolygon":
      return Bi.local();
    case "CIMMarkerPlacementOnLine":
      return Wi.local();
    case "CIMMarkerPlacementOnVertices":
      return Ui.local();
    case "CIMMarkerPlacementPolygonCenter":
      return qi.local();
  }
  return null;
}
function es(t) {
  const e = t.getFrame(0);
  if (e instanceof HTMLImageElement || e instanceof HTMLCanvasElement) return e;
  const s = document.createElement("canvas");
  (s.width = t.width), (s.height = t.height);
  const i = s.getContext("2d");
  return (
    e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0), s
  );
}
let Ji = class {
    constructor(t = 0, e = 0, s = 0, i = 0) {
      (this.x = t), (this.y = e), (this.width = s), (this.height = i);
    }
    get isEmpty() {
      return this.width <= 0 || this.height <= 0;
    }
    union(t) {
      (this.x = Math.min(this.x, t.x)),
        (this.y = Math.min(this.y, t.y)),
        (this.width = Math.max(this.width, t.width)),
        (this.height = Math.max(this.height, t.height));
    }
  },
  $i = class {
    constructor(t) {
      t && (this._textRasterizationCanvas = t);
    }
    rasterizeText(t, e) {
      this._textRasterizationCanvas ||
        (this._textRasterizationCanvas = document.createElement("canvas"));
      const s = this._textRasterizationCanvas,
        i = s.getContext("2d");
      this._setFontProperties(i, e),
        (this._parameters = e),
        (this._textLines = t.split(/\r?\n/)),
        (this._lineHeight = this._computeLineHeight());
      const r = this._computeTextWidth(i, e),
        { decoration: n, weight: o } = e.font;
      this._lineThroughWidthOffset =
        n && n === "line-through" ? 0.1 * this._lineHeight : 0;
      const a = this._lineHeight * this._textLines.length;
      (s.width = r + 2 * this._lineThroughWidthOffset),
        (s.height = a),
        (this._renderedLineHeight = Math.round(
          this._lineHeight * e.pixelRatio
        )),
        (this._renderedHaloSize = e.halo.size * e.pixelRatio),
        (this._renderedWidth = r * e.pixelRatio),
        (this._renderedHeight = a * e.pixelRatio),
        (this._lineThroughWidthOffset *= e.pixelRatio);
      const l = e.color ?? [0, 0, 0, 0],
        c = e.halo && e.halo.color ? e.halo.color : [0, 0, 0, 0];
      (this._fillStyle = (function (x) {
        return `rgba(${x.slice(0, 3).toString()},${x[3]})`;
      })(l)),
        (this._haloStyle = (function (x) {
          return `rgb(${x.slice(0, 3).toString()})`;
        })(c));
      const h = this._renderedLineHeight,
        f = this._renderedHaloSize;
      i.save(),
        i.clearRect(0, 0, s.width, s.height),
        this._setFontProperties(i, e);
      const u =
          (function (x, k) {
            return x === "center" ? 0.5 * k : x === "right" ? k : 0;
          })(i.textAlign, this._renderedWidth) + f,
        p = f,
        m = f > 0;
      let _ = this._lineThroughWidthOffset,
        d = 0;
      m && this._renderHalo(i, u, p, _, d, e), (d += p), (_ += u);
      for (const x of this._textLines)
        m
          ? ((i.globalCompositeOperation = "destination-out"),
            (i.fillStyle = "rgb(0, 0, 0)"),
            i.fillText(x, _, d),
            (i.globalCompositeOperation = "source-over"),
            (i.fillStyle = this._fillStyle),
            i.fillText(x, _, d))
          : ((i.fillStyle = this._fillStyle), i.fillText(x, _, d)),
          n && n !== "none" && this._renderDecoration(i, _, d, n, o),
          (d += h);
      i.restore();
      const y = this._renderedWidth + 2 * this._lineThroughWidthOffset,
        g = this._renderedHeight,
        M = i.getImageData(0, 0, y, g),
        b = new Uint8Array(M.data);
      if (e.premultiplyColors) {
        let x;
        for (let k = 0; k < b.length; k += 4)
          (x = b[k + 3] / 255),
            (b[k] = b[k] * x),
            (b[k + 1] = b[k + 1] * x),
            (b[k + 2] = b[k + 2] * x);
      }
      let S, P;
      switch (e.horizontalAlignment) {
        case "left":
          S = -0.5;
          break;
        case "right":
          S = 0.5;
          break;
        default:
          S = 0;
      }
      switch (e.verticalAlignment) {
        case "bottom":
          P = -0.5;
          break;
        case "top":
          P = 0.5;
          break;
        default:
          P = 0;
      }
      return {
        size: [y, g],
        image: new Uint32Array(b.buffer),
        sdf: !1,
        simplePattern: !1,
        anchorX: S,
        anchorY: P,
        canvas: s,
      };
    }
    _renderHalo(t, e, s, i, r, n) {
      const o = this._renderedWidth,
        a = this._renderedHeight;
      this._haloRasterizationCanvas ||
        (this._haloRasterizationCanvas = document.createElement("canvas")),
        (this._haloRasterizationCanvas.width = o),
        (this._haloRasterizationCanvas.height = a);
      const l = this._haloRasterizationCanvas,
        c = l.getContext("2d");
      c.clearRect(0, 0, o, a), this._setFontProperties(c, n);
      const { decoration: h, weight: f } = n.font;
      (c.fillStyle = this._haloStyle),
        (c.strokeStyle = this._haloStyle),
        (c.lineJoin = "round"),
        this._renderHaloNative(c, e, s, h, f),
        (t.globalAlpha = this._parameters.halo.color[3]),
        t.drawImage(l, 0, 0, o, a, i, r, o, a),
        (t.globalAlpha = 1);
    }
    _renderHaloNative(t, e, s, i, r) {
      const n = this._renderedLineHeight,
        o = this._renderedHaloSize;
      for (const a of this._textLines) {
        const l = 2 * o,
          c = 5,
          h = 0.1;
        for (let f = 0; f < c; f++) {
          const u = (1 - (c - 1) * h + f * h) * l;
          (t.lineWidth = u),
            t.strokeText(a, e, s),
            i && i !== "none" && this._renderDecoration(t, e, s, i, r, u);
        }
        s += n;
      }
    }
    _setFontProperties(t, e) {
      const s = Math.max(e.size, 0.5),
        i = e.font,
        r = `${i.style} ${i.weight} ${Tt(s * e.pixelRatio).toFixed(1)}px ${
          i.family
        }, sans-serif`;
      let n;
      switch (((t.font = r), (t.textBaseline = "top"), e.horizontalAlignment)) {
        case "left":
        default:
          n = "left";
          break;
        case "right":
          n = "right";
          break;
        case "center":
          n = "center";
      }
      t.textAlign = n;
    }
    computeTextSize(t, e) {
      this._textRasterizationCanvas ||
        (this._textRasterizationCanvas = document.createElement("canvas"));
      const s = this._textRasterizationCanvas,
        i = s.getContext("2d");
      this._setFontProperties(i, e),
        (this._parameters = e),
        (this._textLines = t.split(/\r?\n/)),
        (this._lineHeight = this._computeLineHeight());
      const r = this._computeTextWidth(i, e),
        n = this._lineHeight * this._textLines.length;
      return (
        (s.width = r), (s.height = n), [r * e.pixelRatio, n * e.pixelRatio]
      );
    }
    _computeTextWidth(t, e) {
      let s = 0;
      for (const r of this._textLines) s = Math.max(s, t.measureText(r).width);
      const i = e.font;
      return (
        (i.style === "italic" ||
          i.style === "oblique" ||
          (typeof i.weight == "string" &&
            (i.weight === "bold" || i.weight === "bolder")) ||
          (typeof i.weight == "number" && i.weight > 600)) &&
          (s += 0.3 * t.measureText("w").width),
        (s += 2 * this._parameters.halo.size),
        Math.round(s)
      );
    }
    _computeLineHeight() {
      let t = 1.275 * this._parameters.size;
      const e = this._parameters.font.decoration;
      return (
        e && e === "underline" && (t *= 1.3),
        Math.round(t + 2 * this._parameters.halo.size)
      );
    }
    _renderDecoration(t, e, s, i, r, n) {
      const o = 0.9 * this._lineHeight,
        a = r === "bold" ? 0.06 : r === "bolder" ? 0.09 : 0.04;
      switch (t.textAlign) {
        case "center":
          e -= this._renderedWidth / 2;
          break;
        case "right":
          e -= this._renderedWidth;
      }
      const l = t.textBaseline;
      if (i === "underline")
        switch (l) {
          case "top":
            s += o;
            break;
          case "middle":
            s += o / 2;
        }
      else if (i === "line-through")
        switch (l) {
          case "top":
            s += o / 1.5;
            break;
          case "middle":
            s += o / 3;
        }
      const c = n ? 1.5 * n : Math.ceil(o * a);
      t.save(),
        t.beginPath(),
        (t.strokeStyle = t.fillStyle),
        (t.lineWidth = c),
        t.moveTo(e - this._lineThroughWidthOffset, s),
        t.lineTo(e + this._renderedWidth + 2 * this._lineThroughWidthOffset, s),
        t.stroke(),
        t.restore();
    }
  },
  pe = class ms {
    constructor(e, s, i, r) {
      (this.center = Pr(e, s)),
        (this.centerT = as()),
        (this.halfWidth = i / 2),
        (this.halfHeight = r / 2),
        (this.width = i),
        (this.height = r);
    }
    get x() {
      return this.center[0];
    }
    get y() {
      return this.center[1];
    }
    get blX() {
      return this.center[0] + this.halfWidth;
    }
    get blY() {
      return this.center[1] + this.halfHeight;
    }
    get trX() {
      return this.center[0] - this.halfWidth;
    }
    get trY() {
      return this.center[1] - this.halfHeight;
    }
    get xmin() {
      return this.x - this.halfWidth;
    }
    get xmax() {
      return this.x + this.halfWidth;
    }
    get ymin() {
      return this.y - this.halfHeight;
    }
    get ymax() {
      return this.y + this.halfHeight;
    }
    set x(e) {
      this.center[0] = e;
    }
    set y(e) {
      this.center[1] = e;
    }
    clone() {
      return new ms(this.x, this.y, this.width, this.height);
    }
    serialize(e) {
      return (
        e.writeF32(this.center[0]),
        e.writeF32(this.center[1]),
        e.push(this.width),
        e.push(this.height),
        e
      );
    }
    findCollisionDelta(e, s = 4) {
      const i = Math.abs(e.centerT[0] - this.centerT[0]),
        r = Math.abs(e.centerT[1] - this.centerT[1]),
        n = (e.halfWidth + this.halfWidth + s) / i,
        o = (e.halfHeight + this.halfHeight + s) / r,
        a = Math.min(n, o);
      return Math.log2(a);
    }
    extend(e) {
      const s = Math.min(this.xmin, e.xmin),
        i = Math.min(this.ymin, e.ymin),
        r = Math.max(this.xmax, e.xmax) - s,
        n = Math.max(this.ymax, e.ymax) - i,
        o = s + r / 2,
        a = i + n / 2;
      (this.width = r),
        (this.height = n),
        (this.halfWidth = r / 2),
        (this.halfHeight = n / 2),
        (this.x = o),
        (this.y = a);
    }
    static deserialize(e) {
      const s = e.readF32(),
        i = e.readF32(),
        r = e.readInt32(),
        n = e.readInt32();
      return new ms(s, i, r, n);
    }
  };
const bs = 26,
  ji = 4,
  Ln = bs + ji,
  Tn = bs - 6,
  Ds = 3,
  J = 8,
  An = Math.PI / 180;
let Ki = class {
  constructor(t, e, s, i) {
    (this._rotationT = _e()),
      (this._xBounds = 0),
      (this._yBounds = 0),
      (this.minZoom = 0),
      (this.maxZoom = 255),
      (this._bounds = null);
    const r = s.rect,
      n = new Float32Array(8);
    (t *= i), (e *= i);
    const o = s.code ? r.width * i : s.metrics.width,
      a = s.code ? r.height * i : s.metrics.height;
    (this.width = o),
      (this.height = a),
      (n[0] = t),
      (n[1] = e),
      (n[2] = t + o),
      (n[3] = e),
      (n[4] = t),
      (n[5] = e + a),
      (n[6] = t + o),
      (n[7] = e + a),
      (this._data = n),
      this._setTextureCoords(r),
      (this._scale = i),
      (this._mosaic = s),
      (this.x = t),
      (this.y = e),
      (this.maxOffset = Math.max(t + o, e + a));
  }
  get mosaic() {
    return this._mosaic;
  }
  set angle(t) {
    (this._angle = t), ii(this._rotationT, -t), this._setOffsets(this._data);
  }
  get angle() {
    return this._angle;
  }
  get xTopLeft() {
    return this._data[0];
  }
  get yTopLeft() {
    return this._data[1];
  }
  get xBottomRight() {
    return this._data[6];
  }
  get yBottomRight() {
    return this._data[7];
  }
  get texcoords() {
    return this._texcoords;
  }
  get textureBinding() {
    return this._mosaic.textureBinding;
  }
  get offsets() {
    return this._offsets || this._setOffsets(this._data), this._offsets;
  }
  get char() {
    return String.fromCharCode(this._mosaic.code);
  }
  get code() {
    return this._mosaic.code;
  }
  get bounds() {
    if (!this._bounds) {
      const { height: t, width: e } = this._mosaic.metrics,
        s = e * this._scale,
        i = Math.abs(t) * this._scale,
        r = new Float32Array(8);
      (r[0] = this.x),
        (r[1] = this.y),
        (r[2] = this.x + s),
        (r[3] = this.y),
        (r[4] = this.x),
        (r[5] = this.y + i),
        (r[6] = this.x + s),
        (r[7] = this.y + i);
      const n = ls(_e(), this._rotationT, this._transform);
      Ts(r, r, n);
      let o = 1 / 0,
        a = 1 / 0,
        l = 0,
        c = 0;
      for (let m = 0; m < 4; m++) {
        const _ = r[2 * m],
          d = r[2 * m + 1];
        (o = Math.min(o, _)),
          (a = Math.min(a, d)),
          (l = Math.max(l, _)),
          (c = Math.max(c, d));
      }
      const h = l - o,
        f = c - a,
        u = o + h / 2,
        p = a + f / 2;
      this._bounds = new pe(u, p, h, f);
    }
    return this._bounds;
  }
  setTransform(t) {
    (this._transform = t), (this._offsets = null);
  }
  _setOffsets(t) {
    this._offsets ||
      (this._offsets = {
        upperLeft: 0,
        upperRight: 0,
        lowerLeft: 0,
        lowerRight: 0,
      });
    const e = this._offsets,
      s = new Float32Array(8),
      i = ls(_e(), this._rotationT, this._transform);
    Ts(s, t, i),
      (e.upperLeft = st(s[0] * J, s[1] * J)),
      (e.upperRight = st(s[2] * J, s[3] * J)),
      (e.lowerLeft = st(s[4] * J, s[5] * J)),
      (e.lowerRight = st(s[6] * J, s[7] * J));
  }
  _setTextureCoords({ x: t, y: e, width: s, height: i }) {
    this._texcoords = {
      upperLeft: st(t, e),
      upperRight: st(t + s, e),
      lowerLeft: st(t, e + i),
      lowerRight: st(t + s, e + i),
    };
  }
};
const Nn = (t, e) => ({
  code: 0,
  page: 0,
  sdf: !0,
  rect: new Fr(0, 0, 11, 8),
  textureBinding: e,
  metrics: { advance: 0, height: 4, width: t, left: 0, top: 0 },
});
function Wt(t, e) {
  return (
    t.forEach((s) => ri(s, s, e)),
    {
      upperLeft: st(J * t[0][0], J * t[0][1]),
      upperRight: st(J * t[1][0], J * t[1][1]),
      lowerLeft: st(J * t[2][0], J * t[2][1]),
      lowerRight: st(J * t[3][0], J * t[3][1]),
    }
  );
}
let zn = class {
  constructor(t, e, s) {
    (this._rotation = 0),
      this._decorate(t, e, s),
      (this.glyphs = t),
      (this.bounds = this._createBounds(t)),
      (this.isMultiline = e.length > 1),
      (this._hasRotation = s.angle !== 0),
      (this._transform = this._createGlyphTransform(this.bounds, s)),
      (this._borderLineSize = s.borderLineSize),
      (s.borderLineSize || s.hasBackground) &&
        ([this.bounds, this.background] = this.shapeBackground(
          this._transform
        ));
    for (const i of t) i.setTransform(this._transform);
  }
  setRotation(t) {
    if (t === 0 && this._rotation === 0) return;
    this._rotation = t;
    const e = this._transform,
      s = ii(_e(), t);
    ls(e, s, e);
    for (const i of this.glyphs) i.setTransform(this._transform);
  }
  _decorate(t, e, s) {
    if (!s.decoration || s.decoration === "none" || !t.length) return;
    const i = s.scale,
      r = s.decoration === "underline" ? Ln : Tn,
      n = t[0].textureBinding;
    for (const o of e) {
      const a = o.startX * i,
        l = o.startY * i,
        c = (o.width + o.glyphWidthEnd) * i;
      t.push(new Ki(a, l + r * i, Nn(c, n), 1));
    }
  }
  shapeBackground(t) {
    const e = (1.5 + Tt(this._borderLineSize || 0)) / 2,
      s = this._borderLineSize ? e : 0,
      {
        xmin: i,
        ymin: r,
        xmax: n,
        ymax: o,
        x: a,
        y: l,
        width: c,
        height: h,
      } = this.bounds,
      f = [i - 8, r - 8],
      u = [n + 8, r - 8],
      p = [i - 8, o + 8],
      m = [n + 8, o + 8],
      _ = Wt(
        [
          [f[0] - e, f[1] - e],
          [u[0] + e, u[1] - e],
          [f[0] + s, f[1] + s],
          [u[0] - s, u[1] + s],
        ],
        t
      ),
      d = Wt(
        [
          [p[0] + s, p[1] - s],
          [m[0] - s, m[1] - s],
          [p[0] - e, p[1] + e],
          [m[0] + e, m[1] + e],
        ],
        t
      ),
      y = Wt(
        [
          [f[0] - e, f[1] - e],
          [f[0] + s, f[1] + s],
          [p[0] - e, p[1] + e],
          [p[0] + s, p[1] - s],
        ],
        t
      ),
      g = Wt(
        [
          [u[0] - s, u[1] + s],
          [u[0] + e, u[1] - e],
          [m[0] - s, m[1] - s],
          [m[0] + e, m[1] + e],
        ],
        t
      ),
      M = { main: Wt([f, u, p, m], t), top: _, bot: d, left: y, right: g };
    return [new pe(a, l, c + 2 * e, h + 2 * e), M];
  }
  get boundsT() {
    const t = this.bounds,
      e = Se(as(), t.x, t.y);
    if ((ri(e, e, this._transform), this._hasRotation)) {
      const s = Math.max(t.width, t.height);
      return new pe(e[0], e[1], s, s);
    }
    return new pe(e[0], e[1], t.width, t.height);
  }
  _createBounds(t) {
    let e = 1 / 0,
      s = 1 / 0,
      i = 0,
      r = 0;
    for (const a of t)
      (e = Math.min(e, a.xTopLeft)),
        (s = Math.min(s, a.yTopLeft)),
        (i = Math.max(i, a.xBottomRight)),
        (r = Math.max(r, a.yBottomRight));
    const n = i - e,
      o = r - s;
    return new pe(e + n / 2, s + o / 2, n, o);
  }
  _createGlyphTransform(t, e) {
    const s = An * e.angle,
      i = _e(),
      r = as();
    return (
      qe(i, i, Se(r, e.xOffset, -e.yOffset)),
      e.isCIM
        ? As(i, i, s)
        : (qe(i, i, Se(r, t.x, t.y)), As(i, i, s), qe(i, i, Se(r, -t.x, -t.y))),
      i
    );
  }
};
class Ee {
  constructor(e, s, i, r, n, o) {
    (this.glyphWidthEnd = 0),
      (this.startX = 0),
      (this.startY = 0),
      (this.start = Math.max(0, Math.min(s, i))),
      (this.end = Math.max(0, Math.max(s, i))),
      this.end < e.length && (this.glyphWidthEnd = e[this.end].metrics.width),
      (this.width = r),
      (this.yMin = n),
      (this.yMax = o);
  }
}
const ss = (t) => t === 10,
  Ys = (t) => t === 32;
function Zi(t, e, s) {
  const i = s.scale,
    r = [],
    n = (function (u, p, m) {
      const _ = [],
        d = 1 / m.scale,
        y = m.maxLineWidth * d,
        g = p ? u.length - 1 : 0,
        M = p ? -1 : u.length,
        b = p ? -1 : 1;
      let S = g,
        P = 0,
        x = 0,
        k = S,
        v = k,
        C = 0,
        w = 1 / 0,
        A = 0;
      for (; S !== M; ) {
        const { code: N, metrics: R } = u[S],
          F = Math.abs(R.top);
        if (
          (ss(N) ||
            Ys(N) ||
            ((w = Math.min(w, F)), (A = Math.max(A, F + R.height))),
          ss(N))
        )
          S !== g &&
            (_.push(new Ee(u, k, S - b, P, w, A)), (w = 1 / 0), (A = 0)),
            (P = 0),
            (k = S + b),
            (v = S + b),
            (x = 0);
        else if (Ys(N)) (v = S + b), (x = 0), (C = R.advance), (P += R.advance);
        else if (P > y) {
          if (v !== k) {
            const G = v - 2 * b;
            (P -= C),
              _.push(new Ee(u, k, G, P - x, w, A)),
              (w = 1 / 0),
              (A = 0),
              (k = v),
              (P = x);
          } else
            _.push(new Ee(u, k, S - b, P, w, A)),
              (w = 1 / 0),
              (A = 0),
              (k = S),
              (v = S),
              (P = 0);
          (P += R.advance), (x += R.advance);
        } else (P += R.advance), (x += R.advance);
        S += b;
      }
      const T = new Ee(u, k, S - b, P, w, A);
      return T.start >= 0 && T.end < u.length && _.push(T), _;
    })(t, e, s),
    o = (function (u, p) {
      let m = 0;
      for (let y = 0; y < u.length; y++) {
        const { width: g } = u[y];
        m = Math.max(g, m);
      }
      const _ = p.decoration === "underline" ? ji : 0,
        d = u[0].yMin;
      return {
        x: 0,
        y: d,
        height: u[u.length - 1].yMax + p.lineHeight * (u.length - 1) + _ - d,
        width: m,
      };
    })(n, s),
    { vAlign: a, hAlign: l } = s,
    c = a === Ut.Baseline ? 1 : 0,
    h = c ? 0 : a - 1,
    f = (1 - c) * -o.y + h * (o.height / 2) + (c ? 1 : 0) * -bs;
  for (let u = 0; u < n.length; u++) {
    const { start: p, end: m, width: _ } = n[u];
    let d = -1 * (l + 1) * (_ / 2) - Ds;
    const y = u * s.lineHeight + f - Ds;
    (n[u].startX = d), (n[u].startY = y);
    for (let g = p; g <= m; g++) {
      const M = t[g];
      if (ss(M.code)) continue;
      const b = new Ki(d + M.metrics.left, y - M.metrics.top, M, i);
      (d += M.metrics.advance), r.push(b);
    }
  }
  return new zn(r, n, s);
}
const St = Math.PI / 180,
  Qi = ge.getLogger("esri.symbols.cim.CIMSymbolDrawHelper");
class W {
  constructor(e) {
    this._t = e;
  }
  static createIdentity() {
    return new W([1, 0, 0, 0, 1, 0]);
  }
  clone() {
    const e = this._t;
    return new W(e.slice());
  }
  transform(e) {
    const s = this._t;
    return [s[0] * e[0] + s[1] * e[1] + s[2], s[3] * e[0] + s[4] * e[1] + s[5]];
  }
  static createScale(e, s) {
    return new W([e, 0, 0, 0, s, 0]);
  }
  scale(e, s) {
    const i = this._t;
    return (
      (i[0] *= e),
      (i[1] *= e),
      (i[2] *= e),
      (i[3] *= s),
      (i[4] *= s),
      (i[5] *= s),
      this
    );
  }
  scaleRatio() {
    return Math.sqrt(this._t[0] * this._t[0] + this._t[1] * this._t[1]);
  }
  static createTranslate(e, s) {
    return new W([0, 0, e, 0, 0, s]);
  }
  translate(e, s) {
    const i = this._t;
    return (i[2] += e), (i[5] += s), this;
  }
  static createRotate(e) {
    const s = Math.cos(e),
      i = Math.sin(e);
    return new W([s, -i, 0, i, s, 0]);
  }
  rotate(e) {
    return W.multiply(this, W.createRotate(e), this);
  }
  angle() {
    const e = this._t[0],
      s = this._t[3],
      i = Math.sqrt(e * e + s * s);
    return [e / i, s / i];
  }
  static multiply(e, s, i) {
    const r = e._t,
      n = s._t,
      o = r[0] * n[0] + r[3] * n[1],
      a = r[1] * n[0] + r[4] * n[1],
      l = r[2] * n[0] + r[5] * n[1] + n[2],
      c = r[0] * n[3] + r[3] * n[4],
      h = r[1] * n[3] + r[4] * n[4],
      f = r[2] * n[3] + r[5] * n[4] + n[5],
      u = i._t;
    return (
      (u[0] = o), (u[1] = a), (u[2] = l), (u[3] = c), (u[4] = h), (u[5] = f), i
    );
  }
  invert() {
    const e = this._t;
    let s = e[0] * e[4] - e[1] * e[3];
    if (s === 0) return new W([0, 0, 0, 0, 0, 0]);
    s = 1 / s;
    const i = (e[1] * e[5] - e[2] * e[4]) * s,
      r = (e[2] * e[3] - e[0] * e[5]) * s,
      n = e[4] * s,
      o = -e[1] * s,
      a = -e[3] * s,
      l = e[0] * s;
    return new W([n, o, i, a, l, r]);
  }
}
let Ps = class {
    constructor(t, e) {
      (this._resourceManager = t),
        (this._transfos = []),
        (this._sizeTransfos = []),
        (this._geomUnitsPerPoint = 1),
        (this._placementPool = new Sr(Ht, void 0, void 0, 100)),
        (this._earlyReturn = !1),
        (this._mapRotation = 0),
        this._transfos.push(e || W.createIdentity()),
        this._sizeTransfos.push(e ? e.scaleRatio() : 1);
    }
    setTransform(t, e) {
      (this._transfos = [t || W.createIdentity()]),
        (this._sizeTransfos = [e || (t ? t.scaleRatio() : 1)]);
    }
    setGeomUnitsPerPoint(t) {
      this._geomUnitsPerPoint = t;
    }
    transformPt(t) {
      return this._transfos[this._transfos.length - 1].transform(t);
    }
    transformSize(t) {
      return t * this._sizeTransfos[this._sizeTransfos.length - 1];
    }
    reverseTransformPt(t) {
      return this._transfos[this._transfos.length - 1].invert().transform(t);
    }
    reverseTransformSize(t) {
      return t / this._sizeTransfos[this._sizeTransfos.length - 1];
    }
    getTransformAngle() {
      return this._transfos[this._transfos.length - 1].angle();
    }
    geomUnitsPerPoint() {
      return this.isEmbedded() ? 1 : this._geomUnitsPerPoint;
    }
    isEmbedded() {
      return this._transfos.length > 1;
    }
    back() {
      return this._transfos[this._transfos.length - 1];
    }
    push(t, e) {
      const s = e ? t.scaleRatio() : 1;
      W.multiply(t, this.back(), t),
        this._transfos.push(t),
        this._sizeTransfos.push(
          this._sizeTransfos[this._sizeTransfos.length - 1] * s
        );
    }
    pop() {
      this._transfos.splice(-1, 1), this._sizeTransfos.splice(-1, 1);
    }
    drawSymbol(t, e, s) {
      if (t)
        switch (t.type) {
          case "CIMPointSymbol":
          case "CIMLineSymbol":
          case "CIMPolygonSymbol":
            this.drawMultiLayerSymbol(t, e);
            break;
          case "CIMTextSymbol":
            this.drawTextSymbol(t, e, s);
        }
    }
    drawMultiLayerSymbol(t, e) {
      if (!t || !e) return;
      const s = t.symbolLayers;
      if (!s) return;
      const i = t.effects;
      if (i && i.length > 0) {
        const r = this.executeEffects(i, e);
        if (r) {
          let n = r.next();
          for (; n; ) this.drawSymbolLayers(s, n), (n = r.next());
        }
      } else this.drawSymbolLayers(s, e);
    }
    executeEffects(t, e) {
      const s = this._resourceManager.geometryEngine;
      let i = new hs(e);
      for (const r of t) {
        const n = fs(r);
        n && (i = n.execute(i, r, this.geomUnitsPerPoint(), null, s));
      }
      return i;
    }
    drawSymbolLayers(t, e) {
      let s = t.length;
      for (; s--; ) {
        const i = t[s];
        if (!i || i.enable === !1) continue;
        const r = i.effects;
        if (r && r.length > 0) {
          const n = this.executeEffects(r, e);
          if (n) {
            let o = null;
            for (
              ;
              (o = n.next()) &&
              (this.drawSymbolLayer(i, o), !this._earlyReturn);

            );
          }
        } else this.drawSymbolLayer(i, e);
        if (this._earlyReturn) return;
      }
    }
    drawSymbolLayer(t, e) {
      switch (t.type) {
        case "CIMSolidFill":
          this.drawSolidFill(e, t.color);
          break;
        case "CIMHatchFill":
          this.drawHatchFill(e, t);
          break;
        case "CIMPictureFill":
          this.drawPictureFill(e, t);
          break;
        case "CIMGradientFill":
          this.drawGradientFill(e, t);
          break;
        case "CIMSolidStroke":
          this.drawSolidStroke(
            e,
            t.color,
            t.width,
            t.capStyle,
            t.joinStyle,
            t.miterLimit
          );
          break;
        case "CIMPictureStroke":
          this.drawPictureStroke(e, t);
          break;
        case "CIMGradientStroke":
          this.drawGradientStroke(e, t);
          break;
        case "CIMCharacterMarker":
        case "CIMPictureMarker":
        case "CIMVectorMarker":
          this.drawMarkerLayer(t, e);
      }
    }
    drawHatchFill(t, e) {
      const s = this._buildHatchPolyline(e, t, this.geomUnitsPerPoint());
      s &&
        (this.pushClipPath(t),
        this.drawMultiLayerSymbol(e.lineSymbol, s),
        this.popClipPath());
    }
    drawPictureFill(t, e) {}
    drawGradientFill(t, e) {}
    drawPictureStroke(t, e) {}
    drawGradientStroke(t, e) {}
    drawMarkerLayer(t, e) {
      const s = t.markerPlacement;
      if (s) {
        const i = In(s);
        if (i) {
          const r =
            s.type === "CIMMarkerPlacementInsidePolygon" ||
            (s.type === "CIMMarkerPlacementPolygonCenter" && s.clipAtBoundary);
          r && this.pushClipPath(e);
          const n = i.execute(
            e,
            s,
            this.geomUnitsPerPoint(),
            null,
            this._resourceManager.geometryEngine
          );
          if (n) {
            let o = null;
            for (
              ;
              (o = n.next()) && (this.drawMarker(t, o), !this._earlyReturn);

            );
          }
          r && this.popClipPath();
        }
      } else {
        const i = this._placementPool.acquire();
        if (Lt(e)) (i.tx = e.x), (i.ty = e.y), this.drawMarker(t, i);
        else if (O(e)) {
          const r = Cr(e);
          r && (([i.tx, i.ty] = r), this.drawMarker(t, i));
        } else
          for (const r of e.points)
            if (
              ((i.tx = r[0]),
              (i.ty = r[1]),
              this.drawMarker(t, i),
              this._earlyReturn)
            )
              break;
        this._placementPool.release(i);
      }
    }
    drawMarker(t, e) {
      switch (t.type) {
        case "CIMCharacterMarker":
        case "CIMPictureMarker":
          this.drawPictureMarker(t, e);
          break;
        case "CIMVectorMarker":
          this.drawVectorMarker(t, e);
      }
    }
    drawPictureMarker(t, e) {
      if (!t) return;
      const s = this._resourceManager.getResource(t.url),
        i = t.size ?? 10;
      if (it(s) || i <= 0) return;
      const r = s.width,
        n = s.height;
      if (!r || !n) return;
      const o = r / n,
        a = t.scaleX ?? 1,
        l = W.createIdentity(),
        c = t.anchorPoint;
      if (c) {
        let _ = c.x,
          d = c.y;
        t.anchorPointUnits !== "Absolute" && ((_ *= i * o * a), (d *= i)),
          l.translate(-_, -d);
      }
      let h = t.rotation ?? 0;
      t.rotateClockwise && (h = -h),
        this._mapRotation && (h += this._mapRotation),
        h && l.rotate(h * St);
      let f = t.offsetX ?? 0,
        u = t.offsetY ?? 0;
      if (f || u) {
        if (this._mapRotation) {
          const _ = St * this._mapRotation,
            d = Math.cos(_),
            y = Math.sin(_),
            g = f * y + u * d;
          (f = f * d - u * y), (u = g);
        }
        l.translate(f, u);
      }
      const p = this.geomUnitsPerPoint();
      p !== 1 && l.scale(p, p);
      const m = e.getAngle();
      m && l.rotate(m),
        l.translate(e.tx, e.ty),
        this.push(l, !1),
        this.drawImage(t, i),
        this.pop();
    }
    drawVectorMarker(t, e) {
      if (!t) return;
      const s = t.markerGraphics;
      if (!s) return;
      const i = t.size ?? 10,
        r = t.frame,
        n = r ? r.ymax - r.ymin : 0,
        o = i && n ? i / n : 1,
        a = W.createIdentity();
      r && a.translate(0.5 * -(r.xmax + r.xmin), 0.5 * -(r.ymax + r.ymin));
      const l = t.anchorPoint;
      if (l) {
        let m = l.x,
          _ = l.y;
        t.anchorPointUnits !== "Absolute"
          ? r && ((m *= r.xmax - r.xmin), (_ *= r.ymax - r.ymin))
          : ((m /= o), (_ /= o)),
          a.translate(-m, -_);
      }
      o !== 1 && a.scale(o, o);
      let c = t.rotation ?? 0;
      t.rotateClockwise && (c = -c),
        this._mapRotation && (c += this._mapRotation),
        c && a.rotate(c * St);
      let h = t.offsetX ?? 0,
        f = t.offsetY ?? 0;
      if (h || f) {
        if (this._mapRotation) {
          const m = St * this._mapRotation,
            _ = Math.cos(m),
            d = Math.sin(m),
            y = h * d + f * _;
          (h = h * _ - f * d), (f = y);
        }
        a.translate(h, f);
      }
      const u = this.geomUnitsPerPoint();
      u !== 1 && a.scale(u, u);
      const p = e.getAngle();
      p && a.rotate(p),
        a.translate(e.tx, e.ty),
        this.push(a, t.scaleSymbolsProportionally);
      for (const m of s)
        if (
          ((m && m.symbol && m.geometry) ||
            Qi.error("Invalid marker graphic", m),
          this.drawSymbol(m.symbol, m.geometry, m.textString),
          this._earlyReturn)
        )
          break;
      this.pop();
    }
    drawTextSymbol(t, e, s) {
      if (!t || !Lt(e) || (t.height ?? 10) <= 0) return;
      const i = W.createIdentity();
      let r = t.angle ?? 0;
      (r = -r), r && i.rotate(r * St);
      const n = t.offsetX ?? 0,
        o = t.offsetY ?? 0;
      (n || o) && i.translate(n, o);
      const a = this.geomUnitsPerPoint();
      a !== 1 && i.scale(a, a),
        i.translate(e.x, e.y),
        this.push(i, !1),
        this.drawText(t, s),
        this.pop();
    }
    _buildHatchPolyline(t, e, s) {
      let i = (t.separation !== void 0 ? t.separation : 4) * s,
        r = t.rotation !== void 0 ? t.rotation : 0;
      if (i === 0) return null;
      i < 0 && (i = -i);
      let n = 0;
      const o = 0.5 * i;
      for (; n > o; ) n -= i;
      for (; n < -o; ) n += i;
      const a = Q();
      Xt(a, e), (a[0] -= o), (a[1] -= o), (a[2] += o), (a[3] += o);
      const l = [
        [a[0], a[1]],
        [a[0], a[3]],
        [a[2], a[3]],
        [a[2], a[1]],
      ];
      for (; r > 180; ) r -= 180;
      for (; r < 0; ) r += 180;
      const c = Math.cos(r * St),
        h = Math.sin(r * St),
        f = -i * h,
        u = i * c;
      let p, m, _, d;
      (n =
        (t.offsetX !== void 0 ? t.offsetX * s : 0) * h -
        (t.offsetY !== void 0 ? t.offsetY * s : 0) * c),
        (p = _ = Number.MAX_VALUE),
        (m = d = -Number.MAX_VALUE);
      for (const x of l) {
        const k = x[0],
          v = x[1],
          C = c * k + h * v,
          w = -h * k + c * v;
        (p = Math.min(p, C)),
          (_ = Math.min(_, w)),
          (m = Math.max(m, C)),
          (d = Math.max(d, w));
      }
      _ = Math.floor(_ / i) * i;
      let y = c * p - h * _ - (f * n) / i,
        g = h * p + c * _ - (u * n) / i,
        M = c * m - h * _ - (f * n) / i,
        b = h * m + c * _ - (u * n) / i;
      const S = 1 + Math.round((d - _) / i),
        P = [];
      for (let x = 0; x < S; x++)
        (y += f),
          (g += u),
          (M += f),
          (b += u),
          P.push([
            [y, g],
            [M, b],
          ]);
      return { paths: P };
    }
  },
  En = class extends Ps {
    constructor(t, e) {
      super(t, e), this.reset();
    }
    reset() {
      (this._xmin = this._ymin = 1 / 0),
        (this._xmax = this._ymax = -1 / 0),
        (this._clipCount = 0);
    }
    envelope() {
      return new Ji(
        this._xmin,
        this._ymin,
        this._xmax - this._xmin,
        this._ymax - this._ymin
      );
    }
    bounds() {
      return xr(this._xmin, this._ymin, this._xmax, this._ymax);
    }
    drawSolidFill(t) {
      if (t && !(this._clipCount > 0)) {
        if (O(t)) this._processPath(t.rings, 0);
        else if (X(t)) this._processPath(t.paths, 0);
        else if (V(t)) {
          const e = kt(t);
          e && this._processPath(e.rings, 0);
        }
      }
    }
    drawSolidStroke(t, e, s) {
      if (!t || this._clipCount > 0) return;
      const i = 0.5 * this.transformSize(s ?? 0);
      if (O(t)) this._processPath(t.rings, i);
      else if (X(t)) this._processPath(t.paths, i);
      else if (V(t)) {
        const r = kt(t);
        r && this._processPath(r.rings, i);
      }
    }
    drawMarkerLayer(t, e) {
      O(e) &&
      t.markerPlacement &&
      (t.markerPlacement.type === "CIMMarkerPlacementInsidePolygon" ||
        (t.markerPlacement.type === "CIMMarkerPlacementPolygonCenter" &&
          t.markerPlacement.clipAtBoundary))
        ? this._processPath(e.rings, 0)
        : super.drawMarkerLayer(t, e);
    }
    drawHatchFill(t, e) {
      this.drawSolidFill(t);
    }
    drawPictureFill(t, e) {
      this.drawSolidFill(t);
    }
    drawGradientFill(t, e) {
      this.drawSolidFill(t);
    }
    drawPictureStroke(t, e) {
      this.drawSolidStroke(t, null, e.width);
    }
    drawGradientStroke(t, e) {
      this.drawSolidStroke(t, null, e.width);
    }
    pushClipPath(t) {
      this.drawSolidFill(t), this._clipCount++;
    }
    popClipPath() {
      this._clipCount--;
    }
    drawImage(t, e) {
      const { url: s } = t,
        i = t.scaleX ?? 1;
      let r = i * e,
        n = e;
      const o = this._resourceManager.getResource(s);
      !e && $(o) && ((r = i * o.width), (n = o.height)),
        this._merge(this.transformPt([-r / 2, -n / 2]), 0),
        this._merge(this.transformPt([-r / 2, n / 2]), 0),
        this._merge(this.transformPt([r / 2, -n / 2]), 0),
        this._merge(this.transformPt([r / 2, n / 2]), 0);
    }
    drawText(t, e) {
      if (!e || e.length === 0) return;
      this._textRasterizer || (this._textRasterizer = new $i());
      const s = ir(t),
        [i, r] = this._textRasterizer.computeTextSize(e, s);
      let n = 0;
      switch (t.horizontalAlignment) {
        case "Left":
          n = i / 2;
          break;
        case "Right":
          n = -i / 2;
      }
      let o = 0;
      switch (t.verticalAlignment) {
        case "Bottom":
          o = r / 2;
          break;
        case "Top":
          o = -r / 2;
          break;
        case "Baseline":
          o = r / 6;
      }
      this._merge(this.transformPt([-i / 2 + n, -r / 2 + o]), 0),
        this._merge(this.transformPt([-i / 2 + n, r / 2 + o]), 0),
        this._merge(this.transformPt([i / 2 + n, -r / 2 + o]), 0),
        this._merge(this.transformPt([i / 2 + n, r / 2 + o]), 0);
    }
    _processPath(t, e) {
      if (t)
        for (const s of t) {
          const i = s ? s.length : 0;
          if (i > 1) {
            this._merge(this.transformPt(s[0]), e);
            for (let r = 1; r < i; r++) this._merge(this.transformPt(s[r]), e);
          }
        }
    }
    _merge(t, e) {
      t[0] - e < this._xmin && (this._xmin = t[0] - e),
        t[0] + e > this._xmax && (this._xmax = t[0] + e),
        t[1] - e < this._ymin && (this._ymin = t[1] - e),
        t[1] + e > this._ymax && (this._ymax = t[1] + e);
    }
  },
  zo = class extends Ps {
    constructor() {
      super(...arguments),
        (this._searchPoint = [0, 0]),
        (this._searchDistPoint = 0),
        (this._textInfo = null);
    }
    hitTest(t, e, s, i, r, n) {
      const o = n * Tt(1);
      this.setTransform(),
        this.setGeomUnitsPerPoint(o),
        (this._searchPoint = [(t[0] + t[2]) / 2, (t[1] + t[3]) / 2]),
        (this._searchDistPoint = (t[2] - t[0]) / 2 / o),
        (this._textInfo = i);
      const a =
        e &&
        ((e.type === "CIMPointSymbol" && e.angleAlignment !== "Map") ||
          e.type === "CIMTextSymbol");
      return (
        (this._mapRotation = a ? r : 0),
        (this._earlyReturn = !1),
        this.drawSymbol(e, s),
        this._earlyReturn
      );
    }
    drawSolidFill(t, e) {
      this._hitTestFill(t);
    }
    drawHatchFill(t, e) {
      this._hitTestFill(t);
    }
    drawPictureFill(t, e) {
      this._hitTestFill(t);
    }
    drawGradientFill(t, e) {
      this._hitTestFill(t);
    }
    drawSolidStroke(t, e, s, i, r, n) {
      this._hitTestStroke(t, s);
    }
    drawPictureStroke(t, e) {
      this._hitTestStroke(t, e.width);
    }
    drawGradientStroke(t, e) {
      this._hitTestStroke(t, e.width);
    }
    drawMarkerLayer(t, e) {
      t.markerPlacement &&
      (t.markerPlacement.type === "CIMMarkerPlacementInsidePolygon" ||
        (t.markerPlacement.type === "CIMMarkerPlacementPolygonCenter" &&
          t.markerPlacement.clipAtBoundary))
        ? this._hitTestFill(e)
        : super.drawMarkerLayer(t, e);
    }
    pushClipPath(t) {}
    popClipPath() {}
    drawImage(t, e) {
      const { url: s } = t,
        i = t.scaleX ?? 1,
        r = this._resourceManager.getResource(s);
      if (it(r) || r.height === 0 || e === 0) return;
      const n = e * this.geomUnitsPerPoint(),
        o = n * i * (r.width / r.height),
        a = this.reverseTransformPt(this._searchPoint),
        l = this._searchDistPoint;
      Math.abs(a[0]) < o / 2 + l &&
        Math.abs(a[1]) < n / 2 + l &&
        (this._earlyReturn = !0);
    }
    drawText(t, e) {
      var y, g;
      const s = this._textInfo;
      if (!s) return;
      const i = s.get(t);
      if (!i) return;
      const { text: r, mosaicItem: n } = i;
      if (!((y = n == null ? void 0 : n.glyphMosaicItems) != null && y.length))
        return;
      const o = t.height ?? 10,
        { lineGapType: a, lineGap: l } = t,
        c = a ? sr(a, l ?? 0, o) : 0,
        h = ys(r)[1],
        f = n.glyphMosaicItems,
        u =
          ((g = t.callout) == null ? void 0 : g.type) ===
          "CIMBackgroundCallout",
        p = Zi(f, h, {
          scale: o / hi,
          angle: 0,
          xOffset: 0,
          yOffset: 0,
          hAlign: tr(t.horizontalAlignment),
          vAlign: er(t.verticalAlignment),
          maxLineWidth: 512,
          lineHeight: ci * Math.max(0.25, Math.min(c || 1, 4)),
          decoration: t.font.decoration || "none",
          isCIM: !0,
          hasBackground: u,
        }),
        m = this.reverseTransformPt(this._searchPoint),
        _ = m[0],
        d = m[1];
      for (const M of p.glyphs)
        if (
          _ > M.xTopLeft &&
          _ < M.xBottomRight &&
          d > -M.yBottomRight &&
          d < -M.yTopLeft
        ) {
          this._earlyReturn = !0;
          break;
        }
    }
    _hitTestFill(t) {
      let e = null;
      if (V(t)) {
        const i = t;
        e = [
          [
            [i.xmin, i.ymin],
            [i.xmin, i.ymax],
            [i.xmax, i.ymax],
            [i.xmax, i.ymin],
            [i.xmin, i.ymin],
          ],
        ];
      } else if (O(t)) e = t.rings;
      else {
        if (!X(t)) return;
        e = t.paths;
      }
      const s = this.reverseTransformPt(this._searchPoint);
      if (
        (this._pointInPolygon(s, e) && (this._earlyReturn = !0),
        !this._earlyReturn)
      ) {
        const i =
          this.reverseTransformSize(this._searchDistPoint) *
          this.geomUnitsPerPoint();
        this._nearLine(s, e, i) && (this._earlyReturn = !0);
      }
    }
    _hitTestStroke(t, e) {
      let s = null;
      if (V(t)) {
        const o = t;
        s = [
          [
            [o.xmin, o.ymin],
            [o.xmin, o.ymax],
            [o.xmax, o.ymax],
            [o.xmax, o.ymin],
            [o.xmin, o.ymin],
          ],
        ];
      } else if (O(t)) s = t.rings;
      else {
        if (!X(t)) return;
        s = t.paths;
      }
      const i = this.reverseTransformPt(this._searchPoint),
        r = (e ?? 0) * this.geomUnitsPerPoint(),
        n =
          this.reverseTransformSize(this._searchDistPoint) *
          this.geomUnitsPerPoint();
      this._nearLine(i, s, r / 2 + n) && (this._earlyReturn = !0);
    }
    _pointInPolygon(t, e) {
      let s = 0;
      for (const i of e) {
        const r = i.length;
        for (let n = 1; n < r; n++) {
          const o = i[n - 1],
            a = i[n];
          o[1] > t[1] != a[1] > t[1] &&
            ((a[0] - o[0]) * (t[1] - o[1]) - (a[1] - o[1]) * (t[0] - o[0]) > 0
              ? s++
              : s--);
        }
      }
      return s !== 0;
    }
    _nearLine(t, e, s) {
      for (const i of e) {
        const r = i.length;
        for (let n = 1; n < r; n++) {
          const o = i[n - 1],
            a = i[n];
          let l = (a[0] - o[0]) * (a[0] - o[0]) + (a[1] - o[1]) * (a[1] - o[1]);
          if (l === 0) continue;
          l = Math.sqrt(l);
          const c =
            ((a[0] - o[0]) * (t[1] - o[1]) - (a[1] - o[1]) * (t[0] - o[0])) / l;
          if (Math.abs(c) < s) {
            const h =
              ((a[0] - o[0]) * (t[0] - o[0]) + (a[1] - o[1]) * (t[1] - o[1])) /
              l;
            if (h > -s && h < l + s) return !0;
          }
        }
      }
      return !1;
    }
  },
  On = class extends Ps {
    constructor(t, e, s, i) {
      super(e, s),
        (this._applyAdditionalRenderProps = i),
        (this._colorSubstitutionHelper = new (class {
          applyColorSubstituition(r, n) {
            if (!n) return r;
            this._rasterizationCanvas ||
              (this._rasterizationCanvas = document.createElement("canvas"));
            const { width: o, height: a } = r,
              l = this._rasterizationCanvas,
              c = l.getContext("2d");
            r !== l &&
              ((l.width = o), (l.height = a), c.drawImage(r, 0, 0, o, a));
            const h = c.getImageData(0, 0, o, a).data;
            if (n) {
              for (const u of n)
                if (
                  u &&
                  u.oldColor &&
                  u.oldColor.length === 4 &&
                  u.newColor &&
                  u.newColor.length === 4
                ) {
                  const [p, m, _, d] = u.oldColor,
                    [y, g, M, b] = u.newColor;
                  if (p === y && m === g && _ === M && d === b) continue;
                  for (let S = 0; S < h.length; S += 4)
                    p === h[S] &&
                      m === h[S + 1] &&
                      _ === h[S + 2] &&
                      d === h[S + 3] &&
                      ((h[S] = y),
                      (h[S + 1] = g),
                      (h[S + 2] = M),
                      (h[S + 3] = b));
                }
            }
            const f = new ImageData(h, o, a);
            return c.putImageData(f, 0, 0), l;
          }
          tintImageData(r, n) {
            if (!n || n.length < 4) return r;
            this._rasterizationCanvas ||
              (this._rasterizationCanvas = document.createElement("canvas"));
            const { width: o, height: a } = r,
              l = this._rasterizationCanvas,
              c = l.getContext("2d");
            r !== l &&
              ((l.width = o), (l.height = a), c.drawImage(r, 0, 0, o, a));
            const h = c.getImageData(0, 0, o, a),
              f = new Uint8Array(h.data),
              u = [n[0] / 255, n[1] / 255, n[2] / 255, n[3] / 255];
            for (let m = 0; m < f.length; m += 4)
              (f[m + 0] *= u[0]),
                (f[m + 1] *= u[1]),
                (f[m + 2] *= u[2]),
                (f[m + 3] *= u[3]);
            const p = new ImageData(new Uint8ClampedArray(f.buffer), o, a);
            return c.putImageData(p, 0, 0), l;
          }
        })()),
        (this._ctx = t);
    }
    drawSolidFill(t, e) {
      if (!t) return;
      if (O(t)) this._buildPath(t.rings, !0);
      else if (X(t)) this._buildPath(t.paths, !0);
      else if (V(t)) this._buildPath(kt(t).rings, !0);
      else if (!mt(t)) return;
      const s = this._ctx;
      (s.fillStyle =
        typeof e == "string"
          ? e
          : "rgba(" +
            Math.round(e[0]) +
            "," +
            Math.round(e[1]) +
            "," +
            Math.round(e[2]) +
            "," +
            (e[3] ?? 255) / 255 +
            ")"),
        s.fill("evenodd");
    }
    drawSolidStroke(t, e, s, i, r, n) {
      if (!t || !e || s === 0) return;
      if (O(t)) this._buildPath(t.rings, !0);
      else if (X(t)) this._buildPath(t.paths, !1);
      else {
        if (!V(t)) return;
        this._buildPath(kt(t).rings, !0);
      }
      const o = this._ctx;
      (o.strokeStyle =
        typeof e == "string"
          ? e
          : "rgba(" +
            Math.round(e[0]) +
            "," +
            Math.round(e[1]) +
            "," +
            Math.round(e[2]) +
            "," +
            (e[3] ?? 255) / 255 +
            ")"),
        (o.lineWidth = Math.max(this.transformSize(s), 0.5)),
        this._setCapStyle(i),
        this._setJoinStyle(r),
        (o.miterLimit = n),
        o.stroke();
    }
    pushClipPath(t) {
      if ((this._ctx.save(), O(t))) this._buildPath(t.rings, !0);
      else if (X(t)) this._buildPath(t.paths, !0);
      else {
        if (!V(t)) return;
        this._buildPath(kt(t).rings, !0);
      }
      this._ctx.clip("evenodd");
    }
    popClipPath() {
      this._ctx.restore();
    }
    drawImage(t, e) {
      const { colorSubstitutions: s, url: i, tintColor: r } = t,
        n = t.scaleX ?? 1,
        o = this._resourceManager.getResource(i);
      if (it(o)) return;
      let a = e * (o.width / o.height),
        l = e;
      e || ((a = o.width), (l = o.height));
      const c = Et(i) || ("src" in o && Et(o.src));
      let h = "getFrame" in o ? es(o) : o;
      s && (h = this._colorSubstitutionHelper.applyColorSubstituition(h, s)),
        this._applyAdditionalRenderProps &&
          !c &&
          r &&
          (h = this._colorSubstitutionHelper.tintImageData(h, r));
      const f = this.transformPt([0, 0]),
        [u, p] = this.getTransformAngle(),
        m = this.transformSize(1),
        _ = this._ctx;
      _.save(),
        _.setTransform({
          m11: n * m * u,
          m12: n * m * p,
          m21: -m * p,
          m22: m * u,
          m41: f[0],
          m42: f[1],
        }),
        _.drawImage(h, -a / 2, -l / 2, a, l),
        _.restore();
    }
    drawText(t, e) {
      if (!e || e.length === 0) return;
      this._textRasterizer || (this._textRasterizer = new $i());
      const s = ir(t);
      s.size *= this.transformSize(Rt(1));
      const i = this._textRasterizer.rasterizeText(e, s);
      if (!i) return;
      const { size: r, anchorX: n, anchorY: o, canvas: a } = i,
        l = r[0] * (n + 0.5),
        c = r[1] * (o - 0.5),
        h = this._ctx,
        f = this.transformPt([0, 0]),
        [u, p] = this.getTransformAngle();
      h.save(),
        h.setTransform({
          m11: 1 * u,
          m12: 1 * p,
          m21: -1 * p,
          m22: 1 * u,
          m41: f[0] - 1 * l,
          m42: f[1] + 1 * c,
        }),
        h.drawImage(a, 0, 0),
        h.restore();
    }
    drawPictureFill(t, e) {
      if (!t) return;
      let {
        colorSubstitutions: s,
        height: i,
        offsetX: r,
        offsetY: n,
        rotation: o,
        scaleX: a,
        tintColor: l,
        url: c,
      } = e;
      const h = this._resourceManager.getResource(c);
      if (it(h)) return;
      if (O(t)) this._buildPath(t.rings, !0);
      else if (X(t)) this._buildPath(t.paths, !0);
      else if (V(t)) this._buildPath(kt(t).rings, !0);
      else if (!mt(t)) return;
      const f = this._ctx,
        u = Et(c) || ("src" in h && Et(h.src));
      let p,
        m = "getFrame" in h ? es(h) : h;
      if (
        (s && (m = this._colorSubstitutionHelper.applyColorSubstituition(m, s)),
        this._applyAdditionalRenderProps)
      ) {
        u || (l && (m = this._colorSubstitutionHelper.tintImageData(m, l))),
          (p = f.createPattern(m, "repeat"));
        const _ = this.transformSize(1);
        o || (o = 0),
          r ? (r *= _) : (r = 0),
          n ? (n *= _) : (n = 0),
          i && (i *= _);
        const d = i ? i / h.height : 1,
          y = a && i ? (a * i) / h.width : 1;
        if (o !== 0 || d !== 1 || y !== 1 || r !== 0 || n !== 0) {
          const g = new DOMMatrix();
          g.rotateSelf(0, 0, -o).translateSelf(r, n).scaleSelf(y, d, 1),
            p.setTransform(g);
        }
      } else p = f.createPattern(m, "repeat");
      f.save(), (f.fillStyle = p), f.fill("evenodd"), f.restore();
    }
    drawPictureStroke(t, e) {
      if (!t) return;
      let {
        colorSubstitutions: s,
        capStyle: i,
        joinStyle: r,
        miterLimit: n,
        tintColor: o,
        url: a,
        width: l,
      } = e;
      const c = this._resourceManager.getResource(a);
      if (it(c)) return;
      let h;
      if (O(t)) h = t.rings;
      else if (X(t)) h = t.paths;
      else {
        if (!V(t)) return void mt(t);
        h = kt(t).rings;
      }
      l || (l = c.width);
      const f = Et(a) || ("src" in c && Et(c.src));
      let u = "getFrame" in c ? es(c) : c;
      s && (u = this._colorSubstitutionHelper.applyColorSubstituition(u, s)),
        this._applyAdditionalRenderProps &&
          (f || (o && (u = this._colorSubstitutionHelper.tintImageData(u, o))));
      const p = Math.max(this.transformSize(Tt(l)), 0.5),
        m = p / u.width,
        _ = this._ctx,
        d = _.createPattern(u, "repeat-y");
      let y, g;
      _.save(),
        this._setCapStyle(i),
        this._setJoinStyle(r),
        n !== void 0 && (_.miterLimit = n),
        (_.lineWidth = p);
      for (let M of h)
        if (((M = D(M)), Gn(M), M && !(M.length <= 1))) {
          y = this.transformPt(M[0]);
          for (let b = 1; b < M.length; b++) {
            g = this.transformPt(M[b]);
            const S = Rn(y, g),
              P = new DOMMatrix();
            P.translateSelf(0, y[1] - p / 2)
              .scaleSelf(m, m, 1)
              .rotateSelf(0, 0, 90 - S),
              d.setTransform(P),
              (_.strokeStyle = d),
              _.beginPath(),
              _.moveTo(y[0], y[1]),
              _.lineTo(g[0], g[1]),
              _.stroke(),
              (y = g);
          }
        }
      _.restore();
    }
    _buildPath(t, e) {
      const s = this._ctx;
      if ((s.beginPath(), t))
        for (const i of t) {
          const r = i ? i.length : 0;
          if (r > 1) {
            let n = this.transformPt(i[0]);
            s.moveTo(n[0], n[1]);
            for (let o = 1; o < r; o++)
              (n = this.transformPt(i[o])), s.lineTo(n[0], n[1]);
            e && s.closePath();
          }
        }
    }
    _setCapStyle(t) {
      switch (t) {
        case gt.Butt:
          this._ctx.lineCap = "butt";
          break;
        case gt.Round:
          this._ctx.lineCap = "round";
          break;
        case gt.Square:
          this._ctx.lineCap = "square";
      }
    }
    _setJoinStyle(t) {
      switch (t) {
        case yt.Bevel:
          this._ctx.lineJoin = "bevel";
          break;
        case yt.Round:
          this._ctx.lineJoin = "round";
          break;
        case yt.Miter:
          this._ctx.lineJoin = "miter";
      }
    }
  };
function Rn(t, e) {
  const s = e[0] - t[0],
    i = e[1] - t[1];
  return (180 / Math.PI) * Math.atan2(i, s);
}
const kt = (t) =>
    t
      ? {
          spatialReference: t.spatialReference,
          rings: [
            [
              [t.xmin, t.ymin],
              [t.xmin, t.ymax],
              [t.xmax, t.ymax],
              [t.xmax, t.ymin],
              [t.xmin, t.ymin],
            ],
          ],
        }
      : null,
  tr = (t) => {
    switch (t) {
      case "Left":
        return Ie.Left;
      case "Right":
        return Ie.Right;
      case "Center":
        return Ie.Center;
      case "Justify":
        return (
          Qi.warnOnce(
            "Horizontal alignment 'justify' is not implemented. Falling back to 'center'."
          ),
          Ie.Center
        );
    }
  },
  er = (t) => {
    switch (t) {
      case "Top":
        return Ut.Top;
      case "Center":
        return Ut.Center;
      case "Bottom":
        return Ut.Bottom;
      case "Baseline":
        return Ut.Baseline;
    }
  },
  sr = (t, e, s) => {
    switch (t) {
      case "ExtraLeading":
        return 1 + e / s;
      case "Multiple":
        return e;
      case "Exact":
        return e / s;
    }
  };
function ir(t, e = 1) {
  const s = gi(t),
    i = di(t.fontStyleName),
    r = gs(t.fontFamilyName),
    { weight: n, style: o } = i,
    a = e * (t.height || 5),
    l = yi(t.horizontalAlignment),
    c = Mi(t.verticalAlignment),
    h = At(t),
    f = It(t.haloSymbol),
    u = f ? e * (0 | t.haloSize) : 0;
  return {
    color: h,
    size: a,
    horizontalAlignment: l,
    verticalAlignment: c,
    font: { family: r, style: Ur(o), weight: qr(n), decoration: s },
    halo: { size: u || 0, color: f, style: o },
    pixelRatio: 1,
    premultiplyColors: !0,
  };
}
const Fn = 1e-4;
function Gn(t) {
  let e,
    s,
    i,
    r,
    n,
    o = t[0],
    a = 1;
  for (; a < t.length; )
    (e = t[a][0] - o[0]),
      (s = t[a][1] - o[1]),
      (r = e !== 0 ? s / e : Math.PI / 2),
      i !== void 0 && r - i <= Fn
        ? (t.splice(a - 1, 1), (o = n))
        : ((n = o), (o = t[a]), a++),
      (i = r);
}
function Dt(t, e, s, i, r) {
  if (it(t)) return null;
  const n =
      t.referencesGeometry() && r
        ? (function (a, l, c) {
            const { transform: h, hasZ: f, hasM: u } = c;
            is.has(l) ||
              is.set(
                l,
                (function (m) {
                  const _ = {};
                  switch (m) {
                    case "esriGeometryPoint":
                      return (d, y, g, M) => Dr(y, _, d, g, M);
                    case "esriGeometryPolygon":
                      return (d, y, g, M) => Hr(y, _, d, g, M);
                    case "esriGeometryPolyline":
                      return (d, y, g, M) => Xr(y, _, d, g, M);
                    case "esriGeometryMultipoint":
                      return (d, y, g, M) => Gr(y, _, d, g, M);
                    default:
                      return (
                        ge
                          .getLogger("esri.views.2d.support.arcadeOnDemand")
                          .error(
                            new wr(
                              "mapview-arcade",
                              `Unable to handle geometryType: ${m}`
                            )
                          ),
                        (d) => d
                      );
                  }
                })(l)
              );
            const p = is.get(l)(a.geometry, h, f, u);
            return { ...a, geometry: p };
          })(e, i, r)
        : e,
    o = t.repurposeFeature(n);
  try {
    return t.evaluate({ ...s, $feature: o });
  } catch (a) {
    return (
      ge
        .getLogger("esri.views.2d.support.arcadeOnDemand")
        .warn("Feature arcade evaluation failed:", a),
      null
    );
  }
}
const is = new Map(),
  rr = Math.PI,
  Xn = rr / 2,
  ft = 96 / 72,
  Vs = Math.PI / 180,
  ps = ge.getLogger("esri.symbols.cim.CIMSymbolHelper");
function Eo(t) {
  if (!t || !t.type) return null;
  let e;
  switch (t.type) {
    case "cim":
      return t.data;
    case "web-style":
      return t;
    case "simple-marker": {
      const s = dt.fromSimpleMarker(t);
      if (!s) return null;
      e = s;
      break;
    }
    case "picture-marker":
      e = dt.fromPictureMarker(t);
      break;
    case "simple-line":
      e = dt.fromSimpleLineSymbol(t);
      break;
    case "simple-fill":
      e = dt.fromSimpleFillSymbol(t);
      break;
    case "picture-fill":
      e = dt.fromPictureFillSymbol(t);
      break;
    case "text":
      e = dt.fromTextSymbol(t);
  }
  return { type: "CIMSymbolReference", symbol: e };
}
function Fe(t, e, s) {
  switch (e.type) {
    case "CIMSymbolReference":
      return Fe(t, e.symbol, s);
    case "CIMPointSymbol":
      s == null && (s = { x: 0, y: 0 }), t.drawSymbol(e, s);
      break;
    case "CIMLineSymbol":
      s == null &&
        (s = {
          paths: [
            [
              [0, 0],
              [10, 0],
            ],
          ],
        }),
        t.drawSymbol(e, s);
      break;
    case "CIMPolygonSymbol":
      s == null &&
        (s = {
          rings: [
            [
              [0, 0],
              [0, 10],
              [10, 10],
              [10, 0],
              [0, 0],
            ],
          ],
        }),
        t.drawSymbol(e, s);
      break;
    case "CIMTextSymbol": {
      const i = { x: 0, y: 0 };
      t.drawSymbol(e, i);
      break;
    }
    case "CIMVectorMarker": {
      const i = new Ht();
      t.drawMarker(e, i);
      break;
    }
  }
  return t.envelope();
}
function Hn(t) {
  if (!t) return 0;
  switch (t.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
    case "CIMMarkerPlacementAlongLineRandomSize":
    case "CIMMarkerPlacementAtExtremities":
    case "CIMMarkerPlacementAtMeasuredUnits":
    case "CIMMarkerPlacementAtRatioPositions":
    case "CIMMarkerPlacementOnLine":
    case "CIMMarkerPlacementOnVertices":
      return Math.abs(t.offset);
    default:
      return 0;
  }
}
function Dn(t) {
  if (!t) return 0;
  switch (t.type) {
    case "CIMGeometricEffectArrow":
      return Math.abs(0.5 * t.width);
    case "CIMGeometricEffectBuffer":
      return Math.abs(t.size);
    case "CIMGeometricEffectExtension":
    case "CIMGeometricEffectRadial":
      return Math.abs(t.length);
    case "CIMGeometricEffectJog":
      return Math.abs(0.5 * t.length);
    case "CIMGeometricEffectMove":
      return Math.max(Math.abs(L(t.offsetX)), Math.abs(L(t.offsetY)));
    case "CIMGeometricEffectOffset":
    case "CIMGeometricEffectOffsetTangent":
      return Math.abs(t.offset);
    case "CIMGeometricEffectRegularPolygon":
      return Math.abs(t.radius);
    case "CIMGeometricEffectRotate":
    case "CIMGeometricEffectScale":
    default:
      return 0;
    case "CIMGeometricEffectTaperedPolygon":
      return 0.5 * Math.max(Math.abs(t.fromWidth), Math.abs(t.toWidth));
    case "CIMGeometricEffectWave":
      return Math.abs(t.amplitude);
  }
}
function Bs(t) {
  if (!t) return 0;
  let e = 0;
  for (const s of t) e += Dn(s);
  return e;
}
let Oo = class {
    getSymbolInflateSize(t, e, s, i, r) {
      return (
        t || (t = [0, 0, 0, 0]), e ? this._getInflateSize(t, e, s, i, r) : t
      );
    }
    static safeSize(t) {
      const e = Math.max(Math.abs(t[0]), Math.abs(t[2])),
        s = Math.max(Math.abs(t[1]), Math.abs(t[3]));
      return Math.sqrt(e * e + s * s);
    }
    _vectorMarkerBounds(t, e, s, i) {
      let r = !0;
      const n = Q();
      if (e && e.markerGraphics)
        for (const o of e.markerGraphics) {
          const a = [0, 0, 0, 0];
          o.geometry &&
            (Xt(n, o.geometry),
            (a[0] = 0),
            (a[1] = 0),
            (a[2] = 0),
            (a[3] = 0),
            this.getSymbolInflateSize(a, o.symbol, s, 0, i),
            (n[0] += a[0]),
            (n[1] += a[1]),
            (n[2] += a[2]),
            (n[3] += a[3]),
            r
              ? ((t[0] = n[0]),
                (t[1] = n[1]),
                (t[2] = n[2]),
                (t[3] = n[3]),
                (r = !1))
              : ((t[0] = Math.min(t[0], n[0])),
                (t[1] = Math.min(t[1], n[1])),
                (t[2] = Math.max(t[2], n[2])),
                (t[3] = Math.max(t[3], n[3]))));
        }
      return t;
    }
    _getInflateSize(t, e, s, i, r) {
      if (
        (function (n) {
          return n.symbolLayers !== void 0;
        })(e)
      ) {
        const n = this._getLayersInflateSize(t, e.symbolLayers, s, i, r),
          o = Bs(e.effects);
        return o > 0 && ((n[0] -= o), (n[1] -= o), (n[2] += o), (n[3] += o)), n;
      }
      return this._getTextInflatedSize(t, e, r);
    }
    _getLayersInflateSize(t, e, s, i, r) {
      let n = !0;
      if (!e) return t;
      for (const o of e) {
        if (!o) continue;
        let a = [0, 0, 0, 0];
        switch (o.type) {
          case "CIMSolidFill":
          case "CIMPictureFill":
          case "CIMHatchFill":
          case "CIMGradientFill":
            break;
          case "CIMSolidStroke":
          case "CIMPictureStroke":
          case "CIMGradientStroke": {
            const c = o;
            let h = c.width;
            h != null &&
              (c.capStyle === gt.Square || c.joinStyle === yt.Miter
                ? (h /= 1.4142135623730951)
                : (h /= 2),
              (a[0] = -h),
              (a[1] = -h),
              (a[2] = h),
              (a[3] = h));
            break;
          }
          case "CIMCharacterMarker":
          case "CIMVectorMarker":
          case "CIMPictureMarker": {
            const c = o;
            if (o.type === "CIMVectorMarker") {
              const m = o;
              if (((a = this._vectorMarkerBounds(a, m, s, r)), m.frame)) {
                const _ = (m.frame.xmin + m.frame.xmax) / 2,
                  d = (m.frame.ymin + m.frame.ymax) / 2;
                if (
                  ((a[0] -= _),
                  (a[1] -= d),
                  (a[2] -= _),
                  (a[3] -= d),
                  m.size != null)
                ) {
                  const y = m.size / (m.frame.ymax - m.frame.ymin);
                  (a[0] *= y), (a[1] *= y), (a[2] *= y), (a[3] *= y);
                }
              }
            } else if (o.type === "CIMPictureMarker") {
              const m = o,
                _ = s.getResource(m.url);
              let d = 1;
              if (
                ($(_) && _.height && (d = _.width / _.height), c.size != null)
              ) {
                const y = c.size / 2,
                  g = (c.size * d * m.scaleX) / 2;
                a = [-g, -y, g, y];
              }
            } else if (c.size != null) {
              const m = c.size / 2;
              a = [-m, -m, m, m];
            }
            if (c.anchorPoint) {
              let m, _;
              c.anchorPointUnits === "Absolute"
                ? ((m = c.anchorPoint.x), (_ = c.anchorPoint.y))
                : ((m = c.anchorPoint.x * (a[2] - a[0])),
                  (_ = c.anchorPoint.y * (a[3] - a[1]))),
                (a[0] -= m),
                (a[1] -= _),
                (a[2] -= m),
                (a[3] -= _);
            }
            let h = L(c.rotation);
            if ((c.rotateClockwise && (h = -h), i && (h -= i), h)) {
              const m = Vs * h,
                _ = Math.cos(m),
                d = Math.sin(m),
                y = Q([we, we, -we, -we]);
              Ce(y, [a[0] * _ - a[1] * d, a[0] * d + a[1] * _]),
                Ce(y, [a[0] * _ - a[3] * d, a[0] * d + a[3] * _]),
                Ce(y, [a[2] * _ - a[1] * d, a[2] * d + a[1] * _]),
                Ce(y, [a[2] * _ - a[3] * d, a[2] * d + a[3] * _]),
                (a = y);
            }
            let f = L(c.offsetX),
              u = L(c.offsetY);
            if (i) {
              const m = Vs * i,
                _ = Math.cos(m),
                d = Math.sin(m),
                y = f * d + u * _;
              (f = f * _ - u * d), (u = y);
            }
            (a[0] += f), (a[1] += u), (a[2] += f), (a[3] += u);
            const p = Hn(c.markerPlacement);
            p > 0 && ((a[0] -= p), (a[1] -= p), (a[2] += p), (a[3] += p));
            break;
          }
        }
        const l = Bs(o.effects);
        l > 0 && ((a[0] -= l), (a[1] -= l), (a[2] += l), (a[3] += l)),
          n
            ? ((t[0] = a[0]),
              (t[1] = a[1]),
              (t[2] = a[2]),
              (t[3] = a[3]),
              (n = !1))
            : ((t[0] = Math.min(t[0], a[0])),
              (t[1] = Math.min(t[1], a[1])),
              (t[2] = Math.max(t[2], a[2])),
              (t[3] = Math.max(t[3], a[3])));
      }
      return t;
    }
    _getTextInflatedSize(t, e, s) {
      var m, _;
      const i = e.height ?? 10;
      if (
        ((t[0] = -i / 2), (t[1] = -i / 2), (t[2] = i / 2), (t[3] = i / 2), !s)
      )
        return t;
      const r = s.get(e);
      if (!r) return t;
      const { text: n, mosaicItem: o } = r;
      if (!((m = o == null ? void 0 : o.glyphMosaicItems) != null && m.length))
        return t;
      const { lineGapType: a, lineGap: l } = e,
        c = a ? sr(a, l ?? 0, i) : 0,
        h = ys(n)[1],
        f = o.glyphMosaicItems,
        u =
          ((_ = e.callout) == null ? void 0 : _.type) ===
          "CIMBackgroundCallout",
        p = Zi(f, h, {
          scale: i / hi,
          angle: L(e.angle),
          xOffset: L(e.offsetX),
          yOffset: L(e.offsetY),
          hAlign: tr(e.horizontalAlignment),
          vAlign: er(e.verticalAlignment),
          maxLineWidth: 512,
          lineHeight: ci * Math.max(0.25, Math.min(c || 1, 4)),
          decoration: e.font.decoration || "none",
          isCIM: !0,
          hasBackground: u,
        }).boundsT;
      return (
        (t[0] = p.x - p.halfWidth),
        (t[1] = -p.y - p.halfHeight),
        (t[2] = p.x + p.halfWidth),
        (t[3] = -p.y + p.halfHeight),
        t
      );
    }
  },
  dt = class _s {
    static getEnvelope(e, s, i) {
      if (!e) return null;
      const r = new En(i);
      if (Array.isArray(e)) {
        let n;
        for (const o of e) n ? n.union(Fe(r, o, s)) : (n = Fe(r, o, s));
        return n;
      }
      return Fe(r, e, s);
    }
    static getTextureAnchor(e, s) {
      const i = this.getEnvelope(e, null, s);
      if (!i) return [0, 0, 0];
      const r = (i.x + 0.5 * i.width) * ft,
        n = (i.y + 0.5 * i.height) * ft,
        o = i.width * ft + 2,
        a = i.height * ft + 2;
      return [-r / o, -n / a, a];
    }
    static rasterize(e, s, i, r, n = !0) {
      const o = i || this.getEnvelope(s, null, r);
      if (!o) return [null, 0, 0, 0, 0];
      const a = (o.x + 0.5 * o.width) * ft,
        l = (o.y + 0.5 * o.height) * ft;
      (e.width = o.width * ft),
        (e.height = o.height * ft),
        i || ((e.width += 2), (e.height += 2));
      const c = e.getContext("2d"),
        h = W.createScale(ft, -ft);
      h.translate(0.5 * e.width - a, 0.5 * e.height + l);
      const f = new On(c, r, h);
      switch (s.type) {
        case "CIMPointSymbol": {
          const m = { type: "point", x: 0, y: 0 };
          f.drawSymbol(s, m);
          break;
        }
        case "CIMVectorMarker": {
          const m = new Ht();
          f.drawMarker(s, m);
          break;
        }
      }
      const u = c.getImageData(0, 0, e.width, e.height),
        p = new Uint8Array(u.data);
      if (n) {
        let m;
        for (let _ = 0; _ < p.length; _ += 4)
          (m = p[_ + 3] / 255),
            (p[_] = p[_] * m),
            (p[_ + 1] = p[_ + 1] * m),
            (p[_ + 2] = p[_ + 2] * m);
      }
      return [p, e.width, e.height, -a / e.width, -l / e.height];
    }
    static fromTextSymbol(e) {
      const {
        angle: s,
        color: i,
        font: r,
        haloColor: n,
        haloSize: o,
        horizontalAlignment: a,
        kerning: l,
        text: c,
        verticalAlignment: h,
        xoffset: f,
        yoffset: u,
        backgroundColor: p,
        borderLineColor: m,
        borderLineSize: _,
      } = e;
      let d, y, g, M, b, S;
      r &&
        ((d = r.family),
        (y = r.style),
        (g = r.weight),
        (M = r.size),
        (b = r.decoration));
      let P = !1;
      return (
        c && (P = ys(c)[1]),
        (p || _) &&
          (S = {
            type: "CIMBackgroundCallout",
            margin: null,
            backgroundSymbol: {
              type: "CIMPolygonSymbol",
              symbolLayers: [
                { type: "CIMSolidFill", color: K(p) },
                { type: "CIMSolidStroke", color: K(m), width: _ },
              ],
            },
            accentBarSymbol: null,
            gap: null,
            leaderLineSymbol: null,
            lineStyle: null,
          }),
        {
          type: "CIMPointSymbol",
          symbolLayers: [
            {
              type: "CIMVectorMarker",
              enable: !0,
              anchorPointUnits: "Relative",
              dominantSizeAxis3D: "Y",
              size: 10,
              billboardMode3D: "FaceNearPlane",
              frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 },
              markerGraphics: [
                {
                  type: "CIMMarkerGraphic",
                  geometry: { x: 0, y: 0 },
                  symbol: {
                    type: "CIMTextSymbol",
                    angle: s,
                    blockProgression: vr.BTT,
                    depth3D: 1,
                    extrapolateBaselines: !0,
                    fontEffects: Ir.Normal,
                    fontEncoding: Lr.Unicode,
                    fontFamilyName: d || "Arial",
                    fontStyleName: Bn(y, g),
                    fontType: Tr.Unspecified,
                    haloSize: o,
                    height: M,
                    hinting: Ar.Default,
                    horizontalAlignment: Yn(a ?? "center"),
                    kerning: l,
                    letterWidth: 100,
                    ligatures: !0,
                    lineGapType: "Multiple",
                    offsetX: L(f),
                    offsetY: L(u),
                    strikethrough: b === "line-through",
                    underline: b === "underline",
                    symbol: {
                      type: "CIMPolygonSymbol",
                      symbolLayers: [
                        { type: "CIMSolidFill", enable: !0, color: K(i) },
                      ],
                    },
                    haloSymbol: {
                      type: "CIMPolygonSymbol",
                      symbolLayers: [
                        { type: "CIMSolidFill", enable: !0, color: K(n) },
                      ],
                    },
                    shadowColor: [0, 0, 0, 255],
                    shadowOffsetX: 1,
                    shadowOffsetY: 1,
                    textCase: "Normal",
                    textDirection: P ? Ns.RTL : Ns.LTR,
                    verticalAlignment: Vn(h ?? "baseline"),
                    verticalGlyphOrientation: Nr.Right,
                    wordSpacing: 100,
                    billboardMode3D: zr.FaceNearPlane,
                    callout: S,
                  },
                  textString: c,
                },
              ],
              scaleSymbolsProportionally: !0,
              respectFrame: !0,
            },
          ],
          scaleX: 1,
          angleAlignment: "Display",
        }
      );
    }
    static fromPictureFillSymbol(e) {
      const {
          height: s,
          outline: i,
          width: r,
          xoffset: n,
          xscale: o,
          yoffset: a,
          yscale: l,
        } = e,
        c = [],
        h = { type: "CIMPolygonSymbol", symbolLayers: c };
      if (i) {
        const { cap: _, join: d, miterLimit: y, width: g } = i;
        c.push({
          type: "CIMSolidStroke",
          color: K(i.color),
          capStyle: rs(_),
          joinStyle: ns(d),
          miterLimit: y,
          width: g,
        });
      }
      let f = e.url;
      e.type === "esriPFS" && e.imageData && (f = e.imageData);
      const u = "angle" in e ? e.angle ?? 0 : 0,
        p = (r ?? 0) * (o || 1),
        m = (s ?? 0) * (l || 1);
      return (
        c.push({
          type: "CIMPictureFill",
          invertBackfaceTexture: !1,
          scaleX: 1,
          textureFilter: zs.Picture,
          tintColor: null,
          url: f,
          height: m,
          width: p,
          offsetX: L(n),
          offsetY: L(a),
          rotation: L(-u),
          colorSubstitutions: null,
        }),
        h
      );
    }
    static fromSimpleFillSymbol(e) {
      const { color: s, style: i, outline: r } = e,
        n = [],
        o = { type: "CIMPolygonSymbol", symbolLayers: n };
      let a = null;
      if (r) {
        const { cap: l, join: c, style: h } = r;
        h !== "solid" &&
          h !== "none" &&
          h !== "esriSLSSolid" &&
          h !== "esriSLSNull" &&
          (a = [
            {
              type: "CIMGeometricEffectDashes",
              dashTemplate: Ws(h, l),
              lineDashEnding: "NoConstraint",
              scaleDash: !0,
              offsetAlongLine: null,
            },
          ]),
          n.push({
            type: "CIMSolidStroke",
            color: K(r.color),
            capStyle: rs(l),
            joinStyle: ns(c),
            miterLimit: r.miterLimit,
            width: r.width,
            effects: a,
          });
      }
      if (
        i &&
        i !== "solid" &&
        i !== "none" &&
        i !== "esriSFSSolid" &&
        i !== "esriSFSNull"
      ) {
        const l = {
          type: "CIMLineSymbol",
          symbolLayers: [
            {
              type: "CIMSolidStroke",
              color: K(s),
              capStyle: gt.Butt,
              joinStyle: yt.Miter,
              width: 0.75,
            },
          ],
        };
        let c = 0;
        const h = Rt(qn(i) ? 8 : 10);
        switch (i) {
          case "vertical":
          case "esriSFSVertical":
            c = 90;
            break;
          case "forward-diagonal":
          case "esriSFSForwardDiagonal":
          case "diagonal-cross":
          case "esriSFSDiagonalCross":
            c = -45;
            break;
          case "backward-diagonal":
          case "esriSFSBackwardDiagonal":
            c = 45;
            break;
          case "cross":
          case "esriSFSCross":
            c = 0;
        }
        n.push({
          type: "CIMHatchFill",
          lineSymbol: l,
          offsetX: 0,
          offsetY: 0,
          rotation: c,
          separation: h,
        }),
          i === "cross" || i === "esriSFSCross"
            ? n.push({
                type: "CIMHatchFill",
                lineSymbol: D(l),
                offsetX: 0,
                offsetY: 0,
                rotation: 90,
                separation: h,
              })
            : (i !== "diagonal-cross" && i !== "esriSFSDiagonalCross") ||
              n.push({
                type: "CIMHatchFill",
                lineSymbol: D(l),
                offsetX: 0,
                offsetY: 0,
                rotation: 45,
                separation: h,
              });
      } else
        !i ||
          (i !== "solid" && i !== "esriSFSSolid") ||
          n.push({ type: "CIMSolidFill", enable: !0, color: K(s) });
      return o;
    }
    static fromSimpleLineSymbol(e) {
      const {
        cap: s,
        color: i,
        join: r,
        marker: n,
        miterLimit: o,
        style: a,
        width: l,
      } = e;
      let c = null;
      a !== "solid" &&
        a !== "none" &&
        a !== "esriSLSSolid" &&
        a !== "esriSLSNull" &&
        (c = [
          {
            type: "CIMGeometricEffectDashes",
            dashTemplate: Ws(a, s),
            lineDashEnding: "NoConstraint",
            scaleDash: !0,
            offsetAlongLine: null,
          },
        ]);
      const h = [];
      if (n) {
        let f;
        switch (n.placement) {
          case "begin-end":
            f = xt.Both;
            break;
          case "begin":
            f = xt.JustBegin;
            break;
          case "end":
            f = xt.JustEnd;
            break;
          default:
            f = xt.None;
        }
        const u = _s.fromSimpleMarker(n, l, i).symbolLayers[0];
        (u.markerPlacement = {
          type: "CIMMarkerPlacementAtExtremities",
          angleToLine: !0,
          offset: 0,
          extremityPlacement: f,
          offsetAlongLine: 0,
        }),
          h.push(u);
      }
      return (
        a !== "none" &&
          a !== "esriSLSNull" &&
          h.push({
            type: "CIMSolidStroke",
            color: K(i),
            capStyle: rs(s),
            joinStyle: ns(r),
            miterLimit: o,
            width: l,
            effects: c,
          }),
        { type: "CIMLineSymbol", symbolLayers: h }
      );
    }
    static fromPictureMarker(e) {
      const { angle: s, height: i, width: r, xoffset: n, yoffset: o } = e;
      let a = e.url;
      return (
        e.type === "esriPMS" && e.imageData && (a = e.imageData),
        {
          type: "CIMPointSymbol",
          symbolLayers: [
            {
              type: "CIMPictureMarker",
              invertBackfaceTexture: !1,
              scaleX: 1,
              textureFilter: zs.Picture,
              tintColor: null,
              url: a,
              size: i,
              width: r,
              offsetX: L(n),
              offsetY: L(o),
              rotation: L(-s),
            },
          ],
        }
      );
    }
    static fromSimpleMarker(e, s, i) {
      const { style: r } = e,
        n = e.color ?? i;
      if (r === "path") {
        const c = [];
        if ("outline" in e && e.outline) {
          const u = e.outline;
          c.push({
            type: "CIMSolidStroke",
            enable: !0,
            width: Tt(Math.round(Rt(u.width))),
            color: K(u.color),
          });
        }
        c.push({ type: "CIMSolidFill", enable: !0, color: K(n), path: e.path });
        const [h, f] = Us("square");
        return {
          type: "CIMPointSymbol",
          symbolLayers: [
            {
              type: "CIMVectorMarker",
              enable: !0,
              rotation: L(-e.angle),
              size: L(e.size || 6),
              offsetX: L(e.xoffset),
              offsetY: L(e.yoffset),
              frame: h,
              markerGraphics: [
                {
                  type: "CIMMarkerGraphic",
                  geometry: f,
                  symbol: { type: "CIMPolygonSymbol", symbolLayers: c },
                },
              ],
            },
          ],
        };
      }
      const [o, a] = Us(r);
      let l;
      if (a && o) {
        const c = [];
        if ("outline" in e && e.outline) {
          const f = e.outline;
          c.push({
            type: "CIMSolidStroke",
            enable: !0,
            width:
              f.width != null && f.width > 0.667
                ? Tt(Math.round(Rt(f.width)))
                : f.width,
            color: K(f.color),
          });
        } else
          !s ||
            e.type !== "line-marker" ||
            (e.style !== "cross" && e.style !== "x") ||
            c.push({
              type: "CIMSolidStroke",
              enable: !0,
              width: s,
              color: K(n),
            });
        c.push({ type: "CIMSolidFill", enable: !0, color: K(n) });
        const h = { type: "CIMPolygonSymbol", symbolLayers: c };
        l = {
          type: "CIMPointSymbol",
          symbolLayers: [
            {
              type: "CIMVectorMarker",
              enable: !0,
              rotation: L(-e.angle),
              size: L(e.size || 6 * s),
              offsetX: L(e.xoffset),
              offsetY: L(e.yoffset),
              frame: o,
              markerGraphics: [
                { type: "CIMMarkerGraphic", geometry: a, symbol: h },
              ],
            },
          ],
        };
      }
      return l;
    }
    static fromCIMHatchFill(e, s) {
      var l;
      const i = s * (e.separation ?? 4),
        r = i / 2,
        n = D(e.lineSymbol);
      (l = n.symbolLayers) == null ||
        l.forEach((c) => {
          var h;
          switch (c.type) {
            case "CIMSolidStroke":
              c.width != null && (c.width *= s),
                (h = c.effects) == null ||
                  h.forEach((f) => {
                    f.type === "CIMGeometricEffectDashes" &&
                      (f.dashTemplate = f.dashTemplate.map((u) => u * s));
                  });
              break;
            case "CIMVectorMarker": {
              c.size != null && (c.size *= s);
              const f = c.markerPlacement;
              f != null &&
                "placementTemplate" in f &&
                (f.placementTemplate = f.placementTemplate.map((u) => u * s));
              break;
            }
          }
        });
      let o = this._getLineSymbolPeriod(n) || 4;
      for (; o < 4; ) o *= 2;
      const a = o / 2;
      return {
        type: "CIMVectorMarker",
        frame: { xmin: -a, xmax: a, ymin: -r, ymax: r },
        markerGraphics: [
          {
            type: "CIMMarkerGraphic",
            geometry: {
              paths: [
                [
                  [-a, 0],
                  [a, 0],
                ],
              ],
            },
            symbol: n,
          },
        ],
        size: i,
      };
    }
    static fetchResources(e, s, i) {
      if (e && s)
        switch (e.type) {
          case "CIMPointSymbol":
          case "CIMLineSymbol":
          case "CIMPolygonSymbol": {
            const r = e.symbolLayers;
            if (!r) return;
            for (const n of r)
              switch (($n(n, s, i), n.type)) {
                case "CIMPictureFill":
                case "CIMHatchFill":
                case "CIMGradientFill":
                case "CIMPictureStroke":
                case "CIMGradientStroke":
                case "CIMCharacterMarker":
                case "CIMPictureMarker":
                  "url" in n && n.url && i.push(s.fetchResource(n.url, null));
                  break;
                case "CIMVectorMarker": {
                  const o = n.markerGraphics;
                  if (!o) continue;
                  for (const a of o)
                    if (a) {
                      const l = a.symbol;
                      l && _s.fetchResources(l, s, i);
                    }
                }
              }
          }
        }
    }
    static _getLineSymbolPeriod(e) {
      if (e) {
        const s = this._getEffectsRepeat(e.effects);
        if (s) return s;
        if (e.symbolLayers) {
          for (const i of e.symbolLayers)
            if (i) {
              const r = this._getEffectsRepeat(i.effects);
              if (r) return r;
              switch (i.type) {
                case "CIMCharacterMarker":
                case "CIMPictureMarker":
                case "CIMVectorMarker":
                case "CIMObjectMarker3D":
                case "CIMglTFMarker3D": {
                  const n = this._getPlacementRepeat(i.markerPlacement);
                  if (n) return n;
                }
              }
            }
        }
      }
      return 0;
    }
    static _getEffectsRepeat(e) {
      if (e) {
        for (const s of e)
          if (s)
            switch (s.type) {
              case "CIMGeometricEffectDashes": {
                const i = s.dashTemplate;
                if (i && i.length) {
                  let r = 0;
                  for (const n of i) r += n;
                  return 1 & i.length && (r *= 2), r;
                }
                break;
              }
              case "CIMGeometricEffectWave":
                return s.period;
              default:
                ps.error(`unsupported geometric effect type ${s.type}`);
            }
      }
      return 0;
    }
    static _getPlacementRepeat(e) {
      if (e)
        switch (e.type) {
          case "CIMMarkerPlacementAlongLineSameSize":
          case "CIMMarkerPlacementAlongLineRandomSize":
          case "CIMMarkerPlacementAlongLineVariableSize": {
            const s = e.placementTemplate;
            if (s && s.length) {
              let i = 0;
              for (const r of s) i += +r;
              return 1 & s.length && (i *= 2), i;
            }
            break;
          }
        }
      return 0;
    }
    static fromCIMInsidePolygon(e) {
      const s = e.markerPlacement,
        i = { ...e };
      (i.markerPlacement = null), (i.anchorPoint = null);
      const r = Math.abs(s.stepX),
        n = Math.abs(s.stepY),
        o = (s.randomness ?? 100) / 100;
      let a, l, c, h;
      if (s.gridType === "Random") {
        const f = Rt(ui),
          u = Math.max(Math.floor(f / r), 1),
          p = Math.max(Math.floor(f / n), 1);
        (a = (u * r) / 2), (l = (p * n) / 2), (c = 2 * l);
        const m = new si(s.seed),
          _ = (o * r) / 1.5,
          d = (o * n) / 1.5;
        h = [];
        for (let y = 0; y < u; y++)
          for (let g = 0; g < p; g++) {
            const M = y * r - a + _ * (0.5 - m.getFloat()),
              b = g * n - l + d * (0.5 - m.getFloat());
            h.push({ x: M, y: b }),
              y === 0 && h.push({ x: M + 2 * a, y: b }),
              g === 0 && h.push({ x: M, y: b + 2 * l });
          }
      } else
        s.shiftOddRows === !0
          ? ((a = r / 2),
            (l = n),
            (c = 2 * n),
            (h = [
              { x: -a, y: 0 },
              { x: a, y: 0 },
              { x: 0, y: l },
              { x: 0, y: -l },
            ]))
          : ((a = r / 2),
            (l = n / 2),
            (c = n),
            (h = [
              { x: -r, y: 0 },
              { x: 0, y: -n },
              { x: -r, y: -n },
              { x: 0, y: 0 },
              { x: r, y: 0 },
              { x: 0, y: n },
              { x: r, y: n },
              { x: -r, y: n },
              { x: r, y: -n },
            ]));
      return {
        type: "CIMVectorMarker",
        frame: { xmin: -a, xmax: a, ymin: -l, ymax: l },
        markerGraphics: h.map((f) => ({
          type: "CIMMarkerGraphic",
          geometry: f,
          symbol: { type: "CIMPointSymbol", symbolLayers: [i] },
        })),
        size: c,
      };
    }
    static getSize(e) {
      if (e)
        switch (e.type) {
          case "CIMTextSymbol":
            return e.height;
          case "CIMPointSymbol": {
            let s = 0;
            if (e.symbolLayers) {
              for (const i of e.symbolLayers)
                if (i)
                  switch (i.type) {
                    case "CIMCharacterMarker":
                    case "CIMPictureMarker":
                    case "CIMVectorMarker":
                    case "CIMObjectMarker3D":
                    case "CIMglTFMarker3D": {
                      const r = i.size;
                      r != null && r > s && (s = r);
                      break;
                    }
                  }
            }
            return s;
          }
          case "CIMLineSymbol":
          case "CIMPolygonSymbol": {
            let s = 0;
            if (e.symbolLayers) {
              for (const i of e.symbolLayers)
                if (i)
                  switch (i.type) {
                    case "CIMSolidStroke":
                    case "CIMPictureStroke":
                    case "CIMGradientStroke": {
                      const r = i.width;
                      r != null && r > s && (s = r);
                      break;
                    }
                    case "CIMCharacterMarker":
                    case "CIMPictureMarker":
                    case "CIMVectorMarker":
                    case "CIMObjectMarker3D":
                    case "CIMglTFMarker3D":
                      if (i.markerPlacement && Br(i.markerPlacement)) {
                        const r = i.size;
                        r != null && r > s && (s = r);
                      }
                  }
            }
            return s;
          }
        }
    }
    static getMarkerScaleRatio(e) {
      if (
        e &&
        e.type === "CIMVectorMarker" &&
        e.scaleSymbolsProportionally !== !1 &&
        e.frame &&
        e.size != null
      ) {
        const s = e.frame.ymax - e.frame.ymin;
        return e.size / s;
      }
      return 1;
    }
  },
  Nt = class Y {
    static findApplicableOverrides(e, s, i) {
      if (e && s) {
        if (e.primitiveName) {
          let r = !1;
          for (const n of i)
            if (n.primitiveName === e.primitiveName) {
              r = !0;
              break;
            }
          if (!r)
            for (const n of s) n.primitiveName === e.primitiveName && i.push(n);
        }
        switch (e.type) {
          case "CIMPointSymbol":
          case "CIMLineSymbol":
          case "CIMPolygonSymbol":
            if (e.effects)
              for (const r of e.effects) Y.findApplicableOverrides(r, s, i);
            if (e.symbolLayers)
              for (const r of e.symbolLayers)
                Y.findApplicableOverrides(r, s, i);
            break;
          case "CIMTextSymbol":
            break;
          case "CIMSolidStroke":
          case "CIMPictureStroke":
          case "CIMGradientStroke":
          case "CIMSolidFill":
          case "CIMPictureFill":
          case "CIMHatchFill":
          case "CIMGradientFill":
          case "CIMVectorMarker":
          case "CIMCharacterMarker":
          case "CIMPictureMarker":
            if (e.effects)
              for (const r of e.effects) Y.findApplicableOverrides(r, s, i);
            if (
              (e.markerPlacement &&
                Y.findApplicableOverrides(e.markerPlacement, s, i),
              e.type === "CIMVectorMarker")
            ) {
              if (e.markerGraphics)
                for (const r of e.markerGraphics)
                  Y.findApplicableOverrides(r, s, i),
                    Y.findApplicableOverrides(r.symbol, s, i);
            } else
              e.type === "CIMCharacterMarker"
                ? Y.findApplicableOverrides(e.symbol, s, i)
                : e.type === "CIMHatchFill"
                ? Y.findApplicableOverrides(e.lineSymbol, s, i)
                : e.type === "CIMPictureMarker" &&
                  Y.findApplicableOverrides(e.animatedSymbolProperties, s, i);
        }
      }
    }
    static findEffectOverrides(e, s, i) {
      var n;
      if (!s || !e) return;
      const r = e.length;
      for (let o = 0; o < r; o++) {
        const a = (n = e[o]) == null ? void 0 : n.primitiveName;
        if (a) {
          let l = !1;
          for (const c of i)
            if (c.primitiveName === a) {
              l = !0;
              break;
            }
          if (!l) for (const c of s) c.primitiveName === a && i.push(c);
        }
      }
    }
    static async resolveSymbolOverrides(e, s, i, r, n, o, a) {
      if (!e || !e.symbol) return null;
      let { symbol: l, primitiveOverrides: c } = e;
      const h = !!c;
      if (!h && !r) return l;
      l = D(l);
      let f = !0;
      if ((s || ((s = { attributes: {} }), (f = !1)), h)) {
        if (
          (f ||
            (c = c.filter((u) => {
              var p;
              return !(
                (p = u.valueExpressionInfo) != null &&
                p.expression.includes("$feature")
              );
            })),
          a ||
            (c = c.filter((u) => {
              var p;
              return !(
                (p = u.valueExpressionInfo) != null &&
                p.expression.includes("$view")
              );
            })),
          c.length > 0)
        ) {
          const u = (function (p) {
            return (p ? Object.keys(p) : []).map((m) => ({
              name: m,
              alias: m,
              type:
                typeof p[m] == "string"
                  ? "esriFieldTypeString"
                  : "esriFieldTypeDouble",
            }));
          })(s.attributes);
          await Y.evaluateOverrides(
            c,
            s,
            { spatialReference: i, fields: u, geometryType: n },
            o,
            a
          );
        }
        Y.applyOverrides(l, c);
      }
      return r && Y.applyDictionaryTextOverrides(l, s, r), l;
    }
    static async evaluateOverrides(e, s, i, r, n) {
      if (!s) return;
      let o;
      for (const a of e) {
        const l = a.valueExpressionInfo;
        if (l && i && i.geometryType) {
          o || (o = []), (a.value = void 0);
          const c = ni(l.expression, i.spatialReference, i.fields).then((h) => {
            a.value = Dt(h, s, { $view: n }, i.geometryType, r);
          });
          o.push(c);
        }
      }
      o !== void 0 && o.length > 0 && (await Promise.all(o));
    }
    static applyDictionaryTextOverrides(e, s, i, r = "Normal") {
      if (e && e.type)
        switch (e.type) {
          case "CIMPointSymbol":
          case "CIMLineSymbol":
          case "CIMPolygonSymbol":
          case "CIMTextSymbol":
            {
              const n = e.symbolLayers;
              if (!n) return;
              for (const o of n)
                o &&
                  o.type === "CIMVectorMarker" &&
                  Y.applyDictionaryTextOverrides(
                    o,
                    s,
                    i,
                    e.type === "CIMTextSymbol" ? e.textCase : r
                  );
            }
            break;
          case "CIMVectorMarker":
            {
              const n = e.markerGraphics;
              if (!n) return;
              for (const o of n) o && Y.applyDictionaryTextOverrides(o, s, i);
            }
            break;
          case "CIMMarkerGraphic": {
            const n = e.textString;
            if (n && n.includes("[")) {
              const o = mi(n, i);
              e.textString = pi(s, o, r);
            }
          }
        }
    }
    static applyOverrides(e, s, i, r) {
      if (e.primitiveName) {
        for (const n of s)
          if (n.primitiveName === e.primitiveName) {
            const o = Jn(n.propertyName);
            if (
              (r && r.push({ cim: e, nocapPropertyName: o, value: e[o] }),
              n.expression &&
                (n.value = Y.toValue(n.propertyName, n.expression)),
              i)
            ) {
              let a = !1;
              for (const l of i)
                l.primitiveName === e.primitiveName && (a = !0);
              a || i.push(n);
            }
            $(n.value) && (e[o] = n.value);
          }
      }
      switch (e.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
          if (e.effects)
            for (const n of e.effects) Y.applyOverrides(n, s, i, r);
          if (e.symbolLayers)
            for (const n of e.symbolLayers) Y.applyOverrides(n, s, i, r);
          break;
        case "CIMTextSymbol":
          break;
        case "CIMSolidStroke":
        case "CIMSolidFill":
        case "CIMVectorMarker":
          if (e.effects)
            for (const n of e.effects) Y.applyOverrides(n, s, i, r);
          if (e.type === "CIMVectorMarker" && e.markerGraphics)
            for (const n of e.markerGraphics)
              Y.applyOverrides(n, s, i, r), Y.applyOverrides(n.symbol, s, i, r);
      }
    }
    static restoreOverrides(e) {
      for (const s of e) s.cim[s.nocapPropertyName] = s.value;
    }
    static buildOverrideKey(e) {
      let s = "";
      for (const i of e)
        i.value !== void 0 &&
          (s += `${i.primitiveName}${i.propertyName}${JSON.stringify(
            i.value
          )}`);
      return s;
    }
    static toValue(e, s) {
      if (e === "DashTemplate") return s.split(" ").map((i) => Number(i));
      if (e === "Color") {
        const i = new oi(s).toRgba();
        return (i[3] *= 255), i;
      }
      return s;
    }
  };
const rs = (t) => {
    if (!t) return gt.Butt;
    switch (t) {
      case "butt":
        return gt.Butt;
      case "square":
        return gt.Square;
      case "round":
        return gt.Round;
    }
  },
  ns = (t) => {
    if (!t) return yt.Miter;
    switch (t) {
      case "miter":
        return yt.Miter;
      case "round":
        return yt.Round;
      case "bevel":
        return yt.Bevel;
    }
  },
  Yn = (t) => {
    if (it(t)) return "Center";
    switch (t) {
      case "left":
        return "Left";
      case "right":
        return "Right";
      case "center":
        return "Center";
    }
  },
  Vn = (t) => {
    if (it(t)) return "Center";
    switch (t) {
      case "baseline":
        return "Baseline";
      case "top":
        return "Top";
      case "middle":
        return "Center";
      case "bottom":
        return "Bottom";
    }
  },
  K = (t) => {
    if (!t) return [0, 0, 0, 0];
    const { r: e, g: s, b: i, a: r } = t;
    return [e, s, i, 255 * r];
  },
  Bn = (t, e) => {
    const s = Wn(e),
      i = Un(t);
    return s && i ? `${s}-${i}` : `${s}${i}`;
  },
  Wn = (t) => {
    if (!t) return "";
    switch (t.toLowerCase()) {
      case "bold":
      case "bolder":
        return "bold";
    }
    return "";
  },
  Un = (t) => {
    if (!t) return "";
    switch (t.toLowerCase()) {
      case "italic":
      case "oblique":
        return "italic";
    }
    return "";
  },
  Ws = (t, e) => {
    const s = e === "butt";
    switch (t) {
      case "dash":
      case "esriSLSDash":
        return s ? [4, 3] : [3, 4];
      case "dash-dot":
      case "esriSLSDashDot":
        return s ? [4, 3, 1, 3] : [3, 4, 0, 4];
      case "dot":
      case "esriSLSDot":
        return s ? [1, 3] : [0, 4];
      case "long-dash":
      case "esriSLSLongDash":
        return s ? [8, 3] : [7, 4];
      case "long-dash-dot":
      case "esriSLSLongDashDot":
        return s ? [8, 3, 1, 3] : [7, 4, 0, 4];
      case "long-dash-dot-dot":
      case "esriSLSDashDotDot":
        return s ? [8, 3, 1, 3, 1, 3] : [7, 4, 0, 4, 0, 4];
      case "short-dash":
      case "esriSLSShortDash":
        return s ? [4, 1] : [3, 2];
      case "short-dash-dot":
      case "esriSLSShortDashDot":
        return s ? [4, 1, 1, 1] : [3, 2, 0, 2];
      case "short-dash-dot-dot":
      case "esriSLSShortDashDotDot":
        return s ? [4, 1, 1, 1, 1, 1] : [3, 2, 0, 2, 0, 2];
      case "short-dot":
      case "esriSLSShortDot":
        return s ? [1, 1] : [0, 2];
      case "solid":
      case "esriSLSSolid":
      case "none":
        return (
          ps.error("Unexpected: style does not require rasterization"), [0, 0]
        );
      default:
        return (
          ps.error(
            `Tried to rasterize SLS, but found an unexpected style: ${t}!`
          ),
          [0, 0]
        );
    }
  },
  Us = (t) => {
    let s, i;
    const r = t;
    if (r === "circle" || r === "esriSMSCircle") {
      let o = Math.acos(0.995),
        a = Math.ceil(rr / o / 4);
      a === 0 && (a = 1), (o = Xn / a), (a *= 4);
      const l = [];
      l.push([50, 0]);
      for (let c = 1; c < a; c++)
        l.push([50 * Math.cos(c * o), -50 * Math.sin(c * o)]);
      l.push([50, 0]),
        (s = { rings: [l] }),
        (i = { xmin: -50, ymin: -50, xmax: 50, ymax: 50 });
    } else if (r === "cross" || r === "esriSMSCross")
      (s = {
        rings: [
          [
            [0, 50],
            [0, 0],
            [50, 0],
            [50, -0],
            [0, -0],
            [0, -50],
            [-0, -50],
            [-0, -0],
            [-50, -0],
            [-50, 0],
            [-0, 0],
            [-0, 50],
            [0, 50],
          ],
        ],
      }),
        (i = { xmin: -50, ymin: -50, xmax: 50, ymax: 50 });
    else if (r === "diamond" || r === "esriSMSDiamond")
      (s = {
        rings: [
          [
            [-50, 0],
            [0, 50],
            [50, 0],
            [0, -50],
            [-50, 0],
          ],
        ],
      }),
        (i = { xmin: -50, ymin: -50, xmax: 50, ymax: 50 });
    else if (r === "square" || r === "esriSMSSquare")
      (s = {
        rings: [
          [
            [-50, -50],
            [-50, 50],
            [50, 50],
            [50, -50],
            [-50, -50],
          ],
        ],
      }),
        (i = { xmin: -50, ymin: -50, xmax: 50, ymax: 50 });
    else if (r === "x" || r === "esriSMSX")
      (s = {
        rings: [
          [
            [0, 0],
            [50 - 0, 50],
            [50, 50 - 0],
            [0, 0],
            [50, 0 - 50],
            [50 - 0, -50],
            [0, -0],
            [0 - 50, -50],
            [-50, 0 - 50],
            [-0, 0],
            [-50, 50 - 0],
            [0 - 50, 50],
            [0, 0],
          ],
        ],
      }),
        (i = { xmin: -50, ymin: -50, xmax: 50, ymax: 50 });
    else if (r === "triangle" || r === "esriSMSTriangle") {
      const n = 57.735026918962575,
        o = -n,
        a = (2 / 3) * 100,
        l = a - 100;
      (s = {
        rings: [
          [
            [o, l],
            [0, a],
            [n, l],
            [o, l],
          ],
        ],
      }),
        (i = { xmin: o, ymin: l, xmax: n, ymax: a });
    } else
      r === "arrow" &&
        ((s = {
          rings: [
            [
              [-50, 50],
              [50, 0],
              [-50, -50],
              [-33, -20],
              [-33, 20],
              [-50, 50],
            ],
          ],
        }),
        (i = { xmin: -50, ymin: -50, xmax: 50, ymax: 50 }));
    return [i, s];
  },
  qn = (t) =>
    t === "vertical" ||
    t === "horizontal" ||
    t === "cross" ||
    t === "esriSFSCross" ||
    t === "esriSFSVertical" ||
    t === "esriSFSHorizontal",
  Jn = (t) => t && t.charAt(0).toLowerCase() + t.substr(1);
function $n(t, e, s) {
  t.effects &&
    !$(e.geometryEngine) &&
    (e.geometryEnginePromise
      ? s.push(e.geometryEnginePromise)
      : Wr(t.effects) &&
        ((e.geometryEnginePromise = Er(
          () => import("./geometryEngineJSON.4e17515e.js"),
          [
            "js/geometryEngineJSON.4e17515e.js",
            "js/geometryEngineBase.6e4344a5.js",
            "js/geometryEngineJSON.8702a072.js",
            "js/json.495fc412.js",
          ]
        )),
        s.push(e.geometryEnginePromise),
        e.geometryEnginePromise.then((i) => (e.geometryEngine = i))));
}
const qs = 0.05;
function jn(t) {
  return Math.max(Math.round(t / qs), 1) * qs;
}
const Kn = new Set(["StartTimeOffset", "Duration", "RepeatDelay"]);
function Zn(t, e) {
  return Kn.has(e) ? jn(t) : t;
}
function Qn(t) {
  var e;
  if (!t) return null;
  switch (t.type) {
    case "CIMPointSymbol": {
      const s = t.symbolLayers;
      return s && s.length === 1 ? Qn(s[0]) : null;
    }
    case "CIMVectorMarker": {
      const s = t.markerGraphics;
      if (!s || s.length !== 1) return null;
      const i = s[0];
      if (!i) return null;
      const r = i.geometry;
      if (!r) return null;
      const n = i.symbol;
      return !n ||
        (n.type !== "CIMPolygonSymbol" && n.type !== "CIMLineSymbol") ||
        ((e = n.symbolLayers) != null && e.some((o) => !!o.effects))
        ? null
        : { geom: r, asFill: n.type === "CIMPolygonSymbol" };
    }
    case "sdf":
      return { geom: t.geom, asFill: t.asFill };
  }
  return null;
}
function Js(t) {
  let e = 1 / 0,
    s = -1 / 0,
    i = 1 / 0,
    r = -1 / 0;
  for (const n of t)
    for (const o of n)
      o[0] < e && (e = o[0]),
        o[0] > s && (s = o[0]),
        o[1] < i && (i = o[1]),
        o[1] > r && (r = o[1]);
  return [e, i, s, r];
}
function $s(t) {
  return t
    ? t.rings
      ? Js(t.rings)
      : t.paths
      ? Js(t.paths)
      : V(t)
      ? [t.xmin, t.ymin, t.xmax, t.ymax]
      : null
    : null;
}
function js(t, e, s, i, r) {
  const [n, o, a, l] = t;
  if (a < n || l < o) return [0, 0, 0];
  const c = a - n,
    h = l - o,
    f = Math.floor(31.5),
    u = (128 - 2 * (f + 1)) / Math.max(c, h),
    p = Math.round(c * u) + 2 * f,
    m = Math.round(h * u) + 2 * f;
  let _ = 1;
  e && (_ = m / u / (e.ymax - e.ymin));
  let d = 0,
    y = 0,
    g = 1;
  i &&
    (r
      ? e &&
        s &&
        e.ymax - e.ymin > 0 &&
        ((g = (e.xmax - e.xmin) / (e.ymax - e.ymin)),
        (d = i.x / (s * g)),
        (y = i.y / s))
      : ((d = i.x), (y = i.y))),
    e &&
      ((d = 0.5 * (e.xmax + e.xmin) + d * (e.xmax - e.xmin)),
      (y = 0.5 * (e.ymax + e.ymin) + y * (e.ymax - e.ymin))),
    (d -= n),
    (y -= o),
    (d *= u),
    (y *= u),
    (d += f),
    (y += f);
  let M = d / p - 0.5,
    b = y / m - 0.5;
  return r && s && ((M *= s * g), (b *= s)), [_, M, b];
}
function Ro(t) {
  const e = (function (c) {
      return c
        ? c.rings
          ? c.rings
          : c.paths
          ? c.paths
          : c.xmin !== void 0 &&
            c.ymin !== void 0 &&
            c.xmax !== void 0 &&
            c.ymax !== void 0
          ? [
              [
                [c.xmin, c.ymin],
                [c.xmin, c.ymax],
                [c.xmax, c.ymax],
                [c.xmax, c.ymin],
                [c.xmin, c.ymin],
              ],
            ]
          : null
        : null;
    })(t.geom),
    s = (function (c) {
      let h = 1 / 0,
        f = -1 / 0,
        u = 1 / 0,
        p = -1 / 0;
      for (const m of c)
        for (const _ of m)
          _[0] < h && (h = _[0]),
            _[0] > f && (f = _[0]),
            _[1] < u && (u = _[1]),
            _[1] > p && (p = _[1]);
      return new Ji(h, u, f - h, p - u);
    })(e),
    i = Math.floor(31.5),
    r = (128 - 2 * (i + 1)) / Math.max(s.width, s.height),
    n = Math.round(s.width * r) + 2 * i,
    o = Math.round(s.height * r) + 2 * i,
    a = [];
  for (const c of e)
    if (c && c.length > 1) {
      const h = [];
      for (const f of c) {
        let [u, p] = f;
        (u -= s.x),
          (p -= s.y),
          (u *= r),
          (p *= r),
          (u += i - 0.5),
          (p += i - 0.5),
          t.asFill ? h.push([u, p]) : h.push([Math.round(u), Math.round(p)]);
      }
      if (t.asFill) {
        const f = h.length - 1;
        (h[0][0] === h[f][0] && h[0][1] === h[f][1]) || h.push(h[0]);
      }
      a.push(h);
    }
  const l = (function (c, h, f, u) {
    const p = h * f,
      m = new Array(p),
      _ = u * u + 1;
    for (let d = 0; d < p; ++d) m[d] = _;
    for (const d of c) {
      const y = d.length;
      for (let g = 1; g < y; ++g) {
        const M = d[g - 1],
          b = d[g];
        let S, P, x, k;
        M[0] < b[0] ? ((S = M[0]), (P = b[0])) : ((S = b[0]), (P = M[0])),
          M[1] < b[1] ? ((x = M[1]), (k = b[1])) : ((x = b[1]), (k = M[1]));
        let v = Math.floor(S) - u,
          C = Math.floor(P) + u,
          w = Math.floor(x) - u,
          A = Math.floor(k) + u;
        v < 0 && (v = 0), C > h && (C = h), w < 0 && (w = 0), A > f && (A = f);
        const T = b[0] - M[0],
          N = b[1] - M[1],
          R = T * T + N * N;
        for (let F = v; F < C; F++)
          for (let G = w; G < A; G++) {
            let U,
              E,
              q = (F - M[0]) * T + (G - M[1]) * N;
            q < 0
              ? ((U = M[0]), (E = M[1]))
              : q > R
              ? ((U = b[0]), (E = b[1]))
              : ((q /= R), (U = M[0] + q * T), (E = M[1] + q * N));
            const j = (F - U) * (F - U) + (G - E) * (G - E),
              ht = (f - G - 1) * h + F;
            j < m[ht] && (m[ht] = j);
          }
      }
    }
    for (let d = 0; d < p; ++d) m[d] = Math.sqrt(m[d]);
    return m;
  })(a, n, o, i);
  return (
    t.asFill &&
      (function (c, h, f, u, p) {
        for (const m of c) {
          const _ = m.length;
          for (let d = 1; d < _; ++d) {
            const y = m[d - 1],
              g = m[d];
            let M, b, S, P;
            y[0] < g[0] ? ((M = y[0]), (b = g[0])) : ((M = g[0]), (b = y[0])),
              y[1] < g[1] ? ((S = y[1]), (P = g[1])) : ((S = g[1]), (P = y[1]));
            let x = Math.floor(M),
              k = Math.floor(b) + 1,
              v = Math.floor(S),
              C = Math.floor(P) + 1;
            x < u && (x = u),
              k > h - u && (k = h - u),
              v < u && (v = u),
              C > f - u && (C = f - u);
            for (let w = v; w < C; ++w) {
              if (y[1] > w == g[1] > w) continue;
              const A = (f - w - 1) * h;
              for (let T = x; T < k; ++T)
                T < ((g[0] - y[0]) * (w - y[1])) / (g[1] - y[1]) + y[0] &&
                  (p[A + T] = -p[A + T]);
              for (let T = u; T < x; ++T) p[A + T] = -p[A + T];
            }
          }
        }
      })(a, n, o, i, l),
    [to(l, i), n, o]
  );
}
function to(t, e) {
  const s = 2 * e,
    i = t.length,
    r = new Uint8Array(4 * i);
  for (let n = 0; n < i; ++n) {
    const o = 0.5 - t[n] / s;
    Yr(o, r, 4 * n);
  }
  return r;
}
class Ks {
  static executeEffects(e, s, i, r) {
    const n = Jr(s);
    let o = new hs(n);
    for (const a of e) {
      const l = fs(a);
      l && (o = l.execute(o, a, 1.3333333333333333, i, r));
    }
    return o;
  }
  static next(e) {
    const s = e.next();
    return (
      (function (i) {
        i &&
          (xi(i),
          O(i) ? Rs(i.rings) : X(i) ? Rs(i.paths) : mt(i) && Ci(i.points));
      })(s),
      s
    );
  }
  static applyEffects(e, s, i) {
    if (!e) return s;
    let r = new hs(s);
    for (const a of e) {
      const l = fs(a);
      l && (r = l.execute(r, a, 1, null, i));
    }
    let n,
      o = null;
    for (; (n = r.next()); )
      o
        ? X(o)
          ? X(n) && o.paths.push(...n.paths)
          : O(o) && O(n) && o.rings.push(...n.rings)
        : (o = n);
    return o;
  }
}
function eo(t, e) {
  let s;
  if (typeof t == "string") s = H(t + `-seed(${e})`);
  else {
    let i = 12;
    s = t ^ e;
    do s = (107 * ((s >> 8) ^ s) + i) | 0;
    while (--i != 0);
  }
  return (1 + s / (1 << 31)) / 2;
}
function so(t) {
  return Math.floor(eo(t, io) * ro);
}
const io = 53290320,
  ro = 10,
  Zs = ge.getLogger("esri.symbols.cim.cimAnalyzer");
function xs(t) {
  switch (t) {
    case "Butt":
      return $e.BUTT;
    case "Square":
      return $e.SQUARE;
    default:
      return $e.ROUND;
  }
}
function Ss(t) {
  switch (t) {
    case "Bevel":
      return je.BEVEL;
    case "Miter":
      return je.MITER;
    default:
      return je.ROUND;
  }
}
function Qs(t, e, s, i) {
  let r;
  t[e] ? (r = t[e]) : ((r = {}), (t[e] = r)), (r[s] = i);
}
function ti(t) {
  const e = t.markerPlacement;
  return e && e.angleToLine ? Ge.MAP : Ge.SCREEN;
}
async function Fo(t, e, s, i, r) {
  const n = i ?? [];
  if (!t) return n;
  let o, a;
  const l = {};
  if (t.type !== "CIMSymbolReference")
    return Zs.error("Expect cim type to be 'CIMSymbolReference'"), n;
  if (((o = t.symbol), (a = t.primitiveOverrides), a)) {
    const h = [];
    for (const f of a) {
      const u = f.valueExpressionInfo;
      if (u && e) {
        const p = u.expression,
          m = ni(p, e.spatialReference, e.fields).then((_) => {
            it(_) || Qs(l, f.primitiveName, f.propertyName, _);
          });
        h.push(m);
      } else f.value != null && Qs(l, f.primitiveName, f.propertyName, f.value);
    }
    h.length > 0 && (await Promise.all(h));
  }
  const c = [];
  switch (
    (dt.fetchResources(o, s, c),
    c.length > 0 && (await Promise.all(c)),
    o == null ? void 0 : o.type)
  ) {
    case "CIMPointSymbol":
    case "CIMLineSymbol":
    case "CIMPolygonSymbol":
      (function (h, f, u, p, m, _, d) {
        if (!h) return;
        const y = h.symbolLayers;
        if (!y) return;
        const g = h.effects;
        let M = Ge.SCREEN;
        const b = dt.getSize(h) ?? 0;
        h.type === "CIMPointSymbol" &&
          h.angleAlignment === "Map" &&
          (M = Ge.MAP);
        let S = y.length;
        for (; S--; ) {
          const P = y[S];
          if (!P || P.enable === !1) continue;
          let x;
          g && g.length && (x = [...g]);
          const k = P.effects;
          k && k.length && (g ? x.push(...k) : (x = [...k]));
          const v = [];
          let C;
          Nt.findEffectOverrides(x, f, v),
            (C = v.length > 0 ? go(x, v, u, p) : x);
          const w = [];
          switch ((Nt.findApplicableOverrides(P, f, w), P.type)) {
            case "CIMSolidFill":
              no(P, C, u, w, p, m);
              break;
            case "CIMPictureFill":
              oo(P, C, u, w, p, _, m);
              break;
            case "CIMHatchFill":
              ao(P, C, u, w, p, m);
              break;
            case "CIMGradientFill":
              lo(P, C, u, w, p, m);
              break;
            case "CIMSolidStroke":
              ho(P, C, u, w, p, m, h.type === "CIMPolygonSymbol", b);
              break;
            case "CIMPictureStroke":
              co(P, C, u, w, p, m, h.type === "CIMPolygonSymbol", b);
              break;
            case "CIMGradientStroke":
              uo(P, C, u, w, p, m, h.type === "CIMPolygonSymbol", b);
              break;
            case "CIMCharacterMarker":
              if (os(P, C, u, w, p, m)) break;
              break;
            case "CIMPictureMarker":
              if (os(P, C, u, w, p, m)) break;
              h.type === "CIMLineSymbol" && (M = ti(P)),
                fo(P, C, u, w, p, _, m, M, b);
              break;
            case "CIMVectorMarker":
              if (os(P, C, u, w, p, m)) break;
              h.type === "CIMLineSymbol" && (M = ti(P)),
                mo(P, C, u, w, p, m, _, M, b, d);
              break;
            default:
              Zs.error("Cannot analyze CIM layer", P.type);
          }
        }
      })(o, a, l, e, n, s, !!r);
  }
  return n;
}
function no(t, e, s, i, r, n) {
  const o = t.primitiveName,
    a = tt(t.color),
    [l, c] = rt(i, o, e, null, null),
    h = H(JSON.stringify(t) + c).toString();
  n.push({
    type: "fill",
    templateHash: h,
    materialHash: l ? () => h : h,
    cim: t,
    materialOverrides: null,
    colorLocked: !!t.colorLocked,
    color: I(o, s, "Color", r, a, lt),
    height: 0,
    angle: 0,
    offsetX: 0,
    offsetY: 0,
    scaleX: 1,
    effects: e,
    applyRandomOffset: !1,
    sampleAlphaOnly: !0,
  });
}
function oo(t, e, s, i, r, n, o) {
  const a = t.primitiveName,
    l = Xe(t),
    [c, h] = rt(i, a, e, null, null),
    f = H(JSON.stringify(t) + h).toString(),
    u = H(`${t.url}${JSON.stringify(t.colorSubstitutions)}`).toString();
  let p = L(t.scaleX);
  if ("width" in t && typeof t.width == "number") {
    const m = t.width;
    let _ = 1;
    const d = n.getResource(t.url);
    $(d) && (_ = d.width / d.height), (p /= _ * (t.height / m));
  }
  o.push({
    type: "fill",
    templateHash: f,
    materialHash: c ? () => u : u,
    cim: t,
    materialOverrides: null,
    colorLocked: !!t.colorLocked,
    effects: e,
    color: I(a, s, "TintColor", r, l, lt),
    height: I(a, s, "Height", r, t.height),
    scaleX: I(a, s, "ScaleX", r, p),
    angle: I(a, s, "Rotation", r, L(t.rotation)),
    offsetX: I(a, s, "OffsetX", r, L(t.offsetX)),
    offsetY: I(a, s, "OffsetY", r, L(t.offsetY)),
    url: t.url,
    applyRandomOffset: !1,
    sampleAlphaOnly: !1,
  });
}
function ao(t, e, s, i, r, n) {
  var d, y;
  const o = ["Rotation", "OffsetX", "OffsetY"],
    a = i.filter(
      (g) => g.primitiveName !== t.primitiveName || !o.includes(g.propertyName)
    ),
    l = t.primitiveName;
  let [c, h] = rt(i, l, e, null, null);
  const f = H(JSON.stringify(t) + h).toString(),
    u = H(`${t.separation}${JSON.stringify(t.lineSymbol)}`).toString();
  let p = { r: 255, g: 255, b: 255, a: 1 },
    m = !1;
  const _ =
    (y = (d = t.lineSymbol) == null ? void 0 : d.symbolLayers) == null
      ? void 0
      : y.find((g) => {
          var M;
          return (
            g.type === "CIMSolidStroke" &&
            ((M = s[g.primitiveName]) == null ? void 0 : M.Color) != null
          );
        });
  if (_) {
    (p = tt(_.color)), (p = I(_.primitiveName, s, "Color", r, p, lt));
    const g = typeof p == "function";
    (c = c || g), (m = _.color != null || g);
  }
  n.push({
    type: "fill",
    templateHash: f,
    materialHash: c ? xe(u, s, a, r) : u,
    cim: t,
    materialOverrides: a,
    colorLocked: !!t.colorLocked,
    effects: e,
    color: p,
    height: I(l, s, "Separation", r, t.separation),
    scaleX: 1,
    angle: I(l, s, "Rotation", r, L(t.rotation)),
    offsetX: I(l, s, "OffsetX", r, L(t.offsetX)),
    offsetY: I(l, s, "OffsetY", r, L(t.offsetY)),
    applyRandomOffset: !1,
    sampleAlphaOnly: !0,
    hasUnresolvedReplacementColor: !m,
  });
}
function lo(t, e, s, i, r, n) {
  const o = t.primitiveName,
    [a, l] = rt(i, o, e, null, null),
    c = H(JSON.stringify(t) + l).toString();
  n.push({
    type: "fill",
    templateHash: c,
    materialHash: a ? xe(c, s, i, r) : c,
    cim: t,
    materialOverrides: null,
    colorLocked: !!t.colorLocked,
    effects: e,
    color: { r: 128, g: 128, b: 128, a: 1 },
    height: 0,
    angle: 0,
    offsetX: 0,
    offsetY: 0,
    scaleX: 1,
    applyRandomOffset: !1,
    sampleAlphaOnly: !1,
  });
}
function ho(t, e, s, i, r, n, o, a) {
  const l = t.primitiveName,
    c = tt(t.color),
    h = t.width != null ? t.width : 4,
    f = xs(t.capStyle),
    u = Ss(t.joinStyle),
    p = t.miterLimit,
    [m, _] = rt(i, l, e, null, null),
    d = H(JSON.stringify(t) + _).toString();
  let y, g;
  if (e && e instanceof Array && e.length > 0) {
    const M = e[e.length - 1];
    if (
      M.type === "CIMGeometricEffectDashes" &&
      M.lineDashEnding === "NoConstraint" &&
      M.offsetAlongLine === null
    ) {
      const b = (e = [...e]).pop();
      (y = b.dashTemplate), (g = b.scaleDash);
    }
  }
  n.push({
    type: "line",
    templateHash: d,
    materialHash: m ? () => d : d,
    cim: t,
    materialOverrides: null,
    isOutline: o,
    colorLocked: !!t.colorLocked,
    effects: e,
    color: I(l, s, "Color", r, c, lt),
    width: I(l, s, "Width", r, h),
    cap: I(l, s, "CapStyle", r, f),
    join: I(l, s, "JoinStyle", r, u),
    miterLimit: p && I(l, s, "MiterLimit", r, p),
    referenceWidth: a,
    zOrder: Cs(t.name),
    dashTemplate: y,
    scaleDash: g,
    sampleAlphaOnly: !0,
  });
}
function co(t, e, s, i, r, n, o, a) {
  const l = H(`${t.url}${JSON.stringify(t.colorSubstitutions)}`).toString(),
    c = t.primitiveName,
    h = Xe(t),
    f = t.width != null ? t.width : 4,
    u = xs(t.capStyle),
    p = Ss(t.joinStyle),
    m = t.miterLimit,
    [_, d] = rt(i, c, e, null, null),
    y = H(JSON.stringify(t) + d).toString();
  n.push({
    type: "line",
    templateHash: y,
    materialHash: _ ? () => l : l,
    cim: t,
    materialOverrides: null,
    isOutline: o,
    colorLocked: !!t.colorLocked,
    effects: e,
    color: I(c, s, "TintColor", r, h, lt),
    width: I(c, s, "Width", r, f),
    cap: I(c, s, "CapStyle", r, u),
    join: I(c, s, "JoinStyle", r, p),
    miterLimit: m && I(c, s, "MiterLimit", r, m),
    referenceWidth: a,
    zOrder: Cs(t.name),
    dashTemplate: null,
    scaleDash: !1,
    url: t.url,
    sampleAlphaOnly: !1,
  });
}
function uo(t, e, s, i, r, n, o, a) {
  const l = t.primitiveName,
    c = t.width != null ? t.width : 4,
    h = xs(t.capStyle),
    f = Ss(t.joinStyle),
    u = t.miterLimit,
    [p, m] = rt(i, l, e, null, null),
    _ = H(JSON.stringify(t) + m).toString();
  n.push({
    type: "line",
    templateHash: _,
    materialHash: p ? xe(_, s, i, r) : _,
    cim: t,
    materialOverrides: null,
    isOutline: o,
    colorLocked: !!t.colorLocked,
    effects: e,
    color: { r: 128, g: 128, b: 128, a: 1 },
    width: I(l, s, "Width", r, c),
    cap: I(l, s, "CapStyle", r, h),
    join: I(l, s, "JoinStyle", r, f),
    miterLimit: u && I(l, s, "MiterLimit", r, u),
    referenceWidth: a,
    zOrder: Cs(t.name),
    dashTemplate: null,
    scaleDash: !1,
    sampleAlphaOnly: !1,
  });
}
function os(t, e, s, i, r, n) {
  const { markerPlacement: o, type: a } = t;
  if (!o || o.type !== "CIMMarkerPlacementInsidePolygon") return !1;
  if (a === "CIMVectorMarker" || a === "CIMPictureMarker") {
    const S = t.primitiveName;
    if (S) {
      const [x, k] = rt(i, S, e, null, null);
      if (x) return !1;
    }
    const P = o.primitiveName;
    if (P) {
      const [x, k] = rt(i, P, e, null, null);
      if (x) return !1;
    }
    if (a === "CIMVectorMarker") {
      const { markerGraphics: x } = t;
      if (x)
        for (const k of x) {
          const { symbol: v } = k;
          if (
            (v == null ? void 0 : v.type) === "CIMPolygonSymbol" &&
            v.symbolLayers
          ) {
            const { symbolLayers: C } = v;
            for (const w of C) if (w.type === "CIMSolidStroke") return !1;
          }
        }
    } else {
      const { animatedSymbolProperties: x } = t;
      if (x) return !1;
    }
  }
  const l = o,
    c = Math.abs(l.stepX),
    h = Math.abs(l.stepY);
  if (c === 0 || h === 0) return !0;
  const f = ["Rotation", "OffsetX", "OffsetY"],
    u = i.filter(
      (S) => S.primitiveName !== t.primitiveName || !f.includes(S.propertyName)
    ),
    p = "url" in t && typeof t.url == "string" ? t.url : void 0,
    [m, _] = rt(i, l.primitiveName, e, null, null),
    d = H(JSON.stringify(t) + _).toString();
  let y,
    g,
    M = null;
  if (o.gridType === "Random") {
    const S = Rt(ui),
      P = Math.max(Math.floor(S / c), 1),
      x = Math.max(Math.floor(S / h), 1);
    (y = h * x), (M = (k) => (k ? k * x : 0)), (g = (P * c) / y);
  } else
    o.shiftOddRows
      ? ((y = 2 * h), (M = (S) => (S ? 2 * S : 0)), (g = (c / h) * 0.5))
      : ((y = h), (M = null), (g = c / h));
  const b = Xe(t);
  return (
    n.push({
      type: "fill",
      templateHash: d,
      materialHash: m ? xe(d, s, u, r) : d,
      cim: t,
      materialOverrides: u,
      colorLocked: !!t.colorLocked,
      effects: e,
      color: I(l.primitiveName, s, "TintColor", r, b, lt),
      height: I(l.primitiveName, s, "StepY", r, y, M),
      scaleX: g,
      angle: I(l.primitiveName, s, "GridAngle", r, l.gridAngle),
      offsetX: I(l.primitiveName, s, "OffsetX", r, L(l.offsetX)),
      offsetY: I(l.primitiveName, s, "OffsetY", r, L(l.offsetY)),
      url: p,
      applyRandomOffset: o.gridType === "Random",
      sampleAlphaOnly: !p,
      hasUnresolvedReplacementColor: !0,
    }),
    !0
  );
}
function fo(t, e, s, i, r, n, o, a, l) {
  const c = t.primitiveName,
    h = L(t.size);
  let f = L(t.scaleX, 1);
  const u = L(t.rotation),
    p = L(t.offsetX),
    m = L(t.offsetY),
    _ = Xe(t),
    d = H(
      `${t.url}${JSON.stringify(t.colorSubstitutions)}${JSON.stringify(
        t.animatedSymbolProperties
      )}`
    ).toString(),
    y = nr(t.markerPlacement, i, s, r),
    g = (function (v, C, w, A) {
      const T = [];
      if ((Nt.findApplicableOverrides(v, C, T), v == null || T.length === 0))
        return v;
      for (const N of T)
        if (N.valueExpressionInfo && A != null && A.geometryType) {
          const R = w[N.primitiveName] && w[N.primitiveName][N.propertyName];
          R instanceof be &&
            (N.fn = (F, G, U) => Dt(R, F, { $view: U }, A.geometryType, G));
        }
      return (N, R, F) => {
        for (const E of T) E.fn && (E.value = E.fn(N, R, F));
        const G = D(v),
          U = v.primitiveName;
        for (const E of T)
          if (E.primitiveName === U) {
            const q = ws(E.propertyName);
            if (E.value != null) {
              const j = Zn(E.value, E.propertyName);
              j !== G[q] && (G[q] = j);
            }
          }
        return G;
      };
    })(t.animatedSymbolProperties, i, s, r),
    [M, b] = rt(i, c, e, y, g),
    S = H(JSON.stringify(t) + b).toString(),
    P = t.anchorPoint ?? { x: 0, y: 0 };
  if ("width" in t && typeof t.width == "number") {
    const v = t.width;
    let C = 1;
    const w = n.getResource(t.url);
    $(w) && (C = w.width / w.height), (f /= C * (h / v));
  }
  function x(v, C) {
    return $(g) ? fi(g, v, C) : null;
  }
  const k =
    t.animatedSymbolProperties &&
    t.animatedSymbolProperties.randomizeStartTime === !0
      ? (v, C, w, A) => {
          const T = so(A ?? 0),
            N = x(v, C);
          return d + `-MATERIALGROUP(${T})-ASP(${JSON.stringify(N)})`;
        }
      : M
      ? (v, C) => {
          const w = x(v, C);
          return d + `-ASP(${JSON.stringify(w)})`;
        }
      : d;
  o.push({
    type: "marker",
    templateHash: S,
    materialHash: k,
    cim: t,
    materialOverrides: null,
    colorLocked: !!t.colorLocked,
    effects: e,
    scaleSymbolsProportionally: !1,
    alignment: a,
    size: I(c, s, "Size", r, h),
    scaleX: I(c, s, "ScaleX", r, f),
    rotation: I(c, s, "Rotation", r, u),
    offsetX: I(c, s, "OffsetX", r, p),
    offsetY: I(c, s, "OffsetY", r, m),
    color: I(c, s, "TintColor", r, _, lt),
    anchorPoint: { x: P.x, y: -P.y },
    isAbsoluteAnchorPoint: t.anchorPointUnits !== "Relative",
    outlineColor: { r: 0, g: 0, b: 0, a: 0 },
    outlineWidth: 0,
    frameHeight: 0,
    rotateClockwise: !!t.rotateClockwise,
    referenceSize: l,
    sizeRatio: 1,
    markerPlacement: y,
    url: t.url,
    animatedSymbolProperties: g,
  });
}
function mo(t, e, s, i, r, n, o, a, l, c) {
  const h = t.markerGraphics;
  if (!h) return;
  let f = 0;
  if (t.scaleSymbolsProportionally) {
    const p = t.frame;
    p && (f = p.ymax - p.ymin);
  }
  const u = nr(t.markerPlacement, i, s, r);
  for (const p of h)
    if (p) {
      const m = p.symbol;
      if (!m) continue;
      switch (m.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
          _o(t, e, u, null, p, i, s, r, n, o, a, l, f, !!c);
          break;
        case "CIMTextSymbol":
          po(t, e, u, p, s, i, r, n, a, l, f);
      }
    }
}
function po(t, e, s, i, r, n, o, a, l, c, h) {
  Nt.findApplicableOverrides(i, n, []);
  const f = i.geometry;
  if (!("x" in f) || !("y" in f)) return;
  const u = i.symbol,
    p = gi(u),
    m = di(u.fontStyleName),
    _ = gs(u.fontFamilyName);
  u.font = { family: _, decoration: p, ...m };
  const d = t.frame,
    y = f.x - 0.5 * (d.xmin + d.xmax),
    g = f.y - 0.5 * (d.ymin + d.ymax),
    M = t.size / h,
    b = t.primitiveName,
    S = L(u.height) * M,
    P = L(u.angle),
    x = L(t.offsetX) + (L(u.offsetX) + y) * M,
    k = L(t.offsetY) + (L(u.offsetY) + g) * M,
    v = tt(At(u));
  let C = tt(It(u)),
    w = ye(u) ?? 0;
  w || ((C = tt(At(u.haloSymbol))), u.haloSize && (w = u.haloSize * M));
  let A = null,
    T = null,
    N = 0;
  if (u.callout && u.callout.type === "CIMBackgroundCallout") {
    const nt = u.callout;
    if (nt.backgroundSymbol) {
      const ot = nt.backgroundSymbol.symbolLayers;
      if (ot)
        for (const Z of ot)
          Z.type === "CIMSolidFill"
            ? (A = tt(Z.color))
            : Z.type === "CIMSolidStroke" &&
              ((T = tt(Z.color)), (N = L(Z.width)));
    }
  }
  const [R, F] = rt(n, b, e, s, null),
    G =
      JSON.stringify(t.effects) +
      Number(t.colorLocked).toString() +
      JSON.stringify(t.anchorPoint) +
      t.anchorPointUnits +
      JSON.stringify(t.markerPlacement) +
      t.size.toString(),
    U = H(JSON.stringify(i) + G + F).toString();
  let E = I(
    i.primitiveName,
    r,
    "TextString",
    o,
    i.textString ?? "",
    _i,
    u.textCase
  );
  if (E == null) return;
  const { fontStyleName: q } = u,
    j = _ + (q ? "-" + q.toLowerCase() : "-regular"),
    ht = j;
  typeof E == "string" &&
    E.includes("[") &&
    u.fieldMap &&
    (E = (function (nt, ot, Z) {
      const at = mi(ot, nt);
      return (Ve) => pi(Ve, at, Z);
    })(u.fieldMap, E, u.textCase)),
    a.push({
      type: "text",
      templateHash: U,
      materialHash:
        R || typeof E == "function" || E.match(/\[(.*?)\]/)
          ? (nt, ot, Z) => ht + "-" + fi(E, nt, ot, Z)
          : ht + "-" + H(E),
      cim: u,
      materialOverrides: null,
      colorLocked: !!t.colorLocked,
      effects: e,
      alignment: l,
      anchorPoint: {
        x: t.anchorPoint ? t.anchorPoint.x : 0,
        y: t.anchorPoint ? t.anchorPoint.y : 0,
      },
      isAbsoluteAnchorPoint: t.anchorPointUnits !== "Relative",
      fontName: j,
      decoration: p,
      weight: I(b, r, "Weight", o, m.weight),
      style: I(b, r, "Size", o, m.style),
      size: I(b, r, "Size", o, S),
      angle: I(b, r, "Rotation", o, P),
      offsetX: I(b, r, "OffsetX", o, x),
      offsetY: I(b, r, "OffsetY", o, k),
      horizontalAlignment: yi(u.horizontalAlignment),
      verticalAlignment: Mi(u.verticalAlignment),
      text: E,
      color: v,
      outlineColor: C,
      outlineSize: w,
      backgroundColor: A,
      borderLineColor: T,
      borderLineWidth: N,
      referenceSize: c,
      sizeRatio: 1,
      markerPlacement: s,
    });
}
function _o(t, e, s, i, r, n, o, a, l, c, h, f, u, p) {
  const m = r.symbol,
    _ = m.symbolLayers;
  if (!_) return;
  if (p) return void ei(t, e, s, i, r, o, n, a, l, c, h, f, u);
  let d = _.length;
  if (yo(_))
    return void (function (g, M, b, S, P, x, k, v, C, w, A, T, N) {
      const R = P.geometry,
        F = x[0],
        G = x[1],
        U = $s(R);
      if (!U) return;
      const E = g.anchorPointUnits !== "Relative",
        [q, j, ht] = js(U, g.frame, g.size, g.anchorPoint, E),
        nt = { type: "sdf", geom: R, asFill: !0 },
        ot = g.primitiveName,
        Z = L(g.size),
        at = L(g.rotation),
        Ve = L(g.offsetX),
        or = L(g.offsetY),
        ks = G.path,
        vs = G.primitiveName,
        Be = F.primitiveName,
        ar = tt(At(G)),
        lr = tt(It(F)),
        hr = ye(F) ?? 0;
      let We = !1,
        Is = "";
      for (const bt of k)
        (bt.primitiveName !== vs &&
          bt.primitiveName !== Be &&
          bt.primitiveName !== ot) ||
          (bt.value !== void 0
            ? (Is += `-${bt.primitiveName}-${bt.propertyName}-${JSON.stringify(
                bt.value
              )}`)
            : bt.valueExpressionInfo && (We = !0));
      $(b) && typeof b == "function" && (We = !0);
      const cr = JSON.stringify({ ...g, markerGraphics: null }),
        Ls = H(JSON.stringify(nt) + ks).toString(),
        ur = {
          type: "marker",
          templateHash: H(
            JSON.stringify(P) + JSON.stringify(G) + JSON.stringify(F) + cr + Is
          ).toString(),
          materialHash: We ? () => Ls : Ls,
          cim: nt,
          materialOverrides: null,
          colorLocked: !!g.colorLocked,
          effects: M,
          scaleSymbolsProportionally: !!g.scaleSymbolsProportionally,
          alignment: A,
          anchorPoint: { x: j, y: ht },
          isAbsoluteAnchorPoint: E,
          size: I(g.primitiveName, v, "Size", C, Z),
          rotation: I(g.primitiveName, v, "Rotation", C, at),
          offsetX: I(g.primitiveName, v, "OffsetX", C, Ve),
          offsetY: I(g.primitiveName, v, "OffsetY", C, or),
          scaleX: 1,
          frameHeight: N,
          rotateClockwise: !!g.rotateClockwise,
          referenceSize: T,
          sizeRatio: q,
          color: I(vs, v, "Color", C, ar, lt),
          outlineColor: I(Be, v, "Color", C, lr, lt),
          outlineWidth: I(Be, v, "Width", C, hr),
          markerPlacement: b,
          path: ks,
          animatedSymbolProperties: S,
        };
      w.push(ur);
    })(t, e, s, i, r, _, n, o, a, l, h, f, u);
  const y = Ks.applyEffects(m.effects, r.geometry, c.geometryEngine);
  if (y)
    for (; d--; ) {
      const g = _[d];
      if (g && g.enable !== !1)
        switch (g.type) {
          case "CIMSolidFill":
          case "CIMSolidStroke": {
            const M = Ks.applyEffects(g.effects, y, c.geometryEngine),
              b = $s(M);
            if (!b) continue;
            const S = t.anchorPointUnits !== "Relative",
              [P, x, k] = js(b, t.frame, t.size, t.anchorPoint, S),
              v = g.type === "CIMSolidFill",
              C = { type: "sdf", geom: M, asFill: v },
              w = t.primitiveName,
              A = L(t.size) ?? 10,
              T = L(t.rotation),
              N = L(t.offsetX),
              R = L(t.offsetY),
              F = g.path,
              G = g.primitiveName,
              U = tt(v ? At(g) : It(g)),
              E = v ? { r: 0, g: 0, b: 0, a: 0 } : tt(It(g)),
              q = ye(g) ?? 0;
            if (!v && !q) break;
            let j = !1,
              ht = "";
            for (const at of n)
              (at.primitiveName !== G && at.primitiveName !== w) ||
                (at.value !== void 0
                  ? (ht += `-${at.primitiveName}-${
                      at.propertyName
                    }-${JSON.stringify(at.value)}`)
                  : at.valueExpressionInfo && (j = !0));
            (($(e) && typeof e == "function") ||
              ($(s) && typeof s == "function")) &&
              (j = !0);
            const nt = JSON.stringify({ ...t, markerGraphics: null }),
              ot = H(JSON.stringify(C) + F).toString(),
              Z = {
                type: "marker",
                templateHash: H(
                  JSON.stringify(r) + JSON.stringify(g) + nt + ht
                ).toString(),
                materialHash: j ? () => ot : ot,
                cim: C,
                materialOverrides: null,
                colorLocked: !!t.colorLocked,
                effects: e,
                scaleSymbolsProportionally: !!t.scaleSymbolsProportionally,
                alignment: h,
                anchorPoint: { x, y: k },
                isAbsoluteAnchorPoint: S,
                size: I(t.primitiveName, o, "Size", a, A),
                rotation: I(t.primitiveName, o, "Rotation", a, T),
                offsetX: I(t.primitiveName, o, "OffsetX", a, N),
                offsetY: I(t.primitiveName, o, "OffsetY", a, R),
                scaleX: 1,
                frameHeight: u,
                rotateClockwise: !!t.rotateClockwise,
                referenceSize: f,
                sizeRatio: P,
                color: I(G, o, "Color", a, U, lt),
                outlineColor: I(G, o, "Color", a, E, lt),
                outlineWidth: I(G, o, "Width", a, q),
                markerPlacement: s,
                animatedSymbolProperties: i,
                path: F,
              };
            l.push(Z);
            break;
          }
          default:
            ei(t, e, s, i, r, o, n, a, l, c, h, f, u);
        }
    }
}
function ei(t, e, s, i, r, n, o, a, l, c, h, f, u) {
  const p = (function (C, w) {
      return {
        type: C.type,
        enable: !0,
        name: C.name,
        colorLocked: C.colorLocked,
        primitiveName: C.primitiveName,
        anchorPoint: C.anchorPoint,
        anchorPointUnits: C.anchorPointUnits,
        offsetX: 0,
        offsetY: 0,
        rotateClockwise: C.rotateClockwise,
        rotation: 0,
        size: C.size,
        billboardMode3D: C.billboardMode3D,
        depth3D: C.depth3D,
        frame: C.frame,
        markerGraphics: [w],
        scaleSymbolsProportionally: C.scaleSymbolsProportionally,
        respectFrame: C.respectFrame,
        clippingPath: C.clippingPath,
      };
    })(t, r),
    m = ["Rotation", "OffsetX", "OffsetY"],
    _ = o.filter(
      (C) => C.primitiveName !== t.primitiveName || !m.includes(C.propertyName)
    );
  let d = "";
  for (const C of o)
    C.value !== void 0 &&
      (d += `-${C.primitiveName}-${C.propertyName}-${JSON.stringify(C.value)}`);
  const [y, g, M] = dt.getTextureAnchor(p, c),
    b = t.primitiveName,
    S = L(t.rotation),
    P = L(t.offsetX),
    x = L(t.offsetY),
    k = H(JSON.stringify(p) + d).toString(),
    v = {
      type: "marker",
      templateHash: k,
      materialHash:
        _.length > 0 || ($(e) && typeof e == "function") ? xe(k, n, _, a) : k,
      cim: p,
      materialOverrides: _,
      colorLocked: !!t.colorLocked,
      effects: e,
      scaleSymbolsProportionally: !!t.scaleSymbolsProportionally,
      alignment: h,
      anchorPoint: { x: y, y: g },
      isAbsoluteAnchorPoint: !1,
      size: L(t.size),
      rotation: I(b, n, "Rotation", a, S),
      offsetX: I(b, n, "OffsetX", a, P),
      offsetY: I(b, n, "OffsetY", a, x),
      color: { r: 255, g: 255, b: 255, a: 1 },
      outlineColor: { r: 0, g: 0, b: 0, a: 0 },
      outlineWidth: 0,
      scaleX: 1,
      frameHeight: u,
      rotateClockwise: !!t.rotateClockwise,
      referenceSize: f,
      sizeRatio: M / Tt(t.size),
      markerPlacement: s,
      animatedSymbolProperties: i,
      avoidSDFRasterization: !0,
    };
  l.push(v);
}
function Cs(t) {
  if (t && t.indexOf("Level_") === 0) {
    const e = parseInt(t.substr(6), 10);
    if (!isNaN(e)) return e;
  }
  return 0;
}
function lt(t) {
  if (!t || t.length === 0) return null;
  const e = new oi(t).toRgba();
  return { r: e[0], g: e[1], b: e[2], a: e[3] };
}
function I(t, e, s, i, r, n, o) {
  if (t == null) return r;
  const a = e[t];
  if (a) {
    const l = a[s];
    if (typeof l == "string" || typeof l == "number" || l instanceof Array)
      return n ? n.call(null, l, o) : l;
    if (l != null && l instanceof be && i != null && i.geometryType)
      return (c, h, f) => {
        let u = Dt(l, c, { $view: f }, i.geometryType, h);
        return u !== null && n && (u = n.call(null, u, o)), u !== null ? u : r;
      };
  }
  return r;
}
function ws(t) {
  return t && t.charAt(0).toLowerCase() + t.substr(1);
}
function go(t, e, s, i) {
  for (const r of e)
    if (r.valueExpressionInfo && i != null && i.geometryType) {
      const n = s[r.primitiveName] && s[r.primitiveName][r.propertyName];
      n instanceof be &&
        (r.fn = (o, a, l) => Dt(n, o, { $view: l }, i.geometryType, a));
    }
  return (r, n, o) => {
    for (const l of e) l.fn && (l.value = l.fn(r, n, o));
    const a = [];
    for (let l of t) {
      const c = l == null ? void 0 : l.primitiveName;
      if (c) {
        let h = !1;
        for (const f of e)
          if (f.primitiveName === c) {
            const u = ws(f.propertyName);
            f.value != null &&
              f.value !== l[u] &&
              (h || ((l = D(l)), (h = !0)), (l[u] = f.value));
          }
      }
      a.push(l);
    }
    return a;
  };
}
function nr(t, e, s, i) {
  const r = [];
  if ((Nt.findApplicableOverrides(t, e, r), t == null || r.length === 0))
    return t;
  for (const n of r)
    if (n.valueExpressionInfo && i != null && i.geometryType) {
      const o = s[n.primitiveName] && s[n.primitiveName][n.propertyName];
      o instanceof be &&
        (n.fn = (a, l, c) => Dt(o, a, { $view: c }, i.geometryType, l));
    }
  return (n, o, a) => {
    for (const h of r) h.fn && (h.value = h.fn(n, o, a));
    const l = D(t),
      c = t.primitiveName;
    for (const h of r)
      if (h.primitiveName === c) {
        const f = ws(h.propertyName);
        h.value != null && h.value !== l[f] && (l[f] = h.value);
      }
    return l;
  };
}
function xe(t, e, s, i) {
  for (const r of s)
    if (r.valueExpressionInfo && i != null && i.geometryType) {
      const n = e[r.primitiveName] && e[r.primitiveName][r.propertyName];
      n instanceof be &&
        (r.fn = (o, a, l) => Dt(n, o, { $view: l }, i.geometryType, a));
    }
  return (r, n, o) => {
    for (const a of s) a.fn && (a.value = a.fn(r, n, o));
    return H(t + Nt.buildOverrideKey(s)).toString();
  };
}
function Go(t, e) {
  if (!e || e.length === 0) return t;
  const s = D(t);
  return Nt.applyOverrides(s, e), s;
}
function rt(t, e, s, i, r) {
  let n = !1,
    o = "";
  for (const a of t)
    a.primitiveName === e &&
      (a.value !== void 0
        ? (o += `-${a.primitiveName}-${a.propertyName}-${JSON.stringify(
            a.value
          )}`)
        : a.valueExpressionInfo && (n = !0));
  return (
    $(s) && typeof s == "function" && (n = !0),
    $(i) && typeof i == "function" && (n = !0),
    $(r) && typeof r == "function" && (n = !0),
    [n, o]
  );
}
const yo = (t) =>
    t &&
    t.length === 2 &&
    t[0].enable &&
    t[1].enable &&
    t[0].type === "CIMSolidStroke" &&
    t[1].type === "CIMSolidFill" &&
    !t[0].effects &&
    !t[1].effects,
  Mo = { marker: Le.MARKER, fill: Le.FILL, line: Le.LINE, text: Le.TEXT };
class Xo {
  constructor(e, s, i, r) {
    const n = {
        minScale: s == null ? void 0 : s.minScale,
        maxScale: s == null ? void 0 : s.maxScale,
      },
      o = (function (l) {
        return l.minScale || l.maxScale ? l.minScale + "-" + l.maxScale : "";
      })(n);
    (this.layers = e),
      (this.data = s),
      (this.hash = this._createHash() + o),
      (this.rendererKey = i);
    const a = {
      isOutline: !1,
      placement: null,
      symbologyType: Rr.DEFAULT,
      vvFlags: i,
    };
    for (const l of e) {
      const c = Mo[l.type];
      (a.isOutline = l.type === "line" && l.isOutline),
        (l.materialKey = Or(c, a)),
        (l.maxVVSize = r),
        (l.scaleInfo = n),
        (l.templateHash += o);
    }
  }
  get type() {
    return "expanded-cim";
  }
  _createHash() {
    let e = "";
    for (const s of this.layers) e += s.templateHash;
    return e;
  }
}
export {
  Zi as S,
  zo as V,
  Eo as Z,
  Ro as a,
  No as b,
  ys as c,
  Oo as d,
  eo as e,
  Jr as f,
  In as g,
  Ks as h,
  dt as i,
  Go as j,
  fi as k,
  Xo as l,
  Fo as m,
  Dt as n,
  so as o,
  Ws as p,
  Qn as r,
  Ji as t,
  Ao as u,
};
