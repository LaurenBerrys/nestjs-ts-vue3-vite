<!--
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-03-21 15:25:41
 * @LastEditTime: 2023-03-22 10:50:52
 * @Description: 
-->
<template>
  <div>
    {{ props.title }}
  </div>
</template>

<script setup lang="ts" name="Nvapmal">
  import { propsType } from './props';
  const props = defineProps<propsType>();
</script>
<style scoped></style>
