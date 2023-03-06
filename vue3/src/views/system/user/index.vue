<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-22 15:24:47
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-06 10:35:17
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/system/user/index.vue
 * @Description: 
 * 
-->
<template>
    <ComponentPage>
      <template #action> </template>
      <Table
        :columns="columns"
        :request="loadDataTable"
        :row-key="(row) => row.id"
        ref="actionRef"
        :actionColumn="action(handleMenuAuth, handleDelete)"
        @update:checked-row-keys="onCheckedRow"
      >
        <template #tableButton>
          <n-button type="primary" size="small" @click="handleAdd"
            >添加用户</n-button
          >
        </template>
      </Table>
      <addUser ref="addUse"/>
      <assignRoles  ref="assignRole"  />
      <!-- <BasicModal
        @register="modalRegister"
        class="basicModal"
        @on-ok="okModal"
      >
        <template #default>
          <n-select v-model:value="roles" multiple :options="options" />
        </template>
      </BasicModal> -->
    </ComponentPage>
  </template>
  
  <script lang="ts" setup>
  import assignRoles from './assignRoles/index.vue'
  import addUser from "./addUser/index.vue";
  import { columns, action } from "./userColumns";
  import { hasOwn } from "@vueuse/core";
  const params = reactive({
    pageSize: 10,
    name: null,
  });
  const addUse=ref();
  const assignRole=ref()
  const options = ref([]);
//请求数据
 const loadDataTable = async (res) => {
    let param = {
      ...unref(params),
      ...res,
    };
    const { data } = await getUser(param);
    console.log(data);
    return data;
  };
  
  //配置用户角色
  const handleMenuAuth = async (record) => {
    let roles:any=[]
    //roles去重
    if (hasOwn(record, "roles")) {
      options.value.filter((item: any) => {
        if (record.roles.includes(item.value)) {
          roles.push(item.value);
        }
      });
    }
  
    roles = [...new Set(roles)];
    assignRole.value.open(record,roles,options.value)
  };
  onMounted(async () => {
    let param = {
      pageSize: 200,
    };
    const { data } = await getRoles(param);
    options.value = data.list.map((item) => {
      return {
        label: item.name,
        value: item.id,
      };
    });
  });
  //删除
  const handleDelete = (record) => {
    //删除用户
    window.$dialog.info({
      title: "提示",
      content: `您确定想删除此用户吗?`,
      positiveText: "确定",
      negativeText: "取消",
      onPositiveClick: async () => {
        const { code, msg } = await deleteUser(record.id);
        if (code == 200) {
          window.$message.success("删除成功");
        } else {
          window.$message.error(msg);
        }
      },
      onNegativeClick: () => {
        window.$message.error("已取消");
      },
    });
  };
  //勾选行
  const onCheckedRow = () => {};
  //打开新增用户的弹窗
  const handleAdd = () => {
    addUse.value.open();
  };
  
  </script>
  
  <style></style>
  