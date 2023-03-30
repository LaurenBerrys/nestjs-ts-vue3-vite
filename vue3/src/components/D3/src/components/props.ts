/*
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-03-23 09:48:01
 * @LastEditTime: 2023-03-23 09:50:59
 * @Description: 
 */
/**
 * @description: 连线菜单传参类型
 * @param {top} top  菜单距离顶部距离
 * @param {left} left  菜单距离左边距离
 * @param {show} show  是否显示
 * @param {click} click  是否点击
 * @return {*}
 */
type prop={
    top:string,
    left:string,
    show:boolean | false,
    click:boolean|false,
}
export {prop}