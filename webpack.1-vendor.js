const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    sample1: './src/sample-1-vendor/index.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/sample1'),
  },

  plugins: [
    // bundleしたものが無限に残るので、ビルド前に全部消す
    new CleanWebpackPlugin(['./dist/sample1/**/*']),
    new HtmlWebpackPlugin(),
  ],

  mode: 'production',
};

