<template>
	<div>
		<a-input 
			:placeholder="placeholder" 
			:readonly="readonly"
			v-model="value"
			@input="emitInput"
			:required="required" ></a-input>

		<a-button @click="checkValue">查看value值</a-button>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				placeholder: "请输入内容",
				readonly: false,
				value: 'text',
				required: true
			}
		},
		methods: {
			emitInput(value) {
				console.log(value + 'sunyuhui');
			},
			checkValue() {
				console.log(this.value);
			}
		}
	}
</script>