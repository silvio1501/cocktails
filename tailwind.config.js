/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-light": "#9DC9F2",
        "blue-dark": "#7DA4C9",
        "orange-light": "#E69447",
        "orange-dark": "#C4640A",
      },
    },
  },
  plugins: [],
};
