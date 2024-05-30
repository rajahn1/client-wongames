import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "./theme.css";

const commonStyles = style({
  borderRadius: vars.border.radius
});

export const logoWrapperColors = styleVariants({
  white: [
    commonStyles,
    {
      color: vars.colors.white
    }
  ],
  black: [
    commonStyles,
    {
      color: vars.colors.black
    }
  ]
});

export const logoWrapperSizes = styleVariants({
  large: {
    width: "20rem",
    height: "5.9rem"
  },
  normal: {
    width: "11rem",
    height: "3.3rem"
  }
});

export const logoWrapperHideOnMobile = style({
  "@media": {
    "screen and (max-width: 768px)": {
      width: "5.8rem",
      height: "4.5rem"
    }
  }
});

export const logoSvgHideOnMobile = style({
  "@media": {
    "screen and (max-width: 768px)": {
      height: "4.5rem",
      pointerEvents: "none"
    }
  }
});

globalStyle(`${logoSvgHideOnMobile} .logoText`, {
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none"
    }
  }
});
