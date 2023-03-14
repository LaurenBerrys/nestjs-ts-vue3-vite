import {
  r as T,
  bm as P,
  T as C,
  bn as Ee,
  q as He,
  bo as me,
  bp as qe,
  bq as he,
  t as M,
  br as Ne,
  bs as te,
  bt as Ze,
  bu as Xe,
  bv as Qe,
  bw as Ye,
  bx as ze,
  by as We,
  bz as Je,
  bA as $e,
  bB as et,
  bC as tt,
  u as k,
  bD as st,
  ae as b,
  af as D,
  ag as Ge,
  w as it,
  b3 as rt,
  aC as nt,
  G as ot,
  f as v,
  bE as at,
  bF as lt,
  j as K,
  aH as ht,
  a2 as xe,
  a0 as dt,
  bG as _e,
  bH as ve,
  bI as ct,
  bJ as be,
  bK as se,
  bL as ut,
  bM as ft,
  bN as pt,
  ap as mt,
} from "./index.8fd7165c.js";
import { d as De, V as yt, Z as gt, c as xt } from "./ExpandedCIM.e22c8b13.js";
import { p as _t } from "./normalizeUtilsSync.1ac6b009.js";
import { f as vt, g as bt } from "./projectionSupport.4aeb802f.js";
import { U as Dt } from "./definitions.ce677f69.js";
import {
  x as ye,
  F as X,
  j as de,
  H as Ct,
  Y as wt,
  P as J,
  R as Tt,
  t as Bt,
  S as Ae,
} from "./color.4c5303e9.js";
import { f as Ft, E as Ce } from "./VertexArrayObject.1b8f3583.js";
import { F as St } from "./enums.64ab819c.js";
import { m as Rt, i as It } from "./AttributeStoreView.413dc93f.js";
import { U as Mt } from "./MaterialKey.97cb3dc8.js";
import {
  a as Q,
  o as Lt,
  x as zt,
  n as Gt,
  i as At,
  E as Ot,
} from "./Matcher.fe3c9df5.js";
import { w as we, $ as Pt, o as Ut } from "./schemaUtils.264ba82d.js";
import {
  c as Vt,
  b as jt,
  r as kt,
  M as Kt,
} from "./ComputedAttributeStorage.396dbaf7.js";
import { O as Et, U as z } from "./quantizationUtils.1e9e702d.js";
const y = -1;
let Te = class {
    constructor() {
      this._dirties = [
        {
          vertexFrom: y,
          vertexCount: y,
          indexFrom: y,
          indexCount: y,
          allDirty: !1,
        },
        {
          vertexFrom: y,
          vertexCount: y,
          indexFrom: y,
          indexCount: y,
          allDirty: !1,
        },
        {
          vertexFrom: y,
          vertexCount: y,
          indexFrom: y,
          indexCount: y,
          allDirty: !1,
        },
        {
          vertexFrom: y,
          vertexCount: y,
          indexFrom: y,
          indexCount: y,
          allDirty: !1,
        },
        {
          vertexFrom: y,
          vertexCount: y,
          indexFrom: y,
          indexCount: y,
          allDirty: !1,
        },
      ];
    }
    hasDirty() {
      return this._dirties.some((o) => o.indexCount !== y || o.allDirty);
    }
    markAllClean() {
      for (const o of this._dirties)
        (o.indexFrom = y),
          (o.indexCount = y),
          (o.vertexFrom = y),
          (o.vertexCount = y),
          (o.allDirty = !1);
    }
    markAllDirty() {
      for (const o of this._dirties) o.allDirty = !0;
    }
    forEach(o) {
      for (let e = 0; e < this._dirties.length; ++e) {
        const {
            indexCount: t,
            indexFrom: s,
            vertexCount: i,
            vertexFrom: r,
            allDirty: n,
          } = this._dirties[e],
          a = {};
        let h,
          l = !1;
        (n || (r !== y && i > 0)) &&
          ((a.geometry = { count: i, from: r, allDirty: n }), (l = !0)),
          (n || (s !== y && t > 0)) &&
            ((h = { count: t, from: s, allDirty: n }), (l = !0)),
          l && o({ indices: h, vertices: a }, e);
      }
    }
    markDirtyIndices(o, e, t) {
      const s = this._dirties[o],
        i = e,
        r = t;
      if (!s.allDirty)
        if (s.indexCount !== y) {
          const n = Math.min(s.indexFrom, i),
            a = Math.max(s.indexFrom + s.indexCount, i + r) - n;
          (s.indexFrom = n), (s.indexCount = a);
        } else (s.indexFrom = i), (s.indexCount = r);
    }
    markDirtyVertices(o, e, t, s) {
      const i = this._dirties[o],
        r = t,
        n = s;
      if (!i.allDirty)
        if (i.vertexCount !== y) {
          const a = Math.min(i.vertexFrom, r),
            h = Math.max(i.vertexFrom + i.vertexCount, r + n) - a;
          (i.vertexFrom = a), (i.vertexCount = h);
        } else (i.vertexFrom = r), (i.vertexCount = n);
    }
  },
  E = class I {
    constructor(e, t) {
      (this._allocated = 0),
        (this._size = e),
        (this._freeHead =
          e > 0 ? { from: 0, count: e, prev: null, next: null } : null),
        (this._bookKeeper =
          t ||
          new (class {
            get largestRange() {
              return this._largestRange;
            }
            constructor(s) {
              (this._largestRange = null),
                (this._parent = s),
                this._updateLargestRange();
            }
            rangeCreated(s) {
              (!this._largestRange || s.count > this._largestRange.count) &&
                (this._largestRange = s);
            }
            rangeResized(s, i) {
              s === this._largestRange
                ? s.count < i && this._updateLargestRange()
                : (!this._largestRange || s.count > this._largestRange.count) &&
                  (this._largestRange = s);
            }
            findBestRange(s) {
              let i = this._parent._freeHead,
                r = null;
              for (; i !== null; )
                i.count >= s && (!r || i.count - s < r.count - s) && (r = i),
                  (i = i.next);
              return r;
            }
            findAdjacentRanges(s, i) {
              let r = !0,
                n = !1,
                a = null,
                h = this._parent._freeHead;
              for (; r && !n; ) {
                const l = a !== null ? a.from + a.count : 0,
                  d = h !== null ? h.from : this._parent._size;
                s >= l && s + i <= d
                  ? ((r = !1), (n = !0))
                  : h !== null
                  ? ((a = h), (h = h.next))
                  : (r = !1);
              }
              return [a, h];
            }
            _updateLargestRange() {
              let s = null,
                i = this._parent._freeHead;
              for (; i !== null; )
                (!s || i.count > s.count) && (s = i), (i = i.next);
              this._largestRange = s;
            }
          })(this)),
        this._freeHead && this._bookKeeper.rangeCreated(this._freeHead);
    }
    allocate(e) {
      const t = this._bookKeeper.findBestRange(e);
      if (t == null) return -1;
      const s = t.from,
        i = t.count;
      if (
        ((t.from += e),
        (t.count -= e),
        this._bookKeeper.rangeResized(t, s, i),
        (this._allocated += e),
        t.count === 0)
      ) {
        const r = t.prev !== null ? this._freeHead : t.next;
        I._removeRange(t), (this._freeHead = r);
      }
      return s;
    }
    free(e, t) {
      const [s, i] = this._bookKeeper.findAdjacentRanges(e, t),
        r = { from: e, count: t, prev: s ?? null, next: i ?? null };
      if (
        (s != null && (s.next = r),
        i != null && (i.prev = r),
        this._bookKeeper.rangeCreated(r),
        (this._allocated -= t),
        i != null && r.from + r.count === i.from)
      ) {
        const n = r.from,
          a = r.count;
        I._fuse(r, i),
          I._removeRange(i),
          this._bookKeeper.rangeResized(r, n, a),
          this._bookKeeper.rangeResized(i, void 0, 0);
      }
      if (s != null && s.from + s.count === r.from) {
        const n = s.from,
          a = s.count;
        I._fuse(s, r),
          I._removeRange(r),
          this._bookKeeper.rangeResized(s, n, a),
          this._bookKeeper.rangeResized(r, void 0, 0);
      }
      this._freeHead = r.prev !== null ? this._freeHead : r;
    }
    get fragmentation() {
      const e = this._size - this._allocated;
      return e === 0 ? 0 : 1 - this._bookKeeper.largestRange.count / e;
    }
    static _removeRange(e) {
      e.prev !== null
        ? e.next !== null
          ? ((e.prev.next = e.next), (e.next.prev = e.prev))
          : (e.prev.next = null)
        : e.next !== null && (e.next.prev = null);
    }
    static _fuse(e, t) {
      (e.count += t.count),
        (e.next = t.next),
        (t.from += t.count),
        (t.count = 0),
        t.next !== null && (t.next.prev = e);
    }
  };
