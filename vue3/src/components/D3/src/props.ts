/*
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-03-22 20:08:55
 * @LastEditTime: 2023-03-23 19:33:36
 * @Description:
 */
interface dataObj {
  nodes: Array<any>;
  links: Array<any>;
}
/**
 * @description: props传参类型
 * @param {data} data  数据
 * @param {loading} loading  是否加载
 * @param {model} model  模式canvas/svg
 * @param {nodeColor} nodeColor  节点颜色
 * @param {linkColor} linkColor  连线颜色
 * @param {menuMethods} menuMethods  菜单事件方法
 * @param {nodeMethods} nodeMethods  节点事件方法
 * @param {width} width  画布宽度
 * @param {height} height  画布高度
 */
type props = {
  model: string | 'svg';
  width: number;
  height: number;
  data: dataObj;
  nodeMethods: Array<any>;
  nodeColor: Array<any>;
  linkColor: Array<any>;
  menuMethods: Array<any>;
};
export { props };
