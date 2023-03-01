<template>
  <ComponentPage>
    <n-grid
      cols="1 s:1 m:1 l:3 xl:3 2xl:3"
      responsive="screen"
      :x-gap="12"
    >
      <n-gi span="1">
        <n-card :segmented="{ content: true }"  size="small">
          <template #header>
            <n-space>
              <n-dropdown
                trigger="hover"
                @select="selectAddMenu"
                :options="addMenuOptions"
              >
                <n-button type="info" ghost icon-placement="right">
                  添加菜单
                  <template #icon>
                    <div class="flex items-center">
                   <icon-system-uicons:arrow-down />
                    </div>
                  </template>
                </n-button>
              </n-dropdown>
              <n-button
                type="info"
                ghost
                icon-placement="left"
                @click="packHandle"
              >
                全部{{ expandedKeys.length ? "收起" : "展开" }}
                <template #icon>
                  <div class="flex items-center">
                  <icon-system-uicons:chevron-left-double />
                  </div>
                </template>
              </n-button>
            </n-space>
          </template>
          <div class="w-full menu">
            <n-input
              type="text"
              v-model:value="pattern"
              placeholder="输入菜单名称搜索"
            >
              <template #suffix>
            <icon-system-uicons:search />
              </template>
            </n-input>
            <div class="py-3 menu-list">
              <template v-if="loading">
                <div class="flex items-center justify-center py-4">
                  <n-spin size="medium" />
                </div>
              </template>
              <template v-else>
                <n-tree
                  block-line
                  cascade
                  checkable
                  key-field="id"
                  label-field="title"
                  children-field="children"
                  :virtual-scroll="true"
                  :pattern="pattern"
                  :data="treeData"
                  :expandedKeys="expandedKeys"
                  style="max-height: 650px; overflow: hidden"
                  @update:selected-keys="selectedTree"
                  @update:expanded-keys="onExpandedKeys"
                />
              </template>
            </div>
          </div>
        </n-card>
      </n-gi>
      <n-gi span="2">
        <n-card :segmented="{ content: true }" :bordered="true" size="small">
          <template #header>
            <n-space>
             <icon-system-uicons:tags />  
              <span
                >编辑菜单{{ treeItemTitle ? `：${treeItemTitle}` : "" }}</span
              >
            </n-space>
          </template>
            <template #header-extra>
              <n-button 
              @click="handleDelete"
              type="info" ghost icon-placement="right">
                  删除菜单
                  <template #icon>
                   <icon-system-uicons:mail-delete/>
                  </template>
                </n-button>
            </template>
          <n-alert type="info" closable>
            从菜单列表选择一项后，进行编辑</n-alert
          >
          <n-form
            :model="formParams"
            :rules="rules"
            ref="formRef"
            label-placement="left"
            :label-width="100"
            v-if="isEditMenu"
            class="py-4"
          >
            <n-form-item label="菜单名" path="label">
              <n-input
                placeholder="请输入菜单名"
                v-model:value="formParams.title"
              />
            </n-form-item>
            <n-form-item label="路径" path="path">
              <n-input
                placeholder="请输入路径"
                v-model:value="formParams.path"
              />
            </n-form-item>
            <n-form-item label="路径名" path="name">
              <n-input
                placeholder="请输入路径名字"
                v-model:value="formParams.name"
              />
            </n-form-item>
            <n-form-item label="地址" path="component">
              <n-input
                placeholder="请输入地址"
                v-model:value="formParams.component"
              />
            </n-form-item>
            
            <n-form-item label="重定向"  path="redirect">
              <n-input placeholder="请输入重定向" v-model:value="formParams.redirect" />
           </n-form-item>
           
            <n-form-item label="图标" path="icon">
          <n-input placeholder="请选择图标" v-model:value="formParams.icon">
            <template #suffix>
              <component :is="getIcon(formParams.icon)" />
            </template>
          </n-input>
        </n-form-item>
            <n-form-item label="菜单权限" path="code">
              <n-input
                placeholder="请输入权限，多个权限用，分割"
                v-model:value="formParams.code"
              />
            </n-form-item>
          <n-form-item label="排序" path="order">
          <n-input-number v-model:value="formParams.order" />
        </n-form-item>
            <n-form-item path="auth" style="margin-left: 100px">
              <n-space>
                <n-button
                  type="primary"
                  :loading="subLoading"
                  @click="formSubmit"
                  >保存修改</n-button
                >
                <n-button @click="handleReset">重置</n-button>
                <n-button @click="handleDel">删除</n-button>
              </n-space>
            </n-form-item>
          </n-form>
        </n-card>
      </n-gi>
    </n-grid>
    <MenuDrawer ref="createDrawerRef" :title="drawerTitle" :parentId="id" />
  </ComponentPage>
