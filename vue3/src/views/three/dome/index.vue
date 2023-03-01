<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-28 14:11:45
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-28 17:33:55
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/three/dome/index.vue
 * @Description: 

 * 
-->
<template>
    <ComponentPage class="page">
        <div id="container"  class="container_box"></div>
    </ComponentPage>
  </template>
  
<script lang="ts" setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import {
  CSS2DRenderer,
} from "three/examples/jsm/renderers/CSS2DRenderer";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min";
import { clickPick } from "@/utils/three/clickPick";
import { Sky } from "@/utils/three/Sky";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass";
import { CopyShader } from "three/examples/jsm/shaders/CopyShader";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";
import {
  initPark,
  initAmbulance,
  initUfo,
  initBank,
  initSchool,
  initModernBuilding,
  initCinema,
  initCJ
} from "@/utils/three/modelList";
import { initRenderer, initControls } from "@/utils/three/baseElement";
const {proxy} =getCurrentInstance()
let container
//初始化场景
let scene:any=reactive({})
const initSceneMed=()=>{
    scene= new THREE.Scene();
}
//初始化相机
let camera
const initCamera=()=>{
  camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        10,
        10000
      );
camera.position.set(1000, 1500, 3500);
}
//初始化灯光
   const PointLight = new THREE.PointLight(0xffffff, 0.6);
   let ambient:any=reactive({})
const initLight=()=>{
    scene.add(PointLight);
      // 环境光
    ambient= new THREE.AmbientLightProbe(0xffffff, 1);
    scene.add(ambient);
    camera.add(PointLight);
}

//初始化渲染器
let css2dRender:any=reactive({})
let renderer:any=reactive({})
const initRendererMed =()=>{
   css2dRender = new CSS2DRenderer();
      // 场景渲染器
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        logarithmicDepthBuffer: true,
      });
      initRenderer(css2dRender, container, renderer);
}
// 初始化控制器
let controls:any=reactive({})
const initControlsMed=()=>{
    controls = new OrbitControls(camera, renderer.domElement);
    initControls(controls);
}
//初始化背景
let sky,Controller,sun
const initSkyBox=()=>{
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
      guiChanged();
}
// 初始化指针锁定控制器，人物控制器
let lockcontrols:any=reactive({})
let moveForward,moveLeft,moveBackward,moveRight,canJump:any,velocity:any=reactive({})
const initPointLockControl=()=>{
lockcontrols = new PointerLockControls(camera, document.body);
  const onKeyDown = (event) => {
        switch (event.keyCode) {
          case 38: // up
          case 87: // w
            moveForward = true;
            break;
          case 37: // left
          case 65: // a
            moveLeft = true;
            break;
          case 40: // down
          case 83: // s
            moveBackward = true;
            break;
          case 39: // right
          case 68: // d
            moveRight = true;
            break;
          case 32: // space
            if (
              canJump === true) 
            velocity.y += 350;
            canJump = false;
            break;
        }
      };
      const onKeyUp = (event) => {
        switch (event.keyCode) {
          case 38: // up
          case 87: // w
            moveForward = false;
            break;
          case 37: // left
          case 65: // a
            
            moveLeft = false;
            break;
          case 40: // down
          case 83: // s
            
            moveBackward = false;
            break;
          case 39: // right
          case 68: // d
            
            moveRight = false;
            break;
        }
      };
      document.addEventListener("keydown", onKeyDown, false);
      document.addEventListener("keyup", onKeyUp, false);
}
  // 初始化效果器点击模型出现高亮
