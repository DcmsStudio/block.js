module.exports = {
  root: true,
  env: { node: true },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    "semi": [2, "never"],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
