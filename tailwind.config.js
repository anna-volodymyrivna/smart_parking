/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryHead: "#6C0820",
        secondaryHead: "#F2AEBC",
        background: "#F2DCDB",
        primaryNav: "#3D5D91",
        secondaryNav: "#5A86CB",
        availableSpace: "#839958",
        occupiedSpace: "#930500",
      },
      spacing: {
        mobile: "393px",
      },
    },
  },
  plugins: [],
};