/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-01 16:13:25
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-01 17:16:34
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/system/userColumns.ts
 * @Description:
 * 
 */
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
