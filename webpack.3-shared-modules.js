const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    sample3: './src/sample-3-shared-modules/index.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/sample3'),
  },

  plugins: [
    // bundleしたものが無限に残るので、ビルド前に全部消す
    new CleanWebpackPlugin(['./dist/sample3/**/*']),
    new HtmlWebpackPlugin(),
  ],

  mode: 'production',
};

