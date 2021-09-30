<template>
	<view class="page-head">
		<image src="../../static/imgs/bj.jpg" mode="widthFix"></image>
		<view class="page-title">
			<text>{{title}}</text>
		</view>
	</view>
	
</template>

<script>
	export default {
		name:"page-head", 
		props:['title'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.page-head{
		width: 100%;
		position: relative;
		image{
			width: 100%;
			height: 100%;
		}
		.page-title{
			position: absolute;
			top: 10%;
			left: 30rpx;
			text{
				font-size: 50rpx;
				font-weight: bold;
				opacity: 0.5;
			}
		}
	}
</style>
