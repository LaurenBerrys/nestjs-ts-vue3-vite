import {
  h as Ot,
  g as ve,
  e as ln,
  i as on,
  o as sn,
  b as cn,
  s as un,
  a as se,
  c as ce,
  f as fn,
  w as Fe,
  F as mn,
  j as _n,
  k as pn,
  T as gn,
} from "./vue.a7ce1fbe.js";
const Re = typeof window < "u",
  dn = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
  _e = (e) => (dn ? Symbol(e) : e),
  En = (e, n, t) => bn({ l: e, k: n, s: t }),
  bn = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029")
      .replace(/\u0027/g, "\\u0027"),
  J = (e) => typeof e == "number" && isFinite(e),
  Ln = (e) => He(e) === "[object Date]",
  me = (e) => He(e) === "[object RegExp]",
  Te = (e) => F(e) && Object.keys(e).length === 0;
function vn(e, n) {}
const te = Object.assign;
let Ke;
const be = () =>
  Ke ||
  (Ke =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function ze(e) {
  return e
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
const kn = Object.prototype.hasOwnProperty;
function Ve(e, n) {
  return kn.call(e, n);
}
const j = Array.isArray,
  K = (e) => typeof e == "function",
  T = (e) => typeof e == "string",
  w = (e) => typeof e == "boolean",
  Y = (e) => e !== null && typeof e == "object",
  At = Object.prototype.toString,
  He = (e) => At.call(e),
  F = (e) => He(e) === "[object Object]",
  U = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    __EXTEND_POINT__: 15,
  };
function ye(e, n, t = {}) {
  const { domain: o, messages: a, args: s } = t,
    f = new SyntaxError(String(e));
  return (f.code = e), n && (f.location = n), (f.domain = o), f;
}
function Nn(e) {
  throw e;
}
function De(e, n, t) {
  const o = { start: e, end: n };
  return t != null && (o.source = t), o;
}
const ue = " ",
  hn = "\r",
  ae = `
`,
  In = String.fromCharCode(8232),
  Tn = String.fromCharCode(8233);
function yn(e) {
  const n = e;
  let t = 0,
    o = 1,
    a = 1,
    s = 0;
  const f = (g) => n[g] === hn && n[g + 1] === ae,
    p = (g) => n[g] === Tn,
    c = (g) => n[g] === In,
    d = (g) => f(g) || ((r) => n[r] === ae)(g) || p(g) || c(g),
    L = (g) => (f(g) || p(g) || c(g) ? ae : n[g]);
  function i() {
    return (s = 0), d(t) && (o++, (a = 0)), f(t) && t++, t++, a++, n[t];
  }
  return {
    index: () => t,
    line: () => o,
    column: () => a,
    peekOffset: () => s,
    charAt: L,
    currentChar: () => L(t),
    currentPeek: () => L(t + s),
    next: i,
    peek: function () {
      return f(t + s) && s++, s++, n[t + s];
    },
    reset: function () {
      (t = 0), (o = 1), (a = 1), (s = 0);
    },
    resetPeek: function (g = 0) {
      s = g;
    },
    skipToPeek: function () {
      const g = t + s;
      for (; g !== t; ) i();
      s = 0;
    },
  };
}
const ie = void 0,
  Je = "'",
  On = "tokenizer";
function An(e, n = {}) {
  const t = n.location !== !1,
    o = yn(e),
    a = () => o.index(),
    s = () => {
      return (
        (l = o.line()),
        (u = o.column()),
        (N = o.index()),
        { line: l, column: u, offset: N }
      );
      var l, u, N;
    },
    f = s(),
    p = a(),
    c = {
      currentType: 14,
      offset: p,
      startLoc: f,
      endLoc: f,
      lastType: 14,
      lastOffset: p,
      lastStartLoc: f,
      lastEndLoc: f,
      braceNest: 0,
      inLinked: !1,
      text: "",
    },
    d = () => c,
    { onError: L } = n;
  function i(l, u, N, ...M) {
    const W = d();
    if (((u.column += N), (u.offset += N), L)) {
      const O = ye(l, De(W.startLoc, u), { domain: On, args: M });
      L(O);
    }
  }
  function g(l, u, N) {
    (l.endLoc = s()), (l.currentType = u);
    const M = { type: u };
    return (
      t && (M.loc = De(l.startLoc, l.endLoc)), N != null && (M.value = N), M
    );
  }
  const r = (l) => g(l, 14);
  function E(l, u) {
    return l.currentChar() === u
      ? (l.next(), u)
      : (i(U.EXPECTED_TOKEN, s(), 0, u), "");
  }
  function _(l) {
    let u = "";
    for (; l.currentPeek() === ue || l.currentPeek() === ae; )
      (u += l.currentPeek()), l.peek();
    return u;
  }
  function m(l) {
    const u = _(l);
    return l.skipToPeek(), u;
  }
  function v(l) {
    if (l === ie) return !1;
    const u = l.charCodeAt(0);
    return (u >= 97 && u <= 122) || (u >= 65 && u <= 90) || u === 95;
  }
  function k(l, u) {
    const { currentType: N } = u;
    if (N !== 2) return !1;
    _(l);
    const M = (function (W) {
      if (W === ie) return !1;
      const O = W.charCodeAt(0);
      return O >= 48 && O <= 57;
    })(l.currentPeek() === "-" ? l.peek() : l.currentPeek());
    return l.resetPeek(), M;
  }
  function A(l) {
    _(l);
    const u = l.currentPeek() === "|";
    return l.resetPeek(), u;
  }
  function h(l, u = !0) {
    const N = (W = !1, O = "", y = !1) => {
        const C = l.currentPeek();
        return C === "{"
          ? O !== "%" && W
          : C !== "@" && C
          ? C === "%"
            ? (l.peek(), N(W, "%", !0))
            : C === "|"
            ? !(O !== "%" && !y) || !(O === ue || O === ae)
            : C === ue
            ? (l.peek(), N(!0, ue, y))
            : C !== ae || (l.peek(), N(!0, ae, y))
          : O === "%" || W;
      },
      M = N();
    return u && l.resetPeek(), M;
  }
  function S(l, u) {
    const N = l.currentChar();
    return N === ie ? ie : u(N) ? (l.next(), N) : null;
  }
  function V(l) {
    return S(l, (u) => {
      const N = u.charCodeAt(0);
      return (
        (N >= 97 && N <= 122) ||
        (N >= 65 && N <= 90) ||
        (N >= 48 && N <= 57) ||
        N === 95 ||
        N === 36
      );
    });
  }
  function x(l) {
    return S(l, (u) => {
      const N = u.charCodeAt(0);
      return N >= 48 && N <= 57;
    });
  }
  function q(l) {
    return S(l, (u) => {
      const N = u.charCodeAt(0);
      return (
        (N >= 48 && N <= 57) || (N >= 65 && N <= 70) || (N >= 97 && N <= 102)
      );
    });
  }
  function Z(l) {
    let u = "",
      N = "";
    for (; (u = x(l)); ) N += u;
    return N;
  }
  function ne(l) {
    let u = "";
    for (;;) {
      const N = l.currentChar();
      if (N === "{" || N === "}" || N === "@" || N === "|" || !N) break;
      if (N === "%") {
        if (!h(l)) break;
        (u += N), l.next();
      } else if (N === ue || N === ae)
        if (h(l)) (u += N), l.next();
        else {
          if (A(l)) break;
          (u += N), l.next();
        }
      else (u += N), l.next();
    }
    return u;
  }
  function R(l) {
    const u = l.currentChar();
    switch (u) {
      case "\\":
      case "'":
        return l.next(), `\\${u}`;
      case "u":
        return P(l, u, 4);
      case "U":
        return P(l, u, 6);
      default:
        return i(U.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, u), "";
    }
  }
  function P(l, u, N) {
    E(l, u);
    let M = "";
    for (let W = 0; W < N; W++) {
      const O = q(l);
      if (!O) {
        i(
          U.INVALID_UNICODE_ESCAPE_SEQUENCE,
          s(),
          0,
          `\\${u}${M}${l.currentChar()}`
        );
        break;
      }
      M += O;
    }
    return `\\${u}${M}`;
  }
  function B(l) {
    m(l);
    const u = E(l, "|");
    return m(l), u;
  }
  function ee(l, u) {
    let N = null;
    switch (l.currentChar()) {
      case "{":
        return (
          u.braceNest >= 1 && i(U.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0),
          l.next(),
          (N = g(u, 2, "{")),
          m(l),
          u.braceNest++,
          N
        );
      case "}":
        return (
          u.braceNest > 0 &&
            u.currentType === 2 &&
            i(U.EMPTY_PLACEHOLDER, s(), 0),
          l.next(),
          (N = g(u, 3, "}")),
          u.braceNest--,
          u.braceNest > 0 && m(l),
          u.inLinked && u.braceNest === 0 && (u.inLinked = !1),
          N
        );
      case "@":
        return (
          u.braceNest > 0 && i(U.UNTERMINATED_CLOSING_BRACE, s(), 0),
          (N = $(l, u) || r(u)),
          (u.braceNest = 0),
          N
        );
      default:
        let M = !0,
          W = !0,
          O = !0;
        if (A(l))
          return (
            u.braceNest > 0 && i(U.UNTERMINATED_CLOSING_BRACE, s(), 0),
            (N = g(u, 1, B(l))),
            (u.braceNest = 0),
            (u.inLinked = !1),
            N
          );
        if (
          u.braceNest > 0 &&
          (u.currentType === 5 || u.currentType === 6 || u.currentType === 7)
        )
          return (
            i(U.UNTERMINATED_CLOSING_BRACE, s(), 0), (u.braceNest = 0), b(l, u)
          );
        if (
          (M = (function (y, C) {
            const { currentType: D } = C;
            if (D !== 2) return !1;
            _(y);
            const H = v(y.currentPeek());
            return y.resetPeek(), H;
          })(l, u))
        )
          return (
            (N = g(
              u,
              5,
              (function (y) {
                m(y);
                let C = "",
                  D = "";
                for (; (C = V(y)); ) D += C;
                return (
                  y.currentChar() === ie &&
                    i(U.UNTERMINATED_CLOSING_BRACE, s(), 0),
                  D
                );
              })(l)
            )),
            m(l),
            N
          );
        if ((W = k(l, u)))
          return (
            (N = g(
              u,
              6,
              (function (y) {
                m(y);
                let C = "";
                return (
                  y.currentChar() === "-"
                    ? (y.next(), (C += `-${Z(y)}`))
                    : (C += Z(y)),
                  y.currentChar() === ie &&
                    i(U.UNTERMINATED_CLOSING_BRACE, s(), 0),
                  C
                );
              })(l)
            )),
            m(l),
            N
          );
        if (
          (O = (function (y, C) {
            const { currentType: D } = C;
            if (D !== 2) return !1;
            _(y);
            const H = y.currentPeek() === Je;
            return y.resetPeek(), H;
          })(l, u))
        )
          return (
            (N = g(
              u,
              7,
              (function (y) {
                m(y), E(y, "'");
                let C = "",
                  D = "";
                const H = (he) => he !== Je && he !== ae;
                for (; (C = S(y, H)); ) D += C === "\\" ? R(y) : C;
                const X = y.currentChar();
                return X === ae || X === ie
                  ? (i(U.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0),
                    X === ae && (y.next(), E(y, "'")),
                    D)
                  : (E(y, "'"), D);
              })(l)
            )),
            m(l),
            N
          );
        if (!M && !W && !O)
          return (
            (N = g(
              u,
              13,
              (function (y) {
                m(y);
                let C = "",
                  D = "";
                const H = (X) => X !== "{" && X !== "}" && X !== ue && X !== ae;
                for (; (C = S(y, H)); ) D += C;
                return D;
              })(l)
            )),
            i(U.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, N.value),
            m(l),
            N
          );
    }
    return N;
  }
  function $(l, u) {
    const { currentType: N } = u;
    let M = null;
    const W = l.currentChar();
    switch (
      ((N !== 8 && N !== 9 && N !== 12 && N !== 10) ||
        (W !== ae && W !== ue) ||
        i(U.INVALID_LINKED_FORMAT, s(), 0),
      W)
    ) {
      case "@":
        return l.next(), (M = g(u, 8, "@")), (u.inLinked = !0), M;
      case ".":
        return m(l), l.next(), g(u, 9, ".");
      case ":":
        return m(l), l.next(), g(u, 10, ":");
      default:
        return A(l)
          ? ((M = g(u, 1, B(l))), (u.braceNest = 0), (u.inLinked = !1), M)
          : (function (O, y) {
              const { currentType: C } = y;
              if (C !== 8) return !1;
              _(O);
              const D = O.currentPeek() === ".";
              return O.resetPeek(), D;
            })(l, u) ||
            (function (O, y) {
              const { currentType: C } = y;
              if (C !== 8 && C !== 12) return !1;
              _(O);
              const D = O.currentPeek() === ":";
              return O.resetPeek(), D;
            })(l, u)
          ? (m(l), $(l, u))
          : (function (O, y) {
              const { currentType: C } = y;
              if (C !== 9) return !1;
              _(O);
              const D = v(O.currentPeek());
              return O.resetPeek(), D;
            })(l, u)
          ? (m(l),
            g(
              u,
              12,
              (function (O) {
                let y = "",
                  C = "";
                for (; (y = V(O)); ) C += y;
                return C;
              })(l)
            ))
          : (function (O, y) {
              const { currentType: C } = y;
              if (C !== 10) return !1;
              const D = () => {
                  const X = O.currentPeek();
                  return X === "{"
                    ? v(O.peek())
                    : !(
                        X === "@" ||
                        X === "%" ||
                        X === "|" ||
                        X === ":" ||
                        X === "." ||
                        X === ue ||
                        !X
                      ) && (X === ae ? (O.peek(), D()) : v(X));
                },
                H = D();
              return O.resetPeek(), H;
            })(l, u)
          ? (m(l),
            W === "{"
              ? ee(l, u) || M
              : g(
                  u,
                  11,
                  (function (O) {
                    const y = (C = !1, D) => {
                      const H = O.currentChar();
                      return H !== "{" &&
                        H !== "%" &&
                        H !== "@" &&
                        H !== "|" &&
                        H
                        ? H === ue
                          ? D
                          : H === ae
                          ? ((D += H), O.next(), y(C, D))
                          : ((D += H), O.next(), y(!0, D))
                        : D;
                    };
                    return y(!1, "");
                  })(l)
                ))
          : (N === 8 && i(U.INVALID_LINKED_FORMAT, s(), 0),
            (u.braceNest = 0),
            (u.inLinked = !1),
            b(l, u));
    }
  }
  function b(l, u) {
    let N = { type: 14 };
    if (u.braceNest > 0) return ee(l, u) || r(u);
    if (u.inLinked) return $(l, u) || r(u);
    switch (l.currentChar()) {
      case "{":
        return ee(l, u) || r(u);
      case "}":
        return i(U.UNBALANCED_CLOSING_BRACE, s(), 0), l.next(), g(u, 3, "}");
      case "@":
        return $(l, u) || r(u);
      default:
        if (A(l))
          return (N = g(u, 1, B(l))), (u.braceNest = 0), (u.inLinked = !1), N;
        const { isModulo: M, hasSpace: W } = (function (O) {
          const y = _(O),
            C = O.currentPeek() === "%" && O.peek() === "{";
          return O.resetPeek(), { isModulo: C, hasSpace: y.length > 0 };
        })(l);
        if (M)
          return W
            ? g(u, 0, ne(l))
            : g(
                u,
                4,
                (function (O) {
                  m(O);
                  const y = O.currentChar();
                  return (
                    y !== "%" && i(U.EXPECTED_TOKEN, s(), 0, y), O.next(), "%"
                  );
                })(l)
              );
        if (h(l)) return g(u, 0, ne(l));
    }
    return N;
  }
  return {
    nextToken: function () {
      const { currentType: l, offset: u, startLoc: N, endLoc: M } = c;
      return (
        (c.lastType = l),
        (c.lastOffset = u),
        (c.lastStartLoc = N),
        (c.lastEndLoc = M),
        (c.offset = a()),
        (c.startLoc = s()),
        o.currentChar() === ie ? g(c, 14) : b(o, c)
      );
    },
    currentOffset: a,
    currentPosition: s,
    context: d,
  };
}
const Cn = "parser",
  Pn = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Fn(e, n, t) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const o = parseInt(n || t, 16);
      return o <= 55295 || o >= 57344 ? String.fromCodePoint(o) : "�";
    }
  }
}
function Rn(e = {}) {
  const n = e.location !== !1,
    { onError: t } = e;
  function o(r, E, _, m, ...v) {
    const k = r.currentPosition();
    if (((k.offset += m), (k.column += m), t)) {
      const A = ye(E, De(_, k), { domain: Cn, args: v });
      t(A);
    }
  }
  function a(r, E, _) {
    const m = { type: r, start: E, end: E };
    return n && (m.loc = { start: _, end: _ }), m;
  }
  function s(r, E, _, m) {
    (r.end = E), m && (r.type = m), n && r.loc && (r.loc.end = _);
  }
  function f(r, E) {
    const _ = r.context(),
      m = a(3, _.offset, _.startLoc);
    return (m.value = E), s(m, r.currentOffset(), r.currentPosition()), m;
  }
  function p(r, E) {
    const _ = r.context(),
      { lastOffset: m, lastStartLoc: v } = _,
      k = a(5, m, v);
    return (
      (k.index = parseInt(E, 10)),
      r.nextToken(),
      s(k, r.currentOffset(), r.currentPosition()),
      k
    );
  }
  function c(r, E) {
    const _ = r.context(),
      { lastOffset: m, lastStartLoc: v } = _,
      k = a(4, m, v);
    return (
      (k.key = E),
      r.nextToken(),
      s(k, r.currentOffset(), r.currentPosition()),
      k
    );
  }
  function d(r, E) {
    const _ = r.context(),
      { lastOffset: m, lastStartLoc: v } = _,
      k = a(9, m, v);
    return (
      (k.value = E.replace(Pn, Fn)),
      r.nextToken(),
      s(k, r.currentOffset(), r.currentPosition()),
      k
    );
  }
  function L(r) {
    const E = r.context(),
      _ = a(6, E.offset, E.startLoc);
    let m = r.nextToken();
    if (m.type === 9) {
      const v = (function (k) {
        const A = k.nextToken(),
          h = k.context(),
          { lastOffset: S, lastStartLoc: V } = h,
          x = a(8, S, V);
        return A.type !== 12
          ? (o(k, U.UNEXPECTED_EMPTY_LINKED_MODIFIER, h.lastStartLoc, 0),
            (x.value = ""),
            s(x, S, V),
            { nextConsumeToken: A, node: x })
          : (A.value == null &&
              o(k, U.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, le(A)),
            (x.value = A.value || ""),
            s(x, k.currentOffset(), k.currentPosition()),
            { node: x });
      })(r);
      (_.modifier = v.node), (m = v.nextConsumeToken || r.nextToken());
    }
    switch (
      (m.type !== 10 &&
        o(r, U.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, le(m)),
      (m = r.nextToken()),
      m.type === 2 && (m = r.nextToken()),
      m.type)
    ) {
      case 11:
        m.value == null &&
          o(r, U.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, le(m)),
          (_.key = (function (A, h) {
            const S = A.context(),
              V = a(7, S.offset, S.startLoc);
            return (
              (V.value = h), s(V, A.currentOffset(), A.currentPosition()), V
            );
          })(r, m.value || ""));
        break;
      case 5:
        m.value == null &&
          o(r, U.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, le(m)),
          (_.key = c(r, m.value || ""));
        break;
      case 6:
        m.value == null &&
          o(r, U.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, le(m)),
          (_.key = p(r, m.value || ""));
        break;
      case 7:
        m.value == null &&
          o(r, U.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, le(m)),
          (_.key = d(r, m.value || ""));
        break;
      default:
        o(r, U.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
        const v = r.context(),
          k = a(7, v.offset, v.startLoc);
        return (
          (k.value = ""),
          s(k, v.offset, v.startLoc),
          (_.key = k),
          s(_, v.offset, v.startLoc),
          { nextConsumeToken: m, node: _ }
        );
    }
    return s(_, r.currentOffset(), r.currentPosition()), { node: _ };
  }
  function i(r) {
    const E = r.context(),
      _ = a(
        2,
        E.currentType === 1 ? r.currentOffset() : E.offset,
        E.currentType === 1 ? E.endLoc : E.startLoc
      );
    _.items = [];
    let m = null;
    do {
      const v = m || r.nextToken();
      switch (((m = null), v.type)) {
        case 0:
          v.value == null &&
            o(r, U.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, le(v)),
            _.items.push(f(r, v.value || ""));
          break;
        case 6:
          v.value == null &&
            o(r, U.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, le(v)),
            _.items.push(p(r, v.value || ""));
          break;
        case 5:
          v.value == null &&
            o(r, U.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, le(v)),
            _.items.push(c(r, v.value || ""));
          break;
        case 7:
          v.value == null &&
            o(r, U.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, le(v)),
            _.items.push(d(r, v.value || ""));
          break;
        case 8:
          const k = L(r);
          _.items.push(k.node), (m = k.nextConsumeToken || null);
      }
    } while (E.currentType !== 14 && E.currentType !== 1);
    return (
      s(
        _,
        E.currentType === 1 ? E.lastOffset : r.currentOffset(),
        E.currentType === 1 ? E.lastEndLoc : r.currentPosition()
      ),
      _
    );
  }
  function g(r) {
    const E = r.context(),
      { offset: _, startLoc: m } = E,
      v = i(r);
    return E.currentType === 14
      ? v
      : (function (k, A, h, S) {
          const V = k.context();
          let x = S.items.length === 0;
          const q = a(1, A, h);
          (q.cases = []), q.cases.push(S);
          do {
            const Z = i(k);
            x || (x = Z.items.length === 0), q.cases.push(Z);
          } while (V.currentType !== 14);
          return (
            x && o(k, U.MUST_HAVE_MESSAGES_IN_PLURAL, h, 0),
            s(q, k.currentOffset(), k.currentPosition()),
            q
          );
        })(r, _, m, v);
  }
  return {
    parse: function (r) {
      const E = An(r, te({}, e)),
        _ = E.context(),
        m = a(0, _.offset, _.startLoc);
      return (
        n && m.loc && (m.loc.source = r),
        (m.body = g(E)),
        _.currentType !== 14 &&
          o(
            E,
            U.UNEXPECTED_LEXICAL_ANALYSIS,
            _.lastStartLoc,
            0,
            r[_.offset] || ""
          ),
        s(m, E.currentOffset(), E.currentPosition()),
        m
      );
    },
  };
}
function le(e) {
  if (e.type === 14) return "EOF";
  const n = (e.value || "").replace(/\r?\n/gu, "\\n");
  return n.length > 10 ? n.slice(0, 9) + "…" : n;
}
function Qe(e, n) {
  for (let t = 0; t < e.length; t++) Ye(e[t], n);
}
function Ye(e, n) {
  switch (e.type) {
    case 1:
      Qe(e.cases, n), n.helper("plural");
      break;
    case 2:
      Qe(e.items, n);
      break;
    case 6:
      Ye(e.key, n), n.helper("linked"), n.helper("type");
      break;
    case 5:
      n.helper("interpolate"), n.helper("list");
      break;
    case 4:
      n.helper("interpolate"), n.helper("named");
  }
}
function Dn(e, n = {}) {
  const t = (function (a, s = {}) {
    const f = { ast: a, helpers: new Set() };
    return { context: () => f, helper: (p) => (f.helpers.add(p), p) };
  })(e);
  t.helper("normalize"), e.body && Ye(e.body, t);
  const o = t.context();
  e.helpers = Array.from(o.helpers);
}
function pe(e, n) {
  const { helper: t } = e;
  switch (n.type) {
    case 0:
      (function (o, a) {
        a.body ? pe(o, a.body) : o.push("null");
      })(e, n);
      break;
    case 1:
      (function (o, a) {
        const { helper: s, needIndent: f } = o;
        if (a.cases.length > 1) {
          o.push(`${s("plural")}([`), o.indent(f());
          const p = a.cases.length;
          for (let c = 0; c < p && (pe(o, a.cases[c]), c !== p - 1); c++)
            o.push(", ");
          o.deindent(f()), o.push("])");
        }
      })(e, n);
      break;
    case 2:
      (function (o, a) {
        const { helper: s, needIndent: f } = o;
        o.push(`${s("normalize")}([`), o.indent(f());
        const p = a.items.length;
        for (let c = 0; c < p && (pe(o, a.items[c]), c !== p - 1); c++)
          o.push(", ");
        o.deindent(f()), o.push("])");
      })(e, n);
      break;
    case 6:
      (function (o, a) {
        const { helper: s } = o;
        o.push(`${s("linked")}(`),
          pe(o, a.key),
          a.modifier
            ? (o.push(", "), pe(o, a.modifier), o.push(", _type"))
            : o.push(", undefined, _type"),
          o.push(")");
      })(e, n);
      break;
    case 8:
    case 7:
    case 9:
    case 3:
      e.push(JSON.stringify(n.value), n);
      break;
    case 5:
      e.push(`${t("interpolate")}(${t("list")}(${n.index}))`, n);
      break;
    case 4:
      e.push(`${t("interpolate")}(${t("named")}(${JSON.stringify(n.key)}))`, n);
  }
}
const Sn = (e, n = {}) => {
    const t = T(n.mode) ? n.mode : "normal",
      o = T(n.filename) ? n.filename : "message.intl",
      a = !!n.sourceMap,
      s =
        n.breakLineCode != null
          ? n.breakLineCode
          : t === "arrow"
          ? ";"
          : `
`,
      f = n.needIndent ? n.needIndent : t !== "arrow",
      p = e.helpers || [],
      c = (function (i, g) {
        const {
            sourceMap: r,
            filename: E,
            breakLineCode: _,
            needIndent: m,
          } = g,
          v = {
            source: i.loc.source,
            filename: E,
            code: "",
            column: 1,
            line: 1,
            offset: 0,
            map: void 0,
            breakLineCode: _,
            needIndent: m,
            indentLevel: 0,
          };
        function k(h, S) {
          v.code += h;
        }
        function A(h, S = !0) {
          const V = S ? _ : "";
          k(m ? V + "  ".repeat(h) : V);
        }
        return {
          context: () => v,
          push: k,
          indent: function (h = !0) {
            const S = ++v.indentLevel;
            h && A(S);
          },
          deindent: function (h = !0) {
            const S = --v.indentLevel;
            h && A(S);
          },
          newline: function () {
            A(v.indentLevel);
          },
          helper: (h) => `_${h}`,
          needIndent: () => v.needIndent,
        };
      })(e, {
        mode: t,
        filename: o,
        sourceMap: a,
        breakLineCode: s,
        needIndent: f,
      });
    c.push(t === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
      c.indent(f),
      p.length > 0 &&
        (c.push(`const { ${p.map((i) => `${i}: _${i}`).join(", ")} } = ctx`),
        c.newline()),
      c.push("return "),
      pe(c, e),
      c.deindent(f),
      c.push("}");
    const { code: d, map: L } = c.context();
    return { ast: e, code: d, map: L ? L.toJSON() : void 0 };
  },
  Ct = { I18nInit: "i18n:init", FunctionTranslate: "function:translate" },
  fe = [];
(fe[0] = { w: [0], i: [3, 0], "[": [4], o: [7] }),
  (fe[1] = { w: [1], ".": [2], "[": [4], o: [7] }),
  (fe[2] = { w: [2], i: [3, 0], 0: [3, 0] }),
  (fe[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1],
  }),
  (fe[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0],
  }),
  (fe[5] = { "'": [4, 0], o: 8, l: [5, 0] }),
  (fe[6] = { '"': [4, 0], o: 8, l: [6, 0] });
