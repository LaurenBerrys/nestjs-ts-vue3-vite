<!--
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-03-22 20:05:31
 * @LastEditTime: 2023-08-09 17:48:53
 * @Description: 
-->
<template>
  <ComponentPage>
    <NvapD3
      :data="datalist"
      :model="D3model.svg"
      :width="1000"
      :height="500"
      :node-methods="nodeMethods"
      :node-color="nodeColor"
      :link-color="linkColor"
      :menu-methods="menuMethods"
    />
  </ComponentPage>
</template>
<script setup lang="ts" name="D3">
  import { data, nodeMethods, nodeColor, linkColor, menuMethods } from './index';
  import { D3model } from '@/enums/d3model';
  const Models = cloneDeep(data);
  let datalist=data
  onMounted(() => {
    for (let index = 0; index < 2000; index++) {
      console.log(index);
      if (!Models.nodes[index]) {
        Models.nodes[index] = {
          id: index,
          level: 2,
          name: '知识集' + index,
          label: '知识集' + index,
          cname: '知识集' + index,
          x: 100 * index,
          y: 100,
          nodetype: '知识集' + index,
          weight: 20,
        };
      }
      if (!Models.links[index]) {
        Models.links[index] = {
          source: 1,
          target: index,
          label: '其它' + index,
          id: index,
          weight: 10,
        };
      }
    }
    console.log(Models,1111);
    datalist=Models
  });
</script>

<style scoped></style>
