var I,
  J,
  K,
  L = {},
  _ = {
    get exports() {
      return L;
    },
    set exports(g) {
      L = g;
    },
  };
(I = _),
  (J = function () {
    function g(t, n, x) {
      x = x || 2;
      var e,
        r,
        u,
        i,
        v,
        o,
        f,
        l = n && n.length,
        h = l ? n[0] * x : t.length,
        a = D(t, 0, h, x, !0),
        y = [];
      if (!a || a.next === a.prev) return y;
      if ((l && (a = R(t, n, a, x)), t.length > 80 * x)) {
        (e = u = t[0]), (r = i = t[1]);
        for (var p = x; p < h; p += x)
          (v = t[p]) < e && (e = v),
            (o = t[p + 1]) < r && (r = o),
            v > u && (u = v),
            o > i && (i = o);
        f = (f = Math.max(u - e, i - r)) !== 0 ? 1 / f : 0;
      }
      return d(a, y, x, e, r, f), y;
    }
    function D(t, n, x, e, r) {
      var u, i;
      if (r === A(t, n, x, e) > 0)
        for (u = n; u < x; u += e) i = G(u, t[u], t[u + 1], i);
      else for (u = x - e; u >= n; u -= e) i = G(u, t[u], t[u + 1], i);
      if (i && z(i, i.next)) {
        var v = i.next;
        M(i), (i = v);
      }
      return i;
    }
    function Z(t, n) {
      if (!t) return t;
      n || (n = t);
      var x,
        e = t;
      do
        if (
          ((x = !1), e.steiner || (!z(e, e.next) && c(e.prev, e, e.next) !== 0))
        )
          e = e.next;
        else {
          var r = e.prev;
          if ((M(e), (e = n = r) === e.next)) break;
          x = !0;
        }
      while (x || e !== n);
      return n;
    }
    function d(t, n, x, e, r, u, i) {
      if (t) {
        !i && u && V(t, e, r, u);
        for (var v, o, f = t; t.prev !== t.next; )
          if (((v = t.prev), (o = t.next), u ? O(t, e, r, u) : N(t)))
            n.push(v.i / x),
              n.push(t.i / x),
              n.push(o.i / x),
              M(t),
              (t = o.next),
              (f = o.next);
          else if ((t = o) === f) {
            i
              ? i === 1
                ? d((t = P(Z(t), n, x)), n, x, e, r, u, 2)
                : i === 2 && Q(t, n, x, e, r, u)
              : d(Z(t), n, x, e, r, u, 1);
            break;
          }
      }
    }
    function N(t) {
      var n = t.prev,
        x = t,
        e = t.next;
      if (c(n, x, e) >= 0) return !1;
      for (var r = t.next.next; r !== t.prev; ) {
        if (
          s(n.x, n.y, x.x, x.y, e.x, e.y, r.x, r.y) &&
          c(r.prev, r, r.next) >= 0
        )
          return !1;
        r = r.next;
      }
      return !0;
    }
    function O(t, n, x, e) {
      var r = t.prev,
        u = t,
        i = t.next;
      if (c(r, u, i) >= 0) return !1;
      for (
        var v = r.x < u.x ? (r.x < i.x ? r.x : i.x) : u.x < i.x ? u.x : i.x,
          o = r.y < u.y ? (r.y < i.y ? r.y : i.y) : u.y < i.y ? u.y : i.y,
          f = r.x > u.x ? (r.x > i.x ? r.x : i.x) : u.x > i.x ? u.x : i.x,
          l = r.y > u.y ? (r.y > i.y ? r.y : i.y) : u.y > i.y ? u.y : i.y,
          h = j(v, o, n, x, e),
          a = j(f, l, n, x, e),
          y = t.prevZ,
          p = t.nextZ;
        y && y.z >= h && p && p.z <= a;

      ) {
        if (
          (y !== t.prev &&
            y !== t.next &&
            s(r.x, r.y, u.x, u.y, i.x, i.y, y.x, y.y) &&
            c(y.prev, y, y.next) >= 0) ||
          ((y = y.prevZ),
          p !== t.prev &&
            p !== t.next &&
            s(r.x, r.y, u.x, u.y, i.x, i.y, p.x, p.y) &&
            c(p.prev, p, p.next) >= 0)
        )
          return !1;
        p = p.nextZ;
      }
      for (; y && y.z >= h; ) {
        if (
          y !== t.prev &&
          y !== t.next &&
          s(r.x, r.y, u.x, u.y, i.x, i.y, y.x, y.y) &&
          c(y.prev, y, y.next) >= 0
        )
          return !1;
        y = y.prevZ;
      }
      for (; p && p.z <= a; ) {
        if (
          p !== t.prev &&
          p !== t.next &&
          s(r.x, r.y, u.x, u.y, i.x, i.y, p.x, p.y) &&
          c(p.prev, p, p.next) >= 0
        )
          return !1;
        p = p.nextZ;
      }
      return !0;
    }
    function P(t, n, x) {
      var e = t;
      do {
        var r = e.prev,
          u = e.next.next;
        !z(r, u) &&
          E(r, e, e.next, u) &&
          w(r, u) &&
          w(u, r) &&
          (n.push(r.i / x),
          n.push(e.i / x),
          n.push(u.i / x),
          M(e),
          M(e.next),
          (e = t = u)),
          (e = e.next);
      } while (e !== t);
      return Z(e);
    }
    function Q(t, n, x, e, r, u) {
      var i = t;
      do {
        for (var v = i.next.next; v !== i.prev; ) {
          if (i.i !== v.i && X(i, v)) {
            var o = F(i, v);
            return (
              (i = Z(i, i.next)),
              (o = Z(o, o.next)),
              d(i, n, x, e, r, u),
              void d(o, n, x, e, r, u)
            );
          }
          v = v.next;
        }
        i = i.next;
      } while (i !== t);
    }
    function R(t, n, x, e) {
      var r,
        u,
        i,
        v = [];
      for (r = 0, u = n.length; r < u; r++)
        (i = D(t, n[r] * e, r < u - 1 ? n[r + 1] * e : t.length, e, !1)) ===
          i.next && (i.steiner = !0),
          v.push(W(i));
      for (v.sort(S), r = 0; r < v.length; r++) x = Z((x = T(v[r], x)), x.next);
      return x;
    }
    function S(t, n) {
      return t.x - n.x;
    }
    function k(t) {
      if (t.next.prev === t) return t;
      let n = t;
      for (;;) {
        const x = n.next;
        if (x.prev === n || x === n || x === t) break;
        n = x;
      }
      return n;
    }
    function T(t, n) {
      var x = (function (i, v) {
        var o,
          f = v,
          l = i.x,
          h = i.y,
          a = -1 / 0;
        do {
          if (h <= f.y && h >= f.next.y && f.next.y !== f.y) {
            var y = f.x + ((h - f.y) * (f.next.x - f.x)) / (f.next.y - f.y);
            if (y <= l && y > a) {
              if (((a = y), y === l)) {
                if (h === f.y) return f;
                if (h === f.next.y) return f.next;
              }
              o = f.x < f.next.x ? f : f.next;
            }
          }
          f = f.next;
        } while (f !== v);
        if (!o) return null;
        if (l === a) return o;
        var p,
          Y = o,
          H = o.x,
          B = o.y,
          C = 1 / 0;
        f = o;
        do
          l >= f.x &&
            f.x >= H &&
            l !== f.x &&
            s(h < B ? l : a, h, H, B, h < B ? a : l, h, f.x, f.y) &&
            ((p = Math.abs(h - f.y) / (l - f.x)),
            w(f, i) &&
              (p < C || (p === C && (f.x > o.x || (f.x === o.x && U(o, f))))) &&
              ((o = f), (C = p))),
            (f = f.next);
        while (f !== Y);
        return o;
      })(t, n);
      if (!x) return n;
      var e = F(x, t),
        r = Z(x, x.next);
      let u = k(e);
      return Z(u, u.next), (r = k(r)), k(n === x ? r : n);
    }
    function U(t, n) {
      return c(t.prev, t, n.prev) < 0 && c(n.next, t, t.next) < 0;
    }
    function V(t, n, x, e) {
      var r = t;
      do
        r.z === null && (r.z = j(r.x, r.y, n, x, e)),
          (r.prevZ = r.prev),
          (r.nextZ = r.next),
          (r = r.next);
      while (r !== t);
      (r.prevZ.nextZ = null),
        (r.prevZ = null),
        (function (u) {
          var i,
            v,
            o,
            f,
            l,
            h,
            a,
            y,
            p = 1;
          do {
            for (v = u, u = null, l = null, h = 0; v; ) {
              for (
                h++, o = v, a = 0, i = 0;
                i < p && (a++, (o = o.nextZ));
                i++
              );
              for (y = p; a > 0 || (y > 0 && o); )
                a !== 0 && (y === 0 || !o || v.z <= o.z)
                  ? ((f = v), (v = v.nextZ), a--)
                  : ((f = o), (o = o.nextZ), y--),
                  l ? (l.nextZ = f) : (u = f),
                  (f.prevZ = l),
                  (l = f);
              v = o;
            }
            (l.nextZ = null), (p *= 2);
          } while (h > 1);
        })(r);
    }
    function j(t, n, x, e, r) {
      return (
        (t =
          1431655765 &
          ((t =
            858993459 &
            ((t =
              252645135 &
              ((t = 16711935 & ((t = 32767 * (t - x) * r) | (t << 8))) |
                (t << 4))) |
              (t << 2))) |
            (t << 1))) |
        ((n =
          1431655765 &
          ((n =
            858993459 &
            ((n =
              252645135 &
              ((n = 16711935 & ((n = 32767 * (n - e) * r) | (n << 8))) |
                (n << 4))) |
              (n << 2))) |
            (n << 1))) <<
          1)
      );
    }
    function W(t) {
      var n = t,
        x = t;
      do (n.x < x.x || (n.x === x.x && n.y < x.y)) && (x = n), (n = n.next);
      while (n !== t);
      return x;
    }
    function s(t, n, x, e, r, u, i, v) {
      return (
        (r - i) * (n - v) - (t - i) * (u - v) >= 0 &&
        (t - i) * (e - v) - (x - i) * (n - v) >= 0 &&
        (x - i) * (u - v) - (r - i) * (e - v) >= 0
      );
    }
    function X(t, n) {
      return (
        t.next.i !== n.i &&
        t.prev.i !== n.i &&
        !(function (x, e) {
          var r = x;
          do {
            if (
              r.i !== x.i &&
              r.next.i !== x.i &&
              r.i !== e.i &&
              r.next.i !== e.i &&
              E(r, r.next, x, e)
            )
              return !0;
            r = r.next;
          } while (r !== x);
          return !1;
        })(t, n) &&
        ((w(t, n) &&
          w(n, t) &&
          (function (x, e) {
            var r = x,
              u = !1,
              i = (x.x + e.x) / 2,
              v = (x.y + e.y) / 2;
            do
              r.y > v != r.next.y > v &&
                r.next.y !== r.y &&
                i < ((r.next.x - r.x) * (v - r.y)) / (r.next.y - r.y) + r.x &&
                (u = !u),
                (r = r.next);
            while (r !== x);
            return u;
          })(t, n) &&
          (c(t.prev, t, n.prev) || c(t, n.prev, n))) ||
          (z(t, n) && c(t.prev, t, t.next) > 0 && c(n.prev, n, n.next) > 0))
      );
    }
    function c(t, n, x) {
      return (n.y - t.y) * (x.x - n.x) - (n.x - t.x) * (x.y - n.y);
    }
    function z(t, n) {
      return t.x === n.x && t.y === n.y;
    }
    function E(t, n, x, e) {
      var r = m(c(t, n, x)),
        u = m(c(t, n, e)),
        i = m(c(x, e, t)),
        v = m(c(x, e, n));
      return (
        (r !== u && i !== v) ||
        !(r !== 0 || !b(t, x, n)) ||
        !(u !== 0 || !b(t, e, n)) ||
        !(i !== 0 || !b(x, t, e)) ||
        !(v !== 0 || !b(x, n, e))
      );
    }
    function b(t, n, x) {
      return (
        n.x <= Math.max(t.x, x.x) &&
        n.x >= Math.min(t.x, x.x) &&
        n.y <= Math.max(t.y, x.y) &&
        n.y >= Math.min(t.y, x.y)
      );
    }
    function m(t) {
      return t > 0 ? 1 : t < 0 ? -1 : 0;
    }
    function w(t, n) {
      return c(t.prev, t, t.next) < 0
        ? c(t, n, t.next) >= 0 && c(t, t.prev, n) >= 0
        : c(t, n, t.prev) < 0 || c(t, t.next, n) < 0;
    }
    function F(t, n) {
      var x = new q(t.i, t.x, t.y),
        e = new q(n.i, n.x, n.y),
        r = t.next,
        u = n.prev;
      return (
        (t.next = n),
        (n.prev = t),
        (x.next = r),
        (r.prev = x),
        (e.next = x),
        (x.prev = e),
        (u.next = e),
        (e.prev = u),
        e
      );
    }
    function G(t, n, x, e) {
      var r = new q(t, n, x);
      return (
        e
          ? ((r.next = e.next), (r.prev = e), (e.next.prev = r), (e.next = r))
          : ((r.prev = r), (r.next = r)),
        r
      );
    }
    function M(t) {
      (t.next.prev = t.prev),
        (t.prev.next = t.next),
        t.prevZ && (t.prevZ.nextZ = t.nextZ),
        t.nextZ && (t.nextZ.prevZ = t.prevZ);
    }
    function q(t, n, x) {
      (this.i = t),
        (this.x = n),
        (this.y = x),
        (this.prev = null),
        (this.next = null),
        (this.z = null),
        (this.prevZ = null),
        (this.nextZ = null),
        (this.steiner = !1);
    }
    function A(t, n, x, e) {
      for (var r = 0, u = n, i = x - e; u < x; u += e)
        (r += (t[i] - t[u]) * (t[u + 1] + t[i + 1])), (i = u);
      return r;
    }
    return (
      (g.deviation = function (t, n, x, e) {
        var r = n && n.length,
          u = r ? n[0] * x : t.length,
          i = Math.abs(A(t, 0, u, x));
        if (r)
          for (var v = 0, o = n.length; v < o; v++) {
            var f = n[v] * x,
              l = v < o - 1 ? n[v + 1] * x : t.length;
            i -= Math.abs(A(t, f, l, x));
          }
        var h = 0;
        for (v = 0; v < e.length; v += 3) {
          var a = e[v] * x,
            y = e[v + 1] * x,
            p = e[v + 2] * x;
          h += Math.abs(
            (t[a] - t[p]) * (t[y + 1] - t[a + 1]) -
              (t[a] - t[y]) * (t[p + 1] - t[a + 1])
          );
        }
        return i === 0 && h === 0 ? 0 : Math.abs((h - i) / i);
      }),
      (g.flatten = function (t) {
        for (
          var n = t[0][0].length,
            x = { vertices: [], holes: [], dimensions: n },
            e = 0,
            r = 0;
          r < t.length;
          r++
        ) {
          for (var u = 0; u < t[r].length; u++)
            for (var i = 0; i < n; i++) x.vertices.push(t[r][u][i]);
          r > 0 && ((e += t[r - 1].length), x.holes.push(e));
        }
        return x;
      }),
      g
    );
  }),
  (K = J()) !== void 0 && (I.exports = K);
export { L as r };
