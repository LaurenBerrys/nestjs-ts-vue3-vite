import { j as F } from "./Table.e9c997d5.js";
import {
  aq as P,
  w as V,
  z as S,
  _ as C,
  N as _,
  e as k,
  K as z,
  ar as $,
} from "./NvapForm.feb8550d.js";
import {
  d as L,
  c as f,
  S as v,
  U as O,
  P as p,
  Q as b,
  R as g,
  F as j,
  N as q,
  V as y,
  Z as M,
  W as d,
  k as w,
  l as T,
  _ as N,
  E as h,
  A as E,
  $ as x,
  a as A,
  b as K,
  u as m,
  w as Q,
  n as R,
} from "./vue.a7ce1fbe.js";
const U = L({
    name: "TableAction",
    components: { DownOutlined: P },
    props: {
      actions: { type: Array, default: null, required: !0 },
      dropDownActions: { type: Array, default: null },
      style: { type: String, default: "button" },
      select: { type: Function, default: () => {} },
    },
    setup(a) {
      const { hasPermission: o } = F(),
        l =
          a.style === "button"
            ? "default"
            : a.style === "text"
            ? "primary"
            : "default",
        n = a.style === "button" ? void 0 : a.style === "text" || void 0,
        e = f(() => ({ text: n, type: l, size: "small" })),
        i = f(() =>
          (v(a.dropDownActions) || [])
            .filter((t) => o(t.auth) && c(t))
            .map((t) => {
              const { popConfirm: s } = t;
              return {
                size: "small",
                text: n,
                type: l,
                ...t,
                ...s,
                onConfirm: s == null ? void 0 : s.confirm,
                onCancel: s == null ? void 0 : s.cancel,
              };
            })
        );
      function c(t) {
        const s = t.ifShow;
        let r = !0;
        return V(s) && (r = s), S(s) && (r = s(t)), r;
      }
      return {
        getActions: f(() =>
          (v(a.actions) || [])
            .filter((t) => o(t.auth) && c(t))
            .map((t) => {
              const { popConfirm: s } = t;
              return {
                size: "small",
                text: n,
                type: l,
                ...t,
                ...(s || {}),
                onConfirm: s == null ? void 0 : s.confirm,
                onCancel: s == null ? void 0 : s.cancel,
                enable: !!s,
              };
            })
        ),
        getDropdownList: i,
        getMoreProps: e,
      };
    },
  }),
  W = { class: "tableAction" },
  Z = { class: "flex items-center justify-center" },
  B = { class: "flex items-center" },
  G = g("span", null, "??????", -1),
  X = C(U, [
    [
      "render",
      function (a, o, l, n, e, i) {
        const c = _,
          t = k,
          s = O("DownOutlined"),
          r = z;
        return (
          p(),
          b("div", W, [
            g("div", Z, [
              (p(!0),
              b(
                j,
                null,
                q(
                  a.getActions,
                  (u, D) => (
                    p(),
                    y(
                      t,
                      h({ key: `${D}-${u.label}` }, u, { class: "mx-2" }),
                      M({ default: d(() => [T(N(u.label) + " ", 1)]), _: 2 }, [
                        u.hasOwnProperty("icon")
                          ? {
                              name: "icon",
                              fn: d(() => [
                                w(c, { component: u.icon }, null, 8, [
                                  "component",
                                ]),
                              ]),
                              key: "0",
                            }
                          : void 0,
                      ]),
                      1040
                    )
                  )
                ),
                128
              )),
              a.dropDownActions && a.getDropdownList.length
                ? (p(),
                  y(
                    r,
                    {
                      key: 0,
                      trigger: "hover",
                      options: a.getDropdownList,
                      onSelect: a.select,
                    },
                    {
                      default: d(() => [
                        E(a.$slots, "more"),
                        a.$slots.more
                          ? x("", !0)
                          : (p(),
                            y(
                              t,
                              h({ key: 0 }, a.getMoreProps, {
                                class: "mx-2",
                                "icon-placement": "right",
                              }),
                              {
                                default: d(() => [
                                  g("div", B, [
                                    G,
                                    w(
                                      c,
                                      { size: "14", class: "ml-1" },
                                      { default: d(() => [w(s)]), _: 1 }
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              },
                              16
                            )),
                      ]),
                      _: 3,
                    },
                    8,
                    ["options", "onSelect"]
                  ))
                : x("", !0),
            ]),
          ])
        );
      },
    ],
  ]);
function Y(a) {
  const o = A(null),
    l = A(!1);
  async function n() {
    const e = m(o);
    return await R(), e;
  }
  return [
    function (e) {
      K(() => {
        (o.value = null), (l.value = null);
      }),
        (m(l) && e === m(o)) ||
          ((o.value = e),
          (l.value = !0),
          Q(
            () => a,
            () => {
              a && e.setProps($(a));
            },
            { immediate: !0, deep: !0 }
          ));
    },
    {
      setSchemas: async (e, i) => {
        await (await n()).setSchemas(e, i);
      },
      setProps: async (e) => {
        await (await n()).setProps(e);
      },
      resetFields: async () => {
        n().then(async (e) => {
          await e.resetFields();
        });
      },
      clearValidate: async (e) => {
        await (await n()).clearValidate(e);
      },
      getFieldsValue: () => {
        var e;
        return (e = m(o)) == null ? void 0 : e.getFieldsValue();
      },
      setFieldsValue: async (e) => {
        await (await n()).setFieldsValue(e);
      },
      submit: async () => (await n()).submit(),
      validate: async (e) => (await n()).validate(e),
    },
  ];
}
export { X as T, Y as u };
