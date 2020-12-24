module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["wotfard", "sans-serif"],
      serif: ["argesta", "serif"],
      headline: ["argesta-headline", "serif"],
    },
    extend: {
      width: {
        inherit: "inherit",
      },
      transitionTimingFunction: {
        "ease-in-out-back": "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
