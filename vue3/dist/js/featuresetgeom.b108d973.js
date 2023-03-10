import { t as o, e as l } from "./executionError.fb3f283a.js";
import {
  u as S,
  B as y,
  r as p,
  G as s,
  am as w,
} from "./arcadeUtils.2f855605.js";
import { e as c, c as h } from "./SpatialFilter.a4e03d79.js";
import { de as u } from "./index.8fd7165c.js";
import {
  R as F,
  m as I,
  S as A,
  x as m,
  O as P,
  p as g,
  h as R,
} from "./geometryEngineAsync.8efb94c6.js";
import "./Table.e9c997d5.js";
import "./vue.a7ce1fbe.js";
import "./NvapForm.feb8550d.js";
import "./vue-i18n.67a42238.js";
import "./vue-router.805f6e2a.js";
import "./arcadeTimeUtils.e79f2f70.js";
import "./number.f83996f0.js";
import "./WhereClause.ae196341.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
function f(t) {
  return t instanceof u;
}
function a(t, r, i, d) {
  return d(t, r, async (v, e, n) => {
    if (n.length < 2) throw new o(t, l.WrongNumberOfParameters, r);
    if ((n = S(n))[0] === null && n[1] === null) return !1;
    if (s(n[0])) {
      if (n[1] instanceof u)
        return new h({
          parentfeatureset: n[0],
          relation: i,
          relationGeom: n[1],
        });
      if (n[1] === null) return new c({ parentfeatureset: n[0] });
      throw new o(t, l.InvalidParameter, r);
    }
    if (f(n[0])) {
      if (f(n[1])) {
        switch (i) {
          case "esriSpatialRelEnvelopeIntersects":
            return R(w(n[0]), w(n[1]));
          case "esriSpatialRelIntersects":
            return R(n[0], n[1]);
          case "esriSpatialRelContains":
            return g(n[0], n[1]);
          case "esriSpatialRelOverlaps":
            return P(n[0], n[1]);
          case "esriSpatialRelWithin":
            return m(n[0], n[1]);
          case "esriSpatialRelTouches":
            return A(n[0], n[1]);
          case "esriSpatialRelCrosses":
            return I(n[0], n[1]);
        }
        throw new o(t, l.InvalidParameter, r);
      }
      if (s(n[1]))
        return new h({
          parentfeatureset: n[1],
          relation: i,
          relationGeom: n[0],
        });
      if (n[1] === null) return !1;
      throw new o(t, l.InvalidParameter, r);
    }
    if (n[0] !== null) throw new o(t, l.InvalidParameter, r);
    return s(n[1])
      ? new c({ parentfeatureset: n[1] })
      : !(n[1] instanceof u || n[1] === null) && void 0;
  });
}
function H(t) {
  t.mode === "async" &&
    ((t.functions.intersects = function (r, i) {
      return a(r, i, "esriSpatialRelIntersects", t.standardFunctionAsync);
    }),
    (t.functions.envelopeintersects = function (r, i) {
      return a(
        r,
        i,
        "esriSpatialRelEnvelopeIntersects",
        t.standardFunctionAsync
      );
    }),
    t.signatures.push({ name: "envelopeintersects", min: 2, max: 2 }),
    (t.functions.contains = function (r, i) {
      return a(r, i, "esriSpatialRelContains", t.standardFunctionAsync);
    }),
    (t.functions.overlaps = function (r, i) {
      return a(r, i, "esriSpatialRelOverlaps", t.standardFunctionAsync);
    }),
    (t.functions.within = function (r, i) {
      return a(r, i, "esriSpatialRelWithin", t.standardFunctionAsync);
    }),
    (t.functions.touches = function (r, i) {
      return a(r, i, "esriSpatialRelTouches", t.standardFunctionAsync);
    }),
    (t.functions.crosses = function (r, i) {
      return a(r, i, "esriSpatialRelCrosses", t.standardFunctionAsync);
    }),
    (t.functions.relate = function (r, i) {
      return t.standardFunctionAsync(r, i, (d, v, e) => {
        if (((e = S(e)), y(e, 3, 3, r, i), f(e[0]) && f(e[1])))
          return F(e[0], e[1], p(e[2]));
        if (
          (e[0] instanceof u && e[1] === null) ||
          (e[1] instanceof u && e[0] === null)
        )
          return !1;
        if (s(e[0]) && e[1] === null) return new c({ parentfeatureset: e[0] });
        if (s(e[1]) && e[0] === null) return new c({ parentfeatureset: e[1] });
        if (s(e[0]) && e[1] instanceof u) return e[0].relate(e[1], p(e[2]));
        if (s(e[1]) && e[0] instanceof u) return e[1].relate(e[0], p(e[2]));
        if (e[0] === null && e[1] === null) return !1;
        throw new o(r, l.InvalidParameter, i);
      });
    }));
}
export { H as registerFunctions };
