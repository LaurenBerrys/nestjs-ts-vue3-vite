import * as THREE from 'three';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min';
export const clickPick = (
  scene:THREE.Scene,
  controls: any,
  camera: THREE.Camera,
  container: any,
  outlinePass:any,
  click: boolean,
  dataInfo:any,
  effectController
) => {
  const rayCaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let x: any, y: any;
  const selectedObjects = [];
  let label: any = document.querySelector('.label');
  if(!label){
    //如果没有label元素，就创建一个
     label = document.createElement('div');
     label.className = 'label';
    container.appendChild(label);

  }
  window.addEventListener('click', onMouseClick);
  window.addEventListener('dblclick', onMouseDbClick);
  // 点击卡片的显示位置
  function showCard(element: HTMLDivElement, x: any, y: any) {
    element.style.display = 'block';
    element.style.position = 'absolute';
    element.style.left = `170px`;
    element.style.top = '60px';
  }
  // current1 相机当前的位置
  // target1 相机的controls的target
  // current2 新相机的目标位置
  // target2 新的controls的target
  function animateCamera(
    current1: { x: any; y: any; z: any },
    target1: { x: any; y: any; z: any },
    current2: THREE.Vector3,
    target2: THREE.Vector3
  ) {
    const positionVar = {
      x1: current1.x,
      y1: current1.y,
      z1: current1.z,
      x2: target1.x,
      y2: target1.y,
      z2: target1.z,
    };
    //关闭控制器
    controls.enabled = false;
    const tween = new TWEEN.Tween(positionVar);
    tween.to(
      {
        x1: current2.x,
        y1: current2.y,
        z1: current2.z,
        x2: target2.x,
        y2: target2.y,
        z2: target2.z,
      },
      2000
    );

    tween.onUpdate(() => {
      camera.position.x = positionVar.x1;
      camera.position.y = positionVar.y1;
      camera.position.z = positionVar.z1;
      controls.target.x = positionVar.x2;
      controls.target.y = positionVar.y2;
      controls.target.z = positionVar.z2;
      controls.update();
    });

    tween.onComplete(() => {
      ///开启控制器
      controls.enabled = true;
    });

    tween.easing(TWEEN.Easing.Cubic.InOut);
    tween.start();
  }
  function onMouseClick(e:any) {
    if (e.changedTouches) {
      x = e.changedTouches[0].pageX;
      y = e.changedTouches[0].pageY;
    } else {
      x = e.clientX;
      y = e.clientY;
    }
    const rect = container.getBoundingClientRect(); // 拿到div相对屏幕坐标的偏移量
    /**
     * 当前场景并不是全屏渲染的 所以屏幕坐标转化为世界坐标的公式有所变化
     */
    mouse.x = ((x - rect.left) / container.clientWidth) * 2 - 1;
    mouse.y = -((y - rect.top) / container.clientHeight) * 2 + 1;
    // 通过摄像机和鼠标位置来更新射线
    rayCaster.setFromCamera(mouse, camera);
    // 第二个参数表示是否检查他的后代
    const intersects = rayCaster.intersectObjects([scene], true);
    if (intersects.length > 0) {
      const object_name = intersects[0].object.name;
      // 是否显示卡片
      if (intersects.length === 0 || object_name === '' || object_name === 'line') {
        label.style.display = 'none';
        click = false;
        return;
      }
      switch (object_name.substring(0, 3)) {
        // truck
        case 'tru':
          dataInfo = [
            { key: '车辆名称', value: object_name },
            { key: '行驶公里数', value: Math.round(Math.random() * 20000) },
          ];
          showCard(label, x, y);
          break;
        // 普通住楼
        case 'dep':
          dataInfo = [
            { key: '楼栋名称', value: object_name },
            { key: '居住人数', value: Math.round(Math.random() * 20000) },
            { key: '楼栋层数', value: Math.round(Math.random() * 20000) },
            { key: '温馨提示:', value: '双击进入详情' },
          ];
          showCard(label, x, y);
          break;
        case 'car':
          dataInfo = [
            { key: '车辆名称', value: object_name },
            { key: '车牌', value: Math.round(Math.random() * 20000) },
          ];
          showCard(label, x, y);
          break;
        // 篮球场
        case 'bas':
          dataInfo = [
            { key: '场景', value: '篮球场' },
            { key: '是否空闲', value: '是' },
          ];
          showCard(label, x, y);
          break;
        case 'tre':
          dataInfo = [
            { key: '场景', value: object_name },
            { key: '健康数量', value: Math.round(Math.random() * 20000) },
            { key: '不健康数量', value: Math.round(Math.random() * 20000) },
          ];
          showCard(label, x, y);
          break;
        case 'htt':
          dataInfo = [
            { key: '场景', value: '停车场' },
            { key: '剩余车位', value: Math.round(Math.random() * 20000) },
            { key: '出入状态', value: Math.round(Math.random() * 20000) },
          ];
          showCard(label, x, y);
          break;
        case 'bus':
          dataInfo = [{ key: '名称', value: object_name }];
          showCard(label, x, y);
          break;
        case 'par':
          dataInfo = [
            { key: '名称', value: '停车场' },
            { key: '状态', value: '建设中' },
          ];
          showCard(label, x, y);
          break;
        case 'dev':
          dataInfo = [
            { key: '名称', value: '开发区' },
            { key: '状态', value: '建设中' },
          ];
          showCard(label, x, y);
          break;
        case 'pol':
          dataInfo = [
            { key: '名称', value: '警察局' },
            { key: '状态', value: '建设中' },
          ];
          showCard(label, x, y);
          break;
        case 'fir':
          dataInfo = [
            { key: '名称', value: '消防局' },
            { key: '状态', value: '建设中' },
          ];
          showCard(label, x, y);
          break;
        case 'hos':
          dataInfo = [
            { key: '名称', value: '医院' },
            { key: '状态', value: '建设中' },
          ];
          showCard(label, x, y);
          break;
        case 'big':
          dataInfo = [
            { key: '名称', value: '公园' },
            { key: '状态', value: '建设中' },
          ];
          showCard(label, x, y);
          break;
        case 'ban':
          dataInfo = [
            { key: '名称', value: '银行' },
            { key: '状态', value: '建设中' },
          ];
          showCard(label, x, y);
          break;
        case 'ufo':
          dataInfo = [
            { key: '名称', value: '飞碟停留处' },
            { key: '状态', value: '建设中' },
          ];
          showCard(label, x, y);
          break;
        case 'cin':
          dataInfo = [
            { key: '名称', value: '电影院' },
            { key: '状态', value: '建设中' },
          ];
          showCard(label, x, y);
          break;
        case 'mod':
          dataInfo = [
            { key: '名称', value: '摩天大楼' },
            { key: '状态', value: '建设中' },
          ];
          showCard(label, x, y);
          break;
        case 'ran':
          dataInfo = [
            { key: '名称', value: '学校' },
            { key: '状态', value: '建设中' },
          ];
          showCard(label, x, y);
          break;
        default:
          label.style.display = 'none';
          selectedObjects.pop();
          break;
      }
      if (object_name.includes('sprite')) {
        const parentDiv = document.createElement('div');
        parentDiv.className = 'parentVideo';
        parentDiv.style.position = 'absolute';
        parentDiv.style.display = 'none';
        parentDiv.style.backgroundColor = 'rgba(25, 25, 25, 0.5)';
        const titleDiv = document.createElement('div');
        titleDiv.style.cssText =
          'height: 24px;inline-height: 24px;float: left;color: #FFFFFF;font-size:20px;margin:10px 0 10px 20px';
        titleDiv.textContent = '监控录像';
        const closeDiv = document.createElement('div');
        closeDiv.className = 'videoImg';
        closeDiv.addEventListener('click', () => {
          const videoDiv = document.querySelectorAll('.parentVideo');
          //@ts-ignore
          for (const e of videoDiv) {
            e.remove();
          }
        });
        parentDiv.appendChild(titleDiv);
        parentDiv.appendChild(closeDiv);
        const videoLabel = document.createElement('video');
        videoLabel.autoplay = true;
        videoLabel.muted = true;
        videoLabel.controls = true;
        videoLabel.loop = true;
        videoLabel.style.width = '100%';
        videoLabel.style.height = '350px';
        const videoSource = document.createElement('source');
        videoSource.src = 'static/video/watch.mp4';
        videoSource.type = 'video/mp4';
        videoLabel.appendChild(videoSource);
        parentDiv.appendChild(videoLabel);
        document.body.appendChild(parentDiv);
        showCard(parentDiv, x, y);
      } else {
        // label.textContent = soName
        selectedObjects.pop();
        //@ts-ignore
        selectedObjects.push(intersects[0].object);
        outlinePass.selectedObjects = selectedObjects;
      }
      effectController = object_name;
      click = true;
    }
  }
  function onMouseDbClick(this: any, event) {
    if (event.changedTouches) {
      x = event.changedTouches[0].pageX;
      y = event.changedTouches[0].pageY;
    } else {
      x = event.clientX;
      y = event.clientY;
    }
    event.preventDefault();
    const vector = new THREE.Vector3(); //三维坐标对象
    vector.set(mouse.x, mouse.y, 0.5);
    vector.unproject(camera);
    const rect = container.getBoundingClientRect(); //拿到div相对屏幕坐标的偏移量
    //屏幕坐标转标准设备坐标(世界坐标系) x和y应在-1和1之间
    mouse.x = ((x - rect.left) / this.container.clientWidth) * 2 - 1;
    mouse.y = -((y - rect.top) / this.container.clientHeight) * 2 + 1;
    // 通过摄像机和鼠标位置更新射线 camera表示射线来源的摄像机
    rayCaster.setFromCamera(mouse, camera);
    const intersects = rayCaster.intersectObjects([scene], true);
    console.log(intersects,'intersects');
    // 第二个参数表示是否检查他的后代
    if (intersects[0].object.name) {
        vector.set(intersects[0].point.x, intersects[0].point.y, intersects[0].point.z);
        const targetCameraPosition = vector.clone().add(new THREE.Vector3(500, 500, 500));
        animateCamera(camera.position, controls.target, targetCameraPosition, vector.clone());
        // return;
    }
  }
};
