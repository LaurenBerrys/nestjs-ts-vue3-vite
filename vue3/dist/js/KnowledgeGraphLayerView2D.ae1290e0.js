import {
  P as s,
  ao as o,
  ae as a,
  af as i,
  am as l,
  ag as n,
} from "./index.8fd7165c.js";
import { f as h, u as p } from "./LayerView.d8517e2e.js";
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
let t = class extends h(p) {
  constructor(e) {
    super(e), (this.layerViews = new s());
  }
  set layerViews(e) {
    this._set("layerViews", o(e, this._get("layerViews")));
  }
  get updatingProgress() {
    return this.layerViews.length === 0
      ? 1
      : this.layerViews.reduce((e, r) => e + r.updatingProgress, 0) /
          this.layerViews.length;
  }
  attach() {
    this._updateStageChildren(),
      this.addAttachHandles(
        this.layerViews.on("after-changes", () => this._updateStageChildren())
      );
  }
  detach() {
    this.container.removeAllChildren();
  }
  update(e) {}
  moveStart() {}
  viewChange() {}
  moveEnd() {}
  _updateStageChildren() {
    this.container.removeAllChildren(),
      this.layerViews.forEach((e, r) =>
        this.container.addChildAt(e.container, r)
      );
  }
};
a([i({ cast: l })], t.prototype, "layerViews", null),
  a([i({ readOnly: !0 })], t.prototype, "updatingProgress", null),
  (t = a([n("esri.views.2d.layers.KnowledgeGraphLayerView2D")], t));
const P = t;
export { P as default };
