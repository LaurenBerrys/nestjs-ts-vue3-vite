var J,
  cn,
  B = {},
  En = {
    get exports() {
      return B;
    },
    set exports(v) {
      B = v;
    },
  };
(J = En),
  (cn = {
    load: function (v) {
      const q = v.locateFile,
        m = {};
      var t = t !== void 0 ? t : {};
      const d = (() => {
        let n;
        return { resolve: (e) => n(e), promise: new Promise((e) => (n = e)) };
      })();
      (t.locateFile = q),
        (t.onRuntimeInitialized = () => {
          d.resolve(m);
        }),
        (m.Module = t),
        (m.whenLoaded = () => d.promise);
      var c,
        T = {};
      for (c in t) t.hasOwnProperty(c) && (T[c] = t[c]);
      var D,
        C,
        O,
        R,
        P,
        K = typeof window == "object",
        j = typeof importScripts == "function",
        ln =
          typeof process == "object" &&
          typeof process.versions == "object" &&
          typeof process.versions.node == "string",
        h = "";
      ln
        ? ((h = j ? require("path").dirname(h) + "/" : __dirname + "/"),
          (D = function (n, e) {
            return (
              R || (R = require("fs")),
              P || (P = require("path")),
              (n = P.normalize(n)),
              R.readFileSync(n, e ? null : "utf8")
            );
          }),
          (O = function (n) {
            var e = D(n, !0);
            return (
              e.buffer || (e = new Uint8Array(e)),
              (function (r, o) {
                r || F("Assertion failed: " + o);
              })(e.buffer),
              e
            );
          }),
          (C = function (n, e, r) {
            R || (R = require("fs")),
              P || (P = require("path")),
              (n = P.normalize(n)),
              R.readFile(n, function (o, i) {
                o ? r(o) : e(i.buffer);
              });
          }),
          process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"),
          process.argv.slice(2),
          (J.exports = t),
          process.on("uncaughtException", function (n) {
            if (!(n instanceof An)) throw n;
          }),
          process.on("unhandledRejection", F),
          (t.inspect = function () {
            return "[Emscripten Module object]";
          }))
        : (K || j) &&
          (j
            ? (h = self.location.href)
            : typeof document < "u" &&
              document.currentScript &&
              (h = document.currentScript.src),
          (h =
            h.indexOf("blob:") !== 0
              ? h.substr(0, h.lastIndexOf("/") + 1)
              : ""),
          (D = function (n) {
            var e = new XMLHttpRequest();
            return e.open("GET", n, !1), e.send(null), e.responseText;
          }),
          j &&
            (O = function (n) {
              var e = new XMLHttpRequest();
              return (
                e.open("GET", n, !1),
                (e.responseType = "arraybuffer"),
                e.send(null),
                new Uint8Array(e.response)
              );
            }),
          (C = function (n, e, r) {
            var o = new XMLHttpRequest();
            o.open("GET", n, !0),
              (o.responseType = "arraybuffer"),
              (o.onload = function () {
                o.status == 200 || (o.status == 0 && o.response)
                  ? e(o.response)
                  : r();
              }),
              (o.onerror = r),
              o.send(null);
          }));
      var pn = t.print || void 0,
        S = t.printErr || void 0;
      for (c in T) T.hasOwnProperty(c) && (t[c] = T[c]);
      (T = null),
        t.arguments && t.arguments,
        t.thisProgram && t.thisProgram,
        t.quit && t.quit;
      var I,
        z,
        Q = 0,
        mn = function (n) {
          Q = n;
        },
        hn = function () {
          return Q;
        };
      t.wasmBinary && (I = t.wasmBinary),
        t.noExitRuntime,
        typeof WebAssembly != "object" && F("no native wasm support detected");
      var V,
        x,
        H,
        g,
        Z = !1,
        $ = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
      function nn(n, e, r) {
        for (var o = e + r, i = e; n[i] && !(i >= o); ) ++i;
        if (i - e > 16 && n.subarray && $) return $.decode(n.subarray(e, i));
        for (var u = ""; e < i; ) {
          var a = n[e++];
          if (128 & a) {
            var f = 63 & n[e++];
            if ((224 & a) != 192) {
              var p = 63 & n[e++];
              if (
                (a =
                  (240 & a) == 224
                    ? ((15 & a) << 12) | (f << 6) | p
                    : ((7 & a) << 18) | (f << 12) | (p << 6) | (63 & n[e++])) <
                65536
              )
                u += String.fromCharCode(a);
              else {
                var k = a - 65536;
                u += String.fromCharCode(55296 | (k >> 10), 56320 | (1023 & k));
              }
            } else u += String.fromCharCode(((31 & a) << 6) | f);
          } else u += String.fromCharCode(a);
        }
        return u;
      }
      function gn(n, e) {
        return n % e > 0 && (n += e - (n % e)), n;
      }
      function tn(n) {
        (V = n),
          (t.HEAP8 = new Int8Array(n)),
          (t.HEAP16 = new Int16Array(n)),
          (t.HEAP32 = H = new Int32Array(n)),
          (t.HEAPU8 = x = new Uint8Array(n)),
          (t.HEAPU16 = new Uint16Array(n)),
          (t.HEAPU32 = new Uint32Array(n)),
          (t.HEAPF32 = new Float32Array(n)),
          (t.HEAPF64 = new Float64Array(n));
      }
      t.INITIAL_MEMORY;
      var en = [],
        rn = [],
        on = [];
      function dn(n) {
        en.unshift(n);
      }
      function yn(n) {
        on.unshift(n);
      }
      var w = 0,
        M = null;
      function F(n) {
        throw (
          (t.onAbort && t.onAbort(n),
          S((n += "")),
          (Z = !0),
          (n = "abort(" + n + "). Build with -s ASSERTIONS=1 for more info."),
          new WebAssembly.RuntimeError(n))
        );
      }
      (t.preloadedImages = {}), (t.preloadedAudios = {});
      var s,
        vn = "data:application/octet-stream;base64,";
      function un(n) {
        return n.startsWith(vn);
      }
      function an(n) {
        return n.startsWith("file://");
      }
      function sn(n) {
        try {
          if (n == s && I) return new Uint8Array(I);
          if (O) return O(n);
          throw "both async and sync fetching of the wasm failed";
        } catch (e) {
          F(e);
        }
      }
      function N(n) {
        for (; n.length > 0; ) {
          var e = n.shift();
          if (typeof e != "function") {
            var r = e.func;
            typeof r == "number"
              ? e.arg === void 0
                ? g.get(r)()
                : g.get(r)(e.arg)
              : r(e.arg === void 0 ? null : e.arg);
          } else e(t);
        }
      }
      function wn(n) {
        try {
          return z.grow((n - V.byteLength + 65535) >>> 16), tn(z.buffer), 1;
        } catch {}
      }
      un((s = "libtess.wasm")) ||
        (s = (function (n) {
          return t.locateFile ? t.locateFile(n, h) : h + n;
        })(s));
      var W = {
          mappings: {},
          buffers: [null, [], []],
          printChar: function (n, e) {
            var r = W.buffers[n];
            e === 0 || e === 10
              ? ((n === 1 ? pn : S)(nn(r, 0)), (r.length = 0))
              : r.push(e);
          },
          varargs: void 0,
          get: function () {
            return (W.varargs += 4), H[(W.varargs - 4) >> 2];
          },
          getStr: function (n) {
            return (function (e, r) {
              return e ? nn(x, e, r) : "";
            })(n);
          },
          get64: function (n, e) {
            return n;
          },
        },
        bn = {
          h: function () {
            throw "longjmp";
          },
          l: function (n, e, r) {
            x.copyWithin(n, e, e + r);
          },
          g: function (n) {
            var e = x.length,
              r = 2147483648;
            if ((n >>>= 0) > r) return !1;
            for (var o = 1; o <= 4; o *= 2) {
              var i = e * (1 + 0.2 / o);
              if (
                ((i = Math.min(i, n + 100663296)),
                wn(Math.min(r, gn(Math.max(n, i), 65536))))
              )
                return !0;
            }
            return !1;
          },
          f: function (n, e, r, o) {
            for (var i = 0, u = 0; u < r; u++) {
              for (
                var a = H[(e + 8 * u) >> 2],
                  f = H[(e + (8 * u + 4)) >> 2],
                  p = 0;
                p < f;
                p++
              )
                W.printChar(n, x[a + p]);
              i += f;
            }
            return (H[o >> 2] = i), 0;
          },
          b: function () {
            return hn();
          },
          k: function (n) {
            var e = b();
            try {
              return g.get(n)();
            } catch (r) {
              if ((A(e), r !== r + 0 && r !== "longjmp")) throw r;
              _(1, 0);
            }
          },
          d: function (n, e) {
            var r = b();
            try {
              return g.get(n)(e);
            } catch (o) {
              if ((A(r), o !== o + 0 && o !== "longjmp")) throw o;
              _(1, 0);
            }
          },
          j: function (n, e, r) {
            var o = b();
            try {
              return g.get(n)(e, r);
            } catch (i) {
              if ((A(o), i !== i + 0 && i !== "longjmp")) throw i;
              _(1, 0);
            }
          },
          i: function (n, e, r, o) {
            var i = b();
            try {
              return g.get(n)(e, r, o);
            } catch (u) {
              if ((A(i), u !== u + 0 && u !== "longjmp")) throw u;
              _(1, 0);
            }
          },
          e: function (n, e) {
            var r = b();
            try {
              g.get(n)(e);
            } catch (o) {
              if ((A(r), o !== o + 0 && o !== "longjmp")) throw o;
              _(1, 0);
            }
          },
          c: function (n, e, r) {
            var o = b();
            try {
              g.get(n)(e, r);
            } catch (i) {
              if ((A(o), i !== i + 0 && i !== "longjmp")) throw i;
              _(1, 0);
            }
          },
          a: function (n) {
            mn(n);
          },
        };
      (function () {
        var n = { a: bn };
        function e(i, u) {
          var a = i.exports;
          (t.asm = a),
            tn((z = t.asm.m).buffer),
            (g = t.asm.q),
            (function (f) {
              rn.unshift(f);
            })(t.asm.n),
            (function (f) {
              if (
                (w--,
                t.monitorRunDependencies && t.monitorRunDependencies(w),
                w == 0 && M)
              ) {
                var p = M;
                (M = null), p();
              }
            })();
        }
        function r(i) {
          e(i.instance);
        }
        function o(i) {
          return (function () {
            if (!I && (K || j)) {
              if (typeof fetch == "function" && !an(s))
                return fetch(s, { credentials: "same-origin" })
                  .then(function (u) {
                    if (!u.ok)
                      throw "failed to load wasm binary file at '" + s + "'";
                    return u.arrayBuffer();
                  })
                  .catch(function () {
                    return sn(s);
                  });
              if (C)
                return new Promise(function (u, a) {
                  C(
                    s,
                    function (f) {
                      u(new Uint8Array(f));
                    },
                    a
                  );
                });
            }
            return Promise.resolve().then(function () {
              return sn(s);
            });
          })()
            .then(function (u) {
              return WebAssembly.instantiate(u, n);
            })
            .then(i, function (u) {
              S("failed to asynchronously prepare wasm: " + u), F(u);
            });
        }
        if (
          (w++,
          t.monitorRunDependencies && t.monitorRunDependencies(w),
          t.instantiateWasm)
        )
          try {
            return t.instantiateWasm(n, e);
          } catch (i) {
            return (
              S("Module.instantiateWasm callback failed with error: " + i), !1
            );
          }
        I ||
        typeof WebAssembly.instantiateStreaming != "function" ||
        un(s) ||
        an(s) ||
        typeof fetch != "function"
          ? o(r)
          : fetch(s, { credentials: "same-origin" }).then(function (i) {
              return WebAssembly.instantiateStreaming(i, n).then(
                r,
                function (u) {
                  return (
                    S("wasm streaming compile failed: " + u),
                    S("falling back to ArrayBuffer instantiation"),
                    o(r)
                  );
                }
              );
            });
      })(),
        (t.___wasm_call_ctors = function () {
          return (t.___wasm_call_ctors = t.asm.n).apply(null, arguments);
        }),
        (t._malloc = function () {
          return (t._malloc = t.asm.o).apply(null, arguments);
        }),
        (t._free = function () {
          return (t._free = t.asm.p).apply(null, arguments);
        }),
        (t._triangulate = function () {
          return (t._triangulate = t.asm.r).apply(null, arguments);
        });
      var U,
        b = (t.stackSave = function () {
          return (b = t.stackSave = t.asm.s).apply(null, arguments);
        }),
        A = (t.stackRestore = function () {
          return (A = t.stackRestore = t.asm.t).apply(null, arguments);
        }),
        _ = (t._setThrew = function () {
          return (_ = t._setThrew = t.asm.u).apply(null, arguments);
        });
      function An(n) {
        (this.name = "ExitStatus"),
          (this.message = "Program terminated with exit(" + n + ")"),
          (this.status = n);
      }
      function G(n) {
        function e() {
          U ||
            ((U = !0),
            (t.calledRun = !0),
            Z ||
              (N(rn),
              t.onRuntimeInitialized && t.onRuntimeInitialized(),
              (function () {
                if (t.postRun)
                  for (
                    typeof t.postRun == "function" && (t.postRun = [t.postRun]);
                    t.postRun.length;

                  )
                    yn(t.postRun.shift());
                N(on);
              })()));
        }
        w > 0 ||
          ((function () {
            if (t.preRun)
              for (
                typeof t.preRun == "function" && (t.preRun = [t.preRun]);
                t.preRun.length;

              )
                dn(t.preRun.shift());
            N(en);
          })(),
          w > 0 ||
            (t.setStatus
              ? (t.setStatus("Running..."),
                setTimeout(function () {
                  setTimeout(function () {
                    t.setStatus("");
                  }, 1),
                    e();
                }, 1))
              : e()));
      }
      if (
        ((M = function n() {
          U || G(), U || (M = n);
        }),
        (t.run = G),
        t.preInit)
      )
        for (
          typeof t.preInit == "function" && (t.preInit = [t.preInit]);
          t.preInit.length > 0;

        )
          t.preInit.pop()();
      G();
      let X = null,
        y = null,
        E = null,
        L = null;
      const l = m.Module;
      let fn = 0;
      return (
        (m.triangulate = (n, e, r) => {
          X || (X = l._triangulate);
          let o = l.HEAPF32;
          const i = l.HEAP32.BYTES_PER_ELEMENT,
            u = o.BYTES_PER_ELEMENT;
          r > fn &&
            ((fn = r), E && (l._free(E), (E = 0)), y && (l._free(y), (y = 0))),
            E || (E = l._malloc(r * u)),
            L || (L = l._malloc(4e3 * i));
          const a = 2 * r;
          y || (y = l._malloc(a * u)),
            (o = l.HEAPF32),
            o.set(n, E / u),
            l.HEAP32.set(e, L / i);
          const f = a / 2,
            p = X(E, L, Math.min(e.length, 4e3), 2, y, f),
            k = 2 * p;
          o = l.HEAPF32;
          const _n = o.slice(y / u, y / u + k),
            Y = {};
          return (Y.buffer = _n), (Y.vertexCount = p), Y;
        }),
        m.whenLoaded()
      );
    },
  }) !== void 0 && (J.exports = cn);
const Rn = (function (v, q) {
  for (var m = 0; m < q.length; m++) {
    const t = q[m];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const d in t)
        if (d !== "default" && !(d in v)) {
          const c = Object.getOwnPropertyDescriptor(t, d);
          c &&
            Object.defineProperty(
              v,
              d,
              c.get ? c : { enumerable: !0, get: () => t[d] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(v, Symbol.toStringTag, { value: "Module" })
  );
})({ __proto__: null, default: B }, [B]);
export { Rn as l };
