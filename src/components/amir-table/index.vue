<template>
	<div class="amir-table-container">
		<table :class="{border: border}">
			<tr>
				<template v-for="item in tableHead">
					<template v-if="item.sortable">
						<th>{{item.name}} <i class="up-sort icon" @click="sort('up', item.key)">^</i> <i class="down-sort icon" @click="sort('down', item.key)">^</i> </th>
					</template>
					<th v-else>{{item.name}}</th>
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
		methods: {
			sort(type, key) {
				let sortedData = this.tableData.sort((a, b)=>{
					return type === 'up' ? a[key] - b[key] : b[key] - a[key];
				});
				this.$emit('update:table-data', sortedData);
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
				position: relative;
				background:#fafafa;
				.icon {
					position:absolute;
					right:15px;
					font-style: normal;
					width:10px;
					height:10px;
					line-height: 10px;
					&:hover {
						cursor: pointer;
					}

					&.up-sort {
						bottom: 20px;
					}

					&.down-sort {
						transform: rotate(180deg);
						-webkit-transform: rotate(180deg);
						bottom: 10px;
					}
				}
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