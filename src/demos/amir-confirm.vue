<template>
	<div class="demo-container">
		<a-button @click="emitClick">弹出确认框</a-button>
		<a-confirm :show.sync="show" @confirm="confirm" @cancel="cancel">你确定吗吗？</a-confirm>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				text: '你确定吗？'
			}
		},
		methods: {
			emitClick() {
				this.show = true;
			},
			confirm() {
				console.log('confirm is clicked');
			},
			cancel(){
				console.log('cancel is clicked');
			}
		}
	}
</script>