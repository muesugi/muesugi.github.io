const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: ['./src/scss/main.scss', './src/js/client.js']
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'js/[name].chunk.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.(mp3|pdf|jpg|png|svg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: 'assets/[hash].[ext]',
          },
        },
        include:  __dirname + '/src/assets',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
        sideEffects: true,
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: '../index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ]
};
