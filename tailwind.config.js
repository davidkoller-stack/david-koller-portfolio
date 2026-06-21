/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Shared visual tokens. Values live in globals.css so the palette has one source of truth.
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        acid: "rgb(var(--color-acid) / <alpha-value>)",
        fog: "rgb(var(--color-fog) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        display: ["Manrope", "Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 30px 80px rgba(17, 19, 15, 0.12)",
      },
    },
  },
  plugins: [],
};
