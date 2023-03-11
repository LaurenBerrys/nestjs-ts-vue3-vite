<!--
 * @Author: Nie Chengyong
 * @Date: 2023-03-04 17:06:54
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-06 10:21:41
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/system/roles/assignpermissions/index.vue
 * @Description: 
 * 
-->
<template>
  <NvapModal 
  @register="modalRegister" class="NvapModal" @on-ok="okModal">
    <template #default>
      <div flex>
        <n-tree
          style="max-height: 950px; width: 400px; overflow: hidden"
          block-line
          cascade
          checkable
          key-field="code"
          label-field="title"
          children-field="children"
          :virtual-scroll="true"
          :data="Tree"
          :expandedKeys="expandedKeys"
          :checked-keys="checkedKeys"
          :default-checked-keys="checkedKeys"
          :node-props="nodeProps"
          @update:checked-keys="checkedTree"
          @update:expanded-keys="onExpandedKeys"
        />
        <div
          style="
            padding: 0 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
          "
        >
          <n-text type="success" :italic="true">
            添加按钮权限的时候，尽量取名为，组件名+"-"+按钮名 如：User-AddButton
          </n-text>
          <div flex justify-between w-360>
            <n-tag
              v-show="title"
              :bordered="false"
              type="error"
              style="margin-right: 10px"
            >
              按钮权限
            </n-tag>
            <n-tag
              v-show="title"
              :bordered="false"
              type="success"
              style="margin-bottom: 10px"
            >
              {{ title }}
            </n-tag>
          </div>
          <n-input
            size="small"
            v-model:value="permissions"
            placeholder="请输入按钮权限"
            @change="updatePermiss"
            v-show="title"
          >
          </n-input>
        </div>
      </div>
    </template>
  </NvapModal>
</template>
<script setup lang="ts" name="AssignPermissions">
import { useModal } from "@/components/Modal/src/hooks/useModal";
import { TreeOption } from "naive-ui";
//定义接受父传子的函数getRole
let role
const Tree = ref([]);
const expandedKeys:any=ref([]);

const checkedKeys = ref([]);
//定义接受子传父的函数updateRole
const open = (data,record) => {
    console.log(data,record);
    Tree.value = data;
    role = record;
    checkedKeys.value = record.code;
    expandedKeys.value = Tree.value.map((item:any) => item.code);
  openModal();
};
defineExpose({ open });
const [modalRegister, { openModal, closeModal, setSubLoading }] = useModal({
  title: "分配菜单和按钮权限",
  style: {
    width: "800px",
  },
});
const title = ref(""); //菜单名
const permissions = ref(); //按钮权限
const updatePermiss = (res) => {
  const name = unref(title);
  for (let i = 0; i < Tree.value.length; i++) {
    const node:any = Tree.value[i];
    if (node.title === name) {
      node.permissions = res.split(",");
      return true;
    }
    if (node.children && node.children.length) {
      const childUpdated = updatePermiss(node.children);
      if (childUpdated) {
        return true;
      }
    }
  }
};
const checkedTree = (keys) => {
  //删除keys数组中每个元素的空格
  keys = keys.map((item) => item.trim());
  //然后再去重
  keys = [...new Set(keys)];
  checkedKeys.value = keys;
};
//展开的菜单
const onExpandedKeys = (keys: any) => {
  expandedKeys.value = keys;
};
const nodeProps = ({ option }: { option: TreeOption }) => {
  return {
    onClick() {
      title.value = option.title as string;
      permissions.value = isArray(option.permissions)
        ? option.permissions.join(",")
        : option.permissions ?? "";
    },
  };
};

const okModal = () => {
  const permiss: any = [];
  const traverse = (nodes: any[]): void => {
    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i];
      if (node.permissions) {
        permiss.push(...node.permissions);
      }
      if (node.children && node.children.length > 0) {
        traverse(node.children);
      }
    }
  };
  traverse(Tree.value);
  role.code = checkedKeys.value;
  const { id, code } = role;
  updateRoles(id, { code: code, permissions: permiss }).then(
    ({ code, msg }) => {
      if (code == 200) {
        window.$message.success(msg);
        closeModal();
      } else {
        window.$message(msg);
        setSubLoading(false);
      }
    }
  );
};
</script>

<style scoped></style>
