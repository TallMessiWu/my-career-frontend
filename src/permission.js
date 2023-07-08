import router from '~/router/router'
import { getToken } from '~/composables/auth'
import { notify } from '~/composables/util'

//全局前置守卫
router.beforeEach(async(to, from, next)=>{
    console.log("here")
    const token = getToken()
    if(!token && to.path != '/login' && to.path != 'signup' && to.path != 'forgotPassword'){
        notify("Login to start the journey", "error")
        return next({ path: '/login'})
    }

    //防止重复登录
    if(token && to.path == '/login'){
        notify("You have already logged in")
        return next({ path:from.path ? from.path : '/'})
    }

    next()
})
