module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}", "./components/**/*.{ts,tsx,jsx,js}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      gray: {
        120: "#44444B",
        110: "#61616B",
        100: "#70707B",
        80: "#9B9BA4",
        60: "#BFBFC4",
        20: "#EDEDEE",
        10: "#F6F6F7",
      },
      blue: {
        120: "#3B6986",
        100: "#457B9D",
        80: "#5590B4",
        60: "#71A2C1",
        40: "#8EB5CD",
      },
      green: {
        100: "#97D981",
        80: "#B1E3A1",
        60: "#B1E3A1",
      },
      red: {
        100: "#DA1B2B",
        80: "#E63746",
        60: "#EB5C68",
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Work Sans", "serif"],
    },
    keyframes: {
      "bounce-left-right": {
        "0%": { transform: "translateX(0px)" },
        "100%": { transform: "translateX(1.5rem)" },
      },
      "bounce-right-left": {
        "0%": { transform: "translateX(1.5rem)" },
        "100%": { transform: "translateX(0px)" },
      },
    },
  },
  plugins: [],
};
