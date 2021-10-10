<template>
	<view class="name-detail">
		<view class="nav-bar">
			<uni-nav-bar title="名字解析" statusBar="true" leftIcon="back" @clickLeft="goBack" ></uni-nav-bar>
		</view>
		<uni-notice-bar single="" text="结果仅供参考" showIcon='true' showClose="true"></uni-notice-bar>
		<name-detail-head :dataList="dataList" :type = "type"></name-detail-head>
		<name-detail-tab :dataList="dataList" ></name-detail-tab>
		<name-detail-swiper 
			:dataList="dataList" 
			:contentArray="contentArray" 
			:sanCai="sanCai" 
			:type = "type"
			:birthEight = "birthEight"
			:date = "date"
			>
			</name-detail-swiper>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:{},
				contentArray:[],
				sanCai:[],
				type:'',
				date:null,
				birthEight:null,
				
			}
		},
		onLoad(option) {
			this.dataList = JSON.parse(option.data)
			this.date = JSON.parse(option.date)
			this.type = option.type
			this.sanCai = this.dataList.sanCaiWuGe.sanCai.sancai.split('')
			if(option.type === 'qiming'){
				this.contentArray = this.dataList.completeContent.split("。")
				this.contentArray.pop()
			}
			if(this.date.date != null){
				this.getBirthEight()
			}
			console.log(this.birthEight)
		},
		methods: {
			goBack() {
				uni.navigateBack({
			
				})
			},
			getBirthEight(){
				uni.showLoading({
					title:"加载中...."
				})
				uniCloud.callFunction({
					name:'birth_eight',
					data:{
						date:this.date.date,
						type:this.date.lunar
					},
					success: (res) => {
						this.birthEight = res.result.data
						console.log(this.birthEight)
						uni.hideLoading()
					},
					fail: (err) => {
						uni.hideLoading()
						uni.showToast({
							title:err 
						})
					}
				})
				
			}
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
