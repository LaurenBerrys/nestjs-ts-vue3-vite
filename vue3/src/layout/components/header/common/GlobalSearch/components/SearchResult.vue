<!--
 * @Author: 聂成勇 niechengyong@esconsoft.com
 * @Date: 2023-04-07 15:49:05
 * @LastEditTime: 2023-04-07 23:21:11
 * @Description: 
-->
<template>
    <n-scrollbar h-500 trigger="none">
      <div  >
        <template v-for="item in options" :key="item.path">
          <div
           dark:bg-dark
           h-56
           mt-8
           px-14
           rounded-4
           cursor-pointer
           flex
           justify-between
           items-center
           :style="{
                background: item.path === active ? '#2cb67d' : '',
              color: item.path === active ? '#fff' : ''
            }"
            @click="handleTo"
            @mouseenter="handleMouse(item)"
          >
            <svg-icon :icon="item.meta.icon" :local-icon="item.meta.localIcon" />
            <span flex-1  ml-5>{{ item.meta?.title }}</span>
            <icon-ant-design-enter-outlined text-20 p-2 mr-3 />
          </div>
        </template>
      </div>
    </n-scrollbar>
  </template>
  
  <script lang="ts" setup  name="SearchResult">
  import { computed } from 'vue';
  const props = defineProps({
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array<any>,
      default: () => []
    }
  });
  
  interface Emits {
    (e: 'update:value', val: string): void;
    (e: 'enter'): void;
  }
  
  const emit = defineEmits<Emits>();
  
  
  const active = computed({
    get() {
      return props.value;
    },
    set(val: string) {
      emit('update:value', val);
    }
  });
  
  /** 鼠标移入 */
  async function handleMouse(item:any) {
    active.value = item.path;
  }
  
  function handleTo() {
    emit('enter');
  }
  </script>
  
  <style lang="scss" scoped>
  </style>
  