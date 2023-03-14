import { t as m, dw as x, dx as T, r } from "./index.8fd7165c.js";
async function b(e, l = e.popupTemplate) {
  var p, o;
  if (m(l)) return [];
  const n = await l.getRequiredFields(e.fieldsIndex),
    { lastEditInfoEnabled: c } = l,
    {
      objectIdField: t,
      typeIdField: i,
      globalIdField: a,
      relationships: u,
    } = e;
  if (n.includes("*")) return ["*"];
  const h = c ? await x(e) : [],
    d = T(e.fieldsIndex, [...n, ...h]);
  return (
    i && d.push(i),
    d &&
      t &&
      (p = e.fieldsIndex) != null &&
      p.has(t) &&
      !d.includes(t) &&
      d.push(t),
    d &&
      a &&
      (o = e.fieldsIndex) != null &&
      o.has(a) &&
      !d.includes(a) &&
      d.push(a),
    u &&
      u.forEach((I) => {
        var f;
        const { keyField: s } = I;
        d &&
          s &&
          (f = e.fieldsIndex) != null &&
          f.has(s) &&
          !d.includes(s) &&
          d.push(s);
      }),
    d
  );
}
function E(e, l) {
  return e.popupTemplate
    ? e.popupTemplate
    : r(l) && l.defaultPopupTemplateEnabled && r(e.defaultPopupTemplate)
    ? e.defaultPopupTemplate
    : null;
}
export { b as d, E as s };
