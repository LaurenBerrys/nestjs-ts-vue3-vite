import {
  h as V,
  e as L,
  aw as xe,
  M as j,
  ax as k,
  i as be,
  ay as Te,
  az as ue,
  r as f,
  a as N,
  aA as Y,
  T as he,
  aB as we,
  ae as d,
  af as m,
  ag as E,
  as as ve,
  aq as Pe,
  ab as $,
  ar as Ie,
  aC as Re,
  a9 as Ue,
  aa as Se,
  q as Q,
  R as Fe,
  aD as W,
  j as B,
  Q as G,
  L as K,
  aE as Ce,
  G as U,
  au as Me,
  s as Z,
  t as ze,
  al as ce,
  at as ee,
  an as Ve,
  H as Be,
} from "./index.8fd7165c.js";
import { m as te } from "./multidimensionalUtils.54c50a30.js";
import { y as Ge, m as Le, h as Ee } from "./RasterVFDisplayObject.87750a62.js";
import { f as ke, u as De } from "./LayerView.d8517e2e.js";
import { h as de, m as Oe, j as Ae } from "./dataUtils.e77088c3.js";
import { r as qe } from "./Container.a5892366.js";
import {
  L as H,
  M as je,
  P as se,
  U as We,
  G as Ne,
  D as Qe,
  R as D,
  I as re,
  Y as He,
  V as Je,
} from "./enums.64ab819c.js";
import {
  l as Xe,
  c as Ye,
  _ as ie,
  d as z,
  O as v,
  g as J,
  A as $e,
  E as Ke,
  p as Ze,
  h as et,
  T as tt,
} from "./rasterUtils.f0d03219.js";
import { E as st } from "./Texture.fb0c670a.js";
import { o as M } from "./definitions.ce677f69.js";
import { c as rt, n as ae } from "./WGLContainer.e7ddd41d.js";
import { x as it } from "./VertexArrayObject.1b8f3583.js";
import { r as pe } from "./TiledDisplayObject.3b82e169.js";
import { T as A } from "./color.4c5303e9.js";
import { i as me } from "./TileContainer.4bfeb0d8.js";
import {
  g as ne,
  f as oe,
  u as at,
  a as nt,
} from "./RawBlockCache.7184fc55.js";
import {
  U as ot,
  i as lt,
  v as le,
  J as ut,
} from "./rasterProjectionHelper.fde7641d.js";
import { r as fe } from "./util.79a0d0b9.js";
import { s as ht } from "./popupUtils.4682c28c.js";
import { i as ct } from "./RefreshableLayerView.d05f575e.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./ProgramTemplate.4bbf0f5e.js";
import "./MaterialKey.97cb3dc8.js";
import "./utils.1f803f1b.js";
import "./StyleDefinition.4f77c81e.js";
import "./enums.13513a14.js";
import "./config.1337d16e.js";
import "./GeometryUtils.82ab0a13.js";
import "./earcut.9f54f087.js";
const dt = {
  bandCount: 3,
  outMin: 0,
  outMax: 1,
  minCutOff: [0, 0, 0],
  maxCutOff: [255, 255, 255],
  factor: [1 / 255, 1 / 255, 1 / 255],
  useGamma: !1,
  gamma: [1, 1, 1],
  gammaCorrection: [1, 1, 1],
  colormap: null,
  colormapOffset: null,
  stretchType: "none",
  type: "stretch",
};
let pt = class extends qe {
  constructor(t = null, e = null, s = null) {
    super(),
      (this._textureInvalidated = !0),
      (this._colormapTextureInvalidated = !0),
      (this._rasterTexture = null),
      (this._rasterTextureBandIds = null),
      (this._transformGridTexture = null),
      (this._colormapTexture = null),
      (this._colormap = null),
      (this._supportsBilinearTexture = !0),
      (this._processedTexture = null),
      (this.functionTextures = []),
      (this.projected = !1),
      (this.stencilRef = 0),
      (this.coordScale = [1, 1]),
      (this._processed = !1),
      (this._symbolizerParameters = null),
      (this.height = null),
      (this.isRendereredSource = !1),
      (this.pixelRatio = 1),
      (this.resolution = 0),
      (this.rotation = 0),
      (this._source = null),
      (this.rawPixelData = null),
      (this._suspended = !1),
      (this._bandIds = null),
      (this._interpolation = null),
      (this._transformGrid = null),
      (this.width = null),
      (this.x = 0),
      (this.y = 0),
      (this.source = t),
      (this.transformGrid = e),
      (this.interpolation = s);
  }
  destroy() {
    this._disposeTextures();
  }
  get processedTexture() {
    return this._processedTexture;
  }
  set processedTexture(t) {
    this._processedTexture !== t &&
      (this._disposeTextures(!0), (this._processedTexture = t));
  }
  get rasterTexture() {
    return this._rasterTexture;
  }
  set rasterTexture(t) {
    var e;
    this._rasterTexture !== t &&
      ((e = this._rasterTexture) == null || e.dispose(),
      (this._rasterTexture = t));
  }
  get processed() {
    return this._processed;
  }
  set processed(t) {
    (this._processed = t),
      t || (V(this.processedTexture), this.invalidateTexture());
  }
  get symbolizerParameters() {
    return this._symbolizerParameters || dt;
  }
  set symbolizerParameters(t) {
    this._symbolizerParameters !== t &&
      ((this._symbolizerParameters = t),
      (this._colormapTextureInvalidated = !0),
      (this.commonUniforms = null));
  }
  get source() {
    return this._source;
  }
  set source(t) {
    this._source !== t &&
      ((this._source = t),
      this._rasterTexture &&
        (this._rasterTexture.dispose(),
        (this._rasterTexture = null),
        (this._rasterTextureBandIds = null)),
      (this.projected = !1),
      this.invalidateTexture());
  }
  get suspended() {
    return this._suspended;
  }
  set suspended(t) {
    this._suspended && !t && this.stage && (this.ready(), this.requestRender()),
      (this._suspended = t);
  }
  get bandIds() {
    return this._bandIds;
  }
  set bandIds(t) {
    (this._bandIds = t),
      this._isBandIdschanged(t) &&
        ((this.projected = !1), this.invalidateTexture());
  }
  get interpolation() {
    return this._interpolation || "nearest";
  }
  set interpolation(t) {
    (this._interpolation = t),
      this._rasterTexture &&
        this._rasterTexture.setSamplingMode(
          this._getTextureSamplingMethod(t || "nearest") === "bilinear"
            ? H.LINEAR
            : H.NEAREST
        );
  }
  get transformGrid() {
    return this._transformGrid;
  }
  set transformGrid(t) {
    (this._transformGrid = t),
      (this._transformGridTexture = V(this._transformGridTexture));
  }
  invalidateTexture() {
    this._textureInvalidated ||
      ((this._textureInvalidated = !0), this.requestRender());
  }
  _createTransforms() {
    return { dvs: L() };
  }
  setTransform(t) {
    const e = xe(this.transforms.dvs),
      [s, r] = t.toScreenNoRotation([0, 0], [this.x, this.y]),
      i = this.resolution / this.pixelRatio / t.resolution,
      a = i * this.width,
      n = i * this.height,
      o = (Math.PI * this.rotation) / 180;
    j(e, e, k(s, r)),
      j(e, e, k(a / 2, n / 2)),
      be(e, e, -o),
      j(e, e, k(-a / 2, -n / 2)),
      Te(e, e, k(a, n)),
      ue(this.transforms.dvs, t.displayViewMat3, e);
  }
  getTextures({ forProcessing: t = !1, useProcessedTexture: e = !1 } = {}) {
    const s = e
        ? this._processedTexture ?? this._rasterTexture
        : this._rasterTexture,
      r = [],
      i = [];
    return s
      ? e
        ? (i.push(s),
          r.push("u_image"),
          this._colormapTexture &&
            (i.push(this._colormapTexture), r.push("u_colormap")),
          { names: r, textures: i })
        : (this._transformGridTexture &&
            (i.push(this._transformGridTexture), r.push("u_transformGrid")),
          i.push(s),
          r.push("u_image"),
          this._colormapTexture &&
            !t &&
            (i.push(this._colormapTexture), r.push("u_colormap")),
          { names: r, textures: i })
      : { names: r, textures: i };
  }
  onAttach() {
    this.invalidateTexture();
  }
  onDetach() {
    this.invalidateTexture();
  }
  updateTexture({ context: t }) {
    if (!this.stage) return void this._disposeTextures();
    const e = this._isValidSource(this.source);
    e &&
      this._colormapTextureInvalidated &&
      ((this._colormapTextureInvalidated = !1), this._updateColormapTexture(t)),
      this._textureInvalidated &&
        ((this._textureInvalidated = !1),
        this._createOrDestroyRasterTexture(t),
        this._rasterTexture &&
          (e
            ? this.transformGrid &&
              !this._transformGridTexture &&
              (this._transformGridTexture = Xe(t, this.transformGrid))
            : this._rasterTexture.setData(null)),
        this.suspended || (this.ready(), this.requestRender()));
  }
  updateProcessedTexture() {
    const { functionTextures: t } = this;
    t.length !== 0 &&
      ((this.processedTexture = t.shift()),
      t.forEach((e) => (e == null ? void 0 : e.dispose())),
      (t.length = 0));
  }
  _createOrDestroyRasterTexture(t) {
    var a, n;
    const e = f(this.source) ? de(this.source, this.bandIds) : null;
    if (!this._isValidSource(e))
      return void (
        this._rasterTexture &&
        (this._rasterTexture.dispose(),
        (this._rasterTextureBandIds = null),
        (this._rasterTexture = null))
      );
    const s = !this._isBandIdschanged(this.bandIds);
    if (this._rasterTexture) {
      if (s) return;
      this._rasterTexture.dispose(),
        (this._rasterTextureBandIds = null),
        (this._rasterTexture = null);
    }
    this._supportsBilinearTexture = !!(
      (a = t.capabilities.textureFloat) != null && a.textureFloatLinear
    );
    const r = this._getTextureSamplingMethod(this.interpolation),
      i =
        this.isRendereredSource ||
        !((n = t.capabilities.textureFloat) != null && n.textureFloat);
    (this._rasterTexture = Ye(t, e, r, i)),
      (this.projected = !1),
      (this._processed = !1),
      (this._rasterTextureBandIds = this.bandIds ? [...this.bandIds] : null);
  }
  _isBandIdschanged(t) {
    const e = this._rasterTextureBandIds;
    return !((e == null && t == null) || (e && t && e.join("") === t.join("")));
  }
  _isValidSource(t) {
    var e;
    return f(t) && ((e = t.pixels) == null ? void 0 : e.length) > 0;
  }
  _getTextureSamplingMethod(t) {
    const { type: e, colormap: s } = this.symbolizerParameters,
      r = e === "lut" || (e === "stretch" && f(s));
    return !this._supportsBilinearTexture ||
      r ||
      (t !== "bilinear" && t !== "cubic")
      ? "nearest"
      : "bilinear";
  }
  _updateColormapTexture(t) {
    const e = this._colormap,
      s = this.symbolizerParameters.colormap;
    return s
      ? e
        ? s.length !== e.length || s.some((r, i) => r !== e[i])
          ? (this._colormapTexture &&
              (this._colormapTexture.dispose(), (this._colormapTexture = null)),
            (this._colormapTexture = ie(t, s)),
            void (this._colormap = s))
          : void 0
        : ((this._colormapTexture = ie(t, s)), void (this._colormap = s))
      : (this._colormapTexture &&
          (this._colormapTexture.dispose(), (this._colormapTexture = null)),
        void (this._colormap = null));
  }
  _disposeTextures(t = !1) {
    this._transformGridTexture &&
      (this._transformGridTexture.dispose(),
      (this._transformGridTexture = null)),
      !t &&
        this._colormapTexture &&
        (this._colormapTexture.dispose(),
        (this._colormapTexture = null),
        (this._colormap = null),
        (this._colormapTextureInvalidated = !0)),
      !t &&
        this._rasterTexture &&
        (this._rasterTexture.dispose(),
        (this._rasterTexture = null),
        (this._rasterTextureBandIds = null)),
      this._processedTexture &&
        (this._processedTexture.dispose(), (this._processedTexture = null));
  }
};
function X(t) {
  const e = [];
  return (
    t &&
      (e.push("applyProjection"),
      t.spacing[0] === 1 && e.push("lookupProjection")),
    e
  );
}
function ge(t, e, s) {
  var a;
  const r = !(
      (a = s.capabilities.textureFloat) != null && a.textureFloatLinear
    ),
    i = [];
  return (
    t === "cubic"
      ? i.push("bicubic")
      : t === "bilinear" &&
        (e ? (i.push("bilinear"), i.push("nnedge")) : r && i.push("bilinear")),
    i
  );
}
const mt = {
    vsPath: "raster/common",
    fsPath: "raster/lut",
    attributes: new Map([
      ["a_position", 0],
      ["a_texcoord", 1],
    ]),
  },
  ft = {
    createProgram: function (t, e, s) {
      const r = s ? [] : X(e.transformGrid);
      return {
        defines: r,
        program: t.painter.materialManager.getProgram(mt, r),
      };
    },
    bindTextureAndUniforms: function (t, e, s, r, i = !1) {
      const { names: a, textures: n } = s.getTextures({
        useProcessedTexture: i,
      });
      z(t.context, e, a, n),
        v(e, r, s.commonUniforms),
        e.setUniformMatrix3fv("u_dvsMat3", s.transforms.dvs);
      const { colormap: o, colormapOffset: l } = s.symbolizerParameters,
        h = J(o, l);
      v(e, r, h);
    },
  },
  gt = {
    vsPath: "raster/common",
    fsPath: "raster/hillshade",
    attributes: new Map([
      ["a_position", 0],
      ["a_texcoord", 1],
    ]),
  },
  _t = {
    createProgram: function (t, e, s) {
      const { colormap: r } = e.symbolizerParameters,
        i = [
          ...(s ? [] : X(e.transformGrid)),
          ...ge(e.interpolation, r != null, t.context),
        ];
      return (
        r != null && i.push("applyColormap"),
        { defines: i, program: t.painter.materialManager.getProgram(gt, i) }
      );
    },
    bindTextureAndUniforms: function (t, e, s, r, i = !1) {
      const { names: a, textures: n } = s.getTextures({
        useProcessedTexture: i,
      });
      z(t.context, e, a, n),
        v(e, r, s.commonUniforms),
        e.setUniformMatrix3fv("u_dvsMat3", s.transforms.dvs);
      const o = s.symbolizerParameters,
        { colormap: l, colormapOffset: h } = o;
      if (l != null) {
        const u = J(l, h);
        v(e, r, u);
      }
      const c = $e(o);
      v(e, r, c);
    },
  },
  yt = {
    vsPath: "raster/common",
    fsPath: "raster/stretch",
    attributes: new Map([
      ["a_position", 0],
      ["a_texcoord", 1],
    ]),
  },
  xt = {
    createProgram: function (t, e, s) {
      const { colormap: r } = e.symbolizerParameters,
        i = [
          ...(s ? [] : X(e.transformGrid)),
          ...ge(e.interpolation, r != null, t.context),
        ];
      return (
        e.isRendereredSource && !s
          ? i.push("noop")
          : r != null && i.push("applyColormap"),
        { defines: i, program: t.painter.materialManager.getProgram(yt, i) }
      );
    },
    bindTextureAndUniforms: function (t, e, s, r, i = !1) {
      const { names: a, textures: n } = s.getTextures({
        useProcessedTexture: i,
      });
      z(t.context, e, a, n),
        v(e, r, s.commonUniforms),
        e.setUniformMatrix3fv("u_dvsMat3", s.transforms.dvs);
      const o = s.symbolizerParameters,
        { colormap: l, colormapOffset: h } = o;
      if (l != null) {
        const u = J(l, h);
        v(e, r, u);
      }
      const c = Ke(o);
      v(e, r, c);
    },
  },
  O = new Map();
