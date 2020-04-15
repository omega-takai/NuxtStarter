/**
 * kebab-lowerCase
 * https://regexper.com/#%5E%28%5Ba-z%5D%29%2B%28%5Ba-zA-Z0-9%5D%29*%28-%3F%5Ba-z%5D%2B%5Ba-zA-Z0-9%5D%29*%24
 */
const regexPattern = '^([a-z])+([a-zA-Z0-9])*(-?[a-z]+[a-zA-Z0-9])*$'

module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended',
  ],
  plugins: [],
  rules: {
    'scss/dollar-variable-pattern': regexPattern,
    'scss/at-function-pattern': regexPattern,
    'scss/at-mixin-pattern': regexPattern,
  },
  // stylelint ignores the node_modules directory by default.
  ignoreFiles: ['**/*.{js,ts}'],
}
