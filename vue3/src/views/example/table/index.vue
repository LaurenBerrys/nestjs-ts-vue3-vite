<!--
 * @Editors: Nie Chengyong
 * @Date: 2023-02-27 20:39:35
 * @LastEditTime: 2023-03-14 16:41:11
 * @Description: 
-->
<template>
  <ComponentPage>
    <template #header>
      <h2 text-22 font-normal text-hex-333 dark:text-hex-ccc>表格</h2>
    </template>
    <NvapTable :columns="columns" :request="loadDataTable">
      <template #tableSelect>
        <NvapForm
          @register="register"
          @submit="handleSubmit"
          @reset="handleReset"
        />
      </template>
      <template #tableButton>
        <n-button m-10 type="primary" @click="handleAdd">新增</n-button>
        <n-button m-10 type="primary" @click="handleAdd">删除</n-button>
        <n-button m-10 type="primary" @click="handleAdd">搜索</n-button>
      </template>
    </NvapTable>
  </ComponentPage>
</template>
<script lang="ts" setup>
import { FormSchema, useForm } from "@/components/Form";
import { columns, data } from "./index";
const schemas: FormSchema[] = [
  {
    field: "name",
    label: "名称",
    component: "NInput",
    giProps: { span: 3 },
    componentProps: {
      placeholder: "请输入姓名",
      onInput: () => {},
    },
    rules: [{ required: true, message: "请输入姓名", trigger: ["blur"] }],
  },
  {
    field: "age",
    label: "性别",
    component: "NInput",
    giProps: { span: 3 },
    componentProps: {
      placeholder: "请输入性别",
      onInput: () => {},
    },
    rules: [{ required: true, message: "请输入性别", trigger: ["blur"] }],
  },
  {
    field: "age",
    label: "性别",
    component: "NInput",
    giProps: { span: 3 },
    componentProps: {
      placeholder: "请输入性别",
      onInput: () => {},
    },
    rules: [{ required: true, message: "请输入性别", trigger: ["blur"] }],
  },
  {
    field: "age",
    label: "性别",
    component: "NInput",
    giProps: { span: 3 },
    componentProps: {
      placeholder: "请输入性别",
      onInput: () => {},
    },
    rules: [{ required: true, message: "请输入性别", trigger: ["blur"] }],
  },
];

const handleAdd = () => {};
const [
  register,
  {
    // validate,
    // getFieldsValue,
    //  setSchemas
  },
] = useForm({
  gridProps: { cols: 9 },
  collapsedRows: 10,
  labelWidth: 60,
  layout: Layout_Enum.inline,
  showActionButtonGroup: true,
  showAdvancedButton: true,
  offset: true,
  schemas,
});
const handleSubmit = (val: Recordable, loading: Ref) => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
const loadDataTable = () => {
  return data;
};
const handleReset = (val: Recordable) => {
  console.log(val);
};
</script>

<style></style>
