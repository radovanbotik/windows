import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      order: {
        13: "13",
      },
      colors: {
        windows: {
          gray: "#BFB8BF",
          white: "#E4DFE6",
          blue: "#05167F",
        },
        "windows-border": {
          light: "#676767",
        },
        "windows-gray": {
          100: "#FEFEFE",
          200: "#C0C0C0",
          300: "#D9D9D9",
          400: "#808080",
          900: "#343434",
        },
        "windows-green": {
          light: "#008080",
        },
      },
      borderColor: {},
      boxShadow: {
        "top-left": "1px 1px 0px #5a5a5a,-1px -1px 0px #ffffff;",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("@headlessui/tailwindcss")],
};
export default config;
