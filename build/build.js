var webpack = require('webpack');
var webpackConfig = require('./webpack.prod.config');
var webpackSplitConfig = require('./webpack.prod.split.config');

webpack(webpackConfig, function(err, stats) {
	if(err) {
		throw err;
	}
	process.stdout.write(stats.toString({
		colors: true,
		modules: false,
		children: false,
		chunks: false,
		chunkModules: false
	}));
});

webpack(webpackSplitConfig, function(err, stats) {
	if(err) {
		throw err;
	}
	process.stdout.write(stats.toString({
		colors: true,
		modules: false,
		children: false,
		chunks: false,
		chunkModules: false
	}));
});


