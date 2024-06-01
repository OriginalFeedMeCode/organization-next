/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"],
  },
};
