<template>
	<view class="name-detail-tab">
		<text @click="click(0)" :class="{active:tabIindex === 0}">诗歌来源</text>
		<text @click="click(1)"  :class="{active:tabIindex === 1}">三才五格</text>
	</view>
</template>

<script>
	export default {
		name:"name-detail-tab",
		data() {
			return {
				tabIindex:0
			};
		},
		created() {
			uni.$on("swiperChange",this.swiperChange)
		},
		methods:{
			click(e){
				switch(e){
					case 0 :
					this.index = 0
					break;
					case 1 :
					this.index = 1
					break;
				}
				uni.$emit("tabClick",e)
			},
			swiperChange(e){
				this.tabIindex = e
			}
		}
	}
</script>

<style lang="scss" scoped>
	.name-detail-tab{
		
		padding: 15rpx;
		margin: 20rpx;
		display: flex;
		justify-content: space-around;
		color: #fff;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		border-radius: 20rpx;
		
		.active{
			border-bottom: 5px solid $you-lan;
			font-weight: bold;
		}
	}
</style>
