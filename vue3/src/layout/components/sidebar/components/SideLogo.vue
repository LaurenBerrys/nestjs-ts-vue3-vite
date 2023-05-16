<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 15:32:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-12 14:36:06
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/layout/components/sidebar/components/SideLogo.vue
 * @Description: 
 * 
-->
<template>
  <router-link h-60 f-c-c to="/">
    <icon-custom-logo text-16 :style="{color: config.themeColor}" />
    <h2 v-show="!appStore.collapsed" ml-10 :style="{color: config.themeColor}"  text-16 font-bold max-w-140 flex-shrink-0>
      {{ title }}
    </h2>
  </router-link>
</template>

<script setup>
  import settings from '@/components/settings/SystemSettings';
  const title = settings.title;
  const appStore = useConfigStore();
  const config =useConfigStore()
 
</script>
