<template>
	<view class="name-list">
		
		<view class="nav-bar">
			<uni-nav-bar title="列表" statusBar="true" leftIcon="back" @clickLeft="goBack" ></uni-nav-bar>
		</view>
		
		<view class="scroll" >
			<!-- <circle :p="p"></circle> -->
			<scroll-view scroll-y class="scroll-list" >
				<view >
					
					<view class="list-item"  @click="toDetail(index)" v-for="(item,index) in poetryList" :key="index">
						
						<view class="list-head">
							<text>{{item.name}}</text>
							<text>{{'评分:'+item.sanCaiWuGe.totalSore}}</text>
						</view>
						<view class="list-middle">

							<!-- <text>{{'「'+item.content+'」'}}</text> -->
							<text>「</text>
							<text v-for="(word,n) in poetryList[index].content.split('')" :key="n"
								:class="{highlight: n == highlightIndex[index].f || n == highlightIndex[index].s}">
								{{word}}
								
							</text>
							<text>」</text>

						</view>
						<view class="list-footer">
							
							<text>{{item.title}}•{{item.author || '佚名'}}</text>
							<!-- <text :class="isLike ?'iconfont icon-aixin1':'iconfont icon-aixin'"  @click.stop="like()"></text> -->
							<likes :item="item" :page="page"></likes>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="footer" >
			<button type="primary" size="mini" @click="toMyLikes">我的收藏</button>
			<button type="primary" size="mini" @click="this.control(10)">换一批</button>
		</view>
	</view>



</template>

