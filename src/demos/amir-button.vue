<template>
	<div class="demo-container">
		<p>normal：<a-button @click="emitClick"></a-button> </p>
		<p>normal hot：<a-button class="hot"></a-button> </p>
		<p>normal 自定义文案：<a-button>好的</a-button> </p>
		<p>normal disabled：<a-button class="disabled">好的</a-button> </p>
		<p>big: <a-button class="big"></a-button></p>
		<p>bigger: <a-button class="bigger"></a-button></p> 
	</div>
</template>

<script>

	export default {
		methods: {
			emitClick(res) {
				console.log('被点击了', res);
			}
		}
	}
</script>