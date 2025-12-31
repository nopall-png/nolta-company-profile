import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#012C61",
        secondary: "#DF1026",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        container: "1308px",
      },
    },
  },
  plugins: [],
}

export default config
