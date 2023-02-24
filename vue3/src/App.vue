<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-13 19:56:31
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-23 20:52:41
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/App.vue
 * @Description: 
 * 
-->
<template>
<Provider>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </Provider>
</template>
