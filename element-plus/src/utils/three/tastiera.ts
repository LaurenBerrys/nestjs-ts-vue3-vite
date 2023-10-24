/*
 * @Author: LaurenBerrys 949154547@qq.com
 * @Date: 2023-04-08 18:06:23
 * @LastEditTime: 2023-04-12 16:16:55
 * @Description:
 */
//绑定键盘事件
let playerOnFloor = false;
let keyStates = {};
let mouseDown=false;
let lastX = 0;
let lastY = 0;
const handleKeyDown = (THREE,cartier,camera) => {
  document.addEventListener('keydown', (e) => {
    keyStates[e.code] = true;
  });
  document.addEventListener('keyup', (e) => {
    keyStates[e.code] = false;
  });
  document.addEventListener('mousedown', (e) => {
    mouseDown = true
    lastX = e.clientX
    lastY = e.clientY
  })
  document.addEventListener('mouseup', (e) => {
    mouseDown = false
  })
  document.addEventListener('mousemove', (e) => {
    if (mouseDown) {
      const dx = e.clientX - lastX
      const dy = e.clientY - lastY
      lastX = e.clientX
      lastY = e.clientY
      const sensitivity = 0.002 // 鼠标灵敏度
      const yaw = dx * sensitivity
      const pitch = dy * sensitivity
      const direction = camera.getWorldDirection(new THREE.Vector3())
      const quaternion = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(0, 1, 0),
        yaw
      )
      direction.applyQuaternion(quaternion)
      const axis = new THREE.Vector3().crossVectors(direction, new THREE.Vector3(0, 1, 0))
      const pitchQuaternion = new THREE.Quaternion().setFromAxisAngle(axis, pitch)
      direction.applyQuaternion(pitchQuaternion)
      // cartier.position.set(direction.x,cartier.position.y,direction.z)
    }
  })
};
const handleControls=(deltaTime,cartier,controls,camera,player,THREE)=>{
  handleKeyDown(THREE,cartier,camera);
    const speedDelta = deltaTime*100
    if (keyStates['KeyW']) {
        //前进，人物随着镜头前进，镜头根据鼠标移动而移动
        // const direction = camera.getWorldDirection(new THREE.Vector3())
        // const forwardDirection = new THREE.Vector3(
        //   direction.x,
        //   0,
        //   direction.z
        // ).normalize()
        // cartier.position.set(forwardDirection.multiplyScalar(speedDelta).x,
        // cartier.position.y,forwardDirection.multiplyScalar(speedDelta).z)
        cartier.translateZ(speedDelta);
        //前进，人物和镜头都要前进
        camera.position.set(cartier.position.x, cartier.position.y+100, cartier.position.z+20);
        //将人物的位置赋值给控制器
        controls.target.set(cartier.position.x, cartier.position.y+100, cartier.position.z+20);
        //将相机的位置赋值给控制器
        controls.object.position.set(cartier.position.x, cartier.position.y+100, cartier.position.z+180);
        //将控制器的位置赋值给相机
        camera.lookAt(controls.target);
        controls.update();
    }
    if (keyStates['KeyS']) {
        cartier.translateZ(-speedDelta);
        // player.velocity.add(getForwardVector().multiplyScalar(-speedDelta));
        // updatePlayer()
        //后退，人物和镜头都要后退
        camera.position.set(cartier.position.x, cartier.position.y+100, cartier.position.z+20);
        //将人物的位置赋值给控制器
        controls.target.set(cartier.position.x, cartier.position.y+100, cartier.position.z+20);
        //将相机的位置赋值给控制器
        controls.object.position.set(cartier.position.x, cartier.position.y+100, cartier.position.z+180);
        //将控制器的位置赋值给相机
        camera.lookAt(controls.target);
        controls.update();
    }
    if (keyStates['KeyA']) {
        //左移，人物和镜头都要左移
         cartier.translateX(speedDelta);
        //  player.velocity.add(getSideVector().multiplyScalar(speedDelta));
        //  updatePlayer()
        camera.position.set(cartier.position.x, cartier.position.y+100, cartier.position.z+20);
        //将人物的位置赋值给控制器
        controls.target.set(cartier.position.x, cartier.position.y+100, cartier.position.z+20);
        //将相机的位置赋值给控制器
        controls.object.position.set(cartier.position.x, cartier.position.y+100, cartier.position.z+180);
        //将控制器的位置赋值给相机
        camera.lookAt(controls.target);
        controls.update();
    }
    if (keyStates['KeyD']) {
        //右移，人物和镜头都要右移
        cartier.translateX(-speedDelta);
        // player.velocity.add(getSideVector().multiplyScalar(-speedDelta));
        //  updatePlayer()
        camera.position.set(cartier.position.x, cartier.position.y+100, cartier.position.z+20);
        //将人物的位置赋值给控制器
        controls.target.set(cartier.position.x, cartier.position.y+100, cartier.position.z+20);
        //将相机的位置赋值给控制器
        controls.object.position.set(cartier.position.x, cartier.position.y+100, cartier.position.z+180);
        //将控制器的位置赋值给相机
        camera.lookAt(controls.target);
        controls.update();
    }
    function updatePlayer() {
        const damping = Math.exp(- 4 * deltaTime) - 1;
        player.velocity.addScaledVector(player.velocity, damping);
        // 位移距离
        const deltaPosition = player.velocity.clone().multiplyScalar(deltaTime);
        player.geometry.translate(deltaPosition);
        // 相机的位置，拷贝player的位置
        camera.position.copy(player.geometry.end);
        }
              // 获得前进方向向量
function getForwardVector() {
    camera.getWorldDirection(player.direction);
    player.direction.y = 0;
    // 转化为单位向量
    player.direction.normalize();
    return player.direction;
  }
  // 获得左右方向向量
  function getSideVector() {
    // Camera.getWorldDirection ( target : Vector3 ) : Vector3 调用该函数的结果将赋值给该Vector3对象。
    camera.getWorldDirection(player.direction);
    player.direction.y = 0;
    // 将该向量转换为单位向量（unit vector）， 也就是说，将该向量的方向设置为和原向量相同，但是其长度（length）为1。
    player.direction.normalize();
    player.direction.cross(camera.up);
    return player.direction;
  }

}
//绘制按钮
/**
 * @description: 
 * @param {*} THREE 插件
 * @param {*} scene 场景
 * @param {*} cartier 人物
 * @param {*} controls 控制器
 * @param {*} camera 相机
 * @return {*}
 */
