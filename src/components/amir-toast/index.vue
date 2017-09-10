<template>
	<div class="amir--toast" v-if="show">
		<div class="amir--toast__content">
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
		watch: {
			show: function(val, oldVal) {
				let _this = this;
				if(val) {
					setTimeout(()=>{
						_this.$emit('update:show', false);
					}, _this.time*1000);
				}
			}
		}

	}
</script>

<style lang="less">
	@import '../common.less';
	@b toast {
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

		@e content {
			margin-top: 25px;
		}
	}
</style>