import { _ as h } from "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import { b as i } from "./vue-router.805f6e2a.js";
import { ah as p } from "./NvapForm.feb8550d.js";
import {
  d as n,
  P as o,
  V as u,
  W as r,
  Q as l,
  A as a,
  F as x,
  R as c,
  _ as y,
  u as w,
  $ as _,
  k,
} from "./vue.a7ce1fbe.js";
const $ = {
    key: 0,
    "px-15": "",
    "mb-15": "",
    "min-h-45": "",
    flex: "",
    "justify-between": "",
    "items-center": "",
  },
  b = {
    "text-22": "",
    "font-normal": "",
    "text-hex-333": "",
    "dark:text-hex-ccc": "",
  },
  g = n({ name: "ComponentPage" }),
  v = n({
    ...g,
    props: {
      showFooter: { type: Boolean, default: !1 },
      showHeader: { type: Boolean, default: !0 },
      title: { type: String, default: void 0 },
    },
    setup(t) {
      const d = i();
      return (e, F) => {
        const f = p,
          m = h;
        return (
          o(),
          u(
            m,
            { "show-footer": t.showFooter },
            {
              default: r(() => {
                var s;
                return [
                  t.showHeader
                    ? (o(),
                      l("header", $, [
                        e.$slots.header
                          ? a(e.$slots, "header", { key: 0 })
                          : (o(),
                            l(
                              x,
                              { key: 1 },
                              [
                                c(
                                  "h2",
                                  b,
                                  y(
                                    t.title ||
                                      ((s = w(d).meta) == null
                                        ? void 0
                                        : s.title)
                                  ),
                                  1
                                ),
                                a(e.$slots, "action"),
                              ],
                              64
                            )),
                      ]))
                    : _("", !0),
                  k(
                    f,
                    { "rounded-10": "", "flex-1": "" },
                    { default: r(() => [a(e.$slots, "default")]), _: 3 }
                  ),
                ];
              }),
              _: 3,
            },
            8,
            ["show-footer"]
          )
        );
      };
    },
  });
export { v as _ };
