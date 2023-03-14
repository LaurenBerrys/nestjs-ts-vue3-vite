<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 11:56:05
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 11:56:24
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/icon/SvgIcon.vue
 * @Description:  SvgIcon组件
 * 
-->
<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  prefix: {
    type: String,
    default: "icon-custom",
  },
  color: {
    type: String,
    default: "currentColor",
  },
});

const symbolId = computed(() => `#${props.prefix}-${props.icon}`);
</script>

<template>
  <svg aria-hidden="true" width="1em" height="1em">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>
