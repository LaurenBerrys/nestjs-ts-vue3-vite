<!--
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-03-22 20:05:31
 * @LastEditTime: 2023-03-27 15:03:07
 * @Description: 
-->
<template>
  <ComponentPage>
    <NvapD3
      :data="data"
      :model="'svg'"
      :width="1000"
      :height="500"
      :node-methods="nodeMethods"
      :node-color="nodeColor"
      :link-color="linkColor"
      :menu-methods="menuMethods"
    />
  </ComponentPage>
</template>

<script setup lang="ts">
  import { data, nodeMethods, nodeColor, linkColor, menuMethods } from './index';
</script>

<style scoped></style>
