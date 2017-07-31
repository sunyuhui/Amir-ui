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
		path: '/loading',
		component: AmirLoading
	},
	{
		path: '/loading-demo',
		component: AmirLoadingDemo
	},
	{
		path: '/toast',
		component: AmirToast
	},
	{
		path: '/toast-demo',
		component: AmirToastDemo
	},
	{
		path: '/confirm',
		component: AmirConfirm
	},
	{
		path: '/confirm-demo',
		component: AmirConfirmDemo
	}
]

export default routes