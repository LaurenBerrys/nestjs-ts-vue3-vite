import { ae as t, af as o, ag as p } from "./index.8fd7165c.js";
import a from "./FeatureLayerView2D.8f85b8aa.js";
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
import "./LayerView.d8517e2e.js";
import "./schemaUtils.264ba82d.js";
import "./color.4c5303e9.js";
import "./enums.13513a14.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./utils.1f803f1b.js";
import "./MaterialKey.97cb3dc8.js";
import "./visualVariablesUtils.de38be9a.js";
import "./ExpandedCIM.e22c8b13.js";
import "./BidiEngine.520adad3.js";
import "./GeometryUtils.874f8cf4.js";
import "./Rect.6884a4ea.js";
import "./quantizationUtils.1e9e702d.js";
import "./floatRGBA.6f2fa7cd.js";
import "./util.79a0d0b9.js";
import "./floorFilterUtils.08225a6d.js";
import "./popupUtils.4682c28c.js";
import "./RefreshableLayerView.d05f575e.js";
const s = (e) => {
  let r = class extends e {
    get availableFields() {
      return this.layer.fieldsIndex.fields.map((m) => m.name);
    }
  };
  return (
    t([o()], r.prototype, "layer", void 0),
    t([o({ readOnly: !0 })], r.prototype, "availableFields", null),
    (r = t([p("esri.views.layers.OGCFeatureLayerView")], r)),
    r
  );
};
let i = class extends s(a) {
  supportsSpatialReference(e) {
    return this.layer.serviceSupportsSpatialReference(e);
  }
};
i = t([p("esri.views.2d.layers.OGCFeatureLayerView2D")], i);
const J = i;
export { J as default };
