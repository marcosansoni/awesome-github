/**
 * @type {import("@types/eslint").Linter.BaseConfig}
 */
module.exports = {
  // parser: "@typescript-eslint/parser",
  // plugins: ["sort-destructure-keys", "@typescript-eslint"],
  // extends: [
  //   "@remix-run/eslint-config",
  //   "@remix-run/eslint-config/node",
  //   "@remix-run/eslint-config/jest-testing-library",
  //   "prettier",
  //   "plugin:storybook/recommended",
  //   "eslint:recommended",
  //   "plugin:react/recommended",
  //   "plugin:react/jsx-runtime",
  //   "plugin:import/recommended",
  //   "plugin:@typescript-eslint/recommended",
  // ],
  // parserOptions: {
  //   tsconfigRootDir: __dirname,
  //   project: "./tsconfig.json",
  // },
  // extends: [
  //   "eslint-config-kentcdodds",
  //   "eslint-config-kentcdodds/jest",
  //   "eslint-config-kentcdodds/jsx-a11y",
  //   "eslint-config-kentcdodds/react",
  // ],
  // rules: {
  //   "sort-destructure-keys/sort-destructure-keys": 2,
  //   "no-unused-vars": "off",
  //   "@typescript-eslint/no-unused-vars": "error",
  //   "@typescript-eslint/rule-name": "error",
  // },
  extends: "kentcdodds",
  // we're using vitest which has a very similar API to jest
  // (so the linting plugins work nicely), but it we have to explicitly
  // set the jest version.
  settings: {
    jest: {
      version: 27,
    },
  },
};
