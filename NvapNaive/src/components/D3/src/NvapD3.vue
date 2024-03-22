<!--
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-03-22 20:06:24
 * @LastEditTime: 2023-08-09 17:51:58
 * @Description: 
-->
<template>
  <n-space v-if="loading" w-full h-full items-center>
    <n-spin size="large" />
  </n-space>
  <div v-else :style="{ width: prop.width + 'px', height: prop.height + 'px' }">
    <div w-full h-full ref="NvapD3" class="NvapD3" @click="clickCanvas"></div>
    <Links ref="Links" :top="top" :left="left" :show="show" :click="click" />
  </div>
</template>
<script setup lang="ts">
import { D3model } from '@/enums/d3model';
import {
    zoom,
    handlesimulation,
    addMaker,
    addNodeButton,
    handleWinding,
    DrawLink,
    drawLinkText,
    drawNodeButton,
    drawNode,
    drawNodeText,
    drawNodeSymbol,
    linkArc,
  } from './hooks/svgModel'
  import {
    canvasDrawNode,
    canvasDrawLink
  } from './hooks/canvasModel';
  import { props } from './props';
  import * as d3 from 'd3';
  import _ from 'lodash';
  const emit = defineEmits(['LinkDrag', 'ClickLink']);
  //@ts-ignore
  const { proxy } = getCurrentInstance();
  const prop = defineProps<props>();
  const NvapD3 = ref<HTMLElement>();
  const Links = ref<HTMLElement>();
  const stateLink = reactive({
    top: 0 + 'px',
    left: 0 + 'px',
    show: false,
    click: false,
  });
  const { top, left, show, click } = toRefs(stateLink);
  //点击画布
  const clickCanvas = (event) => {
    if (event.target.tagName !== 'textPath') {
      stateLink.show = false;
    }
  };
  const Graph = ref(); //画布对象
  const simulation = ref(); //力导向图对象
  const linkGroup = ref(); //连线组
  const linkTextGroup = ref(); //连线文字组
  const nodeGroup = ref(); //节点组
  const nodeTextGroup = ref(); //节点文字组
  const nodeSymbolGroup = ref(); //节点图标组
  const nodeButtonGroup = ref(); //节点按钮组
  //////
  const loading = ref(false); //加载状态
  const editLinkState = ref(false); //编辑连线状态
  const editLink: any = ref(null); //编辑连线对象
  const updateLink: any = ref(null); //更新连线对象
  const selectNode: any = ref(null); //选中节点
  const clickedOnce = ref(false); //点击一次
  const timers = ref(null); //定时器
  const scale: any = ref(null); //缩放配置
  const nodeButtonAction = ref(null); //按钮名称
  ////
  // 初始化画布
  const initGraph = () => {
    //清空画布
    d3.select('.NvapD3').selectAll('*').remove();
    //根据画布类型创建画布
    if (prop.model === D3model.svg) {
    Graph.value = d3.select(NvapD3.value).append('svg');
    //设置画布大小
    Graph.value.attr('width', prop.width).attr('height', prop.height);
    //设置力导向图
    simulation.value = handlesimulation(prop,d3);
    linkGroup.value = Graph.value.append('g').attr('class', 'link'); //设置连线组
    linkTextGroup.value = Graph.value.append('g').attr('class', 'linkText'); //设置连线文字组
    nodeGroup.value = Graph.value.append('g').attr('class', 'node'); //设置节点组
    nodeTextGroup.value = Graph.value.append('g').attr('class', 'nodeText'); //设置节点文字组
    nodeSymbolGroup.value = Graph.value.append('g').attr('class', 'nodeSymbol'); //设置节点图标组
    nodeButtonGroup.value = Graph.value.append('g').attr('class', 'nodeButton'); //设置节点按钮组
    addMaker(prop, Graph.value); //添加箭头
    Graph.value.on(
      'click',
      () => {
        d3.selectAll('.buttongroup').classed('circle_none', true);
      },
      'false'
    );
    //设置力导向图
    simulation.value.alphaTarget(0.1).restart();
    } else {
      const scale = window.devicePixelRatio;
      console.log(scale);
      Graph.value = d3.select(NvapD3.value)
      .append('canvas')
      .attr('id','canvas')
      .attr('width',prop.width)
      .attr('height',prop.height)
      const context = Graph.value.node().getContext('2d');
      // //根据props.data绘制圆和连线
      const { links, nodes } = prop.data;
      const {nodeColor,linkColor} = prop;
      context.width=context.width*scale;
      context.height=context.height*scale;
      context.imageSmoothingEnabled = true;
      context.scale(scale,scale)
      canvasDrawLink(context, links, nodes,linkColor);
      canvasDrawNode(context, nodes,nodeColor);
    }
  };

  //更新SVG画布
  const updateSvgGraph = () => {
    //清除之前绘制NvapD3中svg元素下面的所有元素
    console.log( d3.select('.NvapD3').select('svg'),1111);
    const { links, nodes } = prop.data;
    const link: any = [];
    //传过来的节点坐标，需要转换
    nodes.filter((n) => {
      n.fx = n.x;
      n.fy = n.y;
    });
    links.filter((m) => {
      const sourceNode = nodes.filter((n) => {
        return n.id === m.source;
      })[0];
      if (typeof sourceNode === 'undefined') return;
      const targetNode = nodes.filter((n) => {
        return n.id === m.target;
      })[0];
      if (typeof targetNode === 'undefined') return;
      link.push({ source: sourceNode.id, target: targetNode.id, lk: m });
    });
    //为每一个节点定制按钮组
    addNodeButton(prop, Graph.value,d3);
    if (link.length > 0) {
      handleWinding(_, link);
    } //处理连线的弯曲
    //更新连线
    d3.selectAll('.line >path').remove(); // 删除连线数据
    let newLink = linkGroup.value.selectAll('.line >path').data(link); // 更新连线 links
    newLink.exit().remove();
    const linkEnter = DrawLink(
      newLink,
      prop,
      editLinkState.value,
      editLink.value,
      stateLink,
      LinkDragStarted,
      LinkDragged,
      LinkDragEnded,
      d3
    );
    newLink = linkEnter.merge(newLink);
    //更新联系文字
    d3.selectAll('.lineText >g').remove(); // 删除连线文字
    const linktext = linkTextGroup.value.selectAll('g').data(link); // 更新连线文字
    linktext.exit().remove(); // 删除连线文字数据
    drawLinkText(linktext, emit); //重新绘制连线文字
    //更新按钮组
    d3.selectAll('.nodeButton >g').remove(); // 删除按钮组
    let nodeButton = nodeButtonGroup.value.selectAll('.nodeButton').data(nodes, function (d) {
      return d;
    });
    nodeButton.exit().remove(); // 删除按钮组数据
    const nodeButtonEnter = drawNodeButton(nodeButton); // 重新绘制按钮组
    nodeButton = nodeButtonEnter.merge(nodeButton);
    //更新节点
    nodeGroup.value.selectAll('.node >g').remove();
    let node = nodeGroup.value.selectAll('.node >g').data(nodes);
    node.exit().remove();
    const nodeEnter = drawNode(
      node,
      prop,
      Graph.value,
      selectNode.value,
      clickedOnce.value,
      timers.value,
      ClickNode,
      simulation.value,d3
    );
    node = nodeEnter.merge(node);
    // 更新节点文字
    let nodeText = nodeTextGroup.value.selectAll('text').data(nodes, function (d) {
      return d.id;
    });
    nodeText.exit().remove();
    const nodeTextEnter = drawNodeText(
      nodeText,
      prop,
      Graph.value,
      selectNode.value,
      clickedOnce.value,
      timers.value,
      ClickNode,
      simulation.value,
      d3
    );
    nodeText = nodeTextEnter.merge(nodeText);
    nodeText.append('title').text(function (d) {
      return d.cname;
    }); // 为每个节点设置title
    // 更新节点标识
    let nodeSymbol = nodeSymbolGroup.value.selectAll('path').data(nodes, function (d) {
      return d.id;
    });
    nodeSymbol.exit().remove();
    const nodeSymbolEnter = drawNodeSymbol(nodeSymbol);
    nodeSymbol = nodeSymbolEnter.merge(nodeSymbol);
    nodeSymbol.attr('fill', (d) => {
      let color = '#25BC9E';
      prop.nodeColor.filter((item) => {
        if (item.name === d.nodetype) {
          color = item.color;
        }
      });
      return color;
    });
    nodeSymbol.attr('display', function (d) {
      if (typeof d.hasFile !== 'undefined' && d.hasFile > 0) {
        return 'block';
      }
      return 'none';
    });
    const linkTextList = linkTextGroup.value.selectAll('.lineText >g');
    const linkText = linkTextGroup.value.selectAll('g >text');
    // 监听布局，更新
    function ticked() {
      newLink.attr('d', linkArc);
      // 更新节点坐标
      node
        .attr('cx', function (d) {
          return d.x;
        })
        .attr('cy', function (d) {
          return d.y;
        });
      // 更新节点操作按钮组坐标
      nodeButton
        .attr('cx', function (d) {
          return d.x;
        })
        .attr('cy', function (d) {
          return d.y;
        });
      nodeButton.attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ') scale(1)';
      });
      // 更新文字坐标
      nodeText
        .attr('x', function (d) {
          return d.x;
        })
        .attr('y', function (d) {
          return d.y;
        });
      // 更新回形针坐标
      nodeSymbol.attr('transform', function (d) {
        return 'translate(' + (d.x + 8) + ',' + (d.y - 30) + ') scale(1)';
      });
      linkText.attr('dy', 5);
      linkTextList.attr('transform', function (d) {
        if (d.target.x < d.source.x) {
          //@ts-ignore
          const bbox = this.getBBox();
          const rx = bbox.x + bbox.width / 2;
          const ry = bbox.y + bbox.height / 2;
          return 'rotate(180 ' + rx + ' ' + ry + ')';
        }
      });
    }
    simulation.value.nodes(nodes).on('tick', ticked);
    simulation.value.force('link').links(links);
    simulation.value.alphaTarget(1).restart();
    // if (scale.value == null) {
    //   const node = prop.data.nodes.filter((res) => res.level === 0);
    //   // 将图形平移到屏幕中心并且缩放倍数为0.7
    //   scale.value = 0.7;
    //   Graph.value.call(
    //     zoom.transform,
    //     d3.zoomIdentity
    //       .translate(
    //         prop.width / 2 - node[0].x * scale.value,
    //         prop.height / 2 - node[0].y * scale.value
    //       )
    //       .scale(scale.value)
    //   );
    // }
    // 添加滚轮缩放
    Graph.value.call(zoom(d3));
    Graph.value.on('dblclick.zoom', null); // 静止双击缩放
    Graph.value.selectAll('.buttongroup').on('click', function (d) {
      if (nodeButtonAction.value) {
        prop.menuMethods.forEach((item) => {
          item.datadefo.filter((res) => {
            if (res.name === nodeButtonAction.value) {
              res.default(d, proxy, d3);
            }
          });
        });
      }
    });
    // 按钮组事件绑定
    prop.menuMethods.forEach((item) => {
      item.datadefo.forEach((res, i) => {
        const id = '.' + (item.id + i);
        Graph.value.selectAll(id).on('click', function () {
          if (res.name !== null) {
            nodeButtonAction.value = res.name;
          }
        });
      });
    });
  };
  //更新canvas画布
  const updateCanvasGraph=()=>{

  }