</template>
<script lang="ts" setup>
import MenuDrawer from './Drawer/MenuDrawer.vue'
import { getTreeItem } from "@/utils/common";
const loading = ref(true);
const rules = {
    title: {
      required: true,
      message: '请输入菜单名',
      trigger: 'blur',
    },
    path: {
      required: true,
      message: '请输入路径',
      trigger: 'blur',
    },
  };
const formParams = reactive({
      parentId: 0,
      title: "",
      path: "",
      component: "",
      code: "",
      icon: "",
      order: 0,
      name:"",
      redirect:null
});
//修改菜单状态
const isEditMenu = ref(false);

const subLoading = ref(false);
onMounted(() => {
  const { userInfo } = storeToRefs<any>(useAppStore());
  treeData.value = userInfo.value.menuList||[];
  loading.value = false;
});
const drawerTitle = ref("");
const treeItemTitle = ref("");
const id=ref('')
let treeItemKey = ref([]);
const isAddSon = computed(() => {
  return !treeItemKey.value.length;
});
// 菜单列表
const addMenuOptions = ref([
  {
    label: "添加顶级菜单",
    key: "home",
    disabled: false,
  },
  {
    label: "添加子菜单",
    key: "son",
    disabled: isAddSon,
  },
]);
const formRef: any = ref(null);
function formSubmit() {
  delete formParams.children;
  delete formParams.id;
 updateMenu(formParams.name,formParams).then((res)=>{
  console.log(res);
  if(res.code==200){
    window.$message.success('修改成功')
  }
  else{
    window.$message.error('修改失败')
  }
 })
  
  }
// 添加菜单按钮
const selectAddMenu = (key: string) => {
  drawerTitle.value =
    key === "home" ? "添加顶级菜单" : `添加子菜单：${treeItemTitle.value}`;
  openCreateDrawer();
};
// 添加菜单抽屉
const createDrawerRef = ref();
const openCreateDrawer = () => {
  const { openDrawer } = createDrawerRef.value;
  openDrawer();
};

let expandedKeys = ref([]);
const treeData: any = ref([]);
function packHandle() {
  if (expandedKeys.value.length) {
    expandedKeys.value = [];
  } else {
    expandedKeys.value = unref(treeData).map(
      (item: any) => item.key as string
    ) as [];
  }
}

const pattern = ref("");
function selectedTree(keys) {
  if (keys.length) {
    id.value=keys[0]
    const treeItem = getTreeItem(unref(treeData), keys[0]);
    treeItemKey.value = keys;
    treeItemTitle.value = treeItem.title;
    Object.assign(formParams, treeItem);
    isEditMenu.value = true;
  } else {
    isEditMenu.value = false;
    treeItemKey.value = [];
    treeItemTitle.value = "";
  }
}
function onExpandedKeys(keys) {
    expandedKeys.value = keys;
  }
  //重置
  function handleReset() {
    const treeItem = getTreeItem(unref(treeData), treeItemKey.value[0]);
    Object.assign(formParams, treeItem);
  }
  //删除
  function handleDel() {
    window.$dialog.info({
      title: '提示',
      content: `您确定想删除此权限吗?`,
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        window.$message.success('删除成功');
      },
      onNegativeClick: () => {
        window.$message.error('已取消');
      },
    });
  }
  const getIcon = (name) => {
    //如果name字符串包含system-uicons:才返回
      if(name.includes("system-uicons:")){
        return renderIcon(name, { size: 20 });
      }else{
        return renderIcon("system-uicons:"+name, { size: 20 });
      }

    };
    //删除菜单
    const handleDelete=()=>{
      window.$dialog.info({
        title: '提示',
        content: `您确定想删除此菜单吗?`,
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: () => {
          console.log(treeItemTitle.value);
          
          deleteMenu(treeItemTitle.value).then((res)=>{
            console.log(res);
            window.$message.success('删除成功');
          })
        },
        onNegativeClick: () => {
          window.$message.error('已取消');
        },
      });

    }
</script>

<style lang="scss">
.add-menu {
  // width: 75vw!important;
}
</style>
