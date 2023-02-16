<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 14:18:02
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 14:18:09
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/layout/components/header/components/UserAvatar.vue
 * @Description: 
 * 
-->
<template>
    <n-dropdown :options="options" @select="handleSelect">
      <div flex items-center cursor-pointer>
        <img :src="userStore.avatar" mr10 w-35 h-35 rounded-full />
        <span>{{ userStore.name }}</span>
      </div>
    </n-dropdown>
  </template>
  
  <script setup>
  import { useUserStore } from '@/store/user'
  import { renderIcon } from '@/utils/icon'
  
  const userStore = useUserStore()
  
  const options = [
    {
      label: '退出登录',
      key: 'logout',
      icon: renderIcon('mdi:exit-to-app', { size: '14px' }),
    },
  ]
  
  function handleSelect(key) {
    if (key === 'logout') {
      $dialog.confirm({
        title: '提示',
        type: 'info',
        content: '确认退出？',
        confirm() {
          userStore.logout()
          $message.success('已退出登录')
        },
      })
    }
  }
  </script>
  