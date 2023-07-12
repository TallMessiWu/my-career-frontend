import axios from "axios"
import { notify } from '~/composables/util'
import { getToken } from '~/composables/auth'

const service = axios.create({ 
    baseURL: "/api",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

//请求拦截器
// service.interceptors.request.use(function(config){
//     console.log('请求拦截器')
//     const token = getToken()
//     if(token) config.headers["token"] = token
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// })

// service.interceptors.response.use(function(response){
//     console.log('响应拦截器')
//     return response.data.data;
// }, function(error){
//     notify(error.response.data.msg || "Request failed", "error")
//     return Promise.reject(error)
// })

export default service