import Vue from 'vue'


//  Vue自定义指令




// 头部区域
import SHeader from "../components/s-common/S-header.vue";
// 底部区域
import SFooter from "../components/s-common/S-footer.vue";
// 内容区域
import SContainer from "../components/s-common/S-container.vue";
// 滚动区域
import SScrollView from '../components/s-common/s-scroll-view.vue'










Vue.component('SHeader', SHeader)
Vue.component('SFooter', SFooter)
Vue.component('SContainer', SContainer)
Vue.component('SScrollView', SScrollView)
