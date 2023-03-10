class u {
  constructor() {
    this._outer = new Map();
  }
  clear() {
    this._outer.clear();
  }
  get empty() {
    return this._outer.size === 0;
  }
  get(e, r) {
    var t;
    return (t = this._outer.get(e)) == null ? void 0 : t.get(r);
  }
  set(e, r, t) {
    const s = this._outer.get(e);
    s ? s.set(r, t) : this._outer.set(e, new Map([[r, t]]));
  }
  delete(e, r) {
    const t = this._outer.get(e);
    t && (t.delete(r), t.size === 0 && this._outer.delete(e));
  }
  forEach(e) {
    this._outer.forEach((r, t) => e(r, t));
  }
}
export { u as t };
