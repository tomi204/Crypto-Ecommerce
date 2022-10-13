module.exports = function override(config, env) {
  config.plugins.push(
    new NodePolyfillPlugin({
      excludeAliases: ["console"],
    })
  );
  return config;
};
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  // Other rules...
  plugins: [new NodePolyfillPlugin()],
};
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  plugins: [new NodePolyfillPlugin()],
};
