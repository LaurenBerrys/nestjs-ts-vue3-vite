//配置缩放
const zoom = (d3)=>  {
 return d3
    .zoom()
    .scaleExtent([-10, 10])
    .on('zoom', function () {
    //@ts-expect-error
    d3.selectAll('.node').attr('transform', d3.zoomTransform(this));
    //@ts-expect-error
    d3.selectAll('.nodeText').attr('transform', d3.zoomTransform(this));
    //@ts-expect-error
    d3.selectAll('.link').attr('transform', d3.zoomTransform(this));
    //@ts-expect-error
    d3.selectAll('.linkText').attr('transform', d3.zoomTransform(this));
    //@ts-expect-error
    d3.selectAll('.nodeSymbol').attr('transform', d3.zoomTransform(this));
    //@ts-expect-error
    d3.selectAll('.nodeButton').attr('transform', d3.zoomTransform(this));
  });
}
//设置力导向图
const handlesimulation = (prop,d3) => {
  return d3
    .forceSimulation()
    .force(
      'link',
      d3
        .forceLink()
        .distance(function () {
          return 30;
          // return Math.floor(Math.random() * (700 - 200)) ;
        })
        .id(function (d) {
          return d.id;
        })
    )
    .force('charge', d3.forceManyBody().strength(-400))
    .force('collide', d3.forceCollide())
    .force('center', d3.forceCenter(prop.width / 2, prop.height / 2));
};
// 添加箭头
const addMaker = (prop, Graph) => {
  const arrow_path = 'M0,-5L10,0L0,5'; // 定义箭头形状
  for (let index = 0; index <= 10; index++) {
    prop.linkColor.forEach((item) => {
      Graph.append('marker')
        .attr('id', 'markers' + item.id + index)
        .attr('markerUnits', 'userSpaceOnUse')
        .attr('markerWidth', '12') //
        .attr('markerHeight', '12')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', '30') // 13
        .attr('refY', '0')
        .attr('orient', 'auto')
        .append('path')
        .attr('d', arrow_path)
        .attr('fill', item.color);
    });
  }
};
//添加节点按钮
const addNodeButton = (prop, Graph,d3) => {
  // 先删除所有为节点自定义的按钮组
  d3.selectAll('svg >defs').remove();
  const nodes = prop.data.nodes;
  const nodeButton = Graph.append('defs');
  nodes.forEach(function (m) {
    const nBtng = nodeButton.append('g').attr('id', 'out_circle' + m.id);
    prop.menuMethods.forEach((item) => {
      const a: any = [];
      for (let index = 0; index < item.data; index++) {
        a.push(1);
      }
      const pise = d3.pie();
      const pisedata = pise(a);
      const buttonEnter = nBtng
        .selectAll('.buttongroup')
        .data(pisedata)
        .enter()
        .append('g')
        .attr('cursor', 'pointer')
        .attr('class', function (d, i) {
          d.circle = item;
          const id = item.id + i;
          return id;
        });
      const arc = d3
        .arc()
        .innerRadius(item.r)
        .outerRadius(item.r + 30);
      buttonEnter
        .append('path')
        .attr('d', function (d) {
          return arc(d);
        })
        .attr('id', function (d, i) {
          return 'pathNmae' + m.id + 'sug' + i;
        })
        .attr('fill', '#CCE4F7')
        .style('opacity', 1)
        .attr('stroke', '#ffffff')
        .attr('stroke-width', 2);
      buttonEnter
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', (d, i) => {
          if (item.name === 'addNodeButtonsOld') {
            buttonEnter.attr('transform', 'rotate(90)');
            if (i === 0) {
              const a = arc.centroid(d);
              a[0] = 38;
              return 'translate(' + a + ') rotate(270)';
            } else {
              const a = arc.centroid(d);
              a[0] = -34;
              return 'translate(' + a + ') rotate(270)';
            }
          } else if (item.name === 'addNodeButtonsOne') {
            // d3.select(this).attr('startOffset', '20%')
            switch (i) {
              case 0:
                return 'translate(' + arc.centroid(d) + ')  rotate(45)';
              case 1:
                return 'translate(' + arc.centroid(d) + ')  rotate(-45)';
              case 2:
                return 'translate(' + arc.centroid(d) + ')  rotate(50)';
              case 3:
                return 'translate(' + arc.centroid(d) + ')  rotate(-45)';
            }
          } else if (item.name === 'addNodeButtonsNEW') {
            if (i === 1) {
              //@ts-ignore
              d3.select(this)
                .append('textPath')
                .attr('xlink:href', '#pathNmae' + m.id + 'sug' + i)
                .attr('startOffset', '0');
              return 'translate(' + arc.centroid(d) + ')';
            }
          } else {
            return 'translate(' + arc.centroid(d) + ')';
          }
        })
        .text(function (d, i) {
          if (d.circle.label[i]) {
            if (d.circle.label[i].state === 'url') {
              //@ts-ignore
              d3.select(this).remove();
            } else if (d.circle.label[i].state === 'Dtext') {
              let name = d.circle.label[i].name(m);
              if (name !== undefined) {
                name = name.split(',');
                name = name.length > 3 ? name.slice(0, 3).join(',') : name.join(',');
                return name;
              } else {
                return '';
              }
            } else {
              return d.circle.label[i].name;
            }
          }
        })

        .attr('font-size', 10);
      buttonEnter
        .append('circle')
        .attr('r', 10)
        .attr('transform', function (d) {
          return 'translate(' + arc.centroid(d) + ')';
        })
        .attr('fill', function (d, i) {
          d3.selectAll('.' + item.id + i).style('display', 'none');
          if (d.circle.label[i]) {
            if (d.circle.label[i].state === 'url') {
              const defs = Graph.append('defs').attr('id', 'imgdefsq');
              const catpattern = defs
                .append('pattern')
                .attr('id', 'cbuttonEnter' + i)
                .attr('height', 1)
                .attr('width', 1);
              catpattern
                .append('image')
                .attr('width', 20)
                .attr('height', 20)
                .attr('xlink:href', d.circle.label[i].name);
              return 'url(#cbuttonEnter' + i + ')';
            } else {
              //@ts-ignore
              d3.select(this).remove();
            }
          } else {
            //@ts-ignore
            d3.select(this).remove();
          }
        });
    });
  });
};
//连线超过3个进行弯曲
const handleWinding = (_, links) => {
  _.each(links, function (link) {
    const same = _.filter(links, {
      source: link.source,
      target: link.target,
    });
    const sameAlt = _.filter(links, {
      source: link.target,
      target: link.source,
    });
    const sameAll = same.concat(sameAlt);
    _.each(sameAll, function (s, i) {
      s.sameIndex = i + 1;
      s.sameTotal = sameAll.length;
      s.sameTotalHalf = s.sameTotal / 2;
      s.sameUneven = s.sameTotal % 2 !== 0;
      s.sameMiddleLink = s.sameUneven === true && Math.ceil(s.sameTotalHalf) === s.sameIndex;
      s.sameLowerHalf = s.sameIndex <= s.sameTotalHalf;
      s.sameArcDirection = s.sameLowerHalf ? 0 : 1;
      s.sameIndexCorrected = s.sameLowerHalf
        ? s.sameIndex
        : s.sameIndex - Math.ceil(s.sameTotalHalf);
    });
  });
  const maxSame = _.chain(links)
    .sortBy(function (x) {
      return x.sameTotal;
    })
    .last()
    .value().sameTotal;

  _.each(links, function (link) {
    link.maxSameHalf = Math.round(maxSame / 2);
  });
};
/**
 * @description: 绘制连线
 * @param {*} link 连线数据
 * @param {*} prop 配置
 * @param {*} editLinkState 是否编辑连线
 * @param {*} editLink 编辑连线数据
 * @param {*} stateLink  连线状态
 * @param {*} LinkDragStarted 连线拖拽开始
 * @param {*} LinkDragged 连线拖拽中
 * @param {*} LinkDragEnded 连线拖拽结束
 * @return {linkEnter}  连线
 */
