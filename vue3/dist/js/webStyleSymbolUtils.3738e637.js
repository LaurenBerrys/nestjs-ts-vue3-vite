import {
  ct as $,
  bS as z,
  s as S,
  r as w,
  cx as D,
  cy as p,
  cz as h,
  cA as A,
  hM as P,
  cv as U,
  cw as j,
  hN as v,
  hO as E,
  hP as d,
  hQ as g,
  cu as F,
} from "./index.8fd7165c.js";
import { c as Q, a as N } from "./devEnvironmentUtils.4eab2a99.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
function J(e, t, a, l) {
  return e.name
    ? e.styleName && e.styleName === "Esri2DPointSymbolsStyle"
      ? (function (i, u, y) {
          const c = F.replace(/\{SymbolName\}/gi, i.name),
            r = w(u.portal) ? u.portal : D.getDefault();
          return U(c, y).then((n) => {
            const o = j(n.data);
            return v(o, { portal: r, url: p(P(c)), origin: "portal-item" });
          });
        })(e, t, l)
      : $(e, t, l).then((i) => R(z(i), e.name, t, a, l))
    : Promise.reject(
        new S(
          "symbolstyleutils:style-symbol-reference-name-missing",
          "Missing name in style symbol reference"
        )
      );
}
function R(e, t, a, l, i) {
  var f;
  const u = e.data,
    y = a && w(a.portal) ? a.portal : D.getDefault(),
    c = { portal: y, url: p(e.baseUrl), origin: "portal-item" },
    r = u.items.find((m) => m.name === t);
  if (!r) {
    const m = `The symbol name '${t}' could not be found`;
    return Promise.reject(
      new S("symbolstyleutils:symbol-name-not-found", m, { symbolName: t })
    );
  }
  let n = h(A(r, l), c),
    o = ((f = r.thumbnail) == null ? void 0 : f.href) ?? null;
  const b = r.thumbnail && r.thumbnail.imageData;
  Q() && ((n = N(n) ?? ""), (o = N(o)));
  const O = { portal: y, url: p(P(n)), origin: "portal-item" };
  return U(n, i).then((m) => {
    const x = l === "cimRef" ? j(m.data) : m.data,
      s = v(x, O);
    if (s && E(s)) {
      if (o) {
        const M = h(o, c);
        s.thumbnail = new d({ url: M });
      } else b && (s.thumbnail = new d({ url: `data:image/png;base64,${b}` }));
      e.styleUrl
        ? (s.styleOrigin = new g({
            portal: a.portal,
            styleUrl: e.styleUrl,
            name: t,
          }))
        : e.styleName &&
          (s.styleOrigin = new g({
            portal: a.portal,
            styleName: e.styleName,
            name: t,
          }));
    }
    return s;
  });
}
export { R as fetchSymbolFromStyle, J as resolveWebStyleSymbol };
