import {
  dh as ct,
  aD as pe,
  r as k,
  jz as Qe,
  Q as Be,
  s as M,
  dk as Ze,
  R as W,
  ar as j,
  t as O,
  q as $,
  U as et,
  bS as ut,
  iq as tt,
  aW as ht,
  ae as I,
  af as w,
  ey as it,
  ag as Q,
  dd as ft,
  aH as q,
  bm as dt,
  ah as st,
  L as rt,
  w as mt,
  aX as pt,
  a0 as yt,
  cy as gt,
  im as xt,
  io as It,
  et as wt,
  eu as bt,
  iT as St,
  iW as Rt,
  es as vt,
  ip as Tt,
  ev as _t,
  a2 as Ft,
  gr as me,
  it as kt,
  G as Ct,
  gO as Pt,
  ei as Mt,
  j0 as Ot,
  ai as Dt,
  dl as Bt,
  db as zt,
} from "./index.8fd7165c.js";
import {
  c as Et,
  w as Me,
  l as nt,
  $ as Ne,
  S as He,
  V as Jt,
  L as Nt,
  j as Le,
  n as Ht,
  m as Lt,
  a as At,
  o as Wt,
  d as qt,
} from "./fetchRasterInfo.800395a0.js";
import {
  g as at,
  y as Gt,
  a as jt,
  s as Ut,
  p as ot,
  h as Ae,
  m as Vt,
  d as We,
  v as $t,
} from "./multidimensionalUtils.54c50a30.js";
import {
  S as Xt,
  f as ye,
  T as Yt,
  r as qe,
  u as ge,
  p as Kt,
  i as ze,
  j as Qt,
  l as Zt,
  q as ei,
  N as ti,
  U as ii,
  R as si,
  s as Ie,
  B as ri,
  L as ni,
  D as ai,
} from "./RasterSymbolizer.ac2e1b06.js";
import {
  a as Ge,
  x as je,
  h as Ue,
  d as oi,
  m as li,
} from "./RawBlockCache.7184fc55.js";
import {
  b as Te,
  c as ci,
  e as ui,
  f as hi,
  z as fi,
  u as di,
  d as mi,
  g as pi,
  R as yi,
  S as gi,
  m as xi,
} from "./dataUtils.e77088c3.js";
import {
  T as Ve,
  U as we,
  j as $e,
  o as Xe,
  n as Ii,
  Q as _e,
  J as Fe,
  $ as wi,
  V as bi,
  C as Si,
} from "./rasterProjectionHelper.fde7641d.js";
import {
  C as Oe,
  f as Ri,
  i as vi,
  m as Ee,
  c as Ti,
  h as _i,
} from "./utils.b44136ae.js";
import { n as Fi, z as ki } from "./TilemapCache.cc0e5767.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./generateRendererUtils.855c90be.js";
import "./colorUtils.3868c6ed.js";
let U = class extends ct(ft) {
  constructor() {
    super(...arguments),
      (this.rasterJobHandler = null),
      (this.datasetName = null),
      (this.datasetFormat = null),
      (this.hasUniqueSourceStorageInfo = !0),
      (this.rasterInfo = null),
      (this.ioConfig = { sampling: "closest" });
  }
  async init() {
    const e = Ve();
    this.addResolvingPromise(e), await this.when();
  }
  normalizeCtorArgs(e) {
    return (
      e &&
        e.ioConfig &&
        (e = {
          ...e,
          ioConfig: {
            resolution: null,
            bandIds: null,
            sampling: "closest",
            tileInfo: pe.create(),
            ...e.ioConfig,
          },
        }),
      e
    );
  }
  get _isGlobalWrappableSource() {
    const { rasterInfo: e } = this,
      t = we(e.spatialReference);
    return k(t) && e.extent.width >= t / 2;
  }
  set url(e) {
    this._set("url", Qe(e, Be.getLogger(this.declaredClass)));
  }
  async open(e) {
    throw new M("BaseRaster:open-not-implemented", "open() is not implemented");
  }
  async fetchTile(e, t, n, i = {}) {
    const s = i.tileInfo || this.rasterInfo.storageInfo.tileInfo,
      r = this.getTileExtentFromTileInfo(e, t, n, s);
    return this.fetchPixels(r, s.size[0], s.size[1], i);
  }
  async identify(e, t = {}) {
    var P;
    e = Ze(W, e).clone().normalize();
    const { multidimensionalDefinition: n, timeExtent: i } = t,
      { rasterInfo: s } = this,
      { hasMultidimensionalTranspose: r, multidimensionalInfo: a } = s;
    let { transposedVariableName: l } = t;
    const o = k(a) && r && (i != null || at(n));
    o &&
      !l &&
      ((l =
        k(n) && n.length > 0
          ? n[0].variableName ?? void 0
          : a.variables[0].name),
      (t = { ...t, transposedVariableName: l })),
      (t = this._getRequestOptionsWithSliceId(t));
    const { spatialReference: c, extent: h } = s,
      { datumTransformation: d } = t;
    let u = $e(e, c, d);
    if (!h.intersects(u)) return { location: u, value: null };
    if (k(s.transform)) {
      const E = s.transform.inverseTransform(u);
      if (!s.nativeExtent.intersects(E)) return { location: E, value: null };
      u = E;
    }
    let m = 0;
    const p = k(l) && k(a) && s.hasMultidimensionalTranspose;
    if (this.datasetFormat === "Function") {
      const E = this.primaryRasters.rasters[0];
      if (p) return E.identify(u, t);
      const { pixelSize: N } = s,
        D = 3,
        J = (N.x * D) / 2,
        H = (N.y * D) / 2,
        L = new j({
          xmin: u.x - J,
          xmax: u.x + J,
          ymin: u.y - H,
          ymax: u.y + H,
          spatialReference: c,
        }),
        G = { interpolation: "nearest" },
        { pixelBlock: B } = await E.fetchPixels(L, D, D, G),
        { pixelBlock: X } = await this.fetchPixels(L, D, D, G);
      if (O(B)) return { location: u, value: null };
      const Z = Math.floor(D * D * 0.5),
        xe = !B.mask || B.mask[Z] ? B.pixels.map((ce) => ce[Z]) : null;
      let le;
      return (
        k(X) &&
          (le = !X.mask || X.mask[Z] ? X.pixels.map((ce) => ce[Z]) : void 0),
        { location: u, value: xe, processedValue: le, pyramidLevel: 0 }
      );
    }
    if (!p) {
      if (t.srcResolution)
        m = Xe(t.srcResolution, s, this.ioConfig.sampling).pyramidLevel;
      else if (
        ((m = await this.computeBestPyramidLevelForLocation(e, t)), m == null)
      )
        return { location: u, value: null };
    }
    const g = this.identifyPixelLocation(u, m, null, p);
    if (g === null) return { location: u, value: null };
    const { row: f, col: y, rowOffset: x, colOffset: S, blockWidth: T } = g,
      C = l ?? $(t.sliceId),
      _ = Ge(this.url, C),
      R = `${m}/${f}/${y}`;
    let F = je(_, null, R);
    O(F) && ((F = this.fetchRawTile(m, f, y, t)), Ue(_, null, R, F));
    const b = await F;
    if (O(b) || !((P = b.pixels) != null && P.length))
      return { location: u, value: null };
    const v = x * T + S;
    return this._processIdentifyResult(b, {
      srcLocation: u,
      position: v,
      pyramidLevel: m,
      useTransposedTile: !!p,
      requestSomeSlices: o,
      identifyOptions: t,
    });
  }
  async fetchPixels(e, t, n, i = {}) {
    if (
      ((e = Ii(e)), (i = this._getRequestOptionsWithSliceId(i)).requestRawData)
    )
      return this._fetchPixels(e, t, n, i);
    const s = we(e.spatialReference),
      r = _e(e);
    if (O(s) || r === 0 || (r === 1 && this._isGlobalWrappableSource))
      return this._fetchPixels(e, t, n, i);
    if (r >= 3) return { extent: e, pixelBlock: null };
    const a = [],
      { xmin: l, xmax: o } = e,
      c = Math.round((s / (o - l)) * t),
      h = c - Math.round(((s / 2 - l) / (o - l)) * t);
    let d = 0;
    const u = [];
    for (let f = 0; f <= r; f++) {
      const y = new j({
          xmin: f === 0 ? l : -s / 2,
          xmax: f === r ? o - s * f : s / 2,
          ymin: e.ymin,
          ymax: e.ymax,
          spatialReference: e.spatialReference,
        }),
        x = f === 0 ? c - h : f === r ? t - d : c;
      (d += x), u.push(x);
      const S =
        i.disableWrapAround && f > 0 ? null : this._fetchPixels(y, x, n, i);
      a.push(S);
    }
    const m = (await Promise.all(a)).map((f) =>
      f == null ? void 0 : f.pixelBlock
    );
    let p = null;
    const g = { width: t, height: n };
    return (
      (p = this.rasterJobHandler
        ? (
            await this.rasterJobHandler.mosaicAndTransform(
              {
                srcPixelBlocks: m,
                srcMosaicSize: g,
                destDimension: null,
                coefs: null,
                sampleSpacing: null,
                interpolation: "nearest",
                alignmentInfo: null,
                blockWidths: u,
              },
              i
            )
          ).pixelBlock
        : Te(m, g, { blockWidths: u })),
      {
        extent: e,
        srcExtent: Fe(
          e,
          this.rasterInfo.spatialReference,
          i.datumTransformation
        ),
        pixelBlock: p,
      }
    );
  }
  async fetchRawPixels(e, t, n, i = {}) {
    t = { x: Math.floor(t.x), y: Math.floor(t.y) };
    const s = await this._fetchRawTiles(e, t, n, i),
      { nativeExtent: r, nativePixelSize: a, storageInfo: l } = this.rasterInfo,
      o = 2 ** e,
      c = a.x * o,
      h = a.y * o,
      d = new j({
        xmin: r.xmin + c * t.x,
        xmax: r.xmin + c * (t.x + n.width - 1),
        ymin: r.ymax - h * (t.y + n.height - 1),
        ymax: r.ymax - h * t.y,
        spatialReference: r.spatialReference,
      });
    if (!s) return { extent: d, srcExtent: d, pixelBlock: null };
    const { pixelBlocks: u, mosaicSize: m } = s;
    if (
      u.length === 1 &&
      k(u[0]) &&
      u[0].width === n.width &&
      u[0].height === n.height
    )
      return { extent: d, srcExtent: d, pixelBlock: s.pixelBlocks[0] };
    const p = e > 0 ? l.pyramidBlockWidth : l.blockWidth,
      g = e > 0 ? l.pyramidBlockHeight : l.blockHeight,
      f = { x: t.x % p, y: t.y % g };
    let y;
    return (
      (y = this.rasterJobHandler
        ? (
            await this.rasterJobHandler.mosaicAndTransform(
              {
                srcPixelBlocks: u,
                srcMosaicSize: m,
                destDimension: n,
                clipOffset: f,
                clipSize: n,
                coefs: null,
                sampleSpacing: null,
                interpolation: i.interpolation,
                alignmentInfo: null,
                blockWidths: null,
              },
              i
            )
          ).pixelBlock
        : Te(u, m, { clipOffset: f, clipSize: n })),
      { extent: d, srcExtent: d, pixelBlock: y }
    );
  }
  fetchRawTile(e, t, n, i) {
    throw new M(
      "BaseRaster:read-not-implemented",
      "fetchRawTile() is not implemented"
    );
  }
  computeExtent(e) {
    return Fe(this.rasterInfo.extent, e);
  }
  decodePixelBlock(e, t) {
    return !this.rasterJobHandler || t.useCanvas
      ? Xt(e, t)
      : this.rasterJobHandler.decode({ data: e, options: t });
  }
  async request(e, t, n = 0) {
    const { customFetchParameters: i } = this.ioConfig,
      { range: s, query: r, headers: a } = t;
    n = n ?? t.retryCount ?? this.ioConfig.retryCount;
    const l = s ? { Range: `bytes=${s.from}-${s.to}` } : null;
    try {
      return await et(e, {
        ...t,
        query: { ...r, ...i },
        headers: { ...a, ...l },
      });
    } catch (o) {
      if (n > 0) return n--, this.request(e, t, n);
      throw o;
    }
  }
  getSliceIndex(e) {
    const { multidimensionalInfo: t } = this.rasterInfo;
    return O(t) || O(e) || e.length === 0 ? null : Gt(e, t);
  }
  getTileExtentFromTileInfo(e, t, n, i) {
    const s = ut(i.lodAt(e));
    return this.getTileExtent(
      { x: s.resolution, y: s.resolution },
      t,
      n,
      i.origin,
      i.spatialReference,
      i.size
    );
  }
  updateTileInfo() {
    const {
      storageInfo: e,
      spatialReference: t,
      extent: n,
      pixelSize: i,
    } = this.rasterInfo;
    if (!e.tileInfo) {
      const s = [],
        r = e.maximumPyramidLevel || 0;
      let a = Math.max(i.x, i.y),
        l = (1 / 0.0254) * 96 * a;
      for (let c = 0; c <= r; c++)
        s.push(new tt({ level: r - c, resolution: a, scale: l })),
          (a *= 2),
          (l *= 2);
      const o = new W({ x: n.xmin, y: n.ymax, spatialReference: t });
      (e.tileInfo = new pe({
        origin: o,
        size: [e.blockWidth, e.blockHeight],
        spatialReference: t,
        lods: s,
      })),
        (e.isVirtualTileInfo = !0);
    }
  }
  createRemoteDatasetStorageInfo(e, t = 512, n = 512, i) {
    const {
        width: s,
        height: r,
        nativeExtent: a,
        pixelSize: l,
        spatialReference: o,
      } = e,
      c = new W({ x: a.xmin, y: a.ymax, spatialReference: o });
    i == null &&
      (i = Math.max(0, Math.round(Math.log(Math.max(s, r)) / Math.LN2 - 8)));
    const h = this.computeBlockBoundary(
      a,
      512,
      512,
      { x: a.xmin, y: a.ymax },
      [l],
      i
    );
    e.storageInfo = new ye({
      blockWidth: t,
      blockHeight: n,
      pyramidBlockWidth: t,
      pyramidBlockHeight: n,
      origin: c,
      firstPyramidLevel: 1,
      maximumPyramidLevel: i,
      blockBoundary: h,
    });
  }
  async computeBestPyramidLevelForLocation(e, t = {}) {
    return 0;
  }
  computeBlockBoundary(e, t, n, i, s, r = 0, a = 2) {
    if (s.length === 1 && r > 0) {
      s = [...s];
      let { x: h, y: d } = s[0];
      for (let u = 0; u < r; u++) (h *= a), (d *= a), s.push({ x: h, y: d });
    }
    const l = [],
      { x: o, y: c } = i;
    for (let h = 0; h < s.length; h++) {
      const { x: d, y: u } = s[h];
      l.push({
        minCol: Math.floor((e.xmin - o + 0.1 * d) / t / d),
        maxCol: Math.floor((e.xmax - o - 0.1 * d) / t / d),
        minRow: Math.floor((c - e.ymax + 0.1 * u) / n / u),
        maxRow: Math.floor((c - e.ymin - 0.1 * u) / n / u),
      });
    }
    return l;
  }
  getPyramidPixelSize(e) {
    const { nativePixelSize: t } = this.rasterInfo,
      { pyramidResolutions: n, pyramidScalingFactor: i } =
        this.rasterInfo.storageInfo;
    if (e === 0) return t;
    if (k(n) && n.length) return n[e - 1];
    const s = i ** e;
    return { x: t.x * s, y: t.y * s };
  }
  identifyPixelLocation(e, t, n, i) {
    const {
        spatialReference: s,
        nativeExtent: r,
        storageInfo: a,
      } = this.rasterInfo,
      { maximumPyramidLevel: l, origin: o, transposeInfo: c } = a,
      h = i && k(c) ? c.tileSize[0] : a.blockWidth,
      d = i && k(c) ? c.tileSize[1] : a.blockHeight,
      u = $e(e, s, n);
    if (!r.intersects(u) || t < 0 || t > l) return null;
    const m = this.getPyramidPixelSize(t),
      { x: p, y: g } = m,
      f = (o.y - u.y) / g / d,
      y = (u.x - o.x) / p / h,
      x = Math.min(d - 1, Math.floor((f - Math.floor(f)) * d)),
      S = Math.min(h - 1, Math.floor((y - Math.floor(y)) * h));
    return {
      pyramidLevel: t,
      row: Math.floor(f),
      col: Math.floor(y),
      rowOffset: x,
      colOffset: S,
      blockWidth: h,
      srcLocation: u,
    };
  }
  getTileExtent(e, t, n, i, s, r) {
    const [a, l] = r,
      o = i.x + n * a * e.x,
      c = o + a * e.x,
      h = i.y - t * l * e.y,
      d = h - l * e.y;
    return new j({ xmin: o, xmax: c, ymin: d, ymax: h, spatialReference: s });
  }
  getBlockWidthHeight(e) {
    return {
      blockWidth:
        e > 0
          ? this.rasterInfo.storageInfo.pyramidBlockWidth
          : this.rasterInfo.storageInfo.blockWidth,
      blockHeight:
        e > 0
          ? this.rasterInfo.storageInfo.pyramidBlockHeight
          : this.rasterInfo.storageInfo.blockHeight,
    };
  }
  isBlockOutside(e, t, n) {
    const i = this.rasterInfo.storageInfo.blockBoundary[e];
    return !i || i.maxRow < t || i.maxCol < n || i.minRow > t || i.minCol > n;
  }
  async _fetchPixels(e, t, n, i = {}) {
    let s = _e(e);
    if (s >= 2) return { extent: e, pixelBlock: null };
    const r = this._getSourceDataInfo(e, t, n, i),
      {
        pyramidLevel: a,
        pyramidResolution: l,
        srcResolution: o,
        srcExtent: c,
        srcWidth: h,
        srcHeight: d,
      } = r;
    if (h === 0 || d === 0)
      return { extent: e, srcExtent: c, pixelBlock: null };
    const u = $(this.rasterInfo.transform),
      m = (u == null ? void 0 : u.type) === "gcs-shift",
      p = k(we(e.spatialReference));
    (!m && p) || (s = _e(r.srcExtent, m));
    const g = this.rasterInfo.storageInfo,
      f = {
        x: Math.floor((c.xmin - g.origin.x) / l.x + 0.1),
        y: Math.floor((g.origin.y - c.ymax) / l.y + 0.1),
      },
      y = await this._fetchRawTiles(
        a,
        f,
        { width: h, height: d, wrapCount: s },
        i
      );
    if (!y) return { extent: e, srcExtent: c, pixelBlock: null };
    const x = a > 0 ? g.pyramidBlockWidth : g.blockWidth,
      S = a > 0 ? g.pyramidBlockHeight : g.blockHeight,
      T = x === h && S === d && f.x % x == 0 && f.y % S == 0,
      C = new W({
        x: (e.xmax - e.xmin) / t,
        y: (e.ymax - e.ymin) / n,
        spatialReference: e.spatialReference,
      }),
      _ = !e.spatialReference.equals(this.rasterInfo.spatialReference),
      { datumTransformation: R } = i;
    if (
      !_ &&
      T &&
      y.pixelBlocks.length === 1 &&
      x === t &&
      S === n &&
      o.x === C.x &&
      o.y === C.y
    )
      return { extent: e, srcExtent: c, pixelBlock: y.pixelBlocks[0] };
    const F = p && k(we(c.spatialReference)),
      b =
        i.requestProjectedLocalDirections &&
        this.rasterInfo.dataType.startsWith("vector");
    b && !this.rasterJobHandler && (await Ve());
    const v = this.rasterJobHandler
      ? await this.rasterJobHandler.getProjectionOffsetGrid(
          {
            projectedExtent: e,
            srcBufferExtent: y.extent,
            pixelSize: C.toJSON(),
            datumTransformation: R,
            rasterTransform: u,
            hasWrapAround: s > 0 || F,
            isAdaptive: this.ioConfig.optimizeProjectionAccuracy !== !1,
            includeGCSGrid: b,
          },
          i
        )
      : wi({
          projectedExtent: e,
          srcBufferExtent: y.extent,
          pixelSize: C,
          datumTransformation: R,
          rasterTransform: u,
          hasWrapAround: s > 0 || F,
          isAdaptive: !1,
          includeGCSGrid: b,
        });
    let P;
    const E = !i.requestRawData,
      N = { rows: v.spacing[0], cols: v.spacing[1] },
      D = $(this._getRasterTileAlignmentInfo(a, y.extent.xmin)),
      { pixelBlocks: J, mosaicSize: H, isPartiallyFilled: L } = y;
    let G = null;
    if (this.rasterJobHandler)
      ({ pixelBlock: P, localNorthDirections: G } =
        await this.rasterJobHandler.mosaicAndTransform(
          {
            srcPixelBlocks: J,
            srcMosaicSize: H,
            destDimension: E ? { width: t, height: n } : null,
            coefs: E ? v.coefficients : null,
            sampleSpacing: E ? N : null,
            projectDirections: b,
            gcsGrid: b ? v.gcsGrid : null,
            isUV: this.rasterInfo.dataType === "vector-uv",
            interpolation: i.interpolation,
            alignmentInfo: D,
            blockWidths: null,
          },
          i
        ));
    else {
      const B = Te(J, H, { alignmentInfo: D });
      (P = E
        ? ci(B, { width: t, height: n }, v.coefficients, N, i.interpolation)
        : B),
        b &&
          v.gcsGrid &&
          ((G = ui({ width: t, height: n }, v.gcsGrid)),
          (P = hi(P, this.rasterInfo.dataType, G)));
    }
    return i.requestRawData || b
      ? {
          srcExtent: c,
          pixelBlock: P,
          transformGrid: v,
          localNorthDirections: G,
          extent: e,
          isPartiallyFilled: L,
        }
      : { srcExtent: c, extent: e, pixelBlock: P };
  }
  async _fetchRawTiles(e, t, n, i) {
    const { origin: s, blockBoundary: r } = this.rasterInfo.storageInfo,
      { blockWidth: a, blockHeight: l } = this.getBlockWidthHeight(e);
    let { x: o, y: c } = t,
      { width: h, height: d, wrapCount: u } = n;
    const m = this._getRasterTileAlignmentInfo(e, 0);
    i.buffer &&
      ((o -= i.buffer.cols),
      (c -= i.buffer.rows),
      (h += 2 * i.buffer.cols),
      (d += 2 * i.buffer.rows));
    let p = 0,
      g = 0,
      f = 0;
    u &&
      k(m) &&
      (({
        worldColumnCountFromOrigin: g,
        originColumnOffset: f,
        rightPadding: p,
      } = m),
      g * m.blockWidth - p >= o + h && (p = 0));
    const y = Math.floor(o / a),
      x = Math.floor(c / l),
      S = Math.floor((o + h + p - 1) / a),
      T = Math.floor((c + d + p - 1) / l),
      C = r[e];
    if (!C) return null;
    const { minRow: _, minCol: R, maxCol: F, maxRow: b } = C;
    if (u === 0 && (T < _ || S < R || x > b || y > F)) return null;
    const v = [];
    let P = !1;
    const E =
      this.ioConfig.allowPartialFill == null
        ? i.allowPartialFill
        : this.ioConfig.allowPartialFill;
    for (let B = x; B <= T; B++)
      for (let X = y; X <= S; X++) {
        let Z = X;
        if (
          (!i.disableWrapAround && u && k(m) && g <= X && (Z = X - g - f),
          B >= _ && Z >= R && b >= B && F >= Z)
        ) {
          const xe = this._fetchRawTile(e, B, Z, i);
          E
            ? v.push(
                new Promise((le) => {
                  xe.then((ce) => le(ce)).catch(() => {
                    (P = !0), le(null);
                  });
                })
              )
            : v.push(xe);
        } else v.push(Promise.resolve(null));
      }
    if (v.length === 0) return null;
    const N = await Promise.all(v),
      D = { height: (T - x + 1) * l, width: (S - y + 1) * a },
      { spatialReference: J } = this.rasterInfo,
      H = this.getPyramidPixelSize(e),
      { x: L, y: G } = H;
    return {
      extent: new j({
        xmin: s.x + y * a * L,
        xmax: s.x + (S + 1) * a * L,
        ymin: s.y - (T + 1) * l * G,
        ymax: s.y - x * l * G,
        spatialReference: J,
      }),
      pixelBlocks: N,
      mosaicSize: D,
      isPartiallyFilled: P,
    };
  }
  _fetchRawTile(e, t, n, i) {
    const s = this.rasterInfo.storageInfo.blockBoundary[e];
    if (!s) return Promise.resolve(null);
    const { minRow: r, minCol: a, maxCol: l, maxRow: o } = s;
    if (t < r || n < a || t > o || n > l) return Promise.resolve(null);
    const c = Ge(this.url, i.sliceId),
      h = `${e}/${t}/${n}`;
    let d = je(c, i.registryId, h);
    if (O(d)) {
      const u = new AbortController();
      (d = this.fetchRawTile(e, t, n, { ...i, signal: u.signal })),
        Ue(c, i.registryId, h, d, u),
        d.catch(() => oi(c, i.registryId, h));
    }
    return (
      i.signal &&
        ht(i, () => {
          li(c, i.registryId, h);
        }),
      d
    );
  }
  _computeMagDirValues(e) {
    var o;
    const { bandCount: t, dataType: n } = this.rasterInfo;
    if (
      ((t !== 2 || n !== "vector-magdir") && n !== "vector-uv") ||
      (e == null ? void 0 : e.length) !== 2 ||
      !((o = e[0]) != null && o.length)
    )
      return null;
    const i = e[0].length;
    if (n === "vector-magdir") {
      const c = e[1].map((h) => (h + 360) % 360);
      return [e[0], c];
    }
    const [s, r] = e,
      a = [],
      l = [];
    for (let c = 0; c < i; c++) {
      const [h, d] = fi([s[c], r[c]]);
      a.push(h), l.push(d);
    }
    return [a, l];
  }
  _getRasterTileAlignmentInfo(e, t) {
    return (
      this._rasterTileAlighmentInfo == null &&
        (this._rasterTileAlighmentInfo = bi(this.rasterInfo)),
      O(this._rasterTileAlighmentInfo.pyramidsInfo)
        ? null
        : {
            startX: t,
            halfWorldWidth: this._rasterTileAlighmentInfo.halfWorldWidth,
            hasGCSSShiftTransform:
              this._rasterTileAlighmentInfo.hasGCSSShiftTransform,
            ...this._rasterTileAlighmentInfo.pyramidsInfo[e],
          }
    );
  }
  _getSourceDataInfo(e, t, n, i = {}) {
    const s = {
      datumTransformation: i.datumTransformation,
      pyramidLevel: 0,
      pyramidResolution: null,
      srcExtent: null,
      srcHeight: 0,
      srcResolution: null,
      srcWidth: 0,
    };
    i.srcResolution &&
      ((s.srcResolution = i.srcResolution), this._updateSourceDataInfo(e, s));
    const r = this.rasterInfo.storageInfo.maximumPyramidLevel || 0,
      { srcWidth: a, srcHeight: l, pyramidLevel: o } = s,
      c = a / t,
      h = l / n,
      d = o < r && c * h >= 16,
      u = o === r && this._requireTooManySrcTiles(a, l, t, n);
    if (d || u || a === 0 || l === 0) {
      const m = new W({
        x: (e.xmax - e.xmin) / t,
        y: (e.ymax - e.ymin) / n,
        spatialReference: e.spatialReference,
      });
      let p = Si(m, this.rasterInfo.spatialReference, e, s.datumTransformation);
      const g =
        !p ||
        (i.srcResolution && p.x + p.y < i.srcResolution.x + i.srcResolution.y);
      if (d && i.srcResolution && g) {
        const f = Math.round(Math.log(Math.max(c, h)) / Math.LN2) - 1;
        if (r - o + 3 >= f) {
          const y = 2 ** f;
          p = { x: i.srcResolution.x * y, y: i.srcResolution.y * y };
        }
      }
      p && ((s.srcResolution = p), this._updateSourceDataInfo(e, s));
    }
    return (
      this._requireTooManySrcTiles(s.srcWidth, s.srcHeight, t, n) &&
        ((s.srcWidth = 0), (s.srcHeight = 0)),
      s
    );
  }
  _requireTooManySrcTiles(e, t, n, i) {
    const { tileInfo: s } = this.rasterInfo.storageInfo;
    return (
      Math.ceil(e / s.size[0]) * Math.ceil(t / s.size[1]) >= 256 ||
      e / n > 8 ||
      t / i > 8
    );
  }
  _updateSourceDataInfo(e, t) {
    (t.srcWidth = 0), (t.srcHeight = 0);
    const n = this.rasterInfo.spatialReference,
      { srcResolution: i, datumTransformation: s } = t,
      {
        pyramidLevel: r,
        pyramidResolution: a,
        excessiveReading: l,
      } = Xe(i, this.rasterInfo, this.ioConfig.sampling);
    if (l) return;
    let o = t.srcExtent || Fe(e, n, s);
    if (o == null) return;
    const c = $(this.rasterInfo.transform);
    c && (o = c.inverseTransform(o)), (t.srcExtent = o);
    const h = Math.ceil((o.xmax - o.xmin) / a.x - 0.1),
      d = Math.ceil((o.ymax - o.ymin) / a.y - 0.1);
    (t.pyramidLevel = r),
      (t.pyramidResolution = a),
      (t.srcWidth = h),
      (t.srcHeight = d);
  }
  _getRequestOptionsWithSliceId(e) {
    return (
      k(this.rasterInfo.multidimensionalInfo) &&
        e.sliceId == null &&
        (e = {
          ...e,
          sliceId: this.getSliceIndex(e.multidimensionalDefinition),
        }),
      e
    );
  }
  _processIdentifyResult(e, t) {
    const {
        srcLocation: n,
        position: i,
        pyramidLevel: s,
        useTransposedTile: r,
      } = t,
      a = e.pixels[0].length / e.width / e.height;
    if (e.mask && !e.mask[i]) return { location: n, value: null };
    const { multidimensionalInfo: l } = this.rasterInfo;
    if (O(l) || !r) {
      const f = e.pixels.map((S) => S[i]),
        y = { location: n, value: f, pyramidLevel: s },
        x = this._computeMagDirValues(f.map((S) => [S]));
      return x != null && x.length && (y.magdirValue = x.map((S) => S[0])), y;
    }
    let o = e.pixels.map((f) => f.slice(i * a, i * a + a)),
      c = this._computeMagDirValues(o);
    const { requestSomeSlices: h, identifyOptions: d } = t;
    let u = jt(l, d.transposedVariableName);
    if (h) {
      const f = Ut(u, $(d.multidimensionalDefinition), $(d.timeExtent));
      (o = o.map((y) => f.map((x) => y[x]))),
        (c = c == null ? void 0 : c.map((y) => f.map((x) => y[x]))),
        (u = f.map((y) => u[y]));
    }
    const m = e.noDataValues || this.rasterInfo.noDataValue,
      p = { pixels: o, pixelType: e.pixelType };
    let g;
    return (
      k(m) && (di(p, m), (g = p.mask)),
      {
        location: n,
        value: null,
        dataSeries: u.map((f, y) => {
          const x = {
            value:
              (g == null ? void 0 : g[y]) === 0 ? null : o.map((S) => S[y]),
            multidimensionalDefinition: f.multidimensionalDefinition.map(
              (S) => new ot({ ...S, isSlice: !0 })
            ),
          };
          return (
            c != null && c.length && (x.magdirValue = [c[0][y], c[1][y]]), x
          );
        }),
        pyramidLevel: s,
      }
    );
  }
};
I([w()], U.prototype, "_rasterTileAlighmentInfo", void 0),
  I([w({ readOnly: !0 })], U.prototype, "_isGlobalWrappableSource", null),
  I([w(it)], U.prototype, "url", null),
  I(
    [w({ type: String, json: { write: !0 } })],
    U.prototype,
    "datasetName",
    void 0
  ),
  I(
    [w({ type: String, json: { write: !0 } })],
    U.prototype,
    "datasetFormat",
    void 0
  ),
  I([w()], U.prototype, "hasUniqueSourceStorageInfo", void 0),
  I([w()], U.prototype, "rasterInfo", void 0),
  I([w()], U.prototype, "ioConfig", void 0),
  I([w()], U.prototype, "sourceJSON", void 0),
  (U = I([Q("esri.layers.support.rasterDatasets.BaseRaster")], U));
