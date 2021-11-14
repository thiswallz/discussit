const path = require('path'); 
const custom = require('../node_modules/@vue/cli-service/webpack.config.js');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    return { ...config, module: { ...config.module, rules:     custom.module.rules } };
  }
}