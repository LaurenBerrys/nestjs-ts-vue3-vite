<!--
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-04-07 15:48:54
 * @LastEditTime: 2023-04-07 16:37:29
 * @Description: 
-->
<template>
    <div mt-14 px-24 h-44   flex-y-center >
      <span mr-14 flex-y-center >
        <icon-mdi-keyboard-return    text-20 p-2 mr-6   class="icon"/>
        <span>确认</span>
      </span>
      <span  mr-14  flex-y-center >
        <icon-mdi-arrow-up-thin class="icon "  text-20 p-2 mr-5/>
        <icon-mdi-arrow-down-thin class="icon " text-20 p-2 mr-6 />
        <span>切换</span>
      </span>
      <span class="flex-y-center">
        <icon-mdi-keyboard-esc class="icon " text-20 p-2 mr-6 />
        <span>关闭</span>
      </span>
    </div>
  </template>
  
  <script lang="ts" setup name="SearchFooter">
  </script>
  <style lang="scss" scoped>
  .icon {
    box-shadow: inset 0 -2px #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px #1e235a66;
  }
  </style>
  