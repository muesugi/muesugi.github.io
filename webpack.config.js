var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: ['./src/scss/main.scss', './src/js/client.js']
  },
  output: {
    filename: 'client.min.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      },
      {
        test: /\.(pdf|jpg|png|svg|gif)$/i,
        use: {
          loader: "file-loader?name=assets/[name].[ext]"
        },
        include:  __dirname + '/src/assets'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        }),
      }
    ]
  },

    plugins: [
      new HTMLWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
      }),
      new ExtractTextPlugin({
        filename: 'style.css',
        disable: false,
        allChunks: true
      })],
      devServer: {
        public: 'a95f3509.ngrok.io' // That solved it
      }
};
