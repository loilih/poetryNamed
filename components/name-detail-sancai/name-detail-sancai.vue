<template>
	<view class="name-detail-sancai">
		<view class="scroll">
			<scroll-view scroll-y="true" class="scroll-list">
				<view class="wu-ge-contern">

					<view class="contern-title">
						<text>五格</text>
					</view>
					<view class="wu-ge-item" v-for="(item,index) in dataList.sanCaiWuGe.wuGe" :key="index">
						<view class="wu-ge-text">
							<text>{{item.title}}:{{item.score}}</text>
							<text :style="wuGeStyle[index]">{{item.level}}</text>
							<text :title="title"></text>
						</view>
						<view class="wu-ge-explain">
							<text v-bind:ref="a">{{item.des}}</text>
						</view>
					</view>

				</view>
				<view class="san-cai--contern">
					<view class="contern-title">
						<text>三才</text>
					</view>
					<view class="san-cai-detail">
						<text v-for="(item,index) in sanCai" :key="index" :style="sanCaiStyleA[index]">
							{{item}}
						</text>
						<view class="san-cai-level">
							<text :style="sanCaiLevelStyle[0]">{{dataList.sanCaiWuGe.sanCai.level}}</text>
						</view>
					</view>
					
					<view class="san-cai-des">
						<text>
							{{dataList.sanCaiWuGe.sanCai.des}}
						</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "name-detail-sancai",
		props: ['dataList', 'sanCai','type'],
		data() {
			return {
				wuGeStyle:[],
				sanCaiStyleA:[],
				sanCaiLevelStyle:[]
			};
		},
		mounted() {
			this.$nextTick(function(){
				this.wuGeLevelStyle(this.dataList.sanCaiWuGe.wuGe,this.wuGeStyle)
				this.wuGeLevelStyle(this.dataList.sanCaiWuGe.sanCai.level,this.sanCaiLevelStyle)
				this.sanCaiStyle()
				
			})
		},
		methods:{
			wuGeLevelStyle(c,d){ 
				
				
				for (let s of c) {
					if(s.level === '大吉'){
						d.push('background-color: #1f3696;')
					}else if(s.level === '中吉'){
						d.push('background-color: #dbce54;')
					}else{
						d.push('background-color: #c4473d;')
					}
						
				}
				
			},
			sanCaiStyle(){
				let temArray=this.sanCai
				for (let s of temArray) {
					switch(s){
						case '金' :
						this.sanCaiStyleA.push('background-color: #FFCC33;')
						break;
						case '木':
						this.sanCaiStyleA.push('background-color: #006633;')
						break;
						case '水':
						this.sanCaiStyleA.push('background-color: #99CCFF;')
						break;
						case '火':
						this.sanCaiStyleA.push('background-color: #FF6666;')
						break;
						case '土':
						this.sanCaiStyleA.push('background-color: #CCCCCC;')
						break;
					
					}
						
				}
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.name-detail-sancai {
		color: #fff;

		.scroll {
			height: calc(100vh - 750rpx);
			overflow: hidden;
			box-sizing: border-box;

			.scroll-list {
				height: 100%;

			}

			.contern-title {
				font-size: 40rpx;
				font-weight: bold;
				border-bottom: 1px solid #ddd;
				text-align: center;
			}

			.wu-ge-contern {

				.wu-ge-text {
					display: flex;
					align-items: center;

					.test {
						background-color: #007AFF;
					}

					text {
						border-radius: 10rpx;
						padding: 5rpx;
						margin: 10rpx;

					}

					text:nth-child(1) {
						background-color: $you-lan;
					}

					text:nth-child(2) {
						background-color: $yu-hong;
					}

				}

			}

			.san-cai-detail {
				margin: 20rpx;
				display: flex;
				
				align-items: center;
				& text {
					text-align: center;
					line-height: 30rpx;
					padding: 10rpx;
					border-radius: 50%;
					height: 30rpx;
					width: 30rpx;
					
				}
				.san-cai-level{
					& text{
						padding: 10rpx;
						margin-left: 10rpx;
						border-radius: 5rpx;	
					}
					
					
				}

				
			}
		}

	}
</style>
