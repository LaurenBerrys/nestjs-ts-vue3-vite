/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-20 20:53:54
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-02 16:37:19
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/store/app.ts
 * @Description: 
 * 
 */
import { nextTick } from 'vue'
import { defineStore } from 'pinia'
import defaultSettings from '@/settings'
import router, { constantRoutes } from '@/router'
export const useAppStore = defineStore('app', {
    state: () => {
        return {
            reloadFlag: true,
            token: '',
            name: '',
            /** keepAlive路由的key，重新赋值可重置keepAlive */
            aliveKeys: [] as any,
            allRoutes: [] as any,
            userInfo: null as any,
            axiosPromiseArr: [] as any,//axiosPromiseArr收集请求地址,用于取消请求
            settings: defaultSettings,
            permissions:[]
        }
    },
    persist: {
        storage: localStorage,
        paths: ['token', 'name', 'allRoutes','userInfo']
    },
    actions: {
        async reloadPage() {
            window.$loadingBar.start()
            this.reloadFlag = false
            await nextTick()
            setTimeout(() => {
                document.documentElement.scrollTo({ left: 0, top: 0 })
                window.$loadingBar.finish()
                this.reloadFlag = true
            }, 100)
        },
        /**
         * 保存keepAlive路由的key
         * @param key
         * @param val
         * 
         **/
        setAliveKeys(key, val) {
            this.aliveKeys[key] = val
        },
        /**
         * 保存token
         * @param data 
         */
        setToken(token, name) {
            this.token = token,
                this.name = name
        },
        /**
        * 保存路由
        * @param routes 
        */
        setFilterAsyncRoutes(routes) {
            this.allRoutes = constantRoutes.concat(routes)
        },
        //保存用户信息
        setUserInfo(data) {
            this.userInfo = data
        },
        //返回显示的路由
        menus() {
            return this.allRoutes.filter((route) => route.name && !route.isHidden)
        },
        //重置
        resetState() {
            // $patch方法用来在当前state上执行Provide函数，从而更新store中存放的数据
            this.$patch((state) => {
                state.token = '' //reset token
                state.allRoutes = []
                state.name = ''
                state.userInfo = null
            })
        },
        //重置权限
        resetPermission() {
            this.$reset()
        },
        //重置状态并跳转到登录页
        resetStateAndToLogin() {
            const { resetTags } = useTagsStore()
            const { resetPermission } = useAppStore()
            resetTags()
            resetPermission()
            this.resetState()
            nextTick(() => {
                router.push({ path: '/login' })
            })
        },
    }
})
