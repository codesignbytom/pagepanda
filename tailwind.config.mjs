/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        grid: "url('/bg-grid.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#fffeea",
          100: "#fffac5",
          200: "#fff685",
          300: "#ffea46",
          400: "#ffdb1b",
          500: "#ffbb00",
          600: "#e29000",
          700: "#bb6502",
          800: "#984e08",
          900: "#7c400b",
          950: "#482100",
        },
        secondary: {
          50: "#f7f2ff",
          100: "#efe8ff",
          200: "#e1d4ff",
          300: "#ccb1ff",
          400: "#b485ff",
          500: "#9747ff",
          600: "#9330f7",
          700: "#851ee3",
          800: "#6f18bf",
          900: "#5b169c",
          950: "#390b6a",
        },
      },
      fontFamily: {
        heading: ["Gabarito", "sans-serif"],
        body: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "90%",
          maxWidth: "90rem",
          margin: "0 auto",
        },
      });
    },
  ],
};
