module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:flowtype/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['prettier', 'flowtype'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,

    'no-unused-expressions': 0,
    semi: 0,
    'consistent-return': 0, //no need when update state
    'import/no-cycle': 0, //import type from parent
    'no-use-before-define': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'jsx-a11y/click-events-have-key-events': 0,
    'prettier/prettier': ['error'],
  },
}
