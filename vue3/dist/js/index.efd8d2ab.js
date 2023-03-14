import { _ as u } from "./NvapModal.fd7e16d9.js";
import { ad as f } from "./NvapForm.feb8550d.js";
import { s as g } from "./userColumns.ac097892.js";
import { u as h } from "./useModal.2b33d697.js";
import { u as w } from "./useForm.341ff8a8.js";
import { c as R } from "./index.f5ae9169.js";
import { d as e, P as b, V as M, W as y, k, u as a } from "./vue.a7ce1fbe.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./vue-router.805f6e2a.js";
import "./axios.9678a311.js";
const v = e({ name: "addUser" }),
  q = e({
    ...v,
    setup(x, { expose: r }) {
      const [i, { openModal: m, closeModal: n, setSubLoading: O }] = h({
          title: "新增用户",
        }),
        [l, { submit: P, validate: S, getFieldsValue: p, setSchemas: V }] = w({
          gridProps: { cols: 1 },
          collapsedRows: 3,
          labelWidth: 120,
          layout: "horizontal",
          showActionButtonGroup: !1,
          schemas: g,
        });
      r({
        open: async (s) => {
          m();
        },
      });
      const c = async () => {
        const s = p(),
          { code: o, msg: t } = await R(s);
        o == 200 && (window.$message.success("新增成功"), n());
      };
      return (s, o) => {
        const t = f,
          d = u;
        return (
          b(),
          M(
            d,
            { onRegister: a(i), class: "NvapModal", onOnOk: c },
            {
              default: y(() => [
                k(t, { onRegister: a(l) }, null, 8, ["onRegister"]),
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
export { q as default };
