"use strict";

const path              = require("path");
const webpack           = require("webpack");
const autoprefixer      = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.resolve("./src"),
  entry: {
    vendor: [ "whatwg-fetch", "babel-polyfill" ],
    app: [ "webpack/hot/dev-server", "webpack-hot-middleware/client", "./index.jsx", "./index.html" ]
  },
  output: {
    path: path.resolve("./dist"),
    publicPath: "/",
    filename: "assets/[name].bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".less", ".html"]
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.jsx$/,
      include: path.join(__dirname, 'src/'),
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ["es2015", "stage-0", "react"],
            plugins: [
              "react-hot-loader/babel",
              ["transform-runtime", {
                "polyfill": false,
                "regenerator": true
              }]
            ]
          }
        }
      ]
    }, {
      test: /\.less$/,
      use: [
        'less-loader?sourceMap',
        {
          loader: 'postcss-loader?sourceMap',
          options: {
            plugins: function () {
              return [
                require('autoprefixer')
              ];
            }
          }
        },
        'css-loader?sourceMap',
        'style-loader'
      ]
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?sourceMap'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=100000'
    }, {
      test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'assets/vendor.js' }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};