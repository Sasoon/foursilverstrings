// tailwind.config.js
module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./paintings/**/*.md",
    "./_posts/*.html",
    "./*.html",
    "./*.markdown",
    "./*.md",
  ],
  theme: {
    extend: {
      colors: {
        "accent-black": "#000",
        "accent-yellow": "#fec824",
        "accent-grey": "#ededf1",
      },
      fontFamily: {
        robotoslab: ["Roboto Slab"],
        darkergrotesque: ["Darker Grotesque"],
      },
      plugins: [],
    },
  },
};
