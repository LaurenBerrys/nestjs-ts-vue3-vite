import {
  fi as fr,
  ft as cr,
  aF as ur,
  ae as F,
  af as d,
  ag as pr,
  dd as yr,
  b as C,
  aM as gr,
  fu as mr,
  fv as Z,
  fw as k,
  fx as N,
  fy as hr,
  fz as I,
  fA as Ar,
  R as Tr,
  r as j,
  fB as Fr,
  fC as dr,
  fD as B,
  Q as Pr,
  fE as D,
  ec as K,
  eb as Q,
  fF as Er,
  fo as Mr,
  fG as Rr,
  fH as _r,
  fI as vr,
  t as h,
  fJ as b,
  fK as rr,
  fL as xr,
  $ as wr,
  fM as Cr,
  fN as Nr,
} from "./index.8fd7165c.js";
import { e as tr } from "./mat3f64.eb921732.js";
import { e as P, o as br } from "./mat4f64.b473928c.js";
import { c as _ } from "./spatialReferenceEllipsoidUtils.0049fd16.js";
import { v as S, y as Or, x as Lr } from "./quat.17ee06b3.js";
import { e as W } from "./quatf64.75f9f553.js";
import { T as p, i as u } from "./BufferView.b3039ce1.js";
import { t as M, e as zr, r as E, o as er } from "./vec33.5889ffa1.js";
function R(r = Br) {
  return [r[0], r[1], r[2], r[3]];
}
function ft(r, t, e = R()) {
  return fr(e, r), (e[3] = t), e;
}
function ct(r, t, e = R()) {
  return (
    S(v, r, Y(r)),
    S(U, t, Y(t)),
    Or(v, U, v),
    (function (n, o) {
      return (n[3] = o), n;
    })(e, cr(Lr(e, v)))
  );
}
function ut(r) {
  return r;
}
function Y(r) {
  return ur(r[3]);
}
const Br = [0, 0, 1, 0],
  v = W(),
  U = W();
var V;
R();
let m = (V = class extends yr {
  constructor(r) {
    super(r),
      (this.origin = C()),
      (this.translation = C()),
      (this.rotation = R()),
      (this.scale = gr(1, 1, 1)),
      (this.geographic = !0);
  }
  get localMatrix() {
    const r = P();
    return (
      S($, this.rotation, Y(this.rotation)),
      mr(r, $, this.translation, this.scale),
      r
    );
  }
  get localMatrixInverse() {
    return Z(P(), this.localMatrix);
  }
  applyLocal(r, t) {
    return k(t, r, this.localMatrix);
  }
  applyLocalInverse(r, t) {
    return k(t, r, this.localMatrixInverse);
  }
  project(r, t) {
    const e = new Float64Array(r.length),
      n = p.fromTypedArray(e),
      o = p.fromTypedArray(r);
    if (this.geographic) {
      const l = _(t),
        s = P();
      return (
        N(t, this.origin, s, l),
        hr(s, s, this.localMatrix),
        M(n, o, s),
        I(e, l, 0, e, t, 0, e.length / 3),
        e
      );
    }
    const { localMatrix: a, origin: i } = this;
    Ar(a, br) ? zr(n, o) : M(n, o, a);
    for (let l = 0; l < e.length; l += 3)
      (e[l + 0] += i[0]), (e[l + 1] += i[1]), (e[l + 2] += i[2]);
    return e;
  }
  getOriginPoint(r) {
    const [t, e, n] = this.origin;
    return new Tr({ x: t, y: e, z: n, spatialReference: r });
  }
  equals(r) {
    return (
      j(r) &&
      this.geographic === r.geographic &&
      Fr(this.origin, r.origin) &&
      dr(this.localMatrix, r.localMatrix)
    );
  }
  clone() {
    const r = {
      origin: B(this.origin),
      translation: B(this.translation),
      rotation: R(this.rotation),
      scale: B(this.scale),
      geographic: this.geographic,
    };
    return new V(r);
  }
});
F(
  [d({ type: [Number], nonNullable: !0, json: { write: !0 } })],
  m.prototype,
  "origin",
  void 0
),
  F(
    [d({ type: [Number], nonNullable: !0, json: { write: !0 } })],
    m.prototype,
    "translation",
    void 0
  ),
  F(
    [d({ type: [Number], nonNullable: !0, json: { write: !0 } })],
    m.prototype,
    "rotation",
    void 0
  ),
  F(
    [d({ type: [Number], nonNullable: !0, json: { write: !0 } })],
    m.prototype,
    "scale",
    void 0
  ),
  F(
    [d({ type: Boolean, nonNullable: !0, json: { write: !0 } })],
    m.prototype,
    "geographic",
    void 0
  ),
  F([d()], m.prototype, "localMatrix", null),
  F([d()], m.prototype, "localMatrixInverse", null),
  (m = V = F([pr("esri.geometry.support.MeshTransform")], m));
