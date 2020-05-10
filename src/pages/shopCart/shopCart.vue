<template>
  <div class="shopContainer">
    <div class="shopMain">
      <!-- 头部 -->
      <div class="shopHeader">
        <div class="shopCartTitle">购物车</div>
        <div class="lingjuan">领劵</div>
      </div>
      <!-- 中部 -->
      <div class="advList">
        <ul class="list">
          <li class="advItem">
            <i class="iconfont icon-stop"></i>
            <span>30天无忧退货</span>
          </li>
          <li class="advItem">
            <i class="iconfont icon-stop"></i>
            <span>30天无忧退货</span>
          </li>
          <li class="advItem">
            <i class="iconfont icon-stop"></i>
            <span>30天无忧退货</span>
          </li>
        </ul>
      </div>
      <!-- 内容 -->
      <div class="shopInner">
        <div class="noLogin">
          <div class="bgImg"></div>
          <div class="btn">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'shopCart'
}
</script>

<style lang="stylus" scoped>
.shopContainer
  width 100%
  height 100%
  .shopMain
    width 100%
    height 100%
    .shopHeader
      width 100%
      height 88px
      margin 0 auto
      display flex
      justify-content space-between
      position relative
      padding 0 20px
      box-sizing border-box
      &:after
        content ""
        height 2px
        width 100%
        background #d9d9d9
        position absolute
        left 0
        bottom 0
      .shopCartTitle
        line-height 88px
        font-size 35px
      .lingjuan
        line-height 88px
        font-size 30px
        margin-right 30px
        color #DD1A21
    .advList
      height 70px
      background #eee
      .list
        height 100%
        display flex
        justify-content space-around
        align-items center
    .shopInner
      height calc(100vh - 238px)
      position relative
      .noLogin
        height 450px
        width 100%
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        margin auto
        display flex
        flex-direction column
        align-items center
        .bgImg
          width 248px
          height 248px
          background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp')
          background-size 100%
        .btn
          height 92px
          width 420px
          background #DD1A21
          line-height 92px
          text-align center
          font-size 30px
          margin-top 50px
          color #ffffff
          border-radius .04rem
</style>