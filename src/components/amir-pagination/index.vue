<template>
	<div class="amir-pagination-container">
		<a :class="prevClass" @click="switchPrevPage"> < 上一页</a>

		<a v-if="currentPage > 1" @click="switchPage">1</a>

		<template v-if="currentPage > 2+1+1">
			 <span class="dot">...</span>
		</template>

		<template v-for="item in beforeItems">
			<a v-if="currentPage > item + 1" @click="switchPage" class="neighbor-page">{{currentPage - item}}</a>
		</template>

		<a class="active">{{currentPage}}</a>

		<template v-for="item in afterItems">
			<a v-if="currentPage + item < totalPage" @click="switchPage" class="neighbor-page">{{currentPage + item}}</a>
		</template>

		<template v-if="currentPage+2+1 < totalPage">
			<span class="dot">...</span>
		</template>

		<a v-if="currentPage < totalPage" @click="switchPage">{{totalPage}}</a>

		<a :class="nextClass" @click="switchNextPage">下一页 > </a>

		<div class="goto-container" v-if="goto">
			<span class="goto">前往 </span><input type="text" v-model="destinationPage" class="goto-input">页 <amir-button @click="goSwitchPage"></amir-button>
		</div>
		
	</div>
</template>

<script>
	import AmirButton from '../amir-button'
	export default {
		components: {
			AmirButton
		},
		data() {
			return {
				beforeItems: [2,1],		//倒叙，保证输出的页码能以正序呈现
				afterItems: [1,2],
				destinationPage: ''
			}
		},
		props: {
			totalPage: {
				type: Number,
				default: 0
			},
			currentPage: {
				type: Number,
				default: 1
			},
			goto: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			prevClass: function() {
				return {
					prev: true,
					disabled: this.currentPage === 1
				}
			},
			nextClass: function() {
				return {
					next: true,
					disabled: this.currentPage === this.totalPage
				}
			}
		},
		methods: {
			switchPage() {
				let el = event.currentTarget;
				let choosenPage = +el.innerText;
				this.$emit('update:currentPage', choosenPage);
				this.$emit('switchPage', choosenPage);
			},
			switchPrevPage() {
				if(this.currentPage > 1) {
					this.$emit('update:currentPage', this.currentPage - 1);
					this.$emit('switchPage', this.currentPage - 1);
				}
			},
			switchNextPage() {
				if(this.currentPage < this.totalPage) {
					this.$emit('update:currentPage', this.currentPage + 1);
					this.$emit('switchPage', this.currentPage + 1);
				}
			},
			goSwitchPage() {
				if(+this.destinationPage >= 1 && +this.destinationPage <= this.totalPage) {
					this.$emit('update:currentPage', +this.destinationPage);
					this.$emit('switchPage', +this.destinationPage);
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@mainColor: #3dc6b6;
	@disabledColor: #e5e5e5;
	.amir-pagination-container {
		a {
			width:35px;
			height: 35px;
			line-height: 35px;
			display: inline-block;
			text-align: center;
			background: #fff;
			font-size: 12px;
			color:@mainColor;
			border:1px solid @disabledColor;
			border-radius: 2px;

			&.active {
				background:@mainColor;
				color:#fff;
				border:1px solid @mainColor;

			}

			&:hover {
				border: 1px solid @mainColor;
				cursor:pointer;
			}

			&.prev, &.next {
				width:70px;
				color:#333;

				&.disabled {
					background:@disabledColor;
					border:1px solid @disabledColor;
					cursor:not-allowed;
				}
				&:hover {
					border: 1px solid #e5e5e5;
				}
			}

		}

		.dot {
			color:#333;
		}

		.goto-container {
			display: inline-block;
			font-size: 12px;
			color:#666;
			.goto {
				font-size: 12px;
				color:#666;
			}
			.goto-input {
				width:33px;
				height:30px;
				line-height: 30px;
				text-align: center;
				border:1px solid @mainColor;
				color:#333;
				font-size: 12px;
			}
		}
	}
</style>