<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 15:51:57
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 15:52:04
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/layout/components/AppMain.vue
 * @Description: 
 * 
-->
<template>
    <router-view v-slot="{ Component, route }">
      <KeepAlive :include="keepAliveRouteNames">
        <component :is="Component" v-if="appStore.reloadFlag" :key="appStore.aliveKeys[route.name] || route.fullPath" />
      </KeepAlive>
    </router-view>
  </template>
  
  <script setup>
  const appStore = useConfigStore()
  const router = useRouter()
  const allRoutes = router.getRoutes()
  const keepAliveRouteNames = computed(() => {
    return allRoutes.filter((route) => route.meta?.keepAlive).map((route) => route.name)
  })
  </script>
  