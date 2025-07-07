import baseConfig from 'config/eslint.config.js';

export default [
  {
    ignores: ['dist/**/*', 'node_modules/**/*', '*.d.ts']
  },
  ...baseConfig,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Add any website-specific rules here
    }
  }
]; 