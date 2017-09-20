<template>
	<div class="amir--upload" :class="classObject">
		<input type="file" class="amir--upload__item" :disabled="readonly"  @change="choose($event.target.files)" v-if="multiple" multiple>
		<input type="file" class="amir--upload__item" :disabled="readonly" @change="choose($event.target.files)" v-else>
		<span><slot>选择文件</slot></span>
	</div>
</template>

<script>
	export default {
		name: 'a-upload',
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
		data() {
			return {
				classObject: {
					'amir--upload--disable': this.readonly
				}
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

<style lang="less">
	@import '../common.less';
	@b upload:hover {
		background:@mainHoverColor;
	}
	@b upload {
		position: relative;
		display: inline-block;
		padding:4px 10px;
		overflow: hidden;
		height: 20px;
		line-height: 20px;
		background: @mainColor;
		color:#fff;
		border-radius: 2px;

		@m disable {
			background: @disabledColor;
			color:#b2b2b2;
		}

		@m disable:hover {
			background: @disabledColor;
		}

		@e item {
			position:absolute;
			left:0;
			top:0;
			opacity: 0;
			filter: alpha(opacity=0);
		}
	}
</style>