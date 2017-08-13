<template>
	<div class="file-container" :class='{disable: readonly}'>
		<input type="file" :disabled="readonly"  @change="choose($event.target.files)" v-if="multiple" multiple>
		<input type="file" :disabled="readonly" @change="choose($event.target.files)" v-else>
		<span><slot>选择文件</slot></span>
	</div>
</template>

<script>
	export default {
		props: {
			multiple: {
				type: Boolean,
				default: false
			},
			readonly: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			choose(files) {
				let dataUrls = [];
				for(let i = 0; i < files.length; i++) {
					let reader = new FileReader();
					reader.onload = function(event){
						dataUrls.push(event.target.result);
					}
					reader.readAsDataURL(files[i]);
				}
				this.$emit('selectFile', dataUrls);
			}
		}
	}
</script>

<style lang="less" scoped>
	@mainColor: #3dc6b6;
	@mainHoverColor: #20bba9;
	@disabledColor: #e5e5e5;

	.file-container {
		position: relative;
		display: inline-block;
		padding:4px 10px;
		
		overflow: hidden;
		height: 20px;
		line-height: 20px;
		background: @mainColor;
		color:#fff;
		border-radius: 2px;

		&:hover {
			background:@mainHoverColor;
		}

		&.disable {
			background: @disabledColor;
			color:#b2b2b2;
		}
		

		input[type='file'] {
			position:absolute;
			left:0;
			top:0;
			opacity: 0;
			filter: alpha(opacity=0);
		}
	}
</style>