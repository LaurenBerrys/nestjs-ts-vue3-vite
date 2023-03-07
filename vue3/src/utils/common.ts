/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 11:13:56
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-03 22:35:50
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/utils/common.ts
 * @Description: 
 * 
 */
import { useEventListener } from '@vueuse/core'
/**
 *  vue3防抖,但他不是function对象
 * @param value  函数
 * @param delay  时间
 * @returns 
 */
export const deBounce=(value:any, delay = 200)=>{
    let timeout
    return customRef((track, trigger) => {
      return {
        get() {
          track()
          return value
        },
        set(newValue) {
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            value = newValue
            trigger()
          }, delay)
        }
      }
    })
}
/**
 * @desc  函数防抖
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce<T extends unknown>(method: (...args: any[]) => void, wait: number, immediate?: boolean): (this: T, ...args: any[]) => void {
  let timeout: ReturnType<typeof setTimeout>|null
  return function(...args) {
    const context = this
    if (timeout) {
      clearTimeout(timeout)
    }
    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) {
        method.apply(context, args)
      }
    } else {
      // 如果immediate为false，则函数wait毫秒后执行
      timeout = setTimeout(() => {
        method.apply(context, args)
      }, wait)
    }
  }
}


/**
 *  找到对应的节点
 * */
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
export function getDynamicProps<T extends {}, U>(props: T): Partial<U> {
  const ret: Recordable = {};
  Object.keys(props).map((key) => {
    ret[key] = unref((props as Recordable)[key]);
  });
  return ret as Partial<U>;
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}
