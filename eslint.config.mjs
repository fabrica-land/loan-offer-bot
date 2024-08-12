import eslint from '@eslint/js'
import eslintPrettier from 'eslint-plugin-prettier/recommended'
import tsEslint from 'typescript-eslint'
import pluginImport from 'eslint-plugin-import'
import pluginNoOnlyTests from 'eslint-plugin-no-only-tests'
import pluginPreferArrow from 'eslint-plugin-prefer-arrow'
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import pluginUnusedImports from 'eslint-plugin-unused-imports'

export default [
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  eslintPrettier,
  {
    name: 'local',
    languageOptions: {
      ecmaVersion: 2022,
      parser: tsEslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      }
    },
    files: ['{src,test}/**/*.ts'],
    plugins: {
      'import': pluginImport,
      'no-only-tests': pluginNoOnlyTests,
      'prefer-arrow': pluginPreferArrow,
      'simple-import-sort': pluginSimpleImportSort,
      'unused-imports': pluginUnusedImports,
    },
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
      'import/no-relative-parent-imports': 'error',
      'prefer-arrow/prefer-arrow-functions': 'warn',
      semi: [2, 'never'],
      'simple-import-sort/exports': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^nestjs', '^@nestjs', '^@eropple/nestjs'],
            ['^\\u0000'],
            ['^@?\\w'],
            ['downstream/', 'entry/', 'facade/', 'support/', 'upstream/'],
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
  },
]
