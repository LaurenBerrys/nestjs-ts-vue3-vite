/*
 * @Author: Nie Chengyong
 * @Date: 2022-12-09 11:58:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-12 15:11:04
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/store/config.ts
 * @Description:
 *
 */
import { defineStore } from 'pinia';
import { langTitle } from '@/hooks/use-common';
import settings from '@/components/settings/SystemSettings';
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
      theme: settings.defaultTheme as any, //主题模式
      themeColor: '#2cb67d',//主题颜色
      collapsed: settings.collapsed,
      isDark,
      settings: settings,
      lock: false, // 锁屏
      lockTime: isLock ? initTime : 0, // 锁屏时间
      
    };
  },
  persist: {
    storage: localStorage,
    paths: ['language','themeColor', 'theme', 'dateLocale', 'collapsed', 'settings', 'lock'],
  },
  actions: {
      /** 设置锁屏 */
    setLock(lock) {
      this.lock = lock;
    },
      /** 设置主题模式 */
    setTheme(data: any) {
      this.theme = data;
    },
    /** 设置主题颜色 */
    setThemeColor(data: any) {
      this.themeColor = data;
    },
    /** 切换/关闭 暗黑模式 */
    toggleDark() {
      this.isDark = !this.isDark;
    },
    /** 设置菜单是否展开 */
    setCollapsed() {
      this.collapsed = !this.collapsed;
    },
    /** 设置语言 */
    setLanguage(lang: any, title?) {
      const { locale }: any = i18n.global;
      this.language = lang;
      locale.value = lang;
      if (title) document.title = langTitle(title); // i18 page title
    },
    /** 设置锁屏时间 */
    setLockTime(payload = initTime) {
      this.lockTime = payload;
    },
  },
});
