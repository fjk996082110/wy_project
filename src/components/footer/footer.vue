<template>
  <div class="footerNav">
      <div class="item" :class="appIndex==='index'?'active':''" @click="changeRouter('/index')">
        <i class="iconfont icon-zhuye"></i>
        <span>首页</span>
      </div>
      <div class="item" :class="appIndex==='category'?'active':''" @click="changeRouter('/category')">
        <i class="iconfont icon-nav-list"></i>
        <span>分类</span>
      </div>
      <div class="item" :class="appIndex==='needBuy'?'active':''" @click="changeRouter('/needBuy')">
        <i class="iconfont icon-all1"></i>
        <span>值得买</span>
      </div>
      <div class="item" :class="appIndex==='shopCart'?'active':''" @click="changeRouter('/shopCart')">
        <i class="iconfont icon-cart-full"></i>
        <span>购物车</span>
      </div>
      <div class="item" :class="appIndex==='personal'?'active':''" @click="changeRouter('personal')">
        <i class="iconfont icon-account"></i>
        <span>个人</span>
      </div>
    </div>
</template>

<script>
export default {
  name:"footerNav",
  data() {
    return {
      appIndex: 0
    }
  },
  methods: {
    changeRouter(path){
      this.$router.replace(path)
    },
    initActive(){
      this.appIndex = this.$route.path.split("/")[1]
    }
  },
  created(){
    this.initActive()
    this.$watch('$route.path',(newVal,oldVal)=>{
      this.appIndex = newVal.split("/")[1]
    })
  }
}
</script>

<style lang="stylus" scoped>
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