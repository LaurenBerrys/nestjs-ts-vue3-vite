import {
  kU as h,
  lv as d,
  lw as l,
  lu as f,
  U as m,
} from "./index.8fd7165c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
function y(a) {
  const t = a.toJSON();
  return (
    t.attachmentTypes && (t.attachmentTypes = t.attachmentTypes.join(",")),
    t.keywords && (t.keywords = t.keywords.join(",")),
    t.globalIds && (t.globalIds = t.globalIds.join(",")),
    t.objectIds && (t.objectIds = t.objectIds.join(",")),
    t.size && (t.size = t.size.join(",")),
    t
  );
}
function g(a, t) {
  const e = {};
  for (const n of t) {
    const { parentObjectId: o, parentGlobalId: s, attachmentInfos: c } = n;
    for (const r of c) {
      const { id: u } = r,
        i = h(d(`${a.path}/${o}/attachments/${u}`)),
        p = l.fromJSON(r);
      p.set({ url: i, parentObjectId: o, parentGlobalId: s }),
        e[o] ? e[o].push(p) : (e[o] = [p]);
    }
  }
  return e;
}
function z(a, t, e) {
  let n = { query: f({ ...a.query, f: "json", ...y(t) }) };
  return (
    e && (n = { ...e, ...n, query: { ...e.query, ...n.query } }),
    m(a.path + "/queryAttachments", n).then((o) => o.data.attachmentGroups)
  );
}
async function G(a, t, e) {
  const { objectIds: n } = t,
    o = [];
  for (const s of n) o.push(m(a.path + "/" + s + "/attachments", e));
  return Promise.all(o).then((s) =>
    n.map((c, r) => ({
      parentObjectId: c,
      attachmentInfos: s[r].data.attachmentInfos,
    }))
  );
}
export {
  z as executeAttachmentQuery,
  G as fetchAttachments,
  g as processAttachmentQueryResult,
};
