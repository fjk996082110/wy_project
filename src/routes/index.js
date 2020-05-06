import index from '../pages/index.vue'
import category from '../pages/category.vue'
import needBuy from '../pages/needBuy.vue'
import personal from '../pages/personal.vue'
import shopCart from '../pages/shopCart.vue'

export default [
  {path:'/index',component:index},
  {path:'/category',component:category},
  {path:'/needBuy',component:needBuy},
  {path:'/personal',component:personal},
  {path:'/shopCart',component:shopCart},
  {path:'/',redirect:'/index'},
]