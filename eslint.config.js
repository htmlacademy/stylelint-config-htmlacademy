import node from 'eslint-config-htmlacademy/node';

export default [
  ...node,
  {
    rules: {
      'object-shorthand': 'off',
    },
  },
  {
    files: ['test/**/*.js'],
    rules: {
      camelcase: 'off',
    },
  },
];