O.set("lut", ft), O.set("hillshade", _t), O.set("stretch", xt);
const bt = [1, 1],
  Tt = [2, 0, 0, 0, 2, 0, -1, -1, 0];
function b(t, e, s) {
  const { context: r, rasterFunction: i, hasBranches: a } = t,
    { raster: n } = i.parameters,
    o = a ? (n == null ? void 0 : n.id) ?? -1 : 0,
    l = s.functionTextures[o] ?? s.rasterTexture;
  z(r, e, ["u_image"], [l]);
}
function _e(t, e, s) {
  const { rasters: r } = t.rasterFunction.parameters;
  if (!r) return;
  if (r.length < 2) return b(t, e, s);
  const i = r
    .filter((a) => a.name !== "Constant")
    .map((a) =>
      a.id != null && a.name !== "Identity"
        ? s.functionTextures[a.id]
        : s.rasterTexture
    );
  if (
    (z(t.context, e, ["u_image", "u_image1", "u_image2"].slice(0, i.length), i),
    i.length !== r.length)
  ) {
    if (r.length === 2) {
      const a = r.findIndex((l) => l.name === "Constant"),
        n = a === 0 ? [0, 1, 0, 1, 0, 0, 0, 0, 0] : [1, 0, 0, 0, 1, 0, 0, 0, 0],
        { value: o } = r[a].parameters;
      e.setUniform1f("u_image1Const", o),
        e.setUniformMatrix3fv("u_imageSwap", n);
    } else if (r.length === 3) {
      const a = [];
      if (
        (r.forEach((n, o) => n.name === "Constant" && a.push(o)),
        a.length === 1)
      ) {
        const { value: n } = r[a[0]].parameters;
        e.setUniform1f("u_image1Const", n);
        const o =
          a[0] === 0
            ? [0, 1, 0, 0, 0, 1, 1, 0, 0]
            : a[0] === 1
            ? [1, 0, 0, 0, 0, 1, 0, 1, 0]
            : [1, 0, 0, 0, 1, 0, 0, 0, 1];
        e.setUniformMatrix3fv("u_imageSwap", o);
      } else if (a.length === 2) {
        const { value: n } = r[a[0]].parameters;
        e.setUniform1f("u_image1Const", n);
        const { value: o } = r[a[1]].parameters;
        e.setUniform1f("u_image2Const", o);
        const l = r.findIndex((c) => c.name !== "Constant"),
          h =
            l === 0
              ? [1, 0, 0, 0, 1, 0, 0, 0, 1]
              : l === 1
              ? [0, 1, 0, 1, 0, 0, 0, 0, 1]
              : [0, 0, 1, 1, 0, 0, 0, 1, 0];
        e.setUniformMatrix3fv("u_imageSwap", h);
      }
    }
  }
}
function x(t) {
  t.setUniform2fv("u_coordScale", bt), t.setUniformMatrix3fv("u_dvsMat3", Tt);
}
const wt = {
    vsPath: "raster/rfx/vs",
    fsPath: "raster/rfx/aspect",
    attributes: new Map([
      ["a_position", 0],
      ["a_texcoord", 1],
    ]),
  },
  vt = {
    createProgram: function (t, e) {
      return t.painter.materialManager.getProgram(wt, []);
    },
    bindTextureAndUniforms: function (t, e, s) {
      b(t, e, s), x(e);
      const { width: r, height: i, resolution: a } = s;
      e.setUniform2fv("u_srcImageSize", [r, i]),
        e.setUniform2fv("u_cellSize", [a, a]);
    },
  },
  Pt = {
    vsPath: "raster/rfx/vs",
    fsPath: "raster/rfx/bandarithmetic",
    attributes: new Map([
      ["a_position", 0],
      ["a_texcoord", 1],
    ]),
  },
  It = {
    createProgram: function (t, e) {
      const { painter: s, rasterFunction: r } = t,
        { indexType: i } = r.parameters;
      return s.materialManager.getProgram(Pt, [i]);
    },
    bindTextureAndUniforms: function (t, e, s) {
      b(t, e, s), x(e);
      const { bandIndexMat3: r } = t.rasterFunction.parameters;
      e.setUniformMatrix3fv("u_bandIndexMat3", r);
    },
  },
  Rt = {
    vsPath: "raster/rfx/vs",
    fsPath: "raster/rfx/compositeband",
    attributes: new Map([
      ["a_position", 0],
      ["a_texcoord", 1],
    ]),
  },
  Ut = {
    createProgram: function (t, e) {
      return t.painter.materialManager.getProgram(Rt, []);
    },
    bindTextureAndUniforms: function (t, e, s) {
      _e(t, e, s), x(e);
    },
  },
  St = {
    vsPath: "raster/rfx/vs",
    fsPath: "raster/rfx/convolution",
    attributes: new Map([
      ["a_position", 0],
      ["a_texcoord", 1],
    ]),
  },
  Ft = {
    createProgram: function (t, e) {
      const { painter: s, rasterFunction: r } = t,
        { kernelRows: i, kernelCols: a } = r.parameters,
        n = [
          { name: "rows", value: i },
          { name: "cols", value: a },
        ];
      return s.materialManager.getProgram(St, n);
    },
    bindTextureAndUniforms: function (t, e, s) {
      b(t, e, s), x(e), e.setUniform2fv("u_srcImageSize", [s.width, s.height]);
      const { kernel: r, clampRange: i } = t.rasterFunction.parameters;
      e.setUniform1fv("u_kernel", r), e.setUniform2fv("u_clampRange", i);
    },
  },
  Ct = {
    vsPath: "raster/rfx/vs",
    fsPath: "raster/rfx/extractband",
    attributes: new Map([
      ["a_position", 0],
      ["a_texcoord", 1],
    ]),
  },
  Mt = {
    createProgram: function (t, e) {
      return t.painter.materialManager.getProgram(Ct, []);
    },
    bindTextureAndUniforms: function (t, e, s) {
      b(t, e, s), x(e);
      const { bandIndexMat3: r } = t.rasterFunction.parameters;
      e.setUniformMatrix3fv("u_bandIndexMat3", r);
    },
  },
  zt = {
    vsPath: "raster/rfx/vs",
    fsPath: "raster/rfx/local",
    attributes: new Map([
      ["a_position", 0],
      ["a_texcoord", 1],
    ]),
  },
  Vt = new Set(["sinh", "cosh", "tanh", "asinh", "acosh", "atanh"]),
  Bt = {
    createProgram: function (t) {
      const { painter: e, rasterFunction: s } = t,
        {
          imageCount: r,
          operationName: i,
          rasters: a,
          isOutputRounded: n,
        } = s.parameters;
      let o = i.toLowerCase();
      t.context.type === N.WEBGL1 && Vt.has(o) && (o = `polyfill${o}`);
      const l = [o];
      r === 2 && l.push("twoImages");
      const h = a.filter((c) => c.name === "Constant");
      return (
        h.length &&
          (l.push("oneConstant"), h.length === 2 && l.push("twoConstant")),
        n && l.push("roundOutput"),
        e.materialManager.getProgram(zt, l)
      );
    },
    bindTextureAndUniforms: function (t, e, s) {
      _e(t, e, s), x(e);
      const { domainRange: r } = t.rasterFunction.parameters;
      e.setUniform2fv("u_domainRange", r);
    },
  },
  Gt = {
    vsPath: "raster/rfx/vs",
    fsPath: "raster/rfx/mask",
    attributes: new Map([
      ["a_position", 0],
      ["a_texcoord", 1],
    ]),
  },
  Lt = {
    createProgram: function (t, e) {
      const { painter: s, rasterFunction: r } = t,
        i = r.parameters.bandCount > 1 ? ["multiBand"] : [];
      return s.materialManager.getProgram(Gt, i);
    },
    bindTextureAndUniforms: function (t, e, s) {
      b(t, e, s), x(e);
      const { includedRanges: r, noDataValues: i } =
        t.rasterFunction.parameters;
      e.setUniform1fv("u_includedRanges", r),
        e.setUniform1fv("u_noDataValues", i);
    },
  },
  Et = {
    vsPath: "raster/rfx/vs",
    fsPath: "raster/rfx/ndvi",
    attributes: new Map([
      ["a_position", 0],
      ["a_texcoord", 1],
    ]),
  },
  kt = {
    createProgram: function (t, e) {
      const { painter: s, rasterFunction: r } = t,
        i = r.parameters.scaled ? ["scaled"] : [];
      return s.materialManager.getProgram(Et, i);
    },
    bindTextureAndUniforms: function (t, e, s) {
      b(t, e, s), x(e);
      const { bandIndexMat3: r } = t.rasterFunction.parameters;
      e.setUniformMatrix3fv("u_bandIndexMat3", r);
    },
  },
  Dt = {
    vsPath: "raster/rfx/vs",
    fsPath: "raster/rfx/remap",
    attributes: new Map([
      ["a_position", 0],
      ["a_texcoord", 1],
    ]),
  },
  Ot = {
    createProgram: function (t, e) {
      return t.painter.materialManager.getProgram(Dt, []);
    },
    bindTextureAndUniforms: function (t, e, s) {
      b(t, e, s), x(e);
      const {
        noDataRanges: r,
        rangeMaps: i,
        allowUnmatched: a,
        clampRange: n,
      } = t.rasterFunction.parameters;
      e.setUniform1fv("u_noDataRanges", r),
        e.setUniform1fv("u_rangeMaps", i),
        e.setUniform1f("u_unmatchMask", a ? 1 : 0),
        e.setUniform2fv("u_clampRange", n);
    },
  },
  At = {
    vsPath: "raster/common",
    fsPath: "raster/reproject",
    attributes: new Map([
      ["a_position", 0],
      ["a_texcoord", 1],
    ]),
  },
  qt = {
    createProgram: function (t, e) {
      var o;
      const { painter: s } = t,
        r = [],
        i = !(
          (o = t.context.capabilities.textureFloat) != null &&
          o.textureFloatLinear
        ),
        { interpolation: a, transformGrid: n } = e;
      return (
        a === "cubic"
          ? r.push("bicubic")
          : a === "bilinear" && i && r.push("bilinear"),
        n &&
          (r.push("applyProjection"),
          n.spacing[0] === 1 && r.push("lookupProjection")),
        s.materialManager.getProgram(At, r)
      );
    },
    bindTextureAndUniforms: function (t, e, s) {
      const { names: r, textures: i } = s.getTextures({ forProcessing: !0 });
      z(t.context, e, r, i),
        e.setUniform1f("u_scale", 1),
        e.setUniform2fv("u_offset", [0, 0]),
        e.setUniform2fv("u_coordScale", [1, 1]),
        e.setUniformMatrix3fv("u_dvsMat3", [2, 0, 0, 0, 2, 0, -1, -1, 0]),
        e.setUniform1i("u_flipY", 0),
        e.setUniform1f("u_opacity", 1);
      const { width: a, height: n, source: o, transformGrid: l } = s;
      e.setUniform2fv("u_srcImageSize", [o.width, o.height]),
        e.setUniform2fv("u_targetImageSize", [a, n]),
        e.setUniform2fv("u_transformSpacing", l ? l.spacing : Y),
        e.setUniform2fv("u_transformGridSize", l ? l.size : Y);
    },
  },
  jt = {
    vsPath: "raster/rfx/vs",
    fsPath: "raster/rfx/slope",
    attributes: new Map([
      ["a_position", 0],
      ["a_texcoord", 1],
    ]),
  },
  Wt = {
    createProgram: function (t, e) {
      const { painter: s, rasterFunction: r } = t,
        { slopeType: i } = r.parameters,
        a = i === "percent-rise" ? ["percentRise"] : [];
      return s.materialManager.getProgram(jt, a);
    },
    bindTextureAndUniforms: function (t, e, s) {
      b(t, e, s), x(e);
      const { width: r, height: i, resolution: a } = s,
        {
          zFactor: n,
          slopeType: o,
          pixelSizePower: l,
          pixelSizeFactor: h,
        } = t.rasterFunction.parameters;
      e.setUniform2fv("u_srcImageSize", [r, i]),
        e.setUniform2fv("u_cellSize", [a, a]),
        e.setUniform1f("u_zFactor", n),
        e.setUniform1f("u_pixelSizePower", o === "adjusted" ? l : 0),
        e.setUniform1f("u_pixelSizeFactor", o === "adjusted" ? h : 0);
    },
  },
  Nt = {
    vsPath: "raster/rfx/vs",
    fsPath: "raster/rfx/stretch",
    attributes: new Map([
      ["a_position", 0],
      ["a_texcoord", 1],
    ]),
  },
  Qt = {
    createProgram: function (t, e) {
      const {
          useGamma: s,
          bandCount: r,
          isOutputRounded: i,
        } = t.rasterFunction.parameters,
        a = [];
      return (
        s && a.push("useGamma"),
        r > 1 && a.push("multiBand"),
        i && a.push("roundOutput"),
        t.painter.materialManager.getProgram(Nt, a)
      );
    },
    bindTextureAndUniforms: function (t, e, s) {
      b(t, e, s), x(e);
      const { width: r, height: i } = s,
        a = t.rasterFunction.parameters;
      e.setUniform2fv("u_srcImageSize", [r, i]),
        e.setUniform1f("u_minOutput", a.outMin),
        e.setUniform1f("u_maxOutput", a.outMax),
        e.setUniform1fv("u_factor", a.factor),
        e.setUniform1fv("u_minCutOff", a.minCutOff),
        e.setUniform1fv("u_maxCutOff", a.maxCutOff),
        e.setUniform1fv("u_gamma", a.gamma),
        e.setUniform1fv("u_gammaCorrection", a.gammaCorrection);
    },
  },
  y = new Map();
