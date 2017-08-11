//form相关

//button
import AmirButton from '../components/amir-button'
import AmirButtonDemo from '../demos/amir-button'

//input
import AmirInput from '../components/amir-input'
import AmirInputDemo from '../demos/amir-input'

//select
import AmirSelect from '../components/amir-select'
import AmirSelectDemo from '../demos/amir-select'

//textarea
import AmirTextarea from '../components/amir-textarea'
import AmirTextareaDemo from '../demos/amir-textarea'

import AmirUpload from '../demos/amir-upload.vue'
import AmirUploadDemo from '../components/amir-upload'

const routes = [
	{
		path: '/button',
		component: AmirButton
	},
	{
		path: '/button-demo',
		component: AmirButtonDemo
	},
	{
		path: '/input',
		component: AmirInput
	},
	{
		path: '/input-demo',
		component: AmirInputDemo
	},
	{
		path: '/select',
		component: AmirSelect
	},
	{
		path: '/select-demo',
		component: AmirSelectDemo
	},
	{
		path: '/textarea',
		component: AmirTextarea
	},
	{
		path: '/textarea-demo',
		component: AmirTextareaDemo
	},
	{
		path: '/upload',
		component: AmirUpload
	},
	{
		path: '/upload-demo',
		component: AmirUploadDemo
	}
]

export default routes