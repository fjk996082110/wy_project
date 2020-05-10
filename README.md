## 网易严选-项目
  vue vuex VueRouter axios封装 
## part1
  首页
  BScroll:
      1、滚动的内容必须多于父级
      2、BScroll默认禁止点击事件，{click: true}可以解决
  Swiper
      不用设置样式，按照Swiper预定义的样式，直接写 (Swiper-container...)
  在使用BScroll时，会产生如下错误：
  ```js
    The wrapper need at least one child element to be scroller
    Error in mounted hook (Promise/async): "TypeError: Cannot read property 'style' of undefined"
  ```
## part2
  分类
  路由嵌套
    跳转时携带id，通过id去查找下标，在组件被加载时，先调用一次，传0
  初始化没数据
    因为刚开始页面初始化时，没有内容，导致BScroll获取不到内容，报如下错误
  ```js
    Cannot read property 'style' of undefined"
  ```
    解决：通过watch监听路由变化，当路由发生变化时，再调用BScroll
## part3
  搜索
    请求配置，代理解决跨域
    函数节流
    watch监听v-model数据，每次改变，500毫秒之外，调用请求
## part4
  购物车页面静态+个人中心头部
  将底部组件拆分成一个组件，通过$route.meta属性判断是否需要底部导航
  修改BUG：刷新后底部导航active类丢失--->在组件加载时，调用获取$route.path