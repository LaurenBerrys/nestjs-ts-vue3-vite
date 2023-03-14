import { o as we } from "./_commonjsHelpers.2f3e7994.js";
import { d as R, n as be } from "./WGLContainer.e7ddd41d.js";
import {
  aT as zt,
  w as Bt,
  aU as xe,
  U as Vt,
  aV as Me,
  aW as Se,
  aX as ze,
  s as q,
  n as B,
  t as rt,
  Q as ue,
  aY as Te,
  f as Ie,
  j as Nt,
  aZ as Pe,
  a_ as at,
  r as Z,
  u as J,
  a$ as De,
  h as Ot,
  b0 as Ce,
  I as L,
  b1 as O,
  b2 as Re,
  b3 as Fe,
  b4 as Ae,
  z as Ee,
  ae as M,
  af as T,
  ag as K,
  ap as tt,
  b5 as Gt,
  b6 as ke,
  b as le,
  c as Be,
  b7 as Le,
  b8 as ce,
  b9 as bt,
  R as xt,
  ba as de,
  bb as ft,
  bc as Ue,
  aM as Ve,
  bd as Ne,
  be as Oe,
  bf as Ge,
  bg as ot,
  bh as qe,
  bi as Ct,
  bj as $e,
  bk as Ze,
  E as ht,
  bl as qt,
} from "./index.8fd7165c.js";
import {
  p as je,
  i as ut,
  r as $t,
  t as Zt,
  u as He,
  a as Ye,
  o as We,
  e as Xe,
  b as Qe,
  c as Je,
} from "./ExpandedCIM.e22c8b13.js";
import { r as Ke, e as ti } from "./rasterizingUtils.3a0dd398.js";
import {
  e as P,
  z as jt,
  y as Ht,
  j as ei,
  U as ii,
  V as si,
} from "./definitions.ce677f69.js";
import {
  u as ni,
  _ as lt,
  p as ri,
  l as ai,
  n as Yt,
  r as oi,
  I as hi,
  f as ct,
  s as Wt,
  d as Xt,
  i as ui,
  o as li,
  m as ci,
  T as di,
} from "./color.4c5303e9.js";
import { t as C } from "./Rect.6884a4ea.js";
import {
  P as yt,
  G as Rt,
  L as Ft,
  R as H,
  M as mi,
  D as pi,
} from "./enums.64ab819c.js";
import { E as At } from "./Texture.fb0c670a.js";
import { o as _i } from "./floatRGBA.6f2fa7cd.js";
import { e as Qt } from "./GeometryUtils.82ab0a13.js";
import { c as gi } from "./imageutils.463df5ec.js";
import { d as V } from "./enums.13513a14.js";
import { e as fi } from "./Matcher.fe3c9df5.js";
import { s as yi } from "./CircularArray.6cd6ba2b.js";
import { T as vi } from "./webgl-debug.ae38a7fa.js";
import { t as wi } from "./ComputedAttributeStorage.396dbaf7.js";
import { a as bi } from "./ProgramTemplate.4bbf0f5e.js";
var Jt,
  Et = {};
(Jt = function () {
  return (function (i) {
    var e = {};
    function t(o) {
      if (e[o]) return e[o].exports;
      var n = (e[o] = { exports: {}, id: o, loaded: !1 });
      return i[o].call(n.exports, n, n.exports, t), (n.loaded = !0), n.exports;
    }
    return (t.m = i), (t.c = e), (t.p = ""), t(0);
  })([
    function (i, e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isNotPNG = function (m) {
          return m === s;
        }),
        (e.isNotAPNG = function (m) {
          return m === r;
        }),
        (e.default = function (m) {
          var _ = new Uint8Array(m);
          if (
            Array.prototype.some.call(a, function (I, x) {
              return I !== _[x];
            })
          )
            return s;
          var g = !1;
          if (
            (h(_, function (I) {
              return !(g = I === "acTL");
            }),
            !g)
          )
            return r;
          var p = [],
            y = [],
            v = null,
            f = null,
            w = 0,
            b = new n.APNG();
          if (
            (h(_, function (I, x, S, et) {
              var A = new DataView(x.buffer);
              switch (I) {
                case "IHDR":
                  (v = x.subarray(S + 8, S + 8 + et)),
                    (b.width = A.getUint32(S + 8)),
                    (b.height = A.getUint32(S + 12));
                  break;
                case "acTL":
                  b.numPlays = A.getUint32(S + 8 + 4);
                  break;
                case "fcTL":
                  f && (b.frames.push(f), w++),
                    ((f = new n.Frame()).width = A.getUint32(S + 8 + 4)),
                    (f.height = A.getUint32(S + 8 + 8)),
                    (f.left = A.getUint32(S + 8 + 12)),
                    (f.top = A.getUint32(S + 8 + 16));
                  var ve = A.getUint16(S + 8 + 20),
                    St = A.getUint16(S + 8 + 22);
                  St === 0 && (St = 100),
                    (f.delay = (1e3 * ve) / St),
                    f.delay <= 10 && (f.delay = 100),
                    (b.playTime += f.delay),
                    (f.disposeOp = A.getUint8(S + 8 + 24)),
                    (f.blendOp = A.getUint8(S + 8 + 25)),
                    (f.dataParts = []),
                    w === 0 && f.disposeOp === 2 && (f.disposeOp = 1);
                  break;
                case "fdAT":
                  f && f.dataParts.push(x.subarray(S + 8 + 4, S + 8 + et));
                  break;
                case "IDAT":
                  f && f.dataParts.push(x.subarray(S + 8, S + 8 + et));
                  break;
                case "IEND":
                  y.push(u(x, S, 12 + et));
                  break;
                default:
                  p.push(u(x, S, 12 + et));
              }
            }),
            f && b.frames.push(f),
            b.frames.length == 0)
          )
            return r;
          var F = new Blob(p),
            D = new Blob(y);
          return (
            b.frames.forEach(function (I) {
              var x = [];
              x.push(a),
                v.set(d(I.width), 0),
                v.set(d(I.height), 4),
                x.push(c("IHDR", v)),
                x.push(F),
                I.dataParts.forEach(function (S) {
                  return x.push(c("IDAT", S));
                }),
                x.push(D),
                (I.imageData = new Blob(x, { type: "image/png" })),
                delete I.dataParts,
                (x = null);
            }),
            b
          );
        });
      var o = (function (m) {
          return m && m.__esModule ? m : { default: m };
        })(t(1)),
        n = t(2),
        s = new Error("Not a PNG"),
        r = new Error("Not an animated PNG"),
        a = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
      function h(m, _) {
        var g = new DataView(m.buffer),
          p = 8,
          y = void 0,
          v = void 0,
          f = void 0;
        do
          (v = g.getUint32(p)),
            (f = _((y = l(m, p + 4, 4)), m, p, v)),
            (p += 12 + v);
        while (f !== !1 && y != "IEND" && p < m.length);
      }
      function l(m, _, g) {
        var p = Array.prototype.slice.call(m.subarray(_, _ + g));
        return String.fromCharCode.apply(String, p);
      }
      function u(m, _, g) {
        var p = new Uint8Array(g);
        return p.set(m.subarray(_, _ + g)), p;
      }
      var c = function (m, _) {
          var g = m.length + _.length,
            p = new Uint8Array(g + 8),
            y = new DataView(p.buffer);
          y.setUint32(0, _.length),
            p.set(
              (function (f) {
                for (var w = new Uint8Array(f.length), b = 0; b < f.length; b++)
                  w[b] = f.charCodeAt(b);
                return w;
              })(m),
              4
            ),
            p.set(_, 8);
          var v = (0, o.default)(p, 4, g);
          return y.setUint32(g + 4, v), p;
        },
        d = function (m) {
          return new Uint8Array([
            (m >>> 24) & 255,
            (m >>> 16) & 255,
            (m >>> 8) & 255,
            255 & m,
          ]);
        };
    },
    function (i, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (r) {
          for (
            var a =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : 0,
              h = -1,
              l = a,
              u =
                a +
                (arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : r.length - a);
            l < u;
            l++
          )
            h = (h >>> 8) ^ t[255 & (h ^ r[l])];
          return -1 ^ h;
        });
      for (var t = new Uint32Array(256), o = 0; o < 256; o++) {
        for (var n = o, s = 0; s < 8; s++)
          n = 1 & n ? 3988292384 ^ (n >>> 1) : n >>> 1;
        t[o] = n;
      }
    },
    function (i, e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Frame = e.APNG = void 0);
      var o = (function () {
          function r(a, h) {
            for (var l = 0; l < h.length; l++) {
              var u = h[l];
              (u.enumerable = u.enumerable || !1),
                (u.configurable = !0),
                "value" in u && (u.writable = !0),
                Object.defineProperty(a, u.key, u);
            }
          }
          return function (a, h, l) {
            return h && r(a.prototype, h), l && r(a, l), a;
          };
        })(),
        n = (function (r) {
          return r && r.__esModule ? r : { default: r };
        })(t(3));
      function s(r, a) {
        if (!(r instanceof a))
          throw new TypeError("Cannot call a class as a function");
      }
      (e.APNG = (function () {
        function r() {
          s(this, r),
            (this.width = 0),
            (this.height = 0),
            (this.numPlays = 0),
            (this.playTime = 0),
            (this.frames = []);
        }
        return (
          o(r, [
            {
              key: "createImages",
              value: function () {
                return Promise.all(
                  this.frames.map(function (a) {
                    return a.createImage();
                  })
                );
              },
            },
            {
              key: "getPlayer",
              value: function (a) {
                var h = this,
                  l =
                    arguments.length > 1 &&
                    arguments[1] !== void 0 &&
                    arguments[1];
                return this.createImages().then(function () {
                  return new n.default(h, a, l);
                });
              },
            },
          ]),
          r
        );
      })()),
        (e.Frame = (function () {
          function r() {
            s(this, r),
              (this.left = 0),
              (this.top = 0),
              (this.width = 0),
              (this.height = 0),
              (this.delay = 0),
              (this.disposeOp = 0),
              (this.blendOp = 0),
              (this.imageData = null),
              (this.imageElement = null);
          }
          return (
            o(r, [
              {
                key: "createImage",
                value: function () {
                  var a = this;
                  return this.imageElement
                    ? Promise.resolve()
                    : new Promise(function (h, l) {
                        var u = URL.createObjectURL(a.imageData);
                        (a.imageElement = document.createElement("img")),
                          (a.imageElement.onload = function () {
                            URL.revokeObjectURL(u), h();
                          }),
                          (a.imageElement.onerror = function () {
                            URL.revokeObjectURL(u),
                              (a.imageElement = null),
                              l(new Error("Image creation error"));
                          }),
                          (a.imageElement.src = u);
                      });
                },
              },
            ]),
            r
          );
        })());
    },
    function (i, e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = (function () {
          function s(r, a) {
            for (var h = 0; h < a.length; h++) {
              var l = a[h];
              (l.enumerable = l.enumerable || !1),
                (l.configurable = !0),
                "value" in l && (l.writable = !0),
                Object.defineProperty(r, l.key, l);
            }
          }
          return function (r, a, h) {
            return a && s(r.prototype, a), h && s(r, h), r;
          };
        })(),
        n = (function (s) {
          function r(a, h, l) {
            (function (c, d) {
              if (!(c instanceof d))
                throw new TypeError("Cannot call a class as a function");
            })(this, r);
            var u = (function (c, d) {
              if (!c)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !d || (typeof d != "object" && typeof d != "function")
                ? c
                : d;
            })(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
            return (
              (u.playbackRate = 1),
              (u._currentFrameNumber = 0),
              (u._ended = !1),
              (u._paused = !0),
              (u._numPlays = 0),
              (u._apng = a),
              (u.context = h),
              u.stop(),
              l && u.play(),
              u
            );
          }
          return (
            (function (a, h) {
              if (typeof h != "function" && h !== null)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof h
                );
              (a.prototype = Object.create(h && h.prototype, {
                constructor: {
                  value: a,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                h &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(a, h)
                    : (a.__proto__ = h));
            })(r, s),
            o(r, [
              {
                key: "renderNextFrame",
                value: function () {
                  (this._currentFrameNumber =
                    (this._currentFrameNumber + 1) % this._apng.frames.length),
                    this._currentFrameNumber === this._apng.frames.length - 1 &&
                      (this._numPlays++,
                      this._apng.numPlays !== 0 &&
                        this._numPlays >= this._apng.numPlays &&
                        ((this._ended = !0), (this._paused = !0))),
                    this._prevFrame && this._prevFrame.disposeOp == 1
                      ? this.context.clearRect(
                          this._prevFrame.left,
                          this._prevFrame.top,
                          this._prevFrame.width,
                          this._prevFrame.height
                        )
                      : this._prevFrame &&
                        this._prevFrame.disposeOp == 2 &&
                        this.context.putImageData(
                          this._prevFrameData,
                          this._prevFrame.left,
                          this._prevFrame.top
                        );
                  var a = this.currentFrame;
                  (this._prevFrame = a),
                    (this._prevFrameData = null),
                    a.disposeOp == 2 &&
                      (this._prevFrameData = this.context.getImageData(
                        a.left,
                        a.top,
                        a.width,
                        a.height
                      )),
                    a.blendOp == 0 &&
                      this.context.clearRect(a.left, a.top, a.width, a.height),
                    this.context.drawImage(a.imageElement, a.left, a.top),
                    this.emit("frame", this._currentFrameNumber),
                    this._ended && this.emit("end");
                },
              },
              {
                key: "play",
                value: function () {
                  var a = this;
                  this.emit("play"),
                    this._ended && this.stop(),
                    (this._paused = !1);
                  var h =
                    performance.now() +
                    this.currentFrame.delay / this.playbackRate;
                  requestAnimationFrame(function l(u) {
                    if (!a._ended && !a._paused) {
                      if (u >= h) {
                        for (; u - h >= a._apng.playTime / a.playbackRate; )
                          (h += a._apng.playTime / a.playbackRate),
                            a._numPlays++;
                        do
                          a.renderNextFrame(),
                            (h += a.currentFrame.delay / a.playbackRate);
                        while (!a._ended && u > h);
                      }
                      requestAnimationFrame(l);
                    }
                  });
                },
              },
              {
                key: "pause",
                value: function () {
                  this._paused || (this.emit("pause"), (this._paused = !0));
                },
              },
              {
                key: "stop",
                value: function () {
                  this.emit("stop"),
                    (this._numPlays = 0),
                    (this._ended = !1),
                    (this._paused = !0),
                    (this._currentFrameNumber = -1),
                    this.context.clearRect(
                      0,
                      0,
                      this._apng.width,
                      this._apng.height
                    ),
                    this.renderNextFrame();
                },
              },
              {
                key: "currentFrameNumber",
                get: function () {
                  return this._currentFrameNumber;
                },
              },
              {
                key: "currentFrame",
                get: function () {
                  return this._apng.frames[this._currentFrameNumber];
                },
              },
              {
                key: "paused",
                get: function () {
                  return this._paused;
                },
              },
              {
                key: "ended",
                get: function () {
                  return this._ended;
                },
              },
            ]),
            r
          );
        })(
          (function (s) {
            return s && s.__esModule ? s : { default: s };
          })(t(4)).default
        );
      e.default = n;
    },
    function (i, e) {
      function t() {
        (this._events = this._events || {}),
          (this._maxListeners = this._maxListeners || void 0);
      }
      function o(r) {
        return typeof r == "function";
      }
      function n(r) {
        return typeof r == "object" && r !== null;
      }
      function s(r) {
        return r === void 0;
      }
      (i.exports = t),
        (t.EventEmitter = t),
        (t.prototype._events = void 0),
        (t.prototype._maxListeners = void 0),
        (t.defaultMaxListeners = 10),
        (t.prototype.setMaxListeners = function (r) {
          if (
            !(function (a) {
              return typeof a == "number";
            })(r) ||
            r < 0 ||
            isNaN(r)
          )
            throw TypeError("n must be a positive number");
          return (this._maxListeners = r), this;
        }),
        (t.prototype.emit = function (r) {
          var a, h, l, u, c, d;
          if (
            (this._events || (this._events = {}),
            r === "error" &&
              (!this._events.error ||
                (n(this._events.error) && !this._events.error.length)))
          ) {
            if ((a = arguments[1]) instanceof Error) throw a;
            var m = new Error(
              'Uncaught, unspecified "error" event. (' + a + ")"
            );
            throw ((m.context = a), m);
          }
          if (s((h = this._events[r]))) return !1;
          if (o(h))
            switch (arguments.length) {
              case 1:
                h.call(this);
                break;
              case 2:
                h.call(this, arguments[1]);
                break;
              case 3:
                h.call(this, arguments[1], arguments[2]);
                break;
              default:
                (u = Array.prototype.slice.call(arguments, 1)),
                  h.apply(this, u);
            }
          else if (n(h))
            for (
              u = Array.prototype.slice.call(arguments, 1),
                l = (d = h.slice()).length,
                c = 0;
              c < l;
              c++
            )
              d[c].apply(this, u);
          return !0;
        }),
        (t.prototype.addListener = function (r, a) {
          var h;
          if (!o(a)) throw TypeError("listener must be a function");
          return (
            this._events || (this._events = {}),
            this._events.newListener &&
              this.emit("newListener", r, o(a.listener) ? a.listener : a),
            this._events[r]
              ? n(this._events[r])
                ? this._events[r].push(a)
                : (this._events[r] = [this._events[r], a])
              : (this._events[r] = a),
            n(this._events[r]) &&
              !this._events[r].warned &&
              (h = s(this._maxListeners)
                ? t.defaultMaxListeners
                : this._maxListeners) &&
              h > 0 &&
              this._events[r].length > h &&
              (this._events[r].warned = !0),
            this
          );
        }),
        (t.prototype.on = t.prototype.addListener),
        (t.prototype.once = function (r, a) {
          if (!o(a)) throw TypeError("listener must be a function");
          var h = !1;
          function l() {
            this.removeListener(r, l),
              h || ((h = !0), a.apply(this, arguments));
          }
          return (l.listener = a), this.on(r, l), this;
        }),
        (t.prototype.removeListener = function (r, a) {
          var h, l, u, c;
          if (!o(a)) throw TypeError("listener must be a function");
          if (!this._events || !this._events[r]) return this;
          if (
            ((u = (h = this._events[r]).length),
            (l = -1),
            h === a || (o(h.listener) && h.listener === a))
          )
            delete this._events[r],
              this._events.removeListener && this.emit("removeListener", r, a);
          else if (n(h)) {
            for (c = u; c-- > 0; )
              if (h[c] === a || (h[c].listener && h[c].listener === a)) {
                l = c;
                break;
              }
            if (l < 0) return this;
            h.length === 1
              ? ((h.length = 0), delete this._events[r])
              : h.splice(l, 1),
              this._events.removeListener && this.emit("removeListener", r, a);
          }
          return this;
        }),
        (t.prototype.removeAllListeners = function (r) {
          var a, h;
          if (!this._events) return this;
          if (!this._events.removeListener)
            return (
              arguments.length === 0
                ? (this._events = {})
                : this._events[r] && delete this._events[r],
              this
            );
          if (arguments.length === 0) {
            for (a in this._events)
              a !== "removeListener" && this.removeAllListeners(a);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = {}),
              this
            );
          }
          if (o((h = this._events[r]))) this.removeListener(r, h);
          else if (h)
            for (; h.length; ) this.removeListener(r, h[h.length - 1]);
          return delete this._events[r], this;
        }),
        (t.prototype.listeners = function (r) {
          return this._events && this._events[r]
            ? o(this._events[r])
              ? [this._events[r]]
              : this._events[r].slice()
            : [];
        }),
        (t.prototype.listenerCount = function (r) {
          if (this._events) {
            var a = this._events[r];
            if (o(a)) return 1;
            if (a) return a.length;
          }
          return 0;
        }),
        (t.listenerCount = function (r, a) {
          return r.listenerCount(a);
        });
    },
  ]);
}),
  ({
    get exports() {
      return Et;
    },
    set exports(i) {
      Et = i;
    },
  }.exports = Jt());
