module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  globals: {
    'L': true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-default-export': 'off',
    'arrow-parens': ["error", "as-needed"],
    'no-mixed-operators': "off",
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-unused-expressions': ["error", { "allowShortCircuit": true }],
    // maximum line length
    'max-len': [1, {
      code: 80,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],
    'no-return-await': 'off',
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'ignore',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
