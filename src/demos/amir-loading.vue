<template>
	<div>
		<a-loading v-show="showLoading"></a-loading>
	</div>
</template>
<script>
	// import { AmirLoading } from '../components'
	export default {
		data() {
			return {
				showLoading: true
			}
		},
		components: {
			// AmirLoading
		},
		mounted() {
			let _this = this;
			setTimeout(()=>{
				// _this.showLoading = false;
			}, 2000);
		}
	}
</script>