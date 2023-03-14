<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 14:03:23
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 14:04:33
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/layout/components/header/components/FullScreen.vue
 * @Description: 全屏组件
 * 
-->
<template>
  <n-icon mr20 size="18" style="cursor: pointer" @click="toggle">
    <icon-ant-design:fullscreen-exit-outlined v-if="isFullscreen" />
    <icon-ant-design:fullscreen-outlined v-else />
  </n-icon>
</template>

<script setup>
import { useFullscreen } from "@vueuse/core";
/**
 * 全屏组件
 * @description: https://vueuse.org/core/useFullscreen/
 */
const { isFullscreen, toggle } = useFullscreen();
</script>
