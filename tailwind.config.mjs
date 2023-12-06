/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        grid: "url('svg/bg-grid.svg')",
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
          50: "#faf5ff",
          100: "#f4e8ff",
          200: "#ebd5ff",
          300: "#dbb4fe",
          400: "#c384fc",
          500: "#aa55f7",
          600: "#9333ea",
          700: "#7c22ce",
          800: "#6821a8",
          900: "#541c87",
          950: "#380764",
        },
      },
      fontFamily: {
        heading: ["Gabarito", "sans-serif"],
        body: ['"IBM Plex Sans"', "sans-serif"],
      },
      fontSize: {
        "10xl": "9rem",
        "11xl": "10rem",
        "12xl": "11rem",
        "13xl": "12rem",
        "14xl": "13rem",
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
