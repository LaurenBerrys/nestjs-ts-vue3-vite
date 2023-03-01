/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-28 20:30:48
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-28 21:09:22
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/api/roles.ts
 * @Description: 
 * 
 */
//创建菜单
import axiosReq from '@/utils/axios'
export const createRoles = (data) => {
    return axiosReq({
      url: '/nest-api/role',
      method: 'post',
      data
    })
  }
  export const getRoles = (params) => {
    return axiosReq({
      url: '/nest-api/role',
      method: 'get',
      params
    })
  }
  export const updateRoles = (url,data) => {
    return axiosReq({
      url: '/nest-api/role/'+url,
      method: 'patch',
      data
    })
  }
  export const deleteRoles = (url) => {
    return axiosReq({
      url: '/nest-api/role/'+url,
      method: 'delete'
    })
  }