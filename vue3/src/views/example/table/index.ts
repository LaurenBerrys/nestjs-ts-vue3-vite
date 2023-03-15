import { FormSchema } from '@/components/Form';
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
export const columns2 = [
  {
    title: 'id',
    key: 'id',
  },
  {
    title: '角色名称',
    key: 'name',
    edit: true,
    editComponent: 'NInput',
  },
  {
    title: '角色类型',
    key: 'nametype',
    edit: true,
    editComponent: 'NSelect',
    editComponentProps: {
      options: [
        {
          label: '管理员',
          value: 1,
        },
        {
          label: '测试',
          value: 2,
        },
      ],
    },
    ellipsis: false,
  },
  {
    title: '角色是否启用',
    key: 'switch',
    edit: true,
    editComponent: 'NSwitch',
    editValueMap: (value) => {
      return value ? '启用' : '禁用';
    },
    // render: (row) => {
    //   return h(
    //     NTag,
    //     {
    //       type: "success",
    //     },
    //     {
    //       default: () => row.switch?'启用':'禁用',
    //     }
    //   );
    // }
  },
];
export const schemas: FormSchema[] = [
  {
    field: 'name',
    label: '名称',
    component: 'NInput',
    giProps: { span: 3 },
    componentProps: {
      placeholder: '请输入姓名',
      onInput: () => {},
    },
    rules: [{ required: true, message: '请输入姓名', trigger: ['blur'] }],
  },
  {
    field: 'age',
    label: '性别',
    component: 'NInput',
    giProps: { span: 3 },
    componentProps: {
      placeholder: '请输入性别',
      onInput: () => {},
    },
    rules: [{ required: true, message: '请输入性别', trigger: ['blur'] }],
  },
  {
    field: 'age',
    label: '性别',
    component: 'NInput',
    giProps: { span: 3 },
    componentProps: {
      placeholder: '请输入性别',
      onInput: () => {},
    },
    rules: [{ required: true, message: '请输入性别', trigger: ['blur'] }],
  },
  {
    field: 'age',
    label: '性别',
    component: 'NInput',
    giProps: { span: 3 },
    componentProps: {
      placeholder: '请输入性别',
      onInput: () => {},
    },
    rules: [{ required: true, message: '请输入性别', trigger: ['blur'] }],
  },
];
export const data = {
  pageSize: 10,
  pageCount: 1,
  list: [
    {
      id: '63feeff3569f0473b0f6dcd9',
      name: '管理员',
      nametype: 1,
      switch: true,
      code: ['table', 'from', 'three', 'webgl', 'example'],
      permissions: ['table - add', 'table - select', 'table - delete '],
    },
    {
      id: '6400a2070a9e5e46991f1c63',
      name: '测试',
      nametype: 2,
      switch: true,
      code: ['example', 'table', 'from'],
      permissions: ['delete '],
    },
  ],
};
