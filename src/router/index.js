import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/InfoEdecri.vue'
import Login from '../views/Login.vue'
import { Role } from '../helpers/helpersRole'
import User from '../views/User.vue'
import Report from '../views/Report.vue'
import ReportCommets from '../views/ReportComments.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { authorize: [Role.user, Role.admin] }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/user',
        name: 'User',
        component: User,
        meta: { authorize: [Role.user, Role.admin] }
    },
    {
        path: '/report',
        name: 'Report',
        component: Report,
        meta: { authorize: [Role.user, Role.admin] }
    },
    {
        path: '/reportComments',
        name: 'ReportCommets',
        component: ReportCommets,
        meta: { authorize: [Role.user, Role.admin] }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const { authorize } = to.meta
    const currentUser = localStorage.type

    if (authorize) {
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return next({ path: '/login', query: { returnUrl: to.fullPath } })
        }
        // check if route is restricted by role authorize.includes(currentUser.role)
        if (authorize.length && !authorize.some((r) => currentUser == r)) {
            // role not authorised so redirect to home page
            return next({ path: '/' })
        }
    }
    next()
})

export default router
