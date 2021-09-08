const commonConfig = require('./webpack.common.config');

const prodConfig = {
  mode: 'production',
  devtool: 'nosources-source-map'
};

module.exports = prodConfig;