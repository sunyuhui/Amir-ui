<template>
	<div>
		<!-- <input type="file" name="" id="" @change="choose($event.target.files)" v-if="multiple" multiple>
		<input type="file" name="" id="" @change="choose($event.target.files)" v-else> -->
		<button @click="emitClick">测试butotn</button>
	</div>
	
</template>

<script>
	export default {
		props: {
			multiple: {
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
				console.log('dataUrls', dataUrls);
				this.$emit('changeFile', dataUrls);
			},
			emitClick() {
				console.log('dfdsfdsfsdfdsf')
				this.$emit('click');
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>