const G = ["FILL", "LINE", "MARKER", "TEXT", "LABEL"];
let Be = class Oe {
  constructor(e, t, s, i) {
    (this._strides = e),
      (this._displayList = t),
      (this._freeListsAndStorage = {}),
      (this._dirtyMap = null),
      (this._dirtyMap = s);
    for (const r in e) {
      this._freeListsAndStorage[r] = {
        vtxFreeList: i ? new E(i) : null,
        idxFreeList: i ? new E(i) : null,
        vertexBuffers: {},
        indexBuffer: i ? new Uint32Array(i) : null,
      };
      for (const n in e[r])
        this._freeListsAndStorage[r].vertexBuffers[n] = {
          data: i ? ye(i, e[r][n]) : null,
          stride: e[r][n],
        };
    }
  }
  static fromTileData(e, t) {
    var h;
    const s = (function (l) {
        const d = l.getStrides(),
          c = {};
        for (let u = 0; u < d.length; u++) c[G[u]] = d[u];
        return c;
      })(e),
      i = [0, 0, 0, 0, 0],
      r = [0, 0, 0, 0, 0];
    for (const l of e.tileDisplayData.displayObjects)
      for (const d of l.displayRecords)
        (i[d.geometryType] = Math.max(
          i[d.geometryType],
          d.vertexFrom + d.vertexCount
        )),
          (r[d.geometryType] = Math.max(
            r[d.geometryType],
            d.indexFrom + d.indexCount
          ));
    const n = new Oe(s, e.tileDisplayData.displayList, t, void 0),
      a = ((h = e.tileBufferData) == null ? void 0 : h.geometries) ?? [];
    for (let l = 0; l < a.length; ++l) {
      const d = i[l],
        c = r[l],
        u = a[l],
        f = G[l],
        m = n._storageFor(f),
        p = a[l].indexBuffer;
      (m.indexBuffer = p),
        (m.idxFreeList = new E(p.length)),
        m.idxFreeList.allocate(c);
      let g = 0;
      for (const _ in u.vertexBuffer) {
        const x = a[l].vertexBuffer[_];
        (m.vertexBuffers[_].data = x.data),
          (m.vertexBuffers[_].stride = x.stride);
        const F = X(x.stride),
          j = (x.data.length * F) / x.stride;
        g || (g = j);
      }
      (m.vtxFreeList = new E(g)), m.vtxFreeList.allocate(d);
    }
    return n;
  }
  delete(e) {
    const t = G[e.geometryType];
    this._freeVertices(t, e.vertexFrom, e.vertexCount),
      this._freeIndices(t, e.indexFrom, e.indexCount),
      this._displayList.removeFromList(e),
      (e.vertexFrom = void 0),
      (e.indexFrom = void 0);
  }
  setMeshData(e, t, s, i, r) {
    const n = G[e.geometryType];
    let a, h;
    (e.meshData = null),
      e.vertexFrom === void 0
        ? ((h = t.vertexCount), (a = this._allocateVertices(n, h)))
        : t.vertexCount > e.vertexCount
        ? (this._freeVertices(n, e.vertexFrom, e.vertexCount),
          (h = t.vertexCount),
          (a = this._allocateVertices(n, h)))
        : t.vertexCount === e.vertexCount
        ? ((a = e.vertexFrom), (h = e.vertexCount))
        : (this._freeVertices(
            n,
            e.vertexFrom + t.vertexCount,
            e.vertexCount - t.vertexCount
          ),
          (a = e.vertexFrom),
          (h = t.vertexCount));
    let l,
      d,
      c,
      u = !0;
    if (
      (e.indexFrom === void 0
        ? ((l = r), (c = t.indexCount), (d = this._allocateIndices(n, c)))
        : t.indexCount > e.indexCount
        ? ((l = this._displayList.removeFromList(e)),
          this._freeIndices(n, e.indexFrom, e.indexCount),
          (c = t.indexCount),
          (d = this._allocateIndices(n, c)))
        : t.indexCount === e.indexCount
        ? ((u = !1), (d = e.indexFrom), (c = e.indexCount))
        : ((l = this._displayList.removeFromList(e)),
          this._freeIndices(
            n,
            e.indexFrom + t.indexCount,
            e.indexCount - t.indexCount
          ),
          (d = e.indexFrom),
          (c = t.indexCount)),
      a !== -1 && d !== -1)
    ) {
      const f = this._storageFor(n);
      if (
        (de(a, d, f.vertexBuffers, f.indexBuffer, t, s, i),
        (e.vertexFrom = a),
        (e.indexFrom = d),
        (e.vertexCount = t.vertexCount),
        (e.indexCount = t.indexCount),
        this._dirtyMap)
      ) {
        this._dirtyMap.markDirtyIndices(
          e.geometryType,
          e.indexFrom,
          e.indexCount
        );
        for (const m in s)
          this._dirtyMap.markDirtyVertices(
            e.geometryType,
            m,
            e.vertexFrom,
            e.vertexCount
          );
      }
      return u && this._displayList.addToList(e, l), !0;
    }
    return (
      a !== -1 && this._freeVertices(n, a, h),
      d !== -1 && this._freeIndices(n, d, c),
      e.setMeshDataFromBuffers(t, s, i),
      (e.vertexFrom = void 0),
      (e.vertexCount = 0),
      (e.indexFrom = void 0),
      (e.indexCount = 0),
      !1
    );
  }
  tryAddMeshData(e, t) {
    const s = t.vertexBuffer,
      i = t.indexBuffer,
      r = G[e.geometryType],
      n = this._allocateVertices(r, e.vertexCount);
    if (n === -1) return this._freeVertices(r, n, e.vertexCount), !1;
    const a = this._allocateIndices(r, e.indexCount);
    if (a === -1)
      return (
        this._freeVertices(r, n, e.vertexCount),
        this._freeIndices(r, a, e.indexCount),
        !1
      );
    const h = this._storageFor(r);
    if (
      (de(n, a, h.vertexBuffers, h.indexBuffer, e, s, i),
      (e.vertexFrom = n),
      (e.indexFrom = a),
      this._dirtyMap)
    ) {
      this._dirtyMap.markDirtyIndices(
        e.geometryType,
        e.indexFrom,
        e.indexCount
      );
      for (const l in s)
        this._dirtyMap.markDirtyVertices(e.geometryType, l, n, e.vertexCount);
    }
    return this._displayList.addToList(e), !0;
  }
  _allocateVertices(e, t) {
    var n, a;
    const s = this._storageFor(e),
      i = (n = s.vtxFreeList) == null ? void 0 : n.allocate(t);
    if (i == null || i === -1) return -1;
    const r = (a = s.vtxFreeList) == null ? void 0 : a.fragmentation;
    return r == null || r > 0.5 ? -1 : i;
  }
  _freeVertices(e, t, s) {
    var i;
    (i = this._storageFor(e).vtxFreeList) == null || i.free(t, s);
  }
  _freeIndices(e, t, s) {
    var i;
    (i = this._storageFor(e).idxFreeList) == null || i.free(t, s);
  }
  _allocateIndices(e, t) {
    var n, a;
    const s = this._storageFor(e),
      i = (n = s.idxFreeList) == null ? void 0 : n.allocate(t);
    if (i == null || i === -1) return -1;
    const r = (a = s.idxFreeList) == null ? void 0 : a.fragmentation;
    return r == null || r > 0.5 ? -1 : i;
  }
  _storageFor(e) {
    return this._freeListsAndStorage[e];
  }
  _stridesFor(e, t) {
    return this._strides[e][t];
  }
};
class Ht extends Rt {
  constructor() {
    super(...arguments),
      (this._data = null),
      (this._displayList = null),
      (this._lastCommitTime = 0),
      (this._hasData = !1),
      (this._invalidated = !1),
      (this._wglBuffers = null),
      (this._dirtyMap = new Te());
  }
  destroy() {
    super.destroy(), this.clear();
  }
  get hasData() {
    return !!this._hasData;
  }
  get displayObjects() {
    return this._displayObjects ?? [];
  }
  getGeometry(e) {
    return this._wglBuffers && this._wglBuffers.has(e)
      ? this._wglBuffers.get(e)
      : null;
  }
  getDisplayList() {
    return this._displayList;
  }
  patch(e) {
    var i, r;
    if (e.clear === !0) return this.clear(), void (this._hasData = !1);
    const t = e.addOrUpdate,
      s = e.remove;
    !this._data &&
    t &&
    (i = t.tileDisplayData) != null &&
    i.displayObjects.length
      ? (t.tileDisplayData.computeDisplayList(),
        (this._dirtyMap = new Te()),
        (this._dispRecStore = Be.fromTileData(t, this._dirtyMap)),
        (this._data = t),
        this._dirtyMap.markAllDirty(),
        (this._hasData = !0),
        e.end && this.ready())
      : this._data &&
        ((t && (r = t.tileDisplayData) != null && r.displayObjects.length) ||
          s.length)
      ? this._doPatchData(e)
      : e.end && this.ready(),
      e.end && !this._data && this.clear(),
      this.requestRender(),
      this.emit("change");
  }
  commit(e) {
    (e.time && e.time === this._lastCommitTime) ||
      ((this._lastCommitTime = e.time),
      this.visible &&
        this._data &&
        (this._wglBuffers ||
          (this._wglBuffers = new (class {
            constructor(t) {
              this.geometryMap = Ct(
                () => ({
                  indexBuffer: Ce.createIndex(t, St.STATIC_DRAW),
                  vao: null,
                }),
                (s, i) => ({ vertexBuffer: Ce.createVertex(t, wt[i]) })
              );
            }
            dispose() {
              for (let t = 0; t < 5; t++) {
                const s = this.geometryMap[t];
                if (s) {
                  s.data.vao && s.data.vao.dispose(!1),
                    s.data.indexBuffer && s.data.indexBuffer.dispose();
                  for (const i in s.buffers)
                    s.buffers[i] && s.buffers[i].data.vertexBuffer.dispose();
                }
              }
            }
            get(t) {
              const s = this.geometryMap[t];
              return {
                getVAO(i, r, n) {
                  if (!s.data.vao) {
                    const a = {};
                    for (const h in s.buffers)
                      a[h] = s.buffers[h].data.vertexBuffer;
                    s.data.vao = new Ft(i, n, r, a, s.data.indexBuffer);
                  }
                  return s.data.vao;
                },
              };
            }
            has(t) {
              return this.geometryMap[t] != null;
            }
            upload(t, s) {
              s.forEach((i, r) => {
                this._upload(i, r, t);
              });
            }
            _upload(t, s, i) {
              if (
                (t.indices &&
                  (t.indices.allDirty
                    ? this._uploadIndices(i, s)
                    : t.indices.from != null &&
                      t.indices.count != null &&
                      this._uploadIndices(
                        i,
                        s,
                        t.indices.from,
                        t.indices.count
                      )),
                t.vertices)
              ) {
                const r = t.vertices;
                for (const n in r) {
                  const a = r[n];
                  a.allDirty
                    ? this._uploadVertices(i, s, n)
                    : a.from != null &&
                      a.count != null &&
                      this._uploadVertices(i, s, n, a.from, a.count);
                }
              }
            }
            _uploadVertices(t, s, i, r, n) {
              const a = this.geometryMap[s];
              if (!a) return;
              const h = t.geometries[s].vertexBuffer[i];
              if (!h) return;
              const { data: l, stride: d } = h;
              if (a.buffers[i] && l.length > 0) {
                const c = d / l.BYTES_PER_ELEMENT;
                r != null && n != null
                  ? a.buffers[i].data.vertexBuffer.setSubData(
                      l,
                      r * c,
                      r * c,
                      (r + n) * c
                    )
                  : a.buffers[i].data.vertexBuffer.setData(l);
              }
            }
            _uploadIndices(t, s, i, r) {
              const n = this.geometryMap[s];
              if (!n) return;
              const a = t.geometries[s].indexBuffer;
              n.data.indexBuffer &&
                a.length > 0 &&
                (i != null && r != null
                  ? n.data.indexBuffer.setSubData(a, i, i, i + r)
                  : n.data.indexBuffer.setData(a));
            }
          })(e.context)),
        (this._dirtyMap.hasDirty() || this._invalidated) &&
          ((this._invalidated = !1),
          this._wglBuffers.upload(this._data.tileBufferData, this._dirtyMap),
          (this._displayList = this._data.tileDisplayData.displayList.clone()),
          (this._displayObjects =
            this._data.tileDisplayData.displayObjects.slice()),
          this._dirtyMap.markAllClean())));
  }
  clear() {
    (this._data = null),
      (this._displayList = null),
      (this._dispRecStore = null),
      this._wglBuffers &&
        (this._wglBuffers.dispose(), (this._wglBuffers = null));
  }
  _doPatchData(e) {
    (this._invalidated = !0),
      this._patchData(e) ||
        (this._dirtyMap.markAllDirty(),
        this._data.reshuffle(),
        (this._dispRecStore = Be.fromTileData(this._data, this._dirtyMap))),
      this.requestRender();
  }
  _patchData(e) {
    let t = !0;
    const s =
        (e.addOrUpdate &&
          e.addOrUpdate.tileDisplayData &&
          e.addOrUpdate.tileDisplayData.displayObjects) ||
        [],
      i = (e.remove || []).slice();
    for (const a of s) a.insertAfter != null && i.push(a.id);
    let r;
    i.length > 0 && (r = new Set(i));
    const n = this._data.tileDisplayData;
    for (const a of i) {
      const h = n.displayObjectRegistry.get(a);
      if (h) {
        n.displayList.removeFromList(h.displayRecords);
        for (const l of h.displayRecords) this._dispRecStore.delete(l);
        n.displayObjectRegistry.delete(a);
      }
    }
    r != null &&
      r.size &&
      (n.displayObjects = n.displayObjects.filter((a) => !r.has(a.id)));
    for (const a of s) {
      let h,
        l = n.displayObjectRegistry.get(a.id);
      if (l) {
        const c = l.displayRecords;
        l.set(a), (l.displayRecords = c);
        const u = l.displayRecords.length;
        for (let f = 0; f < u; ++f) {
          const m = l.displayRecords[f],
            p = a.displayRecords[f];
          (f >= a.displayRecords.length ||
            m.geometryType !== p.geometryType ||
            m.symbolLevel !== p.symbolLevel ||
            m.zOrder !== p.zOrder ||
            m.materialKey !== p.materialKey) &&
            (this._dispRecStore.delete(l.displayRecords[f]),
            f < a.displayRecords.length && (l.displayRecords[f] = void 0));
        }
        l.displayRecords.length = a.displayRecords.length;
      } else {
        let c;
        (l = a.copy()),
          (l.displayRecords = []),
          n.displayObjectRegistry.set(a.id, l);
        const u = n.displayObjects;
        if (l.insertAfter != null)
          if (((h = {}), l.insertAfter >= 0)) {
            const f = n.displayObjectRegistry.get(l.insertAfter);
            f
              ? ((c = u.indexOf(f) + 1),
                c < u.length ? u.splice(c, 0, l) : (u.push(l), (c = u.length)))
              : (u.push(l), (c = u.length));
          } else u.unshift(l), (c = 0);
        else u.push(l), (c = u.length);
        if (h) {
          const f = a.displayRecords.length > 0 ? 1 : 0;
          let m = 0;
          for (let p = c - 1; p >= 0 && m < f; --p)
            for (let g = u[p].displayRecords.length - 1; g >= 0 && m < f; --g) {
              const _ = u[p].displayRecords[g],
                x = n.displayList.getDPInfoType();
              h[x] || ((h[x] = _), ++m);
            }
        }
      }
      const d = a.displayRecords.length;
      for (let c = 0; c < d; ++c) {
        const u = a.displayRecords[c];
        let f = l.displayRecords[c];
        f
          ? ((f.meshData = u.meshData), (f.materialKey = u.materialKey))
          : ((f = u.copy()),
            (f.vertexFrom = void 0),
            (f.indexFrom = void 0),
            (l.displayRecords[c] = f));
        const m = u.geometryType,
          p = n.displayList.getDPInfoType(),
          g = e.addOrUpdate.tileBufferData.geometries[m],
          _ = g.vertexBuffer,
          x = g.indexBuffer;
        let F;
        h && (F = h[p] ? n.displayList.splitAfter(h[p]) : -1),
          (t = this._dispRecStore.setMeshData(f, u, _, x, F) && t),
          h && f.indexFrom != null && f.indexFrom != null && (h[p] = f);
      }
    }
    return t;
  }
}
let Pe = class {
    constructor() {
      this._byGeometryType = null;
    }
    get satisfied() {
      return !this._byGeometryType;
    }
    reset() {
      this._byGeometryType = null;
    }
    verticesFor(o) {
      return this._byGeometryType ? this._byGeometryType[o].vertices : 0;
    }
    indicesFor(o) {
      return this._byGeometryType ? this._byGeometryType[o].indices : 0;
    }
    needMore(o, e, t) {
      if (!e && !t) return;
      this._byGeometryType ||
        (this._byGeometryType = [
          { vertices: 0, indices: 0 },
          { vertices: 0, indices: 0 },
          { vertices: 0, indices: 0 },
          { vertices: 0, indices: 0 },
          { vertices: 0, indices: 0 },
        ]);
      const s = this._byGeometryType[o];
      (s.vertices += e), (s.indices += t);
    }
  },
  ie = class ce {
    constructor() {
      this.geometries = [
        { indexBuffer: void 0, vertexBuffer: {} },
        { indexBuffer: void 0, vertexBuffer: {} },
        { indexBuffer: void 0, vertexBuffer: {} },
        { indexBuffer: void 0, vertexBuffer: {} },
        { indexBuffer: void 0, vertexBuffer: {} },
      ];
    }
    clone() {
      const e = new ce();
      for (let t = 0; t < this.geometries.length; t++) {
        const s = this.geometries[t],
          i = e.geometries[t];
        (i.indexBuffer = s.indexBuffer.slice()), (i.vertexBuffer = {});
        for (const r in s.vertexBuffer) {
          const { data: n, stride: a } = s.vertexBuffer[r];
          i.vertexBuffer[r] = { data: n.slice(), stride: a };
        }
      }
      return e;
    }
    static deserialize(e) {
      const t = new ce();
      for (let s = 0; s < 5; ++s) {
        (t.geometries[s].indexBuffer = new Uint32Array(
          e.geometries[s].indexBuffer
        )),
          (t.geometries[s].vertexBuffer = {});
        for (const i in e.geometries[s].vertexBuffer)
          t.geometries[s].vertexBuffer[i] = {
            data: J(
              e.geometries[s].vertexBuffer[i].data,
              e.geometries[s].vertexBuffer[i].stride
            ),
            stride: e.geometries[s].vertexBuffer[i].stride,
          };
      }
      return t;
    }
    serialize() {
      const e = {
        geometries: [
          {
            indexBuffer: this.geometries[0].indexBuffer.buffer,
            vertexBuffer: {},
          },
          {
            indexBuffer: this.geometries[1].indexBuffer.buffer,
            vertexBuffer: {},
          },
          {
            indexBuffer: this.geometries[2].indexBuffer.buffer,
            vertexBuffer: {},
          },
          {
            indexBuffer: this.geometries[3].indexBuffer.buffer,
            vertexBuffer: {},
          },
          {
            indexBuffer: this.geometries[4].indexBuffer.buffer,
            vertexBuffer: {},
          },
        ],
      };
      for (let t = 0; t < 5; ++t)
        for (const s in this.geometries[t].vertexBuffer)
          e.geometries[t].vertexBuffer[s] = {
            data: this.geometries[t].vertexBuffer[s].data.buffer,
            stride: this.geometries[t].vertexBuffer[s].stride,
          };
      return e;
    }
    getBuffers() {
      const e = [];
      for (let t = 0; t < 5; ++t) {
        e.push(this.geometries[t].indexBuffer.buffer);
        for (const s in this.geometries[t].vertexBuffer)
          e.push(this.geometries[t].vertexBuffer[s].data.buffer);
      }
      return e;
    }
  };