const ne = U;
let te = class extends ne {
  constructor() {
    super(...arguments),
      (this.datasetFormat = "Function"),
      (this.tileType = "Raster"),
      (this.rasterFunction = null);
  }
  async open(e) {
    var o, c;
    await this.init();
    const { rasterFunction: t } = this;
    (c = (o = this.primaryRasters) == null ? void 0 : o.rasters) != null &&
    c.length
      ? (t.sourceRasters = this.primaryRasters.rasters)
      : (this.primaryRasters = t.getPrimaryRasters());
    const { rasters: n, rasterIds: i } = this.primaryRasters,
      s = n.map((h) => (h.rasterInfo ? void 0 : h.open(e)));
    await Promise.all(s);
    const r = n.map(({ rasterInfo: h }) => h),
      a = t.bind({ rasterInfos: r, rasterIds: i });
    if (!a.success || r.length === 0)
      throw new M(
        "raster-function:open",
        `cannot bind the function: ${a.error ?? ""}`
      );
    await this.syncJobHandler();
    const l = r[0];
    (this.hasUniqueSourceStorageInfo =
      r.length === 1 ||
      r.slice(1).every((h) => this._hasSameStorageInfo(h, l))),
      this.set("sourceJSON", n[0].sourceJSON),
      this.set("rasterInfo", t.rasterInfo);
  }
  async syncJobHandler() {
    var e;
    return (e = this.rasterJobHandler) == null
      ? void 0
      : e.updateRasterFunction(this.rasterFunction);
  }
  async fetchPixels(e, t, n, i = {}) {
    var d;
    const { rasters: s, rasterIds: r } = this.primaryRasters,
      a = s.map((u) => u.fetchPixels(e, t, n, i)),
      l = await Promise.all(a),
      o = l.map((u) => u.pixelBlock);
    if (i.skipRasterFunction || o.every((u) => O(u))) return l[0];
    const c =
        ((d = l.find((u) => k(u.pixelBlock))) == null ? void 0 : d.extent) ?? e,
      h = this.rasterJobHandler
        ? await this.rasterJobHandler.process({
            extent: c,
            primaryPixelBlocks: o,
            primaryRasterIds: r,
          })
        : this.rasterFunction.process({
            extent: c,
            primaryPixelBlocks: o,
            primaryRasterIds: r,
          });
    return { ...l[0], pixelBlock: h };
  }
  _hasSameStorageInfo(e, t) {
    const { storageInfo: n, pixelSize: i, spatialReference: s, extent: r } = e,
      { storageInfo: a, pixelSize: l, spatialReference: o, extent: c } = t;
    return (
      i.x === l.x &&
      i.y === l.y &&
      s.equals(o) &&
      r.equals(c) &&
      n.blockHeight === a.blockHeight &&
      n.blockWidth === a.blockWidth &&
      n.maximumPyramidLevel === a.maximumPyramidLevel
    );
  }
};
I(
  [w({ type: String, json: { write: !0 } })],
  te.prototype,
  "datasetFormat",
  void 0
),
  I([w()], te.prototype, "tileType", void 0),
  I([w()], te.prototype, "rasterFunction", void 0),
  I([w()], te.prototype, "primaryRasters", void 0),
  (te = I([Q("esri.layers.support.rasterDatasets.FunctionRaster")], te));
