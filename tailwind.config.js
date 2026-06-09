/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Grand River Advisory — ROYAL BLUE brand. Dark royal is the dominant
        // surface; vivid royal is the action colour. Mirrored as CSS vars in
        // globals.css.
        gra: {
          navy: '#0A1F5C', // dark royal — primary section background
          'navy-dark': '#061544', // deepest royal — hero base / footer
          panel: '#102A78', // lifted royal panel
          primary: '#2A4FE0', // royal blue — primary action
          'primary-dark': '#1E3CC4', // primary hover
          blue: '#5B7DF5', // bright royal accent — links, eyebrows, icons
          'blue-dark': '#3E5FE0', // accent hover
          sky: '#C7D6FB', // light periwinkle — secondary text on dark
          cloud: '#EAF0FC', // light tint surface (rare light areas)
          ink: '#0A1430', // dark text (light surfaces)
          slate: '#9AACD6', // muted blue-grey text on dark
        },
      },
      fontFamily: {
        sans: ['system-ui', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(3, 10, 40, 0.30), 0 10px 30px rgba(3, 10, 40, 0.35)',
        'card-hover':
          '0 8px 24px rgba(42, 79, 224, 0.25), 0 18px 50px rgba(3, 10, 40, 0.45)',
        glow: '0 0 0 1px rgba(91, 125, 245, 0.20), 0 10px 40px rgba(42, 79, 224, 0.25)',
      },
    },
  },
  plugins: [],
};
