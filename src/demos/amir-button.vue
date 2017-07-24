<template>
	<div>
	dsfd
		<p>normal：<amir-button @click="emitClick"></amir-button> </p>
		<p>normal hot：<amir-button class="hot"></amir-button> </p>
		<p>normal 自定义文案：<amir-button :text="text"></amir-button> </p>
		<p>normal disabled：<amir-button :text="text" class="disabled"></amir-button> </p>
		<p>big: <amir-button class="big"></amir-button></p>
		<p>bigger: <amir-button class="bigger"></amir-button></p> 
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