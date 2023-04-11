<!--
 * @Author: 聂成勇 niechengyong@esconsoft.com
 * @Date: 2023-04-07 18:17:06
 * @LastEditTime: 2023-04-07 18:28:41
 * @Description: 
-->
<template>
    <NvapModal
    @register="modalRegister" class="NvapModal" @on-ok="okModal"
    >
        <template #default>
            
        </template>
    </NvapModal>
</template>
<script setup lang="ts">
import { useModal } from '@/components/Modal/src/hooks/useModal';

  const [modalRegister, { openModal, closeModal, setSubLoading }] = useModal({
    title: '主题设置',
    style: {
      width: '800px',
    },
  });
  const open=()=>{
    openModal()
  }
  defineExpose({ open });
const okModal=()=>{

}
</script>

<style scoped>

</style>