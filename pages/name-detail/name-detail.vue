<template>
	<view class="name-detail">
		<view class="nav-bar">
			<uni-nav-bar title="名字解析" statusBar="true" leftIcon="back" @clickLeft="goBack"></uni-nav-bar>
		</view>
		<name-detail-head :dataList="dataList" :type = "type"></name-detail-head>
		<name-detail-tab :dataList="dataList" ></name-detail-tab>
		<name-detail-swiper :dataList="dataList" :contentArray="contentArray" :sanCai="sanCai" :type = "type"></name-detail-swiper>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:{},
				contentArray:[],
				sanCai:[],
				type:''
			}
		},
		onLoad(option) {
			this.dataList = JSON.parse(option.data)
			this.type = option.type
			this.sanCai = this.dataList.sanCaiWuGe.sanCai.sancai.split('')
			if(option.type === 'qiming'){
				this.contentArray = this.dataList.completeContent.split("。")
				this.contentArray.pop()
			}
			
			
			
			
			
		},
		methods: {
			goBack() {
				uni.navigateBack({
			
				})
			},
		}
	}
</script>

<style lang="scss" >
	page {
		height: 100%;
		display: flex;
	}
	.name-detail{
		display: flex;
		flex-direction: column;
		flex: 1;
		
		
		
	}
</style>
