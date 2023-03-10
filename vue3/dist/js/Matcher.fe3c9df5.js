import {
  s as nt,
  ad as Tr,
  aN as zr,
  t as G,
  r as R,
  cp as le,
  cq as he,
  q as ce,
  u as g,
  cr as Wr,
  Q as mt,
  c1 as Ir,
  c0 as At,
  I as Se,
  cs as Cr,
  ax as kr,
  c6 as Er,
  a_ as St,
  c4 as Lt,
  a$ as ue,
  W as Ct,
  bx as Rr,
  D as Br,
  ct as Ar,
  f as Nt,
  cu as Fr,
  cv as Le,
  cw as Pe,
  cx as Vr,
  cy as Dr,
  cz as Or,
  cA as Gr,
  cB as Te,
  cC as ze,
  cD as We,
  j as Kr,
  cE as Ie,
  cF as Zr,
  cb as Nr,
} from "./index.8fd7165c.js";
import {
  c as Xt,
  h as Xr,
  o as ot,
  f as Ur,
  a as Je,
  g as E,
  k as Hr,
  r as Yr,
  p as qr,
  n as st,
  s as jr,
  i as Qr,
  e as C,
  l as tr,
  X as $r,
  m as Jr,
  q as er,
  t as Ft,
  v as rr,
  w as ir,
} from "./definitions.ce677f69.js";
import { f as ti, p as ei } from "./visualVariablesUtils.1183f3fb.js";
import {
  E as T,
  R as jt,
  a as I,
  w as M,
  b as D,
  c as W,
  S as Vt,
  k as ri,
  G as ii,
} from "./color.4c5303e9.js";
import { o as si } from "./tileUtils.c2f19f52.js";
import { r as ni, c as oi, i as ai } from "./TurboLine.2982dc8d.js";
import { f as N, o as Pt, e as Ce } from "./enums.13513a14.js";
import {
  U as Qt,
  s as li,
  r as sr,
  n as nr,
  i as hi,
  a as ci,
  Z as Ut,
  c as ui,
  o as _i,
  N as _e,
  C as kt,
  w as dt,
  O as Et,
  b as or,
  P as di,
  f as de,
} from "./MaterialKey.97cb3dc8.js";
import {
  g as fi,
  f as mi,
  S as pi,
  h as Ht,
  c as ke,
  j as xi,
  k as Tt,
  l as yi,
  m as gi,
  n as Mi,
} from "./ExpandedCIM.e22c8b13.js";
import { c as $t } from "./GeometryUtils.82ab0a13.js";
import "./earcut.9f54f087.js";
import { e as ar, t as lr } from "./GeometryUtils.874f8cf4.js";
import { q as hr } from "./Table.e9c997d5.js";
import { c as vi, a as wi } from "./devEnvironmentUtils.4eab2a99.js";
function V(s, t) {
  if (s && "name" in s) {
    const e = s;
    return t && t.error(new nt(e.name, e.message, e.details)), !1;
  }
  return !0;
}
let zt = class {
  get length() {
    return this._pos;
  }
  constructor(s, t) {
    this._pos = 0;
    const e = t ? this._roundToNearest(t, s.BYTES_PER_ELEMENT) : 40;
    (this._array = new ArrayBuffer(e)),
      (this._buffer = new s(this._array)),
      (this._ctor = s),
      (this._i16View = new Int16Array(this._array));
  }
  _roundToNearest(s, t) {
    const e = Math.round(s);
    return e + (t - (e % t));
  }
  _ensureSize(s) {
    if (this._pos + s >= this._buffer.length) {
      const t = this._roundToNearest(
          1.25 * (this._array.byteLength + s * this._buffer.BYTES_PER_ELEMENT),
          this._buffer.BYTES_PER_ELEMENT
        ),
        e = new ArrayBuffer(t),
        r = new this._ctor(e);
      r.set(this._buffer, 0),
        (this._array = e),
        (this._buffer = r),
        (this._i16View = new Int16Array(this._array));
    }
  }
  ensureSize(s) {
    this._ensureSize(s);
  }
  writeF32(s) {
    this._ensureSize(1);
    const t = this._pos;
    return (
      (new Float32Array(this._array, 4 * this._pos, 1)[0] = s), this._pos++, t
    );
  }
  push(s) {
    this._ensureSize(1);
    const t = this._pos;
    return (this._buffer[this._pos++] = s), t;
  }
  writeFixed(s) {
    this._buffer[this._pos++] = s;
  }
  setValue(s, t) {
    this._buffer[s] = t;
  }
  i1616Add(s, t, e) {
    (this._i16View[2 * s] += t), (this._i16View[2 * s + 1] += e);
  }
  getValue(s) {
    return this._buffer[s];
  }
  incr(s) {
    if (this._buffer.length < s)
      throw new Error("Increment index overflows the target buffer");
    this._buffer[s]++;
  }
  decr(s) {
    this._buffer[s]--;
  }
  writeRegion(s) {
    this._ensureSize(s.length);
    const t = this._pos;
    return this._buffer.set(s, this._pos), (this._pos += s.length), t;
  }
  writeManyFrom(s, t, e) {
    this._ensureSize(e - t);
    for (let r = t; r !== e; r++) this.writeFixed(s._buffer[r]);
  }
  buffer() {
    const s = this._array.slice(0, 4 * this._pos);
    return this.destroy(), s;
  }
  toArray() {
    const s = this._array,
      t = [];
    for (let e = 0; e < s.byteLength / 4; e++) t.push(s[e]);
    return t;
  }
  seek(s) {
    this._pos = s;
  }
  destroy() {
    (this._array = null), (this._buffer = null);
  }
};
const ct = new Map();
ct.set(T.MARKER, { multiplier: 1, indicesPerRecord: 6, verticesPerRecord: 4 }),
  ct.set(T.LINE, { multiplier: 1, indicesPerRecord: 24, verticesPerRecord: 8 }),
  ct.set(T.FILL, {
    multiplier: 1,
    indicesPerRecord: 10,
    verticesPerRecord: 10,
  }),
  ct.set(T.TEXT, { multiplier: 8, indicesPerRecord: 6, verticesPerRecord: 4 }),
  ct.set(T.LABEL, { multiplier: 8, indicesPerRecord: 6, verticesPerRecord: 4 });
let Ee = class {
  constructor(s, t, e) {
    this._start = { index: 0, vertex: 0 };
    const r = (function (o, n, a) {
        const {
          indicesPerRecord: l,
          multiplier: h,
          verticesPerRecord: u,
        } = ct.get(o);
        return {
          recordBytes: a * Xt * Uint32Array.BYTES_PER_ELEMENT,
          indexBytes: h * l * a * Uint32Array.BYTES_PER_ELEMENT,
          vertexBytes: h * u * a * n,
        };
      })(s, t, e),
      i = t / 4;
    (this.geometryType = s),
      (this._records = new zt(Int32Array, r.recordBytes)),
      (this._indices = new zt(Uint32Array, r.indexBytes)),
      (this._vertices = new zt(Uint32Array, r.vertexBytes)),
      (this._metrics = new zt(Float32Array, 0)),
      (this._strideInt = i);
  }
  serialize(s) {
    const t = this._records.buffer(),
      e = this._indices.buffer(),
      r = this._vertices.buffer(),
      i = this._metrics.length ? this._metrics.buffer() : null,
      o = 4 * this._strideInt;
    return (
      s.push(t, e, r),
      { stride: o, records: t, indices: e, vertices: r, metrics: i }
    );
  }
  get strideInt() {
    return this._strideInt;
  }
  get recordCount() {
    return this._records.length / Xt;
  }
  get vertexCount() {
    return this._vertices.length / this._strideInt;
  }
  get indexCount() {
    return this._indices.length;
  }
  get indexWriter() {
    return this._indices;
  }
  get vertexWriter() {
    return this._vertices;
  }
  get metricWriter() {
    return this._metrics;
  }
  vertexEnsureSize(s) {
    this._vertices.ensureSize(s);
  }
  indexEnsureSize(s) {
    this._indices.ensureSize(s);
  }
  recordStart() {
    (this._start.index = this._indices.length),
      (this._start.vertex = this._vertices.length);
  }
  recordEnd(s, t, e, r, i, o, n, a) {
    this._records.push(s),
      this._records.push(t ?? 0),
      this._records.push(e),
      this._records.push(r),
      this._records.push(i),
      this._records.push(o),
      this._records.push(n),
      this._records.writeF32(a);
  }
  writeIndex(s) {
    this._indices.push(s);
  }
  writeVertex(s) {
    this._vertices.push(s);
  }
  writeVertexF32(s) {
    this._vertices.writeF32(s);
  }
  copyLastFrom(s, t, e) {
    const r = s._records.length - Xt,
      i = s._records.getValue(r),
      o = s._records.getValue(r + 1),
      n = s._records.getValue(r + 2),
      a = s._records.getValue(r + 4),
      l = s._records.getValue(r + 6),
      h = s._records.getValue(r + 7),
      u = this._vertices.length,
      c = (s._start.vertex - this._vertices.length) / this._strideInt,
      d = this._indices.length,
      _ = this.vertexCount;
    for (let f = s._start.index; f !== s._indices.length; f++) {
      const m = s._indices.getValue(f);
      this._indices.push(m - c);
    }
    for (let f = s._start.vertex; f !== s._vertices.length; f++) {
      const m = s._vertices.getValue(f);
      this._vertices.push(m);
    }
    for (let f = u; f <= this._vertices.length; f += this._strideInt)
      this._vertices.i1616Add(f, t, e);
    this._records.push(i),
      this._records.push(o),
      this._records.push(n),
      this._records.push(d),
      this._records.push(a),
      this._records.push(_),
      this._records.push(l),
      this._records.push(h);
  }
};
const Dt = 1,
  fe = 2,
  Ot = 4,
  me = 8,
  pe = 16,
  Gt = 32,
  xe = 64,
  Kt = 128;
function Re(s) {
  switch (s) {
    case Dt:
    case me:
    case Gt:
      return -1;
    case fe:
    case xe:
      return 0;
    case Ot:
    case pe:
    case Kt:
      return 1;
  }
}
function Be(s) {
  switch (s) {
    case Dt:
    case fe:
    case Ot:
      return -1;
    case me:
    case pe:
      return 0;
    case Gt:
    case xe:
    case Kt:
      return 1;
  }
}
const Ae = Dt | me | Gt,
  Fe = Ot | pe | Kt,
  Ve = Dt | fe | Ot,
  De = Gt | xe | Kt;
let gs = class {
  constructor(s, t, e, r, i, o = 0) {
    (this._hasAggregate = !1),
      (this.hasRecords = !1),
      (this._data = { self: new Map(), neighbors: [] }),
      (this._version = 0),
      (this._current = {
        geometryType: 0,
        writer: null,
        overlaps: 0,
        start: 0,
        insertAfter: 0,
        sortKey: 0,
        id: 0,
        materialKey: 0,
        indexStart: 0,
        vertStart: 0,
        isDotDensity: !1,
        bufferingEnabled: !1,
        metricBoxLenPointer: 0,
      }),
      (this.hint = t),
      (this.tileKey = s),
      (this._hasAggregate = r),
      (this._pixelBufferEnabled = i),
      (this._version = o),
      (this._symbologyType = e);
  }
  get hasAggregates() {
    return this._hasAggregate;
  }
  get hasPixelBufferEnabled() {
    return this._pixelBufferEnabled;
  }
  serialize(s) {
    const t = [];
    return (
      t.push(
        this._serializeTileVertexData(
          this.tileKey,
          this.tileKey,
          this._data.self
        )
      ),
      this._data.neighbors.forEach((e, r) => {
        const i = 1 << r,
          o = Re(i),
          n = Be(i),
          a = si(new Tr(this.tileKey), o, n, s),
          l = this._serializeTileVertexData(this.tileKey, a.id, e.vertexData);
        (l.message.bufferIds = e.displayIds), t.push(l);
      }),
      t
    );
  }
  _serializeTileVertexData(s, t, e) {
    var i, o, n, a, l;
    const r = [];
    return {
      message: {
        tileKeyOrigin: s,
        tileKey: t,
        data: {
          [T.MARKER]: (i = e.get(T.MARKER)) == null ? void 0 : i.serialize(r),
          [T.FILL]: (o = e.get(T.FILL)) == null ? void 0 : o.serialize(r),
          [T.LINE]: (n = e.get(T.LINE)) == null ? void 0 : n.serialize(r),
          [T.TEXT]: (a = e.get(T.TEXT)) == null ? void 0 : a.serialize(r),
          [T.LABEL]: (l = e.get(T.LABEL)) == null ? void 0 : l.serialize(r),
        },
        version: this._version,
      },
      transferList: r,
    };
  }
  featureStart(s, t) {
    (this._current.insertAfter = s), (this._current.sortKey = t);
  }
  featureEnd() {}
  recordStart(s, t, e, r) {
    (this._current.writer = this._getVertexWriter(e)),
      (this._current.overlaps = 0),
      (this._current.indexStart = this._current.writer.indexCount),
      (this._current.vertStart = this._current.writer.vertexCount),
      (this._current.bufferingEnabled = r),
      (this._current.id = s),
      (this._current.materialKey = t),
      (this._current.geometryType = e),
      (this._current.isDotDensity = !1),
      this._current.writer.recordStart();
  }
  recordCount() {
    return this._current.writer.recordCount;
  }
  vertexCount() {
    return this._current.writer.vertexCount;
  }
  indexCount() {
    return this._current.writer.indexCount;
  }
  vertexEnsureSize(s) {
    this._current.writer.vertexEnsureSize(s);
  }
  indexEnsureSize(s) {
    this._current.writer.indexEnsureSize(s);
  }
  vertexBounds(s, t, e, r) {
    this._current.bufferingEnabled && this._addOverlap(s, t, e, r);
  }
  vertexWrite(s) {
    this._current.writer.writeVertex(s);
  }
  vertexWriteF32(s) {
    this._current.writer.writeVertexF32(s);
  }
  vertexEnd() {}
  vertexWriter() {
    return this._current.writer.vertexWriter;
  }
  indexWrite(s) {
    this._current.writer.writeIndex(s);
  }
  indexWriter() {
    return this._current.writer.indexWriter;
  }
  metricWriter() {
    return this._current.writer.metricWriter;
  }
  metricStart(s, t, e, r, i, o, n, a) {
    this._current.writer = this._getVertexWriter(T.LABEL);
    const l = this._current.writer.metricWriter;
    l.push(ti(s)),
      l.push(t),
      l.push(e),
      l.push(r),
      l.push(i),
      l.push(o),
      l.push(n),
      l.push(a),
      l.push(255),
      (this._current.metricBoxLenPointer = l.push(0));
  }
  metricEnd() {
    const s = this._current.writer.metricWriter;
    s.getValue(this._current.metricBoxLenPointer) === 0 &&
      s.seek(s.length - 10);
  }
  metricBoxWrite(s, t, e, r) {
    const i = this._current.writer.metricWriter;
    i.incr(this._current.metricBoxLenPointer),
      i.push(0),
      i.push(0),
      i.push(s),
      i.push(t),
      i.push(e),
      i.push(r);
  }
  recordEnd() {
    const s = this._current.vertStart,
      t = this._current.writer.vertexCount - s;
    if (!t) return !1;
    this.hasRecords = !0;
    const e = this._current.indexStart,
      r = this._current.writer.indexCount - e;
    if (
      (this._current.writer.recordEnd(
        this._current.id,
        this._current.materialKey,
        this._current.insertAfter,
        e,
        r,
        s,
        t,
        this._current.sortKey
      ),
      !this._pixelBufferEnabled ||
        this._hasAggregate ||
        this._current.overlaps === 0 ||
        this._current.geometryType === T.LABEL)
    )
      return !0;
    const i = this._current.writer;
    for (let o = 0; o < 8; o++) {
      const n = 1 << o;
      if (this._current.overlaps & n) {
        this._data.neighbors[o] ||
          (this._data.neighbors[o] = {
            vertexData: new Map(),
            displayIds: new Set(),
          });
        const a = this._data.neighbors[o],
          l = this._current.geometryType;
        if (!a.vertexData.has(l)) {
          const _ = jt(l, this._symbologyType).geometry,
            f = new Ee(l, _, Xr);
          a.vertexData.set(l, f);
        }
        const h = a.vertexData.get(this._current.geometryType),
          u = 8,
          c = 512 * -Re(n) * u,
          d = 512 * -Be(n) * u;
        h == null || h.copyLastFrom(i, c, d),
          a.displayIds.add(this._current.id);
      }
    }
    return !0;
  }
  _addOverlap(s, t, e, r) {
    const i =
      255 ^
      ((s < 0 + e ? Fe : s >= ot - e ? Ae : Fe | Ae) |
        (t < 0 + r ? De : t >= ot - r ? Ve : De | Ve));
    this._current.overlaps |= i;
  }
  _getVertexWriter(s) {
    if (!this._data.self.has(s)) {
      const t = this._data.self,
        e = jt(s, this._symbologyType).geometry;
      t.set(s, new Ee(s, e, this.hint.records));
    }
    return this._data.self.get(s);
  }
};
const U = 0,
  H = 100;