const De = te,
  Ye = Be.getLogger("esri.layers.mixins.ImageryTileMixin"),
  Ci = (e) => {
    let t = class extends e {
      constructor(...i) {
        var s, r;
        super(...i),
          (this._isConstructedFromFunctionRaster = !1),
          (this._rasterJobHandler = {
            instance: null,
            refCount: 0,
            connectionPromise: null,
          }),
          (this.bandIds = null),
          (this.copyright = null),
          (this.interpolation = "nearest"),
          (this.multidimensionalSubset = null),
          (this.raster = null),
          (this.rasterFunction = null),
          (this.rasterInfo = null),
          (this.sourceJSON = null),
          (this.spatialReference = null),
          (this.symbolizer = null),
          (this._isConstructedFromFunctionRaster =
            ((r = (s = i[0]) == null ? void 0 : s.raster) == null
              ? void 0
              : r.datasetFormat) === "Function");
      }
      get fullExtent() {
        var i;
        return (i = this.rasterInfo) == null ? void 0 : i.extent;
      }
      set multidimensionalDefinition(i) {
        this._set("multidimensionalDefinition", i), this.updateRenderer();
      }
      get tileInfo() {
        var i;
        return (i = this.rasterInfo) == null ? void 0 : i.storageInfo.tileInfo;
      }
      set url(i) {
        this._set("url", Qe(i, Ye));
      }
      set renderer(i) {
        this._set("renderer", i), this.updateRenderer();
      }
      async convertVectorFieldData(i, s) {
        if (O(i) || !this.rasterInfo) return null;
        const r = this._rasterJobHandler.instance,
          a = this.rasterInfo.dataType;
        return r
          ? r.convertVectorFieldData({ pixelBlock: i, dataType: a }, s)
          : mi(i, a);
      }
      async createFlowMesh(i, s) {
        const r = this._rasterJobHandler.instance;
        return r
          ? r.createFlowMesh(i, s)
          : pi(
              i.meshType,
              i.simulationSettings,
              i.flowData,
              k(s.signal) ? s.signal : new AbortController().signal
            );
      }
      normalizeRasterFetchOptions(i) {
        var l, o;
        const { multidimensionalInfo: s } = this.rasterInfo ?? {};
        if (O(s)) return i;
        let r = i.multidimensionalDefinition || this.multidimensionalDefinition;
        (!O(r) && r.length) ||
          (r = Ae(this.raster.rasterInfo, {
            multidimensionalSubset: this.multidimensionalSubset,
          }));
        const a = i.timeExtent || this.timeExtent;
        if (k(r) && k(a) && (k(a.start) || k(a.end))) {
          r = r.map((y) => y.clone());
          const c =
              (o =
                (l = s.variables.find(
                  ({ name: y }) => y === r[0].variableName
                )) == null
                  ? void 0
                  : l.dimensions) == null
                ? void 0
                : o.find(({ name: y }) => y === "StdTime"),
            h = r.find(({ dimensionName: y }) => y === "StdTime");
          if (!c || !h) return { ...i, multidimensionalDefinition: null };
          const { start: d, end: u } = a,
            m = O(d) ? null : d.getTime(),
            p = O(u) ? null : u.getTime(),
            g = m ?? p,
            f = p ?? m;
          if (k(c.values)) {
            const y = c.values.filter((x) => {
              if (Array.isArray(x)) {
                if (g === f) return x[0] <= g && x[1] >= g;
                const S = (x[0] <= g && x[1] > g) || (x[0] < f && x[1] >= f),
                  T = (x[0] >= g && x[1] <= f) || (x[0] < g && x[1] > f);
                return S || T;
              }
              return g === f ? x === g : x >= g && x <= f;
            });
            if (y.length) {
              const x = y.sort((S, T) =>
                g === f
                  ? (S[0] ?? S) - (T[0] ?? T)
                  : Math.abs((S[1] ?? S) - f) - Math.abs((T[1] ?? T) - f)
              )[0];
              h.values = [x];
            } else r = null;
          } else if (c.hasRegularIntervals && c.extent) {
            const [y, x] = c.extent;
            g > x || f < y
              ? (r = null)
              : (h.values = g === f ? [g] : [Math.max(y, g), Math.min(x, f)]);
          }
        }
        return k(r) && Vt(r, this.multidimensionalSubset)
          ? { ...i, multidimensionalDefinition: null }
          : { ...i, multidimensionalDefinition: r };
      }
      async updateRasterFunction() {
        var h, d;
        if (
          this.type !== "imagery-tile" ||
          (!this.rasterFunction && !this._cachedRasterFunctionJson) ||
          JSON.stringify(this.rasterFunction) ===
            JSON.stringify(this._cachedRasterFunctionJson)
        )
          return;
        if (
          this._isConstructedFromFunctionRaster &&
          this.raster.datasetFormat === "Function"
        ) {
          const u = this.raster.rasterFunction.toJSON();
          return (
            !this.rasterFunction &&
              u &&
              this._set("rasterFunction", Me.fromJSON(u)),
            void (this._cachedRasterFunctionJson =
              (h = this.rasterFunction) == null ? void 0 : h.toJSON())
          );
        }
        let i,
          s = this.raster,
          r = !1;
        s.datasetFormat === "Function"
          ? ((i = s.primaryRasters.rasters), (s = i[0]), (r = !0))
          : (i = [s]);
        const { rasterFunction: a } = this;
        if (a) {
          const u = { raster: s };
          i.length > 1 && i.forEach((g) => (u[g.url] = g));
          const m = Oe(a.rasterFunctionDefinition ?? a.toJSON(), u),
            p = new De({ rasterFunction: m });
          (p.rasterJobHandler = this._rasterJobHandler.instance),
            await p.open(),
            (this._cachedRasterFunctionJson =
              (d = this.rasterFunction) == null ? void 0 : d.toJSON()),
            (this.raster = p);
        } else (this.raster = s), (this._cachedRasterFunctionJson = null);
        if (((this._cachedRendererJson = null), !r && !a)) return;
        const { bandIds: l } = this,
          { bandCount: o } = this.raster.rasterInfo,
          c = l != null && l.length ? l.some((u) => u >= o) : o >= 3;
        l &&
          (c || this.renderer.type !== "raster-stretch") &&
          this._set("bandIds", null),
          this._configDefaultRenderer("auto");
      }
      async updateRenderer() {
        var c;
        const { loaded: i, symbolizer: s } = this;
        if (!i || !s) return;
        const { rasterInfo: r } = this.raster,
          a =
            (c = We(r, {
              multidimensionalDefinition: this.multidimensionalDefinition,
              multidimensionalSubset: this.multidimensionalSubset,
            })) == null
              ? void 0
              : c.name,
          l = Ne({ ...this.renderer.toJSON(), variableName: a });
        if (JSON.stringify(this._cachedRendererJson) === JSON.stringify(l))
          return;
        const o = this._rasterJobHandler.instance;
        o &&
          ((s.rasterInfo = He(r, a)),
          (s.rendererJSON = l),
          s.bind(),
          await o.updateSymbolizer(s),
          (this._cachedRendererJson = l));
      }
      async applyRenderer(i, s) {
        const r = i && i.pixelBlock;
        if (!(k(r) && r.pixels && r.pixels.length > 0)) return null;
        let a;
        await this.updateRenderer();
        const l = this._rasterJobHandler.instance,
          o = this.bandIds ?? [];
        return (
          (a = l
            ? await l.symbolize({ ...i, simpleStretchParams: s, bandIds: o })
            : this.symbolizer.symbolize({
                ...i,
                simpleStretchParams: s,
                bandIds: o,
              })),
          a
        );
      }
      getTileUrl(i, s, r) {
        return this.raster.datasetFormat === "RasterTileServer"
          ? `${this.url}/tile/${i}/${s}/${r}`
          : "";
      }
      getCompatibleTileInfo(i, s, r = !1) {
        if (!this.loaded || O(s)) return null;
        if (r && i.equals(this.spatialReference)) return this.tileInfo;
        const a = dt(i);
        return pe.create({
          size: 256,
          spatialReference: i,
          origin: a
            ? { x: a.origin[0], y: a.origin[1] }
            : { x: s.xmin, y: s.ymax },
        });
      }
      getCompatibleFullExtent(i) {
        return this.loaded
          ? ((this._compatibleFullExtent &&
              this._compatibleFullExtent.spatialReference.equals(i)) ||
              (this._compatibleFullExtent = this.raster.computeExtent(i)),
            this._compatibleFullExtent)
          : null;
      }
      async fetchTile(i, s, r, a = {}) {
        if ((n(this), a.requestAsImageElement)) {
          const o = this.getTileUrl(i, s, r);
          return et(o, {
            responseType: "image",
            query: {
              ...this.refreshParameters,
              ...this.raster.ioConfig.customFetchParameters,
            },
            signal: a.signal,
          }).then((c) => c.data);
        }
        const { rasterInfo: l } = this;
        if (
          k(l.multidimensionalInfo) &&
          ((a = this.normalizeRasterFetchOptions(a)),
          O(a.multidimensionalDefinition))
        ) {
          const o = a.tileInfo || l.storageInfo.tileInfo;
          return {
            extent: this.raster.getTileExtentFromTileInfo(i, s, r, o),
            pixelBlock: null,
          };
        }
        return (
          await this._initJobHandler(),
          await this.updateRasterFunction(),
          this.renderer.type === "raster-shaded-relief" &&
            (a = { ...a, buffer: { cols: 1, rows: 1 } }),
          this.raster.fetchTile(i, s, r, a)
        );
      }
      async fetchPixels(i, s, r, a = {}) {
        return k(this.rasterInfo.multidimensionalInfo) &&
          ((a = this.normalizeRasterFetchOptions(a)),
          O(a.multidimensionalDefinition))
          ? { extent: i, pixelBlock: null }
          : (await this._initJobHandler(),
            await this.updateRasterFunction(),
            this.raster.fetchPixels(i, s, r, a));
      }
      async identify(i, s = {}) {
        var o;
        const { raster: r, rasterInfo: a } = this;
        if (
          k(a.multidimensionalInfo) &&
          (!a.hasMultidimensionalTranspose ||
            !(
              at(s.multidimensionalDefinition) ||
              s.transposedVariableName ||
              s.timeExtent
            )) &&
          ((s = this.normalizeRasterFetchOptions(s)),
          O(s.multidimensionalDefinition))
        )
          return { location: i, value: null };
        const l =
          (o = this.multidimensionalSubset) == null ? void 0 : o.areaOfInterest;
        if (l && !l.contains(i))
          throw new M(
            "imagery-tile-mixin:identify",
            "the request cannot be fulfilled when falling outside of the multidimensional subset"
          );
        return r.identify(i, s);
      }
      increaseRasterJobHandlerUsage() {
        this._rasterJobHandler.refCount++;
      }
      decreaseRasterJobHandlerUsage() {
        this._rasterJobHandler.refCount--,
          this._rasterJobHandler.refCount <= 0 && this._shutdownJobHandler();
      }
      hasStandardTime() {
        var a, l, o;
        const i =
          (a = this.rasterInfo) == null ? void 0 : a.multidimensionalInfo;
        if (
          O(i) ||
          ((l = this.rasterInfo) == null ? void 0 : l.dataType) !==
            "standard-time"
        )
          return !1;
        const s = this.multidimensionalDefinition,
          r = (o = s == null ? void 0 : s[0]) == null ? void 0 : o.variableName;
        return i.variables.some(
          (c) =>
            c.name === r &&
            (!(s != null && s[0].dimensionName) ||
              c.dimensions.some((h) => h.name === "StdTime"))
        );
      }
      getStandardTimeValue(i) {
        return new Date(24 * (i - 25569) * 3600 * 1e3).toString();
      }
      getMultidimensionalSubsetVariables(i) {
        var r;
        const s =
          i ??
          ((r = this.rasterInfo) == null ? void 0 : r.multidimensionalInfo);
        return $t(this.multidimensionalSubset, s);
      }
      _configDefaultSettings() {
        this._configDefaultInterpolation(),
          this.multidimensionalDefinition ||
            (this.multidimensionalDefinition = Ae(this.raster.rasterInfo, {
              multidimensionalSubset: this.multidimensionalSubset,
            })),
          this._configDefaultRenderer();
      }
      _initJobHandler() {
        if (this._rasterJobHandler.connectionPromise != null)
          return this._rasterJobHandler.connectionPromise;
        const i = new Ht();
        return (
          (this._rasterJobHandler.connectionPromise = i
            .initialize()
            .then(() => {
              n(this),
                (this._rasterJobHandler.instance = i),
                (this.raster.rasterJobHandler = i),
                this.renderer && this.updateRenderer(),
                this.raster.datasetFormat === "Function" &&
                  this.raster.syncJobHandler();
            })
            .catch(() => {})),
          this._rasterJobHandler.connectionPromise
        );
      }
      _shutdownJobHandler() {
        this._rasterJobHandler.instance &&
          this._rasterJobHandler.instance.destroy(),
          (this._rasterJobHandler.instance = null),
          (this._rasterJobHandler.connectionPromise = null),
          (this._rasterJobHandler.refCount = 0),
          (this._cachedRendererJson = null),
          this.raster && (this.raster.rasterJobHandler = null);
      }
      _configDefaultInterpolation() {
        var i;
        if (this.interpolation == null) {
          n(this);
          const { raster: s } = this,
            r = Jt(
              s.rasterInfo,
              s.tileType,
              (i = this.sourceJSON) == null ? void 0 : i.defaultResamplingMethod
            );
          this._set("interpolation", r);
        }
      }
      _configDefaultRenderer(i = "no") {
        var c, h, d, u, m;
        n(this);
        const { rasterInfo: s } = this.raster;
        !this.bandIds && s.bandCount > 1 && (this.bandIds = Nt(s));
        const r =
          (c = We(s, {
            multidimensionalDefinition: this.multidimensionalDefinition,
            multidimensionalSubset: this.multidimensionalSubset,
          })) == null
            ? void 0
            : c.name;
        if (!this.renderer || i === "override") {
          const p = Le(s, { bandIds: this.bandIds, variableName: r });
          this.raster.datasetFormat === "WCSServer" &&
            p.type === "raster-stretch" &&
            ((((h = s.statistics) == null ? void 0 : h[0].max) ?? 0) > 1e24 ||
              (((d = s.statistics) == null ? void 0 : d[0].min) ?? 0) <
                -1e24) &&
            ((p.dynamicRangeAdjustment = !0),
            (p.statistics = null),
            p.stretchType === "none" && (p.stretchType = "min-max")),
            (this.renderer = p);
        }
        const a = Ne({ ...this.renderer.toJSON(), variableName: r }),
          l = He(s, r);
        this.symbolizer
          ? ((this.symbolizer.rendererJSON = a),
            (this.symbolizer.rasterInfo = l))
          : (this.symbolizer = new Yt({ rendererJSON: a, rasterInfo: l }));
        const o = this.symbolizer.bind();
        if (o.success) {
          if (i === "auto") {
            const { colormap: p } = this.raster.rasterInfo,
              g = this.renderer;
            if (k(p))
              if (g.type !== "raster-colormap")
                this._configDefaultRenderer("override");
              else {
                const f = Le(this.raster.rasterInfo);
                JSON.stringify(f) !== JSON.stringify(g) &&
                  this._configDefaultRenderer("override");
              }
            else if (g.type === "raster-stretch") {
              const f = (u = this.bandIds) == null ? void 0 : u.length,
                y = (m = g.statistics) == null ? void 0 : m.length;
              !g.dynamicRangeAdjustment &&
                y &&
                f &&
                y !== f &&
                this._configDefaultRenderer("override");
            }
          }
        } else
          Ye.warn(
            "imagery-tile-mixin",
            o.error || "The given renderer is not supported by the layer."
          ),
            i === "auto" && this._configDefaultRenderer("override");
      }
    };
    function n(i) {
      if (!i.raster || !i.rasterInfo) throw new M("imagery-tile", "no raster");
    }
    return (
      I([w()], t.prototype, "_cachedRendererJson", void 0),
      I([w()], t.prototype, "_cachedRasterFunctionJson", void 0),
      I([w()], t.prototype, "_compatibleFullExtent", void 0),
      I([w()], t.prototype, "_isConstructedFromFunctionRaster", void 0),
      I([w()], t.prototype, "_rasterJobHandler", void 0),
      I([w()], t.prototype, "bandIds", void 0),
      I(
        [
          w({
            json: {
              origins: { service: { read: { source: "copyrightText" } } },
            },
          }),
        ],
        t.prototype,
        "copyright",
        void 0
      ),
      I([w({ json: { read: !1 } })], t.prototype, "fullExtent", null),
      I([w()], t.prototype, "interpolation", void 0),
      I([w()], t.prototype, "ioConfig", void 0),
      I(
        [w({ type: [ot], json: { write: !0 } })],
        t.prototype,
        "multidimensionalDefinition",
        null
      ),
      I(
        [w({ type: Et, json: { write: !0 } })],
        t.prototype,
        "multidimensionalSubset",
        void 0
      ),
      I([w()], t.prototype, "raster", void 0),
      I([w({ type: Me })], t.prototype, "rasterFunction", void 0),
      I([w()], t.prototype, "rasterInfo", void 0),
      I([w()], t.prototype, "sourceJSON", void 0),
      I(
        [w({ readOnly: !0, type: q, json: { read: !1 } })],
        t.prototype,
        "spatialReference",
        void 0
      ),
      I([w({ json: { read: !1 } })], t.prototype, "tileInfo", null),
      I([w(it)], t.prototype, "url", null),
      I([w({ types: nt })], t.prototype, "renderer", null),
      I([w()], t.prototype, "symbolizer", void 0),
      (t = I([Q("esri.layers.ImageryTileMixin")], t)),
      t
    );
  };
