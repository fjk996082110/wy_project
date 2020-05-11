<template>
  <div class="needBuyContainer" ref="needBuyContainerWrap">
    <div class="needBuyWrap">
      <!-- 头部 -->
      <div class="needBuyHeader">
        <div class="left">
          <div class="iconfont icon-zhuye"></div>
        </div>
        <div class="title">
          <span>值得买</span>
        </div>
        <div class="right">
          <div class="iconfont icon-sousuo"></div>
          <div class="iconfont icon-gouwuche1"></div>
        </div>
      </div>
      <!-- 导航 -->
      <div class="neebBuyNav">
        <div class="navTit">
          <div class="img-tit">
            <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
            <div class="title">严选好物&nbsp;用心生活</div>
          </div>
        </div>
        <div class="navSwiper">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(nav, index) in navList" :key="index">
                <div class="innerSlide" v-for="(item, index) in nav" :key="index">
                  <img :src="item.picUrl" alt="">
                  <div class="contentText">
                    <div class="mainText">{{item.mainTitle}}</div>
                    <div class="descText">{{item.viceTitle}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-waterfull></v-waterfull>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import Swiper from 'swiper'
import waterfall from 'vue-waterfall2'
import BScroll from 'better-scroll'
import {mapState,mapActions} from 'vuex'
import {GETNAVWRAP} from '../../store/mutation_type.js'
import needBuyWaterFull from '../../components/needBuy/needBuyComponent'
export default {
  name:'needBuy',
  data() {
    return {
      navList:[]
    }
  },
  components:{
    "v-waterfull":needBuyWaterFull
  },
  computed: {
    ...mapState(['needBuyNavWrapList'])
  },
  methods: {
    ...mapActions([GETNAVWRAP]),
    initSwiper(){
      this.$nextTick(()=>{
        let mySwiper = new Swiper('.swiper-container',{
          direction:'horizontal'
        })
      })
      if(this.$refs.needBuyContainerWrap){
        new BScroll(this.$refs.needBuyContainerWrap,{scrollY:true,click: true})
      }
    }
  },
  async mounted(){
    await this[GETNAVWRAP]()
    this.navList = _.chunk(this.needBuyNavWrapList,2)
    this.initSwiper()
  }
}
</script>

<style lang="stylus" scoped>
.needBuyContainer
  height 100%
  .needBuyHeader
    height 90px
    padding 0 20px
    box-sizing border-box
    display flex
    justify-content space-between
    align-items center
    font-size 35px
    position flex
    top 0
    left 0
    .left
      .iconfont
        font-size 40px
    .title
      width 110px
      height 40px
      position relative
      top 0
      right 0
      bottom 0
      left 0
      margin auto
    .right
      display flex
      .iconfont
        font-size 40px
      .icon-sousuo
        margin-right 30px
  .neebBuyNav
    height 650px
    position relative
    .navTit
      height 500px
      background-image url("https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png")
      background-size 100%
      .img-tit
        display flex
        align-items center 
        position absolute
        left 30px
        top 50px
        img
          width 150px
          height 70px
          margin-right 20px
        .title
          font-size 28px
          color #fff
    .navSwiper
      width 100%
      height 7rem
      position absolute
      left 0
      top 130px
      padding 0 10px
      box-sizing border-box
      .inner
        height 100%
        width 100%
        background #fff
        border-radius 0.16rem
        padding 25px 20px
        box-sizing border-box
      .swiper-container
        height 100%
        margin 0 auto
        display flex
        background #fff
        border-radius 0.16rem
        .swiper-wrapper
          width 150px
          height 100%
          margin-right 30px
          margin-top 10px
          .swiper-slide
            width 100% !important
            height 263px
            margin 0 15px
            margin-top 10px
            display flex
            flex-direction column
            align-items center
            .innerSlide
              height 100%
              img
                width 130px
                height 130px
                margin 0 auto
              .contentText
                width 150px
                height 80px
                margin-top 10px
                display flex
                flex-direction column
                align-content center
                .mainText
                  font-size 26px
                  font-weight 700
                  text-align center
                .descText
                  margin-top 8px
                  text-align center
                  color gray
                  font-size 22px
.text
  z-index 0
</style>