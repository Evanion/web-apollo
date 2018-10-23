// const TsConfigPathsPlugin = require("awesome-typescript-loader");

// load the default config generator.
// const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");
const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");

// module.exports = (baseConfig, env) => {
//   const config = genDefaultConfig(baseConfig, env, config);
//   // Extend it as you need.
//   // For example, add typescript loader:
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     include: path.resolve(__dirname, "../src"),
//     loader: require.resolve("ts-loader")
//   });
//   config.resolve.extensions.push(".ts", ".tsx");
//   return config;
// };

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    // include: path.resolve(__dirname, "../src"),
    loader: require.resolve("ts-loader")
  });
  // config.plugins.push(new TsConfigPathsPlugin());
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
