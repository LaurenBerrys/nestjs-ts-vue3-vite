import { _ as l } from "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import { _ as u } from "./Table.e9c997d5.js";
import {
  d as c,
  a5 as f,
  P as m,
  V as s,
  W as t,
  k as e,
  x as d,
  l as o,
  R as _,
} from "./vue.a7ce1fbe.js";
import { e as x } from "./NvapForm.feb8550d.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./vue-router.805f6e2a.js";
import "./vue-i18n.67a42238.js";
const y = _(
    "h2",
    {
      "text-22": "",
      "font-normal": "",
      "text-hex-333": "",
      "dark:text-hex-ccc": "",
    },
    "表格",
    -1
  ),
  j = c({
    __name: "index",
    setup(k) {
      const a = () => {};
      return (h, C) => {
        const r = x,
          i = u,
          n = l,
          p = f("permission");
        return (
          m(),
          s(n, null, {
            header: t(() => [y]),
            default: t(() => [
              e(i, null, {
                tableButton: t(() => [
                  d(
                    (m(),
                    s(
                      r,
                      { "m-10": "", type: "primary", onClick: a },
                      { default: t(() => [o("新增")]), _: 1 }
                    )),
                    [[p, "permission"]]
                  ),
                  e(
                    r,
                    { "m-10": "", type: "primary", onClick: a },
                    { default: t(() => [o("删除")]), _: 1 }
                  ),
                  e(
                    r,
                    { "m-10": "", type: "primary", onClick: a },
                    { default: t(() => [o("搜索")]), _: 1 }
                  ),
                ]),
                _: 1,
              }),
            ]),
            _: 1,
          })
        );
      };
    },
  });
export { j as default };
