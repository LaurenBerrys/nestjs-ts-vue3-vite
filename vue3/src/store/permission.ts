/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 14:39:28
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 14:43:00
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/store/permission.ts
 * @Description: 
 * 
 */
import { defineStore } from 'pinia'
import { asyncRoutes, constantRoutes } from '@/router'

function hasPermission(route, role) {
  // * 不需要权限直接返回true
  if (!route.meta?.requireAuth) return true

  const routeRole = route.meta?.role ? route.meta.role : []

  // * 登录用户没有角色或者路由没有设置角色判定为没有权限
  if (!role.length || !routeRole.length) return false

  // * 路由指定的角色包含任一登录用户角色则判定有权限
  return role.some((item) => routeRole.includes(item))
}

function filterAsyncRoutes(routes:any = [], role) {
  const ret:any = []
  routes.forEach((route) => {
    if (hasPermission(route, role)) {
      const curRoute = {
        ...route,
        children: [],
      }
      if (route.children && route.children.length) {
        curRoute.children = filterAsyncRoutes(route.children, role)
      } else {
        Reflect.deleteProperty(curRoute, 'children')
      }
      ret.push(curRoute)
    }
  })
  return ret
}

export const usePermissionStore = defineStore('permission', {
  state() {
    return {
      accessRoutes: [],
    }
  },
  persist: {
    storage: localStorage,
    paths: ['accessRoutes']
  },
  actions: {
    routes() {
        return constantRoutes.concat(this.accessRoutes)
      },
      menus() {
        return this.routes().filter((route) => route.name && !route.isHidden)
      },
    generateRoutes(role = []) {
      const accessRoutes = filterAsyncRoutes(asyncRoutes, role)
      this.accessRoutes = accessRoutes
      return accessRoutes
    },
    resetPermission() {
      this.$reset()
    },
  },
})
