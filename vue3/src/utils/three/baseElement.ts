/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-24 17:00:52
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-24 17:01:03
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/utils/three/baseElement.ts
 * @Description: 
 * 
 */
export const initRenderer = (css2dRender, container, renderer) => {
    css2dRender.setSize(container.clientWidth, container.clientHeight);
    css2dRender.domElement.style.position = "absolute";
    // 相对鼠标的相对偏移
    css2dRender.domElement.style.top = "-20px";
    css2dRender.domElement.style.right = "-20px";
    css2dRender.domElement.className = "css2dRender";
    // 设置.pointerEvents=none，以免模型标签HTML元素遮挡鼠标选择场景模型
    css2dRender.domElement.style.pointerEvents = "none";
    container.appendChild(css2dRender.domElement);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0xffffff, 1.0);
    // 把自动清除颜色缓存关闭 这个如果不关闭 后期处理这块会不能有效显示
    // 书上的描述是 如果不这样做，每次调用效果组合器的render()函数时，之前渲染的场景会被清理掉。通过这种方法，我们只会在render循环开始时，把所有东西清理一遍。
    renderer.autoClear = false;
    container.appendChild(renderer.domElement);
  };
  
  export const initControls = (controls) => {
    // 如果使用animate方法时，将此函数删除
    // this.controls.addEventListener( 'change', this.render() )
    // 使动画循环使用时阻尼或自转 意思是否有惯性
    controls.enableDamping = true;
    //是否可以缩放
    controls.enableZoom = true;
    //是否自动旋转
    controls.autoRotate = false;
    //设置相机距离原点的最近距离
    controls.minDistance = 50;
    //设置相机距离原点的最远距离
    controls.maxDistance = 6500;
    //是否开启右键拖拽
    controls.enablePan = true;
    // 最大角度
    controls.maxPolarAngle = Math.PI / 2.2;
  };
  