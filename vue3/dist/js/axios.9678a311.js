function Ot(t, e) {
  return function () {
    return t.apply(e, arguments);
  };
}
const { toString: St } = Object.prototype,
  { getPrototypeOf: X } = Object,
  Q =
    ((I = Object.create(null)),
    (t) => {
      const e = St.call(t);
      return I[e] || (I[e] = e.slice(8, -1).toLowerCase());
    });
var I;
const S = (t) => ((t = t.toLowerCase()), (e) => Q(e) === t),
  q = (t) => (e) => typeof e === t,
  { isArray: T } = Array,
  v = q("undefined"),
  nt = S("ArrayBuffer"),
  Ut = q("string"),
  R = q("function"),
  rt = q("number"),
  M = (t) => t !== null && typeof t == "object",
  P = (t) => {
    if (Q(t) !== "object") return !1;
    const e = X(t);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  },
  _t = S("Date"),
  Bt = S("File"),
  Ft = S("Blob"),
  Lt = S("FileList"),
  Dt = S("URLSearchParams");
function C(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u") return;
  let r, o;
  if ((typeof t != "object" && (t = [t]), T(t)))
    for (r = 0, o = t.length; r < o; r++) e.call(null, t[r], r, t);
  else {
    const i = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
      s = i.length;
    let f;
    for (r = 0; r < s; r++) (f = i[r]), e.call(null, t[f], f, t);
  }
}
function ot(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r,
    o = n.length;
  for (; o-- > 0; ) if (((r = n[o]), e === r.toLowerCase())) return r;
  return null;
}
const Rt =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  st = (t) => !v(t) && t !== Rt,
  kt =
    ((z = typeof Uint8Array < "u" && X(Uint8Array)),
    (t) => z && t instanceof z);
