<template>
	<div>
		<a-upload @click="selectFile"></a-upload>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				selected: ''
			}
		},
		methods: {
			selectFile(files) {
				console.log('dfsdf');
				// console.log(files);
			}
		}
	}
</script>