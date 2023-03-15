/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-28 19:37:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-13 17:33:42
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/system/roles/rolesColumns.ts
 * @Description:
 *
 */
import { FormSchema } from '@/components/Form';
import { TableAction } from '@/components/Table';
import { NTag } from 'naive-ui';
export const columns = [
  {
    title: 'id',
    key: 'id',
  },
  {
    title: '角色名称',
    key: 'name',
    render: (row) => {
      return h(
        NTag,
        {
          type: 'success',
        },
        {
          default: () => row.name,
        }
      );
    },
  },
];
export const action = (handeone, hand) => {
  const actionColumn = reactive({
    width: 250,
    title: '操作',
    key: 'action',
    fixed: 'right',
    render(record) {
      return h(TableAction, {
        style: 'button',
        actions: [
          {
            label: '权限分配',
            onClick: handeone.bind(null, record),
            ifShow: () => {
              return true;
            },
            // auth: ["basic_list"],
          },
          {
            label: '删除',
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
  return actionColumn;
};
export const schemas: FormSchema[] = [
  {
    field: 'name',
    component: 'NInput',
    label: '姓名',
    labelMessage: '请输入名字',
    giProps: {
      span: 1,
    },
    componentProps: {
      placeholder: '请输入姓名',
      onInput: () => {},
    },
    rules: [{ required: true, message: '请输入姓名', trigger: ['blur'] }],
  },
  {
    field: 'code',
    component: 'NTreeSelect',
    label: '菜单',
    labelMessage: '请选择菜单',
    giProps: {
      span: 1,
    },
    componentProps: {
      placeholder: '请选择菜单',
    },
  },
];
