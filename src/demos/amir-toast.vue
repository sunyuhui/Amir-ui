<template>
	<div class="demo-container">
		<a-button @click="emitClick">弹出Toast</a-button>
		<a-toast :show.sync="showToast">toast文案</a-toast>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showToast: false
			}
		},
		methods: {
			emitClick() {
				this.showToast = true;
			}
		}
	}
</script>