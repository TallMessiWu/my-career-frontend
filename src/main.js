import {createApp} from 'vue'
import './index.less'
import App from './App.vue'
import router from './router/router.js'
import axios from 'axios'
import 'virtual:windi.css'
//import {classified} from './classified.js'

const app = createApp(App)

//classfied.js我这边引入不来，应该有alternatives
//axios.defaults.baseURL = classified.backendAddress
app.provide('axios', axios)

app.use(router)

app.mount('#app')
