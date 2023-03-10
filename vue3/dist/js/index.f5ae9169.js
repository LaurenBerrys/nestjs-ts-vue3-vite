import {
  d as A,
  a as k,
  h as D,
  P as z,
  V as P,
  W as b,
  u as x,
  k as y,
  A as T,
  U,
  aa as N,
  ae as O,
  af as W,
} from "./vue.a7ce1fbe.js";
import {
  $ as q,
  a0 as J,
  a1 as K,
  a2 as V,
  a3 as j,
  a4 as G,
  a5 as $,
  a6 as Q,
  a7 as X,
  a8 as Y,
  a9 as Z,
  aa as ee,
  ab as re,
  ac as oe,
  _ as te,
} from "./NvapForm.feb8550d.js";
import {
  f as se,
  u as M,
  g as ae,
  b as F,
  r as C,
  l as ne,
  h as ie,
  i as le,
  j as ue,
  k as ce,
  m as de,
} from "./Table.e9c997d5.js";
import { b as pe } from "./vue-router.805f6e2a.js";
import { a as H } from "./axios.9678a311.js";
import "./vue-i18n.67a42238.js";
(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
      r(s);
    new MutationObserver((s) => {
      for (const t of s)
        if (t.type === "childList")
          for (const o of t.addedNodes)
            o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const t = (function (o) {
      const a = {};
      return (
        o.integrity && (a.integrity = o.integrity),
        o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials"
          ? (a.credentials = "include")
          : o.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
        a
      );
    })(s);
    fetch(s.href, t);
  }
})();
const L = {
    Button: {},
    common: {
      primaryColor: "#2cb67d",
      primaryColorHover: "#2cb67d",
      primaryColorPressed: "#2cb67d",
      primaryColorSuppl: "#2cb67d",
      infoColor: "#2cb67d",
      infoColorHover: "#8fcdd4",
      infoColorPressed: "#2cb67d",
      infoColorSuppl: "#2cb67d",
      successColor: "#18A058FF",
      successColorHover: "#36AD6AFF",
      successColorPressed: "#0C7A43FF",
      successColorSuppl: "#36AD6AFF",
      warningColor: "#F0A020FF",
      warningColorHover: "#FCB040FF",
      warningColorPressed: "#C97C10FF",
      warningColorSuppl: "#FCB040FF",
      errorColor: "#D03050FF",
      errorColorHover: "#DE576DFF",
      errorColorPressed: "#AB1F3FFF",
      errorColorSuppl: "#DE576DFF",
      fontFamily:
        'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fontFamilyMono:
        "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",
      fontWeight: "400",
      fontWeightStrong: "500",
      borderRadius: "3px",
      borderRadiusSmall: "2px",
      fontSize: "14px",
      fontSizeMini: "12px",
      fontSizeTiny: "12px",
      fontSizeSmall: "14px",
      fontSizeMedium: "14px",
      fontSizeLarge: "15px",
      fontSizeHuge: "16px",
      scrollbarColor: "rgba(255, 255, 255, 0.2)",
      scrollbarColorHover: "rgba(255, 255, 255, 0.3)",
      scrollbarWidth: "5px",
      scrollbarHeight: "5px",
      scrollbarBorderRadius: "5px",
      boxShadow1:
        "0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",
      boxShadow2:
        "0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",
      boxShadow3:
        "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)",
    },
  },
  fe = A({ name: "Provider" }),
  me = A({
    ...fe,
    setup(e) {
      const { language: r, isDark: s } = se(M()),
        { setTheme: t, setLanguage: o } = M(),
        a = k(null),
        l = k(null),
        f = k(null),
        m = pe(),
        g = () => {
          var i;
          (window.$loadingBar = K()),
            (window.$notification = V()),
            (window.$message = (function (c) {
              let u = null;
              return new (class {
                removeMessage(n = u, d = 2e3) {
                  setTimeout(() => {
                    n && (n.destroy(), (n = null));
                  }, d);
                }
                showMessage(n, d, h = {}) {
                  if (u && u.type === "loading")
                    (u.type = n),
                      (u.content = d),
                      n !== "loading" && this.removeMessage(u, h.duration);
                  else {
                    const S = c[n](d, h);
                    n === "loading" && (u = S);
                  }
                }
                loading(n) {
                  this.showMessage("loading", n, { duration: 0 });
                }
                success(n, d = {}) {
                  this.showMessage("success", n, d);
                }
                error(n, d = {}) {
                  this.showMessage("error", n, d);
                }
                info(n, d = {}) {
                  this.showMessage("info", n, d);
                }
                warning(n, d = {}) {
                  this.showMessage("warning", n, d);
                }
              })();
            })(j())),
            (window.$dialog =
              (((i = G()).confirm = function (c = {}) {
                const u = !q(c.title);
                return i[c.type || "warning"]({
                  showIcon: u,
                  positiveText: "??????",
                  negativeText: "??????",
                  onPositiveClick: c.confirm,
                  onNegativeClick: c.cancel,
                  onMaskClick: c.cancel,
                  ...c,
                });
              }),
              i));
        },
        p = A({
          setup() {
            var i;
            (() => {
              const c = L.common;
              for (const u in c)
                ae(`--${J(u)}`, document.documentElement).value = c[u] || "";
            })(),
              g(),
              r.value == "zhCN"
                ? ((a.value = $), (l.value = Q))
                : ((a.value = null), (l.value = null)),
              t(f.value),
              o(r.value, (i = m.meta) == null ? void 0 : i.title);
          },
          render: () => D("div"),
        });
      return (i, c) => {
        const u = Z,
          n = ee,
          d = re,
          h = oe,
          S = X;
        return (
          z(),
          P(
            S,
            {
              "wh-full": "",
              locale: x($),
              "date-locale": x(l),
              theme: x(s) ? x(Y) : null,
              "theme-overrides": x(L),
            },
            {
              default: b(() => [
                y(h, null, {
                  default: b(() => [
                    y(d, null, {
                      default: b(() => [
                        y(n, null, {
                          default: b(() => [
                            y(u, null, {
                              default: b(() => [
                                y(x(p)),
                                T(i.$slots, "default"),
                              ]),
                              _: 3,
                            }),
                          ]),
                          _: 3,
                        }),
                      ]),
                      _: 3,
                    }),
                  ]),
                  _: 3,
                }),
              ]),
              _: 3,
            },
            8,
            ["locale", "date-locale", "theme", "theme-overrides"]
          )
        );
      };
    },
  }),
  ge = te({}, [
    [
      "render",
      function (e, r) {
        const s = U("router-view"),
          t = me;
        return (
          z(),
          P(t, null, {
            default: b(() => [
              y(s, null, {
                default: b(({ Component: o }) => [(z(), P(N(o)))]),
                _: 1,
              }),
            ]),
            _: 1,
          })
        );
      },
    ],
  ]);
