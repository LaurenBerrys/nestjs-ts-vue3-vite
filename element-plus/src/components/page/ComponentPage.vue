<!--
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-02-22 15:39:41
 * @LastEditTime: 2023-05-16 16:02:41
 * @Description: 
-->
<template>
  <AppPage :show-footer="showFooter" >
    <header v-if="showHeader" px-15 mb-15 min-h-45 flex justify-between items-center>
      <slot v-if="$slots.header" name="header"></slot>
      <template v-else>
        <h2 text-22 font-normal text-hex-333 dark:text-hex-ccc>
          {{ title || route.meta?.title }}
        </h2>
        <slot name="action"></slot>
      </template>
    </header>
    <n-card rounded-10 flex-1 overflow-x-hidden>
      <slot></slot>
    </n-card>
  </AppPage>
</template>

<script setup lang="ts" name="ComponentPage">
  defineProps({
    showFooter: {
      type: Boolean,
      default: false,
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: undefined,
    },
  });
  const route = useRoute();
</script>
