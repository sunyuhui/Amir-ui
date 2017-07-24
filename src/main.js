import Vue from 'vue';
import App from './App';
import router from './router';
import './common/common.css';
import 'normalize.css';
import Amir from './components';
Vue.use(Amir);

const app = new Vue({
	router,
	...App
}).$mount('#app');


