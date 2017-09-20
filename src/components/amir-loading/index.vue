<template>
	<div class="amir--loading" v-show="show">
		<div class="amir--loading__container">
			<div class="amir--loading__container__item"></div>
			<div class="amir--loading__container__item"></div>
			<div class="amir--loading__container__item"></div>
			<div class="amir--loading__container__item"></div>
			<div class="amir--loading__container__item"></div>
			<div class="amir--loading__container__item"></div>
			<div class="amir--loading__container__item"></div>
			<div class="amir--loading__container__item"></div>
			<div class="amir--loading__container__item"></div>
			<div class="amir--loading__container__item"></div>
			<div class="amir--loading__container__item"></div>
			<div class="amir--loading__container__item"></div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'a-loading',
		props: {
			show: {
				type: Boolean,
				default: false
			}
		}
	}
</script>
<style lang="less">
	@import '../common.less';
	@b loading {
		position: absolute;
		left:0;
		top:0;
		right:0;
		bottom:0;
		background:rgba(255,255,255,0.7);
		@e container {
			width:40px;
			height:40px;
			position: absolute;
			left:50%;
			top:50%;
			margin-left: -20px;
			margin-top: -20px;

			@e item {
				width:100%;
				height: 100%;
				position:absolute;
				left:0;
				top:0;

				@keyframes loading-animation {
					0%, 39%, 100% {
						opacity: 0;
					}
					40% {
						opacity:1
					}
				}

			}

				@e item:before {
					content: '';
					display: block;
					margin: 0 auto;
					width:15%;
					height:15%;
					background:@mainColor;
					border-radius: 100%;
					animation: loading-animation 1.2s infinite ease-in-out both;
				}

				@e item:nth-child(2) {
					transform: rotate(30deg);
				}
				@e item:nth-child(2):before {
					animation-delay: -1.1s;
				}
				@e item:nth-child(3) {
					transform: rotate(60deg);
				}
				@e item:nth-child(3):before {
					animation-delay: -1s;
				}
				@e item:nth-child(4) {
					transform: rotate(90deg);
				}
				@e item:nth-child(4):before {
					animation-delay: -0.9s;
				}
				@e item:nth-child(5) {
					transform: rotate(120deg);
				}
				@e item:nth-child(5):before {
					animation-delay: -0.8s;
				}
				@e item:nth-child(6) {
					transform: rotate(150deg);
				}
				@e item:nth-child(6):before {
					animation-delay: -0.7s;
				}
				@e item:nth-child(7) {
					transform: rotate(180deg);
				}
				@e item:nth-child(7):before {
					animation-delay: -0.6s;
				}
				@e item:nth-child(8) {
					transform: rotate(210deg);
				}
				@e item:nth-child(8):before {
					animation-delay: -0.5s;
				}
				@e item:nth-child(9) {
					transform: rotate(240deg);
				}
				@e item:nth-child(9):before {
					animation-delay: -0.4s;
				}
				@e item:nth-child(10) {
					transform: rotate(270deg);
				}
				@e item:nth-child(10):before {
					animation-delay: -0.3s;
				}
				@e item:nth-child(11) {
					transform: rotate(300deg);
				}
				@e item:nth-child(11):before {
					animation-delay: -0.2s;
				}
				@e item:nth-child(12) {
					transform: rotate(330deg);
				}
				@e item:nth-child(12):before {
					animation-delay: -0.1s;
				}
		}
	}
</style>