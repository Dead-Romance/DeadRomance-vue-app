import Vue from 'vue'
import Router from 'vue-router'
// import * as routes from './router'
import config from './router'

Vue.use(Router)


const router = new Router({
    mode: 'hash', // hash 线下 history 线上
    base: process.env.BASE_URL,
    routes: config,
})

router.beforeEach((to, from, next) => {
    next()
})


export default router