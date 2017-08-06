<template>
	<div class="amir-select-container">
		<select :value="selected" @change="emitChange($event.target.value)" :disabled="readonly">
			<template v-for="item in selectData">
				<option :value="item.value">{{item.text}}</option>
			</template>
		</select>
	</div>
</template>

<script>
	export default {
		model: {
			prop: 'selected',
			event: 'change'
		},
		props: {
			selectData: {
				type: Array
			},
			selected: {
				type: String
			},
			readonly: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			emitChange(value) {
				this.$emit('change', value);
			}
		}
	}
</script>

<style lang="less" scoped>
	.amir-select-container {
		select {
			min-width: 150px;
			height: 30px;
		}
	}
</style>