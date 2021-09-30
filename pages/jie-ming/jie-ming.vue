<template>
	<view class="jie-ming">
		<page-head title = '解名'></page-head>
		<view class="jie-ming-content">
			<view class="jie-ming-form">
				<form @submit="submitForm">
					<view class="form-item">
						<view class="title">
							姓名:
						</view>
						<input class="uni-input" type="text" name="name" placeholder="请输入姓名" value="李梅"/>
						<text class="iconfont icon-icon1" ></text>
					</view>
					<button type="primary" form-type="submit">开始解名</button>
				</form>
			</view>
		</view>
	</view>
</template>

<script>
	import graceChecker from "../../common/graceChecker.js"
	export default {
		data() {
			return {
				formData:{
					name:''
				},
			}
		},
		methods: {
			submitForm(e){
				this.formData.name = e.detail.value.name
				let rule = [
				    {name:"name", checkType : "string", checkRule:"2,4",  errorMsg:"姓名应为2-4个字符"},
				    {name:"name", checkType : "reg", checkRule:"^[\u4e00-\u9fa5]+$",  errorMsg:"姓名必须为汉字"},
				];
				var checkRes = graceChecker.check(this.formData, rule);
				if(checkRes){
					uni.showLoading({
						title:'解名中,请稍等...'
					})
					let names = []
					names.push(this.formData.name)
					uniCloud.callFunction({
						name:'wuge',
						data:{names:names}
					}).then(res=>{
						uni.hideLoading()
						let dataList ={}
						
						dataList.sanCaiWuGe = res.result.data[0]
						dataList.name = this.formData.name
						dataList = JSON.stringify(dataList)
						uni.navigateTo({
							url:'../name-detail/name-detail?data='+dataList + '&type=jieming'
						})
						
					}).catch(err=>{
						uni.showModal({
							title:'出现了点小错误,请重试'
						})
					})
					
				}else{
				    uni.showToast({ title: graceChecker.error, icon: "none" });
				}
				
				
			},
		}
	}
</script>

<style lang="scss">
	.jie-ming-content{
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border-radius: 30rpx;
		margin: 0 20rpx;
		position: relative;
		top: -50rpx;
		.form-item{
			text{
				margin-left: 10rpx;
				padding: 15rpx;
			}
			display:flex;
			justify-content: space-between;
			align-items: center;
			width:100%;
			padding:10rpx 0;
			margin: 5rpx 0;
			border-bottom: 1px solid #ddd;
			text-align: right;
		}
		.uni-input {
			height: 50rpx;
			padding: 15rpx 25rpx;
			line-height:50rpx;
			font-size:28rpx;
			background:#FFF;
			flex: 1;
		}
		button{
			background-color: $bace-color;
			width: 60%;
			margin-top: 30rpx;
			font-size: 30rpx;
		}
	}
</style>
