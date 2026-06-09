/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Grand River Aviation Advisory — Institutional Monogram brand.
        // Midnight Navy is the dominant surface; Silver/Pearl are the accent
        // and text tones. Mirrored as CSS vars in globals.css. Legacy token
        // names (primary/blue/sky/slate/cloud) are retained as ALIASES that now
        // resolve to the navy/silver/pearl palette, so existing component
        // classes render on-brand without per-class churn.
        gra: {
          navy: '#0A1A2F', // Midnight Navy — primary section background
          'navy-dark': '#06121F', // deepest navy — hero base / footer
          panel: '#11243A', // lifted navy panel
          silver: '#A7A9AC', // Silver — accents, icons, dividers
          'silver-dark': '#7C7F84', // deeper silver — hover
          pearl: '#E6E8EB', // Pearl — light text / soft surfaces
          ink: '#0A1A2F', // dark text on light surfaces
          // legacy aliases → institutional palette
          primary: '#A7A9AC', // (was royal action) → silver; CTAs use pearl/white
          'primary-dark': '#7C7F84',
          blue: '#A7A9AC', // accent text/eyebrows/icons → silver
          'blue-dark': '#7C7F84',
          sky: '#E6E8EB', // secondary text on dark → pearl
          cloud: '#E6E8EB', // soft light surface → pearl
          slate: '#A7A9AC', // muted text → silver
        },
      },
      fontFamily: {
        sans: ['system-ui', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(6, 18, 31, 0.40), 0 10px 30px rgba(6, 18, 31, 0.45)',
        'card-hover':
          '0 8px 24px rgba(10, 26, 47, 0.45), 0 18px 50px rgba(6, 18, 31, 0.55)',
        glow: '0 0 0 1px rgba(167, 169, 172, 0.18), 0 10px 40px rgba(10, 26, 47, 0.35)',
      },
    },
  },
  plugins: [],
};
