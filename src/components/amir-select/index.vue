<template>
	<div class="amir--select">
		<select :value="selected" class="amir--select__item" @change="emitChange($event.target.value)" :disabled="readonly">
			<template v-for="item in selectData">
				<option :value="item.value">{{item.text}}</option>
			</template>
		</select>
	</div>
</template>

<script>
	export default {
		name: 'a-select',
		model: {
			prop: 'selected',
			event: 'change'
		},
		props: {
			selectData: {
				type: Array
			},
			readonly: {
				type: Boolean,
				default: false
			},
			selected: {
				type: [String,Number]
			}
		},
		methods: {
			emitChange(value) {
				this.$emit('change', value);
			}
		}
	}
</script>

<style lang="less">
	@b select {
		@e item {
			min-width: 150px;
			height: 30px;
		}
	}
</style>