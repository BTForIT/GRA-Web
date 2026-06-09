/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Grand River Advisory — blue brand palette. Mirrored as CSS vars in
        // globals.css. Trustworthy professional-services blues.
        gra: {
          navy: '#0B3D6B', // primary / dark
          'navy-dark': '#082E52', // navy hover / deeper sections
          primary: '#1565A6', // primary action
          'primary-dark': '#0F4E80', // primary hover
          blue: '#2E8BC0', // accent
          'blue-dark': '#2473A3', // accent hover
          sky: '#EAF2F8', // light tint (chips, icon wells)
          cloud: '#F7FAFC', // page background
          ink: '#16202B', // body text
          slate: '#4A5C7A', // muted text
        },
      },
      fontFamily: {
        sans: ['system-ui', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11, 61, 107, 0.04), 0 8px 24px rgba(11, 61, 107, 0.06)',
        'card-hover': '0 4px 8px rgba(11, 61, 107, 0.08), 0 16px 40px rgba(11, 61, 107, 0.12)',
      },
    },
  },
  plugins: [],
};
