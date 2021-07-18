module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'cypress/globals': true,
  },
  'extends': [
    'google',
    'plugin:cypress/recommended',
    'plugin:jest-dom/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
  ],
  'ignorePatterns': [
    'src/components/icons/svg/*.tsx',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
    'cypress',
    'jest-dom',
    'jsx-a11y',
    'react',
  ],
  'rules': {
    'max-len': ['warn', {
      'code': 100,
    }],
    'object-curly-spacing': ['error', 'always'],
    'require-jsdoc': ['off'],
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
};
