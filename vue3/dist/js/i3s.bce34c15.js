var Jn,
  wn,
  Xn,
  fn = {};
(Jn = {
  get exports() {
    return fn;
  },
  set exports(C) {
    fn = C;
  },
}),
  (wn =
    typeof document < "u" && document.currentScript
      ? document.currentScript.src
      : void 0),
  (Xn = function (C) {
    var q,
      I,
      r = (C = C || {}) !== void 0 ? C : {};
    r.ready = new Promise(function (n, e) {
      (q = n), (I = e);
    });
    var _,
      k = {};
    for (_ in r) r.hasOwnProperty(_) && (k[_] = r[_]);
    var bn = typeof window == "object",
      Z = typeof importScripts == "function";
    typeof process == "object" &&
      typeof process.versions == "object" &&
      process.versions.node;
    var sn,
      E = "";
    (bn || Z) &&
      (Z
        ? (E = self.location.href)
        : typeof document < "u" &&
          document.currentScript &&
          (E = document.currentScript.src),
      wn && (E = wn),
      (E =
        E.indexOf("blob:") !== 0
          ? E.substr(0, E.replace(/[?#].*/, "").lastIndexOf("/") + 1)
          : ""),
      Z &&
        (sn = function (n) {
          var e = new XMLHttpRequest();
          return (
            e.open("GET", n, !1),
            (e.responseType = "arraybuffer"),
            e.send(null),
            new Uint8Array(e.response)
          );
        }));
    var L,
      ln,
      Yn = r.print || void 0,
      V = r.printErr || void 0;
    for (_ in k) k.hasOwnProperty(_) && (r[_] = k[_]);
    (k = null),
      r.arguments && r.arguments,
      r.thisProgram && r.thisProgram,
      r.quit && r.quit,
      r.wasmBinary && (L = r.wasmBinary),
      r.noExitRuntime,
      typeof WebAssembly != "object" && K("no native wasm support detected");
    var An = !1,
      Tn = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function Cn(n, e, t) {
      for (var i = e + t, o = e; n[o] && !(o >= i); ) ++o;
      if (o - e > 16 && n.subarray && Tn) return Tn.decode(n.subarray(e, o));
      for (var a = ""; e < o; ) {
        var c = n[e++];
        if (128 & c) {
          var u = 63 & n[e++];
          if ((224 & c) != 192) {
            var f = 63 & n[e++];
            if (
              (c =
                (240 & c) == 224
                  ? ((15 & c) << 12) | (u << 6) | f
                  : ((7 & c) << 18) | (u << 12) | (f << 6) | (63 & n[e++])) <
              65536
            )
              a += String.fromCharCode(c);
            else {
              var l = c - 65536;
              a += String.fromCharCode(55296 | (l >> 10), 56320 | (1023 & l));
            }
          } else a += String.fromCharCode(((31 & c) << 6) | u);
        } else a += String.fromCharCode(c);
      }
      return a;
    }
    function Pn(n, e) {
      return n ? Cn(w, n, e) : "";
    }
    var pn,
      U,
      w,
      M,
      $,
      h,
      W,
      kn,
      En,
      Wn,
      Sn = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0;
    function Zn(n, e) {
      for (var t = n, i = t >> 1, o = i + e / 2; !(i >= o) && $[i]; ) ++i;
      if ((t = i << 1) - n > 32 && Sn) return Sn.decode(w.subarray(n, t));
      for (var a = "", c = 0; !(c >= e / 2); ++c) {
        var u = M[(n + 2 * c) >> 1];
        if (u == 0) break;
        a += String.fromCharCode(u);
      }
      return a;
    }
    function $n(n, e, t) {
      if ((t === void 0 && (t = 2147483647), t < 2)) return 0;
      for (
        var i = e, o = (t -= 2) < 2 * n.length ? t / 2 : n.length, a = 0;
        a < o;
        ++a
      ) {
        var c = n.charCodeAt(a);
        (M[e >> 1] = c), (e += 2);
      }
      return (M[e >> 1] = 0), e - i;
    }
    function Kn(n) {
      return 2 * n.length;
    }
    function Qn(n, e) {
      for (var t = 0, i = ""; !(t >= e / 4); ) {
        var o = h[(n + 4 * t) >> 2];
        if (o == 0) break;
        if ((++t, o >= 65536)) {
          var a = o - 65536;
          i += String.fromCharCode(55296 | (a >> 10), 56320 | (1023 & a));
        } else i += String.fromCharCode(o);
      }
      return i;
    }
    function ne(n, e, t) {
      if ((t === void 0 && (t = 2147483647), t < 4)) return 0;
      for (var i = e, o = i + t - 4, a = 0; a < n.length; ++a) {
        var c = n.charCodeAt(a);
        if (
          (c >= 55296 &&
            c <= 57343 &&
            (c = (65536 + ((1023 & c) << 10)) | (1023 & n.charCodeAt(++a))),
          (h[e >> 2] = c),
          (e += 4) + 4 > o)
        )
          break;
      }
      return (h[e >> 2] = 0), e - i;
    }
    function ee(n) {
      for (var e = 0, t = 0; t < n.length; ++t) {
        var i = n.charCodeAt(t);
        i >= 55296 && i <= 57343 && ++t, (e += 4);
      }
      return e;
    }
    function te(n, e) {
      return n % e > 0 && (n += e - (n % e)), n;
    }
    function Rn(n) {
      (pn = n),
        (r.HEAP8 = U = new Int8Array(n)),
        (r.HEAP16 = M = new Int16Array(n)),
        (r.HEAP32 = h = new Int32Array(n)),
        (r.HEAPU8 = w = new Uint8Array(n)),
        (r.HEAPU16 = $ = new Uint16Array(n)),
        (r.HEAPU32 = W = new Uint32Array(n)),
        (r.HEAPF32 = kn = new Float32Array(n)),
        (r.HEAPF64 = En = new Float64Array(n));
    }
    r.INITIAL_MEMORY;
    var Fn = [],
      jn = [],
      xn = [];
    function re(n) {
      Fn.unshift(n);
    }
    function oe(n) {
      xn.unshift(n);
    }
    var O = 0,
      G = null;
    function K(n) {
      r.onAbort && r.onAbort(n),
        V((n = "Aborted(" + n + ")")),
        (An = !0),
        (n += ". Build with -s ASSERTIONS=1 for more info.");
      var e = new WebAssembly.RuntimeError(n);
      throw (I(e), e);
    }
    (r.preloadedImages = {}), (r.preloadedAudios = {});
    var P,
      ie = "data:application/octet-stream;base64,";
    function In(n) {
      return n.startsWith(ie);
    }
    function Un(n) {
      try {
        if (n == P && L) return new Uint8Array(L);
        if (sn) return sn(n);
        throw "both async and sync fetching of the wasm failed";
      } catch (e) {
        K(e);
      }
    }
    function dn(n) {
      for (; n.length > 0; ) {
        var e = n.shift();
        if (typeof e != "function") {
          var t = e.func;
          typeof t == "number"
            ? e.arg === void 0
              ? J(t)()
              : J(t)(e.arg)
            : t(e.arg === void 0 ? null : e.arg);
        } else e(r);
      }
    }
    In((P = "i3s.wasm")) ||
      (P = (function (n) {
        return r.locateFile ? r.locateFile(n, E) : E + n;
      })(P));
    var Q = [];
    function J(n) {
      var e = Q[n];
      return (
        e || (n >= Q.length && (Q.length = n + 1), (Q[n] = e = Wn.get(n))), e
      );
    }
    function ae(n) {
      (this.excPtr = n),
        (this.ptr = n - 16),
        (this.set_type = function (e) {
          h[(this.ptr + 4) >> 2] = e;
        }),
        (this.get_type = function () {
          return h[(this.ptr + 4) >> 2];
        }),
        (this.set_destructor = function (e) {
          h[(this.ptr + 8) >> 2] = e;
        }),
        (this.get_destructor = function () {
          return h[(this.ptr + 8) >> 2];
        }),
        (this.set_refcount = function (e) {
          h[this.ptr >> 2] = e;
        }),
        (this.set_caught = function (e) {
          (e = e ? 1 : 0), (U[(this.ptr + 12) >> 0] = e);
        }),
        (this.get_caught = function () {
          return U[(this.ptr + 12) >> 0] != 0;
        }),
        (this.set_rethrown = function (e) {
          (e = e ? 1 : 0), (U[(this.ptr + 13) >> 0] = e);
        }),
        (this.get_rethrown = function () {
          return U[(this.ptr + 13) >> 0] != 0;
        }),
        (this.init = function (e, t) {
          this.set_type(e),
            this.set_destructor(t),
            this.set_refcount(0),
            this.set_caught(!1),
            this.set_rethrown(!1);
        }),
        (this.add_ref = function () {
          var e = h[this.ptr >> 2];
          h[this.ptr >> 2] = e + 1;
        }),
        (this.release_ref = function () {
          var e = h[this.ptr >> 2];
          return (h[this.ptr >> 2] = e - 1), e === 1;
        });
    }
    var nn = {};
    function On(n) {
      for (; n.length; ) {
        var e = n.pop();
        n.pop()(e);
      }
    }
    function en(n) {
      return this.fromWireType(W[n >> 2]);
    }
    var z = {},
      D = {},
      tn = {},
      ue = 48,
      ce = 57;
    function fe(n, e) {
      return (
        (n = (function (t) {
          if (t === void 0) return "_unknown";
          var i = (t = t.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
          return i >= ue && i <= ce ? "_" + t : t;
        })(n)),
        function () {
          return e.apply(this, arguments);
        }
      );
    }
    function vn(n, e) {
      var t = fe(e, function (i) {
        (this.name = e), (this.message = i);
        var o = new Error(i).stack;
        o !== void 0 &&
          (this.stack =
            this.toString() +
            `
` +
            o.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return (
        (t.prototype = Object.create(n.prototype)),
        (t.prototype.constructor = t),
        (t.prototype.toString = function () {
          return this.message === void 0
            ? this.name
            : this.name + ": " + this.message;
        }),
        t
      );
    }
    var Dn = void 0;
    function Hn(n) {
      throw new Dn(n);
    }
    function Vn(n, e, t) {
      function i(u) {
        var f = t(u);
        f.length !== n.length && Hn("Mismatched type converter count");
        for (var l = 0; l < n.length; ++l) S(n[l], f[l]);
      }
      n.forEach(function (u) {
        tn[u] = e;
      });
      var o = new Array(e.length),
        a = [],
        c = 0;
      e.forEach(function (u, f) {
        D.hasOwnProperty(u)
          ? (o[f] = D[u])
          : (a.push(u),
            z.hasOwnProperty(u) || (z[u] = []),
            z[u].push(function () {
              (o[f] = D[u]), ++c === a.length && i(o);
            }));
      }),
        a.length === 0 && i(o);
    }
    function hn(n) {
      switch (n) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + n);
      }
    }
    var Mn = void 0;
    function b(n) {
      for (var e = "", t = n; w[t]; ) e += Mn[w[t++]];
      return e;
    }
    var zn = void 0;
    function A(n) {
      throw new zn(n);
    }
    function S(n, e, t) {
      if (((t = t || {}), !("argPackAdvance" in e)))
        throw new TypeError(
          "registerType registeredInstance requires argPackAdvance"
        );
      var i = e.name;
      if (
        (n || A('type "' + i + '" must have a positive integer typeid pointer'),
        D.hasOwnProperty(n))
      ) {
        if (t.ignoreDuplicateRegistrations) return;
        A("Cannot register type '" + i + "' twice");
      }
      if (((D[n] = e), delete tn[n], z.hasOwnProperty(n))) {
        var o = z[n];
        delete z[n],
          o.forEach(function (a) {
            a();
          });
      }
    }
    var mn = [],
      T = [
        {},
        { value: void 0 },
        { value: null },
        { value: !0 },
        { value: !1 },
      ];
    function Bn(n) {
      n > 4 && --T[n].refcount == 0 && ((T[n] = void 0), mn.push(n));
    }
    function se() {
      for (var n = 0, e = 5; e < T.length; ++e) T[e] !== void 0 && ++n;
      return n;
    }
    function le() {
      for (var n = 5; n < T.length; ++n) if (T[n] !== void 0) return T[n];
      return null;
    }
    var rn = {
      toValue: function (n) {
        return n || A("Cannot use deleted val. handle = " + n), T[n].value;
      },
      toHandle: function (n) {
        switch (n) {
          case void 0:
            return 1;
          case null:
            return 2;
          case !0:
            return 3;
          case !1:
            return 4;
          default:
            var e = mn.length ? mn.pop() : T.length;
            return (T[e] = { refcount: 1, value: n }), e;
        }
      },
    };
    function gn(n) {
      if (n === null) return "null";
      var e = typeof n;
      return e === "object" || e === "array" || e === "function"
        ? n.toString()
        : "" + n;
    }
    function pe(n, e) {
      switch (e) {
        case 2:
          return function (t) {
            return this.fromWireType(kn[t >> 2]);
          };
        case 3:
          return function (t) {
            return this.fromWireType(En[t >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + n);
      }
    }
    function de(n, e, t) {
      r.hasOwnProperty(n)
        ? ((t === void 0 ||
            (r[n].overloadTable !== void 0 &&
              r[n].overloadTable[t] !== void 0)) &&
            A("Cannot register public name '" + n + "' twice"),
          (function (i, o, a) {
            if (i[o].overloadTable === void 0) {
              var c = i[o];
              (i[o] = function () {
                return (
                  i[o].overloadTable.hasOwnProperty(arguments.length) ||
                    A(
                      "Function '" +
                        a +
                        "' called with an invalid number of arguments (" +
                        arguments.length +
                        ") - expects one of (" +
                        i[o].overloadTable +
                        ")!"
                    ),
                  i[o].overloadTable[arguments.length].apply(this, arguments)
                );
              }),
                (i[o].overloadTable = []),
                (i[o].overloadTable[c.argCount] = c);
            }
          })(r, n, n),
          r.hasOwnProperty(t) &&
            A(
              "Cannot register multiple overloads of a function with the same number of arguments (" +
                t +
                ")!"
            ),
          (r[n].overloadTable[t] = e))
        : ((r[n] = e), t !== void 0 && (r[n].numArguments = t));
    }
    function ve(n, e, t) {
      r.hasOwnProperty(n) || Hn("Replacing nonexistant public symbol"),
        r[n].overloadTable !== void 0 && t !== void 0
          ? (r[n].overloadTable[t] = e)
          : ((r[n] = e), (r[n].argCount = t));
    }
    function he(n, e, t) {
      return n.includes("j")
        ? (function (i, o, a) {
            var c = r["dynCall_" + i];
            return a && a.length
              ? c.apply(null, [o].concat(a))
              : c.call(null, o);
          })(n, e, t)
        : J(e).apply(null, t);
    }
    function X(n, e) {
      var t = (n = b(n)).includes("j")
        ? (function (i, o) {
            var a = [];
            return function () {
              a.length = arguments.length;
              for (var c = 0; c < arguments.length; c++) a[c] = arguments[c];
              return he(i, o, a);
            };
          })(n, e)
        : J(e);
      return (
        typeof t != "function" &&
          A("unknown function pointer with signature " + n + ": " + e),
        t
      );
    }
    var Nn = void 0;
    function qn(n) {
      var e = Gn(n),
        t = b(e);
      return R(e), t;
    }
    function me(n, e, t) {
      switch (e) {
        case 0:
          return t
            ? function (i) {
                return U[i];
              }
            : function (i) {
                return w[i];
              };
        case 1:
          return t
            ? function (i) {
                return M[i >> 1];
              }
            : function (i) {
                return $[i >> 1];
              };
        case 2:
          return t
            ? function (i) {
                return h[i >> 2];
              }
            : function (i) {
                return W[i >> 2];
              };
        default:
          throw new TypeError("Unknown integer type: " + n);
      }
    }
    var ge = {};
    function ye(n) {
      try {
        return ln.grow((n - pn.byteLength + 65535) >>> 16), Rn(ln.buffer), 1;
      } catch {}
    }
    var on = {
      mappings: {},
      buffers: [null, [], []],
      printChar: function (n, e) {
        var t = on.buffers[n];
        e === 0 || e === 10
          ? ((n === 1 ? Yn : V)(Cn(t, 0)), (t.length = 0))
          : t.push(e);
      },
      varargs: void 0,
      get: function () {
        return (on.varargs += 4), h[(on.varargs - 4) >> 2];
      },
      getStr: function (n) {
        return Pn(n);
      },
      get64: function (n, e) {
        return n;
      },
    };
    (Dn = r.InternalError = vn(Error, "InternalError")),
      (function () {
        for (var n = new Array(256), e = 0; e < 256; ++e)
          n[e] = String.fromCharCode(e);
        Mn = n;
      })(),
      (zn = r.BindingError = vn(Error, "BindingError")),
      (r.count_emval_handles = se),
      (r.get_first_emval = le),
      (Nn = r.UnboundTypeError = vn(Error, "UnboundTypeError"));
    var Ln = {
      __call_sighandler: function (n, e) {
        J(n)(e);
      },
      __cxa_allocate_exception: function (n) {
        return un(n + 16) + 16;
      },
      __cxa_atexit: function (n, e) {},
      __cxa_throw: function (n, e, t) {
        throw (new ae(n).init(e, t), n);
      },
      _embind_finalize_value_object: function (n) {
        var e = nn[n];
        delete nn[n];
        var t = e.rawConstructor,
          i = e.rawDestructor,
          o = e.fields;
        Vn(
          [n],
          o
            .map(function (a) {
              return a.getterReturnType;
            })
            .concat(
              o.map(function (a) {
                return a.setterArgumentType;
              })
            ),
          function (a) {
            var c = {};
            return (
              o.forEach(function (u, f) {
                var l = u.fieldName,
                  s = a[f],
                  y = u.getter,
                  d = u.getterContext,
                  m = a[f + o.length],
                  g = u.setter,
                  p = u.setterContext;
                c[l] = {
                  read: function (F) {
                    return s.fromWireType(y(d, F));
                  },
                  write: function (F, H) {
                    var j = [];
                    g(p, F, m.toWireType(j, H)), On(j);
                  },
                };
              }),
              [
                {
                  name: e.name,
                  fromWireType: function (u) {
                    var f = {};
                    for (var l in c) f[l] = c[l].read(u);
                    return i(u), f;
                  },
                  toWireType: function (u, f) {
                    for (var l in c)
                      if (!(l in f))
                        throw new TypeError('Missing field:  "' + l + '"');
                    var s = t();
                    for (l in c) c[l].write(s, f[l]);
                    return u !== null && u.push(i, s), s;
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: en,
                  destructorFunction: i,
                },
              ]
            );
          }
        );
      },
      _embind_register_bigint: function (n, e, t, i, o) {},
      _embind_register_bool: function (n, e, t, i, o) {
        var a = hn(t);
        S(n, {
          name: (e = b(e)),
          fromWireType: function (c) {
            return !!c;
          },
          toWireType: function (c, u) {
            return u ? i : o;
          },
          argPackAdvance: 8,
          readValueFromPointer: function (c) {
            var u;
            if (t === 1) u = U;
            else if (t === 2) u = M;
            else {
              if (t !== 4)
                throw new TypeError("Unknown boolean type size: " + e);
              u = h;
            }
            return this.fromWireType(u[c >> a]);
          },
          destructorFunction: null,
        });
      },
      _embind_register_emval: function (n, e) {
        S(n, {
          name: (e = b(e)),
          fromWireType: function (t) {
            var i = rn.toValue(t);
            return Bn(t), i;
          },
          toWireType: function (t, i) {
            return rn.toHandle(i);
          },
          argPackAdvance: 8,
          readValueFromPointer: en,
          destructorFunction: null,
        });
      },
      _embind_register_float: function (n, e, t) {
        var i = hn(t);
        S(n, {
          name: (e = b(e)),
          fromWireType: function (o) {
            return o;
          },
          toWireType: function (o, a) {
            if (typeof a != "number" && typeof a != "boolean")
              throw new TypeError(
                'Cannot convert "' + gn(a) + '" to ' + this.name
              );
            return a;
          },
          argPackAdvance: 8,
          readValueFromPointer: pe(e, i),
          destructorFunction: null,
        });
      },
      _embind_register_function: function (n, e, t, i, o, a) {
        var c = (function (u, f) {
          for (var l = [], s = 0; s < u; s++) l.push(h[(f >> 2) + s]);
          return l;
        })(e, t);
        (n = b(n)),
          (o = X(i, o)),
          de(
            n,
            function () {
              (function (u, f) {
                var l = [],
                  s = {};
                throw (
                  (f.forEach(function y(d) {
                    s[d] ||
                      D[d] ||
                      (tn[d] ? tn[d].forEach(y) : (l.push(d), (s[d] = !0)));
                  }),
                  new Nn(u + ": " + l.map(qn).join([", "])))
                );
              })("Cannot call " + n + " due to unbound types", c);
            },
            e - 1
          ),
          Vn([], c, function (u) {
            var f = [u[0], null].concat(u.slice(1));
            return (
              ve(
                n,
                (function (l, s, y, d, m) {
                  var g = s.length;
                  g < 2 &&
                    A(
                      "argTypes array size mismatch! Must at least get return value and 'this' types!"
                    );
                  for (
                    var p = s[1] !== null && y !== null, F = !1, H = 1;
                    H < s.length;
                    ++H
                  )
                    if (s[H] !== null && s[H].destructorFunction === void 0) {
                      F = !0;
                      break;
                    }
                  var j = s[0].name !== "void",
                    x = g - 2,
                    v = new Array(x),
                    Y = [],
                    cn = [];
                  return function () {
                    var _n;
                    arguments.length !== x &&
                      A(
                        "function " +
                          l +
                          " called with " +
                          arguments.length +
                          " arguments, expected " +
                          x +
                          " args!"
                      ),
                      (cn.length = 0),
                      (Y.length = p ? 2 : 1),
                      (Y[0] = m),
                      p && ((_n = s[1].toWireType(cn, this)), (Y[1] = _n));
                    for (var B = 0; B < x; ++B)
                      (v[B] = s[B + 2].toWireType(cn, arguments[B])),
                        Y.push(v[B]);
                    return (function (_e) {
                      if (F) On(cn);
                      else
                        for (var N = p ? 1 : 2; N < s.length; N++) {
                          var we = N === 1 ? _n : v[N - 2];
                          s[N].destructorFunction !== null &&
                            s[N].destructorFunction(we);
                        }
                      if (j) return s[0].fromWireType(_e);
                    })(d.apply(null, Y));
                  };
                })(n, f, null, o, a),
                e - 1
              ),
              []
            );
          });
      },
      _embind_register_integer: function (n, e, t, i, o) {
        (e = b(e)), o === -1 && (o = 4294967295);
        var a = hn(t),
          c = function (l) {
            return l;
          };
        if (i === 0) {
          var u = 32 - 8 * t;
          c = function (l) {
            return (l << u) >>> u;
          };
        }
        var f = e.includes("unsigned");
        S(n, {
          name: e,
          fromWireType: c,
          toWireType: function (l, s) {
            if (typeof s != "number" && typeof s != "boolean")
              throw new TypeError(
                'Cannot convert "' + gn(s) + '" to ' + this.name
              );
            if (s < i || s > o)
              throw new TypeError(
                'Passing a number "' +
                  gn(s) +
                  '" from JS side to C/C++ side to an argument of type "' +
                  e +
                  '", which is outside the valid range [' +
                  i +
                  ", " +
                  o +
                  "]!"
              );
            return f ? s >>> 0 : 0 | s;
          },
          argPackAdvance: 8,
          readValueFromPointer: me(e, a, i !== 0),
          destructorFunction: null,
        });
      },
      _embind_register_memory_view: function (n, e, t) {
        var i = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
        ][e];
        function o(a) {
          var c = W,
            u = c[(a >>= 2)],
            f = c[a + 1];
          return new i(pn, f, u);
        }
        S(
          n,
          {
            name: (t = b(t)),
            fromWireType: o,
            argPackAdvance: 8,
            readValueFromPointer: o,
          },
          { ignoreDuplicateRegistrations: !0 }
        );
      },
      _embind_register_std_string: function (n, e) {
        var t = (e = b(e)) === "std::string";
        S(n, {
          name: e,
          fromWireType: function (i) {
            var o,
              a = W[i >> 2];
            if (t)
              for (var c = i + 4, u = 0; u <= a; ++u) {
                var f = i + 4 + u;
                if (u == a || w[f] == 0) {
                  var l = Pn(c, f - c);
                  o === void 0
                    ? (o = l)
                    : ((o += String.fromCharCode(0)), (o += l)),
                    (c = f + 1);
                }
              }
            else {
              var s = new Array(a);
              for (u = 0; u < a; ++u) s[u] = String.fromCharCode(w[i + 4 + u]);
              o = s.join("");
            }
            return R(i), o;
          },
          toWireType: function (i, o) {
            o instanceof ArrayBuffer && (o = new Uint8Array(o));
            var a = typeof o == "string";
            a ||
              o instanceof Uint8Array ||
              o instanceof Uint8ClampedArray ||
              o instanceof Int8Array ||
              A("Cannot pass non-string to std::string");
            var c = (
                t && a
                  ? function () {
                      return (function (s) {
                        for (var y = 0, d = 0; d < s.length; ++d) {
                          var m = s.charCodeAt(d);
                          m >= 55296 &&
                            m <= 57343 &&
                            (m =
                              (65536 + ((1023 & m) << 10)) |
                              (1023 & s.charCodeAt(++d))),
                            m <= 127
                              ? ++y
                              : (y += m <= 2047 ? 2 : m <= 65535 ? 3 : 4);
                        }
                        return y;
                      })(o);
                    }
                  : function () {
                      return o.length;
                    }
              )(),
              u = un(4 + c + 1);
            if (((W[u >> 2] = c), t && a))
              (function (s, y, d) {
                (function (m, g, p, F) {
                  if (!(F > 0)) return 0;
                  for (var H = p, j = p + F - 1, x = 0; x < m.length; ++x) {
                    var v = m.charCodeAt(x);
                    if (
                      (v >= 55296 &&
                        v <= 57343 &&
                        (v =
                          (65536 + ((1023 & v) << 10)) |
                          (1023 & m.charCodeAt(++x))),
                      v <= 127)
                    ) {
                      if (p >= j) break;
                      g[p++] = v;
                    } else if (v <= 2047) {
                      if (p + 1 >= j) break;
                      (g[p++] = 192 | (v >> 6)), (g[p++] = 128 | (63 & v));
                    } else if (v <= 65535) {
                      if (p + 2 >= j) break;
                      (g[p++] = 224 | (v >> 12)),
                        (g[p++] = 128 | ((v >> 6) & 63)),
                        (g[p++] = 128 | (63 & v));
                    } else {
                      if (p + 3 >= j) break;
                      (g[p++] = 240 | (v >> 18)),
                        (g[p++] = 128 | ((v >> 12) & 63)),
                        (g[p++] = 128 | ((v >> 6) & 63)),
                        (g[p++] = 128 | (63 & v));
                    }
                  }
                  g[p] = 0;
                })(s, w, y, d);
              })(o, u + 4, c + 1);
            else if (a)
              for (var f = 0; f < c; ++f) {
                var l = o.charCodeAt(f);
                l > 255 &&
                  (R(u),
                  A("String has UTF-16 code units that do not fit in 8 bits")),
                  (w[u + 4 + f] = l);
              }
            else for (f = 0; f < c; ++f) w[u + 4 + f] = o[f];
            return i !== null && i.push(R, u), u;
          },
          argPackAdvance: 8,
          readValueFromPointer: en,
          destructorFunction: function (i) {
            R(i);
          },
        });
      },
      _embind_register_std_wstring: function (n, e, t) {
        var i, o, a, c, u;
        (t = b(t)),
          e === 2
            ? ((i = Zn),
              (o = $n),
              (c = Kn),
              (a = function () {
                return $;
              }),
              (u = 1))
            : e === 4 &&
              ((i = Qn),
              (o = ne),
              (c = ee),
              (a = function () {
                return W;
              }),
              (u = 2)),
          S(n, {
            name: t,
            fromWireType: function (f) {
              for (
                var l, s = W[f >> 2], y = a(), d = f + 4, m = 0;
                m <= s;
                ++m
              ) {
                var g = f + 4 + m * e;
                if (m == s || y[g >> u] == 0) {
                  var p = i(d, g - d);
                  l === void 0
                    ? (l = p)
                    : ((l += String.fromCharCode(0)), (l += p)),
                    (d = g + e);
                }
              }
              return R(f), l;
            },
            toWireType: function (f, l) {
              typeof l != "string" &&
                A("Cannot pass non-string to C++ string type " + t);
              var s = c(l),
                y = un(4 + s + e);
              return (
                (W[y >> 2] = s >> u),
                o(l, y + 4, s + e),
                f !== null && f.push(R, y),
                y
              );
            },
            argPackAdvance: 8,
            readValueFromPointer: en,
            destructorFunction: function (f) {
              R(f);
            },
          });
      },
      _embind_register_value_object: function (n, e, t, i, o, a) {
        nn[n] = {
          name: b(e),
          rawConstructor: X(t, i),
          rawDestructor: X(o, a),
          fields: [],
        };
      },
      _embind_register_value_object_field: function (
        n,
        e,
        t,
        i,
        o,
        a,
        c,
        u,
        f,
        l
      ) {
        nn[n].fields.push({
          fieldName: b(e),
          getterReturnType: t,
          getter: X(i, o),
          getterContext: a,
          setterArgumentType: c,
          setter: X(u, f),
          setterContext: l,
        });
      },
      _embind_register_void: function (n, e) {
        S(n, {
          isVoid: !0,
          name: (e = b(e)),
          argPackAdvance: 0,
          fromWireType: function () {},
          toWireType: function (t, i) {},
        });
      },
      _emval_decref: Bn,
      _emval_incref: function (n) {
        n > 4 && (T[n].refcount += 1);
      },
      _emval_new_cstring: function (n) {
        return rn.toHandle(
          (function (e) {
            var t = ge[e];
            return t === void 0 ? b(e) : t;
          })(n)
        );
      },
      _emval_take_value: function (n, e) {
        var t = (n = (function (i, o) {
          var a = D[i];
          return a === void 0 && A(o + " has unknown type " + qn(i)), a;
        })(n, "_emval_take_value")).readValueFromPointer(e);
        return rn.toHandle(t);
      },
      abort: function () {
        K("");
      },
      emscripten_memcpy_big: function (n, e, t) {
        w.copyWithin(n, e, e + t);
      },
      emscripten_resize_heap: function (n) {
        var e = w.length,
          t = 2147483648;
        if ((n >>>= 0) > t) return !1;
        for (var i = 1; i <= 4; i *= 2) {
          var o = e * (1 + 0.2 / i);
          if (
            ((o = Math.min(o, n + 100663296)),
            ye(Math.min(t, te(Math.max(n, o), 65536))))
          )
            return !0;
        }
        return !1;
      },
      fd_close: function (n) {
        return 0;
      },
      fd_seek: function (n, e, t, i, o) {},
      fd_write: function (n, e, t, i) {
        for (var o = 0, a = 0; a < t; a++) {
          var c = h[e >> 2],
            u = h[(e + 4) >> 2];
          e += 8;
          for (var f = 0; f < u; f++) on.printChar(n, w[c + f]);
          o += u;
        }
        return (h[i >> 2] = o), 0;
      },
      setTempRet0: function (n) {},
    };
    (function () {
      var n = { env: Ln, wasi_snapshot_preview1: Ln };
      function e(o, a) {
        var c = o.exports;
        (r.asm = c),
          Rn((ln = r.asm.memory).buffer),
          (Wn = r.asm.__indirect_function_table),
          (function (u) {
            jn.unshift(u);
          })(r.asm.__wasm_call_ctors),
          (function (u) {
            if (
              (O--,
              r.monitorRunDependencies && r.monitorRunDependencies(O),
              O == 0 && G)
            ) {
              var f = G;
              (G = null), f();
            }
          })();
      }
      function t(o) {
        e(o.instance);
      }
      function i(o) {
        return (
          L || (!bn && !Z) || typeof fetch != "function"
            ? Promise.resolve().then(function () {
                return Un(P);
              })
            : fetch(P, { credentials: "same-origin" })
                .then(function (a) {
                  if (!a.ok)
                    throw "failed to load wasm binary file at '" + P + "'";
                  return a.arrayBuffer();
                })
                .catch(function () {
                  return Un(P);
                })
        )
          .then(function (a) {
            return WebAssembly.instantiate(a, n);
          })
          .then(function (a) {
            return a;
          })
          .then(o, function (a) {
            V("failed to asynchronously prepare wasm: " + a), K(a);
          });
      }
      if (
        (O++,
        r.monitorRunDependencies && r.monitorRunDependencies(O),
        r.instantiateWasm)
      )
        try {
          return r.instantiateWasm(n, e);
        } catch (o) {
          return (
            V("Module.instantiateWasm callback failed with error: " + o), !1
          );
        }
      (L ||
      typeof WebAssembly.instantiateStreaming != "function" ||
      In(P) ||
      typeof fetch != "function"
        ? i(t)
        : fetch(P, { credentials: "same-origin" }).then(function (o) {
            return WebAssembly.instantiateStreaming(o, n).then(t, function (a) {
              return (
                V("wasm streaming compile failed: " + a),
                V("falling back to ArrayBuffer instantiation"),
                i(t)
              );
            });
          })
      ).catch(I);
    })(),
      (r.___wasm_call_ctors = function () {
        return (r.___wasm_call_ctors = r.asm.__wasm_call_ctors).apply(
          null,
          arguments
        );
      });
    var an,
      un = (r._malloc = function () {
        return (un = r._malloc = r.asm.malloc).apply(null, arguments);
      }),
      R = (r._free = function () {
        return (R = r._free = r.asm.free).apply(null, arguments);
      }),
      Gn = (r.___getTypeName = function () {
        return (Gn = r.___getTypeName = r.asm.__getTypeName).apply(
          null,
          arguments
        );
      });
    function yn(n) {
      function e() {
        an ||
          ((an = !0),
          (r.calledRun = !0),
          An ||
            (dn(jn),
            q(r),
            r.onRuntimeInitialized && r.onRuntimeInitialized(),
            (function () {
              if (r.postRun)
                for (
                  typeof r.postRun == "function" && (r.postRun = [r.postRun]);
                  r.postRun.length;

                )
                  oe(r.postRun.shift());
              dn(xn);
            })()));
      }
      O > 0 ||
        ((function () {
          if (r.preRun)
            for (
              typeof r.preRun == "function" && (r.preRun = [r.preRun]);
              r.preRun.length;

            )
              re(r.preRun.shift());
          dn(Fn);
        })(),
        O > 0 ||
          (r.setStatus
            ? (r.setStatus("Running..."),
              setTimeout(function () {
                setTimeout(function () {
                  r.setStatus("");
                }, 1),
                  e();
              }, 1))
            : e()));
    }
    if (
      ((r.___embind_register_native_and_builtin_types = function () {
        return (r.___embind_register_native_and_builtin_types =
          r.asm.__embind_register_native_and_builtin_types).apply(
          null,
          arguments
        );
      }),
      (r.___errno_location = function () {
        return (r.___errno_location = r.asm.__errno_location).apply(
          null,
          arguments
        );
      }),
      (r.stackSave = function () {
        return (r.stackSave = r.asm.stackSave).apply(null, arguments);
      }),
      (r.stackRestore = function () {
        return (r.stackRestore = r.asm.stackRestore).apply(null, arguments);
      }),
      (r.stackAlloc = function () {
        return (r.stackAlloc = r.asm.stackAlloc).apply(null, arguments);
      }),
      (r.dynCall_vij = function () {
        return (r.dynCall_vij = r.asm.dynCall_vij).apply(null, arguments);
      }),
      (r.dynCall_jiji = function () {
        return (r.dynCall_jiji = r.asm.dynCall_jiji).apply(null, arguments);
      }),
      (G = function n() {
        an || yn(), an || (G = n);
      }),
      (r.run = yn),
      r.preInit)
    )
      for (
        typeof r.preInit == "function" && (r.preInit = [r.preInit]);
        r.preInit.length > 0;

      )
        r.preInit.pop()();
    return yn(), C.ready;
  }),
  (Jn.exports = Xn);
const be = (function (C, q) {
  for (var I = 0; I < q.length; I++) {
    const r = q[I];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const _ in r)
        if (_ !== "default" && !(_ in C)) {
          const k = Object.getOwnPropertyDescriptor(r, _);
          k &&
            Object.defineProperty(
              C,
              _,
              k.get ? k : { enumerable: !0, get: () => r[_] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(C, Symbol.toStringTag, { value: "Module" })
  );
})({ __proto__: null, default: fn }, [fn]);
export { be as i };
