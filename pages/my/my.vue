<template>
	<view class="my">
		<page-head title = '我的'></page-head>
		<view class="my-content">
			<view class="my-content-item" @click="toMyLikes">
				<view class="my-content-item_left">
					<text class="iconfont icon-aixin"></text>
					<text>我的收藏</text>
				</view>
				<view class="my-content-item_right">
					<!-- <text class="iconfont icon-icon1"></text> -->
					<uni-icons type="arrowright"></uni-icons>
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
		onLoad() {
			
		},
		methods: {
			toMyLikes(){
				uni.navigateTo({
					url:'../my-likes/my-likes'
				})
			}

		}
	}
</script>

<style lang="scss">
	.my { 
		.my-head {
			width: 100%;
			height: 15%;
			background-color: #007AFF;
		}

		.my-content {
			padding: 30rpx;
			// margin: 20rpx 0;
			background-color: #fff;
			.my-content-item {
				display: flex;
				justify-content: space-between;
				border-bottom: 1px solid #ddd;
				padding: 10rpx;
			
				// box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
				text {  
					margin: 0 10rpx;
				}
			}
			
		}
	}
</style>
