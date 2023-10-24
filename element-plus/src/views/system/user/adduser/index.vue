<!--
 * @Editors: Nie Chengyong
 * @Date: 2023-03-06 10:14:23
 * @LastEditTime: 2023-03-14 16:42:29
 * @Description: 
-->
<template>
  <NvapModal @register="addUserRegister" class="NvapModal" @on-ok="addUser">
    <NvapForm @register="register" />
  </NvapModal>
</template>

<script setup lang="ts" name="addUser">
  import { schemas } from '../userColumns';
  import { useModal } from '@/components/Modal/src/hooks/useModal';
  import { useForm } from '@/components/Form/src/hooks/useForm';
  const [addUserRegister, { openModal: uOpenModal, closeModal: uCloseModal }] = useModal({
    title: '新增用户',
  });
  const [register, { getFieldsValue }] = useForm({
    gridProps: { cols: 1 },
    collapsedRows: 3,
    labelWidth: 120,
    layout: Layout_Enum.horizontal,
    showActionButtonGroup: false,
    schemas,
  });
  const open = async () => {
    uOpenModal();
  };
  defineExpose({ open });
  const addUser = async () => {
    const param = getFieldsValue();
    const { code } = await createUser(param);
    if (code == 200) {
      window.$message.success('新增成功');
      uCloseModal();
    }
  };
</script>

<style scoped></style>