function ye(t, e, s) {
  const r = {
    width: e,
    height: s,
    target: je.TEXTURE_2D,
    pixelFormat: se.RGBA,
    internalFormat: t.type === N.WEBGL2 ? We.RGBA32F : se.RGBA,
    samplingMode: H.NEAREST,
    dataType: Ne.FLOAT,
    isImmutable: t.type === N.WEBGL2,
    wrapMode: Qe.CLAMP_TO_EDGE,
    flipped: !1,
  };
  return new st(t, r);
}
function Ht(t, e, s, r) {
  const i = t.rasterFunction.name.toLowerCase(),
    a =
      i === "reproject"
        ? qt
        : (function (c) {
            return y.get(c.toLowerCase());
          })(i);
  if (a == null) return;
  const n = (function (c, u, p, _) {
    const { context: w, requestRender: P, allowDelayedRender: q } = c,
      I = _.createProgram(c, p);
    if (q && f(P) && !I.compiled) return P(), null;
    const { width: R, height: T } = p;
    return w.bindFramebuffer(u), w.setViewport(0, 0, R, T), w.useProgram(I), I;
  })(t, s, r, a);
  if (!n) return;
  a.bindTextureAndUniforms(t, n, r), e.draw();
  const { width: o, height: l } = r,
    h = ye(t.context, o, l);
  if ((s.copyToTexture(0, 0, o, l, 0, 0, h), i === "reproject"))
    (r.rasterTexture = h), (r.projected = !0);
  else {
    const c = t.hasBranches ? t.rasterFunction.id : 0;
    r.functionTextures[c] = h;
  }
}
y.set("aspect", vt),
  y.set("bandarithmetic", It),
  y.set("compositeband", Ut),
  y.set("convolution", Ft),
  y.set("extractband", Mt),
  y.set("local", Bt),
  y.set("mask", Lt),
  y.set("ndvi", kt),
  y.set("remap", Ot),
  y.set("slope", Wt),
  y.set("stretch", Qt);
