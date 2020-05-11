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
    <div class="noLoginContainer">
      <div class="noLoginInner">
        <div class="logo">
          <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
        </div>
        <div class="btns">
          <div class="phoneLogin">
            <div class="iconfont icon-shouji"></div>
            <div class="loginTitle">手机号快捷登录</div>
          </div>
          <div class="emailLogin">
            <div class="iconfont icon-shouji"></div>
            <div class="loginTitle">邮箱账号登录</div>
          </div>
        </div>
      </div>
    </div>
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
  .noLoginContainer
    height 100%
    .noLoginInner
      height 750px
      background pink
      position relative
      .logo
        position absolute
        top 180px
        left 240px
        width 260px
        height 90px
        img
          width 100%
          height 100%
      .btns
        width 100%
        position absolute
        top 480px
        left 0
        .phoneLogin,.emailLogin
          margin 0 auto
          width 700px
          height 90px
          line-height 90px
          display flex
          justify-content center
          border: 0 solid #DD1A21
          border-radius: 2px
          background-color: #DD1A21
          color #fff
        .emailLogin
          margin-top 20px
          background-color: #fff
          color #DD1A21
    
  .text
    z-index 0
</style>