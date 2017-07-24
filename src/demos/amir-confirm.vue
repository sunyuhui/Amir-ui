<template>
	<amir-confirm :show="show" @confirm="confirm" @cancel="cancel" :text="text"></amir-confirm>
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