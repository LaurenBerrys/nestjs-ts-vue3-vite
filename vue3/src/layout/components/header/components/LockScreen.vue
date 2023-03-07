<!--
 * @Author: Nie Chengyong
 * @Date: 2023-03-07 16:46:32
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-07 16:57:04
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/layout/components/header/components/LockScreen.vue
 * @Description: 
 * 
-->
<template>
    <n-tooltip trigger="hover">
        <template #trigger>
            <n-icon mr-20 size="18" style="cursor: pointer" @click="Store.setLock(true)" >
                <icon-system-uicons:lock />
            </n-icon>
        </template>
        <span>锁屏</span>
    </n-tooltip>
</template>

<script setup lang="ts">
const Store = useConfigStore()
//锁屏
</script>

<style scoped>

</style>