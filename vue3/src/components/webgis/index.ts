export {
  webgisInjectPrivate,
  webgisProvidePrivate,
  webgisInjectPublic,
  webgisProvidePublic,
} from './common';

// 更新服务配置
export { updateServerConfig } from './gis/config/server-api';

// 更新图层字典值
export { updateAliasMap } from './gis/config/alias';

// 注册 Proj4
export { registerProj4 } from './gis/config/proj4';

// 主组件
import WebGIS from './components';

// Vue.component()
export default WebGIS;
