/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-15 15:14:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-16 15:12:43
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/settings.ts
 * @Description:
 *
 */
import packageJson from '../../../package.json';
import { LANG_VALUE } from '../../enums/enum';
import type { SettingsConfig } from '~/basic';
console.log(packageJson.name);

export const settings: SettingsConfig = {
  title: packageJson.name,

  /*
   * i18n setting default language
   * en/zh
   * 语言设置 默认语言
   * */
  defaultLanguage: LANG_VALUE.Zh,
  /*
   *  default theme
   * base-theme/lighting-theme/dark-theme
   * 主题设置 默认主题
   * */
  defaultTheme: null,
  /**
   * @type {boolean} true | false
   * @description 边拦是否折叠
   */
  collapsed: false,
  /**
   * @type {Number}
   * @description 顶部高度
   */
  headHight: 60,
  /**
   * @type {boolean} true | false
   * @description 标签是否显示
   */
  tagsView: true,
  /**
   * @type {Number}
   * @description 标签高度
   */
  tagsHeight: 50,
  /*page login or other*/
  /**
   * @type {boolean} true | false
   * @description 是否需要登陆
   */
  isNeedLogin: true,
  /*page login or other*/
  /**
   * @type {string} true | false
   * @description  页面的路径
   */
  viteBasePath: './',
  /*page login or other*/
  /**
   * @type {string} true | false
   * @description  路由权限模式
   */
  permissionMode: 'roles',
};

export default settings;
