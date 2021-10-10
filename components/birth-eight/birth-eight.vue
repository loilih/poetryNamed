<template>
	<view class="birth-eight">
		<view class="birth-eight-content" v-if="birthEight!=null">
			<text>阴历: {{birthEight.lYear + "年" + birthEight.IMonthCn  + birthEight.IDayCn}}</text>
			<text>阳历: {{birthEight.lYear + "年" + birthEight.cMonth + "月" + birthEight.cDay + "日"}}</text>
			<text>生肖:{{birthEight.Animal}}</text>
			<view class="birth-eight-eight">
				<text>八字:</text>
				<text v-for="(item,index) in birthEight.eightAll.eight" :key = "index">{{item + " "}}</text>
				<text>属:</text>
				<text class="shu">{{birthEight.eightAll.shu}}</text>
			</view>
			<view class="birth-eight-five">
				<text>五行:</text>
				<text v-for="(item,index) in birthEight.fiveAll.five" :key = "index">{{item + " "}}</text> 
				<text>缺:</text>
				<text class="lose">{{birthEight.fiveAll.lose}}</text>
			</view>
		</view>
		<view class="emtpy" v-else>
			<text>(空)</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"birth-eight",
		props:['birthEight','date'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.birth-eight{
		color: #fff;
		font-size: 35rpx;
		.birth-eight-content{
			display: flex;
			flex-direction: column;
			.birth-eight-eight{
				.shu{
					color: $highlight;
				}
			}
			.birth-eight-five{
				.lose{
					color: $highlight;
				}
			}
		}
		.emtpy{
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
