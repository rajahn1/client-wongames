import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        primary: "#F231A5",
        secondary: "#3CD3C1",
        mainBg: "#06092B",
        lightGray: "#EAEAEA",
        gray: "#8F8F8F",
        darkGray: "#2E2F42",
        white: "#FAFAFA",
        black: "#030517"
      },
      zIndex: {
        base: "10",
        menu: "20",
        overlay: "30",
        modal: "40",
        alwaysOnTop: "50"
      },
      spacing: {
        xxsmall: "0.8rem",
        xsmall: "1.6rem",
        small: "2.4rem",
        medium: "3.2rem",
        large: "4rem",
        xlarge: "4.8rem",
        xxlarge: "5.6rem"
      },
      fontSize: {
        xsmall: "1.2rem",
        small: "1.4rem",
        medium: "1.6rem",
        large: "1.8rem",
        xlarge: "2.0rem",
        xxlarge: "2.8rem"
      },
      fontWeight: {
        bold: "600"
      }
    }
  },
  plugins: []
};
export default config;
