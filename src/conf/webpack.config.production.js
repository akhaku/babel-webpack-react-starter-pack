/* eslint-env node */
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: ['./lib/client/entry'],
  },
  output: {
    path: './lib/static/js',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [{
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
    }],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
};
