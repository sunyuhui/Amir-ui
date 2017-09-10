<template>
	<div class="amir--pagination">
		<a :class="prevClass" @click="switchPrevPage"> < 上一页</a>

		<a v-if="currentPage > 1" @click="switchPage" :class="aClassObject">1</a>

		<template v-if="currentPage > 2+1+1">
			 <span :class="dotClassObject">...</span>
		</template>

		<template v-for="item in beforeItems">
			<a v-if="currentPage > item + 1" @click="switchPage" :class="aClassObject">{{currentPage - item}}</a>
		</template>

		<a :class="activeClassObject">{{currentPage}}</a>

		<template v-for="item in afterItems">
			<a v-if="currentPage + item < totalPage" @click="switchPage" :class="aClassObject">{{currentPage + item}}</a>
		</template>

		<template v-if="currentPage+2+1 < totalPage">
			<span :class="dotClassObject">...</span>
		</template>

		<a v-if="currentPage < totalPage" @click="switchPage" :class="aClassObject">{{totalPage}}</a>

		<a :class="nextClass" @click="switchNextPage">下一页 > </a>

		<div :class="gotoClassObject" v-if="goto">
			<span :class="spanClassObject">前往 </span><input type="text" v-model="destinationPage" :class="inputClassObject">页 <amir-button @click="goSwitchPage"></amir-button>
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
				destinationPage: '',
				aClassObject: {
					'amir--pagination__a': true
				},
				dotClassObject: {
					'amir--pagination__dot': true
				},
				activeClassObject: {
					'amir--pagination__a': true,
					'amir--pagination__a--active': true
				},
				gotoClassObject: {
					'amir--pagination__goto': true
				},
				spanClassObject: {
					'amir--pagination__goto__span': true
				},
				inputClassObject: {
					'amir--pagination__goto__input': true
				}
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
					'amir--pagination__a': true,
					'amir--pagination__a--prev': true,
					'amir--pagination__a--disabled': this.currentPage === 1
				}
			},
			nextClass: function() {
				return {
					'amir--pagination__a': true,
					'amir--pagination__a--next': true,
					'amir--pagination__a--disabled': this.currentPage === this.totalPage
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

<style lang="less">
	@import '../common.less';
	@b pagination {
		@e a:hover {
			border: 1px solid @mainColor;
			cursor:pointer;
		}
		@e a {
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

			@m prev {
				width:70px;
				color:#333;
			}
			@m next {
				width:70px;
				color:#333;
			}
			@m prev:hover {
				border: 1px solid #e5e5e5;
			}
			@m next:hover {
				border: 1px solid #e5e5e5;
			}
			@m disabled {
				background:@disabledColor;
				border:1px solid @disabledColor;
				cursor:not-allowed;
			}
			@m disabled:hover {
				cursor:not-allowed;
			}

			@m active {
				background:@mainColor;
				color:#fff;
				border:1px solid @mainColor;
			}
		}

		@e dot {
			color:#333;
		}

		@e goto {
			display: inline-block;
			font-size: 12px;
			color:#666;

			@e span {
				font-size: 12px;
				color:#666;
			}

			@e input {
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