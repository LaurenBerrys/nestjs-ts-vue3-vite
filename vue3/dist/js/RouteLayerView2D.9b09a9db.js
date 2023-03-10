import {
  P as n,
  ee as d,
  r as a,
  H as u,
  t as _,
  G as c,
  ae as l,
  af as m,
  ag as w,
} from "./index.8fd7165c.js";
import {
  b as y,
  h as f,
  O as k,
  g as M,
  f as v,
  a as G,
  D as V,
} from "./Stop.48dde021.js";
import { f as I, u as F } from "./LayerView.d8517e2e.js";
import { i as H } from "./GraphicContainer.7c4908c4.js";
import { a as C } from "./GraphicsView2D.5baab708.js";
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
const b = Object.freeze({ remove() {}, pause() {}, resume() {} }),
  U = [
    "route-info",
    "direction-line",
    "direction-point",
    "polygon-barrier",
    "polyline-barrier",
    "point-barrier",
    "stop",
  ],
  o = { graphic: null, property: null, oldValue: null, newValue: null };
function g(t) {
  return (
    t instanceof y ||
    t instanceof f ||
    t instanceof k ||
    t instanceof M ||
    t instanceof v ||
    t instanceof G ||
    t instanceof V
  );
}
let h = class extends I(F) {
  constructor() {
    super(...arguments),
      (this._graphics = new n()),
      (this._highlightIds = new Map()),
      (this._networkFeatureMap = new Map()),
      (this._networkGraphicMap = new Map());
  }
  get _routeItems() {
    return new d({
      getCollections: () =>
        a(this.layer) && !this.destroyed
          ? [
              a(this.layer.routeInfo) ? new n([this.layer.routeInfo]) : null,
              this.layer.directionLines,
              this.layer.directionPoints,
              this.layer.polygonBarriers,
              this.layer.polylineBarriers,
              this.layer.pointBarriers,
              this.layer.stops,
            ]
          : [],
    });
  }
  initialize() {
    this.updatingHandles.addOnCollectionChange(
      () => this._routeItems,
      (t) => this._routeItemsChanged(t),
      u
    );
  }
  destroy() {
    var t;
    this._networkFeatureMap.clear(),
      this._networkGraphicMap.clear(),
      this._graphics.removeAll(),
      (t = this._get("_routeItems")) == null || t.destroy();
  }
  attach() {
    this._createGraphicsView();
  }
  detach() {
    this._destroyGraphicsView();
  }
  async fetchPopupFeatures(t) {
    return this._graphicsView.hitTest(t).filter((e) => !!e.popupTemplate);
  }
  highlight(t) {
    let e;
    e = g(t)
      ? [this._getNetworkFeatureUid(t)]
      : (function (r) {
          return Array.isArray(r) && r.length > 0 && g(r[0]);
        })(t)
      ? t.map((r) => this._getNetworkFeatureUid(r))
      : (function (r) {
          return n.isCollection(r) && r.length && g(r.getItemAt(0));
        })(t)
      ? t.map((r) => this._getNetworkFeatureUid(r)).toArray()
      : [t.uid];
    const i = e.filter(a);
    return i.length
      ? (this._addHighlight(i), { remove: () => this._removeHighlight(i) })
      : b;
  }
  async hitTest(t, e) {
    if (this.suspended) return null;
    const i = this._graphicsView
      .hitTest(t)
      .filter(a)
      .map((s) => this._networkGraphicMap.get(s));
    if (!i.length) return null;
    const { layer: r } = this;
    return i
      .reverse()
      .map((s) => ({
        type: "route",
        layer: r,
        mapPoint: t,
        networkFeature: s,
      }));
  }
  isUpdating() {
    return this._graphicsView.updating;
  }
  moveStart() {}
  moveEnd() {}
  update(t) {
    this._graphicsView.processUpdate(t);
  }
  viewChange() {
    this._graphicsView.viewChange();
  }
  _addHighlight(t) {
    for (const e of t)
      if (this._highlightIds.has(e)) {
        const i = this._highlightIds.get(e);
        this._highlightIds.set(e, i + 1);
      } else this._highlightIds.set(e, 1);
    this._updateHighlight();
  }
  _createGraphic(t) {
    const e = t.toGraphic();
    return (e.layer = this.layer), (e.sourceLayer = this.layer), e;
  }
  _createGraphicsView() {
    const t = this.view,
      e = new H(t.featuresTilingScheme);
    (this._graphicsView = new C({
      container: e,
      graphics: this._graphics,
      requestUpdateCallback: () => this.requestUpdate(),
      view: t,
    })),
      this.container.addChild(e),
      this._updateHighlight();
  }
  _destroyGraphicsView() {
    this.container.removeChild(this._graphicsView.container),
      this._graphicsView.destroy();
  }
  _getDrawOrder(t) {
    const e = this._networkGraphicMap.get(t);
    return U.indexOf(e.type);
  }
  _getNetworkFeatureUid(t) {
    return this._networkFeatureMap.has(t)
      ? this._networkFeatureMap.get(t).uid
      : null;
  }
  _removeHighlight(t) {
    for (const e of t)
      if (this._highlightIds.has(e)) {
        const i = this._highlightIds.get(e) - 1;
        i === 0 ? this._highlightIds.delete(e) : this._highlightIds.set(e, i);
      }
    this._updateHighlight();
  }
  _routeItemsChanged(t) {
    if (t.removed.length) {
      this._graphics.removeMany(
        t.removed.map((e) => {
          const i = this._networkFeatureMap.get(e);
          return (
            this._networkFeatureMap.delete(e),
            this._networkGraphicMap.delete(i),
            i
          );
        })
      );
      for (const e of t.removed) this.removeHandles(e);
    }
    if (t.added.length) {
      this._graphics.addMany(
        t.added
          .map((e) => {
            const i = this._createGraphic(e);
            return _(i.symbol)
              ? null
              : (this._networkFeatureMap.set(e, i),
                this._networkGraphicMap.set(i, e),
                i);
          })
          .filter(a)
      );
      for (const e of t.added)
        this.addHandles(
          [
            c(
              () => e.geometry,
              (i, r) => {
                this._updateGraphic(e, "geometry", i, r);
              }
            ),
            c(
              () => e.symbol,
              (i, r) => {
                this._updateGraphic(e, "symbol", i, r);
              }
            ),
          ],
          e
        );
      this._graphics.sort(
        (e, i) => this._getDrawOrder(e) - this._getDrawOrder(i)
      );
    }
  }
  _updateGraphic(t, e, i, r) {
    if (!this._networkFeatureMap.has(t)) {
      const p = this._createGraphic(t);
      return (
        this._networkFeatureMap.set(t, p),
        this._networkGraphicMap.set(p, t),
        void this._graphics.add(p)
      );
    }
    const s = this._networkFeatureMap.get(t);
    (s[e] = i),
      (o.graphic = s),
      (o.property = e),
      (o.oldValue = r),
      (o.newValue = i),
      this._graphicsView.graphicUpdateHandler(o);
  }
  _updateHighlight() {
    const t = Array.from(this._highlightIds.keys());
    this._graphicsView.setHighlight(t);
  }
};
l([m()], h.prototype, "_graphics", void 0),
  l([m()], h.prototype, "_routeItems", null),
  (h = l([w("esri.views.2d.layers.RouteLayerView2D")], h));
const At = h;
export { At as default };