class Jt extends rt {
  constructor() {
    super(...arguments),
      (this.name = "raster"),
      (this._quad = null),
      (this._rendererUniformInfos = new Map()),
      (this._fbo = null);
  }
  dispose() {
    V(this._quad), V(this._fbo);
  }
  prepareState(e) {
    const { context: s, renderPass: r } = e,
      i = r === "raster";
    s.setBlendingEnabled(!i),
      s.setBlendFunctionSeparate(
        D.ONE,
        D.ONE_MINUS_SRC_ALPHA,
        D.ONE,
        D.ONE_MINUS_SRC_ALPHA
      ),
      s.setColorMask(!0, !0, !0, !0),
      s.setStencilWriteMask(0),
      s.setStencilTestEnabled(!i);
  }
  draw(e, s) {
    if (
      !(function (i) {
        return f(i.source);
      })(s) ||
      s.suspended
    )
      return;
    const { renderPass: r } = e;
    if (r !== "raster-bitmap")
      return r === "raster"
        ? this._process(e, s)
        : void this._drawBitmap(e, s, !0);
    this._drawBitmap(e, s);
  }
  _process(e, s) {
    const { rasterFunction: r } = e,
      i = r.name === "Reproject";
    if (!(i ? !s.rasterTexture || !s.projected : !s.processed)) return;
    const { timeline: a, context: n } = e;
    a.begin(this.name);
    const o = n.getBoundFramebufferObject(),
      l = n.getViewport();
    i || (s.processedTexture = V(s.processedTexture)),
      n.setStencilFunction(re.EQUAL, s.stencilRef, 255),
      s.updateTexture(e),
      this._initQuad(n);
    const { isStandardRasterTileSize: h, fbo: c } = this._getRasterFBO(
      n,
      s.width,
      s.height
    );
    Ht(e, this._quad, c, s),
      h || c.dispose(),
      n.bindFramebuffer(o),
      n.setViewport(l.x, l.y, l.width, l.height),
      a.end(this.name);
  }
  _drawBitmap(e, s, r = !1) {
    const { timeline: i, context: a } = e;
    if (
      (i.begin(this.name),
      a.setStencilFunction(re.EQUAL, s.stencilRef, 255),
      s.updateTexture(e),
      r && !s.processedTexture)
    ) {
      if ((s.updateProcessedTexture(), !s.processedTexture))
        return void i.end(this.name);
      s.processed = !0;
    }
    this._initBitmapCommonUniforms(s);
    const n = s.symbolizerParameters.type,
      o = (function (_) {
        return O.get(_);
      })(n),
      { requestRender: l, allowDelayedRender: h } = e,
      { defines: c, program: u } = o.createProgram(e, s, r);
    if (h && f(l) && !u.compiled) return void l();
    a.useProgram(u);
    const p = this._getUniformInfos(n, a, u, c);
    this._quad || (this._quad = new ae(a, [0, 0, 1, 0, 0, 1, 1, 1])),
      o.bindTextureAndUniforms(e, u, s, p, r),
      this._quad.draw(),
      i.end(this.name);
  }
  _initBitmapCommonUniforms(e) {
    if (!e.commonUniforms) {
      const s = tt(1, [0, 0]),
        { transformGrid: r, width: i, height: a } = e,
        n = Ze(r, [i, a], [e.source.width, e.source.height], 1, !1);
      e.commonUniforms = { ...s, ...n, u_coordScale: e.coordScale };
    }
  }
  _getRasterFBO(e, s, r) {
    const i = s === M || r === M;
    return i
      ? (this._fbo || (this._fbo = this._createNewFBO(e, s, r)),
        { isStandardRasterTileSize: i, fbo: this._fbo })
      : { isStandardRasterTileSize: i, fbo: this._createNewFBO(e, s, r) };
  }
  _createNewFBO(e, s, r) {
    const i = ye(e, s, r);
    return new it(
      e,
      {
        colorTarget: He.TEXTURE,
        depthStencilTarget: Je.NONE,
        width: s,
        height: r,
      },
      i
    );
  }
  _initQuad(e) {
    this._quad || (this._quad = new ae(e, [0, 0, 1, 0, 0, 1, 1, 1]));
  }
  _getUniformInfos(e, s, r, i) {
    const a = i.length > 0 ? e + "-" + i.join("-") : e;
    if (this._rendererUniformInfos.has(a))
      return this._rendererUniformInfos.get(a);
    const n = et(s, r);
    return this._rendererUniformInfos.set(a, n), n;
  }
}
class Xt extends pe {
  constructor(e, s, r, i, a, n, o = null) {
    super(e, s, r, i, a, n),
      (this.bitmap = null),
      (this.bitmap = new pt(o, null, null)),
      (this.bitmap.coordScale = [a, n]),
      this.bitmap.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(),
      this.bitmap.destroy(),
      (this.bitmap = null),
      (this.stage = null);
  }
  set stencilRef(e) {
    this.bitmap.stencilRef = e;
  }
  get stencilRef() {
    return this.bitmap.stencilRef;
  }
  setTransform(e) {
    super.setTransform(e), (this.bitmap.transforms.dvs = this.transforms.dvs);
  }
  _createTransforms() {
    return { dvs: L(), tileMat3: L() };
  }
  onAttach() {
    this.bitmap.stage = this.stage;
  }
  onDetach() {
    this.bitmap.stage = null;
  }
}
let Yt = class extends me {
  constructor() {
    super(...arguments), (this.isCustomTilingScheme = !1);
  }
  createTile(t) {
    const e = this._getTileBounds(t),
      [s, r] = this._tileInfoView.tileInfo.size,
      i = this._tileInfoView.getTileResolution(t.level);
    return new Xt(t, i, e[0], e[3], s, r);
  }
  prepareRenderPasses(t) {
    const e = t.registerRenderPass({
      name: "imagery (tile)",
      brushes: [Jt],
      target: () => this.children.map((s) => s.bitmap),
      drawPhase: A.MAP,
    });
    return [...super.prepareRenderPasses(t), e];
  }
  doRender(t) {
    if (!this.visible || t.drawPhase !== A.MAP) return;
    const { rasterFunctionChain: e } = this;
    if (!e) return (t.renderPass = "raster-bitmap"), void super.doRender(t);
    const [s, r] = this._tileInfoView.tileInfo.size;
    if (
      ((t.renderPass = "raster"),
      (t.rasterFunction = {
        name: "Reproject",
        parameters: { targetImageSize: [s, r] },
        pixelType: "f32",
        id: 0,
        isNoopProcess: !1,
      }),
      super.doRender(t),
      e == null ? void 0 : e.functions.length)
    ) {
      const { functions: i, hasBranches: a } = e;
      for (let n = 0; n < i.length; n++) {
        const o = i[n];
        o.name !== "Constant" &&
          o.name !== "Identity" &&
          ((t.renderPass = "raster"),
          (t.rasterFunction = o),
          (t.hasBranches = a),
          super.doRender(t));
      }
    }
    (t.rasterFunction = null), (t.renderPass = "bitmap"), super.doRender(t);
  }
  _getTileBounds(t) {
    const e = this._tileInfoView.getTileBounds(he(), t);
    if (this.isCustomTilingScheme && t.world) {
      const { tileInfo: s } = this._tileInfoView,
        r = we(s.spatialReference);
      if (r) {
        const i = s.lodAt(t.level);
        if (!i) return e;
        const { resolution: a } = i,
          n = (r / a) % s.size[0],
          o = n ? (s.size[0] - n) * a : 0;
        (e[0] -= o * t.world), (e[2] -= o * t.world);
      }
    }
    return e;
  }
};
const $t = [0, 0];
let g = class extends ve {
  constructor() {
    super(...arguments),
      (this._emptyTilePixelBlock = null),
      (this._tileStrategy = null),
      (this._tileInfoView = null),
      (this._fetchQueue = null),
      (this._blockCacheRegistryUrl = null),
      (this._blockCacheRegistryId = null),
      (this._srcResolutions = []),
      (this.previousLOD = null),
      (this._needBlockCacheUpdate = !1),
      (this._globalSymbolizerParams = null),
      (this._symbolizerParams = null),
      (this._abortController = null),
      (this._isCustomTilingScheme = !1),
      (this._rasterFunctionState = "na"),
      (this._globalUpdateRequested = !1),
      (this.attached = !1),
      (this.timeExtent = null),
      (this.redrawOrRefetch = Pe(async (t = {}) => {
        if (!this.previousLOD || this.layerView.suspended) return;
        const e = this._rasterFunctionState;
        t.reprocess &&
          (await this.updatingHandles.addPromise(
            this.layer.updateRasterFunction()
          ),
          this.updateRasterFunctionParameters());
        const s = this._rasterFunctionState,
          { type: r } = this;
        return t.refetch ||
          (r !== "raster" && t.reprocess) ||
          s === "cpu" ||
          e === "cpu"
          ? this.updatingHandles.addPromise(this.doRefresh())
          : this.updatingHandles.addPromise(this._redrawImage(t.signal));
      }));
  }
  get useWebGLForProcessing() {
    return this._get("useWebGLForProcessing") ?? !0;
  }
  set useWebGLForProcessing(t) {
    this._set("useWebGLForProcessing", t);
  }
  get useProgressiveUpdate() {
    return (
      this._get("useProgressiveUpdate") == null ||
      this._get("useProgressiveUpdate")
    );
  }
  set useProgressiveUpdate(t) {
    if (this._tileStrategy && this.useProgressiveUpdate !== t) {
      this._tileStrategy.destroy(), this.container.removeAllChildren();
      const e = this._getCacheSize(t);
      (this._tileStrategy = new $({
        cachePolicy: "purge",
        acquireTile: (s) => this.acquireTile(s),
        releaseTile: (s) => this.releaseTile(s),
        cacheSize: e,
        tileInfoView: this._tileInfoView,
      })),
        this._set("useProgressiveUpdate", t),
        this.layerView.requestUpdate();
    }
  }
  update(t) {
    var a;
    this._fetchQueue.pause(),
      (this._fetchQueue.state = t.state),
      this._tileStrategy.update(t),
      this._fetchQueue.resume();
    const { extent: e, resolution: s, scale: r } = t.state,
      i = this._tileInfoView.getClosestInfoForScale(r);
    if (this.layer.raster) {
      if (!this.useProgressiveUpdate || this._needBlockCacheUpdate) {
        const n = this._srcResolutions[i.level],
          o = e.toJSON ? e : Ie.fromJSON(e);
        ne(
          this._blockCacheRegistryUrl,
          this._blockCacheRegistryId,
          o,
          s,
          n,
          this.layer.raster.ioConfig.sampling
        );
      }
      (this._needBlockCacheUpdate = !1),
        ((a = this.previousLOD) == null ? void 0 : a.level) !== i.level &&
          ((this.previousLOD = i),
          this._symbolizerParams == null ||
            this.layerView.hasTilingEffects ||
            this._updateSymbolizerParams(),
          this._tileStrategy.updateCacheSize(0));
    }
  }
  moveEnd() {
    (!this.layerView.hasTilingEffects && this.useProgressiveUpdate) ||
      (this._abortController && this._abortController.abort(),
      (this._abortController = new AbortController()),
      this._fetchQueue.length === 0 &&
        this._redrawImage(this._abortController.signal).then(() => {
          (this._globalUpdateRequested = !1), this.layerView.requestUpdate();
        }));
    const t = this._getCacheSize(this.useProgressiveUpdate);
    this._tileStrategy.updateCacheSize(t), this.layerView.requestUpdate();
  }
  get updating() {
    var t;
    return (
      ((t = this._fetchQueue) == null ? void 0 : t.updating) ||
      this._globalUpdateRequested ||
      !(!this.updatingHandles || !this.updatingHandles.updating)
    );
  }
  attach() {
    Re("2d").supportsTextureFloat || (this.useWebGLForProcessing = !1),
      this._initializeTileInfo(),
      (this._tileInfoView = new Ue(
        this.layerView.tileInfo,
        this.layerView.fullExtent
      ));
    const t = this._computeFetchConcurrency();
    this._fetchQueue = new Se({
      tileInfoView: this._tileInfoView,
      concurrency: t,
      process: (s, r) => this._fetchTile1(s, r),
    });
    const e = this._getCacheSize(this.useProgressiveUpdate);
    (this._tileStrategy = new $({
      cachePolicy: "purge",
      acquireTile: (s) => this.acquireTile(s),
      releaseTile: (s) => this.releaseTile(s),
      cacheSize: e,
      tileInfoView: this._tileInfoView,
    })),
      this._updateBlockCacheRegistry();
  }
  detach() {
    this._tileStrategy.destroy(),
      this._fetchQueue.clear(),
      this.container.removeAllChildren(),
      (this._fetchQueue = this._tileStrategy = this._tileInfoView = null),
      oe(this._blockCacheRegistryUrl, this._blockCacheRegistryId),
      (this._blockCacheRegistryUrl = this._blockCacheRegistryId = null);
  }
  acquireTile(t) {
    const e = this.container.createTile(t);
    return (
      this._enqueueTileFetch(e),
      this.layerView.requestUpdate(),
      (this._needBlockCacheUpdate = !0),
      (this._globalUpdateRequested =
        this.layerView.hasTilingEffects || !this.useProgressiveUpdate),
      e
    );
  }
  releaseTile(t) {
    this._fetchQueue.abort(t.key.id),
      this.container.removeChild(t),
      t.once("detach", () => {
        t.destroy(), this.layerView.requestUpdate();
      }),
      this.layerView.requestUpdate();
  }
  createEmptyTilePixelBlock(t = null) {
    const e =
      t == null || t.join(",") === this._tileInfoView.tileInfo.size.join(",");
    if (e && f(this._emptyTilePixelBlock)) return this._emptyTilePixelBlock;
    t = t || this._tileInfoView.tileInfo.size;
    const [s, r] = t,
      i = new Oe({
        width: s,
        height: r,
        pixels: [new Uint8Array(s * r)],
        mask: new Uint8Array(s * r),
        pixelType: "u8",
      });
    return e && (this._emptyTilePixelBlock = i), i;
  }
  _getBandIds() {
    if (
      !("rasterFunctionChain" in this.container) ||
      !this.container.rasterFunctionChain
    )
      return this.layer.bandIds;
    const { bandIds: t, raster: e } = this.layer,
      s = "rasterFunction" in e ? e.rasterFunction.rawInputBandIds : null;
    return t != null &&
      t.length &&
      s != null &&
      s.length &&
      e.rasterInfo.bandCount !== 1
      ? t.map((r) => s[Math.min(r, s.length - 1)])
      : t || s;
  }
  updateRasterFunctionParameters() {}
  _fetchTile1(t, e) {
    const s = f(e) ? e.signal : null,
      r = this.canUseWebGLForProcessing(),
      { layerView: i } = this,
      { tileInfo: a } = i,
      n = !a.isWrappable && f(ot(i.view.spatialReference)),
      o = r && this.layer.raster.hasUniqueSourceStorageInfo,
      l = {
        allowPartialFill: !0,
        datumTransformation: i.datumTransformation,
        interpolation: r ? "nearest" : this.layer.interpolation,
        registryId: this._blockCacheRegistryId,
        requestRawData: o,
        skipRasterFunction:
          this.type === "raster" && this.container.rasterFunctionChain != null,
        signal: Q(s),
        srcResolution: this._srcResolutions[t.level],
        timeExtent: i.timeExtent,
        tileInfo: a,
        disableWrapAround: n,
      };
    return this.fetchTile(t, l);
  }
  _getCacheSize(t) {
    return t ? 40 : 0;
  }
  _initializeTileInfo() {
    const { layerView: t } = this,
      e = t.view.spatialReference,
      s = new Fe({
        x: t.fullExtent.xmin,
        y: t.fullExtent.ymax,
        spatialReference: e,
      });
    if (this._canUseLayerLODs()) {
      const { lods: o } = this.layer.tileInfo,
        l = o.map(({ scale: u }) => u),
        h = W.create({ spatialReference: e, size: M, scales: l }),
        c = e.isGeographic ? 0.01 * 1e-5 : 0.01;
      if (
        ((this._isCustomTilingScheme = Math.abs(h.origin.x - s.x) > c),
        (h.origin.x === 0 || h.origin.x > s.x) && (h.origin = s),
        !this._isCustomTilingScheme)
      ) {
        const u = W.create({ spatialReference: e, size: M }).lods.map(
          ({ scale: p }) => p
        );
        this._isCustomTilingScheme = l.some(
          (p) => !u.some((_) => Math.abs(_ - p) < 0.001)
        );
      }
      return (
        t.set("tileInfo", h),
        void (this._srcResolutions = o.map(({ resolution: u }) => ({
          x: u,
          y: u,
        })))
      );
    }
    const {
        scales: r,
        srcResolutions: i,
        isCustomTilingScheme: a,
      } = lt(this.layer.rasterInfo, e, M),
      n = W.create({ spatialReference: e, size: M, scales: r });
    (n.origin.x === 0 || n.origin.x > s.x) && (n.origin = s),
      (this._isCustomTilingScheme = a),
      t.set("tileInfo", n),
      (this._srcResolutions = i ?? []);
  }
  _canUseLayerLODs() {
    var a;
    const { layer: t, layerView: e } = this;
    if (t.raster.tileType !== "Map") return !1;
    const { lods: s } = t.tileInfo,
      r = (a = e.view.constraints) == null ? void 0 : a.effectiveLODs;
    if (
      (r == null ? void 0 : r.length) !== s.length ||
      !r.every(({ scale: n }, o) => Math.abs(n - s[o].scale) < 0.001)
    )
      return !1;
    const i = [];
    for (let n = 0; n < s.length - 1; n++)
      i.push(Math.round((10 * s[n].resolution) / s[n + 1].resolution) / 10);
    return i.some((n) => n !== n[0]);
  }
  _computeFetchConcurrency() {
    const { blockBoundary: t } = this.layer.rasterInfo.storageInfo,
      e = t[t.length - 1];
    return (e.maxCol - e.minCol + 1) * (e.maxRow - e.minRow + 1) > 64 ? 2 : 10;
  }
  async _enqueueTileFetch(t, e) {
    this.updatingHandles.addPromise(this._enqueueTileFetch1(t, e));
  }
  async _enqueueTileFetch1(t, e) {
    var s;
    if (!this._fetchQueue.has(t.key.id)) {
      try {
        const r = await this._fetchQueue.push(t.key),
          i = this._getBandIds();
        let a =
          !this.useProgressiveUpdate ||
          (this.layerView.hasTilingEffects && !this._globalSymbolizerParams);
        if (
          this._globalUpdateRequested &&
          !this.layerView.moving &&
          this._fetchQueue.length === 0
        ) {
          a = !1;
          try {
            await this._redrawImage(
              (s = this._abortController) == null ? void 0 : s.signal
            );
          } catch (l) {
            B(l) && G.getLogger(this.declaredClass).error(l);
          }
          this._globalUpdateRequested = !1;
        }
        (!this.canUseWebGLForProcessing() && this.type !== "rasterVF") ||
          this.layerView.hasTilingEffects ||
          this._symbolizerParams != null ||
          this._updateSymbolizerParams();
        const n = this._tileInfoView.getTileCoords($t, t.key),
          o = this._tileInfoView.getTileResolution(t.key);
        await this.updateTileSource(t, {
          source: r,
          symbolizerParams: this._symbolizerParams,
          globalSymbolizerParams: this._globalSymbolizerParams,
          suspended: a,
          bandIds: i,
          coords: n,
          resolution: o,
        }),
          t.once("attach", () => this.layerView.requestUpdate()),
          this.container.addChild(t);
      } catch (r) {
        B(r) || G.getLogger(this.declaredClass).error(r);
      }
      this.layerView.requestUpdate();
    }
  }
  async _redrawImage(t) {
    if (this.container.children.length === 0) return;
    await this.layer.updateRenderer(),
      this.layerView.hasTilingEffects
        ? await this._updateGlobalSymbolizerParams(t)
        : (this._updateSymbolizerParams(),
          (this._globalSymbolizerParams = null));
    const e = this.container.children.map(async (s) =>
      this.updateTileSymbolizerParameters(s, {
        local: this._symbolizerParams,
        global: this._globalSymbolizerParams,
      })
    );
    await K(e), this.container.requestRender();
  }
  async _updateGlobalSymbolizerParams(t) {
    const e = {
        srcResolution: this._srcResolutions[this.previousLOD.level],
        registryId: this._blockCacheRegistryId,
        signal: t,
      },
      s = await this.layer.fetchPixels(
        this.layerView.view.extent,
        this.layerView.view.width,
        this.layerView.view.height,
        e
      );
    if (!s || !s.pixelBlock) return;
    const { resolution: r } = this.previousLOD,
      i = this._getBandIds(),
      a = this.layer.symbolizer.generateWebGLParameters({
        pixelBlock: de(s.pixelBlock, i),
        isGCS: this.layerView.view.spatialReference.isGeographic,
        resolution: { x: r, y: r },
        bandIds: i,
      });
    !this.canUseWebGLForProcessing() &&
      a &&
      a.type === "stretch" &&
      this.layer.renderer &&
      this.layer.renderer.type === "raster-stretch" &&
      ((a.factor = a.factor.map((n) => 255 * n)),
      (a.outMin = Math.round(255 * a.outMin)),
      (a.outMax = Math.round(255 * a.outMax))),
      (this._globalSymbolizerParams = a);
  }
  _updateSymbolizerParams() {
    const { resolution: t } = this.previousLOD,
      e = this._getBandIds();
    this._symbolizerParams = this.layer.symbolizer.generateWebGLParameters({
      pixelBlock: null,
      isGCS: this.layerView.view.spatialReference.isGeographic,
      resolution: { x: t, y: t },
      bandIds: e,
    });
  }
  _updateBlockCacheRegistry(t = !1) {
    const { layer: e, layerView: s } = this,
      { url: r, raster: i } = e,
      { multidimensionalDefinition: a } = e.normalizeRasterFetchOptions({
        multidimensionalDefinition: e.multidimensionalDefinition,
        timeExtent: s.timeExtent,
      }),
      n = i.rasterInfo.multidimensionalInfo ? i.getSliceIndex(a) : null,
      o = nt(r, n);
    if (o !== this._blockCacheRegistryUrl) {
      if (
        (this._blockCacheRegistryUrl != null &&
          oe(this._blockCacheRegistryUrl, this._blockCacheRegistryId),
        (this._blockCacheRegistryId = at(o, i.rasterInfo)),
        t)
      ) {
        const { view: l } = s,
          h = this._tileInfoView.getClosestInfoForScale(l.scale),
          c = this._srcResolutions[h.level];
        ne(
          o,
          this._blockCacheRegistryId,
          l.extent,
          l.resolution,
          c,
          i.ioConfig.sampling
        );
      }
      this._blockCacheRegistryUrl = o;
    }
  }
  async doRefresh() {
    if (!this.attached) return;
    await this.layer.updateRenderer(),
      this.layerView.hasTilingEffects || this._updateSymbolizerParams(),
      this._updateBlockCacheRegistry(!0),
      this._fetchQueue.reset();
    const t = [];
    (this._globalUpdateRequested =
      this.layerView.hasTilingEffects || !this.useProgressiveUpdate),
      this._tileStrategy.tiles.forEach((e) =>
        t.push(this._enqueueTileFetch(e))
      ),
      await K(t);
  }
};
d([m()], g.prototype, "_fetchQueue", void 0),
  d([m()], g.prototype, "_globalUpdateRequested", void 0),
  d([m()], g.prototype, "attached", void 0),
  d([m()], g.prototype, "container", void 0),
  d([m()], g.prototype, "layer", void 0),
  d([m()], g.prototype, "layerView", void 0),
  d([m()], g.prototype, "type", void 0),
  d([m()], g.prototype, "useWebGLForProcessing", null),
  d([m()], g.prototype, "useProgressiveUpdate", null),
  d([m()], g.prototype, "timeExtent", void 0),
  d([m()], g.prototype, "updating", null),
  (g = d([E("esri.views.2d.layers.imagery.BaseImageryTileSubView2D")], g));
