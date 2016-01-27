"use strict";

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');
var proxyStatic = require('proxy-middleware');
var url = require('url');
var proxyMiddleware = require('http-proxy-middleware');
var apiDomain = 'http://localhost:8083';
var appDomain = 'http://localhost:3000';


// api proxy
var context = '/napi';
var options = {
  target: apiDomain,
  changeOrigin: true,
  proxyTable: {
    apiDomain: appDomain,
  }
};

var proxy = proxyMiddleware(context, options);

var app = express();

app.use(proxy);

// server proxy
app.use('/', proxyStatic(url.parse('http://localhost:8080/')));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  noInfo: false,
  stats: { colors: true }
});


server.listen(8080, "localhost", function() {});

app.listen(3000);