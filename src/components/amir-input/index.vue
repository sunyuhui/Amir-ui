<template>
	<div class="amir-input-container">
		<input 
			:name="name" 
			:title="title" 
			:readonly="readonly" 
			:placeholder="placeholder"
			:value="value"
			type="text"
			@input="output($event.target.value)"
			@blur="checkValue($event.target.value)"
		/>
		<span v-show="showError" class="error-msg">{{errorText}}</span>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				showError: false,
				errorText: ''
			}
		},
		props: {
			title: {
				type: String
			},
			name: {
				type: String
			},
			placeholder: {
				type: String,
				default: '请输入内容'
			},
			readonly: {
				type: Boolean
			},
			value: {
				type: [String, Number],
				twoWay: true
			},
			required: {
				type: Boolean
			}

		},
		methods: {
			output(value) {
				if(value) {
					this.showError = false;
				}
				this.$emit('input', value);
			},
			checkValue(value) {
				if(this.required && !value) {
					this.showError = true;
					this.errorText = '必填项，请输入内容';
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.amir-input-container {
		display: inline-block;
		input {
			text-indent: 10px;
			font-size: 14px;
		}
		.error-msg {
			display: inline;
			color:#f00;
			font-size: 14px;
		}
	}
</style>