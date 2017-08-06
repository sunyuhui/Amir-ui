<template>
	<div>
		<a-textarea 
			v-model="value" 
			:placeholder="placeholder" 
			:readonly="readonly"
			:max="max" ></a-textarea>
		<a-button @click="click">获取Textarea的值</a-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: 'textarea',
				placeholder: "请输入内容",
				readonly: false,
				max: 10
			}
		},
		methods: {
			click() {
				console.log(this.value);
			}
		}
	}

</script>

<style lang="less">
	
</style>