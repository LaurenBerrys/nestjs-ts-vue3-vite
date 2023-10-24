<!--
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-08-07 16:22:53
 * @LastEditTime: 2023-08-09 17:34:17
 * @Description: 
-->
<template>
  <div class="form-component" :style="(formContent && formContent.form.style) || {}">
    <FormProvider :form="form" v-if="schema" @change="handleChange">
      <SchemaField :schema="schema" />
    </FormProvider>
  </div>
</template>

<script setup lang="ts">
  //   import { createForm, onFormValuesChange, onFieldValueChange, FormPath } from '@formily/core';
  import { FormProvider, createSchemaField } from '@formily/vue';
  import { getFormily } from '@/api/formily';
  import { nvapProps } from './prop';
  import * as Andt from '@formily/antdv';
  const props = defineProps(nvapProps);
  let formContent: any = null,
    form,
    schema: any;
  const SchemaField = createSchemaField({
    components: {
     ...Andt
    },
  });
  watch(
    () => props.id,
    async (values: any) => {
      if (values) {
        const { data } = await getFormily(values);
        console.log(data, 111);
      }
    },
    {
      immediate: true,
    }
  );
  const handleChange = () => {};
</script>

<style scoped></style>
