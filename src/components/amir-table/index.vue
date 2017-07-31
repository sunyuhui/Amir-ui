<template>
	<div class="amir-table-container">
		<table :class="{border: border}">
			<tr>
				<template v-for="item in tableHead">
					<th>{{item.name}}</th>
				</template>
			</tr>
			<tr v-if="tableData.length === 0">
					<td :colspan="tableHead.length">暂无数据 ~</td>
			</tr>
			<template v-else>
				<tr v-for="item in tableData">
					<td v-for="head in tableHead">
						{{item[head.key]}}
					</td>
				</tr>
			</template>
		</table>
	</div>
</template>

<script>
	export default {
		props: {
			tableData: {
				type: Array,
				required: true
			},
			tableHead: {
				type: Array,
				required: true
			},
			border: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style lang="less" scoped>
	table {
		min-width: 760px;
		min-height: 40px;
		font-size: 14px;
		color:#666;
		border-collapse: collapse;
		&.border {
			th {
				border: 1px solid #eaeaea;
			}
			td {
				border: 1px solid #eaeaea;
				border-top: none;
			}
		}
		th {
			background:#fafafa;
		}
		th, td {
			height:40px;
			line-height: 40px;
			text-align: center;
		}
		tr {
			&:hover {
				background:#fafafa;
			}
		}
		td {
			a {
				color:#3dc6b6;
			}
		}
	}
</style>