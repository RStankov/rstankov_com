const join = require('path').join;
const variables = join(__dirname, 'styles', 'variables');
const javascripts = join(__dirname, '.');

module.exports = {
  plugins: {
    'postcss-import': {
      path: [javascripts],
    },
    'postcss-simple-vars': {
      variables: () => require(variables),
    },
    'postcss-color-function': {},
    'math-calc': {},
    'postcss-custom-media': {},
    'postcss-nested': {},
    'postcss-media-minmax': {},
    autoprefixer: {
      browserlist: ['last 2 versions'],
      remove: false,
    },
    'postcss-reporter': {},
  },
};
