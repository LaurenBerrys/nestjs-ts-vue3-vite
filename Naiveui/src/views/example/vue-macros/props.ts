/*
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-03-21 15:26:05
 * @LastEditTime: 2023-03-21 16:30:29
 * @Description:
 */
/**
 * @description: props传参类型
 * @param {title} title  标题string
 * @param {width} width  宽度string
 * @param {visible} visible  是否显示 boolean
 */
type propsType = {
  title: string | null;
  visible: boolean;
  width: string | null;
};
export { propsType };
