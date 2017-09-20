var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var componentNames = ['button', 'confirm', 'dialog', 'input', 'loading', 'pagination', 'select', 'table', 'textarea', 'toast', 'upload'];

function generateEntry(componentNames){
	var object = {};
	componentNames.forEach(function(item, index) {
		object[item] = path.resolve(__dirname, '../src/components/amir-' + item + '/index.vue' );
	});
	return object
}

module.exports = {
	entry: generateEntry(componentNames),
	output: {
		filename: '[name]/index.js',
		path: path.resolve(__dirname, '../dist'),
		library: 'Amir',
		libraryTarget: 'umd',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},
	externals: {
		vue: {
			root: 'Vue',
			amd: 'vue',
			commonjs: 'vue',
			commonjs2: 'vue'
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					less: 'vue-style-loader!css-loader!less-loader',
					postcss: [
						require('postcss-cssnext')({browsers: ['last 2 versions']}),
						require('postcss-bem-fix')({
							defaultNamespace: 'amir',
							style: "bem",
							separators: {
								'descendent': '__',
								'modifier': '--'
							},
							shortcuts: {
								'component': 'b',
								'descendent': 'e',
								'modifier': 'm'
							}
						}),
						// require('postcss-nested-ancestors')(),
						require('postcss-nested')
					],
					extractCSS: true
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: [/node_modules/]
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			inject: true
		}),
		new ExtractTextPlugin('amir.css')
	]
}