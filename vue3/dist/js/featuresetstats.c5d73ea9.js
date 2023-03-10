import { t as y, e as F } from "./executionError.fb3f283a.js";
import {
  B as h,
  G as d,
  J as l,
  v as A,
  V as m,
  al as s,
  y as i,
} from "./arcadeUtils.2f855605.js";
import { f as g } from "./WhereClause.ae196341.js";
import "./index.8fd7165c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./arcadeTimeUtils.e79f2f70.js";
import "./number.f83996f0.js";
async function u(n, r, a, t, o, e) {
  if (t.length === 1) {
    if (l(t[0])) return s(n, t[0], i(t[1], -1));
    if (m(t[0])) return s(n, t[0].toArray(), i(t[1], -1));
  } else if (t.length === 2) {
    if (l(t[0])) return s(n, t[0], i(t[1], -1));
    if (m(t[0])) return s(n, t[0].toArray(), i(t[1], -1));
    if (d(t[0])) {
      const c = await t[0].load(),
        f = await p(g.create(t[1], c.getFieldsIndex()), e, o);
      return t[0].calculateStatistic(n, f, i(t[2], 1e3), r.abortSignal);
    }
  } else if (t.length === 3 && d(t[0])) {
    const c = await t[0].load(),
      f = await p(g.create(t[1], c.getFieldsIndex()), e, o);
    return t[0].calculateStatistic(n, f, i(t[2], 1e3), r.abortSignal);
  }
  return s(n, t, -1);
}
async function p(n, r, a) {
  const t = n.getVariables();
  if (t.length > 0) {
    const o = [];
    for (let c = 0; c < t.length; c++) {
      const f = { name: t[c] };
      o.push(await r.evaluateIdentifier(a, f));
    }
    const e = {};
    for (let c = 0; c < t.length; c++) e[t[c]] = o[c];
    return (n.parameters = e), n;
  }
  return n;
}
function q(n) {
  n.mode === "async" &&
    ((n.functions.stdev = function (r, a) {
      return n.standardFunctionAsync(r, a, (t, o, e) =>
        u("stdev", t, 0, e, r, n)
      );
    }),
    (n.functions.variance = function (r, a) {
      return n.standardFunctionAsync(r, a, (t, o, e) =>
        u("variance", t, 0, e, r, n)
      );
    }),
    (n.functions.average = function (r, a) {
      return n.standardFunctionAsync(r, a, (t, o, e) =>
        u("mean", t, 0, e, r, n)
      );
    }),
    (n.functions.mean = function (r, a) {
      return n.standardFunctionAsync(r, a, (t, o, e) =>
        u("mean", t, 0, e, r, n)
      );
    }),
    (n.functions.sum = function (r, a) {
      return n.standardFunctionAsync(r, a, (t, o, e) =>
        u("sum", t, 0, e, r, n)
      );
    }),
    (n.functions.min = function (r, a) {
      return n.standardFunctionAsync(r, a, (t, o, e) =>
        u("min", t, 0, e, r, n)
      );
    }),
    (n.functions.max = function (r, a) {
      return n.standardFunctionAsync(r, a, (t, o, e) =>
        u("max", t, 0, e, r, n)
      );
    }),
    (n.functions.count = function (r, a) {
      return n.standardFunctionAsync(r, a, (t, o, e) => {
        if ((h(e, 1, 1, r, a), d(e[0]))) return e[0].count(t.abortSignal);
        if (l(e[0]) || A(e[0])) return e[0].length;
        if (m(e[0])) return e[0].length();
        throw new y(r, F.InvalidParameter, a);
      });
    }));
}
export { q as registerFunctions };
