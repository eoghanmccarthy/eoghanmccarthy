const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    publicPath: "./src",
    contentBase: path.resolve(__dirname, "assets/"),
    watchContentBase: true,
    historyApiFallback: true,
    port: 9000
  }
  // plugins: [
  //   new CircularDependencyPlugin({
  //     exclude: /a\.js|node_modules/,
  //     failOnError: true,
  //     cwd: process.cwd()
  //   })
  // ]
});
