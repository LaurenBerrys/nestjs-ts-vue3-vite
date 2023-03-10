import {
  c9 as Re,
  eC as z,
  r as X,
  b8 as w,
  fp as B,
  gV as $,
  fi as ee,
  gW as Ee,
  b as N,
  aM as m,
  gX as te,
  fh as J,
  ae as Ae,
  ag as Ne,
  f as Fe,
  t as ie,
  W as Me,
  fD as C,
} from "./index.8fd7165c.js";
import { i as ne, v as Se, b as xe, j as Be } from "./Util.68fdcaea.js";
import {
  s as oe,
  d as se,
  _ as y,
  p as re,
  T as V,
  k as F,
  V as ae,
  R as x,
  N as he,
} from "./sphere.a87dd95a.js";
import { D as de } from "./QueryEngineResult.c4edbbc1.js";
import "./plane.6e2f7ea9.js";
import { m as je } from "./edgeProcessing.e481528d.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./mat3f64.eb921732.js";
import "./mat4f64.b473928c.js";
import "./quatf64.75f9f553.js";
import "./quantizationUtils.1e9e702d.js";
import "./WhereClause.ae196341.js";
import "./executionError.fb3f283a.js";
import "./utils.7e94e38c.js";
import "./generateRendererUtils.855c90be.js";
import "./projectionSupport.4aeb802f.js";
import "./json.495fc412.js";
import "./utils.e3aed7db.js";
import "./deduplicate.744c1fe7.js";
import "./Indices.7165e4ff.js";
import "./InterleavedLayout.c89035f2.js";
import "./BufferView.b3039ce1.js";
import "./types.e1c0a5bf.js";
import "./VertexAttribute.15d1866a.js";
import "./enums.64ab819c.js";
import "./VertexElementDescriptor.2925c6af.js";
function ce(n) {
  return n
    ? { ray: se(n.ray), c0: n.c0, c1: n.c1 }
    : { ray: se(), c0: 0, c1: Number.MAX_VALUE };
}
function v(n, e) {
  for (let t = 0; t < Q.NUM; t++) {
    const i = n[t];
    if (i[0] * e[0] + i[1] * e[1] + i[2] * e[2] + i[3] >= e[3]) return !1;
  }
  return !0;
}
var le, u, Q, ue;
new oe(() => ce()),
  (function (n) {
    (n[(n.LEFT = 0)] = "LEFT"),
      (n[(n.RIGHT = 1)] = "RIGHT"),
      (n[(n.BOTTOM = 2)] = "BOTTOM"),
      (n[(n.TOP = 3)] = "TOP"),
      (n[(n.NEAR = 4)] = "NEAR"),
      (n[(n.FAR = 5)] = "FAR");
  })(le || (le = {})),
  (function (n) {
    (n[(n.NEAR_BOTTOM_LEFT = 0)] = "NEAR_BOTTOM_LEFT"),
      (n[(n.NEAR_BOTTOM_RIGHT = 1)] = "NEAR_BOTTOM_RIGHT"),
      (n[(n.NEAR_TOP_RIGHT = 2)] = "NEAR_TOP_RIGHT"),
      (n[(n.NEAR_TOP_LEFT = 3)] = "NEAR_TOP_LEFT"),
      (n[(n.FAR_BOTTOM_LEFT = 4)] = "FAR_BOTTOM_LEFT"),
      (n[(n.FAR_BOTTOM_RIGHT = 5)] = "FAR_BOTTOM_RIGHT"),
      (n[(n.FAR_TOP_RIGHT = 6)] = "FAR_TOP_RIGHT"),
      (n[(n.FAR_TOP_LEFT = 7)] = "FAR_TOP_LEFT");
  })(u || (u = {})),
  u.FAR_BOTTOM_RIGHT,
  u.NEAR_BOTTOM_RIGHT,
  u.NEAR_BOTTOM_LEFT,
  u.FAR_BOTTOM_LEFT,
  u.NEAR_BOTTOM_LEFT,
  u.NEAR_BOTTOM_RIGHT,
  u.NEAR_TOP_RIGHT,
  u.NEAR_TOP_LEFT,
  u.FAR_BOTTOM_RIGHT,
  u.FAR_BOTTOM_LEFT,
  u.FAR_TOP_LEFT,
  u.FAR_TOP_RIGHT,
  u.NEAR_BOTTOM_RIGHT,
  u.FAR_BOTTOM_RIGHT,
  u.FAR_TOP_RIGHT,
  u.NEAR_TOP_RIGHT,
  u.FAR_BOTTOM_LEFT,
  u.NEAR_BOTTOM_LEFT,
  u.NEAR_TOP_LEFT,
  u.FAR_TOP_LEFT,
  u.FAR_TOP_LEFT,
  u.NEAR_TOP_LEFT,
  u.NEAR_TOP_RIGHT,
  u.FAR_TOP_RIGHT,
  (function (n) {
    n[(n.NUM = 6)] = "NUM";
  })(Q || (Q = {})),
  (function (n) {
    n[(n.NUM = 8)] = "NUM";
  })(ue || (ue = {})),
  new oe(ce);
