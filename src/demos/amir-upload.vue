<template>
	<a-upload @changeFile="selectFile"></a-upload>
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
				console.log(files);
			}
		}
	}
</script>