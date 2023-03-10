import {
  Q as v,
  a as x,
  v as V,
  r as B,
  aP as $,
  aQ as q,
  p as J,
  t as w,
  h as Z,
} from "./index.8fd7165c.js";
import { u as L, E as N, a as G } from "./Texture.fb0c670a.js";
import {
  A as f,
  F as H,
  t as g,
  C as O,
  u as d,
  U as c,
  B as T,
  P as E,
  f as A,
  V as l,
  G as I,
  c as X,
  n as F,
  M as R,
  Y as U,
  L as W,
  D as Y,
} from "./enums.64ab819c.js";
const b = v.getLogger("esri.views.webgl.BufferObject");
let tt = class D {
  static createIndex(t, e, i) {
    return new D(t, f.ELEMENT_ARRAY_BUFFER, e, i);
  }
  static createVertex(t, e, i) {
    return new D(t, f.ARRAY_BUFFER, e, i);
  }
  static createUniform(t, e, i) {
    if (t.type !== x.WEBGL2)
      throw new Error("Uniform buffers are supported in WebGL2 only!");
    return new D(t, f.UNIFORM_BUFFER, e, i);
  }
  static createPixelPack(t, e = H.STREAM_READ, i) {
    if (t.type !== x.WEBGL2)
      throw new Error("Pixel pack buffers are supported in WebGL2 only!");
    const s = new D(t, f.PIXEL_PACK_BUFFER, e);
    return i && s.setSize(i), s;
  }
  static createPixelUnpack(t, e = H.STREAM_DRAW, i) {
    if (t.type !== x.WEBGL2)
      throw new Error("Pixel unpack buffers are supported in WebGL2 only!");
    return new D(t, f.PIXEL_UNPACK_BUFFER, e, i);
  }
  constructor(t, e, i, s) {
    (this._context = t),
      (this.bufferType = e),
      (this.usage = i),
      (this._glName = null),
      (this._size = -1),
      (this._indexType = void 0),
      t.instanceCounter.increment(g.BufferObject, this),
      (this._glName = this._context.gl.createBuffer()),
      L(this._context.gl),
      s && this.setData(s);
  }
  get glName() {
    return this._glName;
  }
  get size() {
    return this._size;
  }
  get indexType() {
    return this._indexType;
  }
  get byteSize() {
    return this.bufferType === f.ELEMENT_ARRAY_BUFFER
      ? this._indexType === O.UNSIGNED_INT
        ? 4 * this._size
        : 2 * this._size
      : this._size;
  }
  get _isVAOAware() {
    return (
      this.bufferType === f.ELEMENT_ARRAY_BUFFER ||
      this.bufferType === f.ARRAY_BUFFER
    );
  }
  dispose() {
    var t;
    (t = this._context) != null && t.gl
      ? (this._glName &&
          (this._context.gl.deleteBuffer(this._glName), (this._glName = null)),
        this._context.instanceCounter.decrement(g.BufferObject, this),
        (this._context = V(this._context)))
      : this._glName && b.warn("Leaked WebGL buffer object");
  }
  setSize(t, e = null) {
    if (
      (t <= 0 && b.error("Buffer size needs to be positive!"),
      this.bufferType === f.ELEMENT_ARRAY_BUFFER && B(e))
    )
      switch (((this._indexType = e), e)) {
        case O.UNSIGNED_SHORT:
          t *= 2;
          break;
        case O.UNSIGNED_INT:
          t *= 4;
      }
    this._setBufferData(t);
  }
  setData(t) {
    if (!t) return;
    let e = t.byteLength;
    this.bufferType === f.ELEMENT_ARRAY_BUFFER &&
      ($(t) && ((e /= 2), (this._indexType = O.UNSIGNED_SHORT)),
      q(t) && ((e /= 4), (this._indexType = O.UNSIGNED_INT))),
      this._setBufferData(e, t);
  }
  _setBufferData(t, e = null) {
    this._size = t;
    const i = this._context.getBoundVAO();
    this._isVAOAware && this._context.bindVAO(null),
      this._context.bindBuffer(this);
    const s = this._context.gl;
    B(e)
      ? s.bufferData(this.bufferType, e, this.usage)
      : s.bufferData(this.bufferType, t, this.usage),
      L(s),
      this._isVAOAware && this._context.bindVAO(i);
  }
  setSubData(t, e, i, s) {
    if (!t) return;
    (e < 0 || e * t.BYTES_PER_ELEMENT >= this.byteSize) &&
      b.error("offset is out of range!"),
      i >= s && b.error("end must be bigger than start!"),
      (e + (s - i)) * t.BYTES_PER_ELEMENT > this.byteSize &&
        b.error("An attempt to write beyond the end of the buffer!");
    const h = this._context.getBoundVAO();
    this._isVAOAware && this._context.bindVAO(null),
      this._context.bindBuffer(this);
    const a = this._context.gl;
    if (this._context.type === x.WEBGL2)
      a.bufferSubData(this.bufferType, e * t.BYTES_PER_ELEMENT, t, i, s - i);
    else {
      const n = i === 0 && s === t.length ? t : t.subarray(i, s);
      a.bufferSubData(this.bufferType, e * t.BYTES_PER_ELEMENT, n);
    }
    L(a), this._isVAOAware && this._context.bindVAO(h);
  }
  getSubData(t, e = 0, i, s) {
    if (this._context.type !== x.WEBGL2)
      return void b.error("Get buffer subdata is supported in WebGL2 only!");
    if (i < 0 || s < 0)
      return void b.error(
        "Problem getting subdata: offset and length were less than zero!"
      );
    const h = (function (n) {
      return J(n);
    })(t)
      ? t.BYTES_PER_ELEMENT
      : 1;
    if (h * ((i ?? 0) + (s ?? 0)) > t.byteLength)
      return void b.error(
        "Problem getting subdata: offset and length exceeded destination size!"
      );
    e + h * (s ?? 0) > this.byteSize &&
      b.warn(
        "Potential problem getting subdata: requested data exceeds buffer size!"
      );
    const a = this._context.gl;
    this._context.bindBuffer(this, f.COPY_READ_BUFFER),
      a.getBufferSubData(f.COPY_READ_BUFFER, e, t, i, s),
      this._context.unbindBuffer(f.COPY_READ_BUFFER);
  }
  async getSubDataAsync(t, e = 0, i, s) {
    this._context.type === x.WEBGL2
      ? (await this._context.clientWaitAsync(), this.getSubData(t, e, i, s))
      : b.error("Get buffer subdata is supported in WebGL2 only!");
  }
};
class P {
  constructor(t, e) {
    (this._context = t),
      (this._desc = e),
      (this.type = "renderbuffer"),
      this._context.instanceCounter.increment(g.Renderbuffer, this);
    const i = this._context.gl;
    (this.glName = i.createRenderbuffer()),
      this._context.bindRenderbuffer(this);
    const { width: s, height: h, internalFormat: a, multisampled: n } = e;
    if (n) {
      if (this._context.type !== x.WEBGL2)
        throw new Error(
          "Multisampled renderbuffers are not supported in WebGL1!"
        );
      i.renderbufferStorageMultisample(i.RENDERBUFFER, this.samples, a, s, h);
    } else i.renderbufferStorage(i.RENDERBUFFER, a, s, h);
  }
  get descriptor() {
    return this._desc;
  }
  get samples() {
    const t = this._desc.samples,
      e = this._context.parameters.maxSamples;
    return t ? Math.min(t, e) : e;
  }
  resize(t, e) {
    const i = this._desc;
    if (i.width === t && i.height === e) return;
    (i.width = t), (i.height = e);
    const s = this._context.gl;
    this._context.bindRenderbuffer(this),
      i.multisampled
        ? s.renderbufferStorageMultisample(
            s.RENDERBUFFER,
            this.samples,
            i.internalFormat,
            i.width,
            i.height
          )
        : s.renderbufferStorage(
            s.RENDERBUFFER,
            i.internalFormat,
            i.width,
            i.height
          );
  }
  dispose() {
    this._context &&
      (this._context.gl.deleteRenderbuffer(this.glName),
      this._context.instanceCounter.decrement(g.Renderbuffer, this),
      (this._context = V(this._context)));
  }
}
function ct(r) {
  const t = r.gl;
  switch (t.getError()) {
    case t.NO_ERROR:
      return null;
    case t.INVALID_ENUM:
      return "An unacceptable value has been specified for an enumerated argument";
    case t.INVALID_VALUE:
      return "An unacceptable value has been specified for an argument";
    case t.INVALID_OPERATION:
      return "The specified command is not allowed for the current state";
    case t.INVALID_FRAMEBUFFER_OPERATION:
      return "The currently bound framebuffer is not framebuffer complete";
    case t.OUT_OF_MEMORY:
      return "Not enough memory is left to execute the command";
    case t.CONTEXT_LOST_WEBGL:
      return "WebGL context is lost";
  }
  return "Unknown error";
}
function _t(r, t) {
  return (
    r.vertexBuffers[t].size /
    (function (e) {
      return e[0].stride;
    })(r.layout[t])
  );
}
function et(r, t, e, i, s = 0) {
  const h = r.gl,
    a = r.capabilities.instancing;
  r.bindBuffer(e);
  for (const n of i) {
    const _ = t.get(n.name),
      u = s * n.stride;
    if (n.count <= 4)
      h.vertexAttribPointer(
        _,
        n.count,
        n.type,
        n.normalized,
        n.stride,
        n.offset + u
      ),
        h.enableVertexAttribArray(_),
        n.divisor > 0 && a && a.vertexAttribDivisor(_, n.divisor);
    else if (n.count === 9)
      for (let o = 0; o < 3; o++)
        h.vertexAttribPointer(
          _ + o,
          3,
          n.type,
          n.normalized,
          n.stride,
          n.offset + 12 * o + u
        ),
          h.enableVertexAttribArray(_ + o),
          n.divisor > 0 && a && a.vertexAttribDivisor(_ + o, n.divisor);
    else if (n.count === 16)
      for (let o = 0; o < 4; o++)
        h.vertexAttribPointer(
          _ + o,
          4,
          n.type,
          n.normalized,
          n.stride,
          n.offset + 16 * o + u
        ),
          h.enableVertexAttribArray(_ + o),
          n.divisor > 0 && a && a.vertexAttribDivisor(_ + o, n.divisor);
  }
}
function it(r, t, e, i) {
  const s = r.gl,
    h = r.capabilities.instancing;
  r.bindBuffer(e);
  for (const a of i) {
    const n = t.get(a.name);
    if (a.count <= 4)
      s.disableVertexAttribArray(n),
        a.divisor && a.divisor > 0 && h && h.vertexAttribDivisor(n, 0);
    else if (a.count === 9)
      for (let _ = 0; _ < 3; _++)
        s.disableVertexAttribArray(n + _),
          a.divisor && a.divisor > 0 && h && h.vertexAttribDivisor(n + _, 0);
    else if (a.count === 16)
      for (let _ = 0; _ < 4; _++)
        s.disableVertexAttribArray(n + _),
          a.divisor && a.divisor > 0 && h && h.vertexAttribDivisor(n + _, 0);
  }
  r.unbindBuffer(f.ARRAY_BUFFER);
}
function st(r) {
  switch (r) {
    case E.ALPHA:
    case E.LUMINANCE:
    case E.RED:
    case E.RED_INTEGER:
    case c.R8:
    case c.R8I:
    case c.R8UI:
    case c.R8_SNORM:
    case T.STENCIL_INDEX8:
      return 1;
    case E.LUMINANCE_ALPHA:
    case E.RG:
    case E.RG_INTEGER:
    case c.RGBA4:
    case c.R16F:
    case c.R16I:
    case c.R16UI:
    case c.RG8:
    case c.RG8I:
    case c.RG8UI:
    case c.RG8_SNORM:
    case c.RGB565:
    case c.RGB5_A1:
    case T.DEPTH_COMPONENT16:
      return 2;
    case E.DEPTH_COMPONENT:
    case E.RGB:
    case E.RGB_INTEGER:
    case c.RGB8:
    case c.RGB8I:
    case c.RGB8UI:
    case c.RGB8_SNORM:
    case c.SRGB8:
    case T.DEPTH_COMPONENT24:
      return 3;
    case E.DEPTH_STENCIL:
    case E.RGBA:
    case E.RGBA_INTEGER:
    case c.RGBA8:
    case c.R32F:
    case c.R11F_G11F_B10F:
    case c.RG16F:
    case c.R32I:
    case c.R32UI:
    case c.RG16I:
    case c.RG16UI:
    case c.RGBA8I:
    case c.RGBA8UI:
    case c.RGBA8_SNORM:
    case c.SRGB8_ALPHA8:
    case c.RGB9_E5:
    case c.RGB10_A2UI:
    case c.RGB10_A2:
    case T.DEPTH_STENCIL:
    case T.DEPTH_COMPONENT32F:
    case T.DEPTH24_STENCIL8:
      return 4;
    case T.DEPTH32F_STENCIL8:
      return 5;
    case c.RGB16F:
    case c.RGB16I:
    case c.RGB16UI:
      return 6;
    case c.RG32F:
    case c.RG32I:
    case c.RG32UI:
    case c.RGBA16F:
    case c.RGBA16I:
    case c.RGBA16UI:
      return 8;
    case c.RGB32F:
    case c.RGB32I:
    case c.RGB32UI:
      return 12;
    case c.RGBA32F:
    case c.RGBA32I:
    case c.RGBA32UI:
      return 16;
    case d.COMPRESSED_RGB_S3TC_DXT1_EXT:
    case d.COMPRESSED_RGBA_S3TC_DXT1_EXT:
      return 0.5;
    case d.COMPRESSED_RGBA_S3TC_DXT3_EXT:
    case d.COMPRESSED_RGBA_S3TC_DXT5_EXT:
      return 1;
    case d.COMPRESSED_R11_EAC:
    case d.COMPRESSED_SIGNED_R11_EAC:
    case d.COMPRESSED_RGB8_ETC2:
    case d.COMPRESSED_SRGB8_ETC2:
    case d.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:
    case d.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:
      return 0.5;
    case d.COMPRESSED_RG11_EAC:
    case d.COMPRESSED_SIGNED_RG11_EAC:
    case d.COMPRESSED_RGBA8_ETC2_EAC:
    case d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:
      return 1;
  }
  return 0;
}
function z(r) {
  if (w(r)) return 0;
  if ("descriptor" in r) return r.glName ? z(r.descriptor) : 0;
  const t = r.internalFormat || ("pixelFormat" in r && r.pixelFormat);
  if (!t) return 0;
  const e = "hasMipmap" in r && r.hasMipmap ? 1.3 : 1,
    i = r.width * r.height;
  return st(t) * i * e;
}
let rt = class C {
  constructor(t, e, i = null, s = null) {
    if (
      ((this._context = t),
      (this._glName = null),
      (this._depthAttachment = null),
      (this._stencilAttachment = null),
      (this._colorAttachments = new Map()),
      (this._depthStencilTexture = null),
      (this._initialized = !1),
      (this._desc = { ...e }),
      t.instanceCounter.increment(g.FramebufferObject, this),
      B(i))
    ) {
      Array.isArray(i) || (i = [i]);
      for (let h = 0; h < i.length; ++h) {
        const a = i[h],
          n = A.COLOR_ATTACHMENT0 + h;
        let _;
        k(a)
          ? (m(a)
              ? ((_ = a.descriptor), this._colorAttachments.set(n, a))
              : ((_ = a),
                this._colorAttachments.set(n, new N(this._context, _))),
            M(_, this._desc))
          : (j(a)
              ? ((_ = a.descriptor), this._colorAttachments.set(n, a))
              : ((_ = a),
                this._colorAttachments.set(n, new P(this._context, _))),
            y(_, this._desc)),
          this._validateColorAttachmentPoint(n);
      }
    }
    if (B(s)) {
      let h, a;
      if (k(s))
        this._context.capabilities.depthTexture,
          m(s)
            ? ((a = s.descriptor), (this._depthStencilTexture = s))
            : ((a = s), (this._depthStencilTexture = new N(this._context, a))),
          M(a, this._desc);
      else {
        j(s)
          ? ((a = s.descriptor), (h = s))
          : ((a = s), (h = new P(this._context, a)));
        const n =
          this._desc.depthStencilTarget ?? l.DEPTH_STENCIL_RENDER_BUFFER;
        n === l.STENCIL_RENDER_BUFFER
          ? (this._stencilAttachment = h)
          : (n === l.DEPTH_RENDER_BUFFER ||
              n === l.DEPTH_STENCIL_RENDER_BUFFER) &&
            (this._depthAttachment = h),
          (this._desc.depthStencilTarget = n),
          y(a, this._desc);
      }
    }
  }
  dispose() {
    if (!this._desc) return;
    const t = this._context.getBoundFramebufferObject();
    this._disposeColorAttachments(),
      this._disposeDepthStencilAttachments(),
      this._glName &&
        (this._context.gl.deleteFramebuffer(this._glName),
        (this._glName = null)),
      this._context.bindFramebuffer(t),
      this._context.instanceCounter.decrement(g.FramebufferObject, this),
      (this._desc = null);
  }
  get glName() {
    return this._glName;
  }
  get descriptor() {
    return this._desc;
  }
  get colorTexture() {
    const t = this._colorAttachments.get(A.COLOR_ATTACHMENT0);
    return t && m(t) ? t : null;
  }
  get colorAttachment() {
    return this._colorAttachments.get(A.COLOR_ATTACHMENT0);
  }
  get depthStencilAttachment() {
    return (
      this._depthStencilTexture ||
      this._depthAttachment ||
      this._stencilAttachment
    );
  }
  get depthStencilTexture() {
    return this._depthStencilTexture;
  }
  get width() {
    return this._desc.width ?? 0;
  }
  get height() {
    return this._desc.height ?? 0;
  }
  get gpuMemoryUsage() {
    return (
      [...this._colorAttachments].reduce((t, [e, i]) => t + z(i), 0) +
      z(this.depthStencilAttachment)
    );
  }
  getColorTexture(t) {
    const e = this._colorAttachments.get(t);
    return e && m(e) ? e : null;
  }
  attachColorTexture(t, e = A.COLOR_ATTACHMENT0) {
    t &&
      (this._validateColorAttachmentPoint(e),
      M(t.descriptor, this._desc),
      this._disposeColorAttachments(),
      this._initialized &&
        (this._context.bindFramebuffer(this),
        this._framebufferTexture2D(t.glName, e)),
      this._colorAttachments.set(e, t));
  }
  detachColorTexture(t = A.COLOR_ATTACHMENT0) {
    const e = this._colorAttachments.get(t);
    if (m(e)) {
      const i = e;
      return (
        this._initialized &&
          (this._context.bindFramebuffer(this),
          this._framebufferTexture2D(null, t)),
        this._colorAttachments.delete(t),
        i
      );
    }
  }
  setColorTextureTarget(t, e = A.COLOR_ATTACHMENT0) {
    const i = this._colorAttachments.get(e);
    m(i) && this._framebufferTexture2D(i.glName, e, t);
  }
  attachDepthStencilTexture(t) {
    if (w(t)) return;
    const e = t.descriptor;
    e.pixelFormat,
      E.DEPTH_STENCIL,
      e.dataType,
      I.UNSIGNED_INT_24_8,
      this._context.capabilities.depthTexture,
      M(e, this._desc),
      this._desc.depthStencilTarget &&
        this._desc.depthStencilTarget !== l.DEPTH_STENCIL_TEXTURE &&
        (this._desc.depthStencilTarget = l.DEPTH_STENCIL_TEXTURE),
      this._disposeDepthStencilAttachments(),
      this._initialized &&
        (this._context.bindFramebuffer(this),
        this._framebufferTexture2D(t.glName, X)),
      (this._depthStencilTexture = t);
  }
  detachDepthStencilTexture() {
    const t = this._depthStencilTexture;
    return (
      t &&
        this._initialized &&
        (this._context.bindFramebuffer(this),
        this._framebufferTexture2D(null, X)),
      (this._depthStencilTexture = null),
      t
    );
  }
  attachDepthStencilBuffer(t) {
    if (w(t)) return;
    const e = t.descriptor;
    if (
      (e.internalFormat !== T.DEPTH_STENCIL &&
        (e.internalFormat, T.DEPTH_COMPONENT16),
      y(e, this._desc),
      this._disposeDepthStencilAttachments(),
      (this._desc.depthStencilTarget =
        e.internalFormat === T.DEPTH_STENCIL
          ? l.DEPTH_STENCIL_RENDER_BUFFER
          : l.DEPTH_RENDER_BUFFER),
      this._initialized)
    ) {
      this._context.bindFramebuffer(this);
      const i = this._context.gl,
        s =
          this._desc.depthStencilTarget === l.DEPTH_RENDER_BUFFER
            ? i.DEPTH_ATTACHMENT
            : i.DEPTH_STENCIL_ATTACHMENT;
      i.framebufferRenderbuffer(F.FRAMEBUFFER, s, i.RENDERBUFFER, t.glName);
    }
    this._depthAttachment = t;
  }
  detachDepthStencilBuffer() {
    const t = this._context.gl,
      e = this._depthAttachment;
    if (e && this._initialized) {
      this._context.bindFramebuffer(this);
      const i =
        this._desc.depthStencilTarget === l.DEPTH_RENDER_BUFFER
          ? t.DEPTH_ATTACHMENT
          : t.DEPTH_STENCIL_ATTACHMENT;
      t.framebufferRenderbuffer(F.FRAMEBUFFER, i, t.RENDERBUFFER, null);
    }
    return (this._depthAttachment = null), e;
  }
  detachAll() {
    this._colorAttachments.forEach((t, e) => this._detachColorAttachment(e)),
      this.detachDepthStencilBuffer(),
      this.detachDepthStencilTexture();
  }
  copyToTexture(t, e, i, s, h, a, n) {
    const _ = this._desc,
      u = n.descriptor;
    n.descriptor.target,
      R.TEXTURE_2D,
      (_ == null ? void 0 : _.width) == null ||
        (_ == null ? void 0 : _.height) == null ||
        (u == null ? void 0 : u.width) == null ||
        (u == null ? void 0 : u.height) == null ||
        t + i > _.width ||
        e + s > _.height ||
        h + i > u.width ||
        u.height;
    const o = this._context,
      p = o.bindTexture(n, N.TEXTURE_UNIT_FOR_UPDATES);
    o.setActiveTexture(N.TEXTURE_UNIT_FOR_UPDATES),
      o.bindFramebuffer(this),
      o.gl.copyTexSubImage2D(R.TEXTURE_2D, 0, h, a, t, e, i, s),
      o.bindTexture(p, N.TEXTURE_UNIT_FOR_UPDATES);
  }
  readPixels(t, e, i, s, h, a, n) {
    this._context.bindFramebuffer(this),
      this._context.gl.readPixels(t, e, i, s, h, a, n);
  }
  async readPixelsAsync(t, e, i, s, h, a, n) {
    if (this._context.type !== x.WEBGL2)
      return G(), void this.readPixels(t, e, i, s, h, a, n);
    const _ = this._context.gl,
      u = tt.createPixelPack(this._context, H.STREAM_READ, n.byteLength);
    this._context.bindBuffer(u),
      this._context.bindFramebuffer(this),
      _.readPixels(t, e, i, s, h, a, 0),
      this._context.unbindBuffer(f.PIXEL_PACK_BUFFER),
      await u.getSubDataAsync(n),
      u.dispose();
  }
  resize(t, e) {
    const i = this._desc;
    if (i.width !== t || i.height !== e) {
      if (((i.width = t), (i.height = e), !this._initialized))
        return (
          this._colorAttachments.forEach((s) => {
            s && s.resize(t, e);
          }),
          void (
            this._depthStencilTexture && this._depthStencilTexture.resize(t, e)
          )
        );
      this._colorAttachments.forEach((s) => {
        s && s.resize(t, e);
      }),
        this._depthStencilTexture != null
          ? this._depthStencilTexture.resize(t, e)
          : (this._depthAttachment || this._stencilAttachment) &&
            (this._depthAttachment && this._depthAttachment.resize(t, e),
            this._stencilAttachment && this._stencilAttachment.resize(t, e)),
        this._context.getBoundFramebufferObject() === this &&
          this._context.bindFramebuffer(null),
        (this._initialized = !1);
    }
  }
  initializeAndBind(t = F.FRAMEBUFFER) {
    const e = this._context.gl;
    if (this._initialized) return void e.bindFramebuffer(t, this.glName);
    this._glName && e.deleteFramebuffer(this._glName);
    const i = this._context,
      s = e.createFramebuffer(),
      h = this._desc,
      a = h.colorTarget ?? U.RENDER_BUFFER,
      n = h.width ?? 1,
      _ = h.height ?? 1;
    if ((e.bindFramebuffer(t, s), this._colorAttachments.size === 0))
      if (a === U.TEXTURE || a === U.CUBEMAP)
        this._colorAttachments.set(
          A.COLOR_ATTACHMENT0,
          (function (o, p, Q) {
            return new N(o, {
              target: Q,
              pixelFormat: E.RGBA,
              dataType: I.UNSIGNED_BYTE,
              samplingMode: W.NEAREST,
              wrapMode: Y.CLAMP_TO_EDGE,
              width: p.width,
              height: p.height,
            });
          })(
            i,
            h,
            this.descriptor.colorTarget === U.CUBEMAP
              ? R.TEXTURE_CUBE_MAP
              : R.TEXTURE_2D
          )
        );
      else {
        const o = new P(i, { internalFormat: c.RGBA4, width: n, height: _ });
        this._colorAttachments.set(A.COLOR_ATTACHMENT0, o);
      }
    this._colorAttachments.forEach((o, p) => {
      o &&
        (m(o)
          ? this._framebufferTexture2D(o.glName, p, K(o), t)
          : e.framebufferRenderbuffer(t, p, e.RENDERBUFFER, o.glName));
    });
    const u = h.depthStencilTarget ?? l.NONE;
    switch (u) {
      case l.DEPTH_RENDER_BUFFER:
      case l.DEPTH_STENCIL_RENDER_BUFFER: {
        this._depthAttachment ||
          (this._depthAttachment = new P(i, {
            internalFormat:
              h.depthStencilTarget === l.DEPTH_RENDER_BUFFER
                ? T.DEPTH_COMPONENT16
                : T.DEPTH_STENCIL,
            width: n,
            height: _,
          }));
        const o =
          u === l.DEPTH_RENDER_BUFFER
            ? e.DEPTH_ATTACHMENT
            : e.DEPTH_STENCIL_ATTACHMENT;
        e.framebufferRenderbuffer(
          t,
          o,
          e.RENDERBUFFER,
          this._depthAttachment.glName
        );
        break;
      }
      case l.STENCIL_RENDER_BUFFER:
        this._stencilAttachment ||
          (this._stencilAttachment = new P(i, {
            internalFormat: T.STENCIL_INDEX8,
            width: n,
            height: _,
          })),
          e.framebufferRenderbuffer(
            t,
            e.STENCIL_ATTACHMENT,
            e.RENDERBUFFER,
            this._stencilAttachment.glName
          );
        break;
      case l.DEPTH_STENCIL_TEXTURE:
        if (!this._depthStencilTexture) {
          i.capabilities.depthTexture;
          const o = {
            target: R.TEXTURE_2D,
            pixelFormat: E.DEPTH_STENCIL,
            dataType: I.UNSIGNED_INT_24_8,
            samplingMode: W.NEAREST,
            wrapMode: Y.CLAMP_TO_EDGE,
            width: n,
            height: _,
          };
          this._depthStencilTexture = new N(i, o);
        }
        this._framebufferTexture2D(
          this._depthStencilTexture.glName,
          e.DEPTH_STENCIL_ATTACHMENT,
          K(this._depthStencilTexture),
          t
        );
    }
    G() && (e.checkFramebufferStatus(t), e.FRAMEBUFFER_COMPLETE),
      (this._glName = s),
      (this._initialized = !0);
  }
  _framebufferTexture2D(
    t,
    e = A.COLOR_ATTACHMENT0,
    i = R.TEXTURE_2D,
    s = F.FRAMEBUFFER,
    h = 0
  ) {
    this._context.gl.framebufferTexture2D(s, e, i, t, h);
  }
  _detachColorAttachment(t) {
    G();
    const e = this._context.gl,
      i = this._colorAttachments.get(t);
    return (
      m(i)
        ? this._initialized &&
          (this._context.bindFramebuffer(this),
          this._framebufferTexture2D(null, t))
        : this._initialized &&
          (this._context.bindFramebuffer(this),
          e.framebufferRenderbuffer(F.FRAMEBUFFER, t, e.RENDERBUFFER, null)),
      this._colorAttachments.delete(t),
      i
    );
  }
  _disposeColorAttachments() {
    this._colorAttachments.forEach((t, e) => {
      this._detachColorAttachment(e), t.dispose();
    }),
      this._colorAttachments.clear();
  }
  _disposeDepthStencilAttachments() {
    const t = this._context.gl;
    if (this._depthAttachment) {
      if (this._initialized) {
        this._context.bindFramebuffer(this);
        const e =
          this._desc.depthStencilTarget === l.DEPTH_RENDER_BUFFER
            ? t.DEPTH_ATTACHMENT
            : t.DEPTH_STENCIL_ATTACHMENT;
        t.framebufferRenderbuffer(F.FRAMEBUFFER, e, t.RENDERBUFFER, null);
      }
      this._depthAttachment.dispose(), (this._depthAttachment = null);
    }
    this._stencilAttachment &&
      (this._initialized &&
        (this._context.bindFramebuffer(this),
        t.framebufferRenderbuffer(
          F.FRAMEBUFFER,
          t.STENCIL_ATTACHMENT,
          t.RENDERBUFFER,
          null
        )),
      this._stencilAttachment.dispose(),
      (this._stencilAttachment = null)),
      this._depthStencilTexture &&
        (this._initialized &&
          (this._context.bindFramebuffer(this),
          this._framebufferTexture2D(null, t.DEPTH_STENCIL_ATTACHMENT)),
        this._depthStencilTexture.dispose(),
        (this._depthStencilTexture = null));
  }
  _validateColorAttachmentPoint(t) {
    if (C._MAX_COLOR_ATTACHMENTS === -1) {
      const i = this._context.capabilities.drawBuffers;
      if (i) {
        const s = this._context.gl;
        C._MAX_COLOR_ATTACHMENTS = s.getParameter(i.MAX_COLOR_ATTACHMENTS);
      } else C._MAX_COLOR_ATTACHMENTS = 1;
    }
    const e = t - A.COLOR_ATTACHMENT0;
    e + 1 > C._MAX_COLOR_ATTACHMENTS &&
      v
        .getLogger("esri.views.webgl.FrameBufferObject")
        .error(
          "esri.FrameBufferObject",
          `illegal attachment point for color attachment: ${
            e + 1
          }. Implementation supports up to ${
            C._MAX_COLOR_ATTACHMENTS
          } color attachments`
        );
  }
};
function m(r) {
  return r != null && "type" in r && r.type === "texture";
}
function j(r) {
  return r != null && "type" in r && r.type === "renderbuffer";
}
function k(r) {
  return m(r) || (r != null && "pixelFormat" in r);
}
function M(r, t) {
  r.target !== R.TEXTURE_2D && (r.target, R.TEXTURE_CUBE_MAP),
    t.width !== void 0 && t.width >= 0 && t.height !== void 0 && t.height >= 0
      ? t.width === r.width && (t.height, r.height)
      : ((t.width = r.width), (t.height = r.height));
}
function y(r, t) {
  t.width !== void 0 && t.width >= 0 && t.height !== void 0 && t.height >= 0
    ? t.width === r.width && (t.height, r.height)
    : ((t.width = r.width), (t.height = r.height));
}
function K(r) {
  return r.descriptor.target === R.TEXTURE_CUBE_MAP
    ? R.TEXTURE_CUBE_MAP_POSITIVE_X
    : R.TEXTURE_2D;
}
rt._MAX_COLOR_ATTACHMENTS = -1;
const S = v.getLogger("esri.views.webgl.VertexArrayObject");
let ot = class {
  constructor(r, t, e, i, s = null) {
    (this._context = r),
      (this._locations = t),
      (this._layout = e),
      (this._buffers = i),
      (this._indexBuffer = s),
      (this._glName = null),
      (this._initialized = !1),
      r.instanceCounter.increment(g.VertexArrayObject, this);
  }
  get glName() {
    return this._glName;
  }
  get context() {
    return this._context;
  }
  get vertexBuffers() {
    return this._buffers;
  }
  get indexBuffer() {
    return this._indexBuffer;
  }
  get size() {
    return Object.keys(this._buffers).reduce(
      (r, t) => r + this._buffers[t].size,
      B(this._indexBuffer) ? this._indexBuffer.size : 0
    );
  }
  get layout() {
    return this._layout;
  }
  get locations() {
    return this._locations;
  }
  dispose(r = !0) {
    var t, e, i;
    if (this._context) {
      if (this._glName) {
        const s =
          (e = (t = this._context) == null ? void 0 : t.capabilities) == null
            ? void 0
            : e.vao;
        s
          ? (s.deleteVertexArray(this._glName), (this._glName = null))
          : S.warn("Leaked WebGL VAO");
      }
      if (
        (this._context.getBoundVAO() === this && this._context.bindVAO(null), r)
      ) {
        for (const s in this._buffers)
          (i = this._buffers[s]) == null || i.dispose(),
            delete this._buffers[s];
        this._indexBuffer = Z(this._indexBuffer);
      }
      this._context.instanceCounter.decrement(g.VertexArrayObject, this),
        (this._context = V(this._context));
    } else
      (this._glName ||
        (r && Object.getOwnPropertyNames(this._buffers).length > 0)) &&
        S.warn("Leaked WebGL VAO");
  }
  initialize() {
    if (this._initialized) return;
    const r = this._context.capabilities.vao;
    if (r) {
      const t = r.createVertexArray();
      r.bindVertexArray(t),
        this._bindLayout(),
        r.bindVertexArray(null),
        (this._glName = t);
    }
    this._initialized = !0;
  }
  bind() {
    this.initialize();
    const r = this._context.capabilities.vao;
    r
      ? r.bindVertexArray(this.glName)
      : (this._context.bindVAO(null), this._bindLayout());
  }
  _bindLayout() {
    const { _buffers: r, _layout: t, _indexBuffer: e } = this;
    r || S.error("Vertex buffer dictionary is empty!");
    const i = this._context.gl;
    for (const s in r) {
      const h = r[s];
      h || S.error("Vertex buffer is uninitialized!");
      const a = t[s];
      a || S.error("Vertex element descriptor is empty!"),
        et(this._context, this._locations, h, a);
    }
    B(e) &&
      (this._context.capabilities.vao
        ? i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.glName)
        : this._context.bindBuffer(e));
  }
  unbind() {
    this.initialize();
    const r = this._context.capabilities.vao;
    r ? r.bindVertexArray(null) : this._unbindLayout();
  }
  _unbindLayout() {
    const { _buffers: r, _layout: t } = this;
    r || S.error("Vertex buffer dictionary is empty!");
    for (const e in r) {
      const i = r[e];
      i || S.error("Vertex buffer is uninitialized!");
      const s = t[e];
      it(this._context, this._locations, i, s);
    }
    B(this._indexBuffer) &&
      this._context.unbindBuffer(this._indexBuffer.bufferType);
  }
};
export { tt as E, st as _, ot as f, ct as i, _t as n, P as s, rt as x };
