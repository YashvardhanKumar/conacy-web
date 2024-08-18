/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   "web-color": "#4A67CB",
      //   "web-color-2": "#7b94eb",
      // },
      colors: {
        "web-color": "#fff",
        "web-color-2": "#000",
      },
      screens: {
        _390: "400px",
        xs: "320px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "size-200": "200%",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      fontFamily: {
        potta_one: ["Potta One", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
