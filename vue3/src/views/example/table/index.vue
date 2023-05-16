<!--
 * @Editors: Nie Chengyong
 * @Date: 2023-02-27 20:39:35
 * @LastEditTime: 2023-05-16 15:17:28
 * @Description: 
-->
<template>
  <ComponentPage>
    <template #header>
      <h2 text-22 font-normal text-hex-333 dark:text-hex-ccc>表格</h2>
    </template>
    <NvapTable
      ref="NvapTables"
      :columns="columns"
      :request="loadDataTable"
      @update:checked-row-keys="onCheckedRow"
      :actionColumn="action(handleMenuAuth, handleDelete)"
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
  import { columns, data, schemas,action } from './index';
  const handleAdd = () => {};
  const NvapTables = ref();
  const [register] = useForm({
    gridProps: { cols: 9 },
    collapsedRows: 10,
    labelWidth: 60,
    layout: Layout_Enum.inline,
    showActionButtonGroup: true,
    showAdvancedButton: true,
    offset: true,
    schemas,
  });
  const onCheckedRow = (e) => {
    console.log(e, 1111);
  };
  const handleSubmit = (val: Recordable, loading: Ref) => {
    setTimeout(() => {
      console.log(val);
      NvapTables.value.tableAction.setTableData([]);
      loading.value = false;
    }, 1000);
  };
  const loadDataTable = () => {
    return data;
  };
  const handleReset = (val: Recordable) => {
    console.log(val);
  };
  const handleMenuAuth=async(e)=>{
    console.log(e);
  }
  const handleDelete=async(e)=>{
    console.log(e);
  }
</script>

<style></style>