const DrawLink = (
  link,
  prop,
  editLinkState,
  editLink,
  stateLink,
  LinkDragStarted,
  LinkDragged,
  LinkDragEnded,
  d3
) => {
  const linkEnter = link
    .enter()
    .append('path')
    .attr('pointer-events', 'all')
    .attr('stroke-width', function (d) {
      if (d.lk.weight) {
        return parseInt(d.lk.weight) / 10 + 1.5;
      } else {
        return 1.5;
      }
    })
    .attr('stroke', function (d) {
      let color = '#FBB613';
      prop.linkColor.filter((item) => {
        if (d.lk.label === item.name) color = item.color;
      });
      return color;
    })
    .attr('id', function (d) {
      return 'invis_' + d.lk.id;
    })
    .attr('class', (d) => {
      return 'Links_' + d.lk.id;
    })
    .attr('fill', 'none')
    // 箭头
    .attr('marker-end', function (d) {
      if (d.lk.weight) {
        const a = parseInt(d.lk.weight) / 10;
        let marker = 'url(#markersarrowC' + a + ')';
        prop.linkColor.filter((item) => {
          if (d.lk.label === item.name) {
            d3.selectAll('#markers' + item.id + a)
              .attr('markerWidth', () => {
                return 12 + a * 1.5;
              })
              .attr('markerHeight', () => {
                return 12 + a * 1.5;
              })
              .attr('refX', () => {
                return 30 - a * 1.5;
              });
            marker = 'url(#markers' + item.id + a + ')';
          }
        });
        d3.selectAll('#markersarrowC' + a)
          .attr('markerWidth', () => {
            return 12 + a * 1.5;
          })
          .attr('markerHeight', () => {
            return 12 + a * 1.5;
          })
          .attr('refX', () => {
            return 30 - a * 1.5;
          });
        return marker;
      } else {
        let marker = 'url(#markersarrowC0)';
        prop.linkColor.filter((item) => {
          if (d.lk.label === item.name) marker = 'url(#markers' + item.id + 0 + ')';
          else;
        });
        return marker;
      }
    });
  linkEnter.on('click', function () {
    // 点击连线
    const e: any = window.event;
    (stateLink.left = e.screenX + 180),
      (stateLink.top = e.screenY - 100),
      (stateLink.show = true),
      (stateLink.clike = true);
  });
  linkEnter.on('mouseenter', (event,d) => {
    editLinkState = true;
    editLink = d;
    d3.select('.Links_' + d.lk.id)
      .style('stroke-width', '10')
      .attr('stroke', '#e4e2e2')
      .attr('marker-end', '');
  });
  // 连线鼠标离开
  linkEnter.on('mouseleave', (event,d) => {
    editLinkState = false;
    d3.select('.Links_' + d.lk.id)
      .style('stroke-width', function (d) {
        if (d.lk.weight) {
          return parseInt(d.lk.weight) / 10 + 1.5;
        } else {
          return 1.5;
        }
      })
      .attr('stroke', (d) => {
        let color = '#FBB613';
        prop.linkColor.filter((item) => {
          if (d.lk.label === item.name) color = item.color;
          else;
        });
        return color;
      })
      .attr('marker-end', (d) => {
        if (d.lk.weight) {
          const a = parseInt(d.lk.weight) / 10;
          let marker = 'url(#markersarrowC' + a + ')';
          prop.linkColor.filter((item) => {
            if (d.lk.label === item.name) {
              d3.selectAll('#markers' + item.id + a)
                .attr('markerWidth', () => {
                  return 12 + a * 1.5;
                })
                .attr('markerHeight', () => {
                  return 12 + a * 1.5;
                })
                .attr('refX', () => {
                  return 30 - a * 1.5;
                });
              marker = 'url(#markers' + item.id + a + ')';
            }
          });
          d3.selectAll('#markersarrowC' + a)
            .attr('markerWidth', () => {
              return 12 + a * 1.5;
            })
            .attr('markerHeight', () => {
              return 12 + a * 1.5;
            })
            .attr('refX', () => {
              return 30 - a * 1.5;
            });
          return marker;
        } else {
          let marker = 'url(#markersarrowC0)';
          prop.linkColor.filter((item) => {
            if (d.lk.label === item.name) marker = 'url(#markers' + item.id + 0 + ')';
            else;
          });
          return marker;
        }
      });
  });
  prop.nodeMethods.filter((n) => {
    if (n.name === 'LineDrag' && n.state) {
      linkEnter.call(
        d3.drag().on('start', LinkDragStarted).on('drag', LinkDragged).on('end', LinkDragEnded)
      );
    }
  });
  return linkEnter;
};
// 构建连线上的文字，并绑定事件
const drawLinkText = (links, emits) => {
  const linkTextEnter = links
    .enter()
    .append('g')
    .attr('class', function (d) {
      return 'TextLink_' + d.lk.id;
    });
  linkTextEnter
    .append('text')
    .append('textPath')
    .attr('filter', 'url(#Linktext)')
    .attr('startOffset', '50%')
    .attr('text-anchor', 'middle')
    .attr('xlink:href', function (d) {
      return '#invis_' + d.lk.id;
    })
    .style('font-family', 'SimSun')
    .style('fill', '#434343')
    .style('stroke', '#434343')
    .style('font-size', 13)
    .text(function (d) {
      if (d.lk.label !== '') {
        return d.lk.label;
      }
    });
  linkTextEnter.on('click', function (d) {
    emits('ClickLink', d);
  });
  const linkTextSS = linkTextEnter.insert('filter', 'text');
  const linkTextSQ = linkTextSS.attr('id', 'Linktext').attr('height', '110%').attr('width', '110%');
  linkTextSQ.append('feFlood').attr('flood-color', '#ffffff').attr('flood-opacity', 1);
  linkTextSQ.append('feComposite').attr('in', 'SourceGraphic').attr('in2', 'floodFill');
  return linkTextSQ;
};

