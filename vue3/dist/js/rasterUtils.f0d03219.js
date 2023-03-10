import { a as U, aA as d, t as F } from "./index.8fd7165c.js";
import {
  M as A,
  P as _,
  U as C,
  G as p,
  L as g,
  D as h,
  o as u,
} from "./enums.64ab819c.js";
import { E as O } from "./Texture.fb0c670a.js";
function M(e, a, o = "nearest", r = !1) {
  var f;
  const s = !(r && a.pixelType === "u8"),
    t = s ? p.FLOAT : p.UNSIGNED_BYTE,
    n =
      a.pixels == null || a.pixels.length === 0
        ? null
        : s
        ? a.getAsRGBAFloat()
        : a.getAsRGBA(),
    i =
      (f = e.capabilities.textureFloat) == null ? void 0 : f.textureFloatLinear,
    m = {
      width: a.width,
      height: a.height,
      target: A.TEXTURE_2D,
      pixelFormat: _.RGBA,
      internalFormat: e.type === U.WEBGL2 && s ? C.RGBA32F : _.RGBA,
      samplingMode:
        !i || (o !== "bilinear" && o !== "cubic") ? g.NEAREST : g.LINEAR,
      dataType: t,
      wrapMode: h.CLAMP_TO_EDGE,
      flipped: !1,
    };
  return new O(e, m, n);
}
function b(e, a) {
  const {
      spacing: o,
      offsets: r,
      coefficients: s,
      size: [t, n],
    } = a,
    i = o[0] > 1,
    m = {
      width: i ? 4 * t : t,
      height: n,
      target: A.TEXTURE_2D,
      pixelFormat: _.RGBA,
      internalFormat: e.type === U.WEBGL2 ? C.RGBA32F : _.RGBA,
      dataType: p.FLOAT,
      samplingMode: g.NEAREST,
      wrapMode: h.CLAMP_TO_EDGE,
      flipped: !1,
    },
    f = new Float32Array(i ? t * n * 16 : 2 * r.length);
  if (i && s != null)
    for (let c = 0, l = 0; c < s.length; c++)
      (f[l++] = s[c]), c % 3 == 2 && (f[l++] = 1);
  else
    for (let c = 0; c < n; c++)
      for (let l = 0; l < t; l++) {
        const E = 4 * (c * t + l),
          T = 2 * (l * n + c);
        (f[E] = r[T]), (f[E + 1] = r[T + 1]), (f[E + 3] = r[T] === -1 ? 0 : 1);
      }
  return new O(e, m, f);
}
function B(e, a) {
  const o = {
    width: a.length / 4,
    height: 1,
    target: A.TEXTURE_2D,
    pixelFormat: _.RGBA,
    internalFormat: _.RGBA,
    dataType: p.UNSIGNED_BYTE,
    samplingMode: g.NEAREST,
    wrapMode: h.CLAMP_TO_EDGE,
    flipped: !1,
  };
  return new O(e, o, a);
}
function R(e, a, o, r = 1, s = !0) {
  return {
    u_flipY: s,
    u_applyTransform: !!e,
    u_opacity: r,
    u_transformSpacing: e ? e.spacing : d,
    u_transformGridSize: e ? e.size : d,
    u_targetImageSize: a,
    u_srcImageSize: o,
  };
}
function w(e, a) {
  return {
    u_colormapOffset: a || 0,
    u_colormapMaxIndex: e ? e.length / 4 - 1 : 0,
  };
}
function N(e, a) {
  return { u_scale: e, u_offset: a };
}
function V(e) {
  return {
    u_bandCount: e.bandCount,
    u_minOutput: e.outMin,
    u_maxOutput: e.outMax,
    u_minCutOff: e.minCutOff,
    u_maxCutOff: e.maxCutOff,
    u_factor: e.factor,
    u_useGamma: e.useGamma,
    u_gamma: e.gamma,
    u_gammaCorrection: e.gammaCorrection,
  };
}
function y(e) {
  return {
    u_hillshadeType: e.hillshadeType,
    u_sinZcosAs: e.sinZcosAs,
    u_sinZsinAs: e.sinZsinAs,
    u_cosZs: e.cosZs,
    u_weights: e.weights,
    u_factor: e.factor,
    u_minValue: e.minValue,
    u_maxValue: e.maxValue,
  };
}
function k(e, a) {
  const o = e.gl,
    r = a.glName,
    s = new Map();
  if (F(r)) return s;
  const t = o.getProgramParameter(r, o.ACTIVE_UNIFORMS);
  let n;
  for (let i = 0; i < t; i++)
    (n = o.getActiveUniform(r, i)),
      n &&
        s.set(n.name, { location: o.getUniformLocation(r, n.name), info: n });
  return s;
}
function I(e, a, o) {
  Object.keys(o).forEach((r) => {
    const s = a.get(r) || a.get(r + "[0]");
    s &&
      (function (t, n, i, m) {
        if (m === null || i == null) return !1;
        const { info: f } = m;
        switch (f.type) {
          case u.FLOAT:
            f.size > 1 ? t.setUniform1fv(n, i) : t.setUniform1f(n, i);
            break;
          case u.FLOAT_VEC2:
            t.setUniform2fv(n, i);
            break;
          case u.FLOAT_VEC3:
            t.setUniform3fv(n, i);
            break;
          case u.FLOAT_VEC4:
            t.setUniform4fv(n, i);
            break;
          case u.FLOAT_MAT3:
            t.setUniformMatrix3fv(n, i);
            break;
          case u.FLOAT_MAT4:
            t.setUniformMatrix4fv(n, i);
            break;
          case u.INT:
            f.size > 1 ? t.setUniform1iv(n, i) : t.setUniform1i(n, i);
            break;
          case u.BOOL:
            t.setUniform1i(n, i ? 1 : 0);
            break;
          case u.INT_VEC2:
          case u.BOOL_VEC2:
            t.setUniform2iv(n, i);
            break;
          case u.INT_VEC3:
          case u.BOOL_VEC3:
            t.setUniform3iv(n, i);
            break;
          case u.INT_VEC4:
          case u.BOOL_VEC4:
            t.setUniform4iv(n, i);
            break;
          default:
            return !1;
        }
      })(e, r, o[r], s);
  });
}
function v(e, a, o, r) {
  o.length === r.length &&
    (r.some((s) => s == null) ||
      o.some((s) => s == null) ||
      o.forEach((s, t) => {
        a.setUniform1i(s, t), e.bindTexture(r[t], t);
      }));
}
export {
  y as A,
  V as E,
  I as O,
  N as T,
  B as _,
  M as c,
  v as d,
  w as g,
  k as h,
  b as l,
  R as p,
};
