module.exports = {
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
      maxHeight: {
        "screen-1/2": "50vh",
        "screen-3/4": "75vh",
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
