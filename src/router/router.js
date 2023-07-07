import {createRouter, createWebHashHistory} from 'vue-router'
import Index from '../views/index.vue'
import Home from "../views/home.vue"
import Login from '../views/login.vue'

const routes = [
    {
        path: "/",
        component: Index,
        name: "Index",
        children: [
            {
                path: "home",
                component: Home,
                name: "Home"
            }
        ]
    },{
        path: "/login",
        component: Login
    }
]

const router = createRouter({
    //路径上＋一个#
    history: createWebHashHistory(),
    routes
})

export default router
