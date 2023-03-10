import {
  ae as Z,
  af as et,
  dT as Kt,
  ag as Qt,
  dd as Yt,
  s as Zt,
  r as z,
  t as lt,
  bO as te,
  Q as ht,
  q as kt,
  d0 as ee,
  w as pt,
  f as ne,
  bm as ie,
  ar as se,
  bT as Rt,
  aF as le,
} from "./index.8fd7165c.js";
let Pt = class {
  constructor(t = null, e = null, n = null) {
    (this.minValue = t), (this.maxValue = e), (this.noDataValue = n);
  }
};
const re = 9999999e31,
  oe = 2e-7,
  ae = {
    u1: [0, 1],
    u2: [0, 3],
    u4: [0, 15],
    u8: [0, 255],
    s8: [-128, 127],
    u16: [0, 65535],
    s16: [-32768, 32767],
    u32: [0, 4294967295],
    s32: [-2147483648, 2147483647],
    f32: [-34028234663852886e22, 34028234663852886e22],
    f64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  };
function Mt(t) {
  return ae[t] ?? [-34028234663852886e22, 34028234663852886e22];
}
function be(t, e, n) {
  if (t.depthCount && t.depthCount > 1) return;
  const { pixels: s, statistics: o, pixelType: i } = t,
    l = s[0].length,
    h = t.bandMasks ?? [],
    c = t.mask ?? new Uint8Array(l).fill(255),
    p = i === "f32" || i === "f64",
    r = Mt(i);
  let u = !1;
  for (let f = 0; f < s.length; f++) {
    const a = typeof e == "number" ? e : e[f];
    if (a == null) continue;
    const m = (o == null ? void 0 : o[f].minValue) ?? r[0],
      d = (o == null ? void 0 : o[f].maxValue) ?? r[1];
    if (m > a + Number.EPSILON || d < a - Number.EPSILON) continue;
    const g = h[f] || new Uint8Array(l).fill(255),
      w = s[f],
      b = n == null ? void 0 : n.customFloatTolerance;
    if (p && b !== 0) {
      let y = b;
      y ||
        (y =
          Math.abs(a) >= re
            ? oe * Math.abs(a)
            : i === "f32"
            ? 2 ** -23
            : Number.EPSILON);
      for (let x = 0; x < w.length; x++)
        g[x] &&
          Math.abs(w[x] - a) < y &&
          ((w[x] = 0), (g[x] = 0), (c[x] = 0), (u = !0));
    } else
      for (let y = 0; y < w.length; y++)
        g[y] && w[y] === a && ((w[y] = 0), (g[y] = 0), (c[y] = 0), (u = !0));
    h[f] = g;
  }
  u && ((t.bandMasks = h), (t.mask = c)),
    u && "updateStatistics" in t && t.updateStatistics();
}
var ct;
let Q = (ct = class extends Yt {
  static createEmptyBand(t, e) {
    return new (ct.getPixelArrayConstructor(t))(e);
  }
  static getPixelArrayConstructor(t) {
    let e;
    switch (t) {
      case "u1":
      case "u2":
      case "u4":
      case "u8":
        e = Uint8Array;
        break;
      case "u16":
        e = Uint16Array;
        break;
      case "u32":
        e = Uint32Array;
        break;
      case "s8":
        e = Int8Array;
        break;
      case "s16":
        e = Int16Array;
        break;
      case "s32":
        e = Int32Array;
        break;
      case "f32":
      case "c64":
      case "c128":
      case "unknown":
        e = Float32Array;
        break;
      case "f64":
        e = Float64Array;
    }
    return e;
  }
  constructor(t) {
    super(t),
      (this.width = null),
      (this.height = null),
      (this.pixelType = "f32"),
      (this.validPixelCount = null),
      (this.mask = null),
      (this.maskIsAlpha = !1),
      (this.premultiplyAlpha = !1),
      (this.statistics = null),
      (this.depthCount = 1);
  }
  castPixelType(t) {
    if (!t) return "f32";
    let e = t.toLowerCase();
    return (
      ["u1", "u2", "u4"].includes(e)
        ? (e = "u8")
        : [
            "unknown",
            "u8",
            "s8",
            "u16",
            "s16",
            "u32",
            "s32",
            "f32",
            "f64",
          ].includes(e) || (e = "f32"),
      e
    );
  }
  getPlaneCount() {
    var t;
    return (t = this.pixels) == null ? void 0 : t.length;
  }
  addData(t) {
    if (!t.pixels || t.pixels.length !== this.width * this.height)
      throw new Zt(
        "pixelblock:invalid-or-missing-pixels",
        "add data requires valid pixels array that has same length defined by pixel block width * height"
      );
    this.pixels || (this.pixels = []),
      this.statistics || (this.statistics = []),
      this.pixels.push(t.pixels),
      this.statistics.push(t.statistics ?? new Pt());
  }
  getAsRGBA() {
    const t = new ArrayBuffer(this.width * this.height * 4);
    switch (this.pixelType) {
      case "s8":
      case "s16":
      case "u16":
      case "s32":
      case "u32":
      case "f32":
      case "f64":
        this._fillFromNon8Bit(t);
        break;
      default:
        this._fillFrom8Bit(t);
    }
    return new Uint8ClampedArray(t);
  }
  getAsRGBAFloat() {
    const t = new Float32Array(this.width * this.height * 4);
    return this._fillFrom32Bit(t), t;
  }
  updateStatistics() {
    if (!this.pixels) return;
    this.statistics = this.pixels.map((n) =>
      this._calculateBandStatistics(n, this.mask)
    );
    const t = this.mask;
    let e = 0;
    if (z(t)) for (let n = 0; n < t.length; n++) t[n] && e++;
    else e = this.width * this.height;
    this.validPixelCount = e;
  }
  clamp(t) {
    if (!t || t === "f64" || t === "f32" || !this.pixels) return;
    const [e, n] = Mt(t),
      s = this.pixels,
      o = this.width * this.height,
      i = s.length;
    let l, h, c;
    const p = [];
    for (let r = 0; r < i; r++) {
      (c = ct.createEmptyBand(t, o)), (l = s[r]);
      for (let u = 0; u < o; u++)
        (h = l[u]), (c[u] = h > n ? n : h < e ? e : h);
      p.push(c);
    }
    (this.pixels = p), (this.pixelType = t);
  }
  extractBands(t) {
    const { pixels: e, statistics: n } = this;
    if (lt(t) || t.length === 0 || !e || e.length === 0) return this;
    const s = e.length,
      o = t.some((l) => l >= e.length),
      i = s === t.length && !t.some((l, h) => l !== h);
    return o || i
      ? this
      : new ct({
          pixelType: this.pixelType,
          width: this.width,
          height: this.height,
          mask: this.mask,
          validPixelCount: this.validPixelCount,
          maskIsAlpha: this.maskIsAlpha,
          pixels: t.map((l) => e[l]),
          statistics: n && t.map((l) => n[l]),
        });
  }
  clone() {
    const t = new ct({
      width: this.width,
      height: this.height,
      pixelType: this.pixelType,
      maskIsAlpha: this.maskIsAlpha,
      validPixelCount: this.validPixelCount,
    });
    let e;
    z(this.mask) &&
      (this.mask instanceof Uint8Array
        ? (t.mask = new Uint8Array(this.mask))
        : (t.mask = this.mask.slice(0)));
    const n = ct.getPixelArrayConstructor(this.pixelType);
    if (this.pixels && this.pixels.length > 0) {
      t.pixels = [];
      const s = !!this.pixels[0].slice;
      for (e = 0; e < this.pixels.length; e++)
        t.pixels[e] = s
          ? this.pixels[e].slice(0, this.pixels[e].length)
          : new n(this.pixels[e]);
    }
    if (this.statistics)
      for (t.statistics = [], e = 0; e < this.statistics.length; e++)
        t.statistics[e] = te(this.statistics[e]);
    return (t.premultiplyAlpha = this.premultiplyAlpha), t;
  }
  _fillFrom8Bit(t) {
    const { mask: e, maskIsAlpha: n, premultiplyAlpha: s, pixels: o } = this;
    if (!t || !o || !o.length)
      return void ht
        .getLogger(this.declaredClass)
        .error(
          "getAsRGBA()",
          "Unable to convert to RGBA. The input pixel block is empty."
        );
    let i, l, h, c;
    (i = l = h = o[0]),
      o.length >= 3 ? ((l = o[1]), (h = o[2])) : o.length === 2 && (l = o[1]);
    const p = new Uint32Array(t),
      r = this.width * this.height;
    if (i.length === r)
      if (z(e) && e.length === r)
        if (n)
          for (c = 0; c < r; c++) {
            const u = e[c];
            if (u) {
              const f = u / 255;
              p[c] = s
                ? (u << 24) |
                  ((h[c] * f) << 16) |
                  ((l[c] * f) << 8) |
                  (i[c] * f)
                : (u << 24) | (h[c] << 16) | (l[c] << 8) | i[c];
            }
          }
        else
          for (c = 0; c < r; c++)
            e[c] && (p[c] = (255 << 24) | (h[c] << 16) | (l[c] << 8) | i[c]);
      else
        for (c = 0; c < r; c++)
          p[c] = (255 << 24) | (h[c] << 16) | (l[c] << 8) | i[c];
    else
      ht.getLogger(this.declaredClass).error(
        "getAsRGBA()",
        "Unable to convert to RGBA. The pixelblock is invalid."
      );
  }
  _fillFromNon8Bit(t) {
    const { pixels: e, mask: n, statistics: s } = this;
    if (!t || !e || !e.length)
      return void ht
        .getLogger(this.declaredClass)
        .error(
          "getAsRGBA()",
          "Unable to convert to RGBA. The input pixel block is empty."
        );
    const o = this.pixelType;
    let i = 1,
      l = 0,
      h = 1;
    if (s && s.length > 0) {
      for (const d of s)
        if (
          (d.minValue != null && (l = Math.min(l, d.minValue)),
          d.maxValue != null && d.minValue != null)
        ) {
          const g = d.maxValue - d.minValue;
          h = Math.max(h, g);
        }
      i = 255 / h;
    } else {
      let d = 255;
      o === "s8"
        ? ((l = -128), (d = 127))
        : o === "u16"
        ? (d = 65535)
        : o === "s16"
        ? ((l = -32768), (d = 32767))
        : o === "u32"
        ? (d = 4294967295)
        : o === "s32"
        ? ((l = -2147483648), (d = 2147483647))
        : o === "f32"
        ? ((l = -34e38), (d = 34e38))
        : o === "f64" && ((l = -Number.MAX_VALUE), (d = Number.MAX_VALUE)),
        (i = 255 / (d - l));
    }
    const c = new Uint32Array(t),
      p = this.width * this.height;
    let r, u, f, a, m;
    if (((r = u = f = e[0]), r.length !== p))
      return ht
        .getLogger(this.declaredClass)
        .error(
          "getAsRGBA()",
          "Unable to convert to RGBA. The pixelblock is invalid."
        );
    if (e.length >= 2)
      if (((u = e[1]), e.length >= 3 && (f = e[2]), z(n) && n.length === p))
        for (a = 0; a < p; a++)
          n[a] &&
            (c[a] =
              (255 << 24) |
              (((f[a] - l) * i) << 16) |
              (((u[a] - l) * i) << 8) |
              ((r[a] - l) * i));
      else
        for (a = 0; a < p; a++)
          c[a] =
            (255 << 24) |
            (((f[a] - l) * i) << 16) |
            (((u[a] - l) * i) << 8) |
            ((r[a] - l) * i);
    else if (z(n) && n.length === p)
      for (a = 0; a < p; a++)
        (m = (r[a] - l) * i),
          n[a] && (c[a] = (255 << 24) | (m << 16) | (m << 8) | m);
    else
      for (a = 0; a < p; a++)
        (m = (r[a] - l) * i), (c[a] = (255 << 24) | (m << 16) | (m << 8) | m);
  }
  _fillFrom32Bit(t) {
    const { pixels: e, mask: n } = this;
    if (!t || !e || !e.length)
      return ht
        .getLogger(this.declaredClass)
        .error(
          "getAsRGBAFloat()",
          "Unable to convert to RGBA. The input pixel block is empty."
        );
    let s, o, i, l;
    (s = o = i = e[0]),
      e.length >= 3 ? ((o = e[1]), (i = e[2])) : e.length === 2 && (o = e[1]);
    const h = this.width * this.height;
    if (s.length !== h)
      return ht
        .getLogger(this.declaredClass)
        .error(
          "getAsRGBAFloat()",
          "Unable to convert to RGBA. The pixelblock is invalid."
        );
    let c = 0;
    if (z(n) && n.length === h)
      for (l = 0; l < h; l++)
        (t[c++] = s[l]), (t[c++] = o[l]), (t[c++] = i[l]), (t[c++] = 1 & n[l]);
    else
      for (l = 0; l < h; l++)
        (t[c++] = s[l]), (t[c++] = o[l]), (t[c++] = i[l]), (t[c++] = 1);
  }
  _calculateBandStatistics(t, e) {
    let n = 1 / 0,
      s = -1 / 0;
    const o = t.length;
    let i,
      l = 0;
    if (z(e))
      for (i = 0; i < o; i++)
        e[i] && ((l = t[i]), (n = l < n ? l : n), (s = l > s ? l : s));
    else
      for (i = 0; i < o; i++)
        (l = t[i]), (n = l < n ? l : n), (s = l > s ? l : s);
    return new Pt(n, s);
  }
});
Z([et({ json: { write: !0 } })], Q.prototype, "width", void 0),
  Z([et({ json: { write: !0 } })], Q.prototype, "height", void 0),
  Z([et({ json: { write: !0 } })], Q.prototype, "pixelType", void 0),
  Z([Kt("pixelType")], Q.prototype, "castPixelType", null),
  Z([et({ json: { write: !0 } })], Q.prototype, "validPixelCount", void 0),
  Z([et({ json: { write: !0 } })], Q.prototype, "mask", void 0),
  Z([et({ json: { write: !0 } })], Q.prototype, "maskIsAlpha", void 0),
  Z([et({ json: { write: !0 } })], Q.prototype, "pixels", void 0),
  Z([et()], Q.prototype, "premultiplyAlpha", void 0),
  Z([et({ json: { write: !0 } })], Q.prototype, "statistics", void 0),
  Z([et({ json: { write: !0 } })], Q.prototype, "depthCount", void 0),
  Z([et({ json: { write: !0 } })], Q.prototype, "noDataValues", void 0),
  Z([et({ json: { write: !0 } })], Q.prototype, "bandMasks", void 0),
  (Q = ct = Z([Qt("esri.layers.support.PixelBlock")], Q));
