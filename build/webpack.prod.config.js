const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');

module.exports = merge(commonConfig, {
	entry: './src/components/index.js',
	output: {
		filename: 'amir.js',
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
	},
})