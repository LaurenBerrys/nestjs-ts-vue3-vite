<!--
 * @Author: Nie Chengyong
 * @Date: 2023-03-06 21:46:56
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-13 10:36:33
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/webgis/src/webgis.vue
 * @Description: 
 * 
-->
 <template>
    <div id="map">

    </div>
</template>

<script setup lang="ts">
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';

const map = new Map({
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
#map{
    width: 100%;
    height: 100%;
}
</style> -->