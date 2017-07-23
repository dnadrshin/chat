const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app/index.js',
  },
  output: {
    path: path.resolve(__dirname, './public/build'),
    filename: '[name].bundle.js',
  },
};