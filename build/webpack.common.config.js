const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
  // 入口文件
  entry: './src/index.ts',
  // 输出文件
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    assetModuleFilename: 'assets/[name]_[hash][ext]',
    clean: true,
  },
  resolve: { // 解析
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"], // note if using webpack 1 you'd also need a '' in the array as well
    alias: {
      '@': path.resolve(__dirname, 'src') // 这里表示src文件夹下的js文件，也可以写成'@/src'
    },
  },
  // 模块
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        sideEffects: true
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: 'ts-loader'
        // use: [
        //   {
        //     loader: 'ts-loader',
        //     options: {
        //       transpileOnly: true, // 只转换，不编译
        //     },
        //   },
        // ],
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