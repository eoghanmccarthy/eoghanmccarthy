const path = require('path')
const { merge } = require('webpack-merge')
const base = require('../webpack.base.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(base, {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    assetModuleFilename: 'assets/[hash][ext]',
    publicPath: '/',
    clean: true,
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'assets/'),
      src: path.resolve(__dirname, 'src/'),
      components: path.resolve(__dirname, 'src/components/'),
      features: path.resolve(__dirname, 'src/features/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      posts: path.resolve(__dirname, 'src/posts/'),
      services: path.resolve(__dirname, 'src/services/'),
      utils: path.resolve(__dirname, 'src/utils/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
    }),
  ],
})
