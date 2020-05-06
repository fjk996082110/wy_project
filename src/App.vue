<template>
  <div id="app">
    <!-- <router-link to='/index'>主页</router-link>
    <router-link to='/category'>分类</router-link>
    <router-link to='/needBuy'>必买</router-link>
    <router-link to='/shopCart'>购物车</router-link>
    <router-link to='/personal'>个人</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="stylus" scoped>
@import url('./common/iconfont/iconfont.styl');
#app
  width 100% !important
  height 100% !important
  overflow hidden !important
</style>