import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        searchGlass: "url('public/inputGlass.png')",
      },
      colors: {
        eimsangColor: "#2D3D50",
        skyColor: "#CAE9FF",
      },
    },
  },
  plugins: [],
};
export default config;
