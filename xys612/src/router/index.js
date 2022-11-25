import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

const HomePage = () => import('@/views/HomePage')
// const HelloWorld = () => import('@/components/HelloWorld')

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
]

const router = new VueRouter({
    routes,
    mode: 'hash',
})

export default router;