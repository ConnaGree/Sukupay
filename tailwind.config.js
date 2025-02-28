/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#94FC00",
        accent: "#FFF",
        bgPrimary: "#111112",
        bgSecondary: "#1D1E21",
        live: "#00EC09",
      },
      fontFamily: {
        mono: ["'IBM Plex Mono'", "monospace"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
