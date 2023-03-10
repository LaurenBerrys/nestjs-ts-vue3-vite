import {
  r as n,
  t as d,
  D as g,
  d as p,
  aw as m,
  M as c,
  ax as l,
  i as B,
  ay as f,
  az as w,
  aU as k,
  e as R,
  a as S,
  aN as T,
} from "./index.8fd7165c.js";
import { r as b } from "./Container.a5892366.js";
import { M as v, P as x, U as y, G as A, D as E } from "./enums.64ab819c.js";
import { E as I } from "./Texture.fb0c670a.js";
class M {
  constructor(t, e, i) {
    (this.pixelBlock = t), (this.extent = e), (this.originalPixelBlock = i);
  }
  get width() {
    return n(this.pixelBlock) ? this.pixelBlock.width : 0;
  }
  get height() {
    return n(this.pixelBlock) ? this.pixelBlock.height : 0;
  }
  render(t) {
    const e = this.pixelBlock;
    if (d(e)) return;
    const i = this.filter({
      extent: this.extent,
      pixelBlock: this.originalPixelBlock ?? e,
    });
    if (d(i.pixelBlock)) return;
    i.pixelBlock.maskIsAlpha && (i.pixelBlock.premultiplyAlpha = !0);
    const s = i.pixelBlock.getAsRGBA(),
      r = t.createImageData(i.pixelBlock.width, i.pixelBlock.height);
    r.data.set(s), t.putImageData(r, 0, 0);
  }
  getRenderedRasterPixels() {
    const t = this.filter({ extent: this.extent, pixelBlock: this.pixelBlock });
    return d(t.pixelBlock)
      ? null
      : (t.pixelBlock.maskIsAlpha && (t.pixelBlock.premultiplyAlpha = !0),
        {
          width: t.pixelBlock.width,
          height: t.pixelBlock.height,
          renderedRasterPixels: new Uint8Array(t.pixelBlock.getAsRGBA().buffer),
        });
  }
}
function P(h) {
  return h && "render" in h;
}
function D(h) {
  const t = document.createElement("canvas");
  return (
    (t.width = h.width), (t.height = h.height), h.render(t.getContext("2d")), t
  );
}
class C extends b {
  constructor(t = null, e) {
    super(),
      (this.blendFunction = "standard"),
      (this._sourceWidth = 0),
      (this._sourceHeight = 0),
      (this._textureInvalidated = !1),
      (this._texture = null),
      (this.stencilRef = 0),
      (this.coordScale = [1, 1]),
      (this._height = void 0),
      (this.pixelRatio = 1),
      (this.resolution = 0),
      (this.rotation = 0),
      (this._source = null),
      (this._width = void 0),
      (this.x = 0),
      (this.y = 0),
      (this.immutable = e.immutable ?? !1),
      (this.requestRenderOnSourceChangedEnabled =
        e.requestRenderOnSourceChangedEnabled ?? !0),
      (this.source = t),
      (this.requestRender = this.requestRender.bind(this));
  }
  destroy() {
    this._texture && (this._texture.dispose(), (this._texture = null)),
      n(this._uploadStatus) &&
        (this._uploadStatus.controller.abort(), (this._uploadStatus = null));
  }
  get isSourceScaled() {
    return (
      this.width !== this._sourceWidth || this.height !== this._sourceHeight
    );
  }
  get height() {
    return this._height !== void 0 ? this._height : this._sourceHeight;
  }
  set height(t) {
    this._height = t;
  }
  get source() {
    return this._source;
  }
  set source(t) {
    (t == null && this._source == null) ||
      ((this._source = t),
      this._source instanceof HTMLImageElement
        ? ((this._sourceHeight = this._source.naturalHeight),
          (this._sourceWidth = this._source.naturalWidth))
        : this._source &&
          ((this._sourceHeight = this._source.height),
          (this._sourceWidth = this._source.width)),
      this.invalidateTexture());
  }
  get width() {
    return this._width !== void 0 ? this._width : this._sourceWidth;
  }
  set width(t) {
    this._width = t;
  }
  beforeRender(t) {
    super.beforeRender(t), this.updateTexture(t);
  }
  async setSourceAsync(t, e) {
    n(this._uploadStatus) && this._uploadStatus.controller.abort();
    const i = new AbortController(),
      s = g();
    return (
      p(e, () => i.abort()),
      p(i, (r) => s.reject(r)),
      (this._uploadStatus = { controller: i, resolver: s }),
      (this.source = t),
      s.promise
    );
  }
  invalidateTexture() {
    this._textureInvalidated ||
      ((this._textureInvalidated = !0),
      this.requestRenderOnSourceChangedEnabled && this.requestRender());
  }
  updateTransitionProperties(t, e) {
    t >= 64 &&
      ((this.fadeTransitionEnabled = !1), (this.inFadeTransition = !1)),
      super.updateTransitionProperties(t, e);
  }
  setTransform(t) {
    const e = m(this.transforms.dvs),
      [i, s] = t.toScreenNoRotation([0, 0], [this.x, this.y]),
      r = this.resolution / this.pixelRatio / t.resolution,
      a = r * this.width,
      o = r * this.height,
      u = (Math.PI * this.rotation) / 180;
    c(e, e, l(i, s)),
      c(e, e, l(a / 2, o / 2)),
      B(e, e, -u),
      c(e, e, l(-a / 2, -o / 2)),
      f(e, e, l(a, o)),
      w(this.transforms.dvs, t.displayViewMat3, e);
  }
  setSamplingProfile(t) {
    this._texture &&
      (t.mips &&
        !this._texture.descriptor.hasMipmap &&
        this._texture.generateMipmap(),
      this._texture.setSamplingMode(t.samplingMode));
  }
  bind(t, e) {
    this._texture && t.bindTexture(this._texture, e);
  }
  async updateTexture({ context: t, painter: e }) {
    if (!this._textureInvalidated) return;
    if (
      ((this._textureInvalidated = !1),
      this._texture || (this._texture = this._createTexture(t)),
      !this.source)
    )
      return void this._texture.setData(null);
    this._texture.resize(this._sourceWidth, this._sourceHeight);
    const i = (function (s) {
      return P(s)
        ? s instanceof M
          ? T(s.getRenderedRasterPixels(), (r) => r.renderedRasterPixels)
          : D(s)
        : s;
    })(this.source);
    try {
      if (n(this._uploadStatus)) {
        const { controller: s, resolver: r } = this._uploadStatus,
          a = { signal: s.signal },
          { width: o, height: u } = this,
          _ = this._texture;
        await e.textureUploadManager.enqueueTextureUpdate(
          { data: i, texture: _, width: o, height: u },
          a
        ),
          r.resolve(),
          (this._uploadStatus = null);
      } else this._texture.setData(i);
      this.ready();
    } catch (s) {
      k(s);
    }
  }
  onDetach() {
    this.destroy();
  }
  _createTransforms() {
    return { dvs: R() };
  }
  _createTexture(t) {
    const e = this.immutable && t.type === S.WEBGL2;
    return new I(t, {
      target: v.TEXTURE_2D,
      pixelFormat: x.RGBA,
      internalFormat: e ? y.RGBA8 : x.RGBA,
      dataType: A.UNSIGNED_BYTE,
      wrapMode: E.CLAMP_TO_EDGE,
      isImmutable: e,
      width: this._sourceWidth,
      height: this._sourceHeight,
    });
  }
}
export { C as R, D as S, P as T, M as l };
