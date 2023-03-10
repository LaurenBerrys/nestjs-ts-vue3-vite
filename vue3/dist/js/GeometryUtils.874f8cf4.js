var T, p;
(function (t) {
  (t[(t.Unknown = 0)] = "Unknown"),
    (t[(t.Point = 1)] = "Point"),
    (t[(t.LineString = 2)] = "LineString"),
    (t[(t.Polygon = 3)] = "Polygon");
})(T || (T = {}));
class c {
  constructor(s, i) {
    (this.x = s), (this.y = i);
  }
  clone() {
    return new c(this.x, this.y);
  }
  equals(s, i) {
    return s === this.x && i === this.y;
  }
  isEqual(s) {
    return s.x === this.x && s.y === this.y;
  }
  setCoords(s, i) {
    (this.x = s), (this.y = i);
  }
  normalize() {
    const s = this.x,
      i = this.y,
      h = Math.sqrt(s * s + i * i);
    (this.x /= h), (this.y /= h);
  }
  rightPerpendicular() {
    const s = this.x;
    (this.x = this.y), (this.y = -s);
  }
  move(s, i) {
    (this.x += s), (this.y += i);
  }
  assign(s) {
    (this.x = s.x), (this.y = s.y);
  }
  assignAdd(s, i) {
    (this.x = s.x + i.x), (this.y = s.y + i.y);
  }
  assignSub(s, i) {
    (this.x = s.x - i.x), (this.y = s.y - i.y);
  }
  rotate(s, i) {
    const h = this.x,
      _ = this.y;
    (this.x = h * s - _ * i), (this.y = h * i + _ * s);
  }
  scale(s) {
    (this.x *= s), (this.y *= s);
  }
  length() {
    const s = this.x,
      i = this.y;
    return Math.sqrt(s * s + i * i);
  }
  static distance(s, i) {
    const h = i.x - s.x,
      _ = i.y - s.y;
    return Math.sqrt(h * h + _ * _);
  }
  static add(s, i) {
    return new c(s.x + i.x, s.y + i.y);
  }
  static sub(s, i) {
    return new c(s.x - i.x, s.y - i.y);
  }
}
let M = class {
    constructor(t, s, i) {
      (this.ratio = t), (this.x = s), (this.y = i);
    }
  },
  D = class {
    constructor(t, s, i, h = 8, _ = 8) {
      (this._lines = []),
        (this._starts = []),
        (this.validateTessellation = !0),
        (this._pixelRatio = h),
        (this._pixelMargin = _),
        (this._tileSize = 512 * h),
        (this._dz = t),
        (this._yPos = s),
        (this._xPos = i);
    }
    setPixelMargin(t) {
      t !== this._pixelMargin &&
        ((this._pixelMargin = t), this.setExtent(this._extent));
    }
    setExtent(t) {
      (this._extent = t),
        (this._finalRatio = (this._tileSize / t) * (1 << this._dz));
      let s = this._pixelRatio * this._pixelMargin;
      s /= this._finalRatio;
      const i = t >> this._dz;
      s > i && (s = i),
        (this._margin = s),
        (this._xmin = i * this._xPos - s),
        (this._ymin = i * this._yPos - s),
        (this._xmax = this._xmin + i + 2 * s),
        (this._ymax = this._ymin + i + 2 * s);
    }
    reset(t) {
      (this._type = t),
        (this._lines = []),
        (this._starts = []),
        (this._line = null),
        (this._start = 0);
    }
    moveTo(t, s) {
      this._pushLine(),
        (this._prevIsIn = this._isIn(t, s)),
        this._moveTo(t, s, this._prevIsIn),
        (this._prevPt = new c(t, s)),
        (this._firstPt = new c(t, s)),
        (this._dist = 0);
    }
    lineTo(t, s) {
      const i = this._isIn(t, s),
        h = new c(t, s),
        _ = c.distance(this._prevPt, h);
      let l, n, o, e, r, f, g, m;
      if (i)
        this._prevIsIn
          ? this._lineTo(t, s, !0)
          : ((l = this._prevPt),
            (n = h),
            (o = this._intersect(n, l)),
            (this._start = this._dist + _ * (1 - this._r)),
            this._lineTo(o.x, o.y, !0),
            this._lineTo(n.x, n.y, !0));
      else if (this._prevIsIn)
        (n = this._prevPt),
          (l = h),
          (o = this._intersect(n, l)),
          this._lineTo(o.x, o.y, !0),
          this._lineTo(l.x, l.y, !1);
      else {
        const a = this._prevPt,
          x = h;
        if (
          (a.x <= this._xmin && x.x <= this._xmin) ||
          (a.x >= this._xmax && x.x >= this._xmax) ||
          (a.y <= this._ymin && x.y <= this._ymin) ||
          (a.y >= this._ymax && x.y >= this._ymax)
        )
          this._lineTo(x.x, x.y, !1);
        else {
          const y = [];
          if (
            (((a.x < this._xmin && x.x > this._xmin) ||
              (a.x > this._xmin && x.x < this._xmin)) &&
              ((e = (this._xmin - a.x) / (x.x - a.x)),
              (m = a.y + e * (x.y - a.y)),
              m <= this._ymin
                ? (f = !1)
                : m >= this._ymax
                ? (f = !0)
                : y.push(new M(e, this._xmin, m))),
            ((a.x < this._xmax && x.x > this._xmax) ||
              (a.x > this._xmax && x.x < this._xmax)) &&
              ((e = (this._xmax - a.x) / (x.x - a.x)),
              (m = a.y + e * (x.y - a.y)),
              m <= this._ymin
                ? (f = !1)
                : m >= this._ymax
                ? (f = !0)
                : y.push(new M(e, this._xmax, m))),
            ((a.y < this._ymin && x.y > this._ymin) ||
              (a.y > this._ymin && x.y < this._ymin)) &&
              ((e = (this._ymin - a.y) / (x.y - a.y)),
              (g = a.x + e * (x.x - a.x)),
              g <= this._xmin
                ? (r = !1)
                : g >= this._xmax
                ? (r = !0)
                : y.push(new M(e, g, this._ymin))),
            ((a.y < this._ymax && x.y > this._ymax) ||
              (a.y > this._ymax && x.y < this._ymax)) &&
              ((e = (this._ymax - a.y) / (x.y - a.y)),
              (g = a.x + e * (x.x - a.x)),
              g <= this._xmin
                ? (r = !1)
                : g >= this._xmax
                ? (r = !0)
                : y.push(new M(e, g, this._ymax))),
            y.length === 0)
          )
            r
              ? f
                ? this._lineTo(this._xmax, this._ymax, !0)
                : this._lineTo(this._xmax, this._ymin, !0)
              : f
              ? this._lineTo(this._xmin, this._ymax, !0)
              : this._lineTo(this._xmin, this._ymin, !0);
          else if (y.length > 1 && y[0].ratio > y[1].ratio)
            (this._start = this._dist + _ * y[1].ratio),
              this._lineTo(y[1].x, y[1].y, !0),
              this._lineTo(y[0].x, y[0].y, !0);
          else {
            this._start = this._dist + _ * y[0].ratio;
            for (let d = 0; d < y.length; d++) this._lineTo(y[d].x, y[d].y, !0);
          }
          this._lineTo(x.x, x.y, !1);
        }
      }
      (this._dist += _), (this._prevIsIn = i), (this._prevPt = h);
    }
    close() {
      if (this._line.length > 2) {
        const t = this._firstPt,
          s = this._prevPt;
        (t.x === s.x && t.y === s.y) || this.lineTo(t.x, t.y);
        const i = this._line;
        let h = i.length;
        for (
          ;
          h >= 4 &&
          ((i[0].x === i[1].x && i[0].x === i[h - 2].x) ||
            (i[0].y === i[1].y && i[0].y === i[h - 2].y));

        )
          i.pop(), (i[0].x = i[h - 2].x), (i[0].y = i[h - 2].y), --h;
      }
    }
    result(t = !0) {
      return (
        this._pushLine(),
        this._lines.length === 0
          ? null
          : (this._type === T.Polygon &&
              t &&
              P.simplify(
                this._tileSize,
                this._margin * this._finalRatio,
                this._lines
              ),
            this._lines)
      );
    }
    resultWithStarts() {
      if (this._type !== T.LineString) throw new Error("Only valid for lines");
      this._pushLine();
      const t = this._lines,
        s = t.length;
      if (s === 0) return null;
      const i = [];
      for (let h = 0; h < s; h++)
        i.push({ line: t[h], start: this._starts[h] || 0 });
      return i;
    }
    _isIn(t, s) {
      return (
        t >= this._xmin && t <= this._xmax && s >= this._ymin && s <= this._ymax
      );
    }
    _intersect(t, s) {
      let i, h, _;
      if (s.x >= this._xmin && s.x <= this._xmax)
        (h = s.y <= this._ymin ? this._ymin : this._ymax),
          (_ = (h - t.y) / (s.y - t.y)),
          (i = t.x + _ * (s.x - t.x));
      else if (s.y >= this._ymin && s.y <= this._ymax)
        (i = s.x <= this._xmin ? this._xmin : this._xmax),
          (_ = (i - t.x) / (s.x - t.x)),
          (h = t.y + _ * (s.y - t.y));
      else {
        (h = s.y <= this._ymin ? this._ymin : this._ymax),
          (i = s.x <= this._xmin ? this._xmin : this._xmax);
        const l = (i - t.x) / (s.x - t.x),
          n = (h - t.y) / (s.y - t.y);
        l < n
          ? ((_ = l), (h = t.y + l * (s.y - t.y)))
          : ((_ = n), (i = t.x + n * (s.x - t.x)));
      }
      return (this._r = _), new c(i, h);
    }
    _pushLine() {
      this._line &&
        (this._type === T.Point
          ? this._line.length > 0 &&
            (this._lines.push(this._line), this._starts.push(this._start))
          : this._type === T.LineString
          ? this._line.length > 1 &&
            (this._lines.push(this._line), this._starts.push(this._start))
          : this._type === T.Polygon &&
            this._line.length > 3 &&
            (this._lines.push(this._line), this._starts.push(this._start))),
        (this._line = []),
        (this._start = 0);
    }
    _moveTo(t, s, i) {
      this._type !== T.Polygon
        ? i &&
          ((t = Math.round(
            (t - (this._xmin + this._margin)) * this._finalRatio
          )),
          (s = Math.round(
            (s - (this._ymin + this._margin)) * this._finalRatio
          )),
          this._line.push(new c(t, s)))
        : (i ||
            (t < this._xmin && (t = this._xmin),
            t > this._xmax && (t = this._xmax),
            s < this._ymin && (s = this._ymin),
            s > this._ymax && (s = this._ymax)),
          (t = Math.round(
            (t - (this._xmin + this._margin)) * this._finalRatio
          )),
          (s = Math.round(
            (s - (this._ymin + this._margin)) * this._finalRatio
          )),
          this._line.push(new c(t, s)),
          (this._isH = !1),
          (this._isV = !1));
    }
    _lineTo(t, s, i) {
      let h, _;
      if (this._type !== T.Polygon)
        if (i) {
          if (
            ((t = Math.round(
              (t - (this._xmin + this._margin)) * this._finalRatio
            )),
            (s = Math.round(
              (s - (this._ymin + this._margin)) * this._finalRatio
            )),
            this._line.length > 0 &&
              ((h = this._line[this._line.length - 1]), h.equals(t, s)))
          )
            return;
          this._line.push(new c(t, s));
        } else this._line && this._line.length > 0 && this._pushLine();
      else if (
        (i ||
          (t < this._xmin && (t = this._xmin),
          t > this._xmax && (t = this._xmax),
          s < this._ymin && (s = this._ymin),
          s > this._ymax && (s = this._ymax)),
        (t = Math.round((t - (this._xmin + this._margin)) * this._finalRatio)),
        (s = Math.round((s - (this._ymin + this._margin)) * this._finalRatio)),
        this._line && this._line.length > 0)
      ) {
        h = this._line[this._line.length - 1];
        const l = h.x === t,
          n = h.y === s;
        if (l && n) return;
        (this._isH && l) || (this._isV && n)
          ? ((h.x = t),
            (h.y = s),
            (_ = this._line[this._line.length - 2]),
            _.x === t && _.y === s
              ? (this._line.pop(),
                this._line.length <= 1
                  ? ((this._isH = !1), (this._isV = !1))
                  : ((_ = this._line[this._line.length - 2]),
                    (this._isH = _.x === t),
                    (this._isV = _.y === s)))
              : ((this._isH = _.x === t), (this._isV = _.y === s)))
          : (this._line.push(new c(t, s)), (this._isH = l), (this._isV = n));
      } else this._line.push(new c(t, s));
    }
  };
