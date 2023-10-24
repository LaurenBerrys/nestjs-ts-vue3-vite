<template>
  <div
    top-0
    left-0
    absolute
    flex
    flex-col
    card
    shadow-xl
    overflow-visible
    :class="showPanel ? 'p-5' : ''"
    style="background;: #EEF1FF"
  >
    <label>
      <icon-material-symbols:cancel-outline
        style="width: 30px; height: 30px"
        absolute
        top--10
        left--10
        @click="() => (showPanel = !showPanel)"
        v-show="showPanel"
      />
      <icon-material-symbols:right-panel-close
        size="20"
        @click="() => (showPanel = !showPanel)"
        v-show="!showPanel"
      />
    </label>
    <div v-show="showPanel" p-10>
      <div flex>
        <div
          v-for="(item, index) in typeSwitch"
          :key="index"
          flex
          flex-1
          justify-center
          items-center
        >
          <n-button
            type="primary"
            strong
            secondary
            size="small"
            :class="toolType === 'type' ? 'btn-active' : ''"
            @click="() => setToolType(item.type)"
          >
            {{ item.text }}
          </n-button>
        </div>
      </div>

      <div v-show="toolType === CANVAS_ELE_TYPE.FREE_DRAW || toolType === CANVAS_ELE_TYPE.ERASER">
        <div mt-3>
          <div font-bold>宽度</div>
          <div btn-group flex mt-1 w-full>
            <div v-for="(item, index) in CommonWidth" :key="index" flex-1 justify-center mr-10>
              <n-button
                :key="index"
                ghost
                :class="
                  toolType === CANVAS_ELE_TYPE.FREE_DRAW
                    ? board?.currentLineWidth === item
                    : board?.cleanWidth === item
                "
                @click="() => setWidth(item)"
              >
                <div bg-black :style="{ height: item / 2 + 'px', width: '30px' }"> </div>
              </n-button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="toolType === CANVAS_ELE_TYPE.FREE_DRAW">
        <div form-control mt-3>
          <div font-bold> 颜色</div>
          <div mt-1 w-full>
            <div flex items-center v-if="board?.currentFreeDrawStyle === FreeDrawStyle.MultiColor">
              <div v-for="(item, index) in board?.currentLineColor" :key="index">
                <div flex items-center relative>
                  <input
                    type="color"
                    :value="item"
                    @change="(e)=>changeLineColor((e.target as HTMLInputElement).value, index, 'double')"
                  />
                  <div v-show="board.currentLineColor.length > 1" absolute top--10 right-0>
                    <n-icon size="10" @click="() => deleteLineColor(index)">
                      <icon-material-symbols:cancel-outline />
                    </n-icon>
                  </div>
                </div>
              </div>
              <div
                flex
                justify-center
                items-center
                v-show="board?.currentLineColor.length < 6"
                @click="
                  () =>
                    changeLineColor(
                      '#000000',
                      board.currentLineColor.length,
                      CHANGE_COLOR_TYPE.MULTI
                    )
                "
              >
                <n-icon size="20">
                  <icon-material-symbols:add />
                </n-icon>
              </div>
            </div>
            <div v-else flex items-center w-full>
              <input
                w-100
                mr-20
                type="color"
                @change="(e)=>changeLineColor((e.target as HTMLInputElement).value, 1, CHANGE_COLOR_TYPE.UNI)"
                :class="styles.lineColor"
              />
              <span>#</span>
              <input
                @click="copyColor"
                v-model="colorInput"
                id="colorInput"
                w-80
                focus:outline-none
                cursor-pointer
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
      <div v-if="toolType === CANVAS_ELE_TYPE.FREE_DRAW">
        <div mt-3>
          <div font-bold>效果</div>
          <div flex w-full mb-10>
            <div
              flex
              flex-1
              justify-center
              items-center
              v-for="(item, index) in styleSwitch.line_1"
              :key="index"
            >
              <n-button
                size="small"
                flex-grow
                :class="board?.currentFreeDrawStyle === item.type ? 'btn-active' : ''"
                @click="() => setFreeDrawStyle(item.type)"
              >
                {{ item.text }}
              </n-button>
            </div>
          </div>
          <div flex w-full>
            <div
              flex
              flex-1
              justify-center
              items-center
              v-for="(item, index) in styleSwitch.line_2"
              :key="index"
            >
              <n-button
                size="small"
                flex-grow
                :class="board?.currentFreeDrawStyle === item.type ? 'btn-active' : ''"
                @click="() => setFreeDrawStyle(item.type)"
              >
                {{ item.text }}
              </n-button>
            </div>
          </div>
        </div>
      </div>
      <div mt-3>
        <div font-bold>Tool</div>
        <div flex justify-around items-center m-20>
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-icon size="20" @click="undo">
                <icon-ri:arrow-go-back-fill />
              </n-icon>
            </template>
            撤销
          </n-tooltip>
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-icon size="20" @click="redo">
                <icon-ic:outline-call-missed-outgoing />
              </n-icon>
            </template>
            前进
          </n-tooltip>
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-icon size="20" @click="clean">
                <icon-iconoir:trash />
              </n-icon>
            </template>
            删除
          </n-tooltip>
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-icon size="20" @click="saveImage">
                <icon-iconoir:download />
              </n-icon>
            </template>
            保存
          </n-tooltip>
        </div>
        <Layer :board="board" :refresh="() => refresh++" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { CANVAS_ELE_TYPE, CommonWidth } from '../../utils/constants';
  import { PaintBoard } from '../../utils/paintBoard';
  import { FreeDrawStyle } from '../../utils/element/freeDraw';
  import Layer from '../layer/index.vue';
  import { CHANGE_COLOR_TYPE, styleSwitch, typeSwitch } from './constant';
  import { useClipboard } from '@vueuse/core';
  import styles from './index.module.css';
  interface IProps {
    board: Ref<PaintBoard | undefined>; // 画板
    toolType: Ref<string>; // 操作类型
    setToolType: (type: string) => void; // 修改操作类型
  }

  // let toastTimeout: NodeJS.Timeout | null = null;

  /**
    操作面板
    */
  export default defineComponent({
    name: 'ToolPanel',
    components: { Layer },
    props: ['board', 'toolType', 'setToolType'],
    setup(props: IProps) {
      const { board, toolType } = toRefs(props);
      const state = reactive({
        refresh: 0,
        toastState: false,
        showPanel: true,
      });

      // 颜色输入框(目前是只读数据)
      const colorInput = computed(() => {
        if (board?.value?.currentLineColor) {
          return board.value.currentLineColor[0].split('#')[1] || '';
        }
        return '';
      });

      // 改变画笔颜色
      const changeLineColor = (color: string, index: number, type: string) => {
        if (board?.value) {
          console.log(colorInput.value);
          const colors = [...board.value.currentLineColor];
          colors[index] = color;
          const newColor = type === CHANGE_COLOR_TYPE.UNI ? [color] : colors;
          board.value.setFreeDrawColor(newColor);
          state.refresh++;
        }
      };

      // 删除画笔颜色
      const deleteLineColor = (index: number) => {
        if (board?.value) {
          const colors = [...board.value.currentLineColor];
          colors.splice(index, 1);
          board.value.setFreeDrawColor(colors);
          state.refresh++;
        }
      };

      // 复制颜色
      const copyColor = () => {
        const { copy } = useClipboard();
        copy(colorInput.value);
        window.$message.success('复制成功');
      };

      // 点击后退
      const undo = () => {
        if (board?.value) {
          board.value.undo();
        }
      };

      // 点击前进
      const redo = () => {
        if (board?.value) {
          board.value.redo();
        }
      };

      // 清除画布
      const clean = () => {
        if (board?.value) {
          board.value.clean();
        }
      };

      // 保存图片
      const saveImage = () => {
        console.log(11111);

        if (board?.value) {
          board.value.saveImage();
        }
      };
      // 改变宽度
      const setWidth = (w: number) => {
        if (board.value) {
          switch (toolType) {
            case CANVAS_ELE_TYPE.FREE_DRAW as any:
              board.value.setFreeDrawWidth(w);
              break;
            case CANVAS_ELE_TYPE.ERASER as any:
              board.value.setCleanWidth(w);
              break;
            default:
              break;
          }
          state.refresh++;
        }
      };
      // 改变画笔样式
      const setFreeDrawStyle = (mode: FreeDrawStyle) => {
        if (board.value) {
          board.value.setFreeDrawStyle(mode);
          state.refresh++;
        }
      };
      return {
        ...toRefs(state),
        styleSwitch,
        styles,
        CHANGE_COLOR_TYPE,
        CommonWidth,
        FreeDrawStyle,
        CANVAS_ELE_TYPE,
        typeSwitch,
        colorInput,
        changeLineColor,
        deleteLineColor,
        copyColor,
        undo,
        redo,
        clean,
        saveImage,
        setWidth,
        setFreeDrawStyle,
      };
    },
  });
</script>
<style></style>
