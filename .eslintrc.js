module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "indent": ["off", 2],
    "trailingComma": 0,
    "comma-dangle": [0, "never"],
    "class-methods-use-this": "off",
    "quotes": [0, "single"],
    'arrow-parens': 'off',
    "semi": [0, "always"],
    "space-before-function-paren": [0, "always"],
    'max-len' : ["error", {code : 150}],
    "prefer-const ":0
  },
};
