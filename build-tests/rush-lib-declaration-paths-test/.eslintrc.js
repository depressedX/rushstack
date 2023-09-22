// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('eslint-config-local/patch/modern-module-resolution');

module.exports = {
  extends: ['eslint-config-local/profile/node-trusted-tool', 'eslint-config-local/mixins/friendly-locals'],
  parserOptions: { tsconfigRootDir: __dirname },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // This project contains only unshipped generated TS code which doesn't contain the copyright header.
        'header/header': 'off'
      }
    }
  ]
};
