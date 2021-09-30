<template>
	<view class="name-detail-head">
		<view class="name-detail-head-left">
			<text>{{dataList.name}}</text>
			<text>{{dataList.content}}</text>
			<text >{{'评分:' + dataList.sanCaiWuGe.totalSore}}</text>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"name-detail-head",
		props:['dataList','type'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.name-detail-head{
		
		padding: 30rpx;
		margin: 20rpx;
		border-radius: 20rpx;
		position: relative;
		justify-content: center;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		display: flex;
		align-items: center;
		.name-detail-head-left{
			display: flex;
			flex-direction: column;
			text-align: center;
			& text:nth-child(1){
				font-size: 40rpx;
				color: #fff;
				font-weight: bold;
			}
			& text:nth-child(2){
				color: #ddd;
			}
			& text:nth-child(3){
				color: #eee;
			}
		}
		.name-detail-head-right{
			text{
				margin-right: 50rpx;
				color: #ddd;
				font-size: 30rpx;
			}
			.likes{
				position: absolute;
				right: 10rpx;
				top: 75%;
			}
		}
	}
</style>
