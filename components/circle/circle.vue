<template>
	<view class="circle">
		<cmd-circle cid="circle18" type="circle" :percent="p" font-color="#ffffff" :font-size="24" width="150" stroke-width="18" stroke-shape="square" stroke-color="#55aa00" stroke-background="#ffffff"></cmd-circle>
	</view>
</template>

<script>
	import cmdCircle from "@/components/cmd-circle/cmd-circle.vue"
	export default {
		name: "circle",
		components: {
			cmdCircle
		},
		props:["p"],
		data() {
			return {

			};
		},
		
	}
</script>

<style lang="scss">
	.circle{
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
