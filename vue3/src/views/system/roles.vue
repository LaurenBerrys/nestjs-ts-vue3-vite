<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-22 15:25:08
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-02 21:17:21
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
        <div class="py-3 menu-list">
          <n-tree
            style="max-height: 950px; overflow: hidden"
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
            @update:checked-keys="checkedTree"
            @update:expanded-keys="onExpandedKeys"
          />
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
import { columns, action } from "./rolesColumns";
import { useForm, FormSchema } from "@/components/Form/index";
const { proxy, ctx } = getCurrentInstance();
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
const schemas: FormSchema[] = [
  {
    field: "name",
    component: "NInput",
    label: "姓名",
    labelMessage: "请输入名字",
    giProps: {
      span: 1,
    },
    componentProps: {
      placeholder: "请输入姓名",
      onInput: (e: any) => {},
    },
    rules: [{ required: true, message: "请输入姓名", trigger: ["blur"] }],
  },
  {
    field: "code",
    component: "NTreeSelect",
    label: "菜单",
    labelMessage: "请选择菜单",
    giProps: {
      span: 1,
    },
    componentProps: {
      placeholder: "请选择菜单",
    },
  },
];

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
  // const {name,code}=role.value
  // addRoles({name,code}).then(({code,msg})=>{
  //   if(code==200){
  //     window.$message.success(msg)
  //     closeModal2()
  //   }else{
  //     window.$message(msg)
  //     setSubLoading2(false)
  //   }
  // })
};
const [modalRegister, { openModal, closeModal, setSubLoading }] = useModal({
  title: "分配菜单权限",
});

// 确认
const okModal = () => {
  role.value.code = checkedKeys.value;
  const { id, code } = role.value;
  updateRoles(id, { code: code }).then(({ code, msg }) => {
    if (code == 200) {
      window.$message.success(msg);
      closeModal();
    } else {
      window.$message(msg);
      setSubLoading(false);
    }
  });
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
  role.value = record;
  checkedKeys.value = record.code;
  openModal();
};
const handleDelete = (record: Recordable) => {
  console.log(record, "删除");
};

onMounted(async () => {
  const { userInfo } = storeToRefs<any>(useAppStore());
  treeData.value = userInfo.value.menuList || [];
  expandedKeys.value = treeData.value.map((item) => item.code);
});

const handleAdd = async () => {
  await openModal2();
  console.log(formRefs.value);
  await setSchemas("code", {
    componentProps: {
      placeholder: "请选择菜单",
      options:unref(treeData),
      multiple: true,
      keyField:"code",
      labelField:"title",
      childrenField:"children",
      onUpdateValue: (e: any) => {
        console.log(e);
      },
    },
  });
};
</script>

<style></style>
