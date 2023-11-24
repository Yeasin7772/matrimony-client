const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        poppins: "'Roboto Slab', serif"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light",],
  },

});