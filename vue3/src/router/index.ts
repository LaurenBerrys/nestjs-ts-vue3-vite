/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-15 14:54:00
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-21 19:55:14
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/router/index.ts
 * @Description: 
 * 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouterTypes } from '~/basic'
import Layout from '@/layout/index.vue'

export const constantRoutes: RouterTypes = [
  {
    name: '工作台',
    path: '/',
    component: Layout,
    // redirect:'/workmen',
    meta: {
      title: '工作台',
      icon: 'mdi:home',
      order: 0,
    },
    children: [
      {
        name: 'workmen',
        path: '/workmen',
        component: () => import('../views/workmen/index.vue'),
        meta: {
          title: '工作台',
          icon: 'mdi:home',
          order: 0,
        },
      },
      {
        name: 'workmens',
        path: '/Workmens',
    // redirect: '/workmen',
        component: () => import('../views/workmen/index.vue'),
        meta: {
          title: '工作台2',
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
