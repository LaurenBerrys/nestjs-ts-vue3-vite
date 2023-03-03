<template>
    <ComponentPage>
     <template #header>
         <h2 text-22 font-normal text-hex-333 dark:text-hex-ccc>表格</h2>
     </template>
     <Table>
        <template #tableButton>
            <n-button  v-permission="'permission'"  m-10 type="primary" @click="handleAdd">新增</n-button>
            <n-button m-10 type="primary" @click="handleAdd">删除</n-button>
            <n-button m-10 type="primary" @click="handleAdd">搜索</n-button>
        </template>
     </Table>
  </ComponentPage>
 </template>
 
 <script lang="ts" setup> 
 const handleAdd=()=>{
     
 }
 </script>
 
 <style>
 </style>
 