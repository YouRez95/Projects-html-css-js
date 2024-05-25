/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        adineu: ["adineue PRO"],
        adihaus: ["AdihausDIN"],
        adihausBD: ["AdiHaus"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "960px",
      lg: "1200px",
      xl: "1700px"
    }
  },
  plugins: [],
}
