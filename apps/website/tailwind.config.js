import baseConfig from 'config/tailwind.config.js';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [baseConfig],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/shared/src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      ...baseConfig.theme?.extend,
      // Add any website-specific theme extensions here
    }
  }
} 