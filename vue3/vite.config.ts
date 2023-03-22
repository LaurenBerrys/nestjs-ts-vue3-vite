/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-13 19:56:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-22 12:23:38
 * @FilePath: /nestjs-ts-vue3-vite/vue3/vite.config.ts
 * @Description:
 *
 */
import { fileURLToPath, URL } from 'node:url';
import { ConfigEnv, UserConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
//自动引入
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
//setup 支持name属性
import vueSetupExtend from 'vite-plugin-vue-setup-extend'; //setup 支持name属性
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueMacros from 'unplugin-vue-macros/vite'; //宏指令 https://vue-macros.sxzz.moe/guide/configurations.html
import { transformShortVmodel } from '@vue-macros/short-vmodel'; //配置简写v-model
//打包分析插件
import { visualizer } from 'rollup-plugin-visualizer';
//消除 JavaScript 代码中未使用的死代码。
// npm install terser-webpack-plugin -D
import { terser } from 'rollup-plugin-terser';
//开启gizp压缩
import compressionPlugin from 'vite-plugin-compression';

/**
 * * unplugin-icons插件，自动引入iconify图标
 * usage: https://github.com/antfu/unplugin-icons
 * 图标库: https://icones.js.org/
 */
import unocss from 'unocss/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';

const customIconPath = fileURLToPath(new URL('./src/assets/svg', import.meta.url));
export default ({ mode }: ConfigEnv): UserConfig => {
  console.log('mode', mode);
  const IS_PROD = ['prod', 'production'].includes(mode);
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };
  const base = './';
  const resolve = {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./public', import.meta.url)),
    },
  };
  const server = {
    host: true,
    //配置跨域
    port: 3001,
    open: true,
    proxy: {
      '/nest-api': {
        changeOrigin: true,
        target: 'http://192.168.31.151:3000/',
      },
    },
  };
  const css = {
    //scss变量问题
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/variables.scss";`,
      },
    },
  };

  let plugins = [
    vueJsx(),
    VueMacros({
      plugins: {
        vue: vue({
          template: {
            compilerOptions: {
              // isCustomElement: tag => (console.log('tag', tag)),
              nodeTransforms: [
                transformShortVmodel({
                  prefix: '::',
                }),
              ],
            },
          },
        }),
      },
    }),
    // vue(),
    compressionPlugin({
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: false, //是否删除源文件
      threshold: 10240, //文件大小大于10kb时启用压缩
    }),
    terser({
      format: {
        comments: false, // <-- 将去除所有的注释
      },
      compress: {
        ecma: 2015, // 使用 ECMAScript 2015 压缩
        comparisons: false, //禁止删除 instanceof 操作符
        drop_console: IS_PROD, // 去掉所有 console
      },
    }),
    //setup 支持name属性
    vueSetupExtend(),

    unocss(),
    //自动导入
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          'pinia/dist/pinia': ['storeToRefs'],
        },
        {
          'naive-ui': ['NInput', 'useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
        },
      ],
      dirs: [
        'src/hooks/**',
        'src/utils/**',
        'src/store/**',
        'src/api/**',
        'src/directives/**',
        'src/enums/**',
      ],
      dts: './typings/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      resolvers: [
        NaiveUiResolver(),
        IconsResolver({
          customCollections: ['custom'],
          componentPrefix: 'icon',
        }),
      ],
      dts: './typings/components.d.ts',
    }),
    Icons({
      compiler: 'vue3',
      customCollections: {
        custom: FileSystemIconLoader(customIconPath),
      },
      scale: 1,
      defaultClass: 'inline-block',
    }),
    createSvgIconsPlugin({
      iconDirs: [customIconPath],
      symbolId: 'icon-custom-[dir]-[name]',
      inject: 'body-last',
      customDomId: '__CUSTOM_SVG_ICON__',
    }),
    // legacy({
    //   targets: ['chrome80'],
    //   modernPolyfills: true
    // })
  ];
  if (IS_PROD) {
    plugins = [...plugins, visualizer()];
  }
  // const optimizeDeps= {
  //   include:['@arcgis/core'],
  // }

  const build = {
    outDir: 'dist', //打包后的目录
    // terser:['chrome87'], //js兼容浏览器
    // cssTarget: ['chrome80'],//css兼容浏览器
    cssCodeSplit: true, //css代码分割
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    minify: IS_PROD, //代码混淆
    sourcemap: !IS_PROD, //构建后是否生成 source map 文件。
    /* 禁用默认行为 */
    preserveModules: true,
    rollupOptions: {
      output: {
        //有许多依赖项被多个页面或入口使用，
        // 可能就需要手动地将它们放到一个公共块(common chunk)中，在这种情况下可以使用
        manualChunks: {
          vue: ['vue'],
          'vue-router': ['vue-router'],
          axios: ['axios'],
          'vue-i18n': ['vue-i18n'],
          NvapForm: ['./src/components/Form/src/NvapForm.vue'],
          NvapTable: ['./src/components/Table/src/NvapTable.vue'],
          NvapModal: ['./src/components/Modal/src/NvapModal.vue'],
        },
        entryFileNames: 'js/[name].[hash].js', //入口文件名
        chunkFileNames: 'js/[name].[hash].js', //非入口文件名
        assetFileNames: 'assets/[name].[hash][extname]', //资源文件名
      },
      // //多页面配置
    },
    //optimizeDeps 是用来优化模块依赖的构建选项，其会静态地分析源代码，
    //识别并序列化模块（包括 .js 、.css、json、wasm 等文件）之间的依赖关系。
    optimizeDeps: {
      //默认情况下，不在 node_modules 中的，链接的包不会被预构建。使用此选项可强制预构建链接的包。
      //include：如果只需要优化部分依赖，可以使用 include 来指定需要优化的依赖。
      //include默认优化package.json中的依赖,尽量不要修改
      exclude: ['@types/node'],
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 2000,
  };
  return {
    build,
    base,
    plugins,
    resolve,
    css,
    server,
  };
};
