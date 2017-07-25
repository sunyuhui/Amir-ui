<template>
		<button class="btn" @click="emitClick">
			<slot>确定</slot>
		</button>
</template>

<script>
	export default {
		methods: {
			emitClick() {
				this.$emit('click');
			}
		}
	}
</script>

<style lang="less" scoped>
	@mainColor: #3dc6b6;
  	@mainHoverColor: #20bba9;
  	@disabledColor: #e5e5e5;
  	@assistColor: #ff9d3c;
	@assistHoverColor: #ff8900;
	.btn {
		height: 30px;
		line-height: 30px;
		min-width: 45px;
		padding: 0 10px;
		font-size: 12px;
		background: @mainColor;
		border-radius: 2px;
		color:#fff;
		border: 1px solid @mainColor;

		&:hover {
			background: @mainHoverColor;
			border: 1px solid @mainHoverColor;
			cursor: pointer;
		}
	}

	.big {
		height:40px;
		line-height: 40px;
		min-width:60px;
		padding: 0 15px;
		font-size: 14px;
	}

	.bigger {
		height:60px;
		line-height: 60px;
		min-width: 160px;
		font-size: 24px;
		padding:0 20px;
		border-radius: 4px;
	}

	.disabled {
		background:@disabledColor;
		color:#b2b2b2;
		border:1px solid #ccc;

		&:hover {
			background:@disabledColor;
			border:1px solid #ccc;
		}
	}

	.hot {
		background:@assistColor;
		border:1px solid @assistColor;
		&:hover {
			background: @assistHoverColor;
			border:1px solid @assistHoverColor;
		}
	}
</style>