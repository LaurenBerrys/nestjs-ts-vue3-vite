<!--
 * @Author: 聂成勇 niechengyong@esconsoft.com
 * @Date: 2023-04-07 15:41:48
 * @LastEditTime: 2023-04-07 16:11:14
 * @Description: 
-->
<template>
    <n-tooltip trigger="hover">
      <template #trigger>
          <n-icon mr-20 size="18" style="cursor: pointer" @click="handleLinkClick">
          <icon-uil-search />
          </n-icon>
      </template>
      <span>搜索</span>
  </n-tooltip>
  <search-modal ::value="show" />
  </template>
  
  <script setup lang="ts">
  import { SearchModal } from './components';
  const show=ref(false)
  function handleLinkClick(){
    show.value=true
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>