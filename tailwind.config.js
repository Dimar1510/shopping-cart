/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: { max: "400px" },

      tablet: { max: "550px" },

      laptop: { max: "768px" },

      desktop: { max: "1000px" },
    },
    extend: {
      colors: {
        "body-clr": "var(--body-color)",
        "text-clr": "var(--text-color)",
        "accent-clr": "var(--accent-color)",
      },
      height: {
        headeroffset: "var(--header-offset)",
      },
      fontFamily: {
        body: "var(--body-font)",
        header: "var(--header-font)",
      },
      keyframes: {
        smoothScroll: {
          "0%": { transform: "translateY(-142px)" },
          "100%": { transform: "translateY(0px)" },
        },
        slidein: {
          "0%": {
            transform: "scaleX(0)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
      },
      animation: {
        smoothScroll: "smoothScroll 1s ease forwards",
        slidein: "slidein 0.2s linear",
      },
    },
  },
  plugins: [],
};
