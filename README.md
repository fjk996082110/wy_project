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