const ds = we(Et);
var j = {},
  me = {},
  N = {};
Object.defineProperty(N, "__esModule", { value: !0 }),
  (N.loop = N.conditional = N.parse = void 0);
N.parse = function i(e, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : o;
  if (Array.isArray(t))
    t.forEach(function (r) {
      return i(e, r, o, n);
    });
  else if (typeof t == "function") t(e, o, n, i);
  else {
    var s = Object.keys(t)[0];
    Array.isArray(t[s])
      ? ((n[s] = {}), i(e, t[s], o, n[s]))
      : (n[s] = t[s](e, o, n, i));
  }
  return o;
};
N.conditional = function (i, e) {
  return function (t, o, n, s) {
    e(t, o, n) && s(t, i, o, n);
  };
};
N.loop = function (i, e) {
  return function (t, o, n, s) {
    for (var r = [], a = t.pos; e(t, o, n); ) {
      var h = {};
      if ((s(t, i, o, h), t.pos === a)) break;
      (a = t.pos), r.push(h);
    }
    return r;
  };
};
var z = {};
Object.defineProperty(z, "__esModule", { value: !0 }),
  (z.readBits =
    z.readArray =
    z.readUnsigned =
    z.readString =
    z.peekBytes =
    z.readBytes =
    z.peekByte =
    z.readByte =
    z.buildStream =
      void 0);
z.buildStream = function (i) {
  return { data: i, pos: 0 };
};
var xi = function () {
  return function (i) {
    return i.data[i.pos++];
  };
};
z.readByte = xi;
z.peekByte = function () {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return function (e) {
    return e.data[e.pos + i];
  };
};
var Mt = function (i) {
  return function (e) {
    return e.data.subarray(e.pos, (e.pos += i));
  };
};
z.readBytes = Mt;
z.peekBytes = function (i) {
  return function (e) {
    return e.data.subarray(e.pos, e.pos + i);
  };
};
z.readString = function (i) {
  return function (e) {
    return Array.from(Mt(i)(e))
      .map(function (t) {
        return String.fromCharCode(t);
      })
      .join("");
  };
};
z.readUnsigned = function (i) {
  return function (e) {
    var t = Mt(2)(e);
    return i ? (t[1] << 8) + t[0] : (t[0] << 8) + t[1];
  };
};
z.readArray = function (i, e) {
  return function (t, o, n) {
    for (
      var s = typeof e == "function" ? e(t, o, n) : e,
        r = Mt(i),
        a = new Array(s),
        h = 0;
      h < s;
      h++
    )
      a[h] = r(t);
    return a;
  };
};
(z.readBits = function (i) {
  return function (e) {
    for (
      var t = (function (s) {
          return s.data[s.pos++];
        })(e),
        o = new Array(8),
        n = 0;
      n < 8;
      n++
    )
      o[7 - n] = !!(t & (1 << n));
    return Object.keys(i).reduce(function (s, r) {
      var a = i[r];
      return (
        a.length
          ? (s[r] = (function (h, l, u) {
              for (var c = 0, d = 0; d < u; d++)
                c += h[l + d] && Math.pow(2, u - d - 1);
              return c;
            })(o, a.index, a.length))
          : (s[r] = o[a.index]),
        s
      );
    }, {});
  };
}),
  (function (i) {
    Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
    var e = N,
      t = z,
      o = {
        blocks: function (u) {
          for (
            var c = [], d = u.data.length, m = 0, _ = (0, t.readByte)()(u);
            _ !== 0 && _;
            _ = (0, t.readByte)()(u)
          ) {
            if (u.pos + _ >= d) {
              var g = d - u.pos;
              c.push((0, t.readBytes)(g)(u)), (m += g);
              break;
            }
            c.push((0, t.readBytes)(_)(u)), (m += _);
          }
          for (var p = new Uint8Array(m), y = 0, v = 0; v < c.length; v++)
            p.set(c[v], y), (y += c[v].length);
          return p;
        },
      },
      n = (0, e.conditional)(
        {
          gce: [
            { codes: (0, t.readBytes)(2) },
            { byteSize: (0, t.readByte)() },
            {
              extras: (0, t.readBits)({
                future: { index: 0, length: 3 },
                disposal: { index: 3, length: 3 },
                userInput: { index: 6 },
                transparentColorGiven: { index: 7 },
              }),
            },
            { delay: (0, t.readUnsigned)(!0) },
            { transparentColorIndex: (0, t.readByte)() },
            { terminator: (0, t.readByte)() },
          ],
        },
        function (u) {
          var c = (0, t.peekBytes)(2)(u);
          return c[0] === 33 && c[1] === 249;
        }
      ),
      s = (0, e.conditional)(
        {
          image: [
            { code: (0, t.readByte)() },
            {
              descriptor: [
                { left: (0, t.readUnsigned)(!0) },
                { top: (0, t.readUnsigned)(!0) },
                { width: (0, t.readUnsigned)(!0) },
                { height: (0, t.readUnsigned)(!0) },
                {
                  lct: (0, t.readBits)({
                    exists: { index: 0 },
                    interlaced: { index: 1 },
                    sort: { index: 2 },
                    future: { index: 3, length: 2 },
                    size: { index: 5, length: 3 },
                  }),
                },
              ],
            },
            (0, e.conditional)(
              {
                lct: (0, t.readArray)(3, function (u, c, d) {
                  return Math.pow(2, d.descriptor.lct.size + 1);
                }),
              },
              function (u, c, d) {
                return d.descriptor.lct.exists;
              }
            ),
            { data: [{ minCodeSize: (0, t.readByte)() }, o] },
          ],
        },
        function (u) {
          return (0, t.peekByte)()(u) === 44;
        }
      ),
      r = (0, e.conditional)(
        {
          text: [
            { codes: (0, t.readBytes)(2) },
            { blockSize: (0, t.readByte)() },
            {
              preData: function (u, c, d) {
                return (0, t.readBytes)(d.text.blockSize)(u);
              },
            },
            o,
          ],
        },
        function (u) {
          var c = (0, t.peekBytes)(2)(u);
          return c[0] === 33 && c[1] === 1;
        }
      ),
      a = (0, e.conditional)(
        {
          application: [
            { codes: (0, t.readBytes)(2) },
            { blockSize: (0, t.readByte)() },
            {
              id: function (u, c, d) {
                return (0, t.readString)(d.blockSize)(u);
              },
            },
            o,
          ],
        },
        function (u) {
          var c = (0, t.peekBytes)(2)(u);
          return c[0] === 33 && c[1] === 255;
        }
      ),
      h = (0, e.conditional)(
        { comment: [{ codes: (0, t.readBytes)(2) }, o] },
        function (u) {
          var c = (0, t.peekBytes)(2)(u);
          return c[0] === 33 && c[1] === 254;
        }
      ),
      l = [
        {
          header: [
            { signature: (0, t.readString)(3) },
            { version: (0, t.readString)(3) },
          ],
        },
        {
          lsd: [
            { width: (0, t.readUnsigned)(!0) },
            { height: (0, t.readUnsigned)(!0) },
            {
              gct: (0, t.readBits)({
                exists: { index: 0 },
                resolution: { index: 1, length: 3 },
                sort: { index: 4 },
                size: { index: 5, length: 3 },
              }),
            },
            { backgroundColorIndex: (0, t.readByte)() },
            { pixelAspectRatio: (0, t.readByte)() },
          ],
        },
        (0, e.conditional)(
          {
            gct: (0, t.readArray)(3, function (u, c) {
              return Math.pow(2, c.lsd.gct.size + 1);
            }),
          },
          function (u, c) {
            return c.lsd.gct.exists;
          }
        ),
        {
          frames: (0, e.loop)([n, a, h, s, r], function (u) {
            var c = (0, t.peekByte)()(u);
            return c === 33 || c === 44;
          }),
        },
      ];
    i.default = l;
  })(me);
var vt = {};
Object.defineProperty(vt, "__esModule", { value: !0 }),
  (vt.deinterlace = void 0);
vt.deinterlace = function (i, e) {
  for (
    var t = new Array(i.length),
      o = i.length / e,
      n = function (u, c) {
        var d = i.slice(c * e, (c + 1) * e);
        t.splice.apply(t, [u * e, e].concat(d));
      },
      s = [0, 4, 2, 1],
      r = [8, 8, 4, 2],
      a = 0,
      h = 0;
    h < 4;
    h++
  )
    for (var l = s[h]; l < o; l += r[h]) n(l, a), a++;
  return t;
};
var wt = {};
Object.defineProperty(wt, "__esModule", { value: !0 }), (wt.lzw = void 0);
(wt.lzw = function (i, e, t) {
  var o,
    n,
    s,
    r,
    a,
    h,
    l,
    u,
    c,
    d,
    m,
    _,
    g,
    p,
    y,
    v,
    f = 4096,
    w = t,
    b = new Array(t),
    F = new Array(f),
    D = new Array(f),
    I = new Array(f + 1);
  for (
    a = 1 + (n = 1 << (d = i)),
      o = n + 2,
      l = -1,
      s = (1 << (r = d + 1)) - 1,
      u = 0;
    u < n;
    u++
  )
    (F[u] = 0), (D[u] = u);
  for (m = _ = g = p = y = v = 0, c = 0; c < w; ) {
    if (p === 0) {
      if (_ < r) {
        (m += e[v] << _), (_ += 8), v++;
        continue;
      }
      if (((u = m & s), (m >>= r), (_ -= r), u > o || u == a)) break;
      if (u == n) {
        (s = (1 << (r = d + 1)) - 1), (o = n + 2), (l = -1);
        continue;
      }
      if (l == -1) {
        (I[p++] = D[u]), (l = u), (g = u);
        continue;
      }
      for (h = u, u == o && ((I[p++] = g), (u = l)); u > n; )
        (I[p++] = D[u]), (u = F[u]);
      (g = 255 & D[u]),
        (I[p++] = g),
        o < f &&
          ((F[o] = l), (D[o] = g), !(++o & s) && o < f && (r++, (s += o))),
        (l = h);
    }
    p--, (b[y++] = I[p]), c++;
  }
  for (c = y; c < w; c++) b[c] = 0;
  return b;
}),
  Object.defineProperty(j, "__esModule", { value: !0 });
