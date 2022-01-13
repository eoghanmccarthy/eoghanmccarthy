const path = require("path");
const { merge } = require("webpack-merge");
const base = require("../../webpack.base.config.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(base, {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    assetModuleFilename: "assets/[hash][ext]",
  },
  devtool: "source-map",
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src/"),
      assets: path.resolve(__dirname, "assets/"),
      features: path.resolve(__dirname, "src/app/features/"),
      pages: path.resolve(__dirname, "src/pages/"),
      routes: path.resolve(__dirname, "src/routes/"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./src/index.html",
    }),
  ],
});
