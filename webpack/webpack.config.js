var webpack = require('webpack');

module.exports = {
  entry: './assets/javascripts/main',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path:       __dirname + '/../build/',
    filename:   'app.js',
    publicPath: 'http://localhost:9090/build/'
  },

  plugins: function(path) {
    return([
      new webpack.DefinePlugin({
        'environment': {
          'HOST': JSON.stringify(path)
        }
      }),
      new webpack.ProvidePlugin({
        'React': 'react/addons',
        'mui': 'material-ui'
      })
    ])
  },

  module: {
    loaders: [
      { test: /\.sass$/, exclude: /node_modules/, loader: 'style!css!sass?indentedSyntax' },
      { test: /bootstrap\/js\//,                  loader: 'imports?jQuery=jquery'                 },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,      loader: 'url?mimetype=application/font-woff'    },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,     loader: 'url?mimetype=application/font-woff'    },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,       loader: 'url?mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,       loader: 'file'                                  },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,       loader: 'url?mimetype=image/svg+xml'            }
    ]
  }
};