const drawNodeButton = (nodeButton) => {
  const nodeButtonEnter = nodeButton
    .enter()
    .append('g')
    .append('use') //  为每个节点组添加一个 use 子元素
    .attr('r', function (d) {
      return d.r;
    })
    .attr('xlink:href', function (d) {
      return '#out_circle' + d.id;
    })
    //  指定 use 引用的内容
    .attr('class', function (d) {
      return 'buttongroup out_buttongroup_' + d.id;
    })
    .classed('circle_none', true);

  return nodeButtonEnter;
};
/**
 * @description: 绘制节点
 * @param {*} node 节点数据
 * @param {*} prop 穿参
 * @param {*} Graph 画布
 * @param {*} selectNode 选中节点
 * @param {*} clickedOnce 点击
 * @param {*} timers 定时器
 * @param {*} ClickNode 点击节点事件function
 * @param {*} simulation 力导向图
 * @return {*} 返回节点
 */
const drawNode = (node, prop, Graph, selectNode, clickedOnce, timers, ClickNode, simulation,d3) => {
  const gradient = node.enter().append('g');
  const grainold = gradient
    .append('svg:defs')
    .append('svg:linearGradient')
    .attr('id', (d) => {
      return 'circle_A' + d.id;
    })
    .attr('x1', '0%')
    .attr('y1', '0%')
    .attr('x2', '100%')
    .attr('y2', '100%')
    .attr('spreadMethod', 'pad');
  grainold
    .append('svg:stop')
    .attr('offset', '0%')
    .attr('stop-color', (d) => {
      let color = '';
      prop.nodeColor.filter((item) => {
        if (item.name === d.nodetype) {
          if (item.state === 'color') {
            color = item.start;
          }
        }
      });
      return color;
    });
  grainold
    .append('svg:stop')
    .attr('offset', '100%')
    .attr('stop-color', (d) => {
      let color = '';
      prop.nodeColor.filter((item) => {
        if (item.name === d.nodetype) {
          if (item.state === 'color') {
            color = item.end;
          }
        }
      });
      return color;
    });
  const nodeEnter = gradient.append('circle');

  nodeEnter.attr('r', function (d) {
    if (d.level) {
      if (d.level === 0) {
        return 35;
      } else if (d.level === 1) {
        return 30;
      } else if (d.level === 2) {
        return 25;
      } else if (d.level === 3) {
        return 20;
      } else {
        return 25;
      }
    } else {
      return 35;
    }
  });
  nodeEnter
    .attr('fill', function (d) {
      if (d.nodetype === '资源点') {
        let node_r = 0;
        if (d.level) {
          if (d.level === 0) {
            node_r = 35;
          } else if (d.level === 1) {
            node_r = 30;
          } else if (d.level === 2) {
            node_r = 25;
          } else if (d.level === 3) {
            node_r = 20;
          } else {
            node_r = 25;
          }
        } else {
          node_r = 35;
        }
        if (d.filetype === '图片') {
          const defs = gradient.append('defs').attr('id', 'imgdef');
          const catpattern = defs
            .append('pattern')
            .attr('id', 'catpattern' + d.id)
            .attr('height', 1)
            .attr('width', 1)
            .attr('x', 0)
            .attr('y', 0);
          catpattern
            .append('image')
            .attr('width', node_r + 30)
            .attr('height', node_r + 30)
            .attr('x', 0)
            .attr('y', 0)
            .attr('preserveAspectRatio', 'none')
            .attr('xlink:href', import.meta.env.VITE_BASE_URL + '/' + d.url);
          return 'url(#catpattern' + d.id + ')';
        } else if (d.filetype === '视频' || d.filetype === '音乐') {
          const defs = gradient.append('defs').attr('id', 'imgdef');
          const catpattern = defs
            .append('pattern')
            .attr('id', 'catpattern' + d.id)
            .attr('height', 1)
            .attr('width', 1);
          catpattern
            .append('image')
            .attr('width', node_r + 30)
            .attr('height', node_r + 30)
            .attr('x', 0)
            .attr('y', 0)
            .attr('preserveAspectRatio', 'none')
            .attr('xlink:href', 'http://192.168.3.6:9000/open/22315.png');
          return 'url(#catpattern' + d.id + ')';
        }
      } else {
        let color = '#21bb9e';
        prop.nodeColor.filter((item) => {
          if (item.name === d.nodetype) {
            if (item.state === 'color') {
              color = 'url(#' + 'circle_A' + d.id + ')';
            } else {
              const defs = Graph.append('defs').attr('id', 'imgdefs');
              const catpattern = defs
                .append('pattern')
                .attr('id', 'catpattern' + d.id)
                .attr('height', 1)
                .attr('width', 1);
              catpattern
                .append('image')
                .attr('width', 25 * 2)
                .attr('height', 25 * 2)
                .attr('xlink:href', item.color);
              return 'url(#catpattern' + d.id + ')';
            }
          }
        });
        return color;
      }
    })
    .attr('class', (d) => {
      return 'circle_' + d.id;
    });
  nodeEnter.style('stroke-opacity', 0.6);
  nodeEnter
    .append('title') // 为每个节点设置title
    .text(function (d) {
      if (d.cname !== null && d.cname !== '' && d.cname !== undefined) {
        return d.cname;
      }
    });
  nodeEnter.on('click', function (d) {
    selectNode = d.target.__data__;
    if (clickedOnce) {
      clickedOnce = false;
      clearTimeout(timers);
      const out_buttongroup_id = '.out_buttongroup_' + d.id;
      Graph.selectAll('.buttongroup').classed('circle_none', true);
      Graph.selectAll(out_buttongroup_id).classed('circle_none', false);
      prop.nodeMethods.filter((item) => {
        if (item.name === 'DoubleClick' && item.state) {
          prop.menuMethods.filter((res) => {
            if (res.name === 'addNodeButtonsOne') {
              for (let i = res.label.length; i >= 0; i--) {
                d3.selectAll('.' + res.id + i).style('display', 'block');
              }
            } else {
              for (let i = res.label.length; i >= 0; i--) {
                d3.selectAll('.' + res.id + i).style('display', 'none');
              }
            }
          });
        }
      });
    } else {
      timers = setTimeout(() => {
        clickedOnce = false;
        const out_buttongroup_id = '.out_buttongroup_' + d.id;
        Graph.selectAll('.buttongroup').classed('circle_none', true);
        Graph.selectAll(out_buttongroup_id).classed('circle_none', false);
        prop.nodeMethods.filter((item) => {
          if (item.name === 'SingleClick' && item.state) {
            prop.menuMethods.filter((res) => {
              if (res.name === 'addNodeButtonsNEW') {
                for (let i = res.label.length; i >= 0; i--) {
                  d3.selectAll('.' + res.id + i).style('display', 'block');
                }
              } else {
                for (let i = res.label.length; i >= 0; i--) {
                  d3.selectAll('.' + res.id + i).style('display', 'none');
                }
              }
            });
          }
        });
        ClickNode(d);
      }, 200);
      clickedOnce = true;
    }
  });
  // 节点拖动开始
  function dragStarted (event){
    if (!event.active) simulation.alphaTarget(0.3).restart();
  };
  // 拖拽中
  function dragged (event,d)  {
    d.x = event.x;
    d.y = event.y;
    d.fx = event.x;
    d.fy = event.y;
  };
  // 拖拽结束
  function dragEnded (event,d)  {
    if (!event.active) simulation.alphaTarget(0.3);
    d.x = event.x;
    d.y = event.y;
    d.fx = event.x;
    d.fy = event.y;
    // 节点重叠菜单
    const MinX = parseFloat(d.x) - 40;
    const MaX = parseFloat(d.x) + 40;
    const MinY = parseFloat(d.y) - 40;
    const MaY = parseFloat(d.y) + 40;
    prop.data.nodes.forEach((item) => {
      if (MinX < item.x && item.x < MaX && MinY < item.y && item.y < MaY && item.id !== d.id) {
        // this.clone = item
        const out_buttongroup_id = '.out_buttongroup_' + d.id;
        Graph.selectAll('.buttongroup').classed('circle_none', true);
        Graph.selectAll(out_buttongroup_id).classed('circle_none', false);
        prop.menuMethods.filter((res) => {
          if (res.name === 'addNodeButtonsOld') {
            for (let i = res.label.length - 1; i >= 0; i--) {
              d3.selectAll('.' + res.id + i).style('display', 'block');
            }
          } else {
            for (let i = res.label.length; i >= 0; i--) {
              d3.selectAll('.' + res.id + i).style('display', 'none');
            }
          }
        });
      }
    });
  };
  nodeEnter.call(d3.drag().on('start', dragStarted).on('drag', dragged).on('end', dragEnded));
  return nodeEnter;
};
/**
 * @description: 绘制节点文字
 * @param {*} nodeText 节点数据
 * @param {*} prop 穿参
 * @param {*} Graph 画布
 * @param {*} selectNode 选中节点
 * @param {*} clickedOnce 点击
 * @param {*} timers 定时器
 * @param {*} ClickNode 点击节点事件function
 * @param {*} simulation 力导向图
 * @return {*} 返回节点文字
 */
