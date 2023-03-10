import {
  u as a,
  m as u,
  i as f,
  T as l,
  c as p,
  h as o,
  l as c,
  a as F,
  p as m,
  b as _,
  x as y,
  y as b,
  o as w,
  d as v,
  g,
  j as T,
  V as N,
  q as A,
  A as B,
  L as E,
  B as L,
} from "./BufferView.b3039ce1.js";
import { e as U } from "./types.e1c0a5bf.js";
class n {
  constructor(e, t) {
    (this.layout = e),
      (this.buffer = typeof t == "number" ? new ArrayBuffer(t * e.stride) : t);
    for (const s of e.fieldNames) {
      const r = e.fields.get(s);
      this[s] = new r.constructor(this.buffer, r.offset, this.stride);
    }
  }
  get stride() {
    return this.layout.stride;
  }
  get count() {
    return this.buffer.byteLength / this.stride;
  }
  get byteLength() {
    return this.buffer.byteLength;
  }
  getField(e, t) {
    const s = this[e];
    return s &&
      s.elementCount === t.ElementCount &&
      s.elementType === t.ElementType
      ? s
      : null;
  }
  slice(e, t) {
    return new n(
      this.layout,
      this.buffer.slice(e * this.stride, t * this.stride)
    );
  }
  copyFrom(e, t, s, r) {
    const i = this.stride;
    if (i % 4 == 0) {
      const h = new Uint32Array(e.buffer, t * i, (r * i) / 4);
      new Uint32Array(this.buffer, s * i, (r * i) / 4).set(h);
    } else {
      const h = new Uint8Array(e.buffer, t * i, r * i);
      new Uint8Array(this.buffer, s * i, r * i).set(h);
    }
  }
}
class d {
  constructor() {
    (this.stride = 0), (this.fields = new Map()), (this.fieldNames = []);
  }
  vec2f(e, t) {
    return this._appendField(e, a, t), this;
  }
  vec2f64(e, t) {
    return this._appendField(e, u, t), this;
  }
  vec3f(e, t) {
    return this._appendField(e, f, t), this;
  }
  vec3f64(e, t) {
    return this._appendField(e, l, t), this;
  }
  vec4f(e, t) {
    return this._appendField(e, p, t), this;
  }
  vec4f64(e, t) {
    return this._appendField(e, o, t), this;
  }
  mat3f(e, t) {
    return this._appendField(e, c, t), this;
  }
  mat3f64(e, t) {
    return this._appendField(e, F, t), this;
  }
  mat4f(e, t) {
    return this._appendField(e, m, t), this;
  }
  mat4f64(e, t) {
    return this._appendField(e, _, t), this;
  }
  vec4u8(e, t) {
    return this._appendField(e, y, t), this;
  }
  f32(e, t) {
    return this._appendField(e, b, t), this;
  }
  f64(e, t) {
    return this._appendField(e, w, t), this;
  }
  u8(e, t) {
    return this._appendField(e, v, t), this;
  }
  u16(e, t) {
    return this._appendField(e, g, t), this;
  }
  i8(e, t) {
    return this._appendField(e, T, t), this;
  }
  vec2i8(e, t) {
    return this._appendField(e, N, t), this;
  }
  vec2i16(e, t) {
    return this._appendField(e, A, t), this;
  }
  vec2u8(e, t) {
    return this._appendField(e, B, t), this;
  }
  vec4u16(e, t) {
    return this._appendField(e, E, t), this;
  }
  u32(e, t) {
    return this._appendField(e, L, t), this;
  }
  _appendField(e, t, s) {
    const r = t.ElementCount * U(t.ElementType),
      i = this.stride;
    this.fields.set(e, { size: r, constructor: t, offset: i, optional: s }),
      (this.stride += r),
      this.fieldNames.push(e);
  }
  alignTo(e) {
    return (this.stride = Math.floor((this.stride + e - 1) / e) * e), this;
  }
  hasField(e) {
    return this.fieldNames.includes(e);
  }
  createBuffer(e) {
    return new n(this, e);
  }
  createView(e) {
    return new n(this, e);
  }
  clone() {
    const e = new d();
    return (
      (e.stride = this.stride),
      (e.fields = new Map()),
      this.fields.forEach((t, s) => e.fields.set(s, t)),
      (e.fieldNames = this.fieldNames.slice()),
      (e.BufferType = this.BufferType),
      e
    );
  }
}
function x() {
  return new d();
}
export { x as T };
