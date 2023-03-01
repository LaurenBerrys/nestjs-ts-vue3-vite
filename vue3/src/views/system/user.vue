<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-22 15:24:47
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-01 18:04:37
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/system/user.vue
 * @Description: 
 * 
-->
<template>
    <ComponentPage>
     <template #action>
     </template>
     <Table
      :columns="columns"
      :request="loadDataTable"
      :row-key="(row) => row.id"
      ref="actionRef"
      :actionColumn="action(handleMenuAuth, handleDelete)"
      @update:checked-row-keys="onCheckedRow"
     >
      <template #tableButton>
        <n-button type="primary" size="small" @click="handleAdd">添加用户</n-button>
        </template>
     </Table>
     <BasicModal
      @register="modalRegister"
      ref="modalRef"
      class="basicModal"
      @on-ok="okModal"
     >
      <template #default>
        <n-select v-model:value="roles" multiple :options="options" />
     </template>
     </BasicModal>
  </ComponentPage>
 </template>
 
 <script lang="ts" setup> 
 import {columns,action} from './userColumns'
 import { useModal } from '@/components/Modal';
 const params = reactive({
  pageSize: 10,
  name: null,
});
 const loadDataTable= async(res)=>{
    let param={
      ...unref(params),
      ...res
    }
   const {data} =await getUser(param)
   console.log(data);
   return data
 }
 const roles=ref([])
 const options=ref([])
const [modalRegister, { openModal, closeModal, setSubLoading }] = useModal({
  title: "分配角色",
});
const okModal= async ()=>{
    const data= await updateUser(user.value.id,{roles:roles.value})
    if(data.code==200){
      closeModal()
      window.$message.success('分配成功')
    }else{
      window.$message.error('分配失败')
      setSubLoading(false)
    }
}
const user =ref(null)
 //配置用户角色
 const handleMenuAuth=async(record)=>{
  user.value=record
  //roles去重
  options.value.filter((item)=>{
    if(record.roles.includes(item.value)){
     roles.value.push(item.value)
    }
  })
  roles.value=[...new Set(roles.value)]
  openModal()
 }
 onMounted(async()=>{
  let param={
    pageSize:200
  }
  const {data} =await getRoles(param)
  options.value=  data.list.map((item)=>{
    return  {
      label:item.name,
      value:item.id
    }
  })
 })
 //删除
 const handleDelete=(record)=>{
  //删除用户
  window.$dialog.info({
      title: '提示',
      content: `您确定想删除此用户吗?`,
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: async () => {
        const {code,msg}= await  deleteUser(record.id)
        if(code==200){
          window.$message.success('删除成功')
        }else{
          window.$message.error(msg)
        }
      },
      onNegativeClick: () => {
        window.$message.error('已取消');
      },
    });
  
 }
 //勾选行
 const onCheckedRow=()=>{

 }
 const handleAdd=()=>{

 }
 </script>
 
 <style>
 </style>
 