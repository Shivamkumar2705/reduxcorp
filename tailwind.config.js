/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' (not what you want)
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      animation: {
        float1: "float1 6s ease-in-out infinite",
        float2: "float2 8s ease-in-out infinite",
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    }
  },
};

