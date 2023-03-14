import {
  a8 as w,
  a9 as y,
  aa as I,
  ab as V,
  G as v,
  ac as H,
  j as o,
  ad as c,
  Q as T,
  ae as l,
  af as g,
  ag as q,
} from "./index.8fd7165c.js";
import "./MagnifierPrograms.353c7e27.js";
import "./Container.a5892366.js";
import "./BufferPool.8dc92598.js";
import "./color.4c5303e9.js";
import "./WGLContainer.e7ddd41d.js";
import "./enums.64ab819c.js";
import "./Texture.fb0c670a.js";
import "./ProgramTemplate.4bbf0f5e.js";
import "./MaterialKey.97cb3dc8.js";
import "./utils.1f803f1b.js";
import "./VertexArrayObject.1b8f3583.js";
import "./StyleDefinition.4f77c81e.js";
import "./enums.fb086c25.js";
import "./OrderIndependentTransparency.0d2f697c.js";
import "./floatRGBA.6f2fa7cd.js";
import "./webgl-debug.ae38a7fa.js";
import { a as U } from "./GraphicsView2D.5baab708.js";
import "./AttributeStoreView.413dc93f.js";
import "./earcut.9f54f087.js";
import "./vec3f32.5805ce90.js";
import { t as Q, o as f, n as d } from "./imageUtils.17897e2a.js";
import { f as b, u as S } from "./LayerView.d8517e2e.js";
import { n as C } from "./HighlightGraphicContainer.d7cd2ad9.js";
import { i as k } from "./RefreshableLayerView.d05f575e.js";
import { P as F, S as G, a as P } from "./drapedUtils.51ec0328.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./_commonjsHelpers.2f3e7994.js";
import "./ExpandedCIM.e22c8b13.js";
import "./BidiEngine.520adad3.js";
import "./GeometryUtils.874f8cf4.js";
import "./enums.13513a14.js";
import "./definitions.ce677f69.js";
import "./Rect.6884a4ea.js";
import "./quantizationUtils.1e9e702d.js";
import "./rasterizingUtils.3a0dd398.js";
import "./GeometryUtils.82ab0a13.js";
import "./imageutils.463df5ec.js";
import "./Matcher.fe3c9df5.js";
import "./visualVariablesUtils.1183f3fb.js";
import "./visualVariablesUtils.de38be9a.js";
import "./tileUtils.c2f19f52.js";
import "./TurboLine.2982dc8d.js";
import "./devEnvironmentUtils.4eab2a99.js";
import "./CircularArray.6cd6ba2b.js";
import "./ComputedAttributeStorage.396dbaf7.js";
import "./arcadeTimeUtils.e79f2f70.js";
import "./executionError.fb3f283a.js";
import "./centroid.e6a939c1.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./config.1337d16e.js";
import "./basicInterfaces.b7051eb1.js";
import "./normalizeUtilsSync.1ac6b009.js";
import "./projectionSupport.4aeb802f.js";
import "./json.495fc412.js";
import "./schemaUtils.264ba82d.js";
import "./util.79a0d0b9.js";
import "./TiledDisplayObject.3b82e169.js";
import "./BitmapTileContainer.9704c56c.js";
import "./Bitmap.cb464f5e.js";
import "./TileContainer.4bfeb0d8.js";
import "./BaseGraphicContainer.5e700f86.js";
import "./FeatureContainer.3aa1973d.js";
import "./scaleUtils.54369baa.js";
import "./floorFilterUtils.08225a6d.js";
import "./sublayerUtils.aa8d3bb7.js";
import "./popupUtils.4682c28c.js";
const R = [0, 0];
let h = class extends k(Q(b(S))) {
  constructor() {
    super(...arguments),
      (this._fetchQueue = null),
      (this._highlightGraphics = new w()),
      (this._highlightView = null),
      (this._popupHighlightHelper = null),
      (this._tileStrategy = null),
      (this.layer = null);
  }
  get resampling() {
    return !("resampling" in this.layer) || this.layer.resampling !== !1;
  }
  update(t) {
    var e;
    this._fetchQueue.pause(),
      (this._fetchQueue.state = t.state),
      this._tileStrategy.update(t),
      this._fetchQueue.resume(),
      (e = this._highlightView) == null || e.processUpdate(t);
  }
  attach() {
    const t = "tileServers" in this.layer ? this.layer.tileServers : null;
    if (
      ((this._tileInfoView = new y(this.layer.tileInfo, this.layer.fullExtent)),
      (this._fetchQueue = new I({
        tileInfoView: this._tileInfoView,
        concurrency: (t && 10 * t.length) || 10,
        process: (e, i) => this.fetchTile(e, i),
      })),
      (this._tileStrategy = new V({
        cachePolicy: "keep",
        resampling: this.resampling,
        acquireTile: (e) => this.acquireTile(e),
        releaseTile: (e) => this.releaseTile(e),
        tileInfoView: this._tileInfoView,
      })),
      F(this, this.layer))
    ) {
      const e = (this._highlightView = new U({
        view: this.view,
        graphics: this._highlightGraphics,
        requestUpdateCallback: () => this.requestUpdate(),
        container: new C(this.view.featuresTilingScheme),
        defaultPointSymbolEnabled: !1,
      }));
      this.container.addChild(this._highlightView.container),
        (this._popupHighlightHelper = new G({
          createFetchPopupFeaturesQueryGeometry: (i, r) => P(i, r, this.view),
          highlightGraphics: this._highlightGraphics,
          highlightGraphicUpdated: (i, r) => {
            e.graphicUpdateHandler({ graphic: i, property: r });
          },
          layerView: this,
          updatingHandles: this.updatingHandles,
        }));
    }
    this.requestUpdate(),
      this.addAttachHandles(
        v(
          () => this.resampling,
          () => {
            this.doRefresh();
          }
        )
      ),
      super.attach();
  }
  detach() {
    var t;
    super.detach(),
      this._tileStrategy.destroy(),
      this._fetchQueue.clear(),
      this.container.removeAllChildren(),
      (t = this._popupHighlightHelper) == null || t.destroy(),
      (this._fetchQueue =
        this._tileStrategy =
        this._tileInfoView =
        this._popupHighlightHelper =
          null);
  }
  async fetchPopupFeatures(t, e) {
    return this._popupHighlightHelper
      ? this._popupHighlightHelper.fetchPopupFeatures(t, e)
      : [];
  }
  highlight(t) {
    return this._popupHighlightHelper
      ? this._popupHighlightHelper.highlight(t)
      : { remove() {} };
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(t) {
    var e;
    return H(
      (e = this.layer.tileInfo) == null ? void 0 : e.spatialReference,
      t
    );
  }
  async doRefresh() {
    !this.attached ||
      this.updateRequested ||
      this.suspended ||
      (this._fetchQueue.reset(),
      this._tileStrategy.tiles.forEach((t) => this._enqueueTileFetch(t)));
  }
  isUpdating() {
    var t;
    return ((t = this._fetchQueue) == null ? void 0 : t.updating) ?? !1;
  }
  acquireTile(t) {
    const e = this._bitmapView.createTile(t),
      i = e.bitmap;
    return (
      ([i.x, i.y] = this._tileInfoView.getTileCoords(R, e.key)),
      (i.resolution = this._tileInfoView.getTileResolution(e.key)),
      ([i.width, i.height] = this._tileInfoView.tileInfo.size),
      this._enqueueTileFetch(e),
      this._bitmapView.addChild(e),
      this.requestUpdate(),
      e
    );
  }
  releaseTile(t) {
    this._fetchQueue.abort(t.key.id),
      this._bitmapView.removeChild(t),
      t.once("detach", () => t.destroy()),
      this.requestUpdate();
  }
  async fetchTile(t, e = {}) {
    const i = "tilemapCache" in this.layer ? this.layer.tilemapCache : null,
      { signal: r, resamplingLevel: n = 0 } = e;
    if (!i)
      try {
        return await this._fetchImage(t, r);
      } catch (s) {
        if (!o(s) && !this.resampling)
          return f(this._tileInfoView.tileInfo.size);
        if (n < 3) {
          const m = this._tileInfoView.getTileParentId(t.id);
          if (m) {
            const u = new c(m),
              _ = await this.fetchTile(u, { ...e, resamplingLevel: n + 1 });
            return d(this._tileInfoView, _, u, t);
          }
        }
        throw s;
      }
    const a = new c(0, 0, 0, 0);
    let p;
    try {
      if (
        (await i.fetchAvailabilityUpsample(t.level, t.row, t.col, a, {
          signal: r,
        }),
        a.level !== t.level && !this.resampling)
      )
        return f(this._tileInfoView.tileInfo.size);
      p = await this._fetchImage(a, r);
    } catch (s) {
      if (o(s)) throw s;
      p = await this._fetchImage(t, r);
    }
    return this.resampling ? d(this._tileInfoView, p, a, t) : p;
  }
  async _enqueueTileFetch(t) {
    if (!this._fetchQueue.has(t.key.id)) {
      try {
        const e = await this._fetchQueue.push(t.key);
        (t.bitmap.source = e),
          (t.bitmap.width = this._tileInfoView.tileInfo.size[0]),
          (t.bitmap.height = this._tileInfoView.tileInfo.size[1]),
          t.once("attach", () => this.requestUpdate());
      } catch (e) {
        o(e) || T.getLogger(this.declaredClass).error(e);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(t, e) {
    return this.layer.fetchImageBitmapTile(t.level, t.row, t.col, {
      signal: e,
    });
  }
};
l([g()], h.prototype, "_fetchQueue", void 0),
  l([g()], h.prototype, "resampling", null),
  (h = l([q("esri.views.2d.layers.TileLayerView2D")], h));
const ee = h;
export { ee as default };
