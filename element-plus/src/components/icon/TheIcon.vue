<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 11:58:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-21 16:45:37
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/icon/TheIcon.vue
 * @Description: 
 * 
-->
<script setup>
  import { renderIcon, renderCustomIcon } from '@/utils/icon';

  const props = defineProps({
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
    /** iconify | custom */
    type: {
      type: String,
      default: 'iconify',
    },
  });

  const iconCom = computed(() =>
    props.type === 'iconify'
      ? // @ts-ignore
        renderIcon(props.icon, { size: props.size, color: props.color })
      : // @ts-ignore
        renderCustomIcon(props.icon, { size: props.size, color: props.color })
  );
</script>

<template>
  <component :is="iconCom" />
</template>
