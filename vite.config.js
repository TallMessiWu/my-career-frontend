import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import path from "path"
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
    resolve:{
        alias:{
            //~路径代表src
          "~": path.resolve(__dirname, "src")
        }
    },
    base: "./",
    server: {
        port: 5137,
        //TODO:临时
        proxy:{
            '/api': {
              target: 'http://ceshi13.dishait.cn',
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    plugins: [
        vue(),
        WindiCSS(),
        AutoImport({
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    prefix: 'Icon',
                })
            ],
        }),
        Components({
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    enabledCollections: ['ep'],
                })
            ],
        }),
        Icons({
            autoInstall: true,
        })
    ],
})