var Mi = (j.decompressFrames = j.decompressFrame = j.parseGIF = void 0),
  Si = (function (i) {
    return i && i.__esModule ? i : { default: i };
  })(me),
  zi = N,
  Ti = z,
  Ii = vt,
  Pi = wt,
  ms = (j.parseGIF = function (i) {
    var e = new Uint8Array(i);
    return (0, zi.parse)((0, Ti.buildStream)(e), Si.default);
  }),
  pe = function (i, e, t) {
    if (i.image) {
      var o = i.image,
        n = o.descriptor.width * o.descriptor.height,
        s = (0, Pi.lzw)(o.data.minCodeSize, o.data.blocks, n);
      o.descriptor.lct.interlaced &&
        (s = (0, Ii.deinterlace)(s, o.descriptor.width));
      var r = {
        pixels: s,
        dims: {
          top: i.image.descriptor.top,
          left: i.image.descriptor.left,
          width: i.image.descriptor.width,
          height: i.image.descriptor.height,
        },
      };
      return (
        o.descriptor.lct && o.descriptor.lct.exists
          ? (r.colorTable = o.lct)
          : (r.colorTable = e),
        i.gce &&
          ((r.delay = 10 * (i.gce.delay || 10)),
          (r.disposalType = i.gce.extras.disposal),
          i.gce.extras.transparentColorGiven &&
            (r.transparentIndex = i.gce.transparentColorIndex)),
        t &&
          (r.patch = (function (a) {
            for (
              var h = a.pixels.length, l = new Uint8ClampedArray(4 * h), u = 0;
              u < h;
              u++
            ) {
              var c = 4 * u,
                d = a.pixels[u],
                m = a.colorTable[d] || [0, 0, 0];
              (l[c] = m[0]),
                (l[c + 1] = m[1]),
                (l[c + 2] = m[2]),
                (l[c + 3] = d !== a.transparentIndex ? 255 : 0);
            }
            return l;
          })(r)),
        r
      );
    }
  };
