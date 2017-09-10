<template>
	<div class="amir--dialog" v-show="show">
		<div class="amir--dialog__content">
			<p class="amir--dialog__content__title">{{title}}</p>
			<div class="amir--dialog__content__main">
				<slot></slot>
			</div>
			<div class="amir--dialog__content__footer">
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
		},
		data() {
			return {

			}
		}
	}
</script>
<style lang="less">
	@b dialog {
		position: fixed;
		left:0;
		right:0;
		bottom:0;
		top:0;
		background: rgba(33,33,33,0.3);
		display: flex;
		justify-content: center;
		align-items: center;

		@e content {
			position:relative;
			background:#fff;
			min-width: 260px;
			max-width: 460px;
			min-height: 100px;
			max-height: 400px;
			border-radius: 4px;

			@e title {
				background:#eee;
				padding:0 10px;
				font-size: 16px;
				height:25px;
				line-height: 25px;
				color:#000;
				font-weight: bold;
			}

			@e main {
				margin:10px 0;
				padding:0 10px;
			}

			@e footer {
				width:100%;
				margin-bottom: 10px;
				text-align: center;
			}
		}
	}
</style>