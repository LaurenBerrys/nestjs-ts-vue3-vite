<!--
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-03-23 09:33:16
 * @LastEditTime: 2023-03-23 11:49:07
 * @Description: 
-->
<template>
  <div
    v-if="!click"
    @mouseleave="changShow"
    :style="{ top: top, left: left, position: 'absolute' }"
  >
    <n-dropdown v-show="show" trigger="hover" @select="selectAddMenu" :options="addMenuOptions" />
  </div>
  <div v-else :style="{ top: top, left: left, position: 'absolute' }">
    <n-dropdown v-show="show" trigger="hover" @select="selectAddMenu" :options="MenuList" />
  </div>
</template>

<script setup lang="ts">
  import { prop } from './props';
  const props = defineProps<prop>();
  const { show, click, top, left } = toRefs(props);
  const addMenuOptions = ref([
    {
      label: '克隆',
      key: 'clone',
    },
  ]);
  const MenuList = ref([
    {
      label: '编辑',
      key: 'edit',
    },
    {
      label: '删除',
      key: 'delete',
    },
    {
      label: '类型',
      key: 'type',
    },
  ]);
  const selectAddMenu = (key: string) => {
    switch (key) {
      case 'edit':
        inject('editLink', props);
        break;
      case 'delete':
        console.log('delete');
        inject('deleteLink', props);
        break;
      case 'type':
        inject('typeLink', props);
        break;
      case 'clone':
        inject('cloneLink', props);
        break;
      default:
        break;
    }
  };
  const changShow = () => [
    // eslint-disable-next-line vue/no-mutating-props
    (show.value = false),
  ];
</script>

<style scoped></style>
