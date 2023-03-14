import {
  E as p,
  al as o,
  P as a,
  r as m,
  ae as s,
  af as g,
  ag as l,
} from "./index.8fd7165c.js";
import { f as c, u as n } from "./LayerView.d8517e2e.js";
import { i as d } from "./GraphicContainer.7c4908c4.js";
import { a as u } from "./GraphicsView2D.5baab708.js";
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
const w = { remove() {}, pause() {}, resume() {} };
let e = class extends c(n) {
  constructor() {
    super(...arguments), (this._highlightIds = new Map());
  }
  attach() {
    (this.graphicsView = new u({
      requestUpdateCallback: () => this.requestUpdate(),
      view: this.view,
      graphics: this.layer.graphics,
      container: new d(this.view.featuresTilingScheme),
    })),
      this._updateHighlight(),
      this.container.addChild(this.graphicsView.container),
      this.addAttachHandles(
        this.layer.on("graphic-update", this.graphicsView.graphicUpdateHandler)
      );
  }
  detach() {
    this.container.removeAllChildren(),
      (this.graphicsView = p(this.graphicsView));
  }
  async hitTest(i) {
    return this.graphicsView
      ? this.graphicsView
          .hitTest(i)
          .map((t) => ({
            type: "graphic",
            graphic: t,
            mapPoint: i,
            layer: this.layer,
          }))
      : null;
  }
  async fetchPopupFeatures(i) {
    return this.graphicsView
      ? this.graphicsView.hitTest(i).filter((t) => !!t.popupTemplate)
      : [];
  }
  queryGraphics() {
    return Promise.resolve(this.graphicsView.graphics);
  }
  update(i) {
    this.graphicsView.processUpdate(i);
  }
  moveStart() {}
  viewChange() {
    this.graphicsView.viewChange();
  }
  moveEnd() {}
  isUpdating() {
    return !this.graphicsView || this.graphicsView.updating;
  }
  highlight(i) {
    let t;
    typeof i == "number"
      ? (t = [i])
      : i instanceof o
      ? (t = [i.uid])
      : Array.isArray(i) && i.length > 0
      ? (t = typeof i[0] == "number" ? i : i.map((h) => h && h.uid))
      : a.isCollection(i) &&
        i.length > 0 &&
        (t = i.map((h) => h && h.uid).toArray());
    const r = t == null ? void 0 : t.filter(m);
    return r != null && r.length
      ? (this._addHighlight(r), { remove: () => this._removeHighlight(r) })
      : w;
  }
  _addHighlight(i) {
    for (const t of i)
      if (this._highlightIds.has(t)) {
        const r = this._highlightIds.get(t);
        this._highlightIds.set(t, r + 1);
      } else this._highlightIds.set(t, 1);
    this._updateHighlight();
  }
  _removeHighlight(i) {
    for (const t of i)
      if (this._highlightIds.has(t)) {
        const r = this._highlightIds.get(t) - 1;
        r === 0 ? this._highlightIds.delete(t) : this._highlightIds.set(t, r);
      }
    this._updateHighlight();
  }
  _updateHighlight() {
    var i;
    (i = this.graphicsView) == null ||
      i.setHighlight(Array.from(this._highlightIds.keys()));
  }
};
s([g()], e.prototype, "graphicsView", void 0),
  (e = s([l("esri.views.2d.layers.GraphicsLayerView2D")], e));
const fi = e;
export { fi as default };
