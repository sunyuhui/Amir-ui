<template>
	<div class="amir-dialog-container" v-show="show">
		<div class="dialog-content">
			<p class="title">{{title}}</p>
			<div class="main">
				<slot></slot>
			</div>
			<div class="footer">
				<slot name="footer"></slot>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			title: {
				type: String,
				default: '弹出框'
			},
			show: {
				type: Boolean,
				default: false
			}
		}
	}
</script>
<style lang="less" scoped>
	.amir-dialog-container {
		position: fixed;
		left:0;
		right:0;
		bottom:0;
		top:0;
		background: rgba(33,33,33,0.3);
		display: flex;
		justify-content: center;
		align-items: center;

		.dialog-content {
			position:relative;
			background:#fff;
			min-width: 260px;
			max-width: 460px;
			min-height: 100px;
			max-height: 400px;
			border-radius: 4px;

			.title {
				background:#eee;
				padding:0 10px;
				font-size: 16px;
				height:25px;
				line-height: 25px;
				color:#000;
				font-weight: bold;
			}
			.main {
				margin:10px 0;
				padding:0 10px;
			}
			.footer {
				width:100%;
				margin-bottom: 10px;
				text-align: center;
			}
		}
	}
</style>