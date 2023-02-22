<template>
    <ComponentPage>
     <template #header>
         <h2 text-22 font-normal text-hex-333 dark:text-hex-ccc>菜单</h2>
     </template>
     <template #action>
         <n-button type="primary" size="small" @click="handleAdd">添加菜单</n-button>
     </template>
 
  </ComponentPage>
 </template>
 
 <script lang="ts" setup> 
 const handleAdd=()=>{
     
 }
 </script>
 
 <style>
 
 </style>