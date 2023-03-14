var W =
    typeof global == "object" && global && global.Object === Object && global,
  A = typeof self == "object" && self && self.Object === Object && self,
  E = W || A || Function("return this")(),
  y = E.Symbol,
  M = Object.prototype,
  D = M.hasOwnProperty,
  F = M.toString,
  b = y ? y.toStringTag : void 0,
  I = Object.prototype.toString,
  P = "[object Null]",
  U = "[object Undefined]",
  w = y ? y.toStringTag : void 0;
function k(r) {
  return r == null
    ? r === void 0
      ? U
      : P
    : w && w in Object(r)
    ? (function (e) {
        var n = D.call(e, b),
          u = e[b];
        try {
          e[b] = void 0;
          var a = !0;
        } catch {}
        var l = F.call(e);
        return a && (n ? (e[b] = u) : delete e[b]), l;
      })(r)
    : (function (e) {
        return I.call(e);
      })(r);
}
function q(r) {
  return r != null && typeof r == "object";
}
var z = "[object Symbol]";
function B(r) {
  return typeof r == "symbol" || (q(r) && k(r) == z);
}
var C = /\s/,
  G = /^\s+/;
function H(r) {
  return (
    r &&
    r
      .slice(
        0,
        (function (e) {
          for (var n = e.length; n-- && C.test(e.charAt(n)); );
          return n;
        })(r) + 1
      )
      .replace(G, "")
  );
}
function O(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var N = NaN,
  J = /^[-+]0x[0-9a-f]+$/i,
  K = /^0b[01]+$/i,
  L = /^0o[0-7]+$/i,
  Q = parseInt;
function $(r) {
  if (typeof r == "number") return r;
  if (B(r)) return N;
  if (O(r)) {
    var e = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = O(e) ? e + "" : e;
  }
  if (typeof r != "string") return r === 0 ? r : +r;
  r = H(r);
  var n = K.test(r);
  return n || L.test(r) ? Q(r.slice(2), n ? 2 : 8) : J.test(r) ? N : +r;
}
var h = function () {
    return E.Date.now();
  },
  R = "Expected a function",
  V = Math.max,
  X = Math.min;
function Y(r, e, n) {
  var u,
    a,
    l,
    v,
    o,
    c,
    s = 0,
    T = !1,
    p = !1,
    g = !0;
  if (typeof r != "function") throw new TypeError(R);
  function m(t) {
    var i = u,
      f = a;
    return (u = a = void 0), (s = t), (v = r.apply(f, i));
  }
  function S(t) {
    var i = t - c;
    return c === void 0 || i >= e || i < 0 || (p && t - s >= l);
  }
  function d() {
    var t = h();
    if (S(t)) return x(t);
    o = setTimeout(
      d,
      (function (i) {
        var f = e - (i - c);
        return p ? X(f, l - (i - s)) : f;
      })(t)
    );
  }
  function x(t) {
    return (o = void 0), g && u ? m(t) : ((u = a = void 0), v);
  }
  function j() {
    var t = h(),
      i = S(t);
    if (((u = arguments), (a = this), (c = t), i)) {
      if (o === void 0)
        return (function (f) {
          return (s = f), (o = setTimeout(d, e)), T ? m(f) : v;
        })(c);
      if (p) return clearTimeout(o), (o = setTimeout(d, e)), m(c);
    }
    return o === void 0 && (o = setTimeout(d, e)), v;
  }
  return (
    (e = $(e) || 0),
    O(n) &&
      ((T = !!n.leading),
      (l = (p = "maxWait" in n) ? V($(n.maxWait) || 0, e) : l),
      (g = "trailing" in n ? !!n.trailing : g)),
    (j.cancel = function () {
      o !== void 0 && clearTimeout(o), (s = 0), (u = c = a = o = void 0);
    }),
    (j.flush = function () {
      return o === void 0 ? v : x(h());
    }),
    j
  );
}
export { y as S, B as a, k as b, O as c, Y as d, W as f, q as i, E as r };
