import {createApp} from 'vue'
import './index.less'
import App from './App.vue'
import 'element-plus/dist/index.css'
import router from './router/router.js'
import axios from 'axios'
import 'virtual:windi.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './permission'
//import {classified} from './classified.js'

const app = createApp(App)

//classfied.js我这边引入不来，应该有alternatives
//axios.defaults.baseURL = classified.backendAddress
app.provide('axios', axios)

app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