const j = Q;
var It, Bt;
(function (t) {
  (t[(t.matchAny = 0)] = "matchAny"), (t[(t.matchAll = 1)] = "matchAll");
})(It || (It = {})),
  (function (t) {
    (t[(t.bestMatch = 0)] = "bestMatch"), (t[(t.fail = 1)] = "fail");
  })(Bt || (Bt = {}));
const ve = 6;
function J(t) {
  return (
    z(t) &&
    t.declaredClass === "esri.layers.support.PixelBlock" &&
    t.pixels &&
    t.pixels.length > 0
  );
}
function Ue(t, e) {
  if (!(e != null && e.length) || !J(t)) return t;
  const n = t.pixels.length;
  return (e && e.some((s) => s >= n)) ||
    (n === 1 && e.length === 1 && e[0] === 0)
    ? t
    : n !== e.length || e.some((s, o) => s !== o)
    ? new j({
        pixelType: t.pixelType,
        width: t.width,
        height: t.height,
        mask: t.mask,
        validPixelCount: t.validPixelCount,
        maskIsAlpha: t.maskIsAlpha,
        pixels: e.map((s) => t.pixels[s]),
        statistics: t.statistics && e.map((s) => t.statistics[s]),
      })
    : t;
}
function Te(t) {
  if (!(t != null && t.length) || t.some((r) => !J(r))) return null;
  if (t.length === 1) return z(t[0]) ? t[0].clone() : null;
  const e = t,
    { width: n, height: s, pixelType: o } = e[0];
  if (e.some((r) => r.width !== n || r.height !== s)) return null;
  const i = e.map(({ mask: r }) => r).filter((r) => r != null);
  let l = null;
  i.length &&
    ((l = new Uint8Array(n * s)),
    l.set(i[0]),
    i.length > 1 && Nt(i.slice(1), l));
  const h = [];
  e.forEach(({ pixels: r }) => h.push(...r));
  const c = e
      .map(({ statistics: r }) => r)
      .filter((r) => (r == null ? void 0 : r.length)),
    p = [];
  return (
    c.forEach((r) => p.push(...r)),
    new j({
      pixelType: o,
      width: n,
      height: s,
      mask: l,
      pixels: h,
      statistics: p.length ? p : null,
    })
  );
}
function Pe(t) {
  if (!t) return;
  const e = t.colormap;
  if (!e || e.length === 0) return;
  const n = e.sort((u, f) => u[0] - f[0]);
  let s = 0;
  n[0][0] < 0 && (s = n[0][0]);
  const o = Math.max(256, n[n.length - 1][0] - s + 1),
    i = new Uint8Array(4 * o),
    l = [];
  let h,
    c = 0,
    p = 0;
  const r = n[0].length === 5;
  if (o > 65536)
    return (
      n.forEach((u) => {
        l[u[0] - s] = r ? u.slice(1) : u.slice(1).concat([255]);
      }),
      { indexed2DColormap: l, offset: s, alphaSpecified: r }
    );
  if (t.fillUnspecified)
    for (h = n[p], c = h[0] - s; c < o; c++)
      (i[4 * c] = h[1]),
        (i[4 * c + 1] = h[2]),
        (i[4 * c + 2] = h[3]),
        (i[4 * c + 3] = r ? h[4] : 255),
        c === h[0] - s && (h = p === n.length - 1 ? h : n[++p]);
  else
    for (c = 0; c < n.length; c++)
      (h = n[c]),
        (p = 4 * (h[0] - s)),
        (i[p] = h[1]),
        (i[p + 1] = h[2]),
        (i[p + 2] = h[3]),
        (i[p + 3] = r ? h[4] : 255);
  return { indexedColormap: i, offset: s, alphaSpecified: r };
}
function Ie(t, e) {
  if (!J(t) || !e || (!e.indexedColormap && !e.indexed2DColormap)) return t;
  const n = t.clone(),
    s = n.pixels;
  let o = n.mask;
  const i = n.width * n.height;
  if (s.length !== 1) return t;
  const {
    indexedColormap: l,
    indexed2DColormap: h,
    offset: c,
    alphaSpecified: p,
  } = e;
  let r = 0;
  const u = s[0],
    f = new Uint8Array(u.length),
    a = new Uint8Array(u.length),
    m = new Uint8Array(u.length);
  let d,
    g = 0;
  if (l) {
    const w = l.length - 1;
    if (z(o))
      for (r = 0; r < i; r++)
        o[r] &&
          ((g = 4 * (u[r] - c)),
          g < c || g > w
            ? (o[r] = 0)
            : ((f[r] = l[g]),
              (a[r] = l[g + 1]),
              (m[r] = l[g + 2]),
              (o[r] = l[g + 3])));
    else {
      for (o = new Uint8Array(i), r = 0; r < i; r++)
        (g = 4 * (u[r] - c)),
          g < c || g > w
            ? (o[r] = 0)
            : ((f[r] = l[g]),
              (a[r] = l[g + 1]),
              (m[r] = l[g + 2]),
              (o[r] = l[g + 3]));
      n.mask = o;
    }
  } else if (h)
    if (z(o))
      for (r = 0; r < i; r++)
        o[r] &&
          ((d = h[u[r]]),
          (f[r] = d[0]),
          (a[r] = d[1]),
          (m[r] = d[2]),
          (o[r] = d[3]));
    else {
      for (o = new Uint8Array(i), r = 0; r < i; r++)
        (d = h[u[r]]),
          (f[r] = d[0]),
          (a[r] = d[1]),
          (m[r] = d[2]),
          (o[r] = d[3]);
      n.mask = o;
    }
  return (
    (n.pixels = [f, a, m]),
    (n.statistics = null),
    (n.pixelType = "u8"),
    (n.maskIsAlpha = p),
    n
  );
}
function Be(t, e) {
  if (!J(t)) return null;
  const { pixels: n, mask: s } = t,
    o = n.length;
  let i = e.lut;
  const { offset: l } = e;
  i && i[0].length === 1 && (i = n.map(() => i));
  const h = [],
    c = e.outputPixelType || "u8";
  for (let r = 0; r < o; r++) {
    const u = Lt(n[r], s, i[r], l || 0, c);
    h.push(u);
  }
  const p = new j({
    width: t.width,
    height: t.height,
    pixels: h,
    mask: s,
    pixelType: c,
  });
  return p.updateStatistics(), p;
}
function Lt(t, e, n, s, o) {
  const i = t.length,
    l = j.createEmptyBand(o, i);
  if (e) for (let h = 0; h < i; h++) e[h] && (l[h] = n[t[h] - s]);
  else for (let h = 0; h < i; h++) l[h] = n[t[h] - s];
  return l;
}
function Se(t, e) {
  if (!J(t)) return null;
  const n = t.clone(),
    { pixels: s } = n,
    o = n.width * n.height,
    i = e.length,
    l = Math.floor(i / 2),
    h = e[Math.floor(l)],
    c = s[0];
  let p,
    r,
    u,
    f,
    a,
    m,
    d = !1;
  const g = new Uint8Array(o),
    w = new Uint8Array(o),
    b = new Uint8Array(o);
  let y = n.mask;
  const x = e[0].mappedColor.length === 4;
  for (
    y || ((y = new Uint8Array(o)), y.fill(x ? 255 : 1), (n.mask = y)), a = 0;
    a < o;
    a++
  )
    if (y[a]) {
      for (p = c[a], d = !1, m = l, r = h, u = 0, f = i - 1; f - u > 1; ) {
        if (p === r.value) {
          d = !0;
          break;
        }
        p > r.value ? (u = m) : (f = m),
          (m = Math.floor((u + f) / 2)),
          (r = e[Math.floor(m)]);
      }
      d ||
        (p === e[u].value
          ? ((r = e[u]), (d = !0))
          : p === e[f].value
          ? ((r = e[f]), (d = !0))
          : p < e[u].value
          ? ((d = !1), (r = null))
          : p > e[u].value &&
            (p < e[f].value
              ? ((r = e[u]), (d = !0))
              : f === i - 1
              ? ((d = !1), (r = null))
              : ((r = e[f]), (d = !0)))),
        d
          ? ((g[a] = r.mappedColor[0]),
            (w[a] = r.mappedColor[1]),
            (b[a] = r.mappedColor[2]),
            (y[a] = r.mappedColor[3]))
          : (g[a] = w[a] = b[a] = y[a] = 0);
    }
  return (
    (n.pixels = [g, w, b]),
    (n.mask = y),
    (n.pixelType = "u8"),
    (n.maskIsAlpha = x),
    n
  );
}
function Ce(t, e) {
  if (!J(t)) return null;
  const { width: n, height: s } = t,
    {
      inputRanges: o,
      outputValues: i,
      outputPixelType: l,
      noDataRanges: h,
      allowUnmatched: c,
      isLastInputRangeInclusive: p,
    } = e,
    r = t.pixels[0],
    u = j.createEmptyBand(l, r.length),
    f = t.mask,
    a = new Uint8Array(n * s);
  f ? a.set(f) : a.fill(255);
  const m = t.pixelType.startsWith("f") ? 1e-6 : 0,
    d = o.map((y) => y - m);
  (d[0] = o[0]), (d[d.length - 1] = o[o.length - 1] + (p ? 1e-6 : 0));
  const g = o.length / 2,
    [w, b] = Mt(l);
  for (let y = 0; y < s; y++)
    for (let x = 0; x < n; x++) {
      const M = y * n + x;
      if (a[M]) {
        const k = r[M];
        let A = !1;
        for (let P = g - 1; P >= 0; P--)
          if (k === d[2 * P] || (k > d[2 * P] && k < d[2 * P + 1])) {
            (u[M] = i[P]), (A = !0);
            break;
          }
        A || (c ? (u[M] = k > b ? b : k < w ? w : k) : (a[M] = 0));
      }
    }
  if (h != null && h.length)
    for (let y = 0; y < s; y++)
      for (let x = 0; x < n; x++) {
        const M = y * n + x;
        if (!f || f[M]) {
          const k = r[M];
          for (let A = 0; A < g; A += 2)
            if (k >= h[A] && k <= h[A + 1]) {
              (u[M] = 0), (a[M] = 0);
              break;
            }
        }
      }
  return new j({ width: n, height: s, pixelType: l, pixels: [u], mask: a });
}
function St(t, e, n, s) {
  const o = n != null && n.length >= 2 ? new Set(n) : null,
    i = (n == null ? void 0 : n.length) === 1 ? n[0] : null,
    l = !!(e != null && e.length);
  for (let h = 0; h < t.length; h++)
    if (s[h]) {
      const c = t[h];
      if (l) {
        let p = !1;
        for (let r = 0; r < e.length; r += 2)
          if (c >= e[r] && c <= e[r + 1]) {
            p = !0;
            break;
          }
        p || (s[h] = 0);
      }
      s[h] && (c === i || (o != null && o.has(c))) && (s[h] = 0);
    }
}
function Ct(t, e) {
  const n = t[0].length;
  for (let s = 0; s < n; s++)
    if (e[s]) {
      let o = !1;
      for (let i = 0; i < t.length; i++)
        if (t[i][s]) {
          o = !0;
          break;
        }
      o || (e[s] = 0);
    }
}
function Nt(t, e) {
  const n = t[0].length;
  for (let s = 0; s < n; s++)
    if (e[s]) {
      let o = !1;
      for (let i = 0; i < t.length; i++)
        if (t[i][s] === 0) {
          o = !0;
          break;
        }
      o && (e[s] = 0);
    }
}
function Fe(t, e) {
  if (!J(t)) return null;
  const { width: n, height: s, pixels: o } = t,
    i = n * s,
    l = new Uint8Array(i);
  t.mask ? l.set(t.mask) : l.fill(255);
  const h = o.length,
    {
      includedRanges: c,
      noDataValues: p,
      outputPixelType: r,
      matchAll: u,
      lookups: f,
    } = e;
  if (f) {
    const a = [];
    for (let m = 0; m < h; m++) {
      const d = f[m],
        g = Lt(o[m], l, d.lut, d.offset || 0, "u8");
      a.push(g);
    }
    a.length === 1 ? l.set(a[0]) : u ? Ct(a, l) : Nt(a, l);
  } else if (u) {
    const a = [];
    for (let m = 0; m < h; m++) {
      const d = new Uint8Array(i);
      d.set(l),
        St(
          o[m],
          c == null ? void 0 : c.slice(2 * m, 2 * m + 2),
          p == null ? void 0 : p[m],
          d
        ),
        a.push(d);
    }
    a.length === 1 ? l.set(a[0]) : Ct(a, l);
  } else
    for (let a = 0; a < h; a++)
      St(
        o[a],
        c == null ? void 0 : c.slice(2 * a, 2 * a + 2),
        p == null ? void 0 : p[a],
        l
      );
  return new j({ width: n, height: s, pixelType: r, pixels: o, mask: l });
}
function Ve(t) {
  const {
    srcPixelType: e,
    inputRanges: n,
    outputValues: s,
    allowUnmatched: o,
    noDataRanges: i,
    isLastInputRangeInclusive: l,
    outputPixelType: h,
  } = t;
  if (e !== "u8" && e !== "s8" && e !== "u16" && e !== "s16") return null;
  const c = e.includes("16") ? 65536 : 256,
    p = e.includes("s") ? -c / 2 : 0,
    r = j.createEmptyBand(h, c),
    u = new Uint8Array(c);
  o && u.fill(255);
  const [f, a] = Mt(h);
  if (n != null && n.length && s != null && s.length) {
    const d = n.map((g) => g - 1e-6);
    (d[0] = n[0]), l && (d[d.length - 1] = n[n.length - 1]);
    for (let g = 0; g < d.length; g++) {
      const w = s[g] > a ? a : s[g] < f ? f : s[g],
        b = Math.ceil(d[2 * g] - p),
        y = Math.floor(d[2 * g + 1] - p);
      for (let x = b; x <= y; x++) (r[x] = w), (u[x] = 255);
    }
  }
  if (i != null && i.length)
    for (let m = 0; m < i.length; m++) {
      const d = Math.ceil(i[2 * m] - p),
        g = Math.floor(i[2 * m + 1] - p);
      for (let w = d; w <= g; w++) u[w] = 0;
    }
  return { lut: r, offset: p, mask: u };
}
function _e(t, e, n) {
  if (t !== "u8" && t !== "s8" && t !== "u16" && t !== "s16") return null;
  const s = t.includes("16") ? 65536 : 256,
    o = t.includes("s") ? -s / 2 : 0,
    i = new Uint8Array(s);
  if (e)
    for (let l = 0; l < e.length; l++) {
      const h = Math.ceil(e[2 * l] - o),
        c = Math.floor(e[2 * l + 1] - o);
      for (let p = h; p <= c; p++) i[p] = 255;
    }
  else i.fill(255);
  if (n) for (let l = 0; l < n.length; l++) i[n[l] - o] = 0;
  return { lut: i, offset: o };
}
function De(t, e) {
  if (!t || t.length === 0) return null;
  const n = t.find((m) => m.pixelBlock);
  if (!n || lt(n.pixelBlock)) return null;
  const s = (n.extent.xmax - n.extent.xmin) / n.pixelBlock.width,
    o = (n.extent.ymax - n.extent.ymin) / n.pixelBlock.height,
    i = 0.01 * Math.min(s, o),
    l = t.sort((m, d) =>
      Math.abs(m.extent.ymax - d.extent.ymax) > i
        ? d.extent.ymax - m.extent.ymax
        : Math.abs(m.extent.xmin - d.extent.xmin) > i
        ? m.extent.xmin - d.extent.xmin
        : 0
    ),
    h = Math.min.apply(
      null,
      l.map((m) => m.extent.xmin)
    ),
    c = Math.min.apply(
      null,
      l.map((m) => m.extent.ymin)
    ),
    p = Math.max.apply(
      null,
      l.map((m) => m.extent.xmax)
    ),
    r = Math.max.apply(
      null,
      l.map((m) => m.extent.ymax)
    ),
    u = { x: Math.round((e.xmin - h) / s), y: Math.round((r - e.ymax) / o) },
    f = { width: Math.round((p - h) / s), height: Math.round((r - c) / o) },
    a = {
      width: Math.round((e.xmax - e.xmin) / s),
      height: Math.round((e.ymax - e.ymin) / o),
    };
  return Math.round(f.width / n.pixelBlock.width) *
    Math.round(f.height / n.pixelBlock.height) !==
    l.length ||
    u.x < 0 ||
    u.y < 0 ||
    f.width < a.width ||
    f.height < a.height
    ? null
    : {
        extent: e,
        pixelBlock: he(
          l.map((m) => m.pixelBlock),
          f,
          { clipOffset: u, clipSize: a }
        ),
      };
}
function At(t, e, n, s, o, i) {
  const { width: l, height: h } = n.block,
    { x: c, y: p } = n.offset,
    { width: r, height: u } = n.mosaic,
    f = (function (d, g, w, b, y, x, M, k) {
      return {
        xmin: y <= w * d ? 0 : y < w * d + d ? y - w * d : d,
        ymin: x <= b * g ? 0 : x < b * g + g ? x - b * g : g,
        xmax: y + M <= w * d ? 0 : y + M < w * d + d ? y + M - w * d : d,
        ymax: x + k <= b * g ? 0 : x + k < b * g + g ? x + k - b * g : g,
      };
    })(l, h, s, o, c, p, r, u);
  let a = 0,
    m = 0;
  if (i) {
    const d = i.hasGCSSShiftTransform ? 360 : i.halfWorldWidth ?? 0,
      g = l * i.resolutionX,
      w = i.startX + s * g;
    w < d && w + g > d
      ? (m = i.rightPadding)
      : w >= d && ((a = i.leftMargin - i.rightPadding), (m = 0));
  }
  if (((f.xmax -= m), typeof e != "number"))
    for (let d = f.ymin; d < f.ymax; d++) {
      const g = (o * h + d - p) * r + (s * l - c) + a,
        w = d * l;
      for (let b = f.xmin; b < f.xmax; b++) t[g + b] = e[w + b];
    }
  else
    for (let d = f.ymin; d < f.ymax; d++) {
      const g = (o * h + d - p) * r + (s * l - c) + a;
      for (let w = f.xmin; w < f.xmax; w++) t[g + w] = e;
    }
}
function he(t, e, n = {}) {
  const { clipOffset: s, clipSize: o, alignmentInfo: i, blockWidths: l } = n;
  if (l)
    return (function (A, P, v) {
      const U = A.find((S) => z(S));
      if (lt(U)) return null;
      const C = A.some((S) => !z(S) || !!S.mask),
        { width: _, height: R } = P,
        D = C ? new Uint8Array(_ * R) : null,
        { blockWidths: B } = v,
        T = [],
        V = U.getPlaneCount(),
        F = j.getPixelArrayConstructor(U.pixelType);
      if (C)
        for (let S = 0, L = 0; S < A.length; L += B[S], S++) {
          const N = A[S];
          if (!J(N)) continue;
          const Y = kt(N.mask);
          for (let E = 0; E < R; E++)
            for (let O = 0; O < B[S]; O++)
              D[E * _ + O + L] = Y == null ? 255 : Y[E * N.width + O];
        }
      for (let S = 0; S < V; S++) {
        const L = new F(_ * R);
        for (let N = 0, Y = 0; N < A.length; Y += B[N], N++) {
          const E = A[N];
          if (!J(E)) continue;
          const O = E.pixels[S];
          if (O != null)
            for (let tt = 0; tt < R; tt++)
              for (let nt = 0; nt < B[N]; nt++)
                L[tt * _ + nt + Y] = O[tt * E.width + nt];
        }
        T.push(L);
      }
      const I = new j({
        width: _,
        height: R,
        mask: D,
        pixels: T,
        pixelType: U.pixelType,
      });
      return I.updateStatistics(), I;
    })(t, e, { blockWidths: l });
  const h = t.find((A) => J(A));
  if (lt(h)) return null;
  const c = o ? o.width : e.width,
    p = o ? o.height : e.height,
    r = h.width,
    u = h.height,
    f = e.width / r,
    a = e.height / u,
    m = {
      offset: s || { x: 0, y: 0 },
      mosaic: o || e,
      block: { width: r, height: u },
    },
    d = h.pixelType,
    g = j.getPixelArrayConstructor(d),
    w = h.pixels.length,
    b = [];
  let y, x, M;
  for (let A = 0; A < w; A++) {
    x = new g(c * p);
    for (let P = 0; P < a; P++)
      for (let v = 0; v < f; v++) {
        const U = t[P * f + v];
        J(U) && ((y = U.pixels[A]), At(x, y, m, v, P, i));
      }
    b.push(x);
  }
  if (t.some((A) => lt(A) || (z(A.mask) && A.mask.length > 0))) {
    M = new Uint8Array(c * p);
    for (let A = 0; A < a; A++)
      for (let P = 0; P < f; P++) {
        const v = t[A * f + P],
          U = z(v) ? v.mask : null;
        z(U) ? At(M, U, m, P, A, i) : At(M, v ? 1 : 0, m, P, A, i);
      }
  }
  const k = new j({ width: c, height: p, pixels: b, pixelType: d, mask: M });
  return k.updateStatistics(), k;
}
function Re(t, e, n) {
  if (!J(t)) return null;
  const { width: s, height: o } = t,
    i = e.x,
    l = e.y,
    h = n.width + i,
    c = n.height + l;
  if (
    i < 0 ||
    l < 0 ||
    h > s ||
    c > o ||
    (i === 0 && l === 0 && h === s && c === o)
  )
    return t;
  t.mask || (t.mask = new Uint8Array(s * o));
  const p = t.mask;
  for (let r = 0; r < o; r++) {
    const u = r * s;
    for (let f = 0; f < s; f++)
      p[u + f] = r < l || r >= c || f < i || f >= h ? 0 : 1;
  }
  return t.updateStatistics(), t;
}
function Ft(t) {
  if (t.size === 0) return 0;
  let e = 0,
    n = -1,
    s = 0;
  const o = t.keys();
  let i = o.next();
  for (; !i.done; )
    (s = t.get(i.value)), s > e && ((n = i.value), (e = s)), (i = o.next());
  return n;
}
function xt(t, e, n) {
  if (n === 0) return;
  const s = t.get(e);
  s === 1 ? t.delete(e) : t.set(e, s - 1);
}
function dt(t, e, n) {
  n !== 0 && t.set(e, t.has(e) ? t.get(e) + 1 : 1);
}
function ce(t, e, n) {
  let { x: s, y: o } = e;
  const { width: i, height: l } = n;
  if (s === 0 && o === 0 && l === t.height && i === t.width) return t;
  const { width: h, height: c } = t,
    p = Math.max(0, o),
    r = Math.max(0, s),
    u = Math.min(s + i, h),
    f = Math.min(o + l, c);
  if (u < 0 || f < 0 || !J(t)) return null;
  (s = Math.max(0, -s)), (o = Math.max(0, -o));
  const { pixels: a } = t,
    m = i * l,
    d = a.length,
    g = [];
  for (let x = 0; x < d; x++) {
    const M = a[x],
      k = j.createEmptyBand(t.pixelType, m);
    for (let A = p; A < f; A++) {
      const P = A * h;
      let v = (A + o - p) * i + s;
      for (let U = r; U < u; U++) k[v++] = M[P + U];
    }
    g.push(k);
  }
  const w = new Uint8Array(m),
    b = kt(t.mask);
  for (let x = p; x < f; x++) {
    const M = x * h;
    let k = (x + o - p) * i + s;
    for (let A = r; A < u; A++) w[k++] = b ? b[M + A] : 1;
  }
  const y = new j({
    width: n.width,
    height: n.height,
    pixelType: t.pixelType,
    pixels: g,
    mask: w,
  });
  return y.updateStatistics(), y;
}
function fe(t, e = !0) {
  if (!J(t)) return null;
  const { pixels: n, width: s, height: o, mask: i, pixelType: l } = t,
    h = [],
    c = Math.round(s / 2),
    p = Math.round(o / 2),
    r = o - 1,
    u = s - 1;
  for (let a = 0; a < n.length; a++) {
    const m = n[a],
      d = j.createEmptyBand(l, c * p);
    let g = 0;
    for (let w = 0; w < o; w += 2)
      for (let b = 0; b < s; b += 2) {
        const y = m[w * s + b];
        if (e) {
          const x = b === u ? y : m[w * s + b + 1],
            M = w === r ? y : m[w * s + b + s],
            k = b === u ? M : w === r ? x : m[w * s + b + s + 1];
          d[g++] = (y + x + M + k) / 4;
        } else d[g++] = y;
      }
    h.push(d);
  }
  let f = null;
  if (z(i)) {
    f = new Uint8Array(c * p);
    let a = 0;
    for (let m = 0; m < o; m += 2)
      for (let d = 0; d < s; d += 2) {
        const g = i[m * s + d];
        if (e) {
          const w = d === u ? g : i[m * s + d + 1],
            b = m === r ? g : i[m * s + d + s],
            y = d === u ? b : m === r ? w : i[m * s + d + s + 1];
          f[a++] = g * w * b * y ? 1 : 0;
        } else f[a++] = g;
      }
  }
  return new j({ width: c, height: p, pixelType: l, pixels: h, mask: f });
}
function Le(t, e, n) {
  if (!J(t)) return null;
  const { width: s, height: o } = e;
  let { width: i, height: l } = t;
  const h = new Map(),
    c = { x: 0, y: 0 },
    p = n == null ? 1 : 1 + n;
  let r = t;
  for (let u = 0; u < p; u++) {
    const f = Math.ceil(i / s),
      a = Math.ceil(l / o);
    for (let m = 0; m < a; m++) {
      c.y = m * o;
      for (let d = 0; d < f; d++) {
        c.x = d * s;
        const g = ce(r, c, e);
        h.set(`${u}/${m}/${d}`, g);
      }
    }
    u < p - 1 && (r = fe(r)), (i = Math.round(i / 2)), (l = Math.round(l / 2));
  }
  return h;
}
function Et(t, e, n, s, o = 0) {
  const { width: i, height: l } = t,
    { width: h, height: c } = e,
    p = s.cols,
    r = s.rows,
    u = Math.ceil(h / p - 0.1 / p),
    f = Math.ceil(c / r - 0.1 / r);
  let a, m, d, g, w, b, y;
  const x = u * p,
    M = x * f * r,
    k = new Float32Array(M),
    A = new Float32Array(M),
    P = new Uint32Array(M),
    v = new Uint32Array(M);
  let U,
    C,
    _ = 0;
  for (let R = 0; R < f; R++)
    for (let D = 0; D < u; D++) {
      (a = 12 * (R * u + D)),
        (m = n[a]),
        (d = n[a + 1]),
        (g = n[a + 2]),
        (w = n[a + 3]),
        (b = n[a + 4]),
        (y = n[a + 5]);
      for (let B = 0; B < r; B++) {
        (_ = (R * r + B) * x + D * p), (C = (B + 0.5) / r);
        for (let T = 0; T < B; T++)
          (U = (T + 0.5) / p),
            (k[_ + T] = (m * U + d * C + g) * i + o),
            (A[_ + T] = (w * U + b * C + y) * l + o),
            (P[_ + T] = Math.floor(k[_ + T])),
            (v[_ + T] = Math.floor(A[_ + T]));
      }
      (a += 6),
        (m = n[a]),
        (d = n[a + 1]),
        (g = n[a + 2]),
        (w = n[a + 3]),
        (b = n[a + 4]),
        (y = n[a + 5]);
      for (let B = 0; B < r; B++) {
        (_ = (R * r + B) * x + D * p), (C = (B + 0.5) / r);
        for (let T = B; T < p; T++)
          (U = (T + 0.5) / p),
            (k[_ + T] = (m * U + d * C + g) * i + o),
            (A[_ + T] = (w * U + b * C + y) * l + o),
            (P[_ + T] = Math.floor(k[_ + T])),
            (v[_ + T] = Math.floor(A[_ + T]));
      }
    }
  return {
    offsets_x: k,
    offsets_y: A,
    offsets_xi: P,
    offsets_yi: v,
    gridWidth: x,
  };
}
function Ne(t, e) {
  const { coefficients: n, spacing: s } = e,
    {
      offsets_x: o,
      offsets_y: i,
      gridWidth: l,
    } = Et(t, t, n, { rows: s[0], cols: s[1] }),
    { width: h, height: c } = t,
    p = new Float32Array(h * c),
    r = 180 / Math.PI;
  for (let u = 0; u < c; u++)
    for (let f = 0; f < h; f++) {
      const a = u * l + f,
        m = u === 0 ? a : a - l,
        d = u === c - 1 ? a : a + l,
        g = o[m] - o[d],
        w = i[d] - i[m];
      if (isNaN(g) || isNaN(w)) p[u * h + f] = 90;
      else {
        let b = Math.atan2(w, g) * r;
        (b = (360 + b) % 360), (p[u * h + f] = b);
      }
    }
  return p;
}
function Ee(t, e, n, s, o = "nearest") {
  if (!J(t)) return null;
  o === "majority" &&
    (t = (function (v) {
      if (!J(v)) return null;
      const U = v.clone(),
        { width: C, height: _, pixels: R } = v,
        D = R[0],
        B = U.pixels[0],
        T = kt(v.mask);
      for (let V = 2; V < _ - 1; V++) {
        const F = new Map();
        for (let S = V - 2; S < V + 2; S++)
          for (let L = 0; L < 4; L++) {
            const N = S * C + L;
            dt(F, D[N], T ? T[N] : 1);
          }
        (B[V * C] = Ft(F)), (B[V * C + 1] = B[V * C + 2] = B[V * C]);
        let I = 3;
        for (; I < C - 1; I++) {
          let S = (V - 2) * C + I + 1;
          dt(F, D[S], T ? T[S] : 1),
            (S = (V - 1) * C + I + 1),
            dt(F, D[S], T ? T[S] : 1),
            (S = V * C + I + 1),
            dt(F, D[S], T ? T[S] : 1),
            (S = (V + 1) * C + I + 1),
            dt(F, D[S], T ? T[S] : 1),
            (S = (V - 2) * C + I - 3),
            xt(F, D[S], T ? T[S] : 1),
            (S = (V - 1) * C + I - 3),
            xt(F, D[S], T ? T[S] : 1),
            (S = V * C + I - 3),
            xt(F, D[S], T ? T[S] : 1),
            (S = (V + 1) * C + I - 3),
            xt(F, D[S], T ? T[S] : 1),
            (B[V * C + I] = Ft(F));
        }
        B[V * C + I + 1] = B[V * C + I];
      }
      for (let V = 0; V < C; V++)
        (B[V] = B[C + V] = B[2 * C + V]),
          (B[(_ - 1) * C + V] = B[(_ - 2) * C + V]);
      return U.updateStatistics(), U;
    })(t));
  const { pixels: i, mask: l, pixelType: h } = t,
    c = t.width,
    p = t.height,
    r = j.getPixelArrayConstructor(h),
    u = i.length,
    { width: f, height: a } = e;
  let m = !1;
  for (let v = 0; v < n.length; v += 3)
    n[v] === -1 && n[v + 1] === -1 && n[v + 2] === -1 && (m = !0);
  const {
    offsets_x: d,
    offsets_y: g,
    offsets_xi: w,
    offsets_yi: b,
    gridWidth: y,
  } = Et({ width: c, height: p }, e, n, s, o === "majority" ? 0.5 : 0);
  let x;
  const M = (v, U, C) => {
      const _ =
        v instanceof Float32Array || v instanceof Float64Array ? 0 : 0.5;
      for (let R = 0; R < a; R++) {
        x = R * y;
        for (let D = 0; D < f; D++) {
          if (d[x] < 0 || g[x] < 0) v[R * f + D] = 0;
          else if (C) v[R * f + D] = U[w[x] + b[x] * c];
          else {
            const B = Math.floor(d[x]),
              T = Math.floor(g[x]),
              V = Math.ceil(d[x]),
              F = Math.ceil(g[x]),
              I = d[x] - B,
              S = g[x] - T;
            if (
              !l ||
              (l[B + T * c] && l[B + T * c] && l[B + F * c] && l[V + F * c])
            ) {
              const L = (1 - I) * U[B + T * c] + I * U[V + T * c],
                N = (1 - I) * U[B + F * c] + I * U[V + F * c];
              v[R * f + D] = (1 - S) * L + S * N + _;
            } else v[R * f + D] = U[w[x] + b[x] * c];
          }
          x++;
        }
      }
    },
    k = [];
  let A;
  for (let v = 0; v < u; v++)
    (A = new r(f * a)),
      M(A, i[v], o === "nearest" || o === "majority"),
      k.push(A);
  const P = new j({ width: f, height: a, pixelType: h, pixels: k });
  if (z(l)) (P.mask = new Uint8Array(f * a)), M(P.mask, l, !0);
  else if (m) {
    P.mask = new Uint8Array(f * a);
    for (let v = 0; v < f * a; v++) P.mask[v] = d[v] < 0 || g[v] < 0 ? 0 : 1;
  }
  return P.updateStatistics(), P;
}
const ft = new Map();
ft.set("meter-per-second", 1),
  ft.set("kilometer-per-hour", 0.277778),
  ft.set("knots", 0.514444),
  ft.set("feet-per-second", 0.3048),
  ft.set("mile-per-hour", 0.44704);