j.decompressFrame = pe;
Mi = j.decompressFrames = function (i, e) {
  return i.frames
    .filter(function (t) {
      return t.image;
    })
    .map(function (t) {
      return pe(t, i.gct, e);
    });
};
const ps = {
  shaders: {
    vertexShader: R("bitBlit/bitBlit.vert"),
    fragmentShader: R("bitBlit/bitBlit.frag"),
  },
  attributes: new Map([
    ["a_pos", 0],
    ["a_tex", 1],
  ]),
};
let dt = class {
  constructor(i, e) {
    (this._width = 0),
      (this._height = 0),
      (this._free = []),
      (this._width = i),
      (this._height = e),
      this._free.push(new C(0, 0, i, e));
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  allocate(i, e) {
    if (i > this._width || e > this._height) return new C();
    let t = null,
      o = -1;
    for (let n = 0; n < this._free.length; ++n) {
      const s = this._free[n];
      i <= s.width &&
        e <= s.height &&
        (t === null || (s.y <= t.y && s.x <= t.x)) &&
        ((t = s), (o = n));
    }
    return t === null
      ? new C()
      : (this._free.splice(o, 1),
        t.width < t.height
          ? (t.width > i &&
              this._free.push(new C(t.x + i, t.y, t.width - i, e)),
            t.height > e &&
              this._free.push(new C(t.x, t.y + e, t.width, t.height - e)))
          : (t.width > i &&
              this._free.push(new C(t.x + i, t.y, t.width - i, t.height)),
            t.height > e &&
              this._free.push(new C(t.x, t.y + e, i, t.height - e))),
        new C(t.x, t.y, i, e));
  }
  release(i) {
    for (let e = 0; e < this._free.length; ++e) {
      const t = this._free[e];
      if (t.y === i.y && t.height === i.height && t.x + t.width === i.x)
        t.width += i.width;
      else if (t.x === i.x && t.width === i.width && t.y + t.height === i.y)
        t.height += i.height;
      else if (i.y === t.y && i.height === t.height && i.x + i.width === t.x)
        (t.x = i.x), (t.width += i.width);
      else {
        if (i.x !== t.x || i.width !== t.width || i.y + i.height !== t.y)
          continue;
        (t.y = i.y), (t.height += i.height);
      }
      this._free.splice(e, 1), this.release(i);
    }
    this._free.push(i);
  }
};
const Di = (i) => Math.floor(i / 256),
  it = 1e20;
function Y(i) {
  return i && i.type === "static";
}
function Kt(i) {
  return B(i.frameDurations.reduce((e, t) => e + t, 0));
}
function te(i, e) {
  const { width: t, height: o, getFrame: n } = i,
    s = i.frameDurations.slice(),
    r = s.pop();
  return (
    s.push(B(r + e)), { frameDurations: s, getFrame: n, width: t, height: o }
  );
}
let Ci = class {
  constructor(i, e, t, o) {
    (this._animation = i),
      (this._repeatType = t),
      (this._onFrameData = o),
      (this._direction = 1),
      (this._currentFrame = 0),
      (this.timeToFrame = this._animation.frameDurations[this._currentFrame]);
    let n = 0;
    for (; e > n; ) (n += this.timeToFrame), this.nextFrame();
    const s = this._animation.getFrame(this._currentFrame);
    this._onFrameData(s);
  }
  nextFrame() {
    if (((this._currentFrame += this._direction), this._direction > 0)) {
      if (this._currentFrame === this._animation.frameDurations.length)
        switch (this._repeatType) {
          case V.None:
            this._currentFrame -= this._direction;
            break;
          case V.Loop:
            this._currentFrame = 0;
            break;
          case V.Oscillate:
            (this._currentFrame -= this._direction), (this._direction = -1);
        }
    } else if (this._currentFrame === -1)
      switch (this._repeatType) {
        case V.None:
          this._currentFrame -= this._direction;
          break;
        case V.Loop:
          this._currentFrame = this._animation.frameDurations.length - 1;
          break;
        case V.Oscillate:
          (this._currentFrame -= this._direction), (this._direction = 1);
      }
    this.timeToFrame = this._animation.frameDurations[this._currentFrame];
    const i = this._animation.getFrame(this._currentFrame);
    this._onFrameData(i);
  }
};
function Ri(i, e, t, o) {
  let n,
    { repeatType: s } = e;
  if (
    (s == null && (s = V.Loop),
    e.reverseAnimation === !0 &&
      (i = (function (r) {
        const { width: a, height: h } = r;
        return {
          frameDurations: r.frameDurations.reverse(),
          getFrame: (l) => {
            const u = r.frameDurations.length - 1 - l;
            return r.getFrame(u);
          },
          width: a,
          height: h,
        };
      })(i)),
    e.duration != null &&
      (i = (function (r, a) {
        const { width: h, height: l, getFrame: u } = r,
          c = a / Kt(r);
        return {
          frameDurations: r.frameDurations.map((d) => B(d * c)),
          getFrame: u,
          width: h,
          height: l,
        };
      })(i, B(1e3 * e.duration))),
    e.repeatDelay != null)
  ) {
    const r = 1e3 * e.repeatDelay;
    s === V.Loop
      ? (i = te(i, B(r)))
      : s === V.Oscillate &&
        (i = (function (a, h) {
          const { width: l, height: u, getFrame: c } = a,
            d = a.frameDurations.slice(),
            m = d.shift();
          return (
            d.unshift(B(m + h)),
            { frameDurations: d, getFrame: c, width: l, height: u }
          );
        })(te(i, B(r / 2)), B(r / 2)));
  }
  if (e.startTimeOffset != null) n = B(1e3 * e.startTimeOffset);
  else if (e.randomizeStartTime != null) {
    const r = We(t),
      a = 82749913,
      h = e.randomizeStartSeed != null ? e.randomizeStartSeed : a,
      l = Xe(r, h);
    n = B(l * Kt(i));
  } else n = B(0);
  return new Ci(i, n, s, o);
}
const kt = document.createElement("canvas"),
  mt = kt.getContext("2d"),
  ee = De(),
  ie = "arial-unicode-ms-regular",
  _e = ue.getLogger("esri.views.2d.engine.webgl.TextureManager");
function se(i, e) {
  const t = Math.round(J(e) * window.devicePixelRatio),
    o = t >= 128 ? 2 : 4;
  return Math.min(i, t * o);
}
const Tt = (i, e, t) => _e.error(new q(i, e, t));
class Lt {
  static fromMosaic(e, t) {
    return new Lt(e, t.page, t.sdf);
  }
  constructor(e, t, o) {
    (this.mosaicType = e), (this.page = t), (this.sdf = o);
  }
}
class _s {
  constructor(e, t, o) {
    (this._requestRender = e),
      (this.resourceManager = t),
      (this._allowNonPowerOfTwo = o),
      (this._invalidFontsMap = new Map()),
      (this._sdfConverter = new (class {
        constructor(n) {
          (this._svg = null), (this.size = n);
          const s = document.createElement("canvas");
          (s.width = s.height = n),
            (this._context = s.getContext("2d")),
            (this._gridOuter = new Float64Array(n * n)),
            (this._gridInner = new Float64Array(n * n)),
            (this._f = new Float64Array(n)),
            (this._d = new Float64Array(n)),
            (this._z = new Float64Array(n + 1)),
            (this._v = new Int16Array(n));
        }
        dispose() {
          (this._context =
            this._gridOuter =
            this._gridInner =
            this._f =
            this._d =
            this._z =
            this._v =
              null),
            this._svg &&
              (document.body.removeChild(this._svg), (this._svg = null));
        }
        draw(n, s, r = 31) {
          this._initSVG();
          const a = this.createSVGString(n);
          return new Promise((h, l) => {
            const u = new Image();
            (u.src =
              "data:image/svg+xml; charset=utf8, " + encodeURIComponent(a)),
              (u.onload = () => {
                (u.onload = null),
                  this._context.clearRect(0, 0, this.size, this.size),
                  this._context.drawImage(u, 0, 0, this.size, this.size);
                const d = this._context.getImageData(
                    0,
                    0,
                    this.size,
                    this.size
                  ),
                  m = new Uint8Array(this.size * this.size * 4);
                for (let _ = 0; _ < this.size * this.size; _++) {
                  const g = d.data[4 * _ + 3] / 255;
                  (this._gridOuter[_] =
                    g === 1 ? 0 : g === 0 ? it : Math.max(0, 0.5 - g) ** 2),
                    (this._gridInner[_] =
                      g === 1 ? it : g === 0 ? 0 : Math.max(0, g - 0.5) ** 2);
                }
                this._edt(this._gridOuter, this.size, this.size),
                  this._edt(this._gridInner, this.size, this.size);
                for (let _ = 0; _ < this.size * this.size; _++) {
                  const g = this._gridOuter[_] - this._gridInner[_];
                  _i(0.5 - g / (2 * r), m, 4 * _);
                }
                h(m);
              });
            const c = s && s.signal;
            c && Se(c, () => l(ze()));
          });
        }
        _initSVG() {
          if (!this._svg) {
            const n = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            );
            n.setAttribute("style", "position: absolute;"),
              n.setAttribute("width", "0"),
              n.setAttribute("height", "0"),
              n.setAttribute("aria-hidden", "true"),
              n.setAttribute("role", "presentation"),
              document.body.appendChild(n),
              (this._svg = n);
          }
          return this._svg;
        }
        createSVGString(n) {
          const s = this._initSVG(),
            r = document.createElementNS("http://www.w3.org/2000/svg", "path");
          r.setAttribute("d", n), s.appendChild(r);
          const a = r.getBBox(),
            h = a.width / a.height,
            l = this.size / 2;
          let u, c, d, m;
          if (h > 1) {
            c = u = l / a.width;
            const y = l * (1 / h);
            (d = this.size / 4), (m = l - y / 2);
          } else
            (u = c = l / a.height), (d = l - (l * h) / 2), (m = this.size / 4);
          const _ = -a.x * u + d,
            g = -a.y * c + m;
          r.setAttribute(
            "style",
            `transform: matrix(${u}, 0, 0, ${c}, ${_}, ${g})`
          );
          const p = `<svg style="fill:red;" height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">${s.innerHTML}</svg>`;
          return s.removeChild(r), p;
        }
        _edt(n, s, r) {
          const a = this._f,
            h = this._d,
            l = this._v,
            u = this._z;
          for (let c = 0; c < s; c++) {
            for (let d = 0; d < r; d++) a[d] = n[d * s + c];
            this._edt1d(a, h, l, u, r);
            for (let d = 0; d < r; d++) n[d * s + c] = h[d];
          }
          for (let c = 0; c < r; c++) {
            for (let d = 0; d < s; d++) a[d] = n[c * s + d];
            this._edt1d(a, h, l, u, s);
            for (let d = 0; d < s; d++) n[c * s + d] = Math.sqrt(h[d]);
          }
        }
        _edt1d(n, s, r, a, h) {
          (r[0] = 0), (a[0] = -it), (a[1] = +it);
          for (let l = 1, u = 0; l < h; l++) {
            let c =
              (n[l] + l * l - (n[r[u]] + r[u] * r[u])) / (2 * l - 2 * r[u]);
            for (; c <= a[u]; )
              u--,
                (c =
                  (n[l] + l * l - (n[r[u]] + r[u] * r[u])) /
                  (2 * l - 2 * r[u]));
            u++, (r[u] = l), (a[u] = c), (a[u + 1] = +it);
          }
          for (let l = 0, u = 0; l < h; l++) {
            for (; a[u + 1] < l; ) u++;
            s[l] = (l - r[u]) * (l - r[u]) + n[r[u]];
          }
        }
      })(126)),
      (this._bindingInfos = []),
      (this._hashToBindingIndex = new Map()),
      (this._ongoingRasterizations = new Map()),
      (this._imageRequestQueue = new Te({
        concurrency: 10,
        process: async (n, s) => {
          Ie(s);
          try {
            return await Vt(n, { responseType: "image", signal: s });
          } catch (r) {
            throw Nt(r)
              ? r
              : new q(
                  "mapview-invalid-resource",
                  `Could not fetch requested resource at ${n}`,
                  r
                );
          }
        },
      })),
      (this._spriteMosaic = new (class ge {
        constructor(s, r, a = 0) {
          (this._mosaicPages = []),
            (this._maxItemSize = 0),
            (this._currentPage = 0),
            (this._pageWidth = 0),
            (this._pageHeight = 0),
            (this._mosaicRects = new Map()),
            (this._spriteCopyQueue = []),
            (this.pixelRatio = 1),
            (this._pageWidth = s),
            (this._pageHeight = r),
            a > 0 && (this._maxItemSize = a),
            (this.pixelRatio = window.devicePixelRatio || 1),
            (this._binPack = new dt(this._pageWidth, this._pageHeight));
          const h = Math.floor(this._pageWidth),
            l = Math.floor(this._pageHeight);
          this._mosaicPages.push({
            mosaicsData: { type: "static", data: new Uint32Array(h * l) },
            size: [this._pageWidth, this._pageHeight],
            dirty: !0,
            texture: void 0,
          });
        }
        getWidth(s) {
          return s >= this._mosaicPages.length
            ? -1
            : this._mosaicPages[s].size[0];
        }
        getHeight(s) {
          return s >= this._mosaicPages.length
            ? -1
            : this._mosaicPages[s].size[1];
        }
        getPageTexture(s) {
          return s < this._mosaicPages.length
            ? this._mosaicPages[s].texture
            : null;
        }
        has(s) {
          return this._mosaicRects.has(s);
        }
        get itemCount() {
          return this._mosaicRects.size;
        }
        getSpriteItem(s) {
          return this._mosaicRects.get(s);
        }
        addSpriteItem(s, r, a, h, l, u, c = 1) {
          if (this._mosaicRects.has(s)) return this._mosaicRects.get(s);
          let d, m, _;
          if (Y(a)) [d, m, _] = this._allocateImage(r[0], r[1]);
          else {
            (d = new C(0, 0, r[0], r[1])), (m = this._mosaicPages.length);
            const p = void 0;
            this._mosaicPages.push({
              mosaicsData: a,
              size: [r[0] + 2 * P, r[1] + 2 * P],
              dirty: !0,
              texture: p,
            });
          }
          if (d.width <= 0 || d.height <= 0) return null;
          const g = {
            rect: d,
            width: r[0],
            height: r[1],
            sdf: l,
            simplePattern: u,
            pixelRatio: c,
            page: m,
          };
          return (
            this._mosaicRects.set(s, g),
            Y(a) &&
              this._copy({
                rect: d,
                spriteSize: r,
                spriteData: a.data,
                page: m,
                pageSize: _,
                repeat: h,
                sdf: l,
              }),
            g
          );
        }
        hasItemsToProcess() {
          return this._spriteCopyQueue.length !== 0;
        }
        processNextItem() {
          const s = this._spriteCopyQueue.pop();
          s && this._copy(s);
        }
        getSpriteItems(s) {
          const r = {};
          for (const a of s) r[a] = this.getSpriteItem(a);
          return r;
        }
        getMosaicItemPosition(s) {
          const r = this.getSpriteItem(s),
            a = r && r.rect;
          if (!a) return null;
          (a.width = r.width), (a.height = r.height);
          const h = r.width,
            l = r.height,
            u = P,
            c = this._mosaicPages[r.page];
          return {
            size: [r.width, r.height],
            tl: [(a.x + u) / c[0], (a.y + u) / c[1]],
            br: [(a.x + u + h) / c[0], (a.y + u + l) / c[1]],
            page: r.page,
          };
        }
        bind(s, r, a = 0, h = 0) {
          const l = this._mosaicPages[a],
            u = l.mosaicsData;
          let c = l.texture;
          c ||
            ((c = (function (d, m) {
              return new At(
                d,
                {
                  pixelFormat: yt.RGBA,
                  dataType: Rt.UNSIGNED_BYTE,
                  width: m[0],
                  height: m[1],
                },
                null
              );
            })(s, l.size)),
            (l.texture = c)),
            c.setSamplingMode(r),
            Y(u)
              ? (s.bindTexture(c, h),
                l.dirty &&
                  (c.setData(new Uint8Array(u.data.buffer)),
                  c.generateMipmap()))
              : (u.data.bindFrame(s, c, h), c.generateMipmap()),
            (l.dirty = !1);
        }
        static _copyBits(s, r, a, h, l, u, c, d, m, _, g) {
          let p = h * r + a,
            y = d * u + c;
          if (g) {
            y -= u;
            for (
              let v = -1;
              v <= _;
              v++, p = (((v + _) % _) + h) * r + a, y += u
            )
              for (let f = -1; f <= m; f++) l[y + f] = s[p + ((f + m) % m)];
          } else
            for (let v = 0; v < _; v++) {
              for (let f = 0; f < m; f++) l[y + f] = s[p + f];
              (p += r), (y += u);
            }
        }
        _copy(s) {
          if (s.page >= this._mosaicPages.length) return;
          const r = this._mosaicPages[s.page],
            a = r.mosaicsData;
          if (!Y(r.mosaicsData))
            throw new q("mapview-invalid-resource", "unsuitable data type!");
          const h = s.spriteData,
            l = a.data;
          ge._copyBits(
            h,
            s.spriteSize[0],
            0,
            0,
            l,
            s.pageSize[0],
            s.rect.x + P,
            s.rect.y + P,
            s.spriteSize[0],
            s.spriteSize[1],
            s.repeat
          ),
            (r.dirty = !0);
        }
        _allocateImage(s, r) {
          (s += 2 * P), (r += 2 * P);
          const a = Math.max(s, r);
          if (this._maxItemSize && this._maxItemSize < a) {
            const l = 2 ** Math.ceil(Qt(s)),
              u = 2 ** Math.ceil(Qt(r)),
              c = new C(0, 0, s, r);
            return (
              this._mosaicPages.push({
                mosaicsData: { type: "static", data: new Uint32Array(l * u) },
                size: [l, u],
                dirty: !0,
                texture: void 0,
              }),
              [c, this._mosaicPages.length - 1, [l, u]]
            );
          }
          const h = this._binPack.allocate(s, r);
          if (h.width <= 0) {
            const l = this._mosaicPages[this._currentPage];
            return (
              !l.dirty && Y(l.mosaicsData) && (l.mosaicsData.data = null),
              (this._currentPage = this._mosaicPages.length),
              this._mosaicPages.push({
                mosaicsData: {
                  type: "static",
                  data: new Uint32Array(this._pageWidth * this._pageHeight),
                },
                size: [this._pageWidth, this._pageHeight],
                dirty: !0,
                texture: void 0,
              }),
              (this._binPack = new dt(this._pageWidth, this._pageHeight)),
              this._allocateImage(s, r)
            );
          }
          return [h, this._currentPage, [this._pageWidth, this._pageHeight]];
        }
        dispose() {
          this._binPack = null;
          for (const s of this._mosaicPages) {
            const r = s.texture;
            r && r.dispose();
            const a = s.mosaicsData;
            Y(a) || a.data.destroy();
          }
          (this._mosaicPages = null), this._mosaicRects.clear();
        }
      })(2048, 2048, 500)),
      (this._glyphSource = new (class {
        constructor(n) {
          (this._glyphInfo = {}), (this._baseURL = n);
        }
        getRange(n, s, r) {
          const a = this._getFontStack(n);
          if (a.getRange(s)) return Promise.resolve();
          const h = 256 * s,
            l = h + 255,
            u = this._baseURL
              .replace("{fontstack}", n)
              .replace("{range}", h + "-" + l);
          return Vt(u, { responseType: "array-buffer", ...r }).then((c) => {
            a.addRange(
              s,
              new (class {
                constructor(d) {
                  for (this._metrics = [], this._bitmaps = []; d.next(); )
                    switch (d.tag()) {
                      case 1: {
                        const m = d.getMessage();
                        for (; m.next(); )
                          switch (m.tag()) {
                            case 3: {
                              const _ = m.getMessage();
                              let g, p, y, v, f, w, b;
                              for (; _.next(); )
                                switch (_.tag()) {
                                  case 1:
                                    g = _.getUInt32();
                                    break;
                                  case 2:
                                    p = _.getBytes();
                                    break;
                                  case 3:
                                    y = _.getUInt32();
                                    break;
                                  case 4:
                                    v = _.getUInt32();
                                    break;
                                  case 5:
                                    f = _.getSInt32();
                                    break;
                                  case 6:
                                    w = _.getSInt32();
                                    break;
                                  case 7:
                                    b = _.getUInt32();
                                    break;
                                  default:
                                    _.skip();
                                }
                              _.release(),
                                g &&
                                  ((this._metrics[g] = {
                                    width: y,
                                    height: v,
                                    left: f,
                                    top: w,
                                    advance: b,
                                  }),
                                  (this._bitmaps[g] = p));
                              break;
                            }
                            default:
                              m.skip();
                          }
                        m.release();
                        break;
                      }
                      default:
                        d.skip();
                    }
                }
                getMetrics(d) {
                  return this._metrics[d];
                }
                getBitmap(d) {
                  return this._bitmaps[d];
                }
              })(new Me(new Uint8Array(c.data), new DataView(c.data)))
            );
          });
        }
        getGlyph(n, s) {
          const r = this._getFontStack(n);
          if (!r) return;
          const a = Math.floor(s / 256);
          if (a > 256) return;
          const h = r.getRange(a);
          return h
            ? { metrics: h.getMetrics(s), bitmap: h.getBitmap(s) }
            : void 0;
        }
        _getFontStack(n) {
          let s = this._glyphInfo[n];
          return (
            s ||
              (s = this._glyphInfo[n] =
                new (class {
                  constructor() {
                    this._ranges = [];
                  }
                  getRange(r) {
                    return this._ranges[r];
                  }
                  addRange(r, a) {
                    this._ranges[r] = a;
                  }
                })()),
            s
          );
        }
      })(`${Pe.fontsUrl}/{fontstack}/{range}.pbf`)),
      (this._glyphMosaic = new (class {
        constructor(n, s, r) {
          (this.width = 0),
            (this.height = 0),
            (this._dirties = []),
            (this._glyphData = []),
            (this._currentPage = 0),
            (this._glyphCache = {}),
            (this._textures = []),
            (this._rangePromises = new Map()),
            (this.width = n),
            (this.height = s),
            (this._glyphSource = r),
            (this._binPack = new dt(n - 4, s - 4)),
            this._glyphData.push(new Uint8Array(n * s)),
            this._dirties.push(!0),
            this._textures.push(null),
            this._initDecorationGlyph();
        }
        dispose() {
          this._binPack = null;
          for (const n of this._textures) n && n.dispose();
          (this._textures.length = 0), (this._glyphData.length = 0);
        }
        _initDecorationGlyph() {
          const n = [117, 149, 181, 207, 207, 181, 149, 117],
            s = [];
          for (let a = 0; a < n.length; a++) {
            const h = n[a];
            for (let l = 0; l < 11; l++) s.push(h);
          }
          const r = {
            metrics: { width: 5, height: 2, left: 0, top: 0, advance: 0 },
            bitmap: new Uint8Array(s),
          };
          this._recordGlyph(r);
        }
        async getGlyphItems(n, s, r) {
          const a = this._getGlyphCache(n);
          return (
            await this._fetchRanges(n, s, r),
            s.map((h) => this._getMosaicItem(a, n, h))
          );
        }
        bind(n, s, r, a) {
          const h = this._getTexture(n, r);
          h.setSamplingMode(s),
            this._dirties[r] &&
              (h.setData(this._glyphData[r]), (this._dirties[r] = !1)),
            n.bindTexture(h, a);
        }
        _getGlyphCache(n) {
          return (
            this._glyphCache[n] || (this._glyphCache[n] = {}),
            this._glyphCache[n]
          );
        }
        _getTexture(n, s) {
          return (
            this._textures[s] ||
              (this._textures[s] = new At(
                n,
                {
                  pixelFormat: yt.ALPHA,
                  dataType: Rt.UNSIGNED_BYTE,
                  width: this.width,
                  height: this.height,
                },
                new Uint8Array(this.width * this.height)
              )),
            this._textures[s]
          );
        }
        _invalidate() {
          this._dirties[this._currentPage] = !0;
        }
        async _fetchRanges(n, s, r) {
          const a = (function (l) {
              const u = new Set();
              for (const c of l) u.add(Di(c));
              return u;
            })(s),
            h = [];
          a.forEach((l) => {
            h.push(this._fetchRange(n, l, r));
          }),
            await Promise.all(h);
        }
        async _fetchRange(n, s, r) {
          if (s > 256) return;
          const a = n + s;
          return (function (h, l, u) {
            return (
              h.has(l) ||
                h.set(
                  l,
                  u()
                    .then(() => {
                      h.delete(l);
                    })
                    .catch((c) => {
                      h.delete(l), xe(c);
                    })
                ),
              h.get(l)
            );
          })(this._rangePromises, a, () => this._glyphSource.getRange(n, s, r));
        }
        _getMosaicItem(n, s, r) {
          if (!n[r]) {
            const a = this._glyphSource.getGlyph(s, r);
            if (!a || !a.metrics)
              return ((c) => ({
                rect: new C(0, 0, 0, 0),
                page: 0,
                metrics: { left: 0, width: 0, height: 0, advance: 0, top: 0 },
                code: c,
                sdf: !0,
              }))(r);
            const h = this._recordGlyph(a),
              l = this._currentPage,
              u = a.metrics;
            (n[r] = { rect: h, page: l, metrics: u, code: r, sdf: !0 }),
              this._invalidate();
          }
          return n[r];
        }
        _recordGlyph(n) {
          const s = n.metrics;
          let r;
          if (s.width === 0) r = new C(0, 0, 0, 0);
          else {
            const h = s.width + 6,
              l = s.height + 2 * 3;
            (r = this._binPack.allocate(h, l)),
              r.isEmpty &&
                (this._dirties[this._currentPage] ||
                  (this._glyphData[this._currentPage] = null),
                (this._currentPage = this._glyphData.length),
                this._glyphData.push(new Uint8Array(this.width * this.height)),
                this._dirties.push(!0),
                this._textures.push(null),
                this._initDecorationGlyph(),
                (this._binPack = new dt(this.width - 4, this.height - 4)),
                (r = this._binPack.allocate(h, l)));
            const u = this._glyphData[this._currentPage],
              c = n.bitmap;
            let d, m;
            if (c)
              for (let _ = 0; _ < l; _++) {
                (d = h * _), (m = this.width * (r.y + _) + r.x);
                for (let g = 0; g < h; g++) u[m + g] = c[d + g];
              }
            Bt("esri-glyph-debug") && this._showDebugPage(u);
          }
          return r;
        }
        _showDebugPage(n) {
          const s = document.createElement("canvas"),
            r = s.getContext("2d"),
            a = new ImageData(this.width, this.height),
            h = a.data;
          (s.width = this.width),
            (s.height = this.height),
            (s.style.border = "1px solid black");
          for (let l = 0; l < n.length; ++l)
            (h[4 * l + 0] = n[l]),
              (h[4 * l + 1] = 0),
              (h[4 * l + 2] = 0),
              (h[4 * l + 3] = 255);
          r.putImageData(a, 0, 0), document.body.appendChild(s);
        }
      })(1024, 1024, this._glyphSource)),
      (this._rasterizer = new (class {
        constructor(n) {
          (this._resourceManager = n), (this._rasterizationCanvas = null);
        }
        dispose() {
          this._rasterizationCanvas = null;
        }
        rasterizeJSONResource(n, s, r) {
          if (
            (this._rasterizationCanvas ||
              (this._rasterizationCanvas = document.createElement("canvas")),
            n.type === "simple-fill" || n.type === "esriSFS")
          ) {
            const [p, y, v] = Ke(this._rasterizationCanvas, n.style, s);
            return {
              size: [y, v],
              image: new Uint32Array(p.buffer),
              sdf: !1,
              simplePattern: !0,
              anchorX: 0,
              anchorY: 0,
              rasterizationScale: zt(Math.ceil(s)),
            };
          }
          if (
            n.type === "simple-line" ||
            n.type === "esriSLS" ||
            (n.type === "line" && n.dashTemplate)
          ) {
            let p, y;
            if (n.type === "simple-line" || n.type === "esriSLS")
              switch (((p = je(n.style, n.cap)), n.cap)) {
                case "butt":
                  y = "Butt";
                  break;
                case "square":
                  y = "Square";
                  break;
                default:
                  y = "Round";
              }
            else (p = n.dashTemplate), (y = n.cim.capStyle);
            const [v, f, w] = ti(p, y);
            return {
              size: [f, w],
              image: new Uint32Array(v.buffer),
              sdf: !0,
              simplePattern: !0,
              anchorX: 0,
              anchorY: 0,
            };
          }
          let a,
            h = null,
            l = null,
            u = 1;
          if (
            (n.type === "simple-marker" ||
            n.type === "esriSMS" ||
            n.type === "line-marker"
              ? ((a = ut.fromSimpleMarker(n)), (l = $t(a)))
              : n.cim && n.cim.type === "CIMHatchFill"
              ? ((a = ut.fromCIMHatchFill(n.cim, s)),
                (h = new Zt(
                  a.frame.xmin,
                  -a.frame.ymax,
                  a.frame.xmax - a.frame.xmin,
                  a.frame.ymax - a.frame.ymin
                )),
                (u = s))
              : n.cim.markerPlacement &&
                n.cim.markerPlacement.type === "CIMMarkerPlacementInsidePolygon"
              ? ((a = ut.fromCIMInsidePolygon(n.cim)),
                (h = new Zt(
                  a.frame.xmin,
                  -a.frame.ymax,
                  a.frame.xmax - a.frame.xmin,
                  a.frame.ymax - a.frame.ymin
                )))
              : ((a = n.cim), n.avoidSDFRasterization || (l = $t(a))),
            l && !r)
          ) {
            const [p, y, v] = Ye(l);
            return p
              ? {
                  size: [y, v],
                  image: new Uint32Array(p.buffer),
                  sdf: !0,
                  simplePattern: !0,
                  anchorX: 0,
                  anchorY: 0,
                  rasterizationScale: u,
                }
              : null;
          }
          const [c, d, m, _, g] = ut.rasterize(
            this._rasterizationCanvas,
            a,
            h,
            this._resourceManager,
            !r
          );
          return c
            ? {
                size: [d, m],
                image: new Uint32Array(c.buffer),
                sdf: !1,
                simplePattern: !1,
                anchorX: _,
                anchorY: g,
              }
            : null;
        }
        rasterizeImageResource(n, s, r, a) {
          this._rasterizationCanvas ||
            (this._rasterizationCanvas = document.createElement("canvas")),
            (this._rasterizationCanvas.width = n),
            (this._rasterizationCanvas.height = s);
          const h = this._rasterizationCanvas.getContext("2d");
          r instanceof ImageData
            ? h.putImageData(r, 0, 0)
            : (r.setAttribute("width", `${n}px`),
              r.setAttribute("height", `${s}px`),
              h.drawImage(r, 0, 0, n, s));
          const l = h.getImageData(0, 0, n, s),
            u = new Uint8Array(l.data);
          if (a) {
            for (const p of a)
              if (
                p &&
                p.oldColor &&
                p.oldColor.length === 4 &&
                p.newColor &&
                p.newColor.length === 4
              ) {
                const [y, v, f, w] = p.oldColor,
                  [b, F, D, I] = p.newColor;
                if (y === b && v === F && f === D && w === I) continue;
                for (let x = 0; x < u.length; x += 4)
                  y === u[x] &&
                    v === u[x + 1] &&
                    f === u[x + 2] &&
                    w === u[x + 3] &&
                    ((u[x] = b),
                    (u[x + 1] = F),
                    (u[x + 2] = D),
                    (u[x + 3] = I));
              }
          }
          let c;
          for (let p = 0; p < u.length; p += 4)
            (c = u[p + 3] / 255),
              (u[p] = u[p] * c),
              (u[p + 1] = u[p + 1] * c),
              (u[p + 2] = u[p + 2] * c);
          let d = u,
            m = n,
            _ = s;
          const g = 512;
          if (m >= g || _ >= g) {
            const p = m / _;
            p > 1
              ? ((m = g), (_ = Math.round(g / p)))
              : ((_ = g), (m = Math.round(g * p))),
              (d = new Uint8Array(4 * m * _));
            const y = new Uint8ClampedArray(d.buffer);
            He(u, n, s, y, m, _, !1);
          }
          return {
            size: [m, _],
            image: new Uint32Array(d.buffer),
            sdf: !1,
            simplePattern: !1,
            anchorX: 0,
            anchorY: 0,
          };
        }
      })(t));
  }
  dispose() {
    this._spriteMosaic.dispose(),
      this._glyphMosaic.dispose(),
      this._rasterizer.dispose(),
      this._sdfConverter.dispose(),
      (this._spriteMosaic = null),
      (this._glyphMosaic = null),
      (this._sdfConverter = null),
      this._hashToBindingIndex.clear(),
      (this._hashToBindingIndex = null),
      (this._bindingInfos = null),
      this._ongoingRasterizations.clear(),
      (this._ongoingRasterizations = null),
      this._imageRequestQueue.clear(),
      (this._imageRequestQueue = null);
  }
  get sprites() {
    return this._spriteMosaic;
  }
  get glyphs() {
    return this._glyphMosaic;
  }
  async rasterizeItem(e, t, o, n) {
    if (rt(e))
      return (
        Tt("mapview-null-resource", "Unable to rasterize null resource"), null
      );
    switch (e.type) {
      case "text":
      case "esriTS": {
        const s = await this._rasterizeText(e, o, n);
        return (
          s.forEach((r) => this._setTextureBinding(lt.GLYPH, r)),
          { glyphMosaicItems: s }
        );
      }
      default: {
        if (ni(e))
          return (
            Tt(
              "mapview-invalid-type",
              `MapView does not support symbol type: ${e.type}`,
              e
            ),
            null
          );
        const s = await this._rasterizeSpriteSymbol(e, t, n);
        return (
          fi(s) && s && this._setTextureBinding(lt.SPRITE, s),
          { spriteMosaicItem: s }
        );
      }
    }
  }
  bindTextures(e, t, o, n = !1) {
    if (o.textureBinding === 0) return;
    const s = this._bindingInfos[o.textureBinding - 1],
      r = s.page,
      a = n ? Ft.LINEAR_MIPMAP_LINEAR : Ft.LINEAR;
    switch (s.mosaicType) {
      case lt.SPRITE: {
        const h = this.sprites.getWidth(r),
          l = this.sprites.getHeight(r),
          u = at(ee, h, l);
        return (
          this._spriteMosaic.bind(e, a, r, Ht),
          t.setUniform1i("u_texture", Ht),
          void t.setUniform2fv("u_mosaicSize", u)
        );
      }
      case lt.GLYPH: {
        const h = this.glyphs.width,
          l = this.glyphs.height,
          u = at(ee, h, l);
        return (
          this._glyphMosaic.bind(e, a, r, jt),
          t.setUniform1i("u_texture", jt),
          void t.setUniform2fv("u_mosaicSize", u)
        );
      }
      default:
        _e.error(
          "mapview-texture-manager",
          `Cannot handle unknown type ${s.mosaicType}`
        );
    }
  }
  _hashMosaic(e, t) {
    return 1 | (e << 1) | ((t.sdf ? 1 : 0) << 2) | (t.page << 3);
  }
  _setTextureBinding(e, t) {
    const o = this._hashMosaic(e, t);
    if (!this._hashToBindingIndex.has(o)) {
      const n = Lt.fromMosaic(e, t),
        s = this._bindingInfos.length + 1;
      this._hashToBindingIndex.set(o, s), this._bindingInfos.push(n);
    }
    t.textureBinding = this._hashToBindingIndex.get(o);
  }
  async _rasterizeText(e, t, o) {
    let n, s;
    if ("cim" in e) {
      const h = e;
      (n = h.fontName), (s = h.text);
    } else {
      const h = e;
      (n = Qe(h.font)), (s = h.text);
    }
    const r = this._invalidFontsMap.has(n),
      a = t || ri(Je(s)[0]);
    try {
      return await this._glyphMosaic.getGlyphItems(r ? ie : n, a, o);
    } catch {
      return (
        Tt(
          "mapview-invalid-resource",
          `Couldn't find font ${n}. Falling back to Arial Unicode MS Regular`
        ),
        this._invalidFontsMap.set(n, !0),
        this._glyphMosaic.getGlyphItems(ie, a, o)
      );
    }
  }
  async _rasterizeSpriteSymbol(e, t, o) {
    if (ai(e)) return;
    const n = (function (a) {
      switch (a.type) {
        case "esriSMS":
          return `${a.style}.${a.path}`;
        case "esriSLS":
          return `${a.style}.${a.cap}`;
        case "esriSFS":
          return `${a.style}`;
        case "esriPFS":
        case "esriPMS":
          return a.imageData
            ? `${a.imageData}${a.width}${a.height}`
            : `${a.url}${a.width}${a.height}`;
        default:
          return "mosaicHash" in a ? a.mosaicHash : JSON.stringify(a);
      }
    })(e);
    if (this._spriteMosaic.has(n)) return this._spriteMosaic.getSpriteItem(n);
    if (Yt(e) || (oi(e) && !hi(e))) return this._handleAsyncResource(n, e, o);
    const s = ei,
      r = this._rasterizer.rasterizeJSONResource(e, s);
    if (r) {
      const {
        size: a,
        image: h,
        sdf: l,
        simplePattern: u,
        rasterizationScale: c,
      } = r;
      return this._addItemToMosaic(
        n,
        a,
        { type: "static", data: h },
        ct(e),
        l,
        u,
        c
      );
    }
    return new q("TextureManager", "unrecognized or null rasterized image");
  }
  async _handleAsyncResource(e, t, o) {
    if (this._ongoingRasterizations.has(e))
      return this._ongoingRasterizations.get(e);
    let n;
    (n = Yt(t) ? this._handleSVG(t, e, o) : this._handleImage(t, e, o)),
      this._ongoingRasterizations.set(e, n);
    try {
      await n, this._ongoingRasterizations.delete(e);
    } catch {
      this._ongoingRasterizations.delete(e);
    }
    return n;
  }
  async _handleSVG(e, t, o) {
    const n = [126, 126],
      s = await this._sdfConverter.draw(e.path, o);
    return this._addItemToMosaic(
      t,
      n,
      { type: "static", data: new Uint32Array(s.buffer) },
      !1,
      !0,
      !0
    );
  }
  async _handleGIFOrPNG(e, t, o) {
    const n = Wt(e);
    await this.resourceManager.fetchResource(n, o);
    let s = this.resourceManager.getResource(n);
    if (rt(s))
      return new q(
        "mapview-invalid-resource",
        `Could not fetch requested resource at ${n}.`
      );
    let r = s.width,
      a = s.height;
    if (s instanceof HTMLImageElement) {
      e.type === "esriPMS" &&
        ((r = Math.round(se(s.width, Xt(e)))),
        (a = Math.round(s.height * (r / s.width))));
      const c = "cim" in e ? e.cim.colorSubstitutions : void 0,
        {
          size: d,
          sdf: m,
          image: _,
        } = this._rasterizer.rasterizeImageResource(r, a, s, c);
      return this._addItemToMosaic(
        t,
        d,
        { type: "static", data: _ },
        ct(e),
        m,
        !1
      );
    }
    this._allowNonPowerOfTwo ||
      ((r = zt(s.width + 2 * P) - 2 * P), (a = zt(s.height + 2 * P) - 2 * P)),
      (r === s.width && a === s.height) ||
        (s = (function (c, d, m) {
          (kt.width = d), (kt.height = m);
          const _ = [],
            g = c.frameDurations.length;
          for (let p = 0; p < g; p++) {
            const y = c.getFrame(p);
            mt.clearRect(0, 0, d, m),
              y instanceof ImageData
                ? mt.drawImage(gi(y), 0, 0, d, m)
                : mt.drawImage(y, 0, 0, d, m),
              _.push(mt.getImageData(0, 0, d, m));
          }
          return {
            width: d,
            height: m,
            frameDurations: c.frameDurations,
            getFrame: (p) => _[p],
          };
        })(s, r, a));
    const h = e.animatedSymbolProperties || {},
      l = e.objectId,
      u = new (class {
        constructor(c, d, m, _) {
          (this._animation = c),
            (this._frameData = null),
            (this.frameCount = this._animation.frameDurations.length),
            (this.width = this._animation.width),
            (this.height = this._animation.height),
            (this._playHandle = (function (g, p, y, v) {
              const f = p.playAnimation == null || p.playAnimation,
                w = Ri(g, p, y, v);
              let b,
                F = w.timeToFrame;
              return (
                (function D() {
                  b = f
                    ? setTimeout(() => {
                        w.nextFrame(), (F = w.timeToFrame), D();
                      }, F)
                    : void 0;
                })(),
                {
                  remove: () => {
                    f && clearTimeout(b);
                  },
                }
              );
            })(this._animation, m, _, (g) => {
              (this._frameData = g), d.requestRender();
            }));
        }
        destroy() {
          this._playHandle.remove();
        }
        bindFrame(c, d, m) {
          c.bindTexture(d, m),
            rt(this._frameData) ||
              (d.updateData(
                0,
                P,
                P,
                this._frameData.width,
                this._frameData.height,
                this._frameData
              ),
              (this._frameData = null));
        }
      })(s, this._requestRender, h, l);
    return this._addItemToMosaic(
      t,
      [u.width, u.height],
      { type: "animated", data: u },
      ct(e),
      !1,
      !1
    );
  }
  async _handleImage(e, t, o) {
    if (ui(e) || li(e)) return this._handleGIFOrPNG(e, t, o);
    const n = Wt(e);
    try {
      let s;
      const r = this.resourceManager.getResource(n);
      if (Z(r) && r instanceof HTMLImageElement) s = r;
      else {
        const { data: m } = await this._imageRequestQueue.push(n, { ...o });
        s = m;
      }
      if (ci(n)) {
        if ("width" in e && "height" in e)
          (s.width = J(e.width)), (s.height = J(e.height));
        else if ("cim" in e) {
          const m = e.cim;
          (s.width = J(m.width ?? m.scaleX * m.size)), (s.height = J(m.size));
        }
      }
      if (!s.width || !s.height) return null;
      let a = s.width,
        h = s.height;
      e.type === "esriPMS" &&
        ((a = Math.round(se(s.width, Xt(e)))),
        (h = Math.round(s.height * (a / s.width))));
      const l = "cim" in e ? e.cim.colorSubstitutions : void 0,
        {
          size: u,
          sdf: c,
          image: d,
        } = this._rasterizer.rasterizeImageResource(a, h, s, l);
      return this._addItemToMosaic(
        t,
        u,
        { type: "static", data: d },
        ct(e),
        c,
        !1
      );
    } catch (s) {
      if (!Nt(s))
        return new q(
          "mapview-invalid-resource",
          `Could not fetch requested resource at ${n}. ${s.message}`
        );
    }
  }
  _addItemToMosaic(e, t, o, n, s, r, a) {
    return this._spriteMosaic.addSpriteItem(e, t, o, n, s, r, a);
  }
}
const gs = {
    shaders: {
      vertexShader: R("stencil/stencil.vert"),
      fragmentShader: R("stencil/stencil.frag"),
    },
    attributes: new Map([["a_pos", 0]]),
  },
  ne = (i) => `#define ${((e) => e.replace("-", "_").toUpperCase())(i)}
`;
function re(i) {
  return {
    attributes: new Map([
      ["a_pos", 0],
      ["a_tex", 1],
    ]),
    shaders: {
      vertexShader: ne(i) + R("blend/blend.vert"),
      fragmentShader: ne(i) + R("blend/blend.frag"),
    },
  };
}
const ae = ue.getLogger(
  "esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect"
);
let fs = class {
  constructor() {
    this._size = [0, 0];
  }
  dispose(i) {
    (this._backBufferTexture = Ot(this._backBufferTexture)),
      (this._quad = Ot(this._quad));
  }
  draw(i, e, t, o, n) {
    const { context: s, drawPhase: r } = i;
    if ((this._setupShader(s), o && o !== "normal" && r !== di.LABEL))
      return void this._drawBlended(i, e, t, o, n);
    const a = re("normal"),
      h = s.programCache.acquire(
        a.shaders.vertexShader,
        a.shaders.fragmentShader,
        a.attributes
      );
    if (!h)
      return void ae.error(
        new q(
          "mapview-BlendEffect",
          'Error creating shader program for blend mode "normal"'
        )
      );
    s.useProgram(h),
      e.setSamplingMode(t),
      s.bindTexture(e, 0),
      h.setUniform1i("u_layerTexture", 0),
      h.setUniform1f("u_opacity", n),
      s.setBlendingEnabled(!0),
      s.setBlendFunction(H.ONE, H.ONE_MINUS_SRC_ALPHA);
    const l = this._quad;
    l.draw(), l.unbind(), h.dispose();
  }
  _drawBlended(i, e, t, o, n) {
    const { context: s, state: r, pixelRatio: a, inFadeTransition: h } = i,
      { size: l } = r,
      u = s.getBoundFramebufferObject();
    let c, d;
    if (Z(u)) {
      const y = u.descriptor;
      (c = y.width), (d = y.height);
    } else (c = Math.round(a * l[0])), (d = Math.round(a * l[1]));
    this._createOrResizeTexture(i, c, d);
    const m = this._backBufferTexture;
    u.copyToTexture(0, 0, c, d, 0, 0, m),
      s.setStencilTestEnabled(!1),
      s.setStencilWriteMask(0),
      s.setBlendingEnabled(!0),
      s.setDepthTestEnabled(!1),
      s.setDepthWriteEnabled(!1);
    const _ = re(o),
      g = s.programCache.acquire(
        _.shaders.vertexShader,
        _.shaders.fragmentShader,
        _.attributes
      );
    if (!g)
      return void ae.error(
        new q(
          "mapview-BlendEffect",
          `Error creating shader program for blend mode ${o}`
        )
      );
    s.useProgram(g),
      m.setSamplingMode(t),
      s.bindTexture(m, 0),
      g.setUniform1i("u_backbufferTexture", 0),
      e.setSamplingMode(t),
      s.bindTexture(e, 1),
      g.setUniform1i("u_layerTexture", 1),
      g.setUniform1f("u_opacity", n),
      g.setUniform1f("u_inFadeOpacity", h ? 1 : 0),
      s.setBlendFunction(H.ONE, H.ZERO);
    const p = this._quad;
    p.draw(),
      p.unbind(),
      g.dispose(),
      s.setBlendFunction(H.ONE, H.ONE_MINUS_SRC_ALPHA);
  }
  _setupShader(i) {
    this._quad || (this._quad = new be(i, [-1, -1, 1, -1, -1, 1, 1, 1]));
  }
  _createOrResizeTexture(i, e, t) {
    const { context: o } = i;
    (this._backBufferTexture !== null &&
      e === this._size[0] &&
      t === this._size[1]) ||
      (this._backBufferTexture
        ? this._backBufferTexture.resize(e, t)
        : (this._backBufferTexture = new At(o, {
            target: mi.TEXTURE_2D,
            pixelFormat: yt.RGBA,
            internalFormat: yt.RGBA,
            dataType: Rt.UNSIGNED_BYTE,
            wrapMode: pi.CLAMP_TO_EDGE,
            samplingMode: Ft.LINEAR,
            flipped: !1,
            width: e,
            height: t,
          })),
      (this._size[0] = e),
      (this._size[1] = t));
  }
};
const ys = {
    shaders: {
      vertexShader: R("highlight/textured.vert"),
      fragmentShader: R("highlight/highlight.frag"),
    },
    attributes: new Map([
      ["a_position", 0],
      ["a_texcoord", 1],
    ]),
  },
  vs = {
    shaders: {
      vertexShader: R("highlight/textured.vert"),
      fragmentShader: R("highlight/blur.frag"),
    },
    attributes: new Map([
      ["a_position", 0],
      ["a_texcoord", 1],
    ]),
  },
  E = Bt("esri-2d-profiler");
