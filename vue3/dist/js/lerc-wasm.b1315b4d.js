var on,
  P,
  sn,
  D = {};
(on = {
  get exports() {
    return D;
  },
  set exports(n) {
    D = n;
  },
}),
  (P =
    typeof document < "u" && document.currentScript
      ? document.currentScript.src
      : void 0),
  typeof __filename < "u" && (P = P || __filename),
  (sn = function (n) {
    var v, _;
    (n = (n = n || {}) !== void 0 ? n : {}).ready = new Promise(function (
      e,
      r
    ) {
      (v = e), (_ = r);
    });
    var h,
      l,
      d,
      H,
      E,
      M,
      F = Object.assign({}, n),
      B = typeof window == "object",
      w = typeof importScripts == "function",
      k =
        typeof process == "object" &&
        typeof process.versions == "object" &&
        typeof process.versions.node == "string",
      f = "";
    k
      ? ((f = w ? require("path").dirname(f) + "/" : __dirname + "/"),
        (M = () => {
          E || ((H = require("fs")), (E = require("path")));
        }),
        (h = function (e, r) {
          return (
            M(), (e = E.normalize(e)), H.readFileSync(e, r ? void 0 : "utf8")
          );
        }),
        (d = (e) => {
          var r = h(e, !0);
          return r.buffer || (r = new Uint8Array(r)), r;
        }),
        (l = (e, r, t) => {
          M(),
            (e = E.normalize(e)),
            H.readFile(e, function (i, o) {
              i ? t(i) : r(o.buffer);
            });
        }),
        process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"),
        process.argv.slice(2),
        process.on("uncaughtException", function (e) {
          if (!(e instanceof dn)) throw e;
        }),
        process.on("unhandledRejection", function (e) {
          throw e;
        }),
        (n.inspect = function () {
          return "[Emscripten Module object]";
        }))
      : (B || w) &&
        (w
          ? (f = self.location.href)
          : typeof document < "u" &&
            document.currentScript &&
            (f = document.currentScript.src),
        P && (f = P),
        (f =
          f.indexOf("blob:") !== 0
            ? f.substr(0, f.replace(/[?#].*/, "").lastIndexOf("/") + 1)
            : ""),
        (h = (e) => {
          var r = new XMLHttpRequest();
          return r.open("GET", e, !1), r.send(null), r.responseText;
        }),
        w &&
          (d = (e) => {
            var r = new XMLHttpRequest();
            return (
              r.open("GET", e, !1),
              (r.responseType = "arraybuffer"),
              r.send(null),
              new Uint8Array(r.response)
            );
          }),
        (l = (e, r, t) => {
          var i = new XMLHttpRequest();
          i.open("GET", e, !0),
            (i.responseType = "arraybuffer"),
            (i.onload = () => {
              i.status == 200 || (i.status == 0 && i.response)
                ? r(i.response)
                : t();
            }),
            (i.onerror = t),
            i.send(null);
        })),
      n.print;
    var b,
      O,
      A = n.printErr || void 0;
    Object.assign(n, F),
      (F = null),
      n.arguments && n.arguments,
      n.thisProgram && n.thisProgram,
      n.quit && n.quit,
      n.wasmBinary && (b = n.wasmBinary),
      n.noExitRuntime,
      typeof WebAssembly != "object" && S("no native wasm support detected");
    var z,
      R,
      I,
      g,
      m,
      L,
      G = !1,
      X = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function W(e, r) {
      return e
        ? (function (t, i, o) {
            for (var s = i + o, p = i; t[p] && !(p >= s); ) ++p;
            if (p - i > 16 && t.buffer && X) return X.decode(t.subarray(i, p));
            for (var a = ""; i < p; ) {
              var c = t[i++];
              if (128 & c) {
                var C = 63 & t[i++];
                if ((224 & c) != 192) {
                  var rn = 63 & t[i++];
                  if (
                    (c =
                      (240 & c) == 224
                        ? ((15 & c) << 12) | (C << 6) | rn
                        : ((7 & c) << 18) |
                          (C << 12) |
                          (rn << 6) |
                          (63 & t[i++])) < 65536
                  )
                    a += String.fromCharCode(c);
                  else {
                    var tn = c - 65536;
                    a += String.fromCharCode(
                      55296 | (tn >> 10),
                      56320 | (1023 & tn)
                    );
                  }
                } else a += String.fromCharCode(((31 & c) << 6) | C);
              } else a += String.fromCharCode(c);
            }
            return a;
          })(I, e, r)
        : "";
    }
    function N(e) {
      (z = e),
        (n.HEAP8 = R = new Int8Array(e)),
        (n.HEAP16 = new Int16Array(e)),
        (n.HEAP32 = g = new Int32Array(e)),
        (n.HEAPU8 = I = new Uint8Array(e)),
        (n.HEAPU16 = new Uint16Array(e)),
        (n.HEAPU32 = m = new Uint32Array(e)),
        (n.HEAPF32 = new Float32Array(e)),
        (n.HEAPF64 = new Float64Array(e));
    }
    n.INITIAL_MEMORY;
    var Y = [],
      J = [],
      K = [];
    function un(e) {
      Y.unshift(e);
    }
    function an(e) {
      K.unshift(e);
    }
    var y = 0,
      x = null;
    function S(e) {
      n.onAbort && n.onAbort(e),
        A((e = "Aborted(" + e + ")")),
        (G = !0),
        (e += ". Build with -sASSERTIONS for more info.");
      var r = new WebAssembly.RuntimeError(e);
      throw (_(r), r);
    }
    var u,
      cn = "data:application/octet-stream;base64,";
    function Q(e) {
      return e.startsWith(cn);
    }
    function V(e) {
      return e.startsWith("file://");
    }
    function Z(e) {
      try {
        if (e == u && b) return new Uint8Array(b);
        if (d) return d(e);
        throw "both async and sync fetching of the wasm failed";
      } catch (r) {
        S(r);
      }
    }
    function fn() {
      if (!b && (B || w)) {
        if (typeof fetch == "function" && !V(u))
          return fetch(u, { credentials: "same-origin" })
            .then(function (e) {
              if (!e.ok) throw "failed to load wasm binary file at '" + u + "'";
              return e.arrayBuffer();
            })
            .catch(function () {
              return Z(u);
            });
        if (l)
          return new Promise(function (e, r) {
            l(
              u,
              function (t) {
                e(new Uint8Array(t));
              },
              r
            );
          });
      }
      return Promise.resolve().then(function () {
        return Z(u);
      });
    }
    function U(e) {
      for (; e.length > 0; ) {
        var r = e.shift();
        if (typeof r != "function") {
          var t = r.func;
          typeof t == "number"
            ? r.arg === void 0
              ? $(t)()
              : $(t)(r.arg)
            : t(r.arg === void 0 ? null : r.arg);
        } else r(n);
      }
    }
    Q((u = "lerc-wasm.wasm")) ||
      (u = (function (e) {
        return n.locateFile ? n.locateFile(e, f) : f + e;
      })(u));
    var j = [];
    function $(e) {
      var r = j[e];
      return (
        r || (e >= j.length && (j.length = e + 1), (j[e] = r = L.get(e))), r
      );
    }
    function pn(e) {
      (this.excPtr = e),
        (this.ptr = e - 24),
        (this.set_type = function (r) {
          m[(this.ptr + 4) >> 2] = r;
        }),
        (this.get_type = function () {
          return m[(this.ptr + 4) >> 2];
        }),
        (this.set_destructor = function (r) {
          m[(this.ptr + 8) >> 2] = r;
        }),
        (this.get_destructor = function () {
          return m[(this.ptr + 8) >> 2];
        }),
        (this.set_refcount = function (r) {
          g[this.ptr >> 2] = r;
        }),
        (this.set_caught = function (r) {
          (r = r ? 1 : 0), (R[(this.ptr + 12) >> 0] = r);
        }),
        (this.get_caught = function () {
          return R[(this.ptr + 12) >> 0] != 0;
        }),
        (this.set_rethrown = function (r) {
          (r = r ? 1 : 0), (R[(this.ptr + 13) >> 0] = r);
        }),
        (this.get_rethrown = function () {
          return R[(this.ptr + 13) >> 0] != 0;
        }),
        (this.init = function (r, t) {
          this.set_adjusted_ptr(0),
            this.set_type(r),
            this.set_destructor(t),
            this.set_refcount(0),
            this.set_caught(!1),
            this.set_rethrown(!1);
        }),
        (this.add_ref = function () {
          var r = g[this.ptr >> 2];
          g[this.ptr >> 2] = r + 1;
        }),
        (this.release_ref = function () {
          var r = g[this.ptr >> 2];
          return (g[this.ptr >> 2] = r - 1), r === 1;
        }),
        (this.set_adjusted_ptr = function (r) {
          m[(this.ptr + 16) >> 2] = r;
        }),
        (this.get_adjusted_ptr = function () {
          return m[(this.ptr + 16) >> 2];
        }),
        (this.get_exception_ptr = function () {
          if (en(this.get_type())) return m[this.excPtr >> 2];
          var r = this.get_adjusted_ptr();
          return r !== 0 ? r : this.excPtr;
        });
    }
    function ln(e) {
      try {
        return O.grow((e - z.byteLength + 65535) >>> 16), N(O.buffer), 1;
      } catch {}
    }
    var hn = {
      a: function (e, r, t, i) {
        S(
          "Assertion failed: " +
            W(e) +
            ", at: " +
            [r ? W(r) : "unknown filename", t, i ? W(i) : "unknown function"]
        );
      },
      c: function (e) {
        return nn(e + 24) + 24;
      },
      b: function (e, r, t) {
        throw (new pn(e).init(r, t), e);
      },
      d: function () {
        S("");
      },
      f: function (e, r, t) {
        I.copyWithin(e, r, r + t);
      },
      e: function (e) {
        var r = I.length,
          t = 2147483648;
        if ((e >>>= 0) > t) return !1;
        let i = (p, a) => p + ((a - (p % a)) % a);
        for (var o = 1; o <= 4; o *= 2) {
          var s = r * (1 + 0.2 / o);
          if (
            ((s = Math.min(s, e + 100663296)),
            ln(Math.min(t, i(Math.max(e, s), 65536))))
          )
            return !0;
        }
        return !1;
      },
    };
    (function () {
      var e = { a: hn };
      function r(o, s) {
        var p = o.exports;
        (n.asm = p),
          N((O = n.asm.g).buffer),
          (L = n.asm.m),
          (function (a) {
            J.unshift(a);
          })(n.asm.h),
          (function (a) {
            if (
              (y--,
              n.monitorRunDependencies && n.monitorRunDependencies(y),
              y == 0 && x)
            ) {
              var c = x;
              (x = null), c();
            }
          })();
      }
      function t(o) {
        r(o.instance);
      }
      function i(o) {
        return fn()
          .then(function (s) {
            return WebAssembly.instantiate(s, e);
          })
          .then(function (s) {
            return s;
          })
          .then(o, function (s) {
            A("failed to asynchronously prepare wasm: " + s), S(s);
          });
      }
      if (
        (y++,
        n.monitorRunDependencies && n.monitorRunDependencies(y),
        n.instantiateWasm)
      )
        try {
          return n.instantiateWasm(e, r);
        } catch (o) {
          return (
            A("Module.instantiateWasm callback failed with error: " + o), !1
          );
        }
      (b ||
      typeof WebAssembly.instantiateStreaming != "function" ||
      Q(u) ||
      V(u) ||
      k ||
      typeof fetch != "function"
        ? i(t)
        : fetch(u, { credentials: "same-origin" }).then(function (o) {
            return WebAssembly.instantiateStreaming(o, e).then(t, function (s) {
              return (
                A("wasm streaming compile failed: " + s),
                A("falling back to ArrayBuffer instantiation"),
                i(t)
              );
            });
          })
      ).catch(_);
    })(),
      (n.___wasm_call_ctors = function () {
        return (n.___wasm_call_ctors = n.asm.h).apply(null, arguments);
      }),
      (n._lerc_getBlobInfo = function () {
        return (n._lerc_getBlobInfo = n.asm.i).apply(null, arguments);
      }),
      (n._lerc_getDataRanges = function () {
        return (n._lerc_getDataRanges = n.asm.j).apply(null, arguments);
      }),
      (n._lerc_decode = function () {
        return (n._lerc_decode = n.asm.k).apply(null, arguments);
      }),
      (n._lerc_decode_4D = function () {
        return (n._lerc_decode_4D = n.asm.l).apply(null, arguments);
      });
    var nn = (n._malloc = function () {
      return (nn = n._malloc = n.asm.n).apply(null, arguments);
    });
    n._free = function () {
      return (n._free = n.asm.o).apply(null, arguments);
    };
    var T,
      en = (n.___cxa_is_pointer_type = function () {
        return (en = n.___cxa_is_pointer_type = n.asm.p).apply(null, arguments);
      });
    function dn(e) {
      (this.name = "ExitStatus"),
        (this.message = "Program terminated with exit(" + e + ")"),
        (this.status = e);
    }
    function q(e) {
      function r() {
        T ||
          ((T = !0),
          (n.calledRun = !0),
          G ||
            (U(J),
            v(n),
            n.onRuntimeInitialized && n.onRuntimeInitialized(),
            (function () {
              if (n.postRun)
                for (
                  typeof n.postRun == "function" && (n.postRun = [n.postRun]);
                  n.postRun.length;

                )
                  an(n.postRun.shift());
              U(K);
            })()));
      }
      y > 0 ||
        ((function () {
          if (n.preRun)
            for (
              typeof n.preRun == "function" && (n.preRun = [n.preRun]);
              n.preRun.length;

            )
              un(n.preRun.shift());
          U(Y);
        })(),
        y > 0 ||
          (n.setStatus
            ? (n.setStatus("Running..."),
              setTimeout(function () {
                setTimeout(function () {
                  n.setStatus("");
                }, 1),
                  r();
              }, 1))
            : r()));
    }
    if (
      ((x = function e() {
        T || q(), T || (x = e);
      }),
      (n.run = q),
      n.preInit)
    )
      for (
        typeof n.preInit == "function" && (n.preInit = [n.preInit]);
        n.preInit.length > 0;

      )
        n.preInit.pop()();
    return q(), n.ready;
  }),
  (on.exports = sn);
const mn = (function (n, v) {
  for (var _ = 0; _ < v.length; _++) {
    const h = v[_];
    if (typeof h != "string" && !Array.isArray(h)) {
      for (const l in h)
        if (l !== "default" && !(l in n)) {
          const d = Object.getOwnPropertyDescriptor(h, l);
          d &&
            Object.defineProperty(
              n,
              l,
              d.get ? d : { enumerable: !0, get: () => h[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: "Module" })
  );
})({ __proto__: null, default: D }, [D]);
export { mn as l };
