// 代码检查
module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
  },
  // 数组顺序很重要
  extends: ['eslint:recommended', 'airbnb', 'prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
}
