const webpack = require("webpack");
const { merge } = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
    chunkFilename: "[id].js",
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: ["...", new CssMinimizerPlugin()],
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      //https://webpack.js.org/plugins/split-chunks-plugin/#split-chunks-example-2
      //https://webpack.js.org/plugins/split-chunks-plugin/#split-chunks-example-3
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "./public" },
        {
          from: "data/config.json",
          to: "data/config",
          toType: "file",
        },
      ],
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
});
