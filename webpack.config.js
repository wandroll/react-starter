var path = require('path');

module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: '/dist',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}