function E(e, r) {
  var s;
  return (
    (e = typeof (s = e) == "object" && s !== null ? e : Object.create(null)),
    new Proxy(e, {
      get: (t, o, a) =>
        o === "key"
          ? Reflect.get(t, o, a)
          : Reflect.get(t, o, a) || Reflect.get(r, o, a),
    })
  );
}
function I(e, { storage: r, serializer: s, key: t, debug: o }) {
  try {
    const a = r == null ? void 0 : r.getItem(t);
    a && e.$patch(s == null ? void 0 : s.deserialize(a));
  } catch {}
}
function _(e, { storage: r, serializer: s, key: t, paths: o, debug: a }) {
  try {
    const l = Array.isArray(o)
      ? (function (f, m) {
          return m.reduce((g, p) => {
            const i = p.split(".");
            return (function (c, u, n) {
              return (
                (u
                  .slice(0, -1)
                  .reduce(
                    (d, h) =>
                      /^(__proto__)$/.test(h) ? {} : (d[h] = d[h] || {}),
                    c
                  )[u[u.length - 1]] = n),
                c
              );
            })(
              g,
              i,
              (function (c, u) {
                return u.reduce((n, d) => (n == null ? void 0 : n[d]), c);
              })(f, i)
            );
          }, {});
        })(e, o)
      : e;
    r.setItem(t, s.serialize(l));
  } catch {}
}
var he = (function (e = {}) {
  return (r) => {
    const { auto: s = !1 } = e,
      {
        options: { persist: t = s },
        store: o,
      } = r;
    if (!t) return;
    const a = (Array.isArray(t) ? t.map((l) => E(l, e)) : [E(t, e)]).map(
      ({
        storage: l = localStorage,
        beforeRestore: f = null,
        afterRestore: m = null,
        serializer: g = { serialize: JSON.stringify, deserialize: JSON.parse },
        key: p = o.$id,
        paths: i = null,
        debug: c = !1,
      }) => {
        var u;
        return {
          storage: l,
          beforeRestore: f,
          afterRestore: m,
          serializer: g,
          key: ((u = e.key) != null ? u : (n) => n)(p),
          paths: i,
          debug: c,
        };
      }
    );
    (o.$persist = () => {
      a.forEach((l) => {
        _(o.$state, l);
      });
    }),
      (o.$hydrate = ({ runHooks: l = !0 } = {}) => {
        a.forEach((f) => {
          const { beforeRestore: m, afterRestore: g } = f;
          l && (m == null || m(r)), I(o, f), l && (g == null || g(r));
        });
      }),
      a.forEach((l) => {
        const { beforeRestore: f, afterRestore: m } = l;
        f == null || f(r),
          I(o, l),
          m == null || m(r),
          o.$subscribe(
            (g, p) => {
              _(p, l);
            },
            { detached: !0 }
          );
      });
  };
})();
const R = H.create();
function v(e) {
  return R({ baseURL: " http://192.168.31.151:3000", timeout: 8e3, ...e });
}
R.interceptors.request.use(
  (e) => {
    var t;
    const { token: r, axiosPromiseArr: s } = F();
    return (
      (e.cancelToken = new H.CancelToken((o) => {
        s.push({ url: e.url, cancel: o });
      })),
      (e.headers.Authorization = `Bearer ${r}`),
      "get".includes((t = e.method) == null ? void 0 : t.toLowerCase()) &&
        (e.params = e.data),
      e
    );
  },
  (e) => {
    F().resetState(), Promise.reject(e);
  }
),
  R.interceptors.response.use(
    (e) => {
      const { code: r } = e.data;
      return "0,200,20000".includes(r) ? e.data : Promise.reject(e.data);
    },
    (e) => {
      const { response: r } = e;
      return (
        O(r, "data")
          ? "401,403".includes(r.data.code) &&
            (window.$message.warning("???????????????"), F().resetStateAndToLogin())
          : j().error(e, { duration: 2e3 }),
        Promise.reject(e)
      );
    }
  );
