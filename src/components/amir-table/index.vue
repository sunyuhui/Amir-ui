<template>
	<div class="amir--table">
		<table :class="tableClassObject">
			<tr :class="trClassObject">
				<template v-for="item in tableHead">
					<template v-if="item.sortable">
						<th :class="thClassObject">{{item.name}} <i :class="upSortClassObject" @click="sort('up', item.key)">^</i> <i :class="downSortClassObject" @click="sort('down', item.key)">^</i> </th>
					</template>
					<th v-else :class="thClassObject">{{item.name}}</th>
				</template>
			</tr>
			<tr v-if="tableData.length === 0" :class="trClassObject">
					<td :colspan="tableHead.length" :class="tdClassObject">暂无数据 ~</td>
			</tr>
			<template v-else>
				<tr v-for="item in tableData" :class="trClassObject">
					<template v-for="head in tableHead">
						<td :class="tdClassObject" v-if="raw && raw.length>0 && raw.indexOf(head.key) !== -1" v-html="item[head.key]"></td>
						<td :class="tdClassObject" v-else>{{item[head.key]}}</td>
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
				tableClassObject: {
					'amir--table__item': true,
					'amir--table__item--border': this.border
				},
				trClassObject: {
					'amir--table__tr': true
				},
				thClassObject: {
					'amir--table__th': true,
					'amir--table__th--border': this.border
				},
				tdClassObject: {
					'amir--table__td': true,
					'amir--table__td--border': this.border
				},
				upSortClassObject: {
					'amir--table__sort--up': true,
					'amir--table__sort': true
				},
				downSortClassObject: {
					'amir--table__sort--down': true,
					'amir--table__sort': true
				}
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

<style lang="less">
	@b table {
		@e item {
			min-width: 760px;
			min-height: 40px;
			font-size: 14px;
			color:#666;
			border-collapse: collapse;
		}

		@e tr:hover {
			background:#fafafa;
			cursor:pointer;
		}

		@e th {
			position: relative;
			background:#fafafa;
			height:40px;
			line-height: 40px;
			text-align: center;

			@m border {
				border: 1px solid #eaeaea;
			}
		}

		@e th:hover {
			background:#fafafa;
		}

		@e td {
			height:40px;
			line-height: 40px;
			text-align: center;

			@m border {
				border: 1px solid #eaeaea;
				border-top: none;
			}
		}

		@e sort {
			position:absolute;
			right:15px;
			font-style: normal;
			width:10px;
			height:10px;
			line-height: 10px;
			@m up {
				bottom: 20px;
			}
			@m down {
				transform: rotate(180deg);
				-webkit-transform: rotate(180deg);
				bottom: 10px;
			}
		}

		@e sort:hover {
			cursor: pointer;
		}

	}
</style>