class j {
  get bounds() {
    return this._root.bounds;
  }
  get halfSize() {
    return this._root.halfSize;
  }
  get root() {
    return this._root.node;
  }
  get maximumObjectsPerNode() {
    return this._maximumObjectsPerNode;
  }
  get maximumDepth() {
    return this._maximumDepth;
  }
  get objectCount() {
    return this._objectCount;
  }
  constructor(e, t) {
    (this._objectToBoundingSphere = e),
      (this._maximumObjectsPerNode = 10),
      (this._maximumDepth = 20),
      (this._degenerateObjects = new Set()),
      (this._root = new _()),
      (this._objectCount = 0),
      t &&
        (t.maximumObjectsPerNode !== void 0 &&
          (this._maximumObjectsPerNode = t.maximumObjectsPerNode),
        t.maximumDepth !== void 0 && (this._maximumDepth = t.maximumDepth));
  }
  destroy() {
    this._degenerateObjects.clear(),
      _.clearPool(),
      (q[0] = null),
      M.prune(),
      S.prune();
  }
  add(e, t = e.length) {
    (this._objectCount += t), this._grow(e, t);
    const i = _.acquire();
    for (let o = 0; o < t; o++) {
      const s = e[o];
      this._isDegenerate(s)
        ? this._degenerateObjects.add(s)
        : (i.init(this._root), this._add(s, i));
    }
    _.release(i);
  }
  remove(e, t = null) {
    this._objectCount -= e.length;
    const i = _.acquire();
    for (const o of e) {
      const s = X(t) ? t : y(this._objectToBoundingSphere(o), Pe);
      P(s[3])
        ? (i.init(this._root), this._remove(o, s, i))
        : this._degenerateObjects.delete(o);
    }
    _.release(i), this._shrink();
  }
  update(e, t) {
    if (!P(t[3]) && this._isDegenerate(e)) return;
    const i = (function (o) {
      return (q[0] = o), q;
    })(e);
    this.remove(i, t), this.add(i);
  }
  forEachAlongRay(e, t, i) {
    const o = re(e, t);
    this._forEachNode(this._root, (s) => {
      if (!this._intersectsNode(o, s)) return !1;
      const a = s.node;
      return (
        a.terminals.forAll((h) => {
          this._intersectsObject(o, h) && i(h);
        }),
        a.residents !== null &&
          a.residents.forAll((h) => {
            this._intersectsObject(o, h) && i(h);
          }),
        !0
      );
    });
  }
  forEachAlongRayWithVerticalOffset(e, t, i, o) {
    const s = re(e, t);
    this._forEachNode(this._root, (a) => {
      if (!this._intersectsNodeWithOffset(s, a, o)) return !1;
      const h = a.node;
      return (
        h.terminals.forAll((r) => {
          this._intersectsObjectWithOffset(s, r, o) && i(r);
        }),
        h.residents !== null &&
          h.residents.forAll((r) => {
            this._intersectsObjectWithOffset(s, r, o) && i(r);
          }),
        !0
      );
    });
  }
  forEach(e) {
    this._forEachNode(this._root, (t) => {
      const i = t.node;
      return (
        i.terminals.forAll(e), i.residents !== null && i.residents.forAll(e), !0
      );
    }),
      this._degenerateObjects.forEach(e);
  }
  forEachDegenerateObject(e) {
    this._degenerateObjects.forEach(e);
  }
  findClosest(e, t, i, o = () => !0, s = 1 / 0) {
    let a = 1 / 0,
      h = 1 / 0,
      r = null;
    const l = k(e, t),
      d = (c) => {
        if ((--s, !o(c))) return;
        const p = this._objectToBoundingSphere(c);
        if (!v(i, p)) return;
        const b = A(e, t, F(p)),
          I = b - p[3],
          f = b + p[3];
        I < a && ((a = I), (h = f), (r = c));
      };
    return (
      this._forEachNodeDepthOrdered(
        this._root,
        (c) => {
          if (
            s <= 0 ||
            !v(i, c.bounds) ||
            (w(g, l, c.halfSize), B(g, g, c.bounds), A(e, t, g) > h)
          )
            return !1;
          const p = c.node;
          return (
            p.terminals.forAll((b) => d(b)),
            p.residents !== null && p.residents.forAll((b) => d(b)),
            !0
          );
        },
        e,
        t
      ),
      r
    );
  }
  forEachInDepthRange(e, t, i, o, s, a, h) {
    let r = -1 / 0,
      l = 1 / 0;
    const d = {
      setRange: (f) => {
        i === j.DepthOrder.FRONT_TO_BACK
          ? ((r = Math.max(r, f.near)), (l = Math.min(l, f.far)))
          : ((r = Math.max(r, -f.far)), (l = Math.min(l, -f.near)));
      },
    };
    d.setRange(o);
    const c = A(t, i, e),
      p = k(t, i),
      b = k(t, -i),
      I = (f) => {
        if (!h(f)) return;
        const E = this._objectToBoundingSphere(f),
          L = F(E),
          Z = A(t, i, L) - c,
          ge = Z - E[3],
          be = Z + E[3];
        ge > l || be < r || !v(a, E) || s(f, d);
      };
    this._forEachNodeDepthOrdered(
      this._root,
      (f) => {
        if (
          !v(a, f.bounds) ||
          (w(g, p, f.halfSize), B(g, g, f.bounds), A(t, i, g) - c > l) ||
          (w(g, b, f.halfSize), B(g, g, f.bounds), A(t, i, g) - c < r)
        )
          return !1;
        const E = f.node;
        return (
          E.terminals.forAll((L) => I(L)),
          E.residents !== null && E.residents.forAll((L) => I(L)),
          !0
        );
      },
      t,
      i
    );
  }
  forEachNode(e) {
    this._forEachNode(this._root, (t) => e(t.node, t.bounds, t.halfSize));
  }
  forEachNeighbor(e, t) {
    const i = V(t),
      o = F(t),
      s = (r) => {
        const l = this._objectToBoundingSphere(r),
          d = V(l),
          c = i + d;
        return !($(F(l), o) - c * c <= 0) || e(r);
      };
    let a = !0;
    const h = (r) => {
      a && (a = s(r));
    };
    this._forEachNode(this._root, (r) => {
      const l = V(r.bounds),
        d = i + l;
      if ($(F(r.bounds), o) - d * d > 0) return !1;
      const c = r.node;
      return (
        c.terminals.forAll(h),
        a && c.residents !== null && c.residents.forAll(h),
        a
      );
    }),
      a && this.forEachDegenerateObject(h);
  }
  _intersectsNode(e, t) {
    return (
      D(t.bounds, 2 * -t.halfSize, T),
      D(t.bounds, 2 * t.halfSize, O),
      ne(e.origin, e.direction, T, O)
    );
  }
  _intersectsNodeWithOffset(e, t, i) {
    return (
      D(t.bounds, 2 * -t.halfSize, T),
      D(t.bounds, 2 * t.halfSize, O),
      i.applyToMinMax(T, O),
      ne(e.origin, e.direction, T, O)
    );
  }
  _intersectsObject(e, t) {
    const i = this._objectToBoundingSphere(t);
    return !(i[3] > 0) || ae(i, e);
  }
  _intersectsObjectWithOffset(e, t, i) {
    const o = this._objectToBoundingSphere(t);
    return !(o[3] > 0) || ae(i.applyToBoundingSphere(o), e);
  }
  _forEachNode(e, t) {
    let i = _.acquire().init(e);
    const o = [i];
    for (; o.length !== 0; ) {
      if (((i = o.pop()), t(i) && !i.isLeaf()))
        for (let s = 0; s < i.node.children.length; s++)
          i.node.children[s] && o.push(_.acquire().init(i).advance(s));
      _.release(i);
    }
  }
  _forEachNodeDepthOrdered(e, t, i, o = j.DepthOrder.FRONT_TO_BACK) {
    let s = _.acquire().init(e);
    const a = [s];
    for (
      (function (h, r, l) {
        if (!S.length)
          for (let d = 0; d < 8; ++d) S.push({ index: 0, distance: 0 });
        for (let d = 0; d < 8; ++d) {
          const c = Te[d];
          (S.data[d].index = d), (S.data[d].distance = A(h, r, c));
        }
        S.sort((d, c) => d.distance - c.distance);
        for (let d = 0; d < 8; ++d) l[d] = S.data[d].index;
      })(i, o, me);
      a.length !== 0;

    ) {
      if (((s = a.pop()), t(s) && !s.isLeaf()))
        for (let h = 7; h >= 0; --h) {
          const r = me[h];
          s.node.children[r] && a.push(_.acquire().init(s).advance(r));
        }
      _.release(s);
    }
  }
  _remove(e, t, i) {
    M.clear();
    const o = i.advanceTo(t, (s, a) => {
      M.push(s.node), M.push(a);
    })
      ? i.node.terminals
      : i.node.residents;
    if ((o.removeUnordered(e), o.length === 0))
      for (let s = M.length - 2; s >= 0; s -= 2) {
        const a = M.data[s],
          h = M.data[s + 1];
        if (!this._purge(a, h)) break;
      }
  }
  _nodeIsEmpty(e) {
    if (e.terminals.length !== 0) return !1;
    if (e.residents !== null) return e.residents.length === 0;
    for (let t = 0; t < e.children.length; t++) if (e.children[t]) return !1;
    return !0;
  }
  _purge(e, t) {
    return (
      t >= 0 && (e.children[t] = null),
      !!this._nodeIsEmpty(e) &&
        (e.residents === null && (e.residents = new z({ shrink: !0 })), !0)
    );
  }
  _add(e, t) {
    t.advanceTo(this._objectToBoundingSphere(e))
      ? t.node.terminals.push(e)
      : (t.node.residents.push(e),
        t.node.residents.length > this._maximumObjectsPerNode &&
          t.depth < this._maximumDepth &&
          this._split(t));
  }
  _split(e) {
    const t = e.node.residents;
    e.node.residents = null;
    for (let i = 0; i < t.length; i++) {
      const o = _.acquire().init(e);
      this._add(t.getItemAt(i), o), _.release(o);
    }
  }
  _grow(e, t) {
    if (
      t !== 0 &&
      (_e(e, t, (i) => this._objectToBoundingSphere(i), R),
      P(R[3]) && !this._fitsInsideTree(R))
    )
      if (this._nodeIsEmpty(this._root.node))
        y(R, this._root.bounds),
          (this._root.halfSize = 1.25 * this._root.bounds[3]),
          this._root.updateBoundsRadiusFromHalfSize();
      else {
        const i = this._rootBoundsForRootAsSubNode(R);
        this._placingRootViolatesMaxDepth(i)
          ? this._rebuildTree(R, i)
          : this._growRootAsSubNode(i),
          _.release(i);
      }
  }
  _rebuildTree(e, t) {
    ee(U, t.bounds), (U[3] = t.halfSize), _e([e, U], 2, (o) => o, K);
    const i = _.acquire().init(this._root);
    this._root.initFrom(null, K, K[3]),
      this._root.increaseHalfSize(1.25),
      this._forEachNode(
        i,
        (o) => (
          this.add(o.node.terminals.data, o.node.terminals.length),
          o.node.residents !== null &&
            this.add(o.node.residents.data, o.node.residents.length),
          !0
        )
      ),
      _.release(i);
  }
  _placingRootViolatesMaxDepth(e) {
    const t = Math.log(e.halfSize / this._root.halfSize) * Math.LOG2E;
    let i = 0;
    return (
      this._forEachNode(
        this._root,
        (o) => ((i = Math.max(i, o.depth)), i + t <= this._maximumDepth)
      ),
      i + t > this._maximumDepth
    );
  }
  _rootBoundsForRootAsSubNode(e) {
    const t = e[3],
      i = e;
    let o = -1 / 0;
    const s = this._root.bounds,
      a = this._root.halfSize;
    for (let r = 0; r < 3; r++) {
      const l = s[r] - a - (i[r] - t),
        d = i[r] + t - (s[r] + a),
        c = Math.max(0, Math.ceil(l / (2 * a))),
        p = Math.max(0, Math.ceil(d / (2 * a))) + 1,
        b = 2 ** Math.ceil(Math.log(c + p) * Math.LOG2E);
      (o = Math.max(o, b)), (H[r].min = c), (H[r].max = p);
    }
    for (let r = 0; r < 3; r++) {
      let l = H[r].min,
        d = H[r].max;
      const c = (o - (l + d)) / 2;
      (l += Math.ceil(c)), (d += Math.floor(c));
      const p = s[r] - a - l * a * 2;
      W[r] = p + (d + l) * a;
    }
    const h = o * a;
    return (W[3] = h * Oe), _.acquire().initFrom(null, W, h, 0);
  }
  _growRootAsSubNode(e) {
    const t = this._root.node;
    ee(R, this._root.bounds),
      (R[3] = this._root.halfSize),
      this._root.init(e),
      e.advanceTo(R, null, !0),
      (e.node.children = t.children),
      (e.node.residents = t.residents),
      (e.node.terminals = t.terminals);
  }
  _shrink() {
    for (;;) {
      const e = this._findShrinkIndex();
      if (e === -1) break;
      this._root.advance(e), (this._root.depth = 0);
    }
  }
  _findShrinkIndex() {
    if (this._root.node.terminals.length !== 0 || this._root.isLeaf())
      return -1;
    let e = null;
    const t = this._root.node.children;
    let i = 0,
      o = 0;
    for (; o < t.length && e == null; ) (i = o++), (e = t[i]);
    for (; o < t.length; ) if (t[o++]) return -1;
    return i;
  }
  _isDegenerate(e) {
    return !P(this._objectToBoundingSphere(e)[3]);
  }
  _fitsInsideTree(e) {
    const t = this._root.bounds,
      i = this._root.halfSize;
    return (
      e[3] <= i &&
      e[0] >= t[0] - i &&
      e[0] <= t[0] + i &&
      e[1] >= t[1] - i &&
      e[1] <= t[1] + i &&
      e[2] >= t[2] - i &&
      e[2] <= t[2] + i
    );
  }
}
class _ {
  constructor() {
    (this.bounds = x()), (this.halfSize = 0), this.initFrom(null, null, 0, 0);
  }
  init(e) {
    return this.initFrom(e.node, e.bounds, e.halfSize, e.depth);
  }
  initFrom(e, t, i, o = this.depth) {
    return (
      (this.node = X(e) ? e : _.createEmptyNode()),
      X(t) && y(t, this.bounds),
      (this.halfSize = i),
      (this.depth = o),
      this
    );
  }
  increaseHalfSize(e) {
    (this.halfSize *= e), this.updateBoundsRadiusFromHalfSize();
  }
  updateBoundsRadiusFromHalfSize() {
    this.bounds[3] = this.halfSize * Oe;
  }
  advance(e) {
    let t = this.node.children[e];
    t || ((t = _.createEmptyNode()), (this.node.children[e] = t)),
      (this.node = t),
      (this.halfSize /= 2),
      this.depth++;
    const i = Te[e];
    return (
      (this.bounds[0] += i[0] * this.halfSize),
      (this.bounds[1] += i[1] * this.halfSize),
      (this.bounds[2] += i[2] * this.halfSize),
      this.updateBoundsRadiusFromHalfSize(),
      this
    );
  }
  advanceTo(e, t, i = !1) {
    for (;;) {
      if (this.isTerminalFor(e)) return t && t(this, -1), !0;
      if (this.isLeaf()) {
        if (!i) return t && t(this, -1), !1;
        this.node.residents = null;
      }
      const o = this._childIndex(e);
      t && t(this, o), this.advance(o);
    }
  }
  isLeaf() {
    return this.node.residents != null;
  }
  isTerminalFor(e) {
    return e[3] > this.halfSize / 2;
  }
  _childIndex(e) {
    const t = this.bounds;
    return (
      (t[0] < e[0] ? 1 : 0) + (t[1] < e[1] ? 2 : 0) + (t[2] < e[2] ? 4 : 0)
    );
  }
  static createEmptyNode() {
    return {
      children: [null, null, null, null, null, null, null, null],
      terminals: new z({ shrink: !0 }),
      residents: new z({ shrink: !0 }),
    };
  }
  static acquire() {
    return _._pool.acquire();
  }
  static release(e) {
    _._pool.release(e);
  }
  static clearPool() {
    _._pool.prune();
  }
}
function Ie(n, e) {
  (n[0] = Math.min(n[0], e[0] - e[3])),
    (n[1] = Math.min(n[1], e[1] - e[3])),
    (n[2] = Math.min(n[2], e[2] - e[3]));
}
function Le(n, e) {
  (n[0] = Math.max(n[0], e[0] + e[3])),
    (n[1] = Math.max(n[1], e[1] + e[3])),
    (n[2] = Math.max(n[2], e[2] + e[3]));
}
function D(n, e, t) {
  (t[0] = n[0] + e), (t[1] = n[1] + e), (t[2] = n[2] + e);
}
function _e(n, e, t, i) {
  if (e === 1) {
    const o = t(n[0]);
    y(o, i);
  } else {
    (T[0] = 1 / 0),
      (T[1] = 1 / 0),
      (T[2] = 1 / 0),
      (O[0] = -1 / 0),
      (O[1] = -1 / 0),
      (O[2] = -1 / 0);
    for (let o = 0; o < e; o++) {
      const s = t(n[o]);
      P(s[3]) && (Ie(T, s), Le(O, s));
    }
    Ee(i, T, O, 0.5),
      (i[3] = Math.max(O[0] - T[0], O[1] - T[1], O[2] - T[2]) / 2);
  }
}
function k(n, e) {
  let t,
    i = 1 / 0;
  for (let o = 0; o < 8; ++o) {
    const s = A(n, e, fe[o]);
    s < i && ((i = s), (t = fe[o]));
  }
  return t;
}
function A(n, e, t) {
  return e * (n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function P(n) {
  return !isNaN(n) && n !== -1 / 0 && n !== 1 / 0 && n > 0;
}
(_._pool = new Re(_)),
  (function (n) {
    var e;
    ((e = n.DepthOrder || (n.DepthOrder = {}))[(e.FRONT_TO_BACK = 1)] =
      "FRONT_TO_BACK"),
      (e[(e.BACK_TO_FRONT = -1)] = "BACK_TO_FRONT");
  })(j || (j = {}));
const Te = [
    m(-1, -1, -1),
    m(1, -1, -1),
    m(-1, 1, -1),
    m(1, 1, -1),
    m(-1, -1, 1),
    m(1, -1, 1),
    m(-1, 1, 1),
    m(1, 1, 1),
  ],
  fe = [
    m(-1, -1, -1),
    m(-1, -1, 1),
    m(-1, 1, -1),
    m(-1, 1, 1),
    m(1, -1, -1),
    m(1, -1, 1),
    m(1, 1, -1),
    m(1, 1, 1),
  ],
  Oe = Math.sqrt(3),
  q = [null],
  W = x(),
  g = N(),
  T = N(),
  O = N(),
  M = new z(),
  Pe = x(),
  R = x(),
  U = x(),
  K = x(),
  H = [
    { min: 0, max: 0 },
    { min: 0, max: 0 },
    { min: 0, max: 0 },
  ],
  S = new z(),
  me = [0, 0, 0, 0, 0, 0, 0, 0],
  pe = j;
function ze(n, e, t) {
  const i = x(),
    o = F(i);
  return te(o, o, n, 0.5), te(o, o, e, 0.5), (i[3] = J(o, n)), B(o, o, t), i;
}
let Y = class {
  constructor() {
    (this._idToComponent = new Map()),
      (this._components = new pe((n) => n.bounds)),
      (this._edges = new pe((n) => n.bounds)),
      (this._tmpLineSegment = Se()),
      (this._tmpP1 = N()),
      (this._tmpP2 = N()),
      (this._tmpP3 = N()),
      (this.remoteClient = null);
  }
  async fetchCandidates(n, e) {
    await Promise.resolve(), Fe(e), await this._ensureEdgeLocations(n, e);
    const t = [];
    return (
      this._edges.forEachNeighbor(
        (i) => (this._addCandidates(n, i, t), t.length < 1e3),
        n.bounds
      ),
      { result: { candidates: t } }
    );
  }
  async _ensureEdgeLocations(n, e) {
    const t = [];
    if (
      (this._components.forEachNeighbor((s) => {
        if (ie(s.info)) {
          const { id: a, uid: h } = s;
          t.push({ id: a, uid: h });
        }
        return !0;
      }, n.bounds),
      !t.length)
    )
      return;
    const i = { components: t },
      o = await this.remoteClient.invoke("fetchAllEdgeLocations", i, Me(e, {}));
    for (const s of o.components) this._setFetchEdgeLocations(s);
  }
  async add(n) {
    const e = new G(n.id, n.bounds);
    return (
      this._idToComponent.set(e.id, e),
      this._components.add([e]),
      { result: {} }
    );
  }
  async remove(n) {
    const e = this._idToComponent.get(n.id);
    if (e) {
      const t = [];
      this._edges.forEachNeighbor(
        (i) => (i.component === e && t.push(i), !0),
        e.bounds
      ),
        this._edges.remove(t),
        this._components.remove([e]),
        this._idToComponent.delete(e.id);
    }
    return { result: {} };
  }
  _setFetchEdgeLocations(n) {
    const e = this._idToComponent.get(n.id);
    if (ie(e) || n.uid !== e.uid) return;
    const t = je.createView(n.locations),
      i = new Array(t.count),
      o = N(),
      s = N();
    for (let r = 0; r < t.count; r++) {
      t.position0.getVec(r, o), t.position1.getVec(r, s);
      const l = ze(o, s, n.origin),
        d = new Ce(e, r, l);
      i[r] = d;
    }
    this._edges.add(i);
    const { objectIds: a, origin: h } = n;
    e.info = { locations: t, objectIds: a, origin: h };
  }
  _addCandidates(n, e, t) {
    const { info: i } = e.component,
      { origin: o, objectIds: s } = i,
      a = i.locations,
      h = a.position0.getVec(e.index, this._tmpP1),
      r = a.position1.getVec(e.index, this._tmpP2);
    B(h, h, o), B(r, r, o);
    const l = s[a.componentIndex.get(e.index)];
    this._addEdgeCandidate(n, l, h, r, t),
      this._addVertexCandidate(n, l, h, t),
      this._addVertexCandidate(n, l, r, t);
  }
  _addEdgeCandidate(n, e, t, i, o) {
    if (!(n.types & de.EDGE)) return;
    const s = F(n.bounds),
      a = xe(t, i, this._tmpLineSegment),
      h = Be(a, s, this._tmpP3);
    he(n.bounds, h) &&
      o.push({
        type: "edge",
        objectId: e,
        target: C(h),
        distance: J(s, h),
        start: C(t),
        end: C(i),
      });
  }
  _addVertexCandidate(n, e, t, i) {
    if (!(n.types & de.VERTEX)) return;
    const o = F(n.bounds);
    he(n.bounds, t) &&
      i.push({ type: "vertex", objectId: e, target: C(t), distance: J(o, t) });
  }
};
Y = Ae(
  [
    Ne(
      "esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker"
    ),
  ],
  Y
);
const ft = Y;
class G {
  constructor(e, t) {
    (this.id = e), (this.bounds = t), (this.info = null), (this.uid = ++G.uid);
  }
}
G.uid = 0;
class Ce {
  constructor(e, t, i) {
    (this.component = e), (this.index = t), (this.bounds = i);
  }
}
export { ft as default };
