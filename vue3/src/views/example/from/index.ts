/*
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-03-15 10:45:40
 * @LastEditTime: 2023-03-15 11:24:08
 * @Description:
 */
import { FormSchema } from '@/components/Form';
export const schemas: FormSchema[] = [
  {
    field: 'name',
    label: '名称',
    component: 'NInput',
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
    //   giProps: { span: 10 },
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
    component: 'NInput',
    componentProps: {
      placeholder: '请输入身高',
      onInput: () => {},
    },
    rules: [{ required: true, message: '请输入身高', trigger: ['blur'] }],
  },
  {
    field: 'upload',
    label: '上传',
    component: 'NvapUpload',
    componentProps: {
      views: true,
    },
  },
];
