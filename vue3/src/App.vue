
<script setup lang="ts">
import { onBeforeMount, onMounted,ref} from 'vue'
//element-plus lang
import { zhCN, dateZhCN,darkTheme} from 'naive-ui'
import type { NLocale, NDateLocale ,GlobalTheme} from 'naive-ui'

import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
// import { useBasicStore } from '@/store/basic'
import { useConfigStore } from './store/config'
import { el } from 'date-fns/locale'
const {  language,theme } = storeToRefs(useConfigStore())
console.log(language.value,theme.value);
const locale =ref<NLocale | null>(null);
const dateLocale=ref<NDateLocale | null>(null)
const themeColor=ref<GlobalTheme | null>(null)
onMounted(() => {
    changLangue(language.value,theme.value)
})
const changLangue = (lang: string,themes:string) => {
  if(lang =='zhCN'){
    locale.value=zhCN
    dateLocale.value=dateZhCN
  }else{
    locale.value=null
    dateLocale.value=null
  }
  if(themes=='darkTheme'){
    themeColor.value=darkTheme
  }else{
    themeColor.value=null
  }
}

// :locale="locale"
//     :date-locale="dateLocale"
</script>

<template>
    <n-config-provider
   :locale="locale"
   :date-locale="dateLocale"
    :theme="themeColor"
    >
    <RouterView />
  </n-config-provider>
</template>

<style scoped >

</style>