class q {
  setExtent(s) {
    this._ratio = s === 4096 ? 1 : 4096 / s;
  }
  get validateTessellation() {
    return this._ratio < 1;
  }
  reset(s) {
    (this._lines = []), (this._line = null);
  }
  moveTo(s, i) {
    this._line && this._lines.push(this._line), (this._line = []);
    const h = this._ratio;
    this._line.push(new c(s * h, i * h));
  }
  lineTo(s, i) {
    const h = this._ratio;
    this._line.push(new c(s * h, i * h));
  }
  close() {
    const s = this._line;
    s && !s[0].isEqual(s[s.length - 1]) && s.push(s[0]);
  }
  result() {
    return (
      this._line && this._lines.push(this._line),
      this._lines.length === 0 ? null : this._lines
    );
  }
}
(function (t) {
  (t[(t.sideLeft = 0)] = "sideLeft"),
    (t[(t.sideRight = 1)] = "sideRight"),
    (t[(t.sideTop = 2)] = "sideTop"),
    (t[(t.sideBottom = 3)] = "sideBottom");
})(p || (p = {}));
class P {
  static simplify(s, i, h) {
    if (!h) return;
    const _ = -i,
      l = s + i,
      n = -i,
      o = s + i,
      e = [],
      r = [],
      f = h.length;
    for (let m = 0; m < f; ++m) {
      const a = h[m];
      if (!a || a.length < 2) continue;
      let x,
        y = a[0];
      const d = a.length;
      for (let u = 1; u < d; ++u)
        (x = a[u]),
          y.x === x.x &&
            (y.x <= _ &&
              (y.y > x.y
                ? (e.push(m), e.push(u), e.push(p.sideLeft), e.push(-1))
                : (r.push(m), r.push(u), r.push(p.sideLeft), r.push(-1))),
            y.x >= l &&
              (y.y < x.y
                ? (e.push(m), e.push(u), e.push(p.sideRight), e.push(-1))
                : (r.push(m), r.push(u), r.push(p.sideRight), r.push(-1)))),
          y.y === x.y &&
            (y.y <= n &&
              (y.x < x.x
                ? (e.push(m), e.push(u), e.push(p.sideTop), e.push(-1))
                : (r.push(m), r.push(u), r.push(p.sideTop), r.push(-1))),
            y.y >= o &&
              (y.x > x.x
                ? (e.push(m), e.push(u), e.push(p.sideBottom), e.push(-1))
                : (r.push(m), r.push(u), r.push(p.sideBottom), r.push(-1)))),
          (y = x);
    }
    if (e.length === 0 || r.length === 0) return;
    P.fillParent(h, r, e), P.fillParent(h, e, r);
    const g = [];
    P.calcDeltas(g, r, e), P.calcDeltas(g, e, r), P.addDeltas(g, h);
  }
  static fillParent(s, i, h) {
    const _ = h.length,
      l = i.length;
    for (let n = 0; n < l; n += 4) {
      const o = i[n],
        e = i[n + 1],
        r = i[n + 2],
        f = s[o][e - 1],
        g = s[o][e];
      let m = 8092,
        a = -1;
      for (let x = 0; x < _; x += 4) {
        if (h[x + 2] !== r) continue;
        const y = h[x],
          d = h[x + 1],
          u = s[y][d - 1],
          w = s[y][d];
        switch (r) {
          case p.sideLeft:
          case p.sideRight:
            if (I(f.y, u.y, w.y) && I(g.y, u.y, w.y)) {
              const v = Math.abs(w.y - u.y);
              v < m && ((m = v), (a = x));
            }
            break;
          case p.sideTop:
          case p.sideBottom:
            if (I(f.x, u.x, w.x) && I(g.x, u.x, w.x)) {
              const v = Math.abs(w.x - u.x);
              v < m && ((m = v), (a = x));
            }
        }
      }
      i[n + 3] = a;
    }
  }
  static calcDeltas(s, i, h) {
    const _ = i.length;
    for (let l = 0; l < _; l += 4) {
      const n = [],
        o = P.calcDelta(l, i, h, n);
      s.push(i[l]), s.push(i[l + 1]), s.push(i[l + 2]), s.push(o);
    }
  }
  static calcDelta(s, i, h, _) {
    const l = i[s + 3];
    if (l === -1) return 0;
    const n = _.length;
    return n > 1 && _[n - 2] === l
      ? 0
      : (_.push(l), P.calcDelta(l, h, i, _) + 1);
  }
  static addDeltas(s, i) {
    const h = s.length;
    let _ = 0;
    for (let l = 0; l < h; l += 4) {
      const n = s[l + 3];
      n > _ && (_ = n);
    }
    for (let l = 0; l < h; l += 4) {
      const n = i[s[l]],
        o = s[l + 1],
        e = _ - s[l + 3];
      switch (s[l + 2]) {
        case p.sideLeft:
          (n[o - 1].x -= e),
            (n[o].x -= e),
            o === 1 && (n[n.length - 1].x -= e),
            o === n.length - 1 && (n[0].x -= e);
          break;
        case p.sideRight:
          (n[o - 1].x += e),
            (n[o].x += e),
            o === 1 && (n[n.length - 1].x += e),
            o === n.length - 1 && (n[0].x += e);
          break;
        case p.sideTop:
          (n[o - 1].y -= e),
            (n[o].y -= e),
            o === 1 && (n[n.length - 1].y -= e),
            o === n.length - 1 && (n[0].y -= e);
          break;
        case p.sideBottom:
          (n[o - 1].y += e),
            (n[o].y += e),
            o === 1 && (n[n.length - 1].y += e),
            o === n.length - 1 && (n[0].y += e);
      }
    }
  }
}
const I = (t, s, i) => (t >= s && t <= i) || (t >= i && t <= s),
  z = Number.POSITIVE_INFINITY,
  R = Math.PI,
  E = 2 * R,
  L = 128 / R,
  V = R / 180,
  b = 1 / Math.LN2;
function S(t, s) {
  return (t %= s) >= 0 ? t : t + s;
}
function k(t) {
  return S(t * L, 256);
}
function B(t) {
  return Math.log(t) * b;
}
function H(t, s, i) {
  return t * (1 - i) + s * i;
}
export {
  B as N,
  q as _,
  c as a,
  V as b,
  R as c,
  D as e,
  S as f,
  H as h,
  k as i,
  z as n,
  E as r,
  T as t,
};
