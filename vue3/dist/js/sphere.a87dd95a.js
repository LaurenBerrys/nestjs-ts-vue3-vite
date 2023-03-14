import {
  gZ as X,
  eA as D,
  g_ as I,
  g$ as K,
  h0 as N,
  fD as z,
  b as d,
  fj as k,
  fn as l,
  fp as w,
  b8 as M,
  b7 as h,
  fk as q,
  h1 as $,
  fT as F,
  h2 as R,
  fi as G,
  Q as H,
  t as J,
  fh as U,
  fm as x,
  h3 as W,
  fw as tt,
  gY as et,
  fo as st,
  h4 as T,
  c as C,
  gV as it,
} from "./index.8fd7165c.js";
import { n as nt } from "./mat3f64.eb921732.js";
import { n as rt } from "./mat4f64.b473928c.js";
import { n as ot } from "./quatf64.75f9f553.js";
class ct {
  constructor(e) {
    (this._allocator = e),
      (this._items = []),
      (this._itemsPtr = 0),
      this._grow();
  }
  get() {
    return (
      this._itemsPtr === 0 && X(() => this._reset()),
      this._itemsPtr === this._items.length && this._grow(),
      this._items[this._itemsPtr++]
    );
  }
  _reset() {
    const e = Math.min(3 * Math.max(8, this._itemsPtr), this._itemsPtr + 3 * Y);
    (this._items.length = Math.min(e, this._items.length)),
      (this._itemsPtr = 0);
  }
  _grow() {
    for (let e = 0; e < Math.max(8, Math.min(this._items.length, Y)); e++)
      this._items.push(this._allocator());
  }
}
const Y = 1024;
let p = class f {
  constructor(e, s, i) {
    (this._itemByteSize = e),
      (this._itemCreate = s),
      (this._buffers = []),
      (this._items = []),
      (this._itemsPtr = 0),
      (this._itemsPerBuffer = Math.ceil(i / this._itemByteSize));
  }
  get() {
    this._itemsPtr === 0 && X(() => this._reset());
    const e = Math.floor(this._itemsPtr / this._itemsPerBuffer);
    for (; this._buffers.length <= e; ) {
      const s = new ArrayBuffer(this._itemsPerBuffer * this._itemByteSize);
      for (let i = 0; i < this._itemsPerBuffer; ++i)
        this._items.push(this._itemCreate(s, i * this._itemByteSize));
      this._buffers.push(s);
    }
    return this._items[this._itemsPtr++];
  }
  _reset() {
    const e = 2 * (Math.floor(this._itemsPtr / this._itemsPerBuffer) + 1);
    for (; this._buffers.length > e; )
      this._buffers.pop(),
        (this._items.length = this._buffers.length * this._itemsPerBuffer);
    this._itemsPtr = 0;
  }
  static createVec2f64(e = _) {
    return new f(16, I, e);
  }
  static createVec3f64(e = _) {
    return new f(24, K, e);
  }
  static createVec4f64(e = _) {
    return new f(32, N, e);
  }
  static createMat3f64(e = _) {
    return new f(72, nt, e);
  }
  static createMat4f64(e = _) {
    return new f(128, rt, e);
  }
  static createQuatf64(e = _) {
    return new f(32, ot, e);
  }
  get test() {
    return {
      size: this._buffers.length * this._itemsPerBuffer * this._itemByteSize,
    };
  }
};
const _ = 4 * D.KILOBYTES;
p.createVec2f64();
const m = p.createVec3f64();
p.createVec4f64(), p.createMat3f64();
const at = p.createMat4f64();
var g;
function ut(t) {
  return t ? Z(z(t.origin), z(t.direction)) : Z(d(), d());
}
function Z(t, e) {
  return { origin: t, direction: e };
}
function wt(t, e) {
  const s = ft.get();
  return (s.origin = t), (s.direction = e), s;
}
p.createQuatf64(),
  (function (t) {
    (t[(t.X = 0)] = "X"), (t[(t.Y = 1)] = "Y"), (t[(t.Z = 2)] = "Z");
  })(g || (g = {}));
