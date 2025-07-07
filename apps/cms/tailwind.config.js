import baseConfig from 'config/tailwind.config.js';

/** @type {import('tailwindcss').Config} */
export default {
  ...baseConfig,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/shared/src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      ...baseConfig.theme?.extend,
      // Add any CMS-specific theme extensions here
    }
  },
  plugins: [],
};
