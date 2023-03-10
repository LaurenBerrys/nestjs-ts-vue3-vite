import {
  c0 as V,
  e as O,
  aE as tt,
  az as et,
  cY as st,
  c2 as it,
  r as c,
  t as _,
  Q as rt,
  cT as P,
  aN as x,
  w,
  q as u,
  s as q,
  D as nt,
  cU as at,
  cZ as l,
  W as L,
} from "./index.8fd7165c.js";
import {
  o as F,
  c as Z,
  P as v,
  B as A,
  C as U,
  D as B,
  E as Y,
  F as b,
  G as C,
  H as K,
  M as ht,
  O as dt,
  N as ot,
  R as _t,
} from "./definitions.ce677f69.js";
import { r as ut } from "./TiledDisplayObject.3b82e169.js";
import { n as ct, l as lt, f as I } from "./visualVariablesUtils.1183f3fb.js";
import { W as T, K as Et } from "./color.4c5303e9.js";
import {
  D as j,
  P as H,
  G as X,
  L as $,
  M as xt,
  Y as pt,
  V as Rt,
} from "./enums.64ab819c.js";
import { x as ft } from "./VertexArrayObject.1b8f3583.js";
import { E as J } from "./Texture.fb0c670a.js";
class k extends ut {
  constructor(t, e, s, i) {
    super(t, e, s, i, F, F);
  }
  destroy() {
    super.destroy(),
      this._transforms && k.TransformCache.release(this.key.hash);
  }
  setTransform(t) {
    const e = this.resolution / t.resolution,
      s = this.transforms.tileMat3,
      [i, r] = t.toScreenNoRotation([0, 0], [this.x, this.y]),
      a = (this.width / this.rangeX) * e,
      h = (this.height / this.rangeY) * e;
    tt(s, a, 0, 0, 0, h, 0, i, r, 1),
      et(this.transforms.dvs, t.displayViewMat3, s);
    const d = this.transforms.labelMat2d,
      o = window.devicePixelRatio,
      E = st(V(), a * o, 0, 0, h * o, i * o, r * o);
    it(d, t.viewMat2d, E);
  }
  _createTransforms() {
    return k.TransformCache.acquire(this.key.hash);
  }
}
k.TransformCache = new (class {
  acquire(y) {
    return {
      refCount: 1,
      version: -1,
      labelMat2d: V(),
      tileMat3: O(),
      dvs: O(),
    };
  }
  release(y) {}
})();
const g = 2147483647;
class p {
  constructor(t) {
    (this._head = t), (this._cursor = t);
  }
  static from(t, e = 0, s = t.byteLength / n.BYTES_PER_RECORD - e) {
    const i = new n(
      new Int32Array(t, e * n.BYTES_PER_RECORD, s * n.ELEMENTS_PER_RECORD)
    );
    return new p(i);
  }
  size() {
    let t = this._cursor,
      e = 0;
    for (; t; ) (e += t.size()), (t = t._link);
    return e;
  }
  get id() {
    return this._cursor.id;
  }
  set id(t) {
    this._cursor.id = t;
  }
  get materialKey() {
    return this._cursor.materialKey;
  }
  set materialKey(t) {
    this._cursor.materialKey = t;
  }
  get insertAfter() {
    return this._cursor.insertAfter;
  }
  get indexFrom() {
    return this._cursor.indexFrom;
  }
  set indexFrom(t) {
    this._cursor.indexFrom = t;
  }
  get indexCount() {
    return this._cursor.indexCount;
  }
  set indexCount(t) {
    this._cursor.indexCount = t;
  }
  get vertexFrom() {
    return this._cursor.vertexFrom;
  }
  set vertexFrom(t) {
    this._cursor.vertexFrom = t;
  }
  get vertexCount() {
    return this._cursor.vertexCount;
  }
  set vertexCount(t) {
    this._cursor.vertexCount = t;
  }
  get sortKey() {
    return this._cursor.sortKey;
  }
  set sortKey(t) {
    this._cursor.sortKey = t;
  }
  get index() {
    return this._cursor._indexStart + this._cursor._index;
  }
  seekIndex(t) {
    let e = t;
    for (this._cursor = this._head; this._cursor; ) {
      const s = this._cursor.size();
      if (e < s) return (this._cursor._index = e), !0;
      (e -= s), (this._cursor = this._cursor._link);
    }
    return !1;
  }
  forEach(t) {
    const e = this.getCursor();
    for (; e.next(); ) t(e);
  }
  link(t) {
    if (!this._head) return void (this._head = t._head);
    let e = this._head;
    for (; e._link; ) e = e._link;
    (e._link = t._head), (e._link._indexStart = e._indexStart + e.size());
  }
  getCursor() {
    return this.copy();
  }
  lookup(t) {
    for (this._cursor = this._head; this._cursor && !this._cursor.lookup(t); ) {
      if (!this._cursor._link) return !1;
      this._cursor = this._cursor._link;
    }
    return !!this._cursor;
  }
  copy() {
    var i;
    const t = new p((i = this._head) == null ? void 0 : i.copy());
    if (!t._head) return t;
    let e = t._head,
      s = t._head._link;
    for (; s; ) (e._link = s.copy()), (e = s), (s = e._link);
    return t;
  }
  next() {
    return (
      !!this._cursor &&
      (!!this._cursor.next() ||
        (!!this._cursor._link &&
          ((this._cursor = this._cursor._link), this.next())))
    );
  }
  peekId() {
    return this._cursor.peekId() ?? this._cursor._link.peekId();
  }
  delete(t) {
    let e = this._head,
      s = null;
    for (; e; ) {
      if (e.delete(t))
        return (
          e.isEmpty() &&
            (c(s) && (s._link = e._link),
            e === this._head && (this._head = e._link),
            e === this._cursor && (this._cursor = e._link)),
          !0
        );
      (s = e), (e = e._link);
    }
    return !1;
  }
}
(p.ELEMENTS_PER_RECORD = Z),
  (p.BYTES_PER_RECORD = p.ELEMENTS_PER_RECORD * Int32Array.BYTES_PER_ELEMENT);
