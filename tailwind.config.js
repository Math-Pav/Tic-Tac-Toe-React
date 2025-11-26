/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      washa: ['Washa', 'sans-serif'],
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#36CDCA",
          hover: "#2ebebc",
          shadow: "#21a2a1",
        },
        secondary: {
          DEFAULT: "#F6BC47",
          hover: "#e1a52d",
          shadow: "#CE8E14"
        },
        grey: {
          light: {
            DEFAULT: "#B6CAD3",
            hover: "#9fb1b9",
            shadow: "#7D9AA7"
          },
          medium: {
            DEFAULT: "#284551",
            shadow: "#132C36",
          },
          dark: {
            DEFAULT: "#203741"
          }
        },
        error: {
          light: "#ff7e7e",
          DEFAULT: "#ff5655",
          shadow: "#cc3b3a"
        }
      },

      boxShadow: {
        buttonPrimary: '0px 4px 0px 0px #21a2a1',
        buttonSecondary: '0px 4px 0px 0px #CE8E14',
        buttonGreyLight: '0px 4px 0px 0px #7D9AA7',
        buttonGrey: '0px 4px 0px 0px #132C36',
        inputError: '0px 4px 0px 0px #cc3b3a',
        cellGreyShadow: '0px 7px 0px 0px #132C36'
      },

      keyframes: {
        popOut: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.25)", opacity: ".8" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        softPulse: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
          "100%": { transform: "scale(1)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8) rotate(10deg)" },
          "100%": { opacity: "0", transform: "scale(0) rotate(20deg)" },
        },
      },

      animation: {
        popOut: "popOut .4s ease-out forwards",
        fadeInUp: "fadeInUp .35s ease-out",
        softPulse: "softPulse 1.5s ease-in-out infinite",
        "fade-out": "fade-out 0.5s ease-out forwards",
      },
    },
  },

  plugins: [],
};