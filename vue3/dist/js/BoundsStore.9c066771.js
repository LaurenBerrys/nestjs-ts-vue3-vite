import { w as o, eY as h } from "./index.8fd7165c.js";
import { h as a } from "./PooledRBush.1b7c69fc.js";
const n = { minX: 0, minY: 0, maxX: 0, maxY: 0 };
function _(t, s, i) {
  (function (d) {
    (n.minX = d[0]), (n.minY = d[1]), (n.maxX = d[2]), (n.maxY = d[3]);
  })(s),
    t.search(n, i);
}
class r {
  constructor() {
    (this._indexInvalid = !1),
      (this._boundsToLoad = []),
      (this._boundsById = new Map()),
      (this._idByBounds = new Map()),
      (this._index = new a(
        9,
        o("esri-csp-restrictions")
          ? (s) => ({ minX: s[0], minY: s[1], maxX: s[2], maxY: s[3] })
          : ["[0]", "[1]", "[2]", "[3]"]
      )),
      (this._loadIndex = () => {
        if (this._indexInvalid) {
          const s = new Array(this._idByBounds.size);
          let i = 0;
          this._idByBounds.forEach((d, e) => {
            s[i++] = e;
          }),
            (this._indexInvalid = !1),
            this._index.clear(),
            this._index.load(s);
        } else
          this._boundsToLoad.length &&
            (this._index.load(
              Array.from(
                new Set(
                  this._boundsToLoad.filter((s) => this._idByBounds.has(s))
                )
              )
            ),
            (this._boundsToLoad.length = 0));
      });
  }
  get fullBounds() {
    if (!this._boundsById.size) return null;
    const s = h();
    for (const i of this._boundsById.values())
      i &&
        ((s[0] = Math.min(i[0], s[0])),
        (s[1] = Math.min(i[1], s[1])),
        (s[2] = Math.max(i[2], s[2])),
        (s[3] = Math.max(i[3], s[3])));
    return s;
  }
  get valid() {
    return !this._indexInvalid;
  }
  clear() {
    (this._indexInvalid = !1),
      (this._boundsToLoad.length = 0),
      this._boundsById.clear(),
      this._idByBounds.clear(),
      this._index.clear();
  }
  delete(s) {
    const i = this._boundsById.get(s);
    this._boundsById.delete(s),
      i &&
        (this._idByBounds.delete(i),
        this._indexInvalid || this._index.remove(i));
  }
  forEachInBounds(s, i) {
    this._loadIndex(), _(this._index, s, (d) => i(this._idByBounds.get(d)));
  }
  get(s) {
    return this._boundsById.get(s);
  }
  has(s) {
    return this._boundsById.has(s);
  }
  invalidateIndex() {
    this._indexInvalid ||
      ((this._indexInvalid = !0), (this._boundsToLoad.length = 0));
  }
  set(s, i) {
    if (!this._indexInvalid) {
      const d = this._boundsById.get(s);
      d && (this._index.remove(d), this._idByBounds.delete(d));
    }
    this._boundsById.set(s, i),
      i &&
        (this._idByBounds.set(i, s),
        this._indexInvalid ||
          (this._boundsToLoad.push(i),
          this._boundsToLoad.length > 5e4 && this._loadIndex()));
  }
}
export { r as o };
