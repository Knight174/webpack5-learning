// 代码检查
module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
  },
  parser: '@babel/eslint-parser',
  // 数组顺序很重要
  extends: ['eslint:recommended', 'airbnb', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
}
