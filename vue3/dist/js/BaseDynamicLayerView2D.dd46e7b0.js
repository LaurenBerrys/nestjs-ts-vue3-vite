import { j as s, Q as p, ae as r, af as a, ag as m } from "./index.8fd7165c.js";
import { a as n } from "./BitmapContainer.ba60edd5.js";
import { f as h, u as d } from "./LayerView.d8517e2e.js";
import { v as u } from "./ExportStrategy.80d09bab.js";
import { i as c } from "./RefreshableLayerView.d05f575e.js";
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
let t = class extends c(h(d)) {
  update(e) {
    this._strategy.update(e).catch((i) => {
      s(i) || p.getLogger(this.declaredClass).error(i);
    }),
      this.notifyChange("updating");
  }
  attach() {
    (this._bitmapContainer = new n()),
      this.container.addChild(this._bitmapContainer),
      (this._strategy = new u({
        container: this._bitmapContainer,
        fetchSource: this.fetchBitmapData.bind(this),
        requestUpdate: this.requestUpdate.bind(this),
      }));
  }
  detach() {
    this._strategy.destroy(),
      (this._strategy = null),
      this.container.removeChild(this._bitmapContainer),
      this._bitmapContainer.removeAllChildren();
  }
  moveStart() {}
  viewChange() {}
  moveEnd() {
    this.requestUpdate();
  }
  fetchBitmapData(e, i, o) {
    return this.layer.fetchImageBitmap(e, i, o);
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this._strategy.updating || this.updateRequested;
  }
};
r([a()], t.prototype, "_strategy", void 0),
  r([a()], t.prototype, "updating", void 0),
  (t = r([m("esri.views.2d.layers.BaseDynamicLayerView2D")], t));
const K = t;
export { K as default };