function H(o, e, t, ...s) {
  e < o.length ? o.splice(e, t, ...s) : o.push(...s);
}
let re = class Ue {
  constructor() {
    (this.materialKey = null), (this.indexFrom = 0), (this.indexCount = 0);
  }
  clone() {
    const e = new Ue();
    return (
      (e.geometryType = this.geometryType),
      (e.materialKey = this.materialKey),
      (e.indexFrom = this.indexFrom),
      (e.indexCount = this.indexCount),
      e
    );
  }
};
class ee {
  constructor() {
    (this.fill = null),
      (this.line = null),
      (this.marker = null),
      (this.text = null),
      (this.label = null),
      (this.unified = null);
  }
  clone() {
    const e = new ee();
    return (
      (e.fill = this.fill && this.fill.map((t) => t.clone())),
      (e.line = this.line && this.line.map((t) => t.clone())),
      (e.marker = this.marker && this.marker.map((t) => t.clone())),
      (e.text = this.text && this.text.map((t) => t.clone())),
      (e.label = this.label && this.label.map((t) => t.clone())),
      (e.unified = this.unified && this.unified.map((t) => t.clone())),
      e
    );
  }
}
let qt = class Ve {
  constructor() {
    this.geometryDPInfo = new ee();
  }
  clone() {
    const e = new Ve();
    return (
      (e.zLevel = this.zLevel),
      (e.geometryDPInfo = this.geometryDPInfo.clone()),
      e
    );
  }
};
class ge {
  constructor() {
    this.zLevels = [];
  }
  clone() {
    const e = new ge();
    e.symbolLevel = this.symbolLevel;
    for (const t of this.zLevels) e.zLevels.push(t.clone());
    return e;
  }
}
let Fe = class {
    constructor() {
      (this.vertexData = new Map()),
        (this.vertexCount = 0),
        (this.indexData = []);
    }
    clear() {
      this.vertexData.clear(), (this.vertexCount = 0), (this.indexData = []);
    }
    update(o, e, t) {
      for (const s in o) this.vertexData.set(s, o[s]);
      for (const s in this.vertexData)
        o[s] === null && this.vertexData.delete(s);
      (this.vertexCount = e), (this.indexData = t);
    }
  },
  ue = class fe {
    constructor(e, t, s, i = 0, r = 0) {
      (this.id = e),
        (this.geometryType = t),
        (this.materialKey = s),
        (this.minZoom = i),
        (this.maxZoom = r),
        (this.meshData = null),
        (this.symbolLevel = 0),
        (this.zOrder = 0),
        (this.vertexFrom = 0),
        (this.vertexCount = 0),
        (this.indexFrom = 0),
        (this.indexCount = 0),
        (this._sortKey = null);
    }
    get sortKey() {
      return this._sortKey == null && this._computeSortKey(), this._sortKey;
    }
    clone() {
      return this.copy();
    }
    copy() {
      const e = new fe(this.id, this.geometryType, this.materialKey);
      return (
        (e.vertexFrom = this.vertexFrom),
        (e.vertexCount = this.vertexCount),
        (e.indexFrom = this.indexFrom),
        (e.indexCount = this.indexCount),
        (e.zOrder = this.zOrder),
        (e.symbolLevel = this.symbolLevel),
        (e.meshData = this.meshData),
        (e.minZoom = this.minZoom),
        (e.maxZoom = this.maxZoom),
        e
      );
    }
    setMeshDataFromBuffers(e, t, s) {
      const i = new Fe();
      for (const r in t) {
        const n = t[r].stride,
          a = t[r].data;
        if (!a) continue;
        const h = [],
          l = X(n);
        for (let d = 0; d < (n * e.vertexCount) / l; ++d)
          h[d] = a[d + (n * e.vertexFrom) / l];
        i.vertexData.set(r, h);
      }
      i.indexData.length = 0;
      for (let r = 0; r < e.indexCount; ++r)
        i.indexData[r] = s[r + e.indexFrom] - e.vertexFrom;
      (i.vertexCount = e.vertexCount), (this.meshData = i);
    }
    readMeshDataFromBuffers(e, t) {
      this.meshData ? this.meshData.clear() : (this.meshData = new Fe());
      for (const s in e) {
        const i = e[s].stride,
          r = e[s].data,
          n = [],
          a = X(i);
        for (let h = 0; h < (i * this.vertexCount) / a; ++h)
          n[h] = r[h + (i * this.vertexFrom) / a];
        this.meshData.vertexData.set(s, n);
      }
      this.meshData.indexData.length = 0;
      for (let s = 0; s < this.indexCount; ++s)
        this.meshData.indexData[s] = t[s + this.indexFrom] - this.vertexFrom;
      this.meshData.vertexCount = this.vertexCount;
    }
    writeMeshDataToBuffers(e, t, s, i) {
      if (this.meshData) {
        for (const r in t) {
          const n = t[r].stride,
            a = this.meshData.vertexData.get(r),
            h = t[r].data,
            l = X(n);
          for (let d = 0; d < (n * this.meshData.vertexCount) / l; ++d)
            h[d + (n * e) / l] = a[d];
        }
        for (let r = 0; r < this.meshData.indexData.length; ++r)
          i[r + s] = this.meshData.indexData[r] + e;
        (this.vertexFrom = e),
          (this.vertexCount = this.meshData.vertexCount),
          (this.indexFrom = s),
          (this.indexCount = this.meshData.indexData.length);
      }
    }
    static writeAllMeshDataToBuffers(e, t, s) {
      let i = 0,
        r = 0;
      for (const n of e)
        n.writeMeshDataToBuffers(i, t, r, s),
          (i += n.vertexCount),
          (r += n.indexCount);
    }
    _computeSortKey() {
      this._sortKey =
        ((31 & this.symbolLevel) << 12) |
        ((127 & this.zOrder) << 4) |
        (7 & this.geometryType);
    }
    serialize(e) {
      return (
        e.push(this.geometryType),
        e.push(this.materialKey),
        e.push(this.vertexFrom),
        e.push(this.vertexCount),
        e.push(this.indexFrom),
        e.push(this.indexCount),
        e.push(this.minZoom),
        e.push(this.maxZoom),
        e
      );
    }
    static deserialize(e, t) {
      const s = e.readInt32(),
        i = e.readInt32(),
        r = new fe(t.id, s, i);
      return (
        (r.vertexFrom = e.readInt32()),
        (r.vertexCount = e.readInt32()),
        (r.indexFrom = e.readInt32()),
        (r.indexCount = e.readInt32()),
        (r.minZoom = e.readInt32()),
        (r.maxZoom = e.readInt32()),
        r
      );
    }
  };
