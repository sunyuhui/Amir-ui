<template>
	<div>
		<a-table :border="border" :tableHead="tableHead" :tableData="tableData"></a-table>
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
						nickName: "田师傅"
					},
					{
						name: "张姨超",
						nickName: "超",
						debt: 2000
					},
					{
						name: "玩安旭",
						nickName: "老司机",
						debt: 3000
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
					}
				]
			}
		}
	}
</script>