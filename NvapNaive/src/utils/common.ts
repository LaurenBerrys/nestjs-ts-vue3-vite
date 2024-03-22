/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 11:13:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-17 10:35:04
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/utils/common.ts
 * @Description:
 *
 */
/**
 *  vue3防抖,但他不是function对象
 * @param value  函数
 * @param delay  时间
 * @returns
 */
export const deBounce = (value: any, delay = 200) => {
  let timeout;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      },
    };
  });
};
/**
 * @desc  函数防抖
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */ 
export function debounce<T>(
  method: (...args: any[]) => void,
  wait: number,
  immediate?: boolean
): (this: T, ...args: any[]) => void {
  let timeout: ReturnType<typeof setTimeout> | null;
  return function (...args) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) {
        method.apply(context, args);
      }
    } else {
      // 如果immediate为false，则函数wait毫秒后执行
      timeout = setTimeout(() => {
        method.apply(context, args);
      }, wait);
    }
  };
}


/**
 * @description: 根据树形结构的数据，获取某个节点的数据
 * @param {any} data 树形结构的数据，并且每个节点的id是唯一的
 * @param {string} key 要获取的节点的id
 * @return {*} 返回获取到的节点数据
 */
let result = null;
export function getTreeItem(data: any[], key?: string | number): any {
  data.map((item) => {
    if (item.id === key) {
      result = item;
    } else {
      if (item.children && item.children.length) {
        getTreeItem(item.children, key);
      }
    }
  });
  return result;
}
/**
 * @description: 将一个对象的所有属性经过unref处理后（获取原始值），返回一个新的对象
 * @param {T} props  一个对象，对象的属性值可以是ref或者reactive
 * @return {*} 返回一个新的对象，对象的属性值是原始值（没有响应式）
 */
export function getDynamicProps<T extends {}, U>(props: T): Partial<U> {
  const ret: Recordable = {};
  Object.keys(props).map((key) => {
    ret[key] = unref((props as Recordable)[key]);
  });
  return ret as Partial<U>;
}

/**
 * @description: 深度合并2个对象
 * @param {any} src 源对象
 * @param {any} target 目标对象
 */
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}


/**
 * @description:  将颜色进行明暗调整
 * @param {string} color 颜色
 * @param {number} amount 明暗调整
 * @return {*} 返回调整后的颜色
 */
function addLight(color: string, amount: number) {
  const cc = parseInt(color, 16) + amount;
  const c = cc > 255 ? 255 : cc;
  return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
}
/**
 * Lightens a 6 char HEX color according to the passed percentage
 * @param {string} color The color to change
 * @param {number} amount The amount to change the color by
 * @returns {string} The processed color represented as HEX
 */
export function lighten(color: string, amount: number) {
  color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color;
  amount = Math.trunc((255 * amount) / 100);
  return `#${addLight(color.substring(0, 2), amount)}${addLight(
    color.substring(2, 4),
    amount
  )}${addLight(color.substring(4, 6), amount)}`;
}
