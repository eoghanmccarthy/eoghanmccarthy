const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')
const prod = require('../webpack.prod')

module.exports = merge(common, prod, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    assetModuleFilename: 'assets/[hash][ext]',
    publicPath: '/',
    clean: true,
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[id].js',
  }
})
