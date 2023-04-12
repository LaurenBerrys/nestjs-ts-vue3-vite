<!--
 * @Author: 聂成勇 niechengyong@esconsoft.com
 * @Date: 2023-04-11 16:48:37
 * @LastEditTime: 2023-04-12 15:37:52
 * @Description: 
-->
<template>
  <NvapModal @register="modalRegister" class="NvapModal" w-640>
    <template #default>
    <div>
     <div items-center>
      <n-gradient-text type="primary" :size="24">中国传统颜色</n-gradient-text>
    </div>
    <n-tabs>
      <n-tab-pane v-for="item in traditionColors" :key="item.label" :name="item.label" :tab="item.label">
        <n-grid :cols="8" :x-gap="16" :y-gap="8">
          <n-grid-item v-for="i in item.data" :key="i.label"    >
            <color-checkbox
            flex
              w-full h-36 rounded-md items-center
              :color="i.color"
              :checked="i.color === config.themeColor"
              icon-class="35"
              @click="config.setThemeColor(i.color)"
            />
            <p class="text-center">{{ i.label }}</p>
          </n-grid-item>
        </n-grid>
      </n-tab-pane>
    </n-tabs>
   </div>
    </template>
  </NvapModal>
</template>

<script setup lang="ts">
import ColorCheckbox from './ColorCheckbox.vue';
 import { useModal } from '@/components/Modal';
 import {traditionColors} from '../color'
 const config =useConfigStore()
 const [
    modalRegister,
    { openModal: openModal },
  ] = useModal({
    title: '更多颜色',
    width:650,
    height: 550,
    showBtn:false
  });
  const open=()=>{
    openModal()
  }
  defineExpose({
    open
  })
</script>

<style scoped lang="scss">
.n-dialog.n-modal{
    width:auto!important;
}
</style>