var z;
const qt = S("HTMLFormElement"),
  it = (
    ({ hasOwnProperty: t }) =>
    (e, n) =>
      t.call(e, n)
  )(Object.prototype),
  It = S("RegExp"),
  at = (t, e) => {
    const n = Object.getOwnPropertyDescriptors(t),
      r = {};
    C(n, (o, i) => {
      e(o, i, t) !== !1 && (r[i] = o);
    }),
      Object.defineProperties(t, r);
  },
  H = "abcdefghijklmnopqrstuvwxyz",
  ct = "0123456789",
  ut = { DIGIT: ct, ALPHA: H, ALPHA_DIGIT: H + H.toUpperCase() + ct },
  a = {
    isArray: T,
    isArrayBuffer: nt,
    isBuffer: function (t) {
      return (
        t !== null &&
        !v(t) &&
        t.constructor !== null &&
        !v(t.constructor) &&
        R(t.constructor.isBuffer) &&
        t.constructor.isBuffer(t)
      );
    },
    isFormData: (t) => {
      const e = "[object FormData]";
      return (
        t &&
        ((typeof FormData == "function" && t instanceof FormData) ||
          St.call(t) === e ||
          (R(t.toString) && t.toString() === e))
      );
    },
    isArrayBufferView: function (t) {
      let e;
      return (
        (e =
          typeof ArrayBuffer < "u" && ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t && t.buffer && nt(t.buffer)),
        e
      );
    },
    isString: Ut,
    isNumber: rt,
    isBoolean: (t) => t === !0 || t === !1,
    isObject: M,
    isPlainObject: P,
    isUndefined: v,
    isDate: _t,
    isFile: Bt,
    isBlob: Ft,
    isRegExp: It,
    isFunction: R,
    isStream: (t) => M(t) && R(t.pipe),
    isURLSearchParams: Dt,
    isTypedArray: kt,
    isFileList: Lt,
    forEach: C,
    merge: function t() {
      const { caseless: e } = (st(this) && this) || {},
        n = {},
        r = (o, i) => {
          const s = (e && ot(n, i)) || i;
          P(n[s]) && P(o)
            ? (n[s] = t(n[s], o))
            : P(o)
            ? (n[s] = t({}, o))
            : T(o)
            ? (n[s] = o.slice())
            : (n[s] = o);
        };
      for (let o = 0, i = arguments.length; o < i; o++)
        arguments[o] && C(arguments[o], r);
      return n;
    },
    extend: (t, e, n, { allOwnKeys: r } = {}) => (
      C(
        e,
        (o, i) => {
          n && R(o) ? (t[i] = Ot(o, n)) : (t[i] = o);
        },
        { allOwnKeys: r }
      ),
      t
    ),
    trim: (t) =>
      t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
    stripBOM: (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
    inherits: (t, e, n, r) => {
      (t.prototype = Object.create(e.prototype, r)),
        (t.prototype.constructor = t),
        Object.defineProperty(t, "super", { value: e.prototype }),
        n && Object.assign(t.prototype, n);
    },
    toFlatObject: (t, e, n, r) => {
      let o, i, s;
      const f = {};
      if (((e = e || {}), t == null)) return e;
      do {
        for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
          (s = o[i]),
            (r && !r(s, t, e)) || f[s] || ((e[s] = t[s]), (f[s] = !0));
        t = n !== !1 && X(t);
      } while (t && (!n || n(t, e)) && t !== Object.prototype);
      return e;
    },
    kindOf: Q,
    kindOfTest: S,
    endsWith: (t, e, n) => {
      (t = String(t)),
        (n === void 0 || n > t.length) && (n = t.length),
        (n -= e.length);
      const r = t.indexOf(e, n);
      return r !== -1 && r === n;
    },
    toArray: (t) => {
      if (!t) return null;
      if (T(t)) return t;
      let e = t.length;
      if (!rt(e)) return null;
      const n = new Array(e);
      for (; e-- > 0; ) n[e] = t[e];
      return n;
    },
    forEachEntry: (t, e) => {
      const n = (t && t[Symbol.iterator]).call(t);
      let r;
      for (; (r = n.next()) && !r.done; ) {
        const o = r.value;
        e.call(t, o[0], o[1]);
      }
    },
    matchAll: (t, e) => {
      let n;
      const r = [];
      for (; (n = t.exec(e)) !== null; ) r.push(n);
      return r;
    },
    isHTMLForm: qt,
    hasOwnProperty: it,
    hasOwnProp: it,
    reduceDescriptors: at,
    freezeMethods: (t) => {
      at(t, (e, n) => {
        if (R(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
          return !1;
        const r = t[n];
        R(r) &&
          ((e.enumerable = !1),
          "writable" in e
            ? (e.writable = !1)
            : e.set ||
              (e.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'");
              }));
      });
    },
    toObjectSet: (t, e) => {
      const n = {},
        r = (o) => {
          o.forEach((i) => {
            n[i] = !0;
          });
        };
      return T(t) ? r(t) : r(String(t).split(e)), n;
    },
    toCamelCase: (t) =>
      t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, n, r) {
        return n.toUpperCase() + r;
      }),
    noop: () => {},
    toFiniteNumber: (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
    findKey: ot,
    global: Rt,
    isContextDefined: st,
    ALPHABET: ut,
    generateString: (t = 16, e = ut.ALPHA_DIGIT) => {
      let n = "";
      const { length: r } = e;
      for (; t--; ) n += e[(Math.random() * r) | 0];
      return n;
    },
    isSpecCompliantForm: function (t) {
      return !!(
        t &&
        R(t.append) &&
        t[Symbol.toStringTag] === "FormData" &&
        t[Symbol.iterator]
      );
    },
    toJSONObject: (t) => {
      const e = new Array(10),
        n = (r, o) => {
          if (M(r)) {
            if (e.indexOf(r) >= 0) return;
            if (!("toJSON" in r)) {
              e[o] = r;
              const i = T(r) ? [] : {};
              return (
                C(r, (s, f) => {
                  const c = n(s, o + 1);
                  !v(c) && (i[f] = c);
                }),
                (e[o] = void 0),
                i
              );
            }
          }
          return r;
        };
      return n(t, 0);
    },
  };
function y(t, e, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    e && (this.code = e),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
a.inherits(y, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: a.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const lt = y.prototype,
  ft = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((t) => {
  ft[t] = { value: t };
}),
  Object.defineProperties(y, ft),
  Object.defineProperty(lt, "isAxiosError", { value: !0 }),
  (y.from = (t, e, n, r, o, i) => {
    const s = Object.create(lt);
    return (
      a.toFlatObject(
        t,
        s,
        function (f) {
          return f !== Error.prototype;
        },
        (f) => f !== "isAxiosError"
      ),
      y.call(s, t.message, e, n, r, o),
      (s.cause = t),
      (s.name = t.name),
      i && Object.assign(s, i),
      s
    );
  });
function J(t) {
  return a.isPlainObject(t) || a.isArray(t);
}
function At(t) {
  return a.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function dt(t, e, n) {
  return t
    ? t
        .concat(e)
        .map(function (r, o) {
          return (r = At(r)), !n && o ? "[" + r + "]" : r;
        })
        .join(n ? "." : "")
    : e;
}
const Mt = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function D(t, e, n) {
  if (!a.isObject(t)) throw new TypeError("target must be an object");
  e = e || new FormData();
  const r = (n = a.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (l, p) {
        return !a.isUndefined(p[l]);
      }
    )).metaTokens,
    o = n.visitor || u,
    i = n.dots,
    s = n.indexes,
    f = (n.Blob || (typeof Blob < "u" && Blob)) && a.isSpecCompliantForm(e);
  if (!a.isFunction(o)) throw new TypeError("visitor must be a function");
  function c(l) {
    if (l === null) return "";
    if (a.isDate(l)) return l.toISOString();
    if (!f && a.isBlob(l))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(l) || a.isTypedArray(l)
      ? f && typeof Blob == "function"
        ? new Blob([l])
        : Buffer.from(l)
      : l;
  }
  function u(l, p, m) {
    let g = l;
    if (l && !m && typeof l == "object") {
      if (a.endsWith(p, "{}"))
        (p = r ? p : p.slice(0, -2)), (l = JSON.stringify(l));
      else if (
        (a.isArray(l) &&
          (function (b) {
            return a.isArray(b) && !b.some(J);
          })(l)) ||
        ((a.isFileList(l) || a.endsWith(p, "[]")) && (g = a.toArray(l)))
      )
        return (
          (p = At(p)),
          g.forEach(function (b, Pt) {
            !a.isUndefined(b) &&
              b !== null &&
              e.append(
                s === !0 ? dt([p], Pt, i) : s === null ? p : p + "[]",
                c(b)
              );
          }),
          !1
        );
    }
    return !!J(l) || (e.append(dt(m, p, i), c(l)), !1);
  }
  const d = [],
    h = Object.assign(Mt, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: J,
    });
  if (!a.isObject(t)) throw new TypeError("data must be an object");
  return (
    (function l(p, m) {
      if (!a.isUndefined(p)) {
        if (d.indexOf(p) !== -1)
          throw Error("Circular reference detected in " + m.join("."));
        d.push(p),
          a.forEach(p, function (g, b) {
            (!(a.isUndefined(g) || g === null) &&
              o.call(e, g, a.isString(b) ? b.trim() : b, m, h)) === !0 &&
              l(g, m ? m.concat(b) : [b]);
          }),
          d.pop();
      }
    })(t),
    e
  );
}
function pt(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (n) {
    return e[n];
  });
}
function Z(t, e) {
  (this._pairs = []), t && D(t, this, e);
}
const ht = Z.prototype;
function zt(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Tt(t, e, n) {
  if (!e) return t;
  const r = (n && n.encode) || zt,
    o = n && n.serialize;
  let i;
  if (
    ((i = o
      ? o(e, n)
      : a.isURLSearchParams(e)
      ? e.toString()
      : new Z(e, n).toString(r)),
    i)
  ) {
    const s = t.indexOf("#");
    s !== -1 && (t = t.slice(0, s)),
      (t += (t.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return t;
}
(ht.append = function (t, e) {
  this._pairs.push([t, e]);
}),
  (ht.toString = function (t) {
    const e = t
      ? function (n) {
          return t.call(this, n, pt);
        }
      : pt;
    return this._pairs
      .map(function (n) {
        return e(n[0]) + "=" + e(n[1]);
      }, "")
      .join("&");
  });
const mt = class {
    constructor() {
      this.handlers = [];
    }
    use(t, e, n) {
      return (
        this.handlers.push({
          fulfilled: t,
          rejected: e,
          synchronous: !!n && n.synchronous,
          runWhen: n ? n.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(t) {
      this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(t) {
      a.forEach(this.handlers, function (e) {
        e !== null && t(e);
      });
    }
  },
  Nt = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  w = {
    isBrowser: !0,
    classes: {
      URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : Z,
      FormData: typeof FormData < "u" ? FormData : null,
      Blob: typeof Blob < "u" ? Blob : null,
    },
    isStandardBrowserEnv: (() => {
      let t;
      return (
        (typeof navigator > "u" ||
          ((t = navigator.product) !== "ReactNative" &&
            t !== "NativeScript" &&
            t !== "NS")) &&
        typeof window < "u" &&
        typeof document < "u"
      );
    })(),
    isStandardBrowserWebWorkerEnv:
      typeof WorkerGlobalScope < "u" &&
      self instanceof WorkerGlobalScope &&
      typeof self.importScripts == "function",
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function jt(t) {
  function e(n, r, o, i) {
    let s = n[i++];
    const f = Number.isFinite(+s),
      c = i >= n.length;
    return (
      (s = !s && a.isArray(o) ? o.length : s),
      c
        ? (a.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !f)
        : ((o[s] && a.isObject(o[s])) || (o[s] = []),
          e(n, r, o[s], i) &&
            a.isArray(o[s]) &&
            (o[s] = (function (u) {
              const d = {},
                h = Object.keys(u);
              let l;
              const p = h.length;
              let m;
              for (l = 0; l < p; l++) (m = h[l]), (d[m] = u[m]);
              return d;
            })(o[s])),
          !f)
    );
  }
  if (a.isFormData(t) && a.isFunction(t.entries)) {
    const n = {};
    return (
      a.forEachEntry(t, (r, o) => {
        e(
          (function (i) {
            return a
              .matchAll(/\w+|\[(\w*)]/g, i)
              .map((s) => (s[0] === "[]" ? "" : s[1] || s[0]));
          })(r),
          o,
          n,
          0
        );
      }),
      n
    );
  }
  return null;
}
const Ht = { "Content-Type": void 0 },
  k = {
    transitional: Nt,
    adapter: ["xhr", "http"],
    transformRequest: [
      function (t, e) {
        const n = e.getContentType() || "",
          r = n.indexOf("application/json") > -1,
          o = a.isObject(t);
        if ((o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)))
          return r && r ? JSON.stringify(jt(t)) : t;
        if (
          a.isArrayBuffer(t) ||
          a.isBuffer(t) ||
          a.isStream(t) ||
          a.isFile(t) ||
          a.isBlob(t)
        )
          return t;
        if (a.isArrayBufferView(t)) return t.buffer;
        if (a.isURLSearchParams(t))
          return (
            e.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            t.toString()
          );
        let i;
        if (o) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return (function (s, f) {
              return D(
                s,
                new w.classes.URLSearchParams(),
                Object.assign(
                  {
                    visitor: function (c, u, d, h) {
                      return w.isNode && a.isBuffer(c)
                        ? (this.append(u, c.toString("base64")), !1)
                        : h.defaultVisitor.apply(this, arguments);
                    },
                  },
                  f
                )
              );
            })(t, this.formSerializer).toString();
          if ((i = a.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
            const s = this.env && this.env.FormData;
            return D(
              i ? { "files[]": t } : t,
              s && new s(),
              this.formSerializer
            );
          }
        }
        return o || r
          ? (e.setContentType("application/json", !1),
            (function (s, f, c) {
              if (a.isString(s))
                try {
                  return (f || JSON.parse)(s), a.trim(s);
                } catch (u) {
                  if (u.name !== "SyntaxError") throw u;
                }
              return (c || JSON.stringify)(s);
            })(t))
          : t;
      },
    ],
    transformResponse: [
      function (t) {
        const e = this.transitional || k.transitional,
          n = e && e.forcedJSONParsing,
          r = this.responseType === "json";
        if (t && a.isString(t) && ((n && !this.responseType) || r)) {
          const o = !(e && e.silentJSONParsing) && r;
          try {
            return JSON.parse(t);
          } catch (i) {
            if (o)
              throw i.name === "SyntaxError"
                ? y.from(i, y.ERR_BAD_RESPONSE, this, null, this.response)
                : i;
          }
        }
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: w.classes.FormData, Blob: w.classes.Blob },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
a.forEach(["delete", "get", "head"], function (t) {
  k.headers[t] = {};
}),
  a.forEach(["post", "put", "patch"], function (t) {
    k.headers[t] = a.merge(Ht);
  });
const Y = k,
  Jt = a.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  yt = Symbol("internals");
function j(t) {
  return t && String(t).trim().toLowerCase();
}
function U(t) {
  return t === !1 || t == null ? t : a.isArray(t) ? t.map(U) : String(t);
}
function W(t, e, n, r, o) {
  return a.isFunction(r)
    ? r.call(this, e, n)
    : (o && (e = n),
      a.isString(e)
        ? a.isString(r)
          ? e.indexOf(r) !== -1
          : a.isRegExp(r)
          ? r.test(e)
          : void 0
        : void 0);
}
class _ {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const o = this;
    function i(f, c, u) {
      const d = j(c);
      if (!d) throw new Error("header name must be a non-empty string");
      const h = a.findKey(o, d);
      (!h || o[h] === void 0 || u === !0 || (u === void 0 && o[h] !== !1)) &&
        (o[h || c] = U(f));
    }
    const s = (f, c) => a.forEach(f, (u, d) => i(u, d, c));
    return (
      a.isPlainObject(e) || e instanceof this.constructor
        ? s(e, n)
        : a.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z]+$/.test(e.trim())
        ? s(
            ((f) => {
              const c = {};
              let u, d, h;
              return (
                f &&
                  f
                    .split(
                      `
`
                    )
                    .forEach(function (l) {
                      (h = l.indexOf(":")),
                        (u = l.substring(0, h).trim().toLowerCase()),
                        (d = l.substring(h + 1).trim()),
                        !u ||
                          (c[u] && Jt[u]) ||
                          (u === "set-cookie"
                            ? c[u]
                              ? c[u].push(d)
                              : (c[u] = [d])
                            : (c[u] = c[u] ? c[u] + ", " + d : d));
                    }),
                c
              );
            })(e),
            n
          )
        : e != null && i(n, e, r),
      this
    );
  }
  get(e, n) {
    if ((e = j(e))) {
      const r = a.findKey(this, e);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0)
          return (function (i) {
            const s = Object.create(null),
              f = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let c;
            for (; (c = f.exec(i)); ) s[c[1]] = c[2];
            return s;
          })(o);
        if (a.isFunction(n)) return n.call(this, o, r);
        if (a.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if ((e = j(e))) {
      const r = a.findKey(this, e);
      return !(!r || this[r] === void 0 || (n && !W(0, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if ((s = j(s))) {
        const f = a.findKey(r, s);
        !f || (n && !W(0, r[f], f, n)) || (delete r[f], (o = !0));
      }
    }
    return a.isArray(e) ? e.forEach(i) : i(e), o;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (e && !W(0, this[i], i, e, !0)) || (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(e) {
    const n = this,
      r = {};
    return (
      a.forEach(this, (o, i) => {
        const s = a.findKey(r, i);
        if (s) return (n[s] = U(o)), void delete n[i];
        const f = e
          ? (function (c) {
              return c
                .trim()
                .toLowerCase()
                .replace(/([a-z\d])(\w*)/g, (u, d, h) => d.toUpperCase() + h);
            })(i)
          : String(i).trim();
        f !== i && delete n[i], (n[f] = U(o)), (r[f] = !0);
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = Object.create(null);
    return (
      a.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = e && a.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(e) {
    const n = (this[yt] = this[yt] = { accessors: {} }).accessors,
      r = this.prototype;
    function o(i) {
      const s = j(i);
      n[s] ||
        ((function (f, c) {
          const u = a.toCamelCase(" " + c);
          ["get", "set", "has"].forEach((d) => {
            Object.defineProperty(f, d + u, {
              value: function (h, l, p) {
                return this[d].call(this, c, h, l, p);
              },
              configurable: !0,
            });
          });
        })(r, i),
        (n[s] = !0));
    }
    return a.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
_.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]),
  a.freezeMethods(_.prototype),
  a.freezeMethods(_);
const O = _;
function K(t, e) {
  const n = this || Y,
    r = e || n,
    o = O.from(r.headers);
  let i = r.data;
  return (
    a.forEach(t, function (s) {
      i = s.call(n, i, o.normalize(), e ? e.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function vt(t) {
  return !(!t || !t.__CANCEL__);
}
function x(t, e, n) {
  y.call(this, t ?? "canceled", y.ERR_CANCELED, e, n),
    (this.name = "CanceledError");
}
a.inherits(x, y, { __CANCEL__: !0 });
const Wt = w.isStandardBrowserEnv
  ? {
      write: function (t, e, n, r, o, i) {
        const s = [];
        s.push(t + "=" + encodeURIComponent(e)),
          a.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
          a.isString(r) && s.push("path=" + r),
          a.isString(o) && s.push("domain=" + o),
          i === !0 && s.push("secure"),
          (document.cookie = s.join("; "));
      },
      read: function (t) {
        const e = document.cookie.match(
          new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
        );
        return e ? decodeURIComponent(e[3]) : null;
      },
      remove: function (t) {
        this.write(t, "", Date.now() - 864e5);
      },
    }
  : {
      write: function () {},
      read: function () {
        return null;
      },
      remove: function () {},
    };
function Ct(t, e) {
  return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
    ? (function (n, r) {
        return r ? n.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : n;
      })(t, e)
    : e;
}
const Kt = w.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        e = document.createElement("a");
      let n;
      function r(o) {
        let i = o;
        return (
          t && (e.setAttribute("href", i), (i = e.href)),
          e.setAttribute("href", i),
          {
            href: e.href,
            protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
            host: e.host,
            search: e.search ? e.search.replace(/^\?/, "") : "",
            hash: e.hash ? e.hash.replace(/^#/, "") : "",
            hostname: e.hostname,
            port: e.port,
            pathname:
              e.pathname.charAt(0) === "/" ? e.pathname : "/" + e.pathname,
          }
        );
      }
      return (
        (n = r(window.location.href)),
        function (o) {
          const i = a.isString(o) ? r(o) : o;
          return i.protocol === n.protocol && i.host === n.host;
        }
      );
    })()
  : function () {
      return !0;
    };
function gt(t, e) {
  let n = 0;
  const r = (function (o, i) {
    o = o || 10;
    const s = new Array(o),
      f = new Array(o);
    let c,
      u = 0,
      d = 0;
    return (
      (i = i !== void 0 ? i : 1e3),
      function (h) {
        const l = Date.now(),
          p = f[d];
        c || (c = l), (s[u] = h), (f[u] = l);
        let m = d,
          g = 0;
        for (; m !== u; ) (g += s[m++]), (m %= o);
        if (((u = (u + 1) % o), u === d && (d = (d + 1) % o), l - c < i))
          return;
        const b = p && l - p;
        return b ? Math.round((1e3 * g) / b) : void 0;
      }
    );
  })(50, 250);
  return (o) => {
    const i = o.loaded,
      s = o.lengthComputable ? o.total : void 0,
      f = i - n,
      c = r(f);
    n = i;
    const u = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: f,
      rate: c || void 0,
      estimated: c && s && i <= s ? (s - i) / c : void 0,
      event: o,
    };
    (u[e ? "download" : "upload"] = !0), t(u);
  };
}
const B = {
  http: null,
  xhr:
    typeof XMLHttpRequest < "u" &&
    function (t) {
      return new Promise(function (e, n) {
        let r = t.data;
        const o = O.from(t.headers).normalize(),
          i = t.responseType;
        let s;
        function f() {
          t.cancelToken && t.cancelToken.unsubscribe(s),
            t.signal && t.signal.removeEventListener("abort", s);
        }
        a.isFormData(r) &&
          (w.isStandardBrowserEnv || w.isStandardBrowserWebWorkerEnv) &&
          o.setContentType(!1);
        let c = new XMLHttpRequest();
        if (t.auth) {
          const l = t.auth.username || "",
            p = t.auth.password
              ? unescape(encodeURIComponent(t.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(l + ":" + p));
        }
        const u = Ct(t.baseURL, t.url);
        function d() {
          if (!c) return;
          const l = O.from(
            "getAllResponseHeaders" in c && c.getAllResponseHeaders()
          );
          (function (p, m, g) {
            const b = g.config.validateStatus;
            g.status && b && !b(g.status)
              ? m(
                  new y(
                    "Request failed with status code " + g.status,
                    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][
                      Math.floor(g.status / 100) - 4
                    ],
                    g.config,
                    g.request,
                    g
                  )
                )
              : p(g);
          })(
            function (p) {
              e(p), f();
            },
            function (p) {
              n(p), f();
            },
            {
              data:
                i && i !== "text" && i !== "json" ? c.response : c.responseText,
              status: c.status,
              statusText: c.statusText,
              headers: l,
              config: t,
              request: c,
            }
          ),
            (c = null);
        }
        if (
          (c.open(
            t.method.toUpperCase(),
            Tt(u, t.params, t.paramsSerializer),
            !0
          ),
          (c.timeout = t.timeout),
          "onloadend" in c
            ? (c.onloadend = d)
            : (c.onreadystatechange = function () {
                c &&
                  c.readyState === 4 &&
                  (c.status !== 0 ||
                    (c.responseURL && c.responseURL.indexOf("file:") === 0)) &&
                  setTimeout(d);
              }),
          (c.onabort = function () {
            c &&
              (n(new y("Request aborted", y.ECONNABORTED, t, c)), (c = null));
          }),
          (c.onerror = function () {
            n(new y("Network Error", y.ERR_NETWORK, t, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let l = t.timeout
              ? "timeout of " + t.timeout + "ms exceeded"
              : "timeout exceeded";
            const p = t.transitional || Nt;
            t.timeoutErrorMessage && (l = t.timeoutErrorMessage),
              n(
                new y(
                  l,
                  p.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
                  t,
                  c
                )
              ),
              (c = null);
          }),
          w.isStandardBrowserEnv)
        ) {
          const l =
            (t.withCredentials || Kt(u)) &&
            t.xsrfCookieName &&
            Wt.read(t.xsrfCookieName);
          l && o.set(t.xsrfHeaderName, l);
        }
        r === void 0 && o.setContentType(null),
          "setRequestHeader" in c &&
            a.forEach(o.toJSON(), function (l, p) {
              c.setRequestHeader(p, l);
            }),
          a.isUndefined(t.withCredentials) ||
            (c.withCredentials = !!t.withCredentials),
          i && i !== "json" && (c.responseType = t.responseType),
          typeof t.onDownloadProgress == "function" &&
            c.addEventListener("progress", gt(t.onDownloadProgress, !0)),
          typeof t.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", gt(t.onUploadProgress)),
          (t.cancelToken || t.signal) &&
            ((s = (l) => {
              c &&
                (n(!l || l.type ? new x(null, t, c) : l),
                c.abort(),
                (c = null));
            }),
            t.cancelToken && t.cancelToken.subscribe(s),
            t.signal &&
              (t.signal.aborted ? s() : t.signal.addEventListener("abort", s)));
        const h = (function (l) {
          const p = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l);
          return (p && p[1]) || "";
        })(u);
        h && w.protocols.indexOf(h) === -1
          ? n(new y("Unsupported protocol " + h + ":", y.ERR_BAD_REQUEST, t))
          : c.send(r || null);
      });
    },
};
a.forEach(B, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {}
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Vt = {
  getAdapter: (t) => {
    t = a.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    for (
      let o = 0;
      o < e && ((n = t[o]), !(r = a.isString(n) ? B[n.toLowerCase()] : n));
      o++
    );
    if (!r)
      throw r === !1
        ? new y(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            a.hasOwnProp(B, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!a.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: B,
};
function V(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new x(null, t);
}
function bt(t) {
  return (
    V(t),
    (t.headers = O.from(t.headers)),
    (t.data = K.call(t, t.transformRequest)),
    ["post", "put", "patch"].indexOf(t.method) !== -1 &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1),
    Vt.getAdapter(t.adapter || Y.adapter)(t).then(
      function (e) {
        return (
          V(t),
          (e.data = K.call(t, t.transformResponse, e)),
          (e.headers = O.from(e.headers)),
          e
        );
      },
      function (e) {
        return (
          vt(e) ||
            (V(t),
            e &&
              e.response &&
              ((e.response.data = K.call(t, t.transformResponse, e.response)),
              (e.response.headers = O.from(e.response.headers)))),
          Promise.reject(e)
        );
      }
    )
  );
}
const Et = (t) => (t instanceof O ? t.toJSON() : t);
function N(t, e) {
  e = e || {};
  const n = {};
  function r(u, d, h) {
    return a.isPlainObject(u) && a.isPlainObject(d)
      ? a.merge.call({ caseless: h }, u, d)
      : a.isPlainObject(d)
      ? a.merge({}, d)
      : a.isArray(d)
      ? d.slice()
      : d;
  }
  function o(u, d, h) {
    return a.isUndefined(d)
      ? a.isUndefined(u)
        ? void 0
        : r(void 0, u, h)
      : r(u, d, h);
  }
  function i(u, d) {
    if (!a.isUndefined(d)) return r(void 0, d);
  }
  function s(u, d) {
    return a.isUndefined(d)
      ? a.isUndefined(u)
        ? void 0
        : r(void 0, u)
      : r(void 0, d);
  }
  function f(u, d, h) {
    return h in e ? r(u, d) : h in t ? r(void 0, u) : void 0;
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: f,
    headers: (u, d) => o(Et(u), Et(d), !0),
  };
  return (
    a.forEach(Object.keys(t).concat(Object.keys(e)), function (u) {
      const d = c[u] || o,
        h = d(t[u], e[u], u);
      (a.isUndefined(h) && d !== f) || (n[u] = h);
    }),
    n
  );
}
const xt = "1.3.4",
  tt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, e) => {
    tt[t] = function (n) {
      return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
    };
  }
);
const wt = {};
tt.transitional = function (t, e, n) {
  return (r, o, i) => {
    if (t === !1)
      throw new y(
        (function (s, f) {
          return (
            "[Axios v" +
            xt +
            "] Transitional option '" +
            s +
            "'" +
            f +
            (n ? ". " + n : "")
          );
        })(o, " has been removed" + (e ? " in " + e : "")),
        y.ERR_DEPRECATED
      );
    return e && !wt[o] && (wt[o] = !0), !t || t(r, o, i);
  };
};
const G = {
    assertOptions: function (t, e, n) {
      if (typeof t != "object")
        throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
      const r = Object.keys(t);
      let o = r.length;
      for (; o-- > 0; ) {
        const i = r[o],
          s = e[i];
        if (s) {
          const f = t[i],
            c = f === void 0 || s(f, i, t);
          if (c !== !0)
            throw new y(
              "option " + i + " must be " + c,
              y.ERR_BAD_OPTION_VALUE
            );
        } else if (n !== !0)
          throw new y("Unknown option " + i, y.ERR_BAD_OPTION);
      }
    },
    validators: tt,
  },
  A = G.validators;
class F {
  constructor(e) {
    (this.defaults = e),
      (this.interceptors = { request: new mt(), response: new mt() });
  }
  request(e, n) {
    typeof e == "string" ? ((n = n || {}).url = e) : (n = e || {}),
      (n = N(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    let s;
    r !== void 0 &&
      G.assertOptions(
        r,
        {
          silentJSONParsing: A.transitional(A.boolean),
          forcedJSONParsing: A.transitional(A.boolean),
          clarifyTimeoutError: A.transitional(A.boolean),
        },
        !1
      ),
      o !== void 0 &&
        G.assertOptions(o, { encode: A.function, serialize: A.function }, !0),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase()),
      (s = i && a.merge(i.common, i[n.method])),
      s &&
        a.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (m) => {
            delete i[m];
          }
        ),
      (n.headers = O.concat(s, i));
    const f = [];
    let c = !0;
    this.interceptors.request.forEach(function (m) {
      (typeof m.runWhen == "function" && m.runWhen(n) === !1) ||
        ((c = c && m.synchronous), f.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    let d;
    this.interceptors.response.forEach(function (m) {
      u.push(m.fulfilled, m.rejected);
    });
    let h,
      l = 0;
    if (!c) {
      const m = [bt.bind(this), void 0];
      for (
        m.unshift.apply(m, f),
          m.push.apply(m, u),
          h = m.length,
          d = Promise.resolve(n);
        l < h;

      )
        d = d.then(m[l++], m[l++]);
      return d;
    }
    h = f.length;
    let p = n;
    for (l = 0; l < h; ) {
      const m = f[l++],
        g = f[l++];
      try {
        p = m(p);
      } catch (b) {
        g.call(this, b);
        break;
      }
    }
    try {
      d = bt.call(this, p);
    } catch (m) {
      return Promise.reject(m);
    }
    for (l = 0, h = u.length; l < h; ) d = d.then(u[l++], u[l++]);
    return d;
  }
  getUri(e) {
    return Tt(
      Ct((e = N(this.defaults, e)).baseURL, e.url),
      e.params,
      e.paramsSerializer
    );
  }
}
a.forEach(["delete", "get", "head", "options"], function (t) {
  F.prototype[t] = function (e, n) {
    return this.request(
      N(n || {}, { method: t, url: e, data: (n || {}).data })
    );
  };
}),
  a.forEach(["post", "put", "patch"], function (t) {
    function e(n) {
      return function (r, o, i) {
        return this.request(
          N(i || {}, {
            method: t,
            headers: n ? { "Content-Type": "multipart/form-data" } : {},
            url: r,
            data: o,
          })
        );
      };
    }
    (F.prototype[t] = e()), (F.prototype[t + "Form"] = e(!0));
  });
const L = F;
class et {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((f) => {
          r.subscribe(f), (i = f);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      e(function (o, i, s) {
        r.reason || ((r.reason = new x(o, i, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    this.reason
      ? e(this.reason)
      : this._listeners
      ? this._listeners.push(e)
      : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let e;
    return {
      token: new et(function (n) {
        e = n;
      }),
      cancel: e,
    };
  }
}
const Gt = et,
  $ = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
Object.entries($).forEach(([t, e]) => {
  $[e] = t;
});
const $t = $,
  E = (function t(e) {
    const n = new L(e),
      r = Ot(L.prototype.request, n);
    return (
      a.extend(r, L.prototype, n, { allOwnKeys: !0 }),
      a.extend(r, n, null, { allOwnKeys: !0 }),
      (r.create = function (o) {
        return t(N(e, o));
      }),
      r
    );
  })(Y);
(E.Axios = L),
  (E.CanceledError = x),
  (E.CancelToken = Gt),
  (E.isCancel = vt),
  (E.VERSION = xt),
  (E.toFormData = D),
  (E.AxiosError = y),
  (E.Cancel = E.CanceledError),
  (E.all = function (t) {
    return Promise.all(t);
  }),
  (E.spread = function (t) {
    return function (e) {
      return t.apply(null, e);
    };
  }),
  (E.isAxiosError = function (t) {
    return a.isObject(t) && t.isAxiosError === !0;
  }),
  (E.mergeConfig = N),
  (E.AxiosHeaders = O),
  (E.formToJSON = (t) => jt(a.isHTMLForm(t) ? new FormData(t) : t)),
  (E.HttpStatusCode = $t),
  (E.default = E);
const Xt = E;
export { Xt as a };
