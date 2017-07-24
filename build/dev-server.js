var express = require('express');
var webpack = require('webpack');
var history = require('connect-history-api-fallback');
var webpackConfig = require('./webpack.dev.config');


var app = express();
var compiler = webpack(webpackConfig);


var devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath,
	historyApiFallback: true
});

var hotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(devMiddleware);
app.use(hotMiddleware);
app.use(history());

app.listen(8080, ()=>{
	console.log('Listening at http://localhost:8080');
});