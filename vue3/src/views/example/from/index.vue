<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-27 20:48:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-16 17:34:32
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/example/from/index.vue
 * @Description: 
 * 
-->
<template>
  <ComponentPage>
    <template #header>
      <h2 text-22 font-normal text-hex-333 dark:text-hex-ccc>表单</h2>
    </template>
    <NvapForm
      w-400
      :schemas="schemas"
      @register="register"
      @submit="handleSubmit"
      @reset="handleReset"
    />
  </ComponentPage>
</template>
<script lang="ts" setup name="from">
  import { useForm } from '@/components/Form';
  import { schemas } from './index';
  const [
    register,
    {
      // validate,
      // getFieldsValue,
      //  setSchemas
    },
  ] = useForm({
    gridProps: { cols: 1 },
    collapsedRows: 10,
    labelWidth: 60,
    layout: Layout_Enum.horizontal,
    showActionButtonGroup: true,
    showAdvancedButton: true,
    offset: true,
    schemas,
  });
  const handleSubmit = (val: Recordable, loading: Ref) => {
    console.log(val);
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  };
  const handleReset = (val: Recordable) => {
    console.log(val);
  };
</script>
<style></style>
