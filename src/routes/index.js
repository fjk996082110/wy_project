import index from '../pages/index/index.vue'
import category from '../pages/category/category.vue'
import needBuy from '../pages/needBuy/needBuy.vue'
import personal from '../pages/personal/personal.vue'
import shopCart from '../pages/shopCart/shopCart.vue'
import categoryDetail from '../components/categoryDetail/categoryDetail.vue'
import search from '../components/search/search.vue'

export default [
  {path:'/index',component:index,meta:{showFooter:true}},
  {
    path:'/category',
    component:category,
    meta:{showFooter:true},
    children:[
      { path:'/category/:id',props:true,component:categoryDetail,meta:{showFooter:true}}
    ]
  },
  {path:'/needBuy',component:needBuy,meta:{showFooter:true}},
  {path:'/personal',component:personal,meta:{showFooter:false}},
  {path:'/shopCart',component:shopCart,meta:{showFooter:true}},
  {path:'/search',component:search,meta:{showFooter:false}},
  {path:'/',redirect:'/index'},
]