const vt = 180 / Math.PI,
  Ut = 5,
  yt = new ee({
    esriMetersPerSecond: "meter-per-second",
    esriKilometersPerHour: "kilometer-per-hour",
    esriKnots: "knots",
    esriFeetPerSecond: "feet-per-second",
    esriMilesPerHour: "mile-per-hour",
  });
function Tt(t, e) {
  return ft.get(t) / ft.get(e) || 1;
}
function jt(t) {
  return (450 - t) % 360;
}
function Ot(t, e = "geographic") {
  const [n, s] = t,
    o = Math.sqrt(n * n + s * s);
  let i = Math.atan2(s, n) * vt;
  return (i = (360 + i) % 360), e === "geographic" && (i = jt(i)), [o, i];
}
function Gt(t, e = "geographic") {
  let n = t[1];
  e === "geographic" && (n = jt(n)), (n %= 360);
  const s = t[0];
  return [s * Math.cos(n / vt), s * Math.sin(n / vt)];
}
function je(t, e, n, s = "geographic") {
  if (!J(t) || lt(n)) return t;
  const o = e === "vector-magdir" ? t.clone() : kt(Vt(t, e)),
    i = o.pixels[1];
  for (let l = 0; l < i.length; l++)
    i[l] =
      s === "geographic"
        ? (i[l] + n[l] + 270) % 360
        : (i[l] + 360 - n[l]) % 360;
  return e === "vector-magdir" ? o : Vt(o, "vector-magdir");
}
function Vt(t, e, n = "geographic", s = 1) {
  if (!J(t)) return t;
  const { pixels: o, width: i, height: l } = t,
    h = i * l,
    c = o[0],
    p = o[1],
    r = t.pixelType.startsWith("f") ? t.pixelType : "f32",
    u = j.createEmptyBand(r, h),
    f = j.createEmptyBand(r, h);
  let a = 0;
  for (let d = 0; d < l; d++)
    for (let g = 0; g < i; g++)
      e === "vector-uv"
        ? (([u[a], f[a]] = Ot([c[a], p[a]], n)), (u[a] *= s))
        : (([u[a], f[a]] = Gt([c[a], p[a]], n)), (u[a] *= s), (f[a] *= s)),
        a++;
  const m = new j({
    pixelType: r,
    width: t.width,
    height: t.height,
    mask: t.mask,
    validPixelCount: t.validPixelCount,
    maskIsAlpha: t.maskIsAlpha,
    pixels: [u, f],
  });
  return m.updateStatistics(), m;
}
function Oe(t, e, n = 1) {
  if (n === 1 || !J(t)) return t;
  const s = t.clone(),
    { pixels: o, width: i, height: l } = s,
    h = o[0],
    c = o[1];
  let p = 0;
  for (let r = 0; r < l; r++)
    for (let u = 0; u < i; u++)
      e === "vector-uv" ? ((h[p] *= n), (c[p] *= n)) : (h[p] *= n), p++;
  return s.updateStatistics(), s;
}
function Ge(t, e, n, s, o) {
  if (lt(o) || !o.spatialReference.equals(t.spatialReference))
    return {
      extent: t,
      width: Math.round(e / s),
      height: Math.round(n / s),
      resolution: t.width / e,
    };
  const i = o.xmin,
    l = o.ymax,
    h = ((t.xmax - t.xmin) / e) * s,
    c = ((t.ymax - t.ymin) / n) * s,
    p = (h + c) / 2;
  return (
    (t.xmin = i + Math.floor((t.xmin - i) / h) * h),
    (t.xmax = i + Math.ceil((t.xmax - i) / h) * h),
    (t.ymin = l + Math.floor((t.ymin - l) / c) * c),
    (t.ymax = l + Math.ceil((t.ymax - l) / c) * c),
    {
      extent: t,
      width: Math.round(t.width / h),
      height: Math.round(t.height / c),
      resolution: p,
    }
  );
}
const ue = qt(0, 0, 0);
function qt(t = 0, e = 0, n = Math.PI, s = !0) {
  s && (n = (2 * Math.PI - n) % (2 * Math.PI));
  const o = s ? -1 : 1,
    i = 13 * o,
    l = -7 * o,
    h = -2 * o,
    c = -16 * o,
    p = 21.75,
    [r, u] = $(0, e + i, n, p),
    [f, a] = $(t - 5.5, e + l, n, p),
    [m, d] = $(t + 5.5, e + l, n, p),
    [g, w] = $(t - 1.5, e + h, n, p),
    [b, y] = $(t + 1.5, e + h, n, p),
    [x, M] = $(t - 1.5, e + c, n, p),
    [k, A] = $(t + 1.5, e + c, n, p);
  return [r, u, f, a, g, w, b, y, m, d, x, M, k, A];
}
function pe(t = 0, e = Math.PI, n = !0) {
  n && (e = (2 * Math.PI - e) % (2 * Math.PI));
  const s = n ? -1 : 1,
    o = 5 * s,
    i = 20 * s,
    l = 25 * s,
    h = 45,
    c = 2 * s,
    p = n ? 1 : -1,
    r = 5 * p;
  let [u, f] = [0 + r, 0 - i],
    [a, m] = [u + 2 * p, f],
    [d, g] = [a - 0 * p, m + c],
    [w, b] = [0 - r, 0 - l],
    [y, x] = [w + 0 * p, b - c],
    M = Math.ceil(t / Ut),
    k = Math.floor(M / 10);
  M -= 8 * k;
  const A = [],
    P = [];
  for (let F = 0; F < M / 2; F++, k--) {
    k <= 0 &&
      M % 2 == 1 &&
      F === (M - 1) / 2 &&
      ((w = 0), (y = w + 0 * p), (b = (b + f) / 2), (x = b - c));
    const [I, S] = $(w, b, e, h);
    if (k > 0) {
      const [L, N] = $(a, b, e, h),
        [Y, E] = $(u, f, e, h);
      A.push(L), A.push(N), A.push(I), A.push(S), A.push(Y), A.push(E);
    } else {
      const [L, N] = $(a, m, e, h),
        [Y, E] = $(d, g, e, h),
        [O, tt] = $(y, x, e, h);
      P.push(I),
        P.push(S),
        P.push(O),
        P.push(tt),
        P.push(Y),
        P.push(E),
        P.push(L),
        P.push(N);
    }
    (b += o), (f += o), (m += o), (g += o), (x += o);
  }
  const [v, U] = $(0 + r, 0 + i, e, h),
    C = 7 * p,
    [_, R] = $(0 + C, 0 + i, e, h),
    [D, B] = $(0 + r, 0 - l, e, h),
    [T, V] = $(0 + C, 0 - l, e, h);
  return { pennants: A, barbs: P, shaft: [v, U, _, R, D, B, T, V] };
}
function $(t, e, n, s = 1) {
  const o = Math.sqrt(t * t + e * e) / s,
    i = (2 * Math.PI + Math.atan2(e, t)) % (2 * Math.PI);
  return [o, (2 * Math.PI + i - n) % (2 * Math.PI)];
}
const wt = [0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63],
  de = [0, 0.5, 1, 1.5, 2],
  me = [0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4];
