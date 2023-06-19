import {createRouter, createWebHistory} from 'vue-router'
import Index from '../views/index.vue'
import Home from "../views/home.vue";

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
