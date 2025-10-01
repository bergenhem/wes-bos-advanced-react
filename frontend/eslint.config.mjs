import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import { jsx } from "react/jsx-runtime";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      react: pluginReact,
      jsx: jsx
    },
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginReact.configs.flat.recommended,
  jsx.configs.recommended,
]);
