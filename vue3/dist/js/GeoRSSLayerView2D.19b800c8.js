import {
  G as l,
  H as h,
  ah as g,
  P as w,
  ai as f,
  aj as u,
  ak as n,
  ae as d,
  ag as b,
} from "./index.8fd7165c.js";
import { f as S, u as V } from "./LayerView.d8517e2e.js";
import { i as _ } from "./GraphicContainer.7c4908c4.js";
import { a as T } from "./GraphicsView2D.5baab708.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./Container.a5892366.js";
import "./definitions.ce677f69.js";
import "./enums.64ab819c.js";
import "./Texture.fb0c670a.js";
import "./color.4c5303e9.js";
import "./enums.13513a14.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./BaseGraphicContainer.5e700f86.js";
import "./FeatureContainer.3aa1973d.js";
import "./AttributeStoreView.413dc93f.js";
import "./TiledDisplayObject.3b82e169.js";
import "./visualVariablesUtils.1183f3fb.js";
import "./visualVariablesUtils.de38be9a.js";
import "./VertexArrayObject.1b8f3583.js";
import "./TileContainer.4bfeb0d8.js";
import "./WGLContainer.e7ddd41d.js";
import "./ProgramTemplate.4bbf0f5e.js";
import "./MaterialKey.97cb3dc8.js";
import "./utils.1f803f1b.js";
import "./StyleDefinition.4f77c81e.js";
import "./config.1337d16e.js";
import "./GeometryUtils.82ab0a13.js";
import "./earcut.9f54f087.js";
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
import "./devEnvironmentUtils.4eab2a99.js";
import "./schemaUtils.264ba82d.js";
import "./util.79a0d0b9.js";
import "./ComputedAttributeStorage.396dbaf7.js";
import "./arcadeTimeUtils.e79f2f70.js";
import "./executionError.fb3f283a.js";
import "./centroid.e6a939c1.js";
let y = class extends S(V) {
  constructor() {
    super(...arguments),
      (this._graphicsViewMap = {}),
      (this._popupTemplates = new Map()),
      (this.graphicsViews = []);
  }
  async hitTest(i, r) {
    if (!this.graphicsViews.length) return null;
    const o = this.layer;
    return this.graphicsViews
      .reverse()
      .map((e) => {
        const t = this._popupTemplates.get(e),
          s = e.hitTest(i);
        for (const p of s)
          (p.layer = o), (p.sourceLayer = o), (p.popupTemplate = t);
        return s;
      })
      .flat()
      .map((e) => ({ type: "graphic", graphic: e, layer: o, mapPoint: i }));
  }
  update(i) {
    if (this.graphicsViews)
      for (const r of this.graphicsViews) r.processUpdate(i);
  }
  attach() {
    this.addAttachHandles([
      l(
        () => {
          var i;
          return (i = this.layer) == null ? void 0 : i.featureCollections;
        },
        (i) => {
          this._clear();
          for (const { popupInfo: r, featureSet: o, layerDefinition: e } of i) {
            const t = g.fromJSON(o),
              s = new w(t.features),
              p = e.drawingInfo,
              c = r ? f.fromJSON(r) : null,
              a = u(p.renderer),
              m = new T({
                requestUpdateCallback: () => this.requestUpdate(),
                view: this.view,
                graphics: s,
                renderer: a,
                container: new _(this.view.featuresTilingScheme),
              });
            (this._graphicsViewMap[t.geometryType] = m),
              this._popupTemplates.set(m, c),
              t.geometryType !== "polygon" || this.layer.polygonSymbol
                ? t.geometryType !== "polyline" || this.layer.lineSymbol
                  ? t.geometryType !== "point" ||
                    this.layer.pointSymbol ||
                    (this.layer.pointSymbol = a.symbol)
                  : (this.layer.lineSymbol = a.symbol)
                : (this.layer.polygonSymbol = a.symbol),
              this.graphicsViews.push(m),
              this.container.addChild(m.container);
          }
        },
        h
      ),
      l(
        () => {
          var i;
          return (i = this.layer) == null ? void 0 : i.polygonSymbol;
        },
        (i) => {
          this._graphicsViewMap.polygon.renderer = new n({ symbol: i });
        },
        h
      ),
      l(
        () => {
          var i;
          return (i = this.layer) == null ? void 0 : i.lineSymbol;
        },
        (i) => {
          this._graphicsViewMap.polyline.renderer = new n({ symbol: i });
        },
        h
      ),
      l(
        () => {
          var i;
          return (i = this.layer) == null ? void 0 : i.pointSymbol;
        },
        (i) => {
          this._graphicsViewMap.point.renderer = new n({ symbol: i });
        },
        h
      ),
    ]);
  }
  detach() {
    this._clear();
  }
  moveStart() {}
  moveEnd() {}
  viewChange() {
    for (const i of this.graphicsViews) i.viewChange();
  }
  _clear() {
    this.container.removeAllChildren();
    for (const i of this.graphicsViews) i.destroy();
    (this._graphicsViewMap = {}),
      this._popupTemplates.clear(),
      (this.graphicsViews.length = 0);
  }
};
y = d([b("esri.views.2d.layers.GeoRSSLayerView2D")], y);
const vi = y;
export { vi as default };
