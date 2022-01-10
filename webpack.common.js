const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { NODE_ENV } = process.env;
const isDev = NODE_ENV === "development";

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    assetModuleFilename: "assets/[hash][ext]",
  },
  devtool: "source-map",
  resolve: {
    alias: {
      app: path.resolve(__dirname, "app/"),
      assets: path.resolve(__dirname, "app/assets/"),
      src: path.resolve(__dirname, "app/src/"),
      authentication: path.resolve(__dirname, "app/src/authentication/"),
      components: path.resolve(__dirname, "app/src/components/"),
      features: path.resolve(__dirname, "app/src/features/"),
      global: path.resolve(__dirname, "app/src/global/"),
      pages: path.resolve(__dirname, "app/src/pages/"),
      routes: path.resolve(__dirname, "app/src/routes/"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: [["@babel/preset-env"], ["@babel/preset-react"]],
              plugins: [
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-transform-runtime",
              ],
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env", "postcss-flexibility"],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|gif|mp3|mp4|mov|ttf|eot|woff)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./app/index.html",
    }),
  ],
};