let S = class extends g {
  constructor() {
    super(...arguments), (this.type = "raster");
  }
  attach() {
    super.attach(),
      (this.container = new Yt(this._tileInfoView)),
      (this.container.isCustomTilingScheme = this._isCustomTilingScheme),
      this.updateRasterFunctionParameters();
  }
  detach() {
    super.detach(), this.container.removeAllChildren(), (this.container = null);
  }
  canUseWebGLForProcessing() {
    return (
      this.useWebGLForProcessing &&
      this.layer.symbolizer.canRenderInWebGL &&
      !(this.layer.interpolation === "majority" && fe(this.layer))
    );
  }
  fetchTile(t, e) {
    return this.layer.fetchTile(t.level, t.row, t.col, e);
  }
  updateRasterFunctionParameters() {
    const { raster: t, type: e } = this.layer,
      { container: s } = this;
    if (t.datasetFormat !== "Function" || e === "wcs")
      return (
        (s.rasterFunctionChain = null),
        s.children.forEach((u) => {
          const { bitmap: p } = u;
          p &&
            ((p.suspended = !0),
            (p.processed = !1),
            p.projected && (p.invalidateTexture(), (p.rasterTexture = null)));
        }),
        void (this._rasterFunctionState = "na")
      );
    const r = this._rasterFunctionState,
      { rasterFunction: i, primaryRasters: a } = t,
      n = i.supportsGPU && (!a || a.rasters.length <= 1),
      o = n ? i.getFlatWebGLFunctionChain() : null,
      { renderer: l } = this.layer,
      h =
        !n ||
        !(o != null && o.functions.length) ||
        (l.type === "raster-stretch" && l.dynamicRangeAdjustment) ||
        !this.canUseWebGLForProcessing();
    s.rasterFunctionChain = h ? null : o;
    const c = i == null ? "na" : s.rasterFunctionChain ? "gpu" : "cpu";
    s.children.forEach((u) => {
      const { bitmap: p } = u;
      p &&
        ((p.suspended = r !== c),
        (p.processed = !1),
        (p.processedTexture = null));
    }),
      (this._rasterFunctionState = c);
  }
  async updateTileSource(t, e) {
    const s = this._getBandIds(),
      r = this._getLayerInterpolation(),
      i = this.canUseWebGLForProcessing(),
      {
        source: a,
        globalSymbolizerParams: n,
        suspended: o,
        coords: l,
        resolution: h,
      } = e,
      c = this.layerView.hasTilingEffects ? n : e.symbolizerParams,
      { bitmap: u } = t;
    if ((([u.x, u.y] = l), (u.resolution = h), a && f(a) && f(a.pixelBlock))) {
      const p = { extent: a.extent, pixelBlock: a.pixelBlock };
      if (((u.rawPixelData = p), i))
        (u.source = a.pixelBlock), (u.isRendereredSource = !1);
      else {
        const _ = await this.layer.applyRenderer(
          p,
          (n == null ? void 0 : n.type) === "stretch" ? n : void 0
        );
        (u.source = _), (u.isRendereredSource = !0);
      }
      (u.symbolizerParameters = i ? c : null),
        i
          ? u.transformGrid || (u.transformGrid = a.transformGrid)
          : (u.transformGrid = null);
    } else {
      const p = this.createEmptyTilePixelBlock();
      (u.source = p),
        (u.symbolizerParameters = i ? c : null),
        (u.transformGrid = null);
    }
    (u.bandIds = i ? s : null),
      (u.width = this._tileInfoView.tileInfo.size[0]),
      (u.height = this._tileInfoView.tileInfo.size[1]),
      (u.interpolation = r),
      (u.suspended = o),
      u.invalidateTexture();
  }
  async updateTileSymbolizerParameters(t, e) {
    const { local: s, global: r } = e,
      i = this._getBandIds(),
      a = this._getLayerInterpolation(),
      n = this.canUseWebGLForProcessing(),
      { bitmap: o } = t,
      { rawPixelData: l } = o;
    !n && f(l)
      ? ((o.source = await this.layer.applyRenderer(
          l,
          (r == null ? void 0 : r.type) === "stretch" ? r : void 0
        )),
        (o.isRendereredSource = !0))
      : (o.isRendereredSource && f(l) && (o.source = l.pixelBlock),
        (o.isRendereredSource = !1)),
      (o.symbolizerParameters = n
        ? this.layerView.hasTilingEffects
          ? r
          : s
        : null),
      (o.bandIds = n ? i : null),
      (o.interpolation = a),
      (o.suspended = !1);
  }
  _getLayerInterpolation() {
    const t = this.layer.renderer.type;
    if (t === "raster-colormap" || t === "unique-value" || t === "class-breaks")
      return "nearest";
    const { interpolation: e } = this.layer,
      { renderer: s } = this.layer;
    return s.type === "raster-stretch" && s.colorRamp != null
      ? e === "bilinear" || e === "cubic"
        ? "bilinear"
        : "nearest"
      : e;
  }
};
d([m()], S.prototype, "container", void 0),
  d([m()], S.prototype, "layer", void 0),
  d([m()], S.prototype, "type", void 0),
  (S = d([E("esri.views.2d.layers.imagery.ImageryTileView2D")], S));
