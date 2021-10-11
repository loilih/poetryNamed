<template>
	<view class="my-likes">
		<view class="nav-bar">
			<uni-nav-bar title="收藏列表" statusBar="true" leftIcon="back" @clickLeft="goBack"></uni-nav-bar>
		</view>
		<view class="null" v-show="isNull">
			(空)
		</view>
		<view class="scroll">
			<scroll-view scroll-y="true"  class="scroll-list">
				
				<view class="likes-item" v-for="(item,index) in likes" :key="index" @click="toDetail(index)">
					<text>{{item.name}}</text>	
					<likes page="likesList" :item="item" :index="index" @cancelLike="cancelLike(index)"></likes>
				</view>
				
			</scroll-view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				likes:[],
				isNull:false,
			}
		},
		onLoad() {
			this.getLikes()
			
		},
		
		methods: {
			getLikes(){
				uni.showLoading({
					title:'加载中...'
				})
				let uid = uni.getStorageSync('uid')
				uniCloud.callFunction({
					name:'get_likes',
					data:{uid}
				})
				.then(res=>{
					uni.hideLoading()
					this.likes = res.result.data
					if(this.likes.length === 0) this.isNull = true
				})
				.catch(err=>{
					uni.showToast({
						title:'出现了一点小错误,请重试'
					})
				})
			},
			goBack(){
				uni.navigateBack({
					
				})
			},
			cancelLike(index){
				
				this.likes.splice(index,1)
				
			},
			toDetail(index){
				let dataList = JSON.stringify(this.likes[index])
				uni.navigateTo({
					url:'../name-detail/name-detail?data='+dataList+'&type=qiming&date=null'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		display: flex;
	}
	.my-likes{
		display: flex;
		flex-direction: column;
		flex: 1;
		.null{
			text-align: center;
			margin: 20rpx auto;
			font-size: 35rpx;
			color: #d9d9d9;
		}
		.scroll{
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;
			.scroll-list{
				height: 100%;
				display: flex;
				flex-direction: column;
				
				.likes-item{
					position: relative;
					box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
					border-radius: 20rpx;
					padding: 30rpx;
					margin: 20rpx;
					font-size: 35rpx;
					color: #fff;
				}
			}
		}
	}
</style>
