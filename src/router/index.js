import routes from '../routes'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
export default new VueRouter({
  routes,
  linkActiveClass:"active"
})