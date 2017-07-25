<template>
	<div class="amir-toast-container" v-show="show">
		<div class="content">
			<slot>toast</slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			},
			time: {
				type: Number,
				default: 2,
				validator(value) {
					return value > 0;
				}
			}
		},
		mounted() {
			let _this = this;
			setTimeout(()=>{
				_this.$emit('update:show', false);
			}, _this.time*1000);
		}

	}
</script>

<style lang="less">
	@mainColor: #3dc6b6;
	.amir-toast-container {
		position:absolute;
		width:200px;
		height:70px;
		left:50%;
		top:50%;
		margin-left: -100px;
		margin-top: -35px;
		color: #fff;
		font-size: 18px;
		background:rgba(33,33,33,0.3);
		border-radius: 4px;
		text-align: center;

		.content {
			margin-top: 25px;
		}
	}
</style>