function Oe(s, t, e) {
  return (s[0] = t[0] - e[0]), (s[1] = t[1] - e[1]), s;
}
function cr(s, t) {
  return Math.sqrt(s * s + t * t);
}
function Ge(s) {
  const t = cr(s[0], s[1]);
  (s[0] /= t), (s[1] /= t);
}
function bi(s, t) {
  return cr(s[0] - t[0], s[1] - t[1]);
}
function S(s) {
  return typeof s == "function";
}
function Jt(s = 2) {
  return 1 / Math.max(s, 1);
}
function tt(s, t) {
  return [
    (!!(s != null && s.minScale) && t.scaleToZoom(s.minScale)) || U,
    (!!(s != null && s.maxScale) && t.scaleToZoom(s.maxScale)) || H,
  ];
}
function ur(s) {
  return s.length - 1;
}
function Si(s, t, e = 1) {
  const [r, i] = (function (o, n) {
    return o[n + 1];
  })(s, t);
  return Math.sqrt(r * r + i * i) * e;
}
let Li = class te {
  constructor(t, e, r, i, o) {
    (this._segments = t),
      (this._index = e),
      (this._distance = r),
      (this._xStart = i),
      (this._yStart = o),
      (this._done = !1);
  }
  static create(t) {
    return new te(t, 0, 0, t[0][0], t[0][1]);
  }
  clone() {
    return new te(
      this._segments,
      this._index,
      this._distance,
      this.xStart,
      this.yStart
    );
  }
  equals(t) {
    return (
      this._index === t._index ||
      (t._index === this._index - 1 &&
        (this._distance === 0 || t._distance === 1)) ||
      (t._index === this._index + 1 &&
        (this._distance === 1 || t._distance === 0))
    );
  }
  leq(t) {
    return (
      this._index < t._index ||
      (this._index === t._index && this._distance <= t._distance)
    );
  }
  geq(t) {
    return (
      this._index > t._index ||
      (this._index === t._index && this._distance >= t._distance)
    );
  }
  get _segment() {
    return this._segments[this._index + 1];
  }
  get angle() {
    const t = this.dy,
      e = (0 * t + -1 * -this.dx) / (1 * this.length);
    let r = Math.acos(e);
    return t > 0 && (r = 2 * Math.PI - r), r;
  }
  get xStart() {
    return this._xStart;
  }
  get yStart() {
    return this._yStart;
  }
  get x() {
    return this.xStart + this.distance * this.dx;
  }
  get y() {
    return this.yStart + this.distance * this.dy;
  }
  get dx() {
    return this._segment[0];
  }
  get dy() {
    return this._segment[1];
  }
  get xMidpoint() {
    return this.xStart + 0.5 * this.dx;
  }
  get yMidpoint() {
    return this.yStart + 0.5 * this.dy;
  }
  get xEnd() {
    return this.xStart + this.dx;
  }
  get yEnd() {
    return this.yStart + this.dy;
  }
  get length() {
    const { dx: t, dy: e } = this;
    return Math.sqrt(t * t + e * e);
  }
  get remainingLength() {
    return this.length * (1 - this._distance);
  }
  get backwardLength() {
    return this.length * this._distance;
  }
  get distance() {
    return this._distance;
  }
  get done() {
    return this._done;
  }
  hasPrev() {
    return this._index - 1 >= 0;
  }
  hasNext() {
    return this._index + 1 < ur(this._segments);
  }
  next() {
    return this.hasNext()
      ? ((this._xStart += this.dx),
        (this._yStart += this.dy),
        (this._distance = 0),
        (this._index += 1),
        this)
      : null;
  }
  prev() {
    return this.hasPrev()
      ? ((this._index -= 1),
        (this._xStart -= this.dx),
        (this._yStart -= this.dy),
        (this._distance = 1),
        this)
      : ((this._done = !0), null);
  }
  _seekBackwards(t, e) {
    const r = this.backwardLength;
    if (t <= r) return (this._distance = (r - t) / this.length), this;
    let i = this.backwardLength;
    for (; this.prev(); ) {
      if (i + this.length > t) return this._seekBackwards(t - i);
      i += this.length;
    }
    return (this._distance = 0), e ? this : null;
  }
  seek(t, e = !1) {
    if (t < 0) return this._seekBackwards(Math.abs(t), e);
    if (t <= this.remainingLength)
      return (this._distance = (this.backwardLength + t) / this.length), this;
    let r = this.remainingLength;
    for (; this.next(); ) {
      if (r + this.length > t) return this.seek(t - r, e);
      r += this.length;
    }
    return (this._distance = 1), e ? this : null;
  }
};
function Pi(s, t, e, r = !0) {
  const i = (function (u) {
      let c = 0;
      for (let d = 0; d < ur(u); d++) c += Si(u, d);
      return c;
    })(s),
    o = Li.create(s),
    n = i / 2;
  if (!r) return o.seek(n), void e(o.clone(), 0, n + 0 * t, i);
  const a = Math.max((i - t) / 2, 0),
    l = Math.floor(a / t),
    h = n - l * t;
  o.seek(h);
  for (let u = -l; u <= l; u++)
    o.x < 512 &&
      o.x >= 0 &&
      o.y < 512 &&
      o.y >= 0 &&
      e(o.clone(), u, n + u * t, i),
      o.seek(t);
}
function Ti(s, t) {
  if (t <= 0) return;
  const r = s.length;
  if (r < 3) return;
  const i = [];
  let o = 0;
  i.push(0);
  for (let c = 1; c < r; c++) (o += bi(s[c], s[c - 1])), i.push(o);
  t = Math.min(t, 0.2 * o);
  const n = [];
  n.push(s[0][0]), n.push(s[0][1]);
  const a = s[r - 1][0],
    l = s[r - 1][1],
    h = Oe([0, 0], s[0], s[1]);
  Ge(h),
    (s[0][0] += t * h[0]),
    (s[0][1] += t * h[1]),
    Oe(h, s[r - 1], s[r - 2]),
    Ge(h),
    (s[r - 1][0] += t * h[0]),
    (s[r - 1][1] += t * h[1]);
  for (let c = 1; c < r; c++) i[c] += t;
  i[r - 1] += t;
  const u = 0.5 * t;
  for (let c = 1; c < r - 1; c++) {
    let d = 0,
      _ = 0,
      f = 0;
    for (let m = c - 1; m >= 0 && !(i[m + 1] < i[c] - u); m--) {
      const p = u + i[m + 1] - i[c],
        x = i[m + 1] - i[m],
        y = i[c] - i[m] < u ? 1 : p / x;
      if (Math.abs(y) < 1e-6) break;
      const v = y * y,
        w = y * p - 0.5 * v * x,
        L = (y * x) / t,
        b = s[m + 1],
        P = s[m][0] - b[0],
        z = s[m][1] - b[1];
      (d +=
        (L / w) *
        (b[0] * y * p + 0.5 * v * (p * P - x * b[0]) - (v * y * x * P) / 3)),
        (_ +=
          (L / w) *
          (b[1] * y * p + 0.5 * v * (p * z - x * b[1]) - (v * y * x * z) / 3)),
        (f += L);
    }
    for (let m = c + 1; m < r && !(i[m - 1] > i[c] + u); m++) {
      const p = u - i[m - 1] + i[c],
        x = i[m] - i[m - 1],
        y = i[m] - i[c] < u ? 1 : p / x;
      if (Math.abs(y) < 1e-6) break;
      const v = y * y,
        w = y * p - 0.5 * v * x,
        L = (y * x) / t,
        b = s[m - 1],
        P = s[m][0] - b[0],
        z = s[m][1] - b[1];
      (d +=
        (L / w) *
        (b[0] * y * p + 0.5 * v * (p * P - x * b[0]) - (v * y * x * P) / 3)),
        (_ +=
          (L / w) *
          (b[1] * y * p + 0.5 * v * (p * z - x * b[1]) - (v * y * x * z) / 3)),
        (f += L);
    }
    n.push(d / f), n.push(_ / f);
  }
  n.push(a), n.push(l);
  for (let c = 0, d = 0; c < r; c++) (s[c][0] = n[d++]), (s[c][1] = n[d++]);
}
let _r = class {
  static getPlacement(s, t, e, r, i) {
    const o = fi(t);
    if (!o) return null;
    const n = mi(s);
    return o.execute(n, t, e, r, i);
  }
};
const O = M(4, 4),
  Rt = M(4, 2),
  K = M(4, 6),
  Ke = [Rt, Rt, K, K],
  Ze = [Rt, K, Rt, K],
  zi = [K, K, O, O],
  Wi = [O, O, K, K],
  Ii = [K, O, K, O],
  Ci = [O, K, O, K],
  dr = (s) =>
    class extends s {
      constructor(...t) {
        super(...t),
          (this._isCIM = !1),
          (this._vertexBoundsScale = 1),
          (this.geometryType = T.TEXT),
          (this._aux = I(0, 0, this._referenceSize, this._bitset));
      }
      bindTextInfo(t, e) {
        t && t.length
          ? (this._shapingInfo = zr(t, (r) =>
              pi(r, e, {
                scale: this._scale,
                angle: this._angle,
                xOffset: this._xOffset,
                yOffset: this._yOffset,
                hAlign: this._xAlignD,
                vAlign: this._yAlignD,
                maxLineWidth: Math.max(32, Math.min(this._lineWidth, 512)),
                lineHeight: Ur * Math.max(0.25, Math.min(this._lineHeight, 4)),
                decoration: this._decoration,
                isCIM: this._isCIM,
                hasBackground: !!this._backgroundColor,
                borderLineSize: this._borderLineSize,
              })
            ))
          : (this._shapingInfo = null);
      }
      _write(t, e, r, i) {
        const o = e.getDisplayId();
        this._writeGeometry(t, e, o, r, i);
      }
      _writeGeometry(t, e, r, i, o) {
        const n = this._shapingInfo;
        if (G(n)) return;
        if (R(this._textPlacement)) {
          const l = o ?? e.readLegacyGeometryForDisplay();
          return this._writePlacedText(t, r, l, n, i);
        }
        const a = o
          ? le(he(o), 2)
          : e.geometryType === "esriGeometryPolygon"
          ? e.readCentroid()
          : e.readGeometryForDisplay();
        if (!G(a)) {
          if (a.isPoint) {
            const [l, h] = a.coords;
            return !t.hasAggregates &&
              t.hasPixelBufferEnabled &&
              (l < 0 || l >= 512 || h < 0 || h >= 512)
              ? void 0
              : this._writeGlyphs(t, r, { x: l, y: h }, n);
          }
          a.forEachVertex((l, h) => this._writeGlyphs(t, r, { x: l, y: h }, n));
        }
      }
      _writePlacedText(t, e, r, i, o) {
        const n = ce(this._textPlacement),
          a = _r.getPlacement(r, n, g(1), t.tileKey, o.geometryEngine);
        if (!a) return;
        let l = a.next();
        for (; l != null; ) {
          const h = -l.getAngle();
          i.setRotation(h);
          const u = l.tx,
            c = -l.ty;
          u < 0 ||
            u >= 512 ||
            c < 0 ||
            c >= 512 ||
            (this._writeGlyphs(t, e, { x: u, y: c }, i), i.setRotation(-h)),
            (l = a.next());
        }
      }
      _writeGlyphs(t, e, r, i) {
        const o = Qt.load(this._materialKey),
          n = M(Math.round(8 * r.x), Math.round(8 * r.y)),
          a = this._vertexBoundsScale,
          { bounds: l, background: h, glyphs: u } = i;
        u.length > 0 &&
          (this._borderLineColor || this._backgroundColor) &&
          ((o.textureBinding = u[0].textureBinding),
          t.recordStart(e, o.data, this.geometryType, !0),
          this._writeBackgroundGeometry(t, e, r, l, h),
          t.recordEnd());
        const c = 2 * Math.max(l.width, l.height);
        for (const d of i.glyphs)
          (o.textureBinding = d.textureBinding),
            t.recordStart(e, o.data, this.geometryType, !0),
            t.vertexBounds(
              r.x + l.x + this._xOffset,
              r.y + l.y - this._yOffset,
              c * a,
              c * a
            ),
            this._writeVertices(t, e, n, d),
            t.recordEnd();
      }
      _writeGlyph(t, e, r, i, o) {
        const n = Qt.load(this._materialKey),
          a = M(Math.round(8 * r), Math.round(8 * i));
        (n.textureBinding = o.textureBinding),
          t.recordStart(e, n.data, this.geometryType, !0);
        const l = o.bounds,
          h = this._vertexBoundsScale;
        t.vertexBounds(r + l.x * h, i + l.y * h, l.width * h, l.height * h),
          this._writeVertices(t, e, a, o),
          t.recordEnd();
      }
      _writeVertices(t, e, r, i) {
        const o = t.vertexCount();
        this._writeVertexCommon(t, e, r, i),
          t.vertexWrite(i.offsets.upperLeft),
          t.vertexWrite(i.texcoords.upperLeft),
          t.vertexEnd(),
          this._writeVertexCommon(t, e, r, i),
          t.vertexWrite(i.offsets.upperRight),
          t.vertexWrite(i.texcoords.upperRight),
          t.vertexEnd(),
          this._writeVertexCommon(t, e, r, i),
          t.vertexWrite(i.offsets.lowerLeft),
          t.vertexWrite(i.texcoords.lowerLeft),
          t.vertexEnd(),
          this._writeVertexCommon(t, e, r, i),
          t.vertexWrite(i.offsets.lowerRight),
          t.vertexWrite(i.texcoords.lowerRight),
          t.vertexEnd(),
          t.indexWrite(o + 0),
          t.indexWrite(o + 1),
          t.indexWrite(o + 2),
          t.indexWrite(o + 1),
          t.indexWrite(o + 3),
          t.indexWrite(o + 2);
      }
      _writeVertexCommon(t, e, r, i) {
        const o = this._color,
          n = this._haloColor,
          a = I(0, 0, this._referenceSize, this._bitset),
          l = I(0, 0, this._size, this._haloSize);
        t.vertexWrite(r),
          t.vertexWrite(e),
          t.vertexWrite(o),
          t.vertexWrite(n),
          t.vertexWrite(l),
          t.vertexWrite(a),
          t.vertexWrite(this._minMaxZoom);
      }
      _writeBackgroundVertex(t, e, r, i, o, n) {
        const a = I(0, 1, this._referenceSize, this._bitset),
          l = I(0, 0, this._size, this._haloSize),
          h = I(0, 0, 0, 0);
        t.vertexWrite(r),
          t.vertexWrite(e),
          t.vertexWrite(i),
          t.vertexWrite(h),
          t.vertexWrite(l),
          t.vertexWrite(a),
          t.vertexWrite(this._minMaxZoom),
          t.vertexWrite(o),
          t.vertexWrite(n),
          t.vertexEnd();
      }
      _writeBackgroundQuad(t, e, r, i, o, n) {
        const a = t.vertexCount();
        this._writeBackgroundVertex(t, e, r, i, o.upperLeft, n[0]),
          this._writeBackgroundVertex(t, e, r, i, o.upperRight, n[1]),
          this._writeBackgroundVertex(t, e, r, i, o.lowerLeft, n[2]),
          this._writeBackgroundVertex(t, e, r, i, o.lowerRight, n[3]),
          t.indexWrite(a + 0),
          t.indexWrite(a + 1),
          t.indexWrite(a + 2),
          t.indexWrite(a + 1),
          t.indexWrite(a + 3),
          t.indexWrite(a + 2);
      }
      _writeBackgroundGeometry(t, e, r, i, o) {
        const n = M(Math.round(8 * r.x), Math.round(8 * r.y)),
          { x: a, y: l, width: h, height: u } = i,
          c = 2 * Math.max(h, u);
        if (
          (t.vertexBounds(
            r.x + a + this._xOffset,
            r.y + l - this._yOffset,
            c * this._vertexBoundsScale,
            c * this._vertexBoundsScale
          ),
          this._backgroundColor)
        ) {
          const d = [O, O, O, O];
          this._writeBackgroundQuad(t, e, n, this._backgroundColor, o.main, d);
        }
        if (this._borderLineColor || this._backgroundColor) {
          const d =
              !!this._borderLineColor &&
              !!this._borderLineSize &&
              this._borderLineSize > 0,
            [_, f, m, p, x] = d
              ? [Ke, Ke, Ze, Ze, this._borderLineColor]
              : [zi, Wi, Ii, Ci, this._backgroundColor];
          this._writeBackgroundQuad(t, e, n, x, o.top, _),
            this._writeBackgroundQuad(t, e, n, x, o.bot, f),
            this._writeBackgroundQuad(t, e, n, x, o.left, m),
            this._writeBackgroundQuad(t, e, n, x, o.right, p);
        }
      }
    };
let bt = class {
    constructor() {
      this._materialKey = null;
    }
    bindFeature(s, t, e) {}
    write(s, t, e, r) {
      var n;
      if (
        G(this._effects) ||
        ((n = this._effects) == null ? void 0 : n.length) === 0
      )
        return this._write(s, t, r);
      const i = Ht.executeEffects(
        this._effects,
        t.readLegacyGeometryForDisplay(),
        s.tileKey,
        r.geometryEngine
      );
      let o = Ht.next(i);
      for (; o; ) this._write(s, t, r, o), (o = Ht.next(i));
    }
    _write(s, t, e, r) {}
  },
  ee = class re extends dr(bt) {
    constructor(
      t,
      e,
      r,
      i,
      o,
      n,
      a,
      l,
      h,
      u,
      c,
      d,
      _,
      f,
      m,
      p,
      x,
      y,
      v,
      w,
      L,
      b,
      P,
      z
    ) {
      super(),
        (this._xOffset = g(_)),
        (this._yOffset = g(f)),
        (this._decoration = u || "none"),
        (this._backgroundColor = b),
        (this._borderLineColor = P),
        (this._borderLineSize = z),
        (this._color = o),
        (this._haloColor = n),
        (this._haloSize = Math.min(Math.floor(5 * g(Wr(r))), 127)),
        (this._size = Math.min(Math.round(g(e)), 127));
      const B = Math.min(Math.round(g(i || e)), 127);
      (this._referenceSize = Math.round(Math.sqrt(256 * B))),
        (this._scale = this._size / Je),
        (this._angle = d),
        (this._justify = li(a || "center")),
        (this._xAlignD = sr(a || "center")),
        (this._yAlignD = nr(l || "baseline")),
        (this._baseline = (l || "baseline") === "baseline"),
        (this._bitset = (h === N.MAP ? 1 : 0) | ((c ? 1 : 0) << 1));
      const Z = Qt.load(t);
      (Z.sdf = !0),
        (this._materialKey = Z.data),
        (this._lineWidth = g(m) || 512),
        (this._lineHeight = p || 1),
        (this._textPlacement = x),
        (this._effects = y),
        (this._isCIM = v ?? !1),
        (this._minMaxZoom = M(Math.round(w * E), Math.round(L * E)));
    }
    static fromText(t, e) {
      var n, a;
      const r = (n = t.font) == null ? void 0 : n.size,
        i = new re(
          t.materialKey,
          r,
          t.haloSize || 0,
          r,
          (t.color && D(t.color)) || 0,
          (t.haloColor && D(t.haloColor)) || 0,
          t.horizontalAlignment,
          t.verticalAlignment,
          N.SCREEN,
          (a = t.font) == null ? void 0 : a.decoration,
          !1,
          t.angle || 0,
          t.xoffset || 0,
          t.yoffset || 0,
          t.lineWidth || 0,
          t.lineHeight || 0,
          null,
          null,
          !1,
          U,
          H,
          t.backgroundColor && D(t.backgroundColor),
          t.borderLineColor && D(t.borderLineColor),
          t.borderLineSize
        ),
        [, o] = ke(t.text);
      return (
        i.bindTextInfo(e ?? [], o),
        (i._vertexBoundsScale = t.maxVVSize && r ? t.maxVVSize / r : 1),
        i
      );
    }
    static fromCIMText(t, e, r) {
      const i = t.scaleFactor || 1,
        o = t.size * t.sizeRatio * i,
        [n, a] = tt(t.scaleInfo, r),
        l = new re(
          t.materialKey,
          o,
          t.outlineSize * t.sizeRatio,
          t.referenceSize,
          W(t.color),
          W(t.outlineColor),
          t.horizontalAlignment,
          t.verticalAlignment,
          t.alignment,
          t.decoration,
          t.colorLocked ?? !1,
          t.angle,
          t.offsetX * t.sizeRatio * i,
          t.offsetY * t.sizeRatio * i,
          512,
          1,
          t.markerPlacement,
          t.effects,
          !0,
          n,
          a,
          t.backgroundColor ? W(t.backgroundColor) : void 0,
          t.borderLineColor ? W(t.borderLineColor) : void 0,
          t.borderLineWidth
        ),
        [, h] = ke(t.text);
      return (
        l.bindTextInfo(e, h),
        (l._vertexBoundsScale = t.maxVVSize ? t.maxVVSize / o : 1),
        l
      );
    }
  };
