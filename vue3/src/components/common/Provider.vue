<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 10:10:55
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-24 15:44:34
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/common/Provider.vue
 * @Description: 
 * 
-->
<script setup lang="ts" name="Provider">
import {
  zhCN,
  dateZhCN,
  darkTheme,
  useLoadingBar,
  useDialog,
  useMessage,
  useNotification,
} from "naive-ui";
import { defineComponent } from "vue";
import type {
  NLocale,
  NDateLocale,
  GlobalTheme,
} from "naive-ui";
import { naiveThemeOverrides } from "./setting/theme.json";
import { setupMessage, setupDialog } from "@/utils/naivetools";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useCssVar } from "@vueuse/core";
import { kebabCase } from "lodash-es";
import { useConfigStore } from "@/store/config";
const { language, isDark } = storeToRefs(useConfigStore());
const { setTheme, setLanguage } = useConfigStore();
const locale = ref<NLocale | null>(null);
const dateLocale = ref<NDateLocale | null>(null);
const themeColor = ref<GlobalTheme | null>(null);
const route = useRoute();

const setupCssVar = () => {
  const common = naiveThemeOverrides.common;
  for (const key in common) {
    useCssVar(`--${kebabCase(key)}`, document.documentElement).value =
      common[key] || "";
  }
};
// 挂载naive组件的方法至window, 以便在全局使用
const setupNaiveTools = () => {
  //window对象上添加naive组件的方法
  window.$loadingBar = useLoadingBar();
  window.$notification = useNotification();
  window.$message = setupMessage(useMessage());
  window.$dialog = setupDialog(useDialog());
};

const changLangue = (lang: string | null,) => {
  if (lang == "zhCN") {
    locale.value = zhCN;
    dateLocale.value = dateZhCN;
  } else {
    locale.value = null;
    dateLocale.value = null;
  }
};
const NaiveProviderContent = defineComponent({
  setup() {
    setupCssVar();
    setupNaiveTools();
    changLangue(language.value);
    setTheme(themeColor.value);
    setLanguage(language.value, route.meta?.title);
  },
  render() {
    return h("div");
  },
});
</script>
<template>
  <NConfigProvider
    wh-full
    :locale="zhCN"
    :date-locale="dateLocale"
    :theme=" isDark? darkTheme : null"
    :theme-overrides="naiveThemeOverrides"
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <NaiveProviderContent />
            <slot></slot>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </NConfigProvider>
</template>
