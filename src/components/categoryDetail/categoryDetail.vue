<template>
  <div class="subCateContainer" v-if="categoryList">
    <div class="subCateBanner">
      <img :src="categoryList.titleImgUrl" alt="">
    </div>
    <div class="cateList">
      <div class="innerWrap" v-for="(item,index) in categoryList.subCateList" :key="index">
        <div class="cateListTitle" v-if="item.titleName">{{item.titleName}}</div>
          <ul class="list">
            <li class="cateItem" v-for="(listItem,index) in item.cateList" :key="index">
              <div class="cateImgWrap">
                <img :src="listItem.wapBannerUrl" alt="">
              </div>
              <div class="cateItemName">{{listItem.name}}</div>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'categoryDetail',
  data() {
    return {
      detailId:0,
      cateLists:[]
    }
  },
  props:{
    id:String,
  },
  computed: {
    categoryList(){
      return this.cateLists[this.id]
    }
  },
  methods: {
    async getCateLists(){
      let result = await this.$http.wrap.getCateLists()
      this.cateLists = result
    },

  },
  async mounted(){
    await this.getCateLists()
    // const detailId = this.$route.params.id
    this.$watch('$route.params.id',(newVal,oldVal)=>{
      this.detailId = newVal*1
    })
  }
}
</script>

<style lang="stylus" scoped>
.subCateContainer
  width 100%
  height auto
  .subCateBanner
    width 530px
    height 192px
    margin-bottom 30px
    img 
      width 100%
      height 100%
  .cateList
    width 100%
    height 100%
    .innerWrap
      // height 550px
      height 100%
      min-width 300px
      .cateListTitle
        height 50px
        font-size 30px
        font-weight 800
        margin-bottom 20px
      .list
        width 530px
        height 100%
        display flex
        flex-wrap wrap
        .cateItem
          width 144px
          height 200px
          margin-right 32px
          margin-bottom 30px
          .cateImgWrap
            width 144px
            height 144px
            img
              width 100%
              height 100%
          .cateItemName
            height 56px
            text-align center
            line-height 37px
            font-size 20px
</style>