/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-08-07 16:51:56
 * @LastEditTime: 2023-08-07 16:55:08
 * @Description: 
 */
import axiosRequest from '@/utils/axios';
//获取表单信息
export const getFormily = (data) => {
  return axiosRequest({
    url: '/nest-api/Formily/'+data,
    method: 'get',
  });
};
