import {
  B as i,
  z as s,
  an as A,
  l as d,
  r as m,
  G as c,
  ao as b,
  ap as h,
  b as y,
  Q as v,
  aq as g,
  ar as x,
  as as F,
  at as j,
  au as w,
  y as D,
  av as I,
  aw as p,
} from "./arcadeUtils.2f855605.js";
import { t as f, e as l } from "./executionError.fb3f283a.js";
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
function T(e, a) {
  return e && e.domain
    ? e.domain.type === "coded-value" || e.domain.type === "codedValue"
      ? y.convertObjectToArcadeDictionary(
          {
            type: "codedValue",
            name: e.domain.name,
            dataType: p[e.field.type],
            codedValues: e.domain.codedValues.map((t) => ({
              name: t.name,
              code: t.code,
            })),
          },
          v(a)
        )
      : y.convertObjectToArcadeDictionary(
          {
            type: "range",
            name: e.domain.name,
            dataType: p[e.field.type],
            min: e.domain.min,
            max: e.domain.max,
          },
          v(a)
        )
    : null;
}
function k(e) {
  e.mode === "async" &&
    ((e.functions.domain = function (a, t) {
      return e.standardFunctionAsync(a, t, async (o, u, n) => {
        if ((i(n, 2, 3, a, t), s(n[0])))
          return T(A(n[0], m(n[1]), n[2] === void 0 ? void 0 : d(n[2])), a);
        if (c(n[0]))
          return (
            await n[0]._ensureLoaded(),
            T(b(m(n[1]), n[0], null, n[2] === void 0 ? void 0 : d(n[2])), a)
          );
        throw new f(a, l.InvalidParameter, t);
      });
    }),
    (e.functions.subtypes = function (a, t) {
      return e.standardFunctionAsync(a, t, async (o, u, n) => {
        if ((i(n, 1, 1, a, t), s(n[0]))) {
          const r = h(n[0]);
          return r ? y.convertObjectToArcadeDictionary(r, v(a)) : null;
        }
        if (c(n[0])) {
          await n[0]._ensureLoaded();
          const r = n[0].subtypes();
          return r ? y.convertObjectToArcadeDictionary(r, v(a)) : null;
        }
        throw new f(a, l.InvalidParameter, t);
      });
    }),
    (e.functions.domainname = function (a, t) {
      return e.standardFunctionAsync(a, t, async (o, u, n) => {
        if ((i(n, 2, 4, a, t), s(n[0])))
          return g(n[0], m(n[1]), n[2], n[3] === void 0 ? void 0 : d(n[3]));
        if (c(n[0])) {
          await n[0]._ensureLoaded();
          const r = b(m(n[1]), n[0], null, n[3] === void 0 ? void 0 : d(n[3]));
          return x(r, n[2]);
        }
        throw new f(a, l.InvalidParameter, t);
      });
    }),
    e.signatures.push({ name: "domainname", min: 2, max: 4 }),
    (e.functions.domaincode = function (a, t) {
      return e.standardFunctionAsync(a, t, async (o, u, n) => {
        if ((i(n, 2, 4, a, t), s(n[0])))
          return F(n[0], m(n[1]), n[2], n[3] === void 0 ? void 0 : d(n[3]));
        if (c(n[0])) {
          await n[0]._ensureLoaded();
          const r = b(m(n[1]), n[0], null, n[3] === void 0 ? void 0 : d(n[3]));
          return j(r, n[2]);
        }
        throw new f(a, l.InvalidParameter, t);
      });
    }),
    e.signatures.push({ name: "domaincode", min: 2, max: 4 })),
    (e.functions.text = function (a, t) {
      return e.standardFunctionAsync(a, t, (o, u, n) => {
        if ((i(n, 1, 2, a, t), !c(n[0]))) return w(n[0], n[1]);
        {
          const r = D(n[1], "");
          if (r === "") return n[0].castToText();
          if (r.toLowerCase() === "schema")
            return n[0].convertToText("schema", o.abortSignal);
          if (r.toLowerCase() === "featureset")
            return n[0].convertToText("featureset", o.abortSignal);
        }
      });
    }),
    (e.functions.gdbversion = function (a, t) {
      return e.standardFunctionAsync(a, t, async (o, u, n) => {
        if ((i(n, 1, 1, a, t), s(n[0]))) return n[0].gdbVersion();
        if (c(n[0])) return (await n[0].load()).gdbVersion;
        throw new f(a, l.InvalidParameter, t);
      });
    }),
    (e.functions.schema = function (a, t) {
      return e.standardFunctionAsync(a, t, async (o, u, n) => {
        if ((i(n, 1, 1, a, t), c(n[0])))
          return (
            await n[0].load(),
            y.convertObjectToArcadeDictionary(n[0].schema(), v(a))
          );
        if (s(n[0])) {
          const r = I(n[0]);
          return r ? y.convertObjectToArcadeDictionary(r, v(a)) : null;
        }
        throw new f(a, l.InvalidParameter, t);
      });
    });
}
export { k as registerFunctions };
