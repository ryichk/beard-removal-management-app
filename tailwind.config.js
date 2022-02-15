module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['dracula'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
