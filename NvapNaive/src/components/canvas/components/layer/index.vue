<!--
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-03-22 11:32:13
 * @LastEditTime: 2023-03-22 19:07:17
 * @Description: 
-->
<template>
  <div class="mt-3">
    <div class="font-bold flex justify-between items-center">
      <span>Layer</span>
      <div>
        <span @click="addLayer" class="text-2xl cursor-pointer tooltip" data-tip="layer.add">
          <n-icon size="20">
            <icon-iconoir:add-square />
          </n-icon>
        </span>
        <span
          @click="() => deleteLayer(board?.layer.current)"
          class="ml-3 mr-3 text-2xl cursor-pointer tooltip"
          data-tip="layer.delete"
        >
          <n-icon size="20">
            <icon-iconoir:remove-square />
          </n-icon>
        </span>
      </div>
    </div>
    <div>
      <div v-for="(item, index) in board?.layer?.stack" :key="index">
        <LayerItem :index="index" :board="board" :data="item" :refresh="refresh" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { PaintBoard } from '../../utils/paintBoard';
  import LayerItem from './layerItem.vue';
  interface IProps {
    board: PaintBoard | undefined; // 画板
    refresh: () => void; // 刷新事件
  }
  export default defineComponent({
    name: 'Layer',
    props: ['board', 'refresh'],
    components: { LayerItem },
    setup(props: IProps) {
      const { board, refresh } = toRefs(props);
      /**
       * 添加图层
       */
      const addLayer = () => {
        if (board.value) {
          board.value.layer.add();
          refresh.value();
        }
      };
      /**
       * 删除图层
       * @param id 图层id
       */
      const deleteLayer = (id: number | undefined) => {
        if (board.value && id) {
          board.value.history.delete('layer', id);
          board.value.layer.delete(id);
          refresh.value();
        }
      };
      return {
        deleteLayer,
        addLayer,
      };
    },
  });
</script>
