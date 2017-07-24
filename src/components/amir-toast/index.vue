<template>
	<div class="amir-toast-container" v-show="show">
		<div class="amir-toast">
			{{text}}
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				default: 'toast文案'
			},
			show: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style lang="less">
	@mainColor: #3dc6b6;
	.amir-toast-container {
		position:absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
		z-index:10000;
		background-color: rgba(255, 255, 255, 0.7);
		color: @mainColor;
		font-size: 18px;
		line-height: 26px;

		.amir-toast {
			position:fixed;
			left: 50%;
			top:50%;
			width:400px;
			height:60px;
			line-height: 60px;
			margin-top: -30px;
			margin-left: -200px;
			text-align: center;
		}
	}
</style>