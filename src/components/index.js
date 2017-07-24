import AmirButton from './amir-button'
import AmirLoading from './amir-loading'
import AmirToast from './amir-toast'
import AmirPagination from './amir-pagination'
import AmirConfirm from './amir-confirm'

let amir = {
	"amir-button": AmirButton,
	"amir-loading": AmirLoading,
	"amir-toast": AmirToast,
	"amir-pagination": AmirPagination,
	'amir-confirm': AmirConfirm
};

function install(Vue) {
	Object.keys(amir).forEach((key)=>{
		Vue.component(key, amir[key]);
	});
}

if(typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(install);
}

export default install