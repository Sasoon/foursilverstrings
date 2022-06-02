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
    colors: {
      "accent-black": "#000",
      "accent-yellow": "#fec824",
      "accent-grey": "#ededf1",
    },
    fontFamily: {
      oswald: ["Oswald"],
      darkergrotesque: ["Darker Grotesque"],
      lato: ["Lato"],
    },
    plugins: [],
  },
};
