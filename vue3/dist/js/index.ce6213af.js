import { _ as x } from "./layout.302f7a70.js";
import {
  d as k,
  a as w,
  P as b,
  V as _,
  W as g,
  R as e,
  k as n,
  l as f,
  _ as $,
  u as a,
  ag as M,
  M as R,
} from "./vue.a7ce1fbe.js";
import { _ as j } from "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import { s as q, p as K, b as P } from "./Table.e9c997d5.js";
import { l as U } from "./index.f5ae9169.js";
import { u as C, b as I } from "./vue-router.805f6e2a.js";
import { l as T, d as A, e as B } from "./NvapForm.feb8550d.js";
import "./vue-i18n.67a42238.js";
import "./axios.9678a311.js";
const F = {
    style: { transform: "translateY(25px)" },
    class:
      "m-auto p-15 f-c-c min-w-345 max-w-700 rounded-10 card-shadow bg-white",
    "dark:bg-dark": "",
  },
  S = e(
    "div",
    { "w-380": "", hidden: "", "md:block": "", "px-20": "", "py-35": "" },
    [
      e("img", {
        src: "/assets/login_banner.9a2c5794.jpg",
        "w-full": "",
        alt: "login_banner",
      }),
    ],
    -1
  ),
  V = { "w-320": "", "flex-col": "", "px-20": "", "py-35": "" },
  W = { "f-c-c": "", "text-24": "", "font-normal": "", color: "#6a6a6a" },
  Y = { "mt-30": "" },
  z = { "mt-30": "" },
  D = { "mt-20": "" },
  E = { "mt-20": "" },
  ae = k({
    __name: "index",
    setup(G) {
      const h = q.title,
        i = C(),
        { query: l } = I(),
        t = w({ name: "", password: "" }),
        p = K("isRemember", !1),
        c = w(!1);
      async function u() {
        const { name: d, password: s } = t.value;
        if (d && s) {
          try {
            (c.value = !0), window.$message.loading("正在验证...");
            const o = await U({ name: d, password: s.toString() });
            if (
              (window.$message.success("登录成功", o.data.token),
              P().setToken(o.data.token, d),
              l.redirect)
            ) {
              const m = l.redirect;
              Reflect.deleteProperty(l, "redirect"),
                i.push({ path: m, query: l });
            } else i.push("/");
          } catch {
            window.$message.removeMessage();
          }
          c.value = !1;
        } else window.$message.warning("请输入用户名和密码");
      }
      return (d, s) => {
        const o = x,
          m = T,
          v = A,
          y = B;
        return (
          b(),
          _(
            j,
            {
              "show-footer": !0,
              "bg-cover": "",
              style: R({
                backgroundImage: `url(${a("/assets/login_bg.acaecc59.jpg")})`,
              }),
            },
            {
              default: g(() => [
                e("div", F, [
                  S,
                  e("div", V, [
                    e("h5", W, [
                      n(o, { "mr-10": "", "text-50": "", "color-primary": "" }),
                      f($(a(h)), 1),
                    ]),
                    e("div", Y, [
                      n(
                        m,
                        {
                          value: a(t).name,
                          "onUpdate:value":
                            s[0] || (s[0] = (r) => (a(t).name = r)),
                          autofocus: "",
                          class: "text-16 items-center h-50 pl-10",
                          placeholder: "admin",
                          maxlength: 20,
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                    e("div", z, [
                      n(
                        m,
                        {
                          value: a(t).password,
                          "onUpdate:value":
                            s[1] || (s[1] = (r) => (a(t).password = r)),
                          class: "text-16 items-center h-50 pl-10",
                          type: "password",
                          "show-password-on": "mousedown",
                          placeholder: "123456",
                          maxlength: 20,
                          onKeydown: M(u, ["enter"]),
                        },
                        null,
                        8,
                        ["value", "onKeydown"]
                      ),
                    ]),
                    e("div", D, [
                      n(
                        v,
                        {
                          checked: a(p),
                          label: "记住我",
                          "on-update:checked": (r) => (p.value = r),
                        },
                        null,
                        8,
                        ["checked", "on-update:checked"]
                      ),
                    ]),
                    e("div", E, [
                      n(
                        y,
                        {
                          "w-full": "",
                          "h-50": "",
                          "rounded-5": "",
                          "text-16": "",
                          type: "primary",
                          loading: a(c),
                          onClick: u,
                        },
                        { default: g(() => [f(" 登录 ")]), _: 1 },
                        8,
                        ["loading"]
                      ),
                    ]),
                  ]),
                ]),
              ]),
              _: 1,
            },
            8,
            ["style"]
          )
        );
      };
    },
  });
export { ae as default };