onMounted(() => {
    initGraph();
    inject('dThree', d3);
    inject('theKey', proxy);
});
  //监听数据变化
  watch(
    () => prop.data,
    (value,oldvalue) => {
      if (!value)return;
      if(oldvalue)return;
        loading.value = true;
        scale.value = null;
        if(prop.model===D3model.canvas){
          updateCanvasGraph();
          loading.value=false
          } else{
          nextTick(() => {
          updateSvgGraph();
          });
          loading.value = false;
          }
      
    },{
      immediate: true,
    }
  );
  //拖拽连线开始
  const LinkDragStarted = (event,d) => {
    if (!event.active) simulation.value.alphaTarget(0.3).restart();
    const newNode = {
      id: d.lk.target + 100000,
      nodetype: '新节点',
      x: event.x + 8,
      y: event.y + 8,
      fx: event.x,
      fy: event.y,
    };
    // eslint-disable-next-line vue/no-mutating-props
    prop.data.nodes.splice(0, 0, newNode);
    updateSvgGraph();
    d3.select('.circle_' + d.lk.target + 100000).attr('r', 5);
  };
  //拖拽连线中
  const LinkDragged = (event,d) => {
    if (!event.active) simulation.value.alphaTarget(0.3);
    prop.data.nodes.filter((n) => {
      if (n.id === d.lk.target + 100000) {
        n.x = event.x + 8;
        n.y = event.y + 8;
        n.fx = event.x + 8;
        n.fy = event.y + 8;
      }
    });
  };
  //点击节点
  const ClickNode = (d: any) => {
    selectNode.value = d.target.__data__;
    prop.data.nodes.filter((item) => {
      if (item.id === selectNode.value.id) {
        d3.selectAll('.circle_' + selectNode.value.id)
          .style('stroke-width', '6')
          .style('stroke', '#1890ff')
          .style('');
      } else {
        d3.selectAll('.circle_' + item.id)
          .style('stroke-width', '0')
          .style('stroke', '#1890ff');
      }
    });
    inject('clickNode', selectNode.value);
  };
  //拖拽连线结束
  const LinkDragEnded = (d) => {
    if (!d3.event.active) simulation.value.alphaTarget(0.3);
    prop.nodeMethods.filter((n) => {
      if (n.name === 'LineDrag' && n.state) {
        if (editLinkState.value) {
          if (editLink.value.lk.id !== d.lk.id) {
            updateLink.value = d;
            emit('LinkDrag', this);
          }
        }
      }
    });
    // eslint-disable-next-line vue/no-mutating-props
    prop.data.nodes.splice(0, 1);
    updateSvgGraph();
  };
</script>

<style lang="scss">
.NvapD3{
  text {
    cursor: pointer;
    max-width: 30px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
  }
  circle {
    cursor: pointer;
  }
  .circle_none {
    display: none;
  }
  .nodetext {
    font-size: 12px;
    font-family: SimSun;
    fill: #000000;
  }
  .sase {
    background: #ffffff;
  }
}

  
</style>
