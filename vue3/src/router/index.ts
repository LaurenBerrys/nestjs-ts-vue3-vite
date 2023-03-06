/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-15 14:54:00
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-04 18:26:53
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/router/index.ts
 * @Description: 
 * 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouterTypes } from '~/basic'
const layout = () => import('@/layout/index.vue');

export const constantRoutes: RouterTypes = [
  {
    name: '系统设置',
    path: '/',
    redirect:'/user',
    component: layout,
    meta: {
      title: '系统设置',
      icon: 'system-uicons:airplay',
      order: 0,
    },
    children: [
      {
        name: 'user',
        path: '/user',
        component: () => import('@/views/system/user.vue'),
        meta: {
          title: '用户管理',
          icon: 'system-uicons:contacts',
          order: 0,
        },
      },
      {
        name: 'roles',
        path: '/roles',
        component: () => import('@/views/system/roles/index.vue'),
        meta: {
          title: '角色管理',
          icon: 'ep:avatar',
          order: 0,
        },
      },
      {
        name: 'menu',
        path: '/menu',
        component: () => import('@/views/system/menu.vue'),
        meta: {
          title: '菜单管理',
          icon: 'mdi:home',
          order: 0,
        },
      },
    ],
  },
  {
    path: '/login',
    isHidden: true,
    component: () => import('@/views/login/index.vue'),
  },
]


//角色和code数组动态路由
export const roleCodeRoutes: RouterTypes = [
  // {
  //   path: '/roles-codes',
  //   component: Layout,
  //   redirect: '/roles-codes/page',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'Permission',
  //   meta: {
  //     title: 'Permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/roles-codes/index.vue'),
  //       name: 'RolesCodes',
  //       meta: { title: 'Permission Switch' }
  //     },
  //     {
  //       path: 'roleIndex',
  //       component: () => import('@/views/roles-codes/role-index.vue'),
  //       name: 'RoleIndex',
  //       meta: { title: 'Role Index', roles: ['admin'] }
  //     },
  //     {
  //       path: 'code-index',
  //       component: () => import('@/views/roles-codes/code-index.vue'),
  //       name: 'CodeIndex',
  //       meta: { title: 'Code Index', code: 16 }
  //     },
  //     {
  //       path: 'button-permission',
  //       component: () => import('@/views/roles-codes/button-permission.vue'),
  //       name: 'ButtonPermission',
  //       meta: { title: 'Button Permission' }
  //     }
  //   ]
  // }
]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes: RouterTypes = [
  // 404 page must be placed at the end !!!
  { path: '/:catchAll(.*)', name: 'CatchAll', redirect: '/404', hidden: true }
]


const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

export default router
