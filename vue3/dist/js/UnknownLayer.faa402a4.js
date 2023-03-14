import {
  eu as i,
  ev as p,
  kH as l,
  ae as r,
  af as n,
  ag as y,
  db as u,
  s as d,
} from "./index.8fd7165c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
let e = class extends i(p(u)) {
  constructor(o) {
    super(o), (this.resourceInfo = null), (this.type = "unknown");
  }
  initialize() {
    this.addResolvingPromise(
      new Promise((o, t) => {
        l(() => {
          const s =
            this.resourceInfo &&
            (this.resourceInfo.layerType || this.resourceInfo.type);
          let a = "Unknown layer type";
          s && (a += " " + s),
            t(new d("layer:unknown-layer-type", a, { layerType: s }));
        });
      })
    );
  }
  read(o, t) {
    super.read({ resourceInfo: o }, t);
  }
  write() {
    return null;
  }
};
r([n({ readOnly: !0 })], e.prototype, "resourceInfo", void 0),
  r([n({ type: ["show", "hide"] })], e.prototype, "listMode", void 0),
  r(
    [n({ json: { read: !1 }, readOnly: !0, value: "unknown" })],
    e.prototype,
    "type",
    void 0
  ),
  (e = r([y("esri.layers.UnknownLayer")], e));
const g = e;
export { g as default };
