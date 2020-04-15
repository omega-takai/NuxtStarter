/**
 * kebab-case
 * https://regexper.com/#%5E%5Ba-z%5D%2B%28%5Ba-z0-9-%5D%2B%5Ba-z0-9%5D%2B%29%3F%24
 */
const patternKebab = '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$'

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
    'scss/dollar-variable-pattern': patternKebab,
    'scss/percent-placeholder-pattern': patternKebab,
    'scss/at-function-pattern': patternKebab,
    'scss/at-mixin-pattern': patternKebab,
  },
  // stylelint ignores the node_modules directory by default.
  ignoreFiles: ['**/*.{js,ts}'],
}
