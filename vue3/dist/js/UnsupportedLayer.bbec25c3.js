import {
  eu as a,
  ev as n,
  kH as u,
  ae as o,
  af as i,
  ag as d,
  db as l,
  s as y,
} from "./index.8fd7165c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
let t = class extends a(n(l)) {
  constructor(e) {
    super(e), (this.resourceInfo = null), (this.type = "unsupported");
  }
  initialize() {
    this.addResolvingPromise(
      new Promise((e, s) => {
        u(() => {
          const r =
            this.resourceInfo &&
            (this.resourceInfo.layerType || this.resourceInfo.type);
          let p = "Unsupported layer type";
          r && (p += " " + r),
            s(new y("layer:unsupported-layer-type", p, { layerType: r }));
        });
      })
    );
  }
  read(e, s) {
    const r = { resourceInfo: e };
    e.id != null && (r.id = e.id),
      e.title != null && (r.title = e.title),
      super.read(r, s);
  }
  write(e) {
    return Object.assign(e || {}, this.resourceInfo, { id: this.id });
  }
};
o([i({ readOnly: !0 })], t.prototype, "resourceInfo", void 0),
  o([i({ type: ["show", "hide"] })], t.prototype, "listMode", void 0),
  o(
    [i({ json: { read: !1 }, readOnly: !0, value: "unsupported" })],
    t.prototype,
    "type",
    void 0
  ),
  (t = o([d("esri.layers.UnsupportedLayer")], t));
const O = t;
export { O as default };
