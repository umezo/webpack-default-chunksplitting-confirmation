const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    sample2: './src/sample-2-vendor-overlapping/index.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/sample2'),
  },

  plugins: [
    // bundleしたものが無限に残るので、ビルド前に全部消す
    new CleanWebpackPlugin(['./dist/sample2/**/*']),
    new HtmlWebpackPlugin(),
  ],

  mode: 'production',
};

