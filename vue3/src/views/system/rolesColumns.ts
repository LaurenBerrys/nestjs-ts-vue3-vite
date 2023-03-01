/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-28 19:37:37
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-01 17:23:47
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
            label: "菜单权限",
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
        ],
      });
    },
  });
 return  actionColumn
}