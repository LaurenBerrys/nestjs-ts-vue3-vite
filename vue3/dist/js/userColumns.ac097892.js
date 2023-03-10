import "./Table.e9c997d5.js";
import { T as o } from "./useForm.341ff8a8.js";
import { r as s, h as n } from "./vue.a7ce1fbe.js";
const i = [
    { title: "id", key: "id" },
    { title: "用户名称", key: "name" },
    { title: "角色", key: "roles" },
  ],
  u = (l, r) =>
    s({
      width: 250,
      title: "操作",
      key: "action",
      fixed: "right",
      render: (e) =>
        n(o, {
          style: "button",
          actions: [
            { label: "配置角色", onClick: l.bind(null, e), ifShow: () => !0 },
            { label: "删除", onClick: r.bind(null, e), ifShow: () => !0 },
          ],
        }),
    }),
  d = [
    {
      field: "name",
      component: "NInput",
      label: "账户名",
      labelMessage: "请输入账户名",
      giProps: { span: 1 },
      componentProps: { placeholder: "请输入账户名", onInput: () => {} },
      rules: [{ required: !0, message: "请输入账户名", trigger: ["blur"] }],
    },
    {
      field: "realName",
      component: "NInput",
      label: "昵称",
      labelMessage: "请输入昵称",
      giProps: { span: 1 },
      componentProps: { placeholder: "请输入昵称", onInput: () => {} },
      rules: [{ required: !0, message: "请输入昵称", trigger: ["blur"] }],
    },
    {
      field: "password",
      component: "NInput",
      label: "密码",
      labelMessage: "请输入密码",
      giProps: { span: 1 },
      componentProps: { placeholder: "请输入密码", onInput: () => {} },
      rules: [{ required: !0, message: "密码不能为空", trigger: ["blur"] }],
    },
    {
      field: "repassed",
      component: "NInput",
      label: "确认密码",
      labelMessage: "请输入确认密码",
      giProps: { span: 1 },
      componentProps: { placeholder: "请输入确认密码", onInput: () => {} },
      rules: [{ required: !0, message: "确认密码不能为空", trigger: ["blur"] }],
    },
  ];
export { u as a, i as c, d as s };
