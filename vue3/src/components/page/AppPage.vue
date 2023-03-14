<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 16:17:15
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-22 15:34:01
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/page/AppPage.vue
 * @Description: 
 * 
-->
<template>
  <transition name="fade-slide" mode="out-in" appear>
    <section
      class="cus-scroll-y wh-full p-15 flex-col bg-[#f5f6fb] dark:bg-hex-121212"
    >
      <slot></slot>
      <Footer v-if="showFooter" mt-15 />
      <n-back-top :bottom="20" />
    </section>
  </transition>
</template>

<script setup lang="ts" name="AppPage">
defineProps({
  showFooter: {
    type: Boolean,
    default: false,
  },
});
</script>
