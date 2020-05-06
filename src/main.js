import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
Vue.config.productionTip = false

import router from './router'
import http from './http/index'

Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
