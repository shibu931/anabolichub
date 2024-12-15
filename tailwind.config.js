/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["fantasy"],
  },
  plugins: [require('daisyui'), require("tailwindcss-animate"), function ({ addUtilities }) {
    addUtilities({
      '.text-shadow-sm': {
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
      },
      '.text-shadow-md': {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.35)',
      },
      '.text-shadow-lg': {
        textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
      },
      '.text-shadow-none': {
        textShadow: 'none',
      },
    });
  },],
};
