<template>
	<view class="detail">
		<view class="nav-bar">
			<uni-nav-bar title="名字解读" statusBar="true" leftIcon="back" @clickLeft="goBack"></uni-nav-bar>
		</view>
		<view class="scroll">
			<scroll-view scroll-y="true" class="scroll-list">
				<view>
					<view class="name-detail">
						<view class="name-title">
							<text>{{dataList.name}}</text>
						</view>
						<view class="detail-head">
							<text>诗歌来源</text>
						</view>
						<view class="poetry-detail">
							<text>{{dataList.title+'\n'
									+dataList.author+  '〔'+dataList.dynasty+'〕'+'\n'
									+dataList.content
									}}
								</text>
						</view>
					</view>
					<view class="wu-ge-detail">
						<view class="detail-head wu-ge-score" >
							<text>五格</text>
							<text>评分:{{dataList.sanCaiWuGe.totalSore}}</text>
							<text ></text>
						</view>
						<view class="wu-ge-contern" >
							<view class="wu-ge-item" v-for="(item,index) in dataList.sanCaiWuGe.wuGe" :key="index">
								<view class="wu-ge-text">
									<text>{{item.title}}:{{item.score}}</text>
									<text :style="levelArray[index]">{{item.level}}</text>
									<text :title="title" ></text>
								</view>
								<view class="wu-ge-explain">
									<text v-bind:ref="a">{{item.des}}</text>
								</view>
							</view>
								
						</view>
					</view>
					<view class="san-cai-detail">
						<view class="detail-head">
							<text>三才</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:{},
				levelArray:[],
				title:'hello'
			}
		},
		
		onLoad(option) {
			this.dataList = JSON.parse(option.data)
			
			this.levelArray = this.getLevelArray()
			
		},
		
		methods: {
			goBack() {
				uni.navigateBack({

				})
			},
			getLevelArray(){
				let levelArray =[]
				let temArray=this.dataList.sanCaiWuGe.wuGe
				for (let s of temArray) {
					if(s.level === '大吉'){
						levelArray.push('background-color: #1f3696;')
					}else if(s.level === '中吉'){
						levelArray.push('background-color: #dbce54;')
					}else{
						levelArray.push('background-color: #c4473d;')
					}
						
				}
				return levelArray
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
	}
	.detail{
		display: flex;
		flex-direction: column;
		flex: 1;
		.detail-head{
			// font-size: 30rpx;
			font-weight: 600;
			margin: 20rpx 0;
			border-bottom: 1px solid #eee;
			padding: 10rpx 0;
		}
		.detail-head::before{
			content: '';
			border-left: 3px solid $highlight;
			margin-right: 15rpx;
		}
		.scroll{
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;
			.scroll-list{
				height: 100%;
				display: flex;
				flex-direction: column;
				.name-detail{
					padding: 30rpx;
					box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
					border-radius: 20rpx;
					margin: 20rpx;
					color: #fff;
					.name-title{
						font-size: 40rpx;
						font-weight: bold;
						text-align: center;
						margin: 20rpx;
					}
					
					.poetry-detail{
						text-align: center;
					}
				}
				.wu-ge-detail{
					padding: 30rpx;
					box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
					border-radius: 20rpx;
					margin: 20rpx;
					color: #fff;
					.wu-ge-score{
						& text:nth-child(2){
							color: $yu-hong;
							margin-left: 10rpx;
							// font-weight: normal;
						}
					}
					.wu-ge-contern{
						
						// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
						// border-radius: 20rpx;
						.wu-ge-text{
							display: flex;
							align-items: center;
							.test{
								background-color: #007AFF;
							}
							text{
								border-radius: 10rpx;
								padding: 5rpx;
								margin: 10rpx;
								
							}
							text:nth-child(1){
								background-color: $you-lan;
							}
							text:nth-child(2){
								background-color: $yu-hong;
							}
							
						}
						
					}
				}
				.san-cai-detail{
					padding: 30rpx;
					box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
					border-radius: 20rpx;
					margin: 20rpx;
					color: #fff;
				}
			}
		}
		
		
	}
</style>
