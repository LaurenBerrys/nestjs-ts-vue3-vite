import {
  r as c,
  t as l,
  aN as E,
  bS as X,
  E as U,
  c0 as Z,
  w as B,
  W as V,
  D as G,
  ae as N,
  ag as W,
  j,
  T as $,
} from "./index.8fd7165c.js";
import { s as F } from "./CircularArray.6cd6ba2b.js";
import { t as Y, E as J, T as L } from "./color.4c5303e9.js";
import { i as z, m as Q } from "./AttributeStoreView.413dc93f.js";
import { a as S, i as tt, e as et } from "./BufferPool.8dc92598.js";
import { E as M, f as st } from "./VertexArrayObject.1b8f3583.js";
import { F as D } from "./enums.64ab819c.js";
import { n as rt } from "./schemaUtils.264ba82d.js";
import { o as it } from "./BaseTileRenderer.a3fd4cf9.js";
import { b as nt } from "./visualVariablesUtils.1183f3fb.js";
import { w as _ } from "./WGLContainer.e7ddd41d.js";
import { o as ht } from "./FeatureContainer.3aa1973d.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./enums.13513a14.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./definitions.ce677f69.js";
import "./TiledDisplayObject.3b82e169.js";
import "./Container.a5892366.js";
import "./Texture.fb0c670a.js";
import "./utils.1f803f1b.js";
import "./MaterialKey.97cb3dc8.js";
import "./visualVariablesUtils.de38be9a.js";
import "./ExpandedCIM.e22c8b13.js";
import "./BidiEngine.520adad3.js";
import "./GeometryUtils.874f8cf4.js";
import "./Rect.6884a4ea.js";
import "./quantizationUtils.1e9e702d.js";
import "./floatRGBA.6f2fa7cd.js";
import "./util.79a0d0b9.js";
import "./ProgramTemplate.4bbf0f5e.js";
import "./StyleDefinition.4f77c81e.js";
import "./config.1337d16e.js";
import "./GeometryUtils.82ab0a13.js";
import "./earcut.9f54f087.js";
import "./TileContainer.4bfeb0d8.js";
const A = 4294967296;
class k {
  constructor(t) {
    (this._savedCursor = null),
      (this._savedOffset = null),
      (this._head = t),
      (this._cursor = t);
  }
  static from(t) {
    const e = I.from(new Float32Array(t));
    return new k(e);
  }
  get id() {
    return this._cursor.id;
  }
  get baseZoom() {
    return this._cursor.baseZoom;
  }
  get anchorX() {
    return this._cursor.anchorX;
  }
  get anchorY() {
    return this._cursor.anchorY;
  }
  get directionX() {
    return this._cursor.directionX;
  }
  get directionY() {
    return this._cursor.directionY;
  }
  get size() {
    return this._cursor.size;
  }
  get materialKey() {
    return this._cursor.materialKey;
  }
  get boundsCount() {
    return this._cursor.boundsCount;
  }
  computedMinZoom() {
    return this._cursor.computedMinZoom();
  }
  setComputedMinZoom(t) {
    return this._cursor.setComputedMinZoom(t);
  }
  boundsComputedAnchorX(t) {
    return this._cursor.boundsComputedAnchorX(t);
  }
  boundsComputedAnchorY(t) {
    return this._cursor.boundsComputedAnchorY(t);
  }
  setBoundsComputedAnchorX(t, e) {
    return this._cursor.setBoundsComputedAnchorX(t, e);
  }
  setBoundsComputedAnchorY(t, e) {
    return this._cursor.setBoundsComputedAnchorY(t, e);
  }
  boundsX(t) {
    return this._cursor.boundsX(t);
  }
  boundsY(t) {
    return this._cursor.boundsY(t);
  }
  boundsWidth(t) {
    return this._cursor.boundsWidth(t);
  }
  boundsHeight(t) {
    return this._cursor.boundsHeight(t);
  }
  link(t) {
    if (c(t._head)) return this._cursor.link(t._head);
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    var r;
    const t = new k((r = this._head) == null ? void 0 : r.copy());
    if (!t._head) return t;
    let e = t._head,
      s = t._head._link;
    for (; s; ) (e._link = s.copy()), (e = s), (s = e._link);
    return t;
  }
  peekId() {
    return this._cursor.peekId() ?? this._cursor._link.peekId();
  }
  nextId() {
    const t = this.id;
    for (; t === this.id; ) if (!this.next()) return !1;
    return !0;
  }
  save() {
    (this._savedCursor = this._cursor),
      (this._savedOffset = this._cursor._offset);
  }
  restore() {
    this._savedCursor && (this._cursor = this._savedCursor),
      this._savedOffset != null && (this._cursor._offset = this._savedOffset);
  }
  next() {
    if (!this._cursor) return !1;
    if (!this._cursor.next()) {
      if (!this._cursor._link) return !1;
      (this._cursor = this._cursor._link), (this._cursor._offset = 0);
    }
    return !0;
  }
  lookup(t) {
    for (this._cursor = this._head; this._cursor && !this._cursor.lookup(t); ) {
      if (!this._cursor._link) return !1;
      this._cursor = this._cursor._link;
    }
    return !!this._cursor;
  }
  delete(t) {
    let e = this._head,
      s = null;
    for (; e; ) {
      if (e.delete(t)) return e.isEmpty() && c(s) && (s._link = e._link), !0;
      (s = e), (e = e._link);
    }
    return !1;
  }
}
class I {
  constructor(t) {
    (this._offset = -1),
      (this._link = null),
      (this._count = 0),
      (this._deletedCount = 0),
      (this._offsets = { instance: null }),
      (this._buffer = t);
  }
  static from(t) {
    return new I(new Float32Array(t));
  }
  isEmpty() {
    return this._deletedCount === this.count;
  }
  get count() {
    return this._count || (this._count = this._computeCount()), this._count;
  }
  get id() {
    return this._buffer[this._offset + 0];
  }
  set id(t) {
    this._buffer[this._offset + 0] = t;
  }
  get baseZoom() {
    return this._buffer[this._offset + 1];
  }
  get anchorX() {
    return this._buffer[this._offset + 2];
  }
  get anchorY() {
    return this._buffer[this._offset + 3];
  }
  get directionX() {
    return this._buffer[this._offset + 4];
  }
  get directionY() {
    return this._buffer[this._offset + 5];
  }
  get size() {
    return this._buffer[this._offset + 6];
  }
  get materialKey() {
    return this._buffer[this._offset + 7];
  }
  computedMinZoom() {
    return this._buffer[this._offset + 8];
  }
  setComputedMinZoom(t) {
    this._buffer[this._offset + 8] = t;
  }
  get boundsCount() {
    return this._buffer[this._offset + 9];
  }
  boundsComputedAnchorX(t) {
    return this._buffer[this._offset + 10 + 6 * t + 0];
  }
  boundsComputedAnchorY(t) {
    return this._buffer[this._offset + 10 + 6 * t + 1];
  }
  setBoundsComputedAnchorX(t, e) {
    this._buffer[this._offset + 10 + 6 * t + 0] = e;
  }
  setBoundsComputedAnchorY(t, e) {
    this._buffer[this._offset + 10 + 6 * t + 1] = e;
  }
  boundsX(t) {
    return this._buffer[this._offset + 10 + 6 * t + 2];
  }
  boundsY(t) {
    return this._buffer[this._offset + 10 + 6 * t + 3];
  }
  boundsWidth(t) {
    return this._buffer[this._offset + 10 + 6 * t + 4];
  }
  boundsHeight(t) {
    return this._buffer[this._offset + 10 + 6 * t + 5];
  }
  link(t) {
    let e = this;
    for (; e._link; ) e = e._link;
    e._link = t;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const t = new I(this._buffer);
    return (
      (t._link = this._link),
      (t._offset = this._offset),
      (t._deletedCount = this._deletedCount),
      (t._offsets = this._offsets),
      (t._count = this._count),
      t
    );
  }
  peekId() {
    const t = this._offset + 10 + 6 * this.boundsCount + 0;
    return t >= this._buffer.length ? 0 : this._buffer[t];
  }
  next() {
    let t = 0;
    for (
      ;
      this._offset < this._buffer.length &&
      t++ < 100 &&
      (this._offset === -1
        ? (this._offset = 0)
        : (this._offset += 10 + 6 * this.boundsCount),
      this.id === A);

    );
    return this.id !== A && this._offset < this._buffer.length;
  }
  delete(t) {
    const e = this._offset,
      s = this.lookup(t);
    if (s)
      for (
        this.id = 4294967295, ++this._deletedCount;
        this.next() && this.id === t;

      )
        (this.id = 4294967295), ++this._deletedCount;
    return (this._offset = e), s;
  }
  lookup(t) {
    const e = this._offset;
    if (l(this._offsets.instance)) {
      this._offsets.instance = new Map();
      const s = this.copy();
      s._offset = -1;
      let r = 0;
      for (; s.next(); )
        s.id !== r && (this._offsets.instance.set(s.id, s._offset), (r = s.id));
    }
    return (
      !!this._offsets.instance.has(t) &&
      ((this._offset = this._offsets.instance.get(t)),
      this.id !== A || ((this._offset = e), !1))
    );
  }
  _computeCount() {
    const t = this._offset;
    let e = 0;
    for (this._offset = -1; this.next(); ) e++;
    return (this._offset = t), e;
  }
}
class T {
  constructor(t, e, s, r, i) {
    (this.target = t),
      (this.geometryType = e),
      (this.materialKey = s),
      (this.indexFrom = r),
      (this.indexCount = i);
  }
  get indexEnd() {
    return this.indexFrom + this.indexCount;
  }
  extend(t) {
    this.indexCount += t;
  }
}
let at = class O {
  constructor(t, e) {
    (this.geometryType = 0), (this._target = t), (this.geometryType = e);
  }
  static from(t, e, s, r) {
    const i = new O(t, e);
    if (c(r)) for (const a of r) s.seekIndex(a), i.addRecord(s);
    else for (; s.next(); ) i.addRecord(s);
    return i;
  }
  addRecord(t) {
    const e = this._target,
      s = this.geometryType,
      r = t.materialKey;
    let i = t.indexFrom,
      a = t.indexCount;
    const y = t.vertexFrom,
      h = t.vertexCount;
    if ((a || ((i = y), (a = h)), l(this._head))) {
      const d = new T(e, s, r, i, a);
      return void (this._head = new S(d));
    }
    let o = null,
      u = this._head;
    for (; u; ) {
      if (i < u.data.indexFrom) return this._insert(r, i, a, o, u);
      (o = u), (u = u.next);
    }
    this._insert(r, i, a, o, null);
  }
  forEach(t) {
    c(this._head) && this._head.forEach(t);
  }
  *infos() {
    if (c(this._head)) for (const t of this._head.values()) yield t;
  }
  _insert(t, e, s, r, i) {
    if (l(r) && l(i)) {
      const a = new T(this._target, this.geometryType, t, e, s);
      this._head = new S(a);
    }
    return l(r) && c(i)
      ? this._insertAtHead(t, e, s, i)
      : c(r) && l(i)
      ? this._insertAtEnd(t, e, s, r)
      : c(r) && c(i)
      ? this._insertAtMiddle(t, e, s, r, i)
      : void 0;
  }
  _insertAtHead(t, e, s, r) {
    const i = e + s;
    if (t === r.data.materialKey && i === r.data.indexFrom)
      (r.data.indexFrom = e), (r.data.indexCount += s);
    else {
      const a = new T(this._target, this.geometryType, t, e, s);
      (this._head = new S(a)), (this._head.next = r);
    }
  }
  _insertAtEnd(t, e, s, r) {
    if (r.data.materialKey === t && r.data.indexEnd === e)
      r.data.indexCount += s;
    else {
      const i = new T(this._target, this.geometryType, t, e, s),
        a = new S(i);
      r.next = a;
    }
  }
  _insertAtMiddle(t, e, s, r, i) {
    const a = e + s;
    if (r.data.materialKey === t && r.data.indexEnd === e)
      (r.data.indexCount += s),
        r.data.materialKey === i.data.materialKey &&
          r.data.indexEnd === i.data.indexFrom &&
          ((r.data.indexCount += i.data.indexCount), (r.next = i.next));
    else if (t === i.data.materialKey && a === i.data.indexFrom)
      (i.data.indexFrom = e), (i.data.indexCount += s);
    else {
      const y = new T(this._target, this.geometryType, t, e, s),
        h = new S(y);
      (r.next = h), (h.next = i);
    }
  }
};
class K {
  constructor(t, e, s, r) {
    const i = tt.create(e * s * Uint32Array.BYTES_PER_ELEMENT, r);
    (this.size = e),
      (this.strideInt = s),
      (this.bufferType = t),
      (this.dirty = { start: 1 / 0, end: 0 }),
      (this._gpu = null),
      (this._cpu = i),
      this.clear();
  }
  get elementSize() {
    return this._cpu.length / this.strideInt;
  }
  get invalidated() {
    return this.bufferSize > 0 && !this._gpu;
  }
  get invalidatedComputeBuffer() {
    return this.bufferSize > 0 && !this._gpuComputeTriangles;
  }
  invalidate() {
    this._invalidateTriangleBuffer(),
      E(this._gpu, (t) => t.dispose()),
      (this._gpu = null);
  }
  _invalidateTriangleBuffer() {
    E(this._gpuComputeTriangles, (t) => t.dispose()),
      (this._gpuComputeTriangles = null);
  }
  destroy() {
    E(this._gpu, (t) => t.dispose()),
      E(this._gpuComputeTriangles, (t) => t.dispose()),
      E(this._cpu, (t) => t.destroy()),
      E(this._cpu2, (t) => t.destroy());
  }
  clear() {
    (this.dirty.start = 1 / 0),
      (this.dirty.end = 0),
      (this.freeList = new et({
        start: 0,
        end: this._cpu.length / this.strideInt,
      })),
      (this.fillPointer = 0);
  }
  ensure(t) {
    if (
      !(this.maxAvailableSpace() >= t) &&
      t * this.strideInt > this._cpu.length - this.fillPointer
    ) {
      this.invalidate();
      const e = this._cpu.length / this.strideInt,
        s = Math.round(1.25 * (e + t)),
        r = s * this.strideInt;
      this._cpu.expand(r * Uint32Array.BYTES_PER_ELEMENT),
        this.freeList.free(e, s - e);
    }
  }
  set(t, e) {
    this._cpu.array[t] !== e &&
      ((this._cpu.array[t] = e),
      (this.dirty.start = Math.min(t, this.dirty.start)),
      (this.dirty.end = Math.max(t, this.dirty.end)));
  }
  getGPUBuffer(t, e = !1) {
    if (!this.bufferSize) return null;
    if (e) {
      if (this.bufferType !== "index")
        throw new Error(
          "Tired to get triangle buffer, but target is not an index buffer"
        );
      return (
        l(this._gpuComputeTriangles) &&
          (this._gpuComputeTriangles = this._createComputeBuffer(t)),
        this._gpuComputeTriangles
      );
    }
    return l(this._gpu) && (this._gpu = this._createBuffer(t)), this._gpu;
  }
  getCPUBuffer() {
    if (!this._cpu2) {
      const t = this._cpu.slice();
      this._cpu2 = t;
    }
    return (
      this._cpu2.length !== this._cpu.length &&
        this._cpu2.expand(this._cpu.length * this._cpu.array.BYTES_PER_ELEMENT),
      this._cpu2.set(this._cpu),
      this._cpu2
    );
  }
  get bufferSize() {
    return this._cpu.length / this.strideInt;
  }
  maxAvailableSpace() {
    return this.freeList.maxAvailableSpace();
  }
  insert(t, e, s, r) {
    const i = s * this.strideInt;
    if (!i) return 0;
    const a = e * this.strideInt * Uint32Array.BYTES_PER_ELEMENT,
      y = new Uint32Array(t, a, i),
      h =
        X(this.freeList.firstFit(s), "First fit region must be defined") *
        this.strideInt,
      o = i,
      u = h / this.strideInt - e;
    if (r !== 0) for (let d = 0; d < y.length; d++) y[d] += r;
    return (
      this._cpu.array.set(y, h),
      (this.dirty.start = Math.min(this.dirty.start, h)),
      (this.dirty.end = Math.max(this.dirty.end, h + o)),
      (this.fillPointer = Math.max(this.fillPointer, h + o)),
      u
    );
  }
  free(t, e, s) {
    const r = t * this.strideInt,
      i = (t + e) * this.strideInt;
    if (s === !0)
      for (let a = t; a !== t + e; a++)
        this._cpu.array[a * this.strideInt] = 2147450879;
    (this.dirty.start = Math.min(this.dirty.start, r)),
      (this.dirty.end = Math.max(this.dirty.end, i)),
      this.freeList.free(t, e);
  }
  upload() {
    if (this.dirty.end) {
      if ((this._invalidateTriangleBuffer(), l(this._gpu)))
        return (this.dirty.start = 1 / 0), void (this.dirty.end = 0);
      this._gpu.setSubData(
        this._cpu.array,
        this.dirty.start,
        this.dirty.start,
        this.dirty.end
      ),
        (this.dirty.start = 1 / 0),
        (this.dirty.end = 0);
    }
  }
  _createBuffer(t) {
    const e = D.DYNAMIC_DRAW;
    return this.bufferType === "index"
      ? M.createIndex(t, e, this._cpu.array)
      : M.createVertex(t, e, this._cpu.array);
  }
  _createComputeBuffer(t) {
    const e = D.DYNAMIC_DRAW,
      s = new Uint32Array(this.fillPointer / 3);
    for (let r = 0; r < this.fillPointer; r += 3) s[r / 3] = this._cpu.array[r];
    return M.createIndex(t, e, s);
  }
}
let ot = 0;
class ut extends Q {
  constructor(t, e, s, r, i, a) {
    super(t, e, s, r),
      (this.instanceId = ot++),
      (this.patchCount = 0),
      (this._renderState = {
        current: { geometry: new Map(), metrics: null },
        next: null,
        swap: !1,
        swapFrames: 0,
        locked: !1,
      }),
      (this._patches = new F(100)),
      (this._bufferPatches = new F(100)),
      (this._lastCommitTime = 0),
      (this.transforms.labelMat2d = Z()),
      (this._store = i),
      (this._requestLabelUpdate = a);
  }
  destroy() {
    super.destroy(),
      this._renderState.current.geometry.forEach((t) => t.destroy()),
      c(this._renderState.next) &&
        this._renderState.next.geometry.forEach((t) => t.destroy()),
      (this._renderState.current = null),
      (this._renderState.next = null);
  }
  get labelMetrics() {
    return this._renderState.current.metrics;
  }
  get hasData() {
    return !!this._renderState.current.geometry.size;
  }
  getGeometry(t) {
    return this._renderState.current.geometry.get(t);
  }
  patch(t, e) {
    this.patchCount++,
      t.clear && this._patches.size >= 50 && this._dropPatches();
    const s = t,
      r = s.addOrUpdate && this.key.id !== s.addOrUpdate.tileKeyOrigin;
    e && r
      ? this._bufferPatches.enqueue(s)
      : ((s.sort = s.sort && !e), this._patches.enqueue(s)),
      this.requestRender();
  }
  commit(t) {
    if (this._lastCommitTime !== t.time) {
      this._lastCommitTime = t.time;
      for (let e = 0; e < 4; e++)
        this._updateMesh(), this.isReady && this._updateBufferMesh();
      this._renderState.swap &&
        (this._swapRenderStates(), this.requestRender());
    }
  }
  lock() {
    this._renderState.locked = !0;
  }
  unlock() {
    (this._renderState.locked = !1), this._flushUpdates(), this._swap();
  }
  _swapRenderStates() {
    if (this._renderState.next) {
      if (this._renderState.locked)
        return (this._renderState.swap = !0), void this.requestRender();
      (this._renderState.swap = !0), this._swap();
    }
  }
  _swap() {
    this._renderState.swap &&
      ((this._renderState.swap = !1),
      c(this._renderState.next) &&
        (this._renderState.current.geometry.forEach((t) => t.destroy()),
        (this._renderState.current = this._renderState.next),
        (this._renderState.next = null),
        this._requestLabelUpdate()));
  }
  _flushUpdates() {
    let t = this._patches.maxSize;
    for (; this._patches.size && t--; ) this._updateMesh(), this._swap();
  }
  _updateBufferMesh() {
    const t = this._bufferPatches.peek();
    if (!c(t) || !t.clear || this._renderState.next === null)
      for (; this._bufferPatches.size; ) {
        const e = this._bufferPatches.dequeue();
        c(e) && this._patchBuffer(e);
      }
  }
  _updateMesh() {
    var e, s, r, i;
    const t = this._patches.dequeue();
    if (c(t)) {
      if (B("esri-2d-update-debug")) {
        const a = t,
          y = (e = a.addOrUpdate) == null ? void 0 : e.tileKeyOrigin;
        this.key.id;
        let h = "";
        for (let o = 0; o < 5; o++)
          h +=
            (i =
              (r = (s = a.addOrUpdate) == null ? void 0 : s.data[o]) == null
                ? void 0
                : r.records) != null && i.byteLength
              ? 1
              : 0;
      }
      t.clear === !0 &&
        (c(this._renderState.next) &&
          (this._renderState.next.geometry.forEach((a) => a.destroy()),
          (this._renderState.next = null)),
        (this._renderState.next = { geometry: new Map(), metrics: null }),
        B("esri-2d-update-debug")),
        this.requestRender(),
        this._patch(t),
        t.end &&
          (B("esri-2d-update-debug"), this.ready(), this._swapRenderStates());
    }
  }
  _patch(t) {
    Y((e) => {
      this._remove(e, t.remove), this._insert(e, t, !1);
    });
  }
  _patchBuffer(t) {
    Y((e) => {
      this._insert(e, t, !0);
    });
  }
  _insert(t, e, s) {
    var r;
    try {
      const i = V(this._renderState.next, this._renderState.current),
        a = (r = e.addOrUpdate) == null ? void 0 : r.data[t],
        y = i.geometry;
      if (l(a)) return;
      y.has(t) ||
        (B("esri-2d-update-debug"),
        y.set(
          t,
          new (class {
            constructor(h, o) {
              (this._vaos = new Map()),
                (this._indicesInvalid = !1),
                (this.geometryType = h),
                (this._stage = o);
            }
            destroy() {
              for (const [h, o] of this._vaos) c(o) && o.dispose(!1);
              (this._indexBuffer = U(this._indexBuffer)),
                (this._vertexBuffer = U(this._vertexBuffer));
            }
            insert(h, o, u) {
              if (!h.records.byteLength) return;
              const d = h.stride;
              if (this._vertexBuffer && this._indexBuffer) {
                const p = h.indices.byteLength / 4,
                  f = h.vertices.byteLength / d;
                this._indexBuffer.ensure(p), this._vertexBuffer.ensure(f);
                const { vertices: m, indices: g } = h,
                  w = z.from(h.records),
                  C = this._vertexBuffer.insert(m, 0, m.byteLength / d, 0),
                  v = this._indexBuffer.insert(g, 0, g.byteLength / 4, C);
                if (
                  (w.forEach((b) => {
                    (b.indexFrom += v), (b.vertexFrom += C);
                  }),
                  X(this._records, "Expected records to be defined").link(w),
                  o)
                )
                  this._indicesInvalid = !0;
                else if (this._displayList) {
                  const b = w.getCursor();
                  for (; b.next(); ) this._displayList.addRecord(b);
                }
              } else {
                const p = h.indices.byteLength / 4,
                  f = h.vertices.byteLength / d,
                  m = d / Uint32Array.BYTES_PER_ELEMENT,
                  g = this._stage.bufferPool;
                (this._records = z.from(h.records)),
                  (this._indexBuffer = new K("index", p, 1, g)),
                  (this._vertexBuffer = new K("vertex", f, m, g)),
                  this._indexBuffer.insert(
                    h.indices,
                    0,
                    h.indices.byteLength / 4,
                    0
                  ),
                  this._vertexBuffer.insert(
                    h.vertices,
                    0,
                    h.vertices.byteLength / d,
                    0
                  ),
                  o && (this._indicesInvalid = !0);
              }
            }
            remove(h) {
              if (!l(this._records))
                for (const o of h) {
                  const u = this._records.getCursor();
                  if (!u.lookup(o)) continue;
                  const d = u.indexFrom,
                    p = u.vertexFrom;
                  let f = u.indexCount,
                    m = u.vertexCount;
                  for (; u.next() && u.id === o; )
                    (f += u.indexCount), (m += u.vertexCount);
                  this._indexBuffer.free(d, f),
                    this._vertexBuffer.free(p, m, !0),
                    this._records.delete(o);
                }
            }
            getVAO(h, o, u, d) {
              if (
                !this._vertexBuffer ||
                !this._indexBuffer ||
                l(this._records) ||
                !this._vertexBuffer.bufferSize
              )
                return null;
              const p = d ? 1 : 0;
              let f = this._vaos.get(p);
              (this._vertexBuffer.invalidated ||
                this._indexBuffer.invalidated ||
                (d && this._indexBuffer.invalidatedComputeBuffer)) &&
                (E(f, (w) => w.dispose(!1)), (f = null)),
                this._vertexBuffer.upload(),
                this._indexBuffer.upload();
              const m = this._indexBuffer.getGPUBuffer(h, p === 1),
                g = this._vertexBuffer.getGPUBuffer(h);
              return (
                f ||
                  ((f = new st(h, u, o, { geometry: g }, m)),
                  this._vaos.set(p, f)),
                f
              );
            }
            forEachCommand(h) {
              if (!l(this._records)) {
                if ((this._sortIndices(this._records), !this._displayList)) {
                  const o = this._cursorIndexOrder;
                  this._displayList = at.from(
                    this,
                    this.geometryType,
                    this._records.getCursor(),
                    o
                  );
                }
                this._displayList.forEach(h);
              }
            }
            _sortIndices(h) {
              const o = !!this._indexBuffer.bufferSize;
              if (!this._indicesInvalid) return;
              this._indicesInvalid = !1;
              let u = 0;
              const d = h.getCursor(),
                p = [],
                f = [],
                m = [];
              for (; d.next(); )
                f.push(d.index), m.push(d.sortKey), p.push(d.id);
              f.sort((C, v) => {
                const b = m[v],
                  x = m[C];
                return x === b ? p[v] - p[C] : b - x;
              });
              const g = h.getCursor(),
                w = o
                  ? this._indexBuffer.getCPUBuffer()
                  : this._vertexBuffer.getCPUBuffer();
              for (const C of f) {
                if (!g.seekIndex(C)) throw new Error("Expected to find index");
                if (o) {
                  const { indexFrom: v, indexCount: b } = g;
                  g.indexFrom = u;
                  for (let x = 0; x < b; x++)
                    this._indexBuffer.set(u++, w.array[v + x]);
                } else {
                  const { vertexFrom: v, vertexCount: b } = g,
                    x = this._vertexBuffer.strideInt,
                    q = v * x,
                    H = q + b * x;
                  g.vertexFrom = u / x;
                  for (let R = q; R < H; R++)
                    this._vertexBuffer.set(u++, w.array[R]);
                }
              }
              (this._cursorIndexOrder = f), (this._displayList = null);
            }
          })(t, this.stage)
        )),
        B("esri-2d-update-debug"),
        y.get(t).insert(a, e.sort, s),
        t === J.LABEL && this._insertLabelMetrics(e.type, a.metrics, e.clear);
    } catch {}
  }
  _insertLabelMetrics(t, e, s) {
    const r = V(this._renderState.next, this._renderState.current);
    if (l(e)) return;
    const i = k.from(e);
    if (l(r.metrics)) r.metrics = i;
    else {
      if (t === "update") {
        const a = i.getCursor();
        for (; a.next(); ) r.metrics.delete(a.id);
      }
      r.metrics.link(i);
    }
  }
  _remove(t, e) {
    const s = V(this._renderState.next, this._renderState.current).geometry.get(
      t
    );
    e && e.length && s && (s.remove(e), this._removeLabelMetrics(e));
  }
  _removeLabelMetrics(t) {
    const { metrics: e } = V(this._renderState.next, this._renderState.current);
    if (!l(e) && t.length) for (const s of t) for (; e.delete(s); );
  }
  _dropPatches() {
    const t = [];
    let e = !1;
    for (; this._patches.size; ) {
      const s = this._patches.dequeue();
      if (l(s)) break;
      if (s.clear) {
        if (e) break;
        e = !0;
      }
      t.push(s);
    }
    this._patches.clear(), t.forEach((s) => this._patches.enqueue(s));
  }
}
const dt = B("featurelayer-order-by-server-enabled");
class ft extends ht {
  constructor(t, e, s, r) {
    super(t),
      (this._hitTestsRequests = []),
      (this._layer = s),
      (this._layerView = e),
      (this._onUpdate = r);
  }
  renderChildren(t) {
    this.attributeView.update(),
      this.hasAnimation && t.painter.effects.integrate.draw(t, t.attributeView),
      super.renderChildren(t);
  }
  hasEmptyAttributeView() {
    return this.attributeView.isEmpty();
  }
  isUpdating() {
    return this.attributeView.isUpdating();
  }
  hitTest(t) {
    let e = this._hitTestsRequests.find(
      ({ x: r, y: i }) => r === t.x && i === t.y
    );
    const s = G();
    return (
      e
        ? e.resolvers.push(s)
        : ((e = { x: t.x, y: t.y, resolvers: [s] }),
          this._hitTestsRequests.push(e)),
      this.requestRender(),
      s.promise
    );
  }
  onTileData(t, e) {
    const s = dt && "orderBy" in this._layer && this._layer.orderBy,
      r =
        s &&
        (s == null ? void 0 : s.length) &&
        !s[0].valueExpression &&
        s[0].field,
      i = !!s && this._layerView.orderByFields === r;
    t.patch(e, i), this.contains(t) || this.addChild(t), this.requestRender();
  }
  onTileError(t) {
    this.contains(t) || this.addChild(t);
  }
  updateTransitionProperties(t, e) {
    super.updateTransitionProperties(t, e),
      this._layerView.featureEffectView.transitionStep(t, e),
      this._layerView.featureEffectView.transitioning && this.requestRender();
  }
  doRender(t) {
    const { minScale: e, maxScale: s } = this._layer.effectiveScaleRange,
      r = t.state.scale;
    r <= (e || 1 / 0) && r >= s && super.doRender(t);
  }
  afterRender(t) {
    super.afterRender(t), this._hitTestsRequests.length && this.requestRender();
  }
  onAttributeStoreUpdate() {
    this.hasLabels && this._layerView.view.labelManager.requestUpdate(),
      this._onUpdate();
  }
  get hasAnimation() {
    return this.hasLabels;
  }
  setStencilReference(t) {
    const { rendererSchema: e } = t.rendererInfo;
    if (
      ((e == null ? void 0 : e.type) === "dot-density" &&
        (e == null ? void 0 : e.dotSize) > 1) ||
      (e == null ? void 0 : e.type) === "heatmap"
    )
      for (const r of this.children) r.stencilRef = r.key.level + 1;
    else super.setStencilReference(t);
  }
  get hasLabels() {
    if ("sublayers" in this._layer)
      return this._layer.sublayers.some((s) => {
        var r;
        return !!((r = s.labelingInfo) != null && r.length) && s.labelsVisible;
      });
    const t = this._layer.featureReduction,
      e =
        t &&
        "labelingInfo" in t &&
        t.labelsVisible &&
        t.labelingInfo &&
        t.labelingInfo.length;
    return (
      (this._layer.labelingInfo &&
        this._layer.labelingInfo.length &&
        this._layer.labelsVisible) ||
      !!e
    );
  }
  prepareRenderPasses(t) {
    const e = t.registerRenderPass({
        name: "label",
        brushes: [_.label],
        target: () => (this.hasLabels ? this.children : null),
        drawPhase: L.LABEL | L.LABEL_ALPHA,
      }),
      s = t.registerRenderPass({
        name: "geometry",
        brushes: [
          _.fill,
          _.dotDensity,
          _.line,
          _.marker,
          _.heatmap,
          _.pieChart,
          _.text,
        ],
        target: () => this.children,
        enableDefaultDraw: () => !this._layerView.featureEffectView.hasEffects,
        effects: [
          {
            apply: t.effects.outsideEffect,
            enable: () => this._layerView.featureEffectView.hasEffects,
            args: () => this._layerView.featureEffectView.excludedEffects,
          },
          {
            apply: t.effects.insideEffect,
            enable: () => this._layerView.featureEffectView.hasEffects,
            args: () => this._layerView.featureEffectView.includedEffects,
          },
          {
            apply: t.effects.hittest,
            enable: () => !!this._hitTestsRequests.length,
            args: () => this._hitTestsRequests,
          },
        ],
      }),
      r = t.registerRenderPass({
        name: "highlight",
        brushes: [_.fill, _.dotDensity, _.line, _.marker, _.pieChart, _.text],
        target: () => this.children,
        drawPhase: L.HIGHLIGHT,
        enableDefaultDraw: () => !1,
        effects: [
          {
            apply: t.effects.highlight,
            enable: () => !!this._layerView.hasHighlight(),
          },
        ],
      });
    return [...super.prepareRenderPasses(t), s, r, e];
  }
}
let P = class extends it {
  constructor() {
    super(...arguments), (this.type = "symbol");
  }
  install(n) {
    const t = new ft(this.tileInfoView, this.layerView, this.layer, () =>
      this.notifyChange("updating")
    );
    (this.featuresView = t), n.addChild(t);
  }
  uninstall(n) {
    n.removeChild(this.featuresView),
      (this.featuresView = U(this.featuresView));
  }
  fetchResource(n, t) {
    const { url: e } = n,
      s = this.featuresView.stage;
    try {
      return s.resourceManager.fetchResource(e, { signal: t.signal });
    } catch (r) {
      return j(r)
        ? Promise.resolve({ width: 0, height: 0 })
        : Promise.reject(r);
    }
  }
  isUpdating() {
    var r;
    const n = super.isUpdating(),
      t = !this.featuresView || this.featuresView.isUpdating(),
      e = (r = this.featuresView) == null ? void 0 : r.hasEmptyAttributeView(),
      s = n || t || (n && e);
    return B("esri-2d-log-updating"), s;
  }
  hitTest(n) {
    return this.featuresView.hitTest(n);
  }
  supportsRenderer(n) {
    return (
      n != null &&
      [
        "simple",
        "class-breaks",
        "unique-value",
        "dot-density",
        "dictionary",
        "heatmap",
        "pie-chart",
      ].includes(n.type)
    );
  }
  onConfigUpdate(n) {
    let t = null;
    if (n && "visualVariables" in n) {
      const e = (rt(n).visualVariables || []).map((s) => {
        const r = s.clone();
        return (
          "normalizationField" in s && (r.normalizationField = null),
          s.valueExpression &&
            s.valueExpression !== "$view.scale" &&
            ((r.valueExpression = null), (r.field = "nop")),
          r
        );
      });
      t = nt(e);
    }
    this.featuresView.setRendererInfo(n, t, this.layerView.featureEffect);
  }
  onTileData(n) {
    const t = this.tiles.get(n.tileKey);
    t && n.data && this.featuresView.onTileData(t, n.data),
      this.layerView.view.labelManager.requestUpdate();
  }
  onTileError(n) {
    const t = this.tiles.get(n.tileKey);
    t && this.featuresView.onTileError(t);
  }
  forceAttributeTextureUpload() {
    this.featuresView.attributeView.forceTextureUpload();
  }
  lockGPUUploads() {
    this.featuresView.attributeView.lockTextureUpload(),
      this.tiles.forEach((n) => n.lock());
  }
  unlockGPUUploads() {
    this.featuresView.attributeView.unlockTextureUpload(),
      this.tiles.forEach((n) => n.unlock());
  }
  async getMaterialItems(n) {
    return this.featuresView.getMaterialItems(n);
  }
  invalidateLabels() {
    this.featuresView.hasLabels &&
      this.layerView.view.labelManager.requestUpdate();
  }
  createTile(n) {
    const t = this.tileInfoView.getTileBounds($(), n),
      e = this.tileInfoView.getTileResolution(n.level),
      s = this.featuresView.attributeView;
    return new ut(n, e, t[0], t[3], s, () =>
      this.layerView.view.labelManager.requestUpdate()
    );
  }
  disposeTile(n) {
    this.featuresView.removeChild(n),
      n.destroy(),
      this.layerView.view.labelManager.requestUpdate();
  }
};
P = N([W("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")], P);
const Qt = P;
export { Qt as default };
