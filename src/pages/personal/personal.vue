<template>
  <div class="personalContainer">
    <!-- 头部 -->
    <div class="personalHeader">
      <div class="headerContent">
        <div class="innerC">
          <div class="iconfont icon-zhuye"></div>
          <div class="logo">
            <img src="../../common/images/logo.png" alt="">
          </div>
          <div class="twoIconfont">
            <div class="iconfont icon-sousuo"></div>
            <div class="iconfont icon-gouwuche1"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 已登录 -->
    <div class="alreadyLoginContainer"></div>
    <!-- 未登录 -->
    <div class="noLoginContainer"></div>
  </div>
</template>

<script>
export default {
  name:'personal'
}
</script>

<style lang="stylus" scoped>
.personalContainer
  width 100%
  height 100%
  // padding 0 20px
  // box-sizing border-box
  background skyblue
  .personalHeader
    height 80px
    background #fafafa
    .headerContent
      height 100%
      position relative
      .innerC
        width 700px
        height 100%
        margin 0 auto
        display flex
        align-items center
        justify-content space-between
        .iconfont
          font-size 50px
        .logo
          width 180px
          height 45px
          position absolute
          left 0
          top 0
          right 0
          bottom 0
          margin auto
          img
            width 100%
            height 100%
        .twoIconfont
          display flex
          .icon-sousuo
            margin-right 30px
</style>