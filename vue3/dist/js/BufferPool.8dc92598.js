import { t as h, w as c, r as y, bS as x } from "./index.8fd7165c.js";
let i = class l {
  constructor(t) {
    if (((this.next = null), !Array.isArray(t))) return void (this.data = t);
    this.data = t[0];
    let e = this;
    for (let a = 1; a < t.length; a++) (e.next = new l([t[a]])), (e = e.next);
  }
  *values() {
    let t = this;
    for (; t; ) yield t.data, (t = t.next);
  }
  forEach(t) {
    let e = this;
    for (; e; ) t(e.data), (e = e.next);
  }
  find(t) {
    var e;
    return t(this.data) ? this : (e = this.next) == null ? void 0 : e.find(t);
  }
  max(t, e = this) {
    const a = t(this.data) > t(e.data) ? this : e;
    return this.next ? this.next.max(t, a) : a;
  }
  remove(t, e = null) {
    var a;
    return this === t
      ? e
        ? ((e.next = this.next), e)
        : this.next
      : ((a = this.next) == null ? void 0 : a.remove(t, this)) ?? null;
  }
  get last() {
    return this.next ? this.next.last : this;
  }
};
class g {
  constructor(t) {
    (this._head = null), h(t) || (this._head = new i(t));
  }
  get head() {
    return this._head;
  }
  maxAvailableSpace() {
    if (h(this._head)) return 0;
    const t = this._head.max((e) => e.end - e.start);
    return t.data.end - t.data.start;
  }
  firstFit(t) {
    if (h(this._head)) return null;
    let e = null,
      a = this._head;
    for (; a; ) {
      const r = a.data.end - a.data.start;
      if (r === t)
        return e ? (e.next = a.next) : (this._head = a.next), a.data.start;
      if (r > t) {
        const s = a.data.start;
        return (a.data.start += t), s;
      }
      (e = a), (a = a.next);
    }
    return null;
  }
  free(t, e) {
    const a = t + e;
    if (h(this._head)) {
      const n = new i({ start: t, end: a });
      return void (this._head = n);
    }
    if (a <= this._head.data.start) {
      if (a === this._head.data.start) return void (this._head.data.start -= e);
      const n = new i({ start: t, end: a });
      return (n.next = this._head), void (this._head = n);
    }
    let r = this._head,
      s = r.next;
    for (; s; ) {
      if (s.data.start >= a) {
        if (r.data.end === t) {
          if (((r.data.end += e), r.data.end === s.data.start)) {
            const f = s.data.end - s.data.start;
            return (r.data.end += f), void (r.next = s.next);
          }
          return;
        }
        if (s.data.start === a) return void (s.data.start -= e);
        const n = new i({ start: t, end: a });
        return (n.next = r.next), void (r.next = n);
      }
      (r = s), (s = s.next);
    }
    if (t === r.data.end) return void (r.data.end += e);
    const _ = new i({ start: t, end: a });
    r.next = _;
  }
}
c("esri-2d-log-allocations");
class o {
  constructor(t, e) {
    (this._array = t), (this._pool = e);
  }
  get array() {
    return this._array;
  }
  get length() {
    return this._array.length;
  }
  static create(t, e) {
    const a = e.acquire(t);
    return new o(a, e);
  }
  expand(t) {
    const e = this._pool.acquire(t);
    e.set(this._array), this._pool.release(this._array), (this._array = e);
  }
  destroy() {
    this._pool.release(this._array);
  }
  set(t, e) {
    this._array.set(t._array, e);
  }
  slice() {
    const t = this._pool.acquire(this._array.byteLength);
    return t.set(this._array), new o(t, this._pool);
  }
}
class d {
  constructor() {
    (this._data = new ArrayBuffer(d.BYTE_LENGTH)),
      (this._freeList = new g({ start: 0, end: this._data.byteLength }));
  }
  static get BYTE_LENGTH() {
    return 64e6;
  }
  get buffer() {
    return this._data;
  }
  allocate(t) {
    const e = this._freeList.firstFit(t);
    return h(e)
      ? null
      : new Uint32Array(this._data, e, t / Uint32Array.BYTES_PER_ELEMENT);
  }
  free(t) {
    this._freeList.free(t.byteOffset, t.byteLength);
  }
}
class E {
  constructor() {
    (this._bytesAllocated = 0),
      (this._pages = []),
      (this._pagesByBuffer = new Map()),
      this._addPage();
  }
  destroy() {
    (this._pages = []), (this._pagesByBuffer = null);
  }
  get _bytesTotal() {
    return this._pages.length * d.BYTE_LENGTH;
  }
  acquire(t) {
    if (((this._bytesAllocated += t), t > d.BYTE_LENGTH))
      return new Uint32Array(t / Uint32Array.BYTES_PER_ELEMENT);
    for (const e of this._pages) {
      const a = e.allocate(t);
      if (y(a)) return a;
    }
    return x(this._addPage().allocate(t), "Expected to allocate page");
  }
  release(t) {
    this._bytesAllocated -= t.byteLength;
    const e = this._pagesByBuffer.get(t.buffer);
    e && e.free(t);
  }
  _addPage() {
    const t = new d();
    return this._pages.push(t), this._pagesByBuffer.set(t.buffer, t), t;
  }
}
export { i as a, g as e, o as i, E as n };
