<template>
  <n-drawer v-model:show="isDrawer" :width="width" placement="right">
    <n-drawer-content :title="title" closable>
      <n-form
        :model="formParams"
        :rules="rules"
        ref="formRef"
        label-placement="left"
        :label-width="100"
      >
        <n-form-item label="标题" path="title">
          <n-input placeholder="请输入标题" v-model:value="formParams.title" />
        </n-form-item>
        <n-form-item label="路径" path="path">
          <n-input placeholder="请输入路径" v-model:value="formParams.path" />
        </n-form-item>
        <n-form-item label="地址" v-show="title!=='添加顶级菜单'" path="component">
          <n-input placeholder="请输入路径" v-model:value="formParams.component" />
        </n-form-item>
        <n-form-item label="重定向" v-show="title==='添加顶级菜单'"  path="redirect">
          <n-input placeholder="请输入重定向" v-model:value="formParams.redirect" />
        </n-form-item>
        <n-form-item label="菜单权限" path="code">
          <n-input
            placeholder="请输入权限，多个权限用，分割"
            v-model:value="formParams.code"
          />
        </n-form-item>
        <n-form-item label="图标" path="icon">
          <n-input placeholder="请选择图标" v-model:value="formParams.icon">
            <template #suffix>
              <component :is="getIcon(formParams.icon)" />
            </template>
          </n-input>
        </n-form-item>
        <n-form-item label="排序" path="order">
          <n-input-number v-model:value="formParams.order" />
        </n-form-item>
        <n-card
          title="图标"
          size="small"
          style="height: 200px; overflow: hidden; overflow-y: scroll"
        >
        <div v-for="item in sourceData" :key="item" style="height: 27px" @click="enterIcons(item)">
            <component :is="getIcon(item)" />
        </div>
        </n-card>
      </n-form>

      <template #footer>
        <n-space>
          <n-button type="primary" :loading="subLoading" @click="formSubmit"
            >提交</n-button
          >
          <n-button @click="handleReset">重置</n-button>
        </n-space>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts">
import { sourceData } from "@/utils/IconList";
import{createMenu} from '@/api/menu'
const rules = {
  icon:{
    required: true,
    message: "请选择图标",
    trigger: "blur",
  },
  title: {
    required: true,
    message: "请输入标题",
    trigger: "blur",
  },
  path: {
    required: true,
    message: "请输入路径",
    trigger: "blur",
  },
};
export default defineComponent({
  name: "CreateDrawer",
  props: {
    title: {
      type: String,
      default: "添加顶级菜单",
    },
    width: {
      type: Number,
      default: 450,
    },
    parentId:{
      type:String,
      default:'0'
    }
  },
  setup(props, { emit }) {
    const {title,parentId} = toRefs(props)
    const formRef: any = ref(null);
    const defaultValueRef = () => ({
      name: "",
      parentId: "",
      title: "",
      path: "",
      component: "",
      code: "",
      icon: "",
      order: 0,
      redirect:""
    });
    const getIcon = (name) => {
      return renderIcon("system-uicons:" + name, { size: 20 });
    };
    const enterIcons = (item) => {
      state.formParams.icon = item;
    };
    const state = reactive({
      isDrawer: false,
      subLoading: false,
      formParams: defaultValueRef(),
    });

    function openDrawer() {
      state.isDrawer = true;
    }

    function closeDrawer() {
      state.isDrawer = false;
    }

    function formSubmit() {
      formRef.value.validate((errors) => {
        if (!errors) {
          window.$message.success("添加成功");
          state.formParams.name = state.formParams.title;
          state.formParams.icon="system-uicons:"+state.formParams.icon
          if(title.value=="添加顶级菜单"){
            state.formParams.component ="Layout";
          }else{
            state.formParams.parentId=parentId.value
          }
          createMenu(state.formParams).then((res) => {
            console.log(res);
          handleReset();
          closeDrawer();
          });
        } else {
          window.$message.error("请填写完整信息");
        }
      });
    }
    function handleReset() {
      formRef.value.restoreValidation();
      state.formParams = Object.assign(state.formParams, defaultValueRef());
    }
    return {
      title,
      enterIcons,
      getIcon,
      sourceData,
      ...toRefs(state),
      formRef,
      rules,
      formSubmit,
      handleReset,
      openDrawer,
      closeDrawer,
    };
  },
});
</script>
<style scoped lang="scss">
 :deep(.n-card__content ){
  display: flex;
  flex-wrap: wrap;
}
</style>
