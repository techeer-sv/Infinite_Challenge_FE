/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
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
    },
    colors: {
      primary: "#007BE9",
      lightGray: "#EEF0F2",
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--color-primary": theme("colors.primary"),
        },
      });
    },
  ],
};
