/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 14:19:34
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-22 09:43:07
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/store/user.ts
 * @Description: 
 * 
 */
import { defineStore } from 'pinia'
import {resetState} from '@/hooks/use-permission'
export const useUserStore = defineStore('user', {
  state() {
    return {
      userInfo: {} as any,
    }
  },
  persist: {
    storage: localStorage,
    paths: ['userInfo']
  },
  actions: {
    userId() {
      return this.userInfo?.id
    },
    name() {
      return this.userInfo?.name
    },
    avatar() {
      return this.userInfo?.avatar
    },
    role() {
      return this.userInfo?.role || []
    },
    //获取用户信息
    async getUserInfo() {
      try {
        const res = await userInfoReq()
        const { id, name, avatar, role } = res.data
        this.userInfo = { id, name, avatar, role }
        return Promise.resolve(res.data)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    //登出
    async logout() {
      this.$reset()
      resetState()
    },
    setUserInfo(userInfo = {}) {
      this.userInfo = { ...this.userInfo, ...userInfo }
    },
  },
})
