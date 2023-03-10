import { _ as oe } from "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import {
  P as d,
  Q as g,
  R as i,
  d as ie,
  a as r,
  r as re,
  o as ue,
  c as de,
  V as b,
  W as l,
  k as e,
  u as a,
  l as m,
  _ as I,
  j as ce,
  aa as pe,
  $ as me,
} from "./vue.a7ce1fbe.js";
import { M as fe, u as ve, d as he } from "./MenuDrawer.4f54ec2d.js";
import {
  ae as K,
  u as ge,
  e as ke,
  K as ye,
  f as _e,
  l as we,
  af as be,
  ag as xe,
  ah as Ce,
  ai as je,
  aj as Ue,
  ak as $e,
  m as ze,
  al as Be,
  am as Ie,
} from "./NvapForm.feb8550d.js";
import { f as Ke, b as Le } from "./Table.e9c997d5.js";
import { r as L } from "./layout.302f7a70.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./vue-router.805f6e2a.js";
import "./index.f5ae9169.js";
import "./axios.9678a311.js";
import "./vue-i18n.67a42238.js";
const Me = {
    class: "inline-block",
    viewBox: "0 0 21 21",
    width: "1em",
    height: "1em",
  },
  Te = [
    i(
      "path",
      {
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "m9.508 4.067l-5 2.857A2 2 0 0 0 3.5 8.661V15.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.66a2 2 0 0 0-1.008-1.736l-5-2.857a2 2 0 0 0-1.984 0zM13.5 8.5l-6 6m0-6l6 6",
      },
      null,
      -1
    ),
  ],
  Ve = {
    name: "system-uicons-mail-delete",
    render: function (k, p) {
      return d(), g("svg", Me, Te);
    },
  },
  qe = {
    class: "inline-block",
    viewBox: "0 0 21 21",
    width: "1em",
    height: "1em",
  },
  Ae = [
    i(
      "g",
      { fill: "none", "fill-rule": "evenodd", transform: "translate(1 3)" },
      [
        i("path", {
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M11.914.5H15.5a2 2 0 0 1 2 2v3.586a1 1 0 0 1-.293.707l-6.793 6.793a2 2 0 0 1-2.828 0l-3.172-3.172a2 2 0 0 1 0-2.828L11.207.793A1 1 0 0 1 11.914.5z",
        }),
        i("path", {
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "m7.5 13.5l-2.013 1.006A2 2 0 0 1 2.72 13.42L1.105 9.114a2 2 0 0 1 .901-2.45L9.5 2.5",
        }),
        i("rect", {
          width: "2",
          height: "2",
          x: "14",
          y: "2",
          fill: "currentColor",
          rx: "1",
        }),
      ],
      -1
    ),
  ],
  De = {
    name: "system-uicons-tags",
    render: function (k, p) {
      return d(), g("svg", qe, Ae);
    },
  },
  Oe = {
    class: "inline-block",
    viewBox: "0 0 21 21",
    width: "1em",
    height: "1em",
  },
  Pe = [
    i(
      "g",
      {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      },
      [
        i("circle", { cx: "8.5", cy: "8.5", r: "5" }),
        i("path", { d: "M17.571 17.5L12 12" }),
      ],
      -1
    ),
  ],
  Re = {
    name: "system-uicons-search",
    render: function (k, p) {
      return d(), g("svg", Oe, Pe);
    },
  },
  Ne = {
    class: "inline-block",
    viewBox: "0 0 21 21",
    width: "1em",
    height: "1em",
  },
  Qe = [
    i(
      "path",
      {
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "m13.5 14.5l-4-4l4-4m-4 8l-4-4l4-4",
      },
      null,
      -1
    ),
  ],
  Se = {
    name: "system-uicons-chevron-left-double",
    render: function (k, p) {
      return d(), g("svg", Ne, Qe);
    },
  },
  Xe = {
    class: "inline-block",
    viewBox: "0 0 21 21",
    width: "1em",
    height: "1em",
  },
  Ye = [
    i(
      "path",
      {
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "m6.5 13.499l4 4.001l4-4.001m-4 4.001v-13",
      },
      null,
      -1
    ),
  ],
  Ee = {
    name: "system-uicons-arrow-down",
    render: function (k, p) {
      return d(), g("svg", Xe, Ye);
    },
  },
  Fe = { class: "flex items-center" },
  Ge = { class: "flex items-center" },
  He = { class: "w-full menu" },
  We = { class: "py-3 menu-list" },
  Je = { key: 0, class: "flex items-center justify-center py-4" },
  dl = ie({
    __name: "index",
    setup(k) {
      const p = r(!0),
        M = {
          title: { required: !0, message: "??????????????????", trigger: "blur" },
          path: { required: !0, message: "???????????????", trigger: "blur" },
        },
        t = re({
          parentId: 0,
          title: "",
          path: "",
          component: "",
          code: "",
          icon: "",
          order: 0,
          name: "",
          redirect: null,
          permissions: "",
        }),
        x = r(!1),
        T = r(!1);
      ue(() => {
        const { userInfo: o } = Ke(Le());
        (y.value = o.value.menuList || []), (p.value = !1);
      });
      const j = r(""),
        f = r(""),
        U = r("");
      let _ = r([]);
      const V = de(() => !_.value.length),
        q = r([
          { label: "??????????????????", key: "home", disabled: !1 },
          { label: "???????????????", key: "son", disabled: V },
        ]),
        A = r(null);
      function D() {
        delete t.children,
          delete t.id,
          (t.permissions = t.permissions.split(",")),
          ve(t.name, t).then((o) => {
            o.code == 200
              ? window.$message.success("????????????")
              : window.$message.error("????????????");
          });
      }
      const O = (o) => {
          (j.value = o === "home" ? "??????????????????" : `??????????????????${f.value}`),
            P();
        },
        $ = r(),
        P = () => {
          const { openDrawer: o } = $.value;
          o();
        };
      let v = r([]);
      const y = r([]);
      function R() {
        v.value.length ? (v.value = []) : (v.value = a(y).map((o) => o.key));
      }
      const w = r("");
      function N(o) {
        if (o.length) {
          U.value = o[0];
          const n = K(a(y), o[0]);
          (_.value = o),
            (f.value = n.title),
            n.permissions &&
              ge(n.permissions) &&
              (n.permissions = n.permissions.join(",")),
            Object.assign(t, n),
            (x.value = !0);
        } else (x.value = !1), (_.value = []), (f.value = "");
      }
      function Q(o) {
        v.value = o;
      }
      function S() {
        const o = K(a(y), _.value[0]);
        Object.assign(t, o);
      }
      function X() {
        window.$dialog.info({
          title: "??????",
          content: "???????????????????????????????",
          positiveText: "??????",
          negativeText: "??????",
          onPositiveClick: () => {
            window.$message.success("????????????");
          },
          onNegativeClick: () => {
            window.$message.error("?????????");
          },
        });
      }
      const Y = () => {
        window.$dialog.info({
          title: "??????",
          content: "???????????????????????????????",
          positiveText: "??????",
          negativeText: "??????",
          onPositiveClick: () => {
            he(f.value).then((o) => {
              window.$message.success("????????????");
            });
          },
          onNegativeClick: () => {
            window.$message.error("?????????");
          },
        });
      };
      return (o, n) => {
        const E = Ee,
          h = ke,
          F = ye,
          G = Se,
          C = _e,
          H = Re,
          c = we,
          W = be,
          J = xe,
          z = Ce,
          B = je,
          Z = De,
          ee = Ve,
          le = Ue,
          u = $e,
          ae = ze,
          te = Be,
          ne = Ie,
          se = oe;
        return (
          d(),
          b(se, null, {
            default: l(() => [
              e(
                ne,
                {
                  cols: "1 s:1 m:1 l:3 xl:3 2xl:3",
                  responsive: "screen",
                  "x-gap": 12,
                },
                {
                  default: l(() => [
                    e(
                      B,
                      { span: "1" },
                      {
                        default: l(() => [
                          e(
                            z,
                            { segmented: { content: !0 }, size: "small" },
                            {
                              header: l(() => [
                                e(C, null, {
                                  default: l(() => [
                                    e(
                                      F,
                                      {
                                        trigger: "hover",
                                        onSelect: O,
                                        options: a(q),
                                      },
                                      {
                                        default: l(() => [
                                          e(
                                            h,
                                            {
                                              type: "info",
                                              ghost: "",
                                              "icon-placement": "right",
                                            },
                                            {
                                              icon: l(() => [
                                                i("div", Fe, [e(E)]),
                                              ]),
                                              default: l(() => [
                                                m(" ???????????? "),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["options"]
                                    ),
                                    e(
                                      h,
                                      {
                                        type: "info",
                                        ghost: "",
                                        "icon-placement": "left",
                                        onClick: R,
                                      },
                                      {
                                        icon: l(() => [i("div", Ge, [e(G)])]),
                                        default: l(() => [
                                          m(
                                            " ??????" +
                                              I(a(v).length ? "??????" : "??????") +
                                              " ",
                                            1
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                              default: l(() => [
                                i("div", He, [
                                  e(
                                    c,
                                    {
                                      type: "text",
                                      value: a(w),
                                      "onUpdate:value":
                                        n[0] ||
                                        (n[0] = (s) =>
                                          ce(w) ? (w.value = s) : null),
                                      placeholder: "????????????????????????",
                                    },
                                    { suffix: l(() => [e(H)]), _: 1 },
                                    8,
                                    ["value"]
                                  ),
                                  i("div", We, [
                                    a(p)
                                      ? (d(),
                                        g("div", Je, [
                                          e(W, { size: "medium" }),
                                        ]))
                                      : (d(),
                                        b(
                                          J,
                                          {
                                            key: 1,
                                            "block-line": "",
                                            cascade: "",
                                            checkable: "",
                                            "key-field": "id",
                                            "label-field": "title",
                                            "children-field": "children",
                                            "virtual-scroll": !0,
                                            pattern: a(w),
                                            data: a(y),
                                            expandedKeys: a(v),
                                            style: {
                                              "max-height": "650px",
                                              overflow: "hidden",
                                            },
                                            "onUpdate:selectedKeys": N,
                                            "onUpdate:expandedKeys": Q,
                                          },
                                          null,
                                          8,
                                          ["pattern", "data", "expandedKeys"]
                                        )),
                                  ]),
                                ]),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    e(
                      B,
                      { span: "2" },
                      {
                        default: l(() => [
                          e(
                            z,
                            {
                              segmented: { content: !0 },
                              bordered: !0,
                              size: "small",
                            },
                            {
                              header: l(() => [
                                e(C, null, {
                                  default: l(() => [
                                    e(Z),
                                    i(
                                      "span",
                                      null,
                                      "????????????" + I(a(f) ? `???${a(f)}` : ""),
                                      1
                                    ),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                              "header-extra": l(() => [
                                e(
                                  h,
                                  {
                                    onClick: Y,
                                    type: "info",
                                    ghost: "",
                                    "icon-placement": "right",
                                  },
                                  {
                                    icon: l(() => [e(ee)]),
                                    default: l(() => [m(" ???????????? ")]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              default: l(() => [
                                e(
                                  le,
                                  { type: "info", closable: "" },
                                  {
                                    default: l(() => [
                                      m(" ?????????????????????????????????????????????"),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                a(x)
                                  ? (d(),
                                    b(
                                      te,
                                      {
                                        key: 0,
                                        model: a(t),
                                        rules: M,
                                        ref_key: "formRef",
                                        ref: A,
                                        "label-placement": "left",
                                        "label-width": 100,
                                        class: "py-4",
                                      },
                                      {
                                        default: l(() => [
                                          e(
                                            u,
                                            { label: "?????????", path: "label" },
                                            {
                                              default: l(() => [
                                                e(
                                                  c,
                                                  {
                                                    placeholder: "??????????????????",
                                                    value: a(t).title,
                                                    "onUpdate:value":
                                                      n[1] ||
                                                      (n[1] = (s) =>
                                                        (a(t).title = s)),
                                                  },
                                                  null,
                                                  8,
                                                  ["value"]
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          e(
                                            u,
                                            { label: "??????", path: "path" },
                                            {
                                              default: l(() => [
                                                e(
                                                  c,
                                                  {
                                                    placeholder: "???????????????",
                                                    value: a(t).path,
                                                    "onUpdate:value":
                                                      n[2] ||
                                                      (n[2] = (s) =>
                                                        (a(t).path = s)),
                                                  },
                                                  null,
                                                  8,
                                                  ["value"]
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          e(
                                            u,
                                            { label: "?????????", path: "name" },
                                            {
                                              default: l(() => [
                                                e(
                                                  c,
                                                  {
                                                    placeholder:
                                                      "?????????????????????",
                                                    value: a(t).name,
                                                    "onUpdate:value":
                                                      n[3] ||
                                                      (n[3] = (s) =>
                                                        (a(t).name = s)),
                                                  },
                                                  null,
                                                  8,
                                                  ["value"]
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          e(
                                            u,
                                            {
                                              label: "??????",
                                              path: "component",
                                            },
                                            {
                                              default: l(() => [
                                                e(
                                                  c,
                                                  {
                                                    placeholder: "???????????????",
                                                    value: a(t).component,
                                                    "onUpdate:value":
                                                      n[4] ||
                                                      (n[4] = (s) =>
                                                        (a(t).component = s)),
                                                  },
                                                  null,
                                                  8,
                                                  ["value"]
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          e(
                                            u,
                                            {
                                              label: "?????????",
                                              path: "redirect",
                                            },
                                            {
                                              default: l(() => [
                                                e(
                                                  c,
                                                  {
                                                    placeholder: "??????????????????",
                                                    value: a(t).redirect,
                                                    "onUpdate:value":
                                                      n[5] ||
                                                      (n[5] = (s) =>
                                                        (a(t).redirect = s)),
                                                  },
                                                  null,
                                                  8,
                                                  ["value"]
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          e(
                                            u,
                                            { label: "??????", path: "icon" },
                                            {
                                              default: l(() => [
                                                e(
                                                  c,
                                                  {
                                                    placeholder: "???????????????",
                                                    value: a(t).icon,
                                                    "onUpdate:value":
                                                      n[6] ||
                                                      (n[6] = (s) =>
                                                        (a(t).icon = s)),
                                                  },
                                                  {
                                                    suffix: l(() => {
                                                      return [
                                                        (d(),
                                                        b(
                                                          pe(
                                                            ((s = a(t).icon),
                                                            s.includes(
                                                              "system-uicons:"
                                                            )
                                                              ? L(s, {
                                                                  size: 20,
                                                                })
                                                              : L(
                                                                  "system-uicons:" +
                                                                    s,
                                                                  {
                                                                    size: 20,
                                                                  }
                                                                ))
                                                          )
                                                        )),
                                                      ];
                                                      var s;
                                                    }),
                                                    _: 1,
                                                  },
                                                  8,
                                                  ["value"]
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          e(
                                            u,
                                            { label: "????????????", path: "code" },
                                            {
                                              default: l(() => [
                                                e(
                                                  c,
                                                  {
                                                    placeholder: "???????????????",
                                                    value: a(t).code,
                                                    "onUpdate:value":
                                                      n[7] ||
                                                      (n[7] = (s) =>
                                                        (a(t).code = s)),
                                                  },
                                                  null,
                                                  8,
                                                  ["value"]
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          e(
                                            u,
                                            {
                                              label: "??????????????????",
                                              path: "permissions",
                                            },
                                            {
                                              default: l(() => [
                                                e(
                                                  c,
                                                  {
                                                    placeholder:
                                                      "??????????????????????????????????????????????????????",
                                                    value: a(t).permissions,
                                                    "onUpdate:value":
                                                      n[8] ||
                                                      (n[8] = (s) =>
                                                        (a(t).permissions = s)),
                                                  },
                                                  null,
                                                  8,
                                                  ["value"]
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          e(
                                            u,
                                            { label: "??????", path: "order" },
                                            {
                                              default: l(() => [
                                                e(
                                                  ae,
                                                  {
                                                    value: a(t).order,
                                                    "onUpdate:value":
                                                      n[9] ||
                                                      (n[9] = (s) =>
                                                        (a(t).order = s)),
                                                  },
                                                  null,
                                                  8,
                                                  ["value"]
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          e(
                                            u,
                                            {
                                              path: "auth",
                                              style: { "margin-left": "100px" },
                                            },
                                            {
                                              default: l(() => [
                                                e(C, null, {
                                                  default: l(() => [
                                                    e(
                                                      h,
                                                      {
                                                        type: "primary",
                                                        loading: a(T),
                                                        onClick: D,
                                                      },
                                                      {
                                                        default: l(() => [
                                                          m("????????????"),
                                                        ]),
                                                        _: 1,
                                                      },
                                                      8,
                                                      ["loading"]
                                                    ),
                                                    e(
                                                      h,
                                                      { onClick: S },
                                                      {
                                                        default: l(() => [
                                                          m("??????"),
                                                        ]),
                                                        _: 1,
                                                      }
                                                    ),
                                                    e(
                                                      h,
                                                      { onClick: X },
                                                      {
                                                        default: l(() => [
                                                          m("??????"),
                                                        ]),
                                                        _: 1,
                                                      }
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["model"]
                                    ))
                                  : me("", !0),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
              e(
                fe,
                {
                  ref_key: "createDrawerRef",
                  ref: $,
                  title: a(j),
                  parentId: a(U),
                },
                null,
                8,
                ["title", "parentId"]
              ),
            ]),
            _: 1,
          })
        );
      };
    },
  });
export { dl as default };
