<template>
  <div class="categoryContainer">
    <div class="categoryContent">
      <!-- 头部 -->
      <div class="categoryHeader">
        <div class="searchInput" @click="$router.replace('/search')">
          <i class="iconfont icon-sousuo"></i>
          <span class="searchTitle">搜索商品, 共25372款好物</span>
        </div>
      </div>
      <!-- 内容区 -->
      <div class="cateContent">
        <div class="leftWrap" ref="leftWrap">
          <ul class="leftList">
            <li class="item" :class="currentIndex===index?'active':''" @click="changeCurrentIndex(index)" v-for="(item, index) in categoryData" :key="index">{{item.name}}</li>
          </ul>
        </div>
        <div class="rightWrap" ref="rightWrap">
          <!-- <keep-alive>
            <router-view></router-view>
          </keep-alive> -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState,mapActions} from 'vuex'
import {GETCATENAVDATA} from '../../store/mutation_type'
import categoryDetail from '../../components/categoryDetail/categoryDetail'
export default {
  name:'category',
  data() {
    return {
      currentIndex:0
    }
  },
  computed: {
    ...mapState(['categoryData'])
  },
  methods: {
    ...mapActions([GETCATENAVDATA]),
    changeCurrentIndex(index){
      this.currentIndex = index
      this.$router.replace(`/category/${index}`)
    },
    initScroll(){
      this.$nextTick(()=>{
        if(this.$refs.rightWrap){
          new BScroll(this.$refs.leftWrap,{click:true})
          new BScroll(this.$refs.rightWrap,{click:true})
        }
      })
    }
  },
  async created(){
    await this[GETCATENAVDATA]()
    this.changeCurrentIndex(0)
    // this.initScroll()
    this.$watch('$route.path',(newVal)=>{
      this.initScroll()
    })
  }
}
</script>

<style lang="stylus" scoped>
.categoryContainer
  width 100%
  height 100%
  .categoryContent
    height 100%
    width 100%
    .categoryHeader
      width 100%
      height 88px
      padding 15px
      box-sizing border-box
      position fixed
      top 0
      left 0
      .searchInput
        width 95%
        height 56px
        background #ededed
        border-radius: .10667rem
        font-size 26px
        .iconfont
          font-size 30px
          margin-right 10px
    .cateContent
      width 100%
      height calc(100vh - 172px)
      position relative
      top 88px
      display flex
      .leftWrap
        width 220px
        height 100%
        overflow hidden
        .leftList
          padding-top 20px
          .item
            width 100%
            height 50px
            margin-bottom 30px
            box-sizing border-box 
            font-size 26px
            text-align center
            line-height 50px
            position relative
            &.active:before
              content ""
              display block
              width .08rem
              height 50px
              background #ab2b2b
              position absolute
              left 0
              top 0
      .rightWrap
        width 100%
        height 100%
        padding: .4rem .4rem .28rem
        overflow hidden
        // .subCateBanner
        //   width 530px
        //   height 192px
        //   margin-bottom 30px
        //   img 
        //     width 100%
        //     height 100%
        // .cateList
        //   .cateListTitle
        //     height 51px
        //     font-size 30px
        //     font-weight 800
        //     margin-bottom 20px
        //   .list
        //     .cateItem
        //       width 144px
        //       height 200px
        //       margin-right 32px
        //       margin-bottom 30px
        //       float left
        //       .cateImgWrap
        //         width 144px
        //         height 144px
        //         img
        //           width 100%
        //           height 100%
        //       .cateItemName
        //         height 56px
        //         text-align center
        //         line-height 56px
        //         font-size 24px


  .textmememem
    z-index 0
</style>