<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-22 15:25:08
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-03 17:40:26
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/system/roles.vue
 * @Description: 
 * 
-->
<template>
  <ComponentPage>
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
          >添加角色</n-button
        >
      </template>
    </Table>
    <basicModal
      @register="modalRegister"
      ref="modalRef"
      class="basicModal"
      @on-ok="okModal"
    >
      <template #default>
        <div flex>
          <n-tree
            style="max-height: 950px;width:400px;  overflow: hidden"
            block-line
            cascade
            checkable
            key-field="code"
            label-field="title"
            children-field="children"
            :virtual-scroll="true"
            :data="treeData"
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
            添加按钮权限的时候，尽量取名为，组件名+"-"+按钮名
            如：User-AddButton
            </n-text>
          <div flex justify-between w-360>

            <n-tag
                v-show="title"
                :bordered="false"
                type="error"
                style="margin-right: 10px;"
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
    </basicModal>
    <BasicModal
      @register="modalRegister2"
      ref="modalRef2"
      class="basicModal"
      @on-ok="addRoles"
    >
      <template #default>
        <BasicForm
          ref="formRefs"
          @register="register"
          @reset="handleReset"
          class="basicForm"
        >
          <template #statusSlot="{ model, field }">
            <n-input v-model:value="model[field]" />
          </template>
        </BasicForm>
      </template>
    </BasicModal>
  </ComponentPage>
</template>

<script lang="ts" setup>
import { useModal } from "@/components/Modal";
import { columns, action, schemas } from "./rolesColumns";
import { useForm, FormSchema } from "@/components/Form/index";
import { TreeOption } from "naive-ui";
const { proxy, ctx } = getCurrentInstance();
const { userInfo } = useAppStore();
const role: any = ref({});
const [
  modalRegister2,
  {
    openModal: openModal2,
    closeModal: closeModal2,
    setSubLoading: setSubLoading2,
  },
] = useModal({
  title: "添加角色",
});
//菜单数据
const treeData: any = ref([]);

const [register, { submit, validate, getFieldsValue, setSchemas }] = useForm({
  gridProps: { cols: 1 },
  collapsedRows: 3,
  labelWidth: 120,
  layout: "horizontal",
  showActionButtonGroup: false,
  schemas,
});
//重置按钮
const handleReset = () => {};
const formRefs = ref(null);
//添加角色
const addRoles = async () => {
  try {
    const formRes = await validate();
    if (!formRes) {
      const param = getFieldsValue();
      const data = await createRoles(param);
      console.log(data, 2222);
      closeModal2();
      window.$message.success("提交成功");
    }
  } catch (e) {
    window.$message.error("验证失败，请填写完整信息");
    setSubLoading2(false);
  }
};
const [modalRegister, { openModal, closeModal, setSubLoading }] = useModal({
  title: "分配菜单和按钮权限",
  style: {
    width: "800px",
  },
});

// 确认
const okModal = () => {
  let permiss: any = [];
  treeData.value.forEach((item) => {
    if (item.permissions) {
      permiss.push(...item.permissions);
    }
    if (item.children) {
      item.children.forEach((item2) => {
        if (item2.permissions) {
          permiss.push(...item2.permissions);
        }
      });
    }
  });
  role.value.code = checkedKeys.value;
  const { id, code } = role.value;
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

//勾选的菜单
const expandedKeys: any = ref([]);
const checkedKeys = ref([]);
const checkedTree = (keys) => {
  //删除keys数组中每个元素的空格
  keys = keys.map((item) => item.trim());
  //然后再去重
  keys = [...new Set(keys)];
  checkedKeys.value = keys;
};
//展开的菜单
const onExpandedKeys = (keys) => {
  expandedKeys.value = keys;
};

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
  const { data } = await getRoles(param);
  return data;
};
const handleMenuAuth = (record: Recordable) => {
  treeData.value = cloneDeep(userInfo.menuList) || [];
  if (!record.permissions) record.permissions = [];
  //将record.permissions与treeData.value.permissions进行比较，删除掉reeData.value.permissions中没有的
  treeData.value.forEach((res) => {
    if (res.permissions) {
      res.permissions = res.permissions.filter((res1) => {
        return record.permissions.includes(res1);
      });
    }
    if (res.children) {
      res.children.filter((res2) => {
        
        if (res2.permissions) {
          if(isArray(res2.permissions))
          res2.permissions = res2.permissions.filter((res3) => {
            return record.permissions.includes(res3);
          });
          else res2.permissions = res2.permissions.split(',').filter((res3) => {
            return record.permissions.includes(res3);
          });
        }
      });
    }
  });
  role.value = record;
  checkedKeys.value = record.code;
  openModal();
};
const handleDelete = (record: Recordable) => {
  console.log(record, "删除");
};

onMounted(async () => {
  treeData.value = cloneDeep(userInfo.menuList) || [];
  expandedKeys.value = treeData.value.map((item) => item.code);
});
//新增角色
const handleAdd = async () => {
  await openModal2();
  console.log(formRefs.value);
  await setSchemas("code", {
    componentProps: {
      placeholder: "请选择菜单",
      options: unref(treeData),
      multiple: true,
      keyField: "code",
      labelField: "title",
      childrenField: "children",
      onUpdateValue: (e: any) => {
        console.log(e);
      },
    },
  });
};
const title = ref();
const permissions = ref();
const updatePermiss = (res) => {
  treeData.value.forEach((res1) => {
    if (res1.title === title.value) {
      res1.permissions = res.split(",");
    }
    if (res1.children) {
      res1.children.forEach((res2) => {
        if (res2.title === title.value) {
          res2.permissions = res.split(",");
        }
      });
    }
  });
};
const nodeProps = ({ option }: { option: TreeOption }) => {
  return {
    onClick() {
      title.value = option.title;
      if (option.permissions === undefined) {
        permissions.value = "";
      } else if (isArray(option.permissions)) {
        //将数组转换为字符串
        permissions.value = option.permissions.join(",");
      } else {
        permissions.value = option.permissions;
      }
    },
  };
};
</script>

<style></style>
