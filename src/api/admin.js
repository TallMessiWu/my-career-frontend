//Warning
import axios from '../axios'
export function login(username, password){
    //运用正则表达式判断用户输入的是用户名还是邮箱
    const emailRegex = /^\S+@\S+$/
    if(username.match(emailRegex)){
        console.log("Email login")
        //TODO: 处理邮箱登录
        return null
    }else{
        return axios.post("/admin/login", {
            username,
            password
        })
    }
}