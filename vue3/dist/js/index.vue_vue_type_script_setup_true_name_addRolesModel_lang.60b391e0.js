import { _ as F } from "./NvapModal.fd7e16d9.js";
import { l as S, ad as v } from "./NvapForm.feb8550d.js";
import { u as _ } from "./useModal.2b33d697.js";
import { T as x, u as U } from "./useForm.341ff8a8.js";
import "./Table.e9c997d5.js";
import {
  r as V,
  h as C,
  d,
  P as I,
  V as N,
  W as n,
  k as r,
  u as s,
} from "./vue.a7ce1fbe.js";
import { c as O } from "./roles.dd418478.js";
const D = [
    { title: "id", key: "id" },
    { title: "角色名称", key: "name" },
  ],
  E = (a, l) =>
    V({
      width: 250,
      title: "操作",
      key: "action",
      fixed: "right",
      render: (o) =>
        C(x, {
          style: "button",
          actions: [
            { label: "权限分配", onClick: a.bind(null, o), ifShow: () => !0 },
            { label: "删除", onClick: l.bind(null, o), ifShow: () => !0 },
          ],
        }),
    }),
  T = [
    {
      field: "name",
      component: "NInput",
      label: "姓名",
      labelMessage: "请输入名字",
      giProps: { span: 1 },
      componentProps: { placeholder: "请输入姓名", onInput: (a) => {} },
      rules: [{ required: !0, message: "请输入姓名", trigger: ["blur"] }],
    },
    {
      field: "code",
      component: "NTreeSelect",
      label: "菜单",
      labelMessage: "请选择菜单",
      giProps: { span: 1 },
      componentProps: { placeholder: "请选择菜单" },
    },
  ],
  W = d({ name: "addRolesModel" }),
  H = d({
    ...W,
    setup(a, { expose: l }) {
      const [o, { openModal: c, closeModal: p, setSubLoading: m }] = _({
          title: "添加角色",
        }),
        [u, { submit: $, validate: f, getFieldsValue: g, setSchemas: b }] = U({
          gridProps: { cols: 1 },
          collapsedRows: 3,
          labelWidth: 120,
          layout: "horizontal",
          showActionButtonGroup: !1,
          schemas: T,
        }),
        h = async () => {
          try {
            if (!(await f())) {
              const e = g();
              await O(e), p(), window.$message.success("提交成功");
            }
          } catch {
            window.$message.error("验证失败，请填写完整信息"), m(!1);
          }
        };
      l({
        open: async (e) => {
          await b("code", {
            componentProps: {
              placeholder: "请选择菜单",
              options: s(e),
              multiple: !0,
              keyField: "code",
              labelField: "title",
              childrenField: "children",
              onUpdateValue: (y) => {},
            },
          }),
            c();
        },
      });
      const w = () => {};
      return (e, y) => {
        const k = S,
          R = v,
          M = F;
        return (
          I(),
          N(
            M,
            { onRegister: s(o), class: "NvapModal", onOnOk: h },
            {
              default: n(() => [
                r(
                  R,
                  {
                    ref: "formRef",
                    onRegister: s(u),
                    onReset: w,
                    class: "NvapForm",
                  },
                  {
                    statusSlot: n(({ model: t, field: i }) => [
                      r(
                        k,
                        { value: t[i], "onUpdate:value": (P) => (t[i] = P) },
                        null,
                        8,
                        ["value", "onUpdate:value"]
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["onRegister"]
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
export { H as _, E as a, D as c };
