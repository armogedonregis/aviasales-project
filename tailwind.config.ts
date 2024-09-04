import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          navbar: "rgba(17, 33, 56, 0.12)",
          calendar: "#eff1f4"
        }
      }
    },
  },
  plugins: [],
};
export default config;
