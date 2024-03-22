<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 11:43:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-11 15:51:30
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/layout/components/header/components/BreadCrumb.vue
 * @Description: 面包屑组件
 * 
-->
<template>
  <n-breadcrumb>
    <n-breadcrumb-item
      v-for="item in route.matched.filter((item) => !!item.meta?.title)"
      :key="item.path"
      @click="handleBreadClick(item.path)"
    >
      <component :is="getIcon(item.meta)" />
      {{ item.meta.title }}
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup lang="ts">
  import { renderCustomIcon, renderIcon } from '@/utils/icon';
  const router = useRouter();
  const route = useRoute();
  function handleBreadClick(path) {
    if (path === route.path) return;
    router.push(path);
  }
  function getIcon(meta) {
    if (meta?.customIcon) return renderCustomIcon(meta.customIcon, { size: 18 });
    if (meta?.icon) return renderIcon(meta.icon, { size: 18 });
    return null;
  }
</script>
