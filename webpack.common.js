const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/js/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'todo list',
      filename: '[name].html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'how it works',
      filename:  '[name].html',
      template: './src/hiwp.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};