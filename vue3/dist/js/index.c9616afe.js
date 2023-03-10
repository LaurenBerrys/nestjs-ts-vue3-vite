import { _ as b } from "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import { n as x, _ as C } from "./Table.e9c997d5.js";
import { _ as S } from "./index.vue_vue_type_script_setup_true_name_assignRoles_lang.bff74583.js";
import { _ as M } from "./NvapModal.fd7e16d9.js";
import { ad as $, e as z } from "./NvapForm.feb8550d.js";
import { s as P, c as U, a as B } from "./userColumns.ac097892.js";
import { u as O } from "./useModal.2b33d697.js";
import { u as T } from "./useForm.341ff8a8.js";
import { c as V, g as W, d as j } from "./index.f5ae9169.js";
import {
  d as w,
  P as k,
  V as R,
  W as m,
  k as t,
  u as n,
  r as q,
  a as g,
  o as A,
  l as F,
} from "./vue.a7ce1fbe.js";
import { g as G } from "./roles.dd418478.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./vue-router.805f6e2a.js";
import "./vue-i18n.67a42238.js";
import "./axios.9678a311.js";
const K = w({ name: "addUser" }),
  L = w({
    ...K,
    setup(h, { expose: u }) {
      const [r, { openModal: i, closeModal: o, setSubLoading: y }] = O({
          title: "新增用户",
        }),
        [d, { submit: v, validate: _, getFieldsValue: p, setSchemas: s }] = T({
          gridProps: { cols: 1 },
          collapsedRows: 3,
          labelWidth: 120,
          layout: "horizontal",
          showActionButtonGroup: !1,
          schemas: P,
        });
      u({
        open: async (a) => {
          i();
        },
      });
      const e = async () => {
        const a = p(),
          { code: l, msg: c } = await V(a);
        l == 200 && (window.$message.success("新增成功"), o());
      };
      return (a, l) => {
        const c = $,
          f = M;
        return (
          k(),
          R(
            f,
            { onRegister: n(r), class: "NvapModal", onOnOk: e },
            {
              default: m(() => [
                t(c, { onRegister: n(d) }, null, 8, ["onRegister"]),
              ]),
              _: 1,
            },
            8,
            ["onRegister"]
          )
        );
      };
    },
  }),
  ne = w({
    __name: "index",
    setup(h) {
      const u = q({ pageSize: 10, name: null }),
        r = g(),
        i = g(),
        o = g([]),
        y = async (s) => {
          let e = { ...n(u), ...s };
          const { data: a } = await W(e);
          return a;
        },
        d = async (s) => {
          let e = [];
          x(s, "roles") &&
            o.value.filter((a) => {
              s.roles.includes(a.value) && e.push(a.value);
            }),
            (e = [...new Set(e)]),
            i.value.open(s, e, o.value);
        };
      A(async () => {
        const { data: s } = await G({ pageSize: 200 });
        o.value = s.list.map((e) => ({ label: e.name, value: e.id }));
      });
      const v = (s) => {
          window.$dialog.info({
            title: "提示",
            content: "您确定想删除此用户吗?",
            positiveText: "确定",
            negativeText: "取消",
            onPositiveClick: async () => {
              const { code: e, msg: a } = await j(s.id);
              e == 200
                ? window.$message.success("删除成功")
                : window.$message.error(a);
            },
            onNegativeClick: () => {
              window.$message.error("已取消");
            },
          });
        },
        _ = () => {},
        p = () => {
          r.value.open();
        };
      return (s, e) => {
        const a = z,
          l = C,
          c = b;
        return (
          k(),
          R(c, null, {
            default: m(() => [
              t(
                l,
                {
                  columns: n(U),
                  request: y,
                  "row-key": (f) => f.id,
                  ref: "actionRef",
                  actionColumn: n(B)(d, v),
                  "onUpdate:checkedRowKeys": _,
                },
                {
                  tableButton: m(() => [
                    t(
                      a,
                      { type: "primary", size: "small", onClick: p },
                      { default: m(() => [F("添加用户")]), _: 1 }
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["columns", "row-key", "actionColumn"]
              ),
              t(L, { ref_key: "addUse", ref: r }, null, 512),
              t(S, { ref_key: "assignRole", ref: i }, null, 512),
            ]),
            _: 1,
          })
        );
      };
    },
  });
export { ne as default };
