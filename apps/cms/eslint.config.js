import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import baseConfig from 'config/eslint.config.js';

export default [
  ...baseConfig,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Add any CMS-specific rules here
    }
  }
];
