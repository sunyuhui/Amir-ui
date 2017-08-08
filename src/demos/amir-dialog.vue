<template>
	<div>
		<a-button @click="emitClick">显示Dialog</a-button>
		<a-dialog :title="title" :show.sync="showDialog">
			<p>姓名：<a-input :placeholder="placeholder"></a-input>姓名：<a-input :placeholder="placeholder"></a-input></p>
			<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
			<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
			<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
			<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
			<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
			<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
			<p slot="footer">
				<a-button @click="showDialog = false">取消</a-button>
				<a-button @click="console.log('clicked')">确定</a-button>
			</p>
		</a-dialog>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				title: '标题',
				placeholder: '请输入姓名',
				showDialog: false
			}
		},
		methods: {
			emitClick() {
				console.log('show Dialog');
				this.showDialog = true;
			}
		}
	}
</script>

<style lang="less">
	
</style>