/**
 * layout相关
 */

//pagination
import AmirPagination from '../components/amir-pagination'
import AmirPaginationDemo from '../demos/amir-pagination'

//dialog
import AmirDialog from '../components/amir-dialog'
import AmirDialogDemo from '../demos/amir-dialog'

const routes = [
	{
		path: '/pagination',
		component: AmirPagination
	},
	{
		path: '/pagination-demo',
		component: AmirPaginationDemo
	},
	{
		path: '/dialog',
		component: AmirDialog
	},
	{
		path: '/dialog-demo',
		component: AmirDialogDemo
	}
]

export default routes