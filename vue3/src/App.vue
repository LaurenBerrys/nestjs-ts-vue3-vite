<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-13 19:56:31
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-21 16:38:12
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/App.vue
 * @Description: 
 * 
-->
<script setup lang="ts">
import Provider from "@/components/common/Provider.vue";
</script>

<template>

<Provider>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </Provider>
</template>

<style></style>
