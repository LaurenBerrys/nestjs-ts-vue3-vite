import {
  ae as r,
  af as o,
  au as g,
  ag as m,
  a8 as l,
  j as d,
  Q as u,
  G as c,
} from "./index.8fd7165c.js";
import { a as y } from "./BitmapContainer.ba60edd5.js";
import { f, u as x } from "./LayerView.d8517e2e.js";
import { a as v } from "./GraphicsView2D.5baab708.js";
import { n as w } from "./HighlightGraphicContainer.d7cd2ad9.js";
import { v as _ } from "./ExportStrategy.80d09bab.js";
import { c as H } from "./ExportImageParameters.3d3cda78.js";
import { i as I } from "./RefreshableLayerView.d05f575e.js";
import { S as V, a as P } from "./drapedUtils.51ec0328.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./WGLContainer.e7ddd41d.js";
import "./definitions.ce677f69.js";
import "./VertexArrayObject.1b8f3583.js";
import "./Texture.fb0c670a.js";
import "./enums.64ab819c.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./color.4c5303e9.js";
import "./enums.13513a14.js";
import "./ProgramTemplate.4bbf0f5e.js";
import "./MaterialKey.97cb3dc8.js";
import "./utils.1f803f1b.js";
import "./StyleDefinition.4f77c81e.js";
import "./config.1337d16e.js";
import "./GeometryUtils.82ab0a13.js";
import "./Container.a5892366.js";
import "./earcut.9f54f087.js";
import "./ExpandedCIM.e22c8b13.js";
import "./BidiEngine.520adad3.js";
import "./GeometryUtils.874f8cf4.js";
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
import "./devEnvironmentUtils.4eab2a99.js";
import "./schemaUtils.264ba82d.js";
import "./util.79a0d0b9.js";
import "./ComputedAttributeStorage.396dbaf7.js";
import "./arcadeTimeUtils.e79f2f70.js";
import "./executionError.fb3f283a.js";
import "./centroid.e6a939c1.js";
import "./BaseGraphicContainer.5e700f86.js";
import "./FeatureContainer.3aa1973d.js";
import "./TileContainer.4bfeb0d8.js";
import "./vec3f32.5805ce90.js";
import "./Bitmap.cb464f5e.js";
import "./floorFilterUtils.08225a6d.js";
import "./sublayerUtils.aa8d3bb7.js";
import "./scaleUtils.54369baa.js";
import "./popupUtils.4682c28c.js";
const U = (t) => {
  let e = class extends t {
    initialize() {
      this.exportImageParameters = new H({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters.destroy(), (this.exportImageParameters = null);
    }
    get floors() {
      var i;
      return ((i = this.view) == null ? void 0 : i.floors) ?? null;
    }
    get exportImageVersion() {
      var i;
      return (
        (i = this.exportImageParameters) == null || i.commitProperty("version"),
        this.commitProperty("timeExtent"),
        this.commitProperty("floors"),
        (this._get("exportImageVersion") || 0) + 1
      );
    }
    canResume() {
      var i;
      return (
        !!super.canResume() && !((i = this.timeExtent) != null && i.isEmpty)
      );
    }
  };
  return (
    r([o()], e.prototype, "exportImageParameters", void 0),
    r([o({ readOnly: !0 })], e.prototype, "floors", null),
    r([o({ readOnly: !0 })], e.prototype, "exportImageVersion", null),
    r([o()], e.prototype, "layer", void 0),
    r([o()], e.prototype, "suspended", void 0),
    r([o(g)], e.prototype, "timeExtent", void 0),
    (e = r([m("esri.views.layers.MapImageLayerView")], e)),
    e
  );
};
let s = class extends U(I(f(x))) {
  constructor() {
    super(...arguments),
      (this._highlightGraphics = new l()),
      (this._updateHash = "");
  }
  fetchPopupFeatures(t, e) {
    return this._popupHighlightHelper.fetchPopupFeatures(t, e);
  }
  update(t) {
    const e = `${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;
    this._updateHash !== e &&
      ((this._updateHash = e),
      this.strategy.update(t).catch((i) => {
        d(i) || u.getLogger(this.declaredClass).error(i);
      }),
      t.stationary &&
        this._popupHighlightHelper.updateHighlightedFeatures(
          t.state.resolution
        )),
      this._highlightView.processUpdate(t);
  }
  attach() {
    const { imageMaxWidth: t, imageMaxHeight: e, version: i } = this.layer,
      a = i >= 10.3,
      n = i >= 10;
    (this._bitmapContainer = new y()),
      this.container.addChild(this._bitmapContainer),
      (this._highlightView = new v({
        view: this.view,
        graphics: this._highlightGraphics,
        requestUpdateCallback: () => this.requestUpdate(),
        container: new w(this.view.featuresTilingScheme),
        defaultPointSymbolEnabled: !1,
      })),
      this.container.addChild(this._highlightView.container),
      (this._popupHighlightHelper = new V({
        createFetchPopupFeaturesQueryGeometry: (p, h) => P(p, h, this.view),
        highlightGraphics: this._highlightGraphics,
        highlightGraphicUpdated: (p, h) => {
          this._highlightView.graphicUpdateHandler({ graphic: p, property: h });
        },
        layerView: this,
        updatingHandles: this.updatingHandles,
      })),
      (this.strategy = new _({
        container: this._bitmapContainer,
        fetchSource: this.fetchImageBitmap.bind(this),
        requestUpdate: this.requestUpdate.bind(this),
        imageMaxWidth: t,
        imageMaxHeight: e,
        imageRotationSupported: a,
        imageNormalizationSupported: n,
        hidpi: !0,
      })),
      this.addAttachHandles(
        c(
          () => this.exportImageVersion,
          () => this.requestUpdate()
        )
      ),
      this.requestUpdate();
  }
  detach() {
    this.strategy.destroy(),
      this.container.removeAllChildren(),
      this._bitmapContainer.removeAllChildren(),
      this._highlightView.destroy(),
      this._popupHighlightHelper.destroy();
  }
  moveStart() {}
  viewChange() {}
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(t) {
    return this.layer.serviceSupportsSpatialReference(t);
  }
  async doRefresh() {
    (this._updateHash = ""), this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(t, e, i, a) {
    return this.layer.fetchImage(t, e, i, {
      timeExtent: this.timeExtent,
      floors: this.floors,
      ...a,
    });
  }
  fetchImageBitmap(t, e, i, a) {
    return this.layer.fetchImageBitmap(t, e, i, {
      timeExtent: this.timeExtent,
      floors: this.floors,
      ...a,
    });
  }
  highlight(t) {
    return this._popupHighlightHelper.highlight(t);
  }
};
r([o()], s.prototype, "strategy", void 0),
  r([o()], s.prototype, "updating", void 0),
  (s = r([m("esri.views.2d.layers.MapImageLayerView2D")], s));
const At = s;
export { At as default };
