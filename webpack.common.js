const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: [
    "babel-polyfill",
    "./assets/src/js/global-navigation/index.jsx",
    "./assets/src/js/lightbox/index.jsx",
    "./assets/src/scss/main.scss"
  ],
  output: {
    path: path.join(__dirname, "./assets/dist/js"),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              "transform-class-properties",
              "transform-es2015-classes",
              "transform-object-rest-spread",
              "transform-async-to-generator"
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: "css-loader", options: { minimize: true } },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                config: {
                  path: "./postcss.config.js"
                },
                plugins: loader => [require("autoprefixer")()]
              }
            },
            "sass-loader"
          ]
        })
      },
      {
        test: /\.(png|jpg|svg|gif|mp3|mp4|ttf|eot|woff)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./assets/dist/media/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "./assets/dist/css/main.css",
      disable: false,
      allChunks: true
    })
  ]
};
