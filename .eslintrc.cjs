module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-import',
    'eslint-plugin-no-only-tests',
    'eslint-plugin-prefer-arrow',
    'simple-import-sort',
    'unused-imports',
  ],
  root: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      { ignoreParameters: true, ignoreProperties: true },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        vars: 'all',
        args: 'all',
        argsIgnorePattern: '(^type$|^returns$|^of$|^_)',
        varsIgnorePattern: '(^type$|^returns$|^of$|^_)',
      },
    ],
    'no-case-declarations': 'off',
    'no-console': 'warn',
    'no-only-tests/no-only-tests': 'error',
    'no-unused-vars': 'off',
    'prefer-arrow/prefer-arrow-functions': 'warn',
    semi: [2, 'never'],
    'simple-import-sort/exports': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^@?\\w'],
          ['^.'],
        ],
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    'unused-imports/no-unused-vars': 'off',
    'use-isnan': 'error',
    'unused-imports/no-unused-imports': 'error',
    'valid-typeof': 'error',
  },
}
