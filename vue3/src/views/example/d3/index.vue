<!--
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-03-22 20:05:31
 * @LastEditTime: 2023-04-03 22:01:06
 * @Description: 
-->
<template>
  <ComponentPage>
    <NvapD3
      :data="data"
      :model="D3model.svg"
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
  import { D3model } from "@/enums/d3model";
</script>

<style scoped></style>
