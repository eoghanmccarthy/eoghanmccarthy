const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const prod = require('../webpack.prod')

module.exports = merge(common, prod, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[id].js',
  }
})
