<template>
	<amir-toast :show="showToast"></amir-toast>
</template>

<script>
	// import { AmirToast } from '../components'
	export default {
		data() {
			return {
				showToast: true
			}
		},
		components: {
			// AmirToast
		},
		mounted() {
			let _this = this;
			setTimeout(()=>{
				_this.showToast = false;
			}, 2000);
		}
	}
</script>