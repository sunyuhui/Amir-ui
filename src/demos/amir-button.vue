<template>
	<div class="demo-container">
		<p>normal：<a-button @click="emitClick"></a-button> </p>
		<p>normal hot：<a-button :hot="hot1"></a-button> </p>
		<p>normal 自定义文案：<a-button>好的</a-button> </p>
		<p>normal disabled：<a-button :disabled="disabled1">好的</a-button> </p>
		<p>big: <a-button :size="size1"></a-button></p>
		<p>bigger: <a-button :size="size2"></a-button></p> 
	</div>
</template>

<script>

	export default {
		data() {
			return {
				size1: 'big',
				size2: 'bigger',
				disabled1: true,
				disabled2: false,
				hot1: true,
				hot2: false
			}
		},
		methods: {
			emitClick() {
				console.log('clicked');
			}
		}
	}
</script>