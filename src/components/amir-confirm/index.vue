<template>	
	<div class="amir-confirm">
		<div class="content" v-show="show">
			<span>{{text}}</span>
			<amir-button @click="confirm" :text="cancelText"></amir-button>
			<amir-button @click="cancel" :text="confirmText"></amir-button>
		</div>
	</div>
</template>

<script>
	import AmirButton from '../amir-button'
	export default {
		components: {
			AmirButton
		},
		props: {
			show: {
				required: true,
				default: false
			},
			text: {
				required: true,
				default: 'Confirm默认文案'
			},
			confirmText: {
				default: '确定'
			},
			cancelText: {
				default: '取消'
			}
		},
		data() {
			return {

			}
		},
		methods: {
			confirm() {
				this.show = false;
				this.$emit('confirm');
			},
			cancel() {
				this.show = false;
				this.$emit('cancel');
			}
		}
	}
</script>
<style lang="less" scoped>
	
</style>