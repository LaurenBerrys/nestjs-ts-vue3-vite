var Pr,
  _e,
  yr,
  ue = {};
(Pr = {
  get exports() {
    return ue;
  },
  set exports(e) {
    ue = e;
  },
}),
  (_e =
    typeof document < "u" && document.currentScript
      ? document.currentScript.src
      : void 0),
  typeof __filename < "u" && (_e = _e || __filename),
  (yr = function (e) {
    var K, W;
    (e = (e = e || {}) !== void 0 ? e : {}).ready = new Promise(function (
      t,
      n
    ) {
      (K = t), (W = n);
    });
    var X,
      H,
      V,
      de = Object.assign({}, e),
      ce = "./this.program",
      Ee = typeof window == "object",
      $ = typeof importScripts == "function",
      be =
        typeof process == "object" &&
        typeof process.versions == "object" &&
        typeof process.versions.node == "string",
      x = "";
    if (be) {
      var Oe = require("fs"),
        ge = require("path");
      (x = $ ? ge.dirname(x) + "/" : __dirname + "/"),
        (X = (t, n) => (
          (t = ae(t) ? new URL(t) : ge.normalize(t)),
          Oe.readFileSync(t, n ? void 0 : "utf8")
        )),
        (V = (t) => {
          var n = X(t, !0);
          return n.buffer || (n = new Uint8Array(n)), n;
        }),
        (H = (t, n, _) => {
          (t = ae(t) ? new URL(t) : ge.normalize(t)),
            Oe.readFile(t, function (o, p) {
              o ? _(o) : n(p.buffer);
            });
        }),
        process.argv.length > 1 && (ce = process.argv[1].replace(/\\/g, "/")),
        process.argv.slice(2),
        process.on("uncaughtException", function (t) {
          if (!(t instanceof br)) throw t;
        }),
        process.on("unhandledRejection", function (t) {
          throw t;
        }),
        (e.inspect = function () {
          return "[Emscripten Module object]";
        });
    } else
      (Ee || $) &&
        ($
          ? (x = self.location.href)
          : typeof document < "u" &&
            document.currentScript &&
            (x = document.currentScript.src),
        _e && (x = _e),
        (x =
          x.indexOf("blob:") !== 0
            ? x.substr(0, x.replace(/[?#].*/, "").lastIndexOf("/") + 1)
            : ""),
        (X = (t) => {
          var n = new XMLHttpRequest();
          return n.open("GET", t, !1), n.send(null), n.responseText;
        }),
        $ &&
          (V = (t) => {
            var n = new XMLHttpRequest();
            return (
              n.open("GET", t, !1),
              (n.responseType = "arraybuffer"),
              n.send(null),
              new Uint8Array(n.response)
            );
          }),
        (H = (t, n, _) => {
          var o = new XMLHttpRequest();
          o.open("GET", t, !0),
            (o.responseType = "arraybuffer"),
            (o.onload = () => {
              o.status == 200 || (o.status == 0 && o.response)
                ? n(o.response)
                : _();
            }),
            (o.onerror = _),
            o.send(null);
        }));
    var Q,
      Pe,
      mr = e.print || void 0,
      k = e.printErr || void 0;
    Object.assign(e, de),
      (de = null),
      e.arguments && e.arguments,
      e.thisProgram && (ce = e.thisProgram),
      e.quit && e.quit,
      e.wasmBinary && (Q = e.wasmBinary),
      e.noExitRuntime,
      typeof WebAssembly != "object" && J("no native wasm support detected");
    var Te = !1;
    function ye(t, n) {
      t || J(n);
    }
    var Se,
      z,
      ee,
      oe,
      M,
      C,
      pe,
      ie,
      Ne = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function he(t, n, _) {
      for (var o = n + _, p = n; t[p] && !(p >= o); ) ++p;
      if (p - n > 16 && t.buffer && Ne) return Ne.decode(t.subarray(n, p));
      for (var i = ""; n < p; ) {
        var c = t[n++];
        if (128 & c) {
          var u = 63 & t[n++];
          if ((224 & c) != 192) {
            var E = 63 & t[n++];
            if (
              (c =
                (240 & c) == 224
                  ? ((15 & c) << 12) | (u << 6) | E
                  : ((7 & c) << 18) | (u << 12) | (E << 6) | (63 & t[n++])) <
              65536
            )
              i += String.fromCharCode(c);
            else {
              var U = c - 65536;
              i += String.fromCharCode(55296 | (U >> 10), 56320 | (1023 & U));
            }
          } else i += String.fromCharCode(((31 & c) << 6) | u);
        } else i += String.fromCharCode(c);
      }
      return i;
    }
    function Y(t, n) {
      return t ? he(ee, t, n) : "";
    }
    function Me(t, n, _, o) {
      if (!(o > 0)) return 0;
      for (var p = _, i = _ + o - 1, c = 0; c < t.length; ++c) {
        var u = t.charCodeAt(c);
        if (
          (u >= 55296 &&
            u <= 57343 &&
            (u = (65536 + ((1023 & u) << 10)) | (1023 & t.charCodeAt(++c))),
          u <= 127)
        ) {
          if (_ >= i) break;
          n[_++] = u;
        } else if (u <= 2047) {
          if (_ + 1 >= i) break;
          (n[_++] = 192 | (u >> 6)), (n[_++] = 128 | (63 & u));
        } else if (u <= 65535) {
          if (_ + 2 >= i) break;
          (n[_++] = 224 | (u >> 12)),
            (n[_++] = 128 | ((u >> 6) & 63)),
            (n[_++] = 128 | (63 & u));
        } else {
          if (_ + 3 >= i) break;
          (n[_++] = 240 | (u >> 18)),
            (n[_++] = 128 | ((u >> 12) & 63)),
            (n[_++] = 128 | ((u >> 6) & 63)),
            (n[_++] = 128 | (63 & u));
        }
      }
      return (n[_] = 0), _ - p;
    }
    function ve(t) {
      for (var n = 0, _ = 0; _ < t.length; ++_) {
        var o = t.charCodeAt(_);
        o <= 127
          ? n++
          : o <= 2047
          ? (n += 2)
          : o >= 55296 && o <= 57343
          ? ((n += 4), ++_)
          : (n += 3);
      }
      return n;
    }
    function De(t) {
      (Se = t),
        (e.HEAP8 = z = new Int8Array(t)),
        (e.HEAP16 = oe = new Int16Array(t)),
        (e.HEAP32 = M = new Int32Array(t)),
        (e.HEAPU8 = ee = new Uint8Array(t)),
        (e.HEAPU16 = new Uint16Array(t)),
        (e.HEAPU32 = C = new Uint32Array(t)),
        (e.HEAPF32 = pe = new Float32Array(t)),
        (e.HEAPF64 = ie = new Float64Array(t));
    }
    e.INITIAL_MEMORY;
    var Re = [],
      Ae = [],
      Ge = [];
    function fr(t) {
      Re.unshift(t);
    }
    function lr(t) {
      Ge.unshift(t);
    }
    var q = 0,
      te = null;
    function J(t) {
      e.onAbort && e.onAbort(t),
        k((t = "Aborted(" + t + ")")),
        (Te = !0),
        (t += ". Build with -sASSERTIONS for more info.");
      var n = new WebAssembly.RuntimeError(t);
      throw (W(n), n);
    }
    var j,
      dr = "data:application/octet-stream;base64,";
    function Ce(t) {
      return t.startsWith(dr);
    }
    function ae(t) {
      return t.startsWith("file://");
    }
    function Ie(t) {
      try {
        if (t == j && Q) return new Uint8Array(Q);
        if (V) return V(t);
        throw "both async and sync fetching of the wasm failed";
      } catch (n) {
        J(n);
      }
    }
    function Er() {
      if (!Q && (Ee || $)) {
        if (typeof fetch == "function" && !ae(j))
          return fetch(j, { credentials: "same-origin" })
            .then(function (t) {
              if (!t.ok) throw "failed to load wasm binary file at '" + j + "'";
              return t.arrayBuffer();
            })
            .catch(function () {
              return Ie(j);
            });
        if (H)
          return new Promise(function (t, n) {
            H(
              j,
              function (_) {
                t(new Uint8Array(_));
              },
              n
            );
          });
      }
      return Promise.resolve().then(function () {
        return Ie(j);
      });
    }
    function br(t) {
      (this.name = "ExitStatus"),
        (this.message = "Program terminated with exit(" + t + ")"),
        (this.status = t);
    }
    function me(t) {
      for (; t.length > 0; ) t.shift()(e);
    }
    Ce((j = "pe-wasm.wasm")) ||
      (j = (function (t) {
        return e.locateFile ? e.locateFile(t, x) : x + t;
      })(j));
    var Or = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
      Tr = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    function je(t) {
      var n = ve(t) + 1,
        _ = ar(n);
      return _ && Me(t, z, _, n), _;
    }
    function Sr(t) {
      try {
        return Pe.grow((t - Se.byteLength + 65535) >>> 16), De(Pe.buffer), 1;
      } catch {}
    }
    var fe = {};
    function ne() {
      if (!ne.strings) {
        var t = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG:
            (
              (typeof navigator == "object" &&
                navigator.languages &&
                navigator.languages[0]) ||
              "C"
            ).replace("-", "_") + ".UTF-8",
          _: ce || "./this.program",
        };
        for (var n in fe) fe[n] === void 0 ? delete t[n] : (t[n] = fe[n]);
        var _ = [];
        for (var n in t) _.push(n + "=" + t[n]);
        ne.strings = _;
      }
      return ne.strings;
    }
    var Nr = [null, [], []];
    function hr(t, n) {
      var _ = Nr[t];
      n === 0 || n === 10
        ? ((t === 1 ? mr : k)(he(_, 0)), (_.length = 0))
        : _.push(n);
    }
    var Mr = {
      c: function (t, n, _) {
        return 0;
      },
      p: function (t, n, _) {},
      f: function (t, n, _) {
        return 0;
      },
      d: function (t, n, _, o) {},
      n: function (t) {},
      m: function (t, n) {},
      o: function (t, n, _) {},
      h: function (t, n) {
        var _ = new Date(
          1e3 *
            (function (E) {
              return C[E >> 2] + 4294967296 * M[(E + 4) >> 2];
            })(t)
        );
        (M[n >> 2] = _.getSeconds()),
          (M[(n + 4) >> 2] = _.getMinutes()),
          (M[(n + 8) >> 2] = _.getHours()),
          (M[(n + 12) >> 2] = _.getDate()),
          (M[(n + 16) >> 2] = _.getMonth()),
          (M[(n + 20) >> 2] = _.getFullYear() - 1900),
          (M[(n + 24) >> 2] = _.getDay());
        var o =
          0 |
          (function (E) {
            return (
              ((function (U) {
                return U % 4 == 0 && (U % 100 != 0 || U % 400 == 0);
              })(E.getFullYear())
                ? Or
                : Tr)[E.getMonth()] +
              E.getDate() -
              1
            );
          })(_);
        (M[(n + 28) >> 2] = o),
          (M[(n + 36) >> 2] = -60 * _.getTimezoneOffset());
        var p = new Date(_.getFullYear(), 0, 1),
          i = new Date(_.getFullYear(), 6, 1).getTimezoneOffset(),
          c = p.getTimezoneOffset(),
          u = 0 | (i != c && _.getTimezoneOffset() == Math.min(c, i));
        M[(n + 32) >> 2] = u;
      },
      i: function (t, n, _) {
        var o = new Date().getFullYear(),
          p = new Date(o, 0, 1),
          i = new Date(o, 6, 1),
          c = p.getTimezoneOffset(),
          u = i.getTimezoneOffset(),
          E = Math.max(c, u);
        function U(Rr) {
          var gr = Rr.toTimeString().match(/\(([A-Za-z ]+)\)$/);
          return gr ? gr[1] : "GMT";
        }
        (C[t >> 2] = 60 * E), (M[n >> 2] = Number(c != u));
        var vr = U(p),
          Dr = U(i),
          ur = je(vr),
          cr = je(Dr);
        u < c
          ? ((C[_ >> 2] = ur), (C[(_ + 4) >> 2] = cr))
          : ((C[_ >> 2] = cr), (C[(_ + 4) >> 2] = ur));
      },
      k: function () {
        J("");
      },
      g: function () {
        return Date.now();
      },
      s: function (t, n, _) {
        ee.copyWithin(t, n, n + _);
      },
      l: function (t) {
        var n = ee.length,
          _ = 2147483648;
        if ((t >>>= 0) > _) return !1;
        let o = (c, u) => c + ((u - (c % u)) % u);
        for (var p = 1; p <= 4; p *= 2) {
          var i = n * (1 + 0.2 / p);
          if (
            ((i = Math.min(i, t + 100663296)),
            Sr(Math.min(_, o(Math.max(t, i), 65536))))
          )
            return !0;
        }
        return !1;
      },
      q: function (t, n) {
        var _ = 0;
        return (
          ne().forEach(function (o, p) {
            var i = n + _;
            (C[(t + 4 * p) >> 2] = i),
              (function (c, u, E) {
                for (var U = 0; U < c.length; ++U)
                  z[u++ >> 0] = c.charCodeAt(U);
                E || (z[u >> 0] = 0);
              })(o, i),
              (_ += o.length + 1);
          }),
          0
        );
      },
      r: function (t, n) {
        var _ = ne();
        C[t >> 2] = _.length;
        var o = 0;
        return (
          _.forEach(function (p) {
            o += p.length + 1;
          }),
          (C[n >> 2] = o),
          0
        );
      },
      a: function (t) {
        return 52;
      },
      e: function (t, n, _, o) {
        return 52;
      },
      j: function (t, n, _, o, p) {
        return 70;
      },
      b: function (t, n, _, o) {
        for (var p = 0, i = 0; i < _; i++) {
          var c = C[n >> 2],
            u = C[(n + 4) >> 2];
          n += 8;
          for (var E = 0; E < u; E++) hr(t, ee[c + E]);
          p += u;
        }
        return (C[o >> 2] = p), 0;
      },
    };
    (function () {
      var t = { a: Mr };
      function n(p, i) {
        var c = p.exports;
        (e.asm = c),
          De((Pe = e.asm.t).buffer),
          e.asm.Yb,
          (function (u) {
            Ae.unshift(u);
          })(e.asm.u),
          (function (u) {
            if (
              (q--,
              e.monitorRunDependencies && e.monitorRunDependencies(q),
              q == 0 && te)
            ) {
              var E = te;
              (te = null), E();
            }
          })();
      }
      function _(p) {
        n(p.instance);
      }
      function o(p) {
        return Er()
          .then(function (i) {
            return WebAssembly.instantiate(i, t);
          })
          .then(function (i) {
            return i;
          })
          .then(p, function (i) {
            k("failed to asynchronously prepare wasm: " + i), J(i);
          });
      }
      if (
        (q++,
        e.monitorRunDependencies && e.monitorRunDependencies(q),
        e.instantiateWasm)
      )
        try {
          return e.instantiateWasm(t, n);
        } catch (p) {
          k("Module.instantiateWasm callback failed with error: " + p), W(p);
        }
      (Q ||
      typeof WebAssembly.instantiateStreaming != "function" ||
      Ce(j) ||
      ae(j) ||
      be ||
      typeof fetch != "function"
        ? o(_)
        : fetch(j, { credentials: "same-origin" }).then(function (p) {
            return WebAssembly.instantiateStreaming(p, t).then(_, function (i) {
              return (
                k("wasm streaming compile failed: " + i),
                k("falling back to ArrayBuffer instantiation"),
                o(_)
              );
            });
          })
      ).catch(W);
    })(),
      (e.___wasm_call_ctors = function () {
        return (e.___wasm_call_ctors = e.asm.u).apply(null, arguments);
      });
    var Le = (e._emscripten_bind_PeObject_getCode_0 = function () {
        return (Le = e._emscripten_bind_PeObject_getCode_0 = e.asm.v).apply(
          null,
          arguments
        );
      }),
      Ue = (e._emscripten_bind_PeObject_getName_1 = function () {
        return (Ue = e._emscripten_bind_PeObject_getName_1 = e.asm.w).apply(
          null,
          arguments
        );
      }),
      Ye = (e._emscripten_bind_PeObject_getType_0 = function () {
        return (Ye = e._emscripten_bind_PeObject_getType_0 = e.asm.x).apply(
          null,
          arguments
        );
      }),
      Fe = (e._emscripten_bind_PeCoordsys_getCode_0 = function () {
        return (Fe = e._emscripten_bind_PeCoordsys_getCode_0 = e.asm.y).apply(
          null,
          arguments
        );
      }),
      xe = (e._emscripten_bind_PeCoordsys_getName_1 = function () {
        return (xe = e._emscripten_bind_PeCoordsys_getName_1 = e.asm.z).apply(
          null,
          arguments
        );
      }),
      we = (e._emscripten_bind_PeCoordsys_getType_0 = function () {
        return (we = e._emscripten_bind_PeCoordsys_getType_0 = e.asm.A).apply(
          null,
          arguments
        );
      }),
      He = (e._emscripten_bind_VoidPtr___destroy___0 = function () {
        return (He = e._emscripten_bind_VoidPtr___destroy___0 = e.asm.B).apply(
          null,
          arguments
        );
      }),
      Xe = (e._emscripten_bind_PeDatum_getSpheroid_0 = function () {
        return (Xe = e._emscripten_bind_PeDatum_getSpheroid_0 = e.asm.C).apply(
          null,
          arguments
        );
      }),
      ze = (e._emscripten_bind_PeDatum_getCode_0 = function () {
        return (ze = e._emscripten_bind_PeDatum_getCode_0 = e.asm.D).apply(
          null,
          arguments
        );
      }),
      Ze = (e._emscripten_bind_PeDatum_getName_1 = function () {
        return (Ze = e._emscripten_bind_PeDatum_getName_1 = e.asm.E).apply(
          null,
          arguments
        );
      }),
      Be = (e._emscripten_bind_PeDatum_getType_0 = function () {
        return (Be = e._emscripten_bind_PeDatum_getType_0 = e.asm.F).apply(
          null,
          arguments
        );
      }),
      We = (e._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = function () {
        return (We = e._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 =
          e.asm.G).apply(null, arguments);
      }),
      Ve = (e._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = function () {
        return (Ve = e._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 =
          e.asm.H).apply(null, arguments);
      }),
      qe = (e._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = function () {
        return (qe = e._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 =
          e.asm.I).apply(null, arguments);
      }),
      ke = (e._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = function () {
        return (ke = e._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 =
          e.asm.J).apply(null, arguments);
      }),
      Je = (e._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = function () {
        return (Je = e._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = e.asm.K).apply(
          null,
          arguments
        );
      }),
      Ke = (e._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = function () {
        return (Ke = e._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 =
          e.asm.L).apply(null, arguments);
      }),
      $e = (e._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = function () {
        return ($e = e._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 =
          e.asm.M).apply(null, arguments);
      }),
      Qe = (e._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = function () {
        return (Qe = e._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 =
          e.asm.N).apply(null, arguments);
      }),
      et = (e._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = function () {
        return (et = e._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 =
          e.asm.O).apply(null, arguments);
      }),
      tt = (e._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = function () {
        return (tt = e._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 =
          e.asm.P).apply(null, arguments);
      }),
      nt = (e._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = function () {
        return (nt = e._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 =
          e.asm.Q).apply(null, arguments);
      }),
      rt = (e._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = function () {
        return (rt = e._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 =
          e.asm.R).apply(null, arguments);
      }),
      _t = (e._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = function () {
        return (_t = e._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 =
          e.asm.S).apply(null, arguments);
      }),
      ot = (e._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = function () {
        return (ot = e._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 =
          e.asm.T).apply(null, arguments);
      }),
      pt = (e._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = function () {
        return (pt = e._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 =
          e.asm.U).apply(null, arguments);
      }),
      it = (e._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = function () {
        return (it = e._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 =
          e.asm.V).apply(null, arguments);
      }),
      at = (e._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = function () {
        return (at = e._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 =
          e.asm.W).apply(null, arguments);
      }),
      st = (e._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = function () {
        return (st = e._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 =
          e.asm.X).apply(null, arguments);
      }),
      ut = (e._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = function () {
        return (ut = e._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 =
          e.asm.Y).apply(null, arguments);
      }),
      ct = (e._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = function () {
        return (ct = e._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 =
          e.asm.Z).apply(null, arguments);
      }),
      gt = (e._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = function () {
        return (gt = e._emscripten_bind_PeDefs_get_PE_PARM_X0_0 =
          e.asm._).apply(null, arguments);
      }),
      Pt = (e._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = function () {
        return (Pt = e._emscripten_bind_PeDefs_get_PE_PARM_ND_0 =
          e.asm.$).apply(null, arguments);
      }),
      yt = (e._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = function () {
        return (yt = e._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 =
          e.asm.aa).apply(null, arguments);
      }),
      mt = (e._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = function () {
        return (mt = e._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 =
          e.asm.ba).apply(null, arguments);
      }),
      ft = (e._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = function () {
        return (ft = e._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 =
          e.asm.ca).apply(null, arguments);
      }),
      lt = (e._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = function () {
        return (lt = e._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 =
          e.asm.da).apply(null, arguments);
      }),
      dt = (e._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = function () {
        return (dt = e._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 =
          e.asm.ea).apply(null, arguments);
      }),
      Et = (e._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = function () {
        return (Et = e._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 =
          e.asm.fa).apply(null, arguments);
      }),
      bt = (e._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = function () {
        return (bt = e._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 =
          e.asm.ga).apply(null, arguments);
      }),
      Ot = (e._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = function () {
        return (Ot = e._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 =
          e.asm.ha).apply(null, arguments);
      }),
      Tt = (e._emscripten_bind_PeFactory_initialize_1 = function () {
        return (Tt = e._emscripten_bind_PeFactory_initialize_1 =
          e.asm.ia).apply(null, arguments);
      }),
      St = (e._emscripten_bind_PeFactory_factoryByType_2 = function () {
        return (St = e._emscripten_bind_PeFactory_factoryByType_2 =
          e.asm.ja).apply(null, arguments);
      }),
      Nt = (e._emscripten_bind_PeFactory_fromString_2 = function () {
        return (Nt = e._emscripten_bind_PeFactory_fromString_2 =
          e.asm.ka).apply(null, arguments);
      }),
      ht = (e._emscripten_bind_PeFactory_getCode_1 = function () {
        return (ht = e._emscripten_bind_PeFactory_getCode_1 = e.asm.la).apply(
          null,
          arguments
        );
      }),
      Mt = (e._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = function () {
        return (Mt = e._emscripten_bind_PeGCSExtent_PeGCSExtent_6 =
          e.asm.ma).apply(null, arguments);
      }),
      vt = (e._emscripten_bind_PeGCSExtent_getLLon_0 = function () {
        return (vt = e._emscripten_bind_PeGCSExtent_getLLon_0 = e.asm.na).apply(
          null,
          arguments
        );
      }),
      Dt = (e._emscripten_bind_PeGCSExtent_getSLat_0 = function () {
        return (Dt = e._emscripten_bind_PeGCSExtent_getSLat_0 = e.asm.oa).apply(
          null,
          arguments
        );
      }),
      Rt = (e._emscripten_bind_PeGCSExtent_getRLon_0 = function () {
        return (Rt = e._emscripten_bind_PeGCSExtent_getRLon_0 = e.asm.pa).apply(
          null,
          arguments
        );
      }),
      At = (e._emscripten_bind_PeGCSExtent_getNLat_0 = function () {
        return (At = e._emscripten_bind_PeGCSExtent_getNLat_0 = e.asm.qa).apply(
          null,
          arguments
        );
      }),
      Gt = (e._emscripten_bind_PeGCSExtent___destroy___0 = function () {
        return (Gt = e._emscripten_bind_PeGCSExtent___destroy___0 =
          e.asm.ra).apply(null, arguments);
      }),
      Ct = (e._emscripten_bind_PeGeogcs_getDatum_0 = function () {
        return (Ct = e._emscripten_bind_PeGeogcs_getDatum_0 = e.asm.sa).apply(
          null,
          arguments
        );
      }),
      It = (e._emscripten_bind_PeGeogcs_getPrimem_0 = function () {
        return (It = e._emscripten_bind_PeGeogcs_getPrimem_0 = e.asm.ta).apply(
          null,
          arguments
        );
      }),
      jt = (e._emscripten_bind_PeGeogcs_getUnit_0 = function () {
        return (jt = e._emscripten_bind_PeGeogcs_getUnit_0 = e.asm.ua).apply(
          null,
          arguments
        );
      }),
      Lt = (e._emscripten_bind_PeGeogcs_getCode_0 = function () {
        return (Lt = e._emscripten_bind_PeGeogcs_getCode_0 = e.asm.va).apply(
          null,
          arguments
        );
      }),
      Ut = (e._emscripten_bind_PeGeogcs_getName_1 = function () {
        return (Ut = e._emscripten_bind_PeGeogcs_getName_1 = e.asm.wa).apply(
          null,
          arguments
        );
      }),
      Yt = (e._emscripten_bind_PeGeogcs_getType_0 = function () {
        return (Yt = e._emscripten_bind_PeGeogcs_getType_0 = e.asm.xa).apply(
          null,
          arguments
        );
      }),
      Ft = (e._emscripten_bind_PeGeogtran_isEqual_1 = function () {
        return (Ft = e._emscripten_bind_PeGeogtran_isEqual_1 = e.asm.ya).apply(
          null,
          arguments
        );
      }),
      xt = (e._emscripten_bind_PeGeogtran_getGeogcs1_0 = function () {
        return (xt = e._emscripten_bind_PeGeogtran_getGeogcs1_0 =
          e.asm.za).apply(null, arguments);
      }),
      wt = (e._emscripten_bind_PeGeogtran_getGeogcs2_0 = function () {
        return (wt = e._emscripten_bind_PeGeogtran_getGeogcs2_0 =
          e.asm.Aa).apply(null, arguments);
      }),
      Ht = (e._emscripten_bind_PeGeogtran_getParameters_0 = function () {
        return (Ht = e._emscripten_bind_PeGeogtran_getParameters_0 =
          e.asm.Ba).apply(null, arguments);
      }),
      Xt = (e._emscripten_bind_PeGeogtran_loadConstants_0 = function () {
        return (Xt = e._emscripten_bind_PeGeogtran_loadConstants_0 =
          e.asm.Ca).apply(null, arguments);
      }),
      zt = (e._emscripten_bind_PeGeogtran_getCode_0 = function () {
        return (zt = e._emscripten_bind_PeGeogtran_getCode_0 = e.asm.Da).apply(
          null,
          arguments
        );
      }),
      Zt = (e._emscripten_bind_PeGeogtran_getName_1 = function () {
        return (Zt = e._emscripten_bind_PeGeogtran_getName_1 = e.asm.Ea).apply(
          null,
          arguments
        );
      }),
      Bt = (e._emscripten_bind_PeGeogtran_getType_0 = function () {
        return (Bt = e._emscripten_bind_PeGeogtran_getType_0 = e.asm.Fa).apply(
          null,
          arguments
        );
      }),
      Wt = (e._emscripten_bind_PeGTlistExtended_getGTlist_6 = function () {
        return (Wt = e._emscripten_bind_PeGTlistExtended_getGTlist_6 =
          e.asm.Ga).apply(null, arguments);
      }),
      Vt = (e._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 =
        function () {
          return (Vt =
            e._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 =
              e.asm.Ha).apply(null, arguments);
        }),
      qt = (e._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 =
        function () {
          return (qt = e._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 =
            e.asm.Ia).apply(null, arguments);
        }),
      kt = (e._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = function () {
        return (kt = e._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 =
          e.asm.Ja).apply(null, arguments);
      }),
      Jt = (e._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = function () {
        return (Jt = e._emscripten_bind_PeGTlistExtendedEntry_Delete_1 =
          e.asm.Ka).apply(null, arguments);
      }),
      Kt = (e._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 =
        function () {
          return (Kt = e._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 =
            e.asm.La).apply(null, arguments);
        }),
      $t = (e._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = function () {
        return ($t = e._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 =
          e.asm.Ma).apply(null, arguments);
      }),
      Qt = (e._emscripten_bind_PeHorizon_getNump_0 = function () {
        return (Qt = e._emscripten_bind_PeHorizon_getNump_0 = e.asm.Na).apply(
          null,
          arguments
        );
      }),
      en = (e._emscripten_bind_PeHorizon_getKind_0 = function () {
        return (en = e._emscripten_bind_PeHorizon_getKind_0 = e.asm.Oa).apply(
          null,
          arguments
        );
      }),
      tn = (e._emscripten_bind_PeHorizon_getInclusive_0 = function () {
        return (tn = e._emscripten_bind_PeHorizon_getInclusive_0 =
          e.asm.Pa).apply(null, arguments);
      }),
      nn = (e._emscripten_bind_PeHorizon_getSize_0 = function () {
        return (nn = e._emscripten_bind_PeHorizon_getSize_0 = e.asm.Qa).apply(
          null,
          arguments
        );
      }),
      rn = (e._emscripten_bind_PeHorizon_getCoord_0 = function () {
        return (rn = e._emscripten_bind_PeHorizon_getCoord_0 = e.asm.Ra).apply(
          null,
          arguments
        );
      }),
      _n = (e._emscripten_bind_PeInteger_PeInteger_1 = function () {
        return (_n = e._emscripten_bind_PeInteger_PeInteger_1 = e.asm.Sa).apply(
          null,
          arguments
        );
      }),
      on = (e._emscripten_bind_PeInteger_get_val_0 = function () {
        return (on = e._emscripten_bind_PeInteger_get_val_0 = e.asm.Ta).apply(
          null,
          arguments
        );
      }),
      pn = (e._emscripten_bind_PeInteger_set_val_1 = function () {
        return (pn = e._emscripten_bind_PeInteger_set_val_1 = e.asm.Ua).apply(
          null,
          arguments
        );
      }),
      an = (e._emscripten_bind_PeInteger___destroy___0 = function () {
        return (an = e._emscripten_bind_PeInteger___destroy___0 =
          e.asm.Va).apply(null, arguments);
      }),
      sn = (e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 =
        function () {
          return (sn =
            e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 =
              e.asm.Wa).apply(null, arguments);
        }),
      un = (e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 =
        function () {
          return (un =
            e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 =
              e.asm.Xa).apply(null, arguments);
        }),
      cn = (e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 =
        function () {
          return (cn =
            e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 =
              e.asm.Ya).apply(null, arguments);
        }),
      gn = (e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 =
        function () {
          return (gn =
            e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 =
              e.asm.Za).apply(null, arguments);
        }),
      Pn = (e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 =
        function () {
          return (Pn =
            e._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 =
              e.asm._a).apply(null, arguments);
        }),
      yn = (e._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 =
        function () {
          return (yn = e._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 =
            e.asm.$a).apply(null, arguments);
        }),
      mn = (e._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 =
        function () {
          return (mn = e._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 =
            e.asm.ab).apply(null, arguments);
        }),
      fn = (e._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 =
        function () {
          return (fn =
            e._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 =
              e.asm.bb).apply(null, arguments);
        }),
      ln = (e._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 =
        function () {
          return (ln =
            e._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 =
              e.asm.cb).apply(null, arguments);
        }),
      dn = (e._emscripten_bind_PeParameter_getValue_0 = function () {
        return (dn = e._emscripten_bind_PeParameter_getValue_0 =
          e.asm.db).apply(null, arguments);
      }),
      En = (e._emscripten_bind_PeParameter_getCode_0 = function () {
        return (En = e._emscripten_bind_PeParameter_getCode_0 = e.asm.eb).apply(
          null,
          arguments
        );
      }),
      bn = (e._emscripten_bind_PeParameter_getName_1 = function () {
        return (bn = e._emscripten_bind_PeParameter_getName_1 = e.asm.fb).apply(
          null,
          arguments
        );
      }),
      On = (e._emscripten_bind_PeParameter_getType_0 = function () {
        return (On = e._emscripten_bind_PeParameter_getType_0 = e.asm.gb).apply(
          null,
          arguments
        );
      }),
      Tn = (e._emscripten_bind_PePCSInfo_getCentralMeridian_0 = function () {
        return (Tn = e._emscripten_bind_PePCSInfo_getCentralMeridian_0 =
          e.asm.hb).apply(null, arguments);
      }),
      Sn = (e._emscripten_bind_PePCSInfo_getDomainMinx_0 = function () {
        return (Sn = e._emscripten_bind_PePCSInfo_getDomainMinx_0 =
          e.asm.ib).apply(null, arguments);
      }),
      Nn = (e._emscripten_bind_PePCSInfo_getDomainMiny_0 = function () {
        return (Nn = e._emscripten_bind_PePCSInfo_getDomainMiny_0 =
          e.asm.jb).apply(null, arguments);
      }),
      hn = (e._emscripten_bind_PePCSInfo_getDomainMaxx_0 = function () {
        return (hn = e._emscripten_bind_PePCSInfo_getDomainMaxx_0 =
          e.asm.kb).apply(null, arguments);
      }),
      Mn = (e._emscripten_bind_PePCSInfo_getDomainMaxy_0 = function () {
        return (Mn = e._emscripten_bind_PePCSInfo_getDomainMaxy_0 =
          e.asm.lb).apply(null, arguments);
      }),
      vn = (e._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = function () {
        return (vn = e._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 =
          e.asm.mb).apply(null, arguments);
      }),
      Dn = (e._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = function () {
        return (Dn = e._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 =
          e.asm.nb).apply(null, arguments);
      }),
      Rn = (e._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = function () {
        return (Rn = e._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 =
          e.asm.ob).apply(null, arguments);
      }),
      An = (e._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = function () {
        return (An = e._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 =
          e.asm.pb).apply(null, arguments);
      }),
      Gn = (e._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = function () {
        return (Gn = e._emscripten_bind_PePCSInfo_isDensificationNeeded_0 =
          e.asm.qb).apply(null, arguments);
      }),
      Cn = (e._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 =
        function () {
          return (Cn = e._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 =
            e.asm.rb).apply(null, arguments);
        }),
      In = (e._emscripten_bind_PePCSInfo_isPannableRectangle_0 = function () {
        return (In = e._emscripten_bind_PePCSInfo_isPannableRectangle_0 =
          e.asm.sb).apply(null, arguments);
      }),
      jn = (e._emscripten_bind_PePCSInfo_generate_2 = function () {
        return (jn = e._emscripten_bind_PePCSInfo_generate_2 = e.asm.tb).apply(
          null,
          arguments
        );
      }),
      Ln = (e._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 =
        function () {
          return (Ln =
            e._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 =
              e.asm.ub).apply(null, arguments);
        }),
      Un = (e._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 =
        function () {
          return (Un =
            e._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 =
              e.asm.vb).apply(null, arguments);
        }),
      Yn = (e._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 =
        function () {
          return (Yn =
            e._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 =
              e.asm.wb).apply(null, arguments);
        }),
      Fn = (e._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = function () {
        return (Fn = e._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 =
          e.asm.xb).apply(null, arguments);
      }),
      xn = (e._emscripten_bind_PePrimem_getLongitude_0 = function () {
        return (xn = e._emscripten_bind_PePrimem_getLongitude_0 =
          e.asm.yb).apply(null, arguments);
      }),
      wn = (e._emscripten_bind_PePrimem_getCode_0 = function () {
        return (wn = e._emscripten_bind_PePrimem_getCode_0 = e.asm.zb).apply(
          null,
          arguments
        );
      }),
      Hn = (e._emscripten_bind_PePrimem_getName_1 = function () {
        return (Hn = e._emscripten_bind_PePrimem_getName_1 = e.asm.Ab).apply(
          null,
          arguments
        );
      }),
      Xn = (e._emscripten_bind_PePrimem_getType_0 = function () {
        return (Xn = e._emscripten_bind_PePrimem_getType_0 = e.asm.Bb).apply(
          null,
          arguments
        );
      }),
      zn = (e._emscripten_bind_PeProjcs_getGeogcs_0 = function () {
        return (zn = e._emscripten_bind_PeProjcs_getGeogcs_0 = e.asm.Cb).apply(
          null,
          arguments
        );
      }),
      Zn = (e._emscripten_bind_PeProjcs_getParameters_0 = function () {
        return (Zn = e._emscripten_bind_PeProjcs_getParameters_0 =
          e.asm.Db).apply(null, arguments);
      }),
      Bn = (e._emscripten_bind_PeProjcs_getUnit_0 = function () {
        return (Bn = e._emscripten_bind_PeProjcs_getUnit_0 = e.asm.Eb).apply(
          null,
          arguments
        );
      }),
      Wn = (e._emscripten_bind_PeProjcs_loadConstants_0 = function () {
        return (Wn = e._emscripten_bind_PeProjcs_loadConstants_0 =
          e.asm.Fb).apply(null, arguments);
      }),
      Vn = (e._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = function () {
        return (Vn = e._emscripten_bind_PeProjcs_horizonGcsGenerate_0 =
          e.asm.Gb).apply(null, arguments);
      }),
      qn = (e._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = function () {
        return (qn = e._emscripten_bind_PeProjcs_horizonPcsGenerate_0 =
          e.asm.Hb).apply(null, arguments);
      }),
      kn = (e._emscripten_bind_PeProjcs_getCode_0 = function () {
        return (kn = e._emscripten_bind_PeProjcs_getCode_0 = e.asm.Ib).apply(
          null,
          arguments
        );
      }),
      Jn = (e._emscripten_bind_PeProjcs_getName_1 = function () {
        return (Jn = e._emscripten_bind_PeProjcs_getName_1 = e.asm.Jb).apply(
          null,
          arguments
        );
      }),
      Kn = (e._emscripten_bind_PeProjcs_getType_0 = function () {
        return (Kn = e._emscripten_bind_PeProjcs_getType_0 = e.asm.Kb).apply(
          null,
          arguments
        );
      }),
      $n = (e._emscripten_bind_PeSpheroid_getAxis_0 = function () {
        return ($n = e._emscripten_bind_PeSpheroid_getAxis_0 = e.asm.Lb).apply(
          null,
          arguments
        );
      }),
      Qn = (e._emscripten_bind_PeSpheroid_getFlattening_0 = function () {
        return (Qn = e._emscripten_bind_PeSpheroid_getFlattening_0 =
          e.asm.Mb).apply(null, arguments);
      }),
      er = (e._emscripten_bind_PeSpheroid_getCode_0 = function () {
        return (er = e._emscripten_bind_PeSpheroid_getCode_0 = e.asm.Nb).apply(
          null,
          arguments
        );
      }),
      tr = (e._emscripten_bind_PeSpheroid_getName_1 = function () {
        return (tr = e._emscripten_bind_PeSpheroid_getName_1 = e.asm.Ob).apply(
          null,
          arguments
        );
      }),
      nr = (e._emscripten_bind_PeSpheroid_getType_0 = function () {
        return (nr = e._emscripten_bind_PeSpheroid_getType_0 = e.asm.Pb).apply(
          null,
          arguments
        );
      }),
      rr = (e._emscripten_bind_PeUnit_getUnitFactor_0 = function () {
        return (rr = e._emscripten_bind_PeUnit_getUnitFactor_0 =
          e.asm.Qb).apply(null, arguments);
      }),
      _r = (e._emscripten_bind_PeUnit_getCode_0 = function () {
        return (_r = e._emscripten_bind_PeUnit_getCode_0 = e.asm.Rb).apply(
          null,
          arguments
        );
      }),
      or = (e._emscripten_bind_PeUnit_getName_1 = function () {
        return (or = e._emscripten_bind_PeUnit_getName_1 = e.asm.Sb).apply(
          null,
          arguments
        );
      }),
      pr = (e._emscripten_bind_PeUnit_getType_0 = function () {
        return (pr = e._emscripten_bind_PeUnit_getType_0 = e.asm.Tb).apply(
          null,
          arguments
        );
      }),
      ir = (e._emscripten_bind_PeVersion_version_string_0 = function () {
        return (ir = e._emscripten_bind_PeVersion_version_string_0 =
          e.asm.Ub).apply(null, arguments);
      });
    (e._pe_getPeGTlistExtendedEntrySize = function () {
      return (e._pe_getPeGTlistExtendedEntrySize = e.asm.Vb).apply(
        null,
        arguments
      );
    }),
      (e._pe_getPeGTlistExtendedGTsSize = function () {
        return (e._pe_getPeGTlistExtendedGTsSize = e.asm.Wb).apply(
          null,
          arguments
        );
      }),
      (e._pe_getPeHorizonSize = function () {
        return (e._pe_getPeHorizonSize = e.asm.Xb).apply(null, arguments);
      }),
      (e._pe_geog_to_geog = function () {
        return (e._pe_geog_to_geog = e.asm.Zb).apply(null, arguments);
      }),
      (e._pe_geog_to_proj = function () {
        return (e._pe_geog_to_proj = e.asm._b).apply(null, arguments);
      }),
      (e._pe_geog_to_dd = function () {
        return (e._pe_geog_to_dd = e.asm.$b).apply(null, arguments);
      }),
      (e._pe_dd_to_geog = function () {
        return (e._pe_dd_to_geog = e.asm.ac).apply(null, arguments);
      }),
      (e._pe_geog_to_ddm = function () {
        return (e._pe_geog_to_ddm = e.asm.bc).apply(null, arguments);
      }),
      (e._pe_ddm_to_geog = function () {
        return (e._pe_ddm_to_geog = e.asm.cc).apply(null, arguments);
      }),
      (e._pe_geog_to_dms = function () {
        return (e._pe_geog_to_dms = e.asm.dc).apply(null, arguments);
      }),
      (e._pe_dms_to_geog = function () {
        return (e._pe_dms_to_geog = e.asm.ec).apply(null, arguments);
      }),
      (e._pe_geog_to_mgrs_extended = function () {
        return (e._pe_geog_to_mgrs_extended = e.asm.fc).apply(null, arguments);
      }),
      (e._pe_mgrs_to_geog_extended = function () {
        return (e._pe_mgrs_to_geog_extended = e.asm.gc).apply(null, arguments);
      }),
      (e._pe_geog_to_usng = function () {
        return (e._pe_geog_to_usng = e.asm.hc).apply(null, arguments);
      }),
      (e._pe_usng_to_geog = function () {
        return (e._pe_usng_to_geog = e.asm.ic).apply(null, arguments);
      }),
      (e._pe_geog_to_utm = function () {
        return (e._pe_geog_to_utm = e.asm.jc).apply(null, arguments);
      }),
      (e._pe_utm_to_geog = function () {
        return (e._pe_utm_to_geog = e.asm.kc).apply(null, arguments);
      }),
      (e._pe_object_to_string_ext = function () {
        return (e._pe_object_to_string_ext = e.asm.lc).apply(null, arguments);
      }),
      (e._pe_proj_to_geog_center = function () {
        return (e._pe_proj_to_geog_center = e.asm.mc).apply(null, arguments);
      });
    var se,
      ar = (e._malloc = function () {
        return (ar = e._malloc = e.asm.nc).apply(null, arguments);
      });
    function sr(t) {
      function n() {
        se ||
          ((se = !0),
          (e.calledRun = !0),
          Te ||
            (me(Ae),
            K(e),
            e.onRuntimeInitialized && e.onRuntimeInitialized(),
            (function () {
              if (e.postRun)
                for (
                  typeof e.postRun == "function" && (e.postRun = [e.postRun]);
                  e.postRun.length;

                )
                  lr(e.postRun.shift());
              me(Ge);
            })()));
      }
      q > 0 ||
        ((function () {
          if (e.preRun)
            for (
              typeof e.preRun == "function" && (e.preRun = [e.preRun]);
              e.preRun.length;

            )
              fr(e.preRun.shift());
          me(Re);
        })(),
        q > 0 ||
          (e.setStatus
            ? (e.setStatus("Running..."),
              setTimeout(function () {
                setTimeout(function () {
                  e.setStatus("");
                }, 1),
                  n();
              }, 1))
            : n()));
    }
    if (
      ((e._free = function () {
        return (e._free = e.asm.oc).apply(null, arguments);
      }),
      (e.___start_em_js = 1970140),
      (e.___stop_em_js = 1970238),
      (e.UTF8ToString = Y),
      (e.getValue = function (t, n = "i8") {
        switch ((n.endsWith("*") && (n = "*"), n)) {
          case "i1":
          case "i8":
            return z[t >> 0];
          case "i16":
            return oe[t >> 1];
          case "i32":
          case "i64":
            return M[t >> 2];
          case "float":
            return pe[t >> 2];
          case "double":
            return ie[t >> 3];
          case "*":
            return C[t >> 2];
          default:
            J("invalid type for getValue: " + n);
        }
        return null;
      }),
      (te = function t() {
        se || sr(), se || (te = t);
      }),
      e.preInit)
    )
      for (
        typeof e.preInit == "function" && (e.preInit = [e.preInit]);
        e.preInit.length > 0;

      )
        e.preInit.pop()();
    function y() {}
    function re(t) {
      return (t || y).__cache__;
    }
    function b(t, n) {
      var _ = re(n),
        o = _[t];
      return (
        o || (((o = Object.create((n || y).prototype)).ptr = t), (_[t] = o))
      );
    }
    sr(),
      (y.prototype = Object.create(y.prototype)),
      (y.prototype.constructor = y),
      (y.prototype.__class__ = y),
      (y.__cache__ = {}),
      (e.WrapperObject = y),
      (e.getCache = re),
      (e.wrapPointer = b),
      (e.castObject = function (t, n) {
        return b(t.ptr, n);
      }),
      (e.NULL = b(0)),
      (e.destroy = function (t) {
        if (!t.__destroy__)
          throw "Error: Cannot destroy object. (Did you create it yourself?)";
        t.__destroy__(), delete re(t.__class__)[t.ptr];
      }),
      (e.compare = function (t, n) {
        return t.ptr === n.ptr;
      }),
      (e.getPointer = function (t) {
        return t.ptr;
      }),
      (e.getClass = function (t) {
        return t.__class__;
      });
    var s = {
      buffer: 0,
      size: 0,
      pos: 0,
      temps: [],
      needed: 0,
      prepare: function () {
        if (s.needed) {
          for (var t = 0; t < s.temps.length; t++) e._free(s.temps[t]);
          (s.temps.length = 0),
            e._free(s.buffer),
            (s.buffer = 0),
            (s.size += s.needed),
            (s.needed = 0);
        }
        s.buffer ||
          ((s.size += 128), (s.buffer = e._malloc(s.size)), ye(s.buffer)),
          (s.pos = 0);
      },
      alloc: function (t, n) {
        ye(s.buffer);
        var _,
          o = n.BYTES_PER_ELEMENT,
          p = t.length * o;
        return (
          (p = (p + 7) & -8),
          s.pos + p >= s.size
            ? (ye(p > 0), (s.needed += p), (_ = e._malloc(p)), s.temps.push(_))
            : ((_ = s.buffer + s.pos), (s.pos += p)),
          _
        );
      },
      copy: function (t, n, _) {
        switch (((_ >>>= 0), n.BYTES_PER_ELEMENT)) {
          case 2:
            _ >>>= 1;
            break;
          case 4:
            _ >>>= 2;
            break;
          case 8:
            _ >>>= 3;
        }
        for (var o = 0; o < t.length; o++) n[_ + o] = t[o];
      },
    };
    function le(t) {
      if (typeof t == "string") {
        var n = (function (o, p, i) {
            var c = i > 0 ? i : ve(o) + 1,
              u = new Array(c),
              E = Me(o, u, 0, u.length);
            return p && (u.length = E), u;
          })(t),
          _ = s.alloc(n, z);
        return s.copy(n, z, _), _;
      }
      return t;
    }
    function w(t) {
      if (typeof t == "object") {
        var n = s.alloc(t, z);
        return s.copy(t, z, n), n;
      }
      return t;
    }
    function l() {
      throw "cannot construct a PeObject, no constructor in IDL";
    }
    function R() {
      throw "cannot construct a PeCoordsys, no constructor in IDL";
    }
    function Z() {
      throw "cannot construct a VoidPtr, no constructor in IDL";
    }
    function v() {
      throw "cannot construct a PeDatum, no constructor in IDL";
    }
    function r() {
      throw "cannot construct a PeDefs, no constructor in IDL";
    }
    function A() {
      throw "cannot construct a PeFactory, no constructor in IDL";
    }
    function T(t, n, _, o, p, i) {
      t && typeof t == "object" && (t = t.ptr),
        n && typeof n == "object" && (n = n.ptr),
        _ && typeof _ == "object" && (_ = _.ptr),
        o && typeof o == "object" && (o = o.ptr),
        p && typeof p == "object" && (p = p.ptr),
        i && typeof i == "object" && (i = i.ptr),
        (this.ptr = Mt(t, n, _, o, p, i)),
        (re(T)[this.ptr] = this);
    }
    function d() {
      throw "cannot construct a PeGeogcs, no constructor in IDL";
    }
    function m() {
      throw "cannot construct a PeGeogtran, no constructor in IDL";
    }
    function L() {
      throw "cannot construct a PeGTlistExtended, no constructor in IDL";
    }
    function I() {
      throw "cannot construct a PeGTlistExtendedEntry, no constructor in IDL";
    }
    function F() {
      throw "cannot construct a PeGTlistExtendedGTs, no constructor in IDL";
    }
    function O() {
      throw "cannot construct a PeHorizon, no constructor in IDL";
    }
    function N(t) {
      t && typeof t == "object" && (t = t.ptr),
        (this.ptr = _n(t)),
        (re(N)[this.ptr] = this);
    }
    function g() {
      throw "cannot construct a PeNotationMgrs, no constructor in IDL";
    }
    function f() {
      throw "cannot construct a PeNotationUtm, no constructor in IDL";
    }
    function G() {
      throw "cannot construct a PeParameter, no constructor in IDL";
    }
    function a() {
      throw "cannot construct a PePCSInfo, no constructor in IDL";
    }
    function D() {
      throw "cannot construct a PePrimem, no constructor in IDL";
    }
    function P() {
      throw "cannot construct a PeProjcs, no constructor in IDL";
    }
    function S() {
      throw "cannot construct a PeSpheroid, no constructor in IDL";
    }
    function h() {
      throw "cannot construct a PeUnit, no constructor in IDL";
    }
    function B() {
      throw "cannot construct a PeVersion, no constructor in IDL";
    }
    return (
      (l.prototype = Object.create(y.prototype)),
      (l.prototype.constructor = l),
      (l.prototype.__class__ = l),
      (l.__cache__ = {}),
      (e.PeObject = l),
      (l.prototype.getCode = l.prototype.getCode =
        function () {
          var t = this.ptr;
          return Le(t);
        }),
      (l.prototype.getName = l.prototype.getName =
        function (t) {
          var n = this.ptr;
          return s.prepare(), typeof t == "object" && (t = w(t)), Y(Ue(n, t));
        }),
      (l.prototype.getType = l.prototype.getType =
        function () {
          var t = this.ptr;
          return Ye(t);
        }),
      (R.prototype = Object.create(l.prototype)),
      (R.prototype.constructor = R),
      (R.prototype.__class__ = R),
      (R.__cache__ = {}),
      (e.PeCoordsys = R),
      (R.prototype.getCode = R.prototype.getCode =
        function () {
          var t = this.ptr;
          return Fe(t);
        }),
      (R.prototype.getName = R.prototype.getName =
        function (t) {
          var n = this.ptr;
          return s.prepare(), typeof t == "object" && (t = w(t)), Y(xe(n, t));
        }),
      (R.prototype.getType = R.prototype.getType =
        function () {
          var t = this.ptr;
          return we(t);
        }),
      (Z.prototype = Object.create(y.prototype)),
      (Z.prototype.constructor = Z),
      (Z.prototype.__class__ = Z),
      (Z.__cache__ = {}),
      (e.VoidPtr = Z),
      (Z.prototype.__destroy__ = Z.prototype.__destroy__ =
        function () {
          var t = this.ptr;
          He(t);
        }),
      (v.prototype = Object.create(l.prototype)),
      (v.prototype.constructor = v),
      (v.prototype.__class__ = v),
      (v.__cache__ = {}),
      (e.PeDatum = v),
      (v.prototype.getSpheroid = v.prototype.getSpheroid =
        function () {
          var t = this.ptr;
          return b(Xe(t), S);
        }),
      (v.prototype.getCode = v.prototype.getCode =
        function () {
          var t = this.ptr;
          return ze(t);
        }),
      (v.prototype.getName = v.prototype.getName =
        function (t) {
          var n = this.ptr;
          return s.prepare(), typeof t == "object" && (t = w(t)), Y(Ze(n, t));
        }),
      (v.prototype.getType = v.prototype.getType =
        function () {
          var t = this.ptr;
          return Be(t);
        }),
      (r.prototype = Object.create(y.prototype)),
      (r.prototype.constructor = r),
      (r.prototype.__class__ = r),
      (r.__cache__ = {}),
      (e.PeDefs = r),
      (r.prototype.get_PE_BUFFER_MAX = r.prototype.get_PE_BUFFER_MAX =
        function () {
          var t = this.ptr;
          return We(t);
        }),
      Object.defineProperty(r.prototype, "PE_BUFFER_MAX", {
        get: r.prototype.get_PE_BUFFER_MAX,
      }),
      (r.prototype.get_PE_NAME_MAX = r.prototype.get_PE_NAME_MAX =
        function () {
          var t = this.ptr;
          return Ve(t);
        }),
      Object.defineProperty(r.prototype, "PE_NAME_MAX", {
        get: r.prototype.get_PE_NAME_MAX,
      }),
      (r.prototype.get_PE_MGRS_MAX = r.prototype.get_PE_MGRS_MAX =
        function () {
          var t = this.ptr;
          return qe(t);
        }),
      Object.defineProperty(r.prototype, "PE_MGRS_MAX", {
        get: r.prototype.get_PE_MGRS_MAX,
      }),
      (r.prototype.get_PE_USNG_MAX = r.prototype.get_PE_USNG_MAX =
        function () {
          var t = this.ptr;
          return ke(t);
        }),
      Object.defineProperty(r.prototype, "PE_USNG_MAX", {
        get: r.prototype.get_PE_USNG_MAX,
      }),
      (r.prototype.get_PE_DD_MAX = r.prototype.get_PE_DD_MAX =
        function () {
          var t = this.ptr;
          return Je(t);
        }),
      Object.defineProperty(r.prototype, "PE_DD_MAX", {
        get: r.prototype.get_PE_DD_MAX,
      }),
      (r.prototype.get_PE_DMS_MAX = r.prototype.get_PE_DMS_MAX =
        function () {
          var t = this.ptr;
          return Ke(t);
        }),
      Object.defineProperty(r.prototype, "PE_DMS_MAX", {
        get: r.prototype.get_PE_DMS_MAX,
      }),
      (r.prototype.get_PE_DDM_MAX = r.prototype.get_PE_DDM_MAX =
        function () {
          var t = this.ptr;
          return $e(t);
        }),
      Object.defineProperty(r.prototype, "PE_DDM_MAX", {
        get: r.prototype.get_PE_DDM_MAX,
      }),
      (r.prototype.get_PE_UTM_MAX = r.prototype.get_PE_UTM_MAX =
        function () {
          var t = this.ptr;
          return Qe(t);
        }),
      Object.defineProperty(r.prototype, "PE_UTM_MAX", {
        get: r.prototype.get_PE_UTM_MAX,
      }),
      (r.prototype.get_PE_PARM_MAX = r.prototype.get_PE_PARM_MAX =
        function () {
          var t = this.ptr;
          return et(t);
        }),
      Object.defineProperty(r.prototype, "PE_PARM_MAX", {
        get: r.prototype.get_PE_PARM_MAX,
      }),
      (r.prototype.get_PE_TYPE_NONE = r.prototype.get_PE_TYPE_NONE =
        function () {
          var t = this.ptr;
          return tt(t);
        }),
      Object.defineProperty(r.prototype, "PE_TYPE_NONE", {
        get: r.prototype.get_PE_TYPE_NONE,
      }),
      (r.prototype.get_PE_TYPE_GEOGCS = r.prototype.get_PE_TYPE_GEOGCS =
        function () {
          var t = this.ptr;
          return nt(t);
        }),
      Object.defineProperty(r.prototype, "PE_TYPE_GEOGCS", {
        get: r.prototype.get_PE_TYPE_GEOGCS,
      }),
      (r.prototype.get_PE_TYPE_PROJCS = r.prototype.get_PE_TYPE_PROJCS =
        function () {
          var t = this.ptr;
          return rt(t);
        }),
      Object.defineProperty(r.prototype, "PE_TYPE_PROJCS", {
        get: r.prototype.get_PE_TYPE_PROJCS,
      }),
      (r.prototype.get_PE_TYPE_GEOGTRAN = r.prototype.get_PE_TYPE_GEOGTRAN =
        function () {
          var t = this.ptr;
          return _t(t);
        }),
      Object.defineProperty(r.prototype, "PE_TYPE_GEOGTRAN", {
        get: r.prototype.get_PE_TYPE_GEOGTRAN,
      }),
      (r.prototype.get_PE_TYPE_COORDSYS = r.prototype.get_PE_TYPE_COORDSYS =
        function () {
          var t = this.ptr;
          return ot(t);
        }),
      Object.defineProperty(r.prototype, "PE_TYPE_COORDSYS", {
        get: r.prototype.get_PE_TYPE_COORDSYS,
      }),
      (r.prototype.get_PE_TYPE_UNIT = r.prototype.get_PE_TYPE_UNIT =
        function () {
          var t = this.ptr;
          return pt(t);
        }),
      Object.defineProperty(r.prototype, "PE_TYPE_UNIT", {
        get: r.prototype.get_PE_TYPE_UNIT,
      }),
      (r.prototype.get_PE_TYPE_LINUNIT = r.prototype.get_PE_TYPE_LINUNIT =
        function () {
          var t = this.ptr;
          return it(t);
        }),
      Object.defineProperty(r.prototype, "PE_TYPE_LINUNIT", {
        get: r.prototype.get_PE_TYPE_LINUNIT,
      }),
      (r.prototype.get_PE_STR_OPTS_NONE = r.prototype.get_PE_STR_OPTS_NONE =
        function () {
          var t = this.ptr;
          return at(t);
        }),
      Object.defineProperty(r.prototype, "PE_STR_OPTS_NONE", {
        get: r.prototype.get_PE_STR_OPTS_NONE,
      }),
      (r.prototype.get_PE_STR_AUTH_NONE = r.prototype.get_PE_STR_AUTH_NONE =
        function () {
          var t = this.ptr;
          return st(t);
        }),
      Object.defineProperty(r.prototype, "PE_STR_AUTH_NONE", {
        get: r.prototype.get_PE_STR_AUTH_NONE,
      }),
      (r.prototype.get_PE_STR_AUTH_TOP = r.prototype.get_PE_STR_AUTH_TOP =
        function () {
          var t = this.ptr;
          return ut(t);
        }),
      Object.defineProperty(r.prototype, "PE_STR_AUTH_TOP", {
        get: r.prototype.get_PE_STR_AUTH_TOP,
      }),
      (r.prototype.get_PE_STR_NAME_CANON = r.prototype.get_PE_STR_NAME_CANON =
        function () {
          var t = this.ptr;
          return ct(t);
        }),
      Object.defineProperty(r.prototype, "PE_STR_NAME_CANON", {
        get: r.prototype.get_PE_STR_NAME_CANON,
      }),
      (r.prototype.get_PE_PARM_X0 = r.prototype.get_PE_PARM_X0 =
        function () {
          var t = this.ptr;
          return gt(t);
        }),
      Object.defineProperty(r.prototype, "PE_PARM_X0", {
        get: r.prototype.get_PE_PARM_X0,
      }),
      (r.prototype.get_PE_PARM_ND = r.prototype.get_PE_PARM_ND =
        function () {
          var t = this.ptr;
          return Pt(t);
        }),
      Object.defineProperty(r.prototype, "PE_PARM_ND", {
        get: r.prototype.get_PE_PARM_ND,
      }),
      (r.prototype.get_PE_TRANSFORM_1_TO_2 =
        r.prototype.get_PE_TRANSFORM_1_TO_2 =
          function () {
            var t = this.ptr;
            return yt(t);
          }),
      Object.defineProperty(r.prototype, "PE_TRANSFORM_1_TO_2", {
        get: r.prototype.get_PE_TRANSFORM_1_TO_2,
      }),
      (r.prototype.get_PE_TRANSFORM_2_TO_1 =
        r.prototype.get_PE_TRANSFORM_2_TO_1 =
          function () {
            var t = this.ptr;
            return mt(t);
          }),
      Object.defineProperty(r.prototype, "PE_TRANSFORM_2_TO_1", {
        get: r.prototype.get_PE_TRANSFORM_2_TO_1,
      }),
      (r.prototype.get_PE_TRANSFORM_P_TO_G =
        r.prototype.get_PE_TRANSFORM_P_TO_G =
          function () {
            var t = this.ptr;
            return ft(t);
          }),
      Object.defineProperty(r.prototype, "PE_TRANSFORM_P_TO_G", {
        get: r.prototype.get_PE_TRANSFORM_P_TO_G,
      }),
      (r.prototype.get_PE_TRANSFORM_G_TO_P =
        r.prototype.get_PE_TRANSFORM_G_TO_P =
          function () {
            var t = this.ptr;
            return lt(t);
          }),
      Object.defineProperty(r.prototype, "PE_TRANSFORM_G_TO_P", {
        get: r.prototype.get_PE_TRANSFORM_G_TO_P,
      }),
      (r.prototype.get_PE_HORIZON_RECT = r.prototype.get_PE_HORIZON_RECT =
        function () {
          var t = this.ptr;
          return dt(t);
        }),
      Object.defineProperty(r.prototype, "PE_HORIZON_RECT", {
        get: r.prototype.get_PE_HORIZON_RECT,
      }),
      (r.prototype.get_PE_HORIZON_POLY = r.prototype.get_PE_HORIZON_POLY =
        function () {
          var t = this.ptr;
          return Et(t);
        }),
      Object.defineProperty(r.prototype, "PE_HORIZON_POLY", {
        get: r.prototype.get_PE_HORIZON_POLY,
      }),
      (r.prototype.get_PE_HORIZON_LINE = r.prototype.get_PE_HORIZON_LINE =
        function () {
          var t = this.ptr;
          return bt(t);
        }),
      Object.defineProperty(r.prototype, "PE_HORIZON_LINE", {
        get: r.prototype.get_PE_HORIZON_LINE,
      }),
      (r.prototype.get_PE_HORIZON_DELTA = r.prototype.get_PE_HORIZON_DELTA =
        function () {
          var t = this.ptr;
          return Ot(t);
        }),
      Object.defineProperty(r.prototype, "PE_HORIZON_DELTA", {
        get: r.prototype.get_PE_HORIZON_DELTA,
      }),
      (A.prototype = Object.create(y.prototype)),
      (A.prototype.constructor = A),
      (A.prototype.__class__ = A),
      (A.__cache__ = {}),
      (e.PeFactory = A),
      (A.prototype.initialize = A.prototype.initialize =
        function (t) {
          var n = this.ptr;
          s.prepare(),
            (t = t && typeof t == "object" ? t.ptr : le(t)),
            Tt(n, t);
        }),
      (A.prototype.factoryByType = A.prototype.factoryByType =
        function (t, n) {
          var _ = this.ptr;
          return (
            t && typeof t == "object" && (t = t.ptr),
            n && typeof n == "object" && (n = n.ptr),
            b(St(_, t, n), l)
          );
        }),
      (A.prototype.fromString = A.prototype.fromString =
        function (t, n) {
          var _ = this.ptr;
          return (
            s.prepare(),
            t && typeof t == "object" && (t = t.ptr),
            (n = n && typeof n == "object" ? n.ptr : le(n)),
            b(Nt(_, t, n), l)
          );
        }),
      (A.prototype.getCode = A.prototype.getCode =
        function (t) {
          var n = this.ptr;
          return t && typeof t == "object" && (t = t.ptr), ht(n, t);
        }),
      (T.prototype = Object.create(y.prototype)),
      (T.prototype.constructor = T),
      (T.prototype.__class__ = T),
      (T.__cache__ = {}),
      (e.PeGCSExtent = T),
      (T.prototype.getLLon = T.prototype.getLLon =
        function () {
          var t = this.ptr;
          return vt(t);
        }),
      (T.prototype.getSLat = T.prototype.getSLat =
        function () {
          var t = this.ptr;
          return Dt(t);
        }),
      (T.prototype.getRLon = T.prototype.getRLon =
        function () {
          var t = this.ptr;
          return Rt(t);
        }),
      (T.prototype.getNLat = T.prototype.getNLat =
        function () {
          var t = this.ptr;
          return At(t);
        }),
      (T.prototype.__destroy__ = T.prototype.__destroy__ =
        function () {
          var t = this.ptr;
          Gt(t);
        }),
      (d.prototype = Object.create(R.prototype)),
      (d.prototype.constructor = d),
      (d.prototype.__class__ = d),
      (d.__cache__ = {}),
      (e.PeGeogcs = d),
      (d.prototype.getDatum = d.prototype.getDatum =
        function () {
          var t = this.ptr;
          return b(Ct(t), v);
        }),
      (d.prototype.getPrimem = d.prototype.getPrimem =
        function () {
          var t = this.ptr;
          return b(It(t), D);
        }),
      (d.prototype.getUnit = d.prototype.getUnit =
        function () {
          var t = this.ptr;
          return b(jt(t), h);
        }),
      (d.prototype.getCode = d.prototype.getCode =
        function () {
          var t = this.ptr;
          return Lt(t);
        }),
      (d.prototype.getName = d.prototype.getName =
        function (t) {
          var n = this.ptr;
          return s.prepare(), typeof t == "object" && (t = w(t)), Y(Ut(n, t));
        }),
      (d.prototype.getType = d.prototype.getType =
        function () {
          var t = this.ptr;
          return Yt(t);
        }),
      (m.prototype = Object.create(l.prototype)),
      (m.prototype.constructor = m),
      (m.prototype.__class__ = m),
      (m.__cache__ = {}),
      (e.PeGeogtran = m),
      (m.prototype.isEqual = m.prototype.isEqual =
        function (t) {
          var n = this.ptr;
          return t && typeof t == "object" && (t = t.ptr), !!Ft(n, t);
        }),
      (m.prototype.getGeogcs1 = m.prototype.getGeogcs1 =
        function () {
          var t = this.ptr;
          return b(xt(t), d);
        }),
      (m.prototype.getGeogcs2 = m.prototype.getGeogcs2 =
        function () {
          var t = this.ptr;
          return b(wt(t), d);
        }),
      (m.prototype.getParameters = m.prototype.getParameters =
        function () {
          var t = this.ptr;
          return Ht(t);
        }),
      (m.prototype.loadConstants = m.prototype.loadConstants =
        function () {
          var t = this.ptr;
          return !!Xt(t);
        }),
      (m.prototype.getCode = m.prototype.getCode =
        function () {
          var t = this.ptr;
          return zt(t);
        }),
      (m.prototype.getName = m.prototype.getName =
        function (t) {
          var n = this.ptr;
          return s.prepare(), typeof t == "object" && (t = w(t)), Y(Zt(n, t));
        }),
      (m.prototype.getType = m.prototype.getType =
        function () {
          var t = this.ptr;
          return Bt(t);
        }),
      (L.prototype = Object.create(y.prototype)),
      (L.prototype.constructor = L),
      (L.prototype.__class__ = L),
      (L.__cache__ = {}),
      (e.PeGTlistExtended = L),
      (L.prototype.getGTlist = L.prototype.getGTlist =
        function (t, n, _, o, p, i) {
          var c = this.ptr;
          return (
            t && typeof t == "object" && (t = t.ptr),
            n && typeof n == "object" && (n = n.ptr),
            _ && typeof _ == "object" && (_ = _.ptr),
            o && typeof o == "object" && (o = o.ptr),
            p && typeof p == "object" && (p = p.ptr),
            i && typeof i == "object" && (i = i.ptr),
            b(Wt(c, t, n, _, o, p, i), I)
          );
        }),
      (L.prototype.get_PE_GTLIST_OPTS_COMMON =
        L.prototype.get_PE_GTLIST_OPTS_COMMON =
          function () {
            var t = this.ptr;
            return Vt(t);
          }),
      Object.defineProperty(L.prototype, "PE_GTLIST_OPTS_COMMON", {
        get: L.prototype.get_PE_GTLIST_OPTS_COMMON,
      }),
      (I.prototype = Object.create(y.prototype)),
      (I.prototype.constructor = I),
      (I.prototype.__class__ = I),
      (I.__cache__ = {}),
      (e.PeGTlistExtendedEntry = I),
      (I.prototype.getEntries = I.prototype.getEntries =
        function () {
          var t = this.ptr;
          return b(qt(t), F);
        }),
      (I.prototype.getSteps = I.prototype.getSteps =
        function () {
          var t = this.ptr;
          return kt(t);
        }),
      (I.prototype.Delete = I.prototype.Delete =
        function (t) {
          var n = this.ptr;
          t && typeof t == "object" && (t = t.ptr), Jt(n, t);
        }),
      (F.prototype = Object.create(y.prototype)),
      (F.prototype.constructor = F),
      (F.prototype.__class__ = F),
      (F.__cache__ = {}),
      (e.PeGTlistExtendedGTs = F),
      (F.prototype.getDirection = F.prototype.getDirection =
        function () {
          var t = this.ptr;
          return Kt(t);
        }),
      (F.prototype.getGeogtran = F.prototype.getGeogtran =
        function () {
          var t = this.ptr;
          return b($t(t), m);
        }),
      (O.prototype = Object.create(y.prototype)),
      (O.prototype.constructor = O),
      (O.prototype.__class__ = O),
      (O.__cache__ = {}),
      (e.PeHorizon = O),
      (O.prototype.getNump = O.prototype.getNump =
        function () {
          var t = this.ptr;
          return Qt(t);
        }),
      (O.prototype.getKind = O.prototype.getKind =
        function () {
          var t = this.ptr;
          return en(t);
        }),
      (O.prototype.getInclusive = O.prototype.getInclusive =
        function () {
          var t = this.ptr;
          return tn(t);
        }),
      (O.prototype.getSize = O.prototype.getSize =
        function () {
          var t = this.ptr;
          return nn(t);
        }),
      (O.prototype.getCoord = O.prototype.getCoord =
        function () {
          var t = this.ptr;
          return rn(t);
        }),
      (N.prototype = Object.create(y.prototype)),
      (N.prototype.constructor = N),
      (N.prototype.__class__ = N),
      (N.__cache__ = {}),
      (e.PeInteger = N),
      (N.prototype.get_val = N.prototype.get_val =
        function () {
          var t = this.ptr;
          return on(t);
        }),
      (N.prototype.set_val = N.prototype.set_val =
        function (t) {
          var n = this.ptr;
          t && typeof t == "object" && (t = t.ptr), pn(n, t);
        }),
      Object.defineProperty(N.prototype, "val", {
        get: N.prototype.get_val,
        set: N.prototype.set_val,
      }),
      (N.prototype.__destroy__ = N.prototype.__destroy__ =
        function () {
          var t = this.ptr;
          an(t);
        }),
      (g.prototype = Object.create(y.prototype)),
      (g.prototype.constructor = g),
      (g.prototype.__class__ = g),
      (g.__cache__ = {}),
      (e.PeNotationMgrs = g),
      (g.prototype.get_PE_MGRS_STYLE_NEW = g.prototype.get_PE_MGRS_STYLE_NEW =
        function () {
          var t = this.ptr;
          return sn(t);
        }),
      Object.defineProperty(g.prototype, "PE_MGRS_STYLE_NEW", {
        get: g.prototype.get_PE_MGRS_STYLE_NEW,
      }),
      (g.prototype.get_PE_MGRS_STYLE_OLD = g.prototype.get_PE_MGRS_STYLE_OLD =
        function () {
          var t = this.ptr;
          return un(t);
        }),
      Object.defineProperty(g.prototype, "PE_MGRS_STYLE_OLD", {
        get: g.prototype.get_PE_MGRS_STYLE_OLD,
      }),
      (g.prototype.get_PE_MGRS_STYLE_AUTO = g.prototype.get_PE_MGRS_STYLE_AUTO =
        function () {
          var t = this.ptr;
          return cn(t);
        }),
      Object.defineProperty(g.prototype, "PE_MGRS_STYLE_AUTO", {
        get: g.prototype.get_PE_MGRS_STYLE_AUTO,
      }),
      (g.prototype.get_PE_MGRS_180_ZONE_1_PLUS =
        g.prototype.get_PE_MGRS_180_ZONE_1_PLUS =
          function () {
            var t = this.ptr;
            return gn(t);
          }),
      Object.defineProperty(g.prototype, "PE_MGRS_180_ZONE_1_PLUS", {
        get: g.prototype.get_PE_MGRS_180_ZONE_1_PLUS,
      }),
      (g.prototype.get_PE_MGRS_ADD_SPACES = g.prototype.get_PE_MGRS_ADD_SPACES =
        function () {
          var t = this.ptr;
          return Pn(t);
        }),
      Object.defineProperty(g.prototype, "PE_MGRS_ADD_SPACES", {
        get: g.prototype.get_PE_MGRS_ADD_SPACES,
      }),
      (f.prototype = Object.create(y.prototype)),
      (f.prototype.constructor = f),
      (f.prototype.__class__ = f),
      (f.__cache__ = {}),
      (e.PeNotationUtm = f),
      (f.prototype.get_PE_UTM_OPTS_NONE = f.prototype.get_PE_UTM_OPTS_NONE =
        function () {
          var t = this.ptr;
          return yn(t);
        }),
      Object.defineProperty(f.prototype, "PE_UTM_OPTS_NONE", {
        get: f.prototype.get_PE_UTM_OPTS_NONE,
      }),
      (f.prototype.get_PE_UTM_OPTS_NS = f.prototype.get_PE_UTM_OPTS_NS =
        function () {
          var t = this.ptr;
          return mn(t);
        }),
      Object.defineProperty(f.prototype, "PE_UTM_OPTS_NS", {
        get: f.prototype.get_PE_UTM_OPTS_NS,
      }),
      (f.prototype.get_PE_UTM_OPTS_NS_STRICT =
        f.prototype.get_PE_UTM_OPTS_NS_STRICT =
          function () {
            var t = this.ptr;
            return fn(t);
          }),
      Object.defineProperty(f.prototype, "PE_UTM_OPTS_NS_STRICT", {
        get: f.prototype.get_PE_UTM_OPTS_NS_STRICT,
      }),
      (f.prototype.get_PE_UTM_OPTS_ADD_SPACES =
        f.prototype.get_PE_UTM_OPTS_ADD_SPACES =
          function () {
            var t = this.ptr;
            return ln(t);
          }),
      Object.defineProperty(f.prototype, "PE_UTM_OPTS_ADD_SPACES", {
        get: f.prototype.get_PE_UTM_OPTS_ADD_SPACES,
      }),
      (G.prototype = Object.create(l.prototype)),
      (G.prototype.constructor = G),
      (G.prototype.__class__ = G),
      (G.__cache__ = {}),
      (e.PeParameter = G),
      (G.prototype.getValue = G.prototype.getValue =
        function () {
          var t = this.ptr;
          return dn(t);
        }),
      (G.prototype.getCode = G.prototype.getCode =
        function () {
          var t = this.ptr;
          return En(t);
        }),
      (G.prototype.getName = G.prototype.getName =
        function (t) {
          var n = this.ptr;
          return s.prepare(), typeof t == "object" && (t = w(t)), Y(bn(n, t));
        }),
      (G.prototype.getType = G.prototype.getType =
        function () {
          var t = this.ptr;
          return On(t);
        }),
      (a.prototype = Object.create(y.prototype)),
      (a.prototype.constructor = a),
      (a.prototype.__class__ = a),
      (a.__cache__ = {}),
      (e.PePCSInfo = a),
      (a.prototype.getCentralMeridian = a.prototype.getCentralMeridian =
        function () {
          var t = this.ptr;
          return Tn(t);
        }),
      (a.prototype.getDomainMinx = a.prototype.getDomainMinx =
        function () {
          var t = this.ptr;
          return Sn(t);
        }),
      (a.prototype.getDomainMiny = a.prototype.getDomainMiny =
        function () {
          var t = this.ptr;
          return Nn(t);
        }),
      (a.prototype.getDomainMaxx = a.prototype.getDomainMaxx =
        function () {
          var t = this.ptr;
          return hn(t);
        }),
      (a.prototype.getDomainMaxy = a.prototype.getDomainMaxy =
        function () {
          var t = this.ptr;
          return Mn(t);
        }),
      (a.prototype.getNorthPoleLocation = a.prototype.getNorthPoleLocation =
        function () {
          var t = this.ptr;
          return vn(t);
        }),
      (a.prototype.getNorthPoleGeometry = a.prototype.getNorthPoleGeometry =
        function () {
          var t = this.ptr;
          return Dn(t);
        }),
      (a.prototype.getSouthPoleLocation = a.prototype.getSouthPoleLocation =
        function () {
          var t = this.ptr;
          return Rn(t);
        }),
      (a.prototype.getSouthPoleGeometry = a.prototype.getSouthPoleGeometry =
        function () {
          var t = this.ptr;
          return An(t);
        }),
      (a.prototype.isDensificationNeeded = a.prototype.isDensificationNeeded =
        function () {
          var t = this.ptr;
          return !!Gn(t);
        }),
      (a.prototype.isGcsHorizonMultiOverlap =
        a.prototype.isGcsHorizonMultiOverlap =
          function () {
            var t = this.ptr;
            return !!Cn(t);
          }),
      (a.prototype.isPannableRectangle = a.prototype.isPannableRectangle =
        function () {
          var t = this.ptr;
          return !!In(t);
        }),
      (a.prototype.generate = a.prototype.generate =
        function (t, n) {
          var _ = this.ptr;
          return (
            t && typeof t == "object" && (t = t.ptr),
            n && typeof n == "object" && (n = n.ptr),
            b(jn(_, t, n), a)
          );
        }),
      (a.prototype.get_PE_PCSINFO_OPTION_NONE =
        a.prototype.get_PE_PCSINFO_OPTION_NONE =
          function () {
            var t = this.ptr;
            return Ln(t);
          }),
      Object.defineProperty(a.prototype, "PE_PCSINFO_OPTION_NONE", {
        get: a.prototype.get_PE_PCSINFO_OPTION_NONE,
      }),
      (a.prototype.get_PE_PCSINFO_OPTION_DOMAIN =
        a.prototype.get_PE_PCSINFO_OPTION_DOMAIN =
          function () {
            var t = this.ptr;
            return Un(t);
          }),
      Object.defineProperty(a.prototype, "PE_PCSINFO_OPTION_DOMAIN", {
        get: a.prototype.get_PE_PCSINFO_OPTION_DOMAIN,
      }),
      (a.prototype.get_PE_POLE_OUTSIDE_BOUNDARY =
        a.prototype.get_PE_POLE_OUTSIDE_BOUNDARY =
          function () {
            var t = this.ptr;
            return Yn(t);
          }),
      Object.defineProperty(a.prototype, "PE_POLE_OUTSIDE_BOUNDARY", {
        get: a.prototype.get_PE_POLE_OUTSIDE_BOUNDARY,
      }),
      (a.prototype.get_PE_POLE_POINT = a.prototype.get_PE_POLE_POINT =
        function () {
          var t = this.ptr;
          return Fn(t);
        }),
      Object.defineProperty(a.prototype, "PE_POLE_POINT", {
        get: a.prototype.get_PE_POLE_POINT,
      }),
      (D.prototype = Object.create(l.prototype)),
      (D.prototype.constructor = D),
      (D.prototype.__class__ = D),
      (D.__cache__ = {}),
      (e.PePrimem = D),
      (D.prototype.getLongitude = D.prototype.getLongitude =
        function () {
          var t = this.ptr;
          return xn(t);
        }),
      (D.prototype.getCode = D.prototype.getCode =
        function () {
          var t = this.ptr;
          return wn(t);
        }),
      (D.prototype.getName = D.prototype.getName =
        function (t) {
          var n = this.ptr;
          return s.prepare(), typeof t == "object" && (t = w(t)), Y(Hn(n, t));
        }),
      (D.prototype.getType = D.prototype.getType =
        function () {
          var t = this.ptr;
          return Xn(t);
        }),
      (P.prototype = Object.create(R.prototype)),
      (P.prototype.constructor = P),
      (P.prototype.__class__ = P),
      (P.__cache__ = {}),
      (e.PeProjcs = P),
      (P.prototype.getGeogcs = P.prototype.getGeogcs =
        function () {
          var t = this.ptr;
          return b(zn(t), d);
        }),
      (P.prototype.getParameters = P.prototype.getParameters =
        function () {
          var t = this.ptr;
          return Zn(t);
        }),
      (P.prototype.getUnit = P.prototype.getUnit =
        function () {
          var t = this.ptr;
          return b(Bn(t), h);
        }),
      (P.prototype.loadConstants = P.prototype.loadConstants =
        function () {
          var t = this.ptr;
          return !!Wn(t);
        }),
      (P.prototype.horizonGcsGenerate = P.prototype.horizonGcsGenerate =
        function () {
          var t = this.ptr;
          return b(Vn(t), O);
        }),
      (P.prototype.horizonPcsGenerate = P.prototype.horizonPcsGenerate =
        function () {
          var t = this.ptr;
          return b(qn(t), O);
        }),
      (P.prototype.getCode = P.prototype.getCode =
        function () {
          var t = this.ptr;
          return kn(t);
        }),
      (P.prototype.getName = P.prototype.getName =
        function (t) {
          var n = this.ptr;
          return s.prepare(), typeof t == "object" && (t = w(t)), Y(Jn(n, t));
        }),
      (P.prototype.getType = P.prototype.getType =
        function () {
          var t = this.ptr;
          return Kn(t);
        }),
      (S.prototype = Object.create(l.prototype)),
      (S.prototype.constructor = S),
      (S.prototype.__class__ = S),
      (S.__cache__ = {}),
      (e.PeSpheroid = S),
      (S.prototype.getAxis = S.prototype.getAxis =
        function () {
          var t = this.ptr;
          return $n(t);
        }),
      (S.prototype.getFlattening = S.prototype.getFlattening =
        function () {
          var t = this.ptr;
          return Qn(t);
        }),
      (S.prototype.getCode = S.prototype.getCode =
        function () {
          var t = this.ptr;
          return er(t);
        }),
      (S.prototype.getName = S.prototype.getName =
        function (t) {
          var n = this.ptr;
          return s.prepare(), typeof t == "object" && (t = w(t)), Y(tr(n, t));
        }),
      (S.prototype.getType = S.prototype.getType =
        function () {
          var t = this.ptr;
          return nr(t);
        }),
      (h.prototype = Object.create(l.prototype)),
      (h.prototype.constructor = h),
      (h.prototype.__class__ = h),
      (h.__cache__ = {}),
      (e.PeUnit = h),
      (h.prototype.getUnitFactor = h.prototype.getUnitFactor =
        function () {
          var t = this.ptr;
          return rr(t);
        }),
      (h.prototype.getCode = h.prototype.getCode =
        function () {
          var t = this.ptr;
          return _r(t);
        }),
      (h.prototype.getName = h.prototype.getName =
        function (t) {
          var n = this.ptr;
          return s.prepare(), typeof t == "object" && (t = w(t)), Y(or(n, t));
        }),
      (h.prototype.getType = h.prototype.getType =
        function () {
          var t = this.ptr;
          return pr(t);
        }),
      (B.prototype = Object.create(y.prototype)),
      (B.prototype.constructor = B),
      (B.prototype.__class__ = B),
      (B.__cache__ = {}),
      (e.PeVersion = B),
      (B.prototype.version_string = B.prototype.version_string =
        function () {
          var t = this.ptr;
          return Y(ir(t));
        }),
      (e.ensureCache = s),
      (e.ensureString = le),
      (e.ensureInt8 = w),
      (e.ensureInt16 = function (t) {
        if (typeof t == "object") {
          var n = s.alloc(t, oe);
          return s.copy(t, oe, n), n;
        }
        return t;
      }),
      (e.ensureInt32 = function (t) {
        if (typeof t == "object") {
          var n = s.alloc(t, M);
          return s.copy(t, M, n), n;
        }
        return t;
      }),
      (e.ensureFloat32 = function (t) {
        if (typeof t == "object") {
          var n = s.alloc(t, pe);
          return s.copy(t, pe, n), n;
        }
        return t;
      }),
      (e.ensureFloat64 = function (t) {
        if (typeof t == "object") {
          var n = s.alloc(t, ie);
          return s.copy(t, ie, n), n;
        }
        return t;
      }),
      e.ready
    );
  }),
  (Pr.exports = yr);
const Ar = (function (e, K) {
  for (var W = 0; W < K.length; W++) {
    const X = K[W];
    if (typeof X != "string" && !Array.isArray(X)) {
      for (const H in X)
        if (H !== "default" && !(H in e)) {
          const V = Object.getOwnPropertyDescriptor(X, H);
          V &&
            Object.defineProperty(
              e,
              H,
              V.get ? V : { enumerable: !0, get: () => X[H] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
})({ __proto__: null, default: ue }, [ue]);
export { Ar as p };
