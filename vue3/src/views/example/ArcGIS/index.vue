<template>
  <ComponentPage>
    <template #header>
      <h2 text-22 font-normal text-hex-333 dark:text-hex-ccc>ArcGis</h2>
    </template>
    <template #default>
      <div id="viewDiv"></div>
    </template>
  </ComponentPage>
</template>

<script setup lang="ts">
import esriConfig from "@arcgis/core/config.js";
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import Graphic from "@arcgis/core/Graphic.js";
import '@arcgis/core/assets/esri/themes/light/main.css';
onMounted(() => {
  initMap();
});
const initMap = () => {
    //q:我的key应该在那儿调用
    esriConfig.apiKey = "AAPK54b0c0d11341479eb79685174bd2e4410labXiwiHQUITb3IwalzUkkg1-Mj85koUCYFS419S1hHVg5RDRFl4qDWb6l_YrCc";
  const map = new Map({
    basemap: "arcgis-topographic",
  });
  const view = new MapView({
    container: "viewDiv", //html容器，即将地图添加到哪个容器里
    map: map,
    zoom: 4,
  });
  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);
  //点图形
  const point = {
    //Create a point
    type: "point",
    longitude: -118.80657463861,
    latitude: 34.0005930608889,

  };
  //点样式
  const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // White
      width: 1,
    },
  };
  //弹窗
  const popupTemplate = {
    title: "{Name}",
    content: "{Description}"
 }
 //属性
 const attributes = {
    Name: "Graphic",
    Description: "我是一个点样式"
 }
  const pointGraphic = new Graphic({
    geometry: point as GeometryProperties,
    symbol: simpleMarkerSymbol,
    attributes: attributes,
    popupTemplate: popupTemplate
  });
  graphicsLayer.add(pointGraphic);
};
</script>

<style scoped>
#viewDiv {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
