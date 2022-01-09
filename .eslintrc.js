/*
  eslint: v7.32.0
  @typescript-eslint/eslint-plugin: v5.3.1
  @typescript-eslint/parser: v5.3.1
  eslint-config-airbnb: v19.0.0
  eslint-config-airbnb-typescript: v15.0.0
  eslint-config-next: 12.0.3
  prettier: v2.4.1
  eslint-config-prettier: v8.3.0
  eslint-plugin-prettier: v4.0.0

  eslint-config-next@12.0.3 does not support eslint@8 yet.
*/

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true, // automatically set parserOptions.ecmaVersion
    jest: true,
    worker: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    project: './tsconfig.json'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@next/next/core-web-vitals',
    'plugin:prettier/recommended'
  ],
  rules: {
    // js rules
    // ----------------------------------------------------------------------
    'class-methods-use-this': 'off',
    'no-console': 'off',
    'no-param-reassign': 'warn',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    radix: ['error', 'as-needed'],

    // typescript rules
    // ----------------------------------------------------------------------
    // override: airbnb-typescript -> airbnb
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: false }],
    // override: airbnb-typescript -> airbnb
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true }
    ],
    // override: @typescript-eslint/recommended-requiring-type-checking
    '@typescript-eslint/no-floating-promises': 'warn',
    // override: @typescript-eslint/recommended
    '@typescript-eslint/no-inferrable-types': [
      'error',
      { ignoreParameters: true }
    ],
    // override: airbnb-base. to handle `no-floating-promises` with `void`
    'no-void': ['error', { allowAsStatement: true }],

    // react rules
    // ----------------------------------------------------------------------
    'react/function-component-definition': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    'react/jsx-uses-react': 'off',
    // override: airbnd
    'react/require-default-props': 'off',
    // override: airbnd
    'react/jsx-props-no-spreading': 'off',

    // jsx-a11y rules
    // ----------------------------------------------------------------------
    // override: airbnb react-a11y -> jsx-a11y
    'jsx-a11y/anchor-is-valid': 'off',
    // override: airbnb react-a11y -> jsx-a11y
    'jsx-a11y/click-events-have-key-events': 'off',
    // override: airbnb react-a11y -> jsx-a11y
    'jsx-a11y/no-static-element-interactions': 'off',
    // override: airbnb react-a11y -> jsx-a11y
    'jsx-a11y/no-noninteractive-element-interactions': 'off'
  },
  ignorePatterns: ['.*', '*.config.{js,ts}', 'node_modules', 'build', 'dist']
};
