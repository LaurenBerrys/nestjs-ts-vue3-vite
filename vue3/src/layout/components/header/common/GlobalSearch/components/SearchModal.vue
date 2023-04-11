<!--
 * @Author: 聂成勇 niechengyong@esconsoft.com
 * @Date: 2023-04-07 15:48:46
 * @LastEditTime: 2023-04-07 23:02:03
 * @Description: 
-->
<template>
    <n-modal
      v-model:show="show"
      :segmented="{ footer: 'soft' }"
      :closable="false"
      preset="card"
      footer-style="padding: 0; margin: 0"
      right-0
      left-0
      fixed
      w-630 
      top-50
      @after-leave="handleClose"
    >
      <n-input-group>
        <n-input ref="inputRef" v-model:value="keyword" clearable placeholder="请输入页面关键词搜索" @input="handleSearch">
          <template #prefix>
            <icon-uil-search class="text-15 text-[#c2c2c2]" />
          </template>
        </n-input>
      </n-input-group>
      <div  mt-20>
        <n-empty v-if="resultOptions.length === 0" description="暂无搜索结果" />
        <search-result v-else v-model:value="activePath" :options="resultOptions" @enter="handleEnter" />
      </div>
      <template #footer>
        <search-footer />
      </template>
    </n-modal>
  </template>
  
  <script lang="ts" setup name="SearchModal">
  import { computed, nextTick, ref, shallowRef, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import { onKeyStroke, useDebounceFn } from '@vueuse/core';
  import SearchResult from './SearchResult.vue';
  import SearchFooter from './SearchFooter.vue';
 
  const props = defineProps({
    value: {
      type: Boolean,
      default: false
    }
  });
  
  interface Emits {
    (e: 'update:value', val: boolean): void;
  }
  
  const emit = defineEmits<Emits>();
  
  const router = useRouter();
  const keyword = ref('');
  const activePath = ref('');
  const resultOptions:any = shallowRef([]);
  const inputRef = ref<HTMLInputElement>();
  
  const handleSearch = useDebounceFn(search, 300);
  
  const show = computed({
    get() {
      return props.value;
    },
    set(val: boolean) {
      emit('update:value', val);
    }
  });
  
  watch(show, async val => {
    if (val) {
      /** 自动聚焦 */
      await nextTick();
      inputRef.value?.focus();
    }
  });
  
  /** 查询 */
  function search() {
    let arr:any=[]
    router.getRoutes().filter((item: any) => {
        //判断item.meta?.title字符串是否包含keyword.value
        if (item.meta?.title?.includes(keyword.value)) {
            arr.push(item)
        }
    });
    //在获取现在注册的所有路由
    resultOptions.value = arr;
    if (resultOptions.value?.length > 0) {
      activePath.value = resultOptions.value[0].path;
    } else {
      activePath.value = '';
    }
  }
  
  function handleClose() {
    show.value = false;
    /** 延时处理防止用户看到某些操作 */
    setTimeout(() => {
      resultOptions.value = [];
      keyword.value = '';
    }, 200);
  }
  
  /** key up */
  function handleUp() {
    const { length } = resultOptions.value;
    if (length === 0) return;
    const index = resultOptions.value.findIndex(item => item.path === activePath.value);
    if (index === 0) {
      activePath.value = resultOptions.value[length - 1].path;
    } else {
      activePath.value = resultOptions.value[index - 1].path;
    }
  }
  
  /** key down */
  function handleDown() {
    const { length } = resultOptions.value;
    if (length === 0) return;
    const index = resultOptions.value.findIndex(item => item.path === activePath.value);
    if (index + 1 === length) {
      activePath.value = resultOptions.value[0].path;
    } else {
      activePath.value = resultOptions.value[index + 1].path;
    }
  }
  
  /** key enter */
  function handleEnter() {
    const { length } = resultOptions.value;
    if (length === 0 || activePath.value === '') return;
    console.log(activePath.value,'activePath.value');
    
    // const routeItem = resultOptions.value.find(item => item.path === activePath.value);
    // if (routeItem?.meta?.href) {
    //   window.open(activePath.value, '__blank');
    // } else {
      router.push(activePath.value);
      handleClose();
    // }
  }
  
  onKeyStroke('Escape', handleClose);
  onKeyStroke('Enter', handleEnter);
  onKeyStroke('ArrowUp', handleUp);
  onKeyStroke('ArrowDown', handleDown);
  
 </script>
  
  <style lang="scss" scoped></style>
  