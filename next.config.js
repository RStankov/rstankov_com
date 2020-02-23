const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const withSourceMaps = require('@zeit/next-source-maps');

module.exports = {
  ...withSourceMaps({
    webpack(config, options) {
      // NOTE(rstankov): Suppresses `Conflicting order between` css styles
      // More info: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250
      config.plugins.push(
        new FilterWarningsPlugin({
          exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
        }),
      );

      return config;
    },
  }),

  useFileSystemPublicRoutes: true,
};
