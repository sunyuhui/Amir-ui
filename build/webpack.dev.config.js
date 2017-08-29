var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist')
		// publicPath: './'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue': 'vue/dist/vue.js'
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
						require('postcss-bem')({
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