class n {
  constructor(t) {
    (this._link = null),
      (this._index = -1),
      (this._indexStart = 0),
      (this._packedRecordsF32 = null),
      (this._deletedCount = 0),
      (this._offsets = { instance: null }),
      (this._packedRecords = t);
  }
  static from(t, e = 0, s = t.byteLength / this.BYTES_PER_RECORD - e) {
    return new n(
      new Int32Array(t, e * this.BYTES_PER_RECORD, s * this.ELEMENTS_PER_RECORD)
    );
  }
  delete(t) {
    const e = this._index,
      s = this.lookup(t);
    if (s)
      for (this.id = g, ++this._deletedCount; this.next() && this.id === t; )
        (this.id = g), ++this._deletedCount;
    return (this._index = e), s;
  }
  isEmpty() {
    return this._deletedCount === this.size();
  }
  link(t) {
    this._link ? this._link.link(t) : (this._link = t);
  }
  lookup(t) {
    if (_(this._offsets.instance)) {
      this._offsets.instance = new Map();
      const s = this.copy();
      s._index = -1;
      let i = 0;
      for (; s.next(); )
        s.id !== i && (this._offsets.instance.set(s.id, s._index), (i = s.id));
    }
    if (!this._offsets.instance.has(t)) return !1;
    const e = this._index;
    return (
      (this._index = this._offsets.instance.get(t)),
      this.id !== g || ((this._index = e), !1)
    );
  }
  get id() {
    return this._packedRecords[this._index * n.ELEMENTS_PER_RECORD];
  }
  set id(t) {
    this._packedRecords[this._index * n.ELEMENTS_PER_RECORD] = t;
  }
  get materialKey() {
    return this._packedRecords[this._index * n.ELEMENTS_PER_RECORD + 1];
  }
  set materialKey(t) {
    this._packedRecords[this._index * n.ELEMENTS_PER_RECORD + 1] = t;
  }
  get insertAfter() {
    return this._packedRecords[this._index * n.ELEMENTS_PER_RECORD + 2];
  }
  get indexFrom() {
    return this._packedRecords[this._index * n.ELEMENTS_PER_RECORD + 3];
  }
  set indexFrom(t) {
    this._packedRecords[this._index * n.ELEMENTS_PER_RECORD + 3] = t;
  }
  get indexCount() {
    return this._packedRecords[this._index * n.ELEMENTS_PER_RECORD + 4];
  }
  set indexCount(t) {
    this._packedRecords[this._index * n.ELEMENTS_PER_RECORD + 4] = t;
  }
  get vertexFrom() {
    return this._packedRecords[this._index * n.ELEMENTS_PER_RECORD + 5];
  }
  set vertexFrom(t) {
    this._packedRecords[this._index * n.ELEMENTS_PER_RECORD + 5] = t;
  }
  get vertexCount() {
    return this._packedRecords[this._index * n.ELEMENTS_PER_RECORD + 6];
  }
  set vertexCount(t) {
    this._packedRecords[this._index * n.ELEMENTS_PER_RECORD + 6] = t;
  }
  get sortKey() {
    return (
      this._packedRecordsF32 ||
        (this._packedRecordsF32 = new Float32Array(this._packedRecords.buffer)),
      this._packedRecordsF32[this._index * n.ELEMENTS_PER_RECORD + 7]
    );
  }
  set sortKey(t) {
    this._packedRecordsF32 ||
      (this._packedRecordsF32 = new Float32Array(this._packedRecords.buffer)),
      (this._packedRecordsF32[this._index * n.ELEMENTS_PER_RECORD + 7] = t);
  }
  get index() {
    return this._index;
  }
  size() {
    return this._packedRecords.length / n.ELEMENTS_PER_RECORD;
  }
  next() {
    for (; ++this._index < this.size() && this.id === g; );
    return this._index < this.size();
  }
  peekId() {
    const t = (this._index + 1) * n.ELEMENTS_PER_RECORD;
    return t >= this._packedRecords.length ? 0 : this._packedRecords[t];
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const t = new n(this._packedRecords);
    return (
      (t._indexStart = this._indexStart),
      (t._link = this._link),
      (t._index = this._index),
      (t._offsets = this._offsets),
      (t._deletedCount = this._deletedCount),
      t
    );
  }
}
(n.ELEMENTS_PER_RECORD = Z),
  (n.BYTES_PER_RECORD = n.ELEMENTS_PER_RECORD * Int32Array.BYTES_PER_ELEMENT);
