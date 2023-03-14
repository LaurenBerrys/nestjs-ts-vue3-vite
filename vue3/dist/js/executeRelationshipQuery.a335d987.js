import {
  lu as j,
  U as S,
  l8 as p,
  aK as m,
  ah as h,
} from "./index.8fd7165c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
function F(r, t) {
  const e = r.toJSON();
  return (
    e.objectIds && (e.objectIds = e.objectIds.join(",")),
    e.orderByFields && (e.orderByFields = e.orderByFields.join(",")),
    e.outFields && !(t != null && t.returnCountOnly)
      ? e.outFields.includes("*")
        ? (e.outFields = "*")
        : (e.outFields = e.outFields.join(","))
      : delete e.outFields,
    e.outSpatialReference &&
      ((e.outSR = e.outSR.wkid || JSON.stringify(e.outSR.toJSON())),
      delete e.outSpatialReference),
    e.dynamicDataSource &&
      ((e.layer = JSON.stringify({ source: e.dynamicDataSource })),
      delete e.dynamicDataSource),
    e
  );
}
async function R(r, t, e = {}, o) {
  const a = j({ ...r.query, f: "json", ...o, ...F(t, o) });
  return S(r.path + "/queryRelatedRecords", {
    ...e,
    query: { ...e.query, ...a },
  });
}
async function x(r, t, e) {
  return (
    (t = p.from(t)),
    (async function (o, a, i) {
      const n = await R(o, a, i),
        s = n.data,
        d = s.geometryType,
        c = s.spatialReference,
        l = {};
      for (const u of s.relatedRecordGroups) {
        const f = {
          fields: void 0,
          objectIdFieldName: void 0,
          geometryType: d,
          spatialReference: c,
          hasZ: !!s.hasZ,
          hasM: !!s.hasM,
          features: u.relatedRecords,
        };
        if (u.objectId != null) l[u.objectId] = f;
        else
          for (const y in u)
            u.hasOwnProperty(y) && y !== "relatedRecords" && (l[u[y]] = f);
      }
      return { ...n, data: l };
    })(m(r), t, e).then((o) => {
      const a = o.data,
        i = {};
      return Object.keys(a).forEach((n) => (i[n] = h.fromJSON(a[n]))), i;
    })
  );
}
async function B(r, t, e) {
  return (
    (t = p.from(t)),
    (async function (o, a, i) {
      const n = await R(o, a, i, { returnCountOnly: !0 }),
        s = n.data,
        d = {};
      for (const c of s.relatedRecordGroups)
        c.objectId != null && (d[c.objectId] = c.count);
      return { ...n, data: d };
    })(m(r), t, { ...e }).then((o) => o.data)
  );
}
export { x as executeRelationshipQuery, B as executeRelationshipQueryForCount };
