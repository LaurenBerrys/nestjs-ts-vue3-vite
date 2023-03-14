import {
  bJ as M,
  bG as q,
  bq as j,
  bK as v,
  bH as B,
  r as z,
  t as C,
} from "./index.8fd7165c.js";
const x = (e, n, t) => [n, t],
  c = (e, n, t) => [n, t, e[2]],
  g = (e, n, t) => [n, t, e[2], e[3]];
function U(e) {
  return e
    ? {
        originPosition:
          e.originPosition === "upper-left"
            ? "upperLeft"
            : e.originPosition === "lower-left"
            ? "lowerLeft"
            : e.originPosition,
        scale: e.tolerance ? [e.tolerance, e.tolerance] : [1, 1],
        translate: z(e.extent) ? [e.extent.xmin, e.extent.ymax] : [0, 0],
      }
    : null;
}
function p({ scale: e, translate: n }, t) {
  return Math.round((t - n[0]) / e[0]);
}
function y({ scale: e, translate: n }, t) {
  return Math.round((n[1] - t) / e[1]);
}
function w(e, n, t) {
  const o = [];
  let u, r, l, i;
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    s > 0
      ? ((l = p(e, a[0])),
        (i = y(e, a[1])),
        (l === u && i === r) || (o.push(n(a, l - u, i - r)), (u = l), (r = i)))
      : ((u = p(e, a[0])), (r = y(e, a[1])), o.push(n(a, u, r)));
  }
  return o.length > 0 ? o : null;
}
function P({ scale: e, translate: n }, t) {
  return t * e[0] + n[0];
}
function d({ scale: e, translate: n }, t) {
  return n[1] - t * e[1];
}
function A(e, n, t) {
  const o = new Array(t.length);
  if (!t.length) return o;
  const [u, r] = e.scale;
  let l = P(e, t[0][0]),
    i = d(e, t[0][1]);
  o[0] = n(t[0], l, i);
  for (let s = 1; s < t.length; s++) {
    const a = t[s];
    (l += a[0] * u), (i -= a[1] * r), (o[s] = n(a, l, i));
  }
  return o;
}
function L(e, n, t) {
  const o = new Array(t.length);
  for (let u = 0; u < t.length; u++) o[u] = A(e, n, t[u]);
  return o;
}
function G(e, n, t, o, u) {
  return (
    (n.points =
      (function (r, l, i, s) {
        return w(r, i ? (s ? g : c) : s ? c : x, l);
      })(e, t.points, o, u) ?? []),
    n
  );
}
function H(e, n, t, o, u) {
  return (
    (n.x = p(e, t.x)),
    (n.y = y(e, t.y)),
    n !== t && (o && (n.z = t.z), u && (n.m = t.m)),
    n
  );
}
function J(e, n, t, o, u) {
  const r = (function (l, i, s, a) {
    const f = [],
      b = s ? (a ? g : c) : a ? c : x;
    for (let m = 0; m < i.length; m++) {
      const h = w(l, b, i[m]);
      h && h.length >= 3 && f.push(h);
    }
    return f.length ? f : null;
  })(e, t.rings, o, u);
  return r ? ((n.rings = r), n) : null;
}
function K(e, n, t, o, u) {
  const r = (function (l, i, s, a) {
    const f = [],
      b = s ? (a ? g : c) : a ? c : x;
    for (let m = 0; m < i.length; m++) {
      const h = w(l, b, i[m]);
      h && h.length >= 2 && f.push(h);
    }
    return f.length ? f : null;
  })(e, t.paths, o, u);
  return r ? ((n.paths = r), n) : null;
}
function k(e, n) {
  return e && n
    ? M(n)
      ? H(e, {}, n, !1, !1)
      : q(n)
      ? K(e, {}, n, !1, !1)
      : j(n)
      ? J(e, {}, n, !1, !1)
      : v(n)
      ? G(e, {}, n, !1, !1)
      : B(n)
      ? (function (t, o, u, r, l) {
          return (
            (o.xmin = p(t, u.xmin)),
            (o.ymin = y(t, u.ymin)),
            (o.xmax = p(t, u.xmax)),
            (o.ymax = y(t, u.ymax)),
            o !== u &&
              (r && ((o.zmin = u.zmin), (o.zmax = u.zmax)),
              l && ((o.mmin = u.mmin), (o.mmax = u.mmax))),
            o
          );
        })(e, {}, n, !1, !1)
      : null
    : null;
}
function D(e, n, t, o, u) {
  return (
    z(t) &&
      (n.points = (function (r, l, i, s) {
        return A(r, i ? (s ? g : c) : s ? c : x, l);
      })(e, t.points, o, u)),
    n
  );
}
function E(e, n, t, o, u) {
  return (
    C(t) ||
      ((n.x = P(e, t.x)),
      (n.y = d(e, t.y)),
      n !== t && (o && (n.z = t.z), u && (n.m = t.m))),
    n
  );
}
function F(e, n, t, o, u) {
  return (
    z(t) &&
      (n.rings = (function (r, l, i, s) {
        return L(r, i ? (s ? g : c) : s ? c : x, l);
      })(e, t.rings, o, u)),
    n
  );
}
function I(e, n, t, o, u) {
  return (
    z(t) &&
      (n.paths = (function (r, l, i, s) {
        return L(r, i ? (s ? g : c) : s ? c : x, l);
      })(e, t.paths, o, u)),
    n
  );
}
export { F as B, I as C, H as O, k as U, D as q, U as s, E as v };
