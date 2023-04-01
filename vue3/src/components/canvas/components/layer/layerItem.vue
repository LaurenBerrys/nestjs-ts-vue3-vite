<template>
  <div ref="dndRef">
    <div flex justify-evenly py-1.5 cursor-pointer :onClick="() => updateCurrentLayer(data.id)">
      <input
        :value="data.title"
        px-2
        w-100
        :onInput="(e) => setLayerTitle(data.id, (e.target as HTMLInputElement).value)"
      />
      <div
        @click="
          (e) => {
            e.stopPropagation();
            setLayerShow(data.id, !data.show);
          }
        "
        cursor-pointer
      >
        <div v-if="data.show">
          <icon-iconoir:shield-download />
        </div>
        <div v-else>
          <icon-iconoir:shield-eye />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { ILayer } from '../../utils/layer';
  import { PaintBoard } from '../../utils/paintBoard';
  interface IProps {
    board: PaintBoard | undefined; // 画板
    data: ILayer; // 图层数据
    index: number; // 图层下标
    refresh: () => void; // 刷新事件
  }
  export default defineComponent({
    name: 'LayerItem',
    props: ['board', 'data', 'index', 'refresh'],
    setup(props: IProps) {
      // 初始化dnd ref
      const dndRef: any = ref(null);
      const { board, refresh } = toRefs(props);
      // const [,drop] = useDrop<{ index: number }>({
      //   accept: 'layer',
      //   drop(hoverItem) {
      //     if (hoverItem.index === index.value) {
      //       return;
      //     }
      //     if (board.value && dndRef.value) {
      //       board.value.layer.swap(index.value, hoverItem.index);
      //       board.value.sortOnLayer();
      //       board.value.render();
      //       refresh.value();
      //     }
      //   },
      // });
      // const [{ isDragging }, drag] = useDrop({
      //   accept: 'layer',
      //   collect: (monitor) => ({
      //     isDragging: monitor.isDragging(),
      //   }),
      // });
      // drop(drag(dndRef));
      /**
       * 更新当前图层
       * @param id 图层id
       */
      const updateCurrentLayer = (id: number) => {
        if (board.value) {
          board.value.layer.updateCurrent(id);
          refresh.value();
        }
      };
      /**
       * 修改图层标题
       * @param id 图层id
       * @param title 图层标题
       */
      const setLayerTitle = (id: number, title: string) => {
        if (board.value) {
          board.value.layer.updateTitle(id, title);
          refresh.value();
        }
      };

      /**
       * 修改图层展示状态
       * @param id 图层id
       * @param show 展示状态
       */
      const setLayerShow = (id: number, show: boolean) => {
        if (board.value) {
          board.value.select.cancelSelectElement();
          board.value.layer.updateShow(id, show);
          refresh.value();
        }
      };
      return {
        // isDragging,
        setLayerShow,
        updateCurrentLayer,
        setLayerTitle,
        dndRef,
      };
    },
  });
</script>
