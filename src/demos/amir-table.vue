<template>
	<div>
		<a-table :border="border" :tableHead="tableHead" :tableData="tableData" :raw="rawList"></a-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				border: true,
				tableData: [
					{
						name: "田小啵",
						debt: 1000,
						nickName: "田师傅",
						operation: "<a href='http://baidu.com'>乱棍打死</a>"
					},
					{
						name: "张姨超",
						nickName: "超",
						debt: 2000,
						operation: "<a href='http://baidu.com'>乱棍打死</a>"
					},
					{
						name: "玩安旭",
						nickName: "老司机",
						debt: 3000,
						operation: "<a href='http://baidu.com'>乱棍打死</a>"
					}
				],
				tableHead: [
					{
						name: "姓名",
						key: "name"
					},
					{
						name: "昵称",
						key: "nickName"
					},
					{
						name: "欠款",
						key: "debt"
					},
					{
						name: "操作",
						key: 'operation'
					}
				],
				rawList: ['operation']
			}
		}
	}
</script>