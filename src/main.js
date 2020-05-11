import Vue from 'vue'
import App from './App.vue'
import {Lazyload,Swipe, SwipeItem} from 'vant'
import 'lib-flexible'

Vue.config.productionTip = false

import router from './router'
import http from './http/index'
import store from './store/index'
import '../node_modules/swiper/css/swiper.css'
import waterfall from 'vue-waterfall2'

Vue.prototype.$http = http

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(waterfall);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
