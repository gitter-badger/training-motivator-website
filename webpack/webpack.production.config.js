var webpack = require('webpack');
var config  = require('./webpack.config.js');

module.exports = {
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ].concat(config.module.loaders)
  },

  entry:   config.entry,
  output:  config.output,
  plugins: config.plugins('https://scala-dci.herokuapp.com/'),
  resolve: config.resolve
};
