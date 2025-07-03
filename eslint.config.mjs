import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    languageOptions: {
      globals: globals.browser,
    },
    extends: ["js/recommended"],
    rules: {
      "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 0 }],
      //"semi": ["error", "always"]
    },
  },
]);
