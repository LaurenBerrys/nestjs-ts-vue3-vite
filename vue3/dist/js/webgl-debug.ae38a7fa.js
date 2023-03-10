function K(c) {
  return (
    window.WebGL2RenderingContext && c instanceof window.WebGL2RenderingContext
  );
}
let M = class {
    constructor(c, F, r, o, I, U, L, C, y) {
      (this.createQuery = c),
        (this.deleteQuery = F),
        (this.resultAvailable = r),
        (this.getResult = o),
        (this.disjoint = I),
        (this.beginTimeElapsed = U),
        (this.endTimeElapsed = L),
        (this.createTimestamp = C),
        (this.timestampBits = y);
    }
  },
  x = !1;
function j(c, F) {
  if (F.disjointTimerQuery) return null;
  let r = c.getExtension("EXT_disjoint_timer_query_webgl2");
  return r && K(c)
    ? new M(
        () => c.createQuery(),
        (o) => {
          c.deleteQuery(o), (x = !1);
        },
        (o) => c.getQueryParameter(o, c.QUERY_RESULT_AVAILABLE),
        (o) => c.getQueryParameter(o, c.QUERY_RESULT),
        () => c.getParameter(r.GPU_DISJOINT_EXT),
        (o) => {
          x || ((x = !0), c.beginQuery(r.TIME_ELAPSED_EXT, o));
        },
        () => {
          c.endQuery(r.TIME_ELAPSED_EXT), (x = !1);
        },
        (o) => r.queryCounterEXT(o, r.TIMESTAMP_EXT),
        () => c.getQuery(r.TIMESTAMP_EXT, r.QUERY_COUNTER_BITS_EXT)
      )
    : ((r = c.getExtension("EXT_disjoint_timer_query")),
      r
        ? new M(
            () => r.createQueryEXT(),
            (o) => {
              r.deleteQueryEXT(o), (x = !1);
            },
            (o) => r.getQueryObjectEXT(o, r.QUERY_RESULT_AVAILABLE_EXT),
            (o) => r.getQueryObjectEXT(o, r.QUERY_RESULT_EXT),
            () => c.getParameter(r.GPU_DISJOINT_EXT),
            (o) => {
              x || ((x = !0), r.beginQueryEXT(r.TIME_ELAPSED_EXT, o));
            },
            () => {
              r.endQueryEXT(r.TIME_ELAPSED_EXT), (x = !1);
            },
            (o) => r.queryCounterEXT(o, r.TIMESTAMP_EXT),
            () => r.getQueryEXT(r.TIMESTAMP_EXT, r.QUERY_COUNTER_BITS_EXT)
          )
        : null);
}
var G,
  Q,
  W = {},
  V = {
    get exports() {
      return W;
    },
    set exports(c) {
      W = c;
    },
  };
