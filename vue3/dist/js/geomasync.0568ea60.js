import {
  de as w,
  ar as b,
  a6 as N,
  R as O,
  bn as x,
  a5 as U,
  cM as T,
  aI as tn,
  $ as rn,
} from "./index.8fd7165c.js";
import {
  u as o,
  B as h,
  U as q,
  r as L,
  J as A,
  V as F,
  d as M,
  w as P,
  G as J,
  x as S,
  y as d,
  S as B,
  E as y,
  H as j,
  I as k,
  l as R,
  K as an,
  M as sn,
  O as un,
  P as H,
  b as z,
  Q as W,
  W as cn,
  X as C,
} from "./arcadeUtils.2f855605.js";
import {
  A as ln,
  h as fn,
  S as on,
  m as dn,
  x as wn,
  p as hn,
  O as mn,
  g as pn,
  R as yn,
  D as gn,
  b as vn,
  E as Pn,
  k as In,
  y as An,
  w as Fn,
  W as V,
  K as G,
  F as Z,
  M as E,
  d as Rn,
  C as K,
  U as Q,
  B as Nn,
  L as xn,
  P as bn,
  v as Sn,
  H as X,
  N as $,
  J as On,
  j as Mn,
} from "./geometryEngineAsync.8efb94c6.js";
import { t as u, e as c } from "./executionError.fb3f283a.js";
import { t as Y, s as _ } from "./portalUtils.b096dd2b.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./arcadeTimeUtils.e79f2f70.js";
import "./number.f83996f0.js";
function nn(r) {
  return tn.indexOf("4.") === 0
    ? x.fromExtent(r)
    : new x({
        spatialReference: r.spatialReference,
        rings: [
          [
            [r.xmin, r.ymin],
            [r.xmin, r.ymax],
            [r.xmax, r.ymax],
            [r.xmax, r.ymin],
            [r.xmin, r.ymin],
          ],
        ],
      });
}
function I(r, e, t) {
  if ((h(r, 2, 2, e, t), !(r[0] instanceof w && r[1] instanceof w))) {
    if (!(r[0] instanceof w && r[1] === null)) {
      if (!(r[1] instanceof w && r[0] === null)) {
        if (r[0] !== null || r[1] !== null)
          throw new u(e, c.InvalidParameter, t);
      }
    }
  }
}
async function en(r, e) {
  if (r.type !== "polygon" && r.type !== "polyline" && r.type !== "extent")
    return 0;
  let t = 1;
  (r.spatialReference.vcsWkid || r.spatialReference.latestVcsWkid) &&
    (t = cn(r.spatialReference) / rn(r.spatialReference));
  let i = 0;
  if (r.type === "polyline")
    for (const n of r.paths)
      for (let a = 1; a < n.length; a++) i += C(n[a], n[a - 1], t);
  else if (r.type === "polygon")
    for (const n of r.rings) {
      for (let a = 1; a < n.length; a++) i += C(n[a], n[a - 1], t);
      (n[0][0] !== n[n.length - 1][0] ||
        n[0][1] !== n[n.length - 1][1] ||
        (n[0][2] !== void 0 && n[0][2] !== n[n.length - 1][2])) &&
        (i += C(n[0], n[n.length - 1], t));
    }
  else
    r.type === "extent" &&
      ((i += 2 * C([r.xmin, r.ymin, 0], [r.xmax, r.ymin, 0], t)),
      (i += 2 * C([r.xmin, r.ymin, 0], [r.xmin, r.ymax, 0], t)),
      (i *= 2),
      (i += 4 * Math.abs(d(r.zmax, 0) * t - d(r.zmin, 0) * t)));
  const f = new N({
    hasZ: !1,
    hasM: !1,
    spatialReference: r.spatialReference,
    paths: [
      [0, 0],
      [0, i],
    ],
  });
  return Z(f, e);
}
function Hn(r) {
  r.mode === "async" &&
    ((r.functions.disjoint = function (e, t) {
      return r.standardFunctionAsync(
        e,
        t,
        (i, f, n) => (
          I((n = o(n)), e, t), n[0] === null || n[1] === null || ln(n[0], n[1])
        )
      );
    }),
    (r.functions.intersects = function (e, t) {
      return r.standardFunctionAsync(
        e,
        t,
        (i, f, n) => (
          I((n = o(n)), e, t), n[0] !== null && n[1] !== null && fn(n[0], n[1])
        )
      );
    }),
    (r.functions.touches = function (e, t) {
      return r.standardFunctionAsync(
        e,
        t,
        (i, f, n) => (
          I((n = o(n)), e, t), n[0] !== null && n[1] !== null && on(n[0], n[1])
        )
      );
    }),
    (r.functions.crosses = function (e, t) {
      return r.standardFunctionAsync(
        e,
        t,
        (i, f, n) => (
          I((n = o(n)), e, t), n[0] !== null && n[1] !== null && dn(n[0], n[1])
        )
      );
    }),
    (r.functions.within = function (e, t) {
      return r.standardFunctionAsync(
        e,
        t,
        (i, f, n) => (
          I((n = o(n)), e, t), n[0] !== null && n[1] !== null && wn(n[0], n[1])
        )
      );
    }),
    (r.functions.contains = function (e, t) {
      return r.standardFunctionAsync(
        e,
        t,
        (i, f, n) => (
          I((n = o(n)), e, t), n[0] !== null && n[1] !== null && hn(n[0], n[1])
        )
      );
    }),
    (r.functions.overlaps = function (e, t) {
      return r.standardFunctionAsync(
        e,
        t,
        (i, f, n) => (
          I((n = o(n)), e, t), n[0] !== null && n[1] !== null && mn(n[0], n[1])
        )
      );
    }),
    (r.functions.equals = function (e, t) {
      return r.standardFunctionAsync(
        e,
        t,
        (i, f, n) => (
          h(n, 2, 2, e, t),
          n[0] === n[1] ||
            (n[0] instanceof w && n[1] instanceof w
              ? pn(n[0], n[1])
              : !(!q(n[0]) || !q(n[1])) && n[0].equals(n[1]))
        )
      );
    }),
    (r.functions.relate = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        if (
          ((n = o(n)), h(n, 3, 3, e, t), n[0] instanceof w && n[1] instanceof w)
        )
          return yn(n[0], n[1], L(n[2]));
        if (
          (n[0] instanceof w && n[1] === null) ||
          (n[1] instanceof w && n[0] === null) ||
          (n[0] === null && n[1] === null)
        )
          return !1;
        throw new u(e, c.InvalidParameter, t);
      });
    }),
    (r.functions.intersection = function (e, t) {
      return r.standardFunctionAsync(
        e,
        t,
        (i, f, n) => (
          I((n = o(n)), e, t),
          n[0] === null || n[1] === null ? null : gn(n[0], n[1])
        )
      );
    }),
    (r.functions.union = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        const a = [];
        if ((n = o(n)).length === 0)
          throw new u(e, c.WrongNumberOfParameters, t);
        if (n.length === 1)
          if (A(n[0])) {
            const s = o(n[0]);
            for (let l = 0; l < s.length; l++)
              if (s[l] !== null) {
                if (!(s[l] instanceof w)) throw new u(e, c.InvalidParameter, t);
                a.push(s[l]);
              }
          } else {
            if (!F(n[0])) {
              if (n[0] instanceof w) return M(P(n[0]), e.spatialReference);
              if (n[0] === null) return null;
              throw new u(e, c.InvalidParameter, t);
            }
            {
              const s = o(n[0].toArray());
              for (let l = 0; l < s.length; l++)
                if (s[l] !== null) {
                  if (!(s[l] instanceof w))
                    throw new u(e, c.InvalidParameter, t);
                  a.push(s[l]);
                }
            }
          }
        else
          for (let s = 0; s < n.length; s++)
            if (n[s] !== null) {
              if (!(n[s] instanceof w)) throw new u(e, c.InvalidParameter, t);
              a.push(n[s]);
            }
        return a.length === 0 ? null : vn(a);
      });
    }),
    (r.functions.difference = function (e, t) {
      return r.standardFunctionAsync(
        e,
        t,
        (i, f, n) => (
          I((n = o(n)), e, t),
          n[0] !== null && n[1] === null
            ? P(n[0])
            : n[0] === null
            ? null
            : Pn(n[0], n[1])
        )
      );
    }),
    (r.functions.symmetricdifference = function (e, t) {
      return r.standardFunctionAsync(
        e,
        t,
        (i, f, n) => (
          I((n = o(n)), e, t),
          n[0] === null && n[1] === null
            ? null
            : n[0] === null
            ? P(n[1])
            : n[1] === null
            ? P(n[0])
            : In(n[0], n[1])
        )
      );
    }),
    (r.functions.clip = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        if (
          ((n = o(n)), h(n, 2, 2, e, t), !(n[1] instanceof b) && n[1] !== null)
        )
          throw new u(e, c.InvalidParameter, t);
        if (n[0] === null) return null;
        if (!(n[0] instanceof w)) throw new u(e, c.InvalidParameter, t);
        return n[1] === null ? null : An(n[0], n[1]);
      });
    }),
    (r.functions.cut = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        if (
          ((n = o(n)), h(n, 2, 2, e, t), !(n[1] instanceof N) && n[1] !== null)
        )
          throw new u(e, c.InvalidParameter, t);
        if (n[0] === null) return [];
        if (!(n[0] instanceof w)) throw new u(e, c.InvalidParameter, t);
        return n[1] === null ? [P(n[0])] : Fn(n[0], n[1]);
      });
    }),
    (r.functions.area = function (e, t) {
      return r.standardFunctionAsync(e, t, async (i, f, n) => {
        if ((h(n, 1, 2, e, t), (n = o(n))[0] === null)) return 0;
        if (J(n[0])) {
          const a = await n[0].sumArea(S(d(n[1], -1)), !1, e.abortSignal);
          if (e.abortSignal.aborted) throw new u(e, c.Cancelled, t);
          return a;
        }
        if (A(n[0]) || F(n[0])) {
          const a = B(n[0], e.spatialReference);
          return a === null ? 0 : V(a, S(d(n[1], -1)));
        }
        if (!(n[0] instanceof w)) throw new u(e, c.InvalidParameter, t);
        return V(n[0], S(d(n[1], -1)));
      });
    }),
    (r.functions.areageodetic = function (e, t) {
      return r.standardFunctionAsync(e, t, async (i, f, n) => {
        if ((h(n, 1, 2, e, t), (n = o(n))[0] === null)) return 0;
        if (J(n[0])) {
          const a = await n[0].sumArea(S(d(n[1], -1)), !0, e.abortSignal);
          if (e.abortSignal.aborted) throw new u(e, c.Cancelled, t);
          return a;
        }
        if (A(n[0]) || F(n[0])) {
          const a = B(n[0], e.spatialReference);
          return a === null ? 0 : G(a, S(d(n[1], -1)));
        }
        if (!(n[0] instanceof w)) throw new u(e, c.InvalidParameter, t);
        return G(n[0], S(d(n[1], -1)));
      });
    }),
    (r.functions.length = function (e, t) {
      return r.standardFunctionAsync(e, t, async (i, f, n) => {
        if ((h(n, 1, 2, e, t), (n = o(n))[0] === null)) return 0;
        if (J(n[0])) {
          const a = await n[0].sumLength(y(d(n[1], -1)), !1, e.abortSignal);
          if (e.abortSignal.aborted) throw new u(e, c.Cancelled, t);
          return a;
        }
        if (A(n[0]) || F(n[0])) {
          const a = j(n[0], e.spatialReference);
          return a === null ? 0 : Z(a, y(d(n[1], -1)));
        }
        if (!(n[0] instanceof w)) throw new u(e, c.InvalidParameter, t);
        return Z(n[0], y(d(n[1], -1)));
      });
    }),
    (r.functions.length3d = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        if ((h(n, 1, 2, e, t), (n = o(n))[0] === null)) return 0;
        if (A(n[0]) || F(n[0])) {
          const a = j(n[0], e.spatialReference);
          return a === null
            ? 0
            : a.hasZ === !0
            ? en(a, y(d(n[1], -1)))
            : Z(a, y(d(n[1], -1)));
        }
        if (!(n[0] instanceof w)) throw new u(e, c.InvalidParameter, t);
        return n[0].hasZ === !0
          ? en(n[0], y(d(n[1], -1)))
          : Z(n[0], y(d(n[1], -1)));
      });
    }),
    (r.functions.lengthgeodetic = function (e, t) {
      return r.standardFunctionAsync(e, t, async (i, f, n) => {
        if ((h(n, 1, 2, e, t), (n = o(n))[0] === null)) return 0;
        if (J(n[0])) {
          const a = await n[0].sumLength(y(d(n[1], -1)), !0, e.abortSignal);
          if (e.abortSignal.aborted) throw new u(e, c.Cancelled, t);
          return a;
        }
        if (A(n[0]) || F(n[0])) {
          const a = j(n[0], e.spatialReference);
          return a === null ? 0 : E(a, y(d(n[1], -1)));
        }
        if (!(n[0] instanceof w)) throw new u(e, c.InvalidParameter, t);
        return E(n[0], y(d(n[1], -1)));
      });
    }),
    (r.functions.distance = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        (n = o(n)), h(n, 2, 3, e, t);
        let a = n[0];
        (A(n[0]) || F(n[0])) && (a = k(n[0], e.spatialReference));
        let s = n[1];
        if (
          ((A(n[1]) || F(n[1])) && (s = k(n[1], e.spatialReference)),
          !(a instanceof w))
        )
          throw new u(e, c.InvalidParameter, t);
        if (!(s instanceof w)) throw new u(e, c.InvalidParameter, t);
        return Rn(a, s, y(d(n[2], -1)));
      });
    }),
    (r.functions.distancegeodetic = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        (n = o(n)), h(n, 2, 3, e, t);
        const a = n[0],
          s = n[1];
        if (!(a instanceof O)) throw new u(e, c.InvalidParameter, t);
        if (!(s instanceof O)) throw new u(e, c.InvalidParameter, t);
        const l = new N({ paths: [], spatialReference: a.spatialReference });
        return l.addPath([a, s]), E(l, y(d(n[2], -1)));
      });
    }),
    (r.functions.densify = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        if (((n = o(n)), h(n, 2, 3, e, t), n[0] === null)) return null;
        if (!(n[0] instanceof w)) throw new u(e, c.InvalidParameter, t);
        const a = R(n[1]);
        if (isNaN(a)) throw new u(e, c.InvalidParameter, t);
        if (a <= 0) throw new u(e, c.InvalidParameter, t);
        return n[0] instanceof x || n[0] instanceof N
          ? K(n[0], a, y(d(n[2], -1)))
          : n[0] instanceof b
          ? K(nn(n[0]), a, y(d(n[2], -1)))
          : n[0];
      });
    }),
    (r.functions.densifygeodetic = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        if (((n = o(n)), h(n, 2, 3, e, t), n[0] === null)) return null;
        if (!(n[0] instanceof w)) throw new u(e, c.InvalidParameter, t);
        const a = R(n[1]);
        if (isNaN(a)) throw new u(e, c.InvalidParameter, t);
        if (a <= 0) throw new u(e, c.InvalidParameter, t);
        return n[0] instanceof x || n[0] instanceof N
          ? Q(n[0], a, y(d(n[2], -1)))
          : n[0] instanceof b
          ? Q(nn(n[0]), a, y(d(n[2], -1)))
          : n[0];
      });
    }),
    (r.functions.generalize = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        if (((n = o(n)), h(n, 2, 4, e, t), n[0] === null)) return null;
        if (!(n[0] instanceof w)) throw new u(e, c.InvalidParameter, t);
        const a = R(n[1]);
        if (isNaN(a)) throw new u(e, c.InvalidParameter, t);
        return Nn(n[0], a, an(d(n[2], !0)), y(d(n[3], -1)));
      });
    }),
    (r.functions.buffer = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        if (((n = o(n)), h(n, 2, 3, e, t), n[0] === null)) return null;
        if (!(n[0] instanceof w)) throw new u(e, c.InvalidParameter, t);
        const a = R(n[1]);
        if (isNaN(a)) throw new u(e, c.InvalidParameter, t);
        return a === 0 ? P(n[0]) : xn(n[0], a, y(d(n[2], -1)));
      });
    }),
    (r.functions.buffergeodetic = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        if (((n = o(n)), h(n, 2, 3, e, t), n[0] === null)) return null;
        if (!(n[0] instanceof w)) throw new u(e, c.InvalidParameter, t);
        const a = R(n[1]);
        if (isNaN(a)) throw new u(e, c.InvalidParameter, t);
        return a === 0 ? P(n[0]) : bn(n[0], a, y(d(n[2], -1)));
      });
    }),
    (r.functions.offset = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        if (((n = o(n)), h(n, 2, 6, e, t), n[0] === null)) return null;
        if (!(n[0] instanceof x || n[0] instanceof N))
          throw new u(e, c.InvalidParameter, t);
        const a = R(n[1]);
        if (isNaN(a)) throw new u(e, c.InvalidParameter, t);
        const s = R(d(n[4], 10));
        if (isNaN(s)) throw new u(e, c.InvalidParameter, t);
        const l = R(d(n[5], 0));
        if (isNaN(l)) throw new u(e, c.InvalidParameter, t);
        return Sn(
          n[0],
          a,
          y(d(n[2], -1)),
          L(d(n[3], "round")).toLowerCase(),
          s,
          l
        );
      });
    }),
    (r.functions.rotate = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        (n = o(n)), h(n, 2, 3, e, t);
        let a = n[0];
        if (a === null) return null;
        if (!(a instanceof w)) throw new u(e, c.InvalidParameter, t);
        a instanceof b && (a = x.fromExtent(a));
        const s = R(n[1]);
        if (isNaN(s)) throw new u(e, c.InvalidParameter, t);
        const l = d(n[2], null);
        if (l === null) return X(a, s);
        if (l instanceof O) return X(a, s, l);
        throw new u(e, c.InvalidParameter, t);
      });
    }),
    (r.functions.centroid = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        if (((n = o(n)), h(n, 1, 1, e, t), n[0] === null)) return null;
        let a = n[0];
        if (
          ((A(n[0]) || F(n[0])) && (a = k(n[0], e.spatialReference)),
          a === null)
        )
          return null;
        if (!(a instanceof w)) throw new u(e, c.InvalidParameter, t);
        return a instanceof O
          ? M(P(n[0]), e.spatialReference)
          : a instanceof x
          ? a.centroid
          : a instanceof N
          ? sn(a)
          : a instanceof U
          ? un(a)
          : a instanceof b
          ? a.center
          : null;
      });
    }),
    (r.functions.multiparttosinglepart = function (e, t) {
      return r.standardFunctionAsync(e, t, async (i, f, n) => {
        (n = o(n)), h(n, 1, 1, e, t);
        const a = [];
        if (n[0] === null) return null;
        if (!(n[0] instanceof w)) throw new u(e, c.InvalidParameter, t);
        if (n[0] instanceof O) return [M(P(n[0]), e.spatialReference)];
        if (n[0] instanceof b) return [M(P(n[0]), e.spatialReference)];
        const s = await $(n[0]);
        if (s instanceof x) {
          const l = [],
            p = [];
          for (let m = 0; m < s.rings.length; m++)
            if (s.isClockwise(s.rings[m])) {
              const g = T({
                rings: [s.rings[m]],
                hasZ: s.hasZ === !0,
                hazM: s.hasM === !0,
                spatialReference: s.spatialReference.toJSON(),
              });
              l.push(g);
            } else p.push({ ring: s.rings[m], pt: s.getPoint(m, 0) });
          for (let m = 0; m < p.length; m++)
            for (let g = 0; g < l.length; g++)
              if (l[g].contains(p[m].pt)) {
                l[g].addRing(p[m].ring);
                break;
              }
          return l;
        }
        if (s instanceof N) {
          const l = [];
          for (let p = 0; p < s.paths.length; p++) {
            const m = T({
              paths: [s.paths[p]],
              hasZ: s.hasZ === !0,
              hazM: s.hasM === !0,
              spatialReference: s.spatialReference.toJSON(),
            });
            l.push(m);
          }
          return l;
        }
        if (n[0] instanceof U) {
          const l = M(P(n[0]), e.spatialReference);
          for (let p = 0; p < l.points.length; p++) a.push(l.getPoint(p));
          return a;
        }
        return null;
      });
    }),
    (r.functions.issimple = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        if (((n = o(n)), h(n, 1, 1, e, t), n[0] === null)) return !0;
        if (!(n[0] instanceof w)) throw new u(e, c.InvalidParameter, t);
        return On(n[0]);
      });
    }),
    (r.functions.simplify = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        if (((n = o(n)), h(n, 1, 1, e, t), n[0] === null)) return null;
        if (!(n[0] instanceof w)) throw new u(e, c.InvalidParameter, t);
        return $(n[0]);
      });
    }),
    (r.functions.convexhull = function (e, t) {
      return r.standardFunctionAsync(e, t, (i, f, n) => {
        if (((n = o(n)), h(n, 1, 1, e, t), n[0] === null)) return null;
        if (!(n[0] instanceof w)) throw new u(e, c.InvalidParameter, t);
        return Mn(n[0]);
      });
    }),
    (r.functions.getuser = function (e, t) {
      return r.standardFunctionAsync(e, t, async (i, f, n) => {
        h(n, 0, 2, e, t);
        let a = d(n[1], ""),
          s = a === !0;
        if (
          ((a = a === !0 || a === !1 ? "" : L(a)),
          n.length === 0 || n[0] instanceof H)
        ) {
          let p = null;
          e.services && e.services.portal && (p = e.services.portal),
            n.length > 0 && (p = Y(n[0], p));
          const m = await _(p, a, s);
          if (m) {
            const g = JSON.parse(JSON.stringify(m));
            for (const v of ["lastLogin", "created", "modified"])
              g[v] !== void 0 && g[v] !== null && (g[v] = new Date(g[v]));
            return z.convertObjectToArcadeDictionary(g, W(e));
          }
          return null;
        }
        let l = null;
        if ((J(n[0]) && (l = n[0]), l)) {
          if (((s = !1), a)) return null;
          await l.load();
          const p = await l.getOwningSystemUrl();
          if (!p) {
            if (!a) {
              const v = await l.getIdentityUser();
              return v
                ? z.convertObjectToArcadeDictionary({ username: v }, W(e))
                : null;
            }
            return null;
          }
          let m = null;
          e.services && e.services.portal && (m = e.services.portal),
            (m = Y(new H(p), m));
          const g = await _(m, a, s);
          if (g) {
            const v = JSON.parse(JSON.stringify(g));
            for (const D of ["lastLogin", "created", "modified"])
              v[D] !== void 0 && v[D] !== null && (v[D] = new Date(v[D]));
            return z.convertObjectToArcadeDictionary(v, W(e));
          }
          return null;
        }
        throw new u(e, c.InvalidParameter, t);
      });
    }));
}
export { Hn as registerFunctions };
