import Vue from 'vue'
import Router from 'vue-router'

//首页
import Index from '../index.vue'
import NotFoundComponent from '../components/404.vue'

//button
import AmirButton from '../components/amir-button'
import AmirButtonDemo from '../demos/amir-button'

//loading
import AmirLoading from '../components/amir-loading'
import AmirLoadingDemo from '../demos/amir-loading'

//toast
import AmirToast from '../components/amir-toast'
import AmirToastDemo from '../demos/amir-toast'

//pagination
import AmirPagination from '../components/amir-pagination'
import AmirPaginationDemo from '../demos/amir-pagination'

//confirm
import AmirConfirm from '../components/amir-confirm'
import AmirConfirmDemo from '../demos/amir-confirm'

Vue.use(Router);

export default new Router({
	// mode: 'history',
	routes: [
		{
			path: '*',
			component: NotFoundComponent
		},
		{
			path: '/',
			component: Index
		},
		{
			path: '/amirbutton',
			component: AmirButton
		},
		{
			path: '/amirbutton-demo',
			component: AmirButtonDemo
		},
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
			path: '/amirpagination',
			component: AmirPagination
		},
		{
			path: '/amirpagination-demo',
			component: AmirPaginationDemo
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
});