function je(o, e) {
  if (e !== null) {
    o.push(e.length);
    for (const t of e) t.serialize(o);
    return o;
  }
  o.push(0);
}
let ke = class Y {
  constructor(e) {
    (this.insertAfter = null), (this.id = e), (this.displayRecords = []);
  }
  copy() {
    const e = new Y(this.id);
    return e.set(this), e;
  }
  clone() {
    const e = new Y(this.id);
    return (
      (e.displayRecords = this.displayRecords.map((t) => t.clone())),
      (e.insertAfter = this.insertAfter),
      e
    );
  }
  set(e) {
    (this.id = e.id),
      (this.displayRecords = e.displayRecords),
      (this.insertAfter = e.insertAfter);
  }
  serialize(e) {
    return e.push(this.id), je(e, this.displayRecords), e;
  }
  static deserialize(e) {
    const t = e.readInt32(),
      s = new Y(t),
      i = { id: t };
    return (
      (s.displayRecords =
        (function (r, n, a) {
          const h = r.readInt32(),
            l = new Array(h);
          for (let d = 0; d < l.length; d++) l[d] = n.deserialize(r, a);
          return l;
        })(e, ue, i) ?? []),
      s
    );
  }
};
class V {
  constructor() {
    (this.displayObjects = []), (this._displayList = null);
  }
  get displayObjectRegistry() {
    if (!this._displayObjectRegistry) {
      this._displayObjectRegistry = new Map();
      for (const e of this.displayObjects)
        this._displayObjectRegistry.set(e.id, e);
    }
    return this._displayObjectRegistry;
  }
  get displayList() {
    return this._displayList;
  }
  computeDisplayList() {
    this._displayList = new (class Ke {
      constructor() {
        this.symbolLevels = [];
      }
      replay(t, s, i) {
        for (const r of this.symbolLevels)
          for (const n of r.zLevels) {
            const a = n.geometryDPInfo.unified;
            if (a)
              for (const h of a) {
                const {
                    geometryType: l,
                    materialKey: d,
                    indexFrom: c,
                    indexCount: u,
                  } = h,
                  f = Mt.load(d).symbologyType,
                  m = t.painter.getBrush(l, f),
                  p = {
                    geometryType: l,
                    materialKey: d,
                    indexFrom: c,
                    indexCount: u,
                    target: s.getGeometry(l),
                  };
                m.prepareState(t), m.drawGeometry(t, s, p, i);
              }
          }
      }
      get empty() {
        return !this.symbolLevels || this.symbolLevels.length === 0;
      }
      clear() {
        this.symbolLevels.length = 0;
      }
      addToList(t, s) {
        if (Array.isArray(t)) for (const i of t) this._addToList(i, s);
        else this._addToList(t, s);
      }
      removeFromList(t) {
        Array.isArray(t) || (t = [t]);
        let s = null;
        for (const i of t) s = this._removeFromList(i);
        return s;
      }
      clone() {
        const t = new Ke();
        for (const s of this.symbolLevels) t.symbolLevels.push(s.clone());
        return t;
      }
      splitAfter(t) {
        const s = this._getDisplayList(t.symbolLevel, t.zOrder),
          i = s.length,
          r = t.indexFrom + t.indexCount;
        for (let n = 0; n < i; ++n) {
          const a = s[n];
          if (
            a.geometryType === t.geometryType &&
            r > a.indexFrom &&
            r <= a.indexFrom + a.indexCount
          ) {
            if (r < a.indexFrom + a.indexCount) {
              const h = new re();
              (h.geometryType = a.geometryType),
                (h.materialKey = a.materialKey),
                (h.indexFrom = r),
                (h.indexCount = a.indexFrom + a.indexCount - r),
                s.splice(n + 1, 0, h),
                (a.indexCount = r - a.indexFrom);
            }
            return n;
          }
        }
      }
      _addToList(t, s) {
        const i = t.symbolLevel,
          r = t.zOrder,
          n = this._getDisplayList(i, r),
          a = s ?? n.length - 1,
          h = a >= 0 && a < n.length ? n[a] : null;
        if (
          h !== null &&
          h.materialKey === t.materialKey &&
          h.indexFrom + h.indexCount === t.indexFrom &&
          h.geometryType === t.geometryType
        )
          h.indexCount += t.indexCount;
        else {
          const l = new re();
          (l.indexFrom = t.indexFrom),
            (l.indexCount = t.indexCount),
            (l.materialKey = t.materialKey),
            (l.geometryType = t.geometryType),
            H(n, a + 1, 0, l);
        }
      }
      _removeFromList(t) {
        const s = t.symbolLevel,
          i = t.zOrder,
          r = this._getDisplayList(s, i),
          n = r.length;
        let a;
        for (let h = 0; h < n; ++h) {
          const l = r[h];
          if (
            t.indexFrom + t.indexCount > l.indexFrom &&
            t.indexFrom < l.indexFrom + l.indexCount &&
            l.geometryType === t.geometryType
          ) {
            a = h;
            break;
          }
        }
        if (a !== void 0) {
          const h = r[a];
          if (t.indexFrom === h.indexFrom)
            return (
              (h.indexCount -= t.indexCount),
              (h.indexFrom += t.indexCount),
              h.indexCount === 0 && H(r, a, 1),
              a - 1
            );
          if (t.indexFrom + t.indexCount === h.indexFrom + h.indexCount)
            return (
              (h.indexCount -= t.indexCount),
              h.indexCount === 0 ? (H(r, a, 1), a - 1) : a
            );
          {
            const l = h.indexFrom,
              d = t.indexFrom - h.indexFrom,
              c = t.indexCount,
              u = h.indexFrom + h.indexCount - (t.indexFrom + t.indexCount);
            h.indexCount = d;
            const f = new re();
            return (
              (f.geometryType = h.geometryType),
              (f.materialKey = h.materialKey),
              (f.indexFrom = l + d + c),
              (f.indexCount = u),
              H(r, a + 1, 0, f),
              a
            );
          }
        }
        return null;
      }
      _getDisplayList(t, s) {
        let i;
        const r = this.symbolLevels.length;
        for (let h = 0; h < r; h++)
          if (this.symbolLevels[h].symbolLevel === t) {
            i = this.symbolLevels[h];
            break;
          }
        let n;
        i || ((i = new ge()), (i.symbolLevel = t), this.symbolLevels.push(i));
        const a = i.zLevels.length;
        for (let h = 0; h < a; h++)
          if (i.zLevels[h].zLevel === s) {
            n = i.zLevels[h];
            break;
          }
        return (
          n ||
            ((n = new qt()),
            (n.geometryDPInfo = new ee()),
            (n.zLevel = s),
            i.zLevels.push(n)),
          n.geometryDPInfo.unified || (n.geometryDPInfo.unified = []),
          n.geometryDPInfo.unified
        );
      }
      getDPInfoType() {
        return "unified";
      }
    })();
    for (const e of this.displayObjects)
      for (const t of e.displayRecords) this._displayList.addToList(t);
  }
  clone() {
    const e = new V();
    return (
      this.displayObjects &&
        (e.displayObjects = this.displayObjects.map((t) => t.clone())),
      e
    );
  }
  serialize(e) {
    return je(e, this.displayObjects), e;
  }
  _deserializeObjects(e) {
    const t = e.readInt32(),
      s = new Array(t),
      i = new Map();
    for (let r = 0; r < s.length; ++r) {
      const n = ke.deserialize(e);
      (s[r] = n), i.set(n.id, n);
    }
    (this.displayObjects = s),
      (this._displayList = null),
      (this._displayObjectRegistry = i);
  }
  static deserialize(e) {
    const t = new V();
    return t._deserializeObjects(e), t;
  }
}
let ne = class pe {
  constructor(e, t) {
    (this.data = e), (this.stride = t);
  }
  static decode(e) {
    const t = J(e.data, e.stride),
      s = e.stride;
    return new pe(t, s);
  }
  static fromVertexVector(e) {
    const t = J(e.data.buffer(), e.stride),
      s = e.stride;
    return new pe(t, s);
  }
};
class L {
  constructor(e, t, s) {
    (this.geometryType = e),
      (this.indexBuffer = new Uint32Array(t)),
      (this.namedBuffers = s);
  }
  static decode(e) {
    const t = e.geometryType,
      s = e.indexBuffer,
      i = {};
    for (const r in e.namedBuffers) i[r] = ne.decode(e.namedBuffers[r]);
    return new L(t, s, i);
  }
  static fromVertexData(e, t) {
    const s = e.indices,
      i = J(e.vertices, e.stride),
      r = e.stride,
      n = { geometry: new ne(i, r) };
    return new L(t, s, n);
  }
  static fromVertexVectors(e) {
    const t = e.geometryType,
      s = e.indexVector.buffer(),
      i = {};
    for (const r in e.namedVectors)
      i[r] = ne.fromVertexVector(e.namedVectors[r]);
    return new L(t, s, i);
  }
}
class Nt {
  get vertexCount() {
    const e = this.stride / 4;
    return this.data.length / e;
  }
  constructor(e, t) {
    (this.data = e), (this.stride = t);
  }
  transfer(e, t) {
    const s = this.data.buffer();
    (e.vertexCount = this.vertexCount),
      (e.data = s),
      (e.stride = this.stride),
      t.push(s);
  }
}
let Zt = class {
  constructor(o, e, t) {
    (this.geometryType = o),
      (this.indexVector = new Q(Uint32Array, 6 * e)),
      (this.namedVectors = {});
    const s = Tt(o, t);
    for (const i in s) {
      const r = s[i];
      let n;
      switch (r % 4) {
        case 0:
        case 2:
          n = new Q(Uint32Array, r * e);
          break;
        case 1:
        case 3:
          n = new Q(Uint8Array, r * e);
      }
      this.namedVectors[i] = new Nt(n, r);
    }
  }
  get(o) {
    return this.namedVectors[o].data;
  }
  getVector(o) {
    return this.namedVectors[o];
  }
  transfer(o, e) {
    const t = this.indexVector.buffer(),
      s = {};
    e.push(t);
    for (const i in this.namedVectors) {
      const r = this.namedVectors[i];
      (s[i] = {}), r.transfer(s[i], e);
    }
    (o.geometryType = this.geometryType),
      (o.indexBuffer = t),
      (o.namedBuffers = s),
      this.destroy();
  }
  intoBuffers() {
    const o = L.fromVertexVectors(this);
    return this.destroy(), o;
  }
  destroy() {
    (this.indexVector = null), (this.namedVectors = null);
  }
};
const q = new Pe(),
  S = new Pe();
