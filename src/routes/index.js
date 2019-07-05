import Vue from 'vue'
import Router from 'vue-router'
// 路由拦截器
import routerIntercep from './intercep'
// 路由组件
import config from './router'

Vue.use(Router)


const router = new Router({
    mode: 'hash', // hash 线下 history 线上
    base: process.env.BASE_URL,
    routes: config,
})

// 路由拦截器
routerIntercep(router)


export default router