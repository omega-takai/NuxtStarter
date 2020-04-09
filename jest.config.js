module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<srcDir>/$1',
    '^~/(.*)$': '<srcDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<srcDir>/components/**/*.vue',
    '<srcDir>/pages/**/*.vue'
  ]
}
