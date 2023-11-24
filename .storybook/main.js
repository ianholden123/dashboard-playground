const process = require("process");

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "./stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(process.cwd() + "/node_modules");
    config.resolve.modules.push(process.cwd() + "/src");
    config.resolve.symlinks = false;
    return config;
  }
}