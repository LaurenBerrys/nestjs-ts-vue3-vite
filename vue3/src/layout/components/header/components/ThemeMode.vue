<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { darkTheme } from 'naive-ui';
const Store = useConfigStore()
const isDark = useDark()
const toggleDark = () => {
Store.toggleDark()
  useToggle(isDark)()
}

</script>

<template>
  <n-icon mr-20 cursor-pointer size="18" @click="toggleDark">
    <icon-mdi-moon-waning-crescent v-if="isDark" />
    <icon-mdi-white-balance-sunny v-else />
  </n-icon>
</template>
