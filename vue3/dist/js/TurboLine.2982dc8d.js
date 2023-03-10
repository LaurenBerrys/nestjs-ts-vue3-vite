import { q as wt } from "./Table.e9c997d5.js";
import { w as bt, c_ as pt } from "./index.8fd7165c.js";
import { e as j, n as O } from "./enums.13513a14.js";
import { X as Rt } from "./definitions.ce677f69.js";
const Ut = 128e3;
let dt = null,
  Vt = null;
async function At() {
  return (
    dt ||
      (dt = (async function () {
        Vt = await (bt("esri-csp-restrictions")
          ? await wt(() => import("./libtess-asm.1ddc650e.js"), []).then(
              (e) => e.l
            )
          : await wt(() => import("./libtess.18314f66.js"), []).then((e) => e.l)
        ).load({ locateFile: (e) => pt(`esri/core/libs/libtess/${e}`) });
      })()),
    dt
  );
}
function Ot(r, e) {
  const x = Math.max(r.length, Ut);
  return Vt.triangulate(r, e, x);
}
function Tt(r, e) {
  return r.x === e.x && r.y === e.y;
}
function B(r, e) {
  return (r.x = e.y), (r.y = -e.x), r;
}
function U(r, e) {
  return (r.x = -e.y), (r.y = e.x), r;
}
function mt(r, e) {
  return (r.x = e.x), (r.y = e.y), r;
}
function ft(r, e) {
  return (r.x = -e.x), (r.y = -e.y), r;
}
function vt(r) {
  return Math.sqrt(r.x * r.x + r.y * r.y);
}
function kt(r, e) {
  return r.x * e.y - r.y * e.x;
}
function gt(r, e) {
  return r.x * e.x + r.y * e.y;
}
function it(r, e, x, f) {
  return (r.x = e.x * x + e.y * f), (r.y = e.x * f - e.y * x), r;
}
class St {
  constructor(e, x, f) {
    (this._writeVertex = e),
      (this._writeTriangle = x),
      (this._canUseThinTessellation = f),
      (this._prevNormal = { x: void 0, y: void 0 }),
      (this._nextNormal = { x: void 0, y: void 0 }),
      (this._textureNormalLeft = { x: 0, y: 1 }),
      (this._textureNormalRight = { x: 0, y: -1 }),
      (this._textureNormal = { x: void 0, y: void 0 }),
      (this._joinNormal = { x: void 0, y: void 0 }),
      (this._inner = { x: void 0, y: void 0 }),
      (this._outer = { x: void 0, y: void 0 }),
      (this._roundStart = { x: void 0, y: void 0 }),
      (this._roundEnd = { x: void 0, y: void 0 }),
      (this._startBreak = { x: void 0, y: void 0 }),
      (this._endBreak = { x: void 0, y: void 0 }),
      (this._innerPrev = { x: void 0, y: void 0 }),
      (this._innerNext = { x: void 0, y: void 0 }),
      (this._bevelStart = { x: void 0, y: void 0 }),
      (this._bevelEnd = { x: void 0, y: void 0 }),
      (this._bevelMiddle = { x: void 0, y: void 0 });
  }
  tessellate(e, x) {
    (function (f) {
      if (!f) return;
      const g = f.length;
      if (g <= 1) return;
      let b = 0;
      for (let p = 1; p < g; p++) Tt(f[p], f[b]) || ++b === p || (f[b] = f[p]);
      f.length = b + 1;
    })(e),
      this._canUseThinTessellation && x.halfWidth < Rt && !x.offset
        ? this._tessellateThin(e, x)
        : this._tessellate(e, x);
  }
  _tessellateThin(e, x) {
    if (e.length < 2) return;
    const f = x.wrapDistance || 65535;
    let g = x.initialDistance || 0,
      b = !1,
      p = e[0].x,
      z = e[0].y;
    const D = e.length;
    for (let q = 1; q < D; ++q) {
      b && ((b = !1), (g = 0));
      let Q = e[q].x,
        W = e[q].y,
        R = Q - p,
        v = W - z,
        T = Math.sqrt(R * R + v * v);
      if (((R /= T), (v /= T), g + T > f)) {
        b = !0;
        const t = (f - g) / T;
        (T = f - g), (Q = (1 - t) * p + t * Q), (W = (1 - t) * z + t * W), --q;
      }
      const o = this._writeVertex(p, z, 0, 0, R, v, v, -R, 0, -1, g),
        y = this._writeVertex(p, z, 0, 0, R, v, -v, R, 0, 1, g);
      g += T;
      const G = this._writeVertex(Q, W, 0, 0, R, v, v, -R, 0, -1, g),
        i = this._writeVertex(Q, W, 0, 0, R, v, -v, R, 0, 1, g);
      this._writeTriangle(o, y, G),
        this._writeTriangle(y, G, i),
        (p = Q),
        (z = W);
    }
  }
  _tessellate(e, x) {
    const f = e[0],
      g = e[e.length - 1],
      b = Tt(f, g),
      p = b ? 3 : 2;
    if (e.length < p) return;
    const z = x.pixelCoordRatio,
      D = x.capType != null ? x.capType : j.BUTT,
      q = x.joinType != null ? x.joinType : O.MITER,
      Q = x.miterLimit != null ? Math.min(x.miterLimit, 4) : 2,
      W = x.roundLimit != null ? Math.min(x.roundLimit, 1.05) : 1.05,
      R = x.halfWidth != null ? x.halfWidth : 2,
      v = !!x.textured;
    let T,
      o,
      y,
      G = null;
    const i = this._prevNormal,
      t = this._nextNormal;
    let K = -1,
      F = -1;
    const s = this._joinNormal;
    let _, c;
    const xt = this._textureNormalLeft,
      nt = this._textureNormalRight,
      w = this._textureNormal;
    let u = -1,
      h = -1;
    const _t = x.wrapDistance || 65535;
    let l = x.initialDistance || 0;
    const Et = this._writeVertex,
      Nt = this._writeTriangle,
      d = (k, st, H, V, A, S) => {
        const I = Et(o, y, _, c, H, V, k, st, A, S, l);
        return u >= 0 && h >= 0 && I >= 0 && Nt(u, h, I), (u = h), (h = I), I;
      };
    b &&
      ((T = e[e.length - 2]),
      (t.x = g.x - T.x),
      (t.y = g.y - T.y),
      (F = vt(t)),
      (t.x /= F),
      (t.y /= F));
    let Y = !1;
    for (let k = 0; k < e.length; ++k) {
      if (
        (Y && ((Y = !1), (l = 0)),
        T && ((i.x = -t.x), (i.y = -t.y), (K = F), l + K > _t && (Y = !0)),
        Y)
      ) {
        const n = (_t - l) / K;
        (K = _t - l),
          (T = {
            x: (1 - n) * T.x + n * e[k].x,
            y: (1 - n) * T.y + n * e[k].y,
          }),
          --k;
      } else T = e[k];
      (o = T.x), (y = T.y);
      const st = k <= 0 && !Y,
        H = k === e.length - 1;
      if (
        (st || (l += K),
        (G = H ? (b ? e[1] : null) : e[k + 1]),
        G
          ? ((t.x = G.x - o),
            (t.y = G.y - y),
            (F = vt(t)),
            (t.x /= F),
            (t.y /= F))
          : ((t.x = void 0), (t.y = void 0)),
        !b)
      ) {
        if (st) {
          U(s, t),
            (_ = s.x),
            (c = s.y),
            D === j.SQUARE &&
              (d(-t.y - t.x, t.x - t.y, t.x, t.y, 0, -1),
              d(t.y - t.x, -t.x - t.y, t.x, t.y, 0, 1)),
            D === j.ROUND &&
              (d(-t.y - t.x, t.x - t.y, t.x, t.y, -1, -1),
              d(t.y - t.x, -t.x - t.y, t.x, t.y, -1, 1)),
            (D !== j.ROUND && D !== j.BUTT) ||
              (d(-t.y, t.x, t.x, t.y, 0, -1), d(t.y, -t.x, t.x, t.y, 0, 1));
          continue;
        }
        if (H) {
          B(s, i),
            (_ = s.x),
            (c = s.y),
            (D !== j.ROUND && D !== j.BUTT) ||
              (d(i.y, -i.x, -i.x, -i.y, 0, -1), d(-i.y, i.x, -i.x, -i.y, 0, 1)),
            D === j.SQUARE &&
              (d(i.y - i.x, -i.x - i.y, -i.x, -i.y, 0, -1),
              d(-i.y - i.x, i.x - i.y, -i.x, -i.y, 0, 1)),
            D === j.ROUND &&
              (d(i.y - i.x, -i.x - i.y, -i.x, -i.y, 1, -1),
              d(-i.y - i.x, i.x - i.y, -i.x, -i.y, 1, 1));
          continue;
        }
      }
      let V,
        A,
        S = -kt(i, t);
      if (Math.abs(S) < 0.01)
        gt(i, t) > 0
          ? ((s.x = i.x),
            (s.y = i.y),
            (S = 1),
            (V = Number.MAX_VALUE),
            (A = !0))
          : (U(s, t), (S = 1), (V = 1), (A = !1));
      else {
        (s.x = (i.x + t.x) / S), (s.y = (i.y + t.y) / S), (V = vt(s));
        const n = (V - 1) * R * z;
        A = V > 4 || (n > K && n > F);
      }
      (_ = s.x), (c = s.y);
      let I = q;
      switch (q) {
        case O.BEVEL:
          V < 1.05 && (I = O.MITER);
          break;
        case O.ROUND:
          V < W && (I = O.MITER);
          break;
        case O.MITER:
          V > Q && (I = O.BEVEL);
      }
      switch (I) {
        case O.MITER:
          if (
            (d(s.x, s.y, -i.x, -i.y, 0, -1), d(-s.x, -s.y, -i.x, -i.y, 0, 1), H)
          )
            break;
          if (v) {
            const n = Y ? 0 : l;
            (u = this._writeVertex(o, y, _, c, t.x, t.y, s.x, s.y, 0, -1, n)),
              (h = this._writeVertex(
                o,
                y,
                _,
                c,
                t.x,
                t.y,
                -s.x,
                -s.y,
                0,
                1,
                n
              ));
          }
          break;
        case O.BEVEL: {
          const n = S < 0;
          let m, E, C, M;
          if (n) {
            const a = u;
            (u = h), (h = a), (m = xt), (E = nt);
          } else (m = nt), (E = xt);
          if (A)
            (C = n ? U(this._innerPrev, i) : B(this._innerPrev, i)),
              (M = n ? B(this._innerNext, t) : U(this._innerNext, t));
          else {
            const a = n ? ft(this._inner, s) : mt(this._inner, s);
            (C = a), (M = a);
          }
          const L = n ? B(this._bevelStart, i) : U(this._bevelStart, i);
          d(C.x, C.y, -i.x, -i.y, m.x, m.y);
          const yt = d(L.x, L.y, -i.x, -i.y, E.x, E.y);
          if (H) break;
          const P = n ? U(this._bevelEnd, t) : B(this._bevelEnd, t);
          if (A) {
            const a = this._writeVertex(o, y, _, c, -i.x, -i.y, 0, 0, 0, 0, l);
            (u = this._writeVertex(
              o,
              y,
              _,
              c,
              t.x,
              t.y,
              M.x,
              M.y,
              m.x,
              m.y,
              l
            )),
              (h = this._writeVertex(
                o,
                y,
                _,
                c,
                t.x,
                t.y,
                P.x,
                P.y,
                E.x,
                E.y,
                l
              )),
              this._writeTriangle(yt, a, h);
          } else {
            if (v) {
              const a = this._bevelMiddle;
              (a.x = (L.x + P.x) / 2),
                (a.y = (L.y + P.y) / 2),
                it(w, a, -i.x, -i.y),
                d(a.x, a.y, -i.x, -i.y, w.x, w.y),
                it(w, a, t.x, t.y),
                (u = this._writeVertex(
                  o,
                  y,
                  _,
                  c,
                  t.x,
                  t.y,
                  a.x,
                  a.y,
                  w.x,
                  w.y,
                  l
                )),
                (h = this._writeVertex(
                  o,
                  y,
                  _,
                  c,
                  t.x,
                  t.y,
                  M.x,
                  M.y,
                  m.x,
                  m.y,
                  l
                ));
            } else {
              const a = u;
              (u = h), (h = a);
            }
            d(P.x, P.y, t.x, t.y, E.x, E.y);
          }
          if (n) {
            const a = u;
            (u = h), (h = a);
          }
          break;
        }
        case O.ROUND: {
          const n = S < 0;
          let m, E;
          if (n) {
            const N = u;
            (u = h), (h = N), (m = xt), (E = nt);
          } else (m = nt), (E = xt);
          const C = n ? ft(this._inner, s) : mt(this._inner, s);
          let M, L;
          A
            ? ((M = n ? U(this._innerPrev, i) : B(this._innerPrev, i)),
              (L = n ? B(this._innerNext, t) : U(this._innerNext, t)))
            : ((M = C), (L = C));
          const yt = n ? B(this._roundStart, i) : U(this._roundStart, i),
            P = n ? U(this._roundEnd, t) : B(this._roundEnd, t),
            a = d(M.x, M.y, -i.x, -i.y, m.x, m.y),
            ot = d(yt.x, yt.y, -i.x, -i.y, E.x, E.y);
          if (H) break;
          const $ = this._writeVertex(o, y, _, c, -i.x, -i.y, 0, 0, 0, 0, l);
          A || this._writeTriangle(u, h, $);
          const X = ft(this._outer, C),
            J = this._writeVertex(o, y, _, c, t.x, t.y, P.x, P.y, E.x, E.y, l);
          let Z, tt;
          const ht = V > 2;
          if (ht) {
            let N;
            V !== Number.MAX_VALUE
              ? ((X.x /= V),
                (X.y /= V),
                (N = gt(i, X)),
                (N = (V * (N * N - 1) + 1) / N))
              : (N = -1),
              (Z = n ? B(this._startBreak, i) : U(this._startBreak, i)),
              (Z.x += i.x * N),
              (Z.y += i.y * N),
              (tt = n ? U(this._endBreak, t) : B(this._endBreak, t)),
              (tt.x += t.x * N),
              (tt.y += t.y * N);
          }
          it(w, X, -i.x, -i.y);
          const lt = this._writeVertex(
            o,
            y,
            _,
            c,
            -i.x,
            -i.y,
            X.x,
            X.y,
            w.x,
            w.y,
            l
          );
          it(w, X, t.x, t.y);
          const ct = v
              ? this._writeVertex(o, y, _, c, t.x, t.y, X.x, X.y, w.x, w.y, l)
              : lt,
            ut = $,
            at = v ? this._writeVertex(o, y, _, c, t.x, t.y, 0, 0, 0, 0, l) : $;
          let et = -1,
            rt = -1;
          if (
            (ht &&
              (it(w, Z, -i.x, -i.y),
              (et = this._writeVertex(
                o,
                y,
                _,
                c,
                -i.x,
                -i.y,
                Z.x,
                Z.y,
                w.x,
                w.y,
                l
              )),
              it(w, tt, t.x, t.y),
              (rt = this._writeVertex(
                o,
                y,
                _,
                c,
                t.x,
                t.y,
                tt.x,
                tt.y,
                w.x,
                w.y,
                l
              ))),
            v
              ? ht
                ? (this._writeTriangle(ut, ot, et),
                  this._writeTriangle(ut, et, lt),
                  this._writeTriangle(at, ct, rt),
                  this._writeTriangle(at, rt, J))
                : (this._writeTriangle(ut, ot, lt),
                  this._writeTriangle(at, ct, J))
              : ht
              ? (this._writeTriangle($, ot, et),
                this._writeTriangle($, et, rt),
                this._writeTriangle($, rt, J))
              : (this._writeTriangle($, ot, lt), this._writeTriangle($, ct, J)),
            A
              ? ((u = this._writeVertex(
                  o,
                  y,
                  _,
                  c,
                  t.x,
                  t.y,
                  L.x,
                  L.y,
                  m.x,
                  m.y,
                  l
                )),
                (h = J))
              : ((u = v
                  ? this._writeVertex(
                      o,
                      y,
                      _,
                      c,
                      t.x,
                      t.y,
                      L.x,
                      L.y,
                      m.x,
                      m.y,
                      l
                    )
                  : a),
                this._writeTriangle(u, at, J),
                (h = J)),
            n)
          ) {
            const N = u;
            (u = h), (h = N);
          }
          break;
        }
      }
    }
  }
}
export { St as c, At as i, Ot as r };
