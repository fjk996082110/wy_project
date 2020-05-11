<template>
  <div class="container-water-fall">
    <waterfall :col='col' :width="itemWidth" :gutterWidth="gutterWidth"  :data="data"  @loadmore="loadmore"  @scroll="scroll"  >
      <template >
        <div class="cell-item" v-for="(item, index) in data" :key="index">
          <img :src="item.topics[0].picUrl" alt="加载错误"  /> 
          <div class="item-body">
              <div class="item-desc">{{item.topics[0].title}}</div>
              <div class="item-footer">
                  <!-- <div class="avatar" :style="{backgroundImage : `url(${item.topics.avatar})` }"></div> -->
                  <div class="avatar">
										<img :src="item.topics[0].avatar" alt="">
									</div>
                  <div class="name">{{item.topics[0].nickname}}</div>
                  <!-- <div class="like" :class="item.liked?'active':''" > -->
                  <div class="like">
                      <i ></i>
                      <div class="like-total">283K</div>  
                  </div>
              </div>
          </div>
        </div>
      </template>
    </waterfall>
    
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import {GETMANUAL} from '../../store/mutation_type.js'
export default {
	name:"waterFall",
	data(){
		return{
			data:[],
			col:2,
		}
	},
	computed:{
		...mapState(['manualList']),
		itemWidth(){  
					return (138*0.5*(document.documentElement.clientWidth/750))
		},
		gutterWidth(){
					return (9*0.5*(document.documentElement.clientWidth/750))
		}
	},
	methods:{
		...mapActions([GETMANUAL]),
		scroll(scrollData){
			// console.log(scrollData)
		},
		switchCol(col){
			this.col = col
			console.log(this.col)
		},
		loadmore(){
			console.log('index')
			// this.data = this.data.concat(this.data)
		}
	},
	async mounted(){
		await this[GETMANUAL]()
		this.data = this.manualList
	}
}
</script>

<style lang="stylus">
.container-water-fall
	height 100%
	display flex !important
	#vueWaterfall
		display flex
		.vue-waterfall-column
			width 100% !important
			margin-left 0px !important
			// display flex !important
			.cell-item
				width 100%
				padding 10px
				box-sizing border-box
				&>img
					width 4.7rem
					height 4.7rem
				.item-body
					.item-desc
						margin-top 10px
						line-height 50px
						font-size 30px
					.item-footer
						margin-top 10px
						display flex
						justify-content space-between
						align-items center
						position relative
						.avatar
							width 55px
							height 55px
							border-radius 50%
							&>img
								width 100%
								height 100%
								border-radius 50%
						.name
							position absolute
							left 65px
							top 20px
</style>