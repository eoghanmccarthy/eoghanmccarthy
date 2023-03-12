const CircularDependencyPlugin = require('circular-dependency-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  devtool: "source-map",
  devServer: {
    static: './dist',
    historyApiFallback: true,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: true,
      cwd: process.cwd(),
    }),
    new MiniCssExtractPlugin(),
  ]
};