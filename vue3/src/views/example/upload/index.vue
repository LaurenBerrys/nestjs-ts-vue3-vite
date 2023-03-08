<!--
 * @Author: Nie Chengyong
 * @Date: 2023-03-08 17:55:59
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-08 20:34:46
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/example/upload/index.vue
 * @Description: 
 * 
-->
<template>
    <ComponentPage>
        <n-upload
        action="http://172.20.10.14:3000/nest-api/chunk/upload"
        :headers="{'Authorization':'Bearer '+token}">
    <n-button>上传文件</n-button>
  </n-upload>
    </ComponentPage>
</template>

<script setup lang="ts">
const {token}=useAppStore()

</script>

<style scoped>

</style>