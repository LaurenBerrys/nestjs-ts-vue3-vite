import { _ as w } from "./NvapModal.fd7e16d9.js";
import { u as M } from "./useModal.2b33d697.js";
import { u as x } from "./index.f5ae9169.js";
import {
  d as u,
  a as e,
  P as R,
  V as _,
  W as b,
  k as j,
  u as n,
  j as k,
} from "./vue.a7ce1fbe.js";
import { n as y } from "./NvapForm.feb8550d.js";
const O = u({ name: "assignRoles" }),
  W = u({
    ...O,
    setup($, { expose: i }) {
      const [p, { openModal: m, closeModal: c, setSubLoading: d }] = M({
          title: "分配角色",
        }),
        s = e([]),
        l = e([]),
        t = e({});
      i({
        open: async (r, a, o) => {
          (t.value = r), (s.value = a), (l.value = o), m();
        },
      });
      const v = async () => {
        (await x(t.value.id, { roles: s.value })).code == 200
          ? (c(), window.$message.success("分配成功"))
          : (window.$message.error("分配失败"), d(!1));
      };
      return (r, a) => {
        const o = y,
          f = w;
        return (
          R(),
          _(
            f,
            { onRegister: n(p), class: "NvapModal", onOnOk: v },
            {
              default: b(() => [
                j(
                  o,
                  {
                    value: n(s),
                    "onUpdate:value":
                      a[0] || (a[0] = (g) => (k(s) ? (s.value = g) : null)),
                    multiple: "",
                    options: n(l),
                  },
                  null,
                  8,
                  ["value", "options"]
                ),
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
export { W as _ };
