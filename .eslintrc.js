module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'cypress/globals': true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'prettier', 'prettier/vue', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: ['prettier', 'cypress'],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn'
  }
}
