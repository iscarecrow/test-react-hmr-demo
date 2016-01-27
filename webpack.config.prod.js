var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: "source-map",
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "./static/"),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugin:[
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module:{
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['babel?presets[]=react,presets[]=es2015'],
    }]
  }
};