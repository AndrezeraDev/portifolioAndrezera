module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        keyframes: {
          typing: {
            "0%": {
              width: "0%",
              visibility: "hidden"
            },
            "100%": {
              width: "100%"
            }
          },
          blink: {
            "50%": {
              borderColor: "transparent"
            },
            "100%": {
              borderColor: "white"
            }
          }
        },
        animation: {
          typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
        }
      },
    },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
