module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ["dist", "build", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname
  },
  rules: {
    "import/prefer-default-export": "off",
    "prettier/prettier": "error",
    "no-restricted-imports": [
      "error",
      {
        "patterns": ["@mui/*/*/*"]
      }
    ],
    "@typescript-eslint/ban-ts-comment": "off",
    "react/react-in-jsx-scope": "off",
  }
}
