<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-28 14:11:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-10 16:14:16
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/three/dome/index.vue
 * @Description: 

 * 
-->
<template>
  <ComponentPage class="page">
    <div ref="container" id="container" class="container_box" w-full h-full></div>
  </ComponentPage>
</template>

<script lang="ts" setup name="dome">
  import * as THREE from 'three';
  import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';
  import { initRenderer, initControls } from '@/utils/three/baseElement';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
  import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
  import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
  import { CopyShader } from 'three/examples/jsm/shaders/CopyShader';
  import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
  import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader';
  import { Sky } from '@/utils/three/Sky';
  import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'; //加载mtl文件
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'; //加载obj文件
  import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'; //加载GUI
  import { TWEEN } from 'three/examples/jsm/libs/tween.module.min'; //加载动画
  import { Capsule } from 'three/examples/jsm/math/Capsule'// new Capsule(下球心（vector3），上球心（vector3），半径)
  import {
    initPark,
    initAmbulance,
    initUfo,
    initBank,
    initSchool,
    initModernBuilding,
    initCinema,
    initCJ,
  } from '@/utils/three/modelList';
  import {drawButton,handleKeyDown,handleControls} from '@/utils/three/tastiera'
  //由于这里我们并不需要双向绑定，所以我们可以直接声明变量
  let scene: THREE.Scene,
    camera,
    ambient: THREE.Object3D<THREE.Event>,
    css2dRender: CSS2DRenderer,
    renderer: THREE.WebGLRenderer,
    controls: OrbitControls,
    sky: any,
    Controller: {
      rayleigh: any;
      turbidity: any;
      mieCoefficient: any;
      mieDirectionalG: any;
      elevation: any;
      azimuth: any;
    },
    sun: THREE.Vector3,
    effectComposer: EffectComposer,
    outlinePass: OutlinePass,
    click: boolean,
    dataInfo: any,
    effectController: { A: '' },
    modelList: any,
    curve,
    curve2,
    truck,
    car,
    progress: any,
    followTruck: boolean,
    gui,
    axes,
    helper,
    animationID,
    clock = new THREE.Clock(),
    // lockcontrols,
    status,
    groupIndex,
    cartier,
    centroids,
    player:any = {
        geometry: new Capsule(new THREE.Vector3(0, 0.35, 0), new THREE.Vector3(0, 1, 0), 0.35),
        velocity: new THREE.Vector3(),
        direction: new THREE.Vector3()
      };
  const acceleration = new THREE.Vector3(0, -0.98, 0); // y 轴方向上的重力加速度
  const move_rate = 0.0005;
  const loading = ref(false);
  const container = ref();
  const PointLight = new THREE.PointLight(0xffffff, 0.6); //灯光
  /**
   * @description: 初始化背景
   */
  const initSceneMed = () => {
    scene = new THREE.Scene();
  };
  /**
   * @description: 初始化相机
   */
  const initCamera = () => {
    camera = new THREE.PerspectiveCamera(
      45,
      container.value.clientWidth / container.value.clientHeight,
      10,
      10000
    );
    camera.position.set(1000, 1500, 3500);
  };
  /**
   * @description: 初始化灯光
   */
  const initLight = () => {
    scene.add(PointLight);
    // 环境光
    ambient = new THREE.AmbientLightProbe(0xffffff, 1);
    scene.add(ambient);
    camera.add(PointLight);
  };
  /**
   * @description: 初始化渲染器
   */
  const initRendererMed = () => {
    css2dRender = new CSS2DRenderer();
    // 场景渲染器
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      logarithmicDepthBuffer: true,
    });
    initRenderer(css2dRender, container.value, renderer);
  };
  /**
   * @description: 初始化控制器
   */
  const initControlsMed = () => {
    controls = new OrbitControls(camera, renderer.domElement);
    initControls(controls);
  };
  /**
   * @description: 初始化天空
   */
  const initSkyBox = () => {
    sky = new Sky();
    sky.scale.setScalar(450000);
    scene.add(sky);
    Controller = {
      rayleigh: 0.5, //夜空亮度单位
      elevation: 2.6, // 高度
      azimuth: 180, // 方位角
      turbidity: 1.8, // 浑浊度
      mieCoefficient: 0.1, // 系数
      mieDirectionalG: 0.226, // 方向
    };
    sun = new THREE.Vector3();
    const uniforms = sky.material.uniforms;
    uniforms['rayleigh'].value = Controller.rayleigh;
    uniforms['turbidity'].value = Controller.turbidity;
    uniforms['mieCoefficient'].value = Controller.mieCoefficient;
    uniforms['mieDirectionalG'].value = Controller.mieDirectionalG;
    const phi = THREE.MathUtils.degToRad(90 - Controller.elevation);
    const theta = THREE.MathUtils.degToRad(Controller.azimuth);
    sun.setFromSphericalCoords(1, phi, theta);
    uniforms['sunPosition'].value.copy(sun);
  };
  /**
   * @description: 初始化指针锁定控制器，人物控制器
   */
  //  const initPointLockControl=()=>{
  //   lockcontrols = new PointerLockControls(camera, document.body);
  // const onKeyDown = (event) => {
  //       switch (event.keyCode) {
  //         case 38: // up
  //         case 87: // w
  //           moveForward = true;
  //           break;
  //         case 37: // left
  //         case 65: // a
  //           moveLeft = true;
  //           break;
  //         case 40: // down
  //         case 83: // s
  //           moveBackward = true;
  //           break;
  //         case 39: // right
  //         case 68: // d
  //           moveRight = true;
  //           break;
  //         case 32: // space
  //           if (
  //             canJump === true)
  //           velocity.y += 350;
  //           canJump = false;
  //           break;
  //       }
  //     };
  //     const onKeyUp = (event) => {
  //       switch (event.keyCode) {
  //         case 38: // up
  //         case 87: // w
  //           moveForward = false;
  //           break;
  //         case 37: // left
  //         case 65: // a

  //           moveLeft = false;
  //           break;
  //         case 40: // down
  //         case 83: // s
  //           moveBackward = false;
  //           break;
  //         case 39: // right
  //         case 68: // d
  //           moveRight = false;
  //           break;
  //       }
  //     };
  //     document.addEventListener("keydown", onKeyDown, false);
  //     document.addEventListener("keyup", onKeyUp, false);
  //  }
  // 初始化效果器点击模型出现高亮
  const initComposerMed = () => {
    effectComposer = new EffectComposer(renderer);
    effectComposer.renderTarget1.stencilBuffer = true;
    effectComposer.renderTarget2.stencilBuffer = true;
    // 创建shaderPass 可以在shaderpass里面添加各种着色器达到不同的效果
    const effectCopy = new ShaderPass(CopyShader);
    // 让effectcopy渲染到屏幕上
    effectCopy.renderToScreen = true;
    // 添加renderPass通道,这个通道会渲染场景,但不会将渲染结果输出到屏幕上
    const renderPass = new RenderPass(scene, camera);
    effectComposer.addPass(renderPass);
    effectComposer.addPass(effectCopy);
    // outlinePass给对象添加轮廓线
    outlinePass = new OutlinePass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      scene,
      camera
    );
    outlinePass.edgeStrength = 5; //包围线浓度
    outlinePass.visibleEdgeColor.set(0x00ffff); //包围线颜色
    effectComposer.addPass(outlinePass);
    // FXAAShader主要解决锯齿问题
    const effectFXAA = new ShaderPass(FXAAShader);
    effectFXAA.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight);
    effectFXAA.renderToScreen = true;
    effectComposer.addPass(effectFXAA);
    clickPick(
      scene,
      controls,
      camera,
      container.value,
      outlinePass,
      click,
      dataInfo,
      effectController
    );
  };
  //获取城市模型
  const initModelMed = (url) => {
    return new Promise((resolve, reject) => {
      new MTLLoader().setPath('/static/obj/').load(`${url}.mtl`, (materials) => {
        materials.preload();
        new OBJLoader()
          .setMaterials(materials)
          .setPath('/static/obj/')
          .load(`${url}.obj`, (obj) => {
            if (obj) {
              modelList = obj;
              loading.value = false;
              obj.children.forEach((child: any) => {
                if (child.name === 'ground') {
                  child.material.forEach((res) => {
                    if (res.name === 'Grass') {
                      (res.color.r = 0.52), (res.color.g = 0.62), (res.color.b = 0.52);
                    }
                  });
                }
              });
              obj.children.forEach((child: any) => {
                child.geometry.computeBoundingBox();
                const centroid = new THREE.Vector3();
                centroid.addVectors(child.geometry.boundingBox.min, child.geometry.boundingBox.max);
                centroid.multiplyScalar(0.5);
                centroid.applyMatrix4(child.matrixWorld);
                centroids = centroid;
                child.geometry.center(centroid.x, centroid.y, centroid.z);
                child.position.set(centroid.x, centroid.y, centroid.z);
              });
              scene.add(obj);
              resolve(obj);
            } else {
              reject('error');
            }
          });
      });
    });
  };
  // 多个重复建筑克隆
  const cloneBuilding = (object) => {
    object.children.forEach((res) => {
      if (res.name === 'http') {
        res.name = 'parking';
        res.scale.set(0.8, 0.8, 0.8);
        res.position.set(200, 100, 1400);
        res.rotateY(-Math.PI / 2);
        scene.add(res);
      }
      if (res.name === 'dep8') {
        res.name = 'developmentDep';
        res.position.set(1150, 250, 0);
        res.rotateY(Math.PI);
        scene.add(
          res,
          res.clone().translateZ(550),
          res.clone().translateZ(1100),
          res.clone().translateX(-500).rotateY(Math.PI),
          res.clone().translateX(-500).translateZ(550).rotateY(Math.PI),
          res.clone().translateX(-500).translateZ(1100).rotateY(Math.PI)
        );
      }
      if (res.name == 'ground') {
        res.position.set(-400, 55, -3500);
        res.scale.set(0.4, 0.4, 1);
        res.rotateY(-Math.PI / 2);
        scene.add(res);
      }
    });
  };
  // 初始化汽车路线轨迹
  const initCurve = (obj) => {
    curve = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(500, 20, -1200),
        new THREE.Vector3(500, 20, -800),
        new THREE.Vector3(500, 20, -600),
        new THREE.Vector3(500, 20, 400),
        new THREE.Vector3(-400, 20, 400),
        new THREE.Vector3(-400, 20, -600),
        new THREE.Vector3(-400, 20, -1300),
      ],
      true
    );
    const vertices = curve.getPoints(100);
    const geometry = new THREE.BufferGeometry().setFromPoints(vertices);
    const lineMaterial = new THREE.LineBasicMaterial({
      transparent: this,
      opacity: 0,
    });
    const curveMesh = new THREE.Line(geometry, lineMaterial);
    scene.add(curveMesh);
    truck = obj.getObjectByName('truck4');
  };
  // 初始化卡车路线轨迹
  const initTruckCurve = (obj) => {
    curve2 = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-400, 20, 450),
        new THREE.Vector3(-400, 20, -600),
        new THREE.Vector3(-400, 20, -1300),
        new THREE.Vector3(-1000, 20, -1200),
        new THREE.Vector3(-1100, 20, -600),
        new THREE.Vector3(-1100, 20, -800),
        new THREE.Vector3(-1100, 20, 500),
      ],
      true
    );
    const vertices = curve2.getPoints(100);
    const geometry = new THREE.BufferGeometry().setFromPoints(vertices);
    const lineMaterial = new THREE.LineBasicMaterial({
      transparent: this,
      opacity: 0,
    });
    const curveMesh2 = new THREE.Line(geometry, lineMaterial);
    scene.add(curveMesh2);
    car = obj.getObjectByName('car4');
  };
  //汽车运动
  const truckMove = (curve, truck) => {
    // progress += move_rate;
    // if (curve) {
    //   const point = curve.getPoint(progress);
    //   // 下一个要走的点的位置
    //   const point_next = curve.getPoint(progress + move_rate);
    //   if (point && point.x) {
    //     truck.position.set(point.x, point.y, point.z);
    //     // 向下一个要走的点方向看齐
    //     truck.lookAt(point_next.x, point_next.y, point_next.z);
    //     if (followTruck) {
    //       camera.position.set(point.x, point.y + 45, point.z);
    //       camera.lookAt(point_next.x, point_next.y + 45, point_next.z);
    //       controls.position0.set(point.x, point.y + 45, point.z);
    //       // 将控制器看齐下一个点的位置(摆正车头的位置)
    //       controls.target.set(
    //         point_next.x,
    //         point_next.y + 45,
    //         point_next.z
    //       );
    //     }
    //   }
    // }
    // 将canvas车速标签跟随汽车移动显示
    // if (dynamicSprite) {
    //   dynamicSprite.position.set(
    //     truck.position.x,
    //     truck.position.y,
    //     truck.position.z
    //   );
    //   dynamicSprite.translateY(100);
    // }
  };
  const initGui = (status) => {
    if (Number(status) === 1) {
      gui = new GUI();
      gui.domElement.classList.add();
      gui.domElement.style.cssText = 'position:absolute;top:0;right:0px;';
      const options = {
        Helper: false,
        Fog: false,
        Verctor: false,
      };
      gui.add(effectController, 'A').name('Selected:').listen();
      gui.add(options, 'Helper').onChange((val) => {
        if (val) {
          axes = new THREE.AxesHelper(5000);
          scene.add(axes);
          helper = new THREE.GridHelper(10000, 2, 0xffffff, 0xffffff);
          scene.add(helper);
        } else {
          scene.remove(axes);
          scene.remove(helper);
        }
      });
      const dropdown = { Background: 'Sky' };
      const states = ['Sky', 'Star', 'Park'];
      gui
        .add(dropdown, 'Background')
        .options(states)
        .onChange((val) => {
          scene.remove(sky);
          if (val == 'Sky') {
            scene.add(sky);
          } else {
            // changeSKyBox(val);
          }
        });
      gui.add(options, 'Fog').onChange((val) => {
        if (val) {
          scene.fog = new THREE.Fog('#FFF0F5', 100, 10000);
        } else {
          scene.fog = null;
        }
      });
      gui.add(options, 'Verctor').onChange(() => {
        // addSpriteCanvas();
      });
    }
  };
  // 加载其他模型
  const initOtherModel = async () => {
    // 加载银行
    initBank(scene);
    // 加载公园
    initPark(scene);
    // 初始化救护车
    initAmbulance(scene);
    // 初始化学校
    initSchool(scene);
    // 加载建筑
    initModernBuilding(scene);
    cartier = await initCJ(scene);
    console.log(cartier.animations,'cartier');
    // 加载电影院
    initCinema(scene);
    // 加载ufo
    initUfo(scene);
    //加载按钮
    drawButton(THREE,scene,cartier,controls,camera)
  };


  //初始化场景
  const render = () => {
    animationID = requestAnimationFrame(render);
    // if (lockcontrols.isLocked) {
    //   // firstPersonMove();
    // }
    renderer.render(scene, camera);
    // 刷新动画
    TWEEN.update();
    const delta = Math.min(0.05, clock.getDelta())
    // effectComposer里面是对renderer渲染器进行后期处理,则可以在他身上进行render()
    if (click) {
      effectComposer.render(delta);
    }
    css2dRender.render(scene, camera);
    //给人物cartier添加重力
    if(cartier){
      cartier.position.add(acceleration);
     //添加碰撞检测
     if (cartier.position.y <=5) {
      cartier.position.y = 5;
    }
    }
    handleControls(delta,cartier,controls,camera,player,THREE)
    // updatePlayer(delta)
    // 汽车移动方法
    // truckMove(curve, truck);
    // truckMove(curve2, car);
  };



  
  //异步加载模型
  const AsyncInitModel = async () => {
    let obj: any = await initModelMed('city');
    cloneBuilding(obj.clone());
    // 初始化行驶路线
    // initCurve(obj);
    initTruckCurve(obj);
    initGui(status);
    initOtherModel();
    render();
    groupIndex = scene.children.findIndex((_) => _.type === 'Group');
  };
  // 屏幕自适应
  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.value.clientWidth, container.value.clientHeight);
    css2dRender.setSize(container.value.clientWidth, container.value.clientHeight);
  };
  const init = () => {
    //初始化场景
    initSceneMed();
    //初始化相机
    initCamera();
    //初始化灯光
    initLight();
    // 初始化渲染器
    initRendererMed();
    // 初始化控制器
    initControlsMed();
    // 初始化天空
    initSkyBox();
    // 初始化效果器
    initComposerMed();
    // 初始化模型
    AsyncInitModel();
    //@ts-ignore
    window.addEventListener('resize', onWindowResize(), false);
  };
  onMounted(() => {
    init();
  });
  onUnmounted(()=>{
    
  })
</script>
<style lang="scss" scoped>
.container_box{
  position: relative;
}
</style>
