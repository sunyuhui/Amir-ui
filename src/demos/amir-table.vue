<template>
	<div>
		<a-table :border="border" :table-head="tableHead" :table-data.sync="tableData" :raw="rawList"></a-table>
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
						nickName: "tian",
						operation: "<a href='http://baidu.com'>乱棍打死</a>"
					},
					{
						name: "张姨超",
						nickName: "chao",
						debt: 2000,
						operation: "<a href='http://baidu.com'>乱棍打死</a>"
					},
					{
						name: "玩安旭",
						nickName: "an",
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
						key: "debt",
						sortable: true
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