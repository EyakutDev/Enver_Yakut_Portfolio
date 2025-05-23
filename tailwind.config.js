module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00bfff",
        secondary: "#121212",
        accent: "#38b6ff",
        dark: {
          100: "#000000",
          200: "#0a0a0a",
          300: "#121212",
        },
        light: {
          100: "#ffffff",
          200: "#f0f0f0",
          300: "#e0e0e0",
        },
        code: {
          js: "#f7df1e",
          py: "#3776ab",
          dart: "#0175C2",
          flutter: "#02569B",
          firebase: "#FFCA28",
          node: "#68A063",
        }
      },
    },
  },
  plugins: [],
} 