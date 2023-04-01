/*
 * @Author: 聂成勇 niechengyong@esconsoft.com
 * @Date: 2023-03-23 19:29:56
 * @LastEditTime: 2023-04-02 01:13:53
 * @Description:
 */
const data = {
  nodes: [
    {
      id: 1,
      level: 0,
      name: '知识集',
      label: '知识集',
      cname: '知识集',
      x: 100,
      y: 100,
      nodetype: '知识集',
      weight: 20,
    },
    {
      id: 2,
      level: 2,
      name: '知识点',
      label: '知识点',
      cname: '知识点',
      x: 250,
      y: 100,
      nodetype: '知识点',
      weight: 20,
    },
    {
      id: 3,
      level: 2,
      name: '知识块',
      label: '知识块',
      cname: '知识块',
      x: 400,
      y: 100,
      nodetype: '知识块',
      weight: 20,
    },
    {
      id: 4,
      level: 2,
      name: '属性点',
      label: '属性点',
      cname: '属性点',
      x: 550,
      y: 100,
      nodetype: '属性点',
      weight: 20,
    },
    {
      id: 5,
      level: 2,
      name: '资源节点',
      label: '资源节点',
      cname: '资源节点',
      x: 700,
      y: 100,
      nodetype: '资源节点',
      filetype: '图片',
      weight: 20,
    },
  ],
  links: [
    { source: 1, target: 2, label: '具有', id: 1,weight:10 },
    { source: 2, target: 3, label: '其它', id: 2,weight:10 },
    { source: 3, target: 4, label: '学习', id: 3 ,weight:10},
    { source: 4, target: 5, label: '包含', id: 4,weight:10 },
  ],
};
const nodeMethods = [
  { name: 'SingleClick', state: true }, // 单击
  { name: 'DoubleClick', state: true }, // 双击
  { name: 'NodeDrag', state: true }, // 节点拖动
  { name: 'LineDrag', state: false }, // 连线拖动
  { name: 'FollowDrag', state: false }, // 节点子随父拖动而动
];
// 节点颜色
const nodeColor = [
  {
    name: '知识集',
    color1: '#FFA16E',
    color2: '#F48244',
    state: 'color',
  },
  {
    name: '知识块',
    color1: '#FB6E6F',
    color2: '#D13F3F',
    state: 'color',
  },
  {
    name: '知识点',
    color1: '#32E3C1',
    color2: '#21B598',
    state: 'color',
  },
  {
    name: '属性点',
    color1: '#7E7E7E',
    color2: '#666666',
    state: 'color',
  },
  {
    name: '资源节点',
    color1: '#F48244',
    color2: '#F48244',
    state: 'color',
  },
];
// 连线颜色
const linkColor = [
  { name: '具有', color: '#4A5150', id: 'arrow' },
  { name: '其它', color: '#16ACFF', id: 'arrowA' },
  { name: '学习', color: '#FC4040', id: 'arrowB' },
  { name: '包含', color: '#FBB613', id: 'arrowC' },
  { name: 'a11', color: '#202928', id: 'arrowD' },
];
// 环形菜单配置
const menuMethods = [
  {
    name: 'addNodeButtonsOne',
    data: 4, // 渲染4个
    datadefo: [
      {
        name: 'add',
        default: (d, _this, d3) => {
          console.log(_this.Graph, 3333);
          const out_buttongroup_id = '.out_buttongroup_' + d.id;
          _this.d3.selectAll('.buttongroup').classed('circle_none', true);
          d3.selectAll(out_buttongroup_id).classed('circle_none', false);
          _this.menuMethods
          .filter((res) => {
            if (res.name === 'addNodeButtonsTWO') {
              for (let i = res.label.length - 1; i >= 0; i--) {
                d3.selectAll('.' + res.id + i).style('display', 'block');
              }
            }
          });
        },
      },
      {
        name: 'delete',
        default: (d, _this, d3) => {
          if (d.label === 'NodeRoot') {
            window.$message.warning('创世节点无法删除');
          } else {
            //   delNode({ Neo4jNodeId: d.id }).then((res) => {
            //     if (res.result === 'ok') {
            //       _this.graph.nodes.filter((item, i) => {
            //         if (item.id === d.id) {
            //           _this.graph.nodes.splice(i, 1)
            //           _this.updateGraph()
            //         }
            //       })
            //       this.$message.success('节点删除成功')
            //     } else {
            //       console.log(res)
            //       this.$message.error('目标节点有关系无法删除')
            //     }
            //   })
          }
        },
      },
      {
        // 克隆
        name: 'MORE',
        default: (d, _this, d3) => {
          // cloneNewNode({ startNeo4jNodeId: d.id }).then((item) => {
          //   if (item.result === 'ok') {
          //     // eslint-disable-next-line no-eval
          //     item.data = eval('(' + item.data + ')')
          //     const a = item.data.nodes[0]
          //     a.x = d.x + 50
          //     a.y = d.y + 50
          //     a.fx = d.fx + 50
          //     a.fy = d.y + 50
          //     _this.graph.nodes.push(a)
          //     // this.NEWdata
          //     _this.updateGraph()
          //   } else {
          //     this.$message.error('克隆失败 :' + item.executionTime)
          //   }
          // })
        },
      },
      // 编辑
      {
        name: 'edtor',
        default: (d, _this, d3) => {
          // this.Visible = true
          // this.$nextTick(() => {
          //   this.$refs.advanRetrieval.editInit(d.id)
          // })
        },
      },
    ],
    label: [
      { name: '新建', state: 'text' },
      { name: '删除', state: 'text' },
      { name: '克隆', state: 'text' },
      { name: '编辑', state: 'text' },
    ],
    id: 'action_',
    r: 25,
    default: function () {},
  },
  {
    name: 'addNodeButtonsTWO',
    data: 16, // 此处需要优化，时间暂短，暂时这样处理
    datadefo: [
      {
        name: 'spot',
        default: (d, _this, d3) => {
          // newNode({ nodeType: '知识点', startNeo4jNodeId: d.id }).then(
          //   (res) => {
          //     // eslint-disable-next-line no-eval
          //     res = eval('(' + res.data + ')')
          //     res.newNode[0].x = d.x + 50
          //     res.newNode[0].y = d.y + 50
          //     res.newNode[0].nodetype = '知识点'
          //     _this.graph.nodes.push(res.newNode[0])
          //     _this.graph.links.push(res.edges[0])
          //     _this.updateGraph()
          //   }
          // )
        },
      },
      {
        name: 'block',
        default: (d, _this, d3) => {
          // newNode({ nodeType: '知识块', startNeo4jNodeId: d.id }).then(
          //   (res) => {
          //     // eslint-disable-next-line no-eval
          //     res = eval('(' + res.data + ')')
          //     res.newNode[0].x = d.x + 50
          //     res.newNode[0].y = d.y + 50
          //     res.newNode[0].nodetype = '知识块'
          //     _this.graph.nodes.push(res.newNode[0])
          //     _this.graph.links.push(res.edges[0])
          //     _this.updateGraph()
          //   }
          // )
        },
      },
      {
        name: 'collection',
        default: (d, _this, d3) => {
          // newNode({ nodeType: '知识集', startNeo4jNodeId: d.id }).then(
          //   (res) => {
          //     // eslint-disable-next-line no-eval
          //     res = eval('(' + res.data + ')')
          //     res.newNode[0].x = d.x + 50
          //     res.newNode[0].y = d.y + 50
          //     res.newNode[0].nodetype = '知识集'
          //     _this.graph.nodes.push(res.newNode[0])
          //     _this.graph.links.push(res.edges[0])
          //     _this.updateGraph()
          //   }
          // )
        },
      },
      {
        name: 'genus',
        default: (d, _this, d3) => {
          // newNode({ nodeType: '属性点', startNeo4jNodeId: d.id }).then(
          //   (res) => {
          //     // eslint-disable-next-line no-eval
          //     res = eval('(' + res.data + ')')
          //     res.newNode[0].x = d.x + 50
          //     res.newNode[0].y = d.y + 50
          //     res.newNode[0].nodetype = '属性点'
          //     _this.graph.nodes.push(res.newNode[0])
          //     _this.graph.links.push(res.edges[0])
          //     _this.updateGraph()
          //   }
          // )
        },
      },
    ],
    label: [
      { name: '点', state: 'text' },
      { name: '块', state: 'text' },
      { name: '集', state: 'text' },
      { name: '属', state: 'text' },
    ],
    id: 'actionA_',
    r: 55,
    default: function () {},
  },
  {
    name: 'addNodeButtonsOld',
    data: 2,
    datadefo: [
      {
        name: 'addLink',
        default: (d, _this, d3) => {
          const arr: any = [];
          // let name = ''
          _this.data.links.filter((lin: any) => {
            if (lin.source === d.id || lin.target === d.id) {
              if (lin.source === _this.clone.id || lin.target === _this.clone.id) {
                arr.push(lin.label);
              }
            }
          });
          // this.$prompt('请输入连线名字', {
          //   confirmButtonText: '确定',
          //   cancelButtonText: '取消',
          //   inputValidator: (res) => {
          //     if (arr.includes(res)) {
          //       return '连线不能重名'
          //     } else if (arr.includes('包含') && res == null) {
          //       return '不能重复新建默认连线名'
          //     } else {
          //       name = res
          //     }
          //   }
          // })
          //   .then(({ value }) => {
          //     newNodeRalte({
          //       relateLabel: name,
          //       startNeo4jNodeId: d.id,
          //       endNeo4jNodeId: _this.clone.id
          //     }).then((res) => {
          //       if (res.result === 'ok') {
          //         // eslint-disable-next-line no-eval
          //         res.data = eval('(' + res.data + ')')
          //         const a = res.data.edges[0]
          //         _this.graph.links.push(a)
          //         _this.updateGraph()
          //         window.$message.success(
          //          '新建连线成功'
          //         )
          //       }
          //     })
          //   })
          //   .catch(() => {
          //     window.$message.info(
          //      '取消输入'
          //     )
          //   })
        },
      },
      {
        name: 'clone',
        default: (d, _this) => {
          _this.graph.nodes.filter((item) => {
            if (item.id === d.id) {
              // cloneNodePropertys({
              //   startNeo4jNodeId: _this.clone.id,
              //   endNeo4jNodeId: item.id
              // }).then((res) => {
              //   if (res.result === 'ok') {
              //     item.nodetype = _this.clone.nodetype
              //     _this.updateGraph()
              //   } else {
              //     this.$message.error('克隆失败', res.message)
              //   }
              // })
            }
          });
        },
      },
    ],
    label: [
      {
        name: '新建关系',
        state: 'text',
      },
      {
        name: '克隆属性',
        state: 'text',
      },
    ],
    id: 'actionB_',
    r: 25,
    default: function () {},
  },
  {
    name: 'addNodeButtonsNEW',
    data: 3, // 渲染环形菜单数量
    datadefo: [
      {
        // 显示相关节点和连线
        name: 'SeeList',
        default: (d, _this, d3) => {
          sortView(_this.graph.nodes, _this.graph.links, d);
          function sortView(arr, link, d) {
            const a: any = [];
            let id = '';
            const ArrY = link.filter((item) => {
              if (item.source === d.id || item.target === d.id) {
                d3.selectAll('.Links_' + item.id).style('display', 'block');
                d3.selectAll('.TextLink_' + item.id).style('display', 'block');
                return item;
              }
            });
            ArrY.filter((item) => {
              arr.filter((res) => {
                if (item.source === res.id || item.target === res.id) {
                  const name = d3.selectAll('.circle_' + res.id).style('display');
                  if (name === 'inline' || name === 'block') {
                    a.push(true);
                  } else {
                    d3.selectAll('.circle_' + res.id).style('display', 'block');
                    a.push(false);
                    id = res;
                  }
                }
              });
            });
            a.some((i) => {
              if (i === false) {
                sortView(arr, link, id);
              }
            });
          }
        },
      }, // //标签文字
      {
        name: 'Share',
        default: () => {
          // this.Nodellabelist = d
          // this.Visiblelabel = true
          // this.$nextTick(() => {
          //   this.$refs.nodeTagSearchlabel.getNodeDefault(d)
          // })
        },
      },
      // 隐藏相关节点和连线
      {
        name: 'SeeName',
        default: (d, _this, d3) => {
          _this.graph.links.filter((item, i) => {
            if (item.source === d.id || item.target === d.id) {
              d3.selectAll('.Links_' + item.id).style('display', 'none');
              d3.selectAll('.TextLink_' + item.id).style('display', 'none');
            }
          });
          _this.graph.nodes.filter((res, i) => {
            if (res.id === d.id) {
              d3.selectAll('.circle_' + res.id).style('display', 'none');
            }
          });
        },
      },
    ],
    label: [
      {
        name: 'https://api.iconify.design/iconoir:copy.svg',
        state: 'url',
      },
      {
        name: (d) => {
          return d.label;
        },
        state: 'Dtext',
      },
      {
        name: 'https://api.iconify.design/iconoir:color-picker-empty.svg',
        state: 'url',
      },
    ],
    id: 'actionC_',
    r: 25,
    default: function () {},
  },
];
export { data, nodeMethods, nodeColor, linkColor, menuMethods };
