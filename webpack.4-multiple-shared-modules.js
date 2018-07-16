const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    sample4: './src/sample-4-multiple-shared-component/index.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/sample4'),
  },

  plugins: [
    // bundleしたものが無限に残るので、ビルド前に全部消す
    new CleanWebpackPlugin(['./dist/sample4/**/*']),
    new HtmlWebpackPlugin(),
  ],

  mode: 'production',
};

