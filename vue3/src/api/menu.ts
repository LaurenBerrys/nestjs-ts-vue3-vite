/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-28 11:15:59
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-28 11:26:19
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/api/menu.ts
 * @Description: 
 * 
 */
import axiosReq from '@/utils/axios'

//创建菜单
export const createMenu = (data) => {
    return axiosReq({
      url: '/nest-api/menu-list',
      method: 'post',
      data
    })
  }
  //创建菜单
export const updateMenu = (url,data) => {
    return axiosReq({
      url: '/nest-api/menu-list/'+url,
      method: 'patch',
      data
    })
  }
  