const Ne = mt.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"),
  ki = (function (s) {
    const t = new Map();
    return (e) => (t.has(e) || t.set(e, s(e)), t.get(e));
  })((s) => {
    let t = 0;
    if (s === 0) return 1 / 0;
    for (; !(s % 2); ) t++, (s /= 2);
    return t;
  }),
  Wt = (s) => Math.floor(127 * s + 127),
  et = (s) => Math.floor(10 * s),
  $ = (s) => Math.round(s * (254 / 360));
let Xe = class fr extends ee {
  constructor(t, e, r, i) {
    var c, d, _;
    super(
      t,
      (c = r.font) == null ? void 0 : c.size,
      r.haloSize || 0,
      (d = r.font) == null ? void 0 : d.size,
      (r.color && D(r.color)) || 0,
      (r.haloColor && D(r.haloColor)) || 0,
      r.horizontalAlignment,
      r.verticalAlignment,
      hi(e.labelPlacement) ? N.MAP : N.SCREEN,
      (_ = r.font) == null ? void 0 : _.decoration,
      !1,
      r.angle || 0,
      r.xoffset,
      r.yoffset,
      r.lineWidth,
      r.lineHeight,
      null,
      null,
      !1,
      null,
      null,
      r.backgroundColor && D(r.backgroundColor),
      r.borderLineColor && D(r.borderLineColor),
      r.borderLineSize
    ),
      (this._outLineLabelAngle = 0),
      (this._refPlacementPadding = 0),
      (this._refPlacementDirX = 0),
      (this._refPlacementDirY = 0),
      (this._refOffsetX = 0),
      (this._refOffsetY = 0),
      (this._zoomLevel = 0),
      (this.geometryType = T.LABEL),
      (this._allowOverrun = e.allowOverrun ?? !1),
      (this._repeatLabel = e.repeatLabel ?? !0),
      (this._labelPosition = e.labelPosition ?? "curved");
    const o = (function (f, m) {
        const p = (!!f.minScale && m.scaleToZoom(f.minScale)) || 0;
        return Se(p, 0, 25.5);
      })(e, i),
      n = (function (f, m) {
        const p = (!!f.maxScale && m.scaleToZoom(f.maxScale)) || 255;
        return Se(p, 0, 25.5);
      })(e, i),
      a = e.labelPlacement,
      [l, h] = ci(a);
    (this._xAlignD = l),
      (this._yAlignD = h),
      (this._minZoom = o),
      (this._maxZoom = n),
      (this._minBackgroundZoom = o),
      (this._maxBackgroundZoom = n),
      (this._refPlacementPadding = g(r.haloSize) + Hr),
      (this._repeatLabelDistance = e.repeatLabelDistance
        ? g(e.repeatLabelDistance)
        : 128);
    const u = Ut.load(t);
    (u.sdf = !0), (this._materialKey = u.data);
  }
  static fromLabelClass(t, e) {
    if (t.labelPlacement === "esriServerLinePlacementCenterAlong") {
      const r = t.symbol;
      (r.xoffset = 0),
        (r.yoffset = 0),
        (r.angle = 0),
        (r.font.decoration = "none");
    }
    return new fr(t.materialKey, t, t.symbol, e);
  }
  get _shapedBox() {
    return ce(this._shapingInfo).bounds;
  }
  setZoomLevel(t) {
    this._zoomLevel = t;
  }
  bindReferenceTemplate(t) {
    let e = ui(this._xAlignD),
      r = _i(this._yAlignD);
    if (((this._refOffsetX = 0), (this._refOffsetY = 0), G(t)))
      return void (this._refSymbolAndPlacementOffset = I(0, 0, Wt(e), Wt(r)));
    if (t.boundsType === "circle" && (e || r)) {
      const n = Math.sqrt(e * e + r * r);
      (e /= n), (r /= n);
    }
    const i = Math.max(t.height, t.width),
      o = 4 * this._refPlacementPadding;
    (this._refSymbolAndPlacementOffset = I(o, i, Wt(e), Wt(r))),
      (this._referenceSize = i),
      (this._refPlacementDirX = e),
      (this._refPlacementDirY = r),
      (this._refOffsetX = t.xOffset),
      (this._refOffsetY = t.yOffset);
  }
  _write(t, e) {
    if (G(this._shapingInfo)) return;
    const r = this._shapingInfo,
      i = e.getDisplayId(),
      o =
        e.geometryType === "esriGeometryPolygon"
          ? e.readLegacyCentroid()
          : e.readLegacyGeometry();
    if (o)
      switch (
        ((this._current = {
          out: t,
          inId: i,
          inShaping: r,
          zoomLevel: this._zoomLevel,
        }),
        e.geometryType === "esriGeometryPolyline" &&
          this._labelPosition === "curved" &&
          (this._borderLineColor || this._backgroundColor) &&
          Ne.warnOnce(
            "TextSymbol properties 'borderLineColor', 'borderLineSize', and 'backgroundColor' are not supported in curved labels"
          ),
        e.geometryType)
      ) {
        case "esriGeometryPolyline":
          this._placeLineLabels(o);
          break;
        case "esriGeometryPoint":
        case "esriGeometryPolygon":
          this._placePointLabels(o);
          break;
        default:
          ((n, a = "mapview-labeling") => {
            Ne.error(new nt(a, n));
          })(`Geometry of type ${e.geometryType} is not supported`);
      }
  }
  _isVisible(t, e) {
    const r = et(this._current.zoomLevel);
    return et(t) <= r && r <= et(e);
  }
  _placePointLabels(t) {
    const { out: e, inId: r, inShaping: i } = this._current;
    this._writeGlyphs(e, r, t, i);
  }
  _placeLineLabels(t) {
    const e = (function (o, n) {
        const a = n;
        for (let l = 0; l < o.length; l++) {
          let h = o[l];
          const u = [];
          u.push(h[0]);
          for (let d = 1; d < h.length; d++) {
            let [_, f] = u[d - 1];
            (_ += h[d][0]), (f += h[d][1]), u.push([_, f]);
          }
          Ti(u, a);
          const c = [];
          c.push(u[0]);
          for (let d = 1; d < u.length; d++) {
            const [_, f] = u[d - 1],
              [m, p] = u[d],
              x = Math.round(m - _),
              y = Math.round(p - f);
            c.push([x, y]);
          }
          (o[l] = c), (h = c);
        }
        return o;
      })(t.paths, this._current.inShaping.bounds.width),
      r = this._placeSubdivGlyphs.bind(this),
      i = (this._shapedBox.width + this._repeatLabelDistance) / 2;
    for (const o of e) Pi(o, i, r, this._repeatLabel);
  }
  _placeSubdivGlyphs(t, e, r, i) {
    const o = ki(e),
      n = this._shapedBox.width / 2,
      a = Math.sqrt(this._repeatLabelDistance) / 2,
      l = Math.min(r, i - r),
      h = this._current.inShaping.isMultiline ? 25 : Math.log2(l / (a + n / 2)),
      u = e === 0 ? h : Math.min(o, h),
      c = Math.max(this._minZoom, this._current.zoomLevel + 1 - u),
      d = this._current.zoomLevel - c,
      _ = (this._shapedBox.width / 2) * 2 ** d;
    this._current.inShaping.isMultiline
      ? e === 0 && this._placeStraight(t, c)
      : this._allowOverrun && d < 0
      ? this._placeStraightAlong(t, this._minZoom)
      : this._labelPosition === "parallel"
      ? this._placeStraightAlong(t, c)
      : this._labelPosition === "curved" && this._placeCurved(t, c, _);
  }
  _placeStraight(t, e) {
    const { out: r, inId: i, inShaping: o } = this._current,
      n = Math.ceil((t.angle * (180 / Math.PI)) % 360),
      a = Math.ceil((t.angle * (180 / Math.PI) + 180) % 360);
    (this._outLineLabelAngle = $(n)),
      this._writeGlyphs(r, i, t, o, e),
      (this._outLineLabelAngle = $(a)),
      this._writeGlyphs(r, i, t, o, e);
  }
  _placeCurved(t, e, r) {
    const { out: i, inId: o } = this._current;
    i.metricStart(o, e, t.x, t.y, 0, 0, 0, 0);
    const n = t.clone(),
      a = (t.angle * (180 / Math.PI)) % 360,
      l = (t.angle * (180 / Math.PI) + 180) % 360;
    (this._outLineLabelAngle = $(a)),
      this._placeFirst(n, e, 1),
      this._placeBack(t, n, e, r, 1),
      this._placeForward(t, n, e, r, 1),
      (this._outLineLabelAngle = $(l)),
      this._placeFirst(n, e, 0),
      this._placeBack(t, n, e, r, 0),
      this._placeForward(t, n, e, r, 0),
      i.metricEnd();
  }
  _placeStraightAlong(t, e) {
    const { out: r, inId: i, inShaping: o } = this._current;
    r.metricStart(i, e, t.x, t.y, 0, 0, 0, 0);
    const n = t.clone(),
      a = (t.angle * (180 / Math.PI)) % 360,
      l = (t.angle * (180 / Math.PI) + 180) % 360,
      h =
        o.glyphs.length > 0 && (this._borderLineColor || this._backgroundColor);
    if (
      ((this._maxBackgroundZoom = 25),
      (this._minBackgroundZoom = Math.max(e, 0)),
      h)
    ) {
      const u = Ut.load(this._materialKey);
      u.textureBinding = o.glyphs[0].textureBinding;
      const c = Ir(At(), -t.angle),
        [d, _] = o.shapeBackground(c);
      (this._outLineLabelAngle = $(a)),
        r.recordStart(i, u.data, this.geometryType, !0),
        this._writeBackgroundGeometry(r, i, t, d, _),
        r.recordEnd(),
        (this._outLineLabelAngle = $(l)),
        r.recordStart(i, u.data, this.geometryType, !0),
        this._writeBackgroundGeometry(r, i, t, d, _),
        r.recordEnd();
    }
    (this._outLineLabelAngle = $(a)),
      this._placeFirst(n, e, 1, !0),
      (this._outLineLabelAngle = $(l)),
      this._placeFirst(n, e, 0, !0),
      r.metricEnd();
  }
  _placeBack(t, e, r, i, o) {
    const n = t.clone();
    let a = t.backwardLength + 0;
    for (; n.prev() && !(a >= i); )
      this._placeOnSegment(n, e, a, r, -1, o), (a += n.length + 0);
  }
  _placeForward(t, e, r, i, o) {
    const n = t.clone();
    let a = t.remainingLength + 0;
    for (; n.next() && !(a >= i); )
      this._placeOnSegment(n, e, a, r, 1, o), (a += n.length + 0);
  }
  _placeFirst(t, e, r, i = !1) {
    const o = t,
      n = this._current.inShaping,
      a = n.glyphs,
      l = this._current.zoomLevel,
      { out: h, inId: u } = this._current;
    for (const c of a) {
      const d = c.x > n.bounds.x ? r : 1 - r,
        _ = d * t.remainingLength + (1 - d) * t.backwardLength,
        f = Math.abs(c.x + c.width / 2 - n.bounds.x),
        m = Math.max(0, l + Math.log2(f / (_ + 0))),
        p = Math.max(e, i ? 0 : m);
      if (
        ((c.maxZoom = 25),
        (c.angle = t.angle + (1 - r) * Math.PI),
        (c.minZoom = p),
        this._writeGlyph(h, u, o.x, o.y, c),
        r && this._isVisible(c.minZoom, c.maxZoom))
      ) {
        const x = c.bounds;
        h.metricBoxWrite(x.center[0], x.center[1], x.width, x.height);
      }
    }
  }
  _placeOnSegment(t, e, r, i, o, n) {
    const a = this._current.inShaping.glyphs,
      { out: l, inId: h } = this._current,
      u = this._current.inShaping,
      c = this._current.zoomLevel,
      d = t.dx / t.length,
      _ = t.dy / t.length,
      f = { x: t.x + r * -o * d, y: t.y + r * -o * _ };
    for (const m of a) {
      const p = m.x > u.bounds.x ? n : 1 - n;
      if (!((p && o === 1) || (!p && o === -1))) continue;
      const x = Math.abs(m.x + m.width / 2 - u.bounds.x),
        y = Math.max(0, c + Math.log2(x / r) - 0.1),
        v = Math.max(i, c + Math.log2(x / (r + t.length + 0)));
      if (
        y !== 0 &&
        ((m.angle = t.angle + (1 - n) * Math.PI),
        (m.minZoom = v),
        (m.maxZoom = y),
        this._writeGlyph(l, h, f.x, f.y, m),
        n && this._isVisible(m.minZoom, m.maxZoom))
      ) {
        const w = m.bounds,
          L = t.x - e.x,
          b = t.y - e.y;
        l.metricBoxWrite(w.center[0] + L, w.center[1] + b, w.width, w.height);
      }
    }
  }
  _writeGlyphs(t, e, r, i, o = this._minZoom) {
    if (r.x < 0 || r.x >= 512 || r.y < 0 || r.y >= 512) return;
    if (
      i.glyphs.length > 0 &&
      (this._borderLineColor || this._backgroundColor)
    ) {
      const c = Ut.load(this._materialKey);
      (c.textureBinding = i.glyphs[0].textureBinding),
        t.recordStart(e, c.data, this.geometryType, !0),
        this._writeBackgroundGeometry(t, e, r, i.bounds, i.background),
        t.recordEnd();
    }
    const n = r.x + this._refOffsetX,
      a = r.y - this._refOffsetY;
    for (const c of i.glyphs)
      (c.minZoom = o),
        (c.maxZoom = this._maxZoom),
        this._writeGlyph(t, e, n, a, c);
    const l = this._refPlacementDirX,
      h = this._refPlacementDirY,
      u = i.boundsT;
    t.metricStart(e, o, n, a, l, h, this._referenceSize, this._materialKey),
      t.metricBoxWrite(u.center[0], u.center[1], u.width, u.height),
      t.metricEnd();
  }
  _writeVertexCommon(t, e, r, i) {
    const o = this._color,
      n = this._haloColor,
      a = I(0, 0, this._size, this._haloSize),
      l = Math.max(i.minZoom, this._minZoom),
      h = Math.min(i.maxZoom, this._maxZoom),
      u = I(et(l), et(h), this._outLineLabelAngle, 0);
    t.vertexWrite(r),
      t.vertexWrite(e),
      t.vertexWrite(o),
      t.vertexWrite(n),
      t.vertexWrite(a),
      t.vertexWrite(this._refSymbolAndPlacementOffset),
      t.vertexWrite(u);
  }
  _writeBackgroundVertex(t, e, r, i, o, n) {
    const a = I(0, 0, this._size, this._haloSize),
      l = I(0, 0, 0, 0),
      h = I(
        et(this._minBackgroundZoom),
        et(this._maxBackgroundZoom),
        this._outLineLabelAngle,
        1
      );
    t.vertexWrite(r),
      t.vertexWrite(e),
      t.vertexWrite(i),
      t.vertexWrite(l),
      t.vertexWrite(a),
      t.vertexWrite(this._refSymbolAndPlacementOffset),
      t.vertexWrite(h),
      t.vertexWrite(o),
      t.vertexWrite(n),
      t.vertexEnd();
  }
};
const Ue = 3.14159265359 / 180,
  mr = (s) =>
    class extends s {
      constructor(...t) {
        super(...t),
          (this.angle = 0),
          (this.xOffset = 0),
          (this.yOffset = 0),
          (this.width = 0),
          (this.height = 0),
          (this.boundsType = "square"),
          (this._anchorX = 0),
          (this._anchorY = 0),
          (this._computedWidth = 0),
          (this._computedHeight = 0),
          (this._allowBorrowing = !0),
          (this._vertexBoundsScaleX = 1),
          (this._vertexBoundsScaleY = 1),
          (this._offsets = {
            xUpperLeft: 0,
            yUpperLeft: 0,
            xUpperRight: 0,
            yUpperRight: 0,
            xBottomLeft: 0,
            yBottomLeft: 0,
            xBottomRight: 0,
            yBottomRight: 0,
          }),
          (this.geometryType = T.MARKER);
      }
      _write(t, e, r, i) {
        const o = e.getDisplayId();
        t.recordStart(o, this._materialKey, this.geometryType, !0),
          this._writeGeometry(t, e, o, r, i),
          t.recordEnd();
      }
      _writeGeometry(t, e, r, i, o) {
        if (R(this._markerPlacement))
          return this._writePlacedMarkers(t, e, i, o);
        if (
          ((this._allowBorrowing = !0),
          !o && e.geometryType === "esriGeometryPoint")
        ) {
          const a = e.getX(),
            l = e.getY();
          return !t.hasAggregates &&
            t.hasPixelBufferEnabled &&
            (a < 0 || a >= 513 || l < 0 || l >= 513)
            ? void 0
            : this._writeVertices(t, r, this._getPos(a, l), a, l);
        }
        const n = o
          ? le(he(o), 2)
          : e.geometryType === "esriGeometryPolygon"
          ? e.readCentroid()
          : e.readGeometryForDisplay();
        if (!G(n)) {
          if (n.isPoint) {
            const [a, l] = n.coords;
            return !t.hasAggregates &&
              t.hasPixelBufferEnabled &&
              (a < 0 || a >= 512 || l < 0 || l >= 512)
              ? void 0
              : this._writeVertices(t, r, this._getPos(a, l), a, l);
          }
          n.forEachVertex((a, l) => {
            const h = 2 * ot;
            a < -h ||
              a >= h ||
              l < -h ||
              l >= h ||
              this._writeVertices(t, r, this._getPos(a, l), a, l);
          });
        }
      }
      _writePlacedMarkers(t, e, r, i) {
        const o = i ?? e.readLegacyGeometryForDisplay(),
          n = _r.getPlacement(
            o,
            ce(this._markerPlacement),
            g(1),
            t.tileKey,
            r.geometryEngine
          );
        if (!n) return;
        this._allowBorrowing = e.geometryType !== "esriGeometryPolygon";
        const a = e.getDisplayId(),
          l = ue(),
          h = At();
        let u = n.next();
        for (; u != null; ) {
          const c = u.tx,
            d = -u.ty;
          c >= -128 &&
            c <= 640 &&
            d >= -128 &&
            d <= 640 &&
            (this._applyTransformation(h, l, -u.getAngle() / Ue),
            this._writeVertices(t, a, this._getPos(c, d), c, d)),
            (u = n.next());
        }
      }
      _writeVertices(t, e, r, i, o) {
        const n = _e.load(this._materialKey);
        return n.symbologyType === Vt.HEATMAP
          ? this._writeHeatmapVertices(t, e, r)
          : this._writeMarkerVertices(t, e, n, r, i, o);
      }
      _writeMarkerVertices(t, e, r, i, o, n) {
        const a = r.vvRotation,
          l = t.vertexCount();
        let h = this._computedWidth * this._vertexBoundsScaleX,
          u = this._computedHeight * this._vertexBoundsScaleY;
        if (this.angle) {
          const c = Math.max(h, u);
          (h = c), (u = c);
        }
        if (a) {
          const c = Math.max(this.xOffset, this.yOffset);
          (h += c), (u += c);
        }
        this._allowBorrowing &&
          t.vertexBounds(o + this.xOffset, n - this.yOffset, h, u),
          t.vertexWrite(i),
          t.vertexWrite(this._offsetUpperLeft),
          t.vertexWrite(this._texUpperLeft),
          t.vertexWrite(this._bitestAndDistRatio),
          t.vertexWrite(e),
          t.vertexWrite(this._fillColor),
          t.vertexWrite(this._outlineColor),
          t.vertexWrite(this._sizeOutlineWidth),
          t.vertexWrite(this._minMaxZoom),
          t.vertexEnd(),
          t.vertexWrite(i),
          t.vertexWrite(this._offsetUpperRight),
          t.vertexWrite(this._texUpperRight),
          t.vertexWrite(this._bitestAndDistRatio),
          t.vertexWrite(e),
          t.vertexWrite(this._fillColor),
          t.vertexWrite(this._outlineColor),
          t.vertexWrite(this._sizeOutlineWidth),
          t.vertexWrite(this._minMaxZoom),
          t.vertexEnd(),
          t.vertexWrite(i),
          t.vertexWrite(this._offsetBottomLeft),
          t.vertexWrite(this._texBottomLeft),
          t.vertexWrite(this._bitestAndDistRatio),
          t.vertexWrite(e),
          t.vertexWrite(this._fillColor),
          t.vertexWrite(this._outlineColor),
          t.vertexWrite(this._sizeOutlineWidth),
          t.vertexWrite(this._minMaxZoom),
          t.vertexEnd(),
          t.vertexWrite(i),
          t.vertexWrite(this._offsetBottomRight),
          t.vertexWrite(this._texBottomRight),
          t.vertexWrite(this._bitestAndDistRatio),
          t.vertexWrite(e),
          t.vertexWrite(this._fillColor),
          t.vertexWrite(this._outlineColor),
          t.vertexWrite(this._sizeOutlineWidth),
          t.vertexWrite(this._minMaxZoom),
          t.vertexEnd(),
          this._writeIndices(t, l);
      }
      _writeHeatmapVertices(t, e, r) {
        const i = t.vertexCount();
        t.vertexWrite(r),
          t.vertexWrite(this._offsetUpperLeft),
          t.vertexWrite(e),
          t.vertexEnd(),
          t.vertexWrite(r),
          t.vertexWrite(this._offsetUpperRight),
          t.vertexWrite(e),
          t.vertexEnd(),
          t.vertexWrite(r),
          t.vertexWrite(this._offsetBottomLeft),
          t.vertexWrite(e),
          t.vertexEnd(),
          t.vertexWrite(r),
          t.vertexWrite(this._offsetBottomRight),
          t.vertexWrite(e),
          t.vertexEnd(),
          this._writeIndices(t, i);
      }
      _writeIndices(t, e) {
        t.indexWrite(e + 0),
          t.indexWrite(e + 1),
          t.indexWrite(e + 2),
          t.indexWrite(e + 1),
          t.indexWrite(e + 3),
          t.indexWrite(e + 2);
      }
      _applyTransformation(t, e, r = 0) {
        Cr(t, kr(this.xOffset, -this.yOffset)),
          this.angle != null &&
            this.angle + r !== 0 &&
            Er(t, t, Ue * (this.angle + r));
        const i = this._computedWidth,
          o = this._computedHeight,
          n = -(0.5 + this._anchorX) * i,
          a = -(0.5 - this._anchorY) * o;
        St(e, n, a),
          Lt(e, e, t),
          (this._offsetUpperLeft = M(16 * e[0], 16 * e[1])),
          (this._offsets.xUpperLeft = e[0]),
          (this._offsets.yUpperLeft = e[1]),
          St(e, n + i, a),
          Lt(e, e, t),
          (this._offsetUpperRight = M(16 * e[0], 16 * e[1])),
          (this._offsets.xUpperRight = e[0]),
          (this._offsets.yUpperRight = e[1]),
          St(e, n, a + o),
          Lt(e, e, t),
          (this._offsetBottomLeft = M(16 * e[0], 16 * e[1])),
          (this._offsets.xBottomLeft = e[0]),
          (this._offsets.yBottomLeft = e[1]),
          St(e, n + i, a + o),
          Lt(e, e, t),
          (this._offsetBottomRight = M(16 * e[0], 16 * e[1])),
          (this._offsets.xBottomRight = e[0]),
          (this._offsets.yBottomRight = e[1]);
      }
      _getPos(t, e) {
        return M(Math.round(8 * t), Math.round(8 * e));
      }
    };
