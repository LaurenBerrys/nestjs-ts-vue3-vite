<!--
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-04-07 15:41:48
 * @LastEditTime: 2023-04-07 18:12:08
 * @Description: 
-->
<template>
    <n-tooltip trigger="hover">
      <template #trigger>
          <n-icon mr-20 size="18" style="cursor: pointer" @click="handleLinkClick">
          <icon-flat-color-icons:search/>
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