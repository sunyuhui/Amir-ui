<template>
		<div class="amir--textarea">
			<textarea 
				class="amir--textarea__item"
				:value="value" 
				@keydown="emitDown($event)"
				@input="emitInput($event.target.value)" 
				:cols="cols" 
				:rows="rows" 
				:placeholder="placeholder" 
				:readonly="readonly">
			</textarea>
			<span v-show="max" class="amir--textarea__span">限 {{max}} 字以内，还可以输入 <i class="amir--textarea__span__i">{{limit}}</i> 字</span>
		</div>
</template>
<script>
	export default {
		name: 'a-textarea',
		props: {
			value: {
				type: String
			},
			cols: {
				type: Number,
				default: 30
			},
			rows: {
				type: Number,
				default: 6
			},
			placeholder: {
				type: String,
				default: '请输入内容'
			},
			readonly: {
				type: Boolean,
				default: false
			},
			max: {
				type: Number,
			}
		},
		computed: {
			limit() {
				return this.max - this.value.length;
			}
		},
		methods: {
			emitInput(value, event) {
				this.$emit('input', value);
			},
			emitDown(event){
				let keyCodesFileter = [8, 37, 38, 39, 40];

				if(keyCodesFileter.indexOf(event.keyCode) === -1 && this.max && this.value.length >= this.max) {
					event.preventDefault();
				}
			}
		}
	}
</script>

<style lang="less">
	@b textarea {
		@e item {
			padding:5px;
			font-size: 14px;
			border:1px solid #ccc;
		}
		@e span {
			display: block;
			@e i {
				font-style: normal;
				color:#f00;
			}
		}
	}
</style>