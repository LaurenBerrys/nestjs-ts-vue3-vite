/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 09:16:58
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-03 21:58:28
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/Table/src/props.ts
 * @Description: 
 * 
 */
import type { PropType } from 'vue';
import  {propTypes}  from '@/utils/propTypes';
import { BasicColumn } from './types/table';
import { NDataTable } from 'naive-ui';
export const nvapProps = {
  ...NDataTable.props, // 这里继承原 UI 组件的 props
  title: {
    type: String,
    default: null,
  },
  titleTooltip: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    default: 'medium',
  },
  dataSource: {
    type: [Object],
    default: () => [],
  },
  columns: {
    type: [Array] as PropType<BasicColumn[]>,
    default: () => [],
    required: true,
  },
  beforeRequest: {
    type: Function as PropType<(...arg: any[]) => void | Promise<any>>,
    default: null,
  },
  request: {
    type: Function as PropType<(...arg: any[]) => Promise<any>>,
    default: null,
  },
  afterRequest: {
    type: Function as PropType<(...arg: any[]) => void | Promise<any>>,
    default: null,
  },
  rowKey: {
    type: [String, Function] as PropType<string | ((record) => string)>,
    default: undefined,
  },
  pagination: {
    type: [Object, Boolean],
    default: () => {},
  },
  //废弃
  showPagination: {
    type: [String, Boolean],
    default: 'auto',
  },
  actionColumn: {
    type: Object as PropType<BasicColumn>,
    default: null,
  },
  canResize: propTypes.bool,
  resizeHeightOffset: propTypes.number,
};