const ke = (e) => v({ url: "/nest-api/user/login", data: e, method: "post" }),
  Ae = (e) => v({ url: "/nest-api/user", method: "get", params: e }),
  ze = (e, r) => v({ url: "/nest-api/user/" + e, method: "patch", data: r }),
  Pe = (e) => v({ url: "/nest-api/user/" + e, method: "delete" }),
  Re = (e) => v({ url: "/nest-api/user", method: "post", data: e }),
  be = ["/login", "/404", "/401"];
C.beforeEach(async (e) => {
  var s;
  document.title = ne((s = e.meta) == null ? void 0 : s.title);
  const r = F();
  if (!r.token) return !!be.includes(e.path) || `/login?redirect=${e.path}`;
  if (e.path === "/login") return "/";
  if (r.userInfo)
    return C.getRoutes().length === 5
      ? (le(r.userInfo.menuList).forEach((t) => {
          C.addRoute(t);
        }),
        { ...e, replace: !0 })
      : !0;
  try {
    const t = await new Promise((o) => {
      v({ url: "/nest-api/user/" + F().name, method: "get" }).then(
        ({ data: a }) => {
          (a.menuList = (function (l) {
            if (a.menuList.length >= 2) {
              let f = [];
              const m = l.reduce((p, i) => ((p[i.id] = i), p), {});
              for (const p of l)
                if (p.parentId in m) {
                  const i = m[p.parentId];
                  (i.children = i.children || []),
                    i.children.push(p),
                    f.push(i);
                } else f.push(p);
              const g = {};
              return (
                (f = f.reduce(
                  (p, i) => (!g[i.id] && (g[i.id] = p.push(i)), p),
                  []
                )),
                f
              );
            }
            return l;
          })(a.menuList)),
            o(a);
        }
      );
    });
    return ie(t), r.setUserInfo(t), { ...e, replace: !0 };
  } catch {
    return r.resetState(), `/login?redirect=${e.path}`;
  }
}),
  C.afterEach(() => {});
const xe = {
    created(e, r, s, t) {
      const { value: o } = r;
      ue().hasPermission([...o]) || (e.style.display = "none");
    },
    beforeMount(e, r, s, t) {},
    mounted(e, r, s, t) {},
    beforeUpdate(e, r, s, t) {},
    updated(e, r, s, t) {},
    beforeUnmount(e, r, s, t) {},
    unmounted(e, r, s, t) {},
  },
  B = ce();
B.use(he);
const w = W(ge);
w.directive("permission", xe), w.use(B), w.use(C), w.use(de), w.mount("#app");
export { v as a, Re as c, Pe as d, Ae as g, ke as l, ze as u };
