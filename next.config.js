const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
      cssModules: true,
      cssLoaderOptions: {
        camelCase: true,
        namedExport: true,
        localIdentName: '[local]_[hash:base64:5]',
      },
      webpack(config, options) {
        if (!options.isServer) {
          for (let entry of options.defaultLoaders.css) {
            if (entry.loader === 'css-loader') {
              entry.loader = 'typings-for-css-modules-loader';
              break;
            }
          }
        }

        // NOTE(rstankov): Suppresses `Conflicting order between` css styles
        // More info: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250
        config.plugins.push(
          new FilterWarningsPlugin({
            exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
          }),
        );

        return config;
      },
    });
