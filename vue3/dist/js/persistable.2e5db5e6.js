import { q as S } from "./Table.e9c997d5.js";
import { i as _ } from "./multiOriginJSONSupportUtils.c978f4c3.js";
import {
  jB as $,
  jC as D,
  iL as E,
  jD as U,
  jE as J,
  jF as A,
  jG as B,
  jH as C,
  jI as P,
  jJ as K,
  il as L,
  eD as T,
  eF as q,
  jK as G,
} from "./index.8fd7165c.js";
import { t as j } from "./resourceExtension.9b0d7459.js";
function Q(a) {
  const u = (a == null ? void 0 : a.origins) ?? [void 0];
  return (o, p) => {
    const t = (function (r, s, e) {
      if ((r == null ? void 0 : r.type) === "resource") return H(r, s, e);
      switch ((r == null ? void 0 : r.type) ?? "other") {
        case "other":
          return { read: !0, write: !0 };
        case "url": {
          const { read: l, write: i } = G;
          return { read: l, write: i };
        }
      }
    })(a, o, p);
    for (const r of u) {
      const s = $(o, r, p);
      for (const e in t) s[e] = t[e];
    }
  };
}
function H(a, u, o) {
  const p = D(u, o);
  return {
    type: String,
    read: (t, r, s) => {
      const e = E(t, r, s);
      return p.type === String
        ? e
        : typeof p.type == "function"
        ? new p.type({ url: e })
        : void 0;
    },
    write: {
      writer(t, r, s, e) {
        if (!e || !e.resources)
          return typeof t == "string"
            ? void (r[s] = U(t, e))
            : void (r[s] = t.write({}, e));
        const l = (function (n) {
            return n == null ? null : typeof n == "string" ? n : n.url;
          })(t),
          i = U(
            l,
            {
              ...e,
              verifyItemRelativeUrls:
                e && e.verifyItemRelativeUrls
                  ? {
                      writtenUrls: e.verifyItemRelativeUrls.writtenUrls,
                      rootPath: void 0,
                    }
                  : void 0,
            },
            J.NO
          ),
          f =
            p.type !== String &&
            (!_(this) || (e && e.origin && this.originIdOf(o) > A(e.origin))),
          d = {
            object: this,
            propertyName: o,
            value: t,
            targetUrl: i,
            dest: r,
            targetPropertyName: s,
            context: e,
            params: a,
          };
        e && e.portalItem && i && !B(i)
          ? f
            ? (function (n) {
                const {
                  context: c,
                  targetUrl: y,
                  params: m,
                  value: g,
                  dest: h,
                  targetPropertyName: v,
                } = n;
                if (!c.portalItem) return;
                const I = c.portalItem.resourceFromPath(y),
                  w = O(g, y, c),
                  R = j(w),
                  b = q(I.path),
                  F = (m == null ? void 0 : m.compress) ?? !1;
                R === b
                  ? (c.resources &&
                      x({
                        ...n,
                        resource: I,
                        content: w,
                        compress: F,
                        updates: c.resources.toUpdate,
                      }),
                    (h[v] = y))
                  : N(n);
              })(d)
            : (function ({
                context: n,
                targetUrl: c,
                dest: y,
                targetPropertyName: m,
              }) {
                n.portalItem &&
                  n.resources &&
                  (n.resources.toKeep.push({
                    resource: n.portalItem.resourceFromPath(c),
                    compress: !1,
                  }),
                  (y[m] = c));
              })(d)
          : e && e.portalItem && (i == null || C(i) != null || P(i) || f)
          ? N(d)
          : (r[s] = i);
      },
    },
  };
}
function N(a) {
  const {
    targetUrl: u,
    params: o,
    value: p,
    context: t,
    dest: r,
    targetPropertyName: s,
  } = a;
  if (!t.portalItem) return;
  const e = K(u),
    l = (e == null ? void 0 : e.filename) ?? L(),
    i = (o == null ? void 0 : o.prefix) ?? (e == null ? void 0 : e.prefix),
    f = O(p, u, t),
    d = T(i, l),
    n = `${d}.${j(f)}`,
    c = t.portalItem.resourceFromPath(n);
  P(u) &&
    t.resources &&
    t.resources.pendingOperations.push(
      (async function (m) {
        const g = (
            await S(
              () => import("./index.8fd7165c.js").then((v) => v.lC),
              [
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
              ]
            )
          ).default,
          { data: h } = await g(m, { responseType: "blob" });
        return h;
      })(u)
        .then((m) => {
          (c.path = `${d}.${j(m)}`), (r[s] = c.itemRelativeUrl);
        })
        .catch(() => {})
    );
  const y = (o == null ? void 0 : o.compress) ?? !1;
  t.resources &&
    x({
      ...a,
      resource: c,
      content: f,
      compress: y,
      updates: t.resources.toAdd,
    }),
    (r[s] = c.itemRelativeUrl);
}
function x({
  object: a,
  propertyName: u,
  updates: o,
  resource: p,
  content: t,
  compress: r,
}) {
  o.push({
    resource: p,
    content: t,
    compress: r,
    finish: (s) => {
      (function (e, l, i) {
        typeof e[l] == "string" ? (e[l] = i.url) : (e[l].url = i.url);
      })(a, u, s);
    },
  });
}
function O(a, u, o) {
  return typeof a == "string"
    ? { url: u }
    : new Blob([JSON.stringify(a.toJSON(o))], { type: "application/json" });
}
export { Q as g };
