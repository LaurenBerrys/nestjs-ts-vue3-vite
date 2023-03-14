/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-13 10:31:55
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-13 10:32:02
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/components/webgis/src/gis/index.ts
 * @Description: 
 * 
 */
// proj4 配置
import './config/proj4';

// ol styles
import 'ol/ol.css';

// ol custom styles
import './styles/index.scss';

import { default as GIS } from './core/map';
export default GIS;
