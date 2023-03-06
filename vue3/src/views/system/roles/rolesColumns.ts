/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-28 19:37:37
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-03 21:21:36
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/system/rolesColumns.ts
 * @Description: 
 * 
 */
import { FormSchema } from "@/components/Form";
import {TableAction } from "@/components/Table";
export const columns = [
  {
    title: 'id',
    key: 'id',
  },
  {
    title: '角色名称',
    key: 'name',
  },
];
export  const action =(handeone,hand)=>{
  const  actionColumn=reactive({
    width: 250,
    title: "操作",
    key: "action",
    fixed: "right",
    render(record) {
      return h(TableAction, {
        style: "button",
        actions: [
          {
            label: "权限分配",
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
            // auth: ["table-delete"],
          },
        ],
      });
    },
  });
 return  actionColumn
}
export const schemas: FormSchema[] = [
  {
    field: "name",
    component: "NInput",
    label: "姓名",
    labelMessage: "请输入名字",
    giProps: {
      span: 1,
    },
    componentProps: {
      placeholder: "请输入姓名",
      onInput: (e: any) => {},
    },
    rules: [{ required: true, message: "请输入姓名", trigger: ["blur"] }],
  },
  {
    field: "code",
    component: "NTreeSelect",
    label: "菜单",
    labelMessage: "请选择菜单",
    giProps: {
      span: 1,
    },
    componentProps: {
      placeholder: "请选择菜单",
    },
  },
];

