const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, '..'),

  entry: {
    app: './app/index',
  },

  output: {
    path: path.resolve(__dirname, '../public/build'),
    filename: '[name].bundle.js',
  },

  module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1']
                }
            }
        ]
    },
};