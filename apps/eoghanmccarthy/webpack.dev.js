const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CircularDependencyPlugin = require("circular-dependency-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[id].js",
  },
  devServer: {
    static: "./dist",
    historyApiFallback: true,
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: true,
      cwd: process.cwd(),
    }),
  ],
});