// 绘制节点文字
const drawNodeText = (
  nodeText,
  prop,
  Graph,
  selectNode,
  clickedOnce,
  timers,
  ClickNode,
  simulation,
  d3
) => {
  const nodeTextEnter = nodeText
    .enter()
    .append('text')
    .style('fill', '#fff')
    .attr('dy', 4)
    .attr('font-family', '微软雅黑')
    .attr('text-anchor', 'middle')
    .text(function (d) {
      if (d.nodetype === '资源点') {
        if (d.name == null || d.name === '' || d.name === undefined) {
          return '';
        }
        if (typeof d.name === 'undefined') return '';
        if (d.name.length > 4) {
          const s = d.name.slice(0, 4) + '...';
          return s;
        }
        return d.name;
      } else {
        if (d.cname == null || d.cname === '' || d.cname === undefined) {
          return '';
        }
        if (typeof d.cname === 'undefined') return '';
        if (d.cname.length > 4) {
          const s = d.cname.slice(0, 4) + '...';
          return s;
        }
        return d.cname;
      }
    });
  nodeTextEnter.on('click', function (d) {
    selectNode = d.target.__data__;
    if (clickedOnce) {
      clickedOnce = false;
      clearTimeout(timers);
      const out_buttongroup_id = '.out_buttongroup_' + selectNode.id;
      Graph.selectAll('.buttongroup').classed('circle_none', true);
      Graph.selectAll(out_buttongroup_id).classed('circle_none', false);
      prop.nodeMethods.filter((item) => {
        if (item.name === 'DoubleClick' && item.state) {
          prop.menuMethods.filter((res) => {
            if (res.name === 'addNodeButtonsOne') {
              for (let i = res.label.length; i >= 0; i--) {
                d3.selectAll('.' + res.id + i).style('display', 'block');
              }
            } else {
              for (let i = res.label.length; i >= 0; i--) {
                d3.selectAll('.' + res.id + i).style('display', 'none');
              }
            }
          });
        }
      });
    } else {
      timers = setTimeout(() => {
        clickedOnce = false;
        const out_buttongroup_id = '.out_buttongroup_' + selectNode.id;
        Graph.selectAll('.buttongroup').classed('circle_none', true);
        Graph.selectAll(out_buttongroup_id).classed('circle_none', false);
        prop.nodeMethods.filter((item) => {
          if (item.name === 'SingleClick' && item.state) {
            prop.menuMethods.filter((res) => {
              if (res.name === 'addNodeButtonsNEW') {
                for (let i = res.label.length; i >= 0; i--) {
                  d3.selectAll('.' + res.id + i).style('display', 'block');
                }
              } else {
                for (let i = res.label.length; i >= 0; i--) {
                  d3.selectAll('.' + res.id + i).style('display', 'none');
                }
              }
            });
          }
        });
        ClickNode(d);
      }, 300);
      clickedOnce = true;
    }
  });
  // 节点拖动开始
  function dragStarted  (event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
  };
  // 拖拽中
  function dragged (event,d) {
    d.x = event.x;
    d.y = event.y;
    d.fx = event.x;
    d.fy = event.y;
  };
  // 拖拽结束
   function dragEnded (event,d)  {
    if (!event.active) simulation.alphaTarget(0.3);
    d.x = event.x;
    d.y = event.y;
    d.fx = event.x;
    d.fy = event.y;
    // 节点重叠菜单
    const MinX = parseFloat(d.x) - 40;
    const MaX = parseFloat(d.x) + 40;
    const MinY = parseFloat(d.y) - 40;
    const MaY = parseFloat(d.y) + 40;
    prop.data.nodes.forEach((item) => {
      if (MinX < item.x && item.x < MaX && MinY < item.y && item.y < MaY && item.id !== d.id) {
        // this.clone = item
        const out_buttongroup_id = '.out_buttongroup_' + d.id;
        Graph.selectAll('.buttongroup').classed('circle_none', true);
        Graph.selectAll(out_buttongroup_id).classed('circle_none', false);
        prop.menuMethods.filter((res) => {
          if (res.name === 'addNodeButtonsOld') {
            for (let i = res.label.length - 1; i >= 0; i--) {
              d3.selectAll('.' + res.id + i).style('display', 'block');
            }
          } else {
            for (let i = res.label.length; i >= 0; i--) {
              d3.selectAll('.' + res.id + i).style('display', 'none');
            }
          }
        });
      }
    });
  };
  nodeTextEnter.call(d3.drag().on('start', dragStarted).on('drag', dragged).on('end', dragEnded));
  return nodeTextEnter;
};
// 给节点画上标识想
const drawNodeSymbol = (nodeSymbol) => {
  const symbol_path =
    'M566.92736 550.580907c30.907733-34.655573 25.862827-82.445653 25.862827-104.239787 0-108.086613-87.620267-195.805867-195.577173-195.805867-49.015467 0-93.310293 18.752853-127.68256 48.564907l-0.518827-0.484693-4.980053 4.97664c-1.744213 1.64864-3.91168 2.942293-5.59104 4.72064l0.515413 0.484693-134.69696 133.727573L216.439467 534.8352l0 0 137.478827-136.31488c11.605333-10.410667 26.514773-17.298773 43.165013-17.298773 36.051627 0 65.184427 29.197653 65.184427 65.24928 0 14.032213-5.33504 26.125653-12.73856 36.829867l-131.754667 132.594347 0.515413 0.518827c-10.31168 11.578027-17.07008 26.381653-17.07008 43.066027 0 36.082347 29.16352 65.245867 65.184427 65.245867 16.684373 0 31.460693-6.724267 43.035307-17.07008l0.515413 0.512M1010.336427 343.49056c0-180.25472-145.882453-326.331733-325.911893-326.331733-80.704853 0-153.77408 30.22848-210.418347 79.0528l0.484693 0.64512c-12.352853 11.834027-20.241067 28.388693-20.241067 46.916267 0 36.051627 29.16352 65.245867 65.211733 65.245867 15.909547 0 29.876907-6.36928 41.192107-15.844693l0.38912 0.259413c33.624747-28.030293 76.301653-45.58848 123.511467-45.58848 107.99104 0 195.549867 87.6544 195.549867 195.744427 0 59.815253-27.357867 112.71168-69.51936 148.503893l0 0-319.25248 317.928107 0 0c-35.826347 42.2912-88.654507 69.710507-148.340053 69.710507-107.956907 0-195.549867-87.68512-195.549867-195.805867 0-59.753813 27.385173-112.646827 69.515947-148.43904l-92.18048-92.310187c-65.69984 59.559253-107.700907 144.913067-107.700907 240.749227 0 180.28544 145.885867 326.301013 325.915307 326.301013 95.218347 0 180.02944-41.642667 239.581867-106.827093l0.13312 0.129707 321.061547-319.962453-0.126293-0.13312C968.69376 523.615573 1010.336427 438.71232 1010.336427 343.49056L1010.336427 343.49056 1010.336427 343.49056zM1010.336427 343.49056'; // 定义回形针形状
  const nodeSymbolEnter = nodeSymbol.enter().append('path').attr('d', symbol_path);
  return nodeSymbolEnter;
};
// 连线弯曲配置
function linkArc(d) {
  const dx = d.lk.target.x - d.lk.source.x;
  const dy = d.lk.target.y - d.lk.source.y;
  const dr = Math.sqrt(dx * dx + dy * dy);
  const unevenCorrection = d.sameUneven ? 0 : 0.5;
  const curvature = 2;
  let arc = (1.0 / curvature) * ((dr * d.maxSameHalf) / (d.sameIndexCorrected - unevenCorrection));
  if (d.sameMiddleLink) {
    arc = 0;
  }
  const dd =
    'M' +
    d.lk.source.x +
    ',' +
    d.lk.source.y +
    'A' +
    arc +
    ',' +
    arc +
    ' 0 0,' +
    d.sameArcDirection +
    ' ' +
    d.lk.target.x +
    ',' +
    d.lk.target.y;
  return dd;
}
export {
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
};