let ws = class {
    constructor(i, e) {
      if (
        ((this._events = new Ce()),
        (this._entries = new Map()),
        (this._timings = new yi(10)),
        (this._currentContainer = null),
        (this._currentPass = null),
        (this._currentBrush = null),
        (this._currentSummary = null),
        !E)
      )
        return;
      (this._ext = vi(i.gl, {})), (this._debugOutput = e);
      const t = i.gl;
      if (this.enableCommandLogging) {
        for (const o in t)
          if (typeof t[o] == "function") {
            const n = t[o],
              s = o.includes("draw");
            t[o] = (...r) => (
              this._events.emit("command", {
                container: this._currentContainer,
                pass: this._currentPass,
                brush: this._currentBrush,
                method: o,
                args: r,
                isDrawCommand: s,
              }),
              this._currentSummary &&
                (this._currentSummary.commands++,
                s && this._currentSummary.drawCommands++),
              n.apply(t, r)
            );
          }
      }
    }
    get enableCommandLogging() {
      return !(typeof E == "object" && E.disableCommands);
    }
    recordContainerStart(i) {
      E && (this._currentContainer = i);
    }
    recordContainerEnd() {
      E && (this._currentContainer = null);
    }
    recordPassStart(i) {
      E && ((this._currentPass = i), this._initSummary());
    }
    recordPassEnd() {
      E && ((this._currentPass = null), this._emitSummary());
    }
    recordBrushStart(i) {
      E && (this._currentBrush = i);
    }
    recordBrushEnd() {
      E && (this._currentBrush = null);
    }
    recordStart(i) {
      if (E && Z(this._ext)) {
        if (this._entries.has(i)) {
          const t = this._entries.get(i),
            o = this._ext.resultAvailable(t.query),
            n = this._ext.disjoint();
          if (o && !n) {
            const s = this._ext.getResult(t.query) / 1e6;
            let r = 0;
            if (Z(this._timings.enqueue(s))) {
              const l = this._timings.entries,
                u = l.length;
              let c = 0;
              for (const d of l) c += d;
              r = c / u;
            }
            const a = s.toFixed(2),
              h = r ? r.toFixed(2) : "--";
            this.enableCommandLogging,
              (this._debugOutput.innerHTML = `${a} (${h})`);
          }
          for (const s of t.handles) s.remove();
          this._ext.deleteQuery(t.query), this._entries.delete(i);
        }
        const e = {
          name: i,
          query: this._ext.createQuery(),
          commands: [],
          commandsLen: 0,
          drawCommands: 0,
          summaries: [],
          handles: [],
        };
        this.enableCommandLogging &&
          (e.handles.push(
            this._events.on("command", (t) => {
              e.commandsLen++,
                e.commands.push(t),
                t.isDrawCommand && e.drawCommands++;
            })
          ),
          e.handles.push(
            this._events.on("summary", (t) => {
              e.summaries.push(t);
            })
          )),
          this._ext.beginTimeElapsed(e.query),
          this._entries.set(i, e);
      }
    }
    recordEnd(i) {
      E && Z(this._ext) && this._entries.has(i) && this._ext.endTimeElapsed();
    }
    _initSummary() {
      this.enableCommandLogging &&
        (this._currentSummary = {
          container: this._currentContainer,
          pass: this._currentPass,
          drawCommands: 0,
          commands: 0,
        });
    }
    _emitSummary() {
      this.enableCommandLogging &&
        this._currentSummary &&
        this._events.emit("summary", this._currentSummary);
    }
  },
  Fi = class {
    constructor(i, e, t) {
      (this._debugMap = new Map()),
        (this._width = i * t),
        (this._height = e * t),
        (this._pixelRatio = t);
      const o = Math.ceil(this._width / 1),
        n = Math.ceil(this._height / 1);
      (this._cols = o), (this._rows = n), (this._cells = wi.create(o * n));
    }
    insertMetrics(i) {
      const e = this._hasCollision(i);
      return e === 0 && this._markMetrics(i), e;
    }
    getCellId(i, e) {
      return i + e * this._cols;
    }
    has(i) {
      return this._cells.has(i);
    }
    hasRange(i, e) {
      return this._cells.hasRange(i, e);
    }
    set(i) {
      this._cells.set(i);
    }
    setRange(i, e) {
      this._cells.setRange(i, e);
    }
    _collide(i, e, t, o) {
      const n = i - t / 2,
        s = e - o / 2,
        r = n + t,
        a = s + o;
      if (r < 0 || a < 0 || n > this._width || s > this._height) return 1;
      const h = L(Math.floor(n / 1), 0, this._cols),
        l = L(Math.floor(s / 1), 0, this._rows),
        u = L(Math.ceil(r / 1), 0, this._cols),
        c = L(Math.ceil(a / 1), 0, this._rows);
      for (let d = l; d <= c; d++)
        for (let m = h; m <= u; m++) {
          const _ = this.getCellId(m, d);
          if (this.has(_)) return 2;
        }
      return 0;
    }
    _mark(i, e, t, o, n) {
      const s = i - t / 2,
        r = e - o / 2,
        a = s + t,
        h = r + o,
        l = L(Math.floor(s / 1), 0, this._cols),
        u = L(Math.floor(r / 1), 0, this._rows),
        c = L(Math.ceil(a / 1), 0, this._cols),
        d = L(Math.ceil(h / 1), 0, this._rows);
      for (let m = u; m <= d; m++)
        for (let _ = l; _ <= c; _++) {
          const g = this.getCellId(_, m);
          this._debugMap.set(g, n), this.set(g);
        }
      return !1;
    }
    _hasCollision(i) {
      const e = i.id;
      let t = 0,
        o = 0;
      i.save();
      do {
        const n = i.boundsCount;
        t += n;
        for (let s = 0; s < n; s++) {
          const r = i.boundsComputedAnchorX(s),
            a = i.boundsComputedAnchorY(s),
            h = (i.boundsWidth(s) + 2) * this._pixelRatio,
            l = (i.boundsHeight(s) + 2) * this._pixelRatio;
          switch (this._collide(r, a, h, l)) {
            case 2:
              return 2;
            case 1:
              o++;
          }
        }
      } while (i.peekId() === e && i.next());
      return i.restore(), t === o ? 1 : 0;
    }
    _markMetrics(i) {
      const e = i.id;
      i.save();
      do {
        const t = i.boundsCount;
        for (let o = 0; o < t; o++) {
          const n = i.boundsComputedAnchorX(o),
            s = i.boundsComputedAnchorY(o),
            r = (i.boundsWidth(o) + 2) * this._pixelRatio,
            a = (i.boundsHeight(o) + 2) * this._pixelRatio;
          this._mark(n, s, r, a, i.id);
        }
      } while (i.peekId() === e && i.next());
      i.restore();
    }
  };
