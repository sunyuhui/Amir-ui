<template>
	<div>
	dsfd
		<p>normal：<a-button @click="emitClick"></a-button> </p>
		<p>normal hot：<a-button class="hot"></a-button> </p>
		<p>normal 自定义文案：<a-button :text="text"></a-button> </p>
		<p>normal disabled：<a-button :text="text" class="disabled"></a-button> </p>
		<p>big: <a-button class="big"></a-button></p>
		<p>bigger: <a-button class="bigger"></a-button></p> 
	</div>
</template>

<script>
	// import { AmirButton } from '../components';

	export default {
		components: {
			// AmirButton
		},
		data() {
			return {
				text: '好的'
			}
		},
		methods: {
			emitClick() {
				console.log('被点击了');
			}
		}
	}
</script>