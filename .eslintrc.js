module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    es6: true,
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
    semi: 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'prettier/prettier': ['error'],
  },
}