const Ai = Math.PI;
function fe(i, e) {
  switch (e.transformationType) {
    case O.Additive:
      return (function (t, o) {
        return t + (k(o.minSize, t) || o.minDataValue);
      })(i, e);
    case O.Constant:
      return (function (t, o) {
        const n = t.stops;
        let s = n && n.length && n[0].size;
        return s == null && (s = t.minSize), k(s, o);
      })(e, i);
    case O.ClampedLinear:
      return (function (t, o) {
        const n = o.minDataValue,
          s = o.maxDataValue,
          r = (t - n) / (s - n),
          a = k(o.minSize, t),
          h = k(o.maxSize, t);
        return t <= n ? a : t >= s ? h : a + r * (h - a);
      })(i, e);
    case O.Proportional:
      return (function (t, o) {
        const n = t / o.minDataValue,
          s = k(o.minSize, t),
          r = k(o.maxSize, t);
        let a = null;
        return (a = n * s), L(a, s, r);
      })(i, e);
    case O.Stops:
      return (function (t, o) {
        const [n, s, r] = (function (a, h) {
          if (!h) return;
          let l = 0,
            u = h.length - 1;
          return (
            h.some((c, d) => (a < c ? ((u = d), !0) : ((l = d), !1))),
            [l, u, (a - h[l]) / (h[u] - h[l])]
          );
        })(t, o.cache.ipData);
        if (n === s) return k(o.stops[n].size, t);
        {
          const a = k(o.stops[n].size, t);
          return a + (k(o.stops[s].size, t) - a) * r;
        }
      })(i, e);
    case O.RealWorldSize:
      return (function (t, o) {
        const n = Re[o.valueUnit],
          s = k(o.minSize, t),
          r = k(o.maxSize, t),
          { valueRepresentation: a } = o;
        let h = null;
        return (
          (h =
            a === "area"
              ? (2 * Math.sqrt(t / Ai)) / n
              : a === "radius" || a === "distance"
              ? (2 * t) / n
              : t / n),
          L(h, s, r)
        );
      })(i, e);
    case O.Identity:
      return i;
    case O.Unknown:
      return null;
  }
}
function k(i, e) {
  return typeof i == "number" ? i : fe(e, i);
}
const pt = 255;
function W(i, e) {
  const t = [];
  i.forEachTile((o) => t.push(o)),
    t.sort((o, n) => o.instanceId - n.instanceId),
    t.forEach((o) => {
      Z(o.labelMetrics) && o.isReady && e(o, o.labelMetrics.getCursor());
    });
}
function Ei(i) {
  return (e) => J(fe(e, i));
}
function ki(i, e) {
  var h;
  if (
    !(function (l) {
      return (
        l.layer &&
        (l.layer.type === "feature" ||
          l.layer.type === "csv" ||
          l.layer.type === "geojson" ||
          l.layer.type === "ogc-feature" ||
          l.layer.type === "stream" ||
          l.layer.type === "subtype-group" ||
          l.layer.type === "wfs")
      );
    })(e)
  )
    return;
  const t =
      e.layer.type === "subtype-group" ? e.layer.sublayers.items : [e.layer],
    o = e.layer.geometryType,
    n = !(function (l) {
      for (const u of l) {
        const c =
            "featureReduction" in u &&
            u.featureReduction &&
            "labelingInfo" in u.featureReduction
              ? u.featureReduction
              : void 0,
          d = [
            ...(u.labelingInfo || []),
            ...((c == null ? void 0 : c.labelingInfo) || []),
          ];
        if (
          u.labelsVisible &&
          d.length &&
          d.some((m) => m.deconflictionStrategy === "none")
        )
          return !0;
      }
      return !1;
    })(t),
    s = {};
  if (e.layer.type !== "subtype-group") {
    if (((h = e.tileRenderer) == null ? void 0 : h.type) === "heatmap") return;
    const l = (function (u) {
      const c = u != null && "visualVariables" in u && u.visualVariables;
      if (!c) return null;
      for (const d of c) if (d.type === "size") return Ei(d);
      return null;
    })(e.layer.renderer);
    s[0] = l;
  }
  const r = e.tileRenderer;
  if (rt(r)) return;
  const a = e.layer.visible && !e.suspended;
  i.push({
    tileRenderer: r,
    vvEvaluators: s,
    deconflictionEnabled: n,
    geometryType: o,
    visible: a,
  });
}
let $ = class extends Fe(tt) {
  constructor(i) {
    super(i),
      (this._applyVisibilityPassThrottled = Ae(
        this._applyVisibilityPass,
        32,
        this
      )),
      (this.lastUpdateId = -1),
      (this.updateRequested = !1),
      (this.view = null);
  }
  initialize() {
    this.collisionEngine = new (class {
      run(i, e, t) {
        const o = [];
        for (let n = i.length - 1; n >= 0; n--) ki(o, i[n]);
        this._transformMetrics(o), this._runCollision(o, e, t);
      }
      _runCollision(i, e, t) {
        const [o, n] = e.state.size,
          s = new Fi(o, n, e.pixelRatio);
        for (const {
          tileRenderer: r,
          deconflictionEnabled: a,
          visible: h,
        } of i) {
          const l = r.featuresView.attributeView;
          a
            ? h
              ? (this._prepare(r),
                this._collideVisible(s, r, t),
                this._collideInvisible(s, r))
              : W(r, (u, c) => {
                  for (; c.nextId(); ) l.setLabelMinZoom(c.id, pt);
                })
            : W(r, (u, c) => {
                for (; c.nextId(); )
                  l.setLabelMinZoom(c.id, 0), h && s.insertMetrics(c);
              });
        }
      }
      _isFiltered(i, e, t) {
        const o = e.getFilterFlags(i),
          n = !t.hasFilter || !!(o & ii),
          s =
            rt(t.featureEffect) ||
            t.featureEffect.excludedLabelsVisible ||
            !!(o & si);
        return !(n && s);
      }
      _prepare(i) {
        const e = i.featuresView.attributeView,
          t = new Set();
        W(i, (o, n) => {
          for (; n.nextId(); )
            t.has(n.id) ||
              (t.add(n.id),
              this._isFiltered(n.id, e, i.layerView)
                ? e.setLabelMinZoom(n.id, 254)
                : e.getLabelMinZoom(n.id) !== 0
                ? e.setLabelMinZoom(n.id, pt)
                : e.setLabelMinZoom(n.id, 0));
        });
      }
      _collideVisible(i, e, t) {
        const o = e.featuresView.attributeView,
          n = new Set();
        W(e, (s, r) => {
          for (; r.nextId(); )
            if (!n.has(r.id))
              if (s.key.level === t) {
                if (o.getLabelMinZoom(r.id) === 0)
                  switch (i.insertMetrics(r)) {
                    case 1:
                      break;
                    case 2:
                      o.setLabelMinZoom(r.id, 254), n.add(r.id);
                      break;
                    case 0:
                      o.setLabelMinZoom(r.id, 0), n.add(r.id);
                  }
              } else o.setLabelMinZoom(r.id, 254);
        });
      }
      _collideInvisible(i, e) {
        const t = e.featuresView.attributeView,
          o = new Set();
        W(e, (n, s) => {
          for (; s.nextId(); )
            if (!o.has(s.id) && t.getLabelMinZoom(s.id) === pt)
              switch (i.insertMetrics(s)) {
                case 1:
                  break;
                case 2:
                  t.setLabelMinZoom(s.id, pt), o.add(s.id);
                  break;
                case 0:
                  t.setLabelMinZoom(s.id, 0), o.add(s.id);
              }
        });
      }
      _transformMetrics(i) {
        for (const { tileRenderer: e, geometryType: t, vvEvaluators: o } of i)
          W(e, (n, s) => {
            const r = e.featuresView.attributeView,
              a = n.transforms.labelMat2d;
            (a[4] = Math.round(a[4])), (a[5] = Math.round(a[5]));
            const h = t === "polyline";
            for (; s.next(); ) {
              const l = s.boundsCount,
                u = s.anchorX,
                c = s.anchorY;
              let d = s.size;
              const m = o[0];
              if (Z(m)) {
                const p = m(r.getVVSize(s.id));
                d = isNaN(p) || p == null || p === 1 / 0 ? d : p;
              }
              const _ = s.directionX * (d / 2),
                g = s.directionY * (d / 2);
              for (let p = 0; p < l; p++) {
                let y = u,
                  v = s.anchorY;
                if (h) {
                  let f = y + s.boundsX(p) + _,
                    w = v + s.boundsY(p) + g;
                  (f = a[0] * f + a[2] * w + a[4]),
                    (w = a[1] * f + a[3] * w + a[5]),
                    s.setBoundsComputedAnchorX(p, Math.floor(f)),
                    s.setBoundsComputedAnchorY(p, Math.floor(w));
                } else {
                  (y = a[0] * u + a[2] * c + a[4]),
                    (v = a[1] * u + a[3] * c + a[5]);
                  const f = y + s.boundsX(p) + _,
                    w = v + s.boundsY(p) + g;
                  s.setBoundsComputedAnchorX(p, f),
                    s.setBoundsComputedAnchorY(p, w);
                }
              }
            }
          });
      }
    })();
  }
  destroy() {
    (this.collisionEngine = null),
      (this._applyVisibilityPassThrottled = Ee(
        this._applyVisibilityPassThrottled
      ));
  }
  get updating() {
    return Bt("esri-2d-log-updating"), this.updateRequested;
  }
  update(i) {
    this._applyVisibilityPassThrottled(i);
  }
  viewChange() {
    this.requestUpdate();
  }
  requestUpdate() {
    var i;
    this.updateRequested ||
      ((this.updateRequested = !0),
      (i = this.view) == null || i.requestUpdate());
  }
  processUpdate(i) {
    this._set("updateParameters", i),
      this.updateRequested && ((this.updateRequested = !1), this.update(i));
  }
  _applyVisibilityPass(i) {
    const e = this.view;
    if (e)
      try {
        const t = e.featuresTilingScheme.getClosestInfoForScale(
          i.state.scale
        ).level;
        this.collisionEngine.run(e.allLayerViews.items, i, t);
      } catch {}
  }
};
M([T()], $.prototype, "updateRequested", void 0),
  M([T({ readOnly: !0 })], $.prototype, "updateParameters", void 0),
  M([T()], $.prototype, "updating", null),
  M([T()], $.prototype, "view", void 0),
  ($ = M([K("esri.views.2d.layers.labels.LabelManager")], $));
