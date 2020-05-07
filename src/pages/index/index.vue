<template>
  <div class="indexContainer">
    <div class="indexHeader">
      <!-- 头部 -->
      <div class="headerTop">
        <img class="logo" src="../../common/images/logo.png" alt="">
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
              <span class="txt" :class="navId===-1?'active':''"  @click="changeNavId(-1)">推荐</span>
            </div>
            <div class="navItem" v-for="(item, index) in cateNavData" :key="index" @click="changeNavId(index)">
              <span class="txt" :class="navId===index?'active':''">{{item.name}}</span>
            </div>
        </div>
      </div>
    </div>
    <div class="indexContent" ref="indexContent">
      <div class="content">
         <!-- 轮播图 -->
        <div class="bannerWrap">
          <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(image,index) in images" :key="index">
                  <img :src="image" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="indexServicePolicy">
          <ul class="growList">
            <li v-for="(item,index) in indexData.policyDescList" :key="index">
              <img :src="item.icon" alt="">
              <span>{{item.desc}}</span>
            </li>
          </ul>
        </div>
        <!-- 图标 -->
        <div class="navList" v-if="indexData.kingKongModule">
          <div class="navItem" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">
            <div class="itemContent">
              <img :src="item.picUrl" alt="">
              <span>{{item.text}}</span>
            </div>
          </div>
        </div>
        <!-- 广告1 -->
        <div class="bannerAdvanter">
          <img src="https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif?imageView&quality=75" alt="">
        </div>
        <!-- 新人专享礼 -->
        <div class="newUserGift">
          <div class="title">
            <span>新人专享礼</span>
          </div>
          <div class="content">
            <div class="contentLeft">
              <div class="leftName">新人专享礼包</div>
              <div class="hongbao">
                <img src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
                <span> > </span>
              </div>
            </div>
            <div class="contentRight" v-if="indexData.indexActivityModule">
              <div class="content1">
                <div class="picWrap">
                  <div class="picContent">
                    <img src="https://yanxuan-item.nosdn.127.net/08d501dfd5c598ad82862a83d6c47d9a.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                  </div>
                  <div class="discount">
                    <div class="line1">￥89</div>
                    <div class="line2">￥99</div>
                  </div>
                </div>
                <div class="jieshao">
                  <div class="title1">{{indexData.indexActivityModule[0].title}}</div>
                  <div class="title2">{{indexData.indexActivityModule[0].subTitle}}</div>
                </div>
              </div>
              <div class="content1 content2">
                <div class="picWrap">
                  <div class="picContent">
                    <img src="https://yanxuan-item.nosdn.127.net/073f16bf0c7ad8634c3abb7636e063c2.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                  </div>
                  <div class="discount">
                    <div class="line1">{{indexData.indexActivityModule[0].activityPrice}}</div>
                    <div class="line2">{{indexData.indexActivityModule[0].originPrice}}</div>
                  </div>
                </div>
                <div class="jieshao">
                  <div class="title1">{{indexData.indexActivityModule[1].title}}</div>
                  <div class="title2">{{indexData.indexActivityModule[1].tag}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 类目热销榜 -->
        <div class="hotSellContainer" v-if="indexData.categoryHotSellModule">
          <div class="hotSellTitle">
            <div class="title">{{indexData.categoryHotSellModule.title}}</div>
          </div>
          <div class="hotSellContent">
            <div class="line1">
              <div class="content1">
                <div class="hotSellName">{{indexData.categoryHotSellModule.categoryList[0].categoryName}}</div>
                <div class="hotSellImg">
                  <img :src="indexData.categoryHotSellModule.categoryList[0].showPicUrl" alt="">
                </div>
              </div>
              <div class="content1">
                <div class="hotSellName">{{indexData.categoryHotSellModule.categoryList[1].categoryName}}</div>
                <div class="hotSellImg">
                  <img :src="indexData.categoryHotSellModule.categoryList[1].showPicUrl" alt="">
                </div>
              </div>
            </div>
            <div class="line2">
              <div class="item" v-for="(item, index) in categoryList" :key="index">
                <div class="itemName">{{item.categoryName}}</div>
                <div class="itemImage">
                  <img :src="item.picUrl" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import {mapState,mapActions} from 'vuex'
import {GETINDEXCATEMODULE,GETINDEXDATA} from '../../store/mutation_type'
export default {
  name:'index',
  data() {
    return {
      navId: -1, //导航下标
      images:[
        'https://yanxuan.nosdn.127.net/b7f94a107096c60038eba24f542d62c5.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/efe5bb71fd6787d9c5f5b051eb607666.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/84d82137e854e58bf26791db3ba203b8.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/3ebbdfa48590946eba80297c9a4a66c4.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/ee856ce5b451dbdeab78abffce195957.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
      ],
      categoryList:[]
    }
  },
  async mounted(){
    this.initScroll()
    this.renderSwiper()
    await this[GETINDEXCATEMODULE]()
    await this[GETINDEXDATA]()
    let length = this.indexData.categoryHotSellModule.categoryList.length
    this.categoryList = this.indexData.categoryHotSellModule.categoryList.slice(2,length)
  },
  methods: {
    ...mapActions([GETINDEXCATEMODULE,GETINDEXDATA]),
    //滚动条
    initScroll(){
      this.$nextTick(()=>{
        if(this.$refs.navWrap){
          new BScroll(this.$refs.navWrap,{scrollX:true,click: true})
          new BScroll(this.$refs.indexContent,{scrollY:true})
        }
      })
    },
    renderSwiper(){
      this.$nextTick(()=>{
        new Swiper('.swiper-container',{
          loop: true,
          pagination: {
              el: '.swiper-pagination',
          }
        })
      })
    },
    //导航点击
    changeNavId(index){
      this.navId = index
    }
  },
  computed: {
    ...mapState(["cateNavData","indexData"])
  },
}
</script>

<style scoped>
@import url('./css/index.css');
</style>