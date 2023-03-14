/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-16 11:44:01
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 12:01:56
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/utils/icon.ts
 * @Description:
 *
 */
import { h } from "vue";
import { Icon } from "@iconify/vue";
import { NIcon } from "naive-ui";
import SvgIcon from "@/components/icon/SvgIcon.vue";

/**
 * @description: 生成icon组件
 * @param {string} icon iconify图标
 * @param {object} props icon组件属性
 * @return {function} icon组件
 * @example: renderIcon('mdi:home', { size: 12 })
 */
export function renderIcon(icon, props = { size: 12 }) {
  return () => h(NIcon, props, { default: () => h(Icon, { icon }) });
}
/**
 * @description: 生成自定义icon组件
 * @param {string} icon svg图标
 * @param {object} props icon组件属性
 * @return {function} icon组件
 * @example: renderCustomIcon('icon', { size: 12 })
 */
export function renderCustomIcon(icon, props = { size: 12 }) {
  return () => h(NIcon, props, { default: () => h(SvgIcon, { icon }) });
}
