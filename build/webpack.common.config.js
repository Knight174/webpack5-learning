const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口文件
  entry: './src/index.js',
  // 输出文件
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    assetModuleFilename: 'assets/[name]_[hash][ext]',
    clean: true,
    // chunkFilename: '[name].[hash:8].chunk.js' // 配置chunk文件名
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
  ],
  // 性能优化
  // optimization: {
  //   // 同步代码分割
  //   splitChunks: {
  //     chunks: 'all', // 同步、异步都会分割
  //     minSize: 20000, // 如果模块大小小于这个值，则不会被分割 20kb
  //     minRemainingSize: 0, // 最小可保存大小，开发模式下为 0，其他情况下等于 minSize，一般不用手动配置
  //     minChunks: 2, // 如果模块被引用次数小于这个值，则不会被分割
  //     maxAsyncRequests: 30, // 异步模块，一次最多被加载的次数
  //     maxInitialRequests: 30, // 入口模块最多被加载的次数
  //     enforceSizeThreshold: 50000, // 强制分割的大小阈值 50kb
  //     cacheGroups: { // 缓存组
  //       // 打包第三方库
  //       defaultVendors: {
  //         test: /[\\/]node_modules[\\/]/, // 正则匹配第三方库文件
  //         priority: -10, // 优先级
  //         reuseExistingChunk: true, // 如果一个模块已经被打包过了，那么这个模块也不会被打包
  //         filename: 'vendors.[name].js' // 打包后的文件名
  //       },
  //       // 打包公共模块
  //       default: {
  //         minChunks: 2, // 被超过两个模块引用，才会被打包
  //         priority: -20, // 优先级
  //         reuseExistingChunk: true, // 如果一个模块已经被打包过了，那么这个模块也不会被打包
  //         filename: 'common.js' // 打包后的文件名
  //       },
  //     },
  //   },
  // }
};
