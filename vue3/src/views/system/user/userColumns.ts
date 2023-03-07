/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-01 16:13:25
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-07 15:16:34
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/system/user/userColumns.ts
 * @Description:
 * 
 */
import { FormSchema } from "@/components/Form/index";
import { TableAction } from "@/components/Table";
export const columns = [
    {
        title: 'id',
        key: 'id',
    },
    {
        title: '用户名称',
        key: 'name',
    },
    {
        title: '角色',
        key: 'roles',
    }
];
export const action = (handeone, hand) => {
    const actionColumn = reactive({
        width: 250,
        title: "操作",
        key: "action",
        fixed: "right",
        render(record) {
            return h(TableAction, {
                style: "button",
                actions: [
                    {
                        label: "配置角色",
                        onClick: handeone.bind(null, record),
                        ifShow: () => {
                            return true;
                        },
                        // auth: ["basic_list"],
                    },
                    {
                        label: "删除",
                        onClick: hand.bind(null, record),
                        ifShow: () => {
                            return true;
                        },
                        // auth: ["basic_list"],
                    },
                ]
            });
        },
    });
    return actionColumn
}

export const schemas:FormSchema[] = [
        {
          field: "name",
          component: "NInput",
          label: "账户名",
          labelMessage: "请输入账户名",
          giProps: {
            span: 1,
          },
          componentProps: {
            placeholder: "请输入账户名",
            onInput:()=>{}
          },
          rules: [{ required: true, message: "请输入账户名", trigger: ["blur"] }],
        },
        {
            field: "realName",
            component: "NInput",
            label: "昵称",
            labelMessage: "请输入昵称",
            giProps: {
              span: 1,
            },
            componentProps: {
              placeholder: "请输入昵称",
              onInput: ()=>{},
            },
            rules: [{ required: true, message: "请输入昵称", trigger: ["blur"] }],
          },
        {
          field: "password",
          component: "NInput",
          label: "密码",
          labelMessage: "请输入密码",
          giProps: {
            span: 1,
          },
          componentProps: {
            placeholder: "请输入密码",
            onInput:()=>{},
          },
          rules: [{ required: true, message: "密码不能为空", trigger: ["blur"] }],
        },
        {
            field: "repassed",
            component: "NInput",
            label: "确认密码",
            labelMessage: "请输入确认密码",
            giProps: {
              span: 1,
            },
            componentProps: {
              placeholder: "请输入确认密码",
              onInput:()=>{},
            },
            rules: [{ required: true, message: "确认密码不能为空", trigger: ["blur"] }],
          },
      ]
