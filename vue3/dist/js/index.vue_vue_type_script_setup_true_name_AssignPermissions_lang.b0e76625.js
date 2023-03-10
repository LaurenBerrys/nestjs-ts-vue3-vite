import { _ as S } from "./NvapModal.fd7e16d9.js";
import {
  d as b,
  a as p,
  P as $,
  V as z,
  W as h,
  R as g,
  k as u,
  u as a,
  l as y,
  x,
  v as k,
  _ as B,
  j as L,
} from "./vue.a7ce1fbe.js";
import { u as V } from "./useModal.2b33d697.js";
import {
  u as F,
  ag as W,
  ap as X,
  X as q,
  l as D,
} from "./NvapForm.feb8550d.js";
import { u as E } from "./roles.dd418478.js";
const G = { flex: "" },
  H = {
    style: {
      padding: "0 40px",
      display: "flex",
      "flex-direction": "column",
      "align-items": "center",
    },
  },
  I = { flex: "", "justify-between": "", "w-360": "" },
  J = b({ name: "AssignPermissions" }),
  se = b({
    ...J,
    setup(N, { expose: _ }) {
      let f;
      const d = p([]),
        v = p([]),
        c = p([]);
      _({
        open: (e, s) => {
          (d.value = e),
            (f = s),
            (c.value = s.code),
            (v.value = d.value.map((l) => l.code)),
            K();
        },
      });
      const [M, { openModal: K, closeModal: U, setSubLoading: j }] = V({
          title: "分配菜单和按钮权限",
          style: { width: "800px" },
        }),
        r = p(""),
        m = p(),
        w = (e) => {
          const s = a(r);
          for (let l = 0; l < d.value.length; l++) {
            const t = d.value[l];
            if (t.title === s) return (t.permissions = e.split(",")), !0;
            if (t.children && t.children.length && w(t.children)) return !0;
          }
        },
        R = (e) => {
          (e = e.map((s) => s.trim())), (e = [...new Set(e)]), (c.value = e);
        },
        A = (e) => {
          v.value = e;
        },
        C = ({ option: e }) => ({
          onClick() {
            (r.value = e.title),
              (m.value = F(e.permissions)
                ? e.permissions.join(",")
                : e.permissions ?? "");
          },
        }),
        O = () => {
          const e = [],
            s = (o) => {
              for (let i = 0; i < o.length; i++) {
                let n = o[i];
                n.permissions && e.push(...n.permissions),
                  n.children && n.children.length > 0 && s(n.children);
              }
            };
          s(d.value), (f.code = c.value);
          const { id: l, code: t } = f;
          E(l, { code: t, permissions: e }).then(({ code: o, msg: i }) => {
            o == 200
              ? (window.$message.success(i), U())
              : (window.$message(i), j(!1));
          });
        };
      return (e, s) => {
        const l = W,
          t = X,
          o = q,
          i = D,
          n = S;
        return (
          $(),
          z(
            n,
            { onRegister: a(M), class: "NvapModal", onOnOk: O },
            {
              default: h(() => [
                g("div", G, [
                  u(
                    l,
                    {
                      style: {
                        "max-height": "950px",
                        width: "400px",
                        overflow: "hidden",
                      },
                      "block-line": "",
                      cascade: "",
                      checkable: "",
                      "key-field": "code",
                      "label-field": "title",
                      "children-field": "children",
                      "virtual-scroll": !0,
                      data: a(d),
                      expandedKeys: a(v),
                      "checked-keys": a(c),
                      "default-checked-keys": a(c),
                      "node-props": C,
                      "onUpdate:checkedKeys": R,
                      "onUpdate:expandedKeys": A,
                    },
                    null,
                    8,
                    [
                      "data",
                      "expandedKeys",
                      "checked-keys",
                      "default-checked-keys",
                    ]
                  ),
                  g("div", H, [
                    u(
                      t,
                      { type: "success", italic: !0 },
                      {
                        default: h(() => [
                          y(
                            ' 添加按钮权限的时候，尽量取名为，组件名+"-"+按钮名 如：User-AddButton '
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    g("div", I, [
                      x(
                        u(
                          o,
                          {
                            bordered: !1,
                            type: "error",
                            style: { "margin-right": "10px" },
                          },
                          { default: h(() => [y(" 按钮权限 ")]), _: 1 },
                          512
                        ),
                        [[k, a(r)]]
                      ),
                      x(
                        u(
                          o,
                          {
                            bordered: !1,
                            type: "success",
                            style: { "margin-bottom": "10px" },
                          },
                          { default: h(() => [y(B(a(r)), 1)]), _: 1 },
                          512
                        ),
                        [[k, a(r)]]
                      ),
                    ]),
                    x(
                      u(
                        i,
                        {
                          size: "small",
                          value: a(m),
                          "onUpdate:value":
                            s[0] ||
                            (s[0] = (P) => (L(m) ? (m.value = P) : null)),
                          placeholder: "请输入按钮权限",
                          onChange: w,
                        },
                        null,
                        8,
                        ["value"]
                      ),
                      [[k, a(r)]]
                    ),
                  ]),
                ]),
              ]),
              _: 1,
            },
            8,
            ["onRegister"]
          )
        );
      };
    },
  });
export { se as _ };
