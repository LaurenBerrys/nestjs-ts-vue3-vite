import Vue from 'vue';

// styles
import './styles/public.scss';

// mixins
import webgisInitCommon from './mixins/webgis-init-common';

// 对外事件中心 - 全局的（存在于应用中共享）
const eventHub = new Vue();
const eventName = 'publicWebgisReady';

// webgis 初始化注册用的 mixin 对象
export const webgisProvidePublic = {
  mixins: [webgisInitCommon],
  initWebgis(webgis) {
    eventHub.$emit(eventName, webgis); // emit inject
    this._afterInitWebgis(webgis);
  },
};

// webgis 初始化注入用的 mixin 对象
export const webgisInjectPublic = {
  mixins: [webgisInitCommon],
  methods: {
    _initWebgis(webgis) {
      // cancel event listener
      eventHub.$off(eventName, this._initWebgis);
      this._afterInitWebgis(webgis);
    },
  },
  created() {
    eventHub.$on(eventName, this._initWebgis);
  },
};

// 对外事件中心 - 私有的（存在与 webgis 当前的组件范围内）
export {
  webgisProvide as webgisProvidePrivate,
  webgisInject as webgisInjectPrivate,
} from './mixins/webgis-init';
