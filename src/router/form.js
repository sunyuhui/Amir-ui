//form相关

//button
import AmirButton from '../components/amir-button'
import AmirButtonDemo from '../demos/amir-button'

//input
import AmirInput from '../components/amir-input'
import AmirInputDemo from '../demos/amir-input'

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
	}
]

export default routes