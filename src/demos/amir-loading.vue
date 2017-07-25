<template>
	<div class="demo-container">
		<a-loading v-show="showLoading"></a-loading>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				showLoading: true
			}
		},
		mounted() {
			let _this = this;
			setTimeout(()=>{
				// _this.showLoading = false;
			}, 2000);
		}
	}
</script>