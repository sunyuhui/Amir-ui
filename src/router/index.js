import Vue from 'vue'
import Router from 'vue-router'


import FormRoutes from './form'
import LayoutRoutes from './layout'
import NoticeRoutes from './notice'
import DataRoutes from './data'

//首页
import Index from '../index.vue'
import NotFoundComponent from '../components/404.vue'

Vue.use(Router);

let routes = [
	{
		path: '*',
		component: NotFoundComponent
	},
	{
		path: '/',
		component: Index
	}
];

routes = routes.concat(FormRoutes, LayoutRoutes, NoticeRoutes, DataRoutes);


export default new Router({
	// mode: 'history',
	routes
});