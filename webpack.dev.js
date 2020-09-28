const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  output: {
    // regular creates main.js file
    // filename: 'main.js',  (without Multi EntryPoints)
    filename: '[name].bundle.js', //name comes from entry point
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        // test: /\.css$/,
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings to inject css into DOM
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
});
