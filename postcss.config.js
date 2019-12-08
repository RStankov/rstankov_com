const join = require('path').join;
const variables = join(__dirname, 'styles', 'variables');
const javascripts = join(__dirname, '.');

module.exports = {
  plugins: [
    require('postcss-import')({
      path: [javascripts],
    }),
    require('postcss-simple-vars')({
      variables: () => require(variables),
    }),
    require('postcss-color-function')(),
    require('math-calc'),
    require('postcss-custom-media')(),
    require('postcss-nested')(),
    require('postcss-media-minmax')(),
    require('autoprefixer')({
      browserlist: ['last 2 versions'],
      remove: false,
    }),
    require('postcss-reporter')(),
  ],
};