function Xt(o, e) {
  const t = {};
  for (const s in o) {
    const i = { data: ye(e, o[s]), stride: o[s] };
    t[s] = i;
  }
  return t;
}
let Se = class B {
  constructor() {
    (this.tileDisplayData = null), (this.tileBufferData = null);
  }
  reshuffle() {
    var n, a, h;
    if ((q.reset(), !this.tileDisplayData)) return;
    const e = (function (l) {
      const d = [[], [], [], [], []],
        c = l;
      for (const u of c)
        for (const f of u.displayRecords) d[f.geometryType].push(f);
      return d;
    })(this.tileDisplayData.displayObjects);
    for (const l of e)
      for (const d of l)
        d &&
          q.needMore(
            d.geometryType,
            d.meshData ? d.meshData.vertexCount : d.vertexCount,
            d.meshData ? d.meshData.indexData.length : d.indexCount
          );
    const t = e.length,
      s = new ie();
    for (let l = 0; l < t; ++l) {
      s.geometries[l].indexBuffer = new Uint32Array(
        Math.round(1.5 * q.indicesFor(l))
      );
      const d = [],
        c =
          (n = this.tileBufferData) == null
            ? void 0
            : n.geometries[l].vertexBuffer;
      if (!c) continue;
      for (const p in c) d.push(c[p].stride);
      const u = B._computeVertexAlignment(d),
        f = Math.round(1.5 * q.verticesFor(l)),
        m = B._align(f, u);
      for (const p in c) {
        const g = c[p].stride;
        s.geometries[l].vertexBuffer[p] = { stride: g, data: ye(m, g) };
      }
    }
    S.reset(), (a = this.tileDisplayData.displayList) == null || a.clear();
    for (let l = 0; l < t; ++l) {
      const d = e[l];
      for (const c of d) {
        if (c.meshData)
          c.writeMeshDataToBuffers(
            S.verticesFor(l),
            s.geometries[l].vertexBuffer,
            S.indicesFor(l),
            s.geometries[l].indexBuffer
          ),
            (c.meshData = null);
        else {
          const u =
            (h = this.tileBufferData) == null ? void 0 : h.geometries[l];
          if (u) {
            const f = u.vertexBuffer,
              m = u.indexBuffer,
              p = s.geometries[l].vertexBuffer,
              g = s.geometries[l].indexBuffer,
              _ = S.verticesFor(l),
              x = S.indicesFor(l);
            de(_, x, p, g, c, f, m), (c.vertexFrom = _), (c.indexFrom = x);
          }
        }
        S.needMore(l, c.vertexCount, c.indexCount);
      }
    }
    const { displayList: i, displayObjects: r } = this.tileDisplayData;
    if (i) for (const l of r) i.addToList(l.displayRecords);
    this.tileBufferData = s;
  }
  getStrides() {
    var s;
    const e = [],
      t = (s = this.tileBufferData) == null ? void 0 : s.geometries;
    if (!t) return e;
    for (let i = 0; i < t.length; ++i) {
      const r = t[i];
      e[i] = {};
      for (const n in r.vertexBuffer) e[i][n] = r.vertexBuffer[n].stride;
    }
    return e;
  }
  clone() {
    var t, s;
    const e = new B();
    return (
      (e.tileBufferData =
        ((t = this.tileBufferData) == null ? void 0 : t.clone()) ?? null),
      (e.tileDisplayData =
        ((s = this.tileDisplayData) == null ? void 0 : s.clone()) ?? null),
      e
    );
  }
  _guessSize() {
    var i;
    const e =
        ((i = this.tileDisplayData) == null ? void 0 : i.displayObjects) ?? [],
      t = Math.min(e.length, 4);
    let s = 0;
    for (let r = 0; r < t; r++) s = Math.max(s, e[r].displayRecords.length);
    return 2 * (12 * e.length + e.length * s * 40);
  }
  serialize() {
    const e = this.tileBufferData.serialize(),
      t = this.tileBufferData.getBuffers(),
      s = this.tileDisplayData
        .serialize(new Q(Int32Array, this._guessSize()))
        .buffer();
    return (
      t.push(s), { result: { displayData: s, bufferData: e }, transferList: t }
    );
  }
  static fromVertexData(e, t) {
    const s = {},
      i = new Map();
    for (const r of t) i.set(r.id, r);
    return (
      Bt((r) => {
        const n = e.data[r];
        if (T(n)) {
          const a = It.from(n.records).getCursor();
          for (; a.next(); ) {
            const h = a.id,
              l = a.materialKey,
              d = a.indexFrom,
              c = a.indexCount,
              u = a.vertexFrom,
              f = a.vertexCount,
              m = i.get(h),
              p = new ue(h, r, l);
            (p.indexFrom = d),
              (p.indexCount = c),
              (p.vertexFrom = u),
              (p.vertexCount = f),
              m.displayRecords.push(p);
          }
          s[r] = L.fromVertexData(n, r);
        } else s[r] = new Zt(r, 0, Ae.DEFAULT).intoBuffers();
      }),
      B.fromMeshData({ displayObjects: t, vertexBuffersMap: s })
    );
  }
  static fromMeshData(e) {
    const t = new B(),
      s = new V(),
      i = new ie();
    s.displayObjects = e.displayObjects;
    for (const r in e.vertexBuffersMap) {
      const n = e.vertexBuffersMap[r];
      (i.geometries[r].indexBuffer = n.indexBuffer),
        (i.geometries[r].vertexBuffer = n.namedBuffers);
    }
    return (t.tileDisplayData = s), (t.tileBufferData = i), t;
  }
  static bind(e, t) {
    const s = new B();
    return (s.tileDisplayData = e), (s.tileBufferData = t), s;
  }
  static create(e, t) {
    const s = new B();
    (s.tileDisplayData = new V()), (s.tileDisplayData.displayObjects = e);
    const i = [0, 0, 0, 0, 0],
      r = [0, 0, 0, 0, 0],
      n = [[], [], [], [], []];
    for (const l of e)
      for (const d of l.displayRecords)
        n[d.geometryType].push(d),
          (i[d.geometryType] += d.meshData.vertexCount),
          (r[d.geometryType] += d.meshData.indexData.length);
    const a = new ie(),
      h = (function (l) {
        return [
          l.fill || {},
          l.line || {},
          l.icon || {},
          l.text || {},
          l.label || {},
        ];
      })(t);
    for (let l = 0; l < 5; l++) {
      const d = new Uint32Array(r[l]),
        c = Xt(h[l], i[l]);
      ue.writeAllMeshDataToBuffers(n[l], c, d),
        (a.geometries[l] = { indexBuffer: d, vertexBuffer: c });
    }
    return (s.tileBufferData = a), s;
  }
  static _align(e, t) {
    const s = e % t;
    return s === 0 ? e : e + (t - s);
  }
  static _computeVertexAlignment(e) {
    let t = !1,
      s = !1;
    for (const i of e) i % 4 == 2 ? (t = !0) : i % 4 != 0 && (s = !0);
    return s ? 4 : t ? 2 : 1;
  }
};
const N = 512,
  oe = 50;
function Re(o) {
  switch (He(o.geometry).type) {
    case "point":
    case "multipoint":
      return 0;
    case "polyline":
      return 1;
    case "polygon":
    case "extent":
      return 2;
  }
  return 0;
}
class $ extends Vt {
  static from(e, t, s) {
    const i = jt.createInstance(),
      r = [],
      n = e.filter((a) => !!a.geometry);
    for (const a of n) {
      const h = me(a.geometry);
      qe(r, [a], h, !1, !1, t);
    }
    return new $(i, r, s);
  }
  constructor(e, t, s) {
    super(e, t, null), (this._transform = s);
  }
  get geometryType() {
    const e = this._current;
    return e ? e.geometryType : null;
  }
  get insertAfter() {
    return this._current.insertAfter;
  }
  readGraphic() {
    return this._current;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const e = new $(this.instance, this._features, this._transform);
    return this.copyInto(e), e;
  }
}
const A = new ze(),
  ae = new ze(),
  Ie = "esriGeometryPolyline";
function Me(o) {
  (o.coords.length = 0), (o.lengths.length = 0);
}
let U = class W {
  constructor() {
    (this.bounds = C()), (this.graphic = null);
  }
  static acquire(e = null, t, s, i, r) {
    let n;
    return (
      W._pool.length === 0
        ? (n = new W())
        : ((n = W._pool.pop()), this._set.delete(n)),
      n.acquire(e, t, s, i, r),
      n
    );
  }
  static release(e) {
    e &&
      !this._set.has(e) &&
      (e.release(), this._pool.push(e), this._set.add(e));
  }
  static getCentroidQuantized(e, t) {
    if (he(e.geometry)) {
      const s = e.symbol;
      if (M(s)) return null;
      if (
        (s == null ? void 0 : s.layers.length) > 0 &&
        s.layers.some((i) => i.type === "text" || i.type === "marker")
      ) {
        const i = Ne(e.geometry);
        return i !== null ? Et(t, {}, { x: i[0], y: i[1] }, !1, !1) : null;
      }
    }
    return null;
  }
  acquire(e = null, t, s, i, r) {
    e && this.set(e, t, s, i, r);
  }
  release() {
    (this.graphic = null), (this.symbolResource = null), (this.geometry = null);
  }
  get symbol() {
    return this.symbolResource.symbol;
  }
  set(e, t, s, i, r) {
    (this.graphic = e),
      (this.geometry = s),
      (this.symbolResource = t),
      (this.bounds = i),
      r && (this.size = r);
  }
  getGeometryQuantized(e, t, s, i) {
    const r = this.geometry,
      n = me(r);
    if (M(n)) return null;
    switch (n) {
      case "esriGeometryPolygon": {
        const a = r,
          { rings: h } = a;
        if (!h || h.length === 0) return null;
        let l;
        if (
          ((l =
            h.length === 1 && h[0].length === 2
              ? z(e, { paths: [[h[0][0], h[0][1]]] })
              : z(e, this.geometry)),
          !l)
        ) {
          const d = { x: h[0][0][0], y: h[0][0][1] };
          if (((l = z(e, d)), l)) {
            const { x: c, y: u } = l;
            return {
              rings: [
                [
                  [c - 1, u],
                  [1, -1],
                  [1, 1],
                  [-1, 1],
                  [-1, -1],
                ],
              ],
            };
          }
        }
        return l;
      }
      case "esriGeometryPolyline": {
        const a = r;
        Me(A), Me(ae);
        const h = a.hasZ ?? !1,
          l = a.hasM ?? !1;
        return (
          Ze(A, a),
          Xe(ae, A, h, l, Ie, e.scale[0]),
          Qe(A, ae, h, l, Ie, e),
          Ye(A, a.hasZ ?? !1, a.hasM ?? !1)
        );
      }
      case "esriGeometryMultipoint": {
        const a = r,
          h =
            0.5 *
            i *
            Math.max(
              Math.abs(this.size[0]) + this.size[2] - this.size[0],
              Math.abs(this.size[1]) + this.size[3] - this.size[1]
            ),
          l = P(s);
        let d = a.points;
        if (l) {
          const [c, u] = l.valid,
            f = u - c;
          d = d.filter((m) => {
            if (m[0] + h > u || m[0] - h < c) {
              const p = [...m];
              return (
                m[0] + h > u ? (p[0] -= f) : (p[0] += f),
                te(t, m, h) || te(t, p, h)
              );
            }
            return te(t, m, h);
          });
        }
        return d.length === 0 ? { points: d } : z(e, { points: d });
      }
    }
    return z(e, this.geometry);
  }
};
(U._pool = []), (U._set = new Set());
const O = { minX: 0, minY: 0, maxX: 0, maxY: 0 },
  R = C(),
  Le = 1e-5;
