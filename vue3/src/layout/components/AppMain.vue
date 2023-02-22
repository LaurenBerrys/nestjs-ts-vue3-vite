<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 15:51:57
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-22 15:33:23
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/layout/components/AppMain.vue
 * @Description: 
 * 
-->
<template>
    <router-view v-slot="{ Component, route }">
      <KeepAlive :include="keepAliveRouteNames">
        <component :is="Component" v-if="appStore.reloadFlag"
         :key="route.fullPath" />
      </KeepAlive>
    </router-view>
  </template>
  
  <script setup lang="ts">
  import {useAppStore} from '@/store/app'
  const appStore = useAppStore()
  const router = useRouter()
  const allRoutes = router.getRoutes()
  const keepAliveRouteNames:any = computed(() => {
    return allRoutes.filter((route) => route.meta?.keepAlive).map((route) => route.name)
  })
  </script>
  