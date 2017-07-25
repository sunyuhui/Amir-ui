/**
 * Notice相关
 */

//loading
import AmirLoading from '../components/amir-loading'
import AmirLoadingDemo from '../demos/amir-loading'

//toast
import AmirToast from '../components/amir-toast'
import AmirToastDemo from '../demos/amir-toast'

//confirm
import AmirConfirm from '../components/amir-confirm'
import AmirConfirmDemo from '../demos/amir-confirm'

const routes = [
	{
		path: '/amirloading',
		component: AmirLoading
	},
	{
		path: '/amirloading-demo',
		component: AmirLoadingDemo
	},
	{
		path: '/amirtoast',
		component: AmirToast
	},
	{
		path: '/amirtoast-demo',
		component: AmirToastDemo
	},
	{
		path: '/amirconfirm',
		component: AmirConfirm
	},
	{
		path: '/amirconfirm-demo',
		component: AmirConfirmDemo
	}
]

export default routes