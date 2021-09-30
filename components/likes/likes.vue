<template>
	<view class="icons" @click.stop="likeTap">
		<uni-icons size="20" :type="like?'heart-filled':'heart'" color="#fff"></uni-icons>
	</view>
</template>

<script>
	export default {
		props:['item','page','index'],
		name: "likes",
		data() {
			return {
				like:false
			};
		},
		
		mounted() {
			if(this.page === 'nameList'){
				this.like = false
			}else if(this.page === 'likesList'){
				this.like = true
			}
		},
		methods:{
			likeTap(){
				
				this.updateLikes()
			},
			updateLikes(){
					
				uni.showLoading({
					title:"加载中..."
				})
				uniCloud.callFunction({
					name:'update_likes',
					data:{
						uid:uni.getStorageSync('uid'),
						author:this.item.author,
						book:this.item.book,
						content:this.item.content,
						dynasty:this.item.dynasty,
						name:this.item.name,
						sanCaiWuGe:this.item.sanCaiWuGe,
						sex:this.item.sex,
						title:this.item.title,
						completeContent:this.item.completeContent,
						translation:this.item.translation,
						_id:this.item._id,
					}
				}).then(res=>{
					if(this.like){
						if(this.page !== 'likesList'){
							this.like=!this.like
						}
							
						
						uni.hideLoading()
						uni.showToast({
							title:"取消收藏成功",
							icon:"success"
						})
						this.$emit('cancelLike')
					}else{
						this.like=!this.like
						uni.hideLoading()
						uni.showToast({
							title:"收藏成功",
							icon:"success"
						})
					}
					
				}).catch(err=>{
					uni.showToast({
						title:"出现了点小问题,请重试",
						icon:"error"
					})
				})
			}
			
		}
	}
</script>

<style>
	.icons {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
		right: 20rpx;
		bottom: 20rpx; 


	}
</style>
