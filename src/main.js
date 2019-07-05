import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'

Vue.config.productionTip = false


import './utils/rem' // 适配
import './css/reset.css' // 初始化
import './css/iconfont.css' // 字体图标
import './utils/S-component' // 组件
import './utils/http' // http


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')