const drawButton = (THREE,scene,cartier,controls,camera) => {
    //绘制一个div里面有3个按钮，1个是第一人称，一个是第三人称，一个是观察者模式,在给他们添加点击事件
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.top = '10px';
    div.style.left = '10px';
    // const firstPerson = document.createElement('button');
    // firstPerson.innerText = '第一人称';
    // firstPerson.style.margin = '10px';
    const thirdPerson = document.createElement('button');
    thirdPerson.innerText = '第三人称';
    thirdPerson.style.margin = '10px';
    // const observer = document.createElement('button');
    // observer.innerText = '观察者模式';
    // observer.style.margin = '10px';
    // div.appendChild(firstPerson);
    div.appendChild(thirdPerson);
    // div.appendChild(observer);
   const container_box= document.getElementsByClassName('container_box')
   //在container_box里面添加div
    container_box[0].appendChild(div);
    //第一人称
    // firstPerson.addEventListener('click', () => {
        
    //  })
    //第三人称
    thirdPerson.addEventListener('click', () => {
        console.log('第三人称');
        console.log(cartier);
        controls.enabled = false;
        //将人物的位置赋值给相机
        camera.position.set(cartier.position.x, cartier.position.y+100, cartier.position.z+20);
        //将人物的位置赋值给控制器
        controls.target.set(cartier.position.x, cartier.position.y+100, cartier.position.z+20);
        //将相机的位置赋值给控制器
        controls.object.position.set(cartier.position.x, cartier.position.y+100, cartier.position.z+180);
        //将控制器的位置赋值给相机
        camera.lookAt(controls.target);
        controls.update();
        controls.enabled = true;
    })
    // //观察者模式
    // observer.addEventListener('click', () => {
    //     console.log('观察者模式');
    // })
}


export { handleKeyDown,drawButton,handleControls}