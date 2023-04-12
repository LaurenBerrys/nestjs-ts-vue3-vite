<!--
 * @Author: 聂成勇 niechengyong@esconsoft.com
 * @Date: 2023-04-07 18:17:06
 * @LastEditTime: 2023-04-12 14:52:01
 * @Description: 
-->
<template>
  <n-drawer
    :show="modelValue"
    :width="502"
    :placement="placement"
    @mask-click="emit('update:modelValue', false);"
  >
    <n-drawer-content title="主题设置">
      <n-divider title-placement="center">系统主题</n-divider>
      <n-grid :cols="8" :x-gap="8" :y-gap="12">
        <n-grid-item v-for="color in themeColorList" :key="color" class="flex-x-center">
          <color-checkbox
            :color="color"
            :checked="color === config.themeColor"
            @click="config.setThemeColor(color)"
          />
        </n-grid-item>
      </n-grid>
      <n-space :vertical="true" pt-12>
        <n-color-picker :value="config.themeColor" :show-alpha="false" @update-value="config.setThemeColor" />
        <n-button :block="true" :type="otherColorBtnType" @click="openModal">更多颜色</n-button>
      </n-space>
    </n-drawer-content>
  </n-drawer>
  <color-model ref="model"/>
</template>
<script setup lang="ts" name="ThemeSetting">
  import ColorCheckbox from './ColorCheckbox.vue';
  import ColorModel from './ColorModel.vue';
  import type { DrawerPlacement } from 'naive-ui';
  import {isInTraditionColors}from '../color'
   defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String as PropType<DrawerPlacement>,
      default: 'right',
    },
  });
  const emit = defineEmits(['update:modelValue']);
  const config = useConfigStore();
  const isInOther = computed(() => isInTraditionColors(config.themeColor));
  const otherColorBtnType = computed(() => (isInOther.value ? 'primary' : 'default'));
  const model=ref()
  const openModal=()=>{
    model.value.open()
  }
  const themeColorList = [
    '#1890ff',
    '#2cb67d',
    '#409EFF',
    '#2d8cf0',
    '#007AFF',
    '#5ac8fa',
    '#5856D6',
    '#536dfe',
    '#9c27b0',
    '#AF52DE',
    '#0096c7',
    '#00C1D4',
    '#34C759',
    '#43a047',
    '#7cb342',
    '#c0ca33',
    '#78DEC7',
    '#e53935',
    '#d81b60',
    '#f4511e',
    '#fb8c00',
    '#ffb300',
    '#fdd835',
    '#6d4c41',
    '#546e7a',
  ];
</script>

<style scoped></style>
