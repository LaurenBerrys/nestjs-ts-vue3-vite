/*
 * @Author: Nie Chengyong
 * @Date: 2022-12-09 11:58:43
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 15:41:25
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/store/config.ts
 * @Description: 
 * 
 */
import { defineStore } from 'pinia'
import { langTitle } from '@/hooks/use-common'
import settings from '@/settings'
import { i18n } from '@/lang'
import { useDark } from '@vueuse/core'
const isDark = useDark()
export const useConfigStore = defineStore('config', {
  state: () => {
    return {
      /** keepAlive路由的key，重新赋值可重置keepAlive */
      aliveKeys: {},
      reloadFlag:true,
      dateLocale:'dateZhCN',
      language: settings.defaultLanguage as any,
      theme: settings.defaultTheme as any,
      collapsed:settings.collapsed,
      isDark
    }
  },
  persist: {
    storage: localStorage,
    paths: ['language', 'theme','dateLocale','collapsed']
  },
  actions: {
    async reloadPage() {
      window.$loadingBar.start()
      this.reloadFlag = false
      await nextTick()
      setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 })
        window.$loadingBar.finish()
      }, 100)
    },
    setTheme(data:any) {
      this.theme = data
    },
      /** 切换/关闭 暗黑模式 */
    toggleDark(){
      this.isDark = !this.isDark
    },
    setCollapsed() {
      this.collapsed = !this.collapsed
    },
    setLanguage(lang:any, title) {
      const { locale }: any = i18n.global
      this.language = lang
      locale.value = lang
      document.title = langTitle(title) // i18 page title
    },    switchCollapsed() {
      this.collapsed = !this.collapsed
    },
    setAliveKeys(key, val) {
      this.aliveKeys[key] = val
    },
    /** 设置暗黑模式 */
    setDark(isDark) {
      this.isDark = isDark
    },
    
  }
})
