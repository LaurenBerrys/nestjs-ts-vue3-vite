import { aK as p, lx as e, ar as i } from "./index.8fd7165c.js";
import { p as n } from "./queryTopFeatures.e4128977.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
async function E(o, r, a) {
  const m = p(o),
    t = await n(m, e.from(r), { ...a });
  return { count: t.data.count, extent: i.fromJSON(t.data.extent) };
}
export { E as executeForTopExtents };
