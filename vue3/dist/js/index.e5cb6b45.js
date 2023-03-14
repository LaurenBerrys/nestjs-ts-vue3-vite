import { _ as R } from "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import { b, o as u, _ as v } from "./Table.e9c997d5.js";
import {
  c as x,
  a as z,
  _ as A,
} from "./index.vue_vue_type_script_setup_true_name_addRolesModel_lang.60b391e0.js";
import { _ as B } from "./index.vue_vue_type_script_setup_true_name_AssignPermissions_lang.b0e76625.js";
import { g as L } from "./roles.dd418478.js";
import { e as P, u as j } from "./NvapForm.feb8550d.js";
import {
  d as q,
  a as f,
  r as E,
  c as I,
  P as K,
  V as M,
  W as t,
  k as i,
  l as S,
  u as m,
} from "./vue.a7ce1fbe.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./vue-router.805f6e2a.js";
import "./vue-i18n.67a42238.js";
import "./NvapModal.fd7e16d9.js";
import "./useModal.2b33d697.js";
import "./useForm.341ff8a8.js";
import "./index.f5ae9169.js";
import "./axios.9678a311.js";
const ss = q({
  __name: "index",
  setup(U) {
    const { userInfo: p } = b(),
      l = f(),
      c = f(),
      d = E({ pageSize: 10, name: null }),
      _ = (s) => {},
      y = async (s) => {
        let r = { ...m(d), ...s };
        const { data: a } = await L(r);
        return a;
      },
      k = async (s) => {
        const r = u(p.menuList) || [];
        s.permissions || (s.permissions = []);
        const a = async (e) => {
          e.forEach((o) => {
            if (o.permissions) {
              const n = j(o.permissions)
                ? o.permissions
                : o.permissions.split(",");
              o.permissions = n.filter((C) => s.permissions.includes(C));
            }
            o.children && a(o.children);
          });
        };
        await a(r), c.value.open(r, s);
      },
      w = (s) => {},
      h = I(() => u(p.menuList) || []),
      g = async () => {
        await l.value.open(h);
      };
    return (s, r) => {
      const a = P,
        e = v,
        o = R;
      return (
        K(),
        M(o, null, {
          default: t(() => [
            i(
              e,
              {
                columns: m(x),
                request: y,
                "row-key": (n) => n.id,
                ref: "actionRef",
                actionColumn: m(z)(k, w),
                "onUpdate:checkedRowKeys": _,
              },
              {
                tableButton: t(() => [
                  i(
                    a,
                    { type: "primary", size: "small", onClick: g },
                    { default: t(() => [S("添加角色")]), _: 1 }
                  ),
                ]),
                _: 1,
              },
              8,
              ["columns", "row-key", "actionColumn"]
            ),
            i(B, { ref_key: "Assign", ref: c }, null, 512),
            i(A, { ref_key: "modalRef", ref: l }, null, 512),
          ]),
          _: 1,
        })
      );
    };
  },
});
export { ss as default };
