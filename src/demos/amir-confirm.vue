<template>
	<a-confirm :show="show" @confirm="confirm" @cancel="cancel" :text="text"></a-confirm>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				text: '你确定吗？'
			}
		},
		methods: {
			confirm() {

			},
			cancel(){

			}
		}
	}
</script>