/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f7f1e7",
        ink: "#211d19",
        muted: "#746b61",
        teak: "#176b68",
        brick: "#a8342f",
        gold: "#c99a2d",
        leaf: "#557a3c",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(33, 29, 25, 0.14)",
        card: "0 14px 34px rgba(33, 29, 25, 0.16)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
