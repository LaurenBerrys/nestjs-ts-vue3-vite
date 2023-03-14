import {
  Q as C,
  w as B,
  s as V,
  a as I,
  r as T,
  t as R,
  aS as S,
  q as K,
} from "./index.8fd7165c.js";
import {
  M as g,
  L as E,
  D as b,
  t as y,
  G as L,
  P as D,
  U as A,
  u as k,
} from "./enums.64ab819c.js";
const H = C.getLogger("esri.views.webgl.checkWebGLError"),
  O = !!B("enable-feature:webgl-debug");
function Y() {
  return O;
}
function Q() {
  return O;
}
function w(t) {
  if (Y()) {
    const e = t.getError();
    if (e) {
      const r = (function (s, a) {
          switch (a) {
            case s.INVALID_ENUM:
              return "Invalid Enum. An unacceptable value has been specified for an enumerated argument.";
            case s.INVALID_VALUE:
              return "Invalid Value. A numeric argument is out of range.";
            case s.INVALID_OPERATION:
              return "Invalid Operation. The specified command is not allowed for the current state.";
            case s.INVALID_FRAMEBUFFER_OPERATION:
              return "Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";
            case s.OUT_OF_MEMORY:
              return "Out of memory. Not enough memory is left to execute the command.";
            case s.CONTEXT_LOST_WEBGL:
              return "WebGL context has been lost";
            default:
              return "Unknown error";
          }
        })(t, e),
        i = new Error().stack;
      H.error(
        new V("webgl-error", "WebGL error occured", { message: r, stack: i })
      );
    }
  }
}
const P = {
  target: g.TEXTURE_2D,
  samplingMode: E.LINEAR,
  wrapMode: b.REPEAT,
  flipped: !1,
  hasMipmap: !1,
  isOpaque: !1,
  unpackAlignment: 4,
  preMultiplyAlpha: !1,
  isImmutable: !1,
};
let p = class {
  constructor(t, e, r = null) {
    (this._context = t),
      (this.type = "texture"),
      (this._glName = null),
      (this._samplingModeDirty = !1),
      (this._wrapModeDirty = !1),
      (this._wasImmutablyAllocated = !1),
      t.instanceCounter.increment(y.Texture, this),
      (this._descriptor = { ...P, ...e });
    for (const i in P)
      this._descriptor[i] === void 0 && (this._descriptor[i] = P[i]);
    if (
      t.type !== I.WEBGL2 &&
      (this._descriptor.isImmutable && (this._descriptor.isImmutable = !1),
      x(this._descriptor.target))
    )
      throw new Error("3D and array textures are not supported in WebGL1");
    this._descriptor.target === g.TEXTURE_CUBE_MAP
      ? this._setDataCubeMap(r)
      : this.setData(r);
  }
  get glName() {
    return this._glName;
  }
  get descriptor() {
    return this._descriptor;
  }
  get isDirty() {
    return this._samplingModeDirty || this._wrapModeDirty;
  }
  dispose() {
    this._context.gl &&
      this._glName &&
      (this._context.unbindTexture(this),
      this._context.gl.deleteTexture(this._glName),
      (this._glName = null),
      this._context.instanceCounter.decrement(y.Texture, this));
  }
  release() {
    this.dispose();
  }
  resize(t, e) {
    const r = this._descriptor;
    if (r.width !== t || r.height !== e) {
      if (this._wasImmutablyAllocated)
        throw new Error("Immutable textures can't be resized!");
      (r.width = t),
        (r.height = e),
        this._descriptor.target === g.TEXTURE_CUBE_MAP
          ? this._setDataCubeMap(null)
          : this.setData(null);
    }
  }
  _setDataCubeMap(t = null) {
    for (
      let e = g.TEXTURE_CUBE_MAP_POSITIVE_X;
      e <= g.TEXTURE_CUBE_MAP_NEGATIVE_Z;
      e++
    )
      this._setData(t, e);
  }
  setData(t) {
    this._setData(t);
  }
  _setData(t, e) {
    if (!this._context || !this._context.gl) return;
    const r = this._context.gl;
    this._glName || (this._glName = r.createTexture()),
      t === void 0 && (t = null);
    const i = this._descriptor,
      s = e ?? i.target,
      a = x(s);
    t === null &&
      ((i.width = i.width || 4),
      (i.height = i.height || 4),
      a && (i.depth = i.depth ?? 1));
    const h = this._context.bindTexture(this, p.TEXTURE_UNIT_FOR_UPDATES);
    this._context.setActiveTexture(p.TEXTURE_UNIT_FOR_UPDATES),
      p._validateTexture(this._context, i),
      this._configurePixelStorage(),
      w(r);
    const l = i.pixelFormat;
    let o = i.internalFormat ?? this._deriveInternalFormat(l, i.dataType);
    if (N(t)) {
      let n = t.width,
        _ = t.height;
      const d = 1;
      t instanceof HTMLVideoElement &&
        ((n = t.videoWidth), (_ = t.videoHeight)),
        i.width && i.height,
        a && i.depth,
        i.isImmutable &&
          !this._wasImmutablyAllocated &&
          this._texStorage(s, o, i.hasMipmap, n, _, d),
        this._texImage(s, 0, o, n, _, d, t),
        w(r),
        i.hasMipmap && this.generateMipmap(),
        i.width === void 0 && (i.width = n),
        i.height === void 0 && (i.height = _),
        a && i.depth === void 0 && (i.depth = d);
    } else {
      const { width: n, height: _, depth: d } = i;
      if (n == null || _ == null)
        throw new Error("Width and height must be specified!");
      if (a && d == null) throw new Error("Depth must be specified!");
      if (
        (i.isImmutable &&
          !this._wasImmutablyAllocated &&
          this._texStorage(s, o, i.hasMipmap, n, _, d),
        r.DEPTH24_STENCIL8 && o === r.DEPTH_STENCIL && (o = r.DEPTH24_STENCIL8),
        U(t))
      ) {
        const c = t.levels,
          m = F(s, n, _, d),
          u = Math.min(m - 1, c.length - 1);
        T(this._context.gl2)
          ? r.texParameteri(i.target, this._context.gl2.TEXTURE_MAX_LEVEL, u)
          : (i.hasMipmap = i.hasMipmap && m === c.length);
        const M = o;
        if (
          !(function (f) {
            return f in k;
          })(M)
        )
          throw new Error(
            "Attempting to use compressed data with an umcompressed format!"
          );
        this._forEachMipmapLevel((f, X, v, G) => {
          const W = c[Math.min(f, c.length - 1)];
          this._compressedTexImage(s, f, M, X, v, G, W);
        }, u);
      } else
        T(t)
          ? (this._texImage(s, 0, o, n, _, d, t),
            w(r),
            i.hasMipmap && this.generateMipmap())
          : this._forEachMipmapLevel((c, m, u, M) => {
              this._texImage(s, c, o, m, u, M, null), w(r);
            });
    }
    p._applySamplingMode(r, this._descriptor),
      p._applyWrapMode(r, this._descriptor),
      p._applyAnisotropicFilteringParameters(this._context, this._descriptor),
      w(r),
      this._context.bindTexture(h, p.TEXTURE_UNIT_FOR_UPDATES);
  }
  updateData(t, e, r, i, s, a, h = 0) {
    this._glName;
    const l = this._context.gl,
      o = this._descriptor,
      { pixelFormat: n, dataType: _, target: d, isImmutable: c } = o,
      m = o.internalFormat ?? this._deriveInternalFormat(n, _);
    if (c && !this._wasImmutablyAllocated)
      throw new Error("Cannot update immutable texture before allocation!");
    const u = this._context.bindTexture(this, p.TEXTURE_UNIT_FOR_UPDATES, !0);
    if (
      (e < 0 ||
        r < 0 ||
        i > o.width ||
        s > o.height ||
        e + i > o.width ||
        o.height,
      this._configurePixelStorage(),
      h)
    ) {
      if (R(this._context.gl2)) return;
      l.pixelStorei(this._context.gl2.UNPACK_SKIP_ROWS, h);
    }
    if (
      (N(a)
        ? T(this._context.gl2)
          ? this._context.gl2.texSubImage2D(d, t, e, r, i, s, n, _, a)
          : l.texSubImage2D(d, t, e, r, n, _, a)
        : U(a)
        ? l.compressedTexSubImage2D(d, t, e, r, i, s, m, a.levels[t])
        : l.texSubImage2D(d, t, e, r, i, s, n, _, a),
      h)
    ) {
      if (R(this._context.gl2)) return;
      l.pixelStorei(this._context.gl2.UNPACK_SKIP_ROWS, 0);
    }
    this._context.bindTexture(u, p.TEXTURE_UNIT_FOR_UPDATES);
  }
  updateData3D(t, e, r, i, s, a, h, l) {
    this._glName;
    const o = this._context.gl2;
    if (R(o)) throw new Error("3D textures are not supported in WebGL1");
    const n = this._descriptor,
      { pixelFormat: _, dataType: d, isImmutable: c, target: m } = n,
      u = n.internalFormat ?? this._deriveInternalFormat(_, d);
    if (c && !this._wasImmutablyAllocated)
      throw new Error("Cannot update immutable texture before allocation!");
    x(m);
    const M = this._context.bindTexture(this, p.TEXTURE_UNIT_FOR_UPDATES);
    if (
      (this._context.setActiveTexture(p.TEXTURE_UNIT_FOR_UPDATES),
      e < 0 ||
        r < 0 ||
        i < 0 ||
        s > n.width ||
        a > n.height ||
        h > n.depth ||
        e + s > n.width ||
        r + a > n.height ||
        n.depth,
      this._configurePixelStorage(),
      U(l))
    )
      (l = l.levels[t]),
        o.compressedTexSubImage3D(m, t, e, r, i, s, a, h, u, l);
    else {
      const f = l;
      o.texSubImage3D(m, t, e, r, i, s, a, h, _, d, f);
    }
    this._context.bindTexture(M, p.TEXTURE_UNIT_FOR_UPDATES);
  }
  generateMipmap() {
    const t = this._descriptor;
    if (!t.hasMipmap) {
      if (this._wasImmutablyAllocated)
        throw new Error(
          "Cannot add mipmaps to immutable texture after allocation"
        );
      (t.hasMipmap = !0),
        (this._samplingModeDirty = !0),
        p._validateTexture(this._context, t);
    }
    t.samplingMode === E.LINEAR
      ? ((this._samplingModeDirty = !0),
        (t.samplingMode = E.LINEAR_MIPMAP_NEAREST))
      : t.samplingMode === E.NEAREST &&
        ((this._samplingModeDirty = !0),
        (t.samplingMode = E.NEAREST_MIPMAP_NEAREST));
    const e = this._context.bindTexture(this, p.TEXTURE_UNIT_FOR_UPDATES);
    this._context.setActiveTexture(p.TEXTURE_UNIT_FOR_UPDATES),
      this._context.gl.generateMipmap(t.target),
      this._context.bindTexture(e, p.TEXTURE_UNIT_FOR_UPDATES);
  }
  setSamplingMode(t) {
    t !== this._descriptor.samplingMode &&
      ((this._descriptor.samplingMode = t), (this._samplingModeDirty = !0));
  }
  setWrapMode(t) {
    t !== this._descriptor.wrapMode &&
      ((this._descriptor.wrapMode = t),
      p._validateTexture(this._context, this._descriptor),
      (this._wrapModeDirty = !0));
  }
  applyChanges() {
    const t = this._context.gl,
      e = this._descriptor;
    this._samplingModeDirty &&
      (p._applySamplingMode(t, e), (this._samplingModeDirty = !1)),
      this._wrapModeDirty &&
        (p._applyWrapMode(t, e), (this._wrapModeDirty = !1));
  }
  _deriveInternalFormat(t, e) {
    if (this._context.type === I.WEBGL1) return t;
    switch (e) {
      case L.FLOAT:
        switch (t) {
          case D.RGBA:
            return A.RGBA32F;
          case D.RGB:
            return A.RGB32F;
          default:
            throw new Error("Unable to derive format");
        }
      case L.UNSIGNED_BYTE:
        switch (t) {
          case D.RGBA:
            return A.RGBA8;
          case D.RGB:
            return A.RGB8;
        }
      default:
        return t;
    }
  }
  _configurePixelStorage() {
    const t = this._context.gl,
      {
        unpackAlignment: e,
        flipped: r,
        preMultiplyAlpha: i,
      } = this._descriptor;
    t.pixelStorei(t.UNPACK_ALIGNMENT, e),
      t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r ? 1 : 0),
      t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i ? 1 : 0);
  }
  _texStorage(t, e, r, i, s, a) {
    const h = this._context.gl2;
    if (R(h)) throw new Error("Immutable textures are not supported in WebGL1");
    if (
      !(function (o) {
        return o in A;
      })(e)
    )
      throw new Error("Immutable textures must have a sized internal format");
    if (!this._descriptor.isImmutable) return;
    const l = r ? F(t, i, s, a) : 1;
    if (x(t)) {
      if (a == null)
        throw new Error("Missing depth dimension for 3D texture upload");
      h.texStorage3D(t, l, e, i, s, a);
    } else h.texStorage2D(t, l, e, i, s);
    this._wasImmutablyAllocated = !0;
  }
  _texImage(t, e, r, i, s, a, h) {
    const l = this._context.gl;
    let o = null;
    const n = this._context.type === I.WEBGL2,
      _ = x(t),
      { isImmutable: d, pixelFormat: c, dataType: m } = this._descriptor;
    if ((n && (o = l), n || !N(h)))
      if (d) {
        if (T(h)) {
          const u = h;
          if (_) {
            if (a == null)
              throw new Error("Missing depth dimension for 3D texture upload");
            o.texSubImage3D(t, e, 0, 0, 0, i, s, a, c, m, u);
          } else l.texSubImage2D(t, e, 0, 0, i, s, c, m, u);
        }
      } else {
        const u = K(h);
        if (_) {
          if (a == null)
            throw new Error("Missing depth dimension for 3D texture upload");
          o.texImage3D(t, e, r, i, s, a, 0, c, m, u);
        } else l.texImage2D(t, e, r, i, s, 0, c, m, u);
      }
    else l.texImage2D(t, 0, r, c, m, h);
  }
  _compressedTexImage(t, e, r, i, s, a, h) {
    const l = this._context.gl;
    let o = null;
    const n = x(t),
      _ = this._descriptor.isImmutable;
    if (n) {
      if (this._context.type !== I.WEBGL2)
        throw new Error("3D textures are not supported in WebGL1");
      o = l;
    }
    if (_) {
      if (T(h))
        if (n) {
          if (a == null)
            throw new Error("Missing depth dimension for 3D texture upload");
          o.compressedTexSubImage3D(t, e, 0, 0, 0, i, s, a, r, h);
        } else l.compressedTexSubImage2D(t, e, 0, 0, i, s, r, h);
    } else if (n) {
      if (a == null)
        throw new Error("Missing depth dimension for 3D texture upload");
      o.compressedTexImage3D(t, e, r, i, s, a, 0, h);
    } else l.compressedTexImage2D(t, e, r, i, s, 0, h);
  }
  _forEachMipmapLevel(t, e = 1 / 0) {
    let {
      width: r,
      height: i,
      depth: s,
      hasMipmap: a,
      target: h,
    } = this._descriptor;
    const l = h === g.TEXTURE_3D;
    if (r == null || i == null || (l && s == null))
      throw new Error("Missing texture dimensions for mipmap calculation");
    for (
      let o = 0;
      t(o, r, i, s), a && (r !== 1 || i !== 1 || (l && s !== 1)) && !(o >= e);
      ++o
    )
      (r = Math.max(1, r >> 1)),
        (i = Math.max(1, i >> 1)),
        l && (s = Math.max(1, s >> 1));
  }
  static _validateTexture(t, e) {
    (e.width != null && e.width < 0) ||
      (e.height != null && e.height < 0) ||
      (e.depth != null && e.depth);
    const r = t.type === I.WEBGL2,
      i = e.width != null && S(e.width) && e.height != null && S(e.height);
    r || (!e.isImmutable && x(e.target)),
      r ||
        i ||
        (typeof e.wrapMode == "number"
          ? (e.wrapMode, b.CLAMP_TO_EDGE)
          : e.wrapMode.s === b.CLAMP_TO_EDGE && (e.wrapMode.t, b.CLAMP_TO_EDGE),
        e.hasMipmap);
  }
  static _applySamplingMode(t, e) {
    let r = e.samplingMode,
      i = e.samplingMode;
    r === E.LINEAR_MIPMAP_NEAREST || r === E.LINEAR_MIPMAP_LINEAR
      ? ((r = E.LINEAR), e.hasMipmap || (i = E.LINEAR))
      : (r !== E.NEAREST_MIPMAP_NEAREST && r !== E.NEAREST_MIPMAP_LINEAR) ||
        ((r = E.NEAREST), e.hasMipmap || (i = E.NEAREST)),
      t.texParameteri(e.target, t.TEXTURE_MAG_FILTER, r),
      t.texParameteri(e.target, t.TEXTURE_MIN_FILTER, i);
  }
  static _applyWrapMode(t, e) {
    typeof e.wrapMode == "number"
      ? (t.texParameteri(e.target, t.TEXTURE_WRAP_S, e.wrapMode),
        t.texParameteri(e.target, t.TEXTURE_WRAP_T, e.wrapMode))
      : (t.texParameteri(e.target, t.TEXTURE_WRAP_S, e.wrapMode.s),
        t.texParameteri(e.target, t.TEXTURE_WRAP_T, e.wrapMode.t));
  }
  static _applyAnisotropicFilteringParameters(t, e) {
    const r = t.capabilities.textureFilterAnisotropic;
    r &&
      t.gl.texParameterf(
        e.target,
        r.TEXTURE_MAX_ANISOTROPY,
        e.maxAnisotropy ?? 1
      );
  }
};
function U(t) {
  return T(t) && "type" in t && t.type === "compressed";
}
function N(t) {
  return (
    T(t) &&
    !U(t) &&
    !(function (e) {
      return T(e) && "byteLength" in e;
    })(t)
  );
}
function x(t) {
  return t === g.TEXTURE_3D || t === g.TEXTURE_2D_ARRAY;
}
function F(t, e, r, i = 1) {
  let s = Math.max(e, r);
  return (
    t === g.TEXTURE_3D && (s = Math.max(s, i)),
    Math.round(Math.log(s) / Math.LN2) + 1
  );
}
p.TEXTURE_UNIT_FOR_UPDATES = 0;
export { p as E, Y as a, Q as c, w as u };
