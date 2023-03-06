<!--
 * @Author: Nie Chengyong
 * @Date: 2023-02-13 19:56:31
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-04 11:56:00
 * @FilePath: /nestjs-ts-vue3-vite/vue3/README.md
 * @Description: 
 * 
-->
## 使用 iconify 图标

首先去图标库地址：[icones](https://icones.js.org/) 找合适的图标

### 1. 结合 unocss 使用

```html
<i i-carbon-sun />
<i class="i-carbon-sun" />
```

### 2. 结合插件 unplugin-icons 自定义标签使用

`<icon-[iconify图标名称]`

```html
<icon-ant-design:fullscreen-exit-outlined  />
<icon-ant-design:fullscreen-outlined />
```

这种方式还支持自定义 svg 图标，本项目自定义 svg 图标固定放在 src/assets/svg 下

`<icon-custom-[svg图标文件名]`

```
<icon-custom-logo />
```

### 3. 结合 Naive UI 的 NIcon 组件封装使用

```html
<!-- iconify图标 -->
<TheIcon icon="material-symbols:delete-outline" />
<!-- 自定义svg图标 -->
<TheIcon icon="logo" type="custom" />
```

封装组件参看 src/components/icon
### 4 使用UnoCss
[保熟的UnoCSS使用指北，优雅使用antfu大佬的原子化CSS](https://juejin.cn/post/7142466784971456548)
### 5 使用ArcGis
npm install @arcgis/core