const M = rt.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),
  D = ct(lt, M);
class G {
  constructor(t, e, s) {
    (this._texture = null),
      (this._lastTexture = null),
      (this._fbos = {}),
      (this.texelSize = 4);
    const { buffer: i, pixelType: r, textureOnly: a } = t,
      h = T(r);
    (this.shared = s),
      (this.pixelType = r),
      (this.size = e),
      (this.textureOnly = a),
      a || (this.data = new h(u(i))),
      this._resetRange();
  }
  destroy() {
    x(this._texture, (t) => t.dispose());
    for (const t in this._fbos)
      x(this._fbos[t], (e) => {
        t === "0" && e.detachColorTexture(), e.dispose();
      }),
        (this._fbos[t] = null);
    this._texture = null;
  }
  get _textureDesc() {
    return {
      target: xt.TEXTURE_2D,
      wrapMode: j.CLAMP_TO_EDGE,
      pixelFormat: H.RGBA,
      dataType: this.pixelType,
      samplingMode: $.NEAREST,
      width: this.size,
      height: this.size,
    };
  }
  setData(t, e, s) {
    const i = I(t),
      r = u(this.data),
      a = i * this.texelSize + e;
    !r ||
      a >= r.length ||
      ((r[a] = s),
      (this.dirtyStart = Math.min(this.dirtyStart, i)),
      (this.dirtyEnd = Math.max(this.dirtyEnd, i)));
  }
  getData(t, e) {
    if (_(this.data)) return null;
    const s = I(t) * this.texelSize + e;
    return !this.data || s >= this.data.length ? null : this.data[s];
  }
  getTexture(t) {
    return L(this._texture, () => this._initTexture(t));
  }
  getFBO(t, e = 0) {
    if (_(this._fbos[e])) {
      const s = { colorTarget: pt.TEXTURE, depthStencilTarget: Rt.NONE },
        i = e === 0 ? this.getTexture(t) : this._textureDesc;
      this._fbos[e] = new ft(t, s, i);
    }
    return this._fbos[e];
  }
  get locked() {
    return (
      !(
        this.pixelType !== X.UNSIGNED_BYTE ||
        !this.shared ||
        this.textureOnly ||
        !w("esri-atomics") ||
        !this.data
      ) && Atomics.load(this.data, 0) === 1
    );
  }
  get hasDirty() {
    const t = this.dirtyStart;
    return this.dirtyEnd >= t;
  }
  updateTexture(t, e) {
    if (!this.locked) {
      try {
        const s = this.dirtyStart,
          i = this.dirtyEnd;
        if (!this.hasDirty) return;
        this._resetRange();
        const r = u(this.data).buffer,
          a = this.getTexture(t),
          h = 4,
          d = (s - (s % this.size)) / this.size,
          o = (i - (i % this.size)) / this.size,
          E = d,
          m = this.size,
          R = o,
          f = d * this.size * h,
          S = (m + R * this.size) * h - f,
          z = T(this.pixelType),
          Q = new z(r, f * z.BYTES_PER_ELEMENT, S),
          W = this.size,
          N = R - E + 1;
        if (N > this.size)
          return void M.error(
            new q(
              "mapview-webgl",
              "Out-of-bounds index when updating AttributeData"
            )
          );
        a.updateData(0, 0, E, W, N, Q);
      } catch {}
      e();
    }
  }
  update(t) {
    const { data: e, start: s, end: i } = t;
    if (c(e) && c(this.data)) {
      const r = this.data,
        a = s * this.texelSize;
      for (let h = 0; h < e.length; h++) {
        const d = 1 << h % this.texelSize;
        t.layout & d && (r[a + h] = e[h]);
      }
    }
    (this.dirtyStart = Math.min(this.dirtyStart, s)),
      (this.dirtyEnd = Math.max(this.dirtyEnd, i));
  }
  resize(t, e) {
    const s = this.size;
    if (((this.size = e), this.textureOnly))
      return void (
        s !== this.size &&
        ((this._lastTexture = this._texture), (this._texture = null))
      );
    const i = T(this.pixelType);
    this.destroy(), (this.data = new i(u(t.buffer)));
  }
  _resetRange() {
    (this.dirtyStart = 2147483647), (this.dirtyEnd = 0);
  }
  _initTexture(t) {
    const e = new J(t, this._textureDesc, L(this.data, void 0));
    if (c(this._lastTexture) && this._fbos[0]) {
      const s = this._lastTexture.descriptor.width,
        i = this._lastTexture.descriptor.height,
        r = this._lastTexture.descriptor.dataType,
        a = this._lastTexture.descriptor.pixelFormat,
        h = this.getFBO(t),
        d = Et(r),
        o = new (T(r))(new ArrayBuffer(s * i * d * this.texelSize)),
        E = t.getBoundFramebufferObject(),
        { x: m, y: R, width: f, height: S } = t.getViewport();
      t.bindFramebuffer(h),
        h.readPixels(0, 0, s, i, a, r, o),
        e.updateData(0, 0, 0, 2 * s, i / 2, o),
        t.setViewport(m, R, f, S),
        t.bindFramebuffer(E);
    }
    return this.destroy(), (this._texture = e), this._texture;
  }
}
class Dt {
  constructor(t) {
    (this._onUpdate = t),
      (this._initialized = !1),
      (this._forceNextUpload = !1),
      (this._locked = !1);
  }
  initialize(t) {
    const { blocks: e, shared: s, size: i } = t;
    if (
      ((this.shared = s),
      (this.size = i),
      D("Initializing AttributeStoreView", t),
      _(this._data))
    )
      this._data = P(e, (r) => new G(r, i, s));
    else
      for (let r = 0; r < this._data.length; r++) {
        const a = this._data[r],
          h = e[r];
        c(h) && (_(a) ? (this._data[r] = new G(h, i, s)) : a.resize(h, i));
      }
    this._initialized = !0;
  }
  destroy() {
    x(this._data, (t) => P(t, (e) => e.destroy())),
      x(this._defaultTexture, (t) => t.dispose());
  }
  isEmpty() {
    const t = this._data;
    return _(t);
  }
  isUpdating() {
    const t = c(this._pendingAttributeUpdate);
    return w("esri-2d-log-updating"), t;
  }
  getBlock(t) {
    return _(this._data) ? null : this._data[t];
  }
  setLabelMinZoom(t, e) {
    this.setData(t, 0, 1, e);
  }
  getLabelMinZoom(t) {
    return this.getData(t, 0, 1, 255);
  }
  getFilterFlags(t) {
    return this.getData(t, 0, 0, 0);
  }
  getVVSize(t) {
    return this.getData(t, v, 0, 0);
  }
  getData(t, e, s, i) {
    if (!this._data) return 0;
    const r = u(this._data)[e];
    if (_(r)) return 0;
    const a = r.getData(t, s);
    return c(a) ? a : i;
  }
  setData(t, e, s, i) {
    const r = u(this._data)[e];
    u(r).setData(t, s, i);
  }
  lockTextureUpload() {
    this._locked = !0;
  }
  unlockTextureUpload() {
    this._locked = !1;
  }
  forceTextureUpload() {
    this._forceNextUpload = !0;
  }
  async requestUpdate(t) {
    if (this._pendingAttributeUpdate)
      return void M.error(
        new q(
          "mapview-webgl",
          "Tried to update attribute data with a pending update"
        )
      );
    const e = nt();
    return (
      D("AttributeStoreView Update Requested", t),
      (this._pendingAttributeUpdate = { data: t, resolver: e }),
      this._onUpdate(),
      e.promise
    );
  }
  update() {
    if (this._initialized && c(this._pendingAttributeUpdate)) {
      w("esri-2d-update-debug");
      const { data: t, resolver: e } = this._pendingAttributeUpdate,
        s = u(this._data);
      for (let i = 0; i < t.blocks.length; i++) {
        const r = t.blocks[i],
          a = s[i];
        x(a, (h) =>
          x(r, (d) => {
            D(`Updating block ${i}`, d), h.update(d);
          })
        );
      }
      (this._pendingAttributeUpdate = null), e(), this._onUpdate();
    }
  }
  bindTextures(t, e = !0) {
    const s = this._getDefaultTexture(t);
    if (!this._initialized)
      return (
        t.bindTexture(s, A),
        void (
          e &&
          (t.bindTexture(s, U),
          t.bindTexture(s, B),
          t.bindTexture(s, Y),
          t.bindTexture(s, b),
          t.bindTexture(s, C),
          t.bindTexture(s, K))
        )
      );
    const i = u(this._data);
    (this._locked && !this._forceNextUpload) ||
      (at(i, (r) => r.updateTexture(t, () => this._onUpdate())),
      (this._forceNextUpload = !1)),
      t.bindTexture(
        l(i[ht], s, (r) => r.getTexture(t)),
        A
      ),
      e &&
        (t.bindTexture(
          l(i[dt], s, (r) => r.getTexture(t)),
          K
        ),
        t.bindTexture(
          l(i[ot], s, (r) => r.getTexture(t)),
          U
        ),
        t.bindTexture(
          l(i[v], s, (r) => r.getTexture(t)),
          B
        ),
        t.bindTexture(
          l(i[_t], s, (r) => r.getTexture(t)),
          Y
        ),
        t.bindTexture(
          l(i[b], s, (r) => r.getTexture(t)),
          b
        ),
        t.bindTexture(
          l(i[C], s, (r) => r.getTexture(t)),
          C
        ));
  }
  _getDefaultTexture(t) {
    if (_(this._defaultTexture)) {
      const e = {
        wrapMode: j.CLAMP_TO_EDGE,
        pixelFormat: H.RGBA,
        dataType: X.UNSIGNED_BYTE,
        samplingMode: $.NEAREST,
        width: 1,
        height: 1,
      };
      this._defaultTexture = new J(t, e, new Uint8Array(4));
    }
    return this._defaultTexture;
  }
}
export { Dt as G, p as i, k as m };
