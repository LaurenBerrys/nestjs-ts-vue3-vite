<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 11:39:50
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 11:39:53
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/layout/components/header/index.vue
 * @Description: 
 * 
-->
<template>
  <div flex items-center>
    <MenuCollapse />
    <BreadCrumb ml-15 hidden sm:block />
  </div>
  <div ml-auto flex items-center>
    <ThemeMode />
    <GithubSite />
    <FullScreen />
    <UserAvatar />
   </div>
</template>

<script setup>
import BreadCrumb from "./components/BreadCrumb.vue";
import MenuCollapse from "./components/MenuCollapse.vue";
import FullScreen from "./components/FullScreen.vue";
import UserAvatar from "./components/UserAvatar.vue";
import GithubSite from "./components/GithubSite.vue";
import ThemeMode from "./components/ThemeMode.vue";
</script>
