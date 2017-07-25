<template>
	<a-pagination :current-page.sync="currentPage" :total-page="totalPage" @switchPage="switchPage" :goto="goto"></a-pagination>
</template>

<script>
	// import { AmirPagination } from '../components'
	export default {
		components: {
			// AmirPagination
		},
		data() {
			return {
				currentPage: 4,
				totalPage: 24,
				goto: true
			}
		},
		methods: {
			switchPage(currentPage) {
				console.log('测试',currentPage);
			}
		}
	}
</script>