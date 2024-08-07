module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'expo',
    'universe',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    node: {
      tryExtensions: ['.js', '.json', '.node', '.ts'],
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'unused-imports',
    'tailwindcss',
    'simple-import-sort',
    'prettier',
  ],
  ignorePatterns: ['***/node_modules/'],
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    quotes: ['error', 'single'],
    'prettier/prettier': 1,
  },
  overrides: [
    {
      files: './**/*.ts, ./**/*.tsx',
      extends: ['plugin:react/recommended'],
      plugins: ['react', '@typescript-eslint'],
      parserOptions: {
        project: './tsconfig.json',
      },
      env: {
        node: true,
      },
      rules: {
        'react/prop-types': 'off',
        'node/no-unsupported-features/es-syntax': [
          'error',
          { ignores: ['modules'] },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-types': 'off',
      },
    },
  ],
};
