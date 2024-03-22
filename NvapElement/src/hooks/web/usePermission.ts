/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-28 20:01:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-17 10:13:22
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/hooks/web/usePermission.ts
 * @Description:
 *
 */

export function usePermission() {
  const userStore = useAppStore();

  /**
   * 检查权限
   * @param accesses
   */
  function _somePermissions(accesses: string[]) {
    return userStore.userInfo.permissions.some((item) => {
      return accesses.includes(item);
    });
  }

  /**
   * 判断是否存在权限
   * 显示逻辑
   * */
  function hasPermission(accesses: string[]): boolean {
    if (!accesses || !accesses.length) return true;
    return _somePermissions(accesses);
  }
  return { hasPermission };
}