(G = V),
  (Q = (function () {
    var c = function (e) {
        window.console && window.console.error
          ? window.console.error(e)
          : (function (t) {
              window.console && window.console.log && window.console.log(t);
            })(e);
      },
      F = {
        enable: { 1: { 0: !0 } },
        disable: { 1: { 0: !0 } },
        getParameter: { 1: { 0: !0 } },
        drawArrays: { 3: { 0: !0 } },
        drawElements: { 4: { 0: !0, 2: !0 } },
        createShader: { 1: { 0: !0 } },
        getShaderParameter: { 2: { 1: !0 } },
        getProgramParameter: { 2: { 1: !0 } },
        getShaderPrecisionFormat: { 2: { 0: !0, 1: !0 } },
        getVertexAttrib: { 2: { 1: !0 } },
        vertexAttribPointer: { 6: { 2: !0 } },
        bindTexture: { 2: { 0: !0 } },
        activeTexture: { 1: { 0: !0 } },
        getTexParameter: { 2: { 0: !0, 1: !0 } },
        texParameterf: { 3: { 0: !0, 1: !0 } },
        texParameteri: { 3: { 0: !0, 1: !0, 2: !0 } },
        texImage2D: {
          9: { 0: !0, 2: !0, 6: !0, 7: !0 },
          6: { 0: !0, 2: !0, 3: !0, 4: !0 },
        },
        texSubImage2D: {
          9: { 0: !0, 6: !0, 7: !0 },
          7: { 0: !0, 4: !0, 5: !0 },
        },
        copyTexImage2D: { 8: { 0: !0, 2: !0 } },
        copyTexSubImage2D: { 8: { 0: !0 } },
        generateMipmap: { 1: { 0: !0 } },
        compressedTexImage2D: { 7: { 0: !0, 2: !0 } },
        compressedTexSubImage2D: { 8: { 0: !0, 6: !0 } },
        bindBuffer: { 2: { 0: !0 } },
        bufferData: { 3: { 0: !0, 2: !0 } },
        bufferSubData: { 3: { 0: !0 } },
        getBufferParameter: { 2: { 0: !0, 1: !0 } },
        pixelStorei: { 2: { 0: !0, 1: !0 } },
        readPixels: { 7: { 4: !0, 5: !0 } },
        bindRenderbuffer: { 2: { 0: !0 } },
        bindFramebuffer: { 2: { 0: !0 } },
        checkFramebufferStatus: { 1: { 0: !0 } },
        framebufferRenderbuffer: { 4: { 0: !0, 1: !0, 2: !0 } },
        framebufferTexture2D: { 5: { 0: !0, 1: !0, 2: !0 } },
        getFramebufferAttachmentParameter: { 3: { 0: !0, 1: !0, 2: !0 } },
        getRenderbufferParameter: { 2: { 0: !0, 1: !0 } },
        renderbufferStorage: { 4: { 0: !0, 1: !0 } },
        clear: {
          1: {
            0: {
              enumBitwiseOr: [
                "COLOR_BUFFER_BIT",
                "DEPTH_BUFFER_BIT",
                "STENCIL_BUFFER_BIT",
              ],
            },
          },
        },
        depthFunc: { 1: { 0: !0 } },
        blendFunc: { 2: { 0: !0, 1: !0 } },
        blendFuncSeparate: { 4: { 0: !0, 1: !0, 2: !0, 3: !0 } },
        blendEquation: { 1: { 0: !0 } },
        blendEquationSeparate: { 2: { 0: !0, 1: !0 } },
        stencilFunc: { 3: { 0: !0 } },
        stencilFuncSeparate: { 4: { 0: !0, 1: !0 } },
        stencilMaskSeparate: { 2: { 0: !0 } },
        stencilOp: { 3: { 0: !0, 1: !0, 2: !0 } },
        stencilOpSeparate: { 4: { 0: !0, 1: !0, 2: !0, 3: !0 } },
        cullFace: { 1: { 0: !0 } },
        frontFace: { 1: { 0: !0 } },
        drawArraysInstancedANGLE: { 4: { 0: !0 } },
        drawElementsInstancedANGLE: { 5: { 0: !0, 2: !0 } },
        blendEquationEXT: { 1: { 0: !0 } },
      },
      r = null,
      o = null;
    function I(e) {
      if (r == null)
        for (var t in ((r = {}), (o = {}), e))
          typeof e[t] == "number" && ((r[e[t]] = t), (o[t] = e[t]));
    }
    function U() {
      if (r == null) throw "WebGLDebugUtils.init(ctx) not called";
    }
    function L(e) {
      U();
      var t = r[e];
      return t !== void 0
        ? "gl." + t
        : "/*UNKNOWN WebGL ENUM*/ 0x" + e.toString(16);
    }
    function C(e, t, s, a) {
      var f;
      if ((f = F[e]) !== void 0 && (f = f[t]) !== void 0 && f[s]) {
        if (typeof f[s] == "object" && f[s].enumBitwiseOr !== void 0) {
          for (
            var u = f[s].enumBitwiseOr, A = 0, l = [], d = 0;
            d < u.length;
            ++d
          ) {
            var S = o[u[d]];
            a & S && ((A |= S), l.push(L(S)));
          }
          return A === a ? l.join(" | ") : L(a);
        }
        return L(a);
      }
      return a === null ? "null" : a === void 0 ? "undefined" : a.toString();
    }
    function y(e, t, s) {
      e.__defineGetter__(s, function () {
        return t[s];
      }),
        e.__defineSetter__(s, function (a) {
          t[s] = a;
        });
    }
    function N(e) {
      var t = e.getParameter(e.MAX_VERTEX_ATTRIBS),
        s = e.createBuffer();
      e.bindBuffer(e.ARRAY_BUFFER, s);
      for (var a = 0; a < t; ++a)
        e.disableVertexAttribArray(a),
          e.vertexAttribPointer(a, 4, e.FLOAT, !1, 0, 0),
          e.vertexAttrib1f(a, 0);
      e.deleteBuffer(s);
      var f = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);
      for (a = 0; a < f; ++a)
        e.activeTexture(e.TEXTURE0 + a),
          e.bindTexture(e.TEXTURE_CUBE_MAP, null),
          e.bindTexture(e.TEXTURE_2D, null);
      for (
        e.activeTexture(e.TEXTURE0),
          e.useProgram(null),
          e.bindBuffer(e.ARRAY_BUFFER, null),
          e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null),
          e.bindFramebuffer(e.FRAMEBUFFER, null),
          e.bindRenderbuffer(e.RENDERBUFFER, null),
          e.disable(e.BLEND),
          e.disable(e.CULL_FACE),
          e.disable(e.DEPTH_TEST),
          e.disable(e.DITHER),
          e.disable(e.SCISSOR_TEST),
          e.blendColor(0, 0, 0, 0),
          e.blendEquation(e.FUNC_ADD),
          e.blendFunc(e.ONE, e.ZERO),
          e.clearColor(0, 0, 0, 0),
          e.clearDepth(1),
          e.clearStencil(-1),
          e.colorMask(!0, !0, !0, !0),
          e.cullFace(e.BACK),
          e.depthFunc(e.LESS),
          e.depthMask(!0),
          e.depthRange(0, 1),
          e.frontFace(e.CCW),
          e.hint(e.GENERATE_MIPMAP_HINT, e.DONT_CARE),
          e.lineWidth(1),
          e.pixelStorei(e.PACK_ALIGNMENT, 4),
          e.pixelStorei(e.UNPACK_ALIGNMENT, 4),
          e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1),
          e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
          e.UNPACK_COLORSPACE_CONVERSION_WEBGL &&
            e.pixelStorei(
              e.UNPACK_COLORSPACE_CONVERSION_WEBGL,
              e.BROWSER_DEFAULT_WEBGL
            ),
          e.polygonOffset(0, 0),
          e.sampleCoverage(1, !1),
          e.scissor(0, 0, e.canvas.width, e.canvas.height),
          e.stencilFunc(e.ALWAYS, 0, 4294967295),
          e.stencilMask(4294967295),
          e.stencilOp(e.KEEP, e.KEEP, e.KEEP),
          e.viewport(0, 0, e.canvas.width, e.canvas.height),
          e.clear(
            e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT | e.STENCIL_BUFFER_BIT
          );
        e.getError();

      );
    }
    return {
      init: I,
      mightBeEnum: function (e) {
        return U(), r[e] !== void 0;
      },
      glEnumToString: L,
      glFunctionArgToString: C,
      glFunctionArgsToString: function (e, t) {
        for (var s = "", a = t.length, f = 0; f < a; ++f)
          s += (f == 0 ? "" : ", ") + C(e, a, f, t[f]);
        return s;
      },
      makeDebugContext: function e(t, s, a, f) {
        (f = f || t),
          I(t),
          (s =
            s ||
            function (b, R, p) {
              for (var _ = "", B = p.length, h = 0; h < B; ++h)
                _ += (h == 0 ? "" : ", ") + C(R, B, h, p[h]);
              c("WebGL error " + L(b) + " in " + R + "(" + _ + ")");
            });
        var u = {};
        function A(b, R) {
          return function () {
            a && a(R, arguments);
            var p = b[R].apply(b, arguments),
              _ = f.getError();
            return _ != 0 && ((u[_] = !0), s(_, R, arguments)), p;
          };
        }
        var l = {};
        for (var d in t)
          if (typeof t[d] == "function")
            if (d != "getExtension") l[d] = A(t, d);
            else {
              var S = A(t, d);
              l[d] = function () {
                return e(S.apply(t, arguments), s, a, f);
              };
            }
          else y(l, t, d);
        return (
          (l.getError = function () {
            for (var b in u)
              if (u.hasOwnProperty(b) && u[b]) return (u[b] = !1), b;
            return t.NO_ERROR;
          }),
          l
        );
      },
      makeLostContextSimulatingCanvas: function (e) {
        var t,
          s,
          a = [],
          f = [],
          u = {},
          A = 1,
          l = !1,
          d = [],
          S = 0,
          b = 0,
          R = !1,
          p = 0,
          _ = {};
        function B(n) {
          return typeof n == "function"
            ? n
            : function (E) {
                n.handleEvent(E);
              };
        }
        e.getContext =
          ((s = e.getContext),
          function () {
            var n = s.apply(e, arguments);
            if (n instanceof WebGLRenderingContext) {
              if (n != t) {
                if (t) throw "got different context";
                u = (function (E) {
                  for (var g in E)
                    typeof E[g] == "function" ? (u[g] = Y(E, g)) : y(u, E, g);
                  u.getError = function () {
                    if ((P(), !l)) for (; (T = t.getError()); ) _[T] = !0;
                    for (var T in _) if (_[T]) return delete _[T], T;
                    return u.NO_ERROR;
                  };
                  for (
                    var m = [
                        "createBuffer",
                        "createFramebuffer",
                        "createProgram",
                        "createRenderbuffer",
                        "createShader",
                        "createTexture",
                      ],
                      i = 0;
                    i < m.length;
                    ++i
                  ) {
                    var v = m[i];
                    u[v] = (function (T) {
                      return function () {
                        if ((P(), l)) return null;
                        var O = T.apply(E, arguments);
                        return (
                          (O.__webglDebugContextLostId__ = A), d.push(O), O
                        );
                      };
                    })(E[v]);
                  }
                  var X = [
                    "getActiveAttrib",
                    "getActiveUniform",
                    "getBufferParameter",
                    "getContextAttributes",
                    "getAttachedShaders",
                    "getFramebufferAttachmentParameter",
                    "getParameter",
                    "getProgramParameter",
                    "getProgramInfoLog",
                    "getRenderbufferParameter",
                    "getShaderParameter",
                    "getShaderInfoLog",
                    "getShaderSource",
                    "getTexParameter",
                    "getUniform",
                    "getUniformLocation",
                    "getVertexAttrib",
                  ];
                  for (i = 0; i < X.length; ++i)
                    (v = X[i]),
                      (u[v] = (function (T) {
                        return function () {
                          return P(), l ? null : T.apply(E, arguments);
                        };
                      })(u[v]));
                  var D = [
                    "isBuffer",
                    "isEnabled",
                    "isFramebuffer",
                    "isProgram",
                    "isRenderbuffer",
                    "isShader",
                    "isTexture",
                  ];
                  for (i = 0; i < D.length; ++i)
                    (v = D[i]),
                      (u[v] = (function (T) {
                        return function () {
                          return P(), !l && T.apply(E, arguments);
                        };
                      })(u[v]));
                  return (
                    (u.checkFramebufferStatus = (function (T) {
                      return function () {
                        return (
                          P(),
                          l ? u.FRAMEBUFFER_UNSUPPORTED : T.apply(E, arguments)
                        );
                      };
                    })(u.checkFramebufferStatus)),
                    (u.getAttribLocation = (function (T) {
                      return function () {
                        return P(), l ? -1 : T.apply(E, arguments);
                      };
                    })(u.getAttribLocation)),
                    (u.getVertexAttribOffset = (function (T) {
                      return function () {
                        return P(), l ? 0 : T.apply(E, arguments);
                      };
                    })(u.getVertexAttribOffset)),
                    (u.isContextLost = function () {
                      return l;
                    }),
                    u
                  );
                })((t = n));
              }
              return u;
            }
            return n;
          });
        var h = function (n) {
            a.push(B(n));
          },
          k = function (n) {
            f.push(B(n));
          };
        function P() {
          ++b, l || (S == b && e.loseContext());
        }
        function Y(n, E) {
          var g = n[E];
          return function () {
            if ((P(), !l)) return g.apply(n, arguments);
          };
        }
        function w(n) {
          return {
            statusMessage: n,
            preventDefault: function () {
              R = !0;
            },
          };
        }
        return (
          (function (n) {
            var E = n.addEventListener;
            n.addEventListener = function (g, m, i) {
              switch (g) {
                case "webglcontextlost":
                  h(m);
                  break;
                case "webglcontextrestored":
                  k(m);
                  break;
                default:
                  E.apply(n, arguments);
              }
            };
          })(e),
          (e.loseContext = function () {
            if (!l) {
              for (l = !0, S = 0, ++A; t.getError(); );
              (function () {
                for (var g = Object.keys(_), m = 0; m < g.length; ++m)
                  delete _[g];
              })(),
                (_[t.CONTEXT_LOST_WEBGL] = !0);
              var n = w("context lost"),
                E = a.slice();
              setTimeout(function () {
                for (var g = 0; g < E.length; ++g) E[g](n);
                p >= 0 &&
                  setTimeout(function () {
                    e.restoreContext();
                  }, p);
              }, 0);
            }
          }),
          (e.restoreContext = function () {
            l &&
              f.length &&
              setTimeout(function () {
                if (!R)
                  throw "can not restore. webglcontestlost listener did not call event.preventDefault";
                (function () {
                  for (var m = 0; m < d.length; ++m) {
                    var i = d[m];
                    i instanceof WebGLBuffer
                      ? t.deleteBuffer(i)
                      : i instanceof WebGLFramebuffer
                      ? t.deleteFramebuffer(i)
                      : i instanceof WebGLProgram
                      ? t.deleteProgram(i)
                      : i instanceof WebGLRenderbuffer
                      ? t.deleteRenderbuffer(i)
                      : i instanceof WebGLShader
                      ? t.deleteShader(i)
                      : i instanceof WebGLTexture && t.deleteTexture(i);
                  }
                })(),
                  N(t),
                  (l = !1),
                  (b = 0),
                  (R = !1);
                for (
                  var n = f.slice(), E = w("context restored"), g = 0;
                  g < n.length;
                  ++g
                )
                  n[g](E);
              }, 0);
          }),
          (e.loseContextInNCalls = function (n) {
            if (l) throw "You can not ask a lost contet to be lost";
            S = b + n;
          }),
          (e.getNumCalls = function () {
            return b;
          }),
          (e.setRestoreTimeout = function (n) {
            p = n;
          }),
          e
        );
      },
      resetToInitialState: N,
    };
  })()) !== void 0 && (G.exports = Q);
export { j as T, K as n, W as r };
