<!--
 * @Author: Nie Chengyong
 * @Date: 2023-03-07 16:46:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-07 18:13:08
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/layout/components/header/components/LockScreen.vue
 * @Description: 
 * 
-->
<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <n-icon mr-20 size="18" style="cursor: pointer" @click="Store.setLock(true)">
        <icon-flat-color-icons:lock />
      </n-icon>
    </template>
    <span>锁屏</span>
  </n-tooltip>
</template>

<script setup lang="ts">
  const Store = useConfigStore();
  //锁屏
</script>

<style scoped></style>
