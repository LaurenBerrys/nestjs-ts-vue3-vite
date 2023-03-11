<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-22 15:25:08
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-07 20:17:13
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/system/roles/index.vue
 * @Description: 
 * 
-->
<template>
  <ComponentPage>
    <NvapTable
      :columns="columns"
      :request="loadDataTable"
      :row-key="(row) => row.id"
      ref="actionRef"
      :actionColumn="action(handleMenuAuth, handleDelete)"
      @update:checked-row-keys="onCheckedRow"
    >
      <template #tableButton>
        <n-button type="primary" size="small" @click="handleAdd"
          >添加角色</n-button
        >
      </template>
    </NvapTable>

    <AssignPermissions ref="Assign" />
   <addRolesModel ref="modalRef"/>
  </ComponentPage>
</template>

<script lang="ts" setup>
import { columns, action } from "./rolesColumns";
import AssignPermissions from "./assignPermissions/index.vue";
import addRolesModel from './addRolesModel/index.vue'
const { userInfo } = useAppStore();
const modalRef=ref()
const Assign=ref()//分配权限组件
const params = reactive({
  pageSize: 10,
  name: null,
});
//勾选的行
const onCheckedRow = (rowKeys: any[]) => {
  console.log(rowKeys);
};
//加载数据
const loadDataTable = async (res) => {
  let param = {
    ...unref(params),
    ...res,
  };
  console.log(param,1111)
  const { data } = await getRoles(param);
  return data;
};
const handleMenuAuth =async (record: Recordable) => {
const  Data = cloneDeep(userInfo.menuList) || [];
  if (!record.permissions) record.permissions = [];
  //将record.permissions与treeData.value.permissions进行比较，删除掉reeData.value.permissions中没有的
  const totree =async (data) => {
    data.forEach((res) => {
      if (res.permissions) {
        const arr = isArray(res.permissions)
          ? res.permissions
          : res.permissions.split(",");
        res.permissions = arr.filter((item) =>
          record.permissions.includes(item)
        );
      }
      if (res.children) {
        totree(res.children);
      }
    });
  };
  await  totree(Data);
  Assign.value.open(Data,record)
};
const handleDelete = (record: Recordable) => {
  console.log(record, "删除");
};
const treeData=computed(()=>{
  return cloneDeep(userInfo.menuList) || []
})
//新增角色
const handleAdd = async () => {
 await  modalRef.value.open(treeData)
};
</script>

<style></style>