const bs = $,
  _t = "esri-zoom-box",
  gt = {
    container: `${_t}__container`,
    overlay: `${_t}__overlay`,
    background: `${_t}__overlay-background`,
    box: `${_t}__outline`,
  },
  oe = "Shift",
  Bi = "Ctrl";
let st = class extends tt {
  constructor(i) {
    super(i),
      (this._container = null),
      (this._overlay = null),
      (this._backgroundShape = null),
      (this._boxShape = null),
      (this._box = { x: 0, y: 0, width: 0, height: 0 }),
      (this._rafId = null),
      (this._handles = null),
      (this._redraw = this._redraw.bind(this));
  }
  destroy() {
    this.view = null;
  }
  set view(i) {
    this._handles &&
      this._handles.forEach((e) => {
        e.remove();
      }),
      (this._handles = null),
      this._destroyOverlay(),
      this._set("view", i),
      i &&
        (i.on("drag", [oe], (e) => this._handleDrag(e, 1), Gt.INTERNAL),
        i.on("drag", [oe, Bi], (e) => this._handleDrag(e, -1), Gt.INTERNAL));
  }
  _start() {
    this._createContainer(), this._createOverlay(), this.navigation.begin();
  }
  _update(i, e, t, o) {
    (this._box.x = i),
      (this._box.y = e),
      (this._box.width = t),
      (this._box.height = o),
      this._rafId || (this._rafId = requestAnimationFrame(this._redraw));
  }
  _end(i, e, t, o, n) {
    const s = this.view,
      r = s.toMap(ke(i + 0.5 * t, e + 0.5 * o));
    let a = Math.max(t / s.width, o / s.height);
    n === -1 && (a = 1 / a),
      this._destroyOverlay(),
      this.navigation.end(),
      s.goTo({ center: r, scale: s.scale * a });
  }
  _updateBox(i, e, t, o) {
    const n = this._boxShape;
    n.setAttributeNS(null, "x", "" + i),
      n.setAttributeNS(null, "y", "" + e),
      n.setAttributeNS(null, "width", "" + t),
      n.setAttributeNS(null, "height", "" + o),
      n.setAttributeNS(null, "class", gt.box);
  }
  _updateBackground(i, e, t, o) {
    this._backgroundShape.setAttributeNS(
      null,
      "d",
      this._toSVGPath(i, e, t, o, this.view.width, this.view.height)
    );
  }
  _createContainer() {
    const i = document.createElement("div");
    (i.className = gt.container),
      this.view.root.appendChild(i),
      (this._container = i);
  }
  _createOverlay() {
    const i = this.view.width,
      e = this.view.height,
      t = document.createElementNS("http://www.w3.org/2000/svg", "path");
    t.setAttributeNS(
      null,
      "d",
      "M 0 0 L " + i + " 0 L " + i + " " + e + " L 0 " + e + " Z"
    ),
      t.setAttributeNS(null, "class", gt.background);
    const o = document.createElementNS("http://www.w3.org/2000/svg", "rect"),
      n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    n.setAttributeNS(
      "http://www.w3.org/2000/xmlns/",
      "xmlns:xlink",
      "http://www.w3.org/1999/xlink"
    ),
      n.setAttributeNS(null, "class", gt.overlay),
      n.appendChild(t),
      n.appendChild(o),
      this._container.appendChild(n),
      (this._backgroundShape = t),
      (this._boxShape = o),
      (this._overlay = n);
  }
  _destroyOverlay() {
    this._container &&
      this._container.parentNode &&
      this._container.parentNode.removeChild(this._container),
      (this._container =
        this._backgroundShape =
        this._boxShape =
        this._overlay =
          null);
  }
  _toSVGPath(i, e, t, o, n, s) {
    const r = i + t,
      a = e + o;
    return (
      "M 0 0 L " +
      n +
      " 0 L " +
      n +
      " " +
      s +
      " L 0 " +
      s +
      " ZM " +
      i +
      " " +
      e +
      " L " +
      i +
      " " +
      a +
      " L " +
      r +
      " " +
      a +
      " L " +
      r +
      " " +
      e +
      " Z"
    );
  }
  _handleDrag(i, e) {
    const t = i.x,
      o = i.y,
      n = i.origin.x,
      s = i.origin.y;
    let r, a, h, l;
    switch (
      (t > n ? ((r = n), (h = t - n)) : ((r = t), (h = n - t)),
      o > s ? ((a = s), (l = o - s)) : ((a = o), (l = s - o)),
      i.action)
    ) {
      case "start":
        this._start();
        break;
      case "update":
        this._update(r, a, h, l);
        break;
      case "end":
        this._end(r, a, h, l, e);
    }
    i.stopPropagation();
  }
  _redraw() {
    if (!this._rafId || ((this._rafId = null), !this._overlay)) return;
    const { x: i, y: e, width: t, height: o } = this._box;
    this._updateBox(i, e, t, o),
      this._updateBackground(i, e, t, o),
      (this._rafId = requestAnimationFrame(this._redraw));
  }
};
M([T()], st.prototype, "navigation", void 0),
  M([T()], st.prototype, "view", null),
  (st = M([K("esri.views.2d.navigation.ZoomBox")], st));
const Li = st;
let G = class {
    constructor(i) {
      (this._gain = i),
        (this.lastValue = void 0),
        (this.filteredDelta = void 0);
    }
    update(i) {
      if (this.hasLastValue()) {
        const e = this.computeDelta(i);
        this._updateDelta(e);
      }
      this.lastValue = i;
    }
    reset() {
      (this.lastValue = void 0), (this.filteredDelta = void 0);
    }
    hasLastValue() {
      return this.lastValue !== void 0;
    }
    hasFilteredDelta() {
      return this.filteredDelta !== void 0;
    }
    computeDelta(i) {
      return this.lastValue === void 0 ? NaN : i - this.lastValue;
    }
    _updateDelta(i) {
      this.filteredDelta !== void 0
        ? (this.filteredDelta =
            (1 - this._gain) * this.filteredDelta + this._gain * i)
        : (this.filteredDelta = i);
    }
  },
  Ut = class {
    constructor(i, e, t) {
      (this._initialVelocity = i),
        (this._stopVelocity = e),
        (this._friction = t),
        (this._duration = Math.abs(
          Math.log(Math.abs(this._initialVelocity) / this._stopVelocity) /
            Math.log(1 - this._friction)
        ));
    }
    get duration() {
      return this._duration;
    }
    isFinished(i) {
      return i > this.duration;
    }
    get friction() {
      return this._friction;
    }
    value(i) {
      return this.valueFromInitialVelocity(this._initialVelocity, i);
    }
    valueDelta(i, e) {
      const t = this.value(i);
      return this.value(i + e) - t;
    }
    valueFromInitialVelocity(i, e) {
      e = Math.min(e, this.duration);
      const t = 1 - this.friction;
      return (i * (t ** e - 1)) / Math.log(t);
    }
  };
class Ui extends Ut {
  constructor(e, t, o, n, s) {
    super(e, t, o), (this._sceneVelocity = n), (this.direction = s);
  }
  value(e) {
    return super.valueFromInitialVelocity(this._sceneVelocity, e);
  }
}
class Vi {
  constructor(e = 300, t = 12, o = 0.84) {
    (this._minimumInitialVelocity = e),
      (this._stopVelocity = t),
      (this._friction = o),
      (this.enabled = !0),
      (this._time = new G(0.6)),
      (this._screen = [new G(0.4), new G(0.4)]),
      (this._scene = [new G(0.6), new G(0.6), new G(0.6)]),
      (this._tmpDirection = le());
  }
  add(e, t, o) {
    if (this.enabled) {
      if (this._time.hasLastValue() && this._time.computeDelta(o) < 0.015)
        return;
      this._screen[0].update(e[0]),
        this._screen[1].update(e[1]),
        this._scene[0].update(t[0]),
        this._scene[1].update(t[1]),
        this._scene[2].update(t[2]),
        this._time.update(o);
    }
  }
  reset() {
    this._screen[0].reset(),
      this._screen[1].reset(),
      this._scene[0].reset(),
      this._scene[1].reset(),
      this._scene[2].reset(),
      this._time.reset();
  }
  evaluateMomentum() {
    if (
      !this.enabled ||
      !this._screen[0].hasFilteredDelta() ||
      !this._time.hasFilteredDelta()
    )
      return null;
    const e = this._screen[0].filteredDelta,
      t = this._screen[1].filteredDelta,
      o = e == null || t == null ? 0 : Math.sqrt(e * e + t * t),
      n = this._time.filteredDelta,
      s = n == null || o == null ? 0 : o / n;
    return Math.abs(s) < this._minimumInitialVelocity
      ? null
      : this.createMomentum(s, this._stopVelocity, this._friction);
  }
  createMomentum(e, t, o) {
    Be(
      this._tmpDirection,
      this._scene[0].filteredDelta ?? 0,
      this._scene[1].filteredDelta ?? 0,
      this._scene[2].filteredDelta ?? 0
    );
    const n = Le(this._tmpDirection);
    n > 0 && ce(this._tmpDirection, this._tmpDirection, 1 / n);
    const s = this._time.filteredDelta;
    return new Ui(e, t, o, s == null ? 0 : n / s, this._tmpDirection);
  }
}
let X = class extends tt {
  constructor(i) {
    super(i),
      (this.animationTime = 0),
      (this.momentumEstimator = new Vi(500, 6, 0.92)),
      (this.momentum = null),
      (this.tmpMomentum = le()),
      (this.momentumFinished = !1),
      (this.viewpoint = new bt({
        targetGeometry: new xt(),
        scale: 0,
        rotation: 0,
      })),
      (this._previousDrag = null),
      de(
        () => this.momentumFinished,
        () => this.navigation.stop()
      );
  }
  begin(i, e) {
    this.navigation.begin(),
      this.momentumEstimator.reset(),
      this.addToEstimator(e),
      (this._previousDrag = e);
  }
  update(i, e) {
    this.addToEstimator(e);
    let t = e.center.x,
      o = e.center.y;
    const n = this._previousDrag;
    (t = n ? n.center.x - t : -t),
      (o = n ? o - n.center.y : o),
      (i.viewpoint = ft(this.viewpoint, i.viewpoint, [t || 0, o || 0])),
      (this._previousDrag = e);
  }
  end(i, e) {
    this.addToEstimator(e);
    const t = i.navigation.momentumEnabled;
    (this.momentum = t ? this.momentumEstimator.evaluateMomentum() : null),
      (this.animationTime = 0),
      this.momentum && this.onAnimationUpdate(i),
      (this._previousDrag = null),
      this.navigation.end();
  }
  addToEstimator(i) {
    const e = i.center.x,
      t = i.center.y,
      o = Ue(-e, t),
      n = Ve(-e, t, 0);
    this.momentumEstimator.add(o, n, 0.001 * i.timestamp);
  }
  onAnimationUpdate(i) {
    var e;
    (e = this.navigation.animationManager) == null ||
      e.animateContinous(i.viewpoint, (t, o) => {
        const { momentum: n, animationTime: s, tmpMomentum: r } = this,
          a = 0.001 * o;
        if (!(this.momentumFinished = !n || n.isFinished(s))) {
          const h = n.valueDelta(s, a);
          ce(r, n.direction, h),
            ft(t, t, r),
            i.constraints.constrainByGeometry(t);
        }
        this.animationTime += a;
      });
  }
  stopMomentumNavigation() {
    this.momentum &&
      (this.momentumEstimator.reset(),
      (this.momentum = null),
      this.navigation.stop());
  }
};
M([T()], X.prototype, "momentumFinished", void 0),
  M([T()], X.prototype, "viewpoint", void 0),
  M([T()], X.prototype, "navigation", void 0),
  (X = M([K("esri.views.2d.navigation.actions.Pan")], X));
