import { N as p, S as f, T as c, R as r, I as _ } from "./enums.64ab819c.js";
import { n as u } from "./basicInterfaces.b7051eb1.js";
function g(t, e, i = c.ADD, n = [0, 0, 0, 0]) {
  return {
    srcRgb: t,
    srcAlpha: t,
    dstRgb: e,
    dstAlpha: e,
    opRgb: i,
    opAlpha: i,
    color: { r: n[0], g: n[1], b: n[2], a: n[3] },
  };
}
const N = { face: p.BACK, mode: f.CCW },
  R = { face: p.FRONT, mode: f.CCW },
  V = (t) => (t === u.Back ? N : t === u.Front ? R : null),
  X = { zNear: 0, zFar: 1 },
  Y = { r: !0, g: !0, b: !0, a: !0 };
function y(t) {
  return B.intern(t);
}
function D(t) {
  return L.intern(t);
}
function m(t) {
  return z.intern(t);
}
function F(t) {
  return U.intern(t);
}
function E(t) {
  return M.intern(t);
}
function P(t) {
  return H.intern(t);
}
function w(t) {
  return K.intern(t);
}
function k(t) {
  return j.intern(t);
}
function $(t) {
  return x.intern(t);
}
let s = class {
  constructor(t, e) {
    (this._makeKey = t), (this._makeRef = e), (this._interns = new Map());
  }
  intern(t) {
    if (!t) return null;
    const e = this._makeKey(t),
      i = this._interns;
    return i.has(e) || i.set(e, this._makeRef(t)), i.get(e) ?? null;
  }
};
function l(t) {
  return "[" + t.join(",") + "]";
}
const B = new s(v, (t) => ({ __tag: "Blending", ...t }));
function v(t) {
  return t
    ? l([
        t.srcRgb,
        t.srcAlpha,
        t.dstRgb,
        t.dstAlpha,
        t.opRgb,
        t.opAlpha,
        t.color.r,
        t.color.g,
        t.color.b,
        t.color.a,
      ])
    : null;
}
const L = new s(S, (t) => ({ __tag: "Culling", ...t }));
function S(t) {
  return t ? l([t.face, t.mode]) : null;
}
const z = new s(I, (t) => ({ __tag: "PolygonOffset", ...t }));
function I(t) {
  return t ? l([t.factor, t.units]) : null;
}
const U = new s(W, (t) => ({ __tag: "DepthTest", ...t }));
function W(t) {
  return t ? l([t.func]) : null;
}
const M = new s(T, (t) => ({ __tag: "StencilTest", ...t }));
function T(t) {
  return t
    ? l([
        t.function.func,
        t.function.ref,
        t.function.mask,
        t.operation.fail,
        t.operation.zFail,
        t.operation.zPass,
      ])
    : null;
}
const H = new s(b, (t) => ({ __tag: "DepthWrite", ...t }));
function b(t) {
  return t ? l([t.zNear, t.zFar]) : null;
}
const K = new s(O, (t) => ({ __tag: "ColorWrite", ...t }));
function O(t) {
  return t ? l([t.r, t.g, t.b, t.a]) : null;
}
const j = new s(A, (t) => ({ __tag: "StencilWrite", ...t }));
function A(t) {
  return t ? l([t.mask]) : null;
}
const x = new s(
  function (t) {
    return t
      ? l([
          v(t.blending),
          S(t.culling),
          I(t.polygonOffset),
          W(t.depthTest),
          T(t.stencilTest),
          b(t.depthWrite),
          O(t.colorWrite),
          A(t.stencilWrite),
        ])
      : null;
  },
  (t) => ({
    blending: y(t.blending),
    culling: D(t.culling),
    polygonOffset: m(t.polygonOffset),
    depthTest: F(t.depthTest),
    stencilTest: E(t.stencilTest),
    depthWrite: P(t.depthWrite),
    colorWrite: w(t.colorWrite),
    stencilWrite: k(t.stencilWrite),
  })
);
class tt {
  constructor(e) {
    (this._pipelineInvalid = !0),
      (this._blendingInvalid = !0),
      (this._cullingInvalid = !0),
      (this._polygonOffsetInvalid = !0),
      (this._depthTestInvalid = !0),
      (this._stencilTestInvalid = !0),
      (this._depthWriteInvalid = !0),
      (this._colorWriteInvalid = !0),
      (this._stencilWriteInvalid = !0),
      (this._stateSetters = e);
  }
  setPipeline(e) {
    (this._pipelineInvalid || e !== this._pipeline) &&
      (this._setBlending(e.blending),
      this._setCulling(e.culling),
      this._setPolygonOffset(e.polygonOffset),
      this._setDepthTest(e.depthTest),
      this._setStencilTest(e.stencilTest),
      this._setDepthWrite(e.depthWrite),
      this._setColorWrite(e.colorWrite),
      this._setStencilWrite(e.stencilWrite),
      (this._pipeline = e)),
      (this._pipelineInvalid = !1);
  }
  invalidateBlending() {
    (this._blendingInvalid = !0), (this._pipelineInvalid = !0);
  }
  invalidateCulling() {
    (this._cullingInvalid = !0), (this._pipelineInvalid = !0);
  }
  invalidatePolygonOffset() {
    (this._polygonOffsetInvalid = !0), (this._pipelineInvalid = !0);
  }
  invalidateDepthTest() {
    (this._depthTestInvalid = !0), (this._pipelineInvalid = !0);
  }
  invalidateStencilTest() {
    (this._stencilTestInvalid = !0), (this._pipelineInvalid = !0);
  }
  invalidateDepthWrite() {
    (this._depthWriteInvalid = !0), (this._pipelineInvalid = !0);
  }
  invalidateColorWrite() {
    (this._colorWriteInvalid = !0), (this._pipelineInvalid = !0);
  }
  invalidateStencilWrite() {
    (this._stencilTestInvalid = !0), (this._pipelineInvalid = !0);
  }
  _setBlending(e) {
    (this._blending = this._setSubState(
      e,
      this._blending,
      this._blendingInvalid,
      this._stateSetters.setBlending
    )),
      (this._blendingInvalid = !1);
  }
  _setCulling(e) {
    (this._culling = this._setSubState(
      e,
      this._culling,
      this._cullingInvalid,
      this._stateSetters.setCulling
    )),
      (this._cullingInvalid = !1);
  }
  _setPolygonOffset(e) {
    (this._polygonOffset = this._setSubState(
      e,
      this._polygonOffset,
      this._polygonOffsetInvalid,
      this._stateSetters.setPolygonOffset
    )),
      (this._polygonOffsetInvalid = !1);
  }
  _setDepthTest(e) {
    (this._depthTest = this._setSubState(
      e,
      this._depthTest,
      this._depthTestInvalid,
      this._stateSetters.setDepthTest
    )),
      (this._depthTestInvalid = !1);
  }
  _setStencilTest(e) {
    (this._stencilTest = this._setSubState(
      e,
      this._stencilTest,
      this._stencilTestInvalid,
      this._stateSetters.setStencilTest
    )),
      (this._stencilTestInvalid = !1);
  }
  _setDepthWrite(e) {
    (this._depthWrite = this._setSubState(
      e,
      this._depthWrite,
      this._depthWriteInvalid,
      this._stateSetters.setDepthWrite
    )),
      (this._depthWriteInvalid = !1);
  }
  _setColorWrite(e) {
    (this._colorWrite = this._setSubState(
      e,
      this._colorWrite,
      this._colorWriteInvalid,
      this._stateSetters.setColorWrite
    )),
      (this._colorWriteInvalid = !1);
  }
  _setStencilWrite(e) {
    (this._stencilWrite = this._setSubState(
      e,
      this._stencilWrite,
      this._stencilWriteInvalid,
      this._stateSetters.setStencilWrite
    )),
      (this._stencilTestInvalid = !1);
  }
  _setSubState(e, i, n, h) {
    return (n || e !== i) && (h(e), (this._pipelineInvalid = !0)), e;
  }
}
const et = class {};
function d(t, ...e) {
  let i = "";
  for (let n = 0; n < e.length; n++) i += t[n] + e[n];
  return (i += t[t.length - 1]), i;
}
var o;
(function (t) {
  (t.int = function (e) {
    return Math.round(e).toString();
  }),
    (t.float = function (e) {
      return e.toPrecision(8);
    });
})(d || (d = {})),
  (function (t) {
    (t[(t.Color = 0)] = "Color"),
      (t[(t.Alpha = 1)] = "Alpha"),
      (t[(t.FrontFace = 2)] = "FrontFace"),
      (t[(t.NONE = 3)] = "NONE"),
      (t[(t.COUNT = 4)] = "COUNT");
  })(o || (o = {}));
const it = (function (t, e, i, n, h = c.ADD, C = c.ADD, a = [0, 0, 0, 0]) {
    return {
      srcRgb: t,
      srcAlpha: e,
      dstRgb: i,
      dstAlpha: n,
      opRgb: h,
      opAlpha: C,
      color: { r: a[0], g: a[1], b: a[2], a: a[3] },
    };
  })(r.SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA),
  Q = g(r.ONE, r.ONE),
  Z = g(r.ZERO, r.ONE_MINUS_SRC_ALPHA);
function nt(t) {
  return t === o.FrontFace ? null : t === o.Alpha ? Z : Q;
}
const st = 5e5,
  q = { factor: -1, units: -2 };
function lt(t) {
  return t ? q : null;
}
function rt(t, e = _.LESS) {
  return t === o.NONE || t === o.FrontFace ? e : _.LEQUAL;
}
export {
  nt as A,
  tt as M,
  st as S,
  $ as W,
  Y as _,
  o as a,
  X as b,
  it as c,
  lt as d,
  V as h,
  rt as l,
  et as n,
  d as o,
  Z as s,
};
