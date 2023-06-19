import {createApp} from 'vue'
import './index.less'
import App from './App.vue'
import router from './router/router.js'
import axios from 'axios'
import {classified} from "./classified.js";

const app = createApp(App)

axios.defaults.baseURL = classified.backendAddress
app.provide('axios', axios)

app.use(router)

app.mount('#app')
