<template>
	<view class="home">
		<view class="index-head">
			<page-head title="首页"></page-head>
		</view>
		<view class="index-content">

			<view class="index-sex">

				<view class="index-content-sex_male" @click="active(0)" :class="{active:sex === 0}">
					<image src="../../static/imgs/boy.png" mode=""></image>
					<text>男宝</text>
				</view>
				<view class="index-content-sex_female" @click="active(1)" :class="{active:sex === 1}">
					<image src="../../static/imgs/gril.png" mode=""></image>
					<text>女宝</text>
					<a v-bind:ref="a"></a>
				</view>
			</view>
			<view class="index-content-form">
				<form @submit="submitForm">
					<view class="form-item">
						<view class="title">
							出自:
						</view>
						<picker mode="selector" :range="poetryArray" :value="poetryPickerIndex" name="poetry"
							@change="poetryPickerChange">
							<view>
								{{poetryArray[poetryPickerIndex]}}
								<text class="iconfont icon-icon1"></text>
							</view>

						</picker>
					</view>
					<view class="form-item">
						<view class="title">
							评分:
						</view>
						<picker mode="selector" :range="scoreArrar" :value="scorePickerIndex" name="score"
							@change="scorePickerChange">
							<view>
								{{scoreArrar[scorePickerIndex]}}
								<text class="iconfont icon-icon1"></text>
							</view>

						</picker>
					</view>
					<view class="form-item">
						<view class="title">
							小主姓氏:
						</view>
						<input class="uni-input" type="text" name="firstName" placeholder="请输入小主姓氏"  />
						<text class="iconfont icon-icon1"></text>
					</view>
					<date-select @dateChange="dateChange"></date-select>
					<!-- <view class="yuliu-item">
					<view class="title">
						预留字:
					</view>
						<view class="input1-box">
							
							<input class="input " type="text" name="firstWord" placeholder="第一个字可留空" />
							<input class="input" type="text" name="secondWord" placeholder="第二个字可留空" />
						</view>
					
				</view> -->
					<button type="primary" form-type="submit">开始起名</button>

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
				poetryPickerIndex: 0,
				scorePickerIndex: 0,
				sex: 0,
				poetryArray: ['唐诗', '宋词', '楚辞', '诗经', '乐府', '古诗'],
				poeTypeArray: ['tangshi', 'songci', 'chuci', 'shijin', 'yuefu', 'gushi'],
				formData: {
					sex: '男',
					poetryType: '',
					firstName: '1',
					score: '',
					firstWord: '',
					secondWord: '',
					date:null,
					lunar:""
				},
				scoreArrar: ['不限', '中', '高']
			}
		},

		onLoad() {
			this.login()
			uni.showShareMenu({

			})
		},

		methods: {

			active(e) {
				this.sex = e
				if (e === 0) {
					this.formData.sex = "男"
				} else if (e === 1) {
					this.formData.sex = "女"
				}

			},
			submitForm(e) {
				// this.formData.poetryType = this.poetryArray[e.detail.value.poetry]
				this.formData.poetryType = this.poeTypeArray[this.poetryPickerIndex]
				this.formData.score = this.scoreArrar[e.detail.value.score]
				this.formData.firstName = e.detail.value.firstName
				this.formData.firstWord = e.detail.value.firstWord
				this.formData.secondWord = e.detail.value.secondWord
				let rule = [{
						name: "firstName",
						checkType: "string",
						checkRule: "1,2",
						errorMsg: "姓氏应为1-2个字符"
					},
					{
						name: "firstName",
						checkType: "reg",
						checkRule: "^[\u4e00-\u9fa5]+$",
						errorMsg: "姓氏必须为汉字"
					}

				];

				// if(e.detail.value.firstWord !==''){
				// 	rule.push({name:"firstWord", checkType : "string", checkRule:"0,2",  errorMsg:"预留字应为1个字符"})
				// 	rule.push({name:"firstWord", checkType : "reg", checkRule:"^[\u4e00-\u9fa5]+$",  errorMsg:"姓氏必须为汉字"},)
				// }
				var checkRes = graceChecker.check(this.formData, rule);
				if (checkRes) {
					let data = JSON.stringify(this.formData)
					uni.navigateTo({
						url: '../name-list/name-list?formData=' + data
					})

				} else {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
				}

			},
			poetryPickerChange(e) {
				this.poetryPickerIndex = e.detail.value

			},
			scorePickerChange(e) {
				this.scorePickerIndex = e.detail.value
			},
			login() {
				uni.login({
					// #ifdef MP-TOUTIAO

					success: (res) => {
						uniCloud.callFunction({
								name: 'code_to_session',
								data: {
									code: res.code
								}
							})
							.then(res => {
								uni.setStorageSync('uid', res.result.data.data.unionid)
								uniCloud.callFunction({
									name: 'update_user',
									data: {
										uid: res.result.data.data.unionid,
										type: 'toutiao'
									}
								})

							})
					},
					fail: (err) => {
						uni.showToast({
							title: "登录出现了点小问题请重新运行~"
						})
					}
					// #endif
					// #ifdef MP-WEIXIN
					provider: 'weixin',
					success: (res) => {

						uniCloud.callFunction({
								name: 'wx_code2Session',
								data: {
									code: res.code
								}
							})
							.then(res => {
								uni.setStorageSync('uid', res.result.data.openid)
								uniCloud.callFunction({
									name: 'update_user',
									data: {
										uid: res.result.data.openid,
										type: "weixin"
									}
								})

							})
					},
					fail: (err) => {
						uni.showToast({
							title: "登录出现了点小问题请重新运行~"
						})
					}
					// #endif

				})
			},
			dateChange(d){
				this.formData.date = d.date;
				this.formData.lunar = d.lunar
			}

		}
	}
