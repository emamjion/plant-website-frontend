/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    // container: {
    //   center: true,
    //   padding: '20px'
    // },
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
  //   screens: {
  //     sm: '640px',
  //     md: '768px',
  //     lg: '992px',
  //     xl: '1440px',
  // },
  },
  plugins: [],
};