function Z(o, e, t, s, i) {
  return (O.minX = e), (O.minY = t), (O.maxX = s), (O.maxY = i), o.search(O);
}
function Qt(o) {
  return {
    minX: o.bounds[0],
    minY: o.bounds[1],
    maxX: o.bounds[2],
    maxY: o.bounds[3],
  };
}
class Yt {
  constructor(e, t, s, i, r, n, a) {
    (this._graphics = i),
      (this._onAdd = r),
      (this._onRemove = n),
      (this._hashToCIM = a),
      (this._index = We(9, Qt)),
      (this._itemByGraphic = new Map()),
      (this._inflatedSizeHelper = new De()),
      (this._tileInfoView = e),
      (this._uidFieldName = s);
    const h = e.getClosestInfoForScale(t);
    h && (this._resolution = this._tileInfoView.getTileResolution(h.level));
  }
  setResourceManager(e) {
    (this._cimResourceManager = e), (this._hittestDrawHelper = new yt(e));
  }
  hitTest(e, t, s, i, r) {
    var m;
    e = Je(e, this._tileInfoView.spatialReference);
    const n = 0.5 * i * window.devicePixelRatio * s;
    (R[0] = e - n), (R[1] = t - n), (R[2] = e + n), (R[3] = t + n);
    const a = 0.5 * i * (s + oe),
      h = Z(this._index, e - a, t - a, e + a, t + a);
    if (!h || h.length === 0) return [];
    const l = [],
      d = C(),
      c = C();
    for (const p of h) {
      const { geometry: g, symbolResource: _ } = p;
      this._getSymbolBounds(d, _, g, c, r),
        (c[3] = c[2] = c[1] = c[0] = 0),
        $e(d, R) && (m = p.graphic) != null && m.visible && l.push(p);
    }
    if (l.length === 0) return [];
    const u = this._hittestDrawHelper,
      f = [];
    for (const p of l) {
      const { geometry: g, symbolResource: _ } = p,
        { hash: x, textInfo: F } = _,
        j = this._hashToCIM.get(x);
      j && u.hitTest(R, j.symbol, g, F, r, i) && f.push(p);
    }
    return f.sort(Wt), f.map((p) => p.graphic);
  }
  getGraphicsData(e, t, s) {
    const i = this._searchForItems(t);
    if (i.length === 0 || s.length === 0) return [];
    i.sort((c, u) => c.zorder - u.zorder), (i[0].insertAfter = -1);
    for (let c = 1; c < i.length; c++) i[c].insertAfter = i[c - 1].graphic.uid;
    i.sort((c, u) => c.graphic.uid - u.graphic.uid),
      s.sort((c, u) => c.uid - u.uid);
    let r,
      n = 0,
      a = 0;
    const h = t.resolution,
      l = [],
      d = {
        originPosition: "upperLeft",
        scale: [h, h],
        translate: [t.bounds[0], t.bounds[3]],
      };
    for (const c of s) {
      for (a = -2; n < i.length; )
        if (((r = i[n]), n++, c.uid === r.graphic.uid)) {
          a = r.insertAfter;
          break;
        }
      if (!(r != null && r.geometry) || a === -2) continue;
      const u = r.getGeometryQuantized(
          d,
          t.bounds,
          this._tileInfoView.spatialReference,
          h
        ),
        f = { ...r.graphic.attributes };
      (f[this._uidFieldName] = c.uid),
        r.groupId == null &&
          (r.groupId = e.createTemplateGroup(r.symbol, null)),
        l.push({
          centroid: U.getCentroidQuantized(r, d),
          geometry: u,
          attributes: f,
          symbol: r.symbol,
          groupId: r.groupId,
          insertAfter: a,
          zorder: r.zorder,
        });
    }
    return l.sort((c, u) => c.zorder - u.zorder), l;
  }
  queryTileData(e, t) {
    if (this._graphics.length === 0) return [];
    const { bounds: s, resolution: i } = t,
      r = this._searchForItems(t),
      n = [];
    return (
      r.length === 0 ||
        this._createTileGraphics(
          n,
          e,
          r,
          {
            originPosition: "upperLeft",
            scale: [i, i],
            translate: [s[0], s[3]],
          },
          t
        ),
      n
    );
  }
  has(e) {
    return this._itemByGraphic.has(e);
  }
  getBounds(e) {
    const t = this._itemByGraphic.get(e);
    return t ? t.bounds : null;
  }
  getAllBounds() {
    return Array.from(this._itemByGraphic.values())
      .filter((e) => e.graphic.visible)
      .map((e) => e.bounds);
  }
  addOrModify(e, t, s) {
    if (!e || M(t)) return;
    this.has(e) && this.remove(e), this._onAdd(e);
    const i = [0, 0, 0, 0],
      r = this._getSymbolBounds(null, t, s, i, 0),
      n = U.acquire(e, t, s, T(r) ? r : null, i);
    return this._itemByGraphic.set(e, n), s && this._index.insert(n), n.bounds;
  }
  remove(e) {
    if (!this._itemByGraphic.has(e)) return;
    this._onRemove(e);
    const t = this._itemByGraphic.get(e);
    t != null && t.bounds && this._index.remove(t),
      this._itemByGraphic.delete(e);
  }
  updateZ() {
    const e = this._graphics.items;
    let t, s;
    for (let i = 0; i < e.length; i++)
      (s = e[i]), (t = this._itemByGraphic.get(s)), t && (t.zorder = i);
  }
  update(e, t, s) {
    const i = this._itemByGraphic.get(e);
    i.groupId = null;
    const r = et(i.bounds);
    this._index.remove(i);
    const n = this._getSymbolBounds(i.bounds, t, s, i.size, 0);
    return (
      T(n) && i.set(e, t, s, n, i.size),
      s && this._index.insert(i),
      { oldBounds: r, newBounds: i.bounds }
    );
  }
  updateLevel(e) {
    if (this._resolution === e) return;
    (this._resolution = e), this._index.clear();
    const t = this._itemByGraphic,
      s = [];
    for (const [i, r] of t) {
      const n = this._getSymbolBounds(
        r.bounds,
        r.symbolResource,
        r.geometry,
        r.size,
        0
      );
      r.geometry && T(n) && ((r.bounds = n), s.push(r));
    }
    this._index.load(s);
  }
  clear() {
    this._itemByGraphic.clear(), this._index.clear();
  }
  _createTileGraphics(e, t, s, i, r) {
    const n = this._uidFieldName,
      a = this._tileInfoView.spatialReference,
      { bounds: h, resolution: l } = r;
    let d, c, u, f;
    s.sort((m, p) => m.zorder - p.zorder);
    for (let m = 0; m < s.length; m++) {
      (u = s[m]),
        (d = u.graphic),
        (c = u.getGeometryQuantized(i, h, a, l)),
        (f = m === 0 ? -1 : s[m - 1].graphic.uid);
      const p = { ...u.graphic.attributes };
      (p[n] = d.uid),
        u.groupId == null &&
          (u.groupId = t.createTemplateGroup(u.symbol, null)),
        e.push({
          centroid: U.getCentroidQuantized(u, i),
          geometry: c,
          attributes: p,
          symbol: u.symbol,
          groupId: u.groupId,
          insertAfter: f,
          zorder: u.zorder,
        });
    }
  }
  _searchForItems(e) {
    const t = this._tileInfoView.spatialReference,
      s = e.bounds,
      i = P(t);
    if (i && t.isWrappable) {
      const [r, n] = i.valid,
        a = Math.abs(s[2] - n) < Le,
        h = Math.abs(s[0] - r) < Le;
      if ((!a || !h) && (a || h)) {
        const l = e.resolution;
        let d;
        d = C(a ? [r, s[1], r + l * oe, s[3]] : [n - l * oe, s[1], n, s[3]]);
        const c = Z(this._index, s[0], s[1], s[2], s[3]),
          u = Z(this._index, d[0], d[1], d[2], d[3]);
        return [...new Set([...c, ...u])];
      }
    }
    return Z(this._index, s[0], s[1], s[2], s[3]);
  }
  _getSymbolBounds(e, t, s, i, r) {
    if (!t || !t.symbol || !s) return null;
    if (
      (e || (e = C()),
      tt(e, s),
      !i || (i[0] === 0 && i[1] === 0 && i[2] === 0 && i[3] === 0))
    ) {
      const { hash: h, textInfo: l } = t,
        d = this._hashToCIM.get(h);
      if (!d) return null;
      i || (i = [0, 0, 0, 0]);
      const c = this._inflatedSizeHelper.getSymbolInflateSize(
        i,
        d.symbol,
        this._cimResourceManager,
        r,
        l
      );
      (i[0] = k(c[0])), (i[1] = k(c[1])), (i[2] = k(c[2])), (i[3] = k(c[3]));
    }
    const n = this._resolution,
      a = De.safeSize(i);
    return (
      (e[0] -= a * n), (e[1] -= a * n), (e[2] += a * n), (e[3] += a * n), e
    );
  }
}
const Wt = (o, e) => {
    const t = Re(o.graphic),
      s = Re(e.graphic);
    return t === s ? e.zorder - o.zorder : t - s;
  },
  Jt = (o) => {
    let e = class extends st(o) {
      constructor() {
        super(...arguments), (this.graphics = null), (this.renderer = null);
      }
    };
    return (
      b([D()], e.prototype, "graphics", void 0),
      b([D()], e.prototype, "renderer", void 0),
      b([D()], e.prototype, "updating", void 0),
      b([D()], e.prototype, "view", void 0),
      (e = b([Ge("esri.views.layers.GraphicsView")], e)),
      e
    );
  },
  $t = it("esri-2d-graphic-debug");
