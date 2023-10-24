<!--
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-04-11 16:26:10
 * @LastEditTime: 2023-04-11 18:05:28
 * @Description: 
-->
<template>
  <div  flex  w-20 h-20 rounded-lg drop-shadow-lg cursor-pointer
   :style="{ backgroundColor: color }">
   <n-icon v-if="checked" :class="[ isWhite ? 'text-gray-700' : 'text-white']" :size="iconClass">
    <icon-ic-outline-check  />
   </n-icon>
  </div>
</template>

<script setup lang="ts" name="ColorCheckbox">
type Prop={
  /** 颜色 */
  color: string;
  /** 是否选中 */
  checked: boolean;
  /** 图标的class */
  iconClass?: string;
}
//withDefaults是一个函数，用于给defineProps返回的对象添加默认值
const props = withDefaults(defineProps<Prop>(),{iconClass: '18'})
const whiteColors = ['#ffffff', '#fff', 'rgb(255,255,255)'];
const isWhite = computed(() => whiteColors.includes(props.color));
</script>

<style lang="scss" scoped>

</style>