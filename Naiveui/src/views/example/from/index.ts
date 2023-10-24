/*
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-03-15 10:45:40
 * @LastEditTime: 2023-06-15 16:39:27
 * @Description:
 */
import { FormSchema } from '@/components/Form';
export const schemas: FormSchema[] = [
  {
    field: 'name',
    label: '名称',
    component: 'NInput',
    giProps: { span: 12 },
    isFull: false,
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
    giProps: { span: 2 },
    componentProps: {
      placeholder: '请输入性别',
      onInput: () => {},
    },
    rules: [{ required: true, message: '请输入性别', trigger: ['blur'] }],
  },
  {
    field: 'phone',
    label: '电话',
    component: 'NInput',
    componentProps: {
      placeholder: '请输入电话',
      onInput: () => {},
    },
    rules: [{ required: true, message: '请输入电话', trigger: ['blur'] }],
  },
  {
    field: 'height',
    label: '身高',
    component: 'NSelect',
    componentProps: {
      options: [
        { label: '身高1', value: '身高1' },
        { label: '身高2', value: '身高2' },
        { label: '身高3', value: '身高3' },
      ],
    },
  },
  {
    field: 'upload',
    label: '上传',
    component: 'NvapUpload',
    componentProps: {
      views: true,
      onUpload: (res) => {
        console.log(res);
      },
    },
  },
];