const Kt = S;
class Zt extends pe {
  constructor(e, s, r, i, a, n, o = null) {
    super(e, s, r, i, a, n),
      (this.tileData = new Ge(o)),
      (this.tileData.coordScale = [a, n]),
      this.tileData.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(),
      this.tileData.destroy(),
      (this.tileData = null),
      (this.stage = null);
  }
  set stencilRef(e) {
    this.tileData.stencilRef = e;
  }
  get stencilRef() {
    return this.tileData.stencilRef;
  }
  _createTransforms() {
    return { dvs: L(), tileMat3: L() };
  }
  setTransform(e) {
    super.setTransform(e);
    const s = this.resolution / (e.resolution * e.pixelRatio),
      r = this.transforms.tileMat3,
      [i, a] = this.tileData.offset,
      n = [this.x + i * this.resolution, this.y - a * this.resolution],
      [o, l] = e.toScreenNoRotation([0, 0], n),
      { symbolTileSize: h } = this.tileData.symbolizerParameters,
      c = Math.round((this.width - this.tileData.offset[0]) / h) * h,
      u = Math.round((this.height - this.tileData.offset[1]) / h) * h,
      p = (c / this.rangeX) * s,
      _ = (u / this.rangeY) * s;
    Ce(r, p, 0, 0, 0, _, 0, o, l, 1),
      ue(this.transforms.dvs, e.displayViewMat3, r),
      (this.tileData.transforms.dvs = this.transforms.dvs);
  }
  onAttach() {
    this.tileData.stage = this.stage;
  }
  onDetach() {
    this.tileData.stage = null;
  }
}
class es extends me {
  constructor() {
    super(...arguments),
      (this.isCustomTilingScheme = !1),
      (this.symbolTypes = ["triangle"]);
  }
  createTile(e) {
    const s = this._tileInfoView.getTileBounds(he(), e),
      [r, i] = this._tileInfoView.tileInfo.size,
      a = this._tileInfoView.getTileResolution(e.level);
    return new Zt(e, a, s[0], s[3], r, i);
  }
  prepareRenderPasses(e) {
    const s = e.registerRenderPass({
      name: "imagery (vf tile)",
      brushes: [Le],
      target: () => this.children.map((r) => r.tileData),
      drawPhase: A.MAP,
    });
    return [...super.prepareRenderPasses(e), s];
  }
  doRender(e) {
    this.visible &&
      e.drawPhase === A.MAP &&
      this.symbolTypes.forEach((s) => {
        (e.renderPass = s), super.doRender(e);
      });
  }
}
let F = class extends g {
  constructor() {
    super(...arguments), (this._handle = null), (this.type = "rasterVF");
  }
  canUseWebGLForProcessing() {
    return !1;
  }
  async fetchTile(t, e) {
    e = { ...e, interpolation: "nearest", requestProjectedLocalDirections: !0 };
    const s = await this.layer.fetchTile(t.level, t.row, t.col, e);
    return (
      this.layer.rasterInfo.dataType === "vector-magdir" &&
        s != null &&
        s.pixelBlock &&
        (s.pixelBlock = await this.layer.convertVectorFieldData(
          s.pixelBlock,
          e
        )),
      s
    );
  }
  updateTileSource(t, e) {
    const s = e.symbolizerParams,
      { tileData: r } = t;
    (r.key = t.key),
      (r.width = this._tileInfoView.tileInfo.size[0]),
      (r.height = this._tileInfoView.tileInfo.size[1]);
    const { symbolTileSize: i } = s,
      { source: a } = e;
    if (
      ((r.offset = this._getTileSymbolOffset(r.key, i)),
      f(a) && f(a.pixelBlock))
    ) {
      const n = { extent: a.extent, pixelBlock: a.pixelBlock };
      (r.rawPixelData = n),
        (r.symbolizerParameters = s),
        (r.source = this._sampleVectorFieldData(a.pixelBlock, s, r.offset));
    } else {
      const n = [
          Math.round((this._tileInfoView.tileInfo[0] - r.offset[0]) / i),
          Math.round((this._tileInfoView.tileInfo[1] - r.offset[1]) / i),
        ],
        o = this.createEmptyTilePixelBlock(n);
      (r.source = o), (r.symbolizerParameters = s);
    }
    return r.invalidateVAO(), Promise.resolve();
  }
  updateTileSymbolizerParameters(t, e) {
    var o;
    const s = e.local,
      { symbolTileSize: r } = s,
      { tileData: i } = t;
    i.offset = this._getTileSymbolOffset(i.key, r);
    const a = i.symbolizerParameters.symbolTileSize;
    i.symbolizerParameters = s;
    const n = (o = i.rawPixelData) == null ? void 0 : o.pixelBlock;
    return (
      f(n) &&
        a !== r &&
        (i.source = this._sampleVectorFieldData(
          n,
          i.symbolizerParameters,
          i.offset
        )),
      Promise.resolve()
    );
  }
  attach() {
    super.attach(),
      (this.container = new es(this._tileInfoView)),
      (this.container.isCustomTilingScheme = this._isCustomTilingScheme),
      this._updateSymbolType(this.layer.renderer),
      (this._handle = U(
        () => this.layer.renderer,
        (t) => this._updateSymbolType(t)
      ));
  }
  detach() {
    var t;
    super.detach(),
      this.container.removeAllChildren(),
      (t = this._handle) == null || t.remove(),
      (this._handle = null),
      (this.container = null);
  }
  _getTileSymbolOffset(t, e) {
    const s = (t.col * this._tileInfoView.tileInfo.size[0]) % e,
      r = (t.row * this._tileInfoView.tileInfo.size[1]) % e;
    return [s > e / 2 ? e - s : -s, r > e / 2 ? e - r : -r];
  }
  _sampleVectorFieldData(t, e, s) {
    const { symbolTileSize: r } = e;
    return Ae(t, "vector-uv", r, s);
  }
  _updateSymbolType(t) {
    t.type === "vector-field" &&
      (this.container.symbolTypes =
        t.style === "wind-barb"
          ? ["scalar", "triangle"]
          : t.style === "simple-scalar"
          ? ["scalar"]
          : ["triangle"]);
  }
};
d([m()], F.prototype, "container", void 0),
  d([m()], F.prototype, "layer", void 0),
  d([m()], F.prototype, "type", void 0),
  (F = d([E("esri.views.2d.layers.imagery.VectorFieldTileView2D")], F));
