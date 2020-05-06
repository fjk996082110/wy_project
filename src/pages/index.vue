<template>
  <div class="indexContainer">
    <div class="indexHeader">
      <div class="headerTop">
        <img class="logo" src="../common/images/logo.png" alt="">
        <div class="searchInput">
          <i class="iconfont icon-sousuo"></i>
          <span class="placeholder">搜索商品，共26221款好物</span>
        </div>
        <div class="userLogin">
          登录
        </div>
      </div>
      <!-- 导航滚动条 -->
      <div class="navWrap" ref="navWrap">
        <div class="scrollList" ref="navList">
            <div class="navItem">
              <span class="txt active">推荐</span>
            </div>
            <div class="navItem">
              <span class="txt active">居家生活</span>
            </div>
            <div class="navItem">
              <span class="txt">服饰鞋包</span>
            </div>
            <div class="navItem">
              <span class="txt">美食酒水</span>
            </div>
            <div class="navItem">
              <span class="txt">测试</span>
            </div>
            <div class="navItem">
              <span class="txt">测试</span>
            </div>
            <div class="navItem">
              <span class="txt">测试</span>
            </div>
            <div class="navItem">
              <span class="txt">测试</span>
            </div>
            <div class="navItem">
              <span class="txt">测试</span>
            </div>
            <div class="navItem">
              <span class="txt">测试</span>
            </div>
            <div class="navItem">
              <span class="txt">测试</span>
            </div>
            <div class="navItem">
              <span class="txt">测试</span>
            </div>
            <div class="navItem">
              <span class="txt">测试</span>
            </div>
            <div class="navItem">
              <span class="txt">测试</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name:'index',
  mounted(){
    this.initScroll()
    this.getIndexData()
  },
  methods: {
    initScroll(){
      this.$nextTick(()=>{
        new BScroll(this.$refs.navWrap,{scrollX:true,click: true})
      })
    },
    async getIndexData(){
      let result = await this.$http.wrap.getCateList()
      console.log(result)
    }
  },
}
</script>

<style scoped>
.indexContainer{
  height:100%;
  padding: 0 10px;
}
.indexHeader{
  height:148px;
  background: #fff;
}
.headerTop{
  height: 87.97px;
  display: flex;
  justify-content: center;
  align-items: center;
}        
.logo{
  width: 138px;
  height: 40px;
}
.searchInput{
  width: 442px;
  height: .74667rem;
  background: #ededed;
  font-size: .37333rem;
  line-height: .74667rem;
  text-align: center;
  border-radius: .10667rem;
  margin: 0 .21333rem 0 .26667rem;
  color: #666;
}
.searchInput .iconfont{
  width: .37333rem;
  height: .37333rem;
  margin-right: .13333rem;
  font-size: .45rem;
}
.userLogin{
  width: .98667rem;
  height: .53333rem;
  font-size: .32rem;
  color: #DD1A21;
  line-height: .53333rem;
  text-align: center;
  border: 2px solid #DD1A21;
  border-radius: .10667rem;
}
.navWrap{
  width: 100%;
  display: flex;
  /* height: 60px; */
  position: relative;
  /* display: inline; */
  overflow: hidden;
}
.scrollList{
  display: flex;
  line-height: 60px;
  margin-right: 10px;
  display: inline;
  white-space: nowrap;
  position: relative;
}
.navItem{
  padding: 0 20px;
  display: inline;
}
.navItem .txt{
  font-size: 30px;
  position: relative;
}
.navItem .txt.active::after{
  content: "";
  display: block;
  width: 100%;
  height: .05333rem;
  background-color: #DD1A21;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>