<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 15:32:54
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-20 20:31:53
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/layout/components/sidebar/components/SideLogo.vue
 * @Description: 
 * 
-->
<template>
    <router-link h-60 f-c-c to="/">
      <icon-custom-logo text-16 color-primary></icon-custom-logo>
      <h2 v-show="!appStore.collapsed" ml-10 color-primary text-16 font-bold max-w-140 flex-shrink-0>
        {{ title }}
      </h2>
    </router-link>
  </template>
  
  <script setup>
  import settings from '@/settings'
  const title = settings.title
  const appStore = useConfigStore()
  </script>
  