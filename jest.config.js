module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  testMatch: [
    "**/__tests__/*.{j,t}s?(x)",
    "**/src/**/*.spec.[jt]s?(x)",
    "**/tests/**/*.spec.[jt]s?(x)"
  ]
}
