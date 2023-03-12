const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV

if (!NODE_ENV) {
  console.error('NODE_ENV not set')
  process.exit(1)
}

const __DEV__ = NODE_ENV === 'development'

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    assetModuleFilename: 'assets/[hash][ext]',
    publicPath: '/',
    clean: true,
  },
  module: {
    unsafeCache: true,
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env'], ['@babel/preset-react']],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-transform-runtime'
              ],
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env', 'postcss-flexibility'],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg|gif|mp3|mp4|mov|ttf|eot|woff)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      __DEV__,
    }),
  ]
};