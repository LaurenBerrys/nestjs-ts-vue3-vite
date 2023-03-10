import {
  ae as s,
  af as o,
  ag as f,
  ap as k,
  j as P,
  Q as R,
  al as b,
  r as _,
  aq as C,
  ar as F,
  t as V,
  as as U,
  q as M,
  G as x,
  at as E,
  U as O,
  au as N,
  s as S,
  av as $,
  R as q,
  a8 as j,
  an as T,
  P as B,
} from "./index.8fd7165c.js";
import { m as J, y as G, h as L } from "./RasterVFDisplayObject.87750a62.js";
import { f as H, u as W } from "./LayerView.d8517e2e.js";
import { a as Q } from "./GraphicsView2D.5baab708.js";
import { n as K } from "./HighlightGraphicContainer.d7cd2ad9.js";
import { T as X, x as Y, d as Z } from "./dataUtils.e77088c3.js";
import { a as tt } from "./BitmapContainer.ba60edd5.js";
import { h as et } from "./Container.a5892366.js";
import { l as it } from "./Bitmap.cb464f5e.js";
import { v as rt } from "./ExportStrategy.80d09bab.js";
import { J as at } from "./rasterProjectionHelper.fde7641d.js";
import { T as D } from "./color.4c5303e9.js";
import { b as st } from "./WGLContainer.e7ddd41d.js";
import { s as ot } from "./popupUtils.4682c28c.js";
import { i as nt } from "./RefreshableLayerView.d05f575e.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./VertexArrayObject.1b8f3583.js";
import "./Texture.fb0c670a.js";
import "./enums.64ab819c.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./ExpandedCIM.e22c8b13.js";
import "./BidiEngine.520adad3.js";
import "./GeometryUtils.874f8cf4.js";
import "./enums.13513a14.js";
import "./MaterialKey.97cb3dc8.js";
import "./definitions.ce677f69.js";
import "./Rect.6884a4ea.js";
import "./quantizationUtils.1e9e702d.js";
import "./floatRGBA.6f2fa7cd.js";
import "./normalizeUtilsSync.1ac6b009.js";
import "./projectionSupport.4aeb802f.js";
import "./json.495fc412.js";
import "./AttributeStoreView.413dc93f.js";
import "./TiledDisplayObject.3b82e169.js";
import "./visualVariablesUtils.1183f3fb.js";
import "./visualVariablesUtils.de38be9a.js";
import "./Matcher.fe3c9df5.js";
import "./tileUtils.c2f19f52.js";
import "./TurboLine.2982dc8d.js";
import "./GeometryUtils.82ab0a13.js";
import "./earcut.9f54f087.js";
import "./devEnvironmentUtils.4eab2a99.js";
import "./schemaUtils.264ba82d.js";
import "./utils.1f803f1b.js";
import "./util.79a0d0b9.js";
import "./ComputedAttributeStorage.396dbaf7.js";
import "./arcadeTimeUtils.e79f2f70.js";
import "./executionError.fb3f283a.js";
import "./centroid.e6a939c1.js";
import "./BaseGraphicContainer.5e700f86.js";
import "./FeatureContainer.3aa1973d.js";
import "./TileContainer.4bfeb0d8.js";
import "./vec3f32.5805ce90.js";
import "./ProgramTemplate.4bbf0f5e.js";
import "./StyleDefinition.4f77c81e.js";
import "./config.1337d16e.js";
let h = class extends k {
  constructor() {
    super(...arguments),
      (this.attached = !1),
      (this.container = new et()),
      (this.updateRequested = !1),
      (this.type = "imagery"),
      (this._bitmapView = new tt());
  }
  destroy() {
    this.attached && (this.detach(), (this.attached = !1)),
      (this.updateRequested = !1);
  }
  get updating() {
    return !this.attached || this.isUpdating();
  }
  update(t) {
    this.strategy.update(t).catch((e) => {
      P(e) || R.getLogger(this.declaredClass).error(e);
    });
  }
  hitTest(t) {
    return new b({ attributes: {}, geometry: t.clone(), layer: this.layer });
  }
  attach() {
    this.container.addChild(this._bitmapView);
    const t = this.layer.version >= 10,
      e = this.layer.version >= 10.1 ? this.layer.imageMaxHeight : 2048,
      i = this.layer.version >= 10.1 ? this.layer.imageMaxWidth : 2048;
    this.strategy = new rt({
      container: this._bitmapView,
      imageNormalizationSupported: t,
      imageMaxHeight: e,
      imageMaxWidth: i,
      fetchSource: this._fetchImage.bind(this),
      requestUpdate: () => this.requestUpdate(),
    });
  }
  detach() {
    this.strategy.destroy(),
      this._bitmapView.removeAllChildren(),
      this.container.removeAllChildren(),
      (this.updateRequested = !1);
  }
  redraw() {
    this.strategy
      .updateExports(async (t) => {
        const { source: e } = t;
        if (!e || e instanceof ImageBitmap) return;
        const i = await this.layer.applyRenderer({
          extent: e.extent,
          pixelBlock: e.originalPixelBlock ?? e.pixelBlock,
        });
        e.filter = (r) =>
          this.layer.pixelFilter
            ? this.layer.applyFilter(r)
            : { ...i, extent: e.extent };
      })
      .catch((t) => {
        P(t) || R.getLogger(this.declaredClass).error(t);
      });
  }
  requestUpdate() {
    this.updateRequested ||
      ((this.updateRequested = !0), this.view.requestUpdate());
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  getPixelData() {
    if (this.updating) return null;
    const t = this.strategy.bitmaps;
    if (t.length === 1 && t[0].source)
      return {
        extent: t[0].source.extent,
        pixelBlock: t[0].source.originalPixelBlock,
      };
    if (t.length > 1) {
      const e = this.view.extent,
        i = t
          .map((a) => a.source)
          .filter((a) => a.extent && a.extent.intersects(e))
          .map((a) => ({ extent: a.extent, pixelBlock: a.originalPixelBlock })),
        r = X(i, e);
      return _(r) ? { extent: r.extent, pixelBlock: r.pixelBlock } : null;
    }
    return null;
  }
  async _fetchImage(t, e, i, r) {
    var d;
    ((r = r || {}).timeExtent = this.timeExtent),
      (r.requestAsImageElement = !0),
      (r.returnImageBitmap = !0);
    const a = await this.layer.fetchImage(t, e, i, r);
    if (a.imageBitmap) return a.imageBitmap;
    const n = await this.layer.applyRenderer(a.pixelData, { signal: r.signal }),
      l = new it(
        n.pixelBlock,
        (d = n.extent) == null ? void 0 : d.clone(),
        a.pixelData.pixelBlock
      );
    return (l.filter = (p) => this.layer.applyFilter(p)), l;
  }
};
s([o()], h.prototype, "attached", void 0),
  s([o()], h.prototype, "container", void 0),
  s([o()], h.prototype, "layer", void 0),
  s([o()], h.prototype, "strategy", void 0),
  s([o()], h.prototype, "timeExtent", void 0),
  s([o()], h.prototype, "view", void 0),
  s([o()], h.prototype, "updateRequested", void 0),
  s([o()], h.prototype, "updating", null),
  s([o()], h.prototype, "type", void 0),
  (h = s([f("esri.views.2d.layers.imagery.ImageryView2D")], h));
const lt = h;
class ht extends st {
  constructor() {
    super(...arguments), (this.symbolTypes = ["triangle"]);
  }
  get requiresDedicatedFBO() {
    return !1;
  }
  prepareRenderPasses(e) {
    const i = e.registerRenderPass({
      name: "imagery (vf)",
      brushes: [J],
      target: () => this.children,
      drawPhase: D.MAP,
    });
    return [...super.prepareRenderPasses(e), i];
  }
  doRender(e) {
    this.visible &&
      e.drawPhase === D.MAP &&
      this.symbolTypes.forEach((i) => {
        (e.renderPass = i), super.doRender(e);
      });
  }
}
let y = class extends k {
  constructor(t) {
    super(t),
      (this._loading = null),
      (this.update = C((e, i) =>
        this._update(e, i).catch((r) => {
          P(r) || R.getLogger(this.declaredClass).error(r);
        })
      ));
  }
  get updating() {
    return !!this._loading;
  }
  redraw(t) {
    if (!this.container.children.length) return;
    const e = this.container.children[0];
    (e.symbolizerParameters = t),
      e.invalidateVAO(),
      (this.container.symbolTypes =
        t.style === "wind_speed"
          ? ["scalar", "triangle"]
          : t.style === "simple_scalar"
          ? ["scalar"]
          : ["triangle"]),
      this.container.requestRender();
  }
  async _update(t, e, i) {
    if (!t.stationary) return;
    const { extent: r, spatialReference: a } = t.state,
      n = new F({
        xmin: r.xmin,
        ymin: r.ymin,
        xmax: r.xmax,
        ymax: r.ymax,
        spatialReference: a,
      }),
      [l, d] = t.state.size;
    this._loading = this.fetchPixels(n, l, d, i);
    const p = await this._loading;
    this._addToDisplay(p, e, t.state), (this._loading = null);
  }
  _addToDisplay(t, e, i) {
    if (V(t.pixelBlock))
      return (
        this.container.children.forEach((l) => l.destroy()),
        void this.container.removeAllChildren()
      );
    const { extent: r, pixelBlock: a } = t,
      n = new G(a);
    (n.offset = [0, 0]),
      (n.symbolizerParameters = e),
      (n.rawPixelData = t),
      n.invalidateVAO(),
      (n.x = r.xmin),
      (n.y = r.ymax),
      (n.pixelRatio = i.pixelRatio),
      (n.rotation = i.rotation),
      (n.resolution = i.resolution),
      (n.width = a.width * e.symbolTileSize),
      (n.height = a.height * e.symbolTileSize),
      this.container.children.forEach((l) => l.destroy()),
      this.container.removeAllChildren(),
      (this.container.symbolTypes =
        e.style === "wind_speed"
          ? ["scalar", "triangle"]
          : e.style === "simple_scalar"
          ? ["scalar"]
          : ["triangle"]),
      this.container.addChild(n);
  }
};
s([o()], y.prototype, "fetchPixels", void 0),
  s([o()], y.prototype, "container", void 0),
  s([o()], y.prototype, "_loading", void 0),
  s([o()], y.prototype, "updating", null),
  (y = s([f("esri.views.2d.layers.imagery.ImageryVFStrategy")], y));
const pt = y;
let c = class extends U {
  constructor() {
    super(...arguments),
      (this.attached = !1),
      (this.container = new ht()),
      (this.type = "imageryVF"),
      (this._dataParameters = {
        exportParametersVersion: 0,
        bbox: "",
        symbolTileSize: 0,
        time: "",
      }),
      (this._fetchpixels = async (t, e, i, r) => {
        const a = await this._projectFullExtentPromise,
          { symbolTileSize: n } = this.layer.renderer,
          { extent: l, width: d, height: p } = Y(t, e, i, n, a);
        if (_(a) && !a.intersects(t)) return { extent: l, pixelBlock: null };
        const m = {
          bbox: `${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,
          exportParametersVersion:
            this.layer.exportImageServiceParameters.version,
          symbolTileSize: n,
          time: JSON.stringify(this.timeExtent || ""),
        };
        if (this._canReuseVectorFieldData(m)) {
          const u = this.getPixelData();
          if (
            _(u) &&
            `${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}` ===
              m.bbox
          )
            return u;
        }
        const { pixelData: g } = await this.layer.fetchImage(l, d, p, {
          timeExtent: this.timeExtent,
          requestAsImageElement: !1,
          signal: r,
        });
        this._dataParameters = m;
        const w = g == null ? void 0 : g.pixelBlock;
        return V(w)
          ? { extent: l, pixelBlock: null }
          : {
              extent: l,
              pixelBlock:
                this.layer.rasterInfo.dataType === "vector-uv"
                  ? M(Z(w, "vector-uv"))
                  : w,
            };
      });
  }
  get updating() {
    return !this.attached || this._strategy.updating;
  }
  attach() {
    (this._projectFullExtentPromise = this._getProjectedFullExtent(
      this.view.spatialReference
    )),
      (this._strategy = new pt({
        container: this.container,
        fetchPixels: this._fetchpixels,
      })),
      this.handles.add(
        x(
          () => this.layer.renderer,
          (t) => this._updateSymbolizerParams(t),
          E
        ),
        "attach"
      );
  }
  detach() {
    this._strategy.destroy(),
      this.container.children.forEach((t) => t.destroy()),
      this.container.removeAllChildren(),
      this.handles.remove("attach"),
      (this._strategy = this.container = this._projectFullExtentPromise = null);
  }
  getPixelData() {
    var r;
    const t =
      (r = this.container.children[0]) == null ? void 0 : r.rawPixelData;
    if (this.updating || !t) return null;
    const { extent: e, pixelBlock: i } = t;
    return { extent: e, pixelBlock: i };
  }
  hitTest(t) {
    return new b({ attributes: {}, geometry: t.clone(), layer: this.layer });
  }
  update(t) {
    this._strategy.update(t, this._symbolizerParams);
  }
  redraw() {
    const { renderer: t } = this.layer;
    t &&
      (this._updateSymbolizerParams(t),
      this._strategy.redraw(this._symbolizerParams));
  }
  _canReuseVectorFieldData(t) {
    const e =
        this._dataParameters.exportParametersVersion ===
        t.exportParametersVersion,
      i = this._dataParameters.time === t.time,
      r = this._dataParameters.symbolTileSize === t.symbolTileSize,
      a = this._dataParameters.bbox === t.bbox;
    return e && i && r && a;
  }
  async _getProjectedFullExtent(t) {
    try {
      return await at(this.layer.fullExtent, t);
    } catch {
      try {
        const i = (
          await O(this.layer.url, {
            query: {
              option: "footprints",
              outSR: t.wkid || JSON.stringify(t.toJSON()),
              f: "json",
            },
          })
        ).data.featureCollection.layers[0].layerDefinition.extent;
        return i ? F.fromJSON(i) : null;
      } catch {
        return null;
      }
    }
  }
  _updateSymbolizerParams(t) {
    t.type === "vector-field" &&
      (this._symbolizerParams = this.layer.symbolizer.generateWebGLParameters({
        pixelBlock: null,
      }));
  }
};
s([o()], c.prototype, "attached", void 0),
  s([o()], c.prototype, "container", void 0),
  s([o()], c.prototype, "layer", void 0),
  s([o()], c.prototype, "timeExtent", void 0),
  s([o()], c.prototype, "type", void 0),
  s([o()], c.prototype, "view", void 0),
  s([o()], c.prototype, "updating", null),
  (c = s([f("esri.views.2d.layers.imagery.VectorFieldView2D")], c));
const ct = c,
  dt = (t) => {
    let e = class extends t {
      constructor() {
        super(...arguments), (this.view = null);
      }
      async fetchPopupFeatures(i, r) {
        const { layer: a } = this;
        if (!i)
          throw new S(
            "imagerylayerview:fetchPopupFeatures",
            "Nothing to fetch without area",
            {
              layer: a,
            }
          );
        const { popupEnabled: n } = a,
          l = ot(a, r);
        if (!n || V(l))
          throw new S(
            "imagerylayerview:fetchPopupFeatures",
            "Missing required popupTemplate or popupEnabled",
            { popupEnabled: n, popupTemplate: l }
          );
        const d = await l.getRequiredFields(),
          p = new $();
        (p.timeExtent = this.timeExtent),
          (p.geometry = i),
          (p.outFields = d),
          (p.outSpatialReference = i.spatialReference);
        const { resolution: m, spatialReference: g } = this.view,
          w =
            this.view.type === "2d"
              ? new q(m, m, g)
              : new q(0.5 * m, 0.5 * m, g),
          { returnTopmostRaster: u, showNoDataRecords: I } = l.layerOptions || {
            returnTopmostRaster: !0,
            showNoDataRecords: !1,
          },
          z = {
            returnDomainValues: !0,
            returnTopmostRaster: u,
            pixelSize: w,
            showNoDataRecords: I,
            signal: _(r) ? r.signal : null,
          };
        return a.queryVisibleRasters(p, z).then((A) => A);
      }
      canResume() {
        var i;
        return (
          !!super.canResume() && !((i = this.timeExtent) != null && i.isEmpty)
        );
      }
    };
    return (
      s([o()], e.prototype, "layer", void 0),
      s([o()], e.prototype, "suspended", void 0),
      s([o(N)], e.prototype, "timeExtent", void 0),
      s([o()], e.prototype, "view", void 0),
      (e = s([f("esri.views.layers.ImageryLayerView")], e)),
      e
    );
  };
let v = class extends dt(nt(H(W))) {
  constructor() {
    super(...arguments),
      (this._exportImageVersion = -1),
      (this._highlightGraphics = new j()),
      (this._highlightView = void 0),
      (this.layer = null),
      (this.subview = null);
  }
  get pixelData() {
    const { subview: t } = this;
    return this.updating || !t
      ? null
      : "getPixelData" in t
      ? t.getPixelData()
      : null;
  }
  async hitTest(t, e) {
    return this.subview
      ? [
          {
            type: "graphic",
            graphic: this.subview.hitTest(t),
            layer: this.layer,
            mapPoint: t,
          },
        ]
      : null;
  }
  update(t) {
    var e;
    (e = this.subview) == null || e.update(t);
  }
  attach() {
    this.layer.increaseRasterJobHandlerUsage(),
      this._setSubView(),
      this.view &&
        ((this._highlightView = new Q({
          view: this.view,
          graphics: this._highlightGraphics,
          requestUpdateCallback: () => this.requestUpdate(),
          container: new K(this.view.featuresTilingScheme),
        })),
        this.container.addChild(this._highlightView.container)),
      this.addAttachHandles([
        x(
          () => this.layer.blendMode ?? "normal",
          (t) => this.subview && (this.subview.container.blendMode = t),
          E
        ),
        x(
          () => this.layer.effect ?? null,
          (t) => this.subview && (this.subview.container.effect = t),
          E
        ),
        x(
          () => this.layer.exportImageServiceParameters.version,
          (t) => {
            t &&
              this._exportImageVersion !== t &&
              ((this._exportImageVersion = t), this.requestUpdate());
          },
          T
        ),
        x(
          () => this.timeExtent,
          (t) => {
            const { subview: e } = this;
            e &&
              ((e.timeExtent = t),
              "redraw" in e ? this.requestUpdate() : e.redrawOrRefetch());
          },
          T
        ),
        this.layer.on("redraw", () => {
          const { subview: t } = this;
          t && ("redraw" in t ? t.redraw() : t.redrawOrRefetch());
        }),
        x(
          () => this.layer.renderer,
          () => this._setSubView()
        ),
      ]);
  }
  detach() {
    var t, e;
    this.layer.decreaseRasterJobHandlerUsage(),
      this.container.removeAllChildren(),
      this._detachSubview(this.subview),
      (t = this.subview) == null || t.destroy(),
      (this.subview = null),
      (e = this._highlightView) == null || e.destroy(),
      (this._exportImageVersion = -1);
  }
  moveStart() {}
  viewChange() {}
  moveEnd() {
    this.requestUpdate();
  }
  highlight(t, e) {
    if (
      !(
        (Array.isArray(t)
          ? t[0]
          : B.isCollection(t)
          ? t.getItemAt(0)
          : t) instanceof b
      )
    )
      return { remove: () => {} };
    let i = [];
    return (
      Array.isArray(t) || B.isCollection(t)
        ? (i = t.map((r) => r.clone()))
        : t instanceof b && (i = [t.clone()]),
      this._highlightGraphics.addMany(i),
      {
        remove: () => {
          this._highlightGraphics.removeMany(i);
        },
      }
    );
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return !this.subview || this.subview.updating;
  }
  _setSubView() {
    var i, r;
    if (!this.view) return;
    const t = (i = this.layer.renderer) == null ? void 0 : i.type;
    let e = "imagery";
    if (
      (t === "vector-field" ? (e = "imageryVF") : t === "flow" && (e = "flow"),
      this.subview)
    ) {
      const { type: a } = this.subview;
      if (a === e)
        return (
          this._attachSubview(this.subview),
          void (a === "flow"
            ? this.subview.redrawOrRefetch()
            : a === "imagery" && this.layer.format === "lerc"
            ? this.subview.redraw()
            : this.requestUpdate())
        );
      this._detachSubview(this.subview),
        (r = this.subview) == null || r.destroy();
    }
    (this.subview =
      e === "imagery"
        ? new lt({
            layer: this.layer,
            view: this.view,
            timeExtent: this.timeExtent,
          })
        : e === "imageryVF"
        ? new ct({
            layer: this.layer,
            view: this.view,
            timeExtent: this.timeExtent,
          })
        : new L({ layer: this.layer, layerView: this })),
      this._attachSubview(this.subview),
      this.requestUpdate();
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
s([o()], v.prototype, "pixelData", null),
  s([o()], v.prototype, "subview", void 0),
  (v = s([f("esri.views.2d.layers.ImageryLayerView2D")], v));
const be = v;
export { be as default };