const ft = new ct(() => ut());
function V() {
  return $();
}
function j(t, e = V()) {
  return F(e, t);
}
function b(t) {
  return t[3];
}
function ht(t) {
  return t;
}
function y(t, e, s) {
  if (J(e)) return !1;
  const { origin: i, direction: n } = e,
    r = mt;
  (r[0] = i[0] - t[0]), (r[1] = i[1] - t[1]), (r[2] = i[2] - t[2]);
  const o = n[0] * n[0] + n[1] * n[1] + n[2] * n[2];
  if (o === 0) return !1;
  const c = 2 * (n[0] * r[0] + n[1] * r[1] + n[2] * r[2]),
    u = c * c - 4 * o * (r[0] * r[0] + r[1] * r[1] + r[2] * r[2] - t[3] * t[3]);
  if (u < 0) return !1;
  const P = Math.sqrt(u);
  let a = (-c - P) / (2 * o);
  const B = (-c + P) / (2 * o);
  return (
    (a < 0 || (B < a && B > 0)) && (a = B),
    !(a < 0) &&
      (s &&
        ((s[0] = i[0] + n[0] * a),
        (s[1] = i[1] + n[1] * a),
        (s[2] = i[2] + n[2] * a)),
      !0)
  );
}
const mt = d();
function _t(t, e) {
  return y(t, e, null);
}
function O(t, e, s) {
  const i = m.get(),
    n = at.get();
  x(i, e.origin, e.direction);
  const r = b(t);
  x(s, i, e.origin), M(s, s, (1 / h(s)) * r);
  const o = L(t, e.origin),
    c = (function (u, P) {
      const a = k(u, P) / (h(u) * h(P));
      return -q(a);
    })(e.origin, s);
  return W(n, c + o, i), tt(s, s, n), s;
}
function v(t, e, s) {
  const i = l(m.get(), e, t),
    n = M(m.get(), i, t[3] / h(i));
  return w(s, n, t);
}
function L(t, e) {
  const s = l(m.get(), e, t),
    i = h(s),
    n = b(t),
    r = n + Math.abs(n - i);
  return q(n / r);
}
const S = d();
function E(t, e, s, i) {
  const n = l(S, e, t);
  switch (s) {
    case g.X: {
      const r = T(n, S)[2];
      return C(i, -Math.sin(r), Math.cos(r), 0);
    }
    case g.Y: {
      const r = T(n, S),
        o = r[1],
        c = r[2],
        u = Math.sin(o);
      return C(i, -u * Math.cos(c), -u * Math.sin(c), Math.cos(o));
    }
    case g.Z:
      return st(i, n);
    default:
      return;
  }
}
function Q(t, e) {
  const s = l(A, e, t);
  return h(s) - t[3];
}
function gt(t, e) {
  const s = it(t, e),
    i = b(t);
  return s <= i * i;
}
const A = d(),
  lt = V();
Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      altitudeAt: Q,
      angleToSilhouette: L,
      axisAt: E,
      clear: function (t) {
        t[0] = t[1] = t[2] = t[3] = 0;
      },
      closestPoint: function (t, e, s) {
        return y(t, e, s)
          ? s
          : ((function (i, n, r) {
              const o = k(i.direction, l(r, n, i.origin));
              w(r, i.origin, M(r, i.direction, o));
            })(e, t, s),
            v(t, s, s));
      },
      closestPointOnSilhouette: O,
      containsPoint: gt,
      copy: j,
      create: V,
      distanceToSilhouette: function (t, e) {
        const s = l(m.get(), e, t),
          i = et(s),
          n = t[3] * t[3];
        return Math.sqrt(Math.abs(i - n));
      },
      elevate: function (t, e, s) {
        return t !== s && G(s, t), (s[3] = t[3] + e), s;
      },
      fromCenterAndRadius: function (t, e) {
        return R(t[0], t[1], t[2], e);
      },
      fromRadius: function (t, e) {
        return (t[0] = t[1] = t[2] = 0), (t[3] = e), t;
      },
      fromValues: function (t, e, s, i) {
        return R(t, e, s, i);
      },
      getCenter: ht,
      getRadius: b,
      intersectRay: y,
      intersectRayClosestSilhouette: function (t, e, s) {
        if (y(t, e, s)) return s;
        const i = O(t, e, m.get());
        return (
          w(
            s,
            e.origin,
            M(m.get(), e.direction, U(e.origin, i) / h(e.direction))
          ),
          s
        );
      },
      intersectsRay: _t,
      projectPoint: v,
      setAltitudeAt: function (t, e, s, i) {
        const n = Q(t, e),
          r = E(t, e, g.Z, A),
          o = M(A, r, s - n);
        return w(i, e, o);
      },
      setExtent: function (t, e, s) {
        return (
          H.getLogger("esri.geometry.support.sphere").error(
            "sphere.setExtent is not yet supported"
          ),
          t === s ? s : j(t, s)
        );
      },
      tmpSphere: lt,
      wrap: function (t) {
        return t;
      },
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export {
  gt as N,
  V as R,
  b as T,
  _t as V,
  j as _,
  m as c,
  ut as d,
  ht as k,
  wt as p,
  ct as s,
};
