const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');

const componentNames = ['button', 'confirm', 'dialog', 'input', 'loading', 'pagination', 'select', 'table', 'textarea', 'toast', 'upload'];

function generateEntry(componentNames){
	let object = {};
	componentNames.forEach(function(item, index) {
		object[item] = path.resolve(__dirname, '../src/components/amir-' + item + '/index.vue' );
	});
	return object;
}

module.exports = merge(commonConfig, {
	entry: generateEntry(componentNames),
	output: {
		filename: '[name]/index.js',
		path: path.resolve(__dirname, '../dist'),
		library: 'Amir',
		libraryTarget: 'umd',
		publicPath: '/'
	},
	externals: {
		vue: {
			root: 'Vue',
			amd: 'vue',
			commonjs: 'vue',
			commonjs2: 'vue'
		}
	}
})
