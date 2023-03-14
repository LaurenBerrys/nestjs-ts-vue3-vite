import {
  ae as o,
  af as t,
  ag as p,
  ic as i,
  s as a,
} from "./index.8fd7165c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
let e = class extends i {
  constructor(r) {
    super(r),
      (this.geometryType = "point"),
      (this.type = "oriented-imagery"),
      (this.operationalLayerType = "OrientedImageryLayer");
  }
  _verifySource() {
    if ((super._verifySource(), this.geometryType !== "point"))
      throw new a(
        "feature-layer:invalid-geometry-type",
        "OrientedImageryLayer only supports point geometry type"
      );
  }
};
o([t()], e.prototype, "cameraProperties", void 0),
  o([t()], e.prototype, "coverage", void 0),
  o([t()], e.prototype, "coveragePercent", void 0),
  o([t()], e.prototype, "defaultSearchLocation", void 0),
  o([t()], e.prototype, "depthImage", void 0),
  o([t()], e.prototype, "digitalElevationModel", void 0),
  o([t()], e.prototype, "geometryType", void 0),
  o([t()], e.prototype, "imageProperties", void 0),
  o([t()], e.prototype, "maximumDistance", void 0),
  o(
    [t({ json: { read: !1 }, value: "oriented-imagery", readOnly: !0 })],
    e.prototype,
    "type",
    void 0
  ),
  o(
    [t({ type: ["OrientedImageryLayer"] })],
    e.prototype,
    "operationalLayerType",
    void 0
  ),
  (e = o([p("esri.layers.OrientedImageryLayer")], e));
const c = e;
export { c as default };
