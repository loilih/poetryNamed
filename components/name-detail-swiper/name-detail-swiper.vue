<template>
	<view class="name-detail-swiper">
		<swiper :current="swiperIndex" class="swiper" @change="swiperChange">
			<swiper-item>
				<view class="swiper-item">
					<name-detail-poetry :dataList="dataList" :contentArray="contentArray" :type="type">
					</name-detail-poetry>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<name-detail-sancai :dataList="dataList" :sanCai="sanCai"></name-detail-sancai>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<birth-eight :birthEight="birthEight" v-if="birthEight!=null"></birth-eight>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: "name-detail-swiper",
		props: ['dataList', 'contentArray', 'sanCai', 'type', 'birthEight'],
		data() {
			return {
				swiperIndex: 0
			};
		},
		created() {
			uni.$on("tabClick", this.tabClick)


		},
		mounted() {

			this.$nextTick(function() {
				if (this.type === 'jieming') {
					this.swiperIndex = 1
				}
			})
		},
		methods: {
			tabClick(e) {
				this.swiperIndex = e
			},
			swiperChange(event) {
				uni.$emit("swiperChange", event.detail.current)
			}
		}
	}
</script>

<style lang="scss">
	.name-detail-swiper {
		padding: 30rpx;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		border-radius: 20rpx;
		margin: 20rpx;
		flex: 1;

		.swiper {
			height: calc(100vh - 750rpx);
		}
	}
</style>
