<!--
 * @Author: Nie Chengyong
 * @Date: 2023-03-06 10:18:41
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-06 10:31:53
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/system/user/assignRoles/index.vue
 * @Description: 
 * 
-->
<template>
    <NvapModal
        @register="modalRegister"
        class="NvapModal"
        @on-ok="okModal"
      >
        <template #default>
          <n-select v-model:value="roles" multiple :options="options" />
        </template>
      </NvapModal>
</template>

<script setup lang="ts"  name="assignRoles">
  import { useModal } from '@/components/Modal/src/hooks/useModal';
  const [modalRegister, { openModal, closeModal, setSubLoading }] = useModal({
    title: "分配角色",
  });
  const roles: any = ref([]);
  const options = ref([]);
  const user:any=ref({});
  const open=async (use,data,option)=>{
    user.value=use;
    roles.value=data;
    options.value=option;
    openModal();
  }
  defineExpose({
    open
  })

  const okModal=async ()=>{
    const data = await updateUser(user.value.id, { roles: roles.value });
    if (data.code == 200) {
      closeModal();
      window.$message.success("分配成功");
    } else {
      window.$message.error("分配失败");
      setSubLoading(false);
    }
  }
</script>

<style scoped>

</style>