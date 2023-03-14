<!--
 * @Editors: Nie Chengyong
 * @Date: 2023-02-27 20:39:35
 * @LastEditTime: 2023-03-13 18:29:37
 * @Description: 
-->
<template>
    <ComponentPage>
     <template #header>
         <h2 text-22 font-normal text-hex-333 dark:text-hex-ccc>表格</h2>
     </template>
     <NvapTable>
        <template #tableSelect>
            <NvapForm
            @register="register"
            >
            </NvapForm>
        </template>
        <template #tableButton>
            <n-button    m-10 type="primary" @click="handleAdd">新增</n-button>
            <n-button m-10 type="primary" @click="handleAdd">删除</n-button>
            <n-button m-10 type="primary" @click="handleAdd">搜索</n-button>
        </template>
     </NvapTable>
  </ComponentPage>
 </template>
<script lang="ts" setup>
import { FormSchema, useForm } from '@/components/Form';
const schemas:FormSchema[]=[{
    field: 'name',
    label: '名称',
    component: 'NInput',
    giProps: { span: 3 },
    componentProps: {
      placeholder: "请输入姓名",
      onInput: () => {},
    },
    rules: [{ required: true, message: "请输入姓名", trigger: ["blur"] }],
},
{
    field: 'age',
    label: '性别',
    component: 'NInput',
    giProps: { span: 3 },
    componentProps: {
      placeholder: "请输入性别",
      onInput: () => {},
    },
    rules: [{ required: true, message: "请输入性别", trigger: ["blur"] }],
},
{
    field: 'age',
    label: '性别',
    component: 'NInput',
    giProps: { span: 3 },
    componentProps: {
      placeholder: "请输入性别",
      onInput: () => {},
    },
    rules: [{ required: true, message: "请输入性别", trigger: ["blur"] }],
},
{
    field: 'age',
    label: '性别',
    component: 'NInput',
    giProps: { span: 3 },
    componentProps: {
      placeholder: "请输入性别",
      onInput: () => {},
    },
    rules: [{ required: true, message: "请输入性别", trigger: ["blur"] }],
},
]
const handleAdd=()=>{}
const [register,{ submit, validate, getFieldsValue, setSchemas }] = useForm({
  gridProps: { cols: 9 },
  collapsedRows: 10,
  labelWidth: 60,
  layout: Layout_Enum.inline,
  showActionButtonGroup: true,
  showAdvancedButton:true,
  offset:true,
  schemas,
});
 </script>
 
 <style>
 </style>
 