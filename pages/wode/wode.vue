<template>
	<view class="wode">
		<page-head title = '我的'></page-head>
		<view class="wode-content">
			<view class="wode-content-item" @click="toMyLikes">
				<view class="wode-content-item-left">
					<text class="iconfont icon-aixin"></text>
					<text>我的收藏</text>
				</view>
				<view class="wode-content-item-right">
					<uni-icons type="arrowright"></uni-icons>
				</view>
			</view>
			<view class="wode-content-item" >
				<view class="wode-content-item-left">
					<uni-icons type="redo"></uni-icons>
					<text>分享给朋友</text>
				</view>
				<view class="wode-content-item-right">
					<button open-type="share" type="default">分享</button>
				</view>
			</view>
			<view class="wode-content-item" >
				<view class="wode-content-item-left">
					<uni-icons type="chat"></uni-icons>
					<text>联系我</text>
				</view>
				<view class="wode-content-item-right">
					<button open-type="contact" type="default">联系我</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShareAppMessage(res) {
			if (res.from === 'button') {
			    }
				
				return{
					title:"诗词取名",
					path:"/pages/index/index",
					imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-1d968452-a94c-40bd-8a27-8d34c15ea8c0/7552192a-1220-47d8-a2d3-7be20e9b7b84.jpg",
					success(res) {
						uni.showToast({
							title: '分享成功'
						})
					},
				}
				
				
		},
		methods: {
			toMyLikes(){
				uni.navigateTo({
					url:'../my-likes/my-likes'
				})
				
			},
			
			
		}
	}
</script>

<style lang="scss">
	.wode-content{
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border-radius: 30rpx;
		margin: 0 20rpx;
		position: relative;
		top: -50rpx;
		.wode-content-item{
			margin: 20rpx;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #ddd;
			
			.wode-content-item-left{
				flex: 1;
				& text:nth-child(1){
					font-size: 30rpx;
					font-weight: bold;
					margin-right: 10rpx;
					
				}
				
			}
			.wode-content-item-right{
				button{
					outline: none;
					// background-color: #007AFF;
					display: inline;
					background-color: #fff;
					font-size: 30rpx;
					padding: 5rpx 20rpx;
					
					
					
				}
				button::after {
					border-radius: 50rpx;
					border: 2px solid $bace-color;
				}
			}
			
		}
	}
</style>