function Pi(e) {
  const t = e.fields,
    n = e.records,
    i = t.some((c) => c.name.toLowerCase() === "oid") ? "OBJECTID" : "OID",
    s = [{ name: i, type: "esriFieldTypeOID", alias: "OID" }].concat(
      t.map((c) => ({
        name: c.name,
        type: "esriFieldType" + c.typeName,
        alias: c.name,
      }))
    ),
    r = s.map((c) => c.name),
    a = [];
  let l = 0,
    o = 0;
  return (
    n.forEach((c) => {
      const h = {};
      for (h[i] = l++, o = 1; o < r.length; o++) h[r[o]] = c[o - 1];
      a.push({ attributes: h });
    }),
    { displayFieldName: "", fields: s, features: a }
  );
}
class lt {
  static get supportedVersions() {
    return [5];
  }
  static parse(t) {
    const n = new DataView(t),
      i = 3 & n.getUint8(0);
    if (i !== 3) return { header: { version: i }, recordSet: null };
    const s = n.getUint32(4, !0),
      r = n.getUint16(8, !0),
      a = n.getUint16(10, !0),
      l = {
        version: i,
        recordCount: s,
        headerByteCount: r,
        recordByteCount: a,
      };
    let o = 32;
    const c = [],
      h = [];
    let d;
    if (i === 3) {
      for (; n.getUint8(o) !== 13; )
        (d = String.fromCharCode(n.getUint8(o + 11)).trim()),
          c.push({
            name: qe(new Uint8Array(t, o, 11)),
            type: d,
            typeName: [
              "String",
              "Date",
              "Double",
              "Boolean",
              "String",
              "Integer",
            ][["C", "D", "F", "L", "M", "N"].indexOf(d)],
            length: n.getUint8(o + 16),
          }),
          (o += 32);
      if (((o += 1), c.length > 0))
        for (; h.length < s && t.byteLength - o > a; ) {
          const u = [];
          n.getUint8(o) === 32
            ? ((o += 1),
              c.forEach((m) => {
                if (m.type === "C")
                  u.push(qe(new Uint8Array(t, o, m.length)).trim());
                else if (m.type === "N")
                  u.push(
                    parseInt(
                      String.fromCharCode
                        .apply(null, new Uint8Array(t, o, m.length))
                        .trim(),
                      10
                    )
                  );
                else if (m.type === "F")
                  u.push(
                    parseFloat(
                      String.fromCharCode
                        .apply(null, new Uint8Array(t, o, m.length))
                        .trim()
                    )
                  );
                else if (m.type === "D") {
                  const p = String.fromCharCode
                    .apply(null, new Uint8Array(t, o, m.length))
                    .trim();
                  u.push(
                    new Date(
                      parseInt(p.substring(0, 4), 10),
                      parseInt(p.substring(4, 6), 10) - 1,
                      parseInt(p.substring(6, 8), 10)
                    )
                  );
                }
                o += m.length;
              }),
              h.push(u))
            : (o += a);
        }
    }
    return {
      header: l,
      fields: c,
      records: h,
      recordSet: Pi({ fields: c, records: h }),
    };
  }
}
const ie = new Map();
ie.set("int16", "esriFieldTypeSmallInteger"),
  ie.set("int32", "esriFieldTypeInteger"),
  ie.set("int64", "esriFieldTypeInteger"),
  ie.set("float32", "esriFieldTypeSingle"),
  ie.set("float64", "esriFieldTypeDouble"),
  ie.set("text", "esriFieldTypeString");
let he = class extends ne {
  constructor() {
    super(...arguments),
      (this.storageInfo = null),
      (this.datasetFormat = "CRF");
  }
  async open(e) {
    await this.init();
    const { data: t } = await this.request(this.url + "/conf.json", {
      signal: e == null ? void 0 : e.signal,
    });
    if (!this._validateHeader(t))
      throw new M("cloudraster:open", "Invalid or unsupported conf.json.");
    this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
    const { storageInfo: n, rasterInfo: i } = this._parseHeader(t);
    if (i.dataType === "thematic") {
      const s = await this._fetchAuxiliaryInformation();
      i.attributeTable = s;
    }
    this._set("storageInfo", n),
      this._set("rasterInfo", i),
      (this.ioConfig.retryCount = this.ioConfig.retryCount || 0);
  }
  async fetchRawTile(e, t, n, i = {}) {
    const { transposeInfo: s } = this.rasterInfo.storageInfo,
      { transposedVariableName: r } = i,
      a = !(!s || !r),
      l = a ? 0 : this.rasterInfo.storageInfo.maximumPyramidLevel - e;
    if (l < 0) return null;
    const o = this._buildCacheFilePath(
        l,
        t,
        n,
        i.multidimensionalDefinition,
        r
      ),
      c = this._getIndexRecordFromBundle(t, n, a),
      h = await this.request(o, {
        range: { from: 0, to: this.storageInfo.headerSize - 1 },
        responseType: "array-buffer",
        signal: i.signal,
      });
    if (!h) return null;
    const d = new Uint8Array(h.data),
      u = this._getTileEndAndContentType(d, c);
    if (u.recordSize === 0) return null;
    const m = await this.request(o, {
      range: { from: u.position, to: u.position + u.recordSize },
      responseType: "array-buffer",
      signal: i.signal,
    });
    if (!m) return null;
    const [p, g] = this._getTileSize(a);
    return this.decodePixelBlock(m.data, {
      width: p,
      height: g,
      planes: null,
      pixelType: null,
      returnInterleaved: a,
    });
  }
  _validateHeader(e) {
    return (
      e &&
      e.type === "RasterInfo" &&
      ![
        "origin",
        "extent",
        "geodataXform",
        "LODInfos",
        "blockWidth",
        "blockHeight",
        "bandCount",
        "pixelType",
        "pixelSizeX",
        "pixelSizeY",
        "format",
        "packetSize",
      ].some((t) => !e[t])
    );
  }
  _parseHeader(e) {
    var G;
    const t = [
        "u1",
        "u2",
        "u4",
        "u8",
        "s8",
        "u16",
        "s16",
        "u32",
        "s32",
        "f32",
        "f64",
      ][e.pixelType],
      {
        bandCount: n,
        histograms: i,
        colormap: s,
        blockWidth: r,
        blockHeight: a,
        firstPyramidLevel: l,
        maximumPyramidLevel: o,
      } = e,
      c =
        e.statistics &&
        e.statistics.map((B) => ({
          min: B.min,
          max: B.max,
          avg: B.mean,
          stddev: B.standardDeviation,
          median: B.median,
          mode: B.mode,
        })),
      h = e.extent.spatialReference,
      d = (G = e.geodataXform) == null ? void 0 : G.spatialReference,
      u = new q((h != null && h.wkid) || (h != null && h.wkt) ? h : d);
    let m = new j({
      xmin: e.extent.xmin,
      ymin: e.extent.ymin,
      xmax: e.extent.xmax,
      ymax: e.extent.ymax,
      spatialReference: u,
    });
    const p = new W({ x: e.pixelSizeX, y: e.pixelSizeY, spatialReference: u }),
      g = Math.round((m.xmax - m.xmin) / p.x),
      f = Math.round((m.ymax - m.ymin) / p.y),
      y = this._parseTransform(e.geodataXform),
      x = y ? m : null;
    y &&
      ((m = y.forwardTransform(m)),
      (p.x = (m.xmax - m.xmin) / g),
      (p.y = (m.ymax - m.ymin) / f));
    const S = e.properties ?? {},
      T = e.format.toLowerCase().replace("cache/", ""),
      C = new W(e.origin.x, e.origin.y, u);
    let _, R, F, b;
    if (s && s.colors)
      for (_ = [], R = 0; R < s.colors.length; R++)
        (F = s.colors[R]),
          (b = s.values ? s.values[R] : R),
          _.push([b, 255 & F, (F << 16) >>> 24, (F << 8) >>> 24, F >>> 24]);
    const v = e.LODInfos,
      P = [];
    for (R = 0; R < v.levels.length; R++)
      P.push(
        new tt({
          level: v.levels[R],
          resolution: v.resolutions[R],
          scale: (96 / 0.0254) * v.resolutions[R],
        })
      );
    const E = new pe({
        dpi: 96,
        lods: P,
        format: T,
        origin: C,
        size: [r, a],
        spatialReference: u,
      }),
      N = {
        recordSize: 8,
        packetSize: e.packetSize,
        headerSize: e.packetSize * e.packetSize * 8 + 64,
      },
      D = [
        {
          maxCol: Math.ceil(g / r) - 1,
          maxRow: Math.ceil(f / a) - 1,
          minCol: 0,
          minRow: 0,
        },
      ];
    let J = 2;
    if (o > 0)
      for (R = 0; R < o; R++)
        D.push({
          maxCol: Math.ceil(g / J / r) - 1,
          maxRow: Math.ceil(f / J / a) - 1,
          minCol: 0,
          minRow: 0,
        }),
          (J *= 2);
    const H = e.mdInfo;
    let L = null;
    if (H && S._yxs) {
      const B = S._yxs;
      L = { packetSize: B.PacketSize, tileSize: [B.TileXSize, B.TileYSize] };
    }
    return {
      storageInfo: N,
      rasterInfo: new ge({
        width: g,
        height: f,
        pixelType: t,
        bandCount: n,
        extent: m,
        nativeExtent: x,
        transform: y,
        spatialReference: u,
        pixelSize: p,
        keyProperties: S,
        statistics: c,
        histograms: i,
        multidimensionalInfo: H,
        colormap: _,
        storageInfo: new ye({
          blockWidth: r,
          blockHeight: a,
          pyramidBlockWidth: r,
          pyramidBlockHeight: a,
          origin: C,
          tileInfo: E,
          transposeInfo: L,
          firstPyramidLevel: l,
          maximumPyramidLevel: o,
          blockBoundary: D,
        }),
      }),
    };
  }
  _parseTransform(e) {
    var n, i;
    if (!Ri(e))
      throw new M(
        "cloudraster:open",
        "the data contains unsupported geodata transform types"
      );
    const t = vi(e);
    if (t.type === "identity") return null;
    if (
      t.type !== "polynomial" ||
      !((n = t.forwardCoefficients) != null && n.length) ||
      !((i = t.inverseCoefficients) != null && i.length)
    )
      throw new M(
        "cloudraster:open",
        "the data contains unsupported geodata transforms - both forward and inverse coefficients are required currently"
      );
    return t;
  }
  async _fetchAuxiliaryInformation(e) {
    const t = this.request(this.url + "/conf.vat.json", { signal: e })
        .then((r) => r.data)
        .catch(() => null),
      n = this.request(this.url + "/conf.vat.dbf", {
        responseType: "array-buffer",
        signal: e,
      })
        .then((r) => r.data)
        .catch(() => null),
      i = await Promise.all([t, n]);
    let s;
    if (i[0]) {
      let r = i[0].fields;
      const a = i[0].values;
      if (r && a) {
        r = r.map((o) => ({
          type: o.name === "OID" ? "esriFieldTypeOID" : ie.get(o.type),
          name: o.name,
          alias: o.alias || o.name,
        }));
        const l = a.map((o) => ({ attributes: o }));
        r && a && (s = { fields: r, features: l });
      }
    }
    return !s && i[1] && (s = lt.parse(i[1]).recordSet), st.fromJSON(s);
  }
  _buildCacheFilePath(e, t, n, i, s) {
    const r = this._getPackageSize(!!s),
      a = Math.floor(t / r) * r,
      l = Math.floor(n / r) * r,
      o = "R" + this._toHexString4(a) + "C" + this._toHexString4(l);
    let c = "L";
    c += e >= 10 ? e.toString() : "0" + e.toString();
    const { multidimensionalInfo: h } = this.rasterInfo,
      d = i == null ? void 0 : i[0];
    if (O(h) || !d) return `${this.url}/_alllayers/${c}/${o}.bundle`;
    let u = "_yxs";
    if (!s) {
      u = h.variables
        .find((g) => g.name === d.variableName)
        .dimensions[0].values.indexOf(d.values[0])
        .toString(16);
      const p = 4 - u.length;
      for (let g = 0; g < p; g++) u = "0" + u;
      u = "S" + u;
    }
    const m = this._getVariableFolderName(s || d.variableName);
    return `${this.url}/_alllayers/${m}/${u}/${c}/${o}.bundle`;
  }
  _getPackageSize(e = !1) {
    const { transposeInfo: t } = this.rasterInfo.storageInfo;
    return e && k(t) ? t.packetSize ?? 0 : this.storageInfo.packetSize;
  }
  _getTileSize(e = !1) {
    const { storageInfo: t } = this.rasterInfo,
      { transposeInfo: n } = t;
    return e && k(n) ? n.tileSize : t.tileInfo.size;
  }
  _getVariableFolderName(e) {
    return (e = e.trim()) === ""
      ? "_v"
      : e.replace(/[\{|\}\-]/g, "_").replace("\\*", "_v");
  }
  _getIndexRecordFromBundle(e, t, n = !1) {
    const i = this._getPackageSize(n),
      s = i * (e % i) + (t % i);
    if (s < 0) throw new Error("Invalid level / row / col");
    return 20 + s * this.storageInfo.recordSize + 44;
  }
  _getTileEndAndContentType(e, t) {
    const n = e.subarray(t, t + 8);
    let i,
      s = 0;
    for (i = 0; i < 5; i++) s |= (255 & n[i]) << (8 * i);
    const r = 0xffffffffff & s;
    for (s = 0, i = 5; i < 8; i++) s |= (255 & n[i]) << (8 * (i - 5));
    return { position: r, recordSize: 0xffffffffff & s };
  }
  _toHexString4(e) {
    let t = e.toString(16);
    if (t.length !== 4) {
      let n = 4 - t.length;
      for (; n-- > 0; ) t = "0" + t;
    }
    return t;
  }
};
I([w({ readOnly: !0 })], he.prototype, "storageInfo", void 0),
  I(
    [w({ type: String, json: { write: !0 } })],
    he.prototype,
    "datasetFormat",
    void 0
  ),
  (he = I([Q("esri.layers.support.rasterDatasets.CloudRaster")], he));
