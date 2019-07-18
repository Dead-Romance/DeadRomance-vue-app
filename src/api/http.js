import Vue from 'vue'
import axios from 'axios'


let instance = axios.create({
    // baseURL: 'https://whby666.com/api/', // 接口域名
    timeout: 5000, // 超时时间
    headers: { // 设置请求头
        'Content-Type': 'application/json'
    }
})


// 添加请求拦截器
instance.interceptors.request.use(config => {
    // 在发送请求之前做些什么...
    // 所有请求携带 Token
    const token = localStorage.getItem('token')
    if (token) {
        // Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。 它将返回目标对象。
        Object.assign(config.headers, {
            'X-AUTH-TOKEN': token
        })
    }
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
})

//  添加响应拦截器
instance.interceptors.response.use(res => {
    // 对响应数据做点什么
    return res;
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
})



/**
 * Get请求
 * @param { 请求地址: url}
 * @param { 成功回调: options.success} 
 * @param { 失败回调: options.fail} 
 */
export function apiGet(url, options = {}) {

    return instance.get(url).then((res) => {
        options.success(res)
    }).catch((err) => {
        options.fail(err)
    });

}

/**
 * Post请求
 * @param { 请求地址: url}
 * @param { 参数: options.data} 
 * @param { 成功回调: options.success} 
 * @param { 失败回调: options.fail} 
 */
export function apiPost(url, options = {}) {
    if (options.data === undefined) options.data = {}
    return instance.post(url, options.data).then((res) => {
        options.success(res.data)
    }).catch((err) => {
        options.fail(err)
    });
}



