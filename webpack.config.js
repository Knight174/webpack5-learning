const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  externals: ['lodash'], // 忽略 lodash 的打包 (该选项常用于库的开发)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    clean: true,
    library: {
      name: 'library', // library name
      type: 'umd', // umd, var, this, commonjs, commonjs2, amd, system
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};