<script>
	// :class="{highlight: n-1 === highlightIndex[n-1].f || n-1 === highlightIndex[n-1].s}"
	import likes from '../../components/likes/likes.vue'
	export default {
		data() {
			return {
				formData: {},
				poetryList: [],
				page:'nameList',
				
			}
		},
		components:{
			likes
		},
		onLoad(option) {
			this.formData = JSON.parse(option.formData)
			this.control(10)
			
			
			
		},
		computed: {
			highlightIndex() {
				let obj = []
				this.poetryList.forEach(item => {
					let name = item.name
					let content = item.content
					let f = content.indexOf(name.slice(1, 2))
					let s = content.indexOf(name.slice(2, 3))
					obj.push({
						f: f,
						s: s
					})

				})
				return obj
			},
			
		},
		methods: {
			goBack() {
				uni.navigateBack({

				})
			},
			async getName() {
				uni.showLoading({
					title: '请稍等...',
				})
				let res = await uniCloud.callFunction({
					name: "get_poetry",
					data:{
						type:this.formData.poetryType
					}
				})
				let poetryList = res.result.data
				let randomNameArray = []
				for (let key in poetryList) {
					let completeContent = poetryList[key].content
					let content = poetryList[key].content.split('。')
					content = content.filter((s) => {
						return s && s.trim();
					})
					content = content[this.Random(0, content.length - 1)]
					
					poetryList[key].content = content
					poetryList[key].completeContent = completeContent
					
					// let content1 = content.split('，')[0]
					// let content2 = content.split('，')[1]
					// if(!content1 || !content2){
					// 	return
					// }
					let reg = /([\u4e00-\u9fa5])+/g
					// let contentStr1 = content1.match(reg).join("")
					// let contentStr2 = content2.match(reg).join("")
					// contentStr1 = contentStr1.split('')
					// contentStr2 = contentStr2.split('')
					let contentStr = content.match(reg).join("").split("")
					let randomNum = this.randomNum(0,contentStr.length)
					let firstWord = contentStr[randomNum[0]]
					let secondWord = contentStr[randomNum[1]]
					let randomName = firstWord + secondWord 
					
					// for (let n = 0 ;n < 2 ; n ++) {
					// 	randomName+=contentStr[this.Random(0,contentStr.length-1)]
					// }
					// randomName = contentStr1[this.Random(0, contentStr1.length - 1)] + contentStr2[this
					// 	.Random(0, contentStr2.length - 1)]
					poetryList[key].name = this.formData.firstName+ randomName
				}
				return poetryList


			},
			Random(min, max) {
				return Math.round(Math.random() * (max - min)) + min;
			},
			//取两个随机数 
			randomNum(min, max) {
				let num1 = Math.floor(Math.random() * (max - min)) + min;
				    let num2 = Math.floor(Math.random() * (num1 - min + 1)) + min;
				    if (num1 === num2) {
				        num1++
				    } else if (num1 === max) {
				        num2--
				    }
				    return [num2,num1]
				
			},
			async filterName(count) {
				
					let poetryList = await this.getName()
					let names = []
					poetryList.forEach((value) => {
						names.push(value.name)
					})
					
					let res = await uniCloud.callFunction({
						name: "get_gender",
						data: {
							names: names
						}
					})
					let genderRes = res.result.data
					genderRes.forEach((value, key) => {
						poetryList[key].sex = value.gender
					})
					if (this.formData.sex === "男") {
						poetryList = poetryList.filter(value => {
							return value.sex === "male"
						})
					} else if (this.formData.sex === "女") {
						poetryList = poetryList.filter(value => {
							return value.sex === "female"
						})
					}
					names = []
					poetryList.forEach((value) => {
						names.push(value.name)
					})
					
					let res1 = await uniCloud.callFunction({
						name: "wuge",
						data: {
							names: names
						}
					})
					let wuGe = res1.result.data
					
					wuGe.forEach((value, key) => {
						poetryList[key].sanCaiWuGe = value
					})
					if(this.formData.score !=='不限'){
						poetryList = poetryList.filter(value => {
							if(this.formData.score === '中'){
								return value.sanCaiWuGe.totalSore > 50
							}else if(this.formData.score === '高'){
								return value.sanCaiWuGe.totalSore > 70
							}
						})
					}
					// this.poetryList.push(...poetryList)
					
					// poetryList = poetryList.slice(0, count)
					
				
				
				return new Promise((resolve, reject) => {
					if (poetryList) {
						this.poetryList.push(...poetryList)
						resolve()
					} else {
						reject('error')
					}
				})
			},
			async control(count) {
				this.poetryList = []
				do {
					
					await this.filterName().then(res => {
						
						this.poetryList = this.poetryList.slice(0, count)
						console.log(this.poetryList.length)
						uni.hideLoading()
					}).catch(e => {
					})
				}

				while (this.poetryList.length < count)
				

			},
			toDetail(index){
				
				let dataList = JSON.stringify(this.poetryList[index])
				
				let date =JSON.stringify ({date:this.formData.date,lunar:this.formData.lunar})
				uni.navigateTo({
					url:'../name-detail/name-detail?data='+dataList+'&type=qiming' + '&date=' + date
				})
			},
			toMyLikes(){
				uni.navigateTo({
					url:'../my-likes/my-likes'
				})
			}
			
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
		box-sizing: border-box;
	}

	.name-list {
		display: flex;
		flex-direction: column;
		flex: 1;
		box-sizing: border-box;
		.scroll {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;
			margin-bottom: 80rpx;
			.scroll-list {
				height: 100%;
				display: flex;
				flex-direction: column;
				.list-item {
					position: relative;
					padding: 20px;
					margin: 20rpx;
					border-radius: 20rpx;
					color: #fff;
					box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
					
					font-size: 30rpx;
					
					.list-head,
					.list-footer {
						display: flex;
						justify-content: space-between;
					}

					.list-middle {
						margin: 20rpx 0;

						text {
							&.highlight {
								font-size: 35rpx;
								color: $highlight;
							}
						}

					}

					.list-head {
						text:first-child {
							font-weight: bold;
							font-size: 40rpx;
							color: #eea2a4;
						}
					}

					.list-footer {
						text:nth-child(2) {
							font-size: 50rpx;
						}
					}
					
				}
			}
		}
		.footer{
			padding: 0 10rpx;
			display: flex;
			width: 100%;
			height: 80rpx;
			position: fixed;
			bottom: 10rpx;
			box-sizing: border-box;
			// background-color: #FFFFFF;
			align-items: center;
			
			button{
				flex: 1;
				margin-left: 10rpx;
				height: 80%;
				background: none;
				color: #fff;
				text-align: center;
				
			}
			button::after {
				border-radius: 50rpx;
				border: 2px solid #fff;
			}
			
		}
	}
</style>
