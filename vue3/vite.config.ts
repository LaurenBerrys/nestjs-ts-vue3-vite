/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-13 19:56:31
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-15 17:43:22
 * @FilePath: /nestjs-ts-vue3-vite/vue3/vite.config.ts
 * @Description: 
 * 
 */
import { ConfigEnv,UserConfig,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend' //setup 支持name属性
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'

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
      '@': nodeResolve('src'),
      '~': nodeResolve('public'),
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
      resolvers: [NaiveUiResolver()]
    })
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