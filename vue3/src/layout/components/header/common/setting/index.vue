<!--
 * @Author: 聂成勇 niechengyong@esconsoft.com
 * @Date: 2023-04-07 15:41:48
 * @LastEditTime: 2023-04-11 16:08:06
 * @Description: 
-->
<template>
    <n-tooltip trigger="hover">
      <template #trigger>
          <n-icon mr-20 size="18" style="cursor: pointer" @click="handleLinkClick">
          <icon-flat-color-icons:settings/>
          </n-icon>
      </template>
      <span>主题设置</span>
  </n-tooltip>
  <Tema ::="show" placement="right"/>
  </template>
  
  <script setup lang="ts">
  import Tema  from './components/Tema.vue';
  const show=ref(false)
  function handleLinkClick(){
    show.value=true
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>