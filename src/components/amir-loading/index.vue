<template>
	<div class="container" v-show="show">
		<div class="amir-loading-container">
			<div class="loading-item"></div>
			<div class="loading-item"></div>
			<div class="loading-item"></div>
			<div class="loading-item"></div>
			<div class="loading-item"></div>
			<div class="loading-item"></div>
			<div class="loading-item"></div>
			<div class="loading-item"></div>
			<div class="loading-item"></div>
			<div class="loading-item"></div>
			<div class="loading-item"></div>
			<div class="loading-item"></div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			}
		}
	}
</script>
<style lang="less" scoped>
	@mainColor: #3dc6b6;
	.container {
		position: fixed;
		left:0;
		top:0;
		right:0;
		bottom:0;
		background:rgba(255,255,255,0.7);
		.amir-loading-container {
			width:40px;
			height:40px;
			position: absolute;
			left:50%;
			top:50%;
			margin-left: -20px;
			margin-top: -20px;

			.loading-item {
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

				&:before {
					content: '';
					display: block;
					margin: 0 auto;
					width:15%;
					height:15%;
					background:@mainColor;
					border-radius: 100%;
					animation: loading-animation 1.2s infinite ease-in-out both;
				}

				&:nth-child(2) {
					transform: rotate(30deg);
					&:before {
						animation-delay: -1.1s;
					}
				}
				&:nth-child(3) {
					transform: rotate(60deg);
					&:before {
						animation-delay: -1s;
					}
				}
				&:nth-child(4) {
					transform: rotate(90deg);
					&:before {
						animation-delay: -0.9s;
					}
				}
				&:nth-child(5) {
					transform: rotate(120deg);
					&:before {
						animation-delay: -0.8s;
					}
				}
				&:nth-child(6) {
					transform: rotate(150deg);
					&:before {
						animation-delay: -0.7s;
					}
				}
				&:nth-child(7) {
					transform: rotate(180deg);
					&:before {
						animation-delay: -0.6s;
					}
				}
				&:nth-child(8) {
					transform: rotate(210deg);
					&:before {
						animation-delay: -0.5s;
					}
				}
				&:nth-child(9) {
					transform: rotate(240deg);
					&:before {
						animation-delay: -0.4s;
					}
				}
				&:nth-child(10) {
					transform: rotate(270deg);
					&:before {
						animation-delay: -0.3s;
					}
				}
				&:nth-child(11) {
					transform: rotate(300deg);
					&:before {
						animation-delay: -0.2s;
					}
				}
				&:nth-child(12) {
					transform: rotate(330deg);
					&:before {
						animation-delay: -0.1s;
					}
				}
			}
		}
	}
</style>