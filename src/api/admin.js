import service from '~/axios'

//const url = 'http://127.0.0.1:5000'

export function login(username, password){
    //运用正则表达式判断用户输入的是用户名还是邮箱
    const emailRegex = /^\S+@\S+$/
    if(username.match(emailRegex)){
        console.log("Email login")
        //TODO: 处理邮箱登录
        return null
    }else{
        return service.post("/auth/login", {
            username,
            password
        })
    }
}


export function signup(username, password,re_password, email){
    return service.post("/auth/register",{
        username,
        password,
        re_password,
        email
    })
}