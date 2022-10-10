module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {},
  // stylelint ignores the node_modules directory by default.
  ignoreFiles: ['**/*.{js,ts}', 'src/assets/the-new-css-reset.css'],
}
