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
      lightGray: "#EEF0F2",
    },
  },
  plugins: [],
};
