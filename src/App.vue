<template>
  <div id="app">
    <router-view></router-view>
    <v-footer v-show="$route.meta.showFooter"></v-footer>
  </div>
</template>

<script>
import footer from './components/footer/footer.vue'
export default {
  name: 'App',
  components:{
    'v-footer':footer
  },
}
</script>

<style lang="stylus" scoped>
@import url('./common/iconfont/iconfont.styl');
@import url('./common/font_i4f3h1zfru/iconfont.styl');
@import url('');
#app
  width 100% !important
  height 100% !important
</style>