const Mi = he;
let fe = class extends ne {
  constructor() {
    super(...arguments), (this.datasetFormat = "MEMORY"), (this.data = null);
  }
  async open(e) {
    await this.init();
    const t = this.data,
      {
        pixelBlock: n,
        statistics: i,
        histograms: s,
        name: r,
        keyProperties: a,
        nativeExtent: l,
        transform: o,
      } = this.data,
      { width: c, height: h, pixelType: d } = n,
      u =
        t.extent ??
        new j({
          xmin: -0.5,
          ymin: 0.5,
          xmax: c - 0.5,
          ymax: h - 0.5,
          spatialReference: new q({ wkid: 3857 }),
        }),
      m = t.isPseudoSpatialReference ?? !t.extent,
      p = { x: u.width / c, y: u.height / h },
      g = new ge({
        width: c,
        height: h,
        pixelType: d,
        extent: u,
        nativeExtent: l,
        transform: o,
        pixelSize: p,
        spatialReference: u.spatialReference,
        bandCount: n.pixels.length,
        keyProperties: a || {},
        statistics: i,
        isPseudoSpatialReference: m,
        histograms: s,
      });
    this.createRemoteDatasetStorageInfo(g, 512, 512),
      this._set("rasterInfo", g),
      this.updateTileInfo(),
      await this._buildInMemoryRaster(n, { width: 512, height: 512 }, e),
      (this.datasetName = r),
      (this.url = "/InMemory/" + r);
  }
  fetchRawTile(e, t, n, i = {}) {
    const s = this._pixelBlockTiles.get(`${e}/${t}/${n}`);
    return Promise.resolve(s);
  }
  async _buildInMemoryRaster(e, t, n) {
    var c, h;
    const i = this.rasterInfo.storageInfo.maximumPyramidLevel,
      s = this.rasterJobHandler
        ? this.rasterJobHandler.split(
            { pixelBlock: e, tileSize: t, maximumPyramidLevel: i },
            n
          )
        : Promise.resolve(yi(e, t, i)),
      r = k(this.rasterInfo.statistics),
      a = k(this.rasterInfo.histograms),
      l = r
        ? Promise.resolve({ statistics: null, histograms: null })
        : this.rasterJobHandler
        ? this.rasterJobHandler.estimateStatisticsHistograms(
            { pixelBlock: e },
            n
          )
        : Promise.resolve(Kt(e)),
      o = await rt([s, l]);
    if (!o[0].value && o[1].value)
      throw new M("inmemory-raster:open", "failed to build in memory raster");
    (this._pixelBlockTiles = o[0].value),
      r ||
        (this.rasterInfo.statistics =
          (c = o[1].value) == null ? void 0 : c.statistics),
      a ||
        (this.rasterInfo.histograms =
          (h = o[1].value) == null ? void 0 : h.histograms);
  }
};
I(
  [w({ type: String, json: { write: !0 } })],
  fe.prototype,
  "datasetFormat",
  void 0
),
  I([w()], fe.prototype, "data", void 0),
  (fe = I([Q("esri.layers.support.rasterDatasets.InMemoryRaster")], fe));
const Oi = fe;
function oe(e, t) {
  if (!e || !t) return [];
  let n = t;
  t.includes("/")
    ? ((n = t.slice(0, t.indexOf("/"))), (t = t.slice(t.indexOf("/") + 1)))
    : (t = "");
  const i = [];
  if (t) {
    const r = oe(e, n);
    for (let a = 0; a < r.length; a++) oe(r[a], t).forEach((l) => i.push(l));
    return i;
  }
  const s = e.getElementsByTagNameNS("*", n);
  if (!s || s.length === 0) return [];
  for (let r = 0; r < s.length; r++) i.push(s[r] || s.item[r]);
  return i;
}
function V(e, t) {
  if (!e || !t) return null;
  let n = t;
  t.includes("/")
    ? ((n = t.slice(0, t.indexOf("/"))), (t = t.slice(t.indexOf("/") + 1)))
    : (t = "");
  const i = oe(e, n);
  return i.length > 0 ? (t ? V(i[0], t) : i[0]) : null;
}
function K(e, t = null) {
  const n = t ? V(e, t) : e;
  let i;
  return n ? ((i = n.textContent || n.nodeValue), i ? i.trim() : null) : null;
}
function be(e, t) {
  return (function (n, i) {
    const s = oe(n, i),
      r = [];
    let a;
    for (let l = 0; l < s.length; l++)
      (a = s[l].textContent || s[l].nodeValue),
        a && ((a = a.trim()), a !== "" && r.push(a));
    return r;
  })(e, t).map((n) => Number(n));
}
function re(e, t) {
  const n = K(e, t);
  return Number(n);
}
function ke(e, t) {
  var s;
  const n =
      (s = e == null ? void 0 : e.nodeName) == null ? void 0 : s.toLowerCase(),
    i = t.toLowerCase();
  return n.slice(n.lastIndexOf(":") + 1) === i;
}
function Ke(e, t) {
  if (!e || !t) return null;
  const n = [];
  for (let i = 0; i < e.length; i++) n.push(e[i]), n.push(t[i]);
  return n;
}
function Di(e) {
  const t = V(e, "GeodataXform"),
    n = ve(re(t, "SpatialReference/WKID") || K(t, "SpatialReference/WKT"));
  if (t.getAttribute("xsi:type") !== "typens:PolynomialXform")
    return { spatialReference: n, transform: null };
  const i = re(t, "PolynomialOrder") ?? 1,
    s = be(t, "CoeffX/Double"),
    r = be(t, "CoeffY/Double"),
    a = be(t, "InverseCoeffX/Double"),
    l = be(t, "InverseCoeffY/Double"),
    o = Ke(s, r),
    c = Ke(a, l);
  return {
    spatialReference: n,
    transform:
      o && c && o.length && c.length
        ? new Ee({
            spatialReference: n,
            polynomialOrder: i,
            forwardCoefficients: o,
            inverseCoefficients: c,
          })
        : null,
  };
}
function Bi(e) {
  var u;
  const t = re(e, "NoDataValue"),
    n = V(e, "Histograms/HistItem"),
    i = re(n, "HistMin"),
    s = re(n, "HistMax"),
    r = re(n, "BucketCount"),
    a =
      (u = K(n, "HistCounts")) == null
        ? void 0
        : u.split("|").map((m) => Number(m));
  let l, o, c, h;
  oe(e, "Metadata/MDI").forEach((m) => {
    const p = Number(m.textContent ?? m.nodeValue);
    switch (m.getAttribute("key").toUpperCase()) {
      case "STATISTICS_MINIMUM":
        l = p;
        break;
      case "STATISTICS_MAXIMUM":
        o = p;
        break;
      case "STATISTICS_MEAN":
        c = p;
        break;
      case "STATISTICS_STDDEV":
        h = p;
    }
  });
  const d = re(e, "Metadata/SourceBandIndex");
  return {
    noDataValue: t,
    histogram:
      a != null && a.length && i != null && s != null
        ? { min: i, max: s, size: r || a.length, counts: a }
        : null,
    sourceBandIndex: d,
    statistics:
      l != null && o != null ? { min: l, max: o, avg: c, stddev: h } : null,
  };
}
function ve(e) {
  if (!e) return null;
  let t = Number(e);
  if (!isNaN(t) && t !== 0) return new q({ wkid: t });
  if ((e = String(e)).startsWith("COMPD_CS")) {
    if (
      !e.includes("VERTCS") ||
      (!e.includes("GEOGCS") && !e.startsWith("PROJCS"))
    )
      return null;
    const n = e.indexOf("VERTCS"),
      i = e.indexOf("PROJCS"),
      s = i > -1 ? i : e.indexOf("GEOGCS");
    if (s === -1) return null;
    const r = e.slice(s, e.lastIndexOf("]", n) + 1).trim(),
      a = e.slice(n, e.lastIndexOf("]")).trim();
    t = Ce(r);
    const l = new q(t ? { wkid: t } : { wkt: r }),
      o = Ce(a);
    return o && (l.vcsWkid = o), l;
  }
  return e.startsWith("GEOGCS") || e.startsWith("PROJCS")
    ? ((t = Ce(e)), new q(t !== 0 ? { wkid: t } : { wkt: e }))
    : null;
}
function Ce(e) {
  var s;
  const t = e
      .replace(/\]/g, "[")
      .replace(/\"/g, "")
      .split("[")
      .map((r) => r.trim())
      .filter((r) => r !== ""),
    n = t[t.length - 1].split(","),
    i = (s = n[0]) == null ? void 0 : s.toLowerCase();
  if ((i === "epsg" || i === "esri") && e.endsWith('"]]')) {
    const r = Number(n[1]);
    if (!isNaN(r) && r !== 0) return r;
  }
  return 0;
}
function Je(e) {
  var i;
  if (
    ((i = e == null ? void 0 : e.documentElement.tagName) == null
      ? void 0
      : i.toLowerCase()) !== "pamdataset"
  )
    return {};
  const t = {
    spatialReference: null,
    transform: null,
    metadata: {},
    rasterBands: [],
    statistics: null,
    histograms: null,
  };
  e.documentElement.childNodes.forEach((s) => {
    if (s.nodeType === 1) {
      if (ke(s, "SRS")) {
        if (!t.spatialReference) {
          const r = K(s);
          t.spatialReference = ve(r);
        }
      } else if (ke(s, "Metadata"))
        if (s.getAttribute("domain") === "xml:ESRI") {
          const { spatialReference: r, transform: a } = Di(s);
          (t.transform = a), t.spatialReference || (t.spatialReference = r);
        } else
          oe(s, "MDI").forEach(
            (r) => (t.metadata[r.getAttribute("key")] = K(r))
          );
      else if (ke(s, "PAMRasterBand")) {
        const r = Bi(s);
        r.sourceBandIndex != null && t.rasterBands[r.sourceBandIndex] == null
          ? (t.rasterBands[r.sourceBandIndex] = r)
          : t.rasterBands.push(r);
      }
    }
  });
  const n = t.rasterBands;
  if (n.length) {
    const s = !!n[0].statistics;
    t.statistics = s ? n.map((a) => a.statistics).filter(k) : null;
    const r = !!n[0].histogram;
    t.histograms = r ? n.map((a) => a.histogram).filter(k) : null;
  }
  return t;
}
let Re = class extends ne {
  async open(e) {
    await this.init();
    const t = await this._fetchData(e);
    let {
      spatialReference: n,
      statistics: i,
      histograms: s,
      transform: r,
    } = await this._fetchAuxiliaryData(e);
    const a = !n;
    a && (n = new q({ wkid: 3857 })),
      s != null && s.length && i == null && (i = ze(s));
    const { width: l, height: o } = t;
    let c = new j({
      xmin: -0.5,
      ymin: 0.5 - o,
      xmax: l - 0.5,
      ymax: 0.5,
      spatialReference: n,
    });
    const h = r ? r.forwardTransform(c) : c;
    let d = !0;
    if (r) {
      const m = r.forwardCoefficients;
      (d = m && m[1] === 0 && m[2] === 0), d && ((r = null), (c = h));
    }
    const u = new Oi({
      data: {
        extent: h,
        nativeExtent: c,
        transform: r,
        pixelBlock: t,
        statistics: i,
        histograms: s,
        keyProperties: { DateType: "Processed" },
        isPseudoSpatialReference: a,
      },
    });
    await u.open(),
      (u.data = null),
      this._set("rasterInfo", u.rasterInfo),
      (this._inMemoryRaster = u);
  }
  fetchRawTile(e, t, n, i = {}) {
    return this._inMemoryRaster.fetchRawTile(e, t, n, i);
  }
  async _fetchData(e) {
    const { data: t } = await this.request(this.url, {
        responseType: "array-buffer",
        signal: e == null ? void 0 : e.signal,
      }),
      n = Qt(t).toUpperCase();
    if (n !== "JPG" && n !== "PNG" && n !== "GIF" && n !== "BMP")
      throw new M(
        "image-aux-raster:open",
        "the data is not a supported format"
      );
    this._set("datasetFormat", n);
    const i = n.toLowerCase(),
      s = i === "gif" || i === "bmp" || !mt("ios"),
      r = await this.decodePixelBlock(t, {
        format: i,
        useCanvas: s,
        hasNoZlibMask: !0,
      });
    if (r == null)
      throw new M("image-aux-raster:open", "the data cannot be decoded");
    return r;
  }
  async _fetchAuxiliaryData(e) {
    var c;
    const t = $(e == null ? void 0 : e.signal),
      n = this.ioConfig.skipExtensions ?? [],
      i = n.includes("aux.xml")
        ? null
        : this.request(this.url + ".aux.xml", {
            responseType: "xml",
            signal: t,
          }),
      s = this.datasetFormat,
      r =
        s === "JPG" ? "jgw" : s === "PNG" ? "pgw" : s === "BMP" ? "bpw" : null,
      a =
        r && n.includes(r)
          ? null
          : this.request(
              this.url.slice(0, this.url.lastIndexOf(".")) + "." + r,
              {
                responseType: "text",
                signal: t,
              }
            ),
      l = await rt([i, a]);
    if (t != null && t.aborted) throw pt();
    const o = Je((c = l[0].value) == null ? void 0 : c.data);
    if (!o.transform) {
      const h = l[1].value
        ? l[1].value.data
            .split(
              `
`
            )
            .slice(0, 6)
            .map((d) => Number(d))
        : null;
      o.transform =
        (h == null ? void 0 : h.length) === 6
          ? new Ee({
              forwardCoefficients: [h[4], h[5], h[0], -h[1], h[2], -h[3]],
            })
          : null;
    }
    return o;
  }
};
I(
  [w({ type: String, json: { write: !0 } })],
  Re.prototype,
  "datasetFormat",
  void 0
),
  (Re = I([Q("esri.layers.support.rasterDatasets.ImageAuxRaster")], Re));
