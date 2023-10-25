module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  settings: {
    'import/resolver': {
      'babel-module': {},
      // Algumas incompatibilidades com o babel alias
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  plugins: ['react', 'react-native', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Dando erro de CF LF
    'linebreak-style': 'off',

    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],

    // Poder usar stylesheet na ordem que quiser
    'no-use-before-define': ['error', { variables: false }],

    // Componentes em react native podem ser nested
    'react/no-unstable-nested-components': 'off',

    // O que o prettier vai relatar
    'prettier/prettier': ['error'],

    // Não vamos ter tipos em styles
    'react/style-prop-object': 'off',

    // Não vamos ter tipos
    'react/prop-types': 'off',

    // Não vamos ter tipos
    'react/require-default-props': 'off',

    // 'import/extensions': 'off',
    'global-require': 'off',
  },
};
