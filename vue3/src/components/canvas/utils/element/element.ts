/*
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-03-17 17:24:44
 * @LastEditTime: 2023-03-17 17:25:12
 * @Description: 画板类
 */
export class CanvasElement {
  type: string; // 元素类型
  layer: number; // 图层
  constructor(type: string, layer: number) {
    this.type = type;
    this.layer = layer;
  }
}
