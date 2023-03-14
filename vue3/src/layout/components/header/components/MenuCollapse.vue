<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 14:05:29
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 14:08:08
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/layout/components/header/components/MenuCollapse.vue
 * @Description: 
 * 
-->
<template>
  <n-icon size="20" cursor-pointer @click="Store.setCollapsed()">
    <icon-mdi:format-indent-increase v-if="Store.collapsed" />
    <icon-mdi:format-indent-decrease v-else />
  </n-icon>
</template>

<script setup>
const Store = useConfigStore();
</script>