const Se = Re;
let de = class extends ne {
  constructor() {
    super(...arguments),
      (this._levelOffset = 0),
      (this._tilemapCache = null),
      (this._slices = null),
      (this.datasetFormat = "RasterTileServer"),
      (this.tileType = null);
  }
  async open(e) {
    var _, R;
    await this.init();
    const t = e && e.signal,
      n = this.sourceJSON
        ? { data: this.sourceJSON }
        : await this.request(this.url, { query: { f: "json" }, signal: t });
    n.ssl && (this.url = this.url.replace(/^http:/i, "https:"));
    const i = n.data;
    if (((this.sourceJSON = i), !i))
      throw new M(
        "imageserverraster:open",
        "cannot initialize tiled image service, missing service info"
      );
    if (!i.tileInfo)
      throw new M(
        "imageserverraster:open",
        "use ImageryLayer to open non-tiled image services"
      );
    this._fixScaleInServiceInfo(),
      (this.tileType = i.cacheType),
      this.tileType == null &&
        (["jpg", "jpeg", "png", "png8", "png24", "png32", "mixed"].includes(
          i.tileInfo.format.toLowerCase()
        )
          ? (this.tileType = "Map")
          : i.tileInfo.format.toLowerCase() === "lerc"
          ? (this.tileType = "Elevation")
          : (this.tileType = "Raster")),
      (this.datasetName =
        ((_ = i.name) == null ? void 0 : _.slice(i.name.indexOf("/") + 1)) ??
        "");
    const s = await this._fetchRasterInfo({ signal: t });
    if (O(s))
      throw new M(
        "image-server-raster:open",
        "cannot initialize image service"
      );
    const r =
      this.tileType === "Map" ? Fi(i.tileInfo, i) : pe.fromJSON(i.tileInfo);
    yt(r);
    const [a, l] = this._computeMinMaxLOD(s, r),
      { extent: o, pixelSize: c } = s,
      h = (0.5 / s.width) * c.x,
      d = Math.max(c.x, c.y),
      { lods: u } = r;
    ((this.tileType !== "Map" && i.maxScale !== 0) ||
      Math.abs(c.x - c.y) > h ||
      !u.some((F) => Math.abs(F.resolution - d) < h)) &&
      ((c.x = c.y = a.resolution),
      (s.width = Math.ceil((o.xmax - o.xmin) / c.x - 0.1)),
      (s.height = Math.ceil((o.ymax - o.ymin) / c.y - 0.1)));
    const m = a.level - l.level,
      [p, g] = r.size,
      f = [],
      y = [];
    u.forEach((F, b) => {
      F.level >= l.level &&
        F.level <= a.level &&
        f.push({ x: F.resolution, y: F.resolution }),
        b < u.length - 1 &&
          y.push(Math.round((10 * F.resolution) / u[b + 1].resolution) / 10);
    }),
      f.sort((F, b) => F.x - b.x);
    const x = this.computeBlockBoundary(o, p, g, r.origin, f, m),
      S = f.length > 1 ? f.slice(1) : null;
    let T;
    i.transposeInfo &&
      (T = {
        tileSize: [i.transposeInfo.rows, i.transposeInfo.cols],
        packetSize:
          ((R = s.keyProperties) == null ? void 0 : R._yxs.PacketSize) ?? 0,
      });
    const C =
      y.length <= 1 ||
      (y.length >= 3 && y.slice(0, y.length - 1).every((F) => F === y[0]))
        ? y[0] ?? 2
        : Math.round(10 / (l.resolution / a.resolution) ** (-1 / m)) / 10;
    if (
      ((s.storageInfo = new ye({
        blockWidth: r.size[0],
        blockHeight: r.size[1],
        pyramidBlockWidth: r.size[0],
        pyramidBlockHeight: r.size[1],
        pyramidResolutions: S,
        pyramidScalingFactor: C,
        compression: r.format,
        origin: r.origin,
        firstPyramidLevel: 1,
        maximumPyramidLevel: m,
        tileInfo: r,
        transposeInfo: T,
        blockBoundary: x,
      })),
      this._fixGCSShift(s),
      this._set("rasterInfo", s),
      i.capabilities.toLowerCase().includes("tilemap"))
    ) {
      const F = {
        tileInfo: s.storageInfo.tileInfo,
        parsedUrl: gt(this.url),
        url: this.url,
        tileServers: [],
        type: "tile",
      };
      this._tilemapCache = new ki({ layer: F });
    }
  }
  async fetchRawTile(e, t, n, i = {}) {
    const { storageInfo: s, extent: r } = this.rasterInfo,
      { transposeInfo: a } = s,
      l = k(a) && !!i.transposedVariableName;
    if (this._slices && !l && i.sliceId == null) return null;
    const o = l ? 0 : s.maximumPyramidLevel - e + this._levelOffset,
      c = `${this.url}/tile/${o}/${t}/${n}`,
      h = this._slices
        ? l
          ? { variable: i.transposedVariableName }
          : { sliceId: i.sliceId || 0 }
        : null,
      { data: d } = await this.request(c, {
        query: h,
        responseType: "array-buffer",
        signal: i.signal,
      });
    if (!d) return null;
    const u = l ? a.tileSize : s.tileInfo.size,
      m = await this.decodePixelBlock(d, {
        width: u[0],
        height: u[1],
        planes: null,
        pixelType: null,
        isPoint: this.tileType === "Elevation",
        returnInterleaved: l,
        noDataValue: $(this.rasterInfo.noDataValue),
      });
    if (m == null) return null;
    const p = s.blockBoundary[e];
    if (
      s.compression !== "jpg" ||
      (n > p.minCol && n < p.maxCol && t > p.minRow && t < p.maxRow)
    )
      return m;
    const { origin: g, blockWidth: f, blockHeight: y } = s,
      { x, y: S } = this.getPyramidPixelSize(e),
      T = Math.round((r.xmin - g.x) / x) % f,
      C = Math.round((r.xmax - g.x) / x) % f || f,
      _ = Math.round((g.y - r.ymax) / S) % y,
      R = Math.round((g.y - r.ymin) / S) % y || y,
      F = n === p.minCol ? T : 0,
      b = t === p.minRow ? _ : 0,
      v = n === p.maxCol ? C : f,
      P = t === p.maxRow ? R : y;
    return gi(m, { x: F, y: b }, { width: v - F, height: P - b }), m;
  }
  getSliceIndex(e) {
    if (!this._slices || O(e) || e.length === 0) return null;
    const t = e;
    for (let n = 0; n < this._slices.length; n++) {
      const i = this._slices[n].multidimensionalDefinition;
      if (
        i.length === t.length &&
        !i.some((s) => {
          const r = t.find(
            (a) =>
              s.variableName === a.variableName &&
              a.dimensionName === s.dimensionName
          );
          return (
            !r ||
            (Array.isArray(s.values[0])
              ? `${s.values[0][0]}-${s.values[0][1]}`
              : s.values[0]) !==
              (Array.isArray(r.values[0])
                ? `${r.values[0][0]}-${r.values[0][1]}`
                : r.values[0])
          );
        })
      )
        return n;
    }
    return null;
  }
  async fetchVariableStatisticsHistograms(e, t) {
    const n = this.request(this.url + "/statistics", {
        query: { variable: e, f: "json" },
        signal: t,
      }).then((r) => {
        var a;
        return (a = r.data) == null ? void 0 : a.statistics;
      }),
      i = this.request(this.url + "/histograms", {
        query: { variable: e, f: "json" },
        signal: t,
      }).then((r) => {
        var a;
        return (a = r.data) == null ? void 0 : a.histograms;
      }),
      s = await Promise.all([n, i]);
    return (
      s[0] &&
        s[0].forEach((r) => {
          (r.avg = r.mean), (r.stddev = r.standardDeviation);
        }),
      { statistics: s[0] || null, histograms: s[1] || null }
    );
  }
  async computeBestPyramidLevelForLocation(e, t = {}) {
    if (!this._tilemapCache) return 0;
    let n = this.identifyPixelLocation(e, 0, $(t.datumTransformation));
    if (n === null) return null;
    let i = 0;
    const { maximumPyramidLevel: s } = this.rasterInfo.storageInfo;
    let r = s - i + this._levelOffset;
    const a = n.srcLocation;
    for (; r >= 0; ) {
      try {
        if (
          (await this._tilemapCache.fetchAvailability(r, n.row, n.col, t)) ===
          "available"
        )
          break;
      } catch {}
      if (
        (r--,
        i++,
        (n = this.identifyPixelLocation(a, i, $(t.datumTransformation))),
        n === null)
      )
        return null;
    }
    return r === -1 || n == null ? null : i;
  }
  async _fetchRasterInfo(e) {
    const t = this.sourceJSON;
    if (this.tileType === "Map") {
      const a = t.fullExtent || t.extent,
        l = Math.ceil((a.xmax - a.xmin) / t.pixelSizeX - 0.1),
        o = Math.ceil((a.ymax - a.ymin) / t.pixelSizeY - 0.1),
        c = q.fromJSON(t.spatialReference || a.spatialReference),
        h = new W({ x: t.pixelSizeX, y: t.pixelSizeY, spatialReference: c });
      return new ge({
        width: l,
        height: o,
        bandCount: 3,
        extent: j.fromJSON(a),
        spatialReference: c,
        pixelSize: h,
        pixelType: "u8",
        statistics: null,
        keyProperties: { DataType: "processed" },
      });
    }
    const { signal: n } = e,
      i = Lt(this.url, this.sourceJSON, {
        signal: n,
        query: this.ioConfig.customFetchParameters,
      }),
      s = t.hasMultidimensions
        ? this.request(`${this.url}/slices`, {
            query: { f: "json" },
            signal: n,
          })
            .then((a) => a.data && a.data.slices)
            .catch(() => null)
        : null,
      r = await Promise.all([i, s]);
    return (this._slices = r[1]), r[0];
  }
  _fixScaleInServiceInfo() {
    const { sourceJSON: e } = this;
    e.minScale && e.minScale < 0 && (e.minScale = 0),
      e.maxScale && e.maxScale < 0 && (e.maxScale = 0);
  }
  _fixGCSShift(e) {
    const { extent: t, spatialReference: n } = e;
    t.xmin > -1 &&
      t.xmax > 181 &&
      n != null &&
      n.wkid &&
      n.isGeographic &&
      ((e.nativeExtent = e.extent),
      (e.transform = new Ti()),
      (e.extent = e.transform.forwardTransform(t)));
  }
  _computeMinMaxLOD(e, t) {
    const { pixelSize: n } = e,
      i = (0.5 / e.width) * n.x,
      { lods: s } = t,
      r = t.lodAt(
        Math.max.apply(
          null,
          s.map((u) => u.level)
        )
      ),
      a = t.lodAt(
        Math.min.apply(
          null,
          s.map((u) => u.level)
        )
      ),
      { tileType: l } = this;
    if (l === "Map") return (this._levelOffset = s[0].level), [r, a];
    if (l === "Raster") return [s.find((u) => u.resolution === n.x) ?? r, a];
    const { minScale: o, maxScale: c } = this.sourceJSON;
    let h = r;
    c > 0 &&
      ((h = s.find((u) => Math.abs(u.scale - c) < i)),
      h ||
        (h =
          s
            .filter((u) => u.scale > c)
            .sort((u, m) => (u.scale > m.scale ? 1 : -1))[0] ?? r));
    let d = a;
    return (
      o > 0 &&
        ((d = s.find((u) => Math.abs(u.scale - o) < i) ?? a),
        (this._levelOffset = d.level - a.level)),
      [h, d]
    );
  }
};
I(
  [w({ type: String, json: { write: !0 } })],
  de.prototype,
  "datasetFormat",
  void 0
),
  I([w()], de.prototype, "tileType", void 0),
  (de = I([Q("esri.layers.support.rasterDatasets.ImageServerRaster")], de));
const zi = de,
  Y = new Map();
Y.set("Int8", "s8"),
  Y.set("UInt8", "u8"),
  Y.set("Int16", "s16"),
  Y.set("UInt16", "u16"),
  Y.set("Int32", "s32"),
  Y.set("UInt32", "u32"),
  Y.set("Float32", "f32"),
  Y.set("Float64", "f32"),
  Y.set("Double64", "f32");
const ee = new Map();
ee.set("none", {
  blobExtension: ".til",
  isOneSegment: !0,
  decoderFormat: "bip",
}),
  ee.set("lerc", {
    blobExtension: ".lrc",
    isOneSegment: !1,
    decoderFormat: "lerc",
  }),
  ee.set("deflate", {
    blobExtension: ".pzp",
    isOneSegment: !0,
    decoderFormat: "deflate",
  }),
  ee.set("jpeg", {
    blobExtension: ".pjg",
    isOneSegment: !0,
    decoderFormat: "jpg",
  });
