<template>
  <div id="map"></div>
</template>

<script setup lang="ts">
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import TileLayer from 'ol/layer/Tile.js';
  import OSM from 'ol/source/OSM.js';
  new Map({
    view: new View({
      center: [0, 0],
      zoom: 1,
    }),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
  });
</script>

<style scoped lang="scss">
  #map {
    width: 100%;
    height: 100%;
  }
</style>
