import {
  r as h,
  al as f,
  P as w,
  G as p,
  H as n,
  dg as y,
  t as _,
  ae as V,
  ag as v,
} from "./index.8fd7165c.js";
import { h as C } from "./Container.a5892366.js";
import { r as H } from "./GroupContainer.cb198d14.js";
import { f as b, u as T } from "./LayerView.d8517e2e.js";
import { i as g } from "./GraphicContainer.7c4908c4.js";
import { a as m } from "./GraphicsView2D.5baab708.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./definitions.ce677f69.js";
import "./enums.64ab819c.js";
import "./Texture.fb0c670a.js";
import "./WGLContainer.e7ddd41d.js";
import "./VertexArrayObject.1b8f3583.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./color.4c5303e9.js";
import "./enums.13513a14.js";
import "./ProgramTemplate.4bbf0f5e.js";
import "./MaterialKey.97cb3dc8.js";
import "./utils.1f803f1b.js";
import "./StyleDefinition.4f77c81e.js";
import "./config.1337d16e.js";
import "./GeometryUtils.82ab0a13.js";
import "./earcut.9f54f087.js";
import "./BaseGraphicContainer.5e700f86.js";
import "./FeatureContainer.3aa1973d.js";
import "./AttributeStoreView.413dc93f.js";
import "./TiledDisplayObject.3b82e169.js";
import "./visualVariablesUtils.1183f3fb.js";
import "./visualVariablesUtils.de38be9a.js";
import "./TileContainer.4bfeb0d8.js";
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
const d = "sublayers",
  l = "layerView",
  I = Object.freeze({ remove() {}, pause() {}, resume() {} });
let c = class extends b(T) {
  constructor() {
    super(...arguments),
      (this._highlightIds = new Map()),
      (this.container = new H());
  }
  async fetchPopupFeatures(i) {
    return Array.from(this.graphicsViews(), (t) =>
      t.hitTest(i).filter((e) => !!e.popupTemplate)
    ).flat();
  }
  *graphicsViews() {
    h(this._graphicsViewsFeatureCollectionMap)
      ? yield* this._graphicsViewsFeatureCollectionMap.keys()
      : h(this._graphicsViews)
      ? yield* this._graphicsViews
      : yield* [];
  }
  async hitTest(i, t) {
    return Array.from(this.graphicsViews(), (e) => {
      const s = e.hitTest(i);
      if (h(this._graphicsViewsFeatureCollectionMap)) {
        const a = this._graphicsViewsFeatureCollectionMap.get(e);
        for (const r of s)
          !r.popupTemplate &&
            a.popupTemplate &&
            (r.popupTemplate = a.popupTemplate),
            (r.sourceLayer = r.layer = this.layer);
      }
      return s;
    })
      .flat()
      .map((e) => ({
        type: "graphic",
        graphic: e,
        layer: this.layer,
        mapPoint: i,
      }));
  }
  highlight(i) {
    let t;
    typeof i == "number"
      ? (t = [i])
      : i instanceof f
      ? (t = [i.uid])
      : Array.isArray(i) && i.length > 0
      ? (t = typeof i[0] == "number" ? i : i.map((s) => s && s.uid))
      : w.isCollection(i) && (t = i.map((s) => s && s.uid).toArray());
    const e = t == null ? void 0 : t.filter(h);
    return e != null && e.length
      ? (this._addHighlight(e),
        {
          remove: () => {
            this._removeHighlight(e);
          },
        })
      : I;
  }
  update(i) {
    for (const t of this.graphicsViews()) t.processUpdate(i);
  }
  attach() {
    const i = this.view,
      t = () => this.requestUpdate(),
      e = this.layer.featureCollections;
    if (h(e) && e.length) {
      this._graphicsViewsFeatureCollectionMap = new Map();
      for (const s of e) {
        const a = new g(this.view.featuresTilingScheme),
          r = new m({
            view: i,
            graphics: s.source,
            renderer: s.renderer,
            requestUpdateCallback: t,
            container: a,
          });
        this._graphicsViewsFeatureCollectionMap.set(r, s),
          this.container.addChild(r.container),
          this.addHandles(
            [
              p(
                () => s.visible,
                (o) => (r.container.visible = o),
                n
              ),
              p(
                () => r.updating,
                () => this.notifyChange("updating"),
                n
              ),
            ],
            l
          );
      }
      this._updateHighlight();
    } else
      h(this.layer.sublayers) &&
        this.addHandles(
          y(
            () => this.layer.sublayers,
            "change",
            () => this._createGraphicsViews(),
            {
              onListenerAdd: () => this._createGraphicsViews(),
              onListenerRemove: () => this._destroyGraphicsViews(),
            }
          ),
          d
        );
  }
  detach() {
    this._destroyGraphicsViews(), this.removeHandles(d);
  }
  moveStart() {}
  moveEnd() {}
  viewChange() {
    for (const i of this.graphicsViews()) i.viewChange();
  }
  isUpdating() {
    for (const i of this.graphicsViews()) if (i.updating) return !0;
    return !1;
  }
  _destroyGraphicsViews() {
    this.container.removeAllChildren(), this.removeHandles(l);
    for (const i of this.graphicsViews()) i.destroy();
    (this._graphicsViews = null),
      (this._graphicsViewsFeatureCollectionMap = null);
  }
  _createGraphicsViews() {
    if ((this._destroyGraphicsViews(), _(this.layer.sublayers))) return;
    const i = [],
      t = this.view,
      e = () => this.requestUpdate();
    for (const s of this.layer.sublayers) {
      const a = new C(),
        r = new g(this.view.featuresTilingScheme);
      r.fadeTransitionEnabled = !0;
      const o = new m({
        view: t,
        graphics: s.graphics,
        requestUpdateCallback: e,
        container: r,
      });
      this.addHandles(
        [
          s.on("graphic-update", o.graphicUpdateHandler),
          p(
            () => s.visible,
            (u) => (o.container.visible = u),
            n
          ),
          p(
            () => o.updating,
            () => this.notifyChange("updating"),
            n
          ),
        ],
        l
      ),
        a.addChild(o.container),
        this.container.addChild(a),
        i.push(o);
    }
    (this._graphicsViews = i), this._updateHighlight();
  }
  _addHighlight(i) {
    for (const t of i)
      if (this._highlightIds.has(t)) {
        const e = this._highlightIds.get(t);
        this._highlightIds.set(t, e + 1);
      } else this._highlightIds.set(t, 1);
    this._updateHighlight();
  }
  _removeHighlight(i) {
    for (const t of i)
      if (this._highlightIds.has(t)) {
        const e = this._highlightIds.get(t) - 1;
        e === 0 ? this._highlightIds.delete(t) : this._highlightIds.set(t, e);
      }
    this._updateHighlight();
  }
  _updateHighlight() {
    const i = Array.from(this._highlightIds.keys());
    for (const t of this.graphicsViews()) t.setHighlight(i);
  }
};
c = V([v("esri.views.2d.layers.MapNotesLayerView2D")], c);
const Ai = c;
export { Ai as default };
