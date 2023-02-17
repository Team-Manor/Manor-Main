/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 50px rgba(23, 19, 194, 0.19)",
      },
    },
  },
  plugins: [],
};
