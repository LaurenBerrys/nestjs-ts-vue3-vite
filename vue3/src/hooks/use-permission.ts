import type { RouteRawConfig, RouterTypes, rawConfig } from '~/basic'
import type { RouteRecordName } from 'vue-router'
const modules = import.meta.glob('../views/**/*.{vue,tsx}')
/**
 * 根据请求，过滤异步路由
 * @param:menuList 异步路由数组
 * return 过滤后的异步路由
 */
// @ts-ignore
import Layout from '@/layout/index.vue'
/*
 * 路由操作
 * */
import router, { asyncRoutes, constantRoutes, roleCodeRoutes } from '@/router'

const buttonCodes: Array<Number> = [] //按钮权限
interface menuRow {
  category: number
  code: number
  children: RouterTypes
}
export const filterAsyncRoutesByMenuList = (menuList) => {
  const filterRouter: RouterTypes = []
  menuList.forEach((route: menuRow) => {
    //button permission
    if (route.category === 3) {
      buttonCodes.push(route.code)
    } else {
      //generator every router item by menuList
      const itemFromReqRouter = getRouteItemFromReqRouter(route)
      if (route.children?.length) {
        //judge  the type is router or button
        itemFromReqRouter.children = filterAsyncRoutesByMenuList(route.children)
      }
      filterRouter.push(itemFromReqRouter)
    }
  })
  return filterRouter
}
const getRouteItemFromReqRouter = (route): RouteRawConfig => {
  const tmp: rawConfig = { meta: { title: '' } }
  const routeKeyArr = ['path', 'component', 'name', 'hidden']
  const metaKeyArr = ['title', 'icon','order','keepAlive']
  // @ts-ignore
  //generator routeKey
  routeKeyArr.forEach((fItem) => {
    if (fItem === 'component') {
      if (route[fItem] === 'Layout') {
        tmp[fItem] = Layout
      } else {
        tmp[fItem] = dynamicImport(modules,route[fItem]) 
      }
    } else if (fItem === 'path') {
      tmp[fItem] = `${route[fItem]}`
    } 
    // else if (['hidden', 'alwaysShow'].includes(fItem)) {
    //   tmp[fItem] = !!route[fItem]
    // } 
    else if (['name'].includes(fItem)) {
      tmp[fItem] = route['code']
    } else if (route[fItem]) {
      tmp[fItem] = route[fItem]
    }
  })
  //generator metaKey
  metaKeyArr.forEach((fItem) => {
    if (route[fItem] && tmp.meta) tmp.meta[fItem] = route[fItem]
  })
  //route extra insert
  if (route.extra) {
    Object.entries(route.extra.parse(route.extra)).forEach(([key, value]) => {
      if (key === 'meta' && tmp.meta) {
        tmp.meta[key] = value
      } else {
        tmp[key] = value
      }
    })
  }
  return tmp as RouteRawConfig
}

/**
 * 根据角色数组过滤异步路由
 * @param routes asyncRoutes 未过滤的异步路由
 * @param roles  角色数组
 * return 过滤后的异步路由
 */
export function filterAsyncRoutesByRoles(routes, roles) {
  const res: RouterTypes = []
  routes.forEach((route) => {
    const tmp: RouteRawConfig = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutesByRoles(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}
function hasPermission(roles, route) {
  if (route?.meta?.roles) {
    return roles?.some((role) => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 根据code数组，过滤异步路由
 * @param codes code数组
 * @param codesRoutes 未过滤的异步路由
 * return 过滤后的异步路由
 */
export function filterAsyncRouterByCodes(codesRoutes, codes) {
  const filterRouter: RouterTypes = []
  codesRoutes.forEach((routeItem: RouteRawConfig) => {
    if (hasCodePermission(codes, routeItem)) {
      if (routeItem.children) routeItem.children = filterAsyncRouterByCodes(routeItem.children, codes)
      filterRouter.push(routeItem)
    }
  })
  return filterRouter
}
function hasCodePermission(codes, routeItem) {
  if (routeItem.meta?.code) {
    return codes.includes(routeItem.meta.code) || routeItem.hidden
  } else {
    return true
  }
}
//过滤异步路由
export function filterAsyncRouter({ menuList=[], roles, codes }) {
  const appStore = useAppStore()
  let accessRoutes: RouterTypes = []
  const permissionMode = appStore.settings?.permissionMode
  if (permissionMode === 'roles') {
    accessRoutes = filterAsyncRoutesByMenuList(menuList) //by menuList
  } else if (permissionMode === 'rbac') {
    accessRoutes = filterAsyncRoutesByRoles(roleCodeRoutes, roles) //by roles
  } else {
    accessRoutes = filterAsyncRouterByCodes(roleCodeRoutes, codes) //by codes
  }
  accessRoutes.forEach((route) =>{ router.addRoute(route)})
  asyncRoutes.forEach((item) => router.addRoute(item))
  appStore.setFilterAsyncRoutes(accessRoutes)
}
//重置路由
export function resetRouter() {
  //移除之前存在的路由
  const routeNameSet: Set<RouteRecordName> = new Set()
  router.getRoutes().forEach((fItem) => {
    if (fItem.name) routeNameSet.add(fItem.name)
  })
  routeNameSet.forEach((setItem) => router.removeRoute(setItem))
  //新增constantRoutes
  constantRoutes.forEach((feItem) => router.addRoute(feItem))
}
//重置登录状态
export function resetState() {
  resetRouter()
  useAppStore().resetState()
}

//刷新路由
export function freshRouter(data) {
  resetRouter()
  filterAsyncRouter(data)
  // location.reload()
}

export const dynamicImport = (
  viewsModules: any,
  component: string
) => {
  const keys = Object.keys(viewsModules);
  const matchKeys = keys.filter((key) => {
    let k = key.replace('../views', '');
    const lastIndex = k.lastIndexOf('.');
    k = k.substring(0, lastIndex);
    return k === component;
  });
  if (matchKeys?.length === 1) {
    const matchKey = matchKeys[0];
    return viewsModules[matchKey];
  }
  if (matchKeys?.length > 1) {
    console.warn(
      'Please do not create `.vue` and `.TSX` files with the same file name in the same hierarchical directory under the views folder. This will cause dynamic introduction failure'
    );
    return;
  }
};

