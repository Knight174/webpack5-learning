const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
  // 入口文件
  entry: './src/index.js',
  // 输出文件
  output: {
    path: path.resolve(__dirname, 'dist2'),
    filename: '[name].js',
    assetModuleFilename: 'assets/[name]_[hash][ext]',
    clean: true,
  },
  // 模块
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        sideEffects: true
      }
    ]
  },
  // 插件
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ]
};

module.exports = commonConfig;