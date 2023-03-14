import { e as E } from "./mat3f64.eb921732.js";
import { e as _ } from "./quatf64.75f9f553.js";
import {
  fS as j,
  fT as L,
  fq as O,
  fU as W,
  fV as X,
  fW as Y,
  fX as Z,
  fY as k,
  fZ as U,
  f_ as V,
  f$ as $,
  g0 as w,
  fj as B,
  fm as P,
  g1 as C,
  fo as D,
  b as F,
  aM as S,
  g2 as G,
} from "./index.8fd7165c.js";
function I(a, o, e) {
  e *= 0.5;
  const s = Math.sin(e);
  return (
    (a[0] = s * o[0]),
    (a[1] = s * o[1]),
    (a[2] = s * o[2]),
    (a[3] = Math.cos(e)),
    a
  );
}
function K(a, o) {
  const e = 2 * Math.acos(o[3]),
    s = Math.sin(e / 2);
  return (
    s > j()
      ? ((a[0] = o[0] / s), (a[1] = o[1] / s), (a[2] = o[2] / s))
      : ((a[0] = 1), (a[1] = 0), (a[2] = 0)),
    e
  );
}
function v(a, o, e) {
  const s = o[0],
    r = o[1],
    c = o[2],
    t = o[3],
    u = e[0],
    i = e[1],
    n = e[2],
    f = e[3];
  return (
    (a[0] = s * f + t * u + r * n - c * i),
    (a[1] = r * f + t * i + c * u - s * n),
    (a[2] = c * f + t * n + s * i - r * u),
    (a[3] = t * f - s * u - r * i - c * n),
    a
  );
}
function d(a, o, e, s) {
  const r = o[0],
    c = o[1],
    t = o[2],
    u = o[3];
  let i,
    n,
    f,
    h,
    l,
    m = e[0],
    q = e[1],
    g = e[2],
    p = e[3];
  return (
    (n = r * m + c * q + t * g + u * p),
    n < 0 && ((n = -n), (m = -m), (q = -q), (g = -g), (p = -p)),
    1 - n > j()
      ? ((i = Math.acos(n)),
        (f = Math.sin(i)),
        (h = Math.sin((1 - s) * i) / f),
        (l = Math.sin(s * i) / f))
      : ((h = 1 - s), (l = s)),
    (a[0] = h * r + l * m),
    (a[1] = h * c + l * q),
    (a[2] = h * t + l * g),
    (a[3] = h * u + l * p),
    a
  );
}
function H(a, o) {
  return (a[0] = -o[0]), (a[1] = -o[1]), (a[2] = -o[2]), (a[3] = o[3]), a;
}
function b(a, o) {
  const e = o[0] + o[4] + o[8];
  let s;
  if (e > 0)
    (s = Math.sqrt(e + 1)),
      (a[3] = 0.5 * s),
      (s = 0.5 / s),
      (a[0] = (o[5] - o[7]) * s),
      (a[1] = (o[6] - o[2]) * s),
      (a[2] = (o[1] - o[3]) * s);
  else {
    let r = 0;
    o[4] > o[0] && (r = 1), o[8] > o[3 * r + r] && (r = 2);
    const c = (r + 1) % 3,
      t = (r + 2) % 3;
    (s = Math.sqrt(o[3 * r + r] - o[3 * c + c] - o[3 * t + t] + 1)),
      (a[r] = 0.5 * s),
      (s = 0.5 / s),
      (a[3] = (o[3 * c + t] - o[3 * t + c]) * s),
      (a[c] = (o[3 * c + r] + o[3 * r + c]) * s),
      (a[t] = (o[3 * t + r] + o[3 * r + t]) * s);
  }
  return a;
}
function J(a, o, e, s) {
  const r = (0.5 * Math.PI) / 180;
  (o *= r), (e *= r), (s *= r);
  const c = Math.sin(o),
    t = Math.cos(o),
    u = Math.sin(e),
    i = Math.cos(e),
    n = Math.sin(s),
    f = Math.cos(s);
  return (
    (a[0] = c * i * f - t * u * n),
    (a[1] = t * u * f + c * i * n),
    (a[2] = t * i * n - c * u * f),
    (a[3] = t * i * f + c * u * n),
    a
  );
}
const N = L,
  Q = O,
  R = W,
  aa = v,
  oa = X,
  sa = Y,
  ra = Z,
  T = k,
  ea = T,
  z = U,
  ca = z,
  y = V,
  ta = $,
  ua = w,
  M = F(),
  ia = S(1, 0, 0),
  na = S(0, 1, 0),
  x = _(),
  A = _(),
  fa = E();
Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      add: R,
      calculateW: function (a, o) {
        const e = o[0],
          s = o[1],
          r = o[2];
        return (
          (a[0] = e),
          (a[1] = s),
          (a[2] = r),
          (a[3] = Math.sqrt(Math.abs(1 - e * e - s * s - r * r))),
          a
        );
      },
      conjugate: H,
      copy: N,
      dot: sa,
      equals: ua,
      exactEquals: ta,
      fromEuler: J,
      fromMat3: b,
      getAxisAngle: K,
      identity: function (a) {
        return (a[0] = 0), (a[1] = 0), (a[2] = 0), (a[3] = 1), a;
      },
      invert: function (a, o) {
        const e = o[0],
          s = o[1],
          r = o[2],
          c = o[3],
          t = e * e + s * s + r * r + c * c,
          u = t ? 1 / t : 0;
        return (
          (a[0] = -e * u), (a[1] = -s * u), (a[2] = -r * u), (a[3] = c * u), a
        );
      },
      len: ea,
      length: T,
      lerp: ra,
      mul: aa,
      multiply: v,
      normalize: y,
      random: function (a) {
        const o = G,
          e = o(),
          s = o(),
          r = o(),
          c = Math.sqrt(1 - e),
          t = Math.sqrt(e);
        return (
          (a[0] = c * Math.sin(2 * Math.PI * s)),
          (a[1] = c * Math.cos(2 * Math.PI * s)),
          (a[2] = t * Math.sin(2 * Math.PI * r)),
          (a[3] = t * Math.cos(2 * Math.PI * r)),
          a
        );
      },
      rotateX: function (a, o, e) {
        e *= 0.5;
        const s = o[0],
          r = o[1],
          c = o[2],
          t = o[3],
          u = Math.sin(e),
          i = Math.cos(e);
        return (
          (a[0] = s * i + t * u),
          (a[1] = r * i + c * u),
          (a[2] = c * i - r * u),
          (a[3] = t * i - s * u),
          a
        );
      },
      rotateY: function (a, o, e) {
        e *= 0.5;
        const s = o[0],
          r = o[1],
          c = o[2],
          t = o[3],
          u = Math.sin(e),
          i = Math.cos(e);
        return (
          (a[0] = s * i - c * u),
          (a[1] = r * i + t * u),
          (a[2] = c * i + s * u),
          (a[3] = t * i - r * u),
          a
        );
      },
      rotateZ: function (a, o, e) {
        e *= 0.5;
        const s = o[0],
          r = o[1],
          c = o[2],
          t = o[3],
          u = Math.sin(e),
          i = Math.cos(e);
        return (
          (a[0] = s * i + r * u),
          (a[1] = r * i - s * u),
          (a[2] = c * i + t * u),
          (a[3] = t * i - c * u),
          a
        );
      },
      rotationTo: function (a, o, e) {
        const s = B(o, e);
        return s < -0.999999
          ? (P(M, ia, o),
            C(M) < 1e-6 && P(M, na, o),
            D(M, M),
            I(a, M, Math.PI),
            a)
          : s > 0.999999
          ? ((a[0] = 0), (a[1] = 0), (a[2] = 0), (a[3] = 1), a)
          : (P(M, o, e),
            (a[0] = M[0]),
            (a[1] = M[1]),
            (a[2] = M[2]),
            (a[3] = 1 + s),
            y(a, a));
      },
      scale: oa,
      set: Q,
      setAxes: function (a, o, e, s) {
        const r = fa;
        return (
          (r[0] = e[0]),
          (r[3] = e[1]),
          (r[6] = e[2]),
          (r[1] = s[0]),
          (r[4] = s[1]),
          (r[7] = s[2]),
          (r[2] = -o[0]),
          (r[5] = -o[1]),
          (r[8] = -o[2]),
          y(a, b(a, r))
        );
      },
      setAxisAngle: I,
      slerp: d,
      sqlerp: function (a, o, e, s, r, c) {
        return d(x, o, r, c), d(A, e, s, c), d(a, x, A, 2 * c * (1 - c)), a;
      },
      sqrLen: ca,
      squaredLength: z,
      str: function (a) {
        return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
      },
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export { ta as K, H as S, J as k, I as v, K as x, v as y };
