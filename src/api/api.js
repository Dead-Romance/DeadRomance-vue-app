'use strict'
import Vue from 'vue'
import {
    apiGet,
    apiPost
} from './http'

const config = {
    BASEURL: 'https://whby666.com/api'
}

const API = {
    loginTest: '/user/login',
    logo: '/index/logo',
}

for (const key in API) {
    API[key] = config.BASEURL + API[key]
}

const ApiPost = {
    // 登录
    login(params, callback) {
        let data = params
        apiPost(API.loginTest, {
            data,
            success: function (res) {
                // console.log()
                callback ? callback(res) : ''
            },
            fail: function (err) {
                callback ? callback(err) : ''
            }
        })
    }
}

// Get请求
const ApiGet = {
    // 获取logo
    GetLogo(callback) {
        apiPost(API.logo, {
            success: function (res) {
                // console.log()
                callback ? callback(res) : ''
            },
        })
    }
}



Vue.prototype.ApiGet = ApiGet
Vue.prototype.ApiPost = ApiPost


// post请求方法
// let data = {
//     account: "admin",
//     password: "12345678"
// }
// ApiPost.login(data, (res) => {
//     console.log(res)
// })


// get请求方法
// ApiGet.GetLogo((res) => {
//     console.log(res)
// })