function at(t, e, n, s) {
  const o = Tt(s || "knots", n);
  let i;
  for (i = 1; i < e.length; i++)
    if (i === e.length - 1) {
      if (t < e[i] * o) break;
    } else if (t <= e[i] * o) break;
  return Math.min(i - 1, e.length - 2);
}
function ge(t, e, n, s, o) {
  let i = 0;
  switch (e) {
    case "beaufort_kn":
      i = at(t, wt, "knots", n);
      break;
    case "beaufort_km":
      i = at(t, wt, "kilometer-per-hour", n);
      break;
    case "beaufort_ft":
      i = at(t, wt, "feet-per-second", n);
      break;
    case "beaufort_m":
      i = at(t, wt, "meter-per-second", n);
      break;
    case "classified_arrow":
      i = at(t, o ?? [], s, n);
      break;
    case "ocean_current_m":
      i = at(t, de, "meter-per-second", n);
      break;
    case "ocean_current_kn":
      i = at(t, me, "knots", n);
  }
  return i;
}
const bt = [];
function xe(t, e) {
  let n = 0,
    s = 0;
  const { width: o, height: i, mask: l } = t,
    h = t.pixels[0],
    c = [],
    p = [],
    r = Tt(yt.fromJSON(e.inputUnit), "knots"),
    u = e.style === "wind_speed" ? Ut : Number.MAX_VALUE;
  for (let f = 0; f < i; f++)
    for (let a = 0; a < o; a++) {
      const m = h[f * o + a] * r;
      if ((!l || l[f * o + a]) && m < u) {
        for (let g = 0; g < 4; g++)
          (c[n++] = (a + 0.5) / o),
            (c[n++] = (f + 0.5) / i),
            (c[n++] = g < 2 ? -0.5 : 0.5),
            (c[n++] = g % 2 == 0 ? -0.5 : 0.5),
            (c[n++] = 0),
            (c[n++] = m);
        const d = 4 * (n / 24 - 1);
        (p[s++] = d),
          (p[s++] = d + 1),
          (p[s++] = d + 2),
          (p[s++] = d + 1),
          (p[s++] = d + 2),
          (p[s++] = d + 3);
      }
    }
  return { vertexData: new Float32Array(c), indexData: new Uint32Array(p) };
}
function qe(t, e) {
  return e.style === "simple_scalar"
    ? xe(t, e)
    : e.style === "wind_speed"
    ? (function (n, s) {
        if (bt.length === 0)
          for (let m = 0; m < 30; m++)
            bt.push(pe(5 * m, 0, !s.invertDirection));
        const o = Tt(yt.fromJSON(s.inputUnit), "knots"),
          { width: i, height: l, mask: h } = n,
          c = n.pixels[0],
          p = n.pixels[1],
          r = [],
          u = [];
        let f = 0,
          a = 0;
        for (let m = 0; m < l; m++)
          for (let d = 0; d < i; d++) {
            const g = m * i + d,
              w = c[g] * o;
            if ((!h || h[m * i + d]) && w >= Ut) {
              const b = (((p[g] + 360) % 360) / 180) * Math.PI,
                {
                  pennants: y,
                  barbs: x,
                  shaft: M,
                } = bt[Math.min(Math.floor(w / 5), 29)];
              if (y.length + x.length === 0) continue;
              let k = r.length / 6;
              const A = (d + 0.5) / i,
                P = (m + 0.5) / l;
              for (let v = 0; v < y.length; v += 2)
                (r[f++] = A),
                  (r[f++] = P),
                  (r[f++] = y[v]),
                  (r[f++] = y[v + 1] + b),
                  (r[f++] = 0),
                  (r[f++] = w);
              for (let v = 0; v < x.length; v += 2)
                (r[f++] = A),
                  (r[f++] = P),
                  (r[f++] = x[v]),
                  (r[f++] = x[v + 1] + b),
                  (r[f++] = 0),
                  (r[f++] = w);
              for (let v = 0; v < M.length; v += 2)
                (r[f++] = A),
                  (r[f++] = P),
                  (r[f++] = M[v]),
                  (r[f++] = M[v + 1] + b),
                  (r[f++] = 0),
                  (r[f++] = w);
              for (let v = 0; v < y.length / 6; v++)
                (u[a++] = k), (u[a++] = k + 1), (u[a++] = k + 2), (k += 3);
              for (let v = 0; v < x.length / 8; v++)
                (u[a++] = k),
                  (u[a++] = k + 1),
                  (u[a++] = k + 2),
                  (u[a++] = k + 1),
                  (u[a++] = k + 2),
                  (u[a++] = k + 3),
                  (k += 4);
              (u[a++] = k + 0),
                (u[a++] = k + 1),
                (u[a++] = k + 2),
                (u[a++] = k + 1),
                (u[a++] = k + 3),
                (u[a++] = k + 2),
                (k += 4);
            }
          }
        return {
          vertexData: new Float32Array(r),
          indexData: new Uint32Array(u),
        };
      })(t, e)
    : (function (n, s) {
        const { style: o, inputUnit: i, outputUnit: l, breakValues: h } = s,
          c = yt.fromJSON(i),
          p = yt.fromJSON(l);
        let r = 0,
          u = 0;
        const { width: f, height: a, mask: m } = n,
          d = n.pixels[0],
          g = n.pixels[1],
          w = z(m) ? m.filter((M) => M > 0).length : f * a,
          b = new Float32Array(42 * w),
          y = new Uint32Array(15 * w),
          x = s.invertDirection ? qt(0, 0, 0, !1) : ue;
        for (let M = 0; M < a; M++)
          for (let k = 0; k < f; k++) {
            const A = M * f + k;
            if (!m || m[M * f + k]) {
              const P = (((g[A] + 360) % 360) / 180) * Math.PI,
                v = ge(d[A], o, c, p, h);
              for (let C = 0; C < x.length; C += 2)
                (b[r++] = (k + 0.5) / f),
                  (b[r++] = (M + 0.5) / a),
                  (b[r++] = x[C]),
                  (b[r++] = x[C + 1] + P),
                  (b[r++] = v),
                  (b[r++] = d[A]);
              const U = 7 * (r / 42 - 1);
              (y[u++] = U),
                (y[u++] = U + 1),
                (y[u++] = U + 2),
                (y[u++] = U + 0),
                (y[u++] = U + 4),
                (y[u++] = U + 3),
                (y[u++] = U + 0),
                (y[u++] = U + 2),
                (y[u++] = U + 3),
                (y[u++] = U + 2),
                (y[u++] = U + 5),
                (y[u++] = U + 3),
                (y[u++] = U + 5),
                (y[u++] = U + 6),
                (y[u++] = U + 3);
            }
          }
        return { vertexData: b, indexData: y };
      })(t, e);
}
function We(t, e, n, s = [0, 0], o = 0.5) {
  const { width: i, height: l, mask: h } = t,
    [c, p] = t.pixels,
    [r, u] = s,
    f = Math.round((i - r) / n),
    a = Math.round((l - u) / n),
    m = f * a,
    d = new Float32Array(m),
    g = new Float32Array(m),
    w = new Uint8Array(m),
    b = e === "vector-uv";
  for (let x = 0; x < a; x++)
    for (let M = 0; M < f; M++) {
      let k = 0;
      const A = x * f + M,
        P = Math.max(0, x * n + u),
        v = Math.max(0, M * n + r),
        U = Math.min(l, P + n),
        C = Math.min(i, v + n);
      for (let _ = P; _ < U; _++)
        for (let R = v; R < C; R++) {
          const D = _ * i + R;
          if (!h || h[D]) {
            k++;
            const B = b ? [c[D], p[D]] : [c[D], (360 + p[D]) % 360],
              [T, V] = b ? B : Gt(B);
            (d[A] += T), (g[A] += V);
          }
        }
      if (k >= (U - P) * (C - v) * (1 - o)) {
        w[A] = 1;
        const [_, R] = Ot([d[A] / k, g[A] / k]);
        (d[A] = _), (g[A] = R);
      } else (w[A] = 0), (d[A] = 0), (g[A] = 0);
    }
  const y = new j({ width: f, height: a, pixels: [d, g], mask: w });
  return y.updateStatistics(), y;
}
const st = ht.getLogger("esri.views.2d.engine.flow.dataUtils"),
  we = 10;