const $ = W(),
  jr = m;
function q(r, t) {
  return (
    r.isGeographic ||
    (r.isWebMercator && ((t == null ? void 0 : t.geographic) ?? !0))
  );
}
const O = Pr.getLogger("esri.geometry.support.meshUtils.normalProjection");
function Sr(r, t, e, n, o) {
  return z(n)
    ? (L(
        A.TO_PCPF,
        u.fromTypedArray(r),
        p.fromTypedArray(t),
        p.fromTypedArray(e),
        n,
        u.fromTypedArray(o)
      ),
      o)
    : (O.error("Cannot convert spatial reference to PCPF"), o);
}
function Yr(r, t, e, n, o) {
  return z(n)
    ? (L(
        A.FROM_PCPF,
        u.fromTypedArray(r),
        p.fromTypedArray(t),
        p.fromTypedArray(e),
        n,
        u.fromTypedArray(o)
      ),
      o)
    : (O.error("Cannot convert to spatial reference from PCPF"), o);
}
function Vr(r, t, e) {
  return I(r, t, 0, e, _(t), 0, r.length / 3), e;
}
function Gr(r, t, e) {
  return I(r, _(e), 0, t, e, 0, r.length / 3), t;
}
function Ir(r, t, e) {
  if (h(r)) return t;
  const n = p.fromTypedArray(r),
    o = p.fromTypedArray(t);
  return M(o, n, e), t;
}
function Wr(r, t, e) {
  if (h(r)) return t;
  b(c, e);
  const n = u.fromTypedArray(r),
    o = u.fromTypedArray(t);
  return E(o, n, c), rr(c) || er(o, o), t;
}
function qr(r, t, e) {
  if (h(r)) return t;
  b(c, e);
  const n = u.fromTypedArray(r, 4 * Float32Array.BYTES_PER_ELEMENT),
    o = u.fromTypedArray(t, 4 * Float32Array.BYTES_PER_ELEMENT);
  if ((E(o, n, c), rr(c) || er(o, o), r !== t))
    for (let a = 3; a < r.length; a += 4) t[a] = r[a];
  return t;
}
function Hr(r, t, e, n, o) {
  if (!z(n)) return O.error("Cannot convert spatial reference to PCPF"), o;
  L(
    A.TO_PCPF,
    u.fromTypedArray(r, 4 * Float32Array.BYTES_PER_ELEMENT),
    p.fromTypedArray(t),
    p.fromTypedArray(e),
    n,
    u.fromTypedArray(o, 4 * Float32Array.BYTES_PER_ELEMENT)
  );
  for (let a = 3; a < r.length; a += 4) o[a] = r[a];
  return o;
}
function Jr(r, t, e, n, o) {
  if (!z(n)) return O.error("Cannot convert to spatial reference from PCPF"), o;
  L(
    A.FROM_PCPF,
    u.fromTypedArray(r, 16),
    p.fromTypedArray(t),
    p.fromTypedArray(e),
    n,
    u.fromTypedArray(o, 16)
  );
  for (let a = 3; a < r.length; a += 4) o[a] = r[a];
  return o;
}
function L(r, t, e, n, o, a) {
  if (!t) return;
  const i = e.count,
    l = _(o);
  if (nr(o))
    for (let s = 0; s < i; s++)
      n.getVec(s, x),
        t.getVec(s, g),
        N(l, x, w, l),
        D(c, w),
        r === A.FROM_PCPF && K(c, c),
        Q(g, g, c),
        a.setVec(s, g);
  else
    for (let s = 0; s < i; s++) {
      n.getVec(s, x), t.getVec(s, g), N(l, x, w, l), D(c, w);
      const y = Er(e.get(s, 1));
      let f = Math.cos(y);
      r === A.TO_PCPF && (f = 1 / f),
        (c[0] *= f),
        (c[1] *= f),
        (c[2] *= f),
        (c[3] *= f),
        (c[4] *= f),
        (c[5] *= f),
        r === A.FROM_PCPF && K(c, c),
        Q(g, g, c),
        Mr(g, g),
        a.setVec(s, g);
    }
  return a;
}
function z(r) {
  return (
    nr(r) ||
    (function (t) {
      return t.isWebMercator;
    })(r)
  );
}
function nr(r) {
  return r.isWGS84 || Rr(r) || _r(r) || vr(r);
}
var A;
(function (r) {
  (r[(r.TO_PCPF = 0)] = "TO_PCPF"), (r[(r.FROM_PCPF = 1)] = "FROM_PCPF");
})(A || (A = {}));
const x = C(),
  g = C(),
  w = P(),
  c = tr();
