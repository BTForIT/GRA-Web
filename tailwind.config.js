/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // PLACEHOLDER brand palette — replace when the Grand River brand kit
        // lands (see brand-assets/README.md). Deliberately NOT ForIT navy
        // (#142F43): a client-facing site must never ship ForIT brand colours.
        brand: {
          DEFAULT: '#1f2a37',
          light: '#4b5a68',
          accent: '#6b8a9a',
          muted: '#e7edf1',
        },
      },
      fontFamily: {
        sans: ['system-ui', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
