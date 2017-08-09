<template>
	<div>
		<a-select :selectData="selectData" v-model="value" class="demo" :readonly="readonly" @change="switchSelect"></a-select>
		<a-button @click="click"></a-button>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				selectData: [
					{
						value: "1",
						text: "option1"
					},
					{
						value: "2",
						text: "option2"
					}
				],
				value: '1',
				readonly: false
			}
		},
		methods: {
			click() {
				console.log(this.value);
			},
			switchSelect(value) {
				console.log(value + 'sunyuhui');
			}
		}
	}
</script>

<style lang="less" scoped>
	.demo {
		width:150px;
	}
</style>