</script>

<style lang="scss" scoped>
	// .index-head{
	// 	width: 100%;
	// 	// height: 300px;
	// 	image{
	// 		width: 100%;
	// 		height: 100%;
	// 	}
	// }
	.index-content {
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border-radius: 30rpx;
		margin: 0 20rpx;
		position: relative;
		top: -50rpx;

		.index-sex {
			display: flex;
			justify-content: space-around;
			margin-top: 30rpx;
			border-bottom: 1px solid #ddd;

			image {
				padding: 10rpx;
				width: 32px;
				height: 32px;
				box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
				border-radius: 50%;
			}

			text {
				padding: 10rpx;
				display: block;
			}

			.index-content-sex_male {
				image {}
			}

			.active {
				image {
					background-color: #519a73;
				}

				text {
					color: #519a73;
				}
			}

		}

		.form-item {
			text {
				margin-left: 10rpx;
				padding: 15rpx;
			}

			display:flex;
			justify-content: space-between;
			width:100%;
			padding:10rpx 0;
			margin: 5rpx 0;
			border-bottom: 1px solid #ddd;
			text-align: right;
		}

		.uni-input {
			height: 50rpx;
			padding: 15rpx 25rpx;
			line-height: 50rpx;
			font-size: 28rpx;
			background: #FFF;
			flex: 1;
		}

		.form-item .title {
			padding: 20rpx 0;
		}

		button {
			background-color: $bace-color;
			width: 60%;
			margin-top: 30rpx;
			font-size: 30rpx;
		}

		.yuliu-item {
			padding: 10rpx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #ddd;
			padding: 10rpx 0;
			margin: 5rpx 0;

			.input1-box {
				display: flex;

				padding: 20rpx;
				width: 70%;
			}

			.input {
				padding-left: 12rpx;
			}

			.input:nth-child(1) {
				border: 1px solid #007AFF;
				border-radius: 50rpx 0 0 50rpx;
			}

			.input:nth-child(2) {
				border: 1px solid #007AFF;
				border-left: none;
				border-radius: 0 50rpx 50rpx 0;
			}
		}

	}
</style>
