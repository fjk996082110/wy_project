import index from '../pages/index/index.vue'
import category from '../pages/category/category.vue'
import needBuy from '../pages/needBuy/needBuy.vue'
import personal from '../pages/personal/personal.vue'
import shopCart from '../pages/shopCart/shopCart.vue'
import categoryDetail from '../components/categoryDetail/categoryDetail.vue'
import search from '../components/search/search.vue'

export default [
  {path:'/index',component:index},
  {
    path:'/category',
    component:category,
    children:[
      { path:'/category/:id',props:true,component:categoryDetail}
    ]
  },
  {path:'/needBuy',component:needBuy},
  {path:'/personal',component:personal},
  {path:'/shopCart',component:shopCart},
  {path:'/search',component:search},
  {path:'/',redirect:'/index'},
]