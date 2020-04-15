module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended',
  ],
  plugins: [],
  rules: {},
  // stylelint ignores the node_modules directory by default.
  ignoreFiles: ['**/*.{js,ts}'],
}
