<!--
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-04-12 16:22:47
 * @LastEditTime: 2023-04-12 16:33:40
 * @Description: 
-->
<template>
   <ComponentPage>
        <template #header>
            <h2 text-22 font-normal text-hex-333 dark:text-hex-ccc>print</h2>
        </template>
    <n-card title="打印" >
      <n-button type="primary" class="mr-10px" @click="printTable">打印表格</n-button>
      </n-card>
   </ComponentPage>
</template>

<script setup lang="ts">
import printJS from 'print-js';
const printTable=()=>{
    printJS({
    printable: [
      { name: 'LaurenBerrys', wechat: 'N-crossroad', remark: '欢迎来技术交流' },
      { name: 'LaurenBerrys', wechat: 'N-crossroad', remark: '欢迎来技术交流' }
    ],
    properties: ['name', 'wechat', 'remark'],
    type: 'json'
  });
}
</script>

<style scoped>

</style>