/*
 * @Author: Nie Chengyong
 * @Date: 2022-12-09 11:58:43
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-08 11:49:51
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/store/config.ts
 * @Description:
 *
 */
import { defineStore } from 'pinia';
import { langTitle } from '@/hooks/use-common';
import settings from '@/settings';
import { i18n } from '@/lang';
import { useDark } from '@vueuse/core';
const isDark = useDark();
const isLock = localStorage.getItem('config')
  ? JSON.parse(localStorage.getItem('config')!).lock
  : false;
console.log('isLock', isLock);

// 长时间不操作默认锁屏时间
const initTime = 60 * 60;
export const useConfigStore = defineStore('config', {
  state: () => {
    return {
      dateLocale: 'dateZhCN',
      language: settings.defaultLanguage as any,
      theme: settings.defaultTheme as any,
      collapsed: settings.collapsed,
      isDark,
      settings: settings,
      lock: false, // 锁屏
      lockTime: isLock ? initTime : 0, // 锁屏时间
    };
  },
  persist: {
    storage: localStorage,
    paths: ['language', 'theme', 'dateLocale', 'collapsed', 'settings', 'lock'],
  },
  actions: {
    setLock(lock) {
      this.lock = lock;
    },
    setTheme(data: any) {
      this.theme = data;
    },
    /** 切换/关闭 暗黑模式 */
    toggleDark() {
      this.isDark = !this.isDark;
    },
    setCollapsed() {
      this.collapsed = !this.collapsed;
    },
    setLanguage(lang: any, title?) {
      const { locale }: any = i18n.global;
      this.language = lang;
      locale.value = lang;
      if (title) document.title = langTitle(title); // i18 page title
    },
    switchCollapsed() {
      this.collapsed = !this.collapsed;
    },
    setLockTime(payload = initTime) {
      this.lockTime = payload;
    },
    /** 设置暗黑模式 */
    setDark(isDark) {
      this.isDark = isDark;
    },
  },
});