async function Xe(t, e, n, s) {
  const o = performance.now(),
    i = ye(e, n),
    l = performance.now(),
    h = Me(e, i, n.width, n.height),
    c = performance.now(),
    p = (function (a, m) {
      const d = new Rt(),
        g = a.reduce((M, k) => M + k.length, 0),
        w = new Float32Array(4 * g),
        b = new Array(a.length);
      let y = 0,
        x = 0;
      for (const M of a) {
        const k = y;
        for (const A of M)
          (w[4 * y + 0] = A.x),
            (w[4 * y + 1] = A.y),
            (w[4 * y + 2] = A.t),
            (w[4 * y + 3] = A.speed),
            y++;
        b[x++] = {
          startVertex: k,
          numberOfVertices: M.length,
          totalTime: M[M.length - 1].t,
          timeSeed: m ? d.getFloat() : 0,
        };
      }
      return { lineVertices: w, lineDescriptors: b };
    })(h, !0),
    r = performance.now(),
    u =
      t === "Streamlines"
        ? (function (a, m) {
            const { lineVertices: g, lineDescriptors: w } = a;
            let b = 0,
              y = 0;
            for (const U of w)
              (b += 2 * U.numberOfVertices),
                (y += 6 * (U.numberOfVertices - 1));
            const x = new Float32Array(b * 9),
              M = new Uint32Array(y);
            let k = 0,
              A = 0;
            function P() {
              (M[A++] = k - 2),
                (M[A++] = k),
                (M[A++] = k - 1),
                (M[A++] = k),
                (M[A++] = k + 1),
                (M[A++] = k - 1);
            }
            function v(U, C, _, R, D, B, T, V) {
              const F = k * 9;
              let I = 0;
              (x[F + I++] = U),
                (x[F + I++] = C),
                (x[F + I++] = 1),
                (x[F + I++] = _),
                (x[F + I++] = B),
                (x[F + I++] = T),
                (x[F + I++] = R / 2),
                (x[F + I++] = D / 2),
                (x[F + I++] = V),
                k++,
                (x[F + I++] = U),
                (x[F + I++] = C),
                (x[F + I++] = -1),
                (x[F + I++] = _),
                (x[F + I++] = B),
                (x[F + I++] = T),
                (x[F + I++] = -R / 2),
                (x[F + I++] = -D / 2),
                (x[F + I++] = V),
                k++;
            }
            for (const U of w) {
              const { totalTime: C, timeSeed: _ } = U;
              let R = null,
                D = null,
                B = null,
                T = null,
                V = null,
                F = null;
              for (let I = 0; I < U.numberOfVertices; I++) {
                const S = g[4 * (U.startVertex + I) + 0],
                  L = g[4 * (U.startVertex + I) + 1],
                  N = g[4 * (U.startVertex + I) + 2],
                  Y = g[4 * (U.startVertex + I) + 3];
                let E = null,
                  O = null,
                  tt = null,
                  nt = null;
                if (I > 0) {
                  (E = S - R), (O = L - D);
                  const q = Math.sqrt(E * E + O * O);
                  if (((E /= q), (O /= q), I > 1)) {
                    let G = E + V,
                      W = O + F;
                    const X = Math.sqrt(G * G + W * W);
                    (G /= X), (W /= X);
                    const rt = Math.min(1 / (G * E + W * O), m);
                    (G *= rt), (W *= rt), (tt = -W), (nt = G);
                  } else (tt = -O), (nt = E);
                  tt !== null &&
                    nt !== null &&
                    (v(R, D, B, tt, nt, C, _, Y), P());
                }
                (R = S), (D = L), (B = N), (V = E), (F = O), (T = Y);
              }
              v(R, D, B, -F, V, C, _, T);
            }
            return { vertexData: x, indexData: M };
          })(p, we)
        : (function (a) {
            const { lineVertices: w, lineDescriptors: b } = a;
            let y = 0,
              x = 0;
            for (const q of b) {
              const G = q.numberOfVertices - 1;
              (y += 4 * G * 2), (x += 6 * G * 2);
            }
            const M = new Float32Array(y * 16),
              k = new Uint32Array(x);
            let A,
              P,
              v,
              U,
              C,
              _,
              R,
              D,
              B,
              T,
              V,
              F,
              I,
              S,
              L = 0,
              N = 0;
            function Y() {
              (k[N++] = L - 8),
                (k[N++] = L - 7),
                (k[N++] = L - 6),
                (k[N++] = L - 7),
                (k[N++] = L - 5),
                (k[N++] = L - 6),
                (k[N++] = L - 4),
                (k[N++] = L - 3),
                (k[N++] = L - 2),
                (k[N++] = L - 3),
                (k[N++] = L - 1),
                (k[N++] = L - 2);
            }
            function E(q, G, W, X, rt, ut, it, ot, mt, gt, Wt, Xt, zt, Jt) {
              const H = L * 16;
              let K = 0;
              for (const $t of [1, 2])
                for (const Ht of [1, 2, 3, 4])
                  (M[H + K++] = q),
                    (M[H + K++] = G),
                    (M[H + K++] = W),
                    (M[H + K++] = X),
                    (M[H + K++] = it),
                    (M[H + K++] = ot),
                    (M[H + K++] = mt),
                    (M[H + K++] = gt),
                    (M[H + K++] = $t),
                    (M[H + K++] = Ht),
                    (M[H + K++] = zt),
                    (M[H + K++] = Jt),
                    (M[H + K++] = rt / 2),
                    (M[H + K++] = ut / 2),
                    (M[H + K++] = Wt / 2),
                    (M[H + K++] = Xt / 2),
                    L++;
            }
            function O(q, G) {
              let W = B + V,
                X = T + F;
              const rt = Math.sqrt(W * W + X * X);
              (W /= rt), (X /= rt);
              const ut = B * W + T * X;
              (W /= ut), (X /= ut);
              let it = V + I,
                ot = F + S;
              const mt = Math.sqrt(it * it + ot * ot);
              (it /= mt), (ot /= mt);
              const gt = V * it + F * ot;
              (it /= gt),
                (ot /= gt),
                E(A, P, v, U, -X, W, C, _, R, D, -ot, it, q, G),
                Y();
            }
            function tt(q, G, W, X, rt, ut) {
              if (
                ((B = V),
                (T = F),
                (V = I),
                (F = S),
                B == null && T == null && ((B = V), (T = F)),
                C != null && _ != null)
              ) {
                (I = q - C), (S = G - _);
                const it = Math.sqrt(I * I + S * S);
                (I /= it), (S /= it);
              }
              B != null && T != null && O(rt, ut),
                (A = C),
                (P = _),
                (v = R),
                (U = D),
                (C = q),
                (_ = G),
                (R = W),
                (D = X);
            }
            function nt(q, G) {
              (B = V),
                (T = F),
                (V = I),
                (F = S),
                B == null && T == null && ((B = V), (T = F)),
                B != null && T != null && O(q, G);
            }
            for (const q of b) {
              (A = null),
                (P = null),
                (v = null),
                (U = null),
                (C = null),
                (_ = null),
                (R = null),
                (D = null),
                (B = null),
                (T = null),
                (V = null),
                (F = null),
                (I = null),
                (S = null);
              const { totalTime: G, timeSeed: W } = q;
              for (let X = 0; X < q.numberOfVertices; X++)
                tt(
                  w[4 * (q.startVertex + X) + 0],
                  w[4 * (q.startVertex + X) + 1],
                  w[4 * (q.startVertex + X) + 2],
                  w[4 * (q.startVertex + X) + 3],
                  G,
                  W
                );
              nt(G, W);
            }
            return { vertexData: M, indexData: k };
          })(p),
    f = performance.now();
  return (
    pt("esri-2d-profiler") &&
      (st.info("I.1", "_createFlowFieldFromData (ms)", Math.round(l - o)),
      st.info("I.2", "_getStreamlines (ms)", Math.round(c - l)),
      st.info("I.3", "createAnimatedLinesData (ms)", Math.round(r - c)),
      st.info(
        "I.4",
        "create{Streamlines|Particles}Mesh (ms)",
        Math.round(f - r)
      ),
      st.info("I.5", "createFlowMesh (ms)", Math.round(f - o)),
      st.info(
        "I.6",
        "Mesh size (bytes)",
        u.vertexData.buffer.byteLength + u.indexData.buffer.byteLength
      )),
    await Promise.resolve(),
    ne(s),
    u
  );
}
function ye(t, e) {
  const n = (function (s, o, i, l) {
    if (l === 0) return s;
    const h = Math.round(3 * l),
      c = new Array(2 * h + 1);
    let p = 0;
    for (let f = -h; f <= h; f++) {
      const a = Math.exp((-f * f) / (l * l));
      (c[f + h] = a), (p += a);
    }
    for (let f = -h; f <= h; f++) c[f + h] /= p;
    const r = new Float32Array(s.length);
    for (let f = 0; f < i; f++)
      for (let a = 0; a < o; a++) {
        let m = 0,
          d = 0;
        for (let g = -h; g <= h; g++) {
          if (a + g < 0 || a + g >= o) continue;
          const w = c[g + h];
          (m += w * s[2 * (f * o + (a + g)) + 0]),
            (d += w * s[2 * (f * o + (a + g)) + 1]);
        }
        (r[2 * (f * o + a) + 0] = m), (r[2 * (f * o + a) + 1] = d);
      }
    const u = new Float32Array(s.length);
    for (let f = 0; f < o; f++)
      for (let a = 0; a < i; a++) {
        let m = 0,
          d = 0;
        for (let g = -h; g <= h; g++) {
          if (a + g < 0 || a + g >= i) continue;
          const w = c[g + h];
          (m += w * r[2 * ((a + g) * o + f) + 0]),
            (d += w * r[2 * ((a + g) * o + f) + 1]);
        }
        (u[2 * (a * o + f) + 0] = m), (u[2 * (a * o + f) + 1] = d);
      }
    return u;
  })(e.data, e.width, e.height, t.smoothing);
  return t.interpolate
    ? (s, o) => {
        const i = Math.floor(s),
          l = Math.floor(o);
        if (i < 0 || i >= e.width) return [0, 0];
        if (l < 0 || l >= e.height) return [0, 0];
        const h = s - i,
          c = o - l,
          p = i,
          r = l,
          u = i < e.width - 1 ? i + 1 : i,
          f = l < e.height - 1 ? l + 1 : l,
          a = n[2 * (r * e.width + p)],
          m = n[2 * (r * e.width + u)],
          d = n[2 * (f * e.width + p)],
          g = n[2 * (f * e.width + u)],
          w = n[2 * (r * e.width + p) + 1],
          b = n[2 * (r * e.width + u) + 1];
        return [
          (a * (1 - c) + d * c) * (1 - h) + (m * (1 - c) + g * c) * h,
          (w * (1 - c) + n[2 * (f * e.width + p) + 1] * c) * (1 - h) +
            (b * (1 - c) + n[2 * (f * e.width + u) + 1] * c) * h,
        ];
      }
    : (s, o) => {
        const i = Math.round(s),
          l = Math.round(o);
        return i < 0 || i >= e.width || l < 0 || l >= e.height
          ? [0, 0]
          : [n[2 * (l * e.width + i) + 0], n[2 * (l * e.width + i) + 1]];
      };
}
function ke(t, e, n, s, o, i, l, h, c) {
  const p = [];
  let r = n,
    u = s,
    f = 0,
    [a, m] = e(r, u);
  (a *= t.velocityScale), (m *= t.velocityScale);
  const d = Math.sqrt(a * a + m * m);
  let g, w;
  p.push({ x: r, y: u, t: f, speed: d });
  for (let b = 0; b < t.verticesPerLine; b++) {
    let [y, x] = e(r, u);
    (y *= t.velocityScale), (x *= t.velocityScale);
    const M = Math.sqrt(y * y + x * x);
    if (M < t.minSpeedThreshold) return p;
    const k = y / M,
      A = x / M;
    if (
      ((r += k * t.segmentLength),
      (u += A * t.segmentLength),
      (f += t.segmentLength / M),
      Math.acos(k * g + A * w) > t.maxTurnAngle)
    )
      return p;
    if (t.collisions) {
      const P = Math.round(r * c),
        v = Math.round(u * c);
      if (P < 0 || P > l - 1 || v < 0 || v > h - 1) return p;
      const U = i[v * l + P];
      if (U !== -1 && U !== o) return p;
      i[v * l + P] = o;
    }
    p.push({ x: r, y: u, t: f, speed: M }), (g = k), (w = A);
  }
  return p;
}
function Me(t, e, n, s) {
  const o = [],
    i = new Rt(),
    l = 1 / Math.max(t.lineCollisionWidth, 1),
    h = Math.round(n * l),
    c = Math.round(s * l),
    p = new Int32Array(h * c);
  for (let u = 0; u < p.length; u++) p[u] = -1;
  const r = [];
  for (let u = 0; u < s; u += t.lineSpacing)
    for (let f = 0; f < n; f += t.lineSpacing)
      r.push({ x: f, y: u, sort: i.getFloat() });
  r.sort((u, f) => u.sort - f.sort);
  for (const { x: u, y: f } of r)
    if (i.getFloat() < t.density) {
      const a = ke(t, e, u, f, o.length, p, h, c, l);
      if (a.length < 2) continue;
      o.push(a);
    }
  return o;
}
function _t(t, e) {
  const n = e.pixels,
    { width: s, height: o } = e,
    i = new Float32Array(s * o * 2),
    l = e.mask || new Uint8Array(s * o * 2);
  if ((e.mask || l.fill(255), t === "vector-uv"))
    for (let h = 0; h < s * o; h++)
      (i[2 * h + 0] = n[0][h]), (i[2 * h + 1] = -n[1][h]);
  else if (t === "vector-magdir")
    for (let h = 0; h < s * o; h++) {
      const c = n[0][h],
        p = le(n[1][h]),
        r = Math.cos(p - Math.PI / 2),
        u = Math.sin(p - Math.PI / 2);
      (i[2 * h + 0] = r * c), (i[2 * h + 1] = u * c);
    }
  return { data: i, mask: l, width: s, height: o };
}
async function ze(t, e, n, s, o, i) {
  const l = performance.now(),
    h = ie(e.spatialReference);
  if (!h) {
    const x = await Dt(t, e, n, s, o, i);
    return (
      pt("esri-2d-profiler") &&
        st.info(
          "I.7",
          "loadImagery, early exit (ms)",
          Math.round(performance.now() - l)
        ),
      pt("esri-2d-profiler") && st.info("I.9", "Number of parts", 1),
      x
    );
  }
  const [c, p] = h.valid,
    r = p - c,
    u = Math.ceil(e.width / r),
    f = e.width / u,
    a = Math.round(n / u);
  let m = e.xmin;
  const d = [],
    g = performance.now();
  for (let x = 0; x < u; x++) {
    const M = new se({
      xmin: m,
      xmax: m + f,
      ymin: e.ymin,
      ymax: e.ymax,
      spatialReference: e.spatialReference,
    });
    d.push(Dt(t, M, a, s, o, i)), (m += f);
  }
  const w = await Promise.all(d);
  pt("esri-2d-profiler") &&
    st.info(
      "I.8",
      "All calls to _fetchPart (ms)",
      Math.round(performance.now() - g)
    ),
    pt("esri-2d-profiler") && st.info("I.9", "Number of parts", w.length);
  const b = {
    data: new Float32Array(n * s * 2),
    mask: new Uint8Array(n * s),
    width: n,
    height: s,
  };
  let y = 0;
  for (const x of w) {
    for (let M = 0; M < x.height; M++)
      for (let k = 0; k < x.width; k++)
        y + k >= n ||
          ((b.data[2 * (M * n + y + k) + 0] =
            x.data[2 * (M * x.width + k) + 0]),
          (b.data[2 * (M * n + y + k) + 1] = x.data[2 * (M * x.width + k) + 1]),
          (b.mask[M * n + y + k] = x.mask[M * x.width + k]));
    y += x.width;
  }
  return (
    pt("esri-2d-profiler") &&
      st.info(
        "I.10",
        "loadImagery, general exit (ms)",
        Math.round(performance.now() - l)
      ),
    b
  );
}
async function Dt(t, e, n, s, o, i) {
  const l = { requestProjectedLocalDirections: !0, signal: i };
  if ((z(o) && (l.timeExtent = o), t.type === "imagery")) {
    await t.load({ signal: i });
    const p = t.rasterInfo.dataType,
      r = await t.fetchImage(e, n, s, l);
    return !r || lt(r.pixelData) || lt(r.pixelData.pixelBlock)
      ? {
          data: new Float32Array(n * s * 2),
          mask: new Uint8Array(n * s),
          width: n,
          height: s,
        }
      : _t(p, r.pixelData.pixelBlock);
  }
  await t.load({ signal: i });
  const h = t.rasterInfo.dataType,
    c = await t.fetchPixels(e, n, s, l);
  return !c || lt(c.pixelBlock)
    ? {
        data: new Float32Array(n * s * 2),
        mask: new Uint8Array(n * s),
        width: n,
        height: s,
      }
    : _t(h, c.pixelBlock);
}
export {
  _e as A,
  yt as B,
  Tt as C,
  xe as D,
  Oe as E,
  qe as F,
  Ve as M,
  Le as R,
  Re as S,
  De as T,
  ze as a,
  he as b,
  Ee as c,
  Vt as d,
  Ne as e,
  je as f,
  Xe as g,
  Ue as h,
  J as i,
  We as j,
  Ie as k,
  Se as l,
  j as m,
  Pe as n,
  Te as o,
  Be as p,
  Bt as q,
  It as r,
  Mt as s,
  ve as t,
  be as u,
  Fe as v,
  Lt as w,
  Ge as x,
  Ce as y,
  Ot as z,
};
