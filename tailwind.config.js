/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "blog_1.html", "blog_2.html", "blog_3.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: { primary: "#f59e0b", secondary: "#475569", dark: "#0f172a" },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
