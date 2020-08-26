module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
  },
  extends: [
    'react-app',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['react-hooks', 'jsx-a11y', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/ban-ts-comment': 0,
  },
}