let ae = class extends ne {
  constructor() {
    super(...arguments),
      (this._files = null),
      (this._storageIndex = null),
      (this.datasetFormat = "MRF");
  }
  async open(e) {
    var g;
    await this.init(),
      (this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1));
    const t = e ? $(e.signal) : null,
      n = await this.request(this.url, { responseType: "xml", signal: t }),
      { rasterInfo: i, files: s } = this._parseHeader(n.data);
    if (
      ((g = this.ioConfig.skipExtensions) == null
        ? void 0
        : g.indexOf("aux.xml")) === -1
    ) {
      const f = await this._fetchAuxiliaryData(e);
      f != null &&
        ((i.statistics = f.statistics ?? i.statistics),
        (i.histograms = f.histograms),
        f.histograms && O(i.statistics) && (i.statistics = ze(f.histograms)));
    }
    this._set("rasterInfo", i), (this._files = s);
    const r = await this.request(s.index, {
      responseType: "array-buffer",
      signal: t,
    });
    this._storageIndex = this._parseIndex(r.data);
    const { blockWidth: a, blockHeight: l } = this.rasterInfo.storageInfo,
      o = this.rasterInfo.storageInfo.pyramidScalingFactor,
      { width: c, height: h } = this.rasterInfo,
      d = [],
      u = this._getBandSegmentCount();
    let m = 0,
      p = -1;
    for (; m < this._storageIndex.length; ) {
      p++;
      const f = Math.ceil(c / a / o ** p) - 1,
        y = Math.ceil(h / l / o ** p) - 1;
      (m += (f + 1) * (y + 1) * u * 4),
        d.push({ maxRow: y, maxCol: f, minCol: 0, minRow: 0 });
    }
    (this.rasterInfo.storageInfo.blockBoundary = d),
      p > 0 &&
        ((this.rasterInfo.storageInfo.firstPyramidLevel = 1),
        (this.rasterInfo.storageInfo.maximumPyramidLevel = p)),
      this.updateTileInfo();
  }
  async fetchRawTile(e, t, n, i = {}) {
    const {
        blockWidth: s,
        blockHeight: r,
        blockBoundary: a,
      } = this.rasterInfo.storageInfo,
      l = a[e];
    if (!l || l.maxRow < t || l.maxCol < n || l.minRow > t || l.minCol > n)
      return null;
    const { bandCount: o, pixelType: c } = this.rasterInfo,
      {
        ranges: h,
        actualTileWidth: d,
        actualTileHeight: u,
      } = this._getTileLocation(e, t, n);
    if (!h || h.length === 0) return null;
    if (h[0].from === 0 && h[0].to === 0) {
      const b = new Uint8Array(s * r);
      return new xi({
        width: s,
        height: r,
        pixels: null,
        mask: b,
        validPixelCount: 0,
      });
    }
    const { bandIds: m } = this.ioConfig,
      p = this._getBandSegmentCount(),
      g = [];
    let f = 0;
    for (f = 0; f < p; f++)
      (!m || m.indexOf[f] > -1) &&
        g.push(
          this.request(this._files.data, {
            range: { from: h[f].from, to: h[f].to },
            responseType: "array-buffer",
            signal: i.signal,
          })
        );
    const y = await Promise.all(g),
      x = y.map((b) => b.data.byteLength).reduce((b, v) => b + v),
      S = new Uint8Array(x);
    let T = 0;
    for (f = 0; f < p; f++)
      S.set(new Uint8Array(y[f].data), T), (T += y[f].data.byteLength);
    const C = ee.get(this.rasterInfo.storageInfo.compression).decoderFormat,
      _ = await this.decodePixelBlock(S.buffer, {
        width: s,
        height: r,
        format: C,
        planes: (m == null ? void 0 : m.length) || o,
        pixelType: c,
      });
    if (_ == null) return null;
    if (k(this.rasterInfo.noDataValue) && C !== "lerc" && !_.mask) {
      const b = this.rasterInfo.noDataValue[0];
      if (b != null) {
        const v = _.width * _.height,
          P = new Uint8Array(v);
        if (Math.abs(b) > 1e24)
          for (f = 0; f < v; f++)
            Math.abs((_.pixels[0][f] - b) / b) > 1e-6 && (P[f] = 1);
        else for (f = 0; f < v; f++) _.pixels[0][f] !== b && (P[f] = 1);
        _.mask = P;
      }
    }
    let R = 0,
      F = 0;
    if (d !== s || u !== r) {
      let b = _.mask;
      if (b)
        for (f = 0; f < r; f++)
          if (((F = f * s), f < u)) for (R = d; R < s; R++) b[F + R] = 0;
          else for (R = 0; R < s; R++) b[F + R] = 0;
      else
        for (b = new Uint8Array(s * r), _.mask = b, f = 0; f < u; f++)
          for (F = f * s, R = 0; R < d; R++) b[F + R] = 1;
    }
    return _;
  }
  _parseIndex(e) {
    if (e.byteLength % 16 > 0)
      throw new Error("invalid array buffer must be multiples of 16");
    let t, n, i, s, r, a;
    if (Zt) {
      for (
        n = new Uint8Array(e),
          s = new ArrayBuffer(e.byteLength),
          i = new Uint8Array(s),
          r = 0;
        r < e.byteLength / 4;
        r++
      )
        for (a = 0; a < 4; a++) i[4 * r + a] = n[4 * r + 3 - a];
      t = new Uint32Array(s);
    } else t = new Uint32Array(e);
    return t;
  }
  _getBandSegmentCount() {
    return ee.get(this.rasterInfo.storageInfo.compression).isOneSegment
      ? 1
      : this.rasterInfo.bandCount;
  }
  _getTileLocation(e, t, n) {
    const {
        blockWidth: i,
        blockHeight: s,
        pyramidScalingFactor: r,
      } = this.rasterInfo.storageInfo,
      { width: a, height: l } = this.rasterInfo,
      o = this._getBandSegmentCount();
    let c,
      h,
      d,
      u = 0,
      m = 0;
    for (d = 0; d < e; d++)
      (m = r ** d),
        (c = Math.ceil(a / i / m)),
        (h = Math.ceil(l / s / m)),
        (u += c * h);
    (m = r ** e),
      (c = Math.ceil(a / i / m)),
      (h = Math.ceil(l / s / m)),
      (u += t * c + n),
      (u *= 4 * o);
    const p = this._storageIndex.subarray(u, u + 4 * o);
    let g = 0,
      f = 0;
    const y = [];
    for (let x = 0; x < o; x++)
      (g = p[4 * x + 0] * 2 ** 32 + p[4 * x + 1]),
        (f = g + p[4 * x + 2] * 2 ** 32 + p[4 * x + 3]),
        y.push({ from: g, to: f });
    return {
      ranges: y,
      actualTileWidth: n < c - 1 ? i : Math.ceil(a / m) - i * (c - 1),
      actualTileHeight: t < h - 1 ? s : Math.ceil(l / m) - s * (h - 1),
    };
  }
  _parseHeader(e) {
    const t = V(e, "MRF_META/Raster");
    if (!t) throw new M("mrf:open", "not a valid MRF format");
    const n = V(t, "Size"),
      i = parseInt(n.getAttribute("x"), 10),
      s = parseInt(n.getAttribute("y"), 10),
      r = parseInt(n.getAttribute("c"), 10),
      a = (K(t, "Compression") || "none").toLowerCase();
    if (!ee.has(a))
      throw new M("mrf:open", "currently does not support compression " + a);
    const l = K(t, "DataType") || "UInt8",
      o = Y.get(l);
    if (o == null)
      throw new M("mrf:open", "currently does not support pixel type " + l);
    const c = V(t, "PageSize"),
      h = parseInt(c.getAttribute("x"), 10),
      d = parseInt(c.getAttribute("y"), 10),
      u = V(t, "DataValues");
    let m, p;
    if (
      (u &&
        ((p = u.getAttribute("NoData")),
        p != null &&
          (m = p
            .trim()
            .split(" ")
            .map((P) => parseFloat(P)))),
      V(e, "MRF_META/CachedSource"))
    )
      throw new M(
        "mrf:open",
        "currently does not support MRF referencing other data files"
      );
    const g = V(e, "MRF_META/GeoTags"),
      f = V(g, "BoundingBox");
    let y,
      x = !1;
    if (f != null) {
      const P = parseFloat(f.getAttribute("minx")),
        E = parseFloat(f.getAttribute("miny")),
        N = parseFloat(f.getAttribute("maxx")),
        D = parseFloat(f.getAttribute("maxy")),
        J = K(g, "Projection") || "";
      let H = q.WGS84;
      if (J !== "LOCAL_CS[]")
        if (J.toLowerCase().startsWith("epsg:")) {
          const L = Number(J.slice(5));
          isNaN(L) || L === 0 || (H = new q({ wkid: L }));
        } else H = ve(J) ?? q.WGS84;
      else (x = !0), (H = new q({ wkid: 3857 }));
      (y = new j(P, E, N, D)), (y.spatialReference = H);
    } else
      (x = !0),
        (y = new j({
          xmin: -0.5,
          ymin: 0.5 - s,
          xmax: i - 0.5,
          ymax: 0.5,
          spatialReference: new q({ wkid: 3857 }),
        }));
    const S = V(e, "MRF_META/Rsets"),
      T = parseInt((S && S.getAttribute("scale")) || "2", 10),
      C = y.spatialReference,
      _ = new ye({
        origin: new W({ x: y.xmin, y: y.ymax, spatialReference: C }),
        blockWidth: h,
        blockHeight: d,
        pyramidBlockWidth: h,
        pyramidBlockHeight: d,
        compression: a,
        pyramidScalingFactor: T,
      }),
      R = new W({ x: y.width / i, y: y.height / s, spatialReference: C }),
      F = new ge({
        width: i,
        height: s,
        extent: y,
        isPseudoSpatialReference: x,
        spatialReference: C,
        bandCount: r,
        pixelType: o,
        pixelSize: R,
        noDataValue: m,
        storageInfo: _,
      }),
      b = K(e, "datafile"),
      v = K(e, "IndexFile");
    return {
      rasterInfo: F,
      files: {
        mrf: this.url,
        index: v || this.url.replace(".mrf", ".idx"),
        data: b || this.url.replace(".mrf", ee.get(a).blobExtension),
      },
    };
  }
  async _fetchAuxiliaryData(e) {
    try {
      const { data: t } = await this.request(this.url + ".aux.xml", {
        responseType: "xml",
        signal: e == null ? void 0 : e.signal,
      });
      return Je(t);
    } catch {
      return null;
    }
  }
};
I([w()], ae.prototype, "_files", void 0),
  I([w()], ae.prototype, "_storageIndex", void 0),
  I(
    [w({ type: String, json: { write: !0 } })],
    ae.prototype,
    "datasetFormat",
    void 0
  ),
  (ae = I([Q("esri.layers.support.rasterIO.MRFRaster")], ae));
const Ei = ae,
  Pe = (e, t) => {
    var n;
    return (n = e.get(t)) == null ? void 0 : n.values;
  },
  ue = (e, t) => {
    var n, i;
    return (i = (n = e.get(t)) == null ? void 0 : n.values) == null
      ? void 0
      : i[0];
  };
let se = class extends ne {
  constructor() {
    super(...arguments),
      (this._files = null),
      (this._headerInfo = null),
      (this._bufferSize = 1048576),
      (this.datasetFormat = "TIFF");
  }
  async open(e) {
    await this.init();
    const t = e ? $(e.signal) : null,
      { data: n } = await this.request(this.url, {
        range: { from: 0, to: this._bufferSize },
        responseType: "array-buffer",
        signal: t,
      });
    if (!n) throw new M("tiffraster:open", "failed to open url " + this.url);
    this.datasetName = this.url.slice(
      this.url.lastIndexOf("/") + 1,
      this.url.lastIndexOf(".")
    );
    const { littleEndian: i, firstIFDPos: s, isBigTiff: r } = ei(n),
      a = [];
    await this._readIFDs(a, n, i, s, 0, r ? 8 : 4, t);
    const { imageInfo: l, rasterInfo: o } = this._parseIFDs(a),
      c = ti(a),
      h = ii(a);
    if (
      ((this._headerInfo = {
        littleEndian: i,
        isBigTiff: r,
        ifds: a,
        pyramidIFDs: c,
        maskIFDs: h,
        ...l,
      }),
      this._set("rasterInfo", o),
      !l.isSupported)
    )
      throw new M(
        "tiffraster:open",
        "this tiff is not supported: " + l.message
      );
    if (!l.tileWidth)
      throw new M(
        "tiffraster:open",
        "none-tiled tiff is not optimized for access, convert to COG and retry."
      );
    const { skipExtensions: d = [] } = this.ioConfig;
    if (!d.includes("aux.xml")) {
      const u = await this._fetchAuxiliaryMetaData(e);
      u != null && this._processPAMInfo(u, o);
    }
    d.includes("vat.dbf") ||
      o.bandCount !== 1 ||
      o.pixelType !== "u8" ||
      ((o.attributeTable = await this._fetchAuxiliaryTable(e)),
      k(o.attributeTable) && (o.keyProperties.DataType = "thematic")),
      this.updateTileInfo();
  }
  async fetchRawTile(e, t, n, i = {}) {
    var r;
    if (
      !((r = this._headerInfo) != null && r.isSupported) ||
      this.isBlockOutside(e, t, n)
    )
      return null;
    const s = await this._fetchRawTiffTile(e, t, n, !1, i);
    if (k(s) && this._headerInfo.hasMaskBand) {
      const a = await this._fetchRawTiffTile(e, t, n, !0, i);
      k(a) && a.pixels[0] instanceof Uint8Array && (s.mask = a.pixels[0]);
    }
    return s;
  }
  _parseIFDs(e) {
    var P, E;
    const t = si(e),
      {
        width: n,
        height: i,
        tileWidth: s,
        tileHeight: r,
        planes: a,
        pixelType: l,
        compression: o,
        firstPyramidLevel: c,
        maximumPyramidLevel: h,
        pyramidBlockWidth: d,
        pyramidBlockHeight: u,
        tileBoundary: m,
        affine: p,
        metadata: g,
      } = t;
    let f = ve(
        ((P = t.extent.spatialReference) == null ? void 0 : P.wkt) ||
          ((E = t.extent.spatialReference) == null ? void 0 : E.wkid)
      ),
      y = !!t.isPseudoGeographic;
    f == null && ((y = !0), (f = new q({ wkid: 3857 })));
    const x = new j({ ...t.extent, spatialReference: f }),
      S = new W(
        x ? { x: x.xmin, y: x.ymax, spatialReference: f } : { x: 0, y: 0 }
      ),
      T = new ye({
        blockWidth: s,
        blockHeight: r,
        pyramidBlockWidth: d,
        pyramidBlockHeight: u,
        compression: o,
        origin: S,
        firstPyramidLevel: c,
        maximumPyramidLevel: h,
        blockBoundary: m,
      }),
      C = new W({
        x: (x.xmax - x.xmin) / n,
        y: (x.ymax - x.ymin) / i,
        spatialReference: f,
      }),
      _ = g ? { BandProperties: g.bandProperties, DataType: g.dataType } : {};
    let R = null;
    const F = ue(e[0], "PHOTOMETRICINTERPRETATION"),
      b = Pe(e[0], "COLORMAP");
    if (F <= 3 && (b == null ? void 0 : b.length) > 3 && b.length % 3 == 0) {
      R = [];
      const N = b.length / 3;
      for (let D = 0; D < N; D++)
        R.push([D, b[D] >>> 8, b[D + N] >>> 8, b[D + 2 * N] >>> 8]);
    }
    const v = new ge({
      width: n,
      height: i,
      bandCount: a,
      pixelType: l,
      pixelSize: C,
      storageInfo: T,
      spatialReference: f,
      isPseudoSpatialReference: y,
      keyProperties: _,
      extent: x,
      colormap: R,
      statistics: g ? g.statistics : null,
    });
    return (
      p != null &&
        p.length &&
        ((v.nativeExtent = new j({
          xmin: -0.5,
          ymin: 0.5 - i,
          xmax: n - 0.5,
          ymax: 0.5,
          spatialReference: f,
        })),
        (v.transform = new Ee({
          polynomialOrder: 1,
          forwardCoefficients: [
            p[2] + p[0] / 2,
            p[5] - p[3] / 2,
            p[0],
            p[3],
            -p[1],
            -p[4],
          ],
        })),
        (v.extent = v.transform.forwardTransform(v.nativeExtent)),
        (v.pixelSize = new W({
          x: (x.xmax - x.xmin) / n,
          y: (x.ymax - x.ymin) / i,
          spatialReference: f,
        })),
        (T.origin.x = -0.5),
        (T.origin.y = 0.5)),
      { imageInfo: t, rasterInfo: v }
    );
  }
  _processPAMInfo(e, t) {
    if (
      ((t.statistics = e.statistics ?? t.statistics),
      (t.histograms = e.histograms),
      e.histograms && O(t.statistics) && (t.statistics = ze(e.histograms)),
      e.transform && O(t.transform))
    ) {
      (t.transform = e.transform), (t.nativeExtent = t.extent);
      const n = t.transform.forwardTransform(t.nativeExtent);
      (t.pixelSize = new W({
        x: (n.xmax - n.xmin) / t.width,
        y: (n.ymax - n.ymin) / t.height,
        spatialReference: t.spatialReference,
      })),
        (t.extent = n);
    }
    t.isPseudoSpatialReference &&
      e.spatialReference &&
      (t.spatialReference = e.spatialReference);
  }
  async _readIFDs(e, t, n, i, s, r = 4, a) {
    if (!i) return null;
    (i >= t.byteLength || i < 0) &&
      ((t = (
        await this.request(this.url, {
          range: { from: i + s, to: i + s + this._bufferSize },
          responseType: "array-buffer",
          signal: a,
        })
      ).data),
      (s = i + s),
      (i = 0));
    const l = await this._readIFD(t, n, i, s, Ie.TIFF_TAGS, r, a);
    if ((e.push(l.ifd), !l.nextIFD)) return null;
    await this._readIFDs(e, t, n, l.nextIFD - s, s, r, a);
  }
  async _readIFD(e, t, n, i, s = Ie.TIFF_TAGS, r = 4, a) {
    var o, c;
    if (!e) return null;
    const l = ri(e, t, n, i, s, r);
    if (l.success) {
      const h = [];
      if (
        ((o = l.ifd) == null ||
          o.forEach((d) => {
            d.values || h.push(d);
          }),
        h.length > 0)
      ) {
        const d = h.map((m) => m.offlineOffsetSize).filter(k),
          u = Math.min.apply(
            null,
            d.map((m) => m[0])
          );
        if (
          Math.min.apply(
            null,
            d.map((m) => m[0] + m[1])
          ) -
            u <=
          this._bufferSize
        ) {
          const { data: m } = await this.request(this.url, {
            range: { from: u, to: u + this._bufferSize },
            responseType: "array-buffer",
            signal: a,
          });
          (e = m), (i = u), h.forEach((p) => ni(e, t, p, i));
        }
      }
      if ((c = l.ifd) != null && c.has("GEOKEYDIRECTORY")) {
        const d = l.ifd.get("GEOKEYDIRECTORY"),
          u = d == null ? void 0 : d.values;
        if (u && u.length > 4) {
          const m = u[0] + "." + u[1] + "." + u[2],
            p = await this._readIFD(
              e,
              t,
              d.valueOffset + 6 - i,
              i,
              Ie.GEO_KEYS,
              2,
              a
            );
          (d.data = p.ifd),
            d.data &&
              d.data.set("GEOTIFFVersion", {
                id: 0,
                type: 2,
                valueCount: 1,
                valueOffset: null,
                values: [m],
              });
        }
      }
      return l;
    }
    if (l.requiredBufferSize && l.requiredBufferSize !== e.byteLength)
      return (e = (
        await this.request(this.url, {
          range: { from: i, to: i + l.requiredBufferSize + 4 },
          responseType: "array-buffer",
          signal: a,
        })
      ).data).byteLength < l.requiredBufferSize
        ? null
        : this._readIFD(e, t, 0, i, Ie.TIFF_TAGS, 4, a);
  }
  async _fetchRawTiffTile(e, t, n, i, s = {}) {
    const r = this._getTileLocation(e, t, n, i);
    if (!r) return null;
    const { ranges: a, actualTileWidth: l, actualTileHeight: o, ifd: c } = r,
      h = a.map((_) =>
        this.request(this.url, {
          range: _,
          responseType: "array-buffer",
          signal: s.signal,
        })
      ),
      d = await Promise.all(h),
      u = d.map((_) => _.data.byteLength).reduce((_, R) => _ + R),
      m = d.length === 1 ? d[0].data : new ArrayBuffer(u),
      p = [0],
      g = [0];
    if (d.length > 1) {
      const _ = new Uint8Array(m);
      for (let R = 0, F = 0; R < d.length; R++) {
        const b = d[R].data;
        _.set(new Uint8Array(b), F),
          (p[R] = F),
          (F += b.byteLength),
          (g[R] = b.byteLength);
      }
    }
    const { blockWidth: f, blockHeight: y } = this.getBlockWidthHeight(e),
      x = await this.decodePixelBlock(m, {
        format: "tiff",
        customOptions: {
          headerInfo: this._headerInfo,
          ifd: c,
          offsets: p,
          sizes: g,
        },
        width: f,
        height: y,
        planes: null,
        pixelType: null,
      });
    if (x == null) return null;
    let S, T, C;
    if (l !== f || o !== y) {
      let _ = x.mask;
      if (_)
        for (S = 0; S < y; S++)
          if (((C = S * f), S < o)) for (T = l; T < f; T++) _[C + T] = 0;
          else for (T = 0; T < f; T++) _[C + T] = 0;
      else
        for (_ = new Uint8Array(f * y), x.mask = _, S = 0; S < o; S++)
          for (C = S * f, T = 0; T < l; T++) _[C + T] = 1;
    }
    return x;
  }
  _getTileLocation(e, t, n, i = !1) {
    const { firstPyramidLevel: s, blockBoundary: r } =
        this.rasterInfo.storageInfo,
      a = e === 0 ? 0 : e - (s - 1),
      { _headerInfo: l } = this;
    if (!l) return null;
    const o = i
      ? l.maskIFDs[a]
      : a === 0
      ? l == null
        ? void 0
        : l.ifds[0]
      : l == null
      ? void 0
      : l.pyramidIFDs[a - 1];
    if (!o) return null;
    const c = ai(o, l),
      h = Pe(o, "TILEOFFSETS");
    if (h === void 0) return null;
    const d = Pe(o, "TILEBYTECOUNTS"),
      { minRow: u, minCol: m, maxRow: p, maxCol: g } = r[a];
    if (t > p || n > g || t < u || n < m) return null;
    const f = ue(o, "IMAGEWIDTH"),
      y = ue(o, "IMAGELENGTH"),
      x = ue(o, "TILEWIDTH"),
      S = ue(o, "TILELENGTH"),
      T = c ? this.rasterInfo.bandCount : 1,
      C = T * t * (g + 1) + n,
      _ = [{ from: h[C], to: h[C + T - 1] + d[C + T - 1] - 1 }];
    if (c) {
      let b = !0;
      for (let v = 0; v < T; v++)
        if (h[C + v] + d[C + v] !== h[C + v + 1]) {
          b = !1;
          break;
        }
      if (!b)
        for (let v = 0; v < T; v++)
          _[v] = { from: h[C + v], to: h[C + v] + d[C + v] - 1 };
    }
    const R = h[C],
      F = d[C];
    return R == null || F == null
      ? null
      : {
          ranges: _,
          ifd: o,
          actualTileWidth: (n === g && f % x) || x,
          actualTileHeight: (t === p && y % S) || S,
        };
  }
  async _fetchAuxiliaryMetaData(e) {
    try {
      const { data: t } = await this.request(this.url + ".aux.xml", {
        responseType: "xml",
        signal: e == null ? void 0 : e.signal,
      });
      return Je(t);
    } catch {
      return null;
    }
  }
  async _fetchAuxiliaryTable(e) {
    try {
      const { data: t } = await this.request(this.url + ".vat.dbf", {
          responseType: "array-buffer",
          signal: e == null ? void 0 : e.signal,
        }),
        n = lt.parse(t);
      return n != null && n.recordSet ? st.fromJSON(n.recordSet) : null;
    } catch {
      return null;
    }
  }
};
I([w()], se.prototype, "_files", void 0),
  I([w()], se.prototype, "_headerInfo", void 0),
  I([w()], se.prototype, "_bufferSize", void 0),
  I(
    [w({ type: String, json: { write: !0 } })],
    se.prototype,
    "datasetFormat",
    void 0
  ),
  (se = I([Q("esri.layers.support.rasterDatasets.TIFFRaster")], se));
