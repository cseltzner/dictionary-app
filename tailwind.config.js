/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Chivo Mono", "monospace"],
    },
    extend: {
      colors: {
        primary: "#8550c8",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
