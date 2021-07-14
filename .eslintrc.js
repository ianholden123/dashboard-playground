module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'plugin:jest-dom/recommended',
    'plugin:jsx-a11y/recommended',
    'google',
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
    'react',
    '@typescript-eslint',
    'jest-dom',
    'jsx-a11y',
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