function le(o, e, t) {
  let s = t.get(o);
  return (
    s || ((s = { tile: e, addedOrModified: [], removed: [] }), t.set(o, s)), s
  );
}
let w = class extends Jt(rt(mt)) {
  constructor(o) {
    super(o),
      (this._storage = new kt()),
      (this._displayIds = new Map()),
      (this._controller = new AbortController()),
      (this._tiles = new Map()),
      (this._graphicStoreUpdate = !1),
      (this._graphicsSet = new Set()),
      (this._matcher = Promise.resolve(null)),
      (this._tileUpdateSet = new Set()),
      (this._tilesToUpdate = new Map()),
      (this._graphicIdToAbortController = new Map()),
      (this._attached = !1),
      (this._updatingGraphicsTimer = null),
      (this._hashToExpandedSymbol = new Map()),
      (this._hashToExpandedSymbolPromise = new Map()),
      (this._hashToCIMSymbolPromise = new Map()),
      (this._hashToCIM = new Map()),
      (this._processing = !1),
      (this._needsProcessing = !1),
      (this._pendingUpdate = {
        added: new Set(),
        updated: new Set(),
        removed: new Set(),
      }),
      (this.lastUpdateId = -1),
      (this.updateRequested = !1),
      (this.defaultPointSymbolEnabled = !0),
      (this.graphicUpdateHandler = this.graphicUpdateHandler.bind(this));
  }
  destroy() {
    this._updatingGraphicsTimer &&
      (clearTimeout(this._updatingGraphicsTimer),
      (this._updatingGraphicsTimer = null),
      this.notifyChange("updating")),
      this._controller.abort(),
      this.container.destroy(),
      this._set("graphics", null),
      this._graphicStore.clear(),
      (this._attributeStore = null),
      this._hashToExpandedSymbol.clear(),
      (this.view = null),
      (this.renderer = null),
      this._hashToCIM.clear(),
      this._hashToCIMSymbolPromise.clear(),
      this._hashToExpandedSymbolPromise.clear();
  }
  _createMatcher(o, e, t) {
    if (o) {
      const s = we(o),
        i = Pt({ indexCount: 0, fields: {} }, "feature", o, s);
      this._matcher = Lt(i, e, null, t);
    }
  }
  _createDisplayId(o) {
    let e = this._displayIds.get(o);
    return (
      e || ((e = this._storage.createDisplayId()), this._displayIds.set(o, e)),
      e
    );
  }
  initialize() {
    (this._attributeStore = new Kt(
      {
        type: "local",
        initialize: (t) =>
          Promise.resolve(this.container.attributeView.initialize(t)),
        update: (t) => this.container.attributeView.requestUpdate(t),
        render: () => this.container.requestRender(),
      },
      nt("2d"),
      () => this.notifyChange("updating")
    )),
      (this.container.hasHighlight = () => this._attributeStore.hasHighlight);
    const o = new zt(
      this.container.getMaterialItems.bind(this.container),
      this.view.featuresTilingScheme.tileInfo
    );
    (this._graphicStore = new Yt(
      this.view.featuresTilingScheme,
      this.view.state.scale,
      this.uid,
      this.graphics,
      (t) => {
        this._createDisplayId(t.uid), this._setFilterState(t.uid, t.visible);
      },
      (t) => {
        const s = this._displayIds.get(t.uid);
        this._displayIds.delete(t.uid), this._storage.releaseDisplayId(s);
      },
      this._hashToCIM
    )),
      (this._meshFactory = new Gt(null, this.uid, o)),
      (this._templateStore = o),
      this.handles.add([
        ot(
          () => this.renderer,
          (t) => {
            this._createMatcher(t, o, this.container.stage.resourceManager);
            for (const s of this.graphics) this._pendingUpdate.updated.add(s);
            this.requestUpdate();
          }
        ),
        this.view.graphicsTileStore.on("update", this._onTileUpdate.bind(this)),
        this.container.on("attach", () => {
          $t &&
            this.container.enableRenderingBounds(() =>
              this._graphicStore.getAllBounds()
            ),
            this.graphics.items.length > 0 &&
              this._graphicsChangeHandler({
                target: this.graphics,
                added: this.graphics.items,
                removed: [],
                moved: [],
              }),
            this.handles.add(
              this.graphics.on("change", (s) => this._graphicsChangeHandler(s)),
              "graphics"
            );
          const t = this.container.stage.resourceManager;
          this._createMatcher(this.renderer, o, t),
            this._graphicStore.setResourceManager(t),
            (this._attached = !0),
            this.notifyChange("updating");
        }),
      ]);
    const e = this.view.graphicsTileStore.tiles;
    this._onTileUpdate({ added: e, removed: [] });
  }
  get updating() {
    return (
      !this._attached ||
      this._updatingGraphicsTimer !== null ||
      this._tileUpdateSet.size > 0 ||
      this._tilesToUpdate.size > 0 ||
      this._attributeStore.isUpdating()
    );
  }
  hitTest(o) {
    if (!this.view || !this.view.position) return [];
    const { resolution: e, rotation: t } = this.view.state;
    return this._graphicStore.hitTest(o.x, o.y, 2, e, t);
  }
  update(o) {
    v(this._controller.signal);
    const e = o.state,
      { resolution: t } = e;
    if (
      (this._graphicStore.updateLevel(t),
      (this._graphicStoreUpdate = !0),
      (this.updateRequested = !1),
      this._pendingUpdate.updated.size > 0)
    ) {
      if (!this._processing) return void this._updateGraphics();
      this._needsProcessing = !0;
    }
  }
  viewChange() {
    this.requestUpdate();
  }
  requestUpdate() {
    this.updateRequested ||
      ((this.updateRequested = !0), this.requestUpdateCallback());
  }
  processUpdate(o) {
    this.updateRequested && ((this.updateRequested = !1), this.update(o));
  }
  graphicUpdateHandler(o) {
    const { graphic: e, property: t } = o;
    switch (t) {
      case "attributes":
      case "geometry":
      case "symbol":
        this._pendingUpdate.updated.add(e), this.requestUpdate();
        break;
      case "visible":
        this._setFilterState(e.uid, e.visible),
          this._attributeStore.sendUpdates();
    }
  }
  setHighlight(o) {
    const e = o.map((t) => this._displayIds.get(t)).filter(T);
    this._attributeStore.setHighlight(o, e);
  }
  _getIntersectingTiles(o) {
    const e = this._graphicStore.getBounds(o);
    if (!e || at(e) === 0 || lt(e) === 0) return [];
    const t = (function (s, i) {
      const r = P(i);
      if (!r) return null;
      const [n, a] = r.valid;
      return s[2] > a
        ? [C([s[0], s[1], a, s[3]]), C([n, s[1], n + s[2] - a, s[3]])]
        : s[0] < n
        ? [C([n, s[1], s[2], s[3]]), C([a - (n - s[0]), s[1], a, s[3]])]
        : null;
    })(e, this.view.spatialReference);
    return T(t)
      ? [
          ...new Set([
            ...this.view.graphicsTileStore.boundsIntersections(t[0]),
            ...this.view.graphicsTileStore.boundsIntersections(t[1]),
          ]),
        ]
      : this.view.graphicsTileStore.boundsIntersections(e);
  }
  async _updateTile(o) {
    v(this._controller.signal);
    const e = o.tile,
      t = this._getGraphicsData(this._templateStore, e, o.addedOrModified),
      s = await this._processGraphics(e, t);
    return (
      v(this._controller.signal),
      this._patchTile(e.key, {
        type: "update",
        addOrUpdate: s,
        remove: o.removed,
        end: !0,
        clear: !1,
        sort: !1,
      }),
      s
    );
  }
  _patchTile(o, e) {
    const t = this._tiles.get(o);
    t && (this.container.onTileData(t, e), this.container.requestRender());
  }
  _graphicsChangeHandler(o) {
    const e = this._pendingUpdate;
    for (const t of o.added) e.added.add(t);
    for (const t of o.moved) e.updated.add(t);
    for (const t of o.removed)
      this._pendingUpdate.added.has(t) ? e.added.delete(t) : e.removed.add(t);
    this._processing ? (this._needsProcessing = !0) : this._updateGraphics();
  }
  _getGraphicsToUpdate() {
    const o = { added: [], removed: [], updated: [] };
    if (!this.graphics) return o;
    const e = this._pendingUpdate;
    for (const t of this.graphics.items)
      e.added.has(t) ? o.added.push(t) : e.updated.has(t) && o.updated.push(t);
    for (const t of e.removed) this._graphicStore.has(t) && o.removed.push(t);
    return e.added.clear(), e.removed.clear(), e.updated.clear(), o;
  }
  async _updateGraphics() {
    this._processing = !0;
    const { added: o, removed: e, updated: t } = this._getGraphicsToUpdate(),
      s = this._tilesToUpdate;
    let i;
    try {
      if (!this._graphicStoreUpdate) {
        const d = this.view.state,
          { resolution: c } = d;
        this._graphicStore.updateLevel(c);
      }
      const r = [],
        n = new Array(o.length + e.length);
      for (let d = 0; d < t.length; d++) {
        const c = t[d],
          u = this._getIntersectingTiles(c);
        for (const f of u)
          (i = f.id), le(i, f, s).removed.push(this._displayIds.get(c.uid));
        r.push(this._updateGraphic(c, null)), (n[d] = c);
      }
      const a = t.length;
      for (let d = 0; d < o.length; d++) {
        const c = o[d];
        (n[a + d] = c), this._graphicsSet.add(c), r.push(this._addGraphic(c));
      }
      for (const d of e) {
        this._abortProcessingGraphic(d.uid);
        const c = this._getIntersectingTiles(d);
        for (const u of c)
          (i = u.id), le(i, u, s).removed.push(this._displayIds.get(d.uid));
        this._graphicsSet.delete(d), this._graphicStore.remove(d);
      }
      let h;
      this._flipUpdatingGraphics(), await Promise.all(r);
      for (let d = 0; d < n.length; d++) {
        h = n[d];
        const c = this._getIntersectingTiles(h);
        for (const u of c) (i = u.id), le(i, u, s).addedOrModified.push(h);
      }
      this._graphicStore.updateZ();
      const l = [];
      for (const [d, c] of s) l.push(this._updateTile(c));
      await Promise.all(l);
    } catch (r) {
      K(r);
    }
    for (const r of e)
      try {
        const n = await this._getSymbolForGraphic(r, null);
        if (n) {
          const a = n.hash();
          this._hashToExpandedSymbol.delete(a);
        }
      } catch (n) {
        K(n);
      }
    s.clear(),
      this.notifyChange("updating"),
      (this._processing = !1),
      this._needsProcessing &&
        ((this._needsProcessing = !1), this._updateGraphics());
  }
  _getArcadeInfo(o) {
    const e = (o.attributes ? Object.keys(o.attributes) : []).map((t) => ({
      name: t,
      alias: t,
      type:
        typeof o.attributes[t] == "string"
          ? "esriFieldTypeString"
          : "esriFieldTypeDouble",
    }));
    return M(o.geometry)
      ? null
      : {
          geometryType: me(o.geometry),
          spatialReference: ht.fromJSON(o.geometry.spatialReference),
          fields: e,
        };
  }
  _getSymbolForGraphic(o, e) {
    return (
      v(this._controller.signal),
      T(o.symbol)
        ? Promise.resolve(o.symbol)
        : T(this.renderer)
        ? this.renderer.getSymbolAsync(o, {
            scale: this.view.scale,
            signal: T(e) ? e.signal : null,
          })
        : Promise.resolve(this._getNullSymbol(o))
    );
  }
  _getCIMSymbol(o, e, t) {
    let s = this._hashToCIM.get(e);
    if (s) return Promise.resolve(s);
    const i = gt(o);
    if (T(i)) {
      if (i.type === "CIMSymbolReference")
        return (s = i), this._hashToCIM.set(e, s), Promise.resolve(s);
      let r = this._hashToCIMSymbolPromise.get(e);
      return (
        r ||
        ((r = i
          .fetchCIMSymbol(t)
          .then(
            (n) => (
              this._hashToCIM.set(e, n.data),
              this._hashToCIMSymbolPromise.delete(e),
              n
            )
          )
          .catch((n) => (this._hashToCIMSymbolPromise.delete(e), xe(n), null))),
        this._hashToCIMSymbolPromise.set(e, r),
        r)
      );
    }
    return Promise.resolve(null);
  }
  _expandCIMSymbol(o, e, t, s) {
    const i = this._hashToExpandedSymbol.get(t);
    if (i) return Promise.resolve(i);
    let r = this._hashToExpandedSymbolPromise.get(t);
    if (r) return r;
    const n = this.container.stage,
      a = this._getArcadeInfo(e),
      h = we(null),
      l = Ut(o, h);
    return (
      (r = At(l, a, n.resourceManager, s)),
      this._hashToExpandedSymbolPromise.set(t, r),
      r.then(
        (d) => (
          this._hashToExpandedSymbol.set(t, d),
          this._hashToExpandedSymbolPromise.delete(t),
          d
        )
      ),
      r
    );
  }
  async _getSymbolResources(o, e) {
    return (
      v(this._controller.signal),
      this.container.stage
        ? this._getSymbolForGraphic(o, e)
            .then((t) => {
              if (!t) return null;
              const s = t.hash();
              return this._getCIMSymbol(t, s, e).then((i) =>
                M(i)
                  ? null
                  : this._expandCIMSymbol(i, o, s, e).then((r) => {
                      const n = r.layers.filter(
                        (a) => a.type === "text" && typeof a.text == "string"
                      );
                      if (n && n.length > 0) {
                        const a = new Array(n.length);
                        for (let l = 0; l < n.length; l++) {
                          const d = n[l],
                            c = [],
                            [u] = xt(d.text);
                          d.text = u;
                          for (let f = 0; f < u.length; f++)
                            c.push(u.charCodeAt(f));
                          a[l] = { symbol: d, id: l, glyphIds: c };
                        }
                        const h = new Map();
                        return this.container.getMaterialItems(a).then((l) => {
                          dt(l);
                          for (let d = 0; d < n.length; d++) {
                            const c = n[d];
                            h.set(c.cim, {
                              text: c.text,
                              mosaicItem: l[d].mosaicItem,
                            });
                          }
                          return { symbol: r, textInfo: h, hash: s };
                        });
                      }
                      return { symbol: r, hash: s };
                    })
              );
            })
            .catch((t) => (xe(t), null))
        : null
    );
  }
  async _projectAndNormalizeGeometry(o, e) {
    if (
      (v(this._controller.signal), M(o.geometry) || o.geometry.type === "mesh")
    )
      return null;
    let t = o.geometry;
    if (he(t)) {
      const r = t.rings;
      t.rings = r;
    } else if (_e(t)) {
      const r = t.paths;
      t.paths = r;
    } else if (ve(t)) {
      const r = await this._getSymbolForGraphic(o, e);
      v(this._controller.signal),
        (t =
          r &&
          ((function (n) {
            return (
              n === "simple-marker" ||
              n === "picture-marker" ||
              n === "esriSMS" ||
              n === "esriPMS"
            );
          })(r.type) ||
            (function (n) {
              return n === "text" || n === "esriTS";
            })(r.type))
            ? t.center
            : (function (n) {
                if (!n) return null;
                const {
                  xmin: a,
                  ymin: h,
                  xmax: l,
                  ymax: d,
                  spatialReference: c,
                } = n;
                return new Ee({
                  rings: [
                    [
                      [a, h],
                      [a, d],
                      [l, d],
                      [l, h],
                      [a, h],
                    ],
                  ],
                  spatialReference: c,
                });
              })(t));
    }
    await vt(t.spatialReference, this.view.spatialReference);
    const s = _t(t),
      i = bt(s, t.spatialReference, this.view.spatialReference);
    return i && ct(i), i;
  }
  _onTileUpdate(o) {
    const e = P(this.view.spatialReference);
    if (o.added && o.added.length > 0)
      for (const t of o.added) this._addNewTile(t, e);
    if (o.removed && o.removed.length > 0)
      for (const t of o.removed) this._removeTile(t.key);
  }
  async _addGraphic(o) {
    this._abortProcessingGraphic(o.uid), v(this._controller.signal);
    const e = new AbortController();
    this._graphicIdToAbortController.set(o.uid, e);
    const t = { signal: e.signal };
    try {
      await this._addOrUpdateGraphic(o, t),
        v(this._controller.signal),
        this._graphicIdToAbortController.delete(o.uid);
    } catch (s) {
      if ((this._graphicIdToAbortController.delete(o.uid), !K(s))) throw s;
    }
  }
  _updateGraphic(o, e) {
    v(this._controller.signal);
    const t = this._projectAndNormalizeGeometry(o, e),
      s = this._getSymbolResources(o, e);
    return Promise.all([t, s]).then(([i, r]) => {
      v(this._controller.signal), this._graphicStore.addOrModify(o, r, i);
    });
  }
  _addOrUpdateGraphic(o, e) {
    v(this._controller.signal);
    const t = this._projectAndNormalizeGeometry(o, e),
      s = this._getSymbolResources(o, e);
    return Promise.all([t, s]).then(([i, r]) => {
      v(this._controller.signal),
        this._graphicsSet.has(o) && this._graphicStore.addOrModify(o, r, i);
    });
  }
  _addTile(o) {
    const e = this.view.featuresTilingScheme.getTileBounds(C(), o),
      t = this.view.featuresTilingScheme.getTileResolution(o.level),
      s = new Ht(o, t, e[0], e[3]);
    return this._tiles.set(o, s), this.container.addChild(s), s;
  }
  async _addNewTile(o, e) {
    const t = this._addTile(o.key),
      s = this._graphicStore.queryTileData(this._templateStore, o);
    if (s.length === 0) return;
    if (e) {
      const r = Math.round((e.valid[1] - e.valid[0]) / o.resolution);
      for (const n of s)
        n.geometry &&
          (be(n.geometry) || se(n.geometry)) &&
          this._wrapPoints(n, r);
    }
    const i = o.key;
    this._tileUpdateSet.add(o.key), this.notifyChange("updating");
    try {
      const r = {
        type: "update",
        clear: !1,
        addOrUpdate: await this._processGraphics(o, s),
        remove: [],
        end: !0,
        sort: !1,
      };
      t.patch(r), this._tileUpdateSet.delete(i), this.notifyChange("updating");
    } catch (r) {
      if ((this._tileUpdateSet.delete(i), this.notifyChange("updating"), !K(r)))
        throw r;
    }
  }
  _removeTile(o) {
    if (!this._tiles.has(o)) return;
    const e = this._tiles.get(o);
    this.container.removeChild(e), e.destroy(), this._tiles.delete(o);
  }
  _setFilterState(o, e) {
    const t = this._displayIds.get(o),
      s = this._attributeStore.getHighlightFlag(o);
    this._attributeStore.setData(t, 0, 0, s | (e ? Dt : 0));
  }
  _getGraphicsData(o, e, t) {
    const s = this.view,
      i = P(s.spatialReference),
      r = this._graphicStore.getGraphicsData(o, e, t);
    if (i) {
      const n = Math.round((i.valid[1] - i.valid[0]) / e.resolution);
      for (const a of r)
        a.geometry &&
          (be(a.geometry) || se(a.geometry)) &&
          this._wrapPoints(a, n);
    }
    return r;
  }
  _wrapPoints(o, e) {
    const t = o.geometry;
    se(t) ? this._wrapMultipoint(t, e) : this._wrapPoint(o, e);
  }
  _wrapMultipoint(o, e) {
    const t = o.points,
      s = [];
    let i = 0,
      r = 0;
    for (const [n, a] of t)
      s.push([n + i, a]),
        (i = 0),
        e === N
          ? n + r < 250
            ? (s.push([e, 0]), (i = -e))
            : n + r > N - 250 && (s.push([-e, 0]), (i = e))
          : n + r < -50
          ? (s.push([e, 0]), (i = -e))
          : n + r > 562 && (s.push([-e, 0]), (i = e)),
        (r += n);
    o.points = s;
  }
  _wrapPoint(o, e) {
    const t = o.geometry;
    e === N
      ? t.x < 250
        ? (o.geometry = {
            points: [
              [t.x, t.y],
              [e, 0],
            ],
          })
        : t.x > N - 250 &&
          (o.geometry = {
            points: [
              [t.x, t.y],
              [-e, 0],
            ],
          })
      : t.x < -50
      ? (o.geometry = {
          points: [
            [t.x, t.y],
            [e, 0],
          ],
        })
      : t.x > 562 &&
        (o.geometry = {
          points: [
            [t.x, t.y],
            [-e, 0],
          ],
        });
  }
  _processGraphics(o, e, t) {
    if (!e || !e.length || !this._meshFactory) return Promise.resolve(null);
    const s = $.from(e, this.uid, o.transform),
      i = this._meshFactory;
    return this._matcher.then((r) =>
      i
        .analyzeGraphics(
          s,
          this.container.stage.resourceManager,
          r,
          null,
          null,
          t
        )
        .then(
          () => (
            this._attributeStore.sendUpdates(),
            this._processAnalyzedGraphics(o, s)
          )
        )
    );
  }
  _processAnalyzedGraphics(o, e) {
    const t = this._meshFactory,
      s = e.getSize(),
      i = e.getCursor(),
      r = { features: s, records: s, metrics: 0 },
      n = new Ot(o.key.id, r, Ae.DEFAULT, !1, !1),
      a = [];
    for (; i.next(); ) {
      const c = i.readGraphic();
      (c.insertAfter =
        c.insertAfter === -1 ? -1 : this._displayIds.get(c.insertAfter)),
        (c.displayId = this._displayIds.get(c.attributes[this.uid]));
      const u = new ke(c.displayId);
      (u.insertAfter = c.insertAfter),
        a.push(u),
        t.writeGraphic(n, i, o.level, this.container.stage.resourceManager);
    }
    const h = o.tileInfoView.tileInfo.isWrappable,
      l = n.serialize(h);
    if (l.length !== 1) return new Se();
    const d = l[0].message;
    return Se.fromVertexData(d, a);
  }
  _abortProcessingGraphic(o) {
    var e;
    (e = this._graphicIdToAbortController.get(o)) == null || e.abort();
  }
  _getNullSymbol(o) {
    const e = o.geometry;
    return _e(e)
      ? ut
      : he(e) || ve(e)
      ? ft
      : this.defaultPointSymbolEnabled
      ? pt
      : null;
  }
  _flipUpdatingGraphics() {
    this._updatingGraphicsTimer && clearTimeout(this._updatingGraphicsTimer),
      (this._updatingGraphicsTimer = setTimeout(() => {
        (this._updatingGraphicsTimer = null), this.notifyChange("updating");
      }, 160)),
      this.notifyChange("updating");
  }
};
b([D({ constructOnly: !0 })], w.prototype, "requestUpdateCallback", void 0),
  b([D()], w.prototype, "container", void 0),
  b([D({ constructOnly: !0 })], w.prototype, "graphics", void 0),
  b([D()], w.prototype, "updating", null),
  b([D()], w.prototype, "view", void 0),
  b([D()], w.prototype, "updateRequested", void 0),
  b([D()], w.prototype, "defaultPointSymbolEnabled", void 0),
  (w = b([Ge("esri.views.2d.layers.support.GraphicsView2D")], w));
const ps = w;
export { ps as a };
