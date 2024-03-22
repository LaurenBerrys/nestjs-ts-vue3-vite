/*
 * @Author: LaurenBerrys && 949154547@qq.com
 * @Date: 2023-08-07 16:51:56
 * @LastEditTime: 2023-09-01 17:54:29
 * @Description:
 */
import axiosRequest from '@/utils/axios';
//获取表单信息
export const getFormily = (data) => {
  return axiosRequest({
    url: '/nest-api/formily/' + data,
    method: 'get',
  });
};
