// 首页
/**
 * test 
 import homeC from './chilren/homeChilren'
 import userC from './chilren/userChilren'
 */



// 子页面存放数组中
const CHILRENROUTER = [ /** homeC, userC */ ]

// 主页面配置
const config = [{
        path: '/Index',
        redirect: '/'
    }, {
        name: 'Index',
        path: '/',
        component: () => import('../views/Yun.vue')
    },
    {
        name: 'Apple',
        path: '/Apple',
        component: () => import('../views/Apple.vue')
    },
    {
        name: 'Android',
        path: '/Android',
        component: () => import('../views/Android.vue')
    },
]

// 错误页面
const error = [{
    name: '404',
    path: '*',
    component: r => require.ensure([], () => r(require('../views/404.vue')), 'error_404')
}]





export default config.concat([...handleArrRoute(CHILRENROUTER)], error)



// 处理子路由添加 router 格式
function handleArrRoute(array) {
    let nullArr = []
    if (array.length == 0) {
        return nullArr
    }
    array.forEach(arrChilren => {
        arrChilren.forEach(objChilren => {
            nullArr.push(objChilren)
        })
    });

    return nullArr
}