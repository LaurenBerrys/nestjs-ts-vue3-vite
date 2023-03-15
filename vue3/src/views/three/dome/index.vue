<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-28 14:11:45
 * @LastEditors: LaurenBerrys 949154547@qq.com
 * @LastEditTime: 2023-03-14 19:00:30
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/three/dome/index.vue
 * @Description: 

 * 
-->
<template>
  <ComponentPage class="page">
    <div id="container" w-full h-full></div>
  </ComponentPage>
</template>

<script lang="ts" setup>
  const { proxy } = getCurrentInstance()!;
  console.log(proxy);
</script>
<style lang="scss" scoped></style>
