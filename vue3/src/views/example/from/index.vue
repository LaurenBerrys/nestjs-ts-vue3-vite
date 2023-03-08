<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-27 20:48:13
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-08 15:33:10
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/example/from/index.vue
 * @Description: 
 * 
-->
<template>
    <ComponentPage>
     <template #header>
         <h2 text-22 font-normal text-hex-333 dark:text-hex-ccc>表单</h2>
     </template>
     <n-input v-model="sadsa"></n-input>
  </ComponentPage>
 </template>
 <script lang="ts" setup name="from"> 
 const sadsa=ref('')
 const handleAdd=()=>{
     
 }
 </script>
 
 <style>
 </style>
 