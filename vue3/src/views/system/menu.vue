<template>
  <ComponentPage>
    <template #action>
      <n-button type="primary" size="small" @click="addMenu">新增菜单</n-button>
    </template>
    <div w-100 flex>
      <n-tree
        w-50
        checkable
        block-node
        checkbox-placement="right"
        :data="menulist"
        @update:checked-keys="updateCheckedKeys"
      />
      <div w-50>
        <!-- <n-button @click="go">sssss</n-button> -->
      </div>
    </div>
    <n-modal v-model:show="showModal" 
    transform-origin="center"
    class="add-menu"
    preset="dialog" title="Dialog">
      <template #header>
      <div>新增菜单</div>
      </template>
      <div>内容</div>
      <template #action>
        <n-button @click.self="add">确定</n-button>
      </template>
    </n-modal>
  </ComponentPage>
</template>
<script lang="ts" setup>
const { menulist = [] } = useAppStore().userInfo;
const updateCheckedKeys = (e) => {
  console.log(e);
};
const menu=reactive({
  name:'',
  path:'',
  icon:'',
  sort:0,
  parentId:0,
  type:0,
  status:0,
  component:'',
  permission:'',
  hidden:0,
  keepAlive:0,
  external:0,
  remark:''
})
const showModal = ref(false);
const addMenu = () => {
  showModal.value = true;
};
const add=()=>{
    console.log(11111);
}
</script>

<style lang="scss">
.add-menu{
    // width: 75vw!important;
}
</style>
