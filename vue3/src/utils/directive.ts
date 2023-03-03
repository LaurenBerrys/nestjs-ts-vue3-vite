/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-03 21:23:01
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-03 21:49:43
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/utils/directive.ts
 * @Description: 
 * 
 */
import { usePermission } from '@/hooks/web/usePermission';
export const myDirective = {
    // 在绑定元素的 attribute 前
    // 或事件监听器应用前调用
    created(el, binding, vnode, prevVnode) {
      // 下面会介绍各个参数的细节
      const {value}=binding
      
        if(!usePermission().hasPermission([...value])){
         //删除元素el
         el.style.display = 'none';
        }
    },
    // 在元素被插入到 DOM 前调用
    beforeMount(el, binding, vnode, prevVnode) {},
    // 在绑定元素的父组件
    // 及他自己的所有子节点都挂载完成后调用
    mounted(el, binding, vnode, prevVnode) {},
    // 绑定元素的父组件更新前调用
    beforeUpdate(el, binding, vnode, prevVnode) {},
    // 在绑定元素的父组件
    // 及他自己的所有子节点都更新后调用
    updated(el, binding, vnode, prevVnode) {},
    // 绑定元素的父组件卸载前调用
    beforeUnmount(el, binding, vnode, prevVnode) {},
    // 绑定元素的父组件卸载后调用
    unmounted(el, binding, vnode, prevVnode) {}
  }
  