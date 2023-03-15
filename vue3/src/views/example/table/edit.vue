<!--
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-03-14 19:28:17
 * @LastEditTime: 2023-03-15 10:42:18
 * @Description: 编辑表格
-->
<template>
  <ComponentPage>
    <template #header>
      <h2 text-22 font-normal text-hex-333 dark:text-hex-ccc>表格</h2>
    </template>
    <NvapTable
      :columns="columns2"
      :request="loadDataTable"
      @edit-end="editEnd"
      @edit-change="onEditChange"
      @update:checked-row-keys="onCheckedRow"
    >
      <template #tableSelect>
        <NvapForm @register="register" @submit="handleSubmit" @reset="handleReset" />
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
  import { useForm } from '@/components/Form';
  import { columns2, data, schemas } from './index';

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
  const editEnd = ({ record, index, key, value }) => {
    console.log(record, value, key, index);
  };
  const onEditChange = ({ column, value, record }) => {
    console.log(value, record, column);
  };
  const onCheckedRow = (val) => {
    console.log(val);
  };
</script>

<style></style>
