import { r as E, R as J } from "./index.8fd7165c.js";
import { J as L, C as q, o as F } from "./rasterProjectionHelper.fde7641d.js";
const f = new Map(),
  d = new (class {
    constructor(n = 15e3, r = 5e3) {
      (this._timer = null),
        (this._cachedBlocks = new Map()),
        (this._size = -1),
        (this._duration = n),
        (this._interval = Math.min(n, r));
    }
    decreaseRefCount(n, r) {
      const e = n + "/" + r,
        t = this._cachedBlocks;
      if (t.has(e)) {
        const o = t.get(e);
        return (
          o.refCount--,
          o.refCount <= 0 &&
            (t.delete(e), o.controller && o.controller.abort()),
          o.refCount
        );
      }
      return 0;
    }
    getBlock(n, r) {
      const e = n + "/" + r,
        t = this._cachedBlocks;
      if (t.has(e)) {
        const o = t.get(e);
        return (
          (o.ts = Date.now()), o.refCount++, t.delete(e), t.set(e, o), o.block
        );
      }
      return null;
    }
    putBlock(n, r, e, t) {
      const o = this._cachedBlocks,
        l = n + "/" + r;
      if (o.has(l)) {
        const s = o.get(l);
        (s.ts = Date.now()), s.refCount++;
      } else o.set(l, { block: e, ts: Date.now(), refCount: 1, controller: t });
      this._trim(), this._updateTimer();
    }
    deleteBlock(n, r) {
      const e = this._cachedBlocks,
        t = n + "/" + r;
      e.has(t) && e.delete(t);
    }
    updateMaxSize(n) {
      (this._size = n), this._trim();
    }
    empty() {
      this._cachedBlocks.clear(), this._clearTimer();
    }
    getCurrentSize() {
      return this._cachedBlocks.size;
    }
    _updateTimer() {
      if (this._timer != null) return;
      const n = this._cachedBlocks;
      this._timer = setInterval(() => {
        const r = Array.from(n),
          e = Date.now();
        for (let t = 0; t < r.length && r[t][1].ts <= e - this._duration; t++)
          n.delete(r[t][0]);
        n.size === 0 && this._clearTimer();
      }, this._interval);
    }
    _trim() {
      const n = this._cachedBlocks;
      if (this._size === -1 || this._size >= n.size) return;
      const r = Array.from(n);
      for (let e = 0; e < r.length - this._size; e++) n.delete(r[e][0]);
    }
    _clearTimer() {
      this._timer != null && (clearInterval(this._timer), (this._timer = null));
    }
  })();
