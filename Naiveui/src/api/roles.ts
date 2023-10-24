/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-28 20:30:48
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-08 21:59:18
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/api/roles.ts
 * @Description:
 *
 */

//创建角色
import axiosRequest from '@/utils/axios';
export const createRoles = (data) => {
  return axiosRequest({
    url: '/nest-api/role',
    method: 'post',
    data,
  });
};
export const getRoles = (params?) => {
  return axiosRequest({
    url: '/nest-api/role',
    method: 'get',
    params,
  });
};
export const updateRoles = (url, data) => {
  return axiosRequest({
    url: '/nest-api/role/' + url,
    method: 'patch',
    data,
  });
};
export const deleteRoles = (url) => {
  return axiosRequest({
    url: '/nest-api/role/' + url,
    method: 'delete',
  });
};
