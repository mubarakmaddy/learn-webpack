const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    //contentHash changes the name of the file as we change something in code
    //   i.e, called cache busting
    // filename: 'main.[contentHash].js',
    filename: '[name].bundle.[contentHash].js', //name comes from entry point
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    //used to extract css files
    new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
    // used to clean dist folder
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,
        collapseWhitespace: true
      }
    }),
  ],
  module: {
    rules: [
      {
        // test: /\.css$/,
        test: /\.s[ac]ss$/i,
        use: [
          // Extract CSS into files
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
});
