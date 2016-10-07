var webpack = require('webpack');

module.exports = {
  watch: true,
  // devtool: 'cheap-module-eval-source-map',
  entry: {
    common: ['babel-polyfill', 'react', 'redux', 'react-redux', 'react-router'],
    index: './src/index.js'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/assets/',
    filename: '[name].js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        include: /src/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }, {
        test: /\.json$/,
        include: /src/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
  ]
}