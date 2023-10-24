/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-28 20:03:56
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-03 22:31:09
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/utils/propTypes.ts
 * @Description:
 *
 */
import { CSSProperties, VNodeChild, PropType } from 'vue';

export type VueNode = VNodeChild | JSX.Element;
const propTypes = {
  bool: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  func: {
    type: Function as PropType<(...arg: any[]) => void | Promise<any>>,
    default: null,
  },
  string: {
    type: String as PropType<string>,
    default: null,
  },
  number: {
    type: Number as PropType<number>,
    default: 0,
  },
  object: {
    type: Object as PropType<object>,
    default: null,
  },
  integer: {
    type: Number as PropType<number>,
    default: null,
  },
  style: {
    type: [String, Object] as PropType<CSSProperties>,
  },
  VNodeChild: {
    type: undefined as unknown as PropType<VueNode>, // 也可以省略类型，由 Vue 自动推断
  },
};
export { propTypes };
