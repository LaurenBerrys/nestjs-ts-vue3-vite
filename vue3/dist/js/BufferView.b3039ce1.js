import { a_ as X, c as Z, fq as $ } from "./index.8fd7165c.js";
let K = class {
  constructor(f, e, t = 0, r, s) {
    (this.TypedArrayConstructor = f), (this.elementCount = 9);
    const i = this.TypedArrayConstructor;
    r === void 0 && (r = 9 * i.BYTES_PER_ELEMENT);
    const u = e.byteLength === 0 ? 0 : t;
    (this.typedBuffer =
      s == null ? new i(e, u) : new i(e, u, (s - t) / i.BYTES_PER_ELEMENT)),
      (this.typedBufferStride = r / i.BYTES_PER_ELEMENT),
      (this.count = Math.ceil(
        this.typedBuffer.length / this.typedBufferStride
      )),
      (this.stride =
        this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT);
  }
  sliceBuffer(f, e, t = this.count - e) {
    const r = this.typedBuffer.byteOffset + e * this.stride;
    return new f(this.buffer, r, this.stride, r + t * this.stride);
  }
  getMat(f, e) {
    let t = f * this.typedBufferStride;
    for (let r = 0; r < 9; r++) e[r] = this.typedBuffer[t++];
    return e;
  }
  setMat(f, e) {
    let t = f * this.typedBufferStride;
    for (let r = 0; r < 9; r++) this.typedBuffer[t++] = e[r];
  }
  get(f, e) {
    return this.typedBuffer[f * this.typedBufferStride + e];
  }
  set(f, e, t) {
    this.typedBuffer[f * this.typedBufferStride + e] = t;
  }
  copyFrom(f, e, t) {
    const r = this.typedBuffer,
      s = e.typedBuffer;
    let i = f * this.typedBufferStride,
      u = t * e.typedBufferStride;
    for (let y = 0; y < 9; ++y) r[i++] = s[u++];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
};
K.ElementCount = 9;
let Q = class {
  constructor(f, e, t = 0, r, s) {
    (this.TypedArrayConstructor = f), (this.elementCount = 16);
    const i = this.TypedArrayConstructor;
    r === void 0 && (r = 16 * i.BYTES_PER_ELEMENT);
    const u = e.byteLength === 0 ? 0 : t;
    (this.typedBuffer =
      s == null ? new i(e, u) : new i(e, u, (s - t) / i.BYTES_PER_ELEMENT)),
      (this.typedBufferStride = r / i.BYTES_PER_ELEMENT),
      (this.count = Math.ceil(
        this.typedBuffer.length / this.typedBufferStride
      )),
      (this.stride =
        this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT);
  }
  sliceBuffer(f, e, t = this.count - e) {
    const r = this.typedBuffer.byteOffset + e * this.stride;
    return new f(this.buffer, r, this.stride, r + t * this.stride);
  }
  getMat(f, e) {
    let t = f * this.typedBufferStride;
    for (let r = 0; r < 16; r++) e[r] = this.typedBuffer[t++];
    return e;
  }
  setMat(f, e) {
    let t = f * this.typedBufferStride;
    for (let r = 0; r < 16; r++) this.typedBuffer[t++] = e[r];
  }
  get(f, e) {
    return this.typedBuffer[f * this.typedBufferStride + e];
  }
  set(f, e, t) {
    this.typedBuffer[f * this.typedBufferStride + e] = t;
  }
  copyFrom(f, e, t) {
    const r = this.typedBuffer,
      s = e.typedBuffer;
    let i = f * this.typedBufferStride,
      u = t * e.typedBufferStride;
    for (let y = 0; y < 16; ++y) r[i++] = s[u++];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
};
Q.ElementCount = 16;
class n {
  constructor(e, t, r = 0, s, i) {
    (this.TypedArrayConstructor = e), (this.elementCount = 1);
    const u = this.TypedArrayConstructor;
    s === void 0 && (s = u.BYTES_PER_ELEMENT);
    const y = t.byteLength === 0 ? 0 : r;
    (this.typedBuffer =
      i == null ? new u(t, y) : new u(t, y, (i - r) / u.BYTES_PER_ELEMENT)),
      (this.stride = s),
      (this.typedBufferStride = s / u.BYTES_PER_ELEMENT),
      (this.count = Math.ceil(
        this.typedBuffer.length / this.typedBufferStride
      ));
  }
  sliceBuffer(e, t, r = this.count - t) {
    const s = this.typedBuffer.byteOffset + t * this.stride;
    return new e(this.buffer, s, this.stride, s + r * this.stride);
  }
  get(e) {
    return this.typedBuffer[e * this.typedBufferStride];
  }
  set(e, t) {
    this.typedBuffer[e * this.typedBufferStride] = t;
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
}
n.ElementCount = 1;
let h = class {
  constructor(f, e, t = 0, r, s) {
    (this.TypedArrayConstructor = f), (this.elementCount = 2);
    const i = this.TypedArrayConstructor;
    r === void 0 && (r = 2 * i.BYTES_PER_ELEMENT);
    const u = e.byteLength === 0 ? 0 : t;
    (this.typedBuffer =
      s == null ? new i(e, u) : new i(e, u, (s - t) / i.BYTES_PER_ELEMENT)),
      (this.typedBufferStride = r / i.BYTES_PER_ELEMENT),
      (this.count = Math.ceil(
        this.typedBuffer.length / this.typedBufferStride
      )),
      (this.stride =
        this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT);
  }
  sliceBuffer(f, e, t = this.count - e) {
    const r = this.typedBuffer.byteOffset + e * this.stride;
    return new f(this.buffer, r, this.stride, r + t * this.stride);
  }
  getVec(f, e) {
    return (
      (f *= this.typedBufferStride),
      X(e, this.typedBuffer[f], this.typedBuffer[f + 1])
    );
  }
  setVec(f, e) {
    (f *= this.typedBufferStride),
      (this.typedBuffer[f++] = e[0]),
      (this.typedBuffer[f] = e[1]);
  }
  get(f, e) {
    return this.typedBuffer[f * this.typedBufferStride + e];
  }
  set(f, e, t) {
    this.typedBuffer[f * this.typedBufferStride + e] = t;
  }
  setValues(f, e, t) {
    (f *= this.typedBufferStride),
      (this.typedBuffer[f++] = e),
      (this.typedBuffer[f] = t);
  }
  copyFrom(f, e, t) {
    const r = this.typedBuffer,
      s = e.typedBuffer;
    let i = f * this.typedBufferStride,
      u = t * e.typedBufferStride;
    (r[i++] = s[u++]), (r[i] = s[u]);
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
};
h.ElementCount = 2;
let c = class {
  constructor(f, e, t = 0, r, s) {
    (this.TypedArrayConstructor = f), (this.elementCount = 3);
    const i = this.TypedArrayConstructor;
    r === void 0 && (r = 3 * i.BYTES_PER_ELEMENT);
    const u = e.byteLength === 0 ? 0 : t;
    (this.typedBuffer =
      s == null ? new i(e, u) : new i(e, u, (s - t) / i.BYTES_PER_ELEMENT)),
      (this.typedBufferStride = r / i.BYTES_PER_ELEMENT),
      (this.count = Math.ceil(
        this.typedBuffer.length / this.typedBufferStride
      )),
      (this.stride =
        this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT);
  }
  sliceBuffer(f, e, t = this.count - e) {
    const r = this.typedBuffer.byteOffset + e * this.stride;
    return new f(this.buffer, r, this.stride, r + t * this.stride);
  }
  getVec(f, e) {
    return (
      (f *= this.typedBufferStride),
      Z(
        e,
        this.typedBuffer[f],
        this.typedBuffer[f + 1],
        this.typedBuffer[f + 2]
      )
    );
  }
  setVec(f, e) {
    (f *= this.typedBufferStride),
      (this.typedBuffer[f++] = e[0]),
      (this.typedBuffer[f++] = e[1]),
      (this.typedBuffer[f] = e[2]);
  }
  get(f, e) {
    return this.typedBuffer[f * this.typedBufferStride + e];
  }
  set(f, e, t) {
    this.typedBuffer[f * this.typedBufferStride + e] = t;
  }
  setValues(f, e, t, r) {
    (f *= this.typedBufferStride),
      (this.typedBuffer[f++] = e),
      (this.typedBuffer[f++] = t),
      (this.typedBuffer[f] = r);
  }
  copyFrom(f, e, t) {
    const r = this.typedBuffer,
      s = e.typedBuffer;
    let i = f * this.typedBufferStride,
      u = t * e.typedBufferStride;
    (r[i++] = s[u++]), (r[i++] = s[u++]), (r[i] = s[u]);
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
};
c.ElementCount = 3;
class d {
  constructor(e, t, r = 0, s, i) {
    (this.TypedArrayConstructor = e), (this.start = r), (this.elementCount = 4);
    const u = this.TypedArrayConstructor;
    s === void 0 && (s = 4 * u.BYTES_PER_ELEMENT);
    const y = t.byteLength === 0 ? 0 : r;
    (this.typedBuffer =
      i == null ? new u(t, y) : new u(t, y, (i - r) / u.BYTES_PER_ELEMENT)),
      (this.typedBufferStride = s / u.BYTES_PER_ELEMENT),
      (this.count = Math.ceil(
        this.typedBuffer.length / this.typedBufferStride
      )),
      (this.stride =
        this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT);
  }
  sliceBuffer(e, t, r = this.count - t) {
    const s = this.typedBuffer.byteOffset + t * this.stride;
    return new e(this.buffer, s, this.stride, s + r * this.stride);
  }
  getVec(e, t) {
    return (
      (e *= this.typedBufferStride),
      $(
        t,
        this.typedBuffer[e++],
        this.typedBuffer[e++],
        this.typedBuffer[e++],
        this.typedBuffer[e]
      )
    );
  }
  setVec(e, t) {
    (e *= this.typedBufferStride),
      (this.typedBuffer[e++] = t[0]),
      (this.typedBuffer[e++] = t[1]),
      (this.typedBuffer[e++] = t[2]),
      (this.typedBuffer[e] = t[3]);
  }
  get(e, t) {
    return this.typedBuffer[e * this.typedBufferStride + t];
  }
  set(e, t, r) {
    this.typedBuffer[e * this.typedBufferStride + t] = r;
  }
  setValues(e, t, r, s, i) {
    (e *= this.typedBufferStride),
      (this.typedBuffer[e++] = t),
      (this.typedBuffer[e++] = r),
      (this.typedBuffer[e++] = s),
      (this.typedBuffer[e] = i);
  }
  copyFrom(e, t, r) {
    const s = this.typedBuffer,
      i = t.typedBuffer;
    let u = e * this.typedBufferStride,
      y = r * t.typedBufferStride;
    (s[u++] = i[y++]), (s[u++] = i[y++]), (s[u++] = i[y++]), (s[u] = i[y]);
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
}
d.ElementCount = 4;
class W extends n {
  constructor(e, t = 0, r, s) {
    super(Float32Array, e, t, r, s), (this.elementType = "f32");
  }
  static fromTypedArray(e, t) {
    return new W(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
W.ElementType = "f32";
class p extends h {
  constructor(e, t = 0, r, s) {
    super(Float32Array, e, t, r, s), (this.elementType = "f32");
  }
  slice(e, t) {
    return this.sliceBuffer(p, e, t);
  }
  static fromTypedArray(e, t) {
    return new p(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
p.ElementType = "f32";
class l extends c {
  constructor(e, t = 0, r, s) {
    super(Float32Array, e, t, r, s), (this.elementType = "f32");
  }
  slice(e, t) {
    return this.sliceBuffer(l, e, t);
  }
  static fromTypedArray(e, t) {
    return new l(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
l.ElementType = "f32";
class o extends d {
  constructor(e, t = 0, r, s) {
    super(Float32Array, e, t, r, s), (this.elementType = "f32");
  }
  slice(e, t) {
    return this.sliceBuffer(o, e, t);
  }
  static fromTypedArray(e, t) {
    return new o(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
o.ElementType = "f32";
class a extends K {
  constructor(e, t = 0, r, s) {
    super(Float32Array, e, t, r, s), (this.elementType = "f32");
  }
  slice(e, t) {
    return this.sliceBuffer(a, e, t);
  }
  static fromTypedArray(e, t) {
    return new a(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
a.ElementType = "f32";
class B extends K {
  constructor(e, t = 0, r, s) {
    super(Float64Array, e, t, r, s), (this.elementType = "f64");
  }
  slice(e, t) {
    return this.sliceBuffer(B, e, t);
  }
  static fromTypedArray(e, t) {
    return new B(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
B.ElementType = "f64";
class b extends Q {
  constructor(e, t = 0, r, s) {
    super(Float32Array, e, t, r, s), (this.elementType = "f32");
  }
  slice(e, t) {
    return this.sliceBuffer(b, e, t);
  }
  static fromTypedArray(e, t) {
    return new b(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
b.ElementType = "f32";
class T extends Q {
  constructor(e, t = 0, r, s) {
    super(Float64Array, e, t, r, s), (this.elementType = "f64");
  }
  slice(e, t) {
    return this.sliceBuffer(T, e, t);
  }
  static fromTypedArray(e, t) {
    return new T(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
T.ElementType = "f64";
class E extends n {
  constructor(e, t = 0, r, s) {
    super(Float64Array, e, t, r, s), (this.elementType = "f64");
  }
  slice(e, t) {
    return this.sliceBuffer(E, e, t);
  }
  static fromTypedArray(e, t) {
    return new E(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
E.ElementType = "f64";
class m extends h {
  constructor(e, t = 0, r, s) {
    super(Float64Array, e, t, r, s), (this.elementType = "f64");
  }
  slice(e, t) {
    return this.sliceBuffer(m, e, t);
  }
  static fromTypedArray(e, t) {
    return new m(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
m.ElementType = "f64";
class A extends c {
  constructor(e, t = 0, r, s) {
    super(Float64Array, e, t, r, s), (this.elementType = "f64");
  }
  slice(e, t) {
    return this.sliceBuffer(A, e, t);
  }
  static fromTypedArray(e, t) {
    return new A(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
A.ElementType = "f64";
class O extends d {
  constructor(e, t = 0, r, s) {
    super(Float64Array, e, t, r, s), (this.elementType = "f64");
  }
  slice(e, t) {
    return this.sliceBuffer(O, e, t);
  }
  static fromTypedArray(e, t) {
    return new O(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
O.ElementType = "f64";
class S extends n {
  constructor(e, t = 0, r, s) {
    super(Uint8Array, e, t, r, s), (this.elementType = "u8");
  }
  slice(e, t) {
    return this.sliceBuffer(S, e, t);
  }
  static fromTypedArray(e, t) {
    return new S(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
S.ElementType = "u8";
class g extends h {
  constructor(e, t = 0, r, s) {
    super(Uint8Array, e, t, r, s), (this.elementType = "u8");
  }
  slice(e, t) {
    return this.sliceBuffer(g, e, t);
  }
  static fromTypedArray(e, t) {
    return new g(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
g.ElementType = "u8";
class L extends c {
  constructor(e, t = 0, r, s) {
    super(Uint8Array, e, t, r, s), (this.elementType = "u8");
  }
  slice(e, t) {
    return this.sliceBuffer(L, e, t);
  }
  static fromTypedArray(e, t) {
    return new L(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
L.ElementType = "u8";
class w extends d {
  constructor(e, t = 0, r, s) {
    super(Uint8Array, e, t, r, s), (this.elementType = "u8");
  }
  slice(e, t) {
    return this.sliceBuffer(w, e, t);
  }
  static fromTypedArray(e, t) {
    return new w(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
w.ElementType = "u8";
class x extends n {
  constructor(e, t = 0, r, s) {
    super(Uint16Array, e, t, r, s), (this.elementType = "u16");
  }
  slice(e, t) {
    return this.sliceBuffer(x, e, t);
  }
  static fromTypedArray(e, t) {
    return new x(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
x.ElementType = "u16";
class M extends h {
  constructor(e, t = 0, r, s) {
    super(Uint16Array, e, t, r, s), (this.elementType = "u16");
  }
  slice(e, t) {
    return this.sliceBuffer(M, e, t);
  }
  static fromTypedArray(e, t) {
    return new M(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
M.ElementType = "u16";
class C extends c {
  constructor(e, t = 0, r, s) {
    super(Uint16Array, e, t, r, s), (this.elementType = "u16");
  }
  slice(e, t) {
    return this.sliceBuffer(C, e, t);
  }
  static fromTypedArray(e, t) {
    return new C(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
C.ElementType = "u16";
class N extends d {
  constructor(e, t = 0, r, s) {
    super(Uint16Array, e, t, r, s), (this.elementType = "u16");
  }
  slice(e, t) {
    return this.sliceBuffer(N, e, t);
  }
  static fromTypedArray(e, t) {
    return new N(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
N.ElementType = "u16";
class P extends n {
  constructor(e, t = 0, r, s) {
    super(Uint32Array, e, t, r, s), (this.elementType = "u32");
  }
  slice(e, t) {
    return this.sliceBuffer(P, e, t);
  }
  static fromTypedArray(e, t) {
    return new P(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
P.ElementType = "u32";
class R extends h {
  constructor(e, t = 0, r, s) {
    super(Uint32Array, e, t, r, s), (this.elementType = "u32");
  }
  slice(e, t) {
    return this.sliceBuffer(R, e, t);
  }
  static fromTypedArray(e, t) {
    return new R(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
R.ElementType = "u32";
class Y extends c {
  constructor(e, t = 0, r, s) {
    super(Uint32Array, e, t, r, s), (this.elementType = "u32");
  }
  slice(e, t) {
    return this.sliceBuffer(Y, e, t);
  }
  static fromTypedArray(e, t) {
    return new Y(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
Y.ElementType = "u32";
class F extends d {
  constructor(e, t = 0, r, s) {
    super(Uint32Array, e, t, r, s), (this.elementType = "u32");
  }
  slice(e, t) {
    return this.sliceBuffer(F, e, t);
  }
  static fromTypedArray(e, t) {
    return new F(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
F.ElementType = "u32";
class I extends n {
  constructor(e, t = 0, r, s) {
    super(Int8Array, e, t, r, s), (this.elementType = "i8");
  }
  slice(e, t) {
    return this.sliceBuffer(I, e, t);
  }
  static fromTypedArray(e, t) {
    return new I(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
I.ElementType = "i8";
class U extends h {
  constructor(e, t = 0, r, s) {
    super(Int8Array, e, t, r, s), (this.elementType = "i8");
  }
  slice(e, t) {
    return this.sliceBuffer(U, e, t);
  }
  static fromTypedArray(e, t) {
    return new U(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
U.ElementType = "i8";
class V extends c {
  constructor(e, t = 0, r, s) {
    super(Int8Array, e, t, r, s), (this.elementType = "i8");
  }
  slice(e, t) {
    return this.sliceBuffer(V, e, t);
  }
  static fromTypedArray(e, t) {
    return new V(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
V.ElementType = "i8";
class v extends d {
  constructor(e, t = 0, r, s) {
    super(Int8Array, e, t, r, s), (this.elementType = "i8");
  }
  slice(e, t) {
    return this.sliceBuffer(v, e, t);
  }
  static fromTypedArray(e, t) {
    return new v(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
v.ElementType = "i8";
class q extends n {
  constructor(e, t = 0, r, s) {
    super(Int16Array, e, t, r, s), (this.elementType = "i16");
  }
  slice(e, t) {
    return this.sliceBuffer(q, e, t);
  }
  static fromTypedArray(e, t) {
    return new q(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
q.ElementType = "i16";
class G extends h {
  constructor(e, t = 0, r, s) {
    super(Int16Array, e, t, r, s), (this.elementType = "i16");
  }
  slice(e, t) {
    return this.sliceBuffer(G, e, t);
  }
  static fromTypedArray(e, t) {
    return new G(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
G.ElementType = "i16";
class H extends c {
  constructor(e, t = 0, r, s) {
    super(Int16Array, e, t, r, s), (this.elementType = "i16");
  }
  slice(e, t) {
    return this.sliceBuffer(H, e, t);
  }
  static fromTypedArray(e, t) {
    return new H(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
H.ElementType = "i16";
class j extends d {
  constructor(e, t = 0, r, s) {
    super(Int16Array, e, t, r, s), (this.elementType = "i16");
  }
  slice(e, t) {
    return this.sliceBuffer(j, e, t);
  }
  static fromTypedArray(e, t) {
    return new j(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
j.ElementType = "i16";
class k extends n {
  constructor(e, t = 0, r, s) {
    super(Int32Array, e, t, r, s), (this.elementType = "i32");
  }
  slice(e, t) {
    return this.sliceBuffer(k, e, t);
  }
  static fromTypedArray(e, t) {
    return new k(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
k.ElementType = "i32";
class z extends h {
  constructor(e, t = 0, r, s) {
    super(Int32Array, e, t, r, s), (this.elementType = "i32");
  }
  slice(e, t) {
    return this.sliceBuffer(z, e, t);
  }
  static fromTypedArray(e, t) {
    return new z(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
z.ElementType = "i32";
class D extends c {
  constructor(e, t = 0, r, s) {
    super(Int32Array, e, t, r, s), (this.elementType = "i32");
  }
  slice(e, t) {
    return this.sliceBuffer(D, e, t);
  }
  static fromTypedArray(e, t) {
    return new D(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
D.ElementType = "i32";
class J extends d {
  constructor(e, t = 0, r, s) {
    super(Int32Array, e, t, r, s), (this.elementType = "i32");
  }
  slice(e, t) {
    return this.sliceBuffer(J, e, t);
  }
  static fromTypedArray(e, t) {
    return new J(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
  }
}
J.ElementType = "i32";
export {
  g as A,
  P as B,
  k as C,
  z as D,
  C as E,
  R as F,
  D as G,
  J as H,
  Y as I,
  N as L,
  V as M,
  L as O,
  v as S,
  A as T,
  F as U,
  U as V,
  B as a,
  T as b,
  o as c,
  S as d,
  x as g,
  O as h,
  l as i,
  I as j,
  q as k,
  a as l,
  m,
  E as o,
  b as p,
  G as q,
  p as u,
  H as v,
  M as w,
  w as x,
  W as y,
  j as z,
};
