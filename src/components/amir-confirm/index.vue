<template>	
	<div class="amir-confirm" v-show="show">
		<div class="container">
			<div class="content">
				<p><slot>你确定吗？</slot></p>
				<amir-button @click="cancel" class="cancel-button">{{cancelText}}</amir-button>
				<amir-button @click="confirm">{{confirmText}}</amir-button>
			</div>
		</div>
	</div>
</template>

<script>
	import AmirButton from '../amir-button'
	export default {
		components: {
			AmirButton
		},
		props: {
			show: {
				required: true,
				default: false
			},
			confirmText: {
				default: '确定'
			},
			cancelText: {
				default: '取消'
			}
		},
		data() {
			return {

			}
		},
		methods: {
			confirm() {
				this.$emit('confirm');
			},
			cancel() {
				this.$emit('cancel');
			}
		}
	}
</script>
<style lang="less" scoped>
	.amir-confirm {
		position: absolute;
		left:0;
		right:0;
		top:0;
		bottom:0;
		background: rgba(33,33,33,0.3);

		.container {
			width:260px;
			height: 140px;
			text-align: center;
			color:#000;
			background:#fff;
			border:1px solid #fff;
			border-radius: 4px;
			position:fixed;
			left:50%;
			top:50%;
			margin-left: -130px;
			margin-top: -70px;
			.content {
				width:260px;
				height:100px;
				position:absolute;
				top:50%;
				left:50%;
				margin-left: -130px;
				margin-top: -50px;
				.cancel-button {
					margin-right: 20px;
				}
			}
		}
	}
</style>