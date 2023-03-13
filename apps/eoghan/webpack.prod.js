const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const prod = require('../webpack.prod')

module.exports = merge(common, prod, {
  mode: 'production',
})
