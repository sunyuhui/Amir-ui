import AmirButton from './amir-button'
import AmirLoading from './amir-loading'
import AmirToast from './amir-toast'
import AmirPagination from './amir-pagination'
import AmirConfirm from './amir-confirm'
import AmirTable from './amir-table'
import AmirInput from './amir-input'
import AmirSelect from './amir-select'
import AmirTextarea from './amir-textarea'
import AmirDialog from './amir-dialog'
import AmirUpload from './amir-upload'

let amir = {
	[AmirButton.name]: AmirButton,
	[AmirLoading.name]: AmirLoading,
	[AmirToast.name]: AmirToast,
	[AmirPagination.name]: AmirPagination,
	[AmirConfirm.name]: AmirConfirm,
	[AmirTable.name]: AmirTable,
	[AmirInput.name]: AmirInput,
	[AmirSelect.name]: AmirSelect,
	[AmirTextarea.name]: AmirTextarea,
	[AmirDialog.name]: AmirDialog,
	[AmirUpload.name]: AmirUpload
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