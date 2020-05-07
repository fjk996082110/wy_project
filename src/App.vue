<template>
  <div id="app">
    <!-- <router-link to='/index'>主页</router-link>
    <router-link to='/category'>分类</router-link>
    <router-link to='/needBuy'>必买</router-link>
    <router-link to='/shopCart'>购物车</router-link>
    <router-link to='/personal'>个人</router-link> -->
    <router-view></router-view>
    <div class="footerNav">
      <div class="item" :class="appIndex===0?'active':''" @click="changeRouter(0,'/index')">
        <i class="iconfont icon-zhuye"></i>
        <span>首页</span>
      </div>
      <div class="item" :class="appIndex===1?'active':''" @click="changeRouter(1,'/category')">
        <i class="iconfont icon-nav-list"></i>
        <span>分类</span>
      </div>
      <div class="item" :class="appIndex===2?'active':''" @click="changeRouter(2,'/needBuy')">
        <i class="iconfont icon-all1"></i>
        <span>值得买</span>
      </div>
      <div class="item" :class="appIndex===3?'active':''" @click="changeRouter(3,'/shopCart')">
        <i class="iconfont icon-cart-full"></i>
        <span>购物车</span>
      </div>
      <div class="item" :class="appIndex===4?'active':''" @click="changeRouter(4,'personal')">
        <i class="iconfont icon-account"></i>
        <span>个人</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      appIndex: 0
    }
  },
  methods: {
    changeRouter(index,path){
      this.appIndex = index
      this.$router.replace(path)
    }
  },
}
</script>

<style lang="stylus" scoped>
@import url('./common/iconfont/iconfont.styl');
@import url('./common/font_i4f3h1zfru/iconfont.styl');
#app
  width 100% !important
  height 100% !important
  .footerNav
    width 100%
    height 80px
    position fixed
    bottom 0
    left 0
    background white
    display flex
    .item
      width 20%
      height 80px
      display flex
      flex-direction column
      align-items center
      justify-content center
      font-size 25px
      &.active
        color red
      .iconfont
        font-size 40px
        margin-bottom 8px
</style>