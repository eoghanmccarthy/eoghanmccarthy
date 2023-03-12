const CopyWebpackPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  output: {
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
  ]
};