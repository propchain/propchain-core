const path = require('path');

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended', 'prettier'],
  plugins: ['babel', 'import', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    // airbnb disabled rules
    'no-unused-vars': ['error', { varsIgnorePattern: '[iI]gnored' }],
    'no-underscore-dangle': ['off'],
    'arrow-body-style': ['off'],
    strict: 'off',
    'lines-between-class-members': 'off',

    // only allowed in development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // reducing complexity
    // see https://wecodetheweb.com/2016/11/05/improving-code-quality-using-eslint/
    complexity: [2, 5],
    // 'max-statements': [2, 9],
    'max-statements-per-line': [2, { max: 1 }],
    'max-nested-callbacks': [2, 3],
    'max-depth': [2, { max: 3 }],

    'prettier/prettier': ['error'], // run prettier during --fix fase
  },
  settings: {
    'import/resolver': {
      node: true,
      alias: {
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
