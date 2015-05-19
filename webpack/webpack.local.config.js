var webpack = require('webpack');
var config  = require('./webpack.config.js');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server'
  ].concat(config.entry),

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] }
    ].concat(config.module.loaders)
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ].concat(config.plugins('http://localhost:9000')),

  devtool: 'eval',
  output:  config.output,
  resolve: config.resolve
};
