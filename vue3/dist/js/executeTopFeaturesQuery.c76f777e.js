import { aK as e, lx as s, ah as f } from "./index.8fd7165c.js";
import { d as n } from "./queryTopFeatures.e4128977.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
async function J(r, o, t, m) {
  const a = e(r),
    i = { ...m },
    { data: p } = await n(a, s.from(o), t, i);
  return f.fromJSON(p);
}
export { J as executeTopFeaturesQuery };
