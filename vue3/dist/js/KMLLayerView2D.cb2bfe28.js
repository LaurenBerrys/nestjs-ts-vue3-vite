import {
  Y as k,
  R as U,
  U as z,
  a8 as I,
  P as H,
  G as Y,
  F as K,
  E as v,
  ar as L,
  r as D,
  t as J,
  aG as $,
  aH as q,
  aI as Q,
  aJ as G,
  aK as X,
  aL as Z,
  ae as V,
  af as S,
  ag as W,
} from "./index.8fd7165c.js";
import { b as R, g as tt, d as et } from "./kmlUtils.3587abe1.js";
import { T as it, S as at, R as st } from "./Bitmap.cb464f5e.js";
import { a as rt } from "./BitmapContainer.ba60edd5.js";
import { f as ot, u as nt } from "./LayerView.d8517e2e.js";
import { i as P } from "./GraphicContainer.7c4908c4.js";
import { a as M } from "./GraphicsView2D.5baab708.js";
import { C as lt, $ as pt } from "./rasterProjectionHelper.fde7641d.js";
import { n as ht } from "./WGLContainer.e7ddd41d.js";
import { I as mt, o as ct } from "./RenderingContext.ee6c0064.js";
import {
  P as T,
  G as E,
  D as j,
  L as N,
  Y as dt,
  V as gt,
  f as B,
} from "./enums.64ab819c.js";
import { x as ut } from "./VertexArrayObject.1b8f3583.js";
import { l as _t } from "./rasterUtils.f0d03219.js";
import { E as F } from "./Texture.fb0c670a.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./Container.a5892366.js";
import "./definitions.ce677f69.js";
import "./color.4c5303e9.js";
import "./enums.13513a14.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./BaseGraphicContainer.5e700f86.js";
import "./FeatureContainer.3aa1973d.js";
import "./AttributeStoreView.413dc93f.js";
import "./TiledDisplayObject.3b82e169.js";
import "./visualVariablesUtils.1183f3fb.js";
import "./visualVariablesUtils.de38be9a.js";
import "./TileContainer.4bfeb0d8.js";
import "./utils.1f803f1b.js";
import "./MaterialKey.97cb3dc8.js";
import "./vec3f32.5805ce90.js";
import "./ExpandedCIM.e22c8b13.js";
import "./BidiEngine.520adad3.js";
import "./GeometryUtils.874f8cf4.js";
import "./Rect.6884a4ea.js";
import "./quantizationUtils.1e9e702d.js";
import "./floatRGBA.6f2fa7cd.js";
import "./normalizeUtilsSync.1ac6b009.js";
import "./projectionSupport.4aeb802f.js";
import "./json.495fc412.js";
import "./Matcher.fe3c9df5.js";
import "./tileUtils.c2f19f52.js";
import "./TurboLine.2982dc8d.js";
import "./GeometryUtils.82ab0a13.js";
import "./earcut.9f54f087.js";
import "./devEnvironmentUtils.4eab2a99.js";
import "./schemaUtils.264ba82d.js";
import "./util.79a0d0b9.js";
import "./ComputedAttributeStorage.396dbaf7.js";
import "./arcadeTimeUtils.e79f2f70.js";
import "./executionError.fb3f283a.js";
import "./centroid.e6a939c1.js";
import "./ProgramTemplate.4bbf0f5e.js";
import "./StyleDefinition.4f77c81e.js";
import "./config.1337d16e.js";
import "./programUtils.7c03b904.js";
import "./NestedMap.1b5db22e.js";
import "./OrderIndependentTransparency.0d2f697c.js";
import "./basicInterfaces.b7051eb1.js";
import "./doublePrecisionUtils.e3c3d0d8.js";
import "./webgl-debug.ae38a7fa.js";
class h {
  constructor(t) {
    if (((this._ownsRctx = !1), t)) (this._ownsRctx = !1), (this._rctx = t);
    else {
      if (h._instance) return h._instanceRefCount++, h._instance;
      (h._instanceRefCount = 1), (h._instance = this), (this._ownsRctx = !0);
      const r = document.createElement("canvas").getContext("webgl");
      r.getExtension("OES_texture_float"), (this._rctx = new mt(r, {}));
    }
    const a = ct(
      "raster/reproject",
      "raster/reproject",
      new Map([["a_position", 0]]),
      {
        applyProjection: !0,
        bilinear: !1,
        bicubic: !1,
      }
    );
    (this._program = this._rctx.programCache.acquire(
      a.shaders.vertexShader,
      a.shaders.fragmentShader,
      a.attributes
    )),
      this._rctx.useProgram(this._program),
      this._program.setUniform1f("u_opacity", 1),
      this._program.setUniform1i("u_image", 0),
      this._program.setUniform1i("u_flipY", 0),
      this._program.setUniform1i("u_transformGrid", 1),
      (this._quad = new ht(this._rctx, [0, 0, 1, 0, 0, 1, 1, 1]));
  }
  reprojectTexture(t, a, r = !1) {
    const i = k(t.extent, a),
      s = new U({
        x: (t.extent.xmax - t.extent.xmin) / t.texture.descriptor.width,
        y: (t.extent.ymax - t.extent.ymin) / t.texture.descriptor.height,
        spatialReference: t.extent.spatialReference,
      }),
      { x: o, y: l } = lt(s, a, t.extent);
    let p = (o + l) / 2;
    const n = Math.round((i.xmax - i.xmin) / p),
      d = Math.round((i.ymax - i.ymin) / p);
    p = (i.width / n + i.height / d) / 2;
    const C = new U({ x: p, y: p, spatialReference: i.spatialReference }),
      w = pt({
        projectedExtent: i,
        srcBufferExtent: t.extent,
        pixelSize: C,
        hasWrapAround: !0,
        spacing: [16, 16],
      }),
      x = _t(this._rctx, w),
      u = new F(this._rctx, {
        width: n,
        height: d,
        pixelFormat: T.RGBA,
        dataType: E.UNSIGNED_BYTE,
        wrapMode: j.CLAMP_TO_EDGE,
        samplingMode: N.LINEAR,
        hasMipmap: !1,
      }),
      m = new ut(
        this._rctx,
        {
          colorTarget: dt.TEXTURE,
          depthStencilTarget: gt.NONE,
          width: n,
          height: d,
        },
        u
      );
    this._rctx.bindFramebuffer(m),
      this._rctx.setViewport(0, 0, n, d),
      this._rctx.useProgram(this._program),
      this._rctx.bindTexture(t.texture, 0),
      this._rctx.bindTexture(x, 1),
      this._quad.bind();
    const { width: y = 0, height: f = 0 } = t.texture.descriptor;
    if (
      (this._program.setUniform2f("u_srcImageSize", y, f),
      this._program.setUniform2fv("u_transformSpacing", w.spacing),
      this._program.setUniform2fv("u_transformGridSize", w.size),
      this._program.setUniform2f("u_targetImageSize", n, d),
      this._quad.draw(),
      this._quad.unbind(),
      this._rctx.useProgram(null),
      this._rctx.bindFramebuffer(null),
      x.dispose(),
      r)
    ) {
      const { width: _ = 0, height: c = 0 } = m.descriptor,
        b = new ImageData(_, c);
      return (
        m.readPixels(0, 0, _, c, T.RGBA, E.UNSIGNED_BYTE, b.data),
        m.detachColorTexture(B.COLOR_ATTACHMENT0),
        m.dispose(),
        { texture: u, extent: i, imageData: b }
      );
    }
    return (
      m.detachColorTexture(B.COLOR_ATTACHMENT0),
      m.dispose(),
      { texture: u, extent: i }
    );
  }
  reprojectBitmapData(t, a) {
    const r = it(t.bitmapData) ? at(t.bitmapData) : t.bitmapData,
      i = new F(
        this._rctx,
        {
          width: t.bitmapData.width,
          height: t.bitmapData.height,
          pixelFormat: T.RGBA,
          dataType: E.UNSIGNED_BYTE,
          wrapMode: j.CLAMP_TO_EDGE,
          samplingMode: N.LINEAR,
          hasMipmap: !1,
        },
        r
      ),
      s = this.reprojectTexture({ texture: i, extent: t.extent }, a, !0);
    s.texture.dispose();
    const o = document.createElement("canvas"),
      l = s.imageData;
    return (
      (o.width = l.width),
      (o.height = l.height),
      o.getContext("2d").putImageData(l, 0, 0),
      { bitmapData: o, extent: s.extent }
    );
  }
  async loadAndReprojectBitmapData(t, a, r) {
    const i = (await z(t, { responseType: "image" })).data,
      s = document.createElement("canvas");
    (s.width = i.width), (s.height = i.height);
    const o = s.getContext("2d");
    o.drawImage(i, 0, 0);
    const l = o.getImageData(0, 0, s.width, s.height);
    if (a.spatialReference.equals(r)) return { bitmapData: l, extent: a };
    const p = this.reprojectBitmapData({ bitmapData: l, extent: a }, r);
    return { bitmapData: p.bitmapData, extent: p.extent };
  }
  destroy() {
    this._ownsRctx
      ? (h._instanceRefCount--,
        h._instanceRefCount === 0 &&
          (this._quad.dispose(),
          this._program.dispose(),
          this._rctx.dispose(),
          (h._instance = null)))
      : (this._quad.dispose(), this._program.dispose());
  }
}
h._instanceRefCount = 0;
class O {
  constructor() {
    (this.allSublayers = new Map()),
      (this.allPoints = []),
      (this.allPolylines = []),
      (this.allPolygons = []),
      (this.allMapImages = []);
  }
}
let g = class extends ot(nt) {
  constructor() {
    super(...arguments),
      (this._bitmapIndex = new Map()),
      (this._mapImageContainer = new rt()),
      (this._kmlVisualData = new O()),
      (this._fetchController = null),
      (this.allVisiblePoints = new I()),
      (this.allVisiblePolylines = new I()),
      (this.allVisiblePolygons = new I()),
      (this.allVisibleMapImages = new H());
  }
  async hitTest(e, t) {
    var r, i, s;
    const a = this.layer;
    return [
      (r = this._pointsView) == null ? void 0 : r.hitTest(e),
      (i = this._polylinesView) == null ? void 0 : i.hitTest(e),
      (s = this._polygonsView) == null ? void 0 : s.hitTest(e),
    ]
      .flat()
      .filter(Boolean)
      .map(
        (o) => (
          (o.layer = a),
          (o.sourceLayer = a),
          { type: "graphic", graphic: o, layer: a, mapPoint: e }
        )
      );
  }
  update(e) {
    this._polygonsView && this._polygonsView.processUpdate(e),
      this._polylinesView && this._polylinesView.processUpdate(e),
      this._pointsView && this._pointsView.processUpdate(e);
  }
  attach() {
    (this._fetchController = new AbortController()),
      this.container.addChild(this._mapImageContainer),
      (this._polygonsView = new M({
        view: this.view,
        graphics: this.allVisiblePolygons,
        requestUpdateCallback: () => this.requestUpdate(),
        container: new P(this.view.featuresTilingScheme),
      })),
      this.container.addChild(this._polygonsView.container),
      (this._polylinesView = new M({
        view: this.view,
        graphics: this.allVisiblePolylines,
        requestUpdateCallback: () => this.requestUpdate(),
        container: new P(this.view.featuresTilingScheme),
      })),
      this.container.addChild(this._polylinesView.container),
      (this._pointsView = new M({
        view: this.view,
        graphics: this.allVisiblePoints,
        requestUpdateCallback: () => this.requestUpdate(),
        container: new P(this.view.featuresTilingScheme),
      })),
      this.container.addChild(this._pointsView.container),
      this.addAttachHandles([
        this.allVisibleMapImages.on("change", (e) => {
          e.added.forEach((t) => this._addMapImage(t)),
            e.removed.forEach((t) => this._removeMapImage(t));
        }),
        Y(
          () => this.layer.visibleSublayers,
          (e) => {
            for (const [t, a] of this._kmlVisualData.allSublayers)
              a.visibility = 0;
            for (const t of e) {
              const a = this._kmlVisualData.allSublayers.get(t.id);
              a && (a.visibility = 1);
            }
            this._refreshCollections();
          }
        ),
      ]),
      this.updatingHandles.addPromise(
        this._fetchService(this._fetchController.signal)
      ),
      (this._imageReprojector = new h());
  }
  detach() {
    (this._fetchController = K(this._fetchController)),
      this._mapImageContainer.removeAllChildren(),
      this.container.removeAllChildren(),
      this._bitmapIndex.clear(),
      (this._polygonsView = v(this._polygonsView)),
      (this._polylinesView = v(this._polylinesView)),
      (this._pointsView = v(this._pointsView)),
      (this._imageReprojector = v(this._imageReprojector));
  }
  moveStart() {}
  viewChange() {
    this._polygonsView.viewChange(),
      this._polylinesView.viewChange(),
      this._pointsView.viewChange();
  }
  moveEnd() {}
  isUpdating() {
    return (
      this._pointsView.updating ||
      this._polygonsView.updating ||
      this._polylinesView.updating
    );
  }
  _addMapImage(e) {
    var t, a;
    (((t = this.view.spatialReference) != null && t.isWGS84) ||
      ((a = this.view.spatialReference) != null && a.isWebMercator)) &&
      this._imageReprojector
        .loadAndReprojectBitmapData(
          e.href,
          L.fromJSON(e.extent),
          this.view.spatialReference
        )
        .then((r) => {
          const i = new st(r.bitmapData, {
            immutable: !1,
            requestRenderOnSourceChangedEnabled: !0,
          });
          (i.x = r.extent.xmin),
            (i.y = r.extent.ymax),
            (i.resolution = r.extent.width / r.bitmapData.width),
            (i.rotation = e.rotation),
            this._mapImageContainer.addChild(i),
            this._bitmapIndex.set(e, i);
        });
  }
  async _getViewDependentUrl(e, t) {
    const { viewFormat: a, viewBoundScale: r, httpQuery: i } = e;
    if (D(a)) {
      if (J(t))
        throw new Error("Loading this network link requires a view state.");
      let s;
      if ((await $(), D(r) && r !== 1)) {
        const c = new L(t.extent);
        c.expand(r), (s = c);
      } else s = t.extent;
      s = k(s, q.WGS84);
      const o = k(s, q.WebMercator),
        l = s.xmin,
        p = s.xmax,
        n = s.ymin,
        d = s.ymax,
        C = t.size[0] * t.pixelRatio,
        w = t.size[1] * t.pixelRatio,
        x = Math.max(o.width, o.height),
        u = {
          "[bboxWest]": l.toString(),
          "[bboxEast]": p.toString(),
          "[bboxSouth]": n.toString(),
          "[bboxNorth]": d.toString(),
          "[lookatLon]": s.center.x.toString(),
          "[lookatLat]": s.center.y.toString(),
          "[lookatRange]": x.toString(),
          "[lookatTilt]": "0",
          "[lookatHeading]": t.rotation.toString(),
          "[lookatTerrainLon]": s.center.x.toString(),
          "[lookatTerrainLat]": s.center.y.toString(),
          "[lookatTerrainAlt]": "0",
          "[cameraLon]": s.center.x.toString(),
          "[cameraLat]": s.center.y.toString(),
          "[cameraAlt]": x.toString(),
          "[horizFov]": "60",
          "[vertFov]": "60",
          "[horizPixels]": C.toString(),
          "[vertPixels]": w.toString(),
          "[terrainEnabled]": "0",
          "[clientVersion]": Q,
          "[kmlVersion]": "2.2",
          "[clientName]": "ArcGIS API for JavaScript",
          "[language]": "en-US",
        },
        m = (c) => {
          for (const b in c) for (const A in u) c[b] = c[b].replace(A, u[A]);
        },
        y = G(a);
      m(y);
      let f = {};
      D(i) && ((f = G(i)), m(f));
      const _ = X(e.href);
      return (_.query = { ..._.query, ...y, ...f }), `${_.path}?${Z(y)}`;
    }
    return e.href;
  }
  async _fetchService(e) {
    const t = new O();
    await this._loadVisualData(this.layer.url, t, e),
      (this._kmlVisualData = t),
      this._refreshCollections();
  }
  _refreshCollections() {
    this.allVisiblePoints.removeAll(),
      this.allVisiblePolylines.removeAll(),
      this.allVisiblePolygons.removeAll(),
      this.allVisibleMapImages.removeAll(),
      this.allVisiblePoints.addMany(
        this._kmlVisualData.allPoints
          .filter((e) => this._isSublayerVisible(e.sublayerId))
          .map(({ item: e }) => e)
      ),
      this.allVisiblePolylines.addMany(
        this._kmlVisualData.allPolylines
          .filter((e) => this._isSublayerVisible(e.sublayerId))
          .map(({ item: e }) => e)
      ),
      this.allVisiblePolygons.addMany(
        this._kmlVisualData.allPolygons
          .filter((e) => this._isSublayerVisible(e.sublayerId))
          .map(({ item: e }) => e)
      ),
      this.allVisibleMapImages.addMany(
        this._kmlVisualData.allMapImages
          .filter((e) => this._isSublayerVisible(e.sublayerId))
          .map(({ item: e }) => e)
      );
  }
  _isSublayerVisible(e) {
    const t = this._kmlVisualData.allSublayers.get(e);
    return (
      !!(t != null && t.visibility) &&
      (t.parentFolderId === -1 || this._isSublayerVisible(t.parentFolderId))
    );
  }
  _loadVisualData(e, t, a) {
    return this._fetchParsedKML(e, a).then(async (r) => {
      for (const i of r.sublayers) {
        t.allSublayers.set(i.id, i);
        const s = i.points ? await R(i.points) : [],
          o = i.polylines ? await R(i.polylines) : [],
          l = i.polygons ? await R(i.polygons) : [],
          p = i.mapImages || [];
        if (
          (t.allPoints.push(...s.map((n) => ({ item: n, sublayerId: i.id }))),
          t.allPolylines.push(...o.map((n) => ({ item: n, sublayerId: i.id }))),
          t.allPolygons.push(...l.map((n) => ({ item: n, sublayerId: i.id }))),
          t.allMapImages.push(...p.map((n) => ({ item: n, sublayerId: i.id }))),
          i.networkLink)
        ) {
          const n = await this._getViewDependentUrl(
            i.networkLink,
            this.view.state
          );
          await this._loadVisualData(n, t, a);
        }
      }
    });
  }
  _fetchParsedKML(e, t) {
    return tt(
      e,
      this.layer.spatialReference,
      this.layer.refreshInterval,
      t
    ).then((a) => et(a.data));
  }
  _removeMapImage(e) {
    const t = this._bitmapIndex.get(e);
    t && (this._mapImageContainer.removeChild(t), this._bitmapIndex.delete(e));
  }
};
V([S()], g.prototype, "_pointsView", void 0),
  V([S()], g.prototype, "_polylinesView", void 0),
  V([S()], g.prototype, "_polygonsView", void 0),
  V([S()], g.prototype, "updating", void 0),
  (g = V([W("esri.views.2d.layers.KMLLayerView2D")], g));
const Pe = g;
export { Pe as default };
