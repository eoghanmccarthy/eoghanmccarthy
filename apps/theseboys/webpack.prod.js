const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')
const prod = require('../webpack.prod')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
  },
  optimization: {
    minimize: true,
    minimizer: ['...', new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
        },
      ],
    }),
  ],
})
