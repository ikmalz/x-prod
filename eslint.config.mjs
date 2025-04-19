// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals"),
  
  // Aturan khusus TypeScript
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // Ubah dari error ke warn
      "@typescript-eslint/no-unused-expressions": "off", // Nonaktifkan
      "@typescript-eslint/no-require-imports": "off", // Izinkan require()
    },
  },

  // Abaikan file tertentu
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "src/generated/**", // Abaikan file generasi Prisma
    ],
  },
];