<template>
	<view class="name-detail-poetry" v-if="type === 'qiming'">
		<view class="scroll">
			<scroll-view scroll-y="true" class="scroll-list">
				<view>
					<view class="poetry-text">
						<text>{{dataList.title}}</text>
						<text>{{dataList.author + '[' + dataList.dynasty + ']'}} </text>
						<text v-for="(item,index) in contentArray" :key = 'index'>
							{{item+'。'}}
						</text>
					</view>
					<view class="poetry-tanslation">
						<text>
							译文
						</text>
						
						<text>
							{{dataList.translation}}
						</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
		
		
	
</template>

<script>
	export default {
		name:"name-detail-poetry",
		props:['dataList','contentArray','type'],
		data() {
			return {
				poetryContent:[],
			};
		},
		
	}
</script>

<style lang="scss" >
	.name-detail-poetry{
		
		.scroll{
			height: calc(100vh - 730rpx);
			overflow: hidden;
			box-sizing: border-box;
			
			.scroll-list{
				height: 100%;
				
			}
			.poetry-text,.poetry-tanslation {
				display: flex;
				flex-direction: column;
				color: #fff;
			}
			.poetry-text{
				text-align: center;
				& text:nth-child(1){
					font-weight: bold;
					font-size: 30rpx;
				}
				& text:nth-child(2){
					color: #ddd;
				}
			}
			.poetry-tanslation{
				margin: 20rpx;
				& text:nth-child(1){
					font-weight: bold;
					font-size: 35rpx;
				}
			}
		}
		
	}
		
		
	
</style>
