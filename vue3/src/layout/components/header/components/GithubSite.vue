<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 16:03:27
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 16:03:39
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/layout/components/header/components/GithubSite.vue
 * @Description: 
 * 
-->
<template>
  <n-icon mr-20 size="18" style="cursor: pointer" @click="handleLinkClick">
    <icon-mdi:github />
  </n-icon>
</template>

<script setup>
function handleLinkClick() {
  window.open("https://github.com/supercode-peter/nestjs-ts-vue3-vite.git");
}
</script>