let effectComposer:any= reactive({})
let outlinePass:any=reactive({})
const initComposerMed=()=>{
    effectComposer = new EffectComposer(
      renderer);
      effectComposer.renderTarget1.stencilBuffer = true;
      effectComposer.renderTarget2.stencilBuffer = true;
      // 创建shaderPass 可以在shaderpass里面添加各种着色器达到不同的效果
      const effectCopy = new ShaderPass(CopyShader);
      // 让effectcopy渲染到屏幕上
      effectCopy.renderToScreen = true;
      // 添加renderPass通道,这个通道会渲染场景,但不会将渲染结果输出到屏幕上
      const renderPass = new RenderPass(
        scene, 
      camera);
      
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
      effectComposer.addPass(
        outlinePass);
      // FXAAShader主要解决锯齿问题
      const effectFXAA = new ShaderPass(FXAAShader);
      effectFXAA.uniforms["resolution"].value.set(
        1 / window.innerWidth,
        1 / window.innerHeight
      );
      effectFXAA.renderToScreen = true;
      
      effectComposer.addPass(effectFXAA);
      clickPick(proxy);
}
// 初始化模型
let objList:any=reactive({})
let loading=ref<boolean>(false)
const initModelMed=(url)=>{
return new Promise(( resolve,reject)=>{
  new MTLLoader()
  .setPath("/static/obj/")
  .load(`${url}.mtl`,(materials)=>{
    materials.preload();
      new OBJLoader()
       .setMaterials(materials)
              .setPath("/static/obj/")
              .load(`${url}.obj`, (obj) => {
                if (obj) {
                  objList = obj;
                  loading.value = false;
                  obj.children.forEach((child:any) => {
                    if (child.name === "ground") {
                      child.material.forEach((res) => {
                        if (res.name === "Grass") {
                          (res.color.r = 0.52),
                            (res.color.g = 0.62),
                            (res.color.b = 0.52);
                        }
                      });
                    }
                  });
                  obj.children.forEach((child:any) => {
                    child.geometry.computeBoundingBox();
                    const centroid = new THREE.Vector3();
                    centroid.addVectors(
                      child.geometry.boundingBox.min,
                      child.geometry.boundingBox.max
                    );
                    centroid.multiplyScalar(0.5);
                    centroid.applyMatrix4(child.matrixWorld);
                    child.geometry.center(centroid.x, centroid.y, centroid.z);
                    child.position.set(centroid.x, centroid.y, centroid.z);
                  });
                  scene.add(obj);
                  resolve(obj);
                } else {
                  reject("error");
                }
              });
  })
})
}
// 多个重复建筑克隆
const cloneBuilding=(object)=>{
    object.children.forEach((res) => {
        if (res.name === "http") {
          res.name = "parking";
          res.scale.set(0.8, 0.8, 0.8);
          res.position.set(200, 100, 1400);
          res.rotateY(-Math.PI / 2);
          scene.add(res);
        }
        if (res.name === "dep8") {
          res.name = "developmentDep";
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
        if (res.name == "ground") {
          res.position.set(-400, 55, -3500);
          res.scale.set(0.4, 0.4, 1);
          res.rotateY(-Math.PI / 2);
          scene.add(res);
        }
      });
} 
// 初始化汽车路线
let curve:any=reactive({})
let truck:any=reactive({})
const initCurve=(obj)=>{
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
      const vertices =curve.getPoints(100);
      const geometry = new THREE.BufferGeometry().setFromPoints(vertices);
      const lineMaterial = new THREE.LineBasicMaterial({
        transparent: this,
        opacity: 0,
      });
      const curveMesh = new THREE.Line(geometry, lineMaterial);
     scene.add(curveMesh);
     truck = obj.getObjectByName("truck4");
}
// 初始化卡车2的移动路线
let curve2:any=reactive({})
let car:any=reactive({})
const initTruckCurve=(obj)=>{
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
      car = obj.getObjectByName("car4");
}
//汽车运动
let progress=ref(0) 
const move_rate=0.0005
let followTruck=ref<boolean>(false)
const truckMove=(curve, truck)=> {
      progress.value += move_rate;
      if (curve) {
        const point = curve.getPoint(progress);
        // 下一个要走的点的位置
        const point_next = curve.getPoint(progress.value + move_rate);
        if (point && point.x) {
          truck.position.set(point.x, point.y, point.z);
          // 向下一个要走的点方向看齐
          truck.lookAt(point_next.x, point_next.y, point_next.z);
          if (followTruck) {
            camera.position.set(point.x, point.y + 45, point.z);
            camera.lookAt(point_next.x, point_next.y + 45, point_next.z);
            controls.position0.set(point.x, point.y + 45, point.z);
            // 将控制器看齐下一个点的位置(摆正车头的位置)
            controls.target.set(
              point_next.x,
              point_next.y + 45,
              point_next.z
            );
          }
        }
      }
      // 将canvas车速标签跟随汽车移动显示
      // if (dynamicSprite) {
      //   dynamicSprite.position.set(
      //     truck.position.x,
      //     truck.position.y,
      //     truck.position.z
      //   );
      //   dynamicSprite.translateY(100);
      // }
    }
//初始化控制面板
let effectController={A:''}
let axes:any=reactive({})
let helper:any =reactive({})

   // 加载其他模型
const initOtherModel=()=> {
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
      initCJ(scene);
      // 加载电影院
      initCinema(scene);
      // 加载ufo
      initUfo(scene);
    }

let animationID:any=ref(0)
let clock=new THREE.Clock()
let click=ref<boolean>(false) 
const render=()=>{
    animationID.value = requestAnimationFrame(render);
      renderer.render(scene, camera);
      // 刷新动画
      TWEEN.update();
      const delta = clock.getDelta();
      // effectComposer里面是对renderer渲染器进行后期处理,则可以在他身上进行render()
      if (click.value) {
        effectComposer.render(delta);
      }
      css2dRender.render(scene, camera);
      // 汽车移动方法
      truckMove(curve2, car);
      truckMove(curve, truck);
      // 扫描效果
      // if (isShowScan) {
      //   mesh2.rotateZ(0.03);
      // }
      // if (isShowFire) {
      //   updateLoop(15);
      // }
      // // 轨道控制器和指针锁定控制器会有冲突 不能同时存在
      // if (normalView) {
      //   controls.update();
      // }
      // if (mixer !== null) {
      //   // clock.getDelta()方法获得两帧的时间间隔
      //   mixer.update(delta);
      // }
}
// 使用async方法加载模型
let status=ref(0)
let groupIndex=ref(0)
const AsyncInitModel=async()=>{
 let obj:any = await initModelMed("city");
      cloneBuilding(obj.clone());
      // 初始化行驶路线
      initCurve(obj);
      initTruckCurve(obj);
      initOtherModel();
      render();
      groupIndex.value = scene.children.findIndex(
        (_) => _.type === "Group"
      );
}
//gui改变属性
const guiChanged=()=>{
      const uniforms = sky.material.uniforms;
      uniforms["rayleigh"].value = Controller.rayleigh;
      uniforms["turbidity"].value = Controller.turbidity;
      uniforms["mieCoefficient"].value = Controller.mieCoefficient;
      uniforms["mieDirectionalG"].value = Controller.mieDirectionalG;
      const phi = THREE.MathUtils.degToRad(90 - Controller.elevation);
      const theta = THREE.MathUtils.degToRad(Controller.azimuth);
      sun.setFromSphericalCoords(1, phi, theta);
      uniforms["sunPosition"].value.copy(sun);
}
// 屏幕自适应
const  onWindowResize=()=>{
     camera.aspect = window.innerWidth / window.innerHeight;
     camera.updateProjectionMatrix();
     renderer.setSize(
       container.clientWidth,
       container.clientHeight
      );
     css2dRender.setSize(
       container.clientWidth,
       container.clientHeight
      );
    }
// 初始化方法
const init=()=> {
    window.$loadingBar.start()
      // 初始化场景
     initSceneMed();
      // 初始化摄像机
     initCamera();
      // 初始化灯光
     initLight();
      // 初始化性能检测器
    //  initStats();
      // 初始化渲染器
     initRendererMed();
      // 初始化控制器
     initControlsMed();
      // 初始化背景
     initSkyBox();
      // 初始化指针锁定控制器
     initPointLockControl();
     initComposerMed();
     AsyncInitModel();
     window.addEventListener("resize",onWindowResize(), false);
     window.$loadingBar.finish()
    }
onMounted(()=>{
  container =document.querySelector("#container")
  init()
})
</script>
<style lang="scss" scoped>

#container{
  width: 100%;
  height: 100%;
}
</style>