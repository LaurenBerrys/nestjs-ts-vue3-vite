<template>
  <ComponentPage>
    <div w-full h-full ref="container" id="container"> </div>
  </ComponentPage>
</template>

<script setup lang="ts">
  import G6 from '@antv/g6';
  import { data, colors, legendData } from './index';
  const container = ref<HTMLElement>();
  data.edges.forEach((edge:any) => {
    edge.label = `Transfer $${edge.size}`;
  });
data.nodes.forEach((node:any) => {
  node.donutColorMap = colors;
  node.size = 0;
  Object.keys(node.donutAttrs).forEach(key => {
    node.size += node.donutAttrs[key];
  })
  node.size = Math.sqrt(node.size) * 5
})
const legend = new G6.Legend({
  data: legendData,
  align: 'center',
  layout: 'horizontal', // vertical
  position: 'bottom-left',
  vertiSep: 12,
  horiSep: 24,
  offsetY: -24,
  padding: [4, 16, 8, 16],
  containerStyle: {
    fill: '#ccc',
    lineWidth: 1
  },
  title: ' ',
  titleConfig: {
    offsetY: -8,
  },
});


const init=()=>{
const width = container.value?.scrollWidth;
const height = container.value?.scrollHeight || 500;
const graph = new G6.Graph({
  container: 'container',
  width,
  height,
  // translate the graph to align the canvas's center, support by v3.5.1
  fitCenter: true,
  plugins: [legend],
  modes: {
    default: ['drag-canvas', 'drag-node'],
  },
  layout: {
    type: 'radial',
    focusNode: 'li',
    linkDistance: 200,
    unitRadius: 200
  },
  defaultEdge: {
    style: {
      endArrow: true
    },
    labelCfg: {
      autoRotate: true,
      style: {
        stroke: "#fff",
        lineWidth: 5
      }
    }
  },
  defaultNode: {
    type: 'donut',
    style: {
      lineWidth: 0,
    },
    labelCfg: {
      position: 'bottom',
    },
  },
});
graph.data(data);
graph.render();
graph.on('node:mouseenter', (evt) => {
  const { item } = evt;
  graph.setItemState(item, 'active', true);
});

graph.on('node:mouseleave', (evt) => {
  const { item } = evt;
  graph.setItemState(item, 'active', false);
});

graph.on('node:click', (evt) => {
  const { item } = evt;
  graph.setItemState(item, 'selected', true);
});
graph.on('canvas:click', (evt) => {
  graph.getNodes().forEach((node) => {
    graph.clearItemStates(node);
  });
});
}
onMounted(()=>{
    init()
})
</script>

<style scoped></style>
