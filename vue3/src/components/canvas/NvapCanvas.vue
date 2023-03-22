<template>
  <div relative w-full h-full>
    <ToolPanel :board="board" :toolType="toolType" :setToolType="handleToolType" />
    <canvas
      id="canvas"
      ref="canvasRef"
      :on-mousedown="mouseDown"
      :on-mousemove="mouseMove"
      :on-mouseup="mouseUp"
      :on-dblclick="dbClick"
      w-full h-full
    >
    </canvas>
  </div>
</template>
<script lang="ts">
  import { PaintBoard } from './utils/paintBoard';
  import { CANVAS_ELE_TYPE } from './utils/constants';
  import ToolPanel from './components/toolPanel/ToolPanel.vue';
  import { useBackspace, useResizeEvent, useSpaceEvent } from './hooks/event';
  import { CURSOR_TYPE } from './utils/cursor';
  import { TextEdit } from './utils/element/text';

  const textEdit = new TextEdit();
  export default defineComponent({
    name: 'NvapCanvas',
    components: {
      ToolPanel,
    },
    setup() {
      // 初始化画板
      const canvasRef: any = ref(null);
      const board = ref<PaintBoard>();
      onMounted(() => {
        if (canvasRef.value) {
          board.value = new PaintBoard(canvasRef.value);
          pushCanvas();
        }
      });
      // 工具类型
      const toolType = ref<string>(CANVAS_ELE_TYPE.FREE_DRAW);
      const handleToolType = (type: string) => {
        if (board.value) {
          if (type !== CANVAS_ELE_TYPE.SELECT) {
            board.value.select.cancelSelectElement();
          }
          toolType.value = type;
          board.value.render();
        }
      };
      // 是否按下空格
      const isPressSpace = useSpaceEvent(
        () => {
          if (board.value) {
            board.value.cursor.change(CURSOR_TYPE.POINTER);
            board.value.initOriginPosition();
          }
        },
        () => {
          if (board.value) {
            board.value.cursor.reset();
          }
        }
      );
      const canvas:any=ref(null);
      const pushCanvas=()=>{
        canvas.value=document.getElementById('canvas');
        canvas.value.addEventListener('mousedown',mouseDown);
        canvas.value.addEventListener('mousemove',mouseMove);
        canvas.value.addEventListener('mouseup',mouseUp);
        canvas.value.addEventListener('dblclick',dbClick);
      }
      useResizeEvent(() => {
        if (board.value) {
          board.value.initCanvasSize();
          board.value.context.translate(
            board.value.originTranslate.x,
            board.value.originTranslate.y
          );
          board.value.render();
        }
      });

      useBackspace(() => {
        if (board.value) {
          board.value.select.deleteSelectElement();
        }
      });

      // 监听鼠标事件
      const isMouseDown = ref<boolean>(false);
      const mouseDown = (event: MouseEvent) => {
        console.log(111111,event);
        if (board.value) {
          let { clientX: x, clientY: y } = event;
          x = x +200
          const position = {
            x,
            y,
          };
          // 如果有文本编辑框，取消编辑
          if (textEdit) {
            board.value.addTextElement(textEdit.value, textEdit.rect);
            textEdit.destroy();
          }
          switch (toolType.value) {
            case CANVAS_ELE_TYPE.SELECT:
              board.value.select.clickSelectElement(position);
              break;
            case CANVAS_ELE_TYPE.FREE_DRAW:
            case CANVAS_ELE_TYPE.ERASER:
              if (!isPressSpace.value) {
                board.value.recordCurrent(toolType.value);
              }
              break;
            default:
              break;
          }
          isMouseDown.value = true;
        }
      };
      const dbClick = (event: MouseEvent) => {
        if (board.value) {
          const { clientX: x, clientY: y } = event;
          const position = {
            x,
            y,
          };
          // 双击展示文字输入框
          textEdit.showTextInput(position);
        }
      };
      const mouseMove = (event: MouseEvent) => {
        if (board.value) {
          const { clientX: x, clientY: y } = event;
          if (isPressSpace.value && isMouseDown.value) {
            board.value.dragCanvas({
              x,
              y,
            });
          } else {
            switch (toolType.value) {
              case CANVAS_ELE_TYPE.SELECT:
                board.value.select.moveSelectElement({
                  x,
                  y,
                });
                break;
              case CANVAS_ELE_TYPE.FREE_DRAW:
              case CANVAS_ELE_TYPE.ERASER:
                if (isMouseDown.value) {
                  board.value.currentAddPosition({
                    x,
                    y,
                  });
                }
                break;
              default:
                break;
            }
          }
        }
      };
      const mouseUp = () => {
        if (board.value) {
          isMouseDown.value = false;
          board.value.canvasMouseUp();
        }
      };

      return {
        canvasRef,
        toolType,
        handleToolType,
        isPressSpace,
        isMouseDown,
        mouseDown,
        dbClick,
        mouseMove,
        mouseUp,
        board,
      };
    },
  });
</script>
