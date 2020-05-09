<template>
  <div class="searchWrap">
    <!-- 搜索头部 -->
    <div class="searchHeader">
      <div class="headerInner">
        <div class="searchInput">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" class="inputNode" ref="inputNode" v-model="searchInput">
        </div>
        <div class="cancel" @click="goto">取消</div>
      </div>
       <!-- 搜索结果 -->
      <div class="searchResContent" v-if="searchResList.length">
        <ul class="contentList">
          <li class="item" v-for="(item,index) in searchResList" :key="index">
            <div class="itemContent">
              <span class="resName">{{item}}</span>
              <i class="iconfont icon-youjiantou-01"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 搜索内容 -->
    <div class="searchInnerWrap" v-if="!searchResList.length">
      <div class="wrapContent">
        <div class="contentTitle">
          <h3 class="h3">热门搜索</h3>
        </div>
        <div class="contentList">
          <ul class="list">
            <li class="item" :class="index===0?'highLigt':''" v-for="(item,index) in searchViewInitList.hotKeywordVOList" :key="index">{{item.keyword}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import {GETSEARCHVIEWINIT,GETSEARCHKEYWORD} from '../../store/mutation_type'
export default {
  name:"search",
  data() {
    return {
      searchInput:"",
    }
  },
  computed:{
    ...mapState(['searchViewInitList','searchResList'])
  },
  methods: {
    ...mapActions([GETSEARCHVIEWINIT,GETSEARCHKEYWORD]),
    changeDefaultSearchWord(){
      let index = Math.floor(Math.random()*39)
      this.$refs.inputNode.placeholder = this.searchViewInitList.defaultKeywords[index].keyword
    },
    goto(){
      this.$router.replace('/category')
    }
  },
  async mounted(){
    await this[GETSEARCHVIEWINIT]()
    this.changeDefaultSearchWord()
    // 延时搜索
    this.$watch('searchInput',(newVal)=>{
      if(this.timer){
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(async () => {
        await this[GETSEARCHKEYWORD](newVal)
      }, 300);
    })
  }
}
</script>

<style lang="stylus" scoped>
  .searchWrap
    width 100%
    height 100%
    position relative
    background #eee
    z-index 9
    .searchHeader
      height 87px
      padding 15px 20px
      box-sizing border-box
      background #fff
      position relative
      .headerInner
        height 56px
        display flex
        justify-content space-between
        align-items center
        .searchInput
          // width 85%
          display flex
          background #f4f4f4
          .iconfont
            width 28px
            height 28px
            margin 0 10px
          input
            // width 100%
            height 100%
            background #f4f4f4
            outline none 
            padding-left 10px
            .cancel
              font-size 28px
              margin-right 10px
      .searchResContent
        position absolute
        left 0
        top 88px
        width 100%
        // height 300px
        background #fff
        .contentList
          .item
            height 90px
            .itemContent
              width 700px
              margin 0 20px
              height 100%
              line-height 90px
              font-size 30px
              display flex
              justify-content space-between
              position relative
              &:after
                content ""
                height 2px
                width 700px
                position absolute
                left 0
                bottom  0
                background #d9d9d9
              .iconfont
                fong-size 30px
    .searchInnerWrap
      height 500px
      background #fff
      .wrapContent
        height 100%
        margin 0px 30px
        .contentTitle
          height 90px
          .h3
            height 100%
            line-height 90px
            font-size 28px
            color #999
        .contentList
          height 237px
          .list
            display flex
            flex-wrap wrap
            .item
              height 47px
              margin 0 36px 30px 0
              line-height 47px
              border 2px solid #999
              border-radius 4px
              padding 0 10px
              color #333
              font-size 22px
              font-weight 400
              &.highLigt
                border 2px solid #DD1A21
                border-radius 4px
                color #DD1A21
  .text
    z-index 0
</style>