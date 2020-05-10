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
  // data() {
  //   return {
  //     appIndex: 0
  //   }
  // },
  components:{
    'v-footer':footer
  },
  // methods: {
  //   changeRouter(path){
  //     // this.appIndex = this.$route.path.splice("/")
  //     this.$router.replace(path)
  //   }
  // },
  // created(){
  //   this.$watch('$route.path',(newVal,oldVal)=>{
  //     this.appIndex = newVal.split("/")[1]
  //   })
  // }
}
</script>

<style lang="stylus" scoped>
@import url('./common/iconfont/iconfont.styl');
@import url('./common/font_i4f3h1zfru/iconfont.styl');
#app
  width 100% !important
  height 100% !important
  // .footerNav
  //   width 100%
  //   height 80px
  //   position fixed
  //   bottom 0
  //   left 0
  //   background white
  //   display flex
  //   .item
  //     width 20%
  //     height 80px
  //     display flex
  //     flex-direction column
  //     align-items center
  //     justify-content center
  //     font-size 25px
  //     &.active
  //       color red
  //     .iconfont
  //       font-size 40px
  //       margin-bottom 8px
</style>