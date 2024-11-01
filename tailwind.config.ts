import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gaultier: ['var(--font-gaultier)'],
      },
      fontWeight: {
        450: '450',
        500: '500',
        550: '550',
        650: '650',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(359.58deg, #FFFFFF 0.36%, #5AAFFF 99.64%)',
        'skai-button': `
          linear-gradient(89.95deg, #030537 -22.62%, #06097A 24.95%, #FA99A4 91.21%, #FEE5C2 113.65%, #FFFCE9 128.48%)
        `,
        'skay-open': `linear-gradient(180.18deg, #030537 2.64%, #06097A 21.81%, #FA99A4 66.41%, #FEE5C2 84.36%, #FFFCE9 94.71%)`
      },
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
        menu_input_focus: "#0c73fe",
        menu_white_17: "#FFFFFF17",
        white_15: "#FFFFFF26",
        blue_primary: "#5AAFFF",
        black_primary: "#202020",
        purple_primary: "#040674"
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
