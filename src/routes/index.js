import index from '../pages/index/index.vue'
import category from '../pages/category/category.vue'
import needBuy from '../pages/needBuy/needBuy.vue'
import personal from '../pages/personal/personal.vue'
import shopCart from '../pages/shopCart/shopCart.vue'

export default [
  {path:'/index',component:index},
  {path:'/category',component:category},
  {path:'/needBuy',component:needBuy},
  {path:'/personal',component:personal},
  {path:'/shopCart',component:shopCart},
  {path:'/',redirect:'/index'},
]