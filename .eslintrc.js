module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react-hooks/exhaustive-deps': 'off',
        'react-native/no-inline-styles': 'off',
      },
    },
  ],
};
