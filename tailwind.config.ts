import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        head_bg: "#0c73fe",
        background: "var(--background)",
        foreground: "var(--foreground)",
        menu_hover: "hsla(0,0%,100%,0.08)",
        menu_hover_second: "hsla(0,0%,100%,0.12)",
        menu_icon_wrapper: "#eff1f4",
        menu_icon_color: "#9ea9b7",
        menu_item_hover: "rgba(76,84,97,0.04)",
        menu_nav_bg: "rgba(17,33,56,0.12)",
        menu_text_color: "hsla(0,0%,100%,0.72)",
        menu_orange: "#f25122",
        menu_input_focus: "#0c73fe"
      },
      boxShadow: {
        'focus-orange': '0 0 0 2px #f25122',
      },
      flex: {
        '2': '2 0 0'
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ['focus-within'],
    },
  },
  plugins: [],
};
export default config;
