import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home/Home'
import Login from '@/components/Login/Login'
import DoctorSettings from '@/components/DoctorSettings/DoctorSettings'
import FilialSettings from '@/components/FilialSettings/FilialSettings'
import store from '@/store'




Vue.use(VueRouter)

const isAuthenticated = () => {  return !store.getters["Login/isAnonim"];};



const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },

        {
            path: '/login',
            component: Login
        },

        {
            path: '/doctor-settings',
            component: DoctorSettings,
            meta: {
                requiresAuth: true,
            },
        },

        {
            path: '/filial-settings',
            component: FilialSettings,
            meta: {
                requiresAuth: true,
            },
        },
    ],
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((route) => route.meta?.requiresAuth)) {

        if (isAuthenticated()) {
            next();
        } else {
            next("/");
        }
    } else {
        next();
    }
});

export default router;