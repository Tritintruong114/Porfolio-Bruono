/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#0a0a0a",
      mahogany: {
        50: "#fff3ec",
        100: "#ffe3d3",
        200: "#ffc4a6",
        300: "#ff9a6d",
        400: "#ff6532",
        500: "#ff3c0a",
        600: "#f61f00",
        700: "#cc1102",
        800: "#a10f0b",
        900: "#82100c",
        950: "#5c0505",
      },
      persian: {
        50: "#fdf3f3",
        100: "#fce4e4",
        200: "#facece",
        300: "#f5acac",
        400: "#ed7c7c",
        500: "#e15252",
        600: "#c43131",
        700: "#ac2929",
        800: "#8e2626",
        900: "#772525",
        950: "#400f0f",
      },
    },
  },
  plugins: [],
};
