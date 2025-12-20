/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            lineHeight: "1.75",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
