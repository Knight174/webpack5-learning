const path = require('path');
const webpack = require('webpack');

const devConfig = {
  // 模式
  mode: 'development',
  // 性能优化 (tree shaking)
  optimization: {
    usedExports: true
  },
  // source-map
  devtool: 'eval-cheap-module-source-map',
  // 开发服务器
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 8080,
    open: true,
    hot: true, // 代码变化后，自动刷新页面
    proxy: {
      '/api': {
        target: 'https://res.abeim.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 将 /api 替换为空
        }
      }
    }
  },
  // 插件
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = devConfig;