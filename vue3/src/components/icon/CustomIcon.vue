<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 11:57:58
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 11:58:05
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/icon/CustomIcon.vue
 * @Description: 
 * 
-->
<script setup>
/** 自定义图标 */
const props = defineProps({
  /** 图标名称(assets/svg下的文件名) */
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 14,
  },
  color: {
    type: String,
    default: undefined,
  },
})
</script>

<template>
  <TheIcon type="custom" v-bind="props" />
</template>
