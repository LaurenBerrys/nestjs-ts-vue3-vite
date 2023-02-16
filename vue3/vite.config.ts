/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-13 19:56:31
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-16 16:55:37
 * @FilePath: /nestjs-ts-vue3-vite/vue3/vite.config.ts
 * @Description: 
 * 
 */
import { fileURLToPath, URL } from "node:url";
import { ConfigEnv,UserConfig,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend' //setup 支持name属性
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
/**
 * * unplugin-icons插件，自动引入iconify图标
 * usage: https://github.com/antfu/unplugin-icons
 * 图标库: https://icones.js.org/
 */

import { resolve } from 'path'
import unocss from 'unocss/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

const customIconPath = fileURLToPath(new URL("./src/assets/svg", import.meta.url))
const nodeResolve = (dir) => path.resolve(__dirname, dir)
// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig =>{
  const IS_PROD = ['prod', 'production'].includes(mode)
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  }
  const resolve = {
    alias: {
      '@': fileURLToPath(new URL("./src", import.meta.url)),
      '~':fileURLToPath(new URL("./public", import.meta.url)),
    },
  }
 
 const server= {
    port: 3001,  
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
  const  css={
    //scss变量问题
    preprocessorOptions: {
      scss:{
        additionalData: `@import "./src/assets/variables.scss";`
      }
  }}
  
let  plugins= [
    //setup 支持name属性
    vueSetupExtend(),
    vueJsx(),
    vue(),
    unocss(),
    //自动导入
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          'pinia/dist/pinia': ['storeToRefs']
        },
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ],
       dirs: ['src/hooks/**', 'src/utils/**', 'src/store/**', 'src/api/**', 'src/directives/**'],
      dts: './typings/auto-imports.d.ts'
    }),
    Components({
      resolvers: [NaiveUiResolver(),
        IconsResolver({ customCollections: ['custom'], componentPrefix: 'icon' })
      ]
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
  ]
  if (IS_PROD) {
    plugins = [...plugins, visualizer()]
  }
  return {
    plugins,
    resolve,
    css,
    server,
  }
}