function or(r, t, e) {
  return q(t.spatialReference, e)
    ? (function (n, o, a) {
        const i = o.spatialReference,
          l = ir(o, a, G),
          s = new Float64Array(n.position.length),
          y = Dr(n.position, l, i, s),
          f = b(sr, l);
        return {
          position: y,
          normal: Kr(y, s, n.normal, f, i),
          tangent: Qr(y, s, n.tangent, f, i),
        };
      })(r, t, e)
    : (function (n, o, a) {
        const i = new Float64Array(n.position.length),
          l = n.position,
          s = o.x,
          y = o.y,
          f = o.z || 0,
          { horizontal: J, vertical: lr } = H(
            a ? a.unit : null,
            o.spatialReference
          );
        for (let T = 0; T < l.length; T += 3)
          (i[T + 0] = l[T + 0] * J + s),
            (i[T + 1] = l[T + 1] * J + y),
            (i[T + 2] = l[T + 2] * lr + f);
        return { position: i, normal: n.normal, tangent: n.tangent };
      })(r, t, e);
}
function kr(r, t, e) {
  const { position: n, normal: o, tangent: a } = r;
  if (h(t)) return { position: n, normal: o, tangent: a };
  const i = t.localMatrix;
  return or(
    {
      position: Ir(n, new Float64Array(n.length), i),
      normal: j(o) ? Wr(o, new Float32Array(o.length), i) : null,
      tangent: j(a) ? qr(a, new Float32Array(a.length), i) : null,
    },
    t.getOriginPoint(e),
    { geographic: t.geographic }
  );
}
function pt(r, t, e) {
  if (e != null && e.useTransform) {
    const { position: n, normal: o, tangent: a } = r;
    return {
      vertexAttributes: { position: n, normal: o, tangent: a },
      transform: new jr({
        origin: [t.x, t.y, t.z ?? 0],
        geographic: q(t.spatialReference, e),
      }),
    };
  }
  return { vertexAttributes: or(r, t, e), transform: null };
}
function X(r, t, e) {
  return q(t.spatialReference, e)
    ? (function (n, o, a) {
        const i = o.spatialReference;
        ir(o, a, G);
        const l = Z(Zr, G),
          s = new Float64Array(n.position.length),
          y = Ur(n.position, i, l, s),
          f = b(sr, l);
        return {
          position: y,
          normal: $r(n.normal, n.position, s, i, f),
          tangent: Xr(n.tangent, n.position, s, i, f),
        };
      })(r, t, e)
    : ar(r, t, e);
}
function yt(r, t, e, n) {
  if (h(t)) return X(r, e, n);
  const o = kr(r, t, e.spatialReference);
  return e.equals(t.getOriginPoint(e.spatialReference))
    ? ar(o, e, n)
    : X(o, e, n);
}
function Dr(r, t, e, n) {
  return (
    M(p.fromTypedArray(n), p.fromTypedArray(r), t),
    Gr(n, new Float64Array(r.length), e)
  );
}
function Kr(r, t, e, n, o) {
  if (h(e)) return null;
  const a = new Float32Array(e.length);
  return E(u.fromTypedArray(a), u.fromTypedArray(e), n), Yr(a, r, t, o, a), a;
}
function Qr(r, t, e, n, o) {
  if (h(e)) return null;
  const a = new Float32Array(e.length);
  E(
    u.fromTypedArray(a, 4 * Float32Array.BYTES_PER_ELEMENT),
    u.fromTypedArray(e, 4 * Float32Array.BYTES_PER_ELEMENT),
    n
  );
  for (let i = 3; i < a.length; i += 4) a[i] = e[i];
  return Jr(a, r, t, o, a), a;
}
function ar(r, t, e) {
  const n = new Float64Array(r.position.length),
    o = r.position,
    a = t.x,
    i = t.y,
    l = t.z || 0,
    { horizontal: s, vertical: y } = H(e ? e.unit : null, t.spatialReference);
  for (let f = 0; f < o.length; f += 3)
    (n[f + 0] = (o[f + 0] - a) / s),
      (n[f + 1] = (o[f + 1] - i) / s),
      (n[f + 2] = (o[f + 2] - l) / y);
  return { position: n, normal: r.normal, tangent: r.tangent };
}
function ir(r, t, e) {
  N(r.spatialReference, [r.x, r.y, r.z || 0], e, _(r.spatialReference));
  const { horizontal: n, vertical: o } = H(
    t ? t.unit : null,
    r.spatialReference
  );
  return xr(e, e, [n, n, o]), e;
}
function Ur(r, t, e, n) {
  const o = Vr(r, t, n),
    a = p.fromTypedArray(o),
    i = new Float64Array(o.length),
    l = p.fromTypedArray(i);
  return M(l, a, e), i;
}
function $r(r, t, e, n, o) {
  if (h(r)) return null;
  const a = Sr(r, t, e, n, new Float32Array(r.length)),
    i = u.fromTypedArray(a);
  return E(i, i, o), a;
}
function Xr(r, t, e, n, o) {
  if (h(r)) return null;
  const a = Hr(r, t, e, n, new Float32Array(r.length)),
    i = u.fromTypedArray(a, 4 * Float32Array.BYTES_PER_ELEMENT);
  return E(i, i, o), a;
}
function H(r, t) {
  if (h(r)) return rt;
  const e = t.isGeographic ? 1 : wr(t),
    n = t.isGeographic ? 1 : Cr(t),
    o = Nr(1, r, "meters");
  return { horizontal: o * e, vertical: o * n };
}
const G = P(),
  Zr = P(),
  sr = tr(),
  rt = { horizontal: 1, vertical: 1 };
export {
  Jr as L,
  Vr as M,
  Gr as R,
  pt as _,
  Hr as a,
  X as b,
  R as c,
  Y as d,
  ft as e,
  jr as f,
  ut as g,
  Yr as h,
  yt as i,
  Sr as j,
  kr as k,
  q as r,
  ct as v,
  or as x,
};
