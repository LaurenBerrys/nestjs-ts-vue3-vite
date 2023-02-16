<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 10:10:55
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 17:01:00
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
import type { NLocale, NDateLocale, GlobalTheme } from "naive-ui";
import { naiveThemeOverrides } from "./setting/theme.json";
import { setupMessage, setupDialog } from "@/utils/naivetools";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useCssVar } from "@vueuse/core";
import { kebabCase } from "lodash-es";
// import { useBasicStore } from '@/store/basic'
import { useConfigStore } from "@/store/config";
const { language, theme } = storeToRefs(useConfigStore());
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

const changLangue = (lang: string | null, themes: string | null) => {
  if (lang == "zhCN") {
    locale.value = zhCN;
    dateLocale.value = dateZhCN;
  } else {
    locale.value = null;
    dateLocale.value = null;
  }
  if (themes == "darkTheme") {
    themeColor.value = darkTheme;
  } else {
    themeColor.value = null;
  }
};
changLangue(language.value, theme.value);
setTheme(themeColor.value);
setLanguage(language.value, route.meta?.title);
const NaiveProviderContent = defineComponent({
  setup() {
    setupCssVar();
    setupNaiveTools();
  },
  render() {
    return h("div");
  },
});
</script>
<template>
  <n-config-provider
    wh-full
    :locale="zhCN"
    :date-locale="dateLocale"
    :theme="themeColor"
    :theme-overrides="naiveThemeOverrides"
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <slot></slot>
            <NaiveProviderContent />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
<style scoped>
/* button {
  color: #8fcdd4;

} */
</style>
