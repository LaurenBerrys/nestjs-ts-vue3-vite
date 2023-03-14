/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-15 15:45:48
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-04 01:52:03
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/hooks/use-self-router.ts
 * @Description:
 *
 */
import router from "@/router";
export const getQueryParam = () => {
  const route: any = router.currentRoute;
  if (route.value?.query.params) {
    return JSON.parse(route.value.query.params);
  }
};
/**
 * @description: 路由跳转
 * @param name // 路由名称
 * @param params // 路由参数
 * @Date: 2021-03-04 01:51:02
 * @LastEditors: Nie Chengyong
 */
export const routerPush = (name, params) => {
  let data = {};
  if (params) {
    data = {
      params: JSON.stringify(params),
    };
  } else {
    data = {};
  }
  router.push({
    name,
    query: data,
  });
};
/**
 *  @description: 路由替换
 * @param name // 路由名称
 * @param params // 路由参数
 * @return {*}
 * @Date: 2021-03-04 01:51:02
 * @LastEditors: Nie Chengyong
 * */
export const routerReplace = (name, params) => {
  let data = {};
  if (params) {
    data = {
      params: JSON.stringify(params),
    };
  } else {
    data = {};
  }
  router.replace({
    name,
    query: data,
  });
};
/**
 * @description: 获取当前路由信息
 * @return {*}
 * @Date: 2021-03-04 01:51:02
 * @LastEditors: Nie Chengyong
 * */
export const routeInfo = () => {
  return router.currentRoute;
};
/**
 * @description: 路由返回
 * @return {*}
 * @Date: 2021-03-04 01:51:02
 * @LastEditors: Nie Chengyong
 * */
export const routerBack = () => {
  router.go(-1);
};
