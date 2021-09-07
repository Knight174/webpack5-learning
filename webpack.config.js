const commonConfig = require('./build2/webpack.common.config.js')
const productionConfig = require('./build2/webpack.prod.config.js')
const developmentConfig = require('./build2/webpack.dev.config.js')
const { merge } = require('webpack-merge');


module.exports = (env) => {
  const isProduction = env && env.production
  const config = isProduction ? productionConfig : developmentConfig
  return merge(commonConfig, config)
}
