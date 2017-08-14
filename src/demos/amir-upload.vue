<template>
	<div>
		<a-upload @selectFile="selectFile" :readonly="readonly">上传文件</a-upload>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				readonly: false
			}
		},
		methods: {
			selectFile(files) {
				console.log(files);
			}
		}
	}
</script>