const Mn = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function wn(e) {
  if (e == null) return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function Wn(e) {
  const n = e.trim();
  return (
    (e.charAt(0) !== "0" || !isNaN(parseInt(e))) &&
    ((t = n),
    Mn.test(t)
      ? (function (o) {
          const a = o.charCodeAt(0);
          return a !== o.charCodeAt(o.length - 1) || (a !== 34 && a !== 39)
            ? o
            : o.slice(1, -1);
        })(n)
      : "*" + n)
  );
  var t;
}
const qe = new Map();
function Un(e, n) {
  return Y(e) ? e[n] : null;
}
const xn = (e) => e,
  $n = (e) => "",
  Vn = "text",
  Hn = (e) => (e.length === 0 ? "" : e.join("")),
  Yn = (e) =>
    e == null
      ? ""
      : j(e) || (F(e) && e.toString === At)
      ? JSON.stringify(e, null, 2)
      : String(e);
function Ze(e, n) {
  return (
    (e = Math.abs(e)),
    n === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  );
}
function jn(e = {}) {
  const n = e.locale,
    t = (function (i) {
      const g = J(i.pluralIndex) ? i.pluralIndex : -1;
      return i.named && (J(i.named.count) || J(i.named.n))
        ? J(i.named.count)
          ? i.named.count
          : J(i.named.n)
          ? i.named.n
          : g
        : g;
    })(e),
    o = Y(e.pluralRules) && T(n) && K(e.pluralRules[n]) ? e.pluralRules[n] : Ze,
    a = Y(e.pluralRules) && T(n) && K(e.pluralRules[n]) ? Ze : void 0,
    s = e.list || [],
    f = e.named || {};
  J(e.pluralIndex) &&
    (function (i, g) {
      g.count || (g.count = i), g.n || (g.n = i);
    })(t, f);
  function p(i) {
    return (
      (K(e.messages) ? e.messages(i) : !!Y(e.messages) && e.messages[i]) ||
      (e.parent ? e.parent.message(i) : $n)
    );
  }
  const c =
      F(e.processor) && K(e.processor.normalize) ? e.processor.normalize : Hn,
    d =
      F(e.processor) && K(e.processor.interpolate)
        ? e.processor.interpolate
        : Yn,
    L = {
      list: (i) => s[i],
      named: (i) => f[i],
      plural: (i) => i[o(t, i.length, a)],
      linked: (i, ...g) => {
        const [r, E] = g;
        let _ = "text",
          m = "";
        g.length === 1
          ? Y(r)
            ? ((m = r.modifier || m), (_ = r.type || _))
            : T(r) && (m = r || m)
          : g.length === 2 && (T(r) && (m = r || m), T(E) && (_ = E || _));
        let v = p(i)(L);
        return (
          _ === "vnode" && j(v) && m && (v = v[0]),
          m ? ((k = m), e.modifiers ? e.modifiers[k] : xn)(v, _) : v
        );
        var k;
      },
      message: p,
      type: F(e.processor) && T(e.processor.type) ? e.processor.type : Vn,
      interpolate: d,
      normalize: c,
    };
  return L;
}
let ke = null;
const Gn = Xn(Ct.FunctionTranslate);
function Xn(e) {
  return (n) => ke && ke.emit(e, n);
}
function Bn(e, n, t) {
  return [
    ...new Set([t, ...(j(n) ? n : Y(n) ? Object.keys(n) : T(n) ? [n] : [t])]),
  ];
}
function Pt(e, n, t) {
  const o = T(t) ? t : Ne,
    a = e;
  a.__localeChainCache || (a.__localeChainCache = new Map());
  let s = a.__localeChainCache.get(o);
  if (!s) {
    s = [];
    let f = [t];
    for (; j(f); ) f = et(s, f, n);
    const p = j(n) || !F(n) ? n : n.default ? n.default : null;
    (f = T(p) ? [p] : p), j(f) && et(s, f, !1), a.__localeChainCache.set(o, s);
  }
  return s;
}
function et(e, n, t) {
  let o = !0;
  for (let a = 0; a < n.length && w(o); a++) {
    const s = n[a];
    T(s) && (o = Kn(e, n[a], t));
  }
  return o;
}
function Kn(e, n, t) {
  let o;
  const a = n.split("-");
  do (o = zn(e, a.join("-"), t)), a.splice(-1, 1);
  while (a.length && o === !0);
  return o;
}
function zn(e, n, t) {
  let o = !1;
  if (!e.includes(n) && ((o = !0), n)) {
    o = n[n.length - 1] !== "!";
    const a = n.replace(/!/g, "");
    e.push(a), (j(t) || F(t)) && t[a] && (o = t[a]);
  }
  return o;
}
const Jn = "9.2.2",
  Oe = -1,
  Ne = "en-US",
  tt = "",
  nt = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
let Ft,
  Rt,
  Dt,
  St = null;
const at = (e) => {
    St = e;
  },
  Qn = () => St;
let Mt = null;
const rt = (e) => {
    Mt = e;
  },
  qn = () => Mt;
let lt = 0;
function Zn(e = {}) {
  const n = T(e.version) ? e.version : Jn,
    t = T(e.locale) ? e.locale : Ne,
    o =
      j(e.fallbackLocale) ||
      F(e.fallbackLocale) ||
      T(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : t,
    a = F(e.messages) ? e.messages : { [t]: {} },
    s = F(e.datetimeFormats) ? e.datetimeFormats : { [t]: {} },
    f = F(e.numberFormats) ? e.numberFormats : { [t]: {} },
    p = te({}, e.modifiers || {}, {
      upper: (P, B) =>
        B === "text" && T(P)
          ? P.toUpperCase()
          : B === "vnode" && Y(P) && "__v_isVNode" in P
          ? P.children.toUpperCase()
          : P,
      lower: (P, B) =>
        B === "text" && T(P)
          ? P.toLowerCase()
          : B === "vnode" && Y(P) && "__v_isVNode" in P
          ? P.children.toLowerCase()
          : P,
      capitalize: (P, B) =>
        B === "text" && T(P)
          ? nt(P)
          : B === "vnode" && Y(P) && "__v_isVNode" in P
          ? nt(P.children)
          : P,
    }),
    c = e.pluralRules || {},
    d = K(e.missing) ? e.missing : null,
    L = (!w(e.missingWarn) && !me(e.missingWarn)) || e.missingWarn,
    i = (!w(e.fallbackWarn) && !me(e.fallbackWarn)) || e.fallbackWarn,
    g = !!e.fallbackFormat,
    r = !!e.unresolving,
    E = K(e.postTranslation) ? e.postTranslation : null,
    _ = F(e.processor) ? e.processor : null,
    m = !w(e.warnHtmlMessage) || e.warnHtmlMessage,
    v = !!e.escapeParameter,
    k = K(e.messageCompiler) ? e.messageCompiler : Ft,
    A = K(e.messageResolver) ? e.messageResolver : Rt || Un,
    h = K(e.localeFallbacker) ? e.localeFallbacker : Dt || Bn,
    S = Y(e.fallbackContext) ? e.fallbackContext : void 0,
    V = K(e.onWarn) ? e.onWarn : vn,
    x = e,
    q = Y(x.__datetimeFormatters) ? x.__datetimeFormatters : new Map(),
    Z = Y(x.__numberFormatters) ? x.__numberFormatters : new Map(),
    ne = Y(x.__meta) ? x.__meta : {};
  lt++;
  const R = {
    version: n,
    cid: lt,
    locale: t,
    fallbackLocale: o,
    messages: a,
    modifiers: p,
    pluralRules: c,
    missing: d,
    missingWarn: L,
    fallbackWarn: i,
    fallbackFormat: g,
    unresolving: r,
    postTranslation: E,
    processor: _,
    warnHtmlMessage: m,
    escapeParameter: v,
    messageCompiler: k,
    messageResolver: A,
    localeFallbacker: h,
    fallbackContext: S,
    onWarn: V,
    __meta: ne,
  };
  return (
    (R.datetimeFormats = s),
    (R.numberFormats = f),
    (R.__datetimeFormatters = q),
    (R.__numberFormatters = Z),
    __INTLIFY_PROD_DEVTOOLS__ &&
      (function (P, B, ee) {
        ke &&
          ke.emit(Ct.I18nInit, {
            timestamp: Date.now(),
            i18n: P,
            version: B,
            meta: ee,
          });
      })(R, n, ne),
    R
  );
}
function je(e, n, t, o, a) {
  const { missing: s, onWarn: f } = e;
  if (s !== null) {
    const p = s(e, t, n, a);
    return T(p) ? p : n;
  }
  return n;
}
function Ee(e, n, t) {
  (e.__localeChainCache = new Map()), e.localeFallbacker(e, t, n);
}
const ea = (e) => e;
let ot = Object.create(null),
  wt = U.__EXTEND_POINT__;
const Ce = () => ++wt,
  ge = {
    INVALID_ARGUMENT: wt,
    INVALID_DATE_ARGUMENT: Ce(),
    INVALID_ISO_DATE_ARGUMENT: Ce(),
    __EXTEND_POINT__: Ce(),
  };
function de(e) {
  return ye(e, null, void 0);
}
const st = () => "",
  oe = (e) => K(e);
function ct(e, ...n) {
  const {
      fallbackFormat: t,
      postTranslation: o,
      unresolving: a,
      messageCompiler: s,
      fallbackLocale: f,
      messages: p,
    } = e,
    [c, d] = Se(...n),
    L = w(d.missingWarn) ? d.missingWarn : e.missingWarn,
    i = w(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn,
    g = w(d.escapeParameter) ? d.escapeParameter : e.escapeParameter,
    r = !!d.resolvedMessage,
    E =
      T(d.default) || w(d.default)
        ? w(d.default)
          ? s
            ? c
            : () => c
          : d.default
        : t
        ? s
          ? c
          : () => c
        : "",
    _ = t || E !== "",
    m = T(d.locale) ? d.locale : e.locale;
  g &&
    (function (R) {
      j(R.list)
        ? (R.list = R.list.map((P) => (T(P) ? ze(P) : P)))
        : Y(R.named) &&
          Object.keys(R.named).forEach((P) => {
            T(R.named[P]) && (R.named[P] = ze(R.named[P]));
          });
    })(d);
  let [v, k, A] = r ? [c, m, p[m] || {}] : ut(e, c, m, f, i, L),
    h = v,
    S = c;
  if (
    (r || T(h) || oe(h) || (_ && ((h = E), (S = h))),
    !r && ((!T(h) && !oe(h)) || !T(k)))
  )
    return a ? Oe : c;
  let V = !1;
  const x = oe(h)
    ? h
    : it(e, c, k, h, S, () => {
        V = !0;
      });
  if (V) return h;
  const q = (function (R, P, B, ee) {
      const {
          modifiers: $,
          pluralRules: b,
          messageResolver: l,
          fallbackLocale: u,
          fallbackWarn: N,
          missingWarn: M,
          fallbackContext: W,
        } = R,
        O = (C) => {
          let D = l(B, C);
          if (D == null && W) {
            const [, , H] = ut(W, C, P, u, N, M);
            D = l(H, C);
          }
          if (T(D)) {
            let H = !1;
            const X = it(R, C, P, D, C, () => {
              H = !0;
            });
            return H ? st : X;
          }
          return oe(D) ? D : st;
        },
        y = { locale: P, modifiers: $, pluralRules: b, messages: O };
      return (
        R.processor && (y.processor = R.processor),
        ee.list && (y.list = ee.list),
        ee.named && (y.named = ee.named),
        J(ee.plural) && (y.pluralIndex = ee.plural),
        y
      );
    })(e, k, A, d),
    Z = (function (R, P, B) {
      return P(B);
    })(0, x, jn(q)),
    ne = o ? o(Z, c) : Z;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const R = {
      timestamp: Date.now(),
      key: T(c) ? c : oe(h) ? h.key : "",
      locale: k || (oe(h) ? h.locale : ""),
      format: T(h) ? h : oe(h) ? h.source : "",
      message: ne,
    };
    (R.meta = te({}, e.__meta, Qn() || {})), Gn(R);
  }
  return ne;
}
function ut(e, n, t, o, a, s) {
  const { messages: f, onWarn: p, messageResolver: c, localeFallbacker: d } = e,
    L = d(e, o, t);
  let i,
    g = {},
    r = null;
  for (
    let E = 0;
    E < L.length &&
    ((i = L[E]),
    (g = f[i] || {}),
    (r = c(g, n)) === null && (r = g[n]),
    !T(r) && !K(r));
    E++
  ) {
    const _ = je(e, n, i, 0, "translate");
    _ !== n && (r = _);
  }
  return [r, i, g];
}
function it(e, n, t, o, a, s) {
  const { messageCompiler: f, warnHtmlMessage: p } = e;
  if (oe(o)) {
    const d = o;
    return (d.locale = d.locale || t), (d.key = d.key || n), d;
  }
  if (f == null) {
    const d = () => o;
    return (d.locale = t), (d.key = n), d;
  }
  const c = f(
    o,
    (function (d, L, i, g, r, E) {
      return {
        warnHtmlMessage: r,
        onError: (_) => {
          throw (E && E(_), _);
        },
        onCacheKey: (_) => En(L, i, _),
      };
    })(0, t, a, 0, p, s)
  );
  return (c.locale = t), (c.key = n), (c.source = o), c;
}
function Se(...e) {
  const [n, t, o] = e,
    a = {};
  if (!T(n) && !J(n) && !oe(n)) throw de(ge.INVALID_ARGUMENT);
  const s = J(n) ? String(n) : (oe(n), n);
  return (
    J(t)
      ? (a.plural = t)
      : T(t)
      ? (a.default = t)
      : F(t) && !Te(t)
      ? (a.named = t)
      : j(t) && (a.list = t),
    J(o) ? (a.plural = o) : T(o) ? (a.default = o) : F(o) && te(a, o),
    [s, a]
  );
}
function ft(e, ...n) {
  const {
      datetimeFormats: t,
      unresolving: o,
      fallbackLocale: a,
      onWarn: s,
      localeFallbacker: f,
    } = e,
    { __datetimeFormatters: p } = e,
    [c, d, L, i] = Me(...n);
  w(L.missingWarn) ? L.missingWarn : e.missingWarn,
    w(L.fallbackWarn) ? L.fallbackWarn : e.fallbackWarn;
  const g = !!L.part,
    r = T(L.locale) ? L.locale : e.locale,
    E = f(e, a, r);
  if (!T(c) || c === "") return new Intl.DateTimeFormat(r, i).format(d);
  let _,
    m = {},
    v = null;
  for (
    let h = 0;
    h < E.length && ((_ = E[h]), (m = t[_] || {}), (v = m[c]), !F(v));
    h++
  )
    je(e, c, _, 0, "datetime format");
  if (!F(v) || !T(_)) return o ? Oe : c;
  let k = `${_}__${c}`;
  Te(i) || (k = `${k}__${JSON.stringify(i)}`);
  let A = p.get(k);
  return (
    A || ((A = new Intl.DateTimeFormat(_, te({}, v, i))), p.set(k, A)),
    g ? A.formatToParts(d) : A.format(d)
  );
}
const Wt = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits",
];
function Me(...e) {
  const [n, t, o, a] = e,
    s = {};
  let f,
    p = {};
  if (T(n)) {
    const c = n.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!c) throw de(ge.INVALID_ISO_DATE_ARGUMENT);
    const d = c[3]
      ? c[3].trim().startsWith("T")
        ? `${c[1].trim()}${c[3].trim()}`
        : `${c[1].trim()}T${c[3].trim()}`
      : c[1].trim();
    f = new Date(d);
    try {
      f.toISOString();
    } catch {
      throw de(ge.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Ln(n)) {
    if (isNaN(n.getTime())) throw de(ge.INVALID_DATE_ARGUMENT);
    f = n;
  } else {
    if (!J(n)) throw de(ge.INVALID_ARGUMENT);
    f = n;
  }
  return (
    T(t)
      ? (s.key = t)
      : F(t) &&
        Object.keys(t).forEach((c) => {
          Wt.includes(c) ? (p[c] = t[c]) : (s[c] = t[c]);
        }),
    T(o) ? (s.locale = o) : F(o) && (p = o),
    F(a) && (p = a),
    [s.key || "", f, s, p]
  );
}
function mt(e, n, t) {
  const o = e;
  for (const a in t) {
    const s = `${n}__${a}`;
    o.__datetimeFormatters.has(s) && o.__datetimeFormatters.delete(s);
  }
}
function _t(e, ...n) {
  const {
      numberFormats: t,
      unresolving: o,
      fallbackLocale: a,
      onWarn: s,
      localeFallbacker: f,
    } = e,
    { __numberFormatters: p } = e,
    [c, d, L, i] = we(...n);
  w(L.missingWarn) ? L.missingWarn : e.missingWarn,
    w(L.fallbackWarn) ? L.fallbackWarn : e.fallbackWarn;
  const g = !!L.part,
    r = T(L.locale) ? L.locale : e.locale,
    E = f(e, a, r);
  if (!T(c) || c === "") return new Intl.NumberFormat(r, i).format(d);
  let _,
    m = {},
    v = null;
  for (
    let h = 0;
    h < E.length && ((_ = E[h]), (m = t[_] || {}), (v = m[c]), !F(v));
    h++
  )
    je(e, c, _, 0, "number format");
  if (!F(v) || !T(_)) return o ? Oe : c;
  let k = `${_}__${c}`;
  Te(i) || (k = `${k}__${JSON.stringify(i)}`);
  let A = p.get(k);
  return (
    A || ((A = new Intl.NumberFormat(_, te({}, v, i))), p.set(k, A)),
    g ? A.formatToParts(d) : A.format(d)
  );
}
const Ut = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay",
];
function we(...e) {
  const [n, t, o, a] = e,
    s = {};
  let f = {};
  if (!J(n)) throw de(ge.INVALID_ARGUMENT);
  const p = n;
  return (
    T(t)
      ? (s.key = t)
      : F(t) &&
        Object.keys(t).forEach((c) => {
          Ut.includes(c) ? (f[c] = t[c]) : (s[c] = t[c]);
        }),
    T(o) ? (s.locale = o) : F(o) && (f = o),
    F(a) && (f = a),
    [s.key || "", p, s, f]
  );
}
function pt(e, n, t) {
  const o = e;
  for (const a in t) {
    const s = `${n}__${a}`;
    o.__numberFormatters.has(s) && o.__numberFormatters.delete(s);
  }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" &&
  (be().__INTLIFY_PROD_DEVTOOLS__ = !1);
const ta = "9.2.2";
let xt = U.__EXTEND_POINT__;
const re = () => ++xt,
  z = {
    UNEXPECTED_RETURN_TYPE: xt,
    INVALID_ARGUMENT: re(),
    MUST_BE_CALL_SETUP_TOP: re(),
    NOT_INSLALLED: re(),
    NOT_AVAILABLE_IN_LEGACY_MODE: re(),
    REQUIRED_VALUE: re(),
    INVALID_VALUE: re(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: re(),
    NOT_INSLALLED_WITH_PROVIDE: re(),
    UNEXPECTED_ERROR: re(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: re(),
    BRIDGE_SUPPORT_VUE_2_ONLY: re(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: re(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: re(),
    __EXTEND_POINT__: re(),
  };
function Q(e, ...n) {
  return ye(e, null, void 0);
}
const We = _e("__transrateVNode"),
  Ue = _e("__datetimeParts"),
  xe = _e("__numberParts"),
  $t = _e("__setPluralRules");
_e("__intlifyMeta");
const Vt = _e("__injectWithOption");
function $e(e) {
  if (!Y(e)) return e;
  for (const n in e)
    if (Ve(e, n))
      if (n.includes(".")) {
        const t = n.split("."),
          o = t.length - 1;
        let a = e;
        for (let s = 0; s < o; s++) t[s] in a || (a[t[s]] = {}), (a = a[t[s]]);
        (a[t[o]] = e[n]), delete e[n], Y(a[t[o]]) && $e(a[t[o]]);
      } else Y(e[n]) && $e(e[n]);
  return e;
}
function Ae(e, n) {
  const { messages: t, __i18n: o, messageResolver: a, flatJson: s } = n,
    f = F(t) ? t : j(o) ? {} : { [e]: {} };
  if (
    (j(o) &&
      o.forEach((p) => {
        if ("locale" in p && "resource" in p) {
          const { locale: c, resource: d } = p;
          c ? ((f[c] = f[c] || {}), Le(d, f[c])) : Le(d, f);
        } else T(p) && Le(JSON.parse(p), f);
      }),
    a == null && s)
  )
    for (const p in f) Ve(f, p) && $e(f[p]);
  return f;
}
const Ie = (e) => !Y(e) || j(e);
function Le(e, n) {
  if (Ie(e) || Ie(n)) throw Q(z.INVALID_VALUE);
  for (const t in e)
    Ve(e, t) && (Ie(e[t]) || Ie(n[t]) ? (n[t] = e[t]) : Le(e[t], n[t]));
}
function Ht(e) {
  return e.type;
}
function Yt(e, n, t) {
  let o = Y(n.messages) ? n.messages : {};
  "__i18nGlobal" in t &&
    (o = Ae(e.locale.value, { messages: o, __i18n: t.__i18nGlobal }));
  const a = Object.keys(o);
  if (
    (a.length &&
      a.forEach((s) => {
        e.mergeLocaleMessage(s, o[s]);
      }),
    Y(n.datetimeFormats))
  ) {
    const s = Object.keys(n.datetimeFormats);
    s.length &&
      s.forEach((f) => {
        e.mergeDateTimeFormat(f, n.datetimeFormats[f]);
      });
  }
  if (Y(n.numberFormats)) {
    const s = Object.keys(n.numberFormats);
    s.length &&
      s.forEach((f) => {
        e.mergeNumberFormat(f, n.numberFormats[f]);
      });
  }
}
function gt(e) {
  return pn(gn, null, e, 0);
}
const dt = "__INTLIFY_META__";
let Et = 0;
function bt(e) {
  return (n, t, o, a) => e(t, o, ve() || void 0, a);
}
const na = () => {
  const e = ve();
  let n = null;
  return e && (n = Ht(e)[dt]) ? { [dt]: n } : null;
};
function Ge(e = {}, n) {
  const { __root: t } = e,
    o = t === void 0;
  let a = !w(e.inheritLocale) || e.inheritLocale;
  const s = se(t && a ? t.locale.value : T(e.locale) ? e.locale : Ne),
    f = se(
      t && a
        ? t.fallbackLocale.value
        : T(e.fallbackLocale) ||
          j(e.fallbackLocale) ||
          F(e.fallbackLocale) ||
          e.fallbackLocale === !1
        ? e.fallbackLocale
        : s.value
    ),
    p = se(Ae(s.value, e)),
    c = se(F(e.datetimeFormats) ? e.datetimeFormats : { [s.value]: {} }),
    d = se(F(e.numberFormats) ? e.numberFormats : { [s.value]: {} });
  let L = t
      ? t.missingWarn
      : (!w(e.missingWarn) && !me(e.missingWarn)) || e.missingWarn,
    i = t
      ? t.fallbackWarn
      : (!w(e.fallbackWarn) && !me(e.fallbackWarn)) || e.fallbackWarn,
    g = t ? t.fallbackRoot : !w(e.fallbackRoot) || e.fallbackRoot,
    r = !!e.fallbackFormat,
    E = K(e.missing) ? e.missing : null,
    _ = K(e.missing) ? bt(e.missing) : null,
    m = K(e.postTranslation) ? e.postTranslation : null,
    v = t ? t.warnHtmlMessage : !w(e.warnHtmlMessage) || e.warnHtmlMessage,
    k = !!e.escapeParameter;
  const A = t ? t.modifiers : F(e.modifiers) ? e.modifiers : {};
  let h,
    S = e.pluralRules || (t && t.pluralRules);
  (h = (() => {
    o && rt(null);
    const b = {
      version: ta,
      locale: s.value,
      fallbackLocale: f.value,
      messages: p.value,
      modifiers: A,
      pluralRules: S,
      missing: _ === null ? void 0 : _,
      missingWarn: L,
      fallbackWarn: i,
      fallbackFormat: r,
      unresolving: !0,
      postTranslation: m === null ? void 0 : m,
      warnHtmlMessage: v,
      escapeParameter: k,
      messageResolver: e.messageResolver,
      __meta: { framework: "vue" },
    };
    (b.datetimeFormats = c.value),
      (b.numberFormats = d.value),
      (b.__datetimeFormatters = F(h) ? h.__datetimeFormatters : void 0),
      (b.__numberFormatters = F(h) ? h.__numberFormatters : void 0);
    const l = Zn(b);
    return o && rt(l), l;
  })()),
    Ee(h, s.value, f.value);
  const V = ce({
      get: () => s.value,
      set: (b) => {
        (s.value = b), (h.locale = s.value);
      },
    }),
    x = ce({
      get: () => f.value,
      set: (b) => {
        (f.value = b), (h.fallbackLocale = f.value), Ee(h, s.value, b);
      },
    }),
    q = ce(() => p.value),
    Z = ce(() => c.value),
    ne = ce(() => d.value),
    R = (b, l, u, N, M, W) => {
      let O;
      if (
        (s.value, f.value, p.value, c.value, d.value, __INTLIFY_PROD_DEVTOOLS__)
      )
        try {
          at(na()), o || (h.fallbackContext = t ? qn() : void 0), (O = b(h));
        } finally {
          at(null), o || (h.fallbackContext = void 0);
        }
      else O = b(h);
      if (J(O) && O === Oe) {
        const [y, C] = l();
        return t && g ? N(t) : M(y);
      }
      if (W(O)) return O;
      throw Q(z.UNEXPECTED_RETURN_TYPE);
    };
  function P(...b) {
    return R(
      (l) => Reflect.apply(ct, null, [l, ...b]),
      () => Se(...b),
      "translate",
      (l) => Reflect.apply(l.t, l, [...b]),
      (l) => l,
      (l) => T(l)
    );
  }
  const B = {
    normalize: function (b) {
      return b.map((l) => (T(l) || J(l) || w(l) ? gt(String(l)) : l));
    },
    interpolate: (b) => b,
    type: "vnode",
  };
  function ee(b) {
    return p.value[b] || {};
  }
  Et++,
    t &&
      Re &&
      (Fe(t.locale, (b) => {
        a && ((s.value = b), (h.locale = b), Ee(h, s.value, f.value));
      }),
      Fe(t.fallbackLocale, (b) => {
        a && ((f.value = b), (h.fallbackLocale = b), Ee(h, s.value, f.value));
      }));
  const $ = {
    id: Et,
    locale: V,
    fallbackLocale: x,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(b) {
      (a = b),
        b &&
          t &&
          ((s.value = t.locale.value),
          (f.value = t.fallbackLocale.value),
          Ee(h, s.value, f.value));
    },
    get availableLocales() {
      return Object.keys(p.value).sort();
    },
    messages: q,
    get modifiers() {
      return A;
    },
    get pluralRules() {
      return S || {};
    },
    get isGlobal() {
      return o;
    },
    get missingWarn() {
      return L;
    },
    set missingWarn(b) {
      (L = b), (h.missingWarn = L);
    },
    get fallbackWarn() {
      return i;
    },
    set fallbackWarn(b) {
      (i = b), (h.fallbackWarn = i);
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(b) {
      g = b;
    },
    get fallbackFormat() {
      return r;
    },
    set fallbackFormat(b) {
      (r = b), (h.fallbackFormat = r);
    },
    get warnHtmlMessage() {
      return v;
    },
    set warnHtmlMessage(b) {
      (v = b), (h.warnHtmlMessage = b);
    },
    get escapeParameter() {
      return k;
    },
    set escapeParameter(b) {
      (k = b), (h.escapeParameter = b);
    },
    t: P,
    getLocaleMessage: ee,
    setLocaleMessage: function (b, l) {
      (p.value[b] = l), (h.messages = p.value);
    },
    mergeLocaleMessage: function (b, l) {
      (p.value[b] = p.value[b] || {}),
        Le(l, p.value[b]),
        (h.messages = p.value);
    },
    getPostTranslationHandler: function () {
      return K(m) ? m : null;
    },
    setPostTranslationHandler: function (b) {
      (m = b), (h.postTranslation = b);
    },
    getMissingHandler: function () {
      return E;
    },
    setMissingHandler: function (b) {
      b !== null && (_ = bt(b)), (E = b), (h.missing = _);
    },
    [$t]: function (b) {
      (S = b), (h.pluralRules = S);
    },
  };
  return (
    ($.datetimeFormats = Z),
    ($.numberFormats = ne),
    ($.rt = function (...b) {
      const [l, u, N] = b;
      if (N && !Y(N)) throw Q(z.INVALID_ARGUMENT);
      return P(l, u, te({ resolvedMessage: !0 }, N || {}));
    }),
    ($.te = function (b, l) {
      const u = ee(T(l) ? l : s.value);
      return h.messageResolver(u, b) !== null;
    }),
    ($.tm = function (b) {
      const l = (function (u) {
        let N = null;
        const M = Pt(h, f.value, s.value);
        for (let W = 0; W < M.length; W++) {
          const O = p.value[M[W]] || {},
            y = h.messageResolver(O, u);
          if (y != null) {
            N = y;
            break;
          }
        }
        return N;
      })(b);
      return l ?? ((t && t.tm(b)) || {});
    }),
    ($.d = function (...b) {
      return R(
        (l) => Reflect.apply(ft, null, [l, ...b]),
        () => Me(...b),
        "datetime format",
        (l) => Reflect.apply(l.d, l, [...b]),
        () => tt,
        (l) => T(l)
      );
    }),
    ($.n = function (...b) {
      return R(
        (l) => Reflect.apply(_t, null, [l, ...b]),
        () => we(...b),
        "number format",
        (l) => Reflect.apply(l.n, l, [...b]),
        () => tt,
        (l) => T(l)
      );
    }),
    ($.getDateTimeFormat = function (b) {
      return c.value[b] || {};
    }),
    ($.setDateTimeFormat = function (b, l) {
      (c.value[b] = l), (h.datetimeFormats = c.value), mt(h, b, l);
    }),
    ($.mergeDateTimeFormat = function (b, l) {
      (c.value[b] = te(c.value[b] || {}, l)),
        (h.datetimeFormats = c.value),
        mt(h, b, l);
    }),
    ($.getNumberFormat = function (b) {
      return d.value[b] || {};
    }),
    ($.setNumberFormat = function (b, l) {
      (d.value[b] = l), (h.numberFormats = d.value), pt(h, b, l);
    }),
    ($.mergeNumberFormat = function (b, l) {
      (d.value[b] = te(d.value[b] || {}, l)),
        (h.numberFormats = d.value),
        pt(h, b, l);
    }),
    ($[Vt] = e.__injectWithOption),
    ($[We] = function (...b) {
      return R(
        (l) => {
          let u;
          const N = l;
          try {
            (N.processor = B), (u = Reflect.apply(ct, null, [N, ...b]));
          } finally {
            N.processor = null;
          }
          return u;
        },
        () => Se(...b),
        "translate",
        (l) => l[We](...b),
        (l) => [gt(l)],
        (l) => j(l)
      );
    }),
    ($[Ue] = function (...b) {
      return R(
        (l) => Reflect.apply(ft, null, [l, ...b]),
        () => Me(...b),
        "datetime format",
        (l) => l[Ue](...b),
        () => [],
        (l) => T(l) || j(l)
      );
    }),
    ($[xe] = function (...b) {
      return R(
        (l) => Reflect.apply(_t, null, [l, ...b]),
        () => we(...b),
        "number format",
        (l) => l[xe](...b),
        () => [],
        (l) => T(l) || j(l)
      );
    }),
    $
  );
}
function Pe(e = {}, n) {
  {
    const t = Ge(
        (function (a) {
          const s = T(a.locale) ? a.locale : Ne,
            f =
              T(a.fallbackLocale) ||
              j(a.fallbackLocale) ||
              F(a.fallbackLocale) ||
              a.fallbackLocale === !1
                ? a.fallbackLocale
                : s,
            p = K(a.missing) ? a.missing : void 0,
            c =
              (!w(a.silentTranslationWarn) && !me(a.silentTranslationWarn)) ||
              !a.silentTranslationWarn,
            d =
              (!w(a.silentFallbackWarn) && !me(a.silentFallbackWarn)) ||
              !a.silentFallbackWarn,
            L = !w(a.fallbackRoot) || a.fallbackRoot,
            i = !!a.formatFallbackMessages,
            g = F(a.modifiers) ? a.modifiers : {},
            r = a.pluralizationRules,
            E = K(a.postTranslation) ? a.postTranslation : void 0,
            _ = !T(a.warnHtmlInMessage) || a.warnHtmlInMessage !== "off",
            m = !!a.escapeParameterHtml,
            v = !w(a.sync) || a.sync;
          let k = a.messages;
          if (F(a.sharedMessages)) {
            const q = a.sharedMessages;
            k = Object.keys(q).reduce((Z, ne) => {
              const R = Z[ne] || (Z[ne] = {});
              return te(R, q[ne]), Z;
            }, k || {});
          }
          const { __i18n: A, __root: h, __injectWithOption: S } = a,
            V = a.datetimeFormats,
            x = a.numberFormats;
          return {
            locale: s,
            fallbackLocale: f,
            messages: k,
            flatJson: a.flatJson,
            datetimeFormats: V,
            numberFormats: x,
            missing: p,
            missingWarn: c,
            fallbackWarn: d,
            fallbackRoot: L,
            fallbackFormat: i,
            modifiers: g,
            pluralRules: r,
            postTranslation: E,
            warnHtmlMessage: _,
            escapeParameter: m,
            messageResolver: a.messageResolver,
            inheritLocale: v,
            __i18n: A,
            __root: h,
            __injectWithOption: S,
          };
        })(e)
      ),
      o = {
        id: t.id,
        get locale() {
          return t.locale.value;
        },
        set locale(a) {
          t.locale.value = a;
        },
        get fallbackLocale() {
          return t.fallbackLocale.value;
        },
        set fallbackLocale(a) {
          t.fallbackLocale.value = a;
        },
        get messages() {
          return t.messages.value;
        },
        get datetimeFormats() {
          return t.datetimeFormats.value;
        },
        get numberFormats() {
          return t.numberFormats.value;
        },
        get availableLocales() {
          return t.availableLocales;
        },
        get formatter() {
          return { interpolate: () => [] };
        },
        set formatter(a) {},
        get missing() {
          return t.getMissingHandler();
        },
        set missing(a) {
          t.setMissingHandler(a);
        },
        get silentTranslationWarn() {
          return w(t.missingWarn) ? !t.missingWarn : t.missingWarn;
        },
        set silentTranslationWarn(a) {
          t.missingWarn = w(a) ? !a : a;
        },
        get silentFallbackWarn() {
          return w(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
        },
        set silentFallbackWarn(a) {
          t.fallbackWarn = w(a) ? !a : a;
        },
        get modifiers() {
          return t.modifiers;
        },
        get formatFallbackMessages() {
          return t.fallbackFormat;
        },
        set formatFallbackMessages(a) {
          t.fallbackFormat = a;
        },
        get postTranslation() {
          return t.getPostTranslationHandler();
        },
        set postTranslation(a) {
          t.setPostTranslationHandler(a);
        },
        get sync() {
          return t.inheritLocale;
        },
        set sync(a) {
          t.inheritLocale = a;
        },
        get warnHtmlInMessage() {
          return t.warnHtmlMessage ? "warn" : "off";
        },
        set warnHtmlInMessage(a) {
          t.warnHtmlMessage = a !== "off";
        },
        get escapeParameterHtml() {
          return t.escapeParameter;
        },
        set escapeParameterHtml(a) {
          t.escapeParameter = a;
        },
        get preserveDirectiveContent() {
          return !0;
        },
        set preserveDirectiveContent(a) {},
        get pluralizationRules() {
          return t.pluralRules || {};
        },
        __composer: t,
        t(...a) {
          const [s, f, p] = a,
            c = {};
          let d = null,
            L = null;
          if (!T(s)) throw Q(z.INVALID_ARGUMENT);
          const i = s;
          return (
            T(f) ? (c.locale = f) : j(f) ? (d = f) : F(f) && (L = f),
            j(p) ? (d = p) : F(p) && (L = p),
            Reflect.apply(t.t, t, [i, d || L || {}, c])
          );
        },
        rt: (...a) => Reflect.apply(t.rt, t, [...a]),
        tc(...a) {
          const [s, f, p] = a,
            c = { plural: 1 };
          let d = null,
            L = null;
          if (!T(s)) throw Q(z.INVALID_ARGUMENT);
          const i = s;
          return (
            T(f)
              ? (c.locale = f)
              : J(f)
              ? (c.plural = f)
              : j(f)
              ? (d = f)
              : F(f) && (L = f),
            T(p) ? (c.locale = p) : j(p) ? (d = p) : F(p) && (L = p),
            Reflect.apply(t.t, t, [i, d || L || {}, c])
          );
        },
        te: (a, s) => t.te(a, s),
        tm: (a) => t.tm(a),
        getLocaleMessage: (a) => t.getLocaleMessage(a),
        setLocaleMessage(a, s) {
          t.setLocaleMessage(a, s);
        },
        mergeLocaleMessage(a, s) {
          t.mergeLocaleMessage(a, s);
        },
        d: (...a) => Reflect.apply(t.d, t, [...a]),
        getDateTimeFormat: (a) => t.getDateTimeFormat(a),
        setDateTimeFormat(a, s) {
          t.setDateTimeFormat(a, s);
        },
        mergeDateTimeFormat(a, s) {
          t.mergeDateTimeFormat(a, s);
        },
        n: (...a) => Reflect.apply(t.n, t, [...a]),
        getNumberFormat: (a) => t.getNumberFormat(a),
        setNumberFormat(a, s) {
          t.setNumberFormat(a, s);
        },
        mergeNumberFormat(a, s) {
          t.mergeNumberFormat(a, s);
        },
        getChoiceIndex: (a, s) => -1,
        __onComponentInstanceCreated(a) {
          const { componentInstanceCreatedListener: s } = e;
          s && s(a, o);
        },
      };
    return o;
  }
}
const Xe = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: {
    type: String,
    validator: (e) => e === "parent" || e === "global",
    default: "parent",
  },
  i18n: { type: Object },
};
function jt(e) {
  return mn;
}
const Lt = {
  name: "i18n-t",
  props: te(
    {
      keypath: { type: String, required: !0 },
      plural: { type: [Number, String], validator: (e) => J(e) || !isNaN(e) },
    },
    Xe
  ),
  setup(e, n) {
    const { slots: t, attrs: o } = n,
      a = e.i18n || Be({ useScope: e.scope, __useComponent: !0 });
    return () => {
      const s = Object.keys(t).filter((i) => i !== "_"),
        f = {};
      e.locale && (f.locale = e.locale),
        e.plural !== void 0 && (f.plural = T(e.plural) ? +e.plural : e.plural);
      const p = (function ({ slots: i }, g) {
          return g.length === 1 && g[0] === "default"
            ? (i.default ? i.default() : []).reduce(
                (r, E) => [...r, ...(j(E.children) ? E.children : [E])],
                []
              )
            : g.reduce((r, E) => {
                const _ = i[E];
                return _ && (r[E] = _()), r;
              }, {});
        })(n, s),
        c = a[We](e.keypath, p, f),
        d = te({}, o),
        L = T(e.tag) || Y(e.tag) ? e.tag : jt();
      return Ot(L, d, c);
    };
  },
};
function Gt(e, n, t, o) {
  const { slots: a, attrs: s } = n;
  return () => {
    const f = { part: !0 };
    let p = {};
    e.locale && (f.locale = e.locale),
      T(e.format)
        ? (f.key = e.format)
        : Y(e.format) &&
          (T(e.format.key) && (f.key = e.format.key),
          (p = Object.keys(e.format).reduce(
            (g, r) => (t.includes(r) ? te({}, g, { [r]: e.format[r] }) : g),
            {}
          )));
    const c = o(e.value, f, p);
    let d = [f.key];
    j(c)
      ? (d = c.map((g, r) => {
          const E = a[g.type],
            _ = E ? E({ [g.type]: g.value, index: r, parts: c }) : [g.value];
          var m;
          return j((m = _)) && !T(m[0]) && (_[0].key = `${g.type}-${r}`), _;
        }))
      : T(c) && (d = [c]);
    const L = te({}, s),
      i = T(e.tag) || Y(e.tag) ? e.tag : jt();
    return Ot(i, L, d);
  };
}
const vt = {
    name: "i18n-n",
    props: te(
      {
        value: { type: Number, required: !0 },
        format: { type: [String, Object] },
      },
      Xe
    ),
    setup(e, n) {
      const t = e.i18n || Be({ useScope: "parent", __useComponent: !0 });
      return Gt(e, n, Ut, (...o) => t[xe](...o));
    },
  },
  kt = {
    name: "i18n-d",
    props: te(
      {
        value: { type: [Number, Date], required: !0 },
        format: { type: [String, Object] },
      },
      Xe
    ),
    setup(e, n) {
      const t = e.i18n || Be({ useScope: "parent", __useComponent: !0 });
      return Gt(e, n, Wt, (...o) => t[Ue](...o));
    },
  };
function Nt(e) {
  if (T(e)) return { path: e };
  if (F(e)) {
    if (!("path" in e)) throw Q(z.REQUIRED_VALUE);
    return e;
  }
  throw Q(z.INVALID_VALUE);
}
function ht(e) {
  const { path: n, locale: t, args: o, choice: a, plural: s } = e,
    f = {},
    p = o || {};
  return (
    T(t) && (f.locale = t),
    J(a) && (f.plural = a),
    J(s) && (f.plural = s),
    [n, p, f]
  );
}
function aa(e, n, ...t) {
  const o = F(t[0]) ? t[0] : {},
    a = !!o.useI18nComponentName;
  (!w(o.globalInstall) || o.globalInstall) &&
    (e.component(a ? "i18n" : Lt.name, Lt),
    e.component(vt.name, vt),
    e.component(kt.name, kt)),
    e.directive(
      "t",
      (function (s) {
        const f = (p) => {
          const { instance: c, modifiers: d, value: L } = p;
          if (!c || !c.$) throw Q(z.UNEXPECTED_ERROR);
          const i = (function (r, E) {
              const _ = r;
              if (r.mode === "composition")
                return _.__getInstance(E) || r.global;
              {
                const m = _.__getInstance(E);
                return m != null ? m.__composer : r.global.__composer;
              }
            })(s, c.$),
            g = Nt(L);
          return [Reflect.apply(i.t, i, [...ht(g)]), i];
        };
        return {
          created: (p, c) => {
            const [d, L] = f(c);
            Re &&
              s.global === L &&
              (p.__i18nWatcher = Fe(L.locale, () => {
                c.instance && c.instance.$forceUpdate();
              })),
              (p.__composer = L),
              (p.textContent = d);
          },
          unmounted: (p) => {
            Re &&
              p.__i18nWatcher &&
              (p.__i18nWatcher(),
              (p.__i18nWatcher = void 0),
              delete p.__i18nWatcher),
              p.__composer && ((p.__composer = void 0), delete p.__composer);
          },
          beforeUpdate: (p, { value: c }) => {
            if (p.__composer) {
              const d = p.__composer,
                L = Nt(c);
              p.textContent = Reflect.apply(d.t, d, [...ht(L)]);
            }
          },
          getSSRProps: (p) => {
            const [c] = f(p);
            return { textContent: c };
          },
        };
      })(n)
    );
}
function It(e, n) {
  (e.locale = n.locale || e.locale),
    (e.fallbackLocale = n.fallbackLocale || e.fallbackLocale),
    (e.missing = n.missing || e.missing),
    (e.silentTranslationWarn = n.silentTranslationWarn || e.silentFallbackWarn),
    (e.silentFallbackWarn = n.silentFallbackWarn || e.silentFallbackWarn),
    (e.formatFallbackMessages =
      n.formatFallbackMessages || e.formatFallbackMessages),
    (e.postTranslation = n.postTranslation || e.postTranslation),
    (e.warnHtmlInMessage = n.warnHtmlInMessage || e.warnHtmlInMessage),
    (e.escapeParameterHtml = n.escapeParameterHtml || e.escapeParameterHtml),
    (e.sync = n.sync || e.sync),
    e.__composer[$t](n.pluralizationRules || e.pluralizationRules);
  const t = Ae(e.locale, { messages: n.messages, __i18n: n.__i18n });
  return (
    Object.keys(t).forEach((o) => e.mergeLocaleMessage(o, t[o])),
    n.datetimeFormats &&
      Object.keys(n.datetimeFormats).forEach((o) =>
        e.mergeDateTimeFormat(o, n.datetimeFormats[o])
      ),
    n.numberFormats &&
      Object.keys(n.numberFormats).forEach((o) =>
        e.mergeNumberFormat(o, n.numberFormats[o])
      ),
    e
  );
}
const ra = _e("global-vue-i18n");
function ca(e = {}, n) {
  const t =
      __VUE_I18N_LEGACY_API__ && w(e.legacy)
        ? e.legacy
        : __VUE_I18N_LEGACY_API__,
    o = !w(e.globalInjection) || e.globalInjection,
    a = !__VUE_I18N_LEGACY_API__ || !t || !!e.allowComposition,
    s = new Map(),
    [f, p] = (function (d, L, i) {
      const g = ln();
      {
        const r =
          __VUE_I18N_LEGACY_API__ && L
            ? g.run(() => Pe(d))
            : g.run(() => Ge(d));
        if (r == null) throw Q(z.UNEXPECTED_ERROR);
        return [g, r];
      }
    })(e, t),
    c = _e("");
  {
    const d = {
      get mode() {
        return __VUE_I18N_LEGACY_API__ && t ? "legacy" : "composition";
      },
      get allowComposition() {
        return a;
      },
      async install(L, ...i) {
        (L.__VUE_I18N_SYMBOL__ = c),
          L.provide(L.__VUE_I18N_SYMBOL__, d),
          !t &&
            o &&
            (function (r, E) {
              const _ = Object.create(null);
              la.forEach((m) => {
                const v = Object.getOwnPropertyDescriptor(E, m);
                if (!v) throw Q(z.UNEXPECTED_ERROR);
                const k = _n(v.value)
                  ? {
                      get: () => v.value.value,
                      set(A) {
                        v.value.value = A;
                      },
                    }
                  : { get: () => v.get && v.get() };
                Object.defineProperty(_, m, k);
              }),
                (r.config.globalProperties.$i18n = _),
                oa.forEach((m) => {
                  const v = Object.getOwnPropertyDescriptor(E, m);
                  if (!v || !v.value) throw Q(z.UNEXPECTED_ERROR);
                  Object.defineProperty(r.config.globalProperties, `$${m}`, v);
                });
            })(L, d.global),
          __VUE_I18N_FULL_INSTALL__ && aa(L, d, ...i),
          __VUE_I18N_LEGACY_API__ &&
            t &&
            L.mixin(
              (function (r, E, _) {
                return {
                  beforeCreate() {
                    const m = ve();
                    if (!m) throw Q(z.UNEXPECTED_ERROR);
                    const v = this.$options;
                    if (v.i18n) {
                      const k = v.i18n;
                      v.__i18n && (k.__i18n = v.__i18n),
                        (k.__root = E),
                        this === this.$root
                          ? (this.$i18n = It(r, k))
                          : ((k.__injectWithOption = !0), (this.$i18n = Pe(k)));
                    } else
                      v.__i18n
                        ? this === this.$root
                          ? (this.$i18n = It(r, v))
                          : (this.$i18n = Pe({
                              __i18n: v.__i18n,
                              __injectWithOption: !0,
                              __root: E,
                            }))
                        : (this.$i18n = r);
                    v.__i18nGlobal && Yt(E, v, v),
                      r.__onComponentInstanceCreated(this.$i18n),
                      _.__setInstance(m, this.$i18n),
                      (this.$t = (...k) => this.$i18n.t(...k)),
                      (this.$rt = (...k) => this.$i18n.rt(...k)),
                      (this.$tc = (...k) => this.$i18n.tc(...k)),
                      (this.$te = (k, A) => this.$i18n.te(k, A)),
                      (this.$d = (...k) => this.$i18n.d(...k)),
                      (this.$n = (...k) => this.$i18n.n(...k)),
                      (this.$tm = (k) => this.$i18n.tm(k));
                  },
                  mounted() {},
                  unmounted() {
                    const m = ve();
                    if (!m) throw Q(z.UNEXPECTED_ERROR);
                    delete this.$t,
                      delete this.$rt,
                      delete this.$tc,
                      delete this.$te,
                      delete this.$d,
                      delete this.$n,
                      delete this.$tm,
                      _.__deleteInstance(m),
                      delete this.$i18n;
                  },
                };
              })(p, p.__composer, d)
            );
        const g = L.unmount;
        L.unmount = () => {
          d.dispose(), g();
        };
      },
      get global() {
        return p;
      },
      dispose() {
        f.stop();
      },
      __instances: s,
      __getInstance: function (L) {
        return s.get(L) || null;
      },
      __setInstance: function (L, i) {
        s.set(L, i);
      },
      __deleteInstance: function (L) {
        s.delete(L);
      },
    };
    return d;
  }
}
function Be(e = {}) {
  const n = ve();
  if (n == null) throw Q(z.MUST_BE_CALL_SETUP_TOP);
  if (
    !n.isCE &&
    n.appContext.app != null &&
    !n.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw Q(z.NOT_INSLALLED);
  const t = (function (c) {
      {
        const d = on(c.isCE ? ra : c.appContext.app.__VUE_I18N_SYMBOL__);
        if (!d)
          throw Q(c.isCE ? z.NOT_INSLALLED_WITH_PROVIDE : z.UNEXPECTED_ERROR);
        return d;
      }
    })(n),
    o = (function (c) {
      return c.mode === "composition" ? c.global : c.global.__composer;
    })(t),
    a = Ht(n),
    s = (function (c, d) {
      return Te(c)
        ? "__i18n" in d
          ? "local"
          : "global"
        : c.useScope
        ? c.useScope
        : "local";
    })(e, a);
  if (__VUE_I18N_LEGACY_API__ && t.mode === "legacy" && !e.__useComponent) {
    if (!t.allowComposition) throw Q(z.NOT_AVAILABLE_IN_LEGACY_MODE);
    return (function (c, d, L, i = {}) {
      const g = d === "local",
        r = un(null);
      if (g && c.proxy && !c.proxy.$options.i18n && !c.proxy.$options.__i18n)
        throw Q(z.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
      const E = !w(i.inheritLocale) || i.inheritLocale,
        _ = se(g && E ? L.locale.value : T(i.locale) ? i.locale : Ne),
        m = se(
          g && E
            ? L.fallbackLocale.value
            : T(i.fallbackLocale) ||
              j(i.fallbackLocale) ||
              F(i.fallbackLocale) ||
              i.fallbackLocale === !1
            ? i.fallbackLocale
            : _.value
        ),
        v = se(Ae(_.value, i)),
        k = se(F(i.datetimeFormats) ? i.datetimeFormats : { [_.value]: {} }),
        A = se(F(i.numberFormats) ? i.numberFormats : { [_.value]: {} }),
        h = g
          ? L.missingWarn
          : (!w(i.missingWarn) && !me(i.missingWarn)) || i.missingWarn,
        S = g
          ? L.fallbackWarn
          : (!w(i.fallbackWarn) && !me(i.fallbackWarn)) || i.fallbackWarn,
        V = g ? L.fallbackRoot : !w(i.fallbackRoot) || i.fallbackRoot,
        x = !!i.fallbackFormat,
        q = K(i.missing) ? i.missing : null,
        Z = K(i.postTranslation) ? i.postTranslation : null,
        ne = g ? L.warnHtmlMessage : !w(i.warnHtmlMessage) || i.warnHtmlMessage,
        R = !!i.escapeParameter,
        P = g ? L.modifiers : F(i.modifiers) ? i.modifiers : {},
        B = i.pluralRules || (g && L.pluralRules);
      function ee() {
        return [_.value, m.value, v.value, k.value, A.value];
      }
      const $ = ce({
          get: () => (r.value ? r.value.locale.value : _.value),
          set: (I) => {
            r.value && (r.value.locale.value = I), (_.value = I);
          },
        }),
        b = ce({
          get: () => (r.value ? r.value.fallbackLocale.value : m.value),
          set: (I) => {
            r.value && (r.value.fallbackLocale.value = I), (m.value = I);
          },
        }),
        l = ce(() => (r.value ? r.value.messages.value : v.value)),
        u = ce(() => k.value),
        N = ce(() => A.value);
      function M() {
        return r.value ? r.value.getPostTranslationHandler() : Z;
      }
      function W(I) {
        r.value && r.value.setPostTranslationHandler(I);
      }
      function O() {
        return r.value ? r.value.getMissingHandler() : q;
      }
      function y(I) {
        r.value && r.value.setMissingHandler(I);
      }
      function C(I) {
        return ee(), I();
      }
      function D(...I) {
        return r.value
          ? C(() => Reflect.apply(r.value.t, null, [...I]))
          : C(() => "");
      }
      function H(...I) {
        return r.value ? Reflect.apply(r.value.rt, null, [...I]) : "";
      }
      function X(...I) {
        return r.value
          ? C(() => Reflect.apply(r.value.d, null, [...I]))
          : C(() => "");
      }
      function he(...I) {
        return r.value
          ? C(() => Reflect.apply(r.value.n, null, [...I]))
          : C(() => "");
      }
      function Xt(I) {
        return r.value ? r.value.tm(I) : {};
      }
      function Bt(I, G) {
        return !!r.value && r.value.te(I, G);
      }
      function Kt(I) {
        return r.value ? r.value.getLocaleMessage(I) : {};
      }
      function zt(I, G) {
        r.value && (r.value.setLocaleMessage(I, G), (v.value[I] = G));
      }
      function Jt(I, G) {
        r.value && r.value.mergeLocaleMessage(I, G);
      }
      function Qt(I) {
        return r.value ? r.value.getDateTimeFormat(I) : {};
      }
      function qt(I, G) {
        r.value && (r.value.setDateTimeFormat(I, G), (k.value[I] = G));
      }
      function Zt(I, G) {
        r.value && r.value.mergeDateTimeFormat(I, G);
      }
      function en(I) {
        return r.value ? r.value.getNumberFormat(I) : {};
      }
      function tn(I, G) {
        r.value && (r.value.setNumberFormat(I, G), (A.value[I] = G));
      }
      function nn(I, G) {
        r.value && r.value.mergeNumberFormat(I, G);
      }
      const an = {
        get id() {
          return r.value ? r.value.id : -1;
        },
        locale: $,
        fallbackLocale: b,
        messages: l,
        datetimeFormats: u,
        numberFormats: N,
        get inheritLocale() {
          return r.value ? r.value.inheritLocale : E;
        },
        set inheritLocale(I) {
          r.value && (r.value.inheritLocale = I);
        },
        get availableLocales() {
          return r.value ? r.value.availableLocales : Object.keys(v.value);
        },
        get modifiers() {
          return r.value ? r.value.modifiers : P;
        },
        get pluralRules() {
          return r.value ? r.value.pluralRules : B;
        },
        get isGlobal() {
          return !!r.value && r.value.isGlobal;
        },
        get missingWarn() {
          return r.value ? r.value.missingWarn : h;
        },
        set missingWarn(I) {
          r.value && (r.value.missingWarn = I);
        },
        get fallbackWarn() {
          return r.value ? r.value.fallbackWarn : S;
        },
        set fallbackWarn(I) {
          r.value && (r.value.missingWarn = I);
        },
        get fallbackRoot() {
          return r.value ? r.value.fallbackRoot : V;
        },
        set fallbackRoot(I) {
          r.value && (r.value.fallbackRoot = I);
        },
        get fallbackFormat() {
          return r.value ? r.value.fallbackFormat : x;
        },
        set fallbackFormat(I) {
          r.value && (r.value.fallbackFormat = I);
        },
        get warnHtmlMessage() {
          return r.value ? r.value.warnHtmlMessage : ne;
        },
        set warnHtmlMessage(I) {
          r.value && (r.value.warnHtmlMessage = I);
        },
        get escapeParameter() {
          return r.value ? r.value.escapeParameter : R;
        },
        set escapeParameter(I) {
          r.value && (r.value.escapeParameter = I);
        },
        t: D,
        getPostTranslationHandler: M,
        setPostTranslationHandler: W,
        getMissingHandler: O,
        setMissingHandler: y,
        rt: H,
        d: X,
        n: he,
        tm: Xt,
        te: Bt,
        getLocaleMessage: Kt,
        setLocaleMessage: zt,
        mergeLocaleMessage: Jt,
        getDateTimeFormat: Qt,
        setDateTimeFormat: qt,
        mergeDateTimeFormat: Zt,
        getNumberFormat: en,
        setNumberFormat: tn,
        mergeNumberFormat: nn,
      };
      function rn(I) {
        (I.locale.value = _.value),
          (I.fallbackLocale.value = m.value),
          Object.keys(v.value).forEach((G) => {
            I.mergeLocaleMessage(G, v.value[G]);
          }),
          Object.keys(k.value).forEach((G) => {
            I.mergeDateTimeFormat(G, k.value[G]);
          }),
          Object.keys(A.value).forEach((G) => {
            I.mergeNumberFormat(G, A.value[G]);
          }),
          (I.escapeParameter = R),
          (I.fallbackFormat = x),
          (I.fallbackRoot = V),
          (I.fallbackWarn = S),
          (I.missingWarn = h),
          (I.warnHtmlMessage = ne);
      }
      return (
        fn(() => {
          if (c.proxy == null || c.proxy.$i18n == null)
            throw Q(z.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
          const I = (r.value = c.proxy.$i18n.__composer);
          d === "global"
            ? ((_.value = I.locale.value),
              (m.value = I.fallbackLocale.value),
              (v.value = I.messages.value),
              (k.value = I.datetimeFormats.value),
              (A.value = I.numberFormats.value))
            : g && rn(I);
        }),
        an
      );
    })(n, s, o, e);
  }
  if (s === "global") return Yt(o, e, a), o;
  if (s === "parent") {
    let c = (function (d, L, i = !1) {
      let g = null;
      const r = L.root;
      let E = L.parent;
      for (; E != null; ) {
        const _ = d;
        if (d.mode === "composition") g = _.__getInstance(E);
        else if (__VUE_I18N_LEGACY_API__) {
          const m = _.__getInstance(E);
          m != null && ((g = m.__composer), i && g && !g[Vt] && (g = null));
        }
        if (g != null || r === E) break;
        E = E.parent;
      }
      return g;
    })(t, n, e.__useComponent);
    return c == null && (c = o), c;
  }
  const f = t;
  let p = f.__getInstance(n);
  if (p == null) {
    const c = te({}, e);
    "__i18n" in a && (c.__i18n = a.__i18n),
      o && (c.__root = o),
      (p = Ge(c)),
      (function (d, L, i) {
        sn(() => {}, L),
          cn(() => {
            d.__deleteInstance(L);
          }, L);
      })(f, n),
      f.__setInstance(n, p);
  }
  return p;
}
const la = ["locale", "fallbackLocale", "availableLocales"],
  oa = ["t", "rt", "d", "n", "tm"];
var Tt, yt;
if (
  ((Tt = function (e, n = {}) {
    {
      const t = (n.onCacheKey || ea)(e),
        o = ot[t];
      if (o) return o;
      let a = !1;
      const s = n.onError || Nn;
      n.onError = (c) => {
        (a = !0), s(c);
      };
      const { code: f } = (function (c, d = {}) {
          const L = te({}, d),
            i = Rn(L).parse(c);
          return Dn(i, L), Sn(i, L);
        })(e, n),
        p = new Function(`return ${f}`)();
      return a ? p : (ot[t] = p);
    }
  }),
  (Ft = Tt),
  (Rt = function (e, n) {
    if (!Y(e)) return null;
    let t = qe.get(n);
    if (
      (t ||
        ((t = (function (f) {
          const p = [];
          let c,
            d,
            L,
            i,
            g,
            r,
            E,
            _ = -1,
            m = 0,
            v = 0;
          const k = [];
          function A() {
            const h = f[_ + 1];
            if ((m === 5 && h === "'") || (m === 6 && h === '"'))
              return _++, (L = "\\" + h), k[0](), !0;
          }
          for (
            k[0] = () => {
              d === void 0 ? (d = L) : (d += L);
            },
              k[1] = () => {
                d !== void 0 && (p.push(d), (d = void 0));
              },
              k[2] = () => {
                k[0](), v++;
              },
              k[3] = () => {
                if (v > 0) v--, (m = 4), k[0]();
                else {
                  if (((v = 0), d === void 0 || ((d = Wn(d)), d === !1)))
                    return !1;
                  k[1]();
                }
              };
            m !== null;

          )
            if ((_++, (c = f[_]), c !== "\\" || !A())) {
              if (
                ((i = wn(c)),
                (E = fe[m]),
                (g = E[i] || E.l || 8),
                g === 8 ||
                  ((m = g[0]),
                  g[1] !== void 0 &&
                    ((r = k[g[1]]), r && ((L = c), r() === !1))))
              )
                return;
              if (m === 7) return p;
            }
        })(n)),
        t && qe.set(n, t)),
      !t)
    )
      return null;
    const o = t.length;
    let a = e,
      s = 0;
    for (; s < o; ) {
      const f = a[t[s]];
      if (f === void 0) return null;
      (a = f), s++;
    }
    return a;
  }),
  (Dt = Pt),
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" &&
    (be().__VUE_I18N_FULL_INSTALL__ = !0),
  typeof __VUE_I18N_LEGACY_API__ != "boolean" &&
    (be().__VUE_I18N_LEGACY_API__ = !0),
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" &&
    (be().__INTLIFY_PROD_DEVTOOLS__ = !1),
  __INTLIFY_PROD_DEVTOOLS__)
) {
  const e = be();
  (e.__INTLIFY__ = !0), (yt = e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__), (ke = yt);
}
export { ca as c };
