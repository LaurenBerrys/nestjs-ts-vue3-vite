import {
  T as N,
  t as X,
  bm as j,
  cf as q,
  cg as w,
  bJ as G,
  bK as H,
  bH as K,
  bq as R,
  bG as J,
  bC as z,
  ch as B,
  ci as D,
  cj as d,
} from "./index.8fd7165c.js";
function W(t) {
  return V(t, !0);
}
function Y(t) {
  return V(t, !1);
}
function V(t, s) {
  if (X(t)) return null;
  const n = t.spatialReference,
    i = j(n),
    e = "toJSON" in t ? t.toJSON() : t;
  if (!i) return e;
  const h = q(n) ? 102100 : 4326,
    u = w[h].maxX,
    o = w[h].minX;
  if (G(e)) return L(e, u, o);
  if (H(e)) return (e.points = e.points.map((x) => L(x, u, o))), e;
  if (K(e)) return E(e, i);
  if (R(e) || J(e)) {
    const x = z(F, e),
      r = { xmin: x[0], ymin: x[1], xmax: x[2], ymax: x[3] },
      _ = d(r.xmin, o) * (2 * u),
      m = _ === 0 ? e : B(e, _);
    return (
      (r.xmin += _),
      (r.xmax += _),
      r.xmax > u ? k(m, u, s) : r.xmin < o ? k(m, o, s) : m
    );
  }
  return e;
}
function E(t, s) {
  if (!s) return t;
  const n = (function (i, e) {
    const h = [],
      { ymin: u, ymax: o, xmin: x, xmax: r } = i,
      _ = i.xmax - i.xmin,
      [m, y] = e.valid,
      { x: a, frameId: c } = M(i.xmin, e),
      { x: p, frameId: f } = M(i.xmax, e),
      A = a === p && _ > 0;
    if (_ > 2 * y) {
      const C = { xmin: x < r ? a : p, ymin: u, xmax: y, ymax: o },
        T = { xmin: m, ymin: u, xmax: x < r ? p : a, ymax: o },
        S = { xmin: 0, ymin: u, xmax: y, ymax: o },
        b = { xmin: m, ymin: u, xmax: 0, ymax: o },
        I = [],
        g = [];
      O(C, S) && I.push(c),
        O(C, b) && g.push(c),
        O(T, S) && I.push(f),
        O(T, b) && g.push(f);
      for (let v = c + 1; v < f; v++) I.push(v), g.push(v);
      h.push(new l(C, [c]), new l(T, [f]), new l(S, I), new l(b, g));
    } else
      a > p || A
        ? h.push(
            new l({ xmin: a, ymin: u, xmax: y, ymax: o }, [c]),
            new l({ xmin: m, ymin: u, xmax: p, ymax: o }, [f])
          )
        : h.push(new l({ xmin: a, ymin: u, xmax: p, ymax: o }, [c]));
    return h;
  })(t, s).map((i) => i.extent);
  return n.length < 2
    ? n[0] || t
    : n.length > 2
    ? ((t.xmin = s.valid[0]), (t.xmax = s.valid[1]), t)
    : {
        rings: n.map((i) => [
          [i.xmin, i.ymin],
          [i.xmin, i.ymax],
          [i.xmax, i.ymax],
          [i.xmax, i.ymin],
          [i.xmin, i.ymin],
        ]),
      };
}
function L(t, s, n) {
  if (Array.isArray(t)) {
    const i = t[0];
    if (i > s) {
      const e = d(i, s);
      t[0] = i + e * (-2 * s);
    } else if (i < n) {
      const e = d(i, n);
      t[0] = i + e * (-2 * n);
    }
  } else {
    const i = t.x;
    if (i > s) {
      const e = d(i, s);
      t.x += e * (-2 * s);
    } else if (i < n) {
      const e = d(i, n);
      t.x += e * (-2 * n);
    }
  }
  return t;
}
function M(t, s) {
  const [n, i] = s.valid,
    e = 2 * i;
  let h,
    u = 0;
  return (
    t > i
      ? ((h = Math.ceil(Math.abs(t - i) / e)), (t -= h * e), (u = h))
      : t < n && ((h = Math.ceil(Math.abs(t - n) / e)), (t += h * e), (u = -h)),
    { x: t, frameId: u }
  );
}
function O(t, s) {
  const { xmin: n, ymin: i, xmax: e, ymax: h } = s;
  return P(t, n, i) && P(t, n, h) && P(t, e, h) && P(t, e, i);
}
function P(t, s, n) {
  return s >= t.xmin && s <= t.xmax && n >= t.ymin && n <= t.ymax;
}
function k(t, s, n = !0) {
  const i = !J(t);
  if ((i && D(t), n)) return new Q().cut(t, s);
  const e = i ? t.rings : t.paths,
    h = i ? 4 : 2,
    u = e.length,
    o = -2 * s;
  for (let x = 0; x < u; x++) {
    const r = e[x];
    if (r && r.length >= h) {
      const _ = [];
      for (const m of r) _.push([m[0] + o, m[1]]);
      e.push(_);
    }
  }
  return i ? (t.rings = e) : (t.paths = e), t;
}
class l {
  constructor(s, n) {
    (this.extent = s), (this.frameIds = n);
  }
}
const F = N();
class Q {
  constructor() {
    (this._linesIn = []), (this._linesOut = []);
  }
  cut(s, n) {
    let i;
    if (((this._xCut = n), s.rings))
      (this._closed = !0), (i = s.rings), (this._minPts = 4);
    else {
      if (!s.paths) return null;
      (this._closed = !1), (i = s.paths), (this._minPts = 2);
    }
    for (const h of i) {
      if (!h || h.length < this._minPts) continue;
      let u = !0;
      for (const o of h) u ? (this.moveTo(o), (u = !1)) : this.lineTo(o);
      this._closed && this.close();
    }
    this._pushLineIn(), this._pushLineOut(), (i = []);
    for (const h of this._linesIn) h && h.length >= this._minPts && i.push(h);
    const e = -2 * this._xCut;
    for (const h of this._linesOut)
      if (h && h.length >= this._minPts) {
        for (const u of h) u[0] += e;
        i.push(h);
      }
    return this._closed ? (s.rings = i) : (s.paths = i), s;
  }
  moveTo(s) {
    this._pushLineIn(),
      this._pushLineOut(),
      (this._prevSide = this._side(s[0])),
      this._moveTo(s[0], s[1], this._prevSide),
      (this._prevPt = s),
      (this._firstPt = s);
  }
  lineTo(s) {
    const n = this._side(s[0]);
    if (n * this._prevSide == -1) {
      const i = this._intersect(this._prevPt, s);
      this._lineTo(this._xCut, i, 0),
        (this._prevSide = 0),
        this._lineTo(s[0], s[1], n);
    } else this._lineTo(s[0], s[1], n);
    (this._prevSide = n), (this._prevPt = s);
  }
  close() {
    const s = this._firstPt,
      n = this._prevPt;
    (s[0] === n[0] && s[1] === n[1]) || this.lineTo(s),
      this._checkClosingPt(this._lineIn),
      this._checkClosingPt(this._lineOut);
  }
  _moveTo(s, n, i) {
    this._closed
      ? (this._lineIn.push([i <= 0 ? s : this._xCut, n]),
        this._lineOut.push([i >= 0 ? s : this._xCut, n]))
      : (i <= 0 && this._lineIn.push([s, n]),
        i >= 0 && this._lineOut.push([s, n]));
  }
  _lineTo(s, n, i) {
    this._closed
      ? (this._addPolyVertex(this._lineIn, i <= 0 ? s : this._xCut, n),
        this._addPolyVertex(this._lineOut, i >= 0 ? s : this._xCut, n))
      : i < 0
      ? (this._prevSide === 0 && this._pushLineOut(), this._lineIn.push([s, n]))
      : i > 0
      ? (this._prevSide === 0 && this._pushLineIn(), this._lineOut.push([s, n]))
      : this._prevSide < 0
      ? (this._lineIn.push([s, n]), this._lineOut.push([s, n]))
      : this._prevSide > 0 &&
        (this._lineOut.push([s, n]), this._lineIn.push([s, n]));
  }
  _addPolyVertex(s, n, i) {
    const e = s.length;
    e > 1 && s[e - 1][0] === n && s[e - 2][0] === n
      ? (s[e - 1][1] = i)
      : s.push([n, i]);
  }
  _checkClosingPt(s) {
    const n = s.length;
    n > 3 &&
      s[0][0] === this._xCut &&
      s[n - 2][0] === this._xCut &&
      s[1][0] === this._xCut &&
      ((s[0][1] = s[n - 2][1]), s.pop());
  }
  _side(s) {
    return s < this._xCut ? -1 : s > this._xCut ? 1 : 0;
  }
  _intersect(s, n) {
    const i = (this._xCut - s[0]) / (n[0] - s[0]);
    return s[1] + i * (n[1] - s[1]);
  }
  _pushLineIn() {
    this._lineIn &&
      this._lineIn.length >= this._minPts &&
      this._linesIn.push(this._lineIn),
      (this._lineIn = []);
  }
  _pushLineOut() {
    this._lineOut &&
      this._lineOut.length >= this._minPts &&
      this._linesOut.push(this._lineOut),
      (this._lineOut = []);
  }
}
export { W as a, Y as p };
