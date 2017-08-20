<template>
		<button class="btn" @click="emitClick">
			<slot>确定</slot>
		</button>
</template>

<script>
	export default {
		methods: {
			emitClick() {
				this.$emit('click', 'sunyuhui');
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../common.less';
	
	@b btn {
		height: 30px;
		line-height: 30px;
		min-width: 45px;
		padding: 0 10px;
		font-size: 12px;
		background: @mainColor;
		border-radius: 2px;
		color:#fff;
		border: 1px solid @mainColor;

		@m big {
			height:40px;
			line-height: 40px;
			min-width:60px;
			padding: 0 15px;
			font-size: 14px;
		}

		@m bigger {
			height:60px;
			line-height: 60px;
			min-width: 160px;
			font-size: 24px;
			padding:0 20px;
			border-radius: 4px;
		}

		@m disabled {
			background:@disabledColor;
			color:#b2b2b2;
			border:1px solid #ccc;

			&:hover {
				background:@disabledColor;
				border:1px solid #ccc;
			}
		}

		@m hot {
			background:@assistColor;
			border:1px solid @assistColor;
			&:hover {
				background: @assistHoverColor;
				border:1px solid @assistHoverColor;
			}
		}

		&:hover {
			background: @mainHoverColor;
			border: 1px solid @mainHoverColor;
			cursor: pointer;
		}
	}

	
</style>