function O(n, r) {
  return r == null ? n : `${n}?sliceId=${r}`;
}
function P(n, r) {
  const e = { extent: null, rasterInfo: r, cache: new Map() },
    t = f.get(n);
  return t ? (t.push(e), t.length - 1) : (f.set(n, [e]), 0);
}
function Q(n, r) {
  const e = f.get(n);
  e && ((e[r] = null), e.some((t) => t != null) || f.delete(n));
}
function U(n, r, e) {
  var s, i;
  const t = f.get(n);
  if (!t) return r == null ? d.decreaseRefCount(n, e) : 0;
  if (r == null || t[r] == null) return d.decreaseRefCount(n, e);
  const o = (s = t[r]) == null ? void 0 : s.cache,
    l = o == null ? void 0 : o.get(e);
  if (o && l) {
    if ((l.refCount--, l.refCount === 0)) {
      o.delete(e);
      for (let c = 0; c < t.length; c++)
        (i = t[c]) == null || i.cache.delete(e);
      l.controller && l.controller.abort();
    }
    return l.refCount;
  }
  return 0;
}
function V(n, r, e) {
  var l, s, i;
  const t = f.get(n);
  if (!t) return r == null ? d.getBlock(n, e) : null;
  if (r == null || t[r] == null) {
    for (let c = 0; c < t.length; c++) {
      const a = (l = t[c]) == null ? void 0 : l.cache.get(e);
      if (a) return a.refCount++, a.block;
    }
    return d.getBlock(n, e);
  }
  const o = (s = t[r]) == null ? void 0 : s.cache.get(e);
  if (o) return o.refCount++, o.block;
  for (let c = 0; c < t.length; c++) {
    if (c === r || !t[c]) continue;
    const a = (i = t[c]) == null ? void 0 : i.cache,
      m = a == null ? void 0 : a.get(e);
    if (a && m) return m.refCount++, a.set(e, m), m.block;
  }
  return null;
}
function X(n, r, e, t, o = null) {
  var i;
  const l = f.get(n);
  if (!l) return void (r == null && d.putBlock(n, e, t, o));
  if (r == null || l[r] == null) return void d.putBlock(n, e, t, o);
  const s = {
    refCount: 1,
    block: t,
    isResolved: !1,
    isRejected: !1,
    controller: o,
  };
  t.then(() => (s.isResolved = !0)).catch(() => (s.isRejected = !0)),
    (i = l[r]) == null || i.cache.set(e, s);
}
function Y(n, r, e) {
  var o;
  const t = f.get(n);
  t
    ? r != null && t[r] != null
      ? (o = t[r]) == null || o.cache.delete(e)
      : d.deleteBlock(n, e)
    : r == null && d.deleteBlock(n, e);
}
function G(n, r) {
  const e = f.get(n);
  return e ? e[r] ?? null : null;
}
function Z(n, r, e, t, o, l, s = null) {
  const i = G(n, r);
  if (!i) return;
  const c = i.extent,
    { cache: a, rasterInfo: m } = i;
  if (
    c &&
    c.xmin === e.xmin &&
    c.xmax === e.xmax &&
    c.ymin === e.ymin &&
    c.ymax === e.ymax
  )
    return;
  t = t ?? 0;
  const M = e.clone().normalize(),
    { spatialReference: R, transform: v } = m,
    z = new Set();
  for (let g = 0; g < M.length; g++) {
    const h = M[g];
    if (h.xmax - h.xmin <= t || h.ymax - h.ymin <= t) continue;
    let u = L(h, R, s);
    E(v) && (u = v.inverseTransform(u));
    const T = new J({ x: t, y: t, spatialReference: h.spatialReference });
    if (o == null && !(o = q(T, R, h, s))) return;
    const {
      pyramidLevel: p,
      pyramidResolution: _,
      excessiveReading: $,
    } = F(o, m, l || "closest");
    if ($) return;
    const { storageInfo: x } = m,
      { origin: b } = x,
      k = {
        x: Math.max(0, Math.floor((u.xmin - b.x) / _.x)),
        y: Math.max(0, Math.floor((b.y - u.ymax) / _.y)),
      },
      j = Math.ceil((u.xmax - u.xmin) / _.x - 0.1),
      D = Math.ceil((u.ymax - u.ymin) / _.y - 0.1),
      w = p > 0 ? x.pyramidBlockWidth : x.blockWidth,
      I = p > 0 ? x.pyramidBlockHeight : x.blockHeight,
      y = 1,
      S = Math.max(0, Math.floor(k.x / w) - y),
      A = Math.max(0, Math.floor(k.y / I) - y),
      H = Math.floor((k.x + j - 1) / w) + y,
      W = Math.floor((k.y + D - 1) / I) + y;
    for (let B = A; B <= W; B++)
      for (let C = S; C <= H; C++) z.add(`${p}/${B}/${C}`);
  }
  a.forEach((g, h) => {
    if (!z.has(h)) {
      const u = a.get(h);
      (u == null || u.isResolved || u.isRejected) && a.delete(h);
    }
  }),
    (i.extent = { xmin: e.xmin, ymin: e.ymin, xmax: e.xmax, ymax: e.ymax });
}
export { O as a, Y as d, Q as f, Z as g, X as h, U as m, P as u, V as x };
