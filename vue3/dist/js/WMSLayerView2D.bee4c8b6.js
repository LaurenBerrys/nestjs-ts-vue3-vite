import {
  ae as o,
  af as m,
  au as F,
  ag as b,
  E as S,
  s as y,
  j as M,
  Q as R,
  G as q,
  ar as U,
} from "./index.8fd7165c.js";
import { a as I } from "./BitmapContainer.ba60edd5.js";
import { f as V, u as W } from "./LayerView.d8517e2e.js";
import { v as L } from "./ExportStrategy.80d09bab.js";
import { i as j } from "./RefreshableLayerView.d05f575e.js";
import { l as H } from "./ExportWMSImageParameters.5fef4d3b.js";
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
import "./Bitmap.cb464f5e.js";
const Q = (e) => {
  let t = class extends e {
    initialize() {
      this.exportImageParameters = new H({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters = S(this.exportImageParameters);
    }
    get exportImageVersion() {
      var r;
      return (
        (r = this.exportImageParameters) == null || r.commitProperty("version"),
        this.commitProperty("timeExtent"),
        (this._get("exportImageVersion") || 0) + 1
      );
    }
    fetchPopupFeatures(r) {
      const { layer: a } = this;
      if (!r)
        return Promise.reject(
          new y(
            "wmslayerview:fetchPopupFeatures",
            "Nothing to fetch without area",
            { layer: a }
          )
        );
      const { popupEnabled: p } = a;
      if (!p)
        return Promise.reject(
          new y(
            "wmslayerview:fetchPopupFeatures",
            "popupEnabled should be true",
            {
              popupEnabled: p,
            }
          )
        );
      const u = this.createFetchPopupFeaturesQuery(r);
      if (!u) return Promise.resolve([]);
      const { extent: i, width: s, height: n, x: d, y: c } = u;
      if (!(i && s && n))
        throw new y(
          "wmslayerview:fetchPopupFeatures",
          "WMSLayer does not support fetching features.",
          { extent: i, width: s, height: n }
        );
      return a.fetchFeatureInfo(i, s, n, d, c);
    }
  };
  return (
    o([m()], t.prototype, "exportImageParameters", void 0),
    o([m({ readOnly: !0 })], t.prototype, "exportImageVersion", null),
    o([m()], t.prototype, "layer", void 0),
    o([m(F)], t.prototype, "timeExtent", void 0),
    (t = o([b("esri.layers.mixins.WMSLayerView")], t)),
    t
  );
};
let h = class extends Q(j(V(W))) {
  constructor() {
    super(...arguments), (this.bitmapContainer = new I());
  }
  supportsSpatialReference(e) {
    return this.layer.serviceSupportsSpatialReference(e);
  }
  update(e) {
    this.strategy.update(e).catch((t) => {
      M(t) || R.getLogger(this.declaredClass).error(t);
    });
  }
  attach() {
    const { layer: e } = this,
      { imageMaxHeight: t, imageMaxWidth: r } = e;
    (this.bitmapContainer = new I()),
      this.container.addChild(this.bitmapContainer),
      (this.strategy = new L({
        container: this.bitmapContainer,
        fetchSource: this.fetchImage.bind(this),
        requestUpdate: this.requestUpdate.bind(this),
        imageMaxHeight: t,
        imageMaxWidth: r,
        imageRotationSupported: !1,
        imageNormalizationSupported: !1,
        hidpi: !1,
      })),
      this.addAttachHandles(
        q(
          () => this.exportImageVersion,
          () => this.requestUpdate()
        )
      );
  }
  detach() {
    (this.strategy = S(this.strategy)), this.container.removeAllChildren();
  }
  moveStart() {}
  viewChange() {}
  moveEnd() {
    this.requestUpdate();
  }
  createFetchPopupFeaturesQuery(e) {
    const { view: t, bitmapContainer: r } = this,
      { x: a, y: p } = e,
      { spatialReference: u } = t;
    let i,
      s = 0,
      n = 0;
    if (
      (r.children.some((E) => {
        const { width: x, height: f, resolution: w, x: l, y: g } = E,
          v = l + w * x,
          P = g - w * f;
        return (
          a >= l &&
          a <= v &&
          p <= g &&
          p >= P &&
          ((i = new U({
            xmin: l,
            ymin: P,
            xmax: v,
            ymax: g,
            spatialReference: u,
          })),
          (s = x),
          (n = f),
          !0)
        );
      }),
      !i)
    )
      return null;
    const d = i.width / s,
      c = Math.round((a - i.xmin) / d),
      C = Math.round((i.ymax - p) / d);
    return { extent: i, width: s, height: n, x: c, y: C };
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(e, t, r, a) {
    return this.layer.fetchImageBitmap(e, t, r, {
      timeExtent: this.timeExtent,
      ...a,
    });
  }
};
o([m()], h.prototype, "strategy", void 0),
  o([m()], h.prototype, "updating", void 0),
  (h = o([b("esri.views.2d.layers.WMSLayerView2D")], h));
const lt = h;
export { lt as default };
