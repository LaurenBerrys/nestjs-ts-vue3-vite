<!--
 * @Author: Nie Chengyong
 * @Date: 2023-03-07 15:56:56
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-07 16:49:49
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/layout/components/header/components/Lang.vue
 * @Description: 
 * 
-->
<template>
        <!-- 语言切换 -->
        <n-dropdown 
        :options="options"
        @select="changeLang">
        <n-icon mr-20 size="18" style="cursor: pointer" >
            <icon-system-uicons:translate   />
    </n-icon>
    </n-dropdown>
</template>
<script setup lang="ts">
import { LANG_VALUE } from '@/enums/enum';
import { zhCN ,enUS} from 'naive-ui';
const options = [
    {
        label: '中文',
        key: LANG_VALUE.Zh
    },
    {
        label: 'English',
        key: LANG_VALUE.En
    }
]
const Store = useConfigStore()
const changeLang = (lang:any) => {
    console.log(lang);
    if(lang == 'zhCN'){
        Store.setLanguage(zhCN)
    }else{
        Store.setLanguage(enUS)
    }
}
</script>

<style scoped>

</style>