const Ji = se,
  A = new Map();
A.set("CRF", { desc: "Cloud Raster Format", constructor: Mi }),
  A.set("MRF", { desc: "Meta Raster Format", constructor: Ei }),
  A.set("TIFF", { desc: "GeoTIFF", constructor: Ji }),
  A.set("RasterTileServer", { desc: "Raster Tile Server", constructor: zi }),
  A.set("JPG", { desc: "JPG Raster Format", constructor: Se }),
  A.set("PNG", { desc: "PNG Raster Format", constructor: Se }),
  A.set("GIF", { desc: "GIF Raster Format", constructor: Se }),
  A.set("BMP", { desc: "BMP Raster Format", constructor: Se });
class Ni {
  static get supportedFormats() {
    const t = new Set();
    return A.forEach((n, i) => t.add(i)), t;
  }
  static async open(t) {
    const { url: n, ioConfig: i, sourceJSON: s } = t;
    let r = t.datasetFormat;
    r == null &&
      n.lastIndexOf(".") &&
      (r = n.slice(n.lastIndexOf(".") + 1).toUpperCase()),
      r === "OVR" || r === "TIF"
        ? (r = "TIFF")
        : (r !== "JPG" && r !== "JPEG" && r !== "JFIF") || (r = "JPG"),
      n.toLowerCase().includes("/imageserver") &&
        !n.toLowerCase().includes("/wcsserver") &&
        (r = "RasterTileServer");
    const a = {
      url: n,
      sourceJSON: s,
      datasetFormat: r,
      ioConfig: i ?? { bandIds: null, sampling: null },
    };
    let l, o;
    if (r && this.supportedFormats.has(r)) {
      if (r === "CRF" && !(i != null && i.enableCRF))
        throw new M("rasterfactory:open", `cannot open raster: ${n}`);
      return (
        (l = A.get(r).constructor),
        (o = new l(a)),
        await o.open({ signal: t.signal }),
        o
      );
    }
    if (r) throw new M("rasterfactory:open", "not a supported format " + r);
    const c = Array.from(A.keys());
    let h = 0;
    const d = () => (
      (r = c[h++]),
      r && (r !== "CRF" || (i != null && i.enableCRF))
        ? ((l = A.get(r).constructor),
          (o = new l(a)),
          o
            .open({ signal: t.signal })
            .then(() => o)
            .catch(() => d()))
        : null
    );
    return d();
  }
  static register(t, n, i) {
    A.has(t.toUpperCase()) ||
      A.set(t.toUpperCase(), { desc: n, constructor: i });
  }
}
let z = class extends xt(It(wt(bt(St(Ci(Rt(vt(Tt(_t(zt)))))))))) {
  constructor(...e) {
    super(...e),
      (this._primaryRasters = null),
      (this.bandIds = null),
      (this.interpolation = null),
      (this.legendEnabled = !0),
      (this.isReference = null),
      (this.listMode = "show"),
      (this.sourceJSON = null),
      (this.version = null),
      (this.type = "imagery-tile"),
      (this.operationalLayerType = "ArcGISTiledImageServiceLayer"),
      (this.popupEnabled = !0),
      (this.popupTemplate = null),
      (this.fields = null);
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  load(e) {
    const t = k(e) ? e.signal : null;
    return (
      this.addResolvingPromise(
        this.loadFromPortal({ supportedTypes: ["Image Service"] }, e)
          .catch(Ft)
          .then(() => this._openRaster(t))
      ),
      Promise.resolve(this)
    );
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get rasterFields() {
    var a;
    let e = [
      new me({
        name: "Raster.ServicePixelValue",
        alias: "Pixel Value",
        domain: null,
        editable: !1,
        length: 50,
        type: "string",
      }),
    ];
    const { rasterInfo: t } = this,
      n = t == null ? void 0 : t.attributeTable,
      i = k(n) ? n.fields : null;
    if (i) {
      const l = i
        .filter((o) => o.type !== "oid" && o.name.toLowerCase() !== "value")
        .map((o) => {
          const c = o.clone();
          return (c.name = "Raster." + o.name), c;
        });
      e = e.concat(l);
    }
    const s = t == null ? void 0 : t.dataType,
      r = t == null ? void 0 : t.multidimensionalInfo;
    if ((s === "vector-magdir" || s === "vector-uv") && k(r)) {
      const l = (a = r.variables[0].unit) == null ? void 0 : a.trim(),
        o = "Magnitude" + (l ? ` (${l})` : "");
      e.push(
        new me({
          name: "Raster.Magnitude",
          alias: o,
          domain: null,
          editable: !1,
          type: "double",
        })
      ),
        e.push(
          new me({
            name: "Raster.Direction",
            alias: "Direction (°)",
            domain: null,
            editable: !1,
            type: "double",
          })
        );
    }
    return e;
  }
  set renderer(e) {
    this._set("renderer", e), this.updateRenderer();
  }
  readRenderer(e, t, n) {
    const i =
        t &&
        t.layerDefinition &&
        t.layerDefinition.drawingInfo &&
        t.layerDefinition.drawingInfo.renderer,
      s = At(i, n) || void 0;
    if (s != null) return s;
  }
  createPopupTemplate(e) {
    return kt({ fields: this.rasterFields, title: this.title }, e);
  }
  async generateRasterInfo(e, t) {
    if (!(e = Ze(Me, e))) return this._primaryRasters[0].rasterInfo;
    try {
      const n = { raster: this._primaryRasters[0] };
      this._primaryRasters.length > 1 &&
        this._primaryRasters.forEach((r) => (n[r.url] = r));
      const i = Oe(e.toJSON(), n),
        s = new De({ rasterFunction: i });
      return await s.open(t), s.rasterInfo;
    } catch {
      return null;
    }
  }
  write(e, t) {
    const { raster: n } = this;
    if (
      this.loaded
        ? n.datasetFormat === "RasterTileServer" &&
          (n.tileType === "Raster" || n.tileType === "Map")
        : this.url && /\/ImageServer(\/|\/?$)/i.test(this.url)
    )
      return super.write(e, t);
    if (t && t.messages) {
      const i = `${t.origin}/${t.layerContainerType || "operational-layers"}`;
      t.messages.push(
        new M(
          "layer:unsupported",
          `Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${i}'`,
          { layer: this }
        )
      );
    }
    return null;
  }
  async _openRaster(e) {
    let t = !1;
    if (this.raster)
      this.raster.rasterInfo || (await this.raster.open()),
        this.raster.datasetFormat === "Function"
          ? ((t = !0),
            (this._primaryRasters = this.raster.primaryRasters.rasters))
          : (this._primaryRasters = [this.raster]),
        (this.url = this.raster.url);
    else {
      const { rasterFunction: i } = this,
        s = [this.url];
      i && _i(i.toJSON(), s);
      const r = await Promise.all(
          s.map((l) =>
            Ni.open({
              url: l,
              sourceJSON: this.sourceJSON,
              ioConfig: {
                sampling: "closest",
                ...this.ioConfig,
                customFetchParameters: this.customParameters,
              },
              signal: e,
            })
          )
        ),
        a = r.findIndex((l) => l == null);
      if (a > -1)
        throw new M("imagery-tile-layer:open", `cannot open raster: ${s[a]}`);
      if (((this._primaryRasters = r), i)) {
        const l = { raster: this._primaryRasters[0] };
        this._primaryRasters.length > 1 &&
          this._primaryRasters.forEach((h) => (l[h.url] = h));
        const o = Oe(i.rasterFunctionDefinition ?? i.toJSON(), l),
          c = new De({ rasterFunction: o });
        try {
          await c.open(), (this.raster = c);
        } catch (h) {
          const d = Be.getLogger(this.declaredClass);
          h instanceof M && d.error("imagery-tile-layer:open", h.message),
            d.warn(
              "imagery-tile-layer:open",
              "the raster function cannot be applied and is removed"
            ),
            this._set("rasterFunction", null),
            (this.raster = r[0]);
        }
      } else this.raster = r[0];
    }
    const n = this.raster.rasterInfo;
    if (!n)
      throw new M(
        "imagery-tile-layer:load",
        "cannot load resources on " + this.url
      );
    if (
      (this._set("rasterInfo", t ? n : this._primaryRasters[0].rasterInfo),
      this._set("spatialReference", n.spatialReference),
      (this.sourceJSON = this.sourceJSON || this.raster.sourceJSON),
      this.sourceJSON != null)
    ) {
      const i =
        this.raster.tileType === "Map" &&
        this.sourceJSON.minLOD != null &&
        this.sourceJSON.maxLOD != null
          ? this.sourceJSON
          : { ...this.sourceJSON, minScale: 0, maxScale: 0 };
      this.read(i, { origin: "service" });
    }
    this.title || (this.title = this.raster.datasetName),
      this.raster.tileType === "Map" && (this.popupEnabled = !1),
      this._configDefaultSettings(),
      this.addHandles(
        Ct(
          () => this.customParameters,
          (i) => {
            this.raster && (this.raster.ioConfig.customFetchParameters = i);
          }
        )
      );
  }
};
I([w()], z.prototype, "_primaryRasters", void 0),
  I(
    [
      w({
        type: [Pt],
        json: {
          write: {
            overridePolicy() {
              var e;
              return {
                enabled:
                  !this.loaded ||
                  this.raster.tileType === "Raster" ||
                  ((e = this.bandIds) == null ? void 0 : e.join(",")) !==
                    "0,1,2",
              };
            },
          },
        },
      }),
    ],
    z.prototype,
    "bandIds",
    void 0
  ),
  I(
    [
      w({
        json: {
          write: {
            overridePolicy() {
              return {
                enabled:
                  !this.loaded ||
                  this.raster.tileType === "Raster" ||
                  this.interpolation !== "bilinear",
              };
            },
          },
        },
      }),
      Mt(Wt),
    ],
    z.prototype,
    "interpolation",
    void 0
  ),
  I([w(Ot)], z.prototype, "legendEnabled", void 0),
  I(
    [
      w({
        type: Boolean,
        json: {
          read: !1,
          write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) },
        },
      }),
    ],
    z.prototype,
    "isReference",
    void 0
  ),
  I([w({ type: ["show", "hide"] })], z.prototype, "listMode", void 0),
  I([w({ json: { read: !0, write: !0 } })], z.prototype, "blendMode", void 0),
  I([w()], z.prototype, "sourceJSON", void 0),
  I(
    [
      w({
        readOnly: !0,
        json: { origins: { service: { read: { source: "currentVersion" } } } },
      }),
    ],
    z.prototype,
    "version",
    void 0
  ),
  I([w({ readOnly: !0, json: { read: !1 } })], z.prototype, "type", void 0),
  I(
    [w({ type: ["ArcGISTiledImageServiceLayer"] })],
    z.prototype,
    "operationalLayerType",
    void 0
  ),
  I(
    [
      w({
        type: Boolean,
        value: !0,
        json: {
          read: { source: "disablePopup", reader: (e, t) => !t.disablePopup },
          write: {
            target: "disablePopup",
            overridePolicy() {
              return {
                enabled: !this.loaded || this.raster.tileType === "Raster",
              };
            },
            writer(e, t, n) {
              t[n] = !e;
            },
          },
        },
      }),
    ],
    z.prototype,
    "popupEnabled",
    void 0
  ),
  I(
    [
      w({
        type: Dt,
        json: {
          read: { source: "popupInfo" },
          write: {
            target: "popupInfo",
            overridePolicy() {
              return {
                enabled: !this.loaded || this.raster.tileType === "Raster",
              };
            },
          },
        },
      }),
    ],
    z.prototype,
    "popupTemplate",
    void 0
  ),
  I([w({ readOnly: !0 })], z.prototype, "defaultPopupTemplate", null),
  I([w({ readOnly: !0, type: [me] })], z.prototype, "fields", void 0),
  I([w({ readOnly: !0, type: [me] })], z.prototype, "rasterFields", null),
  I(
    [
      w({
        types: nt,
        json: {
          name: "layerDefinition.drawingInfo.renderer",
          write: {
            overridePolicy() {
              var t;
              const e =
                ((t = this.renderer) == null ? void 0 : t.type) ===
                  "raster-stretch" &&
                this.renderer.stretchType === "none" &&
                !this.renderer.useGamma;
              return {
                enabled:
                  !this.loaded || this.raster.tileType === "Raster" || !e,
              };
            },
          },
          origins: {
            "web-scene": {
              types: qt,
              name: "layerDefinition.drawingInfo.renderer",
              write: {
                overridePolicy: (e) => ({
                  enabled: e && e.type !== "vector-field" && e.type !== "flow",
                }),
              },
            },
          },
        },
      }),
    ],
    z.prototype,
    "renderer",
    null
  ),
  I([Bt("renderer")], z.prototype, "readRenderer", null),
  (z = I([Q("esri.layers.ImageryTileLayer")], z));
const ss = z;
export { ss as default };