const Ni = X;
let ye = class {
    constructor(i = 2.5, e = 0.01, t = 0.95, o = 12) {
      (this._minimumInitialVelocity = i),
        (this._stopVelocity = e),
        (this._friction = t),
        (this._maxVelocity = o),
        (this.enabled = !0),
        (this.value = new G(0.8)),
        (this.time = new G(0.3));
    }
    add(i, e) {
      if (this.enabled && e != null) {
        if (this.time.hasLastValue()) {
          if (this.time.computeDelta(e) < 0.01) return;
          if (this.value.hasFilteredDelta()) {
            const t = this.value.computeDelta(i);
            this.value.filteredDelta * t < 0 && this.value.reset();
          }
        }
        this.time.update(e), this.value.update(i);
      }
    }
    reset() {
      this.value.reset(), this.time.reset();
    }
    evaluateMomentum() {
      if (
        !this.enabled ||
        !this.value.hasFilteredDelta() ||
        !this.time.hasFilteredDelta()
      )
        return null;
      let i = this.value.filteredDelta / this.time.filteredDelta;
      return (
        (i = L(i, -this._maxVelocity, this._maxVelocity)),
        Math.abs(i) < this._minimumInitialVelocity
          ? null
          : this.createMomentum(i, this._stopVelocity, this._friction)
      );
    }
    createMomentum(i, e, t) {
      return new Ut(i, e, t);
    }
  },
  Oi = class extends ye {
    constructor(i = 3, e = 0.01, t = 0.95, o = 12) {
      super(i, e, t, o);
    }
    add(i, e) {
      const t = this.value.lastValue;
      if (t != null) {
        let o = i - t;
        for (; o > Math.PI; ) o -= 2 * Math.PI;
        for (; o < -Math.PI; ) o += 2 * Math.PI;
        i = t + o;
      }
      super.add(i, e);
    }
  };
class Gi extends Ut {
  constructor(e, t, o) {
    super(e, t, o);
  }
  value(e) {
    const t = super.value(e);
    return Math.exp(t);
  }
  valueDelta(e, t) {
    const o = super.value(e),
      n = super.value(e + t) - o;
    return Math.exp(n);
  }
}
class qi extends ye {
  constructor(e = 2.5, t = 0.01, o = 0.95, n = 12) {
    super(e, t, o, n);
  }
  add(e, t) {
    super.add(Math.log(e), t);
  }
  createMomentum(e, t, o) {
    return new Gi(e, t, o);
  }
}
let Q = class extends tt {
  constructor(i) {
    super(i),
      (this._animationTime = 0),
      (this._momentumFinished = !1),
      (this._previousAngle = 0),
      (this._previousRadius = 0),
      (this._previousCenter = null),
      (this._rotationMomentumEstimator = new Oi(0.6, 0.15, 0.95)),
      (this._rotationDirection = 1),
      (this._startAngle = 0),
      (this._startRadius = 0),
      (this._updateTimestamp = null),
      (this._zoomDirection = 1),
      (this._zoomMomentumEstimator = new qi()),
      (this._zoomOnly = null),
      (this.zoomMomentum = null),
      (this.rotateMomentum = null),
      (this.viewpoint = new bt({
        targetGeometry: new xt(),
        scale: 0,
        rotation: 0,
      })),
      this.addHandles(
        de(
          () => this._momentumFinished,
          () => this.navigation.stop()
        )
      );
  }
  begin(i, e) {
    this.navigation.begin(),
      this._rotationMomentumEstimator.reset(),
      this._zoomMomentumEstimator.reset(),
      (this._zoomOnly = null),
      (this._previousAngle = this._startAngle = e.angle),
      (this._previousRadius = this._startRadius = e.radius),
      (this._previousCenter = e.center),
      (this._updateTimestamp = null),
      i.constraints.rotationEnabled &&
        this.addToRotateEstimator(0, e.timestamp),
      this.addToZoomEstimator(e, 1);
  }
  update(i, e) {
    this._updateTimestamp === null && (this._updateTimestamp = e.timestamp);
    const t = e.angle,
      o = e.radius,
      n = e.center,
      s = Math.abs((180 * (t - this._startAngle)) / Math.PI),
      r = Math.abs(o - this._startRadius),
      a = this._startRadius / o;
    if (this._previousRadius && this._previousCenter) {
      const h = o / this._previousRadius;
      let l = (180 * (t - this._previousAngle)) / Math.PI;
      (this._rotationDirection = l >= 0 ? 1 : -1),
        (this._zoomDirection = h >= 1 ? 1 : -1),
        i.constraints.rotationEnabled
          ? (this._zoomOnly === null &&
              e.timestamp - this._updateTimestamp > 200 &&
              (this._zoomOnly = r - s > 0),
            this._zoomOnly === null || this._zoomOnly
              ? (l = 0)
              : this.addToRotateEstimator(t - this._startAngle, e.timestamp))
          : (l = 0),
        this.addToZoomEstimator(e, a),
        this.navigation.setViewpoint([n.x, n.y], 1 / h, l, [
          this._previousCenter.x - n.x,
          n.y - this._previousCenter.y,
        ]);
    }
    (this._previousAngle = t),
      (this._previousRadius = o),
      (this._previousCenter = n);
  }
  end(i) {
    (this.rotateMomentum = this._rotationMomentumEstimator.evaluateMomentum()),
      (this.zoomMomentum = this._zoomMomentumEstimator.evaluateMomentum()),
      (this._animationTime = 0),
      (this.rotateMomentum || this.zoomMomentum) && this.onAnimationUpdate(i),
      this.navigation.end();
  }
  addToRotateEstimator(i, e) {
    this._rotationMomentumEstimator.add(i, 0.001 * e);
  }
  addToZoomEstimator(i, e) {
    this._zoomMomentumEstimator.add(e, 0.001 * i.timestamp);
  }
  canZoomIn(i) {
    const e = i.scale,
      t = i.constraints.effectiveMaxScale;
    return t === 0 || e > t;
  }
  canZoomOut(i) {
    const e = i.scale,
      t = i.constraints.effectiveMinScale;
    return t === 0 || e < t;
  }
  onAnimationUpdate(i) {
    var e;
    (e = this.navigation.animationManager) == null ||
      e.animateContinous(i.viewpoint, (t, o) => {
        const n =
            (!this.canZoomIn(i) && this._zoomDirection > 1) ||
            (!this.canZoomOut(i) && this._zoomDirection < 1),
          s =
            !this.rotateMomentum ||
            this.rotateMomentum.isFinished(this._animationTime),
          r =
            n ||
            !this.zoomMomentum ||
            this.zoomMomentum.isFinished(this._animationTime),
          a = 0.001 * o;
        if (((this._momentumFinished = s && r), !this._momentumFinished)) {
          const h = this.rotateMomentum
            ? (Math.abs(
                this.rotateMomentum.valueDelta(this._animationTime, a)
              ) *
                this._rotationDirection *
                180) /
              Math.PI
            : 0;
          let l = this.zoomMomentum
            ? Math.abs(this.zoomMomentum.valueDelta(this._animationTime, a))
            : 1;
          const u = ot(),
            c = ot();
          if (this._previousCenter) {
            at(u, this._previousCenter.x, this._previousCenter.y),
              Ne(c, i.size, i.padding),
              Oe(u, u, c);
            const { constraints: d, scale: m } = i,
              _ = m * l;
            l < 1 && !d.canZoomInTo(_)
              ? ((l = m / d.effectiveMaxScale),
                (this.zoomMomentum = null),
                (this.rotateMomentum = null))
              : l > 1 &&
                !d.canZoomOutTo(_) &&
                ((l = m / d.effectiveMinScale),
                (this.zoomMomentum = null),
                (this.rotateMomentum = null)),
              Ge(t, i.viewpoint, l, h, u, i.size),
              i.constraints.constrainByGeometry(t);
          }
        }
        this._animationTime += a;
      });
  }
  stopMomentumNavigation() {
    (this.rotateMomentum || this.zoomMomentum) &&
      (this.rotateMomentum &&
        (this._rotationMomentumEstimator.reset(), (this.rotateMomentum = null)),
      this.zoomMomentum &&
        (this._zoomMomentumEstimator.reset(), (this.zoomMomentum = null)),
      this.navigation.stop());
  }
};
M([T()], Q.prototype, "_momentumFinished", void 0),
  M([T()], Q.prototype, "viewpoint", void 0),
  M([T()], Q.prototype, "navigation", void 0),
  (Q = M([K("esri.views.2d.navigation.actions.Pinch")], Q));
const $i = Q,
  It = ot(),
  he = ot();
let nt = class extends tt {
  constructor(i) {
    super(i),
      (this._previousCenter = ot()),
      (this.viewpoint = new bt({
        targetGeometry: new xt(),
        scale: 0,
        rotation: 0,
      }));
  }
  begin(i, e) {
    this.navigation.begin(), at(this._previousCenter, e.center.x, e.center.y);
  }
  update(i, e) {
    const {
      state: { size: t, padding: o },
    } = i;
    at(It, e.center.x, e.center.y),
      qe(he, t, o),
      (i.viewpoint = Ct(
        this.viewpoint,
        i.state.paddedViewState.viewpoint,
        $e(he, this._previousCenter, It)
      )),
      Ze(this._previousCenter, It);
  }
  end() {
    this.navigation.end();
  }
};
M([T()], nt.prototype, "viewpoint", void 0),
  M([T()], nt.prototype, "navigation", void 0),
  (nt = M([K("esri.views.2d.actions.Rotate")], nt));
const Zi = nt,
  Pt = new bt({ targetGeometry: new xt() }),
  Dt = [0, 0];
let U = class extends tt {
  constructor(i) {
    super(i),
      (this._endTimer = null),
      (this._lastEventTimestamp = null),
      (this.animationManager = null),
      (this.interacting = !1);
  }
  initialize() {
    (this.pan = new Ni({ navigation: this })),
      (this.rotate = new Zi({ navigation: this })),
      (this.pinch = new $i({ navigation: this })),
      (this.zoomBox = new Li({ view: this.view, navigation: this }));
  }
  destroy() {
    (this.pan = ht(this.pan)),
      (this.rotate = ht(this.rotate)),
      (this.pinch = ht(this.pinch)),
      (this.zoomBox = ht(this.zoomBox)),
      (this.animationManager = null);
  }
  begin() {
    this._set("interacting", !0);
  }
  end() {
    (this._lastEventTimestamp = performance.now()), this._startTimer(250);
  }
  async zoom(i, e = this._getDefaultAnchor()) {
    if (
      (this.stop(),
      this.begin(),
      this.view.constraints.snapToZoom && this.view.constraints.effectiveLODs)
    )
      return i < 1 ? this.zoomIn(e) : this.zoomOut(e);
    this.setViewpoint(e, i, 0, [0, 0]);
  }
  async zoomIn(i) {
    const e = this.view,
      t = e.constraints.snapToNextScale(e.scale);
    return this._zoomToScale(t, i);
  }
  async zoomOut(i) {
    const e = this.view,
      t = e.constraints.snapToPreviousScale(e.scale);
    return this._zoomToScale(t, i);
  }
  setViewpoint(i, e, t, o) {
    this.begin(),
      (this.view.state.viewpoint = this._scaleRotateTranslateViewpoint(
        this.view.viewpoint,
        i,
        e,
        t,
        o
      )),
      this.end();
  }
  setViewpointImmediate(i, e = 0, t = [0, 0], o = this._getDefaultAnchor()) {
    this.view.state.viewpoint = this._scaleRotateTranslateViewpoint(
      this.view.viewpoint,
      o,
      i,
      e,
      t
    );
  }
  continousRotateClockwise() {
    var e;
    const i = this.get("view.viewpoint");
    (e = this.animationManager) == null ||
      e.animateContinous(i, (t) => {
        Ct(t, t, -1);
      });
  }
  continousRotateCounterclockwise() {
    var e;
    const i = this.get("view.viewpoint");
    (e = this.animationManager) == null ||
      e.animateContinous(i, (t) => {
        Ct(t, t, 1);
      });
  }
  resetRotation() {
    this.view.rotation = 0;
  }
  continousPanLeft() {
    this._continuousPan([-10, 0]);
  }
  continousPanRight() {
    this._continuousPan([10, 0]);
  }
  continousPanUp() {
    this._continuousPan([0, 10]);
  }
  continousPanDown() {
    this._continuousPan([0, -10]);
  }
  stop() {
    var i;
    this.pan.stopMomentumNavigation(),
      (i = this.animationManager) == null || i.stop(),
      this.end(),
      this._endTimer !== null &&
        (clearTimeout(this._endTimer),
        (this._endTimer = null),
        this._set("interacting", !1));
  }
  _continuousPan(i) {
    var t;
    const e = this.view.viewpoint;
    (t = this.animationManager) == null ||
      t.animateContinous(e, (o) => {
        ft(o, o, i), this.view.constraints.constrainByGeometry(o);
      });
  }
  _startTimer(i) {
    return (
      this._endTimer !== null ||
        (this._endTimer = setTimeout(() => {
          this._endTimer = null;
          const e = performance.now() - (this._lastEventTimestamp ?? 0);
          e < 250
            ? (this._endTimer = this._startTimer(e))
            : this._set("interacting", !1);
        }, i)),
      this._endTimer
    );
  }
  _getDefaultAnchor() {
    const {
      size: i,
      padding: { left: e, right: t, top: o, bottom: n },
    } = this.view;
    return (Dt[0] = 0.5 * (i[0] - t + e)), (Dt[1] = 0.5 * (i[1] - n + o)), Dt;
  }
  async _zoomToScale(i, e = this._getDefaultAnchor()) {
    const { view: t } = this,
      { constraints: o, scale: n, viewpoint: s, size: r, padding: a } = t,
      h = o.canZoomInTo(i),
      l = o.canZoomOutTo(i);
    if (!((i < n && !h) || (i > n && !l)))
      return (
        qt(Pt, s, i / n, 0, e, r, a),
        o.constrainByGeometry(Pt),
        t.goTo(Pt, { animate: !0 })
      );
  }
  _scaleRotateTranslateViewpoint(i, e, t, o, n) {
    const { view: s } = this,
      { size: r, padding: a, constraints: h, scale: l, viewpoint: u } = s,
      c = l * t,
      d = h.canZoomInTo(c),
      m = h.canZoomOutTo(c);
    return (
      ((t < 1 && !d) || (t > 1 && !m)) && (t = 1),
      ft(u, u, n),
      qt(i, u, t, o, e, r, a),
      h.constrainByGeometry(i)
    );
  }
};
M([T()], U.prototype, "animationManager", void 0),
  M([T({ type: Boolean, readOnly: !0 })], U.prototype, "interacting", void 0),
  M([T()], U.prototype, "pan", void 0),
  M([T()], U.prototype, "pinch", void 0),
  M([T()], U.prototype, "rotate", void 0),
  M([T()], U.prototype, "view", void 0),
  M([T()], U.prototype, "zoomBox", void 0),
  (U = M([K("esri.views.2d.navigation.MapViewNavigation")], U));
const xs = U,
  ji = {
    shaders: {
      vertexShader: R("magnifier/magnifier.vert"),
      fragmentShader: R("magnifier/magnifier.frag"),
    },
    attributes: new Map([["a_pos", 0]]),
  };
function Ms(i) {
  return bi(i, ji);
}
export {
  ms as C,
  _s as J,
  fs as _,
  vs as a,
  Mi as b,
  ws as c,
  Ms as d,
  ps as e,
  ji as f,
  ds as i,
  gs as r,
  ys as t,
  bs as u,
  xs as y,
};
