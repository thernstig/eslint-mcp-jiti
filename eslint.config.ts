import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import { importX } from "eslint-plugin-import-x";
import { configs as nextConfig } from "@next/eslint-plugin-next";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    extends: [js.configs.recommended],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "import-x": importX,
    },
    extends: ["import-x/flat/recommended"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    extends: [nextConfig["core-web-vitals"]],
  },
]);
