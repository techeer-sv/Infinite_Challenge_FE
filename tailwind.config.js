/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: [
          "8px",
          {
            lineHeight: "10px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        sm: [
          "10px",
          {
            lineHeight: "8px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        base: [
          "16px",
          {
            lineHeight: "20px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        xl: [
          "34px",
          {
            fontSize: "34px",
            lineHeight: "52px",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
      },
      colors: {
        primary: "#007BE9",
        secondary: "#CAE9FF",
        lightGray: "#EEF0F2",
        silver: "#BBBBBB",
        gray: "#90959A",
        blueGray: "#506A89",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--color-primary": theme("colors.primary"),
          "--color-silver": theme("colors.silver"),
        },
      });
    },
  ],
};
