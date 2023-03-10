import { q as g } from "./Table.e9c997d5.js";
import {
  Q as y,
  k$ as h,
  l0 as w,
  t as v,
  s as f,
  l1 as b,
  gl as x,
  l2 as E,
  l3 as F,
  l4 as _,
} from "./index.8fd7165c.js";
import "./vue.a7ce1fbe.js";
import "./NvapForm.feb8550d.js";
import "./vue-i18n.67a42238.js";
import "./vue-router.805f6e2a.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
const d = y.getLogger("esri.layers.support.labelFormatUtils"),
  m = { type: "simple", evaluate: () => null },
  V = { getAttribute: (a, n) => a.field(n) };
async function H(a, n, e) {
  if (!a || !a.symbol || !n) return m;
  const i = a.where,
    l = h(a),
    s = i
      ? await g(
          () => import("./WhereClause.ae196341.js").then((r) => r.W),
          [
            "js/WhereClause.ae196341.js",
            "js/index.8fd7165c.js",
            "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
            "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
            "js/NvapForm.feb8550d.js",
            "js/vue.a7ce1fbe.js",
            "assets/NvapForm.356f5dc3.css",
            "js/vue-router.805f6e2a.js",
            "js/Table.e9c997d5.js",
            "js/vue-i18n.67a42238.js",
            "assets/Table.3b7647ef.css",
            "assets/index.a699c0e4.css",
            "js/executionError.fb3f283a.js",
          ]
        )
      : null;
  let u;
  if (l.type === "arcade") {
    const r = await w(l.expression, e, n);
    if (v(r)) return m;
    u = {
      type: "arcade",
      evaluate(o) {
        try {
          const t = r.evaluate({
            $feature: "attributes" in o ? r.repurposeFeature(o) : o,
          });
          if (t != null) return t.toString();
        } catch {
          d.error(
            new f(
              "arcade-expression-error",
              "Encountered an error when evaluating label expression for feature",
              { feature: o, expression: l }
            )
          );
        }
        return null;
      },
      needsHydrationToEvaluate: () => F(l.expression) == null,
    };
  } else
    u = {
      type: "simple",
      evaluate: (r) =>
        l.expression.replace(/{[^}]*}/g, (o) => {
          const t = o.slice(1, -1),
            c = n.get(t);
          if (!c) return o;
          let p = null;
          return (
            "attributes" in r
              ? r && r.attributes && (p = r.attributes[c.name])
              : (p = r.field(c.name)),
            p == null ? "" : L(p, c)
          );
        }),
    };
  if (i) {
    let r;
    try {
      r = s.WhereClause.create(i, n);
    } catch (t) {
      return (
        d.error(
          new f(
            "bad-where-clause",
            "Encountered an error when evaluating where clause, ignoring",
            {
              where: i,
              error: t,
            }
          )
        ),
        m
      );
    }
    const o = u.evaluate;
    u.evaluate = (t) => {
      const c = "attributes" in t ? void 0 : V;
      try {
        if (r.testFeature(t, c)) return o(t);
      } catch (p) {
        d.error(
          new f(
            "bad-where-clause",
            "Encountered an error when evaluating where clause for feature",
            { where: i, feature: t, error: p }
          )
        );
      }
      return null;
    };
  }
  return u;
}
function L(a, n) {
  if (a == null) return "";
  const e = n.domain;
  if (e) {
    if (e.type === "codedValue" || e.type === "coded-value") {
      const l = a;
      for (const s of e.codedValues) if (s.code === l) return s.name;
    } else if (e.type === "range") {
      const l = +a,
        s = "range" in e ? e.range[0] : e.minValue,
        u = "range" in e ? e.range[1] : e.maxValue;
      if (s <= l && l <= u) return e.name;
    }
  }
  let i = a;
  return (
    n.type === "date" || n.type === "esriFieldTypeDate"
      ? (i = b(i, _("short-date")))
      : x(n) && (i = E(+i)),
    i || ""
  );
}
export { H as createLabelFunction, L as formatField };
