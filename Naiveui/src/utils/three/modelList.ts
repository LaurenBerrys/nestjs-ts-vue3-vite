import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";
// 加载消防局
export const initFirestation = (scene) => {
  return new GLTFLoader()
    .setPath("/static/obj/fire_station/")
    .load("scene.gltf", (gltf) => {
      const fireStation = gltf.scene;
      fireStation.scale.set(60, 60, 60);
      fireStation.traverse((res:any) => {
        res.name = "fireStation";
        if (res.type === "Mesh") {
          res.material.emissive = res.material.color;
          res.material.emissiveMap = res.material.map;
        }
      });
      fireStation.rotateY(-Math.PI / 2);
      fireStation.position.set(1100, 10, 850);
      scene.add(fireStation);
    });
};
// 加载消防车
export const initFirecar = (scene) => {
  return new GLTFLoader()
    .setPath("/static/obj/fire_truck_toy_model/")
    .load("scene.gltf", (gltf) => {
      const fireStation = gltf.scene;
      fireStation.scale.set(2, 2, 2);
      fireStation.traverse((res:any) => {
        res.name = "fireCar";
        if (res.type === "Mesh") {
          res.material.emissive = res.material.color;
          res.material.emissiveMap = res.material.map;
        }
      });
      fireStation.position.set(1100, 10, 400);
      scene.add(fireStation, fireStation.clone().translateZ(1300));
    });
};
// 加载救护车
export const initAmbulance = (scene) => {
  return new GLTFLoader()
    .setPath("/static/obj/ambulance/")
    .load("scene.gltf", (gltf) => {
      const ambulance = gltf.scene;
      ambulance.scale.set(60, 60, 60);
      ambulance.traverse((res:any) => {
        res.name = "ambulance";
        if (res.type === "Mesh") {
          res.material.emissive = res.material.color;
          res.material.emissiveMap = res.material.map;
        }
      });
      ambulance.rotateY(-Math.PI / 2);
      ambulance.position.set(-1800, 10, -500);
      scene.add(ambulance, ambulance.clone().translateX(-1400));
    });
};
// 加载无人机
export const initFly = (scene, mixer) => {
  return new GLTFLoader().setPath("/static/obj/").load("fly.glb", (gltf) => {
    const flyObj = gltf.scene;
    flyObj.scale.set(8, 8, 8);
    flyObj.position.set(0, 650, 0);
    scene.add(flyObj);
    flyObj.rotateY(Math.PI / 2);
    flyObj.traverse(function (child:any) {
      if (child.type === "Mesh") {
        child.material.emissive = child.material.color;
        child.material.emissiveMap = child.material.map;
      }
    });
    mixer = new THREE.AnimationMixer(flyObj);
    const AnimationAction = mixer.clipAction(gltf.animations[0]);
    AnimationAction.timeScale = 2;
    AnimationAction.play();
  });
};
// 加载学校
export const initSchool = (scene) => {
  return new GLTFLoader()
    .setPath("/static/obj/suankularb_wittayalai_rangsit_school/")
    .load("scene.gltf", (gltf) => {
      const school = gltf.scene;
      school.scale.set(8, 8, 8);
      school.traverse((res) => {
        res.name = "rangsit_school";
      });
      school.rotateY((Math.PI * 3) / 2);
      school.position.set(-2600, 20, -4230);
      scene.add(school);
    });
};
export const  initCJ=(scene)=>{
  return new Promise((resolve)=>{
  return new GLTFLoader()
  .setPath("/static/obj/")
  .load("untitled1.gltf",(gltf)=>{
    const CJ = gltf.scene;
    CJ.scale.set(50, 50, 50);
    CJ.position.set(-400, 10, 1900);
    scene.add(CJ);
    CJ.rotateY(Math.PI );
    CJ.traverse(function (child:any) {
      if(child.type==="SkinnedMesh"){
      child.name = "人物";
      child.material.emissive = child.material.color;
      child.material.emissiveMap = child.material.map;
      }
    })
    resolve(CJ)
  })
})
}
// 加载建筑物
export const initModernBuilding = (scene) => {
  return new GLTFLoader()
    .setPath("/static/obj/modern_building_002/")
    .load("scene.gltf", (gltf) => {
      const modern_building = gltf.scene;
      modern_building.scale.set(4, 3, 3);
      modern_building.traverse((res:any) => {
        res.name = "modern_building";
        if (res.type === "Mesh") {
          res.material.emissive = res.material.color;
          res.material.emissiveMap = res.material.map;
        }
      });
      modern_building.rotateY(Math.PI);
      modern_building.position.set(-800, 16, -3430);
      scene.add(modern_building);
    });
};
// 加载电影院
export const initCinema = (scene) => {
  return new GLTFLoader()
    .setPath("/static/obj/cinema/")
    .load("scene.gltf", (gltf) => {
      const cinema = gltf.scene;
      cinema.rotateY(-Math.PI / 3);
      cinema.traverse(function (child:any) {
        child.name = "cinema";
        if (child.type === "Mesh") {
          child.material.emissive = child.material.color;
          child.material.emissiveMap = child.material.map;
        }
      });
      cinema.scale.set(200, 200, 200);
      cinema.position.set(-1900, 16, -2830);
      scene.add(cinema);
    });
};
// 加载银行
export const initBank = (scene) => {
  return new GLTFLoader()
    .setPath("/static/obj/low_poly_bank/")
    .load("scene.gltf", (gltf) => {
      const hospitalobj = gltf.scene;
      hospitalobj.scale.set(48, 75, 75);
      hospitalobj.traverse((res) => {
        res.name = "bank";
      });
      hospitalobj.position.set(-2260, 0, -1200);
      scene.add(hospitalobj);
    });
};
// 加载公园
export const initPark = (scene) => {
  return new GLTFLoader()
    .setPath("/static/obj/playground_-_childrens_park_-_3d/")
    .load("scene.gltf", (gltf) => {
      const police = gltf.scene;
      police.scale.set(25, 45, 25);
      police.traverse((res:any) => {
        res.name = "bigPark";
        if (res.type === "Mesh") {
          res.material.emissive = res.material.color;
          res.material.emissiveMap = res.material.map;
        }
      });
      police.rotateY(Math.PI / 2);
      police.position.set(-2000, 0, 730);
      scene.add(police);
    });
};
// 加载ufo
export const initUfo = (scene) => {
  return new GLTFLoader()
    .setPath("/static/obj/low_poly_ufo_scene/")
    .load("scene.gltf", (gltf) => {
      const fireStation = gltf.scene;
      fireStation.scale.set(0.5, 0.5, 0.4);
      fireStation.traverse((res) => {
        res.name = "ufo";
      });
      fireStation.rotateY(-Math.PI / 2);
      fireStation.position.set(1300, 10, 1050);
      scene.add(fireStation);
    });
};