<template>
	<view class="date-select">
		<view class="date-title">
			生辰/预产期:
		</view>
		<view class="date-right" @click="calendarShow = true">
			{{dateString}}
			<text class="iconfont icon-icon1"></text>
		</view>
		<calendar :show="calendarShow" isHourShow @confirmDialog="confirmDialog" @closeDialog="closeDialog"></calendar>
	</view>
</template>

<script>
	import calendar from "../../components/quick-calendar/calendar.vue"
	export default {
		name: "date-select",
		components: {
			calendar
		},
		data() {

			return {
				date:null,
				dateString: "",
				year: 0,
				month: 0,
				day: 0,
				hour: 0,
				calendarShow: false
			};
		},
		created() {
			this.dateString = ""
			
		},
		methods: {
			dateFormat(date = new Date(), fmt = "YYYY-MM-DD hh:mm:ss") {
				let ret;
				const opt = {
					"Y+": date.getFullYear().toString(), // 年
					"M+": (date.getMonth() + 1).toString(), // 月
					"D+": date.getDate().toString(), // 日
					"h+": date.getHours().toString(), // 时
					"m+": date.getMinutes().toString(), // 分
					"s+": date.getSeconds().toString() // 秒
				};
				for (let k in opt) {
					ret = new RegExp("(" + k + ")").exec(fmt);
					if (ret) {
						if (k === 'Y+') {
							fmt = fmt.replace(ret[1], opt[k].substr(ret[1].length * (-1)))
						} else {
							fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length,
								"0")))
						}
					};
				};
				return fmt;
			},
			confirmDialog(d) {
				this.calendarShow = false
				
				let date = d.date + " " + d.time;
				console.log(date)
				date = date.substring(0, 19);
				date = date.replace(/-/g, '/');
				date = new Date(date)
				
				this.dateString = this.dateFormat(date, "YYYY年MM月DD日 hh时")
				this.$emit("dateChange",{date:date,lunar: d.lunar})
				

			},
			closeDialog() {
				this.calendarShow = false
			}
		},

	}
</script>

<style lang="scss" scoped>
	.date-select {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 20rpx 0;
		margin: 20rpx 0;
		border-bottom: 1px solid #ddd;
		text-align: right;

	}

	.date-right {
		flex: 1;

		text {
			margin-left: 10rpx;
			padding: 15rpx;
		}
	}
</style>
