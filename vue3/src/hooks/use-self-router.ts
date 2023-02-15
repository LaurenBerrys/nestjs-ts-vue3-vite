/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-15 15:45:48
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-15 15:45:57
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/hooks/use-self-router.ts
 * @Description: 
 * 
 */
import router from '@/router'
export const getQueryParam = () => {
  const route: any = router.currentRoute
  if (route.value?.query.params) {
    return JSON.parse(route.value.query.params)
  }
}
// vue router
export const routerPush = (name, params) => {
  let data = {}
  if (params) {
    data = {
      params: JSON.stringify(params)
    }
  } else {
    data = {}
  }
  router.push({
    name,
    query: data
  })
}
export const routerReplace = (name, params) => {
  let data = {}
  if (params) {
    data = {
      params: JSON.stringify(params)
    }
  } else {
    data = {}
  }
  router.replace({
    name,
    query: data
  })
}

export const routeInfo = () => {
  return router.currentRoute
}
export const routerBack = () => {
  router.go(-1)
}
