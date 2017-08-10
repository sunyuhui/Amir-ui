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
					<template v-for="head in tableHead">
						<td v-if="raw && raw.length>0 && raw.indexOf(head.key) !== -1" v-html="item[head.key]"></td>
						<td v-else>{{item[head.key]}}</td>
					</template>
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
			},
			raw: {
				type: [Array, String]
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

		tr {
			th {
				background:#fafafa;
			}
			th, td {
				height:40px;
				line-height: 40px;
				text-align: center;
			}
			&:hover {
				background:#fafafa;
			}
		}

		&.border {
			th {
				border: 1px solid #eaeaea;
			}
			td {
				border: 1px solid #eaeaea;
				border-top: none;
			}
		}
	}
</style>