const ts = F,
  ss = (t) => {
    let e = class extends t {
      constructor() {
        super(...arguments),
          (this._rasterFieldPrefix = "Raster."),
          (this.layer = null),
          (this.view = null),
          (this.tileInfo = null);
      }
      get fullExtent() {
        return this._getfullExtent();
      }
      _getfullExtent() {
        return this.projectFullExtent(this.view.spatialReference);
      }
      get hasTilingEffects() {
        return (
          this.layer.renderer &&
          "dynamicRangeAdjustment" in this.layer.renderer &&
          this.layer.renderer.dynamicRangeAdjustment
        );
      }
      get datumTransformation() {
        return le(Q(this.layer.fullExtent), this.view.spatialReference, !0);
      }
      supportsSpatialReference(s) {
        return !!this.projectFullExtent(s);
      }
      projectFullExtent(s) {
        const r = Q(this.layer.fullExtent),
          i = le(r, s, !1);
        return ut(r, s, i);
      }
      async fetchPopupFeatures(s, r) {
        const { layer: i } = this;
        if (!s)
          throw new Z(
            "imageryTileLayerView:fetchPopupFeatures",
            "Nothing to fetch without area",
            {
              layer: i,
            }
          );
        const { popupEnabled: a } = i,
          n = ht(i, r);
        if (!a || ze(n))
          throw new Z(
            "imageryTileLayerView:fetchPopupFeatures",
            "Missing required popupTemplate or popupEnabled",
            { popupEnabled: a, popupTemplate: n }
          );
        const o = [],
          { value: l, magdirValue: h } = await i.identify(s, {
            timeExtent: this.timeExtent,
          });
        let c = "";
        if (l && l.length) {
          c =
            i.type === "imagery-tile" && i.hasStandardTime() && l[0] != null
              ? l.map((P) => i.getStandardTimeValue(P)).join(", ")
              : l.join(", ");
          const u = { ObjectId: 0 };
          u["Raster.ServicePixelValue"] = c;
          const p = i.rasterInfo.attributeTable;
          if (f(p)) {
            const { fields: P, features: q } = p,
              I = P.find(({ name: T }) => T.toLowerCase() === "value"),
              R = I ? q.find((T) => String(T.attributes[I.name]) === c) : null;
            if (R)
              for (const T in R.attributes)
                R.attributes.hasOwnProperty(T) &&
                  (u[this._rasterFieldPrefix + T] = R.attributes[T]);
          }
          const _ = i.rasterInfo.dataType;
          (_ !== "vector-magdir" && _ !== "vector-uv") ||
            ((u["Raster.Magnitude"] = h == null ? void 0 : h[0]),
            (u["Raster.Direction"] = h == null ? void 0 : h[1]));
          const w = new ce(this.fullExtent.clone(), null, u);
          (w.layer = i), (w.sourceLayer = w.layer), o.push(w);
        }
        return o;
      }
    };
    return (
      d([m()], e.prototype, "layer", void 0),
      d([m(Me)], e.prototype, "timeExtent", void 0),
      d([m()], e.prototype, "view", void 0),
      d([m()], e.prototype, "fullExtent", null),
      d([m()], e.prototype, "tileInfo", void 0),
      d([m({ readOnly: !0 })], e.prototype, "hasTilingEffects", null),
      d([m()], e.prototype, "datumTransformation", null),
      (e = d([E("esri.views.layers.ImageryTileLayerView")], e)),
      e
    );
  };
let C = class extends ss(ct(ke(De))) {
  constructor() {
    super(...arguments),
      (this._useWebGLForProcessing = !0),
      (this._useProgressiveUpdate = !0),
      (this.subview = null);
  }
  get useWebGLForProcessing() {
    return this._useWebGLForProcessing;
  }
  set useWebGLForProcessing(t) {
    (this._useWebGLForProcessing = t),
      this.subview &&
        "useWebGLForProcessing" in this.subview &&
        (this.subview.useWebGLForProcessing = t);
  }
  get useProgressiveUpdate() {
    return this._useWebGLForProcessing;
  }
  set useProgressiveUpdate(t) {
    (this._useProgressiveUpdate = t),
      this.subview &&
        "useProgressiveUpdate" in this.subview &&
        (this.subview.useProgressiveUpdate = t);
  }
  update(t) {
    var e;
    (e = this.subview) == null || e.update(t), this.notifyChange("updating");
  }
  isUpdating() {
    return !this.subview || this.subview.updating;
  }
  attach() {
    this.layer.increaseRasterJobHandlerUsage(),
      this._updateSubview(),
      this.addAttachHandles([
        U(
          () => {
            const { layer: t } = this;
            return {
              bandIds: t.bandIds,
              renderer: t.renderer,
              interpolation: t.interpolation,
              multidimensionalDefinition: t.multidimensionalDefinition,
              rasterFunction:
                t.type === "imagery-tile" ? t.rasterFunction : null,
            };
          },
          (t, e) => {
            var l, h;
            const s =
                t.interpolation !== (e == null ? void 0 : e.interpolation) &&
                (t.interpolation === "majority" ||
                  (e == null ? void 0 : e.interpolation) === "majority") &&
                fe(this.layer),
              r =
                t.renderer !== (e == null ? void 0 : e.renderer) &&
                ((l = e == null ? void 0 : e.renderer) == null
                  ? void 0
                  : l.type) !== ((h = t.renderer) == null ? void 0 : h.type);
            r && this._updateSubview();
            const i =
                t.multidimensionalDefinition !==
                (e == null ? void 0 : e.multidimensionalDefinition),
              a = t.rasterFunction !== (e == null ? void 0 : e.rasterFunction),
              n = a && !this._useWebGLForProcessing,
              o = i || s || r || n;
            this.subview
              .redrawOrRefetch({ refetch: o, reprocess: a })
              .catch((c) => {
                B(c) || G.getLogger(this.declaredClass).error(c);
              }),
              this.notifyChange("updating");
          }
        ),
        U(
          () => this.layer.blendMode ?? "normal",
          (t) => {
            this.subview.container.blendMode = t;
          },
          ee
        ),
        U(
          () => this.layer.effect ?? null,
          (t) => {
            this.subview.container.effect = t;
          },
          ee
        ),
        U(
          () => this.layer.multidimensionalSubset ?? null,
          (t, e) => {
            const { multidimensionalDefinition: s } = this.layer;
            f(s) &&
              te(s, t) !== te(s, e) &&
              (this.subview.redrawOrRefetch({ refetch: !0 }).catch((r) => {
                B(r) || G.getLogger(this.declaredClass).error(r);
              }),
              this.notifyChange("updating"));
          },
          Ve
        ),
        U(
          () => this.timeExtent,
          () => {
            (this.subview.timeExtent = this.timeExtent),
              this.subview.redrawOrRefetch({ refetch: !0 }).catch((t) => {
                B(t) || G.getLogger(this.declaredClass).error(t);
              });
          },
          Be
        ),
      ]);
  }
  detach() {
    var t;
    this.layer.decreaseRasterJobHandlerUsage(),
      this._detachSubview(this.subview),
      (t = this.subview) == null || t.destroy(),
      (this.subview = null);
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.subview.moveEnd();
  }
  async hitTest(t, e) {
    return [
      {
        type: "graphic",
        layer: this.layer,
        mapPoint: t,
        graphic: new ce({ attributes: {}, geometry: t.clone() }),
      },
    ];
  }
  doRefresh() {
    return this.subview ? this.subview.doRefresh() : Promise.resolve();
  }
  _updateSubview() {
    var r;
    const t =
      this.layer.renderer.type === "vector-field"
        ? "rasterVF"
        : this.layer.renderer.type === "flow"
        ? "flow"
        : "raster";
    if (this.subview) {
      if (this.subview.type === t)
        return void this._attachSubview(this.subview);
      this._detachSubview(this.subview),
        (r = this.subview) == null || r.destroy(),
        (this.subview = null);
    }
    const { layer: e } = this;
    let s;
    if (
      ((s =
        t === "rasterVF"
          ? new ts({ layer: e, layerView: this })
          : t === "flow"
          ? new Ee({ layer: e, layerView: this })
          : new Kt({ layer: e, layerView: this })),
      "useWebGLForProcessing" in s &&
        (s.useWebGLForProcessing = this._useWebGLForProcessing),
      "useProgressiveUpdate" in s &&
        (s.useProgressiveUpdate = this._useProgressiveUpdate),
      "previousLOD" in s)
    ) {
      const { subview: i } = this;
      s.previousLOD = i && "previousLOD" in i ? i.previousLOD : null;
    }
    this._attachSubview(s), (this.subview = s), this.requestUpdate();
  }
  _attachSubview(t) {
    t &&
      !t.attached &&
      (t.attach(),
      (t.attached = !0),
      this.container.addChildAt(t.container, 0),
      (t.container.blendMode = this.layer.blendMode),
      (t.container.effect = this.layer.effect));
  }
  _detachSubview(t) {
    t != null &&
      t.attached &&
      (this.container.removeChild(t.container), t.detach(), (t.attached = !1));
  }
};
d([m()], C.prototype, "subview", void 0),
  d([m()], C.prototype, "useWebGLForProcessing", null),
  d([m()], C.prototype, "useProgressiveUpdate", null),
  (C = d([E("esri.views.2d.layers.ImageryTileLayerView2D")], C));
const Ds = C;
export { Ds as default };
