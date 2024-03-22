/*
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-03-17 17:23:48
 * @LastEditTime: 2023-03-17 17:23:53
 * @Description:
 */
export const BOARD_STORAGE_KEY = 'PAINT_BOARD_DATA';
export const BOARD_LOCAL_KEY = 'PAINT_BOARD_LOCAL';

/**
 * localStorage封装
 */
export const storage = {
  /**
   * 获取缓存
   * @param key localStorage key
   */
  get(key: string) {
    if (!key) {
      return null;
    }
    key = key.toString();
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },

  /**
   * 修改缓存
   * @param key localStorage key
   * @param value
   */
  set(key: string, value: unknown) {
    if (!key || !value) {
      return null;
    }
    localStorage.setItem(key.toString(), JSON.stringify(value));
  },

  /**
   * 删除缓存
   * @param key localStorage key
   */
  deleteKey(key: string) {
    if (!key) {
      return;
    }
    key = key.toString();
    localStorage.removeItem(key);
  },

  /**
   * 清除缓存
   */
  clear() {
    localStorage.clear();
  },
};
