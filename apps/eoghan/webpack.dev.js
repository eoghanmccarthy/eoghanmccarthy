const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const dev = require('../webpack.dev')

module.exports = merge(common, dev, {
  mode: 'development',
})