let pt = class xt extends mr(bt) {
  constructor(
    t,
    e,
    r,
    i,
    o,
    n,
    a,
    l,
    h,
    u,
    c,
    d,
    _,
    f,
    m,
    p,
    x,
    y,
    v,
    w,
    L,
    b,
    P
  ) {
    super(),
      (this.angle = i),
      (this.height = a),
      (this.width = n),
      (this.xOffset = e * v),
      (this.yOffset = r * v),
      (this._markerPlacement = w),
      (this._effects = L),
      (this._anchorX = p),
      (this._anchorY = x),
      (this._minMaxZoom = M(Math.round(b * E), Math.round(P * E)));
    const z =
        (f === N.MAP ? Yr : qr) | (c ? st : 0) | (_ ? jr : 0) | (d ? Qr : 0),
      B = m && m.sdf,
      Z = _e.load(t);
    (Z.sdf = B),
      (Z.pattern = !0),
      (Z.textureBinding = m.textureBinding),
      (this._materialKey = Z.data),
      (this._fillColor = o),
      (this._outlineColor = h),
      (this._sizeOutlineWidth = I(
        Math.round(Math.min(Math.sqrt(128 * n), 255)),
        Math.round(Math.min(Math.sqrt(128 * a), 255)),
        Math.round(Math.min(Math.sqrt(128 * u), 255)),
        Math.round(Math.min(Math.sqrt(128 * l), 255))
      ));
    const Q = m.rect.x + C,
      X = m.rect.y + C,
      at = Q + m.width,
      lt = X + m.height;
    (this._offsets.xUpperLeft = Q),
      (this._offsets.yUpperLeft = X),
      (this._offsets.xUpperRight = at),
      (this._offsets.yUpperRight = X),
      (this._offsets.xBottomLeft = Q),
      (this._offsets.yBottomLeft = lt),
      (this._offsets.xBottomRight = at),
      (this._offsets.yBottomRight = lt),
      Z.symbologyType === Vt.PIE_CHART
        ? ((this._texUpperLeft = M(0, 1)),
          (this._texUpperRight = M(1, 1)),
          (this._texBottomLeft = M(0, 0)),
          (this._texBottomRight = M(1, 0)))
        : ((this._texUpperLeft = M(Q, X)),
          (this._texUpperRight = M(at, X)),
          (this._texBottomLeft = M(Q, lt)),
          (this._texBottomRight = M(at, lt))),
      (n *= y),
      (a *= y),
      (n *= v),
      (a *= v);
    const Sr = Math.round(64 * y);
    (this._bitestAndDistRatio = M(z, Sr)),
      (this._computedWidth = n),
      (this._computedHeight = a);
    const Lr = ue(),
      Pr = At();
    this._applyTransformation(Pr, Lr);
  }
  static fromCIMMarker(t, e, r) {
    const i = (e && e.width) || 1,
      o = (e && e.height) || 1,
      n = t.size,
      a = (i / o) * t.scaleX,
      l = t.scaleSymbolsProportionally && t.frameHeight ? n / t.frameHeight : 1,
      h = W(t.color),
      u = W(t.outlineColor),
      c = g(n),
      d = c * a,
      _ = g(t.offsetX || 0),
      f = g(t.offsetY || 0),
      m = g(t.outlineWidth || 0) * l,
      p = t.alignment || N.SCREEN,
      x = g(t.referenceSize),
      [y, v] = tt(t.scaleInfo, r);
    let w = t.rotation || 0;
    t.rotateClockwise || (w = -w);
    let L = 0,
      b = 0;
    const P = t.anchorPoint;
    P &&
      (t.isAbsoluteAnchorPoint
        ? n && ((L = P.x / (n * a)), (b = P.y / n))
        : ((L = P.x), (b = P.y)));
    const z = new xt(
      t.materialKey,
      _,
      f,
      w,
      h,
      d,
      c,
      x,
      u,
      m,
      t.colorLocked,
      t.scaleSymbolsProportionally,
      !1,
      p,
      e,
      L,
      b,
      t.sizeRatio,
      Ct(t.scaleFactor, 1),
      t.markerPlacement,
      t.effects,
      y,
      v
    );
    return (
      (z._vertexBoundsScaleX = t.maxVVSize ? t.maxVVSize / d : 1),
      (z._vertexBoundsScaleY = t.maxVVSize ? t.maxVVSize / c : 1),
      z
    );
  }
  static fromPictureMarker(t, e) {
    const r = Math.round(g(t.width)),
      i = Math.round(g(t.height)),
      o = tr,
      n = Math.round(g(t.xoffset || 0)),
      a = Math.round(g(t.yoffset || 0)),
      l = new xt(
        t.materialKey,
        n,
        a,
        t.angle,
        o,
        r,
        i,
        i,
        0,
        0,
        !1,
        !1,
        !1,
        N.SCREEN,
        e,
        0,
        0,
        1,
        1,
        null,
        null,
        U,
        H
      );
    return (
      (l._vertexBoundsScaleX = t.maxVVSize ? t.maxVVSize / t.width : 1),
      (l._vertexBoundsScaleY = t.maxVVSize ? t.maxVVSize / t.height : 1),
      l
    );
  }
  static fromSimpleMarker(t, e) {
    const r = D(t.color),
      i = Math.round(g(t.size)),
      o = i,
      n = Math.round(g(t.xoffset || 0)),
      a = Math.round(g(t.yoffset || 0)),
      l = t.style,
      h = t.outline,
      u = 0 | ((h == null ? void 0 : h.color) && D(h.color)),
      c = 0 | ((h == null ? void 0 : h.width) && Math.round(g(h.width))),
      d = new xt(
        t.materialKey,
        n,
        a,
        t.angle,
        r,
        i,
        o,
        o,
        u,
        c,
        !1,
        !1,
        l === "esriSMSCross" || l === "esriSMSX",
        N.SCREEN,
        e,
        0,
        0,
        126 / 64,
        1,
        null,
        null,
        U,
        H
      );
    return (
      (d.boundsType = l === "esriSMSCircle" ? "circle" : "square"),
      (d._vertexBoundsScaleX = t.maxVVSize ? t.maxVVSize / t.size : 1),
      (d._vertexBoundsScaleY = t.maxVVSize ? t.maxVVSize / t.size : 1),
      d
    );
  }
  static fromLineSymbolMarker(t, e) {
    const r = D(t.color),
      i = Math.round(g(6 * t.lineWidth)),
      o = i,
      n = t.style === "cross" || t.style === "x";
    let a;
    switch (t.placement) {
      case "begin-end":
        a = Pt.Both;
        break;
      case "begin":
        a = Pt.JustBegin;
        break;
      case "end":
        a = Pt.JustEnd;
        break;
      default:
        a = Pt.None;
    }
    const l = {
        type: "CIMMarkerPlacementAtExtremities",
        angleToLine: !0,
        offset: 0,
        extremityPlacement: a,
        offsetAlongLine: 0,
      },
      h = new xt(
        t.materialKey,
        0,
        0,
        0,
        r,
        i,
        o,
        o / 6,
        r,
        n ? Math.round(g(t.lineWidth)) : 0,
        !1,
        !1,
        n,
        N.MAP,
        e,
        0,
        0,
        126 / 64,
        1,
        l,
        null,
        U,
        H
      );
    return (h.boundsType = t.style === "circle" ? "circle" : "square"), h;
  }
};
function Ei(s, t, e, r, i, o, n) {
  ne = 0;
  const a = (r - e) * o,
    l = i && i.length,
    h = l ? (i[0] - e) * o : a;
  let u,
    c,
    d,
    _,
    f,
    m = He(t, e, r, 0, h, o, !0);
  if (m && m.next !== m.prev) {
    if (
      (l &&
        (m = (function (p, x, y, v, w, L) {
          const b = [];
          for (let P = 0, z = v.length; P < z; P++) {
            const B = He(
              p,
              x,
              y,
              v[P] * L,
              P < z - 1 ? v[P + 1] * L : y * L,
              L,
              !1
            );
            B === B.next && (B.steiner = !0), b.push(Ai(B));
          }
          b.sort(Vi);
          for (const P of b) w = Fi(P, w);
          return w;
        })(t, e, r, i, m, o)),
      a > 80 * o)
    ) {
      (u = d = t[0 + e * o]), (c = _ = t[1 + e * o]);
      for (let p = o; p < h; p += o) {
        const x = t[p + e * o],
          y = t[p + 1 + e * o];
        (u = Math.min(u, x)),
          (c = Math.min(c, y)),
          (d = Math.max(d, x)),
          (_ = Math.max(_, y));
      }
      (f = Math.max(d - u, _ - c)), (f = f !== 0 ? 1 / f : 0);
    }
    Mt(m, s, o, u, c, f, n, 0);
  }
}
function He(s, t, e, r, i, o, n) {
  let a;
  if (
    n ===
    (function (l, h, u, c, d, _) {
      let f = 0;
      for (let m = c, p = d - _; m < d; m += _)
        (f +=
          (l[p + h * _] - l[m + h * _]) *
          (l[m + 1 + h * _] + l[p + 1 + h * _])),
          (p = m);
      return f;
    })(s, t, 0, r, i, o) >
      0
  )
    for (let l = r; l < i; l += o)
      a = Ye(l + t * o, s[l + t * o], s[l + 1 + t * o], a);
  else
    for (let l = i - o; l >= r; l -= o)
      a = Ye(l + t * o, s[l + t * o], s[l + 1 + t * o], a);
  return a && it(a, a.next) && (vt(a), (a = a.next)), a;
}
function gt(s, t = s) {
  if (!s) return s;
  let e,
    r = s;
  do
    if (((e = !1), r.steiner || (!it(r, r.next) && k(r.prev, r, r.next) !== 0)))
      r = r.next;
    else {
      if ((vt(r), (r = t = r.prev), r === r.next)) break;
      e = !0;
    }
  while (e || r !== t);
  return t;
}
function Mt(s, t, e, r, i, o, n, a) {
  if (!s) return;
  !a && o && (s = pr(s, r, i, o));
  let l = s;
  for (; s.prev !== s.next; ) {
    const h = s.prev,
      u = s.next;
    if (o ? Bi(s, r, i, o) : Ri(s))
      t.push(h.index / e + n),
        t.push(s.index / e + n),
        t.push(u.index / e + n),
        vt(s),
        (s = u.next),
        (l = u.next);
    else if ((s = u) === l) {
      a
        ? a === 1
          ? Mt((s = Di(s, t, e, n)), t, e, r, i, o, n, 2)
          : a === 2 && Oi(s, t, e, r, i, o, n)
        : Mt(gt(s), t, e, r, i, o, n, 1);
      break;
    }
  }
}
function Ri(s) {
  const t = s.prev,
    e = s,
    r = s.next;
  if (k(t, e, r) >= 0) return !1;
  let i = s.next.next;
  const o = i;
  let n = 0;
  for (; i !== s.prev && (n === 0 || i !== o); ) {
    if (
      (n++,
      _t(t.x, t.y, e.x, e.y, r.x, r.y, i.x, i.y) && k(i.prev, i, i.next) >= 0)
    )
      return !1;
    i = i.next;
  }
  return !0;
}
function Bi(s, t, e, r) {
  const i = s.prev,
    o = s,
    n = s.next;
  if (k(i, o, n) >= 0) return !1;
  const a = i.x < o.x ? (i.x < n.x ? i.x : n.x) : o.x < n.x ? o.x : n.x,
    l = i.y < o.y ? (i.y < n.y ? i.y : n.y) : o.y < n.y ? o.y : n.y,
    h = i.x > o.x ? (i.x > n.x ? i.x : n.x) : o.x > n.x ? o.x : n.x,
    u = i.y > o.y ? (i.y > n.y ? i.y : n.y) : o.y > n.y ? o.y : n.y,
    c = ie(a, l, t, e, r),
    d = ie(h, u, t, e, r);
  let _ = s.prevZ,
    f = s.nextZ;
  for (; _ && _.z >= c && f && f.z <= d; ) {
    if (
      (_ !== s.prev &&
        _ !== s.next &&
        _t(i.x, i.y, o.x, o.y, n.x, n.y, _.x, _.y) &&
        k(_.prev, _, _.next) >= 0) ||
      ((_ = _.prevZ),
      f !== s.prev &&
        f !== s.next &&
        _t(i.x, i.y, o.x, o.y, n.x, n.y, f.x, f.y) &&
        k(f.prev, f, f.next) >= 0)
    )
      return !1;
    f = f.nextZ;
  }
  for (; _ && _.z >= c; ) {
    if (
      _ !== s.prev &&
      _ !== s.next &&
      _t(i.x, i.y, o.x, o.y, n.x, n.y, _.x, _.y) &&
      k(_.prev, _, _.next) >= 0
    )
      return !1;
    _ = _.prevZ;
  }
  for (; f && f.z <= d; ) {
    if (
      f !== s.prev &&
      f !== s.next &&
      _t(i.x, i.y, o.x, o.y, n.x, n.y, f.x, f.y) &&
      k(f.prev, f, f.next) >= 0
    )
      return !1;
    f = f.nextZ;
  }
  return !0;
}
function Ye(s, t, e, r) {
  const i = ft.create(s, t, e);
  return (
    r
      ? ((i.next = r.next), (i.prev = r), (r.next.prev = i), (r.next = i))
      : ((i.prev = i), (i.next = i)),
    i
  );
}
function vt(s) {
  (s.next.prev = s.prev),
    (s.prev.next = s.next),
    s.prevZ && (s.prevZ.nextZ = s.nextZ),
    s.nextZ && (s.nextZ.prevZ = s.prevZ);
}
function Ai(s) {
  let t = s,
    e = s;
  do (t.x < e.x || (t.x === e.x && t.y < e.y)) && (e = t), (t = t.next);
  while (t !== s);
  return e;
}
function Fi(s, t) {
  const e = (function (i, o) {
    let n = o;
    const a = i.x,
      l = i.y;
    let h,
      u = -1 / 0;
    do {
      if (l <= n.y && l >= n.next.y && n.next.y !== n.y) {
        const p = n.x + ((l - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
        if (p <= a && p > u) {
          if (((u = p), p === a)) {
            if (l === n.y) return n;
            if (l === n.next.y) return n.next;
          }
          h = n.x < n.next.x ? n : n.next;
        }
      }
      n = n.next;
    } while (n !== o);
    if (!h) return null;
    if (a === u) return h.prev;
    const c = h,
      d = h.x,
      _ = h.y;
    let f,
      m = 1 / 0;
    for (n = h.next; n !== c; )
      a >= n.x &&
        n.x >= d &&
        a !== n.x &&
        _t(l < _ ? a : u, l, d, _, l < _ ? u : a, l, n.x, n.y) &&
        ((f = Math.abs(l - n.y) / (a - n.x)),
        (f < m || (f === m && n.x > h.x)) && wt(n, i) && ((h = n), (m = f))),
        (n = n.next);
    return h;
  })(s, t);
  if (!e) return t;
  const r = yr(e, s);
  return gt(r, r.next), gt(e, e.next);
}
function pr(s, t, e, r) {
  let i;
  for (; i !== s; i = i.next) {
    if (
      ((i = i || s),
      i.z === null && (i.z = ie(i.x, i.y, t, e, r)),
      i.prev.next !== i || i.next.prev !== i)
    )
      return (i.prev.next = i), (i.next.prev = i), pr(s, t, e, r);
    (i.prevZ = i.prev), (i.nextZ = i.next);
  }
  return (
    (s.prevZ.nextZ = null),
    (s.prevZ = null),
    (function (o) {
      let n,
        a = 1;
      for (;;) {
        let l,
          h = o;
        (o = null), (n = null);
        let u = 0;
        for (; h; ) {
          u++, (l = h);
          let c = 0;
          for (; c < a && l; c++) l = l.nextZ;
          let d = a;
          for (; c > 0 || (d > 0 && l); ) {
            let _;
            c === 0
              ? ((_ = l), (l = l.nextZ), d--)
              : d !== 0 && l
              ? h.z <= l.z
                ? ((_ = h), (h = h.nextZ), c--)
                : ((_ = l), (l = l.nextZ), d--)
              : ((_ = h), (h = h.nextZ), c--),
              n ? (n.nextZ = _) : (o = _),
              (_.prevZ = n),
              (n = _);
          }
          h = l;
        }
        if (((n.nextZ = null), (a *= 2), u < 2)) return o;
      }
    })(s)
  );
}
function k(s, t, e) {
  return (t.y - s.y) * (e.x - t.x) - (t.x - s.x) * (e.y - t.y);
}
function xr(s, t, e, r) {
  return (
    !!((it(s, t) && it(e, r)) || (it(s, r) && it(e, t))) ||
    (k(s, t, e) > 0 != k(s, t, r) > 0 && k(e, r, s) > 0 != k(e, r, t) > 0)
  );
}
function _t(s, t, e, r, i, o, n, a) {
  return (
    (i - n) * (t - a) - (s - n) * (o - a) >= 0 &&
    (s - n) * (r - a) - (e - n) * (t - a) >= 0 &&
    (e - n) * (o - a) - (i - n) * (r - a) >= 0
  );
}
function wt(s, t) {
  return k(s.prev, s, s.next) < 0
    ? k(s, t, s.next) >= 0 && k(s, s.prev, t) >= 0
    : k(s, t, s.prev) < 0 || k(s, s.next, t) < 0;
}
function ie(s, t, e, r, i) {
  return (
    (s =
      1431655765 &
      ((s =
        858993459 &
        ((s =
          252645135 &
          ((s = 16711935 & ((s = 32767 * (s - e) * i) | (s << 8))) |
            (s << 4))) |
          (s << 2))) |
        (s << 1))) |
    ((t =
      1431655765 &
      ((t =
        858993459 &
        ((t =
          252645135 &
          ((t = 16711935 & ((t = 32767 * (t - r) * i) | (t << 8))) |
            (t << 4))) |
          (t << 2))) |
        (t << 1))) <<
      1)
  );
}
function it(s, t) {
  return s.x === t.x && s.y === t.y;
}
function Vi(s, t) {
  return s.x - t.x;
}
function Di(s, t, e, r) {
  let i = s;
  do {
    const o = i.prev,
      n = i.next.next;
    !it(o, n) &&
      xr(o, i, i.next, n) &&
      wt(o, n) &&
      wt(n, o) &&
      (t.push(o.index / e + r),
      t.push(i.index / e + r),
      t.push(n.index / e + r),
      vt(i),
      vt(i.next),
      (i = s = n)),
      (i = i.next);
  } while (i !== s);
  return i;
}
function Oi(s, t, e, r, i, o, n) {
  let a = s;
  do {
    let l = a.next.next;
    for (; l !== a.prev; ) {
      if (a.index !== l.index && Gi(a, l)) {
        let h = yr(a, l);
        return (
          (a = gt(a, a.next)),
          (h = gt(h, h.next)),
          Mt(a, t, e, r, i, o, n, 0),
          void Mt(h, t, e, r, i, o, n, 0)
        );
      }
      l = l.next;
    }
    a = a.next;
  } while (a !== s);
}
function Gi(s, t) {
  return (
    s.next.index !== t.index &&
    s.prev.index !== t.index &&
    !(function (e, r) {
      let i = e;
      do {
        if (
          i.index !== e.index &&
          i.next.index !== e.index &&
          i.index !== r.index &&
          i.next.index !== r.index &&
          xr(i, i.next, e, r)
        )
          return !0;
        i = i.next;
      } while (i !== e);
      return !1;
    })(s, t) &&
    wt(s, t) &&
    wt(t, s) &&
    (function (e, r) {
      let i = e,
        o = !1;
      const n = (e.x + r.x) / 2,
        a = (e.y + r.y) / 2;
      do
        i.y > a != i.next.y > a &&
          i.next.y !== i.y &&
          n < ((i.next.x - i.x) * (a - i.y)) / (i.next.y - i.y) + i.x &&
          (o = !o),
          (i = i.next);
      while (i !== e);
      return o;
    })(s, t)
  );
}
function yr(s, t) {
  const e = ft.create(s.index, s.x, s.y),
    r = ft.create(t.index, t.x, t.y),
    i = s.next,
    o = t.prev;
  return (
    (s.next = t),
    (t.prev = s),
    (e.next = i),
    (i.prev = e),
    (r.next = e),
    (e.prev = r),
    (o.next = r),
    (r.prev = o),
    r
  );
}
class ft {
  constructor() {
    (this.index = 0),
      (this.x = 0),
      (this.y = 0),
      (this.prev = null),
      (this.next = null),
      (this.z = null),
      (this.prevZ = null),
      (this.nextZ = null),
      (this.steiner = !1);
  }
  static create(t, e, r) {
    const i = ne < se.length ? se[ne++] : new ft();
    return (
      (i.index = t),
      (i.x = e),
      (i.y = r),
      (i.prev = null),
      (i.next = null),
      (i.z = null),
      (i.prevZ = null),
      (i.nextZ = null),
      (i.steiner = !1),
      i
    );
  }
}
const se = [];
let ne = 0;
for (let s = 0; s < 8096; s++) se.push(new ft());
const Ki = 1e-5,
  rt = new ar(0, 0, 0, 1, 0),
  oe = new ar(0, 0, 0, 1, 0);
function qe(s, t, e) {
  let r = 0;
  for (let i = 1; i < e; i++) {
    const o = s[2 * (t + i - 1)],
      n = s[2 * (t + i - 1) + 1];
    r += (s[2 * (t + i)] - o) * (s[2 * (t + i) + 1] + n);
  }
  return r;
}
function Zi(s, t, e, r, i) {
  let o = 0;
  for (let n = e; n < r; n += 3) {
    const a = 2 * (s[n] - i),
      l = 2 * (s[n + 1] - i),
      h = 2 * (s[n + 2] - i);
    o += Math.abs(
      (t[a] - t[h]) * (t[l + 1] - t[a + 1]) -
        (t[a] - t[l]) * (t[h + 1] - t[a + 1])
    );
  }
  return o;
}
function Ni(s, t) {
  const { coords: e, lengths: r, hasIndeterminateRingOrder: i } = t,
    o = s;
  if (i) return !1;
  let n = 0;
  for (let a = 0; a < r.length; ) {
    let l = a,
      h = r[a],
      u = qe(e, n, h);
    const c = [];
    for (; ++l < r.length; ) {
      const m = r[l],
        p = qe(e, n + h, m);
      if (!(p > 0)) break;
      (u += p), c.push(n + h), (h += m);
    }
    const d = o.length;
    Ei(o, e, n, n + h, c, 2, 0);
    const _ = Zi(o, e, d, o.length, 0),
      f = Math.abs(u);
    if (Math.abs((_ - f) / Math.max(1e-7, f)) > Ki) return (o.length = 0), !1;
    (a = l), (n += h);
  }
  return !0;
}
rt.setExtent(ot), oe.setExtent(ot);
const F = 16,
  gr = (s) =>
    class extends s {
      constructor(...t) {
        super(...t),
          (this.tessellationProperties = {}),
          (this._tessellationOptions = {
            halfWidth: 0,
            pixelCoordRatio: 1,
            offset: 0,
          }),
          (this.geometryType = T.LINE);
      }
      writeGeometry(t, e, r, i) {
        this._writeGeometry(t, e, r, i);
      }
      _initializeTessellator(t) {
        const e = kt.load(this._materialKey),
          r = dt.load(this._materialKey),
          i = this._tessellationOptions,
          o =
            e.vvSizeFieldStops ||
            e.vvSizeMinMaxValue ||
            e.vvSizeScaleStops ||
            e.vvSizeUnitValue,
          n = this.tessellationProperties._halfWidth < $r && !t && !o;
        (this.tessellationProperties.minMaxZoom = this._minMaxZoom),
          (i.wrapDistance = 65535),
          (i.textured = this._isDashed || this._hasPattern),
          (i.offset = this.tessellationProperties.offset),
          (i.halfWidth = this.tessellationProperties._halfWidth);
        const a = n ? 0 : 1,
          l = Et(r) ? Ui : Xi;
        this._lineTessellator = new oi(
          l(this.tessellationProperties, a, a),
          Hi(this.tessellationProperties),
          n
        );
      }
      _write(t, e, r, i) {
        const o = e.geometryType === "esriGeometryPoint";
        t.recordStart(
          e.getDisplayId(),
          this._materialKey,
          this.geometryType,
          o
        ),
          this._writeGeometry(t, e, i, o),
          t.recordEnd();
      }
      _writeGeometry(t, e, r, i) {
        const o = r ?? e.readLegacyGeometryForDisplay(),
          n = this._getLines(o, i);
        G(n) || this._writeVertices(t, e, n);
      }
      _getLines(t, e) {
        if (G(t)) return null;
        const r = t.paths || t.rings;
        return G(r)
          ? null
          : (function (i, o) {
              oe.setPixelMargin(o);
              const n = oe,
                a = -o,
                l = ot + o;
              let h = [],
                u = !1,
                c = 0;
              for (; c < i.length; ) {
                const d = [],
                  _ = i[c];
                if (!_) return null;
                n.reset(lr.LineString);
                let [f, m] = _[0];
                if (u) n.moveTo(f, m);
                else {
                  if (f < a || f > l || m < a || m > l) {
                    u = !0;
                    continue;
                  }
                  d.push({ x: f, y: m });
                }
                let p = !1;
                const x = _.length;
                for (let y = 1; y < x; ++y)
                  if (((f += _[y][0]), (m += _[y][1]), u)) n.lineTo(f, m);
                  else {
                    if (f < a || f > l || m < a || m > l) {
                      p = !0;
                      break;
                    }
                    d.push({ x: f, y: m });
                  }
                if (p) u = !0;
                else {
                  if (u) {
                    const y = n.resultWithStarts();
                    if (y) for (const v of y) h.push(v);
                  } else h.push({ line: d, start: 0 });
                  c++, (u = !1);
                }
              }
              return (
                (h = h.filter((d) => d.line.length > 1)),
                h.length === 0 ? null : h
              );
            })(r, e ? 256 : 16);
      }
      _writeVertices(t, e, r) {
        const i = e.getDisplayId(),
          o = t.vertexCount(),
          n = this.tessellationProperties,
          a = this._tessellationOptions;
        (n.out = t),
          (n.id = i),
          (n.indexCount = 0),
          (n.vertexCount = 0),
          (n.offset = o),
          (a.capType = this._capType),
          (a.joinType = this._joinType);
        const l = dt.load(this._materialKey);
        this.tessellationProperties.key = Et(l)
          ? l
          : kt.load(this._materialKey);
        for (const { line: h, start: u } of r)
          (a.initialDistance = u % 65535),
            this._lineTessellator.tessellate(h, a);
      }
    },
  Xi = (s, t, e) => (r, i, o, n, a, l, h, u, c, d, _) => {
    const f = M(_, Math.ceil(F * s._halfWidth)),
      m = I(
        Math.round(F * h),
        Math.round(F * u),
        Math.round(F * c),
        Math.round(F * d)
      ),
      p = I(F * a, F * l, 0, s._bitset),
      x = s.out;
    return (
      x.vertexBounds(r, i, t, e),
      x.vertexWrite(M(8 * r, 8 * i)),
      x.vertexWrite(s.id),
      x.vertexWrite(s._fillColor),
      x.vertexWrite(m),
      x.vertexWrite(f),
      x.vertexWrite(s._tl),
      x.vertexWrite(s._br),
      x.vertexWrite(p),
      x.vertexWrite(M(Math.ceil(F * s._halfReferenceWidth), 0)),
      x.vertexWrite(s.minMaxZoom),
      x.vertexEnd(),
      s.offset + s.vertexCount++
    );
  },
  Ui = (s, t, e) => (r, i, o, n, a, l, h, u, c, d, _) => {
    const f = M(F * s._halfWidth, F * s._halfReferenceWidth),
      m = I(F * h + 128, F * u + 128, F * c + 128, F * d + 128),
      p = s.out,
      x = (s._bitset << 24) | s.id;
    p.vertexBounds(r, i, t, e),
      p.vertexWrite(M(8 * r, 8 * i)),
      p.vertexWrite(x),
      p.vertexWrite(s._fillColor);
    const y = or(s.key);
    return (
      y || (p.vertexWrite(0), p.vertexWrite(0)),
      p.vertexWrite(0),
      p.vertexWrite(f),
      p.vertexWrite(m),
      y || p.vertexWrite(s.minMaxZoom),
      p.vertexEnd(),
      s.offset + s.vertexCount++
    );
  },
  Hi = (s) => (t, e, r) => {
    const i = s.out;
    i.indexWrite(t), i.indexWrite(e), i.indexWrite(r), (s.indexCount += 3);
  };
class j extends gr(bt) {
  constructor(t, e, r, i, o, n, a, l, h, u, c, d, _, f, m, p, x, y, v, w) {
    super();
    const L = kt.load(t);
    e &&
      ((L.sdf = e.sdf),
      (L.pattern = !0),
      (L.textureBinding = e.textureBinding)),
      (this._capType = i),
      (this._joinType = o),
      (this._miterLimitCosine = Jt(n)),
      (this.tessellationProperties._fillColor = a),
      (this.tessellationProperties._tl = l),
      (this.tessellationProperties._br = h),
      (this._hasPattern = u),
      (this._isDashed = c),
      (this._zOrder = x),
      (this._effects = y),
      (this._minMaxZoom = M(Math.round(v * E), Math.round(w * E))),
      (this._materialKey = L.data);
    const b = (_ ? st : 0) | (f ? Jr : 0) | (d ? er : 0) | (m ? Ft : 0);
    (this.tessellationProperties._bitset = b),
      (this.tessellationProperties._halfWidth = 0.5 * r),
      (this.tessellationProperties._halfReferenceWidth = 0.5 * p),
      (this.tessellationProperties.offset = 0),
      this._initializeTessellator(!1);
  }
  static fromCIMLine(t, e, r) {
    const i = t.color,
      o = t.scaleFactor || 1,
      n = !!t.dashTemplate;
    let a = t.cap;
    n && a === Ce.ROUND && (a = Ce.SQUARE);
    const l = t.join,
      h = g(t.width) * o,
      u = g(t.referenceWidth),
      c = g(t.miterLimit),
      d = (i && W(i)) || 0,
      [_, f] = tt(t.scaleInfo, r);
    if (!e)
      return new j(
        t.materialKey,
        e,
        h,
        a,
        l,
        c,
        d,
        0,
        0,
        !1,
        n,
        t.scaleDash ?? !1,
        t.colorLocked ?? !1,
        !1,
        t.sampleAlphaOnly,
        u,
        t.zOrder,
        t.effects,
        _,
        f
      );
    const { rect: m, width: p, height: x } = e,
      y = m.x + C,
      v = m.y + C,
      w = y + p,
      L = v + x,
      b = M(y, v),
      P = M(w, L);
    return new j(
      t.materialKey,
      e,
      h,
      a,
      l,
      c,
      d,
      b,
      P,
      !0,
      n,
      t.scaleDash ?? !1,
      t.colorLocked ?? !1,
      !1,
      t.sampleAlphaOnly,
      u,
      t.zOrder,
      t.effects,
      _,
      f
    );
  }
  static fromFillOutline(t) {
    var r;
    const e = dt.load(t.materialKey);
    return Et(e) &&
      t.outline &&
      ((r = t.outline) == null ? void 0 : r.style) === "esriSLSSolid"
      ? j.fromSimpleLine(
          { hash: "", materialKey: t.materialKey, ...t.outline },
          null,
          !0
        )
      : null;
  }
  static fromSimpleLine(t, e, r = !1) {
    const { color: i } = t,
      o = t.style !== "esriSLSSolid" && t.style !== "esriSLSNull",
      n = ri(t.cap || "round"),
      a = ii(t.join || "round");
    let l = (i && t.style !== "esriSLSNull" && D(i)) || 0;
    t.style === "esriSLSNull" && (l = 0);
    const h = g(t.width),
      u = t.miterLimit;
    if (!e)
      return new j(
        t.materialKey,
        e,
        h,
        n,
        a,
        u,
        l,
        0,
        0,
        !1,
        o,
        !0,
        !1,
        r,
        !1,
        h,
        0,
        null,
        U,
        H
      );
    const { rect: c, width: d, height: _ } = e,
      f = c.x + C,
      m = c.y + C,
      p = f + d,
      x = m + _,
      y = M(f, m),
      v = M(p, x);
    return new j(
      t.materialKey,
      e,
      h,
      n,
      a,
      u,
      l,
      y,
      v,
      !0,
      o,
      !0,
      !1,
      r,
      !1,
      h,
      0,
      null,
      U,
      H
    );
  }
  static fromPictureLineSymbol(t, e, r, i) {
    return (
      mt
        .getLogger("esri.views.2d.engine.webgl.WGLLineTemplate")
        .error("PictureLineSymbol support does not exist!"),
      null
    );
  }
}
const Mr = (s) =>
    class extends s {
      constructor(...t) {
        super(...t),
          (this.forceLibtess = !1),
          (this._bitset = 0),
          (this._lineTemplate = null),
          (this.geometryType = T.FILL);
      }
      _maybeAddLineTemplate(t) {
        this._lineTemplate = j.fromFillOutline(t);
      }
      _write(t, e, r, i) {
        const o = e.geometryType === "esriGeometryPoint",
          n = dt.load(this._materialKey);
        t.recordStart(
          e.getDisplayId(),
          this._materialKey,
          this.geometryType,
          o
        ),
          this._writeGeometry(t, e, n, i, o),
          Et(n) &&
            R(this._lineTemplate) &&
            this._lineTemplate.writeGeometry(t, e, i, o),
          t.recordEnd();
      }
      _writeGeometry(t, e, r, i, o) {
        const n = this._getGeometry(e, i, o);
        if (G(n)) return;
        const a = [];
        if (!(n.maxLength > 100) && !this.forceLibtess && Ni(a, n))
          return void (
            a.length && this._writeVertices(t, e, n.coords, n.lengths, r, a)
          );
        const l = (function (h) {
          const { coords: u, lengths: c } = h,
            { buffer: d } = ni(u, c);
          return d;
        })(n);
        this._writeVertices(t, e, l, [l.length / 2], r);
      }
      _writeVertex(t, e, r, i, o, n) {
        const a = M(1 * i, 1 * o);
        if (
          (t.vertexBounds(i, o, 0, 0),
          t.vertexWrite(a),
          t.vertexWrite(e),
          r.symbologyType === Vt.DOT_DENSITY)
        )
          t.vertexWriteF32(1 / Math.abs(n.readGeometryArea()));
        else {
          t.vertexWrite(this.fillColor);
          const l = or(r);
          l || (t.vertexWrite(this.tl), t.vertexWrite(this.br)),
            t.vertexWrite(this.aux21),
            t.vertexWrite(this.aux22),
            t.vertexWrite(this.aux3),
            l || t.vertexWrite(this._minMaxZoom);
        }
      }
      _writeVertices(t, e, r, i, o, n) {
        const a = e.getDisplayId(),
          l = (this._bitset << 24) | a,
          h = i.reduce((_, f) => _ + f),
          u = jt(o.geometryType, o.symbologyType).geometry / 4,
          c = t.vertexCount();
        t.vertexEnsureSize(u * h);
        let d = 0;
        if (n)
          for (const _ of n) {
            const f = r[2 * _],
              m = r[2 * _ + 1];
            this._writeVertex(t, l, o, f, m, e), d++;
          }
        else
          for (let _ = 0; _ < r.length; _ += 2) {
            const f = Math.round(r[_]),
              m = Math.round(r[_ + 1]);
            this._writeVertex(t, l, o, f, m, e), d++;
          }
        t.indexEnsureSize(d);
        for (let _ = 0; _ < d; _++) t.indexWrite(_ + c);
      }
      _getGeometry(t, e, r) {
        const i = e ? le(he(e), 2) : t.readGeometryForDisplay();
        return i
          ? (function (o, n) {
              if (G(o)) return null;
              if (
                !(function (c, d, _) {
                  let f = 0;
                  for (let m = 0; m < c.lengths.length; m++) {
                    const p = c.lengths[m];
                    for (let x = 0; x < p; x++) {
                      const y = c.coords[2 * (x + f)],
                        v = c.coords[2 * (x + f) + 1];
                      if (y < d || y > _ || v < d || v > _) return !0;
                    }
                    f += p;
                  }
                  return !1;
                })(o, -128, ot + 128)
              )
                return o;
              rt.setPixelMargin(n), rt.reset(lr.Polygon);
              let a = 0;
              for (let c = 0; c < o.lengths.length; c++) {
                const d = o.lengths[c];
                let _ = o.coords[2 * (0 + a)],
                  f = o.coords[2 * (0 + a) + 1];
                rt.moveTo(_, f);
                for (let m = 1; m < d; m++)
                  (_ = o.coords[2 * (m + a)]),
                    (f = o.coords[2 * (m + a) + 1]),
                    rt.lineTo(_, f);
                rt.close(), (a += d);
              }
              const l = rt.result(!1);
              if (!l) return null;
              const h = [],
                u = [];
              for (const c of l) {
                let d = 0;
                for (const _ of c) u.push(_.x), u.push(_.y), d++;
                h.push(d);
              }
              return new Rr(h, u);
            })(i, r ? 256 : 8)
          : null;
      }
    },
  je = mt.getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate");
let Zt = class extends bt {
    constructor(s) {
      super(),
        (this._ongoingMaterialRequestMap = new Map()),
        (this._materialCache = new Map()),
        (this._dynamicPropertyMap = new Map()),
        (this._cimLayer = s);
    }
    analyze(s, t, e, r, i) {
      if (i && i.length === 0) return null;
      const o = i && i.length > 0,
        n = t.readLegacyFeature(),
        a = t.getObjectId(),
        l = this._materialCache,
        h = this._cimLayer.materialHash;
      if (!h)
        return (
          je.error(
            "A Dynamic mesh template must have a material hash value or function!"
          ),
          Promise.reject(null)
        );
      const u = typeof h == "function" ? h(n, e, r, a) : h,
        c = l.get(u);
      if (c != null) return Promise.resolve(c);
      const d = this._ongoingMaterialRequestMap.get(u);
      if (d) return d;
      const _ = this._cimLayer,
        f = xi(_.cim, this._cimLayer.materialOverrides);
      f.mosaicHash = u;
      const { type: m, url: p } = _,
        x = {
          cim: f,
          type: m,
          mosaicHash: u,
          url: p,
          size: null,
          dashTemplate: null,
          text: null,
          fontName: null,
          objectId: a,
          animatedSymbolProperties: null,
        };
      switch (m) {
        case "marker":
          (x.size = Tt(_.size, n, e, r)),
            (x.animatedSymbolProperties = Tt(
              _.animatedSymbolProperties,
              n,
              e,
              r
            ));
          break;
        case "line":
          x.dashTemplate = _.dashTemplate;
          break;
        case "text":
          (x.text = Tt(_.text, n, e, r)),
            (x.fontName = Tt(_.fontName, n, e, r));
      }
      const y = s
        .getMosaicItem(x, i)
        .then(
          (v) => (
            o || (this._ongoingMaterialRequestMap.delete(u), l.set(u, v)), v
          )
        )
        .catch(
          (v) => (
            this._ongoingMaterialRequestMap.delete(u),
            je.error(".analyze()", v.message),
            null
          )
        );
      return o || this._ongoingMaterialRequestMap.set(u, y), y;
    }
  },
  Yi = class vr extends Mr(Zt) {
    constructor(t, e, r) {
      var u;
      if (
        (super(t),
        (this._minMaxZoom = M(Math.round(e * E), Math.round(r * E))),
        S(t.color))
      ) {
        const c = (d, _, f) => {
          const m = t.color(d, _, f);
          return (m && W(m)) || 0;
        };
        this._dynamicPropertyMap.set("fillColor", c);
      } else {
        const c = t.color;
        this.fillColor = (c && W(c)) || 0;
      }
      const i =
          ((u = t.cim.placement) == null ? void 0 : u.type) ===
            "CIMMarkerPlacementInsidePolygon" && t.cim.placement.shiftOddRows
            ? 2
            : 1,
        o = t.height;
      if (S(o)) {
        const c = (d, _, f) => o(d, _, f) * i;
        this._dynamicPropertyMap.set("_height", c);
      } else this._height = (o || 0) * i;
      const n = t.offsetX;
      if (S(n)) {
        const c = (d, _, f) => g(n(d, _, f));
        this._dynamicPropertyMap.set("_offsetX", c);
      } else this._offsetX = g(n || 0);
      const a = t.offsetY;
      if (S(a)) {
        const c = (d, _, f) => g(-a(d, _, f));
        this._dynamicPropertyMap.set("_offsetY", c);
      } else this._offsetY = g(-a || 0);
      const l = t.scaleX;
      S(l)
        ? this._dynamicPropertyMap.set("_scaleX", l)
        : (this._scaleX = l || 1);
      const h = t.angle;
      if (S(h)) {
        const c = (d, _, f) => $t(h(d, _, f));
        this._dynamicPropertyMap.set("_angle", c);
      } else this._angle = $t(h) || 0;
      if (R(t.effects)) {
        const c = t.effects;
        S(c)
          ? this._dynamicPropertyMap.set("_effects", c)
          : (this._effects = c);
      }
      (this._cimFillLayer = t),
        (this._bitset =
          (t.colorLocked ? st : 0) |
          (t.applyRandomOffset ? rr : 0) |
          (t.sampleAlphaOnly ? Ft : 0) |
          (t.hasUnresolvedReplacementColor ? ir : 0)),
        (this._fillMaterialKey = t.materialKey);
    }
    static fromCIMFill(t, e) {
      const [r, i] = tt(t.scaleInfo, e);
      return new vr(t, r, i);
    }
    bindFeature(t, e, r) {
      const i = t.readLegacyFeature();
      this._dynamicPropertyMap.forEach((u, c) => {
        this[c] = u(i, e, r);
      });
      const o = dt.load(this._fillMaterialKey),
        n = this._materialCache,
        a = (0, this._cimFillLayer.materialHash)(i, e, r),
        l = n.get(a);
      let h = null;
      if ((l && V(l.spriteMosaicItem) && (h = l.spriteMosaicItem), h)) {
        const { rect: u, width: c, height: d } = h,
          _ = u.x + C,
          f = u.y + C,
          m = _ + c,
          p = f + d;
        let x = Math.round(g(this._height));
        x <= 0 && (x = p - f);
        let y = Math.round(g((this._height / d) * c || 0));
        y <= 0 && (y = m - _);
        const v = this._scaleX,
          w = 1;
        (this.tl = M(_, f)),
          (this.br = M(m, p)),
          (this.aux21 = M(y, x)),
          (this.aux22 = M(this._offsetX, this._offsetY)),
          (this.aux3 = I(128 * v, 128 * w, this._angle, 0)),
          (o.sdf = h.sdf),
          (o.pattern = !0),
          (o.textureBinding = h.textureBinding);
      } else
        (this.tl = 0),
          (this.br = 0),
          (this.aux21 = 0),
          (this.aux22 = 0),
          (this.aux3 = 0),
          (o.sdf = !1),
          (o.pattern = !1),
          (o.textureBinding = 0);
      this._materialKey = o.data;
    }
  },
  qi = class wr extends gr(Zt) {
    constructor(t, e, r) {
      super(t),
        (this._minMaxZoom = M(Math.round(e * E), Math.round(r * E))),
        (this._cimLineLayer = t);
      let i = 0;
      S(t.width) || (i = 0.5 * g(t.width)),
        this._dynamicPropertyMap.set("_halfWidth", (u, c, d) =>
          S(t.width) ? 0.5 * g(t.width(u, c, d)) : i
        ),
        S(t.cap)
          ? this._dynamicPropertyMap.set("_capType", t.cap)
          : (this._capType = t.cap),
        S(t.join)
          ? this._dynamicPropertyMap.set("_joinType", t.join)
          : (this._joinType = t.join);
      const o = t.color;
      if (S(o)) {
        const u = (c, d, _) => W(o(c, d, _));
        this._dynamicPropertyMap.set("_fillColor", u);
      } else this._fillColor = (o && W(o)) || 0;
      const n = t.miterLimit;
      if (S(n)) {
        const u = (c, d, _) => Jt(n(c, d, _));
        this._dynamicPropertyMap.set("_miterLimitCosine", u);
      } else this._miterLimitCosine = Jt(n);
      if (R(t.effects)) {
        const u = t.effects;
        S(u)
          ? this._dynamicPropertyMap.set("_effects", u)
          : (this._effects = u);
      }
      (this._scaleFactor = t.scaleFactor || 1),
        (this._isDashed = t.dashTemplate != null);
      const a = t.colorLocked ? st : 0,
        l = t.scaleDash ? er : 0,
        h = t.sampleAlphaOnly ? Ft : 0;
      (this.tessellationProperties._bitset = a | l | h),
        (this._materialKey = t.materialKey),
        this._initializeTessellator(!0);
    }
    static fromCIMLine(t, e) {
      const [r, i] = tt(t.scaleInfo, e);
      return new wr(t, r, i);
    }
    bindFeature(t, e, r) {
      const i = t.readLegacyFeature();
      this._dynamicPropertyMap.forEach((u, c) => {
        this[c] = u(i, e, r);
      }),
        (this._halfWidth *= this._scaleFactor);
      const o = this._materialCache,
        n = (0, this._cimLineLayer.materialHash)(i, e, r),
        a = o.get(n);
      let l = null;
      if ((a && V(a.spriteMosaicItem) && (l = a.spriteMosaicItem), l)) {
        this._hasPattern = !0;
        const { rect: u, width: c, height: d } = l,
          _ = u.x + C,
          f = u.y + C,
          m = _ + c,
          p = f + d;
        (this.tessellationProperties._tl = M(_, f)),
          (this.tessellationProperties._br = M(m, p));
      } else
        (this._hasPattern = !1),
          (this.tessellationProperties._tl = 0),
          (this.tessellationProperties._br = 0);
      (this.tessellationProperties._fillColor = this._fillColor),
        (this.tessellationProperties._halfWidth = this._halfWidth),
        (this.tessellationProperties.offset = 0),
        (this.tessellationProperties._halfReferenceWidth =
          this.tessellationProperties._halfWidth);
      const h = kt.load(this._materialKey);
      l &&
        ((h.sdf = l.sdf),
        (h.pattern = !0),
        (h.textureBinding = l.textureBinding)),
        (this._materialKey = h.data);
    }
  };
const ji = ue(),
  Qi = At();
class ye extends mr(Zt) {
  constructor(t, e, r) {
    super(t),
      (this._cimMarkerLayer = t),
      (this._minMaxZoom = M(Math.round(e * E), Math.round(r * E)));
    const i = t.color;
    if (S(i)) {
      const d = (_, f, m) => W(i(_, f, m));
      this._dynamicPropertyMap.set("_fillColor", d);
    } else this._fillColor = W(i);
    const o = t.outlineColor;
    if (S(o)) {
      const d = (_, f, m) => W(o(_, f, m));
      this._dynamicPropertyMap.set("_outlineColor", d);
    } else this._outlineColor = W(o);
    const n = t.size;
    if (S(n)) {
      const d = (_, f, m) => g(n(_, f, m));
      this._dynamicPropertyMap.set("_size", d);
    } else this._size = g(n) || 0;
    const a = t.scaleX;
    S(a) ? this._dynamicPropertyMap.set("_scaleX", a) : (this._scaleX = a);
    const l = t.offsetX;
    if (S(l)) {
      const d = (_, f, m) => g(l(_, f, m));
      this._dynamicPropertyMap.set("xOffset", d);
    } else this.xOffset = g(l) || 0;
    const h = t.offsetY;
    if (S(h)) {
      const d = (_, f, m) => g(h(_, f, m));
      this._dynamicPropertyMap.set("yOffset", d);
    } else this.yOffset = g(h) || 0;
    const u = t.outlineWidth;
    if (S(u)) {
      const d = (_, f, m) => g(u(_, f, m));
      this._dynamicPropertyMap.set("_outlineWidth", d);
    } else this._outlineWidth = g(u) || 0;
    const c = t.rotation;
    if (
      (S(c)
        ? this._dynamicPropertyMap.set("_angle", c)
        : (this._angle = c || 0),
      R(t.effects))
    ) {
      const d = t.effects;
      S(d) ? this._dynamicPropertyMap.set("_effects", d) : (this._effects = d);
    }
    if (R(t.markerPlacement)) {
      const d = t.markerPlacement;
      S(d)
        ? this._dynamicPropertyMap.set("_markerPlacement", d)
        : (this._markerPlacement = d);
    }
    (this._scaleFactor = Ct(t.scaleFactor, 1)),
      (this._bitSet =
        (t.alignment === N.MAP ? 1 : 0) |
        ((t.colorLocked ? 1 : 0) << 1) |
        ((t.scaleSymbolsProportionally ? 1 : 0) << 3)),
      (this._materialKey = t.materialKey);
  }
  static fromCIMMarker(t, e) {
    const [r, i] = tt(t.scaleInfo, e);
    return new ye(t, r, i);
  }
  bindFeature(t, e, r) {
    const i = t.readLegacyFeature(),
      o = t.getObjectId();
    this._dynamicPropertyMap.forEach((at, lt) => {
      this[lt] = at(i, e, r);
    });
    const n = this._cimMarkerLayer.materialHash,
      a = typeof n == "function" ? n(i, e, r, o) : n,
      l = this._materialCache.get(a);
    if (!l || !V(l.spriteMosaicItem) || !l.spriteMosaicItem)
      return void mt
        .getLogger("esri.views.2d.engine.webgl.WGLDynamicMarkerTemplate")
        .error(
          new nt("mapview-cim", "Encountered an error when binding feature")
        );
    const h = l.spriteMosaicItem,
      u = this._cimMarkerLayer.sizeRatio,
      c = (h.width / h.height) * this._scaleX,
      d = this._cimMarkerLayer.rotateClockwise ? this._angle : -this._angle;
    let _ = this._size,
      f = _ * c;
    const m = this.xOffset,
      p = this.yOffset;
    (this.xOffset *= this._scaleFactor), (this.yOffset *= this._scaleFactor);
    const x =
        this._cimMarkerLayer.scaleSymbolsProportionally &&
        this._cimMarkerLayer.frameHeight
          ? this._size / g(this._cimMarkerLayer.frameHeight)
          : 1,
      y = this._outlineWidth * x,
      v = g(this._cimMarkerLayer.referenceSize);
    let w = 0,
      L = 0;
    const b = this._cimMarkerLayer.anchorPoint;
    b &&
      (this._cimMarkerLayer.isAbsoluteAnchorPoint
        ? this._size &&
          ((w = g(b.x) / (this._size * c)), (L = g(b.y) / this._size))
        : ((w = b.x), (L = b.y))),
      (this._anchorX = w),
      (this._anchorY = L),
      (this._sizeOutlineWidth = I(
        Math.round(Math.min(Math.sqrt(128 * f), 255)),
        Math.round(Math.min(Math.sqrt(128 * _), 255)),
        Math.round(Math.min(Math.sqrt(128 * y), 255)),
        Math.round(Math.min(Math.sqrt(128 * v), 255))
      )),
      (this.angle = d);
    const P = Math.round(64 * u);
    this._bitestAndDistRatio = M(this._bitSet, P);
    const z = h.rect.x + C,
      B = h.rect.y + C,
      Z = z + h.width,
      Q = B + h.height;
    (this._texUpperLeft = M(z, B)),
      (this._texUpperRight = M(Z, B)),
      (this._texBottomLeft = M(z, Q)),
      (this._texBottomRight = M(Z, Q));
    const X = _e.load(this._materialKey);
    (X.sdf = h.sdf),
      (X.pattern = !0),
      (X.textureBinding = h.textureBinding),
      (this._materialKey = X.data),
      (f *= u),
      (_ *= u),
      (f *= this._scaleFactor),
      (_ *= this._scaleFactor),
      (f *= h.rect.width / h.width),
      (_ *= h.rect.height / h.height),
      (this._computedWidth = f),
      (this._computedHeight = _),
      this._applyTransformation(Qi, ji),
      (this.xOffset = m),
      (this.yOffset = p);
  }
}
function br(s) {
  if (s == null) return [];
  const t = new Array(s.length);
  for (let e = 0; e < s.length; e++) t[e] = s.charCodeAt(e);
  return t;
}
class ge extends dr(Zt) {
  constructor(t, e, r) {
    super(t),
      (this._horizontalAlignment = "center"),
      (this._verticalAlignment = "middle"),
      (this._textToGlyphs = new Map()),
      (this._minMaxZoom = M(Math.round(e * E), Math.round(r * E)));
    const i = t.scaleFactor || 1;
    this._cimTextLayer = t;
    const o = t.color;
    if (S(o)) {
      const d = (_, f, m) => W(o(_, f, m));
      this._dynamicPropertyMap.set("_color", d);
    } else this._color = W(o);
    const n = t.outlineColor;
    if (S(n)) {
      const d = (_, f, m) => W(n(_, f, m));
      this._dynamicPropertyMap.set("_haloColor", d);
    } else this._haloColor = W(n);
    let a;
    if (
      (S(t.size) || (a = Math.min(Math.round(g(t.size * t.sizeRatio)), 127)),
      this._dynamicPropertyMap.set("_size", (d, _, f) =>
        S(t.size)
          ? Math.min(Math.round(g(t.size(d, _, f) * t.sizeRatio)), 127)
          : a
      ),
      S(t.outlineSize))
    ) {
      const d = (_, f, m) =>
        Math.min(Math.floor(5 * g(t.outlineSize(_, f, m) * t.sizeRatio)), 127);
      this._dynamicPropertyMap.set("_haloSize", d);
    } else
      this._haloSize = Math.min(
        Math.floor(5 * g(t.outlineSize * t.sizeRatio)),
        127
      );
    let l;
    S(t.offsetX) || (l = Math.round(g(t.offsetX * t.sizeRatio)));
    let h;
    if (
      (this._dynamicPropertyMap.set("_xOffset", (d, _, f) =>
        S(t.offsetX) ? Math.round(g(t.offsetX(d, _, f) * t.sizeRatio)) : l
      ),
      S(t.offsetY) || (h = Math.round(g(t.offsetY * t.sizeRatio))),
      this._dynamicPropertyMap.set("_yOffset", (d, _, f) =>
        S(t.offsetY) ? Math.round(g(t.offsetY(d, _, f) * t.sizeRatio)) : h
      ),
      S(t.angle)
        ? this._dynamicPropertyMap.set("_angle", t.angle)
        : (this._angle = t.angle),
      S(t.horizontalAlignment)
        ? this._dynamicPropertyMap.set(
            "_horizontalAlignment",
            t.horizontalAlignment
          )
        : (this._horizontalAlignment = t.horizontalAlignment),
      S(t.verticalAlignment)
        ? this._dynamicPropertyMap.set(
            "_verticalAlignment",
            t.verticalAlignment
          )
        : (this._verticalAlignment = t.verticalAlignment),
      R(t.effects))
    ) {
      const d = t.effects;
      S(d) ? this._dynamicPropertyMap.set("_effects", d) : (this._effects = d);
    }
    if (R(t.markerPlacement)) {
      const d = t.markerPlacement;
      S(d)
        ? this._dynamicPropertyMap.set("_markerPlacement", d)
        : (this._textPlacement = d);
    }
    S(t.text)
      ? this._dynamicPropertyMap.set("_text", t.text)
      : (this._text = t.text),
      (this._backgroundColor = t.backgroundColor && W(t.backgroundColor)),
      (this._borderLineColor = t.borderLineColor && W(t.borderLineColor)),
      (this._borderLineSize = t.borderLineWidth),
      (this._scaleFactor = i);
    const u = Math.min(Math.round(g(t.referenceSize * t.sizeRatio)), 127);
    (this._referenceSize = Math.round(Math.sqrt(256 * u))),
      (this._materialKey = t.materialKey);
    const c = di.load(this._materialKey);
    (c.sdf = !0),
      (this._bitset =
        (t.alignment === N.MAP ? 1 : 0) | ((t.colorLocked ? 1 : 0) << 1)),
      (this._materialKey = c.data),
      (this._decoration = "none"),
      (this._lineHeight = 1),
      (this._lineWidth = 512),
      (this._isCIM = !0);
  }
  static fromCIMText(t, e) {
    const [r, i] = tt(t.scaleInfo, e);
    return new ge(t, r, i);
  }
  async analyze(t, e, r, i) {
    const o = e.readLegacyFeature(),
      n = (function (l, h, u, c) {
        return typeof l.text == "string"
          ? l.text
          : typeof l.text == "function"
          ? l.text(h, u, c) ?? ""
          : "";
      })(this._cimTextLayer, o, r, i),
      a = await super.analyze(t, e, r, i, br(n));
    return (
      a && a.glyphMosaicItems && this._textToGlyphs.set(n, a.glyphMosaicItems),
      a
    );
  }
  bindFeature(t, e, r) {
    const i = t.readLegacyFeature();
    if (
      (this._dynamicPropertyMap.forEach((n, a) => {
        this[a] = n(i, e, r);
      }),
      !this._text || this._text.length === 0)
    )
      return void (this._shapingInfo = null);
    (this._size *= this._scaleFactor),
      (this._scale = this._size / Je),
      (this._xOffset *= this._scaleFactor),
      (this._yOffset *= this._scaleFactor),
      (this._xAlignD = sr(Ct(this._horizontalAlignment, "center"))),
      (this._yAlignD = nr(Ct(this._verticalAlignment, "baseline")));
    const o = this._textToGlyphs.get(this._text) ?? [];
    this.bindTextInfo(o, !1);
  }
}
const ht = 128;
let Yt = class ut extends Mr(bt) {
  constructor(t, e, r, i, o, n, a, l, h, u, c, d, _, f, m, p) {
    super(), (this._effects = f);
    const x = dt.load(t);
    e &&
      ((x.sdf = e.sdf),
      (x.pattern = !0),
      (x.textureBinding = e.textureBinding)),
      (this.fillColor = r),
      (this.tl = i),
      (this.br = o),
      (this.aux21 = M(n, a)),
      (this.aux22 = M(l, h)),
      (this.aux3 = I(u, c, d, 0)),
      (this._bitset = _),
      (this._minMaxZoom = M(Math.round(m * E), Math.round(p * E))),
      (this._materialKey = x.data);
  }
  static fromCIMFill(t, e, r) {
    const i = t.color,
      o = (i && W(i)) || 0,
      n = t.materialKey,
      [a, l] = tt(t.scaleInfo, r),
      h =
        (t.colorLocked ? st : 0) |
        (t.applyRandomOffset ? rr : 0) |
        (t.sampleAlphaOnly ? Ft : 0) |
        (t.hasUnresolvedReplacementColor ? ir : 0);
    if (!e)
      return new ut(n, null, o, 0, 0, 0, 0, 0, 0, 0, 0, 0, h, t.effects, a, l);
    const { rect: u, width: c, height: d } = e,
      _ = t.scaleX || 1,
      f = u.x + C,
      m = u.y + C,
      p = f + c,
      x = m + d,
      y = g(t.height);
    let v = _ * y;
    t.cim.type === "CIMHatchFill" && (v *= c / d);
    let w = Math.round(y);
    w <= 0 && (w = x - m);
    let L = Math.round(v);
    L <= 0 && (L = p - f);
    const b = g(t.offsetX || 0),
      P = g(-t.offsetY || 0),
      z = M(f, m),
      B = M(p, x);
    return new ut(
      n,
      e,
      o,
      z,
      B,
      L,
      w,
      b,
      P,
      ht,
      ht,
      $t(t.angle),
      h,
      t.effects,
      a,
      l
    );
  }
  static fromSimpleFill(t, e, r = !1) {
    const { color: i } = t,
      o = (i && t.style !== "esriSFSNull" && D(i)) || 0,
      n = r ? st : 0,
      a = t.materialKey;
    let l;
    if (e) {
      const { rect: h, width: u, height: c, pixelRatio: d } = e,
        _ = h.x + C,
        f = h.y + C,
        m = _ + u,
        p = f + c,
        x = M(_, f),
        y = M(m, p);
      l = new ut(a, e, o, x, y, u / d, c / d, 0, 0, ht, ht, 0, n, null, U, H);
    } else l = new ut(a, null, o, 0, 0, 0, 0, 0, 0, 0, 0, 0, n, null, U, H);
    return l._maybeAddLineTemplate(t), l;
  }
  static fromPictureFill(t, e, r = !1) {
    const i = tr,
      { rect: o, width: n, height: a } = e,
      l = o.x + C,
      h = o.y + C,
      u = l + n,
      c = h + a,
      d = M(l, h),
      _ = M(u, c),
      f = Math.round(g(t.width)),
      m = Math.round(g(t.height)),
      p = g(t.xoffset),
      x = g(-t.yoffset),
      y = t.materialKey,
      v = r ? st : 0,
      w = new ut(
        y,
        e,
        i,
        d,
        _,
        f,
        m,
        p,
        x,
        ht * t.xscale,
        ht * t.yscale,
        0,
        v,
        null,
        U,
        H
      );
    return w._maybeAddLineTemplate(t), w;
  }
};
async function $i(s, t, e) {
  if (!s.name)
    throw new nt(
      "style-symbol-reference-name-missing",
      "Missing name in style symbol reference"
    );
  if (s.styleName && s.styleName === "Esri2DPointSymbolsStyle")
    return (async function (r, i) {
      const o = Fr.replace(/\{SymbolName\}/gi, r.name);
      try {
        const n = await Le(o, i);
        return Pe(n.data);
      } catch (n) {
        return Nt(n), null;
      }
    })(s, e);
  try {
    return (async function (r, i, o, n) {
      const a = r.data,
        l = {
          portal: o && R(o.portal) ? o.portal : Vr.getDefault(),
          url: Dr(r.baseUrl),
          origin: "portal-item",
        },
        h = a.items.find((c) => c.name === i);
      if (!h)
        throw new nt(
          "symbolstyleutils:symbol-name-not-found",
          `The symbol name '${i}' could not be found`,
          { symbolName: i }
        );
      let u = Or(Gr(h, "cimRef"), l);
      vi() && (u = wi(u));
      try {
        const c = await Le(u, n);
        return Pe(c.data);
      } catch (c) {
        return Nt(c), null;
      }
    })(await Ar(s, t, e), s.name, t, e);
  } catch (r) {
    return Nt(r), null;
  }
}
const Qe = async (s, t, e) =>
  new yi(await gi(s.data, t, e), s.data, s.rendererKey, s.maxVVSize);
async function Y(s, t, e, r) {
  if (!s) return null;
  if (s.type === "cim") return Qe(s, t, e);
  if (s.type === "web-style") {
    const i = {
      type: "cim",
      data: (await $i(s, null, r)) ?? void 0,
      rendererKey: s.rendererKey,
      maxVVSize: s.maxVVSize,
    };
    return Qe(i, t, e);
  }
  return s;
}
function It(s) {
  if (!s) return null;
  const {
      avoidSDFRasterization: t,
      type: e,
      cim: r,
      url: i,
      materialHash: o,
    } = s,
    n = {
      cim: r,
      type: e,
      mosaicHash: o,
      url: i,
      size: null,
      dashTemplate: null,
      path: null,
      text: null,
      fontName: null,
      animatedSymbolProperties: null,
      avoidSDFRasterization: t,
    };
  switch (e) {
    case "marker":
      (n.size = s.size),
        (n.path = s.path),
        (n.animatedSymbolProperties = s.animatedSymbolProperties);
      break;
    case "line":
      n.dashTemplate = s.dashTemplate;
      break;
    case "text":
      (n.text = s.text), (n.fontName = s.fontName);
  }
  return n;
}
const A = mt.getLogger(
    "esri.views.2d.engine.webgl.mesh.templates.WGLTemplateStore"
  ),
  $e = { sortKey: null, templates: [] },
  Me = {
    isOutline: !1,
    placement: null,
    symbologyType: Vt.DEFAULT,
    vvFlags: 0,
  },
  Ji = { ...Te, hash: JSON.stringify(Te), materialKey: de(T.MARKER, Me) },
  ts = { ...ze, hash: JSON.stringify(ze), materialKey: de(T.LINE, Me) },
  es = { ...We, hash: JSON.stringify(We), materialKey: de(T.FILL, Me) };
function q(s, t) {
  const e = s.length;
  return s.push(null), t.then((r) => (s[e] = r)), s;
}
function yt(s) {
  return s != null && !!(1 & s);
}
class Ms {
  constructor(t, e) {
    (this._idCounter = 1),
      (this._templateIdCounter = 1),
      (this._idToTemplateGroup = new Map()),
      (this._symbolToTemplate = new Map()),
      (this._fetchQueue = []),
      (this._idToResolver = new Map()),
      (this._cimTemplateCache = new Map()),
      (this._cimAnalyses = []),
      (this._lock = new (class {
        constructor() {
          this._resolver = null;
        }
        isHeld() {
          return !!this._resolver;
        }
        async acquire() {
          this._resolver
            ? (await this._resolver.promise, await this.acquire())
            : (this._resolver = Br());
        }
        release() {
          const r = this._resolver;
          (this._resolver = null), r == null || r.resolve();
        }
      })()),
      (this._fetchResource = t),
      (this._tileInfo = e);
  }
  get _markerError() {
    return this._errorTemplates.marker[0];
  }
  get _fillError() {
    return this._errorTemplates.fill[0];
  }
  get _lineError() {
    return this._errorTemplates.line[0];
  }
  get _textError() {
    return this._errorTemplates.line[0];
  }
  createTemplateGroup(t, e, r = null) {
    this._initErrorTemplates();
    const i = t.hash,
      o = this._symbolToTemplate.get(i);
    if (o != null) return o;
    const n = [],
      a = { sortKey: r, templates: n };
    e && this._createMeshTemplates(n, e, !0),
      this._createMeshTemplates(n, t, !1);
    const l = this._createGroupId(t.type === "expanded-cim" && rs(t));
    return (
      this._idToTemplateGroup.set(l, a), this._symbolToTemplate.set(i, l), l
    );
  }
  getTemplateGroup(t) {
    return this._idToTemplateGroup.get(t) ?? $e;
  }
  getDynamicTemplateGroup(t) {
    return this._idToTemplateGroup.has(t)
      ? (yt(t) ||
          A.error(
            "mapview-template-store",
            `Id ${t} does not refer to a dynamic template`
          ),
        this._idToTemplateGroup.get(t))
      : $e;
  }
  getMosaicItem(t, e) {
    const r = this._createTemplateId(),
      i = new Promise((o) => this._idToResolver.set(r, o));
    return this._fetchQueue.push({ symbol: t, id: r, glyphIds: e }), i;
  }
  finalize(t) {
    return this._fetchQueue.length || this._lock.isHeld()
      ? (async function (e, r, i) {
          try {
            await e.acquire(), await r(i), e.release();
          } catch (o) {
            throw (e.release(), o);
          }
        })(this._lock, this._fetchAllQueuedResources.bind(this), t)
      : Promise.resolve();
  }
  _initErrorTemplates() {
    this._errorTemplates ||
      (this._errorTemplates = {
        fill: this._createMeshTemplates([], es, !1),
        marker: this._createMeshTemplates([], Ji, !1),
        line: this._createMeshTemplates([], ts, !1),
      });
  }
  _fetchAllQueuedResources(t) {
    if (!this._fetchQueue.length) return Promise.resolve();
    const e = this._fetchQueue,
      r = this._cimAnalyses;
    return (
      (this._fetchQueue = []),
      (this._cimAnalyses = []),
      Promise.all(r)
        .then(() =>
          this._fetchResource(e, t).then((i) => {
            for (const { id: o, mosaicItem: n } of i)
              this._idToResolver.get(o)(n), this._idToResolver.delete(o);
          })
        )
        .catch((i) => {
          Kr(i)
            ? (this._fetchQueue = this._fetchQueue.concat(e))
            : (function (o) {
                return o.name === "worker:port-closed";
              })(i) ||
              A.error(
                new nt(
                  "mapview-template-store",
                  "Unable to fetch requested texture resources",
                  i
                )
              );
        })
    );
  }
  _createGroupId(t) {
    return (this._idCounter++ << 1) | (t ? 1 : 0);
  }
  _createTemplateId() {
    return this._templateIdCounter++;
  }
  async _createSMS(t) {
    const { spriteMosaicItem: e } = await this.getMosaicItem(t);
    return V(e, A) ? pt.fromSimpleMarker(t, e) : this._markerError;
  }
  async _createPMS(t) {
    const { spriteMosaicItem: e } = await this.getMosaicItem(t);
    return V(e, A) ? pt.fromPictureMarker(t, e) : this._markerError;
  }
  async _createSFS(t, e) {
    const { spriteMosaicItem: r } = await this.getMosaicItem(t);
    return V(r, A) ? Yt.fromSimpleFill(t, r, e) : this._fillError;
  }
  async _createPFS(t, e) {
    const { spriteMosaicItem: r } = await this.getMosaicItem(t);
    return V(r, A) ? Yt.fromPictureFill(t, r, e) : this._fillError;
  }
  async _createSLS(t, e) {
    const { spriteMosaicItem: r } = await this.getMosaicItem(t);
    return V(r, A) ? j.fromSimpleLine(t, r) : this._lineError;
  }
  async _createLMS(t) {
    const { spriteMosaicItem: e } = await this.getMosaicItem(t);
    return V(e, A) ? pt.fromLineSymbolMarker(t, e) : this._markerError;
  }
  async _createTS(t) {
    const { glyphMosaicItems: e } = await this.getMosaicItem(t);
    return ee.fromText(t, e ?? []);
  }
  async _createCIMText(t) {
    const { glyphMosaicItems: e } = await this.getMosaicItem(It(t), br(t.text));
    return V(e, A) ? ee.fromCIMText(t, e, this._tileInfo) : this._textError;
  }
  async _createCIMFill(t) {
    const { spriteMosaicItem: e } = await this.getMosaicItem(It(t));
    return V(e, A) ? Yt.fromCIMFill(t, e, this._tileInfo) : this._fillError;
  }
  async _createCIMLine(t) {
    const { spriteMosaicItem: e } = await this.getMosaicItem(It(t));
    return V(e, A) ? j.fromCIMLine(t, e, this._tileInfo) : this._lineError;
  }
  async _createCIMMarker(t) {
    const { spriteMosaicItem: e } = await this.getMosaicItem(It(t));
    return V(e, A) ? pt.fromCIMMarker(t, e, this._tileInfo) : this._markerError;
  }
  async _createCIM(t) {
    const e = t.templateHash;
    let r = this._cimTemplateCache.get(e);
    if (r != null) return r;
    switch (t.type) {
      case "marker":
        r = await this._createCIMMarker(t);
        break;
      case "line":
        r = await this._createCIMLine(t);
        break;
      case "fill":
        r = await this._createCIMFill(t);
        break;
      case "text":
        r = await this._createCIMText(t);
    }
    return this._cimTemplateCache.set(e, r), r;
  }
  async _createDynamicCIM(t) {
    const e = t.templateHash;
    let r = this._cimTemplateCache.get(e);
    if (r != null) return r;
    switch (t.type) {
      case "marker":
        r = ye.fromCIMMarker(t, this._tileInfo);
        break;
      case "line":
        r = qi.fromCIMLine(t, this._tileInfo);
        break;
      case "fill":
        r = Yi.fromCIMFill(t, this._tileInfo);
        break;
      case "text":
        r = ge.fromCIMText(t, this._tileInfo);
    }
    return this._cimTemplateCache.set(e, r), r;
  }
  _createPrimitiveMeshTemplates(t, e, r) {
    switch (e.type) {
      case "esriSMS":
        return q(t, this._createSMS(e));
      case "esriPMS":
        return q(t, this._createPMS(e));
      case "esriSFS":
        return q(t, this._createSFS(e, r));
      case "line-marker":
        return q(t, this._createLMS(e));
      case "esriPFS":
        return q(t, this._createPFS(e, r));
      case "esriSLS":
        return q(t, this._createSLS(e, !1));
      case "esriTS":
        return q(t, this._createTS(e));
      default:
        return (
          A.error(
            "Unable to create mesh template for unknown symbol type {: $ }{symbol.type}"
          ),
          t
        );
    }
  }
  _createMeshTemplates(t, e, r) {
    if (e.type.includes("3d"))
      return A.error("3D symbols are not supported with MapView"), t;
    if (e.type === "expanded-cim") {
      for (const i of e.layers)
        typeof i.materialHash == "function"
          ? q(t, this._createDynamicCIM(i))
          : q(t, this._createCIM(i));
      return t;
    }
    if (e.type === "composite-symbol") {
      for (const i of e.layers) this._createPrimitiveMeshTemplates(t, i, r);
      return t;
    }
    return e.type === "cim" || e.type === "label" || e.type === "web-style"
      ? t
      : this._createPrimitiveMeshTemplates(t, e, r);
  }
}
const rs = (s) => {
  if (!s.layers) return !1;
  for (const t of s.layers) if (typeof t.materialHash == "function") return !0;
  return !1;
};
class vs {
  constructor(t, e, r) {
    (this._loadPromise = ai()),
      (this._geometryType = t),
      (this._idField = e),
      (this._templateStore = r);
  }
  update(t, e) {
    R(t.mesh.labels) &&
      (this._labelTemplates = this._createLabelTemplates(t.mesh.labels, e)),
      (this._schema = t);
  }
  _createLabelTemplates(t, e) {
    const r = new Map();
    if (t.type === "simple") {
      for (const i of t.classes) {
        const o = Xe.fromLabelClass(i, e);
        r.set(i.index, o);
      }
      return r;
    }
    for (const i in t.classes) {
      const o = t.classes[i];
      for (const n of o) {
        const a = Xe.fromLabelClass(n, e);
        r.set(n.index, a);
      }
    }
    return r;
  }
  get templates() {
    return this._templateStore;
  }
  async analyze(t, e, r, i, o, n, a) {
    if (Ie(a)) return;
    let l;
    (r == null ? void 0 : r.type) === "dictionary" &&
      (l = await r.analyze(this._idField, t.copy(), e, o, n, a));
    let h = 0;
    for (; t.next(); ) {
      let u = null;
      if (
        ((u = l
          ? l[h++]
          : R(i) &&
            ei(t.getDisplayId()) &&
            t.readAttribute("cluster_count") !== 1
          ? i.match(this._idField, t, this._geometryType, o, n)
          : r.match(this._idField, t, this._geometryType, o, n)),
        t.setGroupId(u),
        yt(u))
      ) {
        const c = this._templateStore.getDynamicTemplateGroup(u).templates;
        for (const d of c)
          d && d.analyze && d.analyze(this._templateStore, t, o, n);
      }
    }
    return await this._loadPromise, this._templateStore.finalize(a);
  }
  async analyzeGraphics(t, e, r, i, o, n) {
    if (Ie(n)) return;
    const a = t.getCursor();
    for (
      r && (await r.analyze(this._idField, a.copy(), e, i, o, n));
      a.next();

    ) {
      let l = a.getGroupId();
      if (
        ((l != null && l !== -1) ||
          ((l =
            r == null
              ? void 0
              : r.match(this._idField, a, a.geometryType, i, o)),
          a.setGroupId(l)),
        yt(l))
      ) {
        const h = this._templateStore.getDynamicTemplateGroup(l).templates;
        for (const u of h)
          u && u.analyze && u.analyze(this._templateStore, a, i, o);
      }
      a.setGroupId(l);
    }
    return await this._loadPromise, this._templateStore.finalize(n);
  }
  writeGraphic(t, e, r, i) {
    const o = e.getGroupId(),
      n = e.getDisplayId(),
      a = this._templateStore.getTemplateGroup(o);
    if ((t.featureStart(e.insertAfter, 0), n != null)) {
      if (yt(o)) for (const l of a.templates) l && l.bindFeature(e, null, null);
      if (a) {
        for (const l of a.templates) l && l.write(t, e, r, i);
        t.featureEnd();
      }
    }
  }
  writeCursor(t, e, r, i, o, n, a) {
    const l = e.getGroupId(),
      h = e.getDisplayId(),
      u = this._templateStore.getTemplateGroup(l),
      c = u.templates,
      d = this._getSortKeyValue(e, u);
    if ((t.featureStart(0, d), h != null && c)) {
      if (yt(l)) for (const _ of c) _.bindFeature(e, r, i);
      for (const _ of c) _.write(t, e, o, a);
      if (R(n) && t.hasRecords) {
        const _ = n && this._findLabelRef(c);
        this._writeLabels(t, e, n, _, o, a);
      }
      t.featureEnd();
    }
  }
  _getSortKeyValue(t, e) {
    const r = this._schema.mesh.sortKey;
    if (G(r)) return 0;
    let i = 0;
    return (
      (i =
        r.byRenderer === !0 && e.sortKey != null
          ? e.sortKey
          : r.fieldIndex != null
          ? t.getComputedNumericAtIndex(r.fieldIndex)
          : r.field != null
          ? t.readAttribute(r.field)
          : t.readAttribute(this._idField)),
      (i *= r.order === "asc" ? 1 : -1),
      i == null || isNaN(i) ? 0 : i
    );
  }
  _findLabelRef(t) {
    for (const e of t) if (e instanceof pt) return e;
    return null;
  }
  _writeLabels(t, e, r, i, o, n) {
    for (const a of r)
      if (R(a) && a) {
        const { glyphs: l, rtl: h, index: u } = a,
          c = this._labelTemplates.get(u);
        if (!c) continue;
        c.setZoomLevel(o),
          c.bindReferenceTemplate(i),
          c.bindTextInfo(l, h),
          c.write(t, e, null, n);
      }
  }
}
const ae = mt.getLogger("esri/views/2d/engine/webgl/util/Matcher");
async function is(s, t, e, r) {
  switch (s.type) {
    case "simple":
    case "heatmap":
      return J.fromBasicRenderer(s, t, e, r);
    case "map":
      return we.fromUVRenderer(s, t, e, r);
    case "interval":
      return ve.fromCBRenderer(s, t, e, r);
    case "dictionary":
      return be.fromDictionaryRenderer(s, t, e, r);
    case "pie-chart":
      return Bt.fromPieChartRenderer(s, t, e, r);
    case "subtype":
      return Bt.fromSubtypes(s, t, e, r);
  }
}
class J {
  constructor() {
    (this.type = "feature"), (this._defaultResult = null);
  }
  static async fromBasicRenderer(t, e, r, i) {
    const o = new J();
    if (t.symbol) {
      const n = await Y(t.symbol, r, i),
        a = e.createTemplateGroup(n, null);
      o.setDefault(a);
    }
    return o;
  }
  static async fromPieChartRenderer(t, e, r, i) {
    const o = new J();
    if (t.markerSymbol) {
      const n = await Y(t.markerSymbol, r, i);
      let a;
      t.fillSymbol && (a = await Y(t.fillSymbol, r, i));
      const l = e.createTemplateGroup(n, a);
      o.setDefault(l);
    }
    return o;
  }
  size() {
    return 1;
  }
  getDefault() {
    return this._defaultResult;
  }
  setDefault(t) {
    this._defaultResult = t;
  }
  match(t, e, r, i, o) {
    return this.getDefault();
  }
  async analyze(t, e, r, i, o, n) {
    return null;
  }
}
class Bt extends J {
  constructor(t, e) {
    super(), (this._subMatchers = t), (this._subtypeField = e);
  }
  static async fromSubtypes(t, e, r, i) {
    const o = new Map(),
      n = [];
    for (const a in t.renderers) {
      const l = parseInt(a, 10),
        h = is(t.renderers[a], e, r, i).then((u) => o.set(l, u));
      n.push(h);
    }
    return await Promise.all(n), new Bt(o, t.subtypeField);
  }
  match(t, e, r, i, o) {
    const n = e.readAttribute(this._subtypeField),
      a = this._subMatchers.get(n);
    return a ? a.match(t, e, r, i, o) : null;
  }
}
class ve extends J {
  constructor(t, e, r, i) {
    super(),
      (this.type = "interval"),
      (this._intervals = []),
      (this._isMaxInclusive = e),
      (this._fieldIndex = i),
      (this._field = t),
      (this._normalizationInfo = r);
  }
  static async fromCBRenderer(t, e, r, i) {
    const {
        isMaxInclusive: o,
        normalizationField: n,
        normalizationTotal: a,
        normalizationType: l,
      } = t,
      h = t.field,
      u = new ve(
        h,
        o,
        { normalizationField: n, normalizationTotal: a, normalizationType: l },
        t.fieldIndex
      ),
      c = await Y(t.backgroundFillSymbol, r, i);
    await Promise.all(
      t.intervals.map(async (_) => {
        const f = await Y(_.symbol, r, i),
          m = await e.createTemplateGroup(f, c),
          p = { min: _.min, max: _.max };
        u.add(p, m);
      })
    );
    const d = await Y(t.defaultSymbol, r, i);
    if (d) {
      const _ = await e.createTemplateGroup(d, c);
      u.setDefault(_);
    }
    return u;
  }
  add(t, e) {
    this._intervals.push({ interval: t, result: e }),
      this._intervals.sort((r, i) => r.interval.min - i.interval.min);
  }
  size() {
    return super.size() + this._intervals.length;
  }
  match(t, e, r, i, o) {
    if (this._fieldIndex == null && !this._field) return this.getDefault();
    const n =
      this._fieldIndex != null
        ? e.getComputedNumericAtIndex(this._fieldIndex)
        : this._getValueFromField(e);
    if (n == null || isNaN(n) || n === 1 / 0 || n === -1 / 0)
      return this.getDefault();
    for (let a = 0; a < this._intervals.length; a++) {
      const { interval: l, result: h } = this._intervals[a],
        u = n >= l.min,
        c = this._isMaxInclusive ? n <= l.max : n < l.max;
      if (u && c) return h;
    }
    return this.getDefault();
  }
  _needsNormalization() {
    const t = this._normalizationInfo;
    return (
      t && (t.normalizationField || t.normalizationTotal || t.normalizationType)
    );
  }
  _getValueFromField(t) {
    const e = t.readAttribute(this._field);
    if (!this._needsNormalization() || e == null) return e;
    const {
        normalizationField: r,
        normalizationTotal: i,
        normalizationType: o,
      } = this._normalizationInfo,
      n = t.readAttribute(r) ?? 1;
    if (o)
      switch (o) {
        case "esriNormalizeByField":
          return n ? e / n : void 0;
        case "esriNormalizeByLog":
          return Math.log(e) * Math.LOG10E;
        case "esriNormalizeByPercentOfTotal":
          return (e / i) * 100;
        default:
          return void ae.error(`Found unknown normalization type: ${o}`);
      }
    else ae.error("Normalization is required, but no type was set!");
  }
}
class we extends J {
  constructor(t, e, r) {
    super(),
      (this.type = "map"),
      (this._nullResult = null),
      (this._resultsMap = new Map()),
      (this._fields = []),
      (this._fieldsIndex = r),
      (this._fields = t),
      (this._seperator = e || "");
  }
  static async fromUVRenderer(t, e, r, i) {
    const o = t.fieldDelimiter,
      n = [t.field];
    t.field2 && n.push(t.field2), t.field3 && n.push(t.field3);
    const a = await Y(t.backgroundFillSymbol, r, i),
      l = new we(n, o, t.fieldIndex);
    await Promise.all(
      t.map.map(async (u, c) => {
        const d = await Y(u.symbol, r, i),
          _ = c + 1,
          f = await e.createTemplateGroup(d, a, _);
        u.value === "<Null>" ? l.setNullResult(f) : l.add(u.value, f);
      })
    );
    const h = await Y(t.defaultSymbol, r, i);
    if (h) {
      const u = Number.MAX_SAFE_INTEGER,
        c = await e.createTemplateGroup(h, a, u);
      l.setDefault(c);
    }
    return l;
  }
  setNullResult(t) {
    this._nullResult = t;
  }
  add(t, e) {
    this._resultsMap.set(t.toString(), e);
  }
  size() {
    return super.size() + this._resultsMap.size;
  }
  match(t, e, r, i, o) {
    if (this._fieldsIndex == null && !this._fields) return this.getDefault();
    const n =
      this._fieldsIndex != null
        ? e.getComputedStringAtIndex(this._fieldsIndex)
        : this._getValueFromFields(e);
    if (this._nullResult !== null && (n == null || n === "" || n === "<Null>"))
      return this._nullResult;
    if (n == null) return this.getDefault();
    const a = n.toString();
    return this._resultsMap.has(a)
      ? this._resultsMap.get(a)
      : this.getDefault();
  }
  _getValueFromFields(t) {
    const e = [];
    for (const r of this._fields) {
      const i = t.readAttribute(r);
      i == null || i === "" ? e.push("<Null>") : e.push(i);
    }
    return e.join(this._seperator);
  }
}
let qt;
async function ss() {
  return (
    qt ||
      (qt = hr(
        () => import("./schemaUtils.264ba82d.js").then((s) => s.c),
        [
          "js/schemaUtils.264ba82d.js",
          "js/index.8fd7165c.js",
          "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
          "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
          "js/NvapForm.feb8550d.js",
          "js/vue.a7ce1fbe.js",
          "assets/NvapForm.356f5dc3.css",
          "js/vue-router.805f6e2a.js",
          "js/Table.e9c997d5.js",
          "js/vue-i18n.67a42238.js",
          "assets/Table.3b7647ef.css",
          "assets/index.a699c0e4.css",
          "js/color.4c5303e9.js",
          "js/enums.13513a14.js",
          "js/enums.64ab819c.js",
          "js/VertexElementDescriptor.2925c6af.js",
          "js/utils.1f803f1b.js",
          "js/MaterialKey.97cb3dc8.js",
          "js/definitions.ce677f69.js",
          "js/visualVariablesUtils.de38be9a.js",
          "js/ExpandedCIM.e22c8b13.js",
          "js/BidiEngine.520adad3.js",
          "js/GeometryUtils.874f8cf4.js",
          "js/Rect.6884a4ea.js",
          "js/quantizationUtils.1e9e702d.js",
          "js/floatRGBA.6f2fa7cd.js",
          "js/util.79a0d0b9.js",
        ]
      )),
    qt
  );
}
class be extends J {
  constructor(t, e, r, i, o, n) {
    super(),
      (this.type = "dictionary"),
      (this._groupIdCache = new Zr(100)),
      (this._loader = t),
      (this._fieldMap = t.fieldMap),
      (this._symbolFields = t.getSymbolFields()),
      (this._templates = e),
      (this._info = r),
      (this._scaleFn = i),
      (this._schemaUtilsModule = o),
      (this._symbolOptions = n);
  }
  static async fromDictionaryRenderer(t, e, r, i) {
    const [{ DictionaryLoader: o }, n] = await Promise.all([
        hr(
          () => import("./index.8fd7165c.js").then((h) => h.lF),
          [
            "js/index.8fd7165c.js",
            "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
            "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
            "js/NvapForm.feb8550d.js",
            "js/vue.a7ce1fbe.js",
            "assets/NvapForm.356f5dc3.css",
            "js/vue-router.805f6e2a.js",
            "js/Table.e9c997d5.js",
            "js/vue-i18n.67a42238.js",
            "assets/Table.3b7647ef.css",
            "assets/index.a699c0e4.css",
          ]
        ),
        ss(),
      ]),
      a = new o(t.url, t.config, t.fieldMap);
    await a.fetchResources({
      spatialReference: r.spatialReference,
      fields: r.fields,
    });
    const l = await (async function (h, u) {
      const c = h || 1;
      if (typeof c == "number") return (_, f, m) => c;
      const d = await Nr(c, u.spatialReference, u.fields);
      return (_, f, m) => Mi(d, _, { $view: m }, u.geometryType, f) || 1;
    })(t.scaleExpression, r);
    return new be(a, e, r, l, n, t.symbolOptions);
  }
  async _analyzeFeature(t, e, r, i, o) {
    const n = t.readLegacyFeature(),
      a = this._scaleFn(n, r, i),
      l = this._attributeHash(n) + "-" + a,
      h = this._groupIdCache.get(l);
    if (h) return h;
    const u = {
        ...i,
        spatialReference: this._info.spatialReference,
        abortOptions: o,
        fields: this._info.fields,
      },
      c = await this._loader.getSymbolAsync(n, u),
      d = Y(
        this._schemaUtilsModule.createSymbolSchema(c, this._symbolOptions),
        this._info,
        e,
        o
      ).then((_) => {
        if ((_ == null ? void 0 : _.type) !== "expanded-cim")
          return (
            ae.error(
              new nt(
                "mapview-bad-type",
                `Found unexpected type ${
                  _ == null ? void 0 : _.type
                } in dictionary response`
              )
            ),
            null
          );
        _.hash += "-" + a;
        for (const f of _.layers)
          (f.scaleFactor = a), (f.templateHash += "-" + a);
        return this._templates.createTemplateGroup(_, null);
      });
    return this._groupIdCache.put(l, d, 1), d;
  }
  async analyze(t, e, r, i, o, n) {
    const a = e.getCursor(),
      l = [];
    for (; a.next(); ) l.push(this._analyzeFeature(a, r, i, o, n));
    return Promise.all(l).then((h) => h.filter(R));
  }
  match(t, e, r, i, o) {
    return null;
  }
  _attributeHash(t) {
    var r;
    let e = "";
    for (const i of this._symbolFields) {
      const o = (r = this._fieldMap) == null ? void 0 : r[i];
      o && (e += t.attributes[o] + "-");
    }
    return e;
  }
}
export { gs as E, zt as a, br as b, V as e, Y